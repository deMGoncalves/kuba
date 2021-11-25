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
  stub: {
    mask: String
  }
}
