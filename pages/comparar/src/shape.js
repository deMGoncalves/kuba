import * as f from '@kuba/f'

const [master, slave] = f
  .from(localStorage.getItem('_kuba.compare'))
  .pipe(f.or(f.__, '[]'))
  .pipe(JSON.parse)
  .pipe(f.slice(f.__, -2))
  .done()

export default {
  master,
  slave
}
