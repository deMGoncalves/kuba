import * as f from '@kuba/f'
import executeComponent from './executeComponent'

const paint = f.magic('paint')
const createEntity = (componentRef, entity) =>
  f.assign(entity, {
    [paint]: () =>
      executeComponent(componentRef, entity)[paint]()
  })

export default createEntity
