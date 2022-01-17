import styled from '@kuba/styled'

export default styled.style`
  .material {
    text-align: right;
  }

  .material + .material {
    text-align: left;
  }

  .material__span {
    line-height: var(--line-height-lg) !important;
  }
`
