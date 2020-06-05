import h from '@h'

export default (attr, child) =>
  <span className={['material-icons', attr.className]}>{ child }</span>
