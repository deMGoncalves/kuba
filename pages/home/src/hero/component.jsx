import h, { Fragment } from '@kuba/h'
import Hero from '@kuba/hero'
import Sandbox from '@kuba/sandbox'
import schema from './schema'
import style from './style'

export default (props) =>
  <>
    <Hero {...schema} className={[style.hero, props.className]} />
    <Sandbox {...schema} className={[style.hero, props.className]} connect={() => new Worker(new URL('@kuba/hero', import.meta.url /* WebpackChunckName: 'hero' */))} />
  </>
