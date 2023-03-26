import './style'
import Container from './container'
import h, { Fragment } from '@kuba/h'
import Overlayer from './overlayer'

function component (navigation) {
  return (
    <>
      <Container opened={navigation.opened} />
      <Overlayer opened={navigation.opened} onClick={() => navigation.close()} />
    </>
  )
}

export default component
