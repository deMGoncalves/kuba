import styled from '@kuba/styled'

export default styled.style`
  .tag {
    background-color: var(--color-master-lightest) !important;
    border-color: var(--color-master-light) !important;
  }

  .tag[len] {
    border-color: var(--color-master-darker) !important;
  }
`
