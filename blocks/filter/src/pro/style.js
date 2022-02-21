import styled from '@kuba/styled'

export default styled.style`
  .pro {
    background-color: var(--color-master-lighter) !important;
    border-color: var(--color-master-lighter) !important;
  }

  .pro[selected] {
    background-color: var(--color-master-darker) !important;
    border-color: var(--color-master-darker) !important;
    color: var(--color-master-lightest) !important;
  }
`
