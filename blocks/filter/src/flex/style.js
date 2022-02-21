import styled from '@kuba/styled'

export default styled.style`
  .flex__select {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
    padding: var(--spacing_inset-lg) 0;
  }

  @media (max-width: 768px) {
    .flex__select {
      overflow: hidden;
    }
  }

  @media (max-width: 768px) {
    .flex__shelf {
      overflow: auto;
    }
  }
`
