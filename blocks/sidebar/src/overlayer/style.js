import styled from '@kuba/styled'

export default styled.style`
  .overlayer {
    display: none;
  }

  .overlayer[opened] {
    display: block;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    width: calc(100% - 298px);
    z-index: 2;
  }
`
