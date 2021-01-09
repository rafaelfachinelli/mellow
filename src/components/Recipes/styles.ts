import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 108rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .recipes__title {
    color: var(--color-text-darker);
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
`;