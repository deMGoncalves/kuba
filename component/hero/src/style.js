import styled from '@kuba/styled'

export default styled`
  .hero {
    width: 100%;
  }

  .hero__container {
    aspect-ratio: 4 / 3;
    background-color: var(--color-master-lightest);
    border-radius: var(--border-radius-sm);
  }

  @media (min-width: 768px) {
    .hero__container {
      aspect-ratio: 16 / 9;
    }
  }

  @media (min-width: 960px) {
    .hero__container {
      aspect-ratio: 21 / 9;
    }
  }
`
