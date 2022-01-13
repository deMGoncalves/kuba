import * as f from '@kuba/f'
import { params } from '@kuba/router'
import middleware from '@kuba/middleware'

function getShape (shape) {
  fetch('http://localhost:8080/api/shape/marca',
    {
      body: JSON.stringify({ slug: params.marca }),
      method: 'POST'
    }
  )
    .then(f.or(f.__, []))
    .then(response => response.json())
    .then(snapshot => shape.getImages(snapshot.data))
}

export default middleware(getShape)
