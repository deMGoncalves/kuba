import schedule from '@kuba/schedule'

const getData = (inspiration) =>
  fetch(`${__settings.api.host}/blocks/inspiration`)
    .then(response => response.json())
    .then(data => inspiration.change(data))

export default schedule(getData)
