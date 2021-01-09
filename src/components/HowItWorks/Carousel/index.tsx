import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container } from './styles';

import howItWorks1Img from '../../../images/howitworks_1.png';
import howItWorks2Img from '../../../images/howitworks_2.jpg';

export default function Carousel() {
  return (
    <Container>
      <Slick
        autoplay
        infinite
        slidesToShow={1}
      >
        <div>
          <div className='work'>
            <div className='work__image'>
              <img src={howItWorks1Img} alt="How it works 1"/>
            </div>
            <div className='work__content'>
              <h1 className='work__title'>How it works</h1>
              <p className='work__description'>
                Culpa qui officia deserunt mollit anim id est laborum. 
                Sed ut perspiciatis unde omnis iste natus error sit voluptartem 
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                quae ab illo inventore veritatis et quasi ropeior architecto beatae 
                vitae dicta sunt explicabo. Nemo eniem ipsam voluptatem quia voluptas 
                sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
                dolores eosep quiklop ratione voluptatem sequi nesciunt. Neque porro 
                quisquam est, quepi dolorem ipsum.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className='work'>
            <div className='work__image'>
              <img src={howItWorks2Img} alt="How it works 2"/>
            </div>
            <div className='work__content'>
              <h1 className='work__title'>How it works</h1>
              <p className='work__description'>
                Culpa qui officia deserunt mollit anim id est laborum. 
                Sed ut perspiciatis unde omnis iste natus error sit voluptartem 
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                quae ab illo inventore veritatis et quasi ropeior architecto beatae 
                vitae dicta sunt explicabo. Nemo eniem ipsam voluptatem quia voluptas 
                sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
                dolores eosep quiklop ratione voluptatem sequi nesciunt. Neque porro 
                quisquam est, quepi dolorem ipsum.
              </p>
            </div>
          </div>
        </div>
      </Slick>
    </Container>
  );
}