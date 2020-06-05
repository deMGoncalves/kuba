import h from '@h'
import * as s from '@pages/share'

export default (_, chield) =>
  <main>
    <s.Header />
    { chield }
    <s.Footer />
  </main>
