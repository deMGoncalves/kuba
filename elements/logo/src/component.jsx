import h from '@kuba/h'
import height from './height'
import style from './style'
import width from './width'

export default (logo) =>
  <img
    className={[style.logo, logo.className]}
    alt={logo.name}
    height={height(logo)}
    large={logo.large}
    loading='lazy'
    onClick={logo.onClick}
    small={logo.small}
    src={logo.url}
    width={width(logo)}
  />
