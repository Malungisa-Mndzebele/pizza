import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container about-container">
                <div className="about-content">
                    <h2>A Decorah Tradition</h2>
                    <p>
                        For over 70 years, Mabe's Pizza has been a cornerstone of the Decorah community.
                        From our humble beginnings to becoming the "must-visit" spot for anyone in town,
                        our commitment to quality has never wavered.
                    </p>
                    <p>
                        We're famous for our <strong>square-cut thin crust</strong>, piled high with fresh toppings
                        and real cheese. Whether you are a regular or passing through, Mabe's feels like home.
                    </p>
                    <Link to="/about" className="btn btn-outline">Read Our Story</Link>
                </div>
            </div>
        </section>
    );
};

export default About;
