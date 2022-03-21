import button from '@kuba/button'
import h from '@kuba/h'

export default (search) =>
  <button.icon.Search onClick={() => search.open()} />
