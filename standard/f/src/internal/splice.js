const splice = (target, start, end, ...args) => (
  target?.splice?.(start, end, ...args)
)

export default splice
