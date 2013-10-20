(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#feedbackradio', {
    // This will run before each test in this module.
    setup: function() {
      this.elem = $('#qunit-fixture form input[name="rating"]');
    }
  });

  test('is chainable', function() {
    expect(1);
    strictEqual(this.elem.feedbackradio(), this.elem, 'should be chainable');
  });
  
  test('are radios hidden', function() {
    expect(1);
    strictEqual(this.elem.feedbackradio().is(':visible'), false, 'radio inputs should become hidden');
  });

}(jQuery));
