import styled from '@kuba/styled'

export default styled.style`
  .shape__figure {
    filter: grayscale(100%);
    transition: 0.2s all ease-in;
  }

  .shape__figure:hover {
    filter: grayscale(0);
  }

  .shape__caption {
    padding-top: var(--spacing_inset-nano);
  }
`
