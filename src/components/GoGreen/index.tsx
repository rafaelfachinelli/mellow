import Carousel from './Carousel';

import howItWorksImg from '../../images/howitworks.png';

import { Container } from './styles';

export default function GoGreen() {
  return (
    <Container id='howItWorks'>
      <img src={howItWorksImg} alt="How It Works"/>
      <Carousel/>
    </Container>
  );
};