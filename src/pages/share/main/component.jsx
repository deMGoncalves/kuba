import h from '@h'
import * as s from '@pages/share'
import './reset.css'

export default (_, chield) =>
  <main>
    <s.Header />
    { chield }
    <s.Footer />
  </main>
