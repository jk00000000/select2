/*!
 * Select2 4.0.0-rc.1 - Thu, 12 Mar 2015 00:26:05 GMT
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */

(function(){if(window.define)var e=window.define;if(window.require)var t=window.require;if(window.jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd.define,t=jQuery.fn.select2.amd.require;e("select2/i18n/az",[],function(){return{inputTooLong:function(e){var t=e.input.length-e.maximum;return t+" simvol silin"},inputTooShort:function(e){var t=e.minimum-e.input.length;return t+" simvol daxil edin"},loadingMore:function(){return"Daha çox nəticə yüklənir…"},maximumSelected:function(e){return"Sadəcə "+e.maximum+" element seçə bilərsiniz"},noResults:function(){return"Nəticə tapılmadı"},searching:function(){return"Axtarılır…"}}}),t("jquery.select2"),jQuery.fn.select2.amd={define:e,require:t}})();