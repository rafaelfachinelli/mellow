import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 108rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 3.5rem;

  .download__content {
    max-width: 756px;
    padding-right: 1rem;
  }

  .download__title {
    color: var(--color-text-title);
    font-family: 'EksellDisplayMedium';
    font-size: 8.6rem;
    font-weight: 400;
  }

  .download__description {
    max-width: 538px;
    margin-top: 2rem;

    color: var(--color-text-darker);
    font-size: 2.2rem;
  }

  .download__app {
    margin-top: 15rem;

    color: var(--color-text-darker);
    font-size: 2rem;
  }

  .download__stores {
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
  }

  .download__stores a:first-child {
    margin-right: 1rem;
  }

  .download__stores img {
    width: 9.6rem;
    height: 3.2rem;
  }

  .download__image img {
    max-width: 77.6rem;
    max-height: 77.6rem;
  }

  /*Phone*/
  @media (min-width: 320px) 
    and (max-width: 480px) {
    
    height: 80rem;

    .download__app {
      margin-top: 5rem;
    }

    .download__image img {
      display: none;
    }
  }

  /*Tablet*/
  @media (min-width: 481px) 
    and (max-width: 1100px) {
    
    height: 75rem;

    .download__app {
      margin-top: 7rem;
    }

    .download__image img {
      display: none;
    }
  }

  /*Desktop*/
  @media (min-width: 1101px)
    and (max-width: 1600px) {

    height: 85rem;

    .download__app {
      margin-top: 10rem;
    }

    .download__image img {
      max-width: 60rem;
      max-height: 60rem;
    }
  }
`;