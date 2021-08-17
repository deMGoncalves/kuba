import h, { Fragment } from '@kuba/h'
import icon from '@kuba/icon'
import Modal from '@kuba/modal'
import Form from './form'
import History from './history'
import style from './style'

export default (search) =>
  <>
    <button className={style.search__open} onClick={() => search.open()}>
      <icon.Search className={style.menu__icon} large />
    </button>
    <Modal className={style.search__modal} onClose={() => search.close()} opened={search.opened}>
      <header className={style.search__header}>
        <button className={style.search__close} onClick={() => search.close()}>
          <icon.ArrowLeft className={style.menu__icon} large />
        </button>
        <Form className={[style.search__form, style.mobile]} action={search.action} placeholder={search.placeholder} />
      </header>
      <main className={style.search__main}>
        <History className={style.search__history} />
      </main>
    </Modal>
    <Form className={[style.search__form, style.desktop]} action={search.action} placeholder={search.placeholder} />
  </>
