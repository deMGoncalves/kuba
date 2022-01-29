import h from '@kuba/h'
import Container from '@kuba/container'
import icon from '@kuba/icon'
import style from './style'
import { urlFor } from '@kuba/router'

export default (search) =>
  <div onClick={() => search.hideSearch()}
    className={[style.main, search.show && style.show]}>
    <div onClick={e => e.stopPropagation()} className={style.out__container}>
      <Container className={style.inner__container}>
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
        <button onClick={() => search.hideSearch()} className={style.close}>
          <icon.Close />
        </button>
      </Container>
    </div>
  </div>
