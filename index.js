const fetch = require('node-fetch')
const dotenv = require('dotenv')
const config = dotenv.load('./env').parsed

class Fontsy {
  constructor() {
    this.url = 'https://www.googleapis.com/webfonts/v1/webfonts'
    this.key = config['API_KEY']
    this.sorted = 'popularity'
  }

  endpoint() {
    return `${this.url}?sort=${this.sorted}&key=${this.key}`
  }

  sort(sort) {
    this.sorted = sort
    return this
  }

  async font(query) {
    this.fonts = Object.keys(query)
    this.variant = this.fonts.map(item => {
      return query[item].map(item => {
        return item.toLowerCase().replace(/ /g, '').replace(/italic/g, 'i')
      }).join(',')
    })

    this.result = await this.fetch()

    return this
  }

  fetch() {
    return new Promise(resolve => {
      fetch(this.endpoint())
        .then(res => res.json())
        .then(res => {
          resolve(res['items'].filter(item => {
            return this.fonts.indexOf(item['family']) > -1
          }))
        })
    })
  }

  link(tag) {
    let apiUrl = []
    let fontVariant = []
    
    apiUrl.push('https://fonts.googleapis.com/css?family=')
    
    this.fonts.map((item, index) => {
      fontVariant.push(`${item}:${this.variant[index]}`)
    })

    apiUrl.push(fontVariant.join('|'))

    if (tag) {
      return `<link href="${apiUrl.join('').trim()}" rel="stylesheet">`
    } else {
      return apiUrl.join('').trim()
    }
  }

  css() {
    return this.result.map(item => {
      return `
        .font-${item['family'].replace(/ /g, '-').toLowerCase()} {
          font-family: '${item['family']}', ${item['category']};
        }
      `.trim().replace(/        /g, '')
    }).join('\n')
  }

  list() {
    return this.result.map(item => {
      const bracket = {}

      bracket['family'] = item['family']
      bracket['category'] = item['category']
      bracket['variants'] = item['variants']

      return bracket
    })
  }
}

module.exports = Fontsy