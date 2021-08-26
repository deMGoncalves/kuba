import styled from '@kuba/styled'

export default styled.style`
  .exploration > div {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xxxs);
  }

  .exploration__box {
    cursor: pointer;
  }

  .exploration__strong {
    font-weight: 500;
    line-height: 1.382;
  }

  .exploration__div {
    display: grid;
    gap: var(--spacing-xxxs);
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) {
    .exploration__div {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`
