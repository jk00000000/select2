/*!
 * Select2 4.0.0-rc.1 - Thu, 12 Mar 2015 00:26:05 GMT
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */

(function(){if(window.define)var e=window.define;if(window.require)var t=window.require;if(window.jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd.define,t=jQuery.fn.select2.amd.require;e("select2/i18n/it",[],function(){return{errorLoading:function(){return"I risultati non possono essere caricati."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Per favore cancella "+t+" caratter";return t!==1?n+="i":n+="e",n},inputTooShort:function(e){var t=e.minimum-e.input.length,n="Per favore inserisci "+t+" o più caratteri";return n},loadingMore:function(){return"Caricando più risultati…"},maximumSelected:function(e){var t="Puoi selezionare solo "+e.maximum+" element";return e.maximum!==1?t+="i":t+="o",t},noResults:function(){return"Nessun risultato trovato"},searching:function(){return"Sto cercando…"}}}),t("jquery.select2"),jQuery.fn.select2.amd={define:e,require:t}})();