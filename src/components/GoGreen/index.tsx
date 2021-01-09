import Carousel from './Carousel';

import goGreenImg from '../../images/gogreen.png';

import { Container } from './styles';

export default function GoGreen() {
  return (
    <Container id='howItWorks'>
      <img src={goGreenImg} alt="How It Works"/>
      <Carousel/>
    </Container>
  );
};