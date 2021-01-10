import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 108rem;
  padding-left: 3.5rem;
  display: flex;
  align-items: center;

  .gogreen__image {
    max-width: 650px;
    margin-bottom: 20rem;
  }

  /*Phone*/
  @media (min-width: 320px) 
    and (max-width: 480px) {
      
    height: 60rem;
    flex-wrap: wrap;
    padding-left: 0;
    
    .gogreen__image {
      display: none;
    }
  }

  /*Tablet*/
  @media (min-width: 481px) 
    and (max-width: 1100px) {
  
    height: 60rem;
    padding-left: 0;
    
    .gogreen__image {
      display: none;
    }
  }

  /*Desktop*/
  @media (min-width: 1101px)
    and (max-width: 1600px) {

    height: 75rem;

    .gogreen__image {
      max-width: 450px;
      margin-bottom: 5rem;
    }
  }
`;