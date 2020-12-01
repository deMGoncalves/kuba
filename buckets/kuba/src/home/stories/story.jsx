import h, { Fragment } from '@rex/h'
import Link from '@rex/link'
import Sources from '@rex/sources'
import Story from '@rex/story'
import text from '@rex/text'
import style from './style.css'

export default (props) =>
  <Story>
    <Sources slot='picture' {...props} />
    <Fragment slot='caption'>
      <text.H2 {...props}>{props.title}</text.H2>
      <text.P {...props}>by {props.author}</text.P>
      <Link className={style.story__link} icon='arrow' {...props}>Read story</Link>
    </Fragment>
  </Story>
