import h from '@kuba/h'
import * as f from '@kuba/f'
import { urlFor } from '@kuba/router'
import icon from '@kuba/icon'
import link from '@kuba/link'
import style from './style'

const component = (props) =>
  <link.Master className={style.link} href={urlFor(props.page)} lightest>
    {props.text}
    {icon[props.icon]({ className: style.link__icon, small: f.T(), onColor: f.T() })}
  </link.Master>

f.assign(component, {
  is: f.has('group')
})

export default component
