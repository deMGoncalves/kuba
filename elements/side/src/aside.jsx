import styled from '@kuba/styled'

export default styled.aside`
  background-color: var(--color-master-lightest);
  border-left: var(--border-width-hairline) solid var(--color-master-light);
  box-shadow: 0 10px 37px 0 rgba(0, 0, 0, 0.15);
  height: 100vh;
  opacity: ${(props) => props.opened ? 1 : 0};
  -ms-overflow-style: none;
  overflow-y: auto;
  position: fixed;
  right: 0;
  scrollbar-width: none;
  top: 0;
  transform: ${(props) => `translate(${props.opened ? 0 : 298}px, 0)`};
  transition: all 618ms cubic-bezier(0.77, 0, 0.175, 1);
  width: 298px;
  z-index: 1;
`
