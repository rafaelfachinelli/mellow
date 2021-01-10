import Carousel from './Carousel';

import goGreenImg from '../../images/GoGreen/gogreen.png';

import { Container } from './styles';

export default function GoGreen() {
  return (
    <Container id='goGreen'>
      <img className='gogreen__image' src={goGreenImg} alt="Go Green"/>
      <Carousel/>
    </Container>
  );
};