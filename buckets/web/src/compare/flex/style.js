import styled from '@kuba/styled'

export default styled.style`
  .flex {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-xs);
    grid-column: 1 / 3;
  }

  .flex__dl {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    width: 50%;
  }

  .flex__text {
    line-height: var(--line-height-md) !important;
    text-align: center;
  }

  .flex__data {
    text-align: center;
    width: 25%;
  }
`
