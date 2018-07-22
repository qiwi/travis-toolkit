const hooks = require('semantic-release-monorepo-hooks')
const output = hooks()
const publish = output.isLastChanged
  ? [
    '@semantic-release/github',
    '@semantic-release/npm'
  ]
  : [
    '@semantic-release/npm'
  ]

module.exports = {
  branch: 'master',
  tagFormat: 'v${version}',
  prepare: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    {
      "path": "@semantic-release/git",
      "message": "chore(${nextRelease.LERNA_PACKAGE_NAME}): release ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }
  ],
  publish: publish,
  verifyConditions: ['@semantic-release/npm', '@semantic-release/git']
};
