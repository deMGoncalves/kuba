import Choose from '@kuba/choose'
import h from '@kuba/h'
import Input, { Label, Supporting } from '@kuba/input'

function component (name) {
  return (
    <Input
      type='text'
      id='name'
      name='name'
      required
      onBlur={(e) => name.onChange(e)}
      onChange={(e) => name.onChange(e)}
      onInvalid={(e) => name.onChange(e)}
      value={name.value}
    >
      <Label>Name</Label>
      <Choose when={name.state}>
        <Supporting equal='required'>Name is required</Supporting>
      </Choose>
    </Input>
  )
}

export default component
