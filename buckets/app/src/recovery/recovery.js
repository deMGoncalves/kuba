export default (data) =>
  fetch(`${__settings.api.host}/auth/recovery`, { method: 'POST', body: JSON.stringify(data) })
    .then(response => response.json())
