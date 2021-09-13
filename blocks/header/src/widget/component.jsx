import h, { Fragment } from '@kuba/h'
import icon from '@kuba/icon'
import Side from '@kuba/side'
import style from './style'

export default (widget, children) =>
  <>
    <button className={[style.widget__button, widget.className]} onClick={() => widget.open()} slot={widget.slot}>
      {children.icon}
      {children.label}
    </button>
    <Side className={style.widget__side} onClose={() => widget.close()} opened={widget.opened}>
      <header className={style.widget__header}>
        <button className={style.widget__button} onClick={() => widget.close()}>
          <icon.ArrowLeft className={style.widget__icon} large />
        </button>
      </header>
      <main className={style.widget__main}>
        {children.main}
      </main>
    </Side>
  </>
