import * as f from '@kuba/f'
import executeComponent from './executeComponent'

const createEntity = (componentRef, entity) =>
  f.assign(entity, {
    [f.magic('paint')]: () =>
      executeComponent(componentRef, entity).paint()
  })

export default createEntity
