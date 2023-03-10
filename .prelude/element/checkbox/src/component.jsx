import './style'
import h from '@kuba/h'
import text from '@kuba/text'

function component (props, children) {
  return (
    <div className={['checkbox__container', props.className]}>
      <input {...props} className='checkbox' type='checkbox' />
      <span class='checkbox__icon material-symbols-rounded'>done</span>
      <text.Label className='checkbox__label' master dark xxs for={props.id}>{children}</text.Label>
    </div>
  )
}

export default component
