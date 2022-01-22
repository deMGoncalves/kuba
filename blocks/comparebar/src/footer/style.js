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
    text-decoration: none;
  }
`
