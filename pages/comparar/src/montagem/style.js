import styled from '@kuba/styled'

export default styled.style`
  .montagem {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-xs);
    grid-column: 1 / 3;
  }

  .montagem__dl {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    width: 50%;
  }

  .montagem__text {
    line-height: var(--line-height-md) !important;
    text-align: center;
  }

  .montagem__data {
    text-align: center;
    width: 25%;
  }
`
