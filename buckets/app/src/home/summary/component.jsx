import h from '@kuba/h'
import { urlFor } from '@kuba/router'
import Box from '@kuba/box'
import Story from '@kuba/story'
import text from '@kuba/text'
import style from './style.css'

export default (props) =>
  <Story className={[style.summary, props.className]}>
    <div className={style.summary__boxes}>
      <Box className={style.summary__box} onClick={() => location.assign(urlFor('mindset'))}>
        <text.Data className={style.summary__data} master darker medium>0</text.Data>
        <text.Strong className={style.summary__strong} master darker large>Mindset</text.Strong>
        <text.P className={style.summary__p} master small>Visões além da programação quando compartilhados têm o poder de fazer coisas incríveis para as equipes de produtos digitais</text.P>
      </Box>
      <Box className={style.summary__box} onClick={() => location.assign(urlFor('patterns'))}>
        <text.Data className={style.summary__data} master darker medium>1</text.Data>
        <text.Strong className={style.summary__strong} master darker large>Patterns</text.Strong>
        <text.P className={style.summary__p} master small>Padrões catálogados para ajudar desenvolvedores de produtos digitais a tornar suas soluções melhores</text.P>
      </Box>
      <Box className={style.summary__box} onClick={() => location.assign(urlFor('structure'))}>
        <text.Data className={style.summary__data} master darker medium>2</text.Data>
        <text.Strong className={style.summary__strong} master darker large>Structure</text.Strong>
        <text.P className={style.summary__p} master small>Tudo que você precisa para instalar, configurar e desenvolver produtos digitais com esta arquitetura</text.P>
      </Box>
      <Box className={style.summary__box} onClick={() => location.assign(urlFor('components'))}>
        <text.Data className={style.summary__data} master darker medium>3</text.Data>
        <text.Strong className={style.summary__strong} master darker large>Components</text.Strong>
        <text.P className={style.summary__p} master small>Conjunto de componentes que uso para criar minhas interfaces, inspirado na metodologia do Atomic Design</text.P>
      </Box>
    </div>
  </Story>
