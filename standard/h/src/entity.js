import * as f from '@kuba/f'

class Entity {
  static is (target) {
    return f.has(f.magic('tag'), target)
  }

  static transform (entity) {
    return entity[f.magic('tag')]()
  }
}

export default Entity
