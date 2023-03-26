import './style'
import h, { Fragment } from '@kuba/h'
import Header from '@kuba/header'
import Main from '@kuba/main'
import Navigation from '@kuba/navigation'

function component () {
  return (
    <>
      <Header />
      <Navigation />
      <Main />
    </>
  )
}

export default component
