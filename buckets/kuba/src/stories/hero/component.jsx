import h, { Fragment } from '@rex/h'
import Hero from '@rex/hero'
import Link from '@rex/link'
import Sources from '@rex/sources'
import text from '@rex/text'
import schema from './schema.json'
import style from './style.css'

export default () =>
  <Hero color='inverse' direction='reverse'>
    <Sources slot='figure' {...schema} />
    <Fragment slot='caption'>
      <hgroup>
        <text.H2 className={style.hero__h2} size='small' {...schema}>{schema.subtitle}</text.H2>
        <text.H1 className={style.hero__h1} {...schema}>{schema.title}</text.H1>
      </hgroup>
      <text.P className={style.hero__p} {...schema}>
        <date>{schema.date}</date> by {schema.author}
      </text.P>
      <text.P className={style.hero__p} {...schema}>{schema.description}</text.P>
      <Link className={style.hero__linkButton} {...schema}>{schema.link}</Link>
    </Fragment>
  </Hero>
