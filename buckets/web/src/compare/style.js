import styled from '@kuba/styled'

export default styled.style`
  .compare__div {
    display: grid;
    gap: var(--spacing_inset-lg);
    grid-template-columns: repeat(2, 1fr);
  }

  .compare__hgroup {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    grid-column: 1 / 3;
  }

  .compare__h2 {
    line-height: var(--line-height-md) !important;
  }

  .compare__p {
    line-height: var(--line-height-lg) !important;
  }

  .compare__data {
    text-align: center;
    width: 25%;
  }
`
