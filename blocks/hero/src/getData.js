export default () =>
  fetch(`${__settings.api.host}/blocks/hero`)
    .then(response => response.json())
