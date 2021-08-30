export default (shelf) =>
  fetch(`${__settings.api.host}/blocks/shelf`)
    .then(response => response.json())
    .then(data => shelf.change(data))
