import './style'
import Container from './container'
import h, { Fragment } from '@kuba/h'
import Overlayer from './overlayer'

function component (search) {
  return (
    <>
      <Container opened={search.opened} />
      <Overlayer opened={search.opened} onClick={() => search.close()} />
    </>
  )
}

export default component
