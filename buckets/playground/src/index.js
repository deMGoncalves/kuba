import '@kuba/stop'
import '@kuba/istruthy'

import h, { render } from '@kuba/h'

render(
  document.body,
  <input type='checkbox' checked:isTruthy={false} onChange:stop={(e) => console.log(e.target.checked)} />
)
