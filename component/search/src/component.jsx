import './style'
import Close from '@kuba/close'
import Container from './container'
import h, { Fragment } from '@kuba/h'
import Input from './input'
import Overlayer from './overlayer'

function component (search) {
  return (
    <>
      <Container opened={search.opened}>
        <Input />
        <Close onClick={() => search.close()} />
      </Container>
      <Overlayer opened={search.opened} onClick={() => search.close()} />
    </>
  )
}

export default component
