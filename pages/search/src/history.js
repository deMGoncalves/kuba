import * as f from '@kuba/f'

export default function (q) {
  const value = f
    .from(localStorage.getItem('search'))
    .pipe(f.or(f.__, '[]'))
    .pipe(JSON.parse)
    .pipe(f.unshift(f.__, q))
    .pipe(f.splice(f.__, 0, 5))
    .pipe(JSON.stringify)
    .done()

  localStorage.setItem('search', value)
}
