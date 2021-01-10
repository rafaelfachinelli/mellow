import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  overflow: hidden;

  .work {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .work__image img {
    width: 594px;
    height: 760px;

    border-radius: 1rem;
  }

  .work__content {
    max-width: 640px;
    display: flex;
    flex-direction: column;
    margin-left: 10rem;
  }

  .work__title {
    margin-bottom: 2.5rem;

    color: var(--color-text-lighter);
    font-family: 'EksellDisplayMedium';
    font-size: 5rem;
  }

  .work__description {
    color: var(--color-text-lighter);
    font-size: 2rem;
  }

  /*Phone*/
  @media (min-width: 320px) 
    and (max-width: 480px) {
    .work__image img {
      display: none;
    }

    .work__content {
      max-width: 400px;
      margin: 0 1rem;
    }
  }

  /*Tablet*/
  @media (min-width: 481px) 
    and (max-width: 1100px) {
    .work {
      padding-left: 1rem;
    }

    .work__image img {
      width: 200px;
      height: 256px;
    }

    .work__content {
      max-width: 400px;
      margin: 0 1.5rem;
    }
  }

  /*Desktop*/
  @media (min-width: 1101px)
    and (max-width: 1600px) {
    .work__image img {
      width: 400px;
      height: 512px;
    }

    .work__content {
      max-width: 550px;
      margin-left: 7rem;
    }
  }
`;