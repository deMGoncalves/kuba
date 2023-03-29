import './style'
import Breadcrumb from './breadcrumb'
import h, { Fragment } from '@kuba/h'
import Header from '@kuba/header'
import Hero from '@kuba/hero'
import Main from './main'
import Navigation from './navigation'
import Search from './search'
import Title from './title'

function component () {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Main>
        <Title />
        <Hero half />
      </Main>
      <Search />
      <Navigation />
    </>
  )
}

export default component
