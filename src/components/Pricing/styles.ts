import styled from 'styled-components';

export const Container = styled.div`
  min-height: 97.5rem;
  width: 100%;
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
`;