import h from '@h'
import organization from './organization'

export default (Klass) =>
  function () {
    const page = new Klass(...arguments)

    document.body.append(
      <script type='application/ld+json'>
        {
          JSON.stringify([
            organization(page)
          ])
        }
      </script>
    )

    return page
  }
