import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 108rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 3.5rem;

  .download__content {
    max-width: 756px;
    margin-right: 3.5rem;
  }

  .download__title {
    color: var(--color-text-title);
    font-size: 8.6rem;
    font-weight: 400;
  }

  .download__description {
    max-width: 538px;
    margin-top: 2rem;

    color: var(--color-text-darker);
    font-size: 2.2rem;
  }

  .download__button {
    width: 124px;
    height: 46px;
    margin: 3.5rem 0;

    background: var(--color-background-button);
    color: var(--color-text-darker);
    font-size: 1.4rem;
    font-weight: 600;
    border: none;
    border-radius: 1rem;
    outline: none;
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

  .download__stores img {
    width: 9.6rem;
    height: 3.2rem;
  }

  .download__stores img:first-child {
    margin-right: 1rem;
  }
`;