import './style'
import Button from '@kuba/button'
import h from '@kuba/h'

function component () {
  return (
    <Button.Secondary className='pageNotFound__goBack' onClick={() => history.back(-1)}>Go back</Button.Secondary>
  )
}

export default component
