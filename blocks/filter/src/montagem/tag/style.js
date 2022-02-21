import styled from '@kuba/styled'

export default styled.style`
  .tag {
    background-color: var(--color-master-lighter) !important;
    border-color: var(--color-master-lighter) !important;
  }

  .tag[len] {
    border-color: var(--color-master-darker) !important;
  }
`
