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
    colours: {
      active: '#ccc',
      selected: '#ddd',
      hover: '#eee'
    },
    increment: 2
  };

  function FeedbackRadio(element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this._init();
  }
  
  FeedbackRadio.prototype._init = function() {
    var self = this;
    $(this.element).each(function() {
      $(this).hide();
      // TODO replace radio input with star(s)
    });
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