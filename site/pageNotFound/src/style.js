import styled from '@kuba/styled'

export default styled`
  .pageNotFound__hgroup {
    flex-direction: column-reverse !important;
  }

  .pageNotFound__title,
  .pageNotFound__description {
    text-align: center;
  }

  .pageNotFound__sorry {
    text-align: center;
  }

  .pageNotFound__footer {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
  }

  @media (min-width: 768px) {
    .pageNotFound__footer {
      flex-direction: row-reverse;
      justify-content: center;
    }
  }

  .pageNotFound__takeMeHome,
  .pageNotFound__goBack {
    width: 100%;
  }

  @media (min-width: 768px) {
    .pageNotFound__takeMeHome,
    .pageNotFound__goBack {
      width: auto;
    }
  }
`
