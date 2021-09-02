export default () =>
  fetch(`${__settings.api.host}/blocks/shelf`)
    .then(response => response.json())
