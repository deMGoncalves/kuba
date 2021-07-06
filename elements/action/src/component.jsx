import h, { Fragment } from '@kuba/h'
import icon from '@kuba/icon'
import Side from '@kuba/side'
import style from './style.css'

export default (action, children) =>
  <>
    <button className={[style.action__button, action.className]} onClick={() => action.open()} slot={action.slot}>
      {children.icon}
      {children.label}
    </button>
    <Side className={style.action__side} onClose={() => action.close()} opened={action.opened}>
      <header className={style.action__header}>
        <button className={style.action__button} onClick={() => action.close()}>
          <icon.ArrowLeft className={style.action__icon} large />
        </button>
        {children.header}
      </header>
      <main className={style.action__main}>
        {children.main}
      </main>
    </Side>
  </>
