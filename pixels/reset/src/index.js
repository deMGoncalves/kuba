import styled from '@kuba/styled'

export default styled.style`
  * {
    -webkit-appearance: none;
    appearance: none;
    box-sizing: border-box;
    color: var(--color-master);
    font-display: optional;
    font-family: var(--font-family-base);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-default);
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  *::-webkit-autofill {
    -webkit-box-shadow: 0 0 0 9999px #fff inset !important;
  }

  *::-webkit-scrollbar {
    display: none;
  }

  *::-webkit-search-decoration,
  *::-webkit-search-cancel-button,
  *::-webkit-search-results-button,
  *::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  *:focus {
    outline: 0;
  }

  body {
    background-color: var(--color-master-lightest);
  }
`
