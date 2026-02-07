import { useState, useMemo } from 'react';
import { pizzaOptions } from '../data/pizzaOptions';
import './PizzaBuilder.css';

const PizzaBuilder = () => {
    const [activeTab, setActiveTab] = useState('size_crust');

    // Selection State
    const [selectedSize, setSelectedSize] = useState(pizzaOptions.sizes[1]); // Default to Medium
    const [selectedCrust, setSelectedCrust] = useState(pizzaOptions.crusts[0]); // Default to Pan
    const [selectedSauce, setSelectedSauce] = useState(pizzaOptions.sauces[0]); // Default Matrix
    const [selectedCheese, setSelectedCheese] = useState(pizzaOptions.cheeses[0]); // Default Regular
    const [selectedMeats, setSelectedMeats] = useState([]);
    const [selectedVeggies, setSelectedVeggies] = useState([]);

    // Calculate Price using useMemo (derived state, not side effect)
    const totalPrice = useMemo(() => {
        let price = selectedSize.price + selectedCrust.price + selectedSauce.price + selectedCheese.price;

        selectedMeats.forEach(meatId => {
            const meat = pizzaOptions.meats.find(m => m.id === meatId);
            if (meat) price += meat.price;
        });

        selectedVeggies.forEach(vegId => {
            const veg = pizzaOptions.veggies.find(v => v.id === vegId);
            if (veg) price += veg.price;
        });

        return price;
    }, [selectedSize, selectedCrust, selectedSauce, selectedCheese, selectedMeats, selectedVeggies]);


    // Handlers
    const toggleMeat = (id) => {
        if (selectedMeats.includes(id)) {
            setSelectedMeats(selectedMeats.filter(m => m !== id));
        } else {
            setSelectedMeats([...selectedMeats, id]);
        }
    };

    const toggleVeggie = (id) => {
        if (selectedVeggies.includes(id)) {
            setSelectedVeggies(selectedVeggies.filter(v => v !== id));
        } else {
            setSelectedVeggies([...selectedVeggies, id]);
        }
    };

    const handleCheckout = () => {
        // Open Toast ordering system in new tab
        window.open('https://order.toasttab.com/online/mabes-pizza-110-e-water-st', '_blank');
    };

    return (
        <div className="pizza-builder-container">
            <div className="builder-header">
                <h1>Create Your Own Pizza</h1>
                <p>Craft your perfect pie, exactly how you like it.</p>
            </div>

            {/* Navigation Tabs */}
            <div className="builder-steps">
                <button
                    className={`step-btn ${activeTab === 'size_crust' ? 'active' : ''}`}
                    onClick={() => setActiveTab('size_crust')}
                >
                    Size & Crust
                </button>
                <button
                    className={`step-btn ${activeTab === 'cheese_sauce' ? 'active' : ''}`}
                    onClick={() => setActiveTab('cheese_sauce')}
                >
                    Cheese & Sauce
                </button>
                <button
                    className={`step-btn ${activeTab === 'toppings' ? 'active' : ''}`}
                    onClick={() => setActiveTab('toppings')}
                >
                    Toppings
                </button>
            </div>

            {/* Content Area */}
            <div className="builder-content">

                {activeTab === 'size_crust' && (
                    <div className="step-content">
                        <section className="option-group">
                            <h3>Select Size</h3>
                            <div className="options-grid">
                                {pizzaOptions.sizes.map(size => (
                                    <div
                                        key={size.id}
                                        className={`option-card ${selectedSize.id === size.id ? 'selected' : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        <div className="option-image">🍕</div>
                                        <span className="option-name">{size.name}</span>
                                        <span className="option-price">${size.price.toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="option-group">
                            <h3>Select Crust</h3>
                            <div className="options-grid">
                                {pizzaOptions.crusts.map(crust => (
                                    <div
                                        key={crust.id}
                                        className={`option-card ${selectedCrust.id === crust.id ? 'selected' : ''}`}
                                        onClick={() => setSelectedCrust(crust)}
                                    >
                                        <div className="option-image">🥖</div>
                                        <span className="option-name">{crust.name}</span>
                                        <span className="option-price">{crust.price > 0 ? `+$${crust.price.toFixed(2)}` : 'Included'}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                )}

                {activeTab === 'cheese_sauce' && (
                    <div className="step-content">
                        <section className="option-group">
                            <h3>Select Sauce</h3>
                            <div className="options-grid">
                                {pizzaOptions.sauces.map(sauce => (
                                    <div
                                        key={sauce.id}
                                        className={`option-card ${selectedSauce.id === sauce.id ? 'selected' : ''}`}
                                        onClick={() => setSelectedSauce(sauce)}
                                    >
                                        <div className="option-image">🍅</div>
                                        <span className="option-name">{sauce.name}</span>
                                        <span className="option-price">{sauce.price > 0 ? `+$${sauce.price.toFixed(2)}` : 'Included'}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="option-group">
                            <h3>Select Cheese</h3>
                            <div className="options-grid">
                                {pizzaOptions.cheeses.map(cheese => (
                                    <div
                                        key={cheese.id}
                                        className={`option-card ${selectedCheese.id === cheese.id ? 'selected' : ''}`}
                                        onClick={() => setSelectedCheese(cheese)}
                                    >
                                        <div className="option-image">🧀</div>
                                        <span className="option-name">{cheese.name}</span>
                                        <span className="option-price">{cheese.price > 0 ? `+$${cheese.price.toFixed(2)}` : 'Included'}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                )}

                {activeTab === 'toppings' && (
                    <div className="step-content">
                        <section className="option-group">
                            <h3>Select Meats</h3>
                            <div className="options-grid">
                                {pizzaOptions.meats.map(meat => (
                                    <div
                                        key={meat.id}
                                        className={`option-card ${selectedMeats.includes(meat.id) ? 'selected' : ''}`}
                                        onClick={() => toggleMeat(meat.id)}
                                    >
                                        <div className="option-image">🥩</div>
                                        <span className="option-name">{meat.name}</span>
                                        <span className="option-price">
                                            {selectedMeats.includes(meat.id) ? 'Selected' : `Add $${meat.price.toFixed(2)}`}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="option-group">
                            <h3>Select Veggies</h3>
                            <div className="options-grid">
                                {pizzaOptions.veggies.map(veg => (
                                    <div
                                        key={veg.id}
                                        className={`option-card ${selectedVeggies.includes(veg.id) ? 'selected' : ''}`}
                                        onClick={() => toggleVeggie(veg.id)}
                                    >
                                        <div className="option-image">🥦</div>
                                        <span className="option-name">{veg.name}</span>
                                        <span className="option-price">
                                            {selectedVeggies.includes(veg.id) ? 'Selected' : `Add $${veg.price.toFixed(2)}`}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                )}

            </div>

            {/* Bottom Bar for spacing */}
            <div style={{ height: '100px' }}></div>

            {/* Sticky Order Summary */}
            <div className="order-summary-bar">
                <div className="summary-details">
                    <span className="summary-total">${totalPrice.toFixed(2)}</span>
                    <span style={{ fontSize: '0.9rem', color: '#666' }}>
                        {selectedSize.name} {selectedCrust.name} with {selectedMeats.length + selectedVeggies.length} toppings
                    </span>
                </div>
                <button className="btn-add-order" onClick={handleCheckout}>
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default PizzaBuilder;
