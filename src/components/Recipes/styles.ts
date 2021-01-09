import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 108rem;
  padding: 0 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .recipes__title {
    color: var(--color-text-darker);
    font-size: 5rem;
    font-weight: 600;
  }

  .recipes__description {
    max-width: 1320px;
    margin: 2rem 0 5rem 0;

    color: var(--color-text-darker);
    text-align: center;
    font-size: 2rem;
  }
`;