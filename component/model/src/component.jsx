import global from '@kuba/global'
import h from '@kuba/h'
import hook from '@kuba/hook'
import Input, { Label } from '@kuba/input'

function component () {
  return (
    <Input id='model' type='text' name='model' value={global?.model}>
      <Label>Model</Label>
    </Input>
  )
}

export default hook(component, ['model'])
