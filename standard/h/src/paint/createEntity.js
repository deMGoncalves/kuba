import * as f from '@kuba/f'
import executeComponent from './executeComponent'

const createEntity = (componentRef, entity) =>
  f.assign(entity, {
    [f.magic('tag')]: executeComponent(componentRef, entity),

    // TODO: nao devemos trabalhar com a entidade, apenas
    // com o tag diretamente
    [f.magic('paint')]: () =>
      entity[f.magic('tag')].paint()
  })

export default createEntity
