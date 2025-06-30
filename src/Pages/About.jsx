import React from 'react';
import '../Styles/About.css'; // Optional: create this CSS file for custom styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="hero">
        <img
          src="https://via.placeholder.com/1200x400"
          alt="Company Banner"
          className="hero-image"
        />
        <h1>About Us</h1>
        <p>Your trusted partner in quality and innovation.</p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          We strive to provide the best services and products to our customers, always focused on quality,
          reliability, and customer satisfaction.
        </p>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          {[1, 2, 3].map((member) => (
            <div className="team-member" key={member}>
              <img
                src={`https://via.placeholder.com/150?text=Member+${member}`}
                alt={`Team Member ${member}`}
              />
              <h3>Member {member}</h3>
              <p>Position Title</p>
            </div>
          ))}
        </div>
      </section>

      <section className="history">
        <h2>Our Story</h2>
        <p>
          Founded in [Year], we began as a small startup and have grown into a team of passionate professionals
          dedicated to innovation. From day one, our focus has been on solving real-world problems with effective
          solutions.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
