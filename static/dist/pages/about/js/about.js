/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_coffee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
var em_login_ctrl, getHashNotice, hashCode, hideForm, hidePreloader, initPage, initRecoveryDialog, login_ctrl, setNoticeHash, showForm, showPreloginNoticeDialog;

login_ctrl = null;

em_login_ctrl = null;



deferredResLoader.loadStyle("/static/vendor/bootstrap/css/bootstrap.min.css");

deferredResLoader.loadScript("/js/md5r.min.js");

deferredResLoader.loadScript("/js/winauth.js");

deferredResLoader.loadScript("/js/PasswordRecovery.js");

deferredResLoader.loadScript("/static/vendor/bootstrap/js/bootstrap.min.js");

deferredResLoader.loadScript("/vendor/bootstrap3-dialog/js/bootstrap-dialog.min.js");

showForm = function(form) {
  $('#overlay').css('height', "100%");
  form.fadeIn();
  if (-[1]) {
    return $('#overlay').fadeIn();
  } else {
    return $('#overlay').css('display', 'block');
  }
};

hideForm = function(form) {
  var bVisibleRecoveryForm, bVisibleSelectSchoolForm;
  form.fadeOut();
  bVisibleRecoveryForm = $("form[name=PasswordRecoveryForm]").is(":visible");
  bVisibleSelectSchoolForm = $("form[name=SelectSchoolForm]").is(":visible");
  if (!bVisibleSelectSchoolForm) {
    if (-[1]) {
      return $('#overlay').fadeOut();
    } else {
      return $('#overlay').css('display', 'none');
    }
  }
};

initRecoveryDialog = function() {
  $("[name=recoveryType]").on('click', function() {
    if (this.value === '1') {
      return $("input[name=recoveryValue]").replaceWith("<input type=\"text\" name=\"recoveryValue\" style=\"outline: none\" size=\"35\" maxlength=\"80\" />");
    } else {
      return $("input[name=recoveryValue]").replaceWith("<input type=\"text\" name=\"recoveryValue\" style=\"outline: none\" size=\"35\" maxlength=\"11\" />");
    }
  });
  $("#recovery").on('click', function() {
    showForm($('#message-password-recovery'));
    $(":radio[value='E']").prop("checked", true);
    return $("input[name=recoveryValue]").prop("style", "outline: none").prop("size", 35).prop("maxlength", 80).removeClass();
  });
  $(":radio[name='recoveryType']").on('click', function() {
    if ($("input[name='recoveryValue']").val() !== "") {
      return $("input[name='recoveryValue']").val("");
    }
  });
  $("#cexit_recovery").on('click', function() {
    return hideForm($('#message-password-recovery'));
  });
  return $("#message-password-recovery a.button-login").on('click', function() {
    return window.recoveryPassword();
  });
};

initPage = function(settings) {
  var agt, emLoginFilters, emSubmitFunc, initPromises, schoolLoginFilters, schoolSubmitFunc;
  $('ul.tabs-form').on('click', 'li:not(.current)', function() {
    $(this).addClass('current').siblings().removeClass('current').parents('div.sectiontable').find('div.box-form').eq($(this).index()).fadeIn(150).siblings('div.box-form').hide();
    return $.cookie('openForm', $('.current').prop('id'));
  });
  initPromises = [];
  if (settings.schoolLogin) {
    schoolLoginFilters = {
      country: new _login_coffee__WEBPACK_IMPORTED_MODULE_0__["filter"]('cid', true, 1, language.Generic.Login.kSelectCountry),
      state: new _login_coffee__WEBPACK_IMPORTED_MODULE_0__["filter"]('sid', settings.mobileLogin, 2, language.Generic.Login.kSelectRegion),
      province: new _login_coffee__WEBPACK_IMPORTED_MODULE_0__["filter"]('pid', true, 3, language.Generic.Login.kSelectMunicipality),
      city: new _login_coffee__WEBPACK_IMPORTED_MODULE_0__["filter"]('cn', false, 4, language.Generic.Login.kSelectCity),
      funcType: new _login_coffee__WEBPACK_IMPORTED_MODULE_0__["filter"]('sft', true, 5, language.Generic.Login.kSelectSchoolType),
      school: new _login_coffee__WEBPACK_IMPORTED_MODULE_0__["filter"]('scid', false, 6, language.Generic.Login.kSelectSchool)
    };
    schoolSubmitFunc = function(user, pw) {
      var school, userName;
      school = $('select[name=scid]').val();
      userName = user.val();
      if (school === 0) {
        alert(_login_coffee__WEBPACK_IMPORTED_MODULE_0__["lngLogin"].kFirstYouShouldSelectSchool);
        return false;
      }
      if (userName === "" || pw.val() === "") {
        alert(_login_coffee__WEBPACK_IMPORTED_MODULE_0__["lngLogin"].kEnterLoginAndPassword);
        return false;
      }
      return true;
    };
    login_ctrl = Object(_login_coffee__WEBPACK_IMPORTED_MODULE_0__["login_ctor"])();
    $(document).on("click", "#message a.button-login-marker", login_ctrl.login);
    initPromises.push(login_ctrl.init($('#message'), schoolLoginFilters, schoolSubmitFunc, settings.cacheVer, settings.addOpts));
  }
  if (settings.emLogin) {
    emLoginFilters = {
      country: new _login_coffee__WEBPACK_IMPORTED_MODULE_0__["filter"]('em_cid', true, 1, language.Generic.Login.kSelectCountry),
      state: new _login_coffee__WEBPACK_IMPORTED_MODULE_0__["filter"]('em_sid', false, 2, language.Generic.Login.kSelectRegion),
      hlevel: new _login_coffee__WEBPACK_IMPORTED_MODULE_0__["filter"]('hlevel', true, 3, language.Generic.Login.kSelectHierarchyLevel),
      em: new _login_coffee__WEBPACK_IMPORTED_MODULE_0__["filter"]('emId', false, 4, language.Generic.Login.kSelectEM)
    };
    emSubmitFunc = function(user, pw) {
      var emid, userName;
      emid = $('select[name=emid]').val();
      userName = user.val();
      if (emid === 0) {
        alert(_login_coffee__WEBPACK_IMPORTED_MODULE_0__["lngLogin"].kFirstYouShouldSelectSchool);
        return false;
      }
      if (userName === "" || pw.val() === "") {
        alert(_login_coffee__WEBPACK_IMPORTED_MODULE_0__["lngLogin"].kEnterLoginAndPassword);
        return false;
      }
      return true;
    };
    em_login_ctrl = Object(_login_coffee__WEBPACK_IMPORTED_MODULE_0__["login_ctor"])();
    $(document).on("click", "#message-em a.button-login-marker", em_login_ctrl.login);
    initPromises.push(em_login_ctrl.init($('#message-em'), emLoginFilters, emSubmitFunc, settings.cacheVer));
  }
  initPromises.push(deferredResLoader.promise());
  extDeferred.when(initPromises).then(function() {
    if (window.preLoaderRemoved) {
      showPreloginNoticeDialog();
      return;
    }
    window.preLoaderRemoved = true;
    hidePreloader(function() {
      return $('input[name="UN"]').trigger('focus');
    });
    $('div.centered > div.loginbox').addClass('appear');
    return showPreloginNoticeDialog();
  });
  initRecoveryDialog();
  if (-[1]) {
    return;
  }
  agt = navigator.userAgent.toLowerCase();
  if (agt.substr(agt.indexOf("msie") + 5, 1) === '8') {
    $('#message .info table tr td').css('padding-top', '6px');
    $('#message .info table tr td').css('padding-bottom', '6px');
    $('#message-em .info table tr td').css('padding-top', '6px');
    return $('#message-em .info table tr td').css('padding-bottom', '6px');
  }
};

hidePreloader = function(onHide) {
  var $preloader, $spinner;
  $preloader = $('#login-page-preloader');
  $spinner = $preloader.find('.spinner');
  $spinner.fadeOut();
  return $preloader.delay(350).fadeOut('slow', function() {
    if (typeof onHide === "function") {
      return onHide();
    }
  });
};

showPreloginNoticeDialog = function() {
  return getHashNotice().then(function() {
    return jsSubmit({
      action: "/webapi/settings/preloginnotice",
      method: "GET",
      auth: false
    }).then(function(settings) {
      var content, opts;
      if (settings.showPopUp) {
        content = "<div class='text-left' style='font-size: 16;'>" + settings.popUpDisplayText + "</div>";
        opts = {
          closable: false,
          buttons: [
            {
              label: settings.popUpButtonText,
              cssClass: "btn-primary center-block",
              action: function(dialog) {
                return setNoticeHash().then(function() {
                  return dialog.close();
                });
              }
            }
          ]
        };
        return $.show.message(content, language.Generic.Common.kAttention, opts);
      }
    });
  });
};

hashCode = function(str) {
  var hash, i, j, ref;
  hash = 0;
  for (i = j = 0, ref = str.length - 1; j <= ref; i = j += 1) {
    hash = ~~(((hash << 5) - hash) + str.charCodeAt(i));
  }
  return hash;
};

getHashNotice = function() {
  var curNoticeHash, deferred;
  curNoticeHash = $.cookie("hash-notice_state");
  deferred = $.Deferred();
  jsSubmit({
    action: "/webapi/settings/preloginnotice",
    method: "GET",
    auth: false
  }).then(function(settings) {
    var hashNotice;
    if (settings.showPopUp) {
      hashNotice = hashCode(settings.popUpDisplayText);
      if (hashNotice !== +curNoticeHash) {
        deferred.resolve();
      }
    }
    return deferred.reject();
  }, function() {
    return deferred.reject();
  });
  return deferred.promise();
};

setNoticeHash = function() {
  var expires;
  expires = 365 * 24 * 60 * 60;
  return jsSubmit({
    action: "/webapi/settings/preloginnotice",
    method: "GET",
    auth: false
  }).then(function(settings) {
    var date, hashPopUpDisplayText, popUpDisplayText;
    popUpDisplayText = settings.popUpDisplayText;
    if (popUpDisplayText) {
      hashPopUpDisplayText = hashCode(popUpDisplayText);
      date = new Date();
      date.setTime(date.getTime() + expires * 1000);
      return $.cookie("hash-notice_state", hashPopUpDisplayText, {
        expires: date
      });
    }
  });
};

$(document).ready(function() {
  var loadTpl, templates;
  window.preLoaderRemoved = false;
  templates = {};
  loadTpl = function(tplName, tplUrl) {
    return jsSubmit({
      action: tplUrl,
      method: 'GET',
      dataType: 'html',
      showProcessing: false,
      auth: false
    }).then(function(html) {
      return templates[tplName] = html;
    });
  };
  return $.when(jsSubmit({
    action: '/webapi/logindata',
    method: 'GET',
    showProcessing: false,
    defaultErrorHandling: false,
    auth: false
  }).fail(function(err) {
    return deferredResLoader.ready(function() {
      var ref;
      hidePreloader();
      if (err != null ? err.responseJSON : void 0) {
        $.show.error((err != null ? (ref = err.responseJSON) != null ? ref.message : void 0 : void 0) || (err != null ? err.statusText : void 0) || language.Generic.Common.kUnexpErr, "Ошибка инициализации формы входа");
        return;
      }
      $.show.error((err != null ? err.statusText : void 0) || language.Generic.Common.kUnexpErr, "Ошибка инициализации формы входа");
      if (err.responseText) {
        return document.open().write(err.responseText);
      }
    });
  })).then(function(response) {
    var currentForm, loginState, mobileAccessToken, mobileEntry, model, netschool;
    currentForm = urlHelper.getParameterByName("openForm") || $.cookie("openForm") || "";
    currentForm = currentForm.toLowerCase();
    if (currentForm !== "school" && currentForm !== "em") {
      currentForm = "school";
    }
    if (currentForm === "em" && !response.emLogin) {
      currentForm = "school";
    }
    if (currentForm === "school" && !response.schoolLogin) {
      currentForm = "em";
    }
    loginState = urlHelper.getParameterByName("loginState");
    mobileEntry = urlHelper.getParameterByName("mobile") !== null;
    mobileAccessToken = urlHelper.getParameterByName("access_token");
    model = {
      enableSms: response.enableSms,
      language: language,
      productName: response.productName,
      schoolLogin: response.schoolLogin,
      mobileLogin: mobileEntry,
      emLogin: response.emLogin,
      severalForms: response.schoolLogin && response.emLogin,
      loginState: loginState,
      signatureLogin: response.signatureLogin,
      currentForm: {
        school: currentForm === "school",
        em: currentForm === "em"
      },
      esia: false,
      cacheVer: response.cacheVer,
      windowsAuth: response.windowsAuth
    };
    if (model.productName) {
      document.title = model.productName;
    } else if (document.title) {
      model.productName = document.title;
    }
    netschool = model.schoolLogin && !model.emLogin;
    if (response.esiaLogin) {
      model.esia = {
        mainAuth: response.esiaMainAuth,
        buttonMode: response.esiaButton,
        linkMode: !response.esiaButton,
        linkText: "Вход с учетной записью портала Госуслуг",
        loginPage: response.esiaLoginPage
      };
    }
    if (response.esaLogin) {
      model.esa = {
        buttonText: "Войти через Госуслуги",
        loginPage: response.esaLoginPage
      };
    }
    if (loginState) {
      model.bindIdpAccountMessage = language.Generic.Common.kLoginAndBindNetCityAccount.replace("{0}", model.productName).replace("{1}", "ЕСИА");
    }
    if (mobileEntry) {
      currentForm = "school";
      model.currentForm.school = true;
      model.currentForm.em = false;
      model.emLogin = false;
      model.severalForms = false;
      model.addOpts = [
        {
          name: "mobile",
          value: 1
        }
      ];
      if (mobileAccessToken) {
        model.addOpts.push({
          name: "mobileAccessToken",
          value: mobileAccessToken
        });
      }
      if (model.esia) {
        model.esia.mainAuth = false;
        model.esia.loginPage += "?mobile";
        if (mobileAccessToken) {
          model.esia.loginPage += "&mobileAccessToken=" + mobileAccessToken;
        }
      }
    }
    return $.when(loadTpl('loginForm', '/static/dist/pages/about/templates/loginform.html?ver=' + response.version), loadTpl('extras_header', '/extras/about_header.html?ver=' + response.version), loadTpl('extras_footer', '/extras/about_footer.html?ver=' + response.version)).then(function() {
      var loginFormHtml, template;
      model.extras = {
        header: Handlebars.compile(templates.extras_header)(model),
        footer: Handlebars.compile(templates.extras_footer)(model)
      };
      template = Handlebars.compile(templates.loginForm);
      loginFormHtml = template(model);
      $("div.body").append(loginFormHtml);
      if (model.esia.mainAuth && !loginState) {
        $(".tabs-form").css("display", "none");
        $(".box-form").css("display", "none");
        $("#showLoginForm").on('click', function() {
          $(".tabs-form").css("display", "block");
          $('.box-form').filter('.visible').css('display', 'block');
          return $(".box-form-auth").css("display", "none");
        });
      }
      if (!model.severalForms) {
        $(".box-form").css({
          'padding-top': '0px'
        });
        $(".sectiontable").css({
          "border-top": "1px solid #225588"
        });
        $(".message-form").css({
          "padding-top": "40px"
        });
      }
      if (netschool) {
        $(".img-logo").attr({
          "src": "/vendor/custom/img/logo_netscool.png"
        });
      }
      return initPage(model);
    });
  });
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lngLogin", function() { return lngLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login_ctor", function() { return login_ctor; });
var SessionStore, _cookies;

SessionStore = __webpack_require__(3).SessionStore;

var lngLogin = {
  kFirstYouShouldSelect: language.Generic.Login.kFirstYouShouldSelect,
  kEmptyAjaxAnswer: language.Generic.Login.kEmptyAjaxAnswer,
  kErrorAjaxListLoading: language.Generic.Login.kErrorAjaxListLoading,
  kFirstYouShouldSelectSchool: language.Generic.Login.kFirstYouShouldSelectSchool,
  kEnterLoginAndPassword: language.Generic.Login.kEnterLoginAndPassword,
  kLoginByECardPossibleViaIEorChrome: language.Generic.Login.kLoginByECardPossibleViaIEorChrome,
  kECardIDWasReset: language.Generic.Login.kECardIDWasReset,
  kECardIDWasRead: language.Generic.Login.kECardIDWasRead
};

_cookies = _.chain(($.cookie("TTSLogin") || "").split('&')).map(function(cookie) {
  return cookie.split('=');
}).filter(function(cookieArr) {
  return typeof cookieArr[1] !== "undefined" && cookieArr[1];
}).object().value();

var filter = (function() {
  function filter(name1, optional, order, initItemText1) {
    this.name = name1;
    this.optional = optional;
    this.order = order;
    this.initItemText = initItemText1;
  }

  filter.prototype.getCooketVal = function() {
    var cookie;
    cookie = _.findWhere(_cookies, {
      name: this.name
    });
    return (cookie != null ? cookie.val : void 0) || -999999;
  };

  return filter;

})();

var login_ctor = function() {
  var NavEnterKeyHandler, _addOpts, _apply, _cacheVer, _constants, _container, _filters, _getAuthData, _initData, _initFilters, _login, _loginAndPass, _onChangeLastElem, _saveAccount, _sessionStore, _setOptions, _validateFunc, allowEnterPair, onLoginFormReady, onSuccessList, sendAjaxRequest;
  _container = null;
  _sessionStore = null;
  _onChangeLastElem = null;
  _cacheVer = null;
  _addOpts = null;
  _constants = {
    unselectedVal: -999999
  };
  _filters = null;
  _loginAndPass = null;
  _apply = null;
  _validateFunc = null;
  _initFilters = function(rawFilters) {
    _filters = (function() {
      var __filters, _getSelectByName, retObj;
      __filters = rawFilters;
      _getSelectByName = function(name) {
        return $('select[name=' + name + ']', _container);
      };
      retObj = {};
      retObj = _.map(rawFilters, function(filter) {
        return _getSelectByName(filter.name);
      });
      $.extend(retObj, {
        showFilter: function(filterName) {
          return this.getSelectByName(filterName).closest(".row").show();
        },
        hideFilter: function(filterName) {
          return this.getSelectByName(filterName).closest(".row").hide();
        },
        readOnlyFilter: function(filterName) {
          var parent, select, span, text;
          select = this.getSelectByName(filterName);
          parent = select.parent();
          text = $('option:selected', select).text();
          span = $('<span />').text(text);
          parent.append(span);
          return select.hide();
        },
        getNextFilter: function(filterName) {
          filter = this.getByName(filterName);
          return _.find(__filters, function(testFilter) {
            return testFilter.order === filter.order + 1;
          });
        },
        getSelectByName: _getSelectByName,
        getByName: function(name) {
          return _.find(__filters, function(filter) {
            return filter.name === name;
          });
        },
        disableAfter: function(filterName) {
          var curFilter, index, results;
          filter = this.getByName(filterName);
          results = [];
          for (index in __filters) {
            curFilter = __filters[index];
            if (curFilter.order <= filter.order) {
              continue;
            }
            results.push(_filters.getSelectByName(curFilter.name).prop('disabled', true).val(0).show().nextAll().remove());
          }
          return results;
        }
      });
      return retObj;
    })();
    _loginAndPass = $('input[name=UN], input[name=PW]', _container);
    return _apply = $('.button-login:not(.button-login-esia):not(.button-login-esa)', _container);
  };
  _setOptions = function(select, items, initItemText) {
    var i, item, jqSelect, len, option;
    jqSelect = $(select);
    jqSelect.html('');
    if (!items || !items.length || items.length <= 0) {
      return;
    }
    option = $('<option />').html(initItemText).attr('value', _constants.unselectedVal);
    jqSelect.append(option);
    for (i = 0, len = items.length; i < len; i++) {
      item = items[i];
      option = $('<option />').html(item.name).attr('value', item.id);
      $(select).append(option);
    }
    jqSelect.prop('disabled', false);
    return jqSelect.show();
  };
  _initData = function() {
    var _initSuccess, deferred, initData, prepareAction, prepareSuffix;
    deferred = $.Deferred();
    _initSuccess = function(response) {
      var currId, data, firstParam, flt, i, id, items, jqSelect, lastSelect, lastVal, len, name, select, selects;
      data = response;
      selects = $('select', _container);
      lastSelect = $('select', _container).last();
      firstParam = selects.first().attr('id');
      if (data[firstParam].length !== 0) {
        for (i = 0, len = selects.length; i < len; i++) {
          select = selects[i];
          jqSelect = $(select);
          id = jqSelect.attr('id');
          name = jqSelect.attr('name');
          flt = _filters.getByName(name);
          currId = data[name];
          items = data[id];
          _setOptions(select, items, flt.initItemText);
          jqSelect.val(currId);
          if (!items || items.length !== 1) {
            continue;
          }
          if (currId === _constants.unselectedVal) {
            currId = items[0].id;
            jqSelect.val(currId);
            if (lastSelect.attr('id') !== id) {
              sendAjaxRequest(jqSelect);
            } else {
              _filters.readOnlyFilter(name);
            }
            break;
          }
          if (currId !== _constants.unselectedVal) {
            if (flt.optional) {
              _filters.hideFilter(name);
            } else {
              _filters.readOnlyFilter(name);
            }
          }
        }
        lastVal = lastSelect.val();
        if (lastVal && lastVal > _constants.unselectedVal) {
          allowEnterPair(lastSelect);
          if (_onChangeLastElem) {
            _onChangeLastElem(lastSelect);
          }
        }
        allowEnterPair(lastSelect);
      }
      deferred.resolve();
      return onLoginFormReady();
    };
    initData = $.extend({}, _cookies, {
      cacheVer: _cacheVer
    });
    prepareSuffix = _container.attr('id').replace("message", "").replace("-", "");
    prepareAction = '/webapi/prepare' + prepareSuffix + 'loginform';
    jsSubmit({
      action: prepareAction,
      method: "get",
      auth: false,
      defaultErrorHandling: false,
      cache: true,
      data: initData,
      onError: function(response) {
        var msg, ref;
        if (response.status === 0) {
          deferred.reject("canceled");
          return;
        }
        msg = (response != null ? (ref = response.responseJSON) != null ? ref.message : void 0 : void 0) || language.Generic.Common.kUnexpErr;
        window.lalert(msg);
        return deferred.reject(msg);
      },
      onSuccess: _initSuccess
    });
    return deferred.promise();
  };
  sendAjaxRequest = function($changedElement) {
    var strAjaxQuery;
    $('input[type=text], input[type=password]', _container).prop('disabled', true);
    _filters.disableAfter($changedElement.attr('name'));
    _apply.css('display', 'none');
    if ($changedElement.prop("selectedIndex") !== 0) {
      strAjaxQuery = $('select', _container).serialize();
      strAjaxQuery += "&LASTNAME=" + $changedElement.attr("name") + "&cacheVer=" + _cacheVer;
      return jsSubmit({
        action: '/webapi/loginform',
        method: "get",
        cache: true,
        auth: false,
        data: strAjaxQuery,
        onSuccess: onSuccessList
      });
    }
  };
  NavEnterKeyHandler = function(evt) {
    if (evt.which === 13) {
      return _login();
    }
  };
  onLoginFormReady = function() {
    return $(document).trigger("login_form_ready");
  };
  onSuccessList = function(response) {
    var currFilter, currFilterSelect, data, lastFilter, lastFilterSelect;
    data = response;
    lastFilter = _filters.getByName(data.lastElem);
    lastFilterSelect = _filters.getSelectByName(data.lastElem);
    if (lastFilterSelect.children().length === 2) {
      if (lastFilter.optional) {
        _filters.hideFilter(data.lastElem);
      } else {
        _filters.readOnlyFilter(data.lastElem);
      }
    }
    currFilter = _filters.getNextFilter(data.lastElem);
    currFilterSelect = _filters.getSelectByName(currFilter.name);
    _setOptions(currFilterSelect, data.items, currFilter.initItemText);
    currFilterSelect.nextAll().remove();
    if (data.items.length === 1) {
      currFilterSelect.val(data.items[0].id);
      if (_filters.getNextFilter(currFilter.name)) {
        return sendAjaxRequest(currFilterSelect);
      } else {
        _filters.readOnlyFilter(currFilter.name);
        allowEnterPair(currFilterSelect);
        return onLoginFormReady();
      }
    } else {
      _filters.showFilter(currFilter.name);
      return onLoginFormReady();
    }
  };
  _getAuthData = (function(_this) {
    return function(pw) {
      var deferred;
      deferred = $.Deferred();
      jsSubmit({
        action: "/webapi/auth/getdata",
        method: "POST",
        auth: false,
        showProcessing: false
      }).then(function(authData) {
        var pw2;
        pw2 = hexMD5_(authData.salt + hexMD5_(pw.val()));
        pw.val(pw2.substr(0, pw.val().length));
        return deferred.resolve({
          "lt": authData.lt,
          "pw2": pw2,
          "ver": authData.ver
        });
      }).fail(function() {
        return deferred.reject();
      });
      return deferred.promise();
    };
  })(this);
  _login = function(container, validateFunc, addOpts) {
    var processing, pw, user;
    _container = _container || container;
    user = $('[name=UN]', _container);
    pw = $('[name=PW]', _container);
    _validateFunc = typeof _validateFunc === "function" ? _validateFunc : validateFunc;
    addOpts = addOpts || _addOpts || [];
    if (!_validateFunc(user, pw)) {
      return;
    }
    _container.find("input[name=UN]").trigger("blur");
    _container.find("input[name=PW]").trigger("blur");
    processing = $.show.processing();
    return _getAuthData(pw).then(function(authData) {
      var authParams;
      authParams = _container.find('select, input').serializeArray();
      authParams.push({
        name: "lt",
        value: authData.lt
      });
      authParams.push({
        name: "pw2",
        value: authData.pw2
      });
      authParams.push({
        name: "ver",
        value: authData.ver
      });
      authParams.push.apply(authParams, addOpts);
      return jsSubmit({
        action: "/webapi/login",
        data: authParams,
        showProcessing: false,
        auth: false,
        defaultErrorHandling: false,
        onError: function(response) {
          var msg, ref;
          processing.close();
          msg = (response != null ? (ref = response.responseJSON) != null ? ref.message : void 0 : void 0) || language.Generic.Common.kUnexpErr;
          return $.show.error(msg).then(function() {
            user.trigger("focus");
            return pw.val("");
          });
        }
      }).then(function(response) {
        var data, defOpts;
        if (!response.at) {
          processing.close();
          $.show.error("ошибка авторизации");
          return;
        }
        data = response.requestData || {};
        data.at = response.at;
        defOpts = {
          path: response.entryPoint,
          auth: false,
          nocache: false,
          params: data
        };
        if (response.errorMessage) {
          processing.close();
          $.show.error(response.errorMessage).then(function() {
            var options;
            options = $.extend({}, defOpts, {
              method: "GET"
            });
            delete options.params;
            return postTo(options);
          });
          return;
        }
        return _saveAccount(data.at).then(function() {
          return postTo(defOpts);
        });
      }).always(function() {
        return setDBFree();
      });
    }).fail(function() {
      return processing.close();
    });
  };
  _saveAccount = function(at) {
    if (true) {
      return Promise.resolve();
    }
    return jsSubmit({
      action: "/webapi/auth/account",
      headers: {
        at: at
      },
      method: "get",
      showProcessing: false,
      auth: false,
      defaultErrorHandling: false
    }).then(function(accountInfo) {
      if (_sessionStore) {
        return _sessionStore.put(accountInfo);
      }
    });
  };
  allowEnterPair = function($changedElement) {
    if ($changedElement.prop("selectedIndex") !== 0) {
      _loginAndPass.prop('disabled', false);
      return _apply.css('display', 'inline');
    } else {
      _loginAndPass.prop('disabled', true);
      return _apply.css('display', 'none');
    }
  };
  return {
    init: function(cont, filters, validateFunc, cacheVer, addOpts) {
      var initPromise, onChange;
      _container = cont;
      _addOpts = addOpts;
      _sessionStore = new SessionStore();
      _initFilters(filters);
      _validateFunc = validateFunc;
      _cacheVer = cacheVer;
      initPromise = _initData();
      onChange = function(elem) {
        if (_onChangeLastElem) {
          _onChangeLastElem(elem);
        }
        return allowEnterPair(elem);
      };
      $('select', _container).prop("selectedIndex", 0);
      $('select', _container).not($('select', _container).last()).on('change', function() {
        return sendAjaxRequest($(this));
      });
      $('select', _container).last().on('change', function() {
        return onChange($(this));
      });
      $('select', _container).first().prop('disabled', false);
      $('select', _container).not($('select', _container).first()).prop('disabled', true);
      $('input[type=text], input[type=password]', _container).on('keypress', function(e) {
        return NavEnterKeyHandler(e);
      });
      return initPromise;
    },
    login: _login
  };
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SessionStore = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SessionStore = /*#__PURE__*/function () {
  SessionStore.$inject = ["loginRepository"];

  /*@ngInject*/
  function SessionStore(loginRepository) {
    _classCallCheck(this, SessionStore);

    this.loginRepository = loginRepository;
  }

  _createClass(SessionStore, [{
    key: "getFromStorage",
    value: function getFromStorage() {
      var storedInfo = localStorage.getItem("session-store");

      if (!storedInfo) {
        return [];
      } //todo. handle errors


      return JSON.parse(storedInfo);
    }
  }, {
    key: "setToStorage",
    value: function setToStorage(list) {
      localStorage.setItem("session-store", JSON.stringify(list));
    }
  }, {
    key: "getRefreshTokensList",
    value: function getRefreshTokensList() {
      var storedInfo = localStorage.getItem("refresh-tokens-store");
      var list = null;

      if (storedInfo) {
        list = JSON.parse(storedInfo);
      }

      return list !== null && list !== void 0 ? list : [];
    }
  }, {
    key: "setRefreshTokensList",
    value: function setRefreshTokensList(list) {
      localStorage.setItem("refresh-tokens-store", JSON.stringify(list));
    }
  }, {
    key: "getRefreshToken",
    value: function getRefreshToken(userId, orgId) {
      return this.getRefreshTokensList().find(function (x) {
        return x.userId == userId && x.orgId == orgId;
      });
    }
  }, {
    key: "setRefreshToken",
    value: function setRefreshToken(token) {
      var list = this.getRefreshTokensList();
      var index = list.findIndex(function (x) {
        return x.userId == token.userId && x.orgId == token.orgId;
      });

      if (index >= 0) {
        Object.assign(list[index], token);
      } else {
        list.push(token);
      }

      this.setRefreshTokensList(list);
    }
  }, {
    key: "removeRefreshTokens",
    value: function removeRefreshTokens(account) {
      var list = this.getRefreshTokensList();
      var filtered = list.filter(function (x) {
        return x.userId !== account.user.id;
      });
      this.setRefreshTokensList(filtered);
    }
  }, {
    key: "removeRefreshToken",
    value: function removeRefreshToken(userId, orgId) {
      var list = this.getRefreshTokensList();
      var filtered = list.filter(function (x) {
        return x.userId !== userId && x.orgId != orgId;
      });
      this.setRefreshTokensList(filtered);
    }
  }, {
    key: "put",
    value: function put(account) {
      var list = this.getFromStorage();
      list.push(account);
      var filtered = this.getUniques(list);
      this.setToStorage(filtered);
    }
  }, {
    key: "remove",
    value: function remove(account) {
      var list = this.getFromStorage();
      var filtered = list.filter(function (a) {
        return a.user.id !== account.user.id;
      });
      this.setToStorage(filtered);
      this.removeRefreshTokens(account);
    }
  }, {
    key: "getUniques",
    value: function getUniques(accounts) {
      var grouped = arrayHelper.groupBy(accounts, function (s) {
        return s.user.id;
      });
      var filtered = grouped.map(function (gr) {
        var values = gr.values;
        var sorted = values.sort(function (a, b) {
          var aval = new Date(a.logintime).getTime() + (a.active ? 10000 : 0);
          var bval = new Date(b.logintime).getTime() + (b.active ? 10000 : 0);
          return aval - bval;
        });
        var lastLogin = sorted.pop();
        return lastLogin;
      });
      return filtered;
    }
  }, {
    key: "getStored",
    value: function getStored() {
      var list = this.getFromStorage();
      return this.getUniques(list);
    }
  }, {
    key: "getActive",
    value: function getActive() {
      var _this = this;

      var list = this.getFromStorage();
      var filtered = this.getUniques(list); // todo. не отображать слишком старые (более месяца)

      return this.loginRepository.checkAccountList(filtered).then(function (activeAccounts) {
        var saveCopy = activeAccounts.map(function (a) {
          return Object.assign({}, a);
        });
        saveCopy.forEach(function (x) {
          return x.activeToken = null;
        });

        _this.setToStorage(saveCopy);

        return activeAccounts;
      });
    }
  }]);

  return SessionStore;
}();

exports.SessionStore = SessionStore;
var arrayHelper = {
  groupBy: function groupBy(array, keyOptions) {
    var helper = {};
    var result = array.reduce(function (r, o) {
      var key;

      if (typeof keyOptions === "function") {
        key = keyOptions(o);
      } else if (Array.isArray(keyOptions)) {
        key = keyOptions.reduce(function (memo, prop) {
          return memo += o[prop] + "|";
        }, "");
      }

      var group = helper[key];

      if (!group) {
        group = {
          key: key,
          values: []
        };
        helper[key] = group;
        r.push(group);
      }

      group.values.push(o);
      return r;
    }, []);
    return result;
  }
};

/***/ })
/******/ ]);