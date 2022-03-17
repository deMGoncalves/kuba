import h, { Fragment } from '@kuba/h'

export default (description) =>
  <>
    <meta name='description' content={description.content} />
    <meta property='og:description' content={description.content} />
    <meta property='twitter:description' content={description.content} />
  </>
