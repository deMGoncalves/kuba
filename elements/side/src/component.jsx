import h, { Fragment } from '@kuba/h'
import Aside from './aside'
import Overlayer from './overlayer'

export default (props, children) =>
  <>
    <Aside className={props.className} opened={props.opened}>
      {children}
    </Aside>
    <Overlayer opened={props.opened} onClick={props.onClose} />
  </>
