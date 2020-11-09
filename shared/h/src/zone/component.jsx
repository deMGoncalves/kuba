import h from '@rex/h/src/h'
import Show from '@rex/h/src/show'

export default (zone, children) =>
  <section className={zone.className} slot={zone.slot}>
    <Show if={zone.onScreen}>
      {children}
    </Show>
  </section>
