import * as f from '@kuba/f'

const minify = (textContent) => (
  f
    .from(textContent)
    .pipe(f.replace(f.__, /\r?\n|\r/g, ''))
    .pipe(f.replace(f.__, /\t/g, ''))
    .pipe(f.replace(f.__, / +/g, ' '))
    .pipe(f.trim)
    .done()
)

export default f.memoize(minify)
