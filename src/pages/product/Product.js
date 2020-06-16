import { paint } from '@h'
import metadata from '@metadata'
import opengraph from '@opengraph'
import structureddata from '@structureddata'
import twittercard from '@twittercard'
import component from './component'

@paint(component)
@metadata
@opengraph
@structureddata
@twittercard
class Product {
  get description () {
    return 'O Samsung Galaxy A30s é um smartphone Android de bom nível, ótimo para fotos, que pode satisfazer até o mais exigente dos usuários. Tem uma enorme tela Touchscreen de 6.4 polegadas com uma resolução de 1560x720 pixel que não é das mais elevadas. Sobre as características deste Samsung Galaxy A30s na verdade não falta nada. Começando pelo LTE 4G que permite a transferência de dados e excelente navegação na internet, além de conectividade Wi-fi e GPS. Tem também leitor multimídia, rádio, videoconferência, TV e bluetooth. Enfatizamos a boa memória interna de 64 GB com a possibilidade de expansão'
  }

  get title () {
    return 'Samsung Galaxy A30s 64GB Branco'
  }
}

export default Product
