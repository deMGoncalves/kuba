import { iterator, supabase } from '@kuba/bot'

describe('darkroom', () => {
  it('Skateboard', async () => {
    /**
     * Busca de dados no supabase
     * Os shapes listados abaixo sao apenas da
     * marca Wood Light e dos tipo skateboard
     */
    const { data, error } = await supabase
      .from('shape')
      .select('*, marca!inner(*)')
      .eq('marca.slug', 'darkroom')

    /**
     * Se a reposta da busca de dados nao
     * retornar nenhum erro o processo de atualizacao
     * continuara
     */
    assert.isNull(error, 'OK: Supabase select')

    /**
     * Criando um iterator para poder os shapes
     * um por vez, a cada chamado do next
     */
    const shapes = iterator(data)

    /**
     * Acessar a pagina do shape e pega o preco
     * atualiado e persiste na base de dados
     */
    const update = ({ done, shape }) => {
      /**
       * Se o fim da lista de shapes
       * chegou, finaliza a execucao da funcao
       * nao chamando novamente com o proximo
       * shahpe
       */
      if (done) return

      /**
       * Acessa a pagina do shape
       */
      cy.visit(shape.site)

      /**
       * As pagina da Wood Light exibe o preco
       * em uma tag p, no atributo content tem o
       * preco sem nenhuma formatacao
       */
      cy.get('.product-single__price')
        .invoke('attr', 'content')
        .then(async (content) => {
          /**
           * Atualiza o shape na base do supabase
           */
          const { error } = await supabase
            .from('shape')
            .update({ preco: parseFloat(content) })
            .match({ id: shape.id })

          /**
           * Se a persistencia de dados nao
           * retornar nenhum erro o processo de atualizacao
           * continua
           */
          assert.isNull(error, 'OK: Supabase update')

          /**
           * Aguarda 20's antes de proceguir para proxima
           * pagina para evitar o bloqueio do robo
           */
          cy.wait(20000)

          /**
           * Chama o proximo shape do iterator
           */
          update(shapes.next())
        })
    }

    /**
     * Comeca a atualizacao dos precos, chamando
     * o primeiro shape do iterator
     */
    update(shapes.next())
  })
})
