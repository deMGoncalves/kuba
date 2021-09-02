export default () =>
  fetch(`${__settings.api.host}/blocks/inspiration`)
    .then(response => response.json())
