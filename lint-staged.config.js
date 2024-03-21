module.exports = {
  ['{apps,libs,tools}/**/*.{ts,tsx}']: [
    "nx affected:lint --fix --files",
    "nx format:write --files"
  ]
}
