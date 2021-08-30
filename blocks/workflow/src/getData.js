import schedule from '@kuba/schedule'

const getData = (workflow) =>
  fetch(`${__settings.api.host}/blocks/workflow`)
    .then(response => response.json())
    .then(data => workflow.change(data))

export default schedule(getData)
