import h, { Fragment, Show } from '@kuba/h'
import button from '@kuba/button'
import icon from '@kuba/icon'
import Select from '@kuba/select'
import text from '@kuba/text'
import style from './style'

export default (select) =>
  <>
    <button.Info className={style.select__open} onClick={() => select.open()}>
      {select.label}
      <Show if={select.length}>
        <text.Strong className={style.select__length} master darker small>+{select.length}</text.Strong>
      </Show>
    </button.Info>
    <Select className={style.select} opened={select.opened} onClose={() => select.close()}>
      <header className={style.select__header}>
        <text.Strong className={style.select__label} master darker>{select.label}</text.Strong>
        <button className={style.select__close} onClick={() => select.close()}>
          <icon.Close className={style.select__icon} large />
        </button>
      </header>
      <main className={style.select__main}>
        {select.options}
      </main>
    </Select>
  </>
