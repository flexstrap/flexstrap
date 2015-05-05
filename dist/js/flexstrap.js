(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Flexstrap = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/index.js":[function(require,module,exports){
var Flexstrap = {
  Component: require('./components/base/component'),
  NavigationComponent: require('./components/navigation')
};

module.exports = Flexstrap;

},{"./components/base/component":"/Users/abrams/Projects/flexstrap/src/components/base/component.js","./components/navigation":"/Users/abrams/Projects/flexstrap/src/components/navigation/index.js"}],"/Users/abrams/Projects/flexstrap/src/components/base/component.js":[function(require,module,exports){
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Component = function Component() {
  var options = arguments[0] === undefined ? {} : arguments[0];

  _classCallCheck(this, Component);

  if (!options.$) {
    throw new Error('options.$ must be defined.');
    return;
  }

  if (!options.el) {
    throw new Error('options.el must be defined.');
    return;
  }

  this.$ = options.$;
  this.$el = this.$(options.el);
};

module.exports = Component;

},{}],"/Users/abrams/Projects/flexstrap/src/components/navigation/index.js":[function(require,module,exports){
var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x2,
    property = _x3,
    receiver = _x4; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var Component = require('../base/component');

var NavigationComponent = (function (_Component) {
  function NavigationComponent() {
    var options = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, NavigationComponent);

    _get(Object.getPrototypeOf(NavigationComponent.prototype), 'constructor', this).call(this, options);

    var $navigation = this.$el,
        $menuIcon = $navigation.find('.icon-menu'),
        $menuToggle = $navigation.find('.navigation-toggle'),
        $navigationDropDown = $navigation.find('.navigation-dropdown'),
        $navigationDropDownMenu = $navigation.find('.navigation-dropdown-menu'),
        $window = $(window);

    // Mobile menu icon
    $menuToggle.on('click', function (e) {
      e.preventDefault();

      if ($menuIcon.hasClass('animate-rotate-half')) {

        $menuIcon.removeClass('animate-rotate-half');
        $menuIcon.addClass('animate-counter-rotate-half');
      } else {

        $menuIcon.removeClass('animate-counter-rotate-half');
        $menuIcon.addClass('animate-rotate-half');
      }

      $navigation.toggleClass('navigation-open');
    });

    // Small device screen or larger navigation dropdown
    $('.navigation-dropdown a, .navigation-dropdown li').on('mouseover', function (e) {

      $navigationDropDownMenu.css({ left: -$navigationDropDown.offset().left });
    });

    $window.on('resize', function (e) {

      if ($navigation.hasClass('navigation-open') && $window.outerWidth() >= 768) {

        $navigationDropDownMenu.css({ left: -$navigationDropDown.offset().left });
      }
    });
  }

  _inherits(NavigationComponent, _Component);

  return NavigationComponent;
})(Component);

module.exports = NavigationComponent;

},{"../base/component":"/Users/abrams/Projects/flexstrap/src/components/base/component.js"}]},{},["./src/index.js"])("./src/index.js")
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYWJyYW1zL1Byb2plY3RzL2ZsZXhzdHJhcC9zcmMvaW5kZXguanMiLCIvVXNlcnMvYWJyYW1zL1Byb2plY3RzL2ZsZXhzdHJhcC9zcmMvY29tcG9uZW50cy9iYXNlL2NvbXBvbmVudC5qcyIsIi9Vc2Vycy9hYnJhbXMvUHJvamVjdHMvZmxleHN0cmFwL3NyYy9jb21wb25lbnRzL25hdmlnYXRpb24vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLFNBQVMsR0FBRztBQUNkLFdBQVMsRUFBRSxPQUFPLENBQUMsNkJBQTZCLENBQUM7QUFDakQscUJBQW1CLEVBQUUsT0FBTyxDQUFDLHlCQUF5QixDQUFDO0NBQ3hELENBQUE7O0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUE7Ozs7O0lDTHBCLFNBQVMsR0FFRixTQUZQLFNBQVMsR0FFYTtNQUFkLE9BQU8sZ0NBQUcsRUFBRTs7d0JBRnBCLFNBQVM7O0FBSVgsTUFBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7QUFDYixVQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUE7QUFDN0MsV0FBTTtHQUNQOztBQUVELE1BQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFO0FBQ2QsVUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzlDLFdBQU07R0FDUDs7QUFFRCxNQUFJLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUE7QUFDbEIsTUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtDQUU5Qjs7QUFJSCxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQTs7Ozs7Ozs7Ozs7QUNyQjFCLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBOztJQUV0QyxtQkFBbUI7QUFFWixXQUZQLG1CQUFtQixHQUVHO1FBQWQsT0FBTyxnQ0FBRyxFQUFFOzswQkFGcEIsbUJBQW1COztBQUdyQiwrQkFIRSxtQkFBbUIsNkNBR2YsT0FBTyxFQUFDOztBQUVkLFFBQUksV0FBVyxHQUFlLElBQUksQ0FBQyxHQUFHO1FBQ2xDLFNBQVMsR0FBaUIsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDeEQsV0FBVyxHQUFlLFdBQVcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7UUFDaEUsbUJBQW1CLEdBQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztRQUNsRSx1QkFBdUIsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDO1FBQ3ZFLE9BQU8sR0FBbUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBOzs7QUFHdkMsZUFBVyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQyxDQUFDLEVBQUs7QUFDN0IsT0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFBOztBQUVsQixVQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsRUFBRTs7QUFFNUMsaUJBQVMsQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsQ0FBQTtBQUM1QyxpQkFBUyxDQUFDLFFBQVEsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO09BRWxELE1BRUk7O0FBRUgsaUJBQVMsQ0FBQyxXQUFXLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtBQUNwRCxpQkFBUyxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO09BRTFDOztBQUVELGlCQUFXLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUE7S0FFM0MsQ0FBQyxDQUFBOzs7QUFHRixLQUFDLENBQUMsaURBQWlELENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsQ0FBQyxFQUFLOztBQUUxRSw2QkFBdUIsQ0FBQyxHQUFHLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFBO0tBRXhFLENBQUMsQ0FBQTs7QUFFRixXQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLENBQUMsRUFBSzs7QUFFMUIsVUFBRyxXQUFXLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLEdBQUcsRUFBRTs7QUFFekUsK0JBQXVCLENBQUMsR0FBRyxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQTtPQUV4RTtLQUVGLENBQUMsQ0FBQTtHQUVIOztZQW5ERyxtQkFBbUI7O1NBQW5CLG1CQUFtQjtHQUFTLFNBQVM7O0FBdUQzQyxNQUFNLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBGbGV4c3RyYXAgPSB7XG4gIENvbXBvbmVudDogcmVxdWlyZSgnLi9jb21wb25lbnRzL2Jhc2UvY29tcG9uZW50JyksXG4gIE5hdmlnYXRpb25Db21wb25lbnQ6IHJlcXVpcmUoJy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uJylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbGV4c3RyYXBcbiIsImNsYXNzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG5cbiAgICBpZighb3B0aW9ucy4kKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ29wdGlvbnMuJCBtdXN0IGJlIGRlZmluZWQuJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmKCFvcHRpb25zLmVsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ29wdGlvbnMuZWwgbXVzdCBiZSBkZWZpbmVkLicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLiQgPSBvcHRpb25zLiRcbiAgICB0aGlzLiRlbCA9IHRoaXMuJChvcHRpb25zLmVsKVxuXG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudFxuIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoJy4uL2Jhc2UvY29tcG9uZW50JylcblxuY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcblxuICAgIHZhciAkbmF2aWdhdGlvbiAgICAgICAgICAgICA9IHRoaXMuJGVsLFxuICAgICAgICAkbWVudUljb24gICAgICAgICAgICAgICA9ICRuYXZpZ2F0aW9uLmZpbmQoJy5pY29uLW1lbnUnKSxcbiAgICAgICAgJG1lbnVUb2dnbGUgICAgICAgICAgICAgPSAkbmF2aWdhdGlvbi5maW5kKCcubmF2aWdhdGlvbi10b2dnbGUnKSxcbiAgICAgICAgJG5hdmlnYXRpb25Ecm9wRG93biAgICAgPSAkbmF2aWdhdGlvbi5maW5kKCcubmF2aWdhdGlvbi1kcm9wZG93bicpLFxuICAgICAgICAkbmF2aWdhdGlvbkRyb3BEb3duTWVudSA9ICRuYXZpZ2F0aW9uLmZpbmQoJy5uYXZpZ2F0aW9uLWRyb3Bkb3duLW1lbnUnKSxcbiAgICAgICAgJHdpbmRvdyAgICAgICAgICAgICAgICAgPSAkKHdpbmRvdylcblxuICAgIC8vIE1vYmlsZSBtZW51IGljb25cbiAgICAkbWVudVRvZ2dsZS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgIGlmKCRtZW51SWNvbi5oYXNDbGFzcygnYW5pbWF0ZS1yb3RhdGUtaGFsZicpKSB7XG5cbiAgICAgICAgJG1lbnVJY29uLnJlbW92ZUNsYXNzKCdhbmltYXRlLXJvdGF0ZS1oYWxmJylcbiAgICAgICAgJG1lbnVJY29uLmFkZENsYXNzKCdhbmltYXRlLWNvdW50ZXItcm90YXRlLWhhbGYnKVxuXG4gICAgICB9XG5cbiAgICAgIGVsc2Uge1xuXG4gICAgICAgICRtZW51SWNvbi5yZW1vdmVDbGFzcygnYW5pbWF0ZS1jb3VudGVyLXJvdGF0ZS1oYWxmJylcbiAgICAgICAgJG1lbnVJY29uLmFkZENsYXNzKCdhbmltYXRlLXJvdGF0ZS1oYWxmJylcblxuICAgICAgfVxuXG4gICAgICAkbmF2aWdhdGlvbi50b2dnbGVDbGFzcygnbmF2aWdhdGlvbi1vcGVuJylcblxuICAgIH0pXG5cbiAgICAvLyBTbWFsbCBkZXZpY2Ugc2NyZWVuIG9yIGxhcmdlciBuYXZpZ2F0aW9uIGRyb3Bkb3duXG4gICAgJCgnLm5hdmlnYXRpb24tZHJvcGRvd24gYSwgLm5hdmlnYXRpb24tZHJvcGRvd24gbGknKS5vbignbW91c2VvdmVyJywgKGUpID0+IHtcblxuICAgICAgJG5hdmlnYXRpb25Ecm9wRG93bk1lbnUuY3NzKHtsZWZ0OiAtJG5hdmlnYXRpb25Ecm9wRG93bi5vZmZzZXQoKS5sZWZ0fSlcblxuICAgIH0pXG5cbiAgICAkd2luZG93Lm9uKCdyZXNpemUnLCAoZSkgPT4ge1xuXG4gICAgICBpZigkbmF2aWdhdGlvbi5oYXNDbGFzcygnbmF2aWdhdGlvbi1vcGVuJykgJiYgJHdpbmRvdy5vdXRlcldpZHRoKCkgPj0gNzY4KSB7XG5cbiAgICAgICAgJG5hdmlnYXRpb25Ecm9wRG93bk1lbnUuY3NzKHtsZWZ0OiAtJG5hdmlnYXRpb25Ecm9wRG93bi5vZmZzZXQoKS5sZWZ0fSlcblxuICAgICAgfVxuXG4gICAgfSlcblxuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOYXZpZ2F0aW9uQ29tcG9uZW50XG4iXX0=
