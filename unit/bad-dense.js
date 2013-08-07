suite('my impelemntation file X', function() {

  // tests typically have a single subject
  var subject;

  test('#method', function() {
    // pretend this is real data
    var expected = {
      someValue: true,
      otherValue: true,
      object: {
        value: []
      }
    };

    // run the method your trying to test
    var result = subject.method(input);

    // test the result of the method
    assert.deepEqual(result, expected);
    // test that this method modified internal state
    assert.equal(subject.internalState, 'has changes');
    // verify something related to the result.
    // Notice how this does something complex without describing why.
    assert.ok((result.x * 100) === true);
  });
});
