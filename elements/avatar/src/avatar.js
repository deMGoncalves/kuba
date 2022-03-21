import has from './has'
import merge from './merge'
import picture from '@kuba/picture'
import skeleton from '@kuba/skeleton'
import styled from '@kuba/styled'

const style = styled.style`
  .avatar {
    border-radius: var(--border-radius-circular);
    min-width: 40px !important;
    padding-top: 40px !important;
    width: 40px !important;
  }

  .avatar.small {
    min-width: 24px !important;
    padding-top: 24px !important;
    width: 24px !important;
  }

  .avatar.large {
    min-width: 64px !important;
    padding-top: 64px !important;
    width: 64px !important;
  }
`

export default (props, children) =>
  has(children)
    ? picture(merge(props, style), children)
    : skeleton.picture(merge(props, style))
