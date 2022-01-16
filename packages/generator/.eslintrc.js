module.exports = {
  extends: [
    'eslint-config-qiwi',
    'prettier',
  ],
  rules: {
    'sonarjs/no-nested-template-literals': 'off',
    'unicorn/consistent-function-scoping': 'off'
  }
};
