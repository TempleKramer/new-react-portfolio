import React from 'react';
import InstagramIcon from "@material-us/icons/InstagramIcon";
import TwitterIcon from "@material-us/icons/TwitterIcon";
import LinkedInIcon from "@material-us/icons/LinkedInIcon";
import "../styles/Footer.css"


function Footer() {
  return (
    <div className='footer'>
        <div> 
            <InstagramIcon />
            <TwitterIcon />
            <LinkedInIcon />
        
        </div>
    </div>
  )
}

export default Footer