# vue-gradation

## Install

```bash
$ yarn add vue-gradation
```

## Usage

```js
import Vue from 'vue'
import VueGradation from 'vue-gradation'

Vue.use(VueGradation)
```

```vue
<template>
  <div id="app">
    <vue-gradation
      :duration="10"
      color="linear-gradient( 109.6deg, #FBE4E2 11.4%, #67A5DA 91.1% )"
    >
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </vue-gradation>
  </div>
</template>
```

> For `color`, See also the [Gradient Hunt](https://gradienthunt.com/).

<!-- ## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/). -->
