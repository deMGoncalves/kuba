export default (page) =>
  page
    .spacification
    .map(s => ({ '@type': 'PropertyValue', ...s }))
