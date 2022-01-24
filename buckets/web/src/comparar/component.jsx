import h, { Fragment } from '@kuba/h'
import View from '@kuba/view'
import Shelf from './shelf'
import Title from './title'

export default () =>
  <View>
    <Fragment slot='main'>
      <Title />
      <Shelf />
    </Fragment>
  </View>
