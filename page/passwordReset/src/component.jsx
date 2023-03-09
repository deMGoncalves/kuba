import './style'
import { urlFor } from '@kuba/router'
import BackToLogIn from '@kuba/backtologin'
import Continue from './continue'
import Description from './description'
import Footer from './footer'
import Form from '@kuba/form'
import h from '@kuba/h'
import Header from './header'
import HGroup from '@kuba/hgroup'
import Main from './main'
import Signpost from '@kuba/signpost'
import Title from './title'

function component () {
  return (
    <Main>
      <Header>
        <Signpost>done</Signpost>
        <HGroup>
          <Title />
          <Description />
        </HGroup>
      </Header>
      <section>
        <Form action={urlFor('home')}>
          <Continue />
        </Form>
      </section>
      <Footer>
        <BackToLogIn />
      </Footer>
    </Main>
  )
}

export default component
