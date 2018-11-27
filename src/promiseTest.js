function primiseTest() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("resolve")
    })
  });
}

export default primiseTest;