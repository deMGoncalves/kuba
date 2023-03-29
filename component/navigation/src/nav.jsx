import './style'
import { urlFor } from '@kuba/router'
import h from '@kuba/h'
import Link from '@kuba/link'

function component () {
  return (
    <nav className='navigation__nav'>
      <Link className='navigation__link' href={urlFor('departament', { departament: 'cabelos' })}>Cabelos</Link>
      <Link className='navigation__link' href={urlFor('departament', { departament: 'perfumes-e-perfumaria' })}>Perfumes e Perfumaria</Link>
      <Link className='navigation__link' href={urlFor('departament', { departament: 'maquiagem' })}>Maquiagem</Link>
      <Link className='navigation__link' href={urlFor('departament', { departament: 'skincare' })}>Skincare</Link>
      <Link className='navigation__link' href={urlFor('departament', { departament: 'cuidados-pessoais' })}>Cuidados Pessoais</Link>
      <Link className='navigation__link' href={urlFor('departament', { departament: 'bem-estar-e-saude' })}>Bem-Estar e Saúde</Link>
      <Link className='navigation__link' href={urlFor('departament', { departament: 'marcas' })}>Marcas</Link>
    </nav>
  )
}

export default component
