import h from '@kuba/h'
import Input, { Label } from '@kuba/input'

function component () {
  return (
    <Input id='address' type='text' name='address'>
      <Label>Address</Label>
    </Input>
  )
}

export default component
