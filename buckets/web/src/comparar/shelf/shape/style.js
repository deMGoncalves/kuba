import styled from '@kuba/styled'

export default styled.style`
  .shape {
    cursor: pointer;
    min-width: 75%;
    position: relative;
    width: 75%;
  }

  @media (min-width: 426px) {
    .shape {
      min-width: calc(40% - 12px);
      width: calc(40% - 12px);
    }
  }

  @media (min-width: 769px) {
    .shape {
      min-width: calc(25% - 12px);
      width: calc(25% - 12px);
    }
  }

  .shape picture {
    padding-top: calc(4 / 3 * 100%) !important;
  }

  .shape figcaption {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
  }

  .shape__ficha {
    border: 1px solid var(--color-master-light);
    border-radius: var(--border-radius-sm);
  }
`
