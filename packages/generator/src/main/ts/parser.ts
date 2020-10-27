import axios from 'axios'
import cheerio from 'cheerio'

import {
  TActionTableItem,
  TParameter,
  TParsedPage,
  TTableParametersType,
} from './types'
import { normalizeName, toCamelCase } from './utils'

export async function getLinks(baseUrl: string, cookie = '') {
  const data = await axios.get(baseUrl, {
    headers: {
      Cookie: cookie,
    },
  })

  const links: string[] = []
  const $ = cheerio.load(data.data)
  $('#sidebar > nav > ul:nth-child(4) > a').each((_, elem) => {
    return links.push(`${baseUrl}${$(elem).attr('href')}`)
  })

  return links
}

export function parseTable(tableHtml: string) {
  const $ = cheerio.load(tableHtml)
  const httpMethod = $('.verb').text()
  const template = $('.template').text()
  const res: TActionTableItem = {
    httpMethod,
    template,
    input: {},
  }

  $('table').each((_, el) => {
    const tableTitle = normalizeName(
      cheerio.load(el)('thead > tr > th:nth-child(1)').text(),
    )
    const tableItems: TParameter[] = []
    cheerio
      .load(el)('tbody > tr')
      .each((_, el) => {
        tableItems.push({
          name: cheerio.load(el)('td.key').text(),
          type: cheerio.load(el)('td.type').text(),
        })
      })
    res.input[tableTitle as TTableParametersType] = tableItems
  })

  return res
}

export function getActionItem(html: string) {
  const table =
    html.match(
      /(<div class="request">(.|[\r\n])*?(?=<div class="request">))|<div class="request">(.|[\r\n])*/g, // eslint-disable-line
    ) || []
  return {
    [`${normalizeName(cheerio.load(html)('h4').text())}Action`]: table.map(
      parseTable,
    ),
  }
}

export async function getActions(
  url: string,
  cookie = '',
): Promise<TParsedPage> {
  const { data } = await axios.get(url, {
    headers: {
      Cookie: cookie,
    },
  })

  const actionsHtml = cheerio
    .load(data)('body > main > div > div.content')
    .html()
    ?.match(/<a href="#actions" name="actions">(.|[\r\n])*/)?.[0] // eslint-disable-line

  return {
    title: toCamelCase(
      cheerio.load(data)('body > main > div > div.content > h2 > a').text(),
    ),
    actions: (
      actionsHtml?.match(/(<h4>(.|[\r\n])*(?=<h4>))|<h4>(.|[\r\n])*/g) || // eslint-disable-line
      []
    ).map(getActionItem),
  }
}
