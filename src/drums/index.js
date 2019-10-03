import h from '@h'
import router from '@router'
import Drums from './Drums'

router(/^\/$/, () =>
  document.body.appendChild(<Drums />))
