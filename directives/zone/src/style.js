import styled from '@kuba/styled'

export default styled.style`
  .zone {
    content-visibility: auto;
  }

  .zone[view=false] {
    height: ${() => window.innerHeight * 0.2}px;
  }

  .zone[view=true] {
    height: auto;
  }
`
