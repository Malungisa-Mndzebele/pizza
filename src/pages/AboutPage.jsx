import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="container">
                <div className="about-hero">
                    <h1>Our Story</h1>
                    <p>A Decorah tradition since 1953 • Over 70 Years of Pizza Excellence!</p>
                </div>

                {/* Mabel White Section */}
                <div className="about-section mabel-section">
                    <div className="about-image">
                        <img
                            src="/assets/mabel_white.jpg"
                            alt="Mabel White, founder of Mabe's Pizza"
                            onError={(e) => {
                                e.target.src = 'https://img1.wsimg.com/isteam/ip/8c919503-a8dc-4061-a960-27001b6227b6/a96eae63-ae4a-4f77-baa4-3db3c92bad0a.JPG';
                            }}
                        />
                        <p className="about-image-caption">Mabel White (1904-2002)</p>
                    </div>
                    <div className="about-text">
                        <h2>Mabel White</h2>
                        <p>
                            On June 11, 1904, a legend was born. We would like to take a moment to honor our late founder, <strong>Mabel White</strong>.
                        </p>
                        <p>
                            At the age of 49, Mabel White started in the restaurant business with <em>Mabel's Lunchroom</em> in 1953 on College Drive in Decorah. Students from nearby Luther College were regular customers. Mabel often let them make their own sandwiches and change at the register.
                        </p>
                        <p>
                            One fateful day, a student asked if he could make himself a "pizza." Mabel agreed without knowing what a pizza was or understanding how this would change her life and eventually become an icon of Decorah.
                        </p>
                        <p>
                            In 1968, Mabel paid tribute to the item that attracted overwhelming attention and renamed her restaurant <strong>"Mabe's Pizza."</strong> Over a short time, Mabe's Pizza grew a reputation for delicious pizza cut into squares with made-from-scratch crust and sauce paired with sincere customer service.
                        </p>
                    </div>
                </div>

                {/* Family Legacy Section */}
                <div className="about-section family-section reverse">
                    <div className="about-text">
                        <h2>A Family Legacy</h2>
                        <p>
                            Mabel's family shared the joy she found in serving food to others and have carried on this tradition since. Mabel's youngest son, <strong>Don White</strong> and his late wife <strong>Maime</strong> took over the restaurant in 1981.
                        </p>
                        <p>
                            Don's oldest son, <strong>Steve White</strong> and his wife <strong>Connie</strong> have had the business since 1999 and today son, <strong>Collin White</strong>, is General Manager.
                        </p>
                        <p>
                            Mabel passed away in 2002 when she was 97 years old. She left a legacy for how the pizza should be made and the customers should be treated. Her Spirit (and recipe) are honored with each of the <strong>100,000+ pizzas</strong> served every year!
                        </p>
                        <p>
                            Mabe's Pizza has been in several locations around Decorah. In 1978, the restaurant moved to its current building at <strong>110 East Water Street</strong> in downtown Decorah. We invite you to join us... See you soon!
                        </p>
                    </div>
                    <div className="about-image">
                        <img
                            src="/assets/don_maime_white.jpg"
                            alt="Don and Maime White"
                            onError={(e) => {
                                e.target.src = 'https://img1.wsimg.com/isteam/ip/8c919503-a8dc-4061-a960-27001b6227b6/5fcd28d7-e7e3-49b4-a263-f1a7101a2257.JPG';
                            }}
                        />
                        <p className="about-image-caption">Don and Maime White</p>
                    </div>
                </div>

                {/* Video Section */}
                <div className="video-section">
                    <h2>'Our Story' - Collin White (Manager)</h2>
                    <p className="video-description">
                        Made-from-scratch tradition with sincere customer service! Mabe's Pizza enjoys the satisfaction of serving food to others and has carried this tradition since their beginning as Mabel's Lunchroom in 1953.
                    </p>
                    <div className="video-container">
                        <iframe
                            width="100%"
                            height="450"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Mabe's Pizza - Our Story with Collin White"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <p className="video-quote">
                        <em>"We love to support our community. Being here for 70 years now, I like to think that we're a stone in the community to help out who ever we need and whenever it needs to be done."</em>
                        <br />
                        <strong>– Collin White, Manager of Mabe's Pizza</strong>
                    </p>
                </div>

                {/* Stats Section */}
                <div className="stats-section">
                    <div className="stat-item">
                        <span className="stat-number">1953</span>
                        <span className="stat-label">Year Founded</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">4</span>
                        <span className="stat-label">Generations</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">100,000+</span>
                        <span className="stat-label">Pizzas Per Year</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">70+</span>
                        <span className="stat-label">Years of Service</span>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="about-cta">
                    <h2>Ready to Taste the Tradition?</h2>
                    <p>Experience the same made-from-scratch pizza that's been loved for over 70 years.</p>
                    <div className="cta-buttons">
                        <a
                            href="https://order.toasttab.com/online/mabes-pizza-110-e-water-st"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Order Online
                        </a>
                        <a href="tel:563-382-4297" className="btn btn-secondary">
                            Call (563) 382-4297
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
