import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  overflow: hidden;

  .work {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .work__image img {
    width: 594px;
    height: 760px;

    border-radius: 1rem;
  }

  .work__content {
    max-width: 640px;
    display: flex;
    flex-direction: column;
    margin-left: 10rem;
  }

  .work__title {
    margin-bottom: 2.5rem;

    color: var(--color-text-lighter);
    font-family: 'EksellDisplayMedium';
    font-size: 5rem;
  }

  .work__description {
    color: var(--color-text-lighter);
    font-size: 2rem;
  }
`;