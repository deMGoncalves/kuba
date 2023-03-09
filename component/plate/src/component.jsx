import './style'
import Choose from '@kuba/choose'
import h from '@kuba/h'
import Input, { Label, Supporting, Trailing } from '@kuba/input'

function component (plate) {
  return (
    <Input
      className='plate'
      type='text'
      id='plate'
      name='plate'
      onKeyup={(e) => plate.onChange(e)}
      onBlur={(e) => plate.onChange(e)}
      onInvalid={(e) => plate.onChange(e)}
      value={plate.value}
    >
      <Label>Plate</Label>
      <Choose when={plate.state}>
        <Trailing equal='loading'>rotate_right</Trailing>
        <Supporting equal='required'>Plate is required</Supporting>
        <Supporting equal='length'>Invalid plate number</Supporting>
      </Choose>
    </Input>
  )
}

export default component
