import styled from '@kuba/styled'

export default styled.style`
  .nose__hgroup {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    grid-column: 1 / 3;
  }

  .nose__h2 {
    line-height: var(--line-height-md) !important;
  }

  .nose__p {
    line-height: var(--line-height-lg) !important;
  }

  .nose__data.master {
    text-align: right;
  }
`
