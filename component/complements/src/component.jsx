import './style'
import Checkbox from '@kuba/checkbox'
import h from '@kuba/h'
import text from '@kuba/text'

function component () {
  return (
    <div className='complements__container'>
      <text.Label master dark xxs medium>Complements</text.Label>
      <div className='complements'>
        <Checkbox id='abs-brake' name='abs-brake'>ABS brake</Checkbox>
        <Checkbox id='air-conditioning' name='air-conditioning'>Air conditioning</Checkbox>
        <Checkbox id='hydraulic-steering' name='hydraulic-steering'>Hydraulic steering</Checkbox>
        <Checkbox id='air-bag' name='air-bag'>Air bag</Checkbox>
      </div>
    </div>
  )
}

export default component
