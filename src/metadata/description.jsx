import h from '@h'

export default (page) =>
  document.head.appendChild(<meta name='description' content={page.description} />)
