import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 10.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 3.5rem;
  position: sticky;
  top: 0;
  z-index: 1;

  background: var(--color-primary);

  .nav {
    max-width: 560px;
    width: 100%;
  }
  
  .nav__list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    list-style: none;
  }

  .list__item a {
    color: var(--color-text-lighter);
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: 600;
  }

  .item__active {
    border-bottom: 2px solid #fff;
  }

  .list__profile img {
    width: 73px;
    height: 73px;
    padding: .3rem;
    margin-left: 2.5rem;

    border: 2px solid #fff;
    border-radius: 50%;
  }

`;