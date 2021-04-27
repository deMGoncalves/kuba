import h, { Hide } from '@kuba/h'

export default (zone, children) =>
  <div className={zone.className} slot={zone.slot}>
    <Hide if={zone.offScreen}>
      {children}
    </Hide>
  </div>
