import h from '@h'
import organization from './organization'
import product from './product'
import website from './website'

export default (Klass) =>
  function () {
    const page = new Klass(...arguments)

    document.body.append(
      <script type='application/ld+json'>
        {
          JSON.stringify([
            organization,
            product,
            website
          ])
        }
      </script>
    )

    return page
  }
