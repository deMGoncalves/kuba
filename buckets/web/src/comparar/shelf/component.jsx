import h from '@kuba/h'
import container from '@kuba/container'
import Metro from '@kuba/metro'
import story from '@kuba/story'

export default (shelf) =>
  <story.Section>
    <container.Div>
      <Metro>
        {shelf.shapes}
      </Metro>
    </container.Div>
  </story.Section>
