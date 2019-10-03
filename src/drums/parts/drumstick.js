import * as f from '@f'

export default (keyCode, part) =>
  window.addEventListener('keydown', (e) =>
    (f.equal(keyCode, e.keyCode) && part.play()))
