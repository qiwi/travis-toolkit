import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { getLinks, getActions } from '../../main/ts'
import getLinksResponse from './stub/getLinks.json'
import betaFeatureResponse from './stub/betaFeature.json'
import activeResponse from './stub/active.json'
import buildResponse from './stub/build.json'

const mock = new MockAdapter(axios)
mock.onGet('https://developer.travis-ci.com').reply(200, getLinksResponse.data)
mock
  .onGet('https://developer.travis-ci.com/resource/beta_feature#Beta%20feature')
  .reply(200, betaFeatureResponse.data)
mock
  .onGet('https://developer.travis-ci.com/resource/active#Active')
  .reply(200, activeResponse.data)

mock
  .onGet('https://developer.travis-ci.com/resource/build#Build')
  .reply(200, buildResponse.data)

describe('parser', () => {
  describe('getLinks', () => {
    it('return list links', async () => {
      const res = await getLinks('https://developer.travis-ci.com')
      expect(res).toMatchObject([
        'https://developer.travis-ci.com/resource/active#Active',
        'https://developer.travis-ci.com/resource/beta_feature#Beta feature',
        'https://developer.travis-ci.com/resource/beta_features#Beta features',
        'https://developer.travis-ci.com/resource/beta_migration_request#Beta migration_request',
        'https://developer.travis-ci.com/resource/beta_migration_requests#Beta migration_requests',
        'https://developer.travis-ci.com/resource/branch#Branch',
        'https://developer.travis-ci.com/resource/branches#Branches',
        'https://developer.travis-ci.com/resource/broadcast#Broadcast',
        'https://developer.travis-ci.com/resource/broadcasts#Broadcasts',
        'https://developer.travis-ci.com/resource/build#Build',
        'https://developer.travis-ci.com/resource/builds#Builds',
        'https://developer.travis-ci.com/resource/caches#Caches',
        'https://developer.travis-ci.com/resource/commit#Commit',
        'https://developer.travis-ci.com/resource/cron#Cron',
        'https://developer.travis-ci.com/resource/crons#Crons',
        'https://developer.travis-ci.com/resource/email_subscription#Email subscription',
        'https://developer.travis-ci.com/resource/env_var#Env var',
        'https://developer.travis-ci.com/resource/env_vars#Env vars',
        'https://developer.travis-ci.com/resource/error#Error',
        'https://developer.travis-ci.com/resource/installation#Installation',
        'https://developer.travis-ci.com/resource/job#Job',
        'https://developer.travis-ci.com/resource/jobs#Jobs',
        'https://developer.travis-ci.com/resource/key_pair#Key pair',
        'https://developer.travis-ci.com/resource/key_pair_generated#Key pair (generated)',
        'https://developer.travis-ci.com/resource/lint#Lint',
        'https://developer.travis-ci.com/resource/log#Log',
        'https://developer.travis-ci.com/resource/message#Message',
        'https://developer.travis-ci.com/resource/messages#Messages',
        'https://developer.travis-ci.com/resource/organization#Organization',
        'https://developer.travis-ci.com/resource/organizations#Organizations',
        'https://developer.travis-ci.com/resource/owner#Owner',
        'https://developer.travis-ci.com/resource/preference#Preference',
        'https://developer.travis-ci.com/resource/preferences#Preferences',
        'https://developer.travis-ci.com/resource/repositories#Repositories',
        'https://developer.travis-ci.com/resource/repository#Repository',
        'https://developer.travis-ci.com/resource/request#Request',
        'https://developer.travis-ci.com/resource/requests#Requests',
        'https://developer.travis-ci.com/resource/setting#Setting',
        'https://developer.travis-ci.com/resource/settings#Settings',
        'https://developer.travis-ci.com/resource/stage#Stage',
        'https://developer.travis-ci.com/resource/stages#Stages',
        'https://developer.travis-ci.com/resource/user#User',
      ])
    })
  })

  describe('getActions', () => {
    it('return object with "beta_feature" info', async () => {
      const res = await getActions(
        'https://developer.travis-ci.com/resource/beta_feature#Beta%20feature',
      )
      expect(res).toMatchObject({
        title: 'betaFeature',
        actions: [
          {
            updateAction: [
              {
                httpMethod: 'PATCH',
                template: '/user/{user.id}/beta_feature/{beta_feature.id}',
                input: {
                  templateVariable: [
                    {
                      name: 'user.id',
                      type: 'Integer',
                    },
                    {
                      name: 'beta_feature.id',
                      type: 'Integer',
                    },
                  ],
                  acceptedParameter: [
                    {
                      name: 'beta_feature.id',
                      type: 'Integer',
                    },
                    {
                      name: 'beta_feature.enabled',
                      type: 'Boolean',
                    },
                  ],
                },
              },
            ],
          },
          {
            deleteAction: [
              {
                httpMethod: 'DELETE',
                template: '/user/{user.id}/beta_feature/{beta_feature.id}',
                input: {
                  templateVariable: [
                    {
                      name: 'user.id',
                      type: 'Integer',
                    },
                    {
                      name: 'beta_feature.id',
                      type: 'Integer',
                    },
                  ],
                },
              },
            ],
          },
        ],
      })
    })
    it('return object with "active" info', async () => {
      const res = await getActions(
        'https://developer.travis-ci.com/resource/active#Active',
      )
      expect(res).toMatchObject({
        title: 'active',
        actions: [
          {
            forOwnerAction: [
              {
                httpMethod: 'GET',
                template: '/owner/github_id/{github_id}/active',
                input: {
                  templateVariable: [
                    {
                      name: 'github_id',
                      type: 'Unknown',
                    },
                  ],
                  queryParameter: [
                    {
                      name: 'include',
                      type: '[String]',
                    },
                  ],
                },
              },
              {
                httpMethod: 'GET',
                template: '/owner/{provider}/{login}/active',
                input: {
                  templateVariable: [
                    {
                      name: 'provider',
                      type: 'Unknown',
                    },
                    {
                      name: 'login',
                      type: 'Unknown',
                    },
                  ],
                  queryParameter: [
                    {
                      name: 'include',
                      type: '[String]',
                    },
                  ],
                },
              },
              {
                httpMethod: 'GET',
                template: '/owner/{login}/active',
                input: {
                  templateVariable: [
                    {
                      name: 'login',
                      type: 'Unknown',
                    },
                  ],
                  queryParameter: [
                    {
                      name: 'include',
                      type: '[String]',
                    },
                  ],
                },
              },
            ],
          },
        ],
      })
    })
    it('return object with "build" info', async () => {
      const res = await getActions(
        'https://developer.travis-ci.com/resource/build#Build',
      )
      expect(res).toMatchObject({
        actions: [
          {
            findAction: [
              {
                httpMethod: 'GET',
                template: '/build/{build.id}',
                input: {
                  templateVariable: [
                    {
                      name: 'build.id',
                      type: 'Integer',
                    },
                  ],
                  queryParameter: [
                    {
                      name: 'include',
                      type: '[String]',
                    },
                  ],
                },
              },
            ],
          },
          {
            cancelAction: [
              {
                httpMethod: 'POST',
                template: '/build/{build.id}/cancel',
                input: {
                  templateVariable: [
                    {
                      name: 'build.id',
                      type: 'Integer',
                    },
                  ],
                },
              },
            ],
          },
          {
            restartAction: [
              {
                httpMethod: 'POST',
                template: '/build/{build.id}/restart',
                input: {
                  templateVariable: [
                    {
                      name: 'build.id',
                      type: 'Integer',
                    },
                  ],
                },
              },
            ],
          },
          {
            priorityAction: [
              {
                httpMethod: 'POST',
                template: '/build/{build.id}/priority',
                input: {
                  templateVariable: [
                    {
                      name: 'build.id',
                      type: 'Integer',
                    },
                  ],
                  acceptedParameter: [
                    {
                      name: 'build.cancel_all',
                      type: 'Unknown',
                    },
                  ],
                },
              },
            ],
          },
        ],
        title: 'build',
      })
    })
  })
})
