// normally you would want this in an external file which you can
// share between your tests.
function MyApp(client) {
  this.client = client;
}

MyApp.URL = 'app://myapp.com';

MyApp.prototype = {
  constructor: MyApp,

  selectors: Object.freeze({
    submitButton: '#my-buttom'
  }),

  /**
   * Launch my app.
   */
  launch: function() {
    this.client.app.launch(this.constructor.URL);
    this.client.app.switchToApp(this.constructor.URL);
  },

  /**
   * The granularity of how you want to represent your app will
   * vary. If your doing a ton of operations on the form (and you have
   * many forms with similar logic) you might want to abstract this
   * further.
   */
  submitForm: function() {
    var element = this.client.findElement(this.selectors.submitButton);
    element.click();
  },

  /**
   * Attempts to find a visible dialog.
   *
   * @param {String} dialog type.
   * @return {Dialog}
   */
  visibleDialog: function(dialog) {
    var selector = '#dialog-' + dialog;
    var element = this.client.findElement(selector);

    if (!element.displayed()) {
      throw new Error(dialog + ' is not displayed');
    }

    return new Dialog(element);
  }
};

module.exports = MyApp;
