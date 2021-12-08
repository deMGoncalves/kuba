import h from '@kuba/h'
import container from '@kuba/container'
import story from '@kuba/story'

export default (props, children) =>
  <story.Article>
    <container.Div>
      {children}
    </container.Div>
  </story.Article>
