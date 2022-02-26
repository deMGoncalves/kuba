import styled from '@kuba/styled'

export default styled.style`
  .tamanho {
    align-items: flex-start;
    background-color: #fff;
    border-radius: var(--border-radius-sm);
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
    padding: var(--spacing_inset-xs);
  }

  .tamanho__dl {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
  }

  .tamanho__text {
    line-height: var(--line-height-lg) !important;
  }
`
