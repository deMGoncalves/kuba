import styled from '@kuba/styled'

export default styled`
  .metro {
    overflow: auto;
    scrollbar-width: none;
    width: 100%;
  }

  .metro::-webkit-scrollbar {
    display: none;
  }

  .metro__container {
    display: flex;
    gap: var(--spacing_inset-xs);
  }
`
