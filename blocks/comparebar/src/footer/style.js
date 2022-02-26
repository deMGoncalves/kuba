import styled from '@kuba/styled'

export default styled.style`
  .footer {
    display: none;
    justify-content: center;
  }

  .footer[valid] {
    display: flex;
  }

  .footer__link {
    align-items: center;
    background-color: var(--color-master-lighter);
    border-radius: var(--border-radius-pill);
    display: inline-flex;
    height: 34px;
    justify-content: center;
    text-decoration: none;
    text-transform: uppercase;
    width: 298px;
  }
`
