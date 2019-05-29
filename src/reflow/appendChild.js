export default (element, vElement, parent) => {
  console.log('appendChild', element, parent )
  console.log('appendChild', vElement, vElement.onclick)
  parent.appendChild(vElement)
}
