import styled from '@kuba/styled'

export default styled.style`
  .tamanho {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-lg);
    grid-column: 1 / 3;
  }

  .tamanho__dl {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    width: 50%;
  }

  .tamanho__text {
    line-height: var(--line-height-md) !important;
    text-align: center;
  }

  .tamanho__data {
    width: 25%;
  }

  .tamanho__data.master {
    text-align: right;
  }
`
