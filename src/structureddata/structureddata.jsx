import h from '@h'
import breadcrumb from './breadcrumb'
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
            breadcrumb(page),
            organization,
            product(page),
            website
          ])
        }
      </script>
    )

    return page
  }
