import { Container } from './styles';

export default function Recipe(props) {
  function recipeClick(e) {
    e.target.parentElement.parentElement.classList.toggle('recipe__details');
  }

  return (
    <Container>
      <div className='recipe' onClick={recipeClick}>
        <div className='recipe__face face--front'>
          <img src={props.image} alt={props.name}/>
          <div className='recipe__face face--back'>
            <h1 className='recipe__name'>{props.name}</h1>
            <p className='recipe__description'>{props.description}</p>
            <div className='recipe__button'>
              <button>GO TO RECIPE</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}