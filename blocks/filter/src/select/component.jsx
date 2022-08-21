import * as f from '@kuba/f'
import button from '@kuba/button'
import h, { Fragment } from '@kuba/h'
import Select from '@kuba/select'
import Shelf from './shelf'
import Show from '@kuba/show'
import style from './style'
import tag from '@kuba/tag'
import text from '@kuba/text'

const len = f.dunder('len')
const opened = f.dunder('opened')

const component = (select) =>
  <>
    <tag.Master className={style.select__tag} onClick={() => select.open()} len:isTruthy={len(select)} darker medium>
      {select.nome}
      <Show when={len(select)}>
        <text.Span master darker xxxs medium>+{len(select)}</text.Span>
      </Show>
    </tag.Master>
    <Select className={style.select} onClose={() => select.close()} opened={opened(select)}>
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

f.assign(component, {
  len: f.dunder.len,
  opened: f.dunder.opened
})

export default component
