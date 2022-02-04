import styled from '@kuba/styled'

export default styled.style`
  .nose {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-xs);
    grid-column: 1 / 3;
  }

  .nose__dl {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    width: 50%;
  }

  .nose__text {
    line-height: var(--line-height-md) !important;
    text-align: center;
  }

  .nose__data {
    text-align: center;
    width: 25%;
  }
`
