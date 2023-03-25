import styled from '@kuba/styled'

export default styled`
  .topBar {
    background-color: var(--color-pure-white);
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    padding: var(--spacing_inset-xs) 0;
  }

  .topBar__container {
    display: flex;
    gap: var(--spacing_inset-xs);
  }

  .topBar__leading,
  .topBar__headline,
  .topBar__trailing {
    align-items: center;
    display: flex;
  }

  .topBar__leading {
    flex-grow: 0;
  }

  .topBar__trailing {
    flex-grow: 1;
    gap: var(--spacing_inset-xs);
    justify-content: flex-end;
  }

  .topBar__headline {
    flex-grow: 2;
    justify-content: flex-start;
  }
`
