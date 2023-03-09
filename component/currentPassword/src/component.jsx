import h from '@kuba/h'
import Input, { Label } from '@kuba/input'

function component () {
  return (
    <Input id='currentPassword' type='password' name='currentPassword'>
      <Label>Current password</Label>
    </Input>
  )
}

export default component
