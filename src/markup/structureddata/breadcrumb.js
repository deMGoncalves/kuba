export default (page) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://zuen.store'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: page.title
    }
  ]
})
