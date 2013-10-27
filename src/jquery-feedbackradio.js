/**
 * jQuery FeedbackRadio plugin.
 * https://github.com/ain/jquery-feedbackradio
 *
 * Copyright (c) 2013 Ain Tohvri
 * Licensed under the MIT license.
 */

(function($, window, document, undefined) {

  /**
   * Plugin UID.
   * @type {String}
   */
  var pluginName = 'feedbackradio';

  /**
   * Plugin defaults.
   * @type {Object}
   */
  var defaults = {};
  
  /**
   * Consider default value of converted radio input.
   * @type {Boolean} Consider if true, do not consider if false.
   * @default true
   */
  defaults.considerDefault = true;
  
  /**
   * Selector to target radio inputs in container plugin is initialised on.
   * @type {String}
   * @default input[type="radio"]
   */
  defaults.inputSelector = 'input[type="radio"]';

  /**
   * Creates new FeedbackRadio control.
   * @constructor
   * @param {jQuery} jQuery object holding radio inputs.
   * @param {Object} Plugin options overriding the defaults.
   * @returns {_L9.FeedbackRadio}
   */
  function FeedbackRadio(element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this._init();
  }
  
  /**
   * Initialise plugin.
   * - Flatten the (possible) structure between the element and the inputs.
   * - Use deprecated jQuery.bind() for legacy support.
   */
  FeedbackRadio.prototype._init = function() {
    var $inputs = this._flatten();
    var self = this;
    $inputs.each(function() {
      var star = $('<a href="#" class="feedbackradio-star">★</a>')
        .bind('click', self, self._handleStarClick);
      $(this).hide().after(star);
    });
    var checkedId = $inputs.index($inputs.filter(':checked'));
    if (this.options.considerDefault && checkedId !== -1) {
      this.getStars().eq(checkedId).trigger('click');
    }
  };
  
  /**
   * Star click handler.
   * @return {Boolean} false Always return false to kill the event propagation.
   */
  FeedbackRadio.prototype._handleStarClick = function(event) {
    var self = event.data;
    var $stars = self.getStars();
    var id = $stars.index(this);
    $stars.removeClass('feedbackradio-star--active');
    var i = 0;
    while (i <= id) {
      $stars.eq(i).addClass('feedbackradio-star--active');
      i++;
    }
    $(this).prev().trigger('click');
    event.stopPropagation();
    return false;
  };
  
  /**
   * Return all stars representing radio inputs.
   * @returns {jQuery[]} Array of jQuery star objects.
   */
  FeedbackRadio.prototype.getStars = function() {
    return $('.feedbackradio-star');
  };
  
  /**
   * Flatten matched inputs to same level into initialised element.
   * @return {jQuery[]} Array of targeted input elements.
   */
  FeedbackRadio.prototype._flatten = function() {
    var $inputs = $(this.element).find(this.options.inputSelector);
    $(this.element).empty().append($inputs);
    return $inputs;
  };
  
  /**
   * jQuery FeedbackRadio plugin.
   * @class FeedbackRadio
   * @memberOf jQuery.fn
   * @param {Object} Plugin options.
   * @returns {_L9.$@call;each}
   */
  $.fn[pluginName] = function(options) {
    return this.each(function() {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName,
          new FeedbackRadio(this, options));
      }
    });
  };
})(jQuery, window, document);