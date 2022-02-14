import styled from '@kuba/styled'

export default styled.style`
  .more {
    background-color: var(--color-master-lighter);
    border: none;
    border-radius: var(--border-radius-pill);
    cursor: pointer;
    display: none;
    height: 34px;
    margin: 0 auto;
    text-transform: uppercase;
    width: 233px;
  }

  .more[visible=true] {
    display: inline;
  }
`
