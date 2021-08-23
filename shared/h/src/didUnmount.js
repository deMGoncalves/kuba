import * as f from '@kuba/f'
import { after } from '@kuba/hook'

function didUnmount (returned) {
  this?.[f.magic('didUnmount')]?.()
  return returned
}

export default after(didUnmount)
