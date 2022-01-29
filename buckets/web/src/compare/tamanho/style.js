import styled from '@kuba/styled'

export default styled.style`
  .tamanho__hgroup {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    grid-column: 1 / 3;
  }

  .tamanho__h2 {
    line-height: var(--line-height-md) !important;
  }

  .tamanho__p {
    line-height: var(--line-height-lg) !important;
  }

  .tamanho__data.master {
    text-align: right;
  }
`
