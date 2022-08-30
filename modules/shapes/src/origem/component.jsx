import Breadcrumb from './breadcrumb'
import h, { Fragment } from '@kuba/h'
import { Shelf, More, Title } from '../home'
import Site from '@kuba/site'

export default (shapes) =>
  <Site>
    <Breadcrumb />
    <Fragment slot='main'>
      <Title>
        <Fragment slot='title'>{shapes.title}</Fragment>
        <Fragment slot='description'>{shapes.description}</Fragment>
      </Title>
      <Shelf />
      <More />
    </Fragment>
  </Site>
