import './style'
import h from '@kuba/h'
import Description from './description'
import Footer from './footer'
import GoBack from './goBack'
import HGroup from '@kuba/hgroup'
import Main from './main'
import Sorry from './sorry'
import TakeMeHome from './takeMeHome'
import Title from './title'

function component () {
  return (
    <Main>
      <header>
        <HGroup className='pageNotFound__hgroup'>
          <Title />
          <Description />
        </HGroup>
      </header>
      <section>
        <Sorry />
      </section>
      <Footer>
        <TakeMeHome />
        <GoBack />
      </Footer>
    </Main>
  )
}

export default component
