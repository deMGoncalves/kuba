import schedule from '@kuba/schedule'

const getData = (banner) =>
  fetch(`${__settings.api.host}/blocks/banner`)
    .then(response => response.json())
    .then(data => banner.change(data))

export default schedule(getData)
