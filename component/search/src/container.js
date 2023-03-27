import styled from '@kuba/styled'

export default styled.section`
  align-items: center;
  background-color: var(--color-pure-white);
  border-bottom: var(--border-width-hairline) solid var(--color-master-light);
  display: flex;
  gap: var(--spacing_inset-xs);
  height: 73px;
  justify-content: space-between;
  left: 0;
  opacity: ${(props) => props.opened ? '1' : '0'};
  padding: 0 var(--spacing_inset-xs);
  position: fixed;
  top: 0;
  transform: ${(props) => props.opened ? 'translate(0, 0)' : 'translate(0, -73px)'};
  transition:
    opacity 618ms cubic-bezier(0.77, 0, 0.175, 1),
    transform 618ms cubic-bezier(0.77, 0, 0.175, 1);
  width: 100vw;
  z-index: 1;
`
