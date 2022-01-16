import styled from '@kuba/styled'

export default styled.style`
  .shape {
    background-color: #fff;
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    padding-bottom: 35px;
    position: relative;
  }

  .shape__header {
    align-items: center;
    display: flex;
    height: 35px;
    padding: 0 var(--spacing_inset-xs);
  }

  .shape__picture {
    padding-top: calc(4 / 3 * 100%) !important;
  }

  .shape__main {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    padding: var(--spacing_inset-xs);
  }

  .shpae__footer {
    align-items: center;
    bottom: 0;
    display: flex;
    height: 35px;
    left: 0;
    padding: 0 var(--spacing_inset-xs);
    position: absolute;
    width: 100%;
  }
`
