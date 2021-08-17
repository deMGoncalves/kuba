import styled from '@kuba/styled'

export default styled.style`
  .history__strong {
    padding: 0 var(--size-medium);
  }

  .history__li {
    align-items: center;
    cursor: pointer;
    display: flex;
    font-weight: 400;
    gap: var(--size-medium);
    line-height: normal;
    padding: var(--size-small) var(--size-medium);
    user-select: none;
  }

  .history__li:not(:first-of-type) {
    border-top: 1px solid var(--color-master-lighter);
  }
`
