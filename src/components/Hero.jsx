import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    // Calculate years since 1953
    const yearsSince1953 = new Date().getFullYear() - 1953;

    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content container">
                {/* Anniversary Badge */}
                <div className="anniversary-badge">
                    <span className="badge-years">{yearsSince1953}</span>
                    <span className="badge-text">Years!</span>
                </div>

                <h1 className="hero-title">Welcome ~ Velkommen</h1>
                <p className="hero-subtitle">Decorah's Original Square Cut Pizza Since 1953</p>

                <div className="hero-hours">
                    <p>🕐 Open for Dine In, Take Out or Delivery</p>
                    <p><strong>Sun-Thu:</strong> 11am - 9pm | <strong>Fri-Sat:</strong> 11am - 10pm</p>
                </div>

                <div className="hero-buttons">
                    <a
                        href="https://order.toasttab.com/online/mabes-pizza-110-e-water-st"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-hero"
                    >
                        🍕 Order Online
                    </a>
                    <Link to="/menu" className="btn btn-hero-outline">View Menu</Link>
                </div>

                <div className="hero-quick-links">
                    <a
                        href="https://img1.wsimg.com/blobby/go/8c919503-a8dc-4061-a960-27001b6227b6/Mabes%20Menu%20on%20Placemat%202025%2010.13.25.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="quick-action"
                    >
                        📄 Download PDF Menu
                    </a>
                    <a
                        href="https://www.toasttab.com/mabes-pizza-110-e-water-st/giftcards"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="quick-action"
                    >
                        🎁 Buy Gift Card
                    </a>
                    <a href="tel:563-382-4297" className="quick-action">
                        📞 (563) 382-4297
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
