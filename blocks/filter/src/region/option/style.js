import styled from '@kuba/styled'

export default styled.style`
  .option {
    align-items: center;
    cursor: pointer;
    display: flex;
    gap: var(--size-medium);
    padding: var(--size-small) var(--size-medium);
    user-select: none;
  }

  .option:not(:first-of-type) {
    border-top: 1px solid var(--color-master-lighter);
  }

  .option__p {
    text-align: center;
    white-space: normal;
  }
`
