import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  overflow: hidden;

  .works,
  .about {
    max-width: 640px;
    padding: 1rem;
  }

  .works__title {
    font-family: 'EksellDisplayMedium';
    font-size: 5rem;
    font-weight: 600;
  }

  .works__description {
    margin: 2.5rem 0;

    color: var(--color-text-darker);
    font-size: 2rem;
  }

  .works__partners {
    display: flex;
    flex-direction: row;
  }

  .works__partners a {
    cursor: pointer;
  }

  .works__partners img {
    max-width: 130px;
    margin-right: 6rem;
  }

  .about__title {
    font-family: 'EksellDisplayMedium';
    font-size: 5rem;
    font-weight: 600;
  }

  .about__description {
    margin: 2.5rem 0;

    color: var(--color-text-darker);
    font-size: 2rem;
  }

  /*Phone*/
  @media (min-width: 320px) 
    and (max-width: 480px) {
    .works__partners img {
      max-width: 40px;
      margin-right: 2rem;
    }
  }

  /*Tablet*/
  @media (min-width: 481px) 
    and (max-width: 1100px) {
    .works__partners img {
      max-width: 90px;
      margin-right: 4rem;
    }
  }
`;