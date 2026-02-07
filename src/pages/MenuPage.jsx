import { Link } from 'react-router-dom';
import { menuData } from '../data/menuData';
import '../components/Menu.css';
import './MenuPage.css';

const MenuPage = () => {
    const handleAddToOrder = () => {
        window.open('https://order.toasttab.com/online/mabes-pizza-110-e-water-st', '_blank');
    };

    // Convert menuData object to array for easier mapping
    const categories = [
        menuData.pizza,
        menuData.appetizers,
        menuData.burgersAndSandwiches,
        menuData.dinners,
        menuData.pastas,
        menuData.salads,
        menuData.chickenToGo,
        menuData.kidsAndSenior,
        menuData.beverages,
        menuData.beerAndWine,
    ];

    return (
        <div className="menu-page">
            <div className="container">
                <div className="menu-page-header">
                    <h1>Full Menu</h1>
                    <p>Dine In • Take Out • Delivery</p>
                </div>

                {/* Quick Links */}
                <div className="menu-quick-links">
                    <a href="#pizza" className="quick-link">Pizza</a>
                    <a href="#appetizers" className="quick-link">Appetizers</a>
                    <a href="#burgers" className="quick-link">Burgers</a>
                    <a href="#dinners" className="quick-link">Dinners</a>
                    <a href="#pastas" className="quick-link">Pastas</a>
                    <a href="#salads" className="quick-link">Salads</a>
                </div>

                {/* Action Buttons */}
                <div className="menu-actions">
                    <a
                        href="https://img1.wsimg.com/blobby/go/8c919503-a8dc-4061-a960-27001b6227b6/Mabes%20Menu%20on%20Placemat%202025%2010.13.25.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn pdf-btn"
                    >
                        📄 Download PDF Menu
                    </a>
                    <a
                        href="https://order.toasttab.com/online/mabes-pizza-110-e-water-st"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn order-btn"
                    >
                        🍕 Order Online (Toast)
                    </a>
                    <a
                        href="https://www.toasttab.com/mabes-pizza-110-e-water-st/giftcards"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn gift-btn"
                    >
                        🎁 Buy Gift Card
                    </a>
                </div>

                {/* Build Your Own CTA */}
                <div className="build-your-own-cta">
                    <h2>Create Your Own Masterpiece</h2>
                    <p>
                        Start from scratch and build the pizza of your dreams. Choose your crust, sauce, cheese, and unlimited toppings.
                    </p>
                    <Link to="/menu/build" className="build-cta-btn">
                        Start Building
                    </Link>
                </div>

                {/* Half-Baked Info */}
                <div className="half-baked-info" id="half-baked">
                    <h2>{menuData.halfBaked.title}</h2>
                    <p>{menuData.halfBaked.description}</p>
                    <ol className="half-baked-instructions">
                        {menuData.halfBaked.instructions.map((instruction, idx) => (
                            <li key={idx}>{instruction}</li>
                        ))}
                    </ol>
                </div>

                {/* Menu Categories */}
                {categories.map((category, idx) => (
                    <div
                        key={idx}
                        className="menu-category"
                        id={category.title.toLowerCase().replace(/[^a-z]/g, '')}
                    >
                        <h2>{category.title}</h2>
                        <p className="category-description">{category.description}</p>

                        {category.sideNote && (
                            <p className="side-note">📝 {category.sideNote}</p>
                        )}

                        {category.specialNote && (
                            <p className="special-note">⭐ {category.specialNote}</p>
                        )}

                        <div className="menu-list">
                            {category.items.map((item, itemIdx) => (
                                <div key={itemIdx} className="menu-list-item">
                                    <div className="menu-item-info">
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="menu-item-price">
                                        <span className="price">{item.price}</span>
                                        <button
                                            className="add-btn-small"
                                            onClick={handleAddToOrder}
                                            aria-label={`Add ${item.name} to order`}
                                        >
                                            Add
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Back to Top */}
                <div className="back-to-top">
                    <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                        ↑ Back to Top
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MenuPage;
