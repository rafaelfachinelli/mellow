import Button from '../../../Button';

import { Container } from './styles';

export default function Recipe(props) {
  function recipeClick(e) {
    e.target.parentElement.parentElement.classList.toggle('recipe__details--show');
    e.target.parentElement.parentElement.classList.toggle('recipe__details--hide');
  }

  return (
    <Container>
      <div className='recipe recipe__details--hide' onClick={recipeClick}>
        <div className='recipe__face face--front'>
          <img src={props.image} alt={props.name}/>
          <div className='recipe__face face--back'>
            <h1 className='recipe__name'>{props.name}</h1>
            <p className='recipe__description'>{props.description}</p>
            <Button>GO TO RECIPE</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}