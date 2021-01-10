import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Recipe from './Recipe';

import recipe0Img from '../../../images/Recipes/Carousel/recipe_0.png';
import recipe1Img from '../../../images/Recipes/Carousel/recipe_1.png';
import recipe2Img from '../../../images/Recipes/Carousel/recipe_2.png';
import recipe3Img from '../../../images/Recipes/Carousel/recipe_3.png';

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
        focusOnSelect
        pauseOnFocus
        variableWidth
      >
        <Recipe
          image={recipe0Img}
          name='Recipe Name Goes Here'
          description='
            Culpa qui officia deserunt mollit anim id est laborum. 
            Sed ut perspiciatis unde omnis iste natus error sit 
            voluptartem accusantium doloremque laudantium.
          '
        />
        <Recipe
          image={recipe1Img}
          name='Recipe Name Goes Here'
          description='
            Culpa qui officia deserunt mollit anim id est laborum. 
            Sed ut perspiciatis unde omnis iste natus error sit 
            voluptartem accusantium doloremque laudantium.
          '
        />
        <Recipe
          image={recipe2Img}
          name='Recipe Name Goes Here'
          description='
            Culpa qui officia deserunt mollit anim id est laborum. 
            Sed ut perspiciatis unde omnis iste natus error sit 
            voluptartem accusantium doloremque laudantium.
          '
        />
        <Recipe
          image={recipe3Img}
          name='Recipe Name Goes Here'
          description='
            Culpa qui officia deserunt mollit anim id est laborum. 
            Sed ut perspiciatis unde omnis iste natus error sit 
            voluptartem accusantium doloremque laudantium.
          '
        />
        <Recipe
          image={recipe0Img}
          name='Recipe Name Goes Here'
          description='
            Culpa qui officia deserunt mollit anim id est laborum. 
            Sed ut perspiciatis unde omnis iste natus error sit 
            voluptartem accusantium doloremque laudantium.
          '
        />
        <Recipe
          image={recipe1Img}
          name='Recipe Name Goes Here'
          description='
            Culpa qui officia deserunt mollit anim id est laborum. 
            Sed ut perspiciatis unde omnis iste natus error sit 
            voluptartem accusantium doloremque laudantium.
          '
        />
        <Recipe
          image={recipe2Img}
          name='Recipe Name Goes Here'
          description='
            Culpa qui officia deserunt mollit anim id est laborum. 
            Sed ut perspiciatis unde omnis iste natus error sit 
            voluptartem accusantium doloremque laudantium.
          '
        />
        <Recipe
          image={recipe3Img}
          name='Recipe Name Goes Here'
          description='
            Culpa qui officia deserunt mollit anim id est laborum. 
            Sed ut perspiciatis unde omnis iste natus error sit 
            voluptartem accusantium doloremque laudantium.
          '
        />
      </Slick>
    </Container>
  )
}