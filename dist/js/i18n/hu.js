/*!
 * Select2 4.0.0-rc.1 - Thu, 12 Mar 2015 00:26:05 GMT
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */

(function(){if(window.define)var e=window.define;if(window.require)var t=window.require;if(window.jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd.define,t=jQuery.fn.select2.amd.require;e("select2/i18n/hu",[],function(){return{inputTooLong:function(e){var t=e.input.length-e.maximum;return"Túl hosszú. "+t+" karakterrel több, mint kellene."},inputTooShort:function(e){var t=e.minimum-e.input.length;return"Túl rövid. Még "+t+" karakter hiányzik."},loadingMore:function(){return"Töltés…"},maximumSelection:function(e){return"Csak "+e.maximum+" elemet lehet kiválasztani."},noResults:function(){return"Nincs találat."},searching:function(){return"Keresés…"}}}),t("jquery.select2"),jQuery.fn.select2.amd={define:e,require:t}})();