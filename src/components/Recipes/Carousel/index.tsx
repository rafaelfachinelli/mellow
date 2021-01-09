import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import recipe0Img from '../../../images/recipe_0.png';
import recipe1Img from '../../../images/recipe_1.png';
import recipe2Img from '../../../images/recipe_2.png';
import recipe3Img from '../../../images/recipe_3.png';

import { Container } from './styles';

export default function Carousel() {
  const responsive = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  return (
    <Container>
      <Slick
        autoplay
        infinite
        centerMode
        slidesToShow={5}
        responsive={responsive}
      >
        <div className='recipe'>
          <img src={recipe0Img} alt="Recipe 0"/>
        </div>
        <div className='recipe'>
          <img src={recipe1Img} alt="Recipe 1"/>
        </div>
        <div className='recipe'>
          <img src={recipe2Img} alt="Recipe 2"/>
        </div>
        <div className='recipe'>
          <img src={recipe3Img} alt="Recipe 3"/>
        </div>
        <div className='recipe'>
          <img src={recipe0Img} alt="Recipe 0"/>
        </div>
        <div className='recipe'>
          <img src={recipe1Img} alt="Recipe 1"/>
        </div>
        <div className='recipe'>
          <img src={recipe2Img} alt="Recipe 2"/>
        </div>
        <div className='recipe'>
          <img src={recipe3Img} alt="Recipe 3"/>
        </div>
      </Slick>
    </Container>
  )
}