import h, { Fragment } from '@kuba/h'
import icon from '@kuba/icon'
import Select from '@kuba/select'
import tag from '@kuba/tag'
import text from '@kuba/text'
import style from './style'

export default (ordenation) =>
  <>
    <tag.Master className={style.ordenation__open} onClick={() => ordenation.open()} selected={ordenation.selected} lighter>
      {ordenation.display}
    </tag.Master>
    <Select className={style.ordenation} opened={ordenation.opened} onClose={() => ordenation.close()}>
      <header className={style.ordenation__header}>
        <button className={style.ordenation__close} onClick={() => ordenation.close()}>
          <icon.Close className={style.ordenation__icon} large />
        </button>
      </header>
      <main className={style.ordenation__main}>
        <text.Strong className={style.ordenation__strong} master darker>Ordenar por</text.Strong>
        <ul className={style.ordenation__ul}>
          {ordenation.options}
        </ul>
      </main>
    </Select>
  </>
