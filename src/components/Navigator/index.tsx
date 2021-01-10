import { Link } from 'react-scroll';

import { Container } from './styles';

import logoImg from '../../images/logo.svg';
import profileImg from '../../images/Navigator/profile.jpg';

export default function Navigator() {
  return (
    <Container id='nav'>
      <Link
        to='pricing'
        smooth
        duration={500}
        offset={50}
      >
        <img src={logoImg} alt="Mellow"/>
      </Link>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='list__item'>
            <Link
              to="recipes"
              smooth
              duration={500}
              offset={70}
            >
              Recipes
            </Link>
          </li>
          <li className='list__item'>
            <Link
              to="goGreen"
              smooth
              duration={500}
            >
              Go Green
            </Link>
          </li>
          <li className='list__item'>
            <Link
              to="pricing"
              smooth
              duration={500}
              offset={50}
            >
              Pricing
            </Link>
          </li>
          <li className='list__item'>
            <Link
              to="howItWorks"
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