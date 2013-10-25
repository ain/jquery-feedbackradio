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
    this._init();
  }
  
  /**
   * Initialise plugin.
   */
  FeedbackRadio.prototype._init = function() {
    var self = this;
    var star = $('<a href="#" class="feedbackradio-star">★</a>')
      .on('click', self._handleStarClick);
    if ($(this.element).parent().is('label')) {
      self._removeText($(this.element).parent());
    }
    $(this.element).hide().after(star);
  };
  
  /**
   * Star click handler.
   */
  FeedbackRadio.prototype._handleStarClick = function(event) {
    $('.feedbackradio-star').removeClass('feedbackradio-star--active');
    $(this).addClass('feedbackradio-star--active').prev().prop('checked', true);
    event.stopPropagation();
    return false;
  };
  
  /**
   * Remove all loose text in HTML tag.
   * Keep children elements.
   * @param {HMTLObject} element HTML element to remove text from.
   * @returns {HTMLOnject} HTML element without text.
   */
  FeedbackRadio.prototype._removeText = function(element) {
    var newElement = $('<' + element[0].nodeName + '/>');
    element.children().each(function() {
      newElement.append(this);
    });
    element.replaceWith(newElement);
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