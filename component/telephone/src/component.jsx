import Choose from '@kuba/choose'
import h from '@kuba/h'
import Input, { Label, Supporting } from '@kuba/input'

function component (telephone) {
  return (
    <Input
      type='tel'
      id='telephone'
      name='telephone'
      required
      onBlur={(e) => telephone.onChange(e)}
      onChange={(e) => telephone.onChange(e)}
      onInvalid={(e) => telephone.onChange(e)}
      value={telephone.value}
    >
      <Label>Telephone</Label>
      <Choose when={telephone.state}>
        <Supporting equal='required'>Telephone is required</Supporting>
      </Choose>
    </Input>
  )
}

export default component
