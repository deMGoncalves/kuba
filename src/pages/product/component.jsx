import h from '@h'
import * as s from '@pages/share'

export default (page) =>
  <s.Main>
    <s.Container>
      <h1>{ page.title }</h1>
      <s.Image alt={page.title}>
        <source srcSet={page.image} />
      </s.Image>
      <data value='1329.05'>R$ 1.329,05</data>
    </s.Container>
  </s.Main>
