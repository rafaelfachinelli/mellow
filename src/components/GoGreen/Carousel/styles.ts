import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  overflow: hidden;

  .works, .about {
    max-width: 640px;
  }

  .works__title {
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

  .works__partners img {
    margin-right: 6rem;
  }

  .about__title {
    font-size: 5rem;
    font-weight: 600;
  }

  .about__description {
    margin: 2.5rem 0;

    color: var(--color-text-darker);
    font-size: 2rem;
  }
`;