import styled from '@kuba/styled'

export default styled.style`
  .tag {
    background-color: var(--color-primary-lighter) !important;
    border-color: var(--color-primary-lighter) !important;
  }

  .tag[len='0'] {
    background-color: var(--color-master-lighter) !important;
    border-color: var(--color-master-lighter) !important;
    color: var(--color-master-darker) !important;
  }
`
