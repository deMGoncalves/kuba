import './registerSW.js'
import './reset.css'

import h, { paint, repaint } from '@h'

const component = (props) =>
  <div>
    <span>numero: { props.number }</span>
    <br />
    <button onClick={() => props.add()}>ADD</button>
  </div>

@paint(component)
class Count {
  get number () {
    return this.__number
  }

  constructor () {
    console.log('aqui')
    this.__number = 0
    console.log(this)
    return this
  }

  @repaint
  add () {
    console.log(this)
    this.__number += 1
    console.log(this)
    return this
  }
}

document.body.appendChild(<Count />)
