import h from '@kuba/h'
import Box from '@kuba/box'
import { urlFor } from '@kuba/router'
import Site from '@kuba/site'
import Story from '@kuba/story'
import text from '@kuba/text'
import style from './style.css'

export default () =>
  <Site className={style.home}>
    <Story className={style.home__story}>
      <text.Blockquote className={style.home__blockquote} master largest>
        <text.Sup className={style.home__sup} master darker>“</text.Sup>
        Javascript é como uma folha em branco, a liberdade de programar do jeito que faça sentido para o negócio
        <br />
        <text.Cite className={style.home__cite} master darker small>- deMGoncalves</text.Cite>
      </text.Blockquote>
    </Story>
    <Story className={style.home__story}>
      <div className={style.home__boxes}>
        <Box className={style.home__box} onClick={() => location.assign(urlFor('mindset'))}>
          <text.Data className={style.home__data} master darker medium>0</text.Data>
          <text.Strong className={style.home__strong} master darker large>Mindset</text.Strong>
          <text.P className={style.home__p} master small>Simples, pequeno e imperfeito. Uma visão além da programação</text.P>
        </Box>
      </div>
    </Story>
  </Site>
