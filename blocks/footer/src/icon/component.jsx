import h from '@kuba/h'
import icon from '@kuba/icon'
import style from './style.css'

export default (props) =>
  h(
    icon[props.name],
    {
      className: style.icon,
      large: true,
      onClick: () => h('a', { href: props.url, target: '_blank' }).click()
    }
  )
