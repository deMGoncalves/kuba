import './style'
import h from '@kuba/h'
import Link from '@kuba/link'

function component () {
  return (
    <nav className='header__nav'>
      <Link>Cabelos</Link>
      <Link>Perfumes e Perfumaria</Link>
      <Link>Maquiagem</Link>
      <Link>Skincare</Link>
      <Link>Cuidados Pessoais</Link>
      <Link>Bem-estar e Saúde</Link>
      <Link>Marcas</Link>
    </nav>
  )
}

export default component
