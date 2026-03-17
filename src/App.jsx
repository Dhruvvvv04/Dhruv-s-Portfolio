import { useEffect } from 'react';
import Lenis from 'lenis';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Resumes from './components/Resumes';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import Background3D from './components/Background3D';
import WorkDetailPage from './pages/WorkDetailPage';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Resumes />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/10 text-center relative z-10">
        <div className="container mx-auto px-4 sm:px-6 text-slate-500 text-sm font-inter">
          <p>(c) 2026 Dhruv Patel. UI/UX Designer, Graphics Designer, and Video Editor.</p>
        </div>
      </footer>
    </>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen selection:bg-primary/30 selection:text-primary transition-colors duration-500 overflow-x-hidden relative">
        <Background3D />
        <div className="relative z-10">
          <Cursor />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work/:slug" element={<WorkDetailPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

