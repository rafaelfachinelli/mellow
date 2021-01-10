import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 108rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .recipes__title {
    color: var(--color-text-darker);
    font-family: 'EksellDisplayMedium';
    font-size: 5rem;
    font-weight: 500;
  }

  .recipes__description {
    max-width: 1320px;
    margin: 4rem 3.5rem 7rem 3.5rem;
    color: var(--color-text-darker);
    text-align: center;
    font-size: 2rem;
  }

  /*Phone*/
  @media (min-width: 320px) 
    and (max-width: 480px) {
    
  }

  /*Tablet*/
  @media (min-width: 481px) 
    and (max-width: 1100px) {
    
    height: 90rem;

    .recipes__description {
      margin: 4rem 3.5rem 4rem 3.5rem;
    }
  }

  /*Desktop*/
  @media (min-width: 1101px)
    and (max-width: 1600px) {
    height: 85rem;
  }
`;