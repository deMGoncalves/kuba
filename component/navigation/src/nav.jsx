import './style'
import { urlFor } from '@kuba/router'
import h from '@kuba/h'
import Link from '@kuba/link'

function component () {
  return (
    <nav className='navigation__nav'>
      <Link className='navigation__link' href={urlFor('home')}>Home</Link>
      <Link className='navigation__link' href={urlFor('departament', { departament: 'face' })}>Face</Link>
      <Link className='navigation__link' href={urlFor('departament', { departament: 'sobrancelhas' })}>Sobrancelhas</Link>
      <Link className='navigation__link' href={urlFor('departament', { departament: 'olhos' })}>Olhos</Link>
      <Link className='navigation__link' href={urlFor('departament', { departament: 'labios' })}>Lábios</Link>
      <Link className='navigation__link' href={urlFor('departament', { departament: 'kits-e-paletas' })}>Kits e Paletas</Link>
      <Link className='navigation__link' href={urlFor('departament', { departament: 'acessorios' })}>Acessórios</Link>
      <Link className='navigation__link' href={urlFor('home')}>Marcas</Link>
    </nav>
  )
}

export default component
