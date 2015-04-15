class Component {

  constructor(options = {}) {

    if(!options.$) {
      throw new Error('options.$ must be defined.')
      return
    }

    if(!options.el) {
      throw new Error('options.el must be defined.')
      return
    }

    this.$ = options.$
    this.$el = this.$(options.el)

  }

}

if(typeof window == 'object') {
  Flexstrap.Component = Component
}

else {
  module.exports = Component
}
