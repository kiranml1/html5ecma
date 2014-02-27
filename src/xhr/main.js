// XHR Module
define(['jquery','xhrequest'],function($){
	//File Upload in XHR
	(function ( $, window, document, undefined ) {
		//plugin name and defaults
		var pluginName = "html5fileupload",
				defaults = { };

		// The actual plugin constructor
		function Plugin ( element, options ) {
				this.element = element;
				// jQuery has an extend method which merges the contents of two or
				// more objects, storing the result in the first object. The first object
				// is generally empty as we don't want to alter the default options for
				// future instances of the plugin
				this.settings = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
		}

		Plugin.prototype = {
				init: function(){
					//Presently Localcall File Upload is Processing
					this.localFileUpoadEvent();
					//Event Change Flag
					this.eventChange = false;
					// Generate URL Flag
					this.generateURL = false;
					// Generate URL Empty
					this.generadteURL = null;
				},
				//Local FileUpload Module
				localFileUpoadEvent: function(){
					var self = this;
					$(this.element).bind('change',function(){
						this.eventChange = !this.eventChange;
						for(var i = 0; i < this.files.length; ++i)
						{
							if(self.typeValidation(this.files.item(i)))
							{
								//File API's File Reader is Object used for generatinfg Data URL
								var reader = new FileReader();
								reader.onload = function(f)
								{
									if(f.target.result)
									{
										// Assigning the URL Generations
										self.generateURL = !this.generateURL;
										self.generatedURL = f.target.result;
										self.onEventUpdate();
									}
								}
								//Asyncrhonously URLS are processed inwardly
								reader.readAsDataURL(this.files.item(i));
							}else {
								//Throwing Error and reutn the function Empty
								throw "File is an Image";
							}
						}
					});
				},
				'xhrRequest':function()
				{

				},
				// As of Now Image Type File is Validated
				typeValidation:function(file){
					if(file.type.match("image.*"))
					{
						return true;
					}
					return false;
				},
				// Presently Event Update is Done of URL Generation
				onEventUpdate: function(){
					//On Generation Flag the Generated URL is returned.
					if(this.generateURL)
					{
						console.log(this.generatedURL);
					}
				}
		};

		//preventing plugin form multiple instantiations
		$.fn[pluginName] = function(options){
			this.each(function(){
				if(!$.data(this, "plugin_"+pluginName))
				{
					$.data(this, "plugin_"+pluginName, new Plugin(this, options));
				}
			});
			return this;
		};

	})($,window,document);
});