import styled from '@kuba/styled'

export default styled.style`
  .shape {
    position: relative;
  }

  .shape picture {
    padding-top: calc(4 / 3 * 100%) !important;
  }

  .shape__button {
    align-items: center;
    background-color: var(--color-danger-darker);
    border: none;
    border-radius: var(--border-radius-circular);
    cursor: pointer;
    display: flex;
    height: 35px;
    justify-content: center;
    left: var(--spacing-nano);
    position: absolute;
    top: var(--spacing-nano);
    width: 35px;
  }
`
