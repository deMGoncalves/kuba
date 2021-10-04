import styled from '@kuba/styled'

export default styled.style`
  .figure {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
  }

  .figure__picture {
    border-radius: var(--border-radius-sm);
  }

  .figure[circular] .figure__picture {
    border-radius: var(--border-radius-circular);
  }

  .figure__figcaption {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
    width: 100%;
  }
`
