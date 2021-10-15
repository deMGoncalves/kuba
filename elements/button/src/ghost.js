import * as f from '@kuba/f'
import { color } from '@kuba/polished'
import styled from '@kuba/styled'

const button = styled.button`
  align-items: center;
  background-color: var(--color-master-lightest);
  border: 1px solid ${color};
  border-radius: var(--border-radius-pill);
  color: ${color};
  cursor: pointer;
  display: inline-flex;
  font-family: var(--font-family-base);
  font-size: var(--font-size-xxxs);
  font-weight: var(--font-weight-medium);
  justify-content: center;
  letter-spacing: 0.618px;
  line-height: var(--line-height-sm);
  padding: var(--spacing_inset-nano) var(--spacing_inset-sm);
  text-decoration: none;
  user-select: none;
`

f.assign(button, {
  is: f.has('ghost')
})

export default button
