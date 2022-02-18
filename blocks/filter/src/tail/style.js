import styled from '@kuba/styled'

export default styled.style`
  .tail {
    background-color: var(--color-master-lighter) !important;
    border-color: var(--color-master-lighter) !important;
  }

  .tail[selected] {
    background-color: var(--color-master-darker) !important;
    border-color: var(--color-master-darker) !important;
    color: var(--color-master-lightest) !important;
  }
`
