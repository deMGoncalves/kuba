import styled from '@kuba/styled'

export default styled.style`
  .marca {
    background-color: var(--color-master-light);
    border-radius: var(--border-radius-sm);
    height: 144px;
    position: relative;
  }

  .marca__picture {
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-level-1) rgba(0, 0, 0, var(--opacity-level-light));
    margin: var(--spacing-sm) auto;
    padding-top: 68px !important;
    width: 110px !important;
    z-index: 1;
  }

  .marca__text {
    align-items: center;
    background-color: var(--color-master-lighter);
    border-radius: 0 0 var(--border-radius-sm) var(--border-radius-sm);
    bottom: 0;
    display: inline-flex;
    height: 48px;
    justify-content: center;
    left: 0;
    position: absolute;
    width: 100%;
  }
`
