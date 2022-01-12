import middleware from '@kuba/middleware'

function getShape (marca) {
  fetch('http://localhost:8080/api/shape/marca',
    {
      body: JSON.stringify({ slug: 'real-skateboards' }),
      method: 'POST'
    }
  )
    .then(response => response.json())
    .then(data => marca.getImages(data))
}

export default middleware(getShape)
