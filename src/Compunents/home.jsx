
import React from 'react';
import { Link } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './home.css';
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
} from 'mdb-react-ui-kit';
import { useState} from 'react';



export default function Home() {
const [basicModal, setBasicModal] = useState(false);
const toggleOpen = () => setBasicModal(!basicModal);
  return (
    <div className="homeContainer">
      <div className="home">
        <div className="homeColumn1">
          <img className="image1" src="/Images/Picture1.png" alt="" />
        </div>
        <div className="homeColumn2">
          <img className="image2" src="/Images/Picture2.png" alt="" />
          <div className="imageStack">
            <Link to="/About">
              <img className="image3" src="/Images/Picture3.png" alt="" />
            </Link>
            <Link to="/KeyStats">
              <img className="image4" src="/Images/Picture4.png" alt="" />
            </Link>
            <button onClick={toggleOpen} style={{background:'transparent', border:'none'}}>
              <img className="image5" src="/Images/Picture5.png" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="mobileExtra">
        <Link className="a2" to="/mbHome">
          <img className="image6" src="/Images/Picture6.png" alt="" />
        </Link>
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




