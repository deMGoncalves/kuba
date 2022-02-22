import styled from '@kuba/styled'

export default styled.style`
  .tamanho {
    align-items: center;
    border: var(--border-width-hairline) solid var(--color-master-light);
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    display: flex;
    height: 68px;
    justify-content: center;
  }

  .tamanho[selected] {
    border: var(--border-width-hairline) solid var(--color-primary);
  }
`