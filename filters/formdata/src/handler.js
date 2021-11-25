import * as f from '@kuba/f'

export default (listener) =>
  (e) => (
    e.preventDefault(),
    listener(
      f
        .from([...e.target])
        .pipe(f.filter(f.__, f.prop('name')))
        .pipe(f.map(f.__, ({ name, value, unmaskedValue }) => [name, f.or(unmaskedValue, value)]))
        .pipe(f.pairs)
        .done()
    )
  )
