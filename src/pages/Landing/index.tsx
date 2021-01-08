import Navigator from '../../components/Navigator';
import Pricing from '../../components/Pricing';
import Recipes from '../../components/Recipes';

import { Container } from './styles';

export default function Landing() {
  return (
    <Container>
      <Navigator/>
      <Pricing/>
      <Recipes/>
    </Container>
  );
}