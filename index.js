const chalk = require('chalk')
const { similarity } = require('./similarity')
const { validateInput } = require('./utils/validate')

const s1 = process.argv[2]
const s2 = process.argv[3]
if (!validateInput(s1, s2)) {
  console.log('exiting...')
  process.exit(0)
}
const matchScore = similarity(s1, s2)
const perc = (Math.round(matchScore * 100) / 100).toFixed(2)

console.clear()
console.log(chalk`
{white Levenshtein Distance}

{white ${s1} vs ${s2}}
{gray Match Percentage: {green {bold ${perc}}} {white %}}

`)

module.exports.similarity = similarity
