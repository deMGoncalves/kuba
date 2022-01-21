import * as f from '@kuba/f'
import styled from '@kuba/styled'

export default styled.button`
  background-color: var(--color-master-light);
  border: none;
  border-radius: var(--border-radius-sm);
  height: 42px;
  width: ${() => f.random(89, 178)}px;
`
