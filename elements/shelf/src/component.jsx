import container from '@kuba/container'
import h from '@kuba/h'
import style from './style'

export default (props, children) =>
  <container.Section className={[style.shelf, props.className]}>
    {children}
  </container.Section>
