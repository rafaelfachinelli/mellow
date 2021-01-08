import Plan from '../Plan';

import { Container } from './styles';

import headerImg from '../../images/header.png';
import plan1Img from '../../images/plan_1.svg';
import plan2Img from '../../images/plan_2.svg';
import plan3Img from '../../images/plan_3.svg';

export default function Pricing() {
  return (
    <Container>
      <div className='header__image'>
        <img src={headerImg} alt="Pricing Plans"/>
      </div>
      <div className='header__content'>
        <h1 className='header__title'>Your subscription has expired…</h1>
        <p className='header__description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          In a interdum urna, et sagittis libero. 
          In eros nunc, congue eget elit at
        </p>
        <div className='header__plans'>
          <Plan
            name='Plan 01'
            trial='7'
            banner={plan1Img}
            benefits={[
              'Users',
              'Save Recipes',
              'Manage Purchase',
              'Compare Price',
              'New recipes every week'
            ]}
          />
          <Plan
            name='Plan 02'
            trial='7'
            banner={plan2Img}
            benefits={[
              'Users', 
              'Save Recipes', 
              'Manage Purchase',
              'Compare Price', 
              'New recipes every week'
            ]}
          />
          <Plan
            name='Plan 03'
            trial='7'
            banner={plan3Img}
            benefits={[
              'Users', 
              'Save Recipes', 
              'Manage Purchase',
              'Compare Price', 
              'New recipes every week'
            ]}
          />
        </div>
      </div>
    </Container>
  );
}