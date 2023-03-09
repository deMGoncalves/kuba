import h from '@kuba/h'
import Input, { Label } from '@kuba/input'

function component () {
  return (
    <Input id='passwordConfirm' type='password' name='passwordConfirm'>
      <Label>Password confirm</Label>
    </Input>
  )
}

export default component
