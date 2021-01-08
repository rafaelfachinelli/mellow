import styled from 'styled-components';

export const Container = styled.div`
  width: 27.7rem;
  height: 45.5rem;
  margin-right: 4rem;
  padding: 1.5rem 2.5rem;

  background: #fff;
  border-radius: 1rem;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);

  .plan__name {
    color: var(--color-text-title);
    font-size: 2.9rem;
    font-weight: 600;

  }

  .plan__trial {
    color: var(--color-red);
    font-size: 1.3rem;
    font-weight: 600;
  }

  .plan__banner {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }

  .plan__content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .plan__benefits {
    color: var(--color-text-darker);
    font-size: 1.4rem;
    list-style: none;
  }

  .benefits__item  {
    margin-bottom: 1.5rem;
  }

  .plan__checks {
    color: var(--color-text-darker);
    font-size: 1.4rem;
    list-style: none;
  }

  .check__item {
    margin-bottom: 1.5rem;
  }

  .plan__button {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .plan__button button {
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
`;