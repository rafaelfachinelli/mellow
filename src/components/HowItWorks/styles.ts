import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 108rem;
  display: flex;
  align-items: center;

  background: var(--color-primary);

  /*Phone*/
  @media (min-width: 320px) 
    and (max-width: 480px) {
    height: 50rem;
  }

  /*Tablet*/
  @media (min-width: 481px) 
    and (max-width: 1100px) {
    height: 50rem;
  }

  /*Desktop*/
  @media (min-width: 1101px)
    and (max-width: 1600px) {
    height: 75rem;
  }
`;