import { Link } from 'react-scroll';

import { Container } from './styles';

import logoImg from '../../images/logo.svg';
import profileImg from '../../images/Navigator/profile.jpg';

export default function Navigator() {
  return (
    <Container>
      <Link
        to='pricing'
        smooth
        duration={500}
      >
        <img className='navigator__logo' src={logoImg} alt="Mellow"/>
      </Link>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='list__item'>
            <Link
              activeClass='item__active'
              to="recipes"
              spy
              smooth
              duration={500}
              offset={70}
            >
              Recipes
            </Link>
          </li>
          <li className='list__item'>
            <Link
              activeClass='item__active'
              to="goGreen"
              spy
              smooth
              duration={500}
              offset={100}
            >
              Go Green
            </Link>
          </li>
          <li className='list__item'>
            <Link
              activeClass='item__active'
              to="pricing"
              spy
              smooth
              duration={500}
            >
              Pricing
            </Link>
          </li>
          <li className='list__item'>
            <Link
              activeClass='item__active'
              to="howItWorks"
              spy
              smooth
              duration={500}
              offset={100}
            >
              How it works
            </Link>
          </li>
          <li className='list__profile'><img src={profileImg} alt="Profile"/></li>
        </ul>
      </nav>
    </Container>
  );
}