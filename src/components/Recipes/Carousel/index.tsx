import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  function recipeClick(e) {
    e.target.parentElement.parentElement.parentElement.classList.toggle('recipe__details');
    console.log(e.target.parentElement.parentElement.parentElement);
    console.log(e);
  }

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
        <div className='recipe' onClick={recipeClick}>
          <div className='recipe__face face--front'>
            <img src={recipe0Img} alt="Recipe 0"/>
            <div className='recipe__face face--back'>
              <h1 className='recipe__name'>Recipe Name Goes Here</h1>
              <p className='recipe__description'>
                Culpa qui officia deserunt mollit anim id est laborum. 
                Sed ut perspiciatis unde omnis iste natus error sit 
                voluptartem accusantium doloremque laudantium.
              </p>
              <div className='recipe__button'>
                <button>GO TO RECIPE</button>
              </div>
            </div>
          </div>
        </div>
        <div className='recipe' onClick={recipeClick}>
          <div className='recipe__face face--front'>
            <img src={recipe1Img} alt="Recipe 1"/>
            <div className='recipe__face face--back'>
              <h1 className='recipe__name'>Recipe Name Goes Here</h1>
              <p className='recipe__description'>
                Culpa qui officia deserunt mollit anim id est laborum. 
                Sed ut perspiciatis unde omnis iste natus error sit 
                voluptartem accusantium doloremque laudantium.
              </p>
              <div className='recipe__button'>
                <button>GO TO RECIPE</button>
              </div>
            </div>
          </div>
        </div>
        <div className='recipe' onClick={recipeClick}>
          <div className='recipe__face face--front'>
            <img src={recipe2Img} alt="Recipe 0"/>
            <div className='recipe__face face--back'>
              <h1 className='recipe__name'>Recipe Name Goes Here</h1>
              <p className='recipe__description'>
                Culpa qui officia deserunt mollit anim id est laborum. 
                Sed ut perspiciatis unde omnis iste natus error sit 
                voluptartem accusantium doloremque laudantium.
              </p>
              <div className='recipe__button'>
                <button>GO TO RECIPE</button>
              </div>
            </div>
          </div>
        </div>
        <div className='recipe' onClick={recipeClick}>
          <div className='recipe__face face--front'>
            <img src={recipe3Img} alt="Recipe 0"/>
            <div className='recipe__face face--back'>
              <h1 className='recipe__name'>Recipe Name Goes Here</h1>
              <p className='recipe__description'>
                Culpa qui officia deserunt mollit anim id est laborum. 
                Sed ut perspiciatis unde omnis iste natus error sit 
                voluptartem accusantium doloremque laudantium.
              </p>
              <div className='recipe__button'>
                <button>GO TO RECIPE</button>
              </div>
            </div>
          </div>
        </div>
        <div className='recipe' onClick={recipeClick}>
          <div className='recipe__face face--front'>
            <img src={recipe0Img} alt="Recipe 0"/>
            <div className='recipe__face face--back'>
              <h1 className='recipe__name'>Recipe Name Goes Here</h1>
              <p className='recipe__description'>
                Culpa qui officia deserunt mollit anim id est laborum. 
                Sed ut perspiciatis unde omnis iste natus error sit 
                voluptartem accusantium doloremque laudantium.
              </p>
              <div className='recipe__button'>
                <button>GO TO RECIPE</button>
              </div>
            </div>
          </div>
        </div>
        <div className='recipe' onClick={recipeClick}>
          <div className='recipe__face face--front'>
            <img src={recipe1Img} alt="Recipe 0"/>
            <div className='recipe__face face--back'>
              <h1 className='recipe__name'>Recipe Name Goes Here</h1>
              <p className='recipe__description'>
                Culpa qui officia deserunt mollit anim id est laborum. 
                Sed ut perspiciatis unde omnis iste natus error sit 
                voluptartem accusantium doloremque laudantium.
              </p>
              <div className='recipe__button'>
                <button>GO TO RECIPE</button>
              </div>
            </div>
          </div>
        </div>
        <div className='recipe' onClick={recipeClick}>
          <div className='recipe__face face--front'>
            <img src={recipe2Img} alt="Recipe 0"/>
            <div className='recipe__face face--back'>
              <h1 className='recipe__name'>Recipe Name Goes Here</h1>
              <p className='recipe__description'>
                Culpa qui officia deserunt mollit anim id est laborum. 
                Sed ut perspiciatis unde omnis iste natus error sit 
                voluptartem accusantium doloremque laudantium.
              </p>
              <div className='recipe__button'>
                <button>GO TO RECIPE</button>
              </div>
            </div>
          </div>
        </div>
        <div className='recipe' onClick={recipeClick}>
          <div className='recipe__face face--front'>
            <img src={recipe3Img} alt="Recipe 0"/>
            <div className='recipe__face face--back'>
              <h1 className='recipe__name'>Recipe Name Goes Here</h1>
              <p className='recipe__description'>
                Culpa qui officia deserunt mollit anim id est laborum. 
                Sed ut perspiciatis unde omnis iste natus error sit 
                voluptartem accusantium doloremque laudantium.
              </p>
              <div className='recipe__button'>
                <button>GO TO RECIPE</button>
              </div>
            </div>
          </div>
        </div>
      </Slick>
    </Container>
  )
}