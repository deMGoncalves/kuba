import styled from '@kuba/styled'

export default styled.div`
  background-color: var(--color-pure-white);
  border-bottom: var(--border-width-hairline) solid var(--color-master-light);
  display: flex;
  flex-direction: column;
  gap: var(--spacin_inset-nano);
  height: 73px;
  left: 0;
  opacity: ${(props) => props.opened ? '1' : '0'};
  padding: var(--spacin_inset-xs);
  position: fixed;
  top: 0;
  transform: ${(props) => props.opened ? 'translate(0, 0)' : 'translate(0, -73px)'};
  transition:
    opacity 618ms cubic-bezier(0.77, 0, 0.175, 1),
    transform 618ms cubic-bezier(0.77, 0, 0.175, 1);
  width: 100vw;
  z-index: 1;
  width: 100vw;
`
