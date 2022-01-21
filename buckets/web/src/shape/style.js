import styled from '@kuba/styled'

export default styled.style`
  @media (min-width: 769px) {
    .shape__main {
      display: grid;
      gap: 0;
      grid-template-areas:
        'modelo thumbnail'
        'descricao thumbnail'
        'especificacao thumbnail'
        'material thumbnail'
        'related related'
        ;
      grid-template-columns: calc(100% * 0.618) calc(100% * 0.382);
      margin: 0 auto;
      max-width: 987px;
      min-height: auto;
      row-gap: var(--spacing_inset-lg);
    }
  }
`
