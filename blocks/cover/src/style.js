import styled from '@kuba/styled'

export default styled.style`
  .cover {
    background-color: var(--color-primary);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: var(--spacing_inset-lg);
  }

  .cover__blockquote {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    line-height: var(--line-height-sm);
    padding-right: var(--spacing_inset-lg);
  }
`
