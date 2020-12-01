import h, { Fragment } from '@rex/h'
import Hero from '@rex/hero'
import Link from '@rex/link'
import Sources from '@rex/sources'
import text from '@rex/text'
import style from './style.css'

export default (props) =>
  <Hero {...props}>
    <Sources slot='figure' {...props} />
    <Fragment slot='caption'>
      <text.H1 className={style.hero__heading} {...props}>{props.title}</text.H1>
      <text.P className={style.hero__p} {...props}>{props.description}</text.P>
      <Link className={style.hero__link} {...props}>{props.link}</Link>
    </Fragment>
  </Hero>
