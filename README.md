# HTML Tidy for PostHTML

## Install

```bash
(sudo) npm i -D posthtml-tidy
```

## Usage
For general usage and build process integration see [PostHTML Docs](https://github.com/posthtml/posthtml#usage)

### Example using Node API
#### Default

```js
const fs = require('fs')

const posthtml = require('posthtml')

const tidy = require('posthtml-tidy')(/* options */)

let html = fs.readFileSync('./index.html', 'utf8')

posthtml([ tidy ])
  .process(html)
  .then(result => console.log(result.html))
```
##### Input
```html
<h1>Well formatted</h1>
<h1>Bad formatted</h4>
<h6>Even bader formatted</h1
```
##### Output
```html
<h1>Well formatted</h1>
<h1>Bad formatted</h1>
<h6>Even worser formatted</h6>
```
