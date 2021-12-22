import hook from './hook'

const didMount = hook('didMount')
const didUnmount = hook('didUnmount')
const didUpdate = hook('didUpdate')
const willMount = hook('willMount')
const willUnmount = hook('willUnmount')
const willUpdate = hook('willUpdate')

export {
  didMount,
  didUnmount,
  didUpdate,
  willMount,
  willUnmount,
  willUpdate
}
