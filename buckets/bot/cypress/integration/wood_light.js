import { createClient } from '@supabase/supabase-js'

describe('Wood Light', () => {
  let supabase

  before(() => {
    supabase = createClient(
      Cypress.env('API_URL'),
      Cypress.env('API_KEY')
    )
  })

  it('Fetch shapes', async () => {
    let index = 0
    const { data } = await supabase
      .from('shape')
      .select(`
        *,
        marca!inner(*)
      `)
      .eq('marca.slug', 'wood-light')

    const next = () =>
      (index < data.length)
        ? ({ done: false, shape: data[index++] })
        : ({ done: true })

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
                update(next())
              })
          })
      }
    }

    update(next())
  })
})
