import * as f from '@kuba/f'
import cleaner from './cleaner'

const mapper = [
  'bold',
  'normal',
  'thin'
]

const weight = (props) =>
  f.cond(
    [f.has('bold'), f.always('700')],
    [f.has('normal'), f.always('400')],
    [f.has('thin'), f.always('300')],
    [f.T, f.always('400')]
  )(props)

export default cleaner(weight, mapper)
