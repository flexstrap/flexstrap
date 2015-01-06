var Component;

try { Component = require('../base/component') } catch(e) { Component = Flexstrap.Component }

class NavigationComponent extends Component {

  constructor(options = {}) {
    super(options)

    var $navigation = this.$el,
        $menuIcon   = $navigation.find('.icon-menu'),
        $menuToggle = $navigation.find('.navigation-toggle')

    $menuIcon.on('click', (e) => {
      e.preventDefault()

      if($menuIcon.hasClass('animate-rotate-half')) {

        $menuIcon.removeClass('animate-rotate-half')
        $menuIcon.addClass('animate-counter-rotate-half')

      }

      else {

        $menuIcon.removeClass('animate-counter-rotate-half')
        $menuIcon.addClass('animate-rotate-half')

      }

      $navigation.toggleClass('navigation-open')

    })

  }

}

try { module.exports = NavigationComponent } catch(e) { Flexstrap.NavigationComponent = NavigationComponent }
