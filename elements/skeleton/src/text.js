import * as f from '@kuba/f'
import { size } from '@kuba/polished'
import styled from '@kuba/styled'

export default styled.span`
  background-color: var(--color-master-light);
  height: ${size};
  width: ${() => f.random(42, 89)}%;
`
