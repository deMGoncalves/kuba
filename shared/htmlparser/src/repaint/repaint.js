import * as f from '@rex/f'

const repaint = ({ value }) =>
  ({
    value () {
      setTimeout(() => f.has(f.magic('__reflow__'), this) && this[f.magic('__reflow__')]())
      return value.apply(this, arguments)
    }
  })

export default f.flip(repaint)
