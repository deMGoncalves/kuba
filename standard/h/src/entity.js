import * as f from '@kuba/f'

class Entity {
  static is (target) {
    return f.has(f.dunder.tag, target)
  }

  static transform (entity) {
    return entity[f.dunder.tag]
  }
}

export default Entity
