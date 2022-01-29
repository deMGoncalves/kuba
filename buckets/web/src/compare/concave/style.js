import styled from '@kuba/styled'

export default styled.style`
  .concave__hgroup {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    grid-column: 1 / 3;
  }

  .concave__h2 {
    line-height: var(--line-height-md) !important;
  }

  .concave__p {
    line-height: var(--line-height-lg) !important;
  }

  .concave__data.master {
    text-align: right;
  }
`
