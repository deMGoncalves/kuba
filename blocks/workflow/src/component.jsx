import h from '@kuba/h'
import Repeat from '@kuba/repeat'
import Story from '@kuba/story'
import text from '@kuba/text'
import Step from './step'
import style from './style'

export default (workflow) =>
  <Story className={[style.workflow, workflow.className]}>
    <div className={style.workflow__div}>
      <hgroup className={style.workflow__hgroup}>
        <text.H2 className={style.workflow__text} master darker sm medium>{workflow.title}</text.H2>
        <text.P className={style.workflow__text} master xxxs>{workflow.description}</text.P>
      </hgroup>
      <ol className={style.workflow__ol}>
        <Repeat iterator={workflow.steps} component={Step} />
      </ol>
    </div>
  </Story>
