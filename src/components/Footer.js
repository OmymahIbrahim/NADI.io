import React from 'react' ;
import { FaFacebookF , FaTwitter , FaInstagram , FaLinkedinIn , FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        
            

<div>

<body>
  <footer>
    <div class="content">
      <div class="top">
        <div class="logo-details">
          <i class="fab fa-slack"></i>
          <span class="logo_name">NADI.io</span>
        </div>
        <div class="media-icons">
          <a href="#"><FaFacebookF/></a>
          <a href="#"><FaTwitter/></a>
          <a href="#"><FaInstagram/></a>
          <a href="#"><FaLinkedinIn/></a>
          <a href="#"><FaYoutube/></a>
        </div>
      </div>
      <div class="link-boxes">
        <ul class="box">
          <li class="link_name">Company</li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Partnerships</a></li>
          <li><a href="#">Affiliate</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact us</a></li>

        </ul>
        <ul class="box">
          <li class="link_name">Categories</li>
          <li><a href="#">Cardio</a></li>
          <li><a href="#">Habit Coaching</a></li>
          <li><a href="#">Nutrition</a></li>
          <li><a href="#">Yoga</a></li>
          <li><a href="#">Strength Training </a></li>
          <li><a href="#">personal Trainer</a></li>
          <li><a href="#">Lose Weight </a></li>
          <li><a href="#">HIIT</a></li>
          <li><a href="#">Bootcamp</a></li>
          <li><a href="#">Fitness Classes</a></li>
          <li><a href="#">Events</a></li>

        </ul>
        <ul class="box">
          <li class="link_name">Account</li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">My account</a></li>
          <li><a href="#">Dashboard</a></li>
          
        </ul>
        <ul class="box">
          <li class="link_name">Menu</li>
          <li><a href="#">Home</a></li>
          <li><a href="#">praice</a></li>
          <li><a href="#">Get Started</a></li>
          <li><a href="#">Features</a></li>
        </ul>
        <ul class="box input-box">
          <li class="link_name">Subscribe</li>
          <li><input type="text" placeholder="Enter your email"/></li>
          <li><input type="button" value="Subscribe"/></li>
        </ul>
      </div>
    </div>
    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2022 <a href="#">NADI.io</a>All rights reserved</span>
        <span class="copyright_text">Made with ❤️ in KSA, Makkah.</span>
        <span class="policy_terms">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>

</body>


           
        </div>
    )
}

export default Footer
