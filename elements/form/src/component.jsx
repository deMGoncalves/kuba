import h from '@kuba/h'
import style from './style'

export default (props, children) =>
  <form className={[style.form, props.className]} onSubmit:formData={props.onSubmit}>
    {children}
  </form>
