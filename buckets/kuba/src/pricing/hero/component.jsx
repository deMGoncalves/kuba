import h, { Fragment } from '@rex/h'
import Hero from '@rex/hero'
import Sources from '@rex/sources'
import text from '@rex/text'
import schema from './schema.json'
import style from './style.css'

export default () =>
  <Hero {...schema}>
    <Sources slot='figure' {...schema} />
    <Fragment slot='caption'>
      <text.H1 className={style.hero__heading} {...schema}>{schema.title}</text.H1>
      <text.P className={style.hero__p} {...schema}>{schema.description}</text.P>
    </Fragment>
  </Hero>
