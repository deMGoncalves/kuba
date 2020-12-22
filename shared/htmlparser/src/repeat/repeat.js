import h from '@rex/htmlparser/src/h'
import * as f from '@rex/f'
import Fragment from '@rex/htmlparser/src/fragment'

export default (props) =>
  <Fragment>
    {f.map(props.iterator, (attrs, index) => props.component(attrs, index))}
  </Fragment>
