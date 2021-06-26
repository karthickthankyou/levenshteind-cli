const validateInput = function (s1, s2) {
  if (!s1 || !s2) {
    console.log('The input provided has empty string.', 's1: ', s1, 's2: ', s2)
    return 0
  }
  return 1
}

module.exports.validateInput = validateInput
