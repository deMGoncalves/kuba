import './style'
import container from '@kuba/container'
import h from '@kuba/h'
import Hide from '@kuba/hide'
import Show from '@kuba/show'

function component (props, children) {
  return (
    <header className='topBar'>
      <container.Div className='topBar__container'>
        {children.leading}
        <Hide when={props.large}>{children.headline}</Hide>
        {children.trailing}
      </container.Div>
      <Show when={props.large}>
        <container.Div>
          {children.headline}
        </container.Div>
      </Show>
    </header>
  )
}

export default component
