/*!
 * Select2 4.0.0-rc.1 - Thu, 12 Mar 2015 00:26:05 GMT
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */

(function(){if(window.define)var e=window.define;if(window.require)var t=window.require;if(window.jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd.define,t=jQuery.fn.select2.amd.require;e("select2/i18n/id",[],function(){return{inputTooLong:function(e){var t=e.input.length-e.maximum;return"Hapuskan "+t+" huruf"},inputTooShort:function(e){var t=e.minimum-e.input.length;return"Masukkan "+t+" huruf lagi"},loadingMore:function(){return"Mengambil data…"},maximumSelection:function(e){return"Anda hanya dapat memilih "+e.maximum+" pilihan"},noResults:function(){return"Tidak ada data yang sesuai"},searching:function(){return"Mencari…"}}}),t("jquery.select2"),jQuery.fn.select2.amd={define:e,require:t}})();