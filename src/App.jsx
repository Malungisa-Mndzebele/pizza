import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Route-level code splitting: each page loads as its own chunk on demand.
const Home = lazy(() => import('./pages/Home'));
const MenuPage = lazy(() => import('./pages/MenuPage'));
const PizzaBuilderPage = lazy(() => import('./pages/PizzaBuilderPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PartyRoomPage = lazy(() => import('./pages/PartyRoomPage'));
const FunPage = lazy(() => import('./pages/FunPage'));
const EmploymentPage = lazy(() => import('./pages/EmploymentPage'));

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Suspense fallback={<div className="route-loading">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/menu/build" element={<PizzaBuilderPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/party-room" element={<PartyRoomPage />} />
            <Route path="/fun-page" element={<FunPage />} />
            <Route path="/employment" element={<EmploymentPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
