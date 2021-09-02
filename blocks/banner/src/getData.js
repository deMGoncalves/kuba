export default () =>
  fetch(`${__settings.api.host}/blocks/banner`)
    .then(response => response.json())
