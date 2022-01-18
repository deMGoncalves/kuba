import styled from '@kuba/styled'

export default styled.style`
  .marca {
    line-height: var(--line-height-sm) !important;
    text-align: right;
  }

  .marca + .marca {
    text-align: left;
  }
`
