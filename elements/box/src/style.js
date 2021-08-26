import styled from '@kuba/styled'

export default styled.style`
  .box {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
  }

  .box__picture {
    border-radius: var(--border-radius-sm);
  }

  .box__figcaption {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-nano);
    width: 100%;
  }
`
