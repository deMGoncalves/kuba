import styled from '@kuba/styled'

export default styled.style`
  .descricao__text {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    position: relative;
  }

  .descricao__paragraph {
    line-height: var(--line-height-sm) !important;
    max-height: 7em;
    overflow: hidden;
    position: relative;
  }

  .descricao__about {
    cursor: pointer !important;
  }

  .descricao__text[opened] .descricao__paragraph {
    max-height: initial;
  }
`
