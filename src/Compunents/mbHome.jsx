
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
} from 'mdb-react-ui-kit';
import './JejuHallasan-Regular.ttf';

export default function MbHome() {
  const [basicModal, setBasicModal] = useState(false);
  const history = useHistory();

  const toggleOpen = () => setBasicModal(!basicModal);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        history.push('/');
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [history]);

  return (
    <div className="mbhomeContainer" style={{ textAlign: 'center', overflowX: 'hidden', overflowY: 'hidden' }}>
      <div style={{ display: 'inline-block', marginTop: '170px' }}>
        <Link className="a1" to="/About" style={buttonStyle}>
          <img className="image3" src="/Images/Picture3.png" alt="" style={imageSize} />
        </Link>
        <Link className="a1" to="/KeyStats" style={buttonStyle}>
          <img className="image4" src="/Images/Picture4.png" alt="" style={imageSize} />
        </Link>
        <button onClick={toggleOpen} style={{ ...buttonStyle, background: 'transparent', border: 'none' }}>
          <img className="image5" src="/Images/Picture5.png" alt="" style={imageSize} />
        </button>
      </div>

      <MDBModal open={basicModal} onClose={toggleOpen} tabIndex="-1">
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
                <button style={{ backgroundColor: "#E0C053", borderBottom: "4px solid black", borderRight: '1px solid black', borderRadius: '7px', paddingLeft: '30px', paddingRight: '30px' }}> Brideye </button>
                <br />
                <button style={{ backgroundColor: "#E0C053", borderBottom: "4px solid black", borderRight: '1px solid black', borderRadius: '7px', paddingLeft: '30px', paddingRight: '30px', marginTop: '10px' }}> Radium </button>
                <br />
                <button style={{ backgroundColor: "#E0C053", borderBottom: "4px solid black", borderRight: '1px solid black', borderRadius: '7px', paddingLeft: '12px', paddingRight: '12px', marginTop: '10px' }}> DexScreener </button>
                <br />
                <img src="/Images/1.png" alt="twitter" style={{ marginRight: '5px', marginTop: '10px', width: '30px', height: '30px' }} />
                <img src="/Images/2.png" alt="telegram" style={{ marginTop: '10px', width: '30px', height: '30px' }} />
                <br /><br /><br /><br /> <br />
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

const buttonStyle = {
  display: 'block',
  margin: '10px', 
};

const imageSize = {
  width: '300px', 
  height: 'auto', 
};



