import { filters } from '@kuba/h'
import handler from './handler'

filters.set('prevent', handler)
