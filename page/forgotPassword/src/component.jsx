import './style'
import BackToLogIn from '@kuba/backtologin'
import Description from './description'
import Email from '@kuba/email'
import Footer from '@kuba/footer'
import Form from '@kuba/form'
import h from '@kuba/h'
import Header from '@kuba/header'
import HGroup from '@kuba/hgroup'
import Main from './main'
import ResetPassword from './resetPassword'
import Signpost from '@kuba/signpost'
import Title from './title'

function component (auth) {
  return (
    <Main>
      <Header>
        <Signpost>key</Signpost>
        <HGroup>
          <Title />
          <Description />
        </HGroup>
      </Header>
      <section>
        <Form onSubmit={(e) => auth.forgotPassword(e)}>
          <Email />
          <ResetPassword />
        </Form>
      </section>
      <Footer>
        <BackToLogIn />
      </Footer>
    </Main>
  )
}

export default component
