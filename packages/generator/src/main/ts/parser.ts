import axios from 'axios'
import cheerio from 'cheerio'

import {
  TActionTableItem,
  TParameter,
  TParsedPage,
  TTableParametersType,
} from './types'

export function unCapitalize(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1)
}

export function normaliseName(name: string) {
  return unCapitalize(name.replace(/[\s,./`-]/g, ''))
}

export async function getLinks(baseUrl: string, cookie: string) {
  const data = await axios.get(baseUrl, {
    headers: {
      Cookie: cookie,
    },
  })

  const links: string[] = []
  const $ = cheerio.load(data.data)
  $('#sidebar > nav > ul:nth-child(6) > a').each((_, elem) =>
    links.push(`${baseUrl}${$(elem).attr('href')}`),
  )
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
    const tableTitle = normaliseName(
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
    [normaliseName(cheerio.load(html)('h4').text())]: table.map(parseTable),
  }
}

export async function getActions(
  url: string,
  cookie: string,
): Promise<TParsedPage> {
  const { data } = await axios.get(url, {
    headers: {
      Cookie: cookie,
    },
  })

  const actionsHtml = cheerio.load(data)('body > main > div > div.content')
  return (
    actionsHtml.html()?.match(/(<h4>(.|[\r\n])*(?=<h4>))|<h4>(.|[\r\n])*/g) || // eslint-disable-line
    []
  ).map(getActionItem)
}
