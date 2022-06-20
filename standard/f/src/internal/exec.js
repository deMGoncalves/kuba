const exec = (regex, target) => (
  regex?.exec?.(target)
)

export default exec
