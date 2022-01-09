import styled from '@kuba/styled'

export default styled.style`
  .hgroup {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
    padding: var(--spacing-lg) 0;
    width: 100%;
  }

  .hgroup__h1 {
    font-size: var(--font-size-md) !important;
    line-height: var(--line-height-default);
  }

  @media (min-width: 769px) {
    .hgroup__h1 {
      font-size: var(--font-size-lg) !important;
    }
  }

  .hgroup__p {
    line-height: var(--line-height-md);
  }
`
