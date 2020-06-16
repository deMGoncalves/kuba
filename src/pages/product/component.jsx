import h from '@h'
import * as s from '@pages/share'

export default (page) =>
  <s.Main>
    <s.Container>
      <s.Image>
        <source srcSet={page.image} />
      </s.Image>
    </s.Container>
  </s.Main>
