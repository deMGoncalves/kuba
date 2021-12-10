import styled from '@kuba/styled'

export default styled.style`
  .header {
    border-bottom: var(--border-width-hairline) solid var(--color-master-light);
    height: 88px;
  }

  .header__container {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-md);
    height: 100%;
    justify-content: space-between;
  }
`
