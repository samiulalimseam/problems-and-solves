const start = Date.now() / 1000
const names = ['rafi', 'sami', 'riad', 'sami']
const uniqueNames = new Set(names)
const end = Date.now() / 1000
console.log(uniqueNames.has("rafi"), `--time: ${(end - start)}--`)