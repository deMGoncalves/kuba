import * as f from '@kuba/f'

const { index } = f.dunder

const data = (path) =>
  ({
    '@id': '#item',
    '@type': 'ListItem',
    item: path.href,
    name: path.title,
    position: path[index]()
  })

f.assign(data, {
  index
})

export default data
