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

  .navigator__logo {
    cursor: pointer;
  }

  .nav {
    max-width: 560px;
    width: 100%;
  }

  #hamburguer__checkbox{
    position: absolute;
    opacity: 0;
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
    transition: .2s;

    color: var(--color-text-lighter);
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      color: var(--color-text-darker);
    }
  }

  .list__item .item__active {
    color: var(--color-text-darker);
    border-bottom: 2px solid var(--color-text-darker);
  }

  .list__profile img {
    width: 73px;
    height: 73px;
    padding: .3rem;
    margin-left: 2.5rem;

    border: 2px solid #fff;
    border-radius: 50%;
  }

  /*Phone*/
  @media (min-width: 320px) 
    and (max-width: 480px) {
    
    height: 7rem;

    .nav__hamburguer label{
      width: 30px;
      height: 22px;
      display: block;
      position: absolute;
      right: 3rem;
      top: 2rem;
      cursor: pointer;
    }

    .nav__hamburguer label span{
      width: 100%;
      height: 5px;
      display: block;
      position: absolute;
      transition: 0.25s ease-in-out;

      background: #fff;
      border-radius: 30px;
    }

    .nav__hamburguer label span:nth-child(1){
      top: 0;
    }

    .nav__hamburguer label span:nth-child(2){
      top: 8px;
    }

    .nav__hamburguer label span:nth-child(3){
      top: 16px;
    }

    #hamburguer__checkbox:checked + label span:nth-child(1){
      top: 8px;
      transform: rotate(-45deg);
    }

    #hamburguer__checkbox:checked + label span:nth-child(2){
      opacity: 0;
    }

    #hamburguer__checkbox:checked + label span:nth-child(3){
      top: 8px;
      transform: rotate(45deg);
    }

    .nav__list {
      min-width: 0;
      width: 100%;
      flex-wrap: nowrap;
      flex-direction: column;
      justify-content: none;
      position: absolute;
      left: 0;
      top: 7rem;
      padding: 1.5rem 0;

      transform: translateY(-7rem);
      transition: .2s ease-in-out;
      z-index: -1;
      
      background: var(--color-primary);
      opacity: 0;
    }

    .list__item {
      margin-right: 0;
      margin-bottom: 2rem;
    }

    .list__item a {
      font-size: 2.4rem;
    }

    .list__profile {
      display: none;
    }

    #hamburguer__checkbox:checked ~ .nav__list {
      transform: translateY(0);
      opacity: 1;
    }
  }

  /*Tablet*/
  @media (min-width: 481px) 
    and (max-width: 1100px) {
    height: 7rem;

    .nav__hamburguer label{
      width: 30px;
      height: 22px;
      display: block;
      position: absolute;
      right: 3rem;
      top: 2rem;
      cursor: pointer;
    }

    .nav__hamburguer label span{
      width: 100%;
      height: 5px;
      display: block;
      position: absolute;
      transition: 0.25s ease-in-out;

      background: #fff;
      border-radius: 30px;
    }

    .nav__hamburguer label span:nth-child(1){
      top: 0;
    }
    
    .nav__hamburguer label span:nth-child(2){
      top: 8px;
    }
    
    .nav__hamburguer label span:nth-child(3){
      top: 16px;
    }

    #hamburguer__checkbox:checked + label span:nth-child(1){
      top: 8px;
      transform: rotate(-45deg);
    }
    
    #hamburguer__checkbox:checked + label span:nth-child(2){
      opacity: 0;
    }
    
    #hamburguer__checkbox:checked + label span:nth-child(3){
      top: 8px;
      transform: rotate(45deg);
    }

    .nav__list {
      min-width: 0;
      width: 100%;
      flex-wrap: nowrap;
      flex-direction: row;
      justify-content: none;
      position: absolute;
      left: 0;
      top: 7rem;
      padding: 1.5rem 0;

      transform: translateY(-7rem);
      transition: .2s ease-in-out;
      z-index: -1;
      
      background: var(--color-primary);
      opacity: 0;
    }

    .list__item {
      /* margin-bottom: 2rem; */
    }
    
    .list__item a {
      font-size: 2.4rem;
    }

    #hamburguer__checkbox:checked ~ .nav__list {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;