import { Link } from 'react-router-dom';
import './Menu.css';

const pizzas = [
    {
        name: "Mabe's Regular",
        description: "Our signature sausage, pepperoni, and cheese. A classic since the beginning.",
        price: "$16.00"
    },
    {
        name: "The Deluxe",
        description: "Sausage, pepperoni, onion, green pepper, mushroom, and cheese.",
        price: "$19.00"
    },
    {
        name: "Around the Garden",
        description: "Fresh veggies: Mushroom, green pepper, onion, black olive, tomato.",
        price: "$18.00"
    },
    {
        name: "Four Meat",
        description: "Carnivore's dream: Sausage, pepperoni, Canadian bacon, ground beef.",
        price: "$20.00"
    }
];

const Menu = () => {
    const handleAddToOrder = () => {
        window.open('https://order.toasttab.com/online/mabes-pizza-110-e-water-st', '_blank');
    };

    return (
        <section id="menu" className="menu-section">
            <div className="container">
                <div className="section-header">
                    <h2>Fan Favorites</h2>
                    <p>Hand-crafted, square-cut, and made with love.</p>
                </div>

                <div className="menu-grid">
                    {/* Featured Item - Large Card */}
                    <div className="menu-image-card">
                        <img src="/assets/real_pizza.jpeg" alt="Square Cut Pizza" className="featured-image" />
                        <div className="image-caption">
                            <span>The Famous Square Cut</span>
                        </div>
                    </div>

                    {pizzas.map((pizza, index) => (
                        <div key={index} className="menu-item">
                            <div className="menu-item-image">
                                <img src="/assets/real_pizza.jpeg" alt={pizza.name} />
                            </div>
                            <div className="menu-item-content">
                                <h3>{pizza.name}</h3>
                                <p className="menu-item-desc">{pizza.description}</p>
                                <div className="menu-item-header">
                                    <span className="price">{pizza.price}</span>
                                </div>
                                <button
                                    className="add-btn"
                                    onClick={handleAddToOrder}
                                >
                                    Add To Order
                                </button>
                            </div>
                        </div>
                    ))}

                </div>

                <div className="menu-cta-wrapper">
                    <Link to="/menu" className="btn btn-secondary">View Full Menu</Link>
                </div>
            </div>
        </section>
    );
};

export default Menu;

