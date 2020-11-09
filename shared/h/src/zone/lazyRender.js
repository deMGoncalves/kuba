import * as f from '@rex/f'
import on from './on'
import render from './render'

const lazyRender = (zone) =>
  on(zone, () => f.onScreen(zone) && render(zone))

export default f.idle(lazyRender)
