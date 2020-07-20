export default (page) =>
  page
    .specification
    .map(s => ({ '@type': 'PropertyValue', ...s }))
