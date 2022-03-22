import * as f from '@kuba/f'
import h from '@kuba/h'
import mapper from './mapper'
import style from './style'

export default new Proxy({}, {
  get: (_, type) =>
    (props) =>
      h(mapper[f.toLower(type)], { ...props, className: [style.skeleton, props.className] })
})
