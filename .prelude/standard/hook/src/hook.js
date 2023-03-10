import { paint, repaint } from '@kuba/h'
import { useEffect } from '@kuba/global'
import props from '@kuba/props'

function hook (component, keys) {
  @paint(component)
  @props
  class HookComponent {
    constructor () {
      useEffect(() => this[repaint.reflow](), keys)
    }
  }
  return HookComponent
}

export default hook
