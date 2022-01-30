import h from '@kuba/h'
import button from '@kuba/button'
import container from '@kuba/container'
import icon from '@kuba/icon'
import { urlFor } from '@kuba/router'
import style from './style'

export default (search) =>
  <div className={style.main} onClick={() => search.close()} opened:isTruthy={search.opened}>
    <div onClick={e => e.stopPropagation()} className={style.out__container}>
      <container.Div className={style.inner__container}>
        <form method='GET' action={urlFor('trends.search')} className={style.input__container}>
          <icon.Search small />
          <input
            name='q'
            placeholder='Buscar'
            required
            type='search'
          />
          <button type="reset">
            <icon.Close small />
          </button>
        </form>
        <button.icon.Close onClick={() => search.close()} className={style.close}>
          <icon.Close />
        </button.icon.Close>
      </container.Div>
    </div>
  </div>
