const createConfig = require('@titicaca/eslint-config-triple/create-config')

const { extends: extendConfigs, overrides } = createConfig({ type: 'frontend' })

module.exports = {
  extends: [...extendConfigs],
  overrides: [...overrides],
  rules: {
    'no-console': 1,
    'no-unused-vars': 1,
  },
}
