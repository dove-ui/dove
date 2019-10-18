import Button from './button'

/* eslint-disable-next-line */
Button.install = function (Vue, options = {}) {
  Vue.component(options.name || Button.name, Button)
}

export default Button
