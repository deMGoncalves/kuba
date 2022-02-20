import styled from '@kuba/styled'

export default styled.style`
  .flares {
    background-color: var(--color-master-lighter) !important;
    border-color: var(--color-master-lighter) !important;
  }
  .flares[selected] {
    background-color: var(--color-master-darker) !important;
    border-color: var(--color-master-darker) !important;
    color: var(--color-master-lightest) !important;
  }
`
