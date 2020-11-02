import h from '@rex/h'
import * as ui from '@rex/kit'
import Header from '@header'
import style from './style.css'

export default (props, children) =>
  <main className={[style.template, props.className]}>
    <Header />
    {children}
    <ui.Footer />
  </main>
