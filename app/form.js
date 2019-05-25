(function(app) {
  app.Form = Form;

  function Form(name, emailId, country) {
    this.name = name;
    this.emailId = emailId;
    this.country = country;
  }
})(window.app || (window.app = {}));
