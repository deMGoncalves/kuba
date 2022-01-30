import h from '@kuba/h'
import button from '@kuba/button'

export default (search) =>
  <button.icon.Search onClick={() => search.open()} />
