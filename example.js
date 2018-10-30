(async () => {
  const Fontsy = require('./index')

  const fonts = await new Fontsy()
    .sort('alpha')
    .font({
      'Roboto': ['300', '500 italic'],
      'Quicksand': ['300', '600']
    })
  
  console.log(fonts)
  console.log(fonts.link())
  console.log(fonts.link(true))
  console.log(fonts.css())
})()