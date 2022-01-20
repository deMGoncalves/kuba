import styled from '@kuba/styled'

export default styled.style`
  @media (min-width: 768px) {
    .site__nav {
      order: 2;
    }

    .site__logo {
      order: 1;
    }

    .site__compare {
      order: 3;
    }
  }

  .site__main {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
    min-height: calc(100vh - 222px);
    padding: var(--spacing_inset-lg) 0;
  }
`
