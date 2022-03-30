import styled from '@kuba/styled'

export default styled.style`
  .toppings {
    border-left: var(--border-width-hairline) solid var(--color-master-light);
    display: flex;
    gap: var(--spacing_inset-xs);
    padding-left: var(--spacing_inset-xs);
  }

  .toppings__tag {
    background-color: var(--color-master-lighter) !important;
    border-color: var(--color-master-lighter) !important;
  }

  .toppings__tag[selected] {
    background-color: var(--color-master-darker) !important;
    border-color: var(--color-master-darker) !important;
    color: var(--color-master-lightest) !important;
  }
`
