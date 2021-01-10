import { Link, animateScroll as scroll } from 'react-scroll';

import { Container } from './styles';

import logoImg from '../../images/logo.svg';
import facebookImg from '../../images/Footer/Social/facebook.svg';
import twitterImg from '../../images/Footer/Social/twitter.svg';
import instagramImg from '../../images/Footer/Social/instagram.svg';
import pinterestImg from '../../images/Footer/Social/pinterest.svg';

export default function Footer() {
  return (
    <Container>
      <div className='footer__navigator'>
        <nav className='footer__nav'>
          <ul className='footer__list'>
            <li className='footer__item'>
              <a href="#goGreen">ABOUT US</a>
            </li>
            <li className='footer__item'>
              <a href="#pricing">CONTACT</a>
            </li>
            <li className='footer__item'>
              <a href="#goGreen">GO GREEN</a>
            </li>
            <li className='footer__item'>
              <a href="#pricing">TERMS & CONDITIONS</a>
            </li>
          </ul>
        </nav>
        <div className='footer__logo'>
          <Link
            to='pricing'
            smooth
            duration={500}
            offset={50}
          >
            <img src={logoImg} alt="Mellow"/>
          </Link>
        </div>
      </div>
      <div className='footer__content'>
        <div className='footer__email'>
          <p>Cool phrase goes here</p>
          <span>Maybe in two lines</span>
          <div className='email__input'>
            <input type="text" placeholder='Email Address'/>
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className='footer__social'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookImg} alt="Facebook"/>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterImg} alt="Twitter"/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramImg} alt="Instagram"/>
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
            <img src={pinterestImg} alt="Pinterest"/>
          </a>
        </div>
        <p className='footer__copyright'>
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>
      </div>
    </Container>
  );
}