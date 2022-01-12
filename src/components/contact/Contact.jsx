// import { useState } from "react";
import "./contact.scss";
import Fade from 'react-reveal/Fade';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
  // const [message, setMessage] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(true);
  // };
  return (
    <div className="contact" id="contact">
      <div className="left">
        {/* <img src="assets/shake.svg" alt="" /> */}
        <Fade left>
          <h1>Education</h1>
        </Fade>
        <div className="underline_anime_left"></div>

        <div className="graduation">
          <h3>Graduation: <span>Institute of Technology, GGV Bilaspur</span></h3>
        </div>
        <div className="intermediate">
          <h3>Intermediate: <span>St.Karens High School,Patna</span></h3>
        </div>
        <div className="matriculation">
          <h3>Matriculation: <span>St.Karens High School,Patna</span></h3>
        </div>

      </div>
      <div className="right">
        <Fade left>
          <h1>Profile</h1>
        </Fade>
        <div className="underline_anime_right"></div>

        <div className="mail">
          <h3>Email: <span>yourmail.com</span></h3>
        </div>

        <div className="phone">
          <h3>Mobile: <span>+91 83054 88288</span></h3>
        </div>

        <div className="online_judge">
          <h3>Online Judge</h3>
          <div className="individual_judges">
            <a href="https://codeforces.com/profile/Pranav.exe" target="_blank">Code Forces</a>
            <a href="https://www.codechef.com/users/pranav_123456" target="_blank">Code Chef</a>
            <a href="https://atcoder.jp/users/Nemesis_12" target="_blank">AtCoder</a>
          </div>
        </div>

        <div className="social">
          <h3>Connect</h3>
          <div className="social_links">
            <a href="https://www.linkedin.com/in/pranav-rajveer" target="_blank"><LinkedInIcon className="icon" /></a>
            <a href="https://github.com/Neon-20" target="_blank"><GitHubIcon className="icon" /></a>
            <a href="https://www.twitter.com" target="_blank"><TwitterIcon className="icon" /></a>
            <a href="https://www.instagram.com" target="_blank"><InstagramIcon className="icon" /></a>
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
