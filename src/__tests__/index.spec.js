import { isDone } from '../'

const timeout = 20000

describe('Index', () => {
  beforeAll(async () => {
    await page.goto('http:localhost:9000')
  }, timeout)

  test('Shound display "OneoffJS" text on page', async () => {
    await expect(page.title()).resolves.toMatch('OneoffJS')
  })

  test('Boilerplate is done', () => {
    expect(isDone).toBeFalsy()
  })
}, timeout)
