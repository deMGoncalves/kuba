import schedule from '@kuba/schedule'

const getData = (exploration) =>
  fetch(`${__settings.api.host}/blocks/exploration`)
    .then(response => response.json())
    .then(data => exploration.change(data))

export default schedule(getData)
