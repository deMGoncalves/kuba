import styled from '@kuba/styled'

export default styled.style`
  .header {
    background-color: var(--color-master-lightest);
    border-bottom: var(--border-width-hairline) solid var(--color-master-light);
    height: 89px;
  }

  .header[fixed] {
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .header__container {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-md);
    height: 100%;
    justify-content: space-between;
  }
`
