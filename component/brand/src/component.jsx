import global from '@kuba/global'
import h from '@kuba/h'
import hook from '@kuba/hook'
import Input, { Label } from '@kuba/input'

function component () {
  return (
    <Input id='brand' type='text' name='brand' value={global?.brand}>
      <Label>Brand</Label>
    </Input>
  )
}

export default hook(component, ['brand'])
