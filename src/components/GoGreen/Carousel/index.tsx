import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import partner1Img from '../../../images/partner_1.svg';
import partner2Img from '../../../images/partner_2.svg';
import partner3Img from '../../../images/partner_3.svg';

import { Container } from './styles';

export default function Carousel() {
  return (
    <Container>
      <Slick
        infinite
        centerMode
        slidesToShow={1}
        centerPadding='150px'
      >
        <div className='works'>
          <h1 className='works__title'>Go Green</h1>
          <p className='works__description'>
            Culpa qui officia deserunt mollit anim id est laborum. 
            Sed ut perspiciatis unde omnis iste natus error sit voluptartem 
            accusantium doloremque laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi ropeior 
            architecto beatae vitae dicta sunt explicabo. Nemo eniem ipsam 
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed 
            quia consequuntur magni dolores eosep quiklop ratione voluptatem 
            sequi nesciunt. Neque porro quisquam est, quepi dolorem ipsum.
          </p>
          <div className='works__partners'>
            <img src={partner1Img} alt="Waitrose"/>
            <img src={partner2Img} alt="TESCO"/>
            <img src={partner3Img} alt="ocado"/>
          </div>
        </div>
        <div className='about'>
          <h1 className='about__title'>About us</h1>
          <p className='about__description'>
            Culpa qui officia deserunt mollit anim id est laborum. 
            Sed ut perspiciatis unde omnis iste natus error sit voluptartem 
            accusantium doloremque laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi ropeior 
            architecto beatae vitae dicta sunt explicabo. Nemo eniem ipsam 
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed 
            quia consequuntur magni dolores eosep quiklop ratione voluptatem 
            sequi nesciunt. Neque porro quisquam est, quepi dolorem ipsum.
          </p>
        </div>
      </Slick>
    </Container>
  );
}