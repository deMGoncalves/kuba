import Choose from '@kuba/choose'
import h from '@kuba/h'
import Input, { Label, Supporting } from '@kuba/input'
import pattern from './pattern'

function component (email) {
  return (
    <Input
      type='email'
      id='email'
      name='email'
      required
      pattern={pattern}
      onBlur={(e) => email.onChange(e)}
      onChange={(e) => email.onChange(e)}
      onInvalid={(e) => email.onChange(e)}
      value={email.value}
    >
      <Label>Email</Label>
      <Choose when={email.state}>
        <Supporting equal='required'>Email is required</Supporting>
        <Supporting equal='pattern'>Invalid Eamil</Supporting>
      </Choose>
    </Input>
  )
}

export default component
