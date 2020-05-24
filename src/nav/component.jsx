import h from '@h'

export default (attr) =>
  <nav className={['nav', attr.className]}>
    <a className='nav__link' href='./efeitos'>Efeitos</a>
    <a className='nav__link' href='./pedal-custom'>Pedal Custom</a>
    <a className='nav__link' href='./mod-kits'>Mod Kits</a>
    <a className='nav__link' href='./souvenier'>Souvenier</a>
  </nav>
