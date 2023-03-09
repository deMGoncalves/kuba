import Choose from '@kuba/choose'
import h from '@kuba/h'
import Input, { Label, Supporting } from '@kuba/input'
import Show from '@kuba/show'

function component (password) {
  return (
    <Input
      type='password'
      id='password'
      name='password'
      required
      onBlur={(e) => password.onChange(e)}
      onChange={(e) => password.onChange(e)}
      onInvalid={(e) => password.onChange(e)}
      value={password.value}
    >
      <Label>Password</Label>
      <Choose when={password.state}>
        <Supporting equal='required'>Password is required</Supporting>
      </Choose>
      <Show when={password.supporting}>
        <Supporting>Must be at least 8 characters</Supporting>
      </Show>
    </Input>
  )
}

export default component
