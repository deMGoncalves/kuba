import fragment from '@rex/h/src/fragment'
import parser from './parser'

export default (props, children) =>
  fragment(props, parser(children))
