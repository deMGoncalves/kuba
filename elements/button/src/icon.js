import * as f from '@kuba/f'
import styled from '@kuba/styled'

const button = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: var(--border-radius-circular);
  cursor: pointer;
  display: inline-flex;
  height: 48px;
  justify-content: center;
  user-select: none;
  width: 48px;
`

f.assign(button, {
  is: f.equal('Icon')
})

export default button
