import './style'
import Breadcrumb from './breadcrumb'
import h, { Fragment } from '@kuba/h'
import Footer from '@kuba/footer'
import Header from '@kuba/header'
import Hero from '@kuba/hero'
import Main from '@kuba/main'
import Navigation from './navigation'
import Search from './search'
import Title from './title'

function component () {
  return (
    <>
      <Header />
      <Main>
        <Title />
        <Hero half />
      </Main>
      <Footer>
        <Breadcrumb />
      </Footer>
      <Search />
      <Navigation />
    </>
  )
}

export default component
