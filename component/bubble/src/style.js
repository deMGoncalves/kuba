import styled from '@kuba/styled'

export default styled`
  .bubble {
    align-items: center;
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    padding: var(--spacing_inset-xs);
    white-space: normal;
  }

  .bubble:hover {
    background-color: var(--color-master-lightest);
  }

  .bubble__img {
    aspect-ratio: 1 / 1;
    background-color: var(--color-master-lightest);
    border-radius: var(--border-radius-circular);
    color: transparent;
    width: 100%;
  }

  .bubble:hover .bubble__img {
    background-color: var(--color-pure-white);
  }
`
