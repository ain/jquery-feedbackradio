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
   * @type String
   */
  var pluginName = 'feedbackradio';

  /**
   * Plugin defaults.
   * @type {Object}
   */
  var defaults = {};

  /**
   * Creates new FeedbackRadio control.
   * @constructor
   * @param {jQuery} jQuery object.
   * @param {Object} Plugin options overriding the defaults.
   * @returns {_L9.FeedbackRadio}
   */
  function FeedbackRadio(element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    console.log('wtf');
    this._init();
  }
  
  /**
   * Initialise plugin.
   */
  FeedbackRadio.prototype._init = function() {
    var self = this;
    var star = $('<a href="#" class="feedbackradio-star">★</a>')
      .on('click', self._handleStarClick);
    $(this.element).attr('type', 'hidden').after(star);
    this._adjustLabels();
  };
  
  /**
   * Star click handler.
   */
  FeedbackRadio.prototype._handleStarClick = function() {
    console.log('click!');
    $('.feedbackradio-star').removeClass('feedbackradio-star--active');
    $(this).addClass('feedbackradio-star--active').prev().prop('checked', true);
  };
  
  FeedbackRadio.prototype._adjustLabels = function() { 
    console.log('adjusting labels..');
    if ($(this.element).parent().is('label')) {
      console.log('label!');
    }
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