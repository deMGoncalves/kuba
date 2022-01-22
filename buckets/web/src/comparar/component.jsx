import h, { Fragment } from '@kuba/h'
import View from '@kuba/view'
import Shelf from './shelf'

export default () =>
  <View>
    <Fragment slot='main'>
      <Shelf />
    </Fragment>
  </View>
