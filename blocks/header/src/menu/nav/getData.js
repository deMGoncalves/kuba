import schedule from '@kuba/schedule'

const getData = (nav) =>
  fetch(`${__settings.api.host}/blocks/header`)
    .then(response => response.json())
    .then(data => nav.change(data))

export default schedule(getData)
