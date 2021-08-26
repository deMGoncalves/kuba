import styled from '@kuba/styled'

export default styled.style`
  .bubble {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
  }

  .bubble__picture {
    border-radius: var(--border-radius-circular);
  }

  .bubble__figcaption {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
    width: 100%;
  }
`
