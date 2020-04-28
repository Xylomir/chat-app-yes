import React from'react';
import './Contact.css';

function Contact() {
    return ( 
      <figure className="Contact">
          <img
          className="avatar"
            src="https://randomuser.me/api/portraits/women/78.jpg"
            alt="user picture"
          />
            <div className="name"> Caroline Caro</div>
            <div className="status status-online"> 
              <div className="status-text">status-online</div> 
            </div>
            
        </figure>
    );
}
export default Contact;


