import styled from '@kuba/styled'

export default styled.style`
  @media (min-width: 761px) {
    .report {
      margin-top: 0;
    }
  }

  .report > div {
    display: grid;
    gap: var(--spacing_inset-sm);
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 761px) {
    .report > div {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .report__figure {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-xs);
  }

  .report__picture {
    padding-top: 55px;
    width: 55px;
  }
`
