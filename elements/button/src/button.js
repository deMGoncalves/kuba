import * as f from '@kuba/f'
import { blend, color, weight } from '@kuba/polished'
import styled from '@kuba/styled'

const button = styled.button`
  align-items: center;
  background-color: ${color};
  border: none;
  border-radius: var(--border-radius-pill);
  color: ${blend};
  cursor: pointer;
  display: inline-flex;
  font-family: var(--font-family-base);
  font-size: var(--font-size-xxs);
  font-weight: ${weight};
  gap: var(--spacing_inset-nano);
  justify-content: center;
  letter-spacing: 0.618px;
  line-height: var(--line-height-default);
  padding: var(--spacing_inset-nano) var(--spacing_inset-sm);
  user-select: none;
`

f.assign(button, {
  is: f.T
})

export default button
