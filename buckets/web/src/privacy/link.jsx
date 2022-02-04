import h from '@kuba/h'
import link from '@kuba/link'
import { urlFor } from '@kuba/router'

export default () =>
  <link.Complete href={urlFor('cookie')} darker xxxs>política de cookies</link.Complete>
