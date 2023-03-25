import './style'
import BackToLogIn from '@kuba/backtologin'
import ClickToResend from './clickToResend'
import Description from './description'
import Footer from './footer'
import Form from '@kuba/form'
import h from '@kuba/h'
import Header from './header'
import HGroup from '@kuba/hgroup'
import Main from './main'
import OpenEmailApp from './openEmailApp'
import Signpost from '@kuba/signpost'
import Title from './title'

function component () {
  return (
    <Main>
      <Header>
        <Signpost>mail</Signpost>
        <HGroup>
          <Title />
          <Description />
        </HGroup>
      </Header>
      <section>
        <Form>
          <OpenEmailApp />
        </Form>
      </section>
      <Footer>
        <ClickToResend />
        <BackToLogIn />
      </Footer>
    </Main>
  )
}

export default component
