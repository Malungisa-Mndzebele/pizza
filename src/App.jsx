import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import PizzaBuilderPage from './pages/PizzaBuilderPage';
import AboutPage from './pages/AboutPage';
import PartyRoomPage from './pages/PartyRoomPage';
import FunPage from './pages/FunPage';
import EmploymentPage from './pages/EmploymentPage';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu/build" element={<PizzaBuilderPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/party-room" element={<PartyRoomPage />} />
          <Route path="/fun-page" element={<FunPage />} />
          <Route path="/employment" element={<EmploymentPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
