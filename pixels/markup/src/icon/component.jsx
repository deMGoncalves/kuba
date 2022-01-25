import h, { Fragment } from '@kuba/h'

export default (icon) =>
  <>
    <link rel='icon' href={icon.href} type={icon.type} />
    <link rel='shortcut' href={icon.href} type={icon.type} />
    <link rel='apple-touch-icon' href={icon.href} type={icon.type} />
  </>
