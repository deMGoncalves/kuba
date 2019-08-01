const timeout = 99999

describe('Index', () => {
  beforeEach(async () => {
    await page.goto('http:localhost:9000', { timeout })
  }, timeout)

  test('A linguagem da pagina deve ser pt-br', async () => {
    await expect(page.$eval('html', el => el.lang)).resolves.toBe('pt-br')
  })

  test('O charset da pagina deve ser utf-8', async () => {
    await expect(page.$eval('meta[charset]', el => el.getAttribute('charset'))).resolves.toBe('utf-8')
  })

  test('A tag base deve apontar para o path "/"', async () => {
    await expect(page.$eval('base', el => el.href)).resolves.toBe('http://localhost:9000/')
  })

  test('A pagina deve bloquar todo os conteudo misto', async () => {
    await expect(page.$eval('meta[http-equiv]', el => el.content)).resolves.toBe('block-all-mixed-content')
  })

  test('A pagina deve fazer referencia ao arquivo "manifes.json"', async () => {
    await expect(page.$eval('link[rel=manifest]', el => el.href)).resolves.toBe('http://localhost:9000/manifest.json')
  })

  test('O titulo da pagina deve ser "Rex.JS · O bom e velho amigo do programador"', async () => {
    await expect(page.title()).resolves.toMatch('Rex.JS · O bom e velho amigo do programador')
  })

  test('A descicao da pagina deve ser "Simple, pequeno e imperfeito. Uma visão além da programação"', async () => {
    await expect(page.$eval('meta[name=description]', el => el.content)).resolves.toBe('Simples, pequeno e imperfeito. Uma visão além da programação')
  })
}, timeout)
