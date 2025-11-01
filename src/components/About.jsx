import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [showCraft, setShowCraft] = useState(false);

  const handleKnowMore = () => {
    setShowCraft(!showCraft);
  };

  return (
      <section className="about">
        <div className="about-container">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80"
              alt="Coffee cup"
            />
          </div>

          <div className="about-content">
            <h2>
              About <span>Rehan's Coffee</span>
            </h2>
            <p>
              At <strong>Rehan's Coffee</strong>, we believe every sip should
              tell a story — a story of passion, warmth, and perfection. Our
              beans are handpicked, roasted with precision, and brewed with
              love.
            </p>
            <p>
              Whether you’re coding late at night or chilling with friends,
              Rehan’s Coffee brings the perfect blend of energy and comfort.
              Because great things start with great coffee ☕.
            </p>

            <button className="about-btn" onClick={handleKnowMore}>
              {showCraft ? "Hide Details" : "Know More"}
            </button>

            {showCraft && (
              <div className="craft-section">
                <h3>☕ Our Craft</h3>
                <p>
                  Every bean at Rehan’s Coffee goes through a journey — from the
                  lush farms to your favorite cup. We roast small batches daily
                  to ensure freshness, aroma, and rich flavor in every sip.
                </p>
                <p>
                  Our baristas blend art with science, creating brews that not
                  only energize but inspire creativity. Taste the perfection —
                  brewed just for you.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
  );
};

export default About;
