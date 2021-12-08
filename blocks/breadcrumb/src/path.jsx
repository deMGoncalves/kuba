import h, { Fragment } from '@kuba/h'
import * as f from '@kuba/f'
import { urlFor } from '@kuba/router'
import link from '@kuba/link'
import Show from '@kuba/show'
import text from '@kuba/text'

export default (path, index) =>
  <>
    <Show when={f.isTruthy(index)}>
      <text.Span master xxxs bold>/</text.Span>
    </Show>
    <link.Master href={urlFor(path.page)} xxxs>{path.title}</link.Master>
  </>
