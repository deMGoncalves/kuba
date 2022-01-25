import h, { Fragment } from '@kuba/h'

export default (title) =>
<>
  <title>{title.textContent}</title>
  <meta property='og:title' content={title.textContent} />
  <meta property='twitter:title' content={title.textContent} />
</>
