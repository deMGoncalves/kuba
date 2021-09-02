import h from '@kuba/h'
import render from './render'

export default () =>
  render(<meta http-equiv='Content-Security-Policy' content='upgrade-insecure-requests' />)
