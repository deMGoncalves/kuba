import h from '@h'
import './reset.css'

export default (attr, chield) =>
  <main className={attr.className}>
    { chield }
  </main>
