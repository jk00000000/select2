/*!
 * Select2 4.0.0-rc.1 - Thu, 12 Mar 2015 00:26:05 GMT
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */

(function(){if(window.define)var e=window.define;if(window.require)var t=window.require;if(window.jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd.define,t=jQuery.fn.select2.amd.require;e("select2/i18n/ro",[],function(){return{inputTooLong:function(e){var t=e.input.length-e.maximum,n="Vă rugăm să introduceți mai puțin de "+t;return n+=" caracter",n!==1&&(n+="e"),n},inputTooShort:function(e){var t=e.minimum-e.input.length,n="Vă rugăm să introduceți incă "+t;return n+=" caracter",n!==1&&(n+="e"),n},loadingMore:function(){return"Se încarcă…"},maximumSelection:function(e){var t="Aveți voie să selectați cel mult "+e.maximum;return t+=" element",t!==1&&(t+="e"),t},noResults:function(){return"Nu a fost găsit nimic"},searching:function(){return"Căutare…"}}}),t("jquery.select2"),jQuery.fn.select2.amd={define:e,require:t}})();