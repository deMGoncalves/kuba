import styled from '@kuba/styled'

export default styled.style`
  .cover {
    background-color: var(--color-primary);
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
    padding: var(--spacing_inset-lg);
  }

  .cover__h1 {
    flex-grow: 1;
  }

  .cover__blockquote {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    line-height: var(--line-height-sm);
    padding-right: var(--spacing_inset-lg);
  }

  .cover__nav {
    display: flex;
    gap: var(--spacing_inset-xs);
  }
`
