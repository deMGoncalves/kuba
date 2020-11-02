import h from '@rex/h'
import Footer from '@footer'
import Header from '@header'
import style from './style.css'

export default (props, children) =>
  <main className={[style.template, props.className]}>
    <Header />
    {children}
    <Footer />
  </main>
