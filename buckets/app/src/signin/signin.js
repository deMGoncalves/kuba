export default (data) =>
  fetch(`${__settings.api.host}/auth/signin`, { method: 'POST', body: JSON.stringify(data) })
    .then(response => response.json())
