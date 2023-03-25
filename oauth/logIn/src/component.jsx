import './style'
import Description from './description'
import Email from '@kuba/email'
import Footer from './footer'
import ForgotPassword from './forgotPassword'
import Form from '@kuba/form'
import h from '@kuba/h'
import Header from '@kuba/header'
import HGroup from '@kuba/hgroup'
import Logomark from '@kuba/logomark'
import Main from './main'
import Password from '@kuba/password'
import SignIn from './signIn'
import SignUp from './signUp'
import Title from './title'

function component (auth) {
  return (
    <Main>
      <Header>
        <Logomark />
        <HGroup>
          <Title />
          <Description />
        </HGroup>
      </Header>
      <section>
        <Form onSubmit={(e) => auth.logIn(e)}>
          <Email value={auth.email} />
          <Password value={auth.password} />
          <ForgotPassword />
          <SignIn />
        </Form>
      </section>
      <Footer>
        <SignUp />
      </Footer>
    </Main>
  )
}

export default component
