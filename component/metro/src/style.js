import styled from '@kuba/styled'

export default styled`
  .metro {
    overflow: auto;
    scrollbar-width: none;
  }

  .metro::-webkit-scrollbar {
    display: none;
  }

  .metro__container {
    display: flex;
    gap: var(--spacing_inset-xs);
    white-space: nowrap;
  }
`
