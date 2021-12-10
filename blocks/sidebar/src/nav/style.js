import styled from '@kuba/styled'

export default styled.style`
  .nav {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-md);
    padding: var(--spacing_inset-lg) 0 !important;
  }

  .nav__a {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0 var(--spacing_inset-md);
  }
`
