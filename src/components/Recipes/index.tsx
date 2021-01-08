import Carousel from './Carousel';

import { Container } from './styles';

export default function Recipes() {
  return (
    <Container id='recipes'>
      <h1 className='recipes__title'>Recipes</h1>
      <p className='recipes__description'>
        Culpa qui officia deserunt mollit anim id est laborum. 
        Sed ut perspiciatis unde omnis iste natus error sit voluptartem 
        accusantium doloremque laudantium, totam rem aperiam, 
        eaque ipsa quae ab illo inventore veritatis et quasi ropeior 
        architecto beatae vitae dicta sunt
      </p>
      <div className='recipes__carousel'>

      </div>
      <Carousel/>
    </Container>
  )
}