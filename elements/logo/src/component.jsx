import h from '@kuba/h'
import style from './style'
import height from './height'
import width from './width'

export default (logo) =>
  <img
    alt={logo.name}
    className={[style.logo, logo.className]}
    height={height(logo)}
    large={logo.large}
    loading='lazy'
    onClick={logo.onClick}
    small={logo.small}
    src={logo.url}
    width={width(logo)}
  />
