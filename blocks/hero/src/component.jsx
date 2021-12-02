import h, { Fragment } from '@kuba/h'
import container from '@kuba/container'
import icon from '@kuba/icon'
import story from '@kuba/story'
import text from '@kuba/text'
import schema from './schema.json'
import style from './style'

export default (hero) =>
  <Fragment slot={hero.slot}>
    <story.Section className={style.hero__story}>
      <container.HGroup>
        <text.H1 className={style.hero__text} master dark mono medium>
          /**<br />
          &nbsp;* <text.Strong className={style.hero__text} master darkest mono bold>TODO</text.Strong>: como uma folha em branco,<br />
          &nbsp;* a liberdade de programar do jeito que<br />
          &nbsp;* faca sentido para o produto<br />
          &nbsp;*/
      </text.H1>
      </container.HGroup>
      <container.Div>
        <div className={style.hero__div}>
          <text.P master dark xxxs mono>{schema.command} {schema.package}</text.P>
          <button className={style.hero__button} onClick={() => hero.clone()}>
            <icon.Clone />
          </button>
        </div>
      </container.Div>
    </story.Section>
  </Fragment>
