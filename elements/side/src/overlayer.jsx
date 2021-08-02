import styled from '@kuba/styled'

export default styled.div`
  display: ${(props) => props.opened ? 'block' : 'none'};
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: calc(100vw - 298px);
  z-index: 1;
`
