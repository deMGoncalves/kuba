import h from '@kuba/h'
import style from './style'
import width from './width'

export default (logo) =>
  <img
    alt={logo.name}
    className={[style.logo, logo.className]}
    height='166'
    large={logo.large}
    loading='lazy'
    onClick={logo.onClick}
    small={logo.small}
    src={logo.url}
    width={width(logo)}
  />
