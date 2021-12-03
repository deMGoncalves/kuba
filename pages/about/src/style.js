import styled from '@kuba/styled'

export default styled.style`
  .about__article {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
  }

  .about__hgroup {
    margin-bottom: var(--spacing-xxxs);
  }

  .about__hgroup h1,
  .about__hgroup h2 {
    line-height: var(--line-height-md) !important;
  }

  .about__section {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
  }

  .about__section p {
    line-height: var(--line-height-md) !important;
  }
`
