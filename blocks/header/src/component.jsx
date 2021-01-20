import h from '@rex/htmlparser'
import Container from '@rex/container'
import Logo from '@rex/logo'
import text from '@rex/text'
import Drop from '@drop'
import style from './style.css'

export default (header) =>
  <header className={style.header}>
    <Container className={style.header__container}>
      <div className={style.header__partner}>partner</div>
      <div className={style.header__menu}>menu</div>
      <Logo className={style.header__logo} />
      <div className={style.header__search}>search</div>
      <div className={style.header__services}>services</div>
      <div className={style.header__user}>user</div>
      <div className={style.header__bag}>bag</div>
      <Drop>
        <text.Span slot='subtitle'>ative condições e</text.Span>
        <text.P slot='title'>ofertas da sua região</text.P>
      </Drop>
      teste
    </Container>
  </header>
