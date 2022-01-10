// import { useState } from "react";
import "./contact.scss";
import Fade from 'react-reveal/Fade';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {
  // const [message, setMessage] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(true);
  // };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <Fade left>
          <h1>Profile</h1>
        </Fade>

        <div className="mail">
          <h3>Email: <span>ibnulashir42@gmail.com</span></h3>
        </div>

        <div className="phone">
          <h3>Mobile: <span>+123456789</span></h3>
        </div>

        <div className="social">
          <h3>Connect</h3>
          <div className="social_links">
            <a href="https://www.facebook.com/" target="_blank"><FacebookOutlinedIcon className="icon" /></a>
            <a href="https://www.twitter.com" target="_blank"><TwitterIcon className="icon" /></a>
            <a href="https://www.instagram.com" target="_blank"><InstagramIcon className="icon" /></a>
            <a href="https://www.github.com" target="_blank"><GitHubIcon className="icon" /></a> 
          </div>
        </div>

        {/* <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form> */}
      </div>
      <a href="#intro" className="backToHome">
        <DoubleArrowIcon />
      </a>
    </div>
  );
}
