/*!
 * Select2 4.0.0-rc.1 - Thu, 12 Mar 2015 00:26:05 GMT
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */

(function(){if(window.define)var e=window.define;if(window.require)var t=window.require;if(window.jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd.define,t=jQuery.fn.select2.amd.require;e("select2/i18n/eu",[],function(){return{inputTooLong:function(e){var t=e.input.length-e.maximum,n="Idatzi ";return t==1?n+="karaktere bat":n+=t+" karaktere",n+=" gutxiago",n},inputTooShort:function(e){var t=e.minimum-e.input.length,n="Idatzi ";return t==1?n+="karaktere bat":n+=t+" karaktere",n+=" gehiago",n},loadingMore:function(){return"Emaitza gehiago kargatzen…"},maximumSelection:function(e){return e.maximum===1?"Elementu bakarra hauta dezakezu":e.maximum+" elementu hauta ditzakezu soilik"},noResults:function(){return"Ez da bat datorrenik aurkitu"},searching:function(){return"Bilatzen…"}}}),t("jquery.select2"),jQuery.fn.select2.amd={define:e,require:t}})();