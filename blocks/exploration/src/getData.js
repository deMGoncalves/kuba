export default () =>
  fetch(`${__settings.api.host}/blocks/exploration`)
    .then(response => response.json())
