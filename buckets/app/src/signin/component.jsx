import h from '@kuba/h'
import Auth from '@kuba/auth'
import button from '@kuba/button'
import Container from '@kuba/container'
import control from '@kuba/control'
import link from '@kuba/link'
import Logo from '@kuba/logo'
import { urlFor } from '@kuba/router'
import text from '@kuba/text'
import style from './style.css'

export default (auth) =>
  <Auth className={style.auth}>
    <Container className={style.auth__container} slot='main'>
      <Logo className={style.auth__logo} />
      <form className={style.auth__form} onSubmit:formData={(data) => auth.signin(data)}>
        <control.Email className={style.auth__control} />
        <control.Password className={style.auth__control} />
        <button.Master className={style.auth__button}>Sign in</button.Master>
        <text.Strong className={style.auth__text} master darker small>OR</text.Strong>
        <link.Complete className={style.auth__link} href={urlFor('recovery')}>Forgot password?</link.Complete>
      </form>
      <form className={style.auth__form}>
        <text.P className={style.auth__text} master darker small>
          Don't have an account? <link.Complete className={style.auth__link} href={urlFor('signup')}>Sign up</link.Complete>
        </text.P>
      </form>
    </Container>
  </Auth>
