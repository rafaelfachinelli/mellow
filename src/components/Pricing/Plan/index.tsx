import Button from '../../Button';

import { Container } from './styles';

export default function Plan(props) {
  return (
    <Container>
      <h1 className='plan__name'>{props.name}</h1>
      <p className='plan__trial'>{props.trial} Days trial</p>
      <div className='plan__banner'>
        <img src={props.banner} alt={props.name}/>
      </div>
      <div className='plan__content'>
        <ul className='plan__benefits'>
          <li className='benefits__item'>{props.benefits[0]}</li>
          <li className='benefits__item'>{props.benefits[1]}</li>
          <li className='benefits__item'>{props.benefits[2]}</li>
          <li className='benefits__item'>{props.benefits[3]}</li>
          <li className='benefits__item'>{props.benefits[4]}</li>
        </ul>
        <ul className='plan__checks'>
          <li className='check__item'> - </li>
          <li className='check__item'> - </li>
          <li className='check__item'> - </li>
          <li className='check__item'> - </li>
          <li className='check__item'> - </li>
        </ul>
      </div>
      <div className='plan__button'>
        <Button>LET'S TRY</Button>
      </div>
    </Container>
  );
}