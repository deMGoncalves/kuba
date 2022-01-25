import h from '@kuba/h'

export default (cps) =>
  <meta http-equiv='Content-Security-Policy' content={cps.content} />
