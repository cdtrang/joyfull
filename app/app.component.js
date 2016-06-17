(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>Joyfull app</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));