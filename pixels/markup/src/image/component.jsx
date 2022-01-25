import h, { Fragment } from '@kuba/h'

export default (image) =>
<>
  <meta property='og:image' content={image.content} />
  <meta property='twitter:image' content={image.content} />
</>
