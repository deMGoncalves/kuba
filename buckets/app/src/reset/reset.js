import headers from './headers'

export default (data) =>
  fetch(`${__settings.api.host}/auth/reset`, { method: 'POST', headers, body: JSON.stringify(data) })
    .then(response => response.json())
