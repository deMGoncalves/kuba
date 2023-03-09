import h from '@kuba/h'
import Input, { Label } from '@kuba/input'

function component () {
  return (
    <Input id='telephone' type='tel' name='telephone'>
      <Label>Telephone</Label>
    </Input>
  )
}

export default component
