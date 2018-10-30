# Fontsy

Google Fonts wrapper for your NodeJS App

### Requirement

This library require Google API Key to run, so you must be create your own API Key on [this page](). After that, rename **.env.example** file to **.env** and insert your API Key to this file.

### Usage

```js
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
  console.log(fonts.list())
})()
```
