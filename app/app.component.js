(function(app) {
  app.AppComponent = ng.core
    .Component({
      selector: 'my-app',
      template: '<trial-form></trial-form>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
