import './style'
import Close from '@kuba/close'
import Container from './container'
import Form from './form'
import h, { Fragment } from '@kuba/h'
import Overlayer from './overlayer'

function component (search) {
  return (
    <>
      <Container opened={search.opened}>
        <Form />
        <Close onClick={() => search.close()} />
      </Container>
      <Overlayer opened={search.opened} onClick={() => search.close()} />
    </>
  )
}

export default component
