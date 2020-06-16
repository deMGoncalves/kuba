import h from '@h'
import * as s from '@pages/share'

export default (page) =>
  <s.Main>
    <s.Container>
      <s.Image alt={page.title}>
        <h1>{ page.title }</h1>
        <source srcSet={page.image} />
        <data value='1329.05'>R$ 1.329,05</data>
      </s.Image>
    </s.Container>
  </s.Main>
