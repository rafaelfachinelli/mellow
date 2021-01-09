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
            <li className='footer__item'>ABOUT US</li>
            <li className='footer__item'>CONTACT</li>
            <li className='footer__item'>GO GREEN</li>
            <li className='footer__item'>TERMS & CONDITIONS</li>
          </ul>
        </nav>
        <div className='footer__logo'>
          <img src={logoImg} alt="Mellow"/>
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
          <img src={facebookImg} alt="Facebook"/>
          <img src={twitterImg} alt="Twitter"/>
          <img src={instagramImg} alt="Instagram"/>
          <img src={pinterestImg} alt="Pinterest"/>
        </div>
        <p className='footer__copyright'>
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>
      </div>
    </Container>
  );
}