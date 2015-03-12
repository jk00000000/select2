/*!
 * Select2 4.0.0-rc.1 - Thu, 12 Mar 2015 00:26:05 GMT
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */

(function(){if(window.define)var e=window.define;if(window.require)var t=window.require;if(window.jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd.define,t=jQuery.fn.select2.amd.require;e("select2/i18n/sk",[],function(){var e={2:function(e){return e?"dva":"dve"},3:function(){return"tri"},4:function(){return"štyri"}};return{inputTooLong:function(t){var n=t.input.length-t.maximum;return n==1?"Prosím, zadajte o jeden znak menej":n>=2&&n<=4?"Prosím, zadajte o "+e[n](!0)+" znaky menej":"Prosím, zadajte o "+n+" znakov menej"},inputTooShort:function(t){var n=t.minimum-t.input.length;return n==1?"Prosím, zadajte ešte jeden znak":n<=4?"Prosím, zadajte ešte ďalšie "+e[n](!0)+" znaky":"Prosím, zadajte ešte ďalších "+n+" znakov"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(t){return t.maximum==1?"Môžete zvoliť len jednu položku":t.maximum>=2&&t.maximum<=4?"Môžete zvoliť najviac "+e[t.maximum](!1)+" položky":"Môžete zvoliť najviac "+t.maximum+" položiek"},noResults:function(){return"Nenašli sa žiadne položky"},searching:function(){return"Vyhľadávanie…"}}}),t("jquery.select2"),jQuery.fn.select2.amd={define:e,require:t}})();