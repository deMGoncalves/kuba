import './style'
import h from '@kuba/h'
import Show from '@kuba/show'
import text from '@kuba/text'

function component (props, children) {
  return (
    <div className={['dropdown__container', props.className]}>
      <text.Label master dark xxs medium for={props.id}>{children.label}</text.Label>
      <select {...props} className='dropdown'>
        {children.option}
      </select>
      <span className='dropdown__trailing material-symbols-rounded'>expand_more</span>
      <Show when={children.supporting}>
        <text.Span master xxxs>{children.supporting}</text.Span>
      </Show>
    </div>
  )
}

export default component
