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
    padding: 3px var(--spacing_inset-nano);
  }

  .helper__icon:hover {
    border-color: var(--color-primary-dark);
    color: var(--color-primary);
  }

  .helper__span {
    background-color: black;
    border-radius: 6px;
    color: #fff;
    left: 105%;
    padding: 5px 0;
    position: absolute;
    text-align: center;
    top: -5px;
    visibility: hidden;
    width: 250px;
    z-index: 1;
  }

  .helper__tooltip:hover .helper__span {
    visibility: visible;
  }
`
