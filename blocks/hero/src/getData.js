import schedule from '@kuba/schedule'

const getData = (hero) =>
  fetch(`${__settings.api.host}/blocks/hero`)
    .then(response => response.json())
    .then(data => hero.change(data))

export default schedule(getData)
