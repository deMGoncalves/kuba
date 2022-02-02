import { iterator, supabase } from '@kuba/bot'

describe('Wood Light', () => {
  it('Update price', async () => {
    const { data, error } = await supabase
      .from('shape')
      .select('*, marca!inner(*)')
      .eq('marca.slug', 'wood-light')

    assert.isNull(error, 'OK: Supabase select')

    const shapes = iterator(data)

    const update = ({ done, shape }) => {
      if (done) return

      cy.visit(shape.site)
      cy.get('.preco-produto')
        .invoke('attr', 'content')
        .then(async (content) => {
          const { error } = await supabase
            .from('shape')
            .update({ preco: parseFloat(content) })
            .match({ id: shape.id })

          assert.isNull(error, 'OK: Supabase update')

          cy.wait(20000)
          update(shapes.next())
        })
    }

    update(shapes.next())
  })
})
