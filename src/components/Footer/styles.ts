import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 745px;
  padding: 0 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--color-background-footer);

  .footer__navigator {
    width: 1600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 7rem;
  }

  .footer__list {
    display: flex;
    list-style: none;
  }

  .footer__item {
    color: var(--color-text-lighter);
    font-size: 1.8rem;
    font-weight: 600;
  }

  .footer__item + .footer__item{
    margin-left: 4rem;
  }

  .footer__content {
    width: 1600px;
  }

  .footer__email p {
    color: var(--color-text-lighter);
    font-size: 4.5rem;
    font-weight: 600;
  }

  .footer__email span {
    color: var(--color-primary);
    font-size: 4.5rem;
    font-weight: 600;
  }

  .email__input {
    margin: 5rem 0;
  }

  .email__input input {
    width: 330px;
    height: 46px;
    padding: 1rem;

    border: none;
    border-radius: 1rem 0 0 1rem;
    outline: none;
  }

  .email__input input:placeholder {
    font-size: 1.2rem;
  }

  .email__input button {
    width: 124px;
    height: 46px;
    margin-left: .5rem;

    background: var(--color-background-button);
    color: var(--color-text-darker);
    font-size: 1.4rem;
    font-weight: 600;
    border: none;
    border-radius: 0 1rem 1rem 0;
    outline: none;
  }

  .footer__social img + img {
    margin-left: 3rem;
  }

  .footer__copyright {
    margin-top: 2.5rem;

    color: var(--color-text-lighter);
    font-size: 1.2rem;
  }
`;