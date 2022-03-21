import container from '@kuba/container'
import h from '@kuba/h'
import style from './style'

export default (props, children) =>
  <header className={[style.header, props.className]} fixed={props.fixed}>
    <container.Div className={style.header__container} fluid={props.fluid}>
      {children}
    </container.Div>
  </header>
