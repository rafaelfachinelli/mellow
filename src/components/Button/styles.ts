import styled from 'styled-components';

export const Container = styled.button`
  width: 124px;
  height: 46px;
  margin: 3.5rem 0;
  transition: .2s ease-in-out;

  background-image: linear-gradient(var(--color-background-button) 50%, var(--color-text-title));
  background-size: 200% 200%;
  background-position: top left;
  color: var(--color-text-darker);
  font-size: 1.4rem;
  font-weight: 600;
  border: none;
  border-radius: 1rem;
  outline: none;
  cursor: pointer;

  &:hover {
    background-position: bottom right;
  }
  
`;