import './style'
import ConfirmNewChangePassword from '@kuba/confirmnewpassword'
import CurrentChangePassword from '@kuba/currentpassword'
import Description from './description'
import Form from '@kuba/form'
import h, { Fragment } from '@kuba/h'
import HGroup from '@kuba/hgroup'
import HistoryBack from '@kuba/historyback'
import Main from '@kuba/main'
import NewChangePassword from '@kuba/newpassword'
import SaveChanges from '@kuba/savechanges'
import Title from './title'
import TopBar, { Leading, Headline } from '@kuba/topbar'

function component () {
  return (
    <>
      <TopBar large>
        <Leading>
          <HistoryBack />
        </Leading>
        <Headline>
          <HGroup>
            <Title />
            <Description />
          </HGroup>
        </Headline>
      </TopBar>
      <Main>
        <Form>
          <CurrentChangePassword />
          <NewChangePassword />
          <ConfirmNewChangePassword />
          <SaveChanges />
        </Form>
      </Main>
    </>
  )
}

export default component
