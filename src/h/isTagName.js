import is from 'ramda/src/is'

export default (tagNameOrComponent) =>
  is(String, tagNameOrComponent)
