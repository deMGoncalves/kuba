import styled from '@kuba/styled'

export default styled.style`
  .flag {
    align-items: center;
    background-color: var(--color-primary);
    bottom: -72px;
    display: flex;
    height: 144px;
    justify-content: flex-start;
    padding: var(--size-small);
    position: fixed;
    right: -72px;
    transform: rotate(45deg);
    width: 144px;
    z-index: 1;
  }

  @media (min-width: 1374px) {
    .flag {
      align-items: flex-end;
      bottom: auto;
      justify-content: center;
      top: -72px;
    }
  }

  .flag__icon {
    cursor: pointer;
    transform: rotate(-45deg);
  }
`
