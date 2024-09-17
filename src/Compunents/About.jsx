
import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import './About.css';
import './JejuHallasan-Regular.ttf';

export default function About() {
  const [isLoading, setIsLoading] = useState(true);
  const [isImageToggled, setIsImageToggled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleImageClick = () => {
    setIsImageToggled(!isImageToggled);
  };

  return (
    <div>
      <Navbar />
      {/* <br /><br /><br /><br /> */}
      <div className="container" >
        <div className="left-side1">
          <img src="/Images/about.png" alt="Left" className="about" />
        </div>
        <div className="right-side1">
          <div className="image-container">
            <img src="/Images/bg.png" alt="Right" className="about1" />
            {isLoading ? (
              <div className="loading">
                <span></span>
                <span></span>
                <span></span>
              </div>
            ) : (
              <>
                <div className="text-section">
                  <p className='AboutH' style={{
                    color: "#EAEAEA",
                    fontFamily: "'Jeju Hallasan', sans-serif",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
                    fontSize: "40px",
                  }}>About!</p>
                  <p style={{
                    color: "#c8b36b",
                    fontWeight: "bold",
                    fontFamily: "'Jeju Hallasan', sans-serif",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    marginLeft: "-60px",
                    marginRight: "-120px",
                  }}>
                    Game of Jeeters is bla bla bla bla bla bla bla bla bla bla
                    bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                    bla bla bla bla bla  ...
                  </p>
                  <button className='AboutB' style={{
                    borderRadius: 7,
                    fontFamily: "'Jeju Hallasan', sans-serif",
                    backgroundColor: "#c8b36b",
                    width:"25vh",
                    
                  }}>Share my Findings</button>
                </div>
                <img
                  src={isImageToggled ? "/Images/ghost2.png" : "/Images/ghost.png"}
                  alt="Toggle"
                  className="toggle-image"
                  style={{width:'150px', marginRight:'50px'}}
                  onClick={handleImageClick}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}



