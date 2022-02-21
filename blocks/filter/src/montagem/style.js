import styled from '@kuba/styled'

export default styled.style`
  .montagem__select {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
    padding: var(--spacing_inset-lg) 0;
  }

  @media (max-width: 768px) {
    .montagem__select {
      overflow: hidden;
    }
  }

  @media (max-width: 768px) {
    .montagem__shelf {
      overflow: auto;
    }
  }
`
