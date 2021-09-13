import styled from '@kuba/styled'

export default styled.style`
  .modal {
    background-color: var(--color-master-lightest);
    box-shadow: 0 10px 37px 0 rgba(0, 0, 0, 0.15);
    content-visibility: auto;
    height: auto;
    -ms-overflow-style: none;
    overflow-y: auto;
    width: calc(100vw - var(--spacing-xs));
    z-index: 1;
  }

  @media (min-width: 426px) {
    .modal {
      max-width: 393px;
    }
  }

  @media (min-width: 769px) {
    .modal {
      max-width: 737px;
    }
  }

  @media (min-width: 961px) {
    .modal {
      max-width: 929px;
    }
  }

  .modal__overlayer {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    opacity: 0;
    position: fixed;
    top: 0;
    transform: scale(1.618);
    transition:
      transform 618ms cubic-bezier(0.77, 0, 0.175, 1),
      opacity 618ms cubic-bezier(0.77, 0, 0.175, 1),
      visibility 618ms cubic-bezier(0.77, 0, 0.175, 1);
    visibility: hidden;
    width: 100vw;
    z-index: 1;
  }

  .modal__overlayer[opened=true] {
    opacity: 1;
    transform: scale(1);
    visibility: visible;
  }
`
