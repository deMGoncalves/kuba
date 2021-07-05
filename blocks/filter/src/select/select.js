import Multi from './multi'
import Single from './single'

class Select {
  static create (filter) {
    return (descriptor) =>
      descriptor.multiselect
        ? Multi.create(descriptor, filter)
        : Single.create(descriptor, filter)
  }
}

export default Select
