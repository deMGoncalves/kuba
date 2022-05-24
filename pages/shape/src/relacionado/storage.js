import * as f from '@kuba/f'
import { useEffect } from '@kuba/global'
import http, { api } from '@kuba/http'
import middleware from '@kuba/middleware'

const { didMount, onError, onResponse, query } = f.dunder

const storage = middleware((target) => {
  const mount = new Promise((resolve) => (
    target[didMount] = resolve
  ))

  const effect = new Promise((resolve) =>
    useEffect(resolve)
  )

  Promise
    .all([mount, effect])
    .then(() => (
      http
        .post(`${api.worker}/shape/shelf`)
        .body({
          ...target[query](),
          size: 4,
          page: 1
        })
        .json()
        .then(({ data, error }) => (
          error
            ? target[onError]()
            : target[onResponse](data)
        ))
    ))
})

f.assign(storage, {
  onError,
  onResponse,
  query
})

export default storage
