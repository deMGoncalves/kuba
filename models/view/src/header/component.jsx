import h from '@kuba/h'
import button from '@kuba/button'
import Header from '@kuba/header'

export default (header) =>
  <Header>
    <button.icon.ArrowLeft onClick:stop={() => header.back()} />
  </Header>
