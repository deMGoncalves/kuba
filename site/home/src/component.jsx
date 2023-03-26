import './style'
import h, { Fragment } from '@kuba/h'
import Header from '@kuba/header'
import Main from '@kuba/main'
import Navigation from './navigation'
import Search from './search'

function component () {
  return (
    <>
      <Header />
      <Main />
      <Search />
      <Navigation />
    </>
  )
}

export default component
