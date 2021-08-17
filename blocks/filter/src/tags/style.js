import styled from '@kuba/styled'

export default styled.style`
  .tags {
    display: flex;
    gap: var(--size-medium);
  }

  @media (min-width: 769px) {
    .tags {
      border-left: 1px solid var(--color-master-light);
      padding-left: var(--size-medium);
    }
  }
`
