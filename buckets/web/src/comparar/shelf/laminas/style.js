import styled from '@kuba/styled'

export default styled.style`
  .laminas {
    text-align: right;
  }

  .laminas + .laminas {
    text-align: left;
  }

  .laminas__span {
    line-height: var(--line-height-lg) !important;
  }
`
