import React from "react";
import "./Home.css";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/product");
  };

  return (
      <section className="home">
        {/* Overlay and content */}
        <div className="overlay"></div>

        <div className="content">
          <h1>
            Welcome to <span>Rehan's Coffee</span>
          </h1>
          <p>Where every sip awakens your mind and fuels your code.</p>
          <button className="home-btn" onClick={handleClick}>
            Grab Your Coffee ☕
          </button>
        </div>
      </section>
  );
};

export default Home;
