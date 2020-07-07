import { paint } from '@h'
import component from './component'
import markut from '@markup'

import imagemFrente from './samsung-galaxy-a30s-64gb-branco-frente.jpg'
import imagemVerso from './samsung-galaxy-a30s-64gb-branco-verso.jpg'
import imagemDiagonalDireito from './samsung-galaxy-a30s-64gb-branco-diagonal-direito.jpg'
import imagemDiagonalEsquerdo from './samsung-galaxy-a30s-64gb-branco-diagonal-esquerdo.jpg'
import imagemLateralDireito from './samsung-galaxy-a30s-64gb-branco-lateral-direito.jpg'
import imagemLateralEsquerdo from './samsung-galaxy-a30s-64gb-branco-lateral-esquerdo.jpg'

@paint(component)
@markut
class Product {
  get description () {
    return 'Com seu processador octa-core, o Galaxy A30s oferece desempenho potente, memória RAM e armazenamento para melhorar sua experiência gamer móvel, e carregamento rápido para você aproveitar seu dia'
  }

  get image () {
    return [imagemFrente, imagemVerso, imagemDiagonalDireito, imagemDiagonalEsquerdo, imagemLateralDireito, imagemLateralEsquerdo]
  }

  get title () {
    return 'Samsung Galaxy A30s 64GB Branco'
  }
}

export default Product
