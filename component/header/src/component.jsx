import './style'
import { Button, Form } from '@kuba/search'
import { Menu } from '@kuba/navigation'
import container from '@kuba/container'
import h from '@kuba/h'
import Logomark from '@kuba/logomark'

function component () {
  return (
    <header className='header'>
      <container.Div className='header__container'>
        <div className='header__leading'>
          <Logomark />
        </div>
        <div className='header__headline'>
          <Form className='header__form' />
        </div>
        <div className='header__trailing'>
          <Button className='header__button' />
          <Menu className='header__menu' />
        </div>
      </container.Div>
      <container.Div className='header__container' />
    </header>
  )
}

export default component
