import styled from '@kuba/styled'

export default styled.style`
  .shape {
    background-color: #fff;
    border-radius: var(--border-radius-sm);
    display: flex;
    position: relative;
  }

  .shape__picture {
    border-radius: inherit;
    padding-top: calc(5 / 4 * 38.2%) !important;
    width: 38.2%;
  }

  .shape__div {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
    padding: var(--spacing_inset-xs);
    padding-right: 58px;
    width: 61.8%;
  }

  .shape__button {
    position: absolute;
    right: var(--spacing-nano);
    top: var(--spacing-nano);
  }
`
