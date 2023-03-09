import './style'
import { hub } from '@kuba/lang'
import Checkbox from '@kuba/checkbox'
import h from '@kuba/h'
import text from '@kuba/text'

function component () {
  return (
    <div className='language__container'>
      <text.Label master dark xxs medium>Language</text.Label>
      <div className='language'>
        <Checkbox id='EN' name='EN'>{hub.EN}</Checkbox>
        <Checkbox id='ES' name='ES'>{hub.ES}</Checkbox>
        <Checkbox id='PT' name='PT'>{hub.PT}</Checkbox>
      </div>
    </div>
  )
}

export default component
