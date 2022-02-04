import styled from '@kuba/styled'

export default styled.style`
  .wheelbase {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-lg);
    grid-column: 1 / 3;
  }

  .wheelbase__dl {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    width: 50%;
  }

  .wheelbase__text {
    line-height: var(--line-height-md) !important;
    text-align: center;
  }

  .wheelbase__data {
    width: 25%;
  }

  .wheelbase__data.master {
    text-align: right;
  }
`
