import './style'
import { urlFor } from '@kuba/router'
import h from '@kuba/h'
import Link from '@kuba/link'

function component () {
  return (
    <nav className='header__nav'>
      <Link href={urlFor('home')}>Home</Link>
      <Link href={urlFor('departament', { departament: 'face' })}>Face</Link>
      <Link href={urlFor('departament', { departament: 'sobrancelhas' })}>Sobrancelhas</Link>
      <Link href={urlFor('departament', { departament: 'olhos' })}>Olhos</Link>
      <Link href={urlFor('departament', { departament: 'labios' })}>Lábios</Link>
      <Link href={urlFor('departament', { departament: 'kits-e-paletas' })}>Kits e Paletas</Link>
      <Link href={urlFor('departament', { departament: 'acessorios' })}>Acessórios</Link>
    </nav>
  )
}

export default component
