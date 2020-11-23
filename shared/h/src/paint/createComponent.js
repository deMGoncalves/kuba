import * as f from '@rex/f'
import * as d from '@rex/h/src/dunders'

export default async (instance, component, children) =>
  f.assign(await component(instance, children), { [d.__klass__]: instance })
