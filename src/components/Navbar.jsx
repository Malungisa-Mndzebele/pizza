import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    // Helper to check if link is active
    const isActive = (path) => location.pathname === path ? 'active' : '';

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Close mobile menu when navigating
    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container container">
                <div className="logo">
                    <Link to="/" onClick={closeMobileMenu}>
                        <img src="/assets/real_logo.png" alt="Mabe's Pizza" className="logo-img" />
                    </Link>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={mobileMenuOpen}
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                {/* Mobile Menu Overlay */}
                <div
                    className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
                    onClick={closeMobileMenu}
                ></div>

                {/* Navigation Links */}
                <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
                    <li><Link to="/menu" className={isActive('/menu')} onClick={closeMobileMenu}>Menu</Link></li>
                    <li><Link to="/about" className={isActive('/about')} onClick={closeMobileMenu}>About Us</Link></li>
                    <li><Link to="/party-room" className={isActive('/party-room')} onClick={closeMobileMenu}>Party Room</Link></li>
                    <li><Link to="/fun-page" className={isActive('/fun-page')} onClick={closeMobileMenu}>Fun Page</Link></li>
                    <li><Link to="/employment" className={isActive('/employment')} onClick={closeMobileMenu}>Employment</Link></li>
                    <li><a href="/#location" onClick={closeMobileMenu}>Location</a></li>
                    {/* Mobile-only CTA */}
                    <li className="mobile-cta">
                        <a href="https://order.toasttab.com/online/mabes-pizza-110-e-water-st" target="_blank" rel="noopener noreferrer" className="btn">Order Online</a>
                    </li>
                </ul>

                {/* Desktop CTA */}
                <div className="nav-cta desktop-only">
                    <a href="https://order.toasttab.com/online/mabes-pizza-110-e-water-st" target="_blank" rel="noopener noreferrer" className="btn">Order Online</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
