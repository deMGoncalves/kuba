import * as f from '@kuba/f'
import event from './event'

const hook = (name) =>
  (klass, method, descriptor) => (
    Object.defineProperty(klass, f.dunder[name], {
      value: function () {
        return this[method]()
      }
    }),
    descriptor
  )

const didMount = hook(event.DID_MOUNT)
const didUnmount = hook(event.DID_UNMOUNT)
const didUpdate = hook(event.DID_UPDATE)
const willMount = hook(event.WILL_MOUNT)
const willUnmount = hook(event.WILL_UNMOUNT)
const willUpdate = hook(event.WILL_UPDATE)

export {
  didMount,
  didUnmount,
  didUpdate,
  willMount,
  willUnmount,
  willUpdate
}
