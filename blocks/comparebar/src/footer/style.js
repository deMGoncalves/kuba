import styled from '@kuba/styled'

export default styled.style`
  .footer {
    justify-content: center;
  }

  .footer[valid='false'] {
    display: none;
  }

  .footer[valid='true'] {
    display: flex;
  }

  .footer__link {
    align-items: center;
    border-radius: var(--border-radius-pill);
    display: inline-flex;
    height: 34px;
    justify-content: center;
    text-decoration: none;
    width: 298px;
  }

  .footer__link:hover {
    background-color: var(--color-master-lighter);
  }
`
