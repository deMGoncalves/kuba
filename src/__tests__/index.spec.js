import { isDone } from '../'

const timeout = 30000

describe('Index', () => {
  beforeEach(async () => {
    await page.goto('http:localhost:9000', { timeout })
    await page.awaitForSelector('body')
  }, timeout)

  test('Shound display "OneoffJS" text on page', async () => {
    await expect(page.title()).resolves.toMatch('OneoffJS')
  })

  test('Boilerplate is done', () => {
    expect(isDone).toBeFalsy()
  })
}, timeout)
