/*!
 * Select2 4.0.0-rc.1 - Thu, 12 Mar 2015 00:26:05 GMT
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */

(function(){if(window.define)var e=window.define;if(window.require)var t=window.require;if(window.jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd.define,t=jQuery.fn.select2.amd.require;e("select2/i18n/th",[],function(){return{inputTooLong:function(e){var t=e.input.length-e.maximum,n="โปรดลบออก "+t+" ตัวอักษร";return n},inputTooShort:function(e){var t=e.minimum-e.input.length,n="โปรดพิมพ์เพิ่มอีก "+t+" ตัวอักษร";return n},loadingMore:function(){return"กำลังค้นข้อมูลเพิ่ม…"},maximumSelected:function(e){var t="คุณสามารถเลือกได้ไม่เกิน "+e.maximum+" รายการ";return t},noResults:function(){return"ม่พบข้อมูล"},searching:function(){return"กำลังค้นข้อมูล…"}}}),t("jquery.select2"),jQuery.fn.select2.amd={define:e,require:t}})();