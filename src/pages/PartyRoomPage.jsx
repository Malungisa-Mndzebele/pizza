import './PartyRoomPage.css';

const PartyRoomPage = () => {
    return (
        <div className="party-room-page">
            <div className="container">
                <div className="party-room-header">
                    <h1>The Party Room</h1>
                    <p>Host your next event with us! Great food, great space, great memories.</p>
                </div>

                <div className="party-content">
                    <div className="party-gallery">
                        <img
                            className="featured"
                            src="/assets/party_room_1.jpg"
                            alt="Party Room Interior"
                            onError={(e) => {
                                e.target.src = 'https://img1.wsimg.com/isteam/ip/8c919503-a8dc-4061-a960-27001b6227b6/IMG_20190320_133401030.jpg';
                            }}
                        />
                        <img
                            className="small"
                            src="/assets/party_room_2.jpg"
                            alt="Party Room Tables"
                            onError={(e) => {
                                e.target.src = 'https://img1.wsimg.com/isteam/ip/8c919503-a8dc-4061-a960-27001b6227b6/IMG_20190320_133437407.jpg';
                            }}
                        />
                        <img
                            className="small"
                            src="/assets/party_room_3.jpg"
                            alt="Group Event"
                            onError={(e) => {
                                e.target.src = 'https://img1.wsimg.com/isteam/ip/8c919503-a8dc-4061-a960-27001b6227b6/facebook_1573474645501.jpg';
                            }}
                        />
                    </div>

                    <div className="party-details-card">
                        <h2>Room Details</h2>

                        <ul className="party-details-list">
                            <li>
                                <span className="checkmark">✓</span>
                                Capacity: <strong>Up to 100 People</strong>
                            </li>
                            <li>
                                <span className="checkmark">✓</span>
                                Perfect for Birthdays, Business Meetings, &amp; Team Parties
                            </li>
                            <li>
                                <span className="checkmark">✓</span>
                                Private &amp; Spacious
                            </li>
                        </ul>

                        <h3>Booking Policy</h3>
                        <p className="booking-policy">
                            Reservations are appreciated for private parties. Please confirm your reservation by phone if booking within 60 minutes of arrival.
                        </p>
                        <div className="party-note">
                            <strong>Note:</strong> A 15% gratuity is automatically added for groups of 8 or more.
                        </div>

                        <a href="tel:563-382-4297" className="party-cta-btn">
                            Call to Book (563) 382-4297
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartyRoomPage;
