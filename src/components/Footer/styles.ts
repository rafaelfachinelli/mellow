import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 74.5rem;
  padding: 0 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--color-background-footer);

  .footer__navigator {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 7rem;
    padding: 0 13rem;
  }

  .footer__navigator img {
    cursor: pointer;
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

  .footer__item a {
    transition: .2s;

    cursor: pointer;
  }

  .footer__item a:hover {
    color: var(--color-primary);
  }

  .footer__item + .footer__item{
    margin-left: 4rem;
  }

  .footer__logo {
    margin-left: 1.5rem;
  }

  .footer__content {
    width: 100%;
    padding: 0 13rem;
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
    transition: .2s ease-in-out;
    
    background-image: linear-gradient(var(--color-background-button) 50%, var(--color-text-title));
    background-size: 200% 200%;
    background-position: top left;
    color: var(--color-text-darker);
    font-size: 1.4rem;
    font-weight: 600;
    border: none;
    border-radius: 0 1rem 1rem 0;
    outline: none;
    cursor: pointer;

    &:hover {
      background-position: bottom right;
    }
  }

  .footer__social a {
    cursor: pointer;
  }

  .footer__social a + a {
    margin-left: 3rem;
  }

  .footer__copyright {
    margin-top: 2.5rem;

    color: var(--color-text-lighter);
    font-size: 1.2rem;
  }

  /*Phone*/
  @media (min-width: 320px) 
    and (max-width: 480px) {

    height: 70rem;
    padding: 0;

    .footer__navigator {
      flex-direction: column-reverse;
      margin-bottom: 2rem;
      padding: 0;
    }

    .footer__list {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }

    .footer__item + .footer__item{
      margin-left: 0;
      margin-top: 1rem;
    }

    .footer__logo {
      margin-left: 0;
      margin-bottom: 2rem;
    }
    
    .footer__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
    }

    .footer__content p {
      text-align: center;
    }

    .footer__email,
    .email__input {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .email__input input,
    .email__input button {
      border-radius: 1rem;
    }

    .email__input input {
      width: 310px;
    }

    .email__input button {
      margin-top: 1rem;
    }
  }

  /*Tablet*/
  @media (min-width: 481px) 
    and (max-width: 1100px) {
    
    height: 55rem;
    padding: 0;

    .footer__navigator {
      flex-direction: column-reverse;
      padding: 0;
    }

    .footer__list {
      display: flex;
      justify-content: space-evenly;
    }

    .footer__logo {
      margin-left: 0;
      margin-bottom: 2rem;
    }
    
    .footer__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
    }

    .footer__email {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  /*Desktop*/
  @media (min-width: 1101px)
    and (max-width: 1600px) {
    height: 55rem;

    .footer__navigator {
      padding: 0 .5rem;
    }

    .footer__content {
      padding: 0 .5rem;
    }
  }
`;