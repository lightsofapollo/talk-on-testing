marionette('modal dialog warnings', function() {
  var client = marionette.client();
  var App = require('app');

  var subject;
  setup(function() {
    subject = new App(client);
    subject.launch();
  });

  // multiple assertions in an integration test are generally expected.
  // I think this is less problematic then in unit tests assuming what
  // your testing is all directly related to one flow.
  test('submiting form with invalid data', function() {
    // the reasons for abstractions can vary- the most important reason
    // is the elements, selectors, etc... will absolutely change. The
    // fact that you need to submit this form will change less frequently.
    // By separating the logic you can show the intent of the test without 
    // leaking implementation details.
    subject.submitForm();

    var warningDialog = subject.visibleDialog('warning');
    assert.equal(warningDialog.text(), 'expected text', 'issues warning');
  });
});
