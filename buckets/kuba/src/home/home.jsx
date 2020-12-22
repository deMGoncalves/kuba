import h, { render } from '@rex/h'
import markup from '@rex/markup'
import Component from './component'
import schema from './schema.json'

render(document.body, <Component />)
markup(schema)
