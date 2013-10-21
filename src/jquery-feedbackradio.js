/*
 * jQuery FeedbackRadio plugin.
 * https://github.com/ain/jquery-feedbackradio
 *
 * Copyright (c) 2013 Ain Tohvri
 * Licensed under the MIT license.
 */

(function($, window, document, undefined) {

  /*
   * Plugin UID.
   *
   * @type String
   */
  var pluginName = 'feedbackradio';

  var defaults = {};

  function FeedbackRadio(element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this._init();
  }
  
  FeedbackRadio.prototype._init = function() {
    var self = this;
    var star = $('<a href="#" class="feedbackradio-star">★</a>')
      .on('click', self._handleStarClick);
    $(this.element).hide().after(star);
  };
  
  FeedbackRadio.prototype._handleStarClick = function() {
    $('.feedbackradio-star').removeClass('feedbackradio-star--active');
    $(this).addClass('feedbackradio-star--active').prev().prop('checked', true);
  };

  $.fn[pluginName] = function(options) {
    return this.each(function() {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName,
          new FeedbackRadio(this, options));
      }
    });
  };
})(jQuery, window, document);