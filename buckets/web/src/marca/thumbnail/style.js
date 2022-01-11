import styled from '@kuba/styled'

export default styled.style`
  .marca__logo {
    background-color: var(--color-master-light);
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    height: 136px;
    position: relative;
  }

  .marca__picture {
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-level-1) rgba(0, 0, 0, var(--opacity-level-light));
    filter: grayscale(100%);
    margin: var(--spacing-xxs) auto;
    padding-top: 74.8px !important;
    width: 121px !important;
    z-index: 1;
  }

  .marca__picture:hover {
    filter: grayscale(0);
    transition: 0.1s all ease-in;
  }

  .marca__picture img {
    background-color: #fff;
    object-fit: contain;
    padding: var(--spacing_inset-nano);
  }

  .marca__div {
    align-items: center;
    background-color: var(--color-master-lighter);
    border-radius: 0 0 var(--border-radius-sm) var(--border-radius-sm);
    bottom: 0;
    display: inline-flex;
    height: 48px;
    justify-content: center;
    left: 0;
    padding-top: var(--spacing_inset-nano);
    position: absolute;
    width: 100%;
  }
`
