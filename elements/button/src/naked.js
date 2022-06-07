import * as f from '@kuba/f'
import { color, weight } from '@kuba/polished'
import has from './has'
import merge from './merge'
import skeleton from '@kuba/skeleton'
import styled from '@kuba/styled'

const component = styled.button`
  align-items: center;
  background-color: transparent;
  border: var(--border-width-thin) solid ${color};
  border-radius: var(--border-radius-sm);
  color: ${color};
  cursor: pointer;
  display: inline-flex;
  font-family: var(--font-family-base);
  font-size: var(--font-size-xxs);
  font-weight: ${weight};
  gap: var(--spacing_inset-sm);
  height: 42px;
  justify-content: center;
  letter-spacing: 0.618px;
  padding: 0 var(--spacing_inset-sm);
  user-select: none;
`

const button = () =>
  new Proxy({}, {
    get: (_, type) =>
      (props, children) => (
        has(children)
          ? component(merge(props, type), children)
          : skeleton.button(props)
      )
  })

f.assign(button, {
  is: f.equal('naked')
})

export default button
