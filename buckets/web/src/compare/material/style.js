import styled from '@kuba/styled'

export default styled.style`
  .material__hgroup {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    grid-column: 1 / 3;
  }

  .material__h2 {
    line-height: var(--line-height-md) !important;
  }

  .material__p {
    line-height: var(--line-height-lg) !important;
  }

  .material__p.master {
    text-align: right;
  }
`
