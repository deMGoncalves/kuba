import * as f from '@kuba/f'
import styled from '@kuba/styled'

export default styled.span`
  background-color: var(--color-master-light);
  border-radius: var(--border-radius-sm);
  height: 48px;
  width: ${() => f.random(89, 178)}px;
`
