import h from '@kuba/h'
import Repeat from '@kuba/repeat'
import Story from '@kuba/story'
import text from '@kuba/text'
import Step from './step'
import schema from './schema.json'
import style from './style'

export default (props) =>
  <Story {...props} className={[style.workflow, props.className]}>
    <div className={style.workflow__div}>
      <hgroup className={style.workflow__hgroup}>
        <text.H2 className={style.workflow__h2} master darker large bold>{schema.title}</text.H2>
        <text.H3 className={style.workflow__h3} master small>{schema.subtitle}</text.H3>
      </hgroup>
      <ol className={style.workflow__ol}>
        <Repeat iterator={schema.steps} component={Step} />
      </ol>
    </div>
  </Story>
