import styled from '@kuba/styled'

export default styled.style`
  .about__hgroup {
    margin-bottom: var(--spacing-md);
  }

  .about__hgroup:not(:first-of-type) {
    margin-top: var(--spacing-md);
  }

  .about__hgroup * {
    line-height: var(--line-height-sm) !important;
  }

  .about__p {
    line-height: var(--line-height-lg) !important;
    margin: var(--spacing-xxxs) 0;
  }
`
