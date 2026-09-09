const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function crc32(buf) {
  let table = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    table[n] = c;
  }
  let crc = 0 ^ (-1);
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ (-1)) >>> 0;
}

function makeChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const body = Buffer.concat([typeBuf, data]);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([len, body, crcBuf]);
}

function createPng(width, height, isMaskable = false) {
  const header = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8); // 8 bit depth
  ihdr.writeUInt8(6, 9); // RGBA
  ihdr.writeUInt8(0, 10); // deflate
  ihdr.writeUInt8(0, 11); // filter
  ihdr.writeUInt8(0, 12); // interlace

  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  
  // Background and drawing:
  // Primary brand: #0A8F6A (10, 143, 106)
  // Accent/Health: #0369A1 (3, 105, 161)
  // Cross: white (255, 255, 255)
  const cx = width / 2;
  const cy = height / 2;
  const radius = isMaskable ? width * 0.46 : width * 0.44;
  const crossW = width * 0.16;
  const crossL = width * 0.46;

  for (let y = 0; y < height; y++) {
    const rowOffset = y * (stride + 1);
    raw[rowOffset] = 0; // Filter type 0 (None)
    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= radius) {
        // Background gradient from #0A8F6A to #0284C7
        const t = (x + y) / (width + height);
        let r = Math.round(10 * (1 - t) + 2 * t);
        let g = Math.round(143 * (1 - t) + 132 * t);
        let b = Math.round(106 * (1 - t) + 199 * t);
        let a = 255;

        // Check if inside medical cross
        const inHBar = Math.abs(dy) <= crossW / 2 && Math.abs(dx) <= crossL / 2;
        const inVBar = Math.abs(dx) <= crossW / 2 && Math.abs(dy) <= crossL / 2;
        
        if (inHBar || inVBar) {
          r = 255;
          g = 255;
          b = 255;
        }

        raw[pxOffset] = r;
        raw[pxOffset + 1] = g;
        raw[pxOffset + 2] = b;
        raw[pxOffset + 3] = a;
      } else {
        if (isMaskable) {
          // Fill maskable background safely with brand green
          raw[pxOffset] = 10;
          raw[pxOffset + 1] = 143;
          raw[pxOffset + 2] = 106;
          raw[pxOffset + 3] = 255;
        } else {
          // Transparent outside circle
          raw[pxOffset] = 0;
          raw[pxOffset + 1] = 0;
          raw[pxOffset + 2] = 0;
          raw[pxOffset + 3] = 0;
        }
      }
    }
  }

  const compressed = zlib.deflateSync(raw);
  return Buffer.concat([
    header,
    makeChunk('IHDR', ihdr),
    makeChunk('IDAT', compressed),
    makeChunk('IEND', Buffer.alloc(0))
  ]);
}

const iconsDir = path.resolve(__dirname, '../public/icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

fs.writeFileSync(path.join(iconsDir, 'icon-192.png'), createPng(192, 192, false));
fs.writeFileSync(path.join(iconsDir, 'icon-512.png'), createPng(512, 512, false));
fs.writeFileSync(path.join(iconsDir, 'icon-maskable-192.png'), createPng(192, 192, true));
fs.writeFileSync(path.join(iconsDir, 'icon-maskable-512.png'), createPng(512, 512, true));
fs.writeFileSync(path.join(iconsDir, 'apple-touch-icon.png'), createPng(180, 180, false));
fs.writeFileSync(path.join(iconsDir, 'favicon-32.png'), createPng(32, 32, false));

console.log('Icons generated successfully!');
