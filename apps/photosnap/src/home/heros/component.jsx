import h, { Fragment } from '@rex/h'
import * as f from '@rex/f'
import * as ui from '@rex/kit'
import style from './style.css'

export default (props) =>
  <ui.Hero {...props}>
    <Fragment slot='source'>
      <source srcSet={f.prop('[0]', props.sources)} media='(max-width: 767px)' />
      <source srcSet={f.prop('[1]', props.sources)} media='(min-width: 768px) and (max-width: 959px)' />
      <source srcSet={f.prop('[2]', props.sources)} media='(min-width: 960px)' />
    </Fragment>
    <Fragment slot='caption'>
      <ui.Heading className={style.hero__heading} {...props}>{props.title}</ui.Heading>
      <ui.P className={style.hero__p} {...props}>{props.description}</ui.P>
      <ui.LinkButton slot='link' className={style.hero__linkButton} color={props.color} href={props.url}>Read story</ui.LinkButton>
    </Fragment>
  </ui.Hero>
