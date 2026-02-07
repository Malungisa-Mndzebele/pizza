import './FunPage.css';

const FunPage = () => {
    return (
        <div className="fun-page">
            <div className="container">
                <div className="fun-header">
                    <h1>Fun Page</h1>
                    <p>Games, activities, and fun for the whole family!</p>
                </div>

                <div className="fun-grid">
                    {/* Coloring Pages Section */}
                    <div className="fun-card">
                        <div className="fun-card-icon">🎨</div>
                        <h2>Coloring Pages</h2>
                        <p>Download and print our Mabe's Pizza coloring pages! Perfect for kids while waiting for your pizza.</p>
                        <a
                            href="https://img1.wsimg.com/blobby/go/8c919503-a8dc-4061-a960-27001b6227b6/downloads/MABE%27S%20COLORING%20GAME.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fun-btn"
                        >
                            Download Coloring Page
                        </a>
                    </div>

                    {/* Word Search Section */}
                    <div className="fun-card">
                        <div className="fun-card-icon">🔍</div>
                        <h2>Word Search</h2>
                        <p>Can you find all the pizza toppings hidden in our word search puzzle?</p>
                        <a
                            href="https://img1.wsimg.com/blobby/go/8c919503-a8dc-4061-a960-27001b6227b6/downloads/MABE%27S%20WORD%20SEARCH.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fun-btn"
                        >
                            Download Word Search
                        </a>
                    </div>

                    {/* Pizza Facts Section */}
                    <div className="fun-card featured">
                        <div className="fun-card-icon">🍕</div>
                        <h2>Fun Pizza Facts</h2>
                        <ul className="pizza-facts">
                            <li>Americans eat approximately 100 acres of pizza each day!</li>
                            <li>The first pizzeria in America opened in New York City in 1905.</li>
                            <li>Mabe's has been making pizza since 1953 - that's over 70 years!</li>
                            <li>We serve over 100,000 pizzas every year!</li>
                            <li>Our famous square-cut pizza was invented by accident when a Luther College student asked Mabel to make "a pizza."</li>
                        </ul>
                    </div>

                    {/* Trivia Section */}
                    <div className="fun-card">
                        <div className="fun-card-icon">🧠</div>
                        <h2>Pizza Trivia</h2>
                        <div className="trivia-question">
                            <p><strong>Q: What year did Mabel White start the restaurant?</strong></p>
                            <p className="trivia-answer">A: 1953 - Originally called "Mabel's Lunchroom"!</p>
                        </div>
                        <div className="trivia-question">
                            <p><strong>Q: What makes Mabe's pizza unique?</strong></p>
                            <p className="trivia-answer">A: Our famous thin crust, square-cut style and made-from-scratch recipe!</p>
                        </div>
                    </div>

                    {/* Visit Us Section */}
                    <div className="fun-card cta-card">
                        <h2>Hungry Yet?</h2>
                        <p>Come visit us for the best pizza in Decorah!</p>
                        <div className="cta-buttons">
                            <a
                                href="https://order.toasttab.com/online/mabes-pizza-110-e-water-st"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="fun-btn primary"
                            >
                                Order Now
                            </a>
                            <a href="tel:563-382-4297" className="fun-btn secondary">
                                Call Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FunPage;
