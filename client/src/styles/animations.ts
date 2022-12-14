const dropIn = {
  initial: {
    y: -50,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    tranition: {
      duration: 0.5
      // stiffness: 250,
      // damp: 50
    }
  },
  exit: {
    x: 100,
    opacity: 0
  }
}

export { dropIn }
