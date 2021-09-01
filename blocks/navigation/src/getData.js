import schedule from '@kuba/schedule'

const getData = (navigation) =>
  fetch(`${__settings.api.host}/blocks/navigation`)
    .then(response => response.json())
    .then(data => navigation.change(data))

export default schedule(getData)
