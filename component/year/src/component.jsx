import global from '@kuba/global'
import h from '@kuba/h'
import hook from '@kuba/hook'
import Input, { Label } from '@kuba/input'

function component () {
  return (
    <Input id='year' type='text' inputmode='numeric' name='year' value={global?.year}>
      <Label>Year</Label>
    </Input>
  )
}

export default hook(component, ['year'])
