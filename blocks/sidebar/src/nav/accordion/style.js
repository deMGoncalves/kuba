import styled from '@kuba/styled'

export default styled.style`
  .accordion {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: var(--spacing_inset-xs) var(--spacing_inset-md);
    text-decoration: none;
  }

  .accordion__icon {
    margin: 0 var(--spacing-quarck);
  }

  .accordion__section {
    display: none;
  }

  .accordion__section[opened=true] {
    background-color: var(--color-menu-dark);
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    padding: var(--spacing_inset-md);
  }
`
