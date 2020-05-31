import h from '@h'
import router from '@router'
import Home from './home'
import '@/reset.css'

router(/^\/$/, () => document.body.appendChild(<Home />))
