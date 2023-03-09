import h from '@kuba/h'
import Input, { Label } from '@kuba/input'

function component () {
  return (
    <Input id='confirmNewPassword' type='password' name='confirmNewPassword'>
      <Label>Confirm new password</Label>
    </Input>
  )
}

export default component
