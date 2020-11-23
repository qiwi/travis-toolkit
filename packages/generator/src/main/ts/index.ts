import { promises as fs } from 'fs'

import { generate } from './generator'
import { getActions, getLinks } from './parser'

export { getLinks, getActions } from './parser'
export {
  generateFunction,
  generateInputType,
  generateFunctionBody,
  generate,
} from './generator'

export async function generates(
  path: string,
  baseUrl: string,
  cookie?: string,
) {
  const links = await getLinks(baseUrl, cookie)
  const res = await Promise.all(links.map((str) => getActions(str, '')))

  await Promise.all(
    // eslint-disable-next-line array-callback-return
    res.map(({ title, actions }) => {
      fs.writeFile(`${path}/${title}.ts`, generate({ title, actions }))
    }),
  )
}
