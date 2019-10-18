import pkg from '../package.json'
import Button from './packages/button'

/* eslint-disable-next-line */
function install (Vue, options = {}) {
  Vue.component(Button.name, Button)
}

export default {
  version: pkg.version,
  install: install,
  Button
}
