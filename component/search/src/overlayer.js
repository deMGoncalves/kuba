import styled from '@kuba/styled'

export default styled.div`
  bottom: 0;
  display: ${(props) => props.opened ? 'block' : 'none'};
  height: calc(100vh - 73px);
  left: 0;
  position: fixed;
  width: 100vw;
  z-index: 1;
`
