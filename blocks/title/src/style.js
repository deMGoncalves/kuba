import styled from '@kuba/styled'

export default styled.style`
  .title {
    display: inline-flex;
    margin-bottom: var(--spacing-quarck);
    margin-top: var(--spacing-nano);
    width: 100%;
  }

  .title__container {
    align-items: center;
    display: flex;
    justify-content: flex-start;
  }

  .title__h1 {
    font-size: var(--font-size-sm) !important;
    line-height: 1;
  }

  @media (min-width: 769px) {
    .title__h1 {
      font-size: var(--font-size-md) !important;
    }
  }
`
