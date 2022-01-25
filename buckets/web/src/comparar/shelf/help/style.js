import styled from '@kuba/styled'

export default styled.style`
  .helper__tooltip {
    display: inline-block;
    position: relative;
  }

  .helper__icon {
    border: var(--border-width-thin) solid var(--color-master-dark);
    border-radius: var(--border-radius-pill);
    cursor: pointer;
    padding: 0 var(--spacing_inset-quarck);
  }

  .helper__icon:hover {
    border-color: var(--color-primary-dark);
    color: var(--color-primary);
  }

  .helper__span {
    background-color: black;
    border-radius: var(--border-radius-sm);
    color: #fff;
    left: -145px;
    padding: var(--spacing_inset-nano);
    position: absolute;
    text-align: center;
    top: var(--spacing-xs);
    visibility: hidden;
    width: 250px;
    z-index: 1;
  }

  @media (min-width: 769px) {
    .helper__span {
      left: var(--spacing-xs);
      top: -5px;
    }
  }

  .helper__tooltip:hover .helper__span {
    visibility: visible;
  }
`
