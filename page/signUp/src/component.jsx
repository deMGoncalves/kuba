import './style'
import Description from './description'
import Email from '@kuba/email'
import Footer from '@kuba/footer'
import Form from '@kuba/form'
import GetStarted from './getStarted'
import h from '@kuba/h'
import Header from '@kuba/header'
import HGroup from '@kuba/hgroup'
import LogIn from './logIn'
import Logomark from '@kuba/logomark'
import Main from './main'
import Name from '@kuba/name'
import Password from '@kuba/password'
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
        <Form onSubmit={(e) => auth.signUp(e)}>
          <Name value={auth.name} />
          <Email value={auth.email} />
          <Password value={auth.password} />
          <GetStarted />
        </Form>
      </section>
      <Footer>
        <LogIn />
      </Footer>
    </Main>
  )
}

export default component
