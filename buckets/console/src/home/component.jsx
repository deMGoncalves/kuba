import h, { Fragment } from '@kuba/h'

export default (home) =>
  <Fragment>
    <div>Hello Web Worker</div>
    <div>:@</div>
    {home.target}
  </Fragment>
