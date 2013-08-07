suite('my impelemntation file X', function() {

  // tests typically have a single subject
  var subject;

  // why a suite? Eventually the changes are the complexity will
  // increase here and you want to add tests. Its easier to test the new
  // functionality in an isolated way when you have a suite.
  suite('#method', function() {
    var expected;
    var result;

    // setups, tests and suites are just functions so you can create
    // wrappers as neeeded to abstract complex or repetitive steps in a
    // DSL that makes sense for your given test.
    setup(function() {
      // calculate the expected value in a way that cannot be dirtied
      // between tests.
      expected = {
        someValue: true,
        otherValue: true,
        object: {
          value: []
        }
      };

      result = subject.method();
    });

    test('output of method', function() {
      assert.deepEqual(result, expected);
    });

    test('internal state has been altered', function() {
      assert.equal(subject.internalState, 'has changes');
    });

    test('the result of X algorithm is within expected bounds', function() {
      assert.ok((result.x * 1000) === true);
    });
  });
});

