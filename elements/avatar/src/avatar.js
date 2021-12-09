import picture from '@kuba/picture'
import skeleton from '@kuba/skeleton'
import styled from '@kuba/styled'
import has from './has'
import merge from './merge'

const style = styled.style`
  .avatar {
    border-radius: var(--border-radius-circular);
    padding-top: 40px;
  }

  .avatar[small] {
    padding-top: 24px;
  }

  .avatar[large] {
    padding-top: 64px;
  }
`

export default (props, children) =>
  has(children)
    ? picture(merge(props, style.avatar), children)
    : skeleton.picture(merge(props, style.avatar))
