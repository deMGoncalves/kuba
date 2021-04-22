import h from '@kuba/h'
import style from './style.css'

export default (footer) =>
  <footer className={[style.footer, footer.className]} slot={footer.slot} />
