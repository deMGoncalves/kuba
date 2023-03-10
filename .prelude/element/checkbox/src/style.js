import styled from '@kuba/styled'

export default styled`
  .checkbox__container {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-xs);
    position: relative;
  }

  .checkbox {
    appearance: none;
    background-color: var(--color-pure-white);
    border: var(--border-width-hairline) solid var(--color-master-light);
    border-radius: calc(var(--border-radius-sm) / 2);
    cursor: pointer;
    height: 20px;
    width: 20px;
  }

  .checkbox:checked,
  .checkbox:hover {
    background-color: var(--color-master-lightest);
    border-color: var(--color-master-dark);
  }

  .checkbox__icon {
    color: var(--color-master-dark);
    display: none;
    font-size: 18px;
    left: .5px;
    position: absolute;
    top: 2px;
  }

  .checkbox:checked + .checkbox__icon {
    display: block;
  }

  .checkbox__label {
    cursor: pointer;
    user-select: none;
    width: calc(100% - var(--spacing_inset-xs));
  }
`
