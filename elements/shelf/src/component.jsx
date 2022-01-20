import h from '@kuba/h'
import container from '@kuba/container'
import style from './style'

export default (props, children) =>
  <container.Section className={[style.shelf, props.className]}>
    {children}
  </container.Section>
