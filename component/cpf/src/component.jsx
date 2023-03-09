import Choose from '@kuba/choose'
import h from '@kuba/h'
import Input, { Label, Supporting } from '@kuba/input'
import pattern from './pattern'

function component (cpf) {
  return (
    <Input
      type='text'
      inputmode='numeric'
      id='cpf'
      name='cpf'
      required
      pattern={pattern}
      onBlur={(e) => cpf.onChange(e)}
      onChange={(e) => cpf.onChange(e)}
      onInvalid={(e) => cpf.onChange(e)}
      value={cpf.value}
    >
      <Label>CPF</Label>
      <Choose when={cpf.state}>
        <Supporting equal='required'>CPF is required</Supporting>
        <Supporting equal='pattern'>Invalid CPF number</Supporting>
      </Choose>
    </Input>
  )
}

export default component
