import h, { Fragment } from '@rex/h'
import style from './style.css'

export default ({ features, className }) =>
  <table className={[style.table, className]}>
    <thead className={style.table__head}>
      <tr className={[style.table__line, style.head]}>
        <th className={[style.table__heading, style.head]}>The Features</th>
        <th className={[style.table__heading, style.head]}>Basic</th>
        <th className={[style.table__heading, style.head]}>Pro</th>
        <th className={[style.table__heading, style.head]}>Business</th>
      </tr>
    </thead>
    <tbody className={style.table__body}>
      {
        features.map((item) =>
          <tr className={[style.table__line, style.body]}>
            <th className={[style.table__heading, style.body]}>{item.name}</th>
            {
              item.plan.map((plan) =>
                <td className={style.table__content}>
                  <data className={style.table__name} value={plan.name}>{plan.name}</data>
                  <span className={[style.checked, style[plan.status]]}>checked</span>
                </td>
              )
            }
          </tr>
        )
      }
    </tbody>
  </table>
