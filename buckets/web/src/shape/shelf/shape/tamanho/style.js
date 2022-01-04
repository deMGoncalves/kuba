import styled from '@kuba/styled'

export default styled.style`
  .tamanho::before {
    border: 17.5px solid transparent;
    border-right-color: var(--color-master-light);
    border-top-color: var(--color-master-light);
    content: '';
    display: blok;
    left: -34px;
    position: absolute;
    top: 0;
  }

  .tamanho {
    align-items: center;
    background-color: var(--color-master-light);
    display: flex;
    height: 35px;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
  }
`
