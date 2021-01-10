import styled from 'styled-components';

export const Container = styled.div`
  width: 27.7rem;
  height: 45.5rem;
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
    height: 114px;
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

  /*Phone*/
  @media (min-width: 320px) 
    and (max-width: 480px) {
    margin-top: 5rem;

    .benefits__item  {
      margin-bottom: .5rem;
    }

    .check__item {
      margin-bottom: .5rem;
    }
  }

  /*Tablet*/
  @media (min-width: 481px) 
    and (max-width: 1100px) {
    margin-top: 5rem;

    .benefits__item  {
      margin-bottom: 1rem;
    }

    .check__item {
      margin-bottom: 1rem;
    }
  }
`;