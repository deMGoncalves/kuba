import styled from '@kuba/styled'

export default styled`
  .hero {
    width: 100%;
  }

  .hero__banner {
    align-items: center;
    aspect-ratio: 480 / 600;
    background-color: var(--color-master-lightest);
    border-radius: var(--border-radius-sm);
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-sm);
    justify-content: flex-end;
    padding: var(--spacing_inset-md);
  }

  @media (min-width: 481px) {
    .hero__banner {
      aspect-ratio: 768 / 550;
    }
  }

  @media (min-width: 769px) {
    .hero__banner {
      aspect-ratio: 960 / 500;
    }
  }

  @media (min-width: 961px) {
    .hero__banner {
      aspect-ratio: 1200 / 500;
    }
  }

  .hero__title{
    text-align: center;
  }
`
