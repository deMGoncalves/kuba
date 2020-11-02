import h, { Fragment } from '@rex/h'
import * as ui from '@ui'
import schema from './schema.json'
import style from './style.css'

export default () =>
  <ui.Hero color='inverse' direction='reverse'>
    <ui.Sources slot='figure' {...schema} />
    <Fragment slot='caption'>
      <hgroup>
        <ui.Heading level='2' className={style.hero__h2} size='small' {...schema}>{schema.subtitle}</ui.Heading>
        <ui.Heading level='1' className={style.hero__h1} {...schema}>{schema.title}</ui.Heading>
      </hgroup>
      <ui.P className={style.hero__p} {...schema}>
        <date>{schema.date}</date> by {schema.author}
      </ui.P>
      <ui.P className={style.hero__p} {...schema}>{schema.description}</ui.P>
      <ui.Link className={style.hero__linkButton} {...schema}>{schema.link}</ui.Link>
    </Fragment>
  </ui.Hero>
