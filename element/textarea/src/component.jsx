import './style'
import h from '@kuba/h'
import Show from '@kuba/show'
import text from '@kuba/text'

function component (props, children) {
  return (
    <div className={['textarea__container', props.className]}>
      <text.Label master dark xxs medium for={props.id}>{children.label}</text.Label>
      <textarea {...props} className='textarea' autocomplete='off' />
      <Show when={children.supporting}>{props.supporting}</Show>
    </div>
  )
}

export default component
