import h, { Fragment, Show } from '@kuba/h'
import icon from '@kuba/icon'
import Select from '@kuba/select'
import tag from '@kuba/tag'
import text from '@kuba/text'
import style from './style'

export default (region) =>
  <>
    <tag.Master className={style.region__open} onClick={() => region.open()} selected={region.selected} lighter>
      Nam sed sem
      <Show if={region.selected}>
        <span className={style.region__span}>{region.display}</span>
      </Show>
    </tag.Master>
    <Select className={style.region} opened={region.opened} onClose={() => region.close()}>
      <header className={style.region__header}>
        <button className={style.region__close} onClick={() => region.close()}>
          <icon.Close className={style.region__icon} large />
        </button>
      </header>
      <main className={style.region__main}>
        <text.Strong className={style.region__strong} master darker bold>Nam sed sem</text.Strong>
        <ul className={style.region__ul}>
          {region.options}
        </ul>
      </main>
    </Select>
  </>
