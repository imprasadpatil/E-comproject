import React from 'react';
import './Footer.css';

const Footer = (props) => {
    return(
        <footer>
  <div class="row footer">
    <div class="col-md-6 col-sm-12 footercard">
    <div id="quicklinks">
      <h3>QuickLinks</h3>
      <a href="">Privacy Policy</a><br/>
      <a href="">Return And Cancellation</a><br/>
      <a href="">Terms Of Service</a><br/>
      <a href="">About Us</a><br/>
      <a href="">Contact</a>
    </div>
    </div>

    <div class="col-md-6 col-sm-12 footercard">
      <div id="socialcontent">
        <img id="footerlogo" src="./Assets/logo.png" alt=""/>
        <div id="sociallinks">
          <a href=""><i class="fa-brands fa-instagram fa-2xl"></i></a>
          <a href=""><i class="fa-brands fa-facebook fa-2xl"></i></a>
          <a href=""><i class="fa-brands fa-twitter fa-2xl"></i></a>
          <a href=""><i class="fa-brands fa-youtube fa-2xl"></i></a>
        </div>
      </div>
    </div>

  <div class="copyright">
    copyright 2022 - Prasad Patil
  </div>
  </div>
</footer>
    )
}

export default Footer;