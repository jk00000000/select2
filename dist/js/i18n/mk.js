/*!
 * Select2 4.0.0-rc.1 - Thu, 12 Mar 2015 00:26:05 GMT
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */

(function(){if(window.define)var e=window.define;if(window.require)var t=window.require;if(window.jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd.define,t=jQuery.fn.select2.amd.require;e("select2/i18n/mk",[],function(){return{inputTooLong:function(e){var t=e.input.length-e.maximum,n="Ве молиме внесете "+e.maximum+" помалку карактер";return e.maximum!==1&&(n+="и"),n},inputTooShort:function(e){var t=e.minimum-e.input.length,n="Ве молиме внесете уште "+e.maximum+" карактер";return e.maximum!==1&&(n+="и"),n},loadingMore:function(){return"Вчитување резултати…"},maximumSelection:function(e){var t="Можете да изберете само "+e.maximum+" ставк";return e.maximum===1?t+="а":t+="и",t},noResults:function(){return"Нема пронајдено совпаѓања"},searching:function(){return"Пребарување…"}}}),t("jquery.select2"),jQuery.fn.select2.amd={define:e,require:t}})();