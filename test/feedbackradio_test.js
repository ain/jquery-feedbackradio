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
  
  test('has stars', function() {
    expect(1);
    strictEqual(this.elem.feedbackradio().siblings('a').length, this.elem.length, 'should have same number of stars as inputs');
  });
  
  test('has active class', function() {
    expect(3);
    strictEqual(this.elem.feedbackradio().siblings('a').eq(0).trigger('click').hasClass('feedbackradio-star--active'), true, 'clicked star (0) should have active state');
    strictEqual(this.elem.feedbackradio().siblings('a').eq(1).trigger('click').hasClass('feedbackradio-star--active'), true, 'clicked star (1) should have active state');
    strictEqual(this.elem.feedbackradio().siblings('a').eq(2).trigger('click').hasClass('feedbackradio-star--active'), true, 'clicked star (2) should have active state');
  });

  test('has form value changed', function() {
    expect(3);
    strictEqual(this.elem.feedbackradio().siblings('a').eq(0).trigger('click').prev().prop('checked'), true, 'clicked star (0) should change input value');
    strictEqual(this.elem.feedbackradio().siblings('a').eq(1).trigger('click').prev().prop('checked'), true, 'clicked star (1) should change input value');
    strictEqual(this.elem.feedbackradio().siblings('a').eq(2).trigger('click').prev().prop('checked'), true, 'clicked star (2) should change input value');
  });
  
  test('has single active star', function() {
    expect(1);
    this.elem.feedbackradio().siblings('a').trigger('click');
    strictEqual(this.elem.siblings('.feedbackradio-star--active').length, 1, 'should only have 1 active star');
  });

}(jQuery));
