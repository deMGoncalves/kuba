import h from '@h'
import * as s from '@pages/share'
import style from './style.css'

export default (_, child) =>
  <s.Module className={style.title}>
    <s.Container className={style.title__container}>
      <h1 className={style.title__h1}>{ child }</h1>
    </s.Container>
  </s.Module>
