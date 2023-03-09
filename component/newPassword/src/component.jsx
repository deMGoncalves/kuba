import h from '@kuba/h'
import Input, { Label, Supporting } from '@kuba/input'

function component () {
  return (
    <Input id='newPassword' type='password' name='newPassword'>
      <Label>New password</Label>
      <Supporting>Your new password must be more than 8 characters</Supporting>
    </Input>
  )
}

export default component
