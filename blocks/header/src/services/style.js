import styled from '@kuba/styled'

export default styled.style`
  @media (max-width: 861px) {
    .services {
      display: none;
    }
  }

  .services__p {
    text-align: left;
  }

  .services__p strong {
    color: var(--color-master-darker);
    font-weight: 700;
  }

  .services__link {
    border-bottom: 1px solid var(--color-master-lighter);
    justify-content: flex-start !important;
    padding: var(--size-small) var(--size-medium);
    text-decoration: none;
    width: 100%;
  }

  .services__link:hover {
    text-decoration: underline;
  }
`
