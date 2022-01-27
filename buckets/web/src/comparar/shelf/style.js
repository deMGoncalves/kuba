import styled from '@kuba/styled'

export default styled.style`
  .shelf__section {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
    position: relative;
  }

  .shelf__vs {
    display: flex;
    justify-content: center;
    position: absolute !important;
    top: calc(100% / 2);
    z-index: 1;
  }

  .shelf__vs > span {
    background-color: var(--color-primary);
    border-radius: var(--border-radius-pill);
    padding: var(--spacing_inset-xs);
  }

  .shelf__thumb {
    column-gap: var(--spacing_inset-lg);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: var(--spacing_inset-nano);
  }

  .shelf__thumb > figure:nth-child(1) {
    text-align: right;
  }

  .shelf__section.especificacao {
    padding-top: var(--spacing_inset-lg);
  }

  .shelf__label {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-nano);
    justify-content: center;
  }

  .shelf__div {
    border-bottom: 1px solid var(--color-master-light);
    display: grid;
    font-size: var(--font-size-xs);
    gap: var(--spacing_inset-lg);
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: var(--spacing_inset-xs) !important;
  }

  .shelf__div:last-child {
    border-bottom: none;
  }
`
