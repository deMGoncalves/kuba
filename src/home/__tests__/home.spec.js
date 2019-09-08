const timeout = 99999

describe('Home', () => {
  beforeEach(async () => {
    await page.goto('http:localhost:9000', { timeout })
    await page.waitForSelector('main')
  }, timeout)

  test('Deve ter um logo na pagina inicial', async () => [
    await expect(page.$eval('img', el => el.src)).resolves.toMatch('.png')
  ])

  test('Deve ter o nome Rex.JS na pagina inicial', async () => {
    await expect(page.$eval('h1', el => el.textContent)).resolves.toBe('Rex.JS')
  })

  test('Deve ter uma descricao do que é o Rex', async () => [
    await expect(page.$eval('p', el => el.textContent)).resolves.toBe('Simples, pequeno e imperfeito · Uma visão além da programação...')
  ])
}, timeout)
