import styled from '@kuba/styled'

export default styled.style`
  .more {
    background-color: var(--color-master-light);
    border: none;
    border-radius: var(--border-radius-pill);
    cursor: pointer;
    display: none;
    height: 34px;
    margin: 0 auto;
    width: 178px;
  }

  .more[visible=true] {
    display: inline;
  }
`
