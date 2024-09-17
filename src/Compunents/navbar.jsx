

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
} from 'mdb-react-ui-kit';
import './navbar.css';
import './JejuHallasan-Regular.ttf';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 900);
  const [basicModal, setBasicModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 900);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const toggleOpen = () => setBasicModal(!basicModal);



  return (
    <div className="navbar">
      <div className="left-side">
        <Link className="linkBtn" to="/">
          <img className="logo" src="/Images/Picture2.png" alt="" />
        </Link>
      </div>
      <div className="right-side">
        <Link to="/About" className="nav-button-wrapper">
          <button className="nav-button" style={{ fontFamily: "'Jeju Hallasan', sans-serif" }}>About</button>
        </Link>
        <Link to="/KeyStats" className="nav-button-wrapper">
          <button className="nav-button" style={{ fontFamily: "'Jeju Hallasan', sans-serif" }}>Key Stats</button>
        </Link>
        <button className="nav-button" onClick={toggleOpen} style={{ fontFamily: "'Jeju Hallasan', sans-serif" }}>Links</button>
      </div>
      {isMobileView && (
        <>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '15vh',
              marginTop: '-30px',
              backgroundImage: 'url(/Images/Enter.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <button
              style={{
                position: 'absolute',
                top: '40px',
                right: '10px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={handleModalToggle}
            >
              <img
                src="/Images/menu.png"
                alt="Menu"
                style={{
                  width: '50px',
                  height: 'auto',
                }}
              />
            </button>
          </div>
          {showModal && (
            <div className="mobile-modal">
              <button
                className="close-button"
                onClick={handleModalToggle}
                style={{
                  marginTop: '-180px',
                  marginRight: '-300px',
                  background: 'transparent',
                  border: 'none',               
                }}
              >
                <img src="/Images/close.png" alt="Close" style={{width:'40px'}}/>
              </button>
              <Link className="a1" to="/About" style={buttonStyle}>
                <img className="image3" src="/Images/Picture3.png" alt="" style={imageSize} />
              </Link>
              <Link className="a1" to="/KeyStats" style={buttonStyle}>
                <img className="image4" src="/Images/Picture4.png" alt="" style={imageSize} />
              </Link>
              <button onClick={toggleOpen} style={{ ...buttonStyle, background: 'transparent', border: 'none' }}>
                <img className="image5" src="/Images/Picture5.png" alt="" style={imageSize} />
              </button>
              <div className="ghost-container" >
              <img 
      src="/Images/ghost.png" 
      alt="ghostnavbar" 
      style={{
        bottom: '0', 
        right: '100px', 
        position: 'fixed', 
        transform: 'scaleX(-1)',
        width:'50%'
      }} 
    />
              </div>
            </div>
          )}
        </>
      )}


<MDBModal open={basicModal} onClose={toggleOpen} tabIndex="-1">
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
     
    }}
  >
    <MDBModalDialog style={{ background: '#646456', width: '40vh' }}>
      <MDBModalContent style={{ background: '#646456', position: 'relative' }}>
        <img
          src="/Images/close.png"
          alt="Close"
          onClick={toggleOpen}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            cursor: 'pointer',
            width: '40px',
            height: '40px',
          }}
        />
        <br /><br />
        <MDBModalBody>
          <h1 style={{ color: 'white', fontFamily: "'Jeju Hallasan', sans-serif", textAlign: 'center', fontSize: '25px', fontWeight: 'bold' }}>Pick Link</h1>
          <div style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center', display: 'block' }}>
            <button style={{ backgroundColor: "#C8B36B", borderBottom: "4px solid black", borderRight: '1px solid black', borderRadius: '7px', paddingLeft: '35px', paddingRight: '35px' }}> Brideye </button>
            <br />
            <button style={{ backgroundColor: "#C8B36B", borderBottom: "4px solid black", borderRight: '1px solid black', borderRadius: '7px', paddingLeft: '35px', paddingRight: '35px', marginTop: '8px' }}> Radium </button>
            <br />
            <button style={{ backgroundColor: "#C8B36B", borderBottom: "4px solid black", borderRight: '1px solid black', borderRadius: '7px', paddingLeft: '17px', paddingRight: '17px', marginTop: '8px' }}> DexScreener </button>
            <br />
            <img src="/Images/1.png" alt="twitter" style={{ marginRight: '5px', marginTop: '10px', width: '30px', height: '30px' }} />
            <img src="/Images/2.png" alt="telegram" style={{ marginTop: '10px', width: '30px', height: '30px' }} />
            <br /><br /><br /><br /> <br />
          </div>
        </MDBModalBody>
      </MDBModalContent>
    </MDBModalDialog>
  </div>
</MDBModal>



    </div>
  );
};

export default Navbar;

const buttonStyle = {
  display: 'block',
  margin: '10px',
};

const imageSize = {
  width: '300px',
  height: 'auto',
};






