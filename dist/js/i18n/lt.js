/*!
 * Select2 4.0.0-rc.1 - Thu, 12 Mar 2015 00:26:05 GMT
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */

(function(){if(window.define)var e=window.define;if(window.require)var t=window.require;if(window.jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd.define,t=jQuery.fn.select2.amd.require;e("select2/i18n/lt",[],function(){function e(e,t,n,r){return e%100>9&&e%100<21||e%10===0?e%10>1?n:r:t}return{inputTooLong:function(t){var n=t.input.length-t.maximum,r="Pašalinkite "+n+" simbol";return r+=e(n,"ių","ius","į"),r},inputTooShort:function(t){var n=t.minimum-t.input.length,r="Įrašykite dar "+n+" simbol";return r+=e(n,"ių","ius","į"),r},loadingMore:function(){return"Kraunama daugiau rezultatų…"},maximumSelection:function(t){var n="Jūs galite pasirinkti tik "+t.maximum+" element";return n+=e(t.maximum,"ų","us","ą"),n},noResults:function(){return"Atitikmenų nerasta"},searching:function(){return"Ieškoma…"}}}),t("jquery.select2"),jQuery.fn.select2.amd={define:e,require:t}})();