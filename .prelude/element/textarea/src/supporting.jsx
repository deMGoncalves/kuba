import h from '@kuba/h'
import text from '@kuba/text'

function component (props, children) {
  return (
    <text.Span {...props} slot='supporting' master xxxs>{children}</text.Span>
  )
}

export default component
