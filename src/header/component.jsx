import h from '@h'
import Logo from '@logo'

export default () =>
  <header className='header'>
    <div className='header__container'>
      <Logo className='header__logo' />
      <nav className='header__nav'>
        <ul>
          <li><a href='./efeitos'>Efeitos</a></li>
          <li><a href='./pedal-custom'>Pedal Custom</a></li>
          <li><a href='./mod-kits'>Mod Kits</a></li>
          <li><a href='./souvenier'>Souvenier</a></li>
        </ul>
      </nav>
    </div>
  </header>
