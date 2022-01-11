import styled from '@kuba/styled'

export default styled.style`
  .link {
    border-bottom: 1px solid var(--color-master);
    cursor: pointer;
    margin-left: var(--spacing-quarck);
  }

  .link:hover {
    color: var(--color-master-darkest);
    font-weight: var(--font-weight-bold);
  }
`
