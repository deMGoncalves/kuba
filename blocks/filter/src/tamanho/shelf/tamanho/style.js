import styled from '@kuba/styled'

export default styled.style`
  .tamanho {
    align-items: center;
    border: var(--border-width-hairline) solid var(--color-master-light);
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    height: 68px;
    justify-content: center;
    padding: var(--spacing_inset-xs);
  }

  .tamanho[selected] {
    border: var(--border-width-hairline) solid var(--color-primary);
  }
`
