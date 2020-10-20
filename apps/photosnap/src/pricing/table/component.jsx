/* eslint-disable react/jsx-key */
import h, { Fragment } from '@rex/h'
import style from './style.css'

export default ({ features }) =>
  <table className={style.pricing__table}>
    <thead className={style.pricing__tableHead}>
      <tr>
        <th colSpan='3'>The Features</th>
      </tr>
    </thead>
    <tbody className={style.pricing__tableBody}>
      {
        features.map((item) =>
          <Fragment>
            <tr>
              <th colSpan='3'>{item.name}</th>
            </tr>
            <tr>
              {
                item.plan.map((plan) =>
                  <td>
                    {plan.name}
                    <span className={[style.pricing__checked, style[plan.status]]}>checked</span>
                  </td>
                )
              }
            </tr>
          </Fragment>
        )
      }
    </tbody>
  </table>
