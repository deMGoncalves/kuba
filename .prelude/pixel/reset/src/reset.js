import styled from '@kuba/styled'

export default styled`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    user-select: none;
  }

  body {
    /* overscroll-behavior-y: contain; */
  }

  button {
    cursor: pointer;
    user-select: none;
  }
`
