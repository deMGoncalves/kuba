import button from '@kuba/button'
import h, { Fragment } from '@kuba/h'
import Select from '@kuba/select'
import Shelf from './shelf'
import Show from '@kuba/show'
import style from './style'
import tag from '@kuba/tag'
import text from '@kuba/text'

export default (select) =>
  <>
    <tag.Master className={style.select__tag} onClick={() => select.open()} len:isTruthy={select.len} darker medium>
      {select.nome}
      <Show when={select.len}>
        <text.Span master darker xxxs medium>+{select.len}</text.Span>
      </Show>
    </tag.Master>
    <Select className={style.select} onClose={() => select.close()} opened={select.opened}>
      <section className={style.select__section}>
        <button.icon.ArrowLeft onClick={() => select.close()} />
      </section>
      <header className={style.select__header}>
        <text.Strong className={style.select__strong} master darker xxxs medium>{select.nome}</text.Strong>
        <text.P className={style.select__p} master darker xs bold>{select.descricao}</text.P>
      </header>
      <Shelf>
        {select.options}
      </Shelf>
    </Select>
  </>
