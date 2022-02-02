import { iterator, supabase } from '@kuba/bot'

describe('Wood Light', () => {
  it('Update price', async () => {
    const { data } = await supabase
      .from('shape')
      .select('*, marca!inner(*)')
      .eq('marca.slug', 'wood-light')

    const shapes = iterator(data)

    const update = ({ done, shape }) => {
      if (!done) {
        assert.isFalse(done, shape.modelo)
        cy.visit(shape.site)
          .then(() => {
            cy.get('.preco-produto')
              .invoke('attr', 'content')
              .then(async (content) => {
                const { error } = await supabase
                  .from('shape')
                  .update({ preco: parseFloat(content) })
                  .match({ id: shape.id })

                assert.isNull(error, 'Update price')
                cy.wait(20000)
                update(shapes.next())
              })
          })
      }
    }

    update(shapes.next())
  })
})
