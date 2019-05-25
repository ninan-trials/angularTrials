(function(app) {
  app.AppModule =
    ng.core.NgModule({

      imports: [
        ng.platformBrowser.BrowserModule,
        ng.forms.FormsModule
      ],

      declarations: [
        app.AppComponent,
        app.FormComponent
      ],

      bootstrap: [ app.AppComponent ]

    })
    .Class({

      constructor: function() {}

    });

})(window.app || (window.app = {}));
