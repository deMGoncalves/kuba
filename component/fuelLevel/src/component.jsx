import './style'
import h from '@kuba/h'
import text from '@kuba/text'

function component () {
  return (
    <div className='fuelLevel__container'>
      <text.Label master dark xxs medium>Fuel level</text.Label>
      <div className='fuelLevel' />
      <div className='fuelLevel__supporting'>
        <text.Strong master dark xxs medium>E</text.Strong>
        <text.Strong master dark xxs medium>1/2</text.Strong>
        <text.Strong master dark xxs medium>F</text.Strong>
      </div>
    </div>
  )
}

export default component
