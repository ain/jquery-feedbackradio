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

  var defaults = {
  };

  function FeedbackRadio(element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
  }

  $.fn[pluginName] = function(options) {
    return this.each(function() {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName,
            new FeedbackRadio(this, options));
      }
    });
  };
})(jQuery, window, document);