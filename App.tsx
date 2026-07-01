import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Plans from './pages/Plans';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Athletes from './pages/Athletes';
import EbookLanding from './pages/EbookLanding';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import CookieBanner from './components/CookieBanner'; // Import CookieBanner
import './i18n';

// ScrollToTop component to handle scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Layout for standard pages with Navbar and Footer
function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col font-sans">
          <ScrollToTop />
          <Routes>
            {/* Landing Page (No Nav/Footer) */}
            <Route path="/ebook" element={<EbookLanding />} />
            
            {/* Standard Pages */}
            <Route path="/*" element={
              <MainLayout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/plans" element={<Plans />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/atletas" element={<Athletes />} />
                </Routes>
              </MainLayout>
            } />
          </Routes>
          <CookieBanner />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;