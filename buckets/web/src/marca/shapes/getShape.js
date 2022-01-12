import * as f from '@kuba/f'
import middleware from '@kuba/middleware'

function getShape (shape) {
  fetch('http://localhost:8080/api/shape/marca',
    {
      body: JSON.stringify({ slug: 'real-skateboards' }),
      method: 'POST'
    }
  )
    .then(f.or(f.__, []))
    .then(response => response.json())
    .then(snapshot => shape.getImages(snapshot.data))
}

export default middleware(getShape)