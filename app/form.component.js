(function(app) {
  app.FormComponent = ng.core
    .Component({
      selector: 'trial-form',
      templateUrl: 'app/form.component.html'
    })

    .Class({
      constructor: [function() {
        this.model = new app.Form('Enter your Name', 'Enter your Email-Id',
          'Enter your Country');
        this.submitted = false;
      }],

      onSubmit: function() {
        this.names =[];
        this.names.push(this.model.name);
        this.submitted = true;
      },
    });
})(window.app || (window.app = {}));
