export default {
  async getNumber() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(100)
      }, 5000)
    })
  }
}
