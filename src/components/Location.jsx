import './Location.css';

const Location = () => {
    return (
        <section id="location" className="location-section">
            <div className="container location-grid">
                <div className="location-info">
                    <h2>Visit Us</h2>
                    <address>
                        <p className="address-line">110 East Water Street</p>
                        <p className="address-line">Decorah, Iowa 52101</p>
                        <p className="phone"><a href="tel:5633824297">(563) 382-4297</a></p>
                    </address>

                    <div className="hours">
                        <h3>Hours</h3>
                        <ul>
                            <li><span>Sun - Thu:</span> 11:00 AM - 9:00 PM</li>
                            <li><span>Fri - Sat:</span> 11:00 AM - 10:00 PM</li>
                        </ul>
                    </div>

                    <div className="location-actions">
                        <a href="https://www.google.com/maps/dir/?api=1&destination=110+E+Water+St,+Decorah,+IA+52101" target="_blank" rel="noopener noreferrer" className="btn">Get Directions</a>
                    </div>
                </div>
                <div className="location-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.1234!2d-91.7879!3d43.3022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87fdc1234567890%3A0x1234567890abcdef!2s110%20E%20Water%20St%2C%20Decorah%2C%20IA%2052101!5e0!3m2!1sen!2sus!4v1234567890"
                        width="100%"
                        height="400"
                        style={{ border: 0, borderRadius: 'var(--border-radius)' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mabe's Pizza Location"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Location;
