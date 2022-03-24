import * as f from '@kuba/f'

export default function (url) {
  const [, name, ext] = /^.*\/(?<name>.*)\.(?<ext>.*)$/g.exec(decodeURI(url))
  return `${f.slug(name)}.${f.toLower(ext)}`
}
