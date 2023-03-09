import h from '@kuba/h'
import Input, { Label } from '@kuba/input'

function component () {
  return (
    <Input id='mileage' type='text' inputmode='numeric' name='mileage'>
      <Label>Mileage</Label>
    </Input>
  )
}

export default component
