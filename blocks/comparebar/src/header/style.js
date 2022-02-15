import styled from '@kuba/styled'

export default styled.style`
  .header {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    justify-content: center;
    padding: 0 var(--spacing_inset-xs);
  }

  .header__strong,
  .header__p {
    line-height: var(--line-height-md) !important;
  }
`
