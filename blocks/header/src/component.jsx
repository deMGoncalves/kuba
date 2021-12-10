import h from '@kuba/h'
import container from '@kuba/container'
import style from './style'

export default (props, children) =>
  <header className={[style.header, props.className]}>
    <container.Div className={style.header__container} fixed={props.fixed} fluid={props.fluid}>
      {children}
    </container.Div>
  </header>
