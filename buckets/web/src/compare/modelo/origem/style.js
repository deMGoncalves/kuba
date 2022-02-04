import styled from '@kuba/styled'

export default styled.style`
  .origem {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-nano);
  }

  .origem.slave {
    flex-direction: row-reverse;
  }
`
