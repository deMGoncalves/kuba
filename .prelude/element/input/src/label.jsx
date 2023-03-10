import h, { Fragment } from '@kuba/h'

function component (_props, children) {
  return (
    <Fragment slot='label'>{children}</Fragment>
  )
}

export default component
