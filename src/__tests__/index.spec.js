const timeout = 99999

describe('Index', () => {
  beforeEach(async () => {
    await page.goto('http:localhost:9000', { timeout })
  }, timeout)

  test('A linguagem da pagina deve ser pt-br', async () => {
    await expect(page.$eval('html', el => el.lang)).resolves.toBe('pt-br')
  })

  test('A pagina deve apontar a url base para o caminho "/"', async () => {
    await expect(page.$eval('base', el => el.href)).resolves.toBe('http://localhost:9000/')
  })

  test('O charset da pagina deve ser utf-8', async () => {
    await expect(page.$eval('meta[charset]', el => el.getAttribute('charset'))).resolves.toBe('utf-8')
  })

  test('A pagina deve bloquar todo os conteudo misto', async () => {
    await expect(page.$eval('meta[name=viewport]', el => el.content)).resolves.toBe('width=device-width, initial-scale=1, shrink-to-fit=no')
  })

  test('A pagina deve bloquar todo os conteudo misto', async () => {
    await expect(page.$eval('meta[http-equiv=Content-Security-Policy]', el => el.content)).resolves.toBe('block-all-mixed-content')
  })

  test('A pagina deve configurar a compatibilidade do browser IE para o Edge', async () => {
    await expect(page.$eval('meta[http-equiv=X-UA-Compatible]', el => el.content)).resolves.toBe('IE=edge')
  })

  test('O titulo da pagina deve ser "Click Control"', async () => {
    await expect(page.title()).resolves.toMatch('Rex.JS · O bom e velho amigo do programador')
  })
}, timeout)
