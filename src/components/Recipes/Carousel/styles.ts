import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;

  .recipe {
    height: 100%;
  }

  .slick-slide {
    transition: .5s;
  }

  .recipe__face {
    transition: .5s;
  }

  .face--front {
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;

    border-radius: 1.5rem;
  }

  .face--back {
    width: 368px;
    height: 448px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    transform: translateX(0px);
    opacity: 0;
    z-index: -1;

    background: #fff;
    border-radius: 0 1.5rem 1.5rem 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 6px, rgba(0, 0, 0, 0.1) 0px 3px 6px;
  }

  .recipe__details .face--back {
    transform: translateX(340px);
    opacity: 1;
  }

  .recipe img {
    max-width: 368px;
  }

  .recipe__details {
    width: 736px;
    display: flex;
  }

  .recipe__name {
    max-width: 320px;
    margin-bottom: 1rem;

    color: #7B7B7B;
    font-size: 2.6rem;
    font-weight: 700;
  }

  .recipe__description {
    color: var(--color-text-darker);
    font-size: 1.6rem;
    text-align: center;
  }

  .recipe__button button {
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