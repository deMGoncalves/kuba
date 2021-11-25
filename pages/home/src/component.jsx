import h, { Fragment } from '@kuba/h'
import button from '@kuba/button'
import Container from '@kuba/container'
import Form from '@kuba/form'
import input from '@kuba/input'
import Story from '@kuba/story'

export default () =>
  <Container>
    <Story>
      <Form onSubmit={console.log}>
        <input.Email name='email'>
          <Fragment slot='label'>Email</Fragment>
        </input.Email>
        <input.Password name='password'>
          <Fragment slot='label'>Password</Fragment>
        </input.Password>
        <button.Primary dark medium>Log in</button.Primary>
      </Form>
    </Story>
  </Container>
