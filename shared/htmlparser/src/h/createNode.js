import extend from './extend'
import mapper from './mapper'
import uid from './uid'

export default (tagName, attributes, children) =>
  ({ '@unid': uid(), tagName, attributes: extend(attributes), children: mapper(children) })
