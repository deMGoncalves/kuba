import * as f from '@kuba/f'

const marca = JSON.parse(f.or(localStorage.getItem('_ml.marca'), '{}'))
const material = JSON.parse(f.or(localStorage.getItem('_ml.material'), '{}'))
const tamanho = JSON.parse(f.or(localStorage.getItem('_ml.tamanho'), '{}'))

export default {
  get marca () {
    return f
      .from(marca)
      .pipe(f.entries)
      .pipe(f.reduce(f.__, (x, y) => f.gte(x[1], y[1]) ? x : y, []))
      .pipe(f.prop('[0]'))
      .done()
  },

  get material () {
    return f
      .from(material)
      .pipe(f.entries)
      .pipe(f.reduce(f.__, (x, y) => f.gte(x[1], y[1]) ? x : y, []))
      .pipe(f.prop('[0]'))
      .pipe(f.or(f.__, 'Maple Canadense'))
      .done()
  },

  get tamanho () {
    return f
      .from(tamanho)
      .pipe(f.entries)
      .pipe(f.filter(f.__, f.compose(f.different(0), f.prop('[1]'))))
      .pipe(f.map(f.__, f.prop('[0]')))
      .done()
  }
}
