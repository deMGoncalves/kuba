import h from '@kuba/h'
import container from '@kuba/container'
import story from '@kuba/story'
import style from './style'

export default (hero) =>
  <story.Section className={style.hero} slot={hero.slot}>
    <container.Div>
      {hero.name}
    </container.Div>
  </story.Section>
