import './style'
import h from '@kuba/h'
import Hide from '@kuba/hide'
import Icon from '@kuba/icon'
import Show from '@kuba/show'
import text from '@kuba/text'

function component (accordion, children) {
  return (
    <details className='accordion'>
      <summary className='accordion__summary' onClick={() => accordion.toggle()}>
        <text.Strong master dark xxs medium>{children.label}</text.Strong>
        <Hide when={accordion.opened}><Icon>expand_more</Icon></Hide>
        <Show when={accordion.opened}><Icon>expand_less</Icon></Show>
      </summary>
      <section className='accordion__content' opened={accordion.opened}>
        {children.content}
      </section>
    </details>
  )
}

export default component
