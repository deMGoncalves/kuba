import uid from './uid'

export default (textContent) =>
  ({ '@unid': uid(), textContent })
