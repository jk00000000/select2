/*!
 * Select2 4.0.0-rc.1 - Thu, 12 Mar 2015 00:26:05 GMT
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */

(function(){if(window.define)var e=window.define;if(window.require)var t=window.require;if(window.jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd.define,t=jQuery.fn.select2.amd.require;e("select2/i18n/fi",[],function(){return{inputTooLong:function(e){var t=e.input.length-e.maximum;return"Ole hyvä ja anna "+t+" merkkiä vähemmän"},inputTooShort:function(e){var t=e.minimum-e.input.length;return"Ole hyvä ja anna "+t+" merkkiä lisää"},loadingMore:function(){return"Ladataan lisää tuloksia…"},maximumSelection:function(e){return"Voit valita ainoastaan "+e.maximum+" kpl"},noResults:function(){return"Ei tuloksia"},searching:function(){}}}),t("jquery.select2"),jQuery.fn.select2.amd={define:e,require:t}})();