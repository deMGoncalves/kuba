import picture from '@kuba/picture'
import skeleton from '@kuba/skeleton'
import styled from '@kuba/styled'
import has from './has'
import merge from './merge'

const style = styled.style`
  .avatar {
    border-radius: var(--border-radius-circular);
    padding-top: 40px !important;
    width: 40px !important;
  }

  .avatar.small {
    padding-top: 24px !important;
    width: 24px !important;
  }

  .avatar.large {
    padding-top: 64px !important;
    width: 64px !important;
  }
`

export default (props, children) =>
  has(children)
    ? picture(merge(props, style), children)
    : skeleton.picture(merge(props, style))
