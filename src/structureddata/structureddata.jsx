import h from '@h'
import organization from './organization'
import website from './website'

export default (Klass) =>
  function () {
    const page = new Klass(...arguments)

    document.body.append(
      <script type='application/ld+json'>
        {
          JSON.stringify([
            organization,
            website
          ])
        }
      </script>
    )

    return page
  }
