import h from '@kuba/h'
import * as f from '@kuba/f'
import icon from '@kuba/icon'
import styled from '@kuba/styled'
import merge from './merge'

const style = styled.style`
  .avatar {
    border-radius: var(--border-radius-circular);
  }
`

const avatar = () =>
  new Proxy({}, {
    get: (_, name) =>
      (props) =>
        icon[name](merge(props, style.avatar), [])
  })

f.assign(avatar, {
  is: f.equal('icon')
})

export default avatar
