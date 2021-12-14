import h, { Fragment } from '@kuba/h'
import * as f from '@kuba/f'
import { urlFor } from '@kuba/router'
import icon from '@kuba/icon'
import link from '@kuba/link'
import Repeat from '@kuba/repeat'
import Link from './link'
import style from './style'

export default (accordion) =>
  <>
    <link.Master className={style.accordion} onClick:prevent={() => accordion.toggle()} href={urlFor(accordion.page)} lightest>
      {accordion.text}
      {icon[accordion.icon]({ className: style.accordion__icon, small: f.T(), onColor: f.T() })}
    </link.Master>
    <section className={style.accordion__section} opened={accordion.opened}>
      <Repeat iterator={accordion.group} component={Link} />
    </section>
  </>
