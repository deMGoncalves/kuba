import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import component from './component'
import data from './data'

@paint(component)
@jsonld(data)
class Shapes {
}

export default Shapes
