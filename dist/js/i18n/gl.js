/*!
 * Select2 4.0.0-rc.1 - Thu, 12 Mar 2015 00:26:05 GMT
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */

(function(){if(window.define)var e=window.define;if(window.require)var t=window.require;if(window.jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd.define,t=jQuery.fn.select2.amd.require;e("select2/i18n/gl",[],function(){return{inputTooLong:function(e){var t=e.input.length-e.maximum,n="Engada ";return t===1?n+="un carácter":n+=t+" caracteres",n},inputTooShort:function(e){var t=e.minimum-e.input.length,n="Elimine ";return t===1?n+="un carácter":n+=t+" caracteres",n},loadingMore:function(){return"Cargando máis resultados…"},maximumSelection:function(e){var t="Só pode ";return e.maximum===1?t+="un elemento":t+=e.maximum+" elementos",t},noResults:function(){return"Non se atoparon resultados"},searching:function(){return"Buscando…"}}}),t("jquery.select2"),jQuery.fn.select2.amd={define:e,require:t}})();