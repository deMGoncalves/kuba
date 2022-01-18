import { color, weight } from '@kuba/polished'
import styled from '@kuba/styled'

export default styled.button`
  --color: ${color};

  align-items: center;
  background-color: transparent;
  border: var(--border-width-thin) solid var(--color);
  border-radius: var(--border-radius-pill);
  color: var(--color);
  cursor: pointer;
  display: inline-flex;
  font-family: var(--font-family-base);
  font-size: var(--font-size-xs);
  font-weight: ${weight};
  gap: var(--spacing_inset-nano);
  height: 26px;
  justify-content: center;
  letter-spacing: 0.618px;
  padding: 0 var(--spacing_inset-sm);
  user-select: none;
`
