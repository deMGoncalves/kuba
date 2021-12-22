import { color, family, size, weight } from '@kuba/polished'
import styled from '@kuba/styled'

export default styled.a`
  color: ${color};
  cursor: pointer;
  font-family: ${family};
  font-size: ${size};
  font-weight: ${weight};
  letter-spacing: 0.618px;
  line-height: var(--line-height-default);
  user-select: none;
`
