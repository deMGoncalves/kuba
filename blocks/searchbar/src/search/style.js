import styled from '@kuba/styled'

export default styled.style`
  .button {
    align-items: center;
    border: none;
    border-radius: var(--border-radius-pill);
    cursor: pointer;
    display: flex;
    height: 40px;
    justify-content: center;
    padding: var(--spacing_inset-xs);
    width: 40px;
  }

  .button img {
    height: 17.06px;
    width: 17.05px;
  }

  .button:hover {
    background-color: var(--color-master-light) !important;
  }
`
