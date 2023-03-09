import global from '@kuba/global'
import h from '@kuba/h'
import hook from '@kuba/hook'
import Input, { Label } from '@kuba/input'

function component () {
  return (
    <Input name='cylinderCapacity' type='text' id='cylinderCapacity' value={global?.cylinderCapacity}>
      <Label>Cylinder capacity</Label>
    </Input>
  )
}

export default hook(component, ['cylinderCapacity'])
