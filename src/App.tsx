import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';

// Lazy loading all 6 distinct React pages as required by Step 6
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Login = lazy(() => import('./pages/Login').then(m => ({ default: m.Login })));

// Healthcare branded suspense loading indicator
function LoadingFallback() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 p-8">
      <div className="relative">
        <div className="w-14 h-14 rounded-2xl bg-emerald-600/10 flex items-center justify-center">
          <div className="w-8 h-8 border-3 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 animate-pulse">
        Loading Alam Homeo Healthcare...
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
