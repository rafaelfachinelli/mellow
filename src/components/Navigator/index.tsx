import { Container } from './styles';

import logoImg from '../../images/logo.svg';
import profileImg from '../../images/profile.jpg';

export default function Navigator() {
  return (
    <Container>
      <img src={logoImg} alt="Mellow"/>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='list__item'><a href="#recipes">Recipes</a></li>
          <li className='list__item'><a href="#goGreen">Go Green</a></li>
          <li className='list__item'><a href="#pricing">Pricing</a></li>
          <li className='list__item'><a href="#howItWorks">How it works</a></li>
          <li className='list__profile'><img src={profileImg} alt="Profile"/></li>
        </ul>
      </nav>
    </Container>
  );
}