(async () => {
  const Fontsy = require('./index')

  const fonts = await new Fontsy()
    .sort('alpha')
    .font({
      'Roboto': ['300', '500 italic'],
      'Quicksand': ['300', '600']
    })
  
  console.log(JSON.stringify(fonts, false, 2))
  console.log(JSON.stringify(fonts.link(), false, 2))
  console.log(JSON.stringify(fonts.link(true), false, 2))
  console.log(JSON.stringify(fonts.css(), false, 2))
  console.log(JSON.stringify(fonts.list(), false, 2))
})()