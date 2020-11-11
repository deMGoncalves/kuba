import h from '@rex/h/src/h'
import Hide from '@rex/h/src/hide'

export default (zone, children) =>
  <section className={zone.className} slot={zone.slot}>
    <Hide if={zone.offScreen}>
      {children}
    </Hide>
  </section>
