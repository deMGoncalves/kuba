import './style'
import h from '@kuba/h'
import Show from '@kuba/show'
import text from '@kuba/text'

function component (props, children) {
  return (
    <div className={['input__container', props.className]}>
      <text.Label master dark xxs medium for={props.id}>{children.label}</text.Label>
      <input {...props} className='input' autocomplete='off' />
      <Show when={children.trailing}>{children.trailing}</Show>
      <Show when={children.supporting}>{children.supporting}</Show>
    </div>
  )
}

export default component
