import h, { Fragment } from '@kuba/h'

export default (url) =>
<>
  <meta property='og:url' content={url.content} />
  <meta property='twitter:url' content={url.content} />
</>
