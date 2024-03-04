import React from 'react';
import '../assets/css/Footer.css'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>a propos de nous</h2>
            <hr class="solid" />
            <p>Couronne de Laurier peut vous livrer votre commande ou vous soyez.</p>
          </div>
          <div class='footer-link-items'>
            <h2>information</h2>
            <hr class="solid" />
            <Link to='/contact'><span1><i class="fas fa-chevron-right"></i>&nbsp;&nbsp;Contact</span1></Link>
            <Link to='/carrier'><span1><i class="fas fa-chevron-right"></i>&nbsp;&nbsp;Carrières</span1></Link>
            <Link to='/about-us'><span1><i class="fas fa-chevron-right"></i>&nbsp;&nbsp;A propos de Couronne de Laurier</span1></Link>
          </div>
          <div class='footer-link-items'>
            <h2>contact info</h2>
            <hr class="solid" />
            <div className="material-icons">
              <i class="fas fa-map-marker-alt"></i>
              <span> Rond-point En face -Sonede Monastir </span>
            </div>
            <div className="material-icons">
              <i class="fas fa-phone-alt"></i>
              <span> Service Client</span>
              <br />
              <p><a href="tel:+21655742938">(+216) 22136703</a> </p>
            </div>
            <div className="material-icons">
              <i class="fas fa-phone-alt"></i>
              <span> Service Commercial</span>
              <br />
              <p><a href="tel:+21655742938">(+216) 22136703</a> </p>
            </div>
            <div className="material-icons">
              <i class="fas fa-envelope"></i>
              <a href="mailto:contact@example.com"> contact@example.com</a>
            </div>
            <div className="material-icons">
              <i class="far fa-clock"></i>
              <span> Lun- Sam: 8:00 - 22:00</span>
            </div>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src="../../images/logo/lg.png" alt='logo-colis-19' /> Couronne de Laurier
            </Link>
          </div>
          <small class='website-rights'>© Copyrights 2021 Couronne de Laurier. </small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;