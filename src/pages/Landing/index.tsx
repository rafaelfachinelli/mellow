import Navigator from '../../components/Navigator';
import Pricing from '../../components/Pricing';

import { Container } from './styles';

export default function Landing() {
  return (
    <Container>
      <Navigator/>
      <Pricing/>
    </Container>
  );
}