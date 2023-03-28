import styled from '@kuba/styled'

export default styled`
  .hero {
    width: 100%;
  }

  .hero__container {
    align-items: center;
    aspect-ratio: 3 / 4;
    background-color: var(--color-master-lightest);
    border-radius: var(--border-radius-sm);
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-md);
    justify-content: flex-end;
    padding: var(--spacing_inset-md) var(--spacing_inset-xs) !important;
  }

  @media (min-width: 481px) {
    .hero__container {
      aspect-ratio: 5 / 4;
    }
  }

  @media (min-width: 769px) {
    .hero__container {
      aspect-ratio: 16 / 9;
    }
  }

  @media (min-width: 961px) {
    .hero__container {
      aspect-ratio: 21 / 9;
    }
  }

  .hero__text {
    text-align: center;
  }
`
