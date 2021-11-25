export default {
  money: {
    mask: '$ n',
    blocks: {
      n: {
        mask: Number,
        thousandsSeparator: '.'
      }
    }
  },
  number: {
    mask: Number,
    thousandsSeparator: '.'
  },
  text: {
    mask: String
  }
}
