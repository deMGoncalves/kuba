import styled from '@kuba/styled'

export default styled.style`
  .wheelbase__hgroup {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    grid-column: 1 / 3;
  }

  .wheelbase__h2 {
    line-height: var(--line-height-md) !important;
  }

  .wheelbase__p {
    line-height: var(--line-height-lg) !important;
  }

  .wheelbase__data.master {
    text-align: right;
  }
`
