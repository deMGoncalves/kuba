import styled from '@kuba/styled'

export default styled.style`
  .shelf > div {
    display: flex;
    flex-direction: column;
    gap: var(--size-medium);
  }

  .shelf__main {
    column-gap: var(--size-medium);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: var(--size-largest);
  }

  @media (min-width: 769px) {
    .shelf__main {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 961px) {
    .shelf__main {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .shelf__sampling {
    cursor: pointer;
  }

  .shelf__strong {
    line-height: 1.382;
  }
`
