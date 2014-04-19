// XHR Module
define(["jquery"],function($){
	//File Upload in XHR
	(function ( $, window, document, undefined ) {
		//plugin name and defaults
		var pluginName = "html5fileupload",
				defaults = {};

		// The actual plugin constructor
		function Plugin ( element, options ) {
				this.element = element;
				// jQuery has an extend method which merges the contents of two or
				// more objects, storing the result in the first object. The first object
				// is generally empty as we don"t want to alter the default options for
				// future instances of the plugin
				this.settings = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
		}

		Plugin.prototype = {
				init: function(){
				}
		};

		//preventing plugin form multiple instantiations
		$.fn[pluginName] = function(){
			return this;
		};

	})($,window,document);
});