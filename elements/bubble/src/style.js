import styled from '@kuba/styled'

export default styled.style`
  .bubble {
    display: flex;
    flex-direction: column;
    gap: var(--size-smallest);
  }

  .bubble__picture {
    border-radius: 50%;
  }

  .bubble__figcaption {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--size-medium);
    width: 100%;
  }
`
