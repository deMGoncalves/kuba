import './style'
import Container from './container'
import h, { Fragment } from '@kuba/h'
import Header from './header'
import Nav from './nav'
import Overlayer from './overlayer'

function component (navigation) {
  return (
    <>
      <Container opened={navigation.opened}>
        <Header />
        <Nav />
      </Container>
      <Overlayer opened={navigation.opened} onClick={() => navigation.close()} />
    </>
  )
}

export default component
