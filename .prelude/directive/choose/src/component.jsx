function component (props, children) {
  const { when } = props
  const choosies = children.filter((child) => {
    const attributes = [...child.attributes]
    const { value } = attributes.find(({ key }) => (key === 'equal'))
    return (when === value)
  })
  return choosies
}

export default component
