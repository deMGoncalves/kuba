import styled from '@kuba/styled'

export default styled.style`
  .tail__hgroup {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    grid-column: 1 / 3;
  }

  .tail__h2 {
    line-height: var(--line-height-md) !important;
  }

  .tail__p {
    line-height: var(--line-height-lg) !important;
  }

  .tail__data.master {
    text-align: right;
  }
`
