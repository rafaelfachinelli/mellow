import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 97.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 3.5rem;

  background: var(--color-primary);

  .header__image img {
    max-width: 440px;
    max-height: 850px;
    margin-right: 10rem;
  }

  .header__title {
    color: var(--color-text-lighter);
    font-family: 'EksellDisplaySmall';
    font-size: 5rem;
    font-weight: 500;
  }

  .header__description {
    max-width: 730px;
    margin: 2rem 0 4rem 0;

    color: var(--color-text-lighter);
    font-size: 2rem;
  }

  .header__plans {
    display: flex;
    flex-wrap: wrap;
  }

  .plan + .plan {
    margin-left: 4rem;
  }

  /*Phone*/
  @media (min-width: 320px) 
    and (max-width: 480px) {
    
    height: auto;
    padding-bottom: 9rem;

    .header__title {
      margin-top: 2rem;
    }
    
    .header__image img {
      display: none;
    }

    .header__plans {
      justify-content: center;
    }

    .plan + .plan {
      margin-left: 1rem;
    }
  }

  /*Tablet*/
  @media (min-width: 481px) 
    and (max-width: 1100px) {
      
    height: auto;
    padding-bottom: 7rem;

    .header__title {
      margin-top: 2rem;
    }

    .header__image img {
      display: none;
    }

    .header__plans {
      justify-content: center;
    }

    .plan + .plan {
      margin-left: 1rem;
    }
  }

  /*Desktop*/
  @media (min-width: 1101px)
    and (max-width: 1600px) {
    
    height: 70rem;
    
    .header__image img {
      display: none;
    }
  }
`;