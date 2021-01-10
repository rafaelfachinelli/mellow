import styled from 'styled-components';

export const Container = styled.div`
  .recipe {
    height: 100%;
    transition: .5s;
  }

  .recipe img {
    max-width: 368px;
  }

  .recipe__face {
    transition: .5s;
  }

  .face--front {
    position: relative;
    display: flex;
    align-items: center;

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

  .recipe__details--show {
    animation: showRecipeDetails .5s forwards;
  }

  .recipe__details--hide {
    animation: hideRecipeDetails .5s forwards;
  }

  @keyframes showRecipeDetails {
    from {
      width: 368px;
    }

    to {
      width: 736px;
    }
  }

  @keyframes hideRecipeDetails {
    from {
      width: 736px;
    }

    to {
      width: 368px;
    }
  }

  .recipe__details--show .face--back {
    transform: translateX(340px);
    opacity: 1;
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
`;