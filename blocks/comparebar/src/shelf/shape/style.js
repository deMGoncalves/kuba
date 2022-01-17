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

  .shape__main {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    padding: var(--spacing_inset-xs);
    padding-right: 51px;
    width: 61.8%;
  }

  .shape__button {
    align-items: center;
    background-color: var(--color-danger-dark);
    border: none;
    border-radius: 0 var(--border-radius-sm);
    cursor: pointer;
    display: flex;
    height: 35px;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
    width: 35px;
  }
`
