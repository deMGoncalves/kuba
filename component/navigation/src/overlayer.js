import styled from '@kuba/styled'

export default styled.div`
  display: ${(props) => props.opened ? 'block' : 'none'};
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  width: calc(100vw - 418px);
  z-index: 1;
`
