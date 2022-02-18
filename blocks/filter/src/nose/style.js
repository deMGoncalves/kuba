import styled from '@kuba/styled'

export default styled.style`
  .nose {
    background-color: var(--color-master-lighter) !important;
    border-color: var(--color-master-lighter) !important;
  }

  .nose[selected] {
    background-color: var(--color-master-darker) !important;
    border-color: var(--color-master-darker) !important;
    color: var(--color-master-lightest) !important;
  }
`
