import h, { Fragment } from '@kuba/h'
import button from '@kuba/button'
import Container from '@kuba/container'
import icon from '@kuba/icon'
import input from '@kuba/input'
import Story from '@kuba/story'

export default () =>
  <Container>
    <Story>
      <input.Money>
        <Fragment slot='label'>Name</Fragment>
      </input.Money>
      <button.Primary dark>Cancel <icon.Close sm onColor /></button.Primary>
    </Story>
  </Container>
