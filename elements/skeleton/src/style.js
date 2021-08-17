import styled from '@kuba/styled'

export default styled.style`
  .picture {
    background-color: var(--color-master-light);
    padding-top: 100%;
    width: 100%;
  }

  .skeleton {
    display: block;
    overflow: hidden;
    position: relative;
  }

  .skeleton::after {
    animation: shimmer 1.618s infinite;
    background:
      linear-gradient(
        90deg,
        rgba(230, 230, 230, 0),
        rgba(250, 250, 250, 0.26) 26%,
        rgba(250, 250, 250, 0.68) 68%,
        rgba(230, 230, 230, 0)
      );
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`
