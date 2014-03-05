/*! Unmark Internal - http://unmark.it - v0.3.5 - 2014-03-05 - http://plainmade.com */ 
if(void 0===unmark)var unmark={};(function(e){unmark.ajax=function(t,a,n,i,r,o){var s=unmark.urlEncode(unmark.vars.csrf_token),r=void 0!==r?r:"json",o=void 0!==o?o:!0,l="csrf_token="+s+"&content_type="+r;n=unmark.empty(n)?l:n+"&"+l,e.ajax({dataType:r,cache:!1,url:t,type:a.toUpperCase(),data:n,async:o,success:function(t){e.isFunction(i)&&i(t)},error:function(t,a,n){var r={error:n,status:a,request:t};e.isFunction(i)&&i(r)}})},unmark.swapClass=function(t,a,n){var i=t;if(-1===a.indexOf("*"))return i.removeClass(a),n?i.addClass(n):i;var r=RegExp("\\s"+a.replace(/\*/g,"[A-Za-z0-9-_]+").split(" ").join("\\s|\\s")+"\\s","g");return i.each(function(t,a){for(var n=" "+a.className+" ";r.test(n);)n=n.replace(r," ");a.className=e.trim(n)}),n?i.addClass(n):i},unmark.replaceSpecial=function(e){if(void 0!==e&&null!==e){var t=null;for(var a in unmark.special_chars)t=RegExp(a,"gi"),e=e.replace(t,unmark.special_chars[a])}return e},unmark.urlEncode=function(e){return e=unmark.replaceSpecial(e),encodeURIComponent(e)},unmark.empty=function(e){var t=void 0!==e&&null!==e?e.length:0;return e===!1||""===e||null===e||0===e||void 0===e||1>t},unmark.createCookie=function(e,t,a){if(a){var n=new Date;n.setTime(n.getTime()+1e3*60*60*24*a);var i="; expires="+n.toGMTString()}else var i="";document.cookie=e+"="+t+i+"; path=/"},unmark.readCookie=function(e){for(var t=e+"=",a=document.cookie.split(";"),n=0;a.length>n;n++){for(var i=a[n];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return null},unmark.prettyLink=function(e){return e=e.replace(/https?:\/\/(www.)?/,""),"/"===e.substr(-1)&&(e=e.substr(0,e.length-1)),e},unmark.read_query_str=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=RegExp("[\\?&]"+e+"=([^&#]*)"),a=t.exec(location.search);return null==a?"":decodeURIComponent(a[1].replace(/\+/g," "))},unmark.extendFunction=function(e,t){this[e]=function(e,t,a){return function(){var n=t.apply(e,arguments),i=a.apply(e,arguments);return null!==i?i:n}}(this,this[e],t)}})(window.jQuery),function(e){e(document).ready(function(){function t(e,t){var a=e?"error":"";r.message.removeClass("error").addClass(a).text(t).fadeIn()}function a(e){e?r.submitbtn.find("i").removeClass("icon-go").addClass("icon-spinner"):r.submitbtn.find("i").removeClass("icon-spinner").addClass("icon-go")}function n(){a(!1),r.submitbtn.fadeOut(),r.firstpass.val(""),r.secondpass.val("").slideUp()}function i(e){unmark.ajax("/tools/resetPassword","post",e,function(e){if(n(),e.success)t(!1,"Your password has been changed. Redirecting now..."),setTimeout(function(){window.location.href="/"},3e3);else{if(e.errors[91]!==void 0)return t(!0,"Invalid Token, Please check your email or contact support.");t(!0,"Password must contain both lower and uppercase letters and at least one number.")}})}var r={};r.helper=e(".gethere"),r.helptrigger=e(".forgot-pass"),r.firstpass=e("#password"),r.secondpass=e("#password2"),r.submitbtn=e(".login-submit"),r.resetform=e("#unmarkReset"),r.message=e(".response-message"),r.helptrigger.on("click",function(e){e.preventDefault(),r.helper.fadeToggle()}),r.firstpass.on("keypress change",function(){r.message.fadeOut(),r.secondpass.fadeIn()}),r.secondpass.on("keypress change",function(){r.submitbtn.fadeIn()}),r.resetform.on("submit",function(e){e.preventDefault();var o,s=r.firstpass.val(),l=r.secondpass.val(),c=unmark.vars.token;a(!0),s===l?(o="token="+c+"&password="+s,i(o)):(n(),t(!0,"Passwords do not match. Try again."))})})}(window.jQuery),function(e){e(document).ready(function(){function t(t,a){t===!0?s.login_wrapper.animate({top:"-500px"},500,function(){e(this).hide(),s.login_spinner.fadeIn()}):s.login_spinner.fadeOut(400,function(){e(this).hide(),s.login_wrapper.show().animate({top:"0"},500),a&&i(!0,a)})}function a(e){s.login_spinner.fadeOut(400,function(){s.login_success.fadeIn(400,function(){setTimeout(function(){window.location.href=e},800)})})}function n(e){unmark.ajax("/login","post",e,function(e){e.success===!0?a(e.redirect_url):t(!1,e.message)})}function i(e,t){var a=s.pass_wrapper.is(":visible")?s.pass_wrapper:s.login_wrapper,n=e?"error":"";response=a.find(".response-message"),a.find("button").hide(),a.find("#password").val(""),response.removeClass("error").addClass(n).text(t).fadeIn()}function r(){s.pass_wrapper.is(":visible")?s.pass_wrapper.animate({top:"-500px"},500,function(){e(this).hide(),t()}):s.login_wrapper.animate({top:"-500px"},500,function(){e(this).hide(),s.pass_wrapper.show().animate({top:"0"},500)})}function o(){var t=e(".login-page-bottom");t.is(":visible")?(t.fadeOut(),s.about_page.fadeOut().delay().fadeIn(800),s.login_page.animate({top:"-130%"},1e3)):(s.about_page.fadeOut(),s.login_page.animate({top:"0"},1e3,function(){t.fadeIn(800)}))}var s={};s.message=e(".response-message"),s.login_wrapper=e(".loginWrapper"),s.login_spinner=e(".unmark-spinner"),s.login_success=e(".unmark-success"),s.login_form=e("#unmarkLogin"),s.pass_form=e("#unmarkForgotPass"),s.login_submit=e(".login-submit"),s.forget_submit=e(".forgot-submit"),s.input_fields=e("input.field-input"),s.helper_buttom=e(".forgot-pass"),s.pass_wrapper=e(".forgotPassWrapper"),s.login_page=e("#unmark_login_page"),s.about_page=e("#unmark_about_page"),s.login_form.on("submit",function(a){a.preventDefault(),t(!0);var i=e("#email").val(),r=e("#password").val(),o="email="+unmark.urlEncode(i)+"&password="+unmark.urlEncode(r);setTimeout(function(){n(o)},1500)}),s.pass_form.on("submit",function(t){t.preventDefault(),s.forget_submit.find("i").removeClass("icon-go").addClass("icon-spinner");var a=e("#forgot_email").val(),n="email="+unmark.urlEncode(a);unmark.ajax("/tools/forgotPassword","post",n,function(e){e.success?i(!1,"A confirmation link will be sent via email."):i(!0,"Email not recogonized"),s.forget_submit.find("i").removeClass("icon-spinner").addClass("icon-go")})}),s.input_fields.on("change",function(){s.login_submit.fadeIn(),s.message.slideUp()}),s.pass_form.find("input.field-input").on("keypress change",function(){s.forget_submit.fadeIn(),s.message.slideUp()}),s.helper_buttom.on("click",function(e){e.preventDefault(),r()}),e(".toggle_welcome").on("click",function(e){e.preventDefault(),o()})})}(window.jQuery),function(e){function t(e,t,a){var n=t?"error":"";e.parent().find(".response-message").removeClass("error").addClass(n).text(a).fadeIn()}function a(e,t){var a=e.find(".login-submit i");t?a.removeClass("icon-go").addClass("icon-spinner"):a.removeClass("icon-spinner").addClass("icon-go")}unmark.register_user=function(e){var n,i=e.find("#email").val(),r=e.find("#password").val(),o=e.find("#password2").val();return r!==o?t(e,!0,"The passwords must match."):(a(e,!0),n="email="+unmark.urlEncode(i)+"&password="+unmark.urlEncode(r),unmark.ajax("/register/user","post",n,function(n){n.user?(t(e,!1,"You are now registered, logging you in..."),setTimeout(function(){window.location.href="/"},2500)):(a(e,!1),t(e,!0,"Your email or password is not valid. Password must be at least six chars long, have one capital, one lowecase and one number "))}),void 0)},e(document).ready(function(){e("#register_user").on("submit",function(t){t.preventDefault(),unmark.register_user(e(this))})})}(window.jQuery);