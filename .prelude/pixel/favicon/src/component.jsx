import favicon from './favicon.ico'
import h, { Fragment } from '@kuba/h'

function component () {
  return (
    <>
      <link rel='icon' type='image/x-icon' href={favicon} />
      <link rel='shortcut' type='image/x-icon' href={favicon} />
      <link rel='apple-touch-icon' type='image/x-icon' href={favicon} />
    </>
  )
}

export default component
