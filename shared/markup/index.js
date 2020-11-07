import * as f from '@rex/f'
import hook from '@rex/hook'
import alternate from './src/alternate'
import author from './src/author'
import base from './src/base'
import canonical from './src/canonical'
import charset from './src/charset'
import description from './src/description'
import icon from './src/icon'
import robots from './src/robots'
import themeColor from './src/themeColor'
import title from './src/title'

export default hook(f.idle(f.chain(alternate, author, base, canonical, charset, description, icon, robots, themeColor, title)))
