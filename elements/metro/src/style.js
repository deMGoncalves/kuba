import styled from '@kuba/styled'

export default styled.style`
  .metro {
    display: flex;
    -ms-overflow-style: none;
    overflow-x: auto;
    scrollbar-width: none;
    width: 100%;
  }

  .metro::-webkit-scrollbar {
    display: none;
  }

  .metro__container {
    display: inline-flex;
    gap: var(--spacing_inset-xs);
    text-align: inherit;
    white-space: nowrap;
    width: 100%;
  }
`
