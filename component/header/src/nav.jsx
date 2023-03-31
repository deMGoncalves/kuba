import './style'
import { urlFor } from '@kuba/router'
import h from '@kuba/h'
import Link from '@kuba/link'

function component () {
  return (
    <nav className='header__nav'>
      <Link href={urlFor('home')}>Home</Link>
      <Link href={urlFor('departament', { departament: 'cabelos' })}>Cabelos</Link>
      <Link href={urlFor('departament', { departament: 'perfumes-e-perfumaria' })}>Perfumes e Perfumaria</Link>
      <Link href={urlFor('departament', { departament: 'maquiagem' })}>Maquiagem</Link>
      <Link href={urlFor('departament', { departament: 'skincare' })}>Skincare</Link>
      <Link href={urlFor('departament', { departament: 'cuidados-pessoais' })}>Cuidados Pessoais</Link>
      <Link href={urlFor('departament', { departament: 'bem-estar-e-saude' })}>Bem-Estar e Saúde</Link>
      <Link href={urlFor('departament', { departament: 'marcas' })}>Marcas</Link>
    </nav>
  )
}

export default component
