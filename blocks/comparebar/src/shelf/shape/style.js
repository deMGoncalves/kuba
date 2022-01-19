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
    gap: var(--spacing_inset-quarck);
    padding: var(--spacing_inset-xs) var(--spacing_inset-nano);
    padding-right: 50px;
    width: 61.8%;
  }

  .shape__button {
    align-items: center;
    background-color: var(--color-master-darker);
    border: none;
    border-radius: var(--border-radius-pill);
    cursor: pointer;
    display: flex;
    height: 34px;
    justify-content: center;
    position: absolute;
    right: var(--spacing-nano);
    top: var(--spacing-nano);
    width: 34px;
  }
`
