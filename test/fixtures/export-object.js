export default {
  func() {
    throw new Error('Not replaced!')
  }
}

export const named = {
  func() {
    throw new Error('Not replaced!')
  }
}
