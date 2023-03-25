import './style'
import { urlFor } from '@kuba/router'
import BackToLogIn from '@kuba/backtologin'
import Description from './description'
import Footer from './footer'
import Form from '@kuba/form'
import h from '@kuba/h'
import Header from './header'
import HGroup from '@kuba/hgroup'
import Main from './main'
import Password from '@kuba/password'
import PasswordConfirm from '@kuba/passwordconfirm'
import ResetPassword from './resetPassword'
import Signpost from '@kuba/signpost'
import Title from './title'

function component () {
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
        <Form action={urlFor('passwordReset')}>
          <Password supporting />
          <PasswordConfirm />
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
