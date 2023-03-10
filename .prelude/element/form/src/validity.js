function validity (e) {
  const inputs = Array.from(e.target.querySelectorAll('input'))
  const valid = inputs.every((input) => (
    input.validity.valid
      ? true
      : (
          input.dispatchEvent(new Event('invalid')),
          false
        )
  ))
  return valid
}

export default validity
