import global from '@kuba/global'
import h from '@kuba/h'
import hook from '@kuba/hook'
import Input, { Label } from '@kuba/input'

function component () {
  return (
    <Input id='fuel' type='text' name='fuel' value={global?.fuel}>
      <Label>Fuel</Label>
    </Input>
  )
}

export default hook(component, ['fuel'])
