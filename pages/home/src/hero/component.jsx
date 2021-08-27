import h, { Fragment } from '@kuba/h'
import Hero from '@kuba/hero'
import Sandbox from '@kuba/sandbox'
import style from './style'

export default (props) =>
  <>
    <Hero className={[style.hero, props.className]} />
    <Sandbox className={[style.hero, props.className]} connect={() => new Worker(new URL('@kuba/hero', import.meta.url /* WebpackChunckName: 'hero' */))} />
  </>
