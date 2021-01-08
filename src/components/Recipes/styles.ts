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
    color: var(--color-text-darker);
    max-width: 1320px;
    text-align: center;
    font-size: 2rem;
  }
`;