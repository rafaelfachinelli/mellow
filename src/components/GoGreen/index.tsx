import Carousel from './Carousel';

import goGreenImg from '../../images/gogreen.png';

import { Container } from './styles';

export default function GoGreen() {
  return (
    <Container id='goGreen'>
      <img src={goGreenImg} alt="Go Green"/>
      <Carousel/>
    </Container>
  );
};