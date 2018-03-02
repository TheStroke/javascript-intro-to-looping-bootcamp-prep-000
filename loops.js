function forLoop (array) {
  for (let i = 0; i < 25; i++) {
    if (i === 0) {
    }
    
    else if (i === 1) {
      array.push('I am 1 strange loop.')
    }
    
    else {
      array.push('I am ${i} strange loops.')
    }
  }
}