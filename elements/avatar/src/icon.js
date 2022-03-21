import h from '@kuba/h'
import icon from '@kuba/icon'
import merge from './merge'
import styled from '@kuba/styled'

const style = styled.style`
  .avatar {
    border-radius: var(--border-radius-circular);
    height: 40px;
    width: 40px;
  }

  .avatar.small {
    height: 24px;
    width: 24px;
  }

  .avatar.large {
    height: 64px;
    width: 64px;
  }
`

export default new Proxy({}, {
  get: (_, name) =>
    (props) =>
      icon[name](merge(props, style), [])
})
