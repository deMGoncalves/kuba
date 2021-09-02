export default () =>
  fetch(`${__settings.api.host}/blocks/navigation`)
    .then(response => response.json())
