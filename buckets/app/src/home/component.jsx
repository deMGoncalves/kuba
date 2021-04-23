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
        <Box className={style.home__box} onClick={() => location.assign(urlFor('guidelines'))}>
          <text.Data className={style.home__data} master darker medium>1</text.Data>
          <text.Strong className={style.home__strong} master darker large>Guidelines</text.Strong>
          <text.P className={style.home__p} master small>Princípios de design de alta qualidade para ajudar desenvolvedores a criar seus produtos de maneira bonita e eficiente</text.P>
        </Box>
        <Box className={style.home__box} onClick={() => location.assign(urlFor('structure'))}>
          <text.Data className={style.home__data} master darker medium>2</text.Data>
          <text.Strong className={style.home__strong} master darker large>Structure</text.Strong>
          <text.P className={style.home__p} master small>Tudo que você precisa para instalar, configurar e desenvolver com a nossa estrutura</text.P>
        </Box>
        <Box className={style.home__box} onClick={() => location.assign(urlFor('components'))}>
          <text.Data className={style.home__data} master darker medium>3</text.Data>
          <text.Strong className={style.home__strong} master darker large>Components</text.Strong>
          <text.P className={style.home__p} master small>Nosso projeto contém um conjunto de componentes que definem nossas interfaces</text.P>
        </Box>
      </div>
    </Story>
  </Site>
