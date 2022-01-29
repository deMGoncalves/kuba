import styled from '@kuba/styled'

export default styled.style`
  .compare__vs {
    align-items: center;
    background-color: var(--color-master-darker);
    border-radius: var(--border-radius-pill);
    display: flex;
    height: 55px;
    justify-content: center;
    left: 50%;
    padding: var(--spacing_inset-xs);
    position: absolute;
    top: calc(100vh / 3.8);
    transform: translateX(-50%);
    width: 55px;
    z-index: 1;
  }

  @media (min-width: 769px) {
    .compare__vs {
      height: 89px;
      top: calc(233 / 1180 * 100%);
      width: 89px;
    }
  }

  .compare__vs > span {
    font-size: var(--font-size-sm) !important;
  }

  @media (min-width: 769px) {
    .compare__vs span {
      font-size: var(--font-size-lg) !important;
    }
  }
`
