import { color, family, size, weight } from '@kuba/polished'
import styled from '@kuba/styled'

export default styled.a`
  align-items: center;
  color: ${color};
  cursor: pointer;
  display: inline-flex;
  font-family: ${family};
  font-size: ${size};
  font-weight: ${weight};
  gap: var(--spacing_inset-xs);
  letter-spacing: 0.618px;
  line-height: var(--line-height-default);
  user-select: none;
`
