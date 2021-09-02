import styled from '@kuba/styled'

export default styled.style`
  .navigation > div {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-sm);
  }

  .navigation__bubble {
    cursor: pointer;
    width: 135.8px;
  }

  .navigation__text {
    text-align: center;
    white-space: normal;
  }
`
