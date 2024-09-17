


import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import './About.css';
import './JejuHallasan-Regular.ttf';

export default function KeyStats() {
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
      <div className="container" >
        <div className="left-side1" >
          <img src="/Images/key.png" alt="Left" className="about2" />
        </div>
        <div className="right-side1">
          <div className="keyImage" >
            <img src="/Images/bg.png" alt="Right" className="about1" />
            {isLoading ? (
              <div className="loading">
                <span></span>
                <span></span>
                <span></span>
              </div>
            ) : (
              <>
                <div className="keyData" id='abc'>
                  <p style={{
                    color: "#EAEAEA",
                    fontFamily: "'Jeju Hallasan', sans-serif",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
                    fontSize: "40px",
                    justifyContent:"center",
                    alignItems:"center",
                  }}>Key Stats</p>
                    <p style={{
                    color: "#E0C053",
                    fontWeight: "bold",
                    fontFamily: "'Jeju Hallasan', sans-serif",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    justifyContent:"center",
                    alignItems:"center",
                    textTransform:"uppercase",
                  }}>
                Max total supply:
                  </p>
                  <p style={{
                    marginTop:"-20px",
                    color: "orange",
                    fontWeight: "bold",
                    fontFamily: "'Jeju Hallasan', sans-serif",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    justifyContent:"center",
                    alignItems:"center",
                  }}>
                499,980,970,575.97
                  </p>

                  <p style={{
                    color: "#E0C053",
                    fontWeight: "bold",
                    fontFamily: "'Jeju Hallasan', sans-serif",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    justifyContent:"center",
                    alignItems:"center",
                  }}>
                FDMC: <span
                style={{
                    color: "orange",
                    fontFamily: "'Jeju Hallasan', sans-serif",
                  }}>$25,055,739.26</span>
                  </p>

                  <p style={{
                    color: "#E0C053",
                    fontWeight: "bold",
                    fontFamily: "'Jeju Hallasan', sans-serif",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    justifyContent:"center",
                    alignItems:"center",
                  }}>
                Holders: <span
                style={{
                    color: "orange",
                    fontFamily: "'Jeju Hallasan', sans-serif",
                  }}>30,243</span>
                  </p>

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



