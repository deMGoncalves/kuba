import styled from '@kuba/styled'

export default styled.style`
  .wells {
    background-color: var(--color-master-lighter) !important;
    border-color: var(--color-master-lighter) !important;
  }

  .wells[selected] {
    background-color: var(--color-master-darker) !important;
    border-color: var(--color-master-darker) !important;
    color: var(--color-master-lightest) !important;
  }
`
