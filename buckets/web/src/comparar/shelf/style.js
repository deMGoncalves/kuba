import styled from '@kuba/styled'

export default styled.style`
  .shelf__div {
    display: grid;
    grid-column-gap: var(--spacing_inset-lg);
    grid-row-gap: var(--spacing_inset-xs);
    grid-template-columns: repeat(2, 1fr);
  }
`
