/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (
  window.sessionStorage && window.sessionStorage.getItem('prototypeWarning') !== 'false' &&
  window.console && window.console.info
) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
  window.sessionStorage.setItem('prototypeWarning', true)
}

$(document).ready(function () {
  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()


    function scaleHeight() {
        var scaleWrapper = document.querySelectorAll('.scale-wrapper')
        var scale = document.querySelectorAll('.scale')

        for (var i = 0; i <= scaleWrapper.length - 1; i++) {

            scaleWrapper[i].style.height = scale[i].offsetHeight / 2 + 'px'

        }
    }

    window.addEventListener('resize', function(){
        scaleHeight()
    })
    scaleHeight()

})
