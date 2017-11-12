# vue-content-placeholders

![npm](https://img.shields.io/npm/v/vue-content-placeholders.svg)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Vue addon for rendering fake content while data is fetching to provide better UX and lower bounce rate.

![example](https://i.imgur.com/JQlFjsS.gif)

---

## :cd: Installation

* via npm: `npm install vue-content-placeholders --save`
* via yarn: `yarn add vue-content-placeholders`

## :rocket: Usage

Include plugin in your `main.js` file.

```javascript
import Vue from 'vue'
import VueContentPlaceholders from 'vue-content-placeholders'

Vue.use(VueContentPlaceholders)
```

> ⚠️ A css file is included when importing the package. You may have to setup your bundler to embed the css in your page.

### Examples:

```html
<content-placeholders>
  <content-placeholders-heading :img="true" />
  <content-placeholders-text :lines="3" />
</content-placeholders>
```

![rendered example](https://i.imgur.com/LWfqxUe.png)

```html
<content-placeholders :rounded="true">
  <content-placeholders-img />
  <content-placeholders-heading />
</content-placeholders>
```

![rendered example](https://i.imgur.com/NBb6ZB7.png)

### Available components and properties

* root `<content-placeholders>`
  * Boolean `animated` (default: true)
  * Boolean `rounded` (default: false) - border radius
  * Boolean `centered` (default: false)
  > these properties define how all children components will act


* `<content-placeholders-heading />`
  * Boolean `img` (default: false)


* `<content-placeholders-text />`
  * Number `lines` (default: 4)


* `<content-placeholders-img />`

---

## 🔓 License

See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).
