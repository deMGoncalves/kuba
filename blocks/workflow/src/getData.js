export default () =>
  fetch(`${__settings.api.host}/blocks/workflow`)
    .then(response => response.json())
