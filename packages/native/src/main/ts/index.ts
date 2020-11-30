import { UnionToIntersection } from '@qiwi/substrate'
import { active } from './api/active'
import { executions } from './api/executions'
import { allowance } from './api/allowance'
import { betaFeature } from './api/betaFeature'
import { betaFeatures } from './api/betaFeatures'
import { betaMigration_request } from './api/betaMigration_request'
import { betaMigration_requests } from './api/betaMigration_requests'
import { branch } from './api/branch'
import { branches } from './api/branches'
import { broadcasts } from './api/broadcasts'
import { build } from './api/build'
import { builds } from './api/builds'
import { caches } from './api/caches'
import { cron } from './api/cron'
import { crons } from './api/crons'
import { envVar } from './api/envVar'
import { envVars } from './api/envVars'
import { installation } from './api/installation'
import { job } from './api/job'
import { jobs } from './api/jobs'
import { keyPair } from './api/keyPair'
import { keyPairgenerated } from './api/keyPairgenerated'
import { log } from './api/log'
import { messages } from './api/messages'
import { organization } from './api/organization'
import { organizations } from './api/organizations'
import { owner } from './api/owner'
import { preference } from './api/preference'
import { preferences } from './api/preferences'
import { repositories } from './api/repositories'
import { repository } from './api/repository'
import { request } from './api/request'
import { requests } from './api/requests'
import { setting } from './api/setting'
import { settings } from './api/settings'
import { stages } from './api/stages'
import { user } from './api/user'

const plugins = [
  active,
  betaFeature,
  betaFeatures,
  betaMigration_request,
  betaMigration_requests,
  branch,
  branches,
  broadcasts,
  build,
  builds,
  caches,
  cron,
  crons,
  envVar,
  envVars,
  installation,
  job,
  jobs,
  keyPair,
  keyPairgenerated,
  log,
  messages,
  organization,
  organizations,
  owner,
  preference,
  preferences,
  repositories,
  repository,
  request,
  requests,
  setting,
  settings,
  stages,
  user,
  executions,
  allowance,
]

export function generateClient(baseUrl: string, token: string) {
  return plugins.reduce((acc, el) => {
    const data = el(baseUrl, token)
    return { ...acc, ...data }
  }, {} as UnionToIntersection<ReturnType<typeof plugins[number]>>)
}
