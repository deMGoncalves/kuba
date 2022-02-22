import styled from '@kuba/styled'

export default styled.style`
  .tags {
    display: none;
    flex-wrap: wrap;
    gap: var(--spacing_inset-nano);
  }

  .tags[len] {
    display: flex;
  }
`
