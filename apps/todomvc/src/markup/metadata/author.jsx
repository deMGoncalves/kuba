import h from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
	document.head.append(<meta name='author' content={f.or(page.author, 'Cleber de Moraes Gonçalves')} />)
