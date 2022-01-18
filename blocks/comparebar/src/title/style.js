import styled from '@kuba/styled'

export default styled.style`
  .title {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    height: 89px;
    justify-content: center;
  }

  .title__strong,
  .title__p {
    line-height: var(--line-height-md) !important;
  }
`
