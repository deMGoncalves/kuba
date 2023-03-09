import inline from './inline'
import internal from './internal'

export default new Proxy(internal, inline)
