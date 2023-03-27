import './style'
import h from '@kuba/h'
import Link from '@kuba/link'

function component () {
  return (
    <nav className='navigation__nav'>
      <Link className='navigation__link'>Cabelos</Link>
      <Link className='navigation__link'>Perfumes e Perfumaria</Link>
      <Link className='navigation__link'>Maquiagem</Link>
      <Link className='navigation__link'>Skincare</Link>
      <Link className='navigation__link'>Cuidados Pessoais</Link>
      <Link className='navigation__link'>Bem-estar e Saúde</Link>
      <Link className='navigation__link'>Marcas</Link>
    </nav>
  )
}

export default component
