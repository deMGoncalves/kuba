import h, { Fragment } from '@kuba/h'
import Show from '@kuba/show'
import text from '@kuba/text'

function component (path) {
  return (
    <>
      <Show when={path.index}>
        <text.Span master xxxs bold>/</text.Span>
      </Show>
      <text.A master xxxs href={path.href}>{path.title}</text.A>
    </>
  )
}

export default component
