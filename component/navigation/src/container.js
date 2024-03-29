import styled from '@kuba/styled'

export default styled.section`
  background-color: var(--color-pure-white);
  box-shadow: var(--shadow-level-1) rgba(0, 0, 0, 0.382);
  display: flex;
  flex-direction: column;
  gap: var(--spacin_inset-nano);
  height: 100vh;
  left: 0;
  max-width: 480px;
  opacity: ${(props) => props.opened ? '1' : '0'};
  position: fixed;
  top: 0;
  transform: ${(props) => props.opened ? 'translate(0, 0)' : 'translate(-480px, 0)'};
  transition:
    opacity 618ms cubic-bezier(0.77, 0, 0.175, 1),
    transform 618ms cubic-bezier(0.77, 0, 0.175, 1);
  width: 100vw;
  z-index: 1;
`
