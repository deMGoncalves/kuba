import * as f from '@kuba/f'

const tamanho = JSON.parse(f.or(localStorage.getItem('_ml.tamanho'), '{}'))

export default {
  get tamanho () {
    return f
      .from(tamanho)
      .pipe(f.entries)
      .pipe(f.filter(f.__, f.compose(f.different(0), f.prop('[1]'))))
      .pipe(f.map(f.__, f.prop('[0]')))
      .done()
  }
}
