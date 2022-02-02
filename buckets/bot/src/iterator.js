export default (data, index = 0) => ({
  next () {
    return (index < data.length)
      ? ({ done: false, shape: data[index++] })
      : ({ done: true })
  }
})
