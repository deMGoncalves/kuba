import { didMount, paint } from '@kuba/h'
import * as f from '@kuba/f'
import jsonld from '@kuba/jsonld'
import { setDescription, setTitle } from '@kuba/markup'
import component from './component'
import data from './data'

@paint(component)
@jsonld(data)
class Cookies {
  get description () {
    return 'Nós utilizamos cookies e outras tecnologias semelhantes para melhorar a sua experiência em nossos serviços, personalizar publicidade e recomendar conteúdo de acordo com o seu interesse. Ao utilizar nossos serviços, você concorda com tal monitoramento'
  }

  get title () {
    return 'Política de Cookies'
  }

  @didMount
  [f.dunder.mount] () {
    setTitle(this.title)
    setDescription(this.description)
    return this
  }
}

export default Cookies
