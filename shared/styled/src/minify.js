import * as f from '@kuba/f'

export default (string) =>
  f
    .from(string)
    .pipe(f.replace(f.__, /\n/g, ''))
    .pipe(f.replace(f.__, /\t/g, ''))
    .pipe(f.replace(f.__, / +/g, ' '))
    .done()
