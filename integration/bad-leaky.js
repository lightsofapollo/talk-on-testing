marionette('modal dialog warnings', function() {
  var client = marionette.client();

  setup(function() {
    client.app.launch(MY_APP);
    client.app.switchToApp(MY_APP);
  });

  // multiple assertions in an integration test are generally expected.
  // I think this is less problematic then in unit tests assuming what
  // your testing is all directly related to one flow.
  test('submiting form with invalid data', function() {
    // fill in form (does a user really know what #my-button is?)
    var button = client.findElement('#my-button');
    button.click();

    var modalDialog = client.findElement('#warning-dialog');
    assert.ok(modelDialog.displayed(), 'dialog is displayed');

    var dialogText = modalDialog.findElement('p.text');
    assert.equal(dialogText, 'expected text', 'issues correct warning');
  });
});
