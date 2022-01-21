import styled from '@kuba/styled'

export default styled.style`
  .title {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
  }

  .title__h1 {
    line-height: var(--line-height-md);
  }

  .title__div {
    display: flex;
    gap: var(--spacing_inset-xs);
  }
`
