export default {
  money: {
    mask: '$ num',
    blocks: {
      num: {
        mask: Number,
        thousandsSeparator: '.'
      }
    }
  },
  number: {
    mask: Number
  },
  text: {
    mask: String
  }
}
