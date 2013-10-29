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
   * Display types.
   *  BLOCK - component features several lines of stars.
   *  INLINE - all stars displayed one after the other on single line.
   * @enum {String} 
   */
  var DISPLAY = {
    BLOCK: 'block',
    INLINE: 'inline'
  };
  
  /**
   * Order of the stars on block layout.
   *  DESC - most stars displayed on top.
   *  ASC - least stars displayed on top.
   * @enum {String}
   */
  var ORDER = {
    ASC: 'asc',
    DESC: 'desc'
  };

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
   * Default display type.
   * @type {String}
   * @default inline
   */
  defaults.display = DISPLAY.INLINE;
  
  /**
   * Default step for block feedbackradio component.
   * @type {Number}
   * @default 1
   */
  defaults.step = 2;
  
  /**
   * 
   */
  defaults.order = 'ASC';

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
    var self = this;
    var reverseOrder = this.options.order === ORDER.DESC;
    var $inputs = this._flatten(reverseOrder);
    if (reverseOrder) {
      $inputs.reverse();
    }
    $inputs.each(function() {
      var star = $('<a href="#" class="feedbackradio-star ' + self._getStarDisplayClass() + '">' + self._getStarLabel($inputs.index(this)) + '</a>')
        .bind('click', self, self._handleStarClick);
      $(this).hide().after(star);
    });
    var checkedId = $inputs.index($inputs.filter(':checked'));
    if (this.options.considerDefault && checkedId !== -1) {
      this.getStars().eq(checkedId).trigger('click');
    }
  };
  
  FeedbackRadio.prototype._getStarDisplayClass = function() {
    return 'feedbackradio-star--display-' + this.options.display;
  };
  
  FeedbackRadio.prototype._getStarLabel = function(count) {
    var star = '★';
    if (this.options.display === DISPLAY.BLOCK) {
      return Array(this.options.step * count + 2).join(star);
    }
    return star;
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
    if (self.options.display === DISPLAY.BLOCK) {
      $(this).addClass('feedbackradio-star--active');
    }
    else {
      var i = 0;
      while (i <= id) {
        $stars.eq(i).addClass('feedbackradio-star--active');
        i++;
      }
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
  FeedbackRadio.prototype._flatten = function(reverseOrder) {
    var $inputs = $(this.element).find(this.options.inputSelector);
    if (reverseOrder) {
      $inputs.reverse();
    }
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
  
  /**
   * jQuery Reverse Helper plugin.
   */
  $.fn.reverse = [].reverse;
  
})(jQuery, window, document);