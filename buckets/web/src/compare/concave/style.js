import styled from '@kuba/styled'

export default styled.style`
  .concave {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-xs);
    grid-column: 1 / 3;
  }

  .concave__dl {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    width: 50%;
  }

  .concave__text {
    line-height: var(--line-height-md) !important;
    text-align: center;
  }

  .concave__data {
    text-align: center;
    width: 25%;
  }
`
