import styled from '@kuba/styled'

export default styled.style`
  .shape {
    background-color: #fff;
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    position: relative;
  }

  .shape__header {
    align-items: center;
    display: flex;
    padding: var(--spacing_inset-xs);
  }

  .shape__picture {
    padding-top: calc(5 / 4 * 100%) !important;
  }

  .shape__main {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
    padding: var(--spacing_inset-xs);
  }
`
