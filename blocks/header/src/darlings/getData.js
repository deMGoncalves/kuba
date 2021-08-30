import schedule from '@kuba/schedule'

const getData = (darlings) =>
  fetch(`${__settings.api.host}/blocks/header`)
    .then(response => response.json())
    .then(data => darlings.change(data))

export default schedule(getData)
