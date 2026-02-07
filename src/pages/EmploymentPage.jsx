import './EmploymentPage.css';

const EmploymentPage = () => {
    return (
        <div className="employment-page">
            <div className="container">
                <div className="employment-header">
                    <h1>Join Our Team</h1>
                    <p>Become part of Decorah's favorite pizza family!</p>
                </div>

                <div className="employment-content">
                    <div className="employment-intro">
                        <div className="intro-text">
                            <h2>Work at Mabe's Pizza</h2>
                            <p>
                                For over 70 years, Mabe's Pizza has been a cornerstone of the Decorah community.
                                We're always looking for friendly, hardworking individuals to join our team.
                            </p>
                            <p>
                                Whether you're a student looking for flexible hours, or someone seeking
                                a fun and fast-paced work environment, we'd love to hear from you!
                            </p>
                        </div>
                        <div className="intro-image">
                            <img
                                src="/assets/team.jpg"
                                alt="Mabe's Pizza Team"
                                onError={(e) => {
                                    e.target.src = 'https://img1.wsimg.com/isteam/ip/8c919503-a8dc-4061-a960-27001b6227b6/facebook_1573474645501.jpg';
                                }}
                            />
                        </div>
                    </div>

                    <div className="positions-section">
                        <h2>Available Positions</h2>
                        <div className="positions-grid">
                            <div className="position-card">
                                <div className="position-icon">👋</div>
                                <h3>Front of House</h3>
                                <ul>
                                    <li>Servers</li>
                                    <li>Hosts/Hostesses</li>
                                    <li>Cashiers</li>
                                    <li>Bussers</li>
                                </ul>
                            </div>
                            <div className="position-card">
                                <div className="position-icon">🍕</div>
                                <h3>Kitchen Staff</h3>
                                <ul>
                                    <li>Pizza Makers</li>
                                    <li>Line Cooks</li>
                                    <li>Prep Cooks</li>
                                    <li>Dishwashers</li>
                                </ul>
                            </div>
                            <div className="position-card">
                                <div className="position-icon">🚗</div>
                                <h3>Delivery</h3>
                                <ul>
                                    <li>Delivery Drivers</li>
                                    <li>Must have valid license</li>
                                    <li>Flexible hours</li>
                                    <li>Tips + hourly pay</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="benefits-section">
                        <h2>Why Work With Us?</h2>
                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <span className="benefit-icon">⏰</span>
                                <span>Flexible Scheduling</span>
                            </div>
                            <div className="benefit-item">
                                <span className="benefit-icon">🍕</span>
                                <span>Employee Discounts</span>
                            </div>
                            <div className="benefit-item">
                                <span className="benefit-icon">👨‍👩‍👧‍👦</span>
                                <span>Family Environment</span>
                            </div>
                            <div className="benefit-item">
                                <span className="benefit-icon">📈</span>
                                <span>Growth Opportunities</span>
                            </div>
                            <div className="benefit-item">
                                <span className="benefit-icon">💰</span>
                                <span>Competitive Pay</span>
                            </div>
                            <div className="benefit-item">
                                <span className="benefit-icon">🎉</span>
                                <span>Fun Atmosphere</span>
                            </div>
                        </div>
                    </div>

                    <div className="apply-section">
                        <h2>How to Apply</h2>
                        <div className="apply-options">
                            <div className="apply-option">
                                <h3>Apply In Person</h3>
                                <p>Stop by and fill out an application at:</p>
                                <address>
                                    <strong>Mabe's Pizza</strong><br />
                                    110 East Water Street<br />
                                    Decorah, Iowa 52101
                                </address>
                            </div>
                            <div className="apply-option">
                                <h3>Call Us</h3>
                                <p>Have questions? Give us a call!</p>
                                <a href="tel:563-382-4297" className="phone-link">
                                    (563) 382-4297
                                </a>
                            </div>
                        </div>
                        <div className="apply-note">
                            <p>
                                <strong>Note:</strong> Mabe's Pizza is an equal opportunity employer.
                                We welcome applicants of all backgrounds and experience levels.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmploymentPage;
