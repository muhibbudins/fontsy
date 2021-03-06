# Fontsy

Google Fonts wrapper for your NodeJS App

## Requirement

This library require Google API Key to run, so you must be GET your own API Key on [this page](https://developers.google.com/fonts/docs/developer_api). After that, rename **.env.example** file to **.env** and insert your API Key to this file.

## Usage

First, install Fontsy using below code :

``` bash
npm install fontsy

# Or

yarn add fontsy
```

Next, create your Fontsy instance :

```js
(async () => {
  const Fontsy = require('fontsy')

  const fonts = await new Fontsy()
    .sort('alpha') // default Popularity
    .font({
      'Playfair Display': ['300', '500 italic'],
      'Quicksand': ['300', '600']
    })
})()
```

And then, follow below instruction to show fetching data.

### Get Single Link

Use **fonts.link()** to get single css link to Google Fonts

```
https://fonts.googleapis.com/css?family=Playfair+Display:300,500i|Quicksand:300,600"
```

### Get Single Link With Tag

Use **fonts.link(true)** to get single css link to Google Fonts with HTML tag

```html
<link href="https://fonts.googleapis.com/css?family=Playfair+Display:300,500i|Quicksand:300,600" rel="stylesheet">
```

### Get CSS Class

Use **fonts.css()** to get css class from instance

```css
.font-quicksand {
  font-family: 'Quicksand', sans-serif;
}
.font-playfair-display {
  font-family: 'Playfair Display', serif;
}
```

### Get List Of Fonts

Use **fonts.list()** to get list of fetched fonts

```json
[
  {
    "family": "Quicksand",
    "category": "sans-serif",
    "variants": [
      "300",
      "regular",
      "500",
      "700"
    ]
  },
  {
    "family": "Playfair Display",
    "category": "serif",
    "variants": [
      "regular",
      "italic",
      "700",
      "700italic",
      "900",
      "900italic"
    ]
  }
]
```

### Get Instance

Just print variable **fonts** to show instance of Fontsy

```json
{
  "url": "https://www.googleapis.com/webfonts/v1/webfonts",
  "key": "YOUR-API-KEY",
  "sorted": "alpha",
  "fonts": [
    "Playfair Display",
    "Quicksand" 
  ],
  "variant": [
    "300,500i",
    "300,600"
  ],
  "result": [
    {
      "kind": "webfonts#webfont",
      "family": "Quicksand",
      "category": "sans-serif",
      "variants": [
        "300",
        "regular",
        "500",
        "700"
      ],
      "subsets": [
        "vietnamese",
        "latin-ext",
        "latin"
      ],
      "version": "v8",
      "lastModified": "2018-10-08",
      "files": {
        "300": "http://fonts.gstatic.com/s/quicksand/v8/6xKodSZaM9iE8KbpRA_pgHYoSA.ttf",
        "500": "http://fonts.gstatic.com/s/quicksand/v8/6xKodSZaM9iE8KbpRA_p2HcoSA.ttf",
        "700": "http://fonts.gstatic.com/s/quicksand/v8/6xKodSZaM9iE8KbpRA_pkHEoSA.ttf",
        "regular": "http://fonts.gstatic.com/s/quicksand/v8/6xKtdSZaM9iE8KbpRA_RLA.ttf"
      }
    },
    {...}
  ]
}
```

For more info see [example file](example.js)

## License

This project under MIT License