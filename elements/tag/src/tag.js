import { color, weight } from '@kuba/polished'
import styled from '@kuba/styled'

export default styled.button`
  --tag-color: ${color};

  align-items: center;
  background-color: transparent;
  border: var(--border-width-thin) solid var(--tag-color);
  border-radius: var(--border-radius-pill);
  color: var(--tag-color);
  cursor: pointer;
  display: inline-flex;
  font-family: var(--font-family-base);
  font-size: var(--font-size-xs);
  font-weight: ${weight};
  gap: var(--spacing_inset-nano);
  height: 35px;
  justify-content: center;
  letter-spacing: 0.618px;
  line-height: var(--line-height-xl);
  padding: 0 var(--spacing_inset-sm);
  user-select: none;
`
