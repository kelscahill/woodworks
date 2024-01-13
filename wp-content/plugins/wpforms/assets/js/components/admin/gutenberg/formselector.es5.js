(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/* global wpforms_gutenberg_form_selector, Choices, JSX, DOM */
/* jshint es3: false, esversion: 6 */

/**
 * Gutenberg editor block.
 *
 * @since 1.8.1
 */
var WPForms = window.WPForms || {};
WPForms.FormSelector = WPForms.FormSelector || function (document, window, $) {
  var _wp = wp,
    _wp$serverSideRender = _wp.serverSideRender,
    ServerSideRender = _wp$serverSideRender === void 0 ? wp.components.ServerSideRender : _wp$serverSideRender;
  var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    Fragment = _wp$element.Fragment,
    useState = _wp$element.useState,
    createInterpolateElement = _wp$element.createInterpolateElement;
  var registerBlockType = wp.blocks.registerBlockType;
  var _ref = wp.blockEditor || wp.editor,
    InspectorControls = _ref.InspectorControls,
    InspectorAdvancedControls = _ref.InspectorAdvancedControls,
    PanelColorSettings = _ref.PanelColorSettings;
  var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
    Placeholder = _wp$components.Placeholder,
    Flex = _wp$components.Flex,
    FlexBlock = _wp$components.FlexBlock,
    __experimentalUnitControl = _wp$components.__experimentalUnitControl,
    TextareaControl = _wp$components.TextareaControl,
    Button = _wp$components.Button,
    Modal = _wp$components.Modal;
  var _wpforms_gutenberg_fo = wpforms_gutenberg_form_selector,
    strings = _wpforms_gutenberg_fo.strings,
    defaults = _wpforms_gutenberg_fo.defaults,
    sizes = _wpforms_gutenberg_fo.sizes,
    urls = _wpforms_gutenberg_fo.urls,
    isPro = _wpforms_gutenberg_fo.isPro;
  var defaultStyleSettings = defaults;
  var __ = wp.i18n.__;

  /**
   * List of forms.
   *
   * Default value is localized in FormSelector.php.
   *
   * @since 1.8.4
   *
   * @type {Object}
   */
  var formList = wpforms_gutenberg_form_selector.forms;

  /**
   * Blocks runtime data.
   *
   * @since 1.8.1
   *
   * @type {Object}
   */
  var blocks = {};

  /**
   * Whether it is needed to trigger server rendering.
   *
   * @since 1.8.1
   *
   * @type {boolean}
   */
  var triggerServerRender = true;

  /**
   * Popup container.
   *
   * @since 1.8.3
   *
   * @type {Object}
   */
  var $popup = {};

  /**
   * Track fetch status.
   *
   * @since 1.8.4
   *
   * @type {boolean}
   */
  var isFetching = false;

  /**
   * Public functions and properties.
   *
   * @since 1.8.1
   *
   * @type {Object}
   */
  var app = {
    /**
     * Start the engine.
     *
     * @since 1.8.1
     */
    init: function init() {
      app.initDefaults();
      app.registerBlock();
      $(app.ready);
    },
    /**
     * Document ready.
     *
     * @since 1.8.1
     */
    ready: function ready() {
      app.events();
    },
    /**
     * Events.
     *
     * @since 1.8.1
     */
    events: function events() {
      $(window).on('wpformsFormSelectorEdit', _.debounce(app.blockEdit, 250)).on('wpformsFormSelectorFormLoaded', _.debounce(app.formLoaded, 250));
    },
    /**
     * Get fresh list of forms via REST-API.
     *
     * @since 1.8.4
     *
     * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-api-fetch/
     */
    getForms: function getForms() {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!isFetching) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              // Set the flag to true indicating a fetch is in progress.
              isFetching = true;
              _context.prev = 3;
              _context.next = 6;
              return wp.apiFetch({
                path: '/wpforms/v1/forms/',
                method: 'GET',
                cache: 'no-cache'
              });
            case 6:
              response = _context.sent;
              // Update the form list.
              formList = response.forms;
              _context.next = 13;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](3);
              // eslint-disable-next-line no-console
              console.error(_context.t0);
            case 13:
              _context.prev = 13;
              isFetching = false;
              return _context.finish(13);
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[3, 10, 13, 16]]);
      }))();
    },
    /**
     * Open builder popup.
     *
     * @since 1.6.2
     *
     * @param {string} clientID Block Client ID.
     */
    openBuilderPopup: function openBuilderPopup(clientID) {
      if ($.isEmptyObject($popup)) {
        var tmpl = $('#wpforms-gutenberg-popup');
        var parent = $('#wpwrap');
        parent.after(tmpl);
        $popup = parent.siblings('#wpforms-gutenberg-popup');
      }
      var url = wpforms_gutenberg_form_selector.get_started_url,
        $iframe = $popup.find('iframe');
      app.builderCloseButtonEvent(clientID);
      $iframe.attr('src', url);
      $popup.fadeIn();
    },
    /**
     * Close button (inside the form builder) click event.
     *
     * @since 1.8.3
     *
     * @param {string} clientID Block Client ID.
     */
    builderCloseButtonEvent: function builderCloseButtonEvent(clientID) {
      $popup.off('wpformsBuilderInPopupClose').on('wpformsBuilderInPopupClose', function (e, action, formId, formTitle) {
        if (action !== 'saved' || !formId) {
          return;
        }

        // Insert a new block when a new form is created from the popup to update the form list and attributes.
        var newBlock = wp.blocks.createBlock('wpforms/form-selector', {
          formId: formId.toString() // Expects string value, make sure we insert string.
        });

        // eslint-disable-next-line camelcase
        formList = [{
          ID: formId,
          post_title: formTitle
        }];

        // Insert a new block.
        wp.data.dispatch('core/block-editor').removeBlock(clientID);
        wp.data.dispatch('core/block-editor').insertBlocks(newBlock);
      });
    },
    /**
     * Register block.
     *
     * @since 1.8.1
     */
    // eslint-disable-next-line max-lines-per-function
    registerBlock: function registerBlock() {
      registerBlockType('wpforms/form-selector', {
        title: strings.title,
        description: strings.description,
        icon: app.getIcon(),
        keywords: strings.form_keywords,
        category: 'widgets',
        attributes: app.getBlockAttributes(),
        supports: {
          customClassName: app.hasForms()
        },
        example: {
          attributes: {
            preview: true
          }
        },
        edit: function edit(props) {
          // Get fresh list of forms.
          app.getForms();
          var attributes = props.attributes;
          var formOptions = app.getFormOptions();
          var handlers = app.getSettingsFieldsHandlers(props);

          // Store block clientId in attributes.
          if (!attributes.clientId) {
            // We just want client ID to update once.
            // The block editor doesn't have a fixed block ID, so we need to get it on the initial load, but only once.
            props.setAttributes({
              clientId: props.clientId
            });
          }

          // Main block settings.
          var jsx = [app.jsxParts.getMainSettings(attributes, handlers, formOptions)];

          // Block preview picture.
          if (!app.hasForms()) {
            jsx.push(app.jsxParts.getEmptyFormsPreview(props));
            return jsx;
          }
          var sizeOptions = app.getSizeOptions();

          // Form style settings & block content.
          if (attributes.formId) {
            jsx.push(app.jsxParts.getStyleSettings(props, handlers, sizeOptions), app.jsxParts.getAdvancedSettings(props, handlers), app.jsxParts.getBlockFormContent(props));
            handlers.updateCopyPasteContent();
            $(window).trigger('wpformsFormSelectorEdit', [props]);
            return jsx;
          }

          // Block preview picture.
          if (attributes.preview) {
            jsx.push(app.jsxParts.getBlockPreview());
            return jsx;
          }

          // Block placeholder (form selector).
          jsx.push(app.jsxParts.getBlockPlaceholder(props.attributes, handlers, formOptions));
          return jsx;
        },
        save: function save() {
          return null;
        }
      });
    },
    /**
     * Init default style settings.
     *
     * @since 1.8.1
     */
    initDefaults: function initDefaults() {
      ['formId', 'copyPasteJsonValue'].forEach(function (key) {
        return delete defaultStyleSettings[key];
      });
    },
    /**
     * Check if site has forms.
     *
     * @since 1.8.3
     *
     * @return {boolean} Whether site has at least one form.
     */
    hasForms: function hasForms() {
      return formList.length >= 1;
    },
    /**
     * Block JSX parts.
     *
     * @since 1.8.1
     *
     * @type {Object}
     */
    jsxParts: {
      /**
       * Get main settings JSX code.
       *
       * @since 1.8.1
       *
       * @param {Object} attributes  Block attributes.
       * @param {Object} handlers    Block event handlers.
       * @param {Object} formOptions Form selector options.
       *
       * @return {JSX.Element} Main setting JSX code.
       */
      getMainSettings: function getMainSettings(attributes, handlers, formOptions) {
        if (!app.hasForms()) {
          return app.jsxParts.printEmptyFormsNotice(attributes.clientId);
        }
        return /*#__PURE__*/React.createElement(InspectorControls, {
          key: "wpforms-gutenberg-form-selector-inspector-main-settings"
        }, /*#__PURE__*/React.createElement(PanelBody, {
          className: "wpforms-gutenberg-panel",
          title: strings.form_settings
        }, /*#__PURE__*/React.createElement(SelectControl, {
          label: strings.form_selected,
          value: attributes.formId,
          options: formOptions,
          onChange: function onChange(value) {
            return handlers.attrChange('formId', value);
          }
        }), attributes.formId ? /*#__PURE__*/React.createElement("p", {
          className: "wpforms-gutenberg-form-selector-actions"
        }, /*#__PURE__*/React.createElement("a", {
          href: urls.form_url.replace('{ID}', attributes.formId),
          rel: "noreferrer",
          target: "_blank"
        }, strings.form_edit), isPro && /*#__PURE__*/React.createElement(React.Fragment, null, "\xA0\xA0|\xA0\xA0", /*#__PURE__*/React.createElement("a", {
          href: urls.entries_url.replace('{ID}', attributes.formId),
          rel: "noreferrer",
          target: "_blank"
        }, strings.form_entries))) : null, /*#__PURE__*/React.createElement(ToggleControl, {
          label: strings.show_title,
          checked: attributes.displayTitle,
          onChange: function onChange(value) {
            return handlers.attrChange('displayTitle', value);
          }
        }), /*#__PURE__*/React.createElement(ToggleControl, {
          label: strings.show_description,
          checked: attributes.displayDesc,
          onChange: function onChange(value) {
            return handlers.attrChange('displayDesc', value);
          }
        }), /*#__PURE__*/React.createElement("p", {
          className: "wpforms-gutenberg-panel-notice"
        }, /*#__PURE__*/React.createElement("strong", null, strings.panel_notice_head), strings.panel_notice_text, /*#__PURE__*/React.createElement("a", {
          href: strings.panel_notice_link,
          rel: "noreferrer",
          target: "_blank"
        }, strings.panel_notice_link_text))));
      },
      /**
       * Print empty forms notice.
       *
       * @since 1.8.3
       *
       * @param {string} clientId Block client ID.
       *
       * @return {JSX.Element} Field styles JSX code.
       */
      printEmptyFormsNotice: function printEmptyFormsNotice(clientId) {
        return /*#__PURE__*/React.createElement(InspectorControls, {
          key: "wpforms-gutenberg-form-selector-inspector-main-settings"
        }, /*#__PURE__*/React.createElement(PanelBody, {
          className: "wpforms-gutenberg-panel",
          title: strings.form_settings
        }, /*#__PURE__*/React.createElement("p", {
          className: "wpforms-gutenberg-panel-notice wpforms-warning wpforms-empty-form-notice",
          style: {
            display: 'block'
          }
        }, /*#__PURE__*/React.createElement("strong", null, __('You haven’t created a form, yet!', 'wpforms-lite')), __('What are you waiting for?', 'wpforms-lite')), /*#__PURE__*/React.createElement("button", {
          type: "button",
          className: "get-started-button components-button is-secondary",
          onClick: function onClick() {
            app.openBuilderPopup(clientId);
          }
        }, __('Get Started', 'wpforms-lite'))));
      },
      /**
       * Get Field styles JSX code.
       *
       * @since 1.8.1
       *
       * @param {Object} props       Block properties.
       * @param {Object} handlers    Block event handlers.
       * @param {Object} sizeOptions Size selector options.
       *
       * @return {Object} Field styles JSX code.
       */
      getFieldStyles: function getFieldStyles(props, handlers, sizeOptions) {
        // eslint-disable-line max-lines-per-function
        return /*#__PURE__*/React.createElement(PanelBody, {
          className: app.getPanelClass(props),
          title: strings.field_styles
        }, /*#__PURE__*/React.createElement("p", {
          className: "wpforms-gutenberg-panel-notice wpforms-use-modern-notice"
        }, /*#__PURE__*/React.createElement("strong", null, strings.use_modern_notice_head), strings.use_modern_notice_text, " ", /*#__PURE__*/React.createElement("a", {
          href: strings.use_modern_notice_link,
          rel: "noreferrer",
          target: "_blank"
        }, strings.learn_more)), /*#__PURE__*/React.createElement("p", {
          className: "wpforms-gutenberg-panel-notice wpforms-warning wpforms-lead-form-notice",
          style: {
            display: 'none'
          }
        }, /*#__PURE__*/React.createElement("strong", null, strings.lead_forms_panel_notice_head), strings.lead_forms_panel_notice_text), /*#__PURE__*/React.createElement(Flex, {
          gap: 4,
          align: "flex-start",
          className: 'wpforms-gutenberg-form-selector-flex',
          justify: "space-between"
        }, /*#__PURE__*/React.createElement(FlexBlock, null, /*#__PURE__*/React.createElement(SelectControl, {
          label: strings.size,
          value: props.attributes.fieldSize,
          options: sizeOptions,
          onChange: function onChange(value) {
            return handlers.styleAttrChange('fieldSize', value);
          }
        })), /*#__PURE__*/React.createElement(FlexBlock, null, /*#__PURE__*/React.createElement(__experimentalUnitControl, {
          label: strings.border_radius,
          value: props.attributes.fieldBorderRadius,
          isUnitSelectTabbable: true,
          onChange: function onChange(value) {
            return handlers.styleAttrChange('fieldBorderRadius', value);
          }
        }))), /*#__PURE__*/React.createElement("div", {
          className: "wpforms-gutenberg-form-selector-color-picker"
        }, /*#__PURE__*/React.createElement("div", {
          className: "wpforms-gutenberg-form-selector-control-label"
        }, strings.colors), /*#__PURE__*/React.createElement(PanelColorSettings, {
          __experimentalIsRenderedInSidebar: true,
          enableAlpha: true,
          showTitle: false,
          className: "wpforms-gutenberg-form-selector-color-panel",
          colorSettings: [{
            value: props.attributes.fieldBackgroundColor,
            onChange: function onChange(value) {
              return handlers.styleAttrChange('fieldBackgroundColor', value);
            },
            label: strings.background
          }, {
            value: props.attributes.fieldBorderColor,
            onChange: function onChange(value) {
              return handlers.styleAttrChange('fieldBorderColor', value);
            },
            label: strings.border
          }, {
            value: props.attributes.fieldTextColor,
            onChange: function onChange(value) {
              return handlers.styleAttrChange('fieldTextColor', value);
            },
            label: strings.text
          }]
        })));
      },
      /**
       * Get Label styles JSX code.
       *
       * @since 1.8.1
       *
       * @param {Object} props       Block properties.
       * @param {Object} handlers    Block event handlers.
       * @param {Object} sizeOptions Size selector options.
       *
       * @return {Object} Label styles JSX code.
       */
      getLabelStyles: function getLabelStyles(props, handlers, sizeOptions) {
        return /*#__PURE__*/React.createElement(PanelBody, {
          className: app.getPanelClass(props),
          title: strings.label_styles
        }, /*#__PURE__*/React.createElement(SelectControl, {
          label: strings.size,
          value: props.attributes.labelSize,
          className: "wpforms-gutenberg-form-selector-fix-bottom-margin",
          options: sizeOptions,
          onChange: function onChange(value) {
            return handlers.styleAttrChange('labelSize', value);
          }
        }), /*#__PURE__*/React.createElement("div", {
          className: "wpforms-gutenberg-form-selector-color-picker"
        }, /*#__PURE__*/React.createElement("div", {
          className: "wpforms-gutenberg-form-selector-control-label"
        }, strings.colors), /*#__PURE__*/React.createElement(PanelColorSettings, {
          __experimentalIsRenderedInSidebar: true,
          enableAlpha: true,
          showTitle: false,
          className: "wpforms-gutenberg-form-selector-color-panel",
          colorSettings: [{
            value: props.attributes.labelColor,
            onChange: function onChange(value) {
              return handlers.styleAttrChange('labelColor', value);
            },
            label: strings.label
          }, {
            value: props.attributes.labelSublabelColor,
            onChange: function onChange(value) {
              return handlers.styleAttrChange('labelSublabelColor', value);
            },
            label: strings.sublabel_hints.replace('&amp;', '&')
          }, {
            value: props.attributes.labelErrorColor,
            onChange: function onChange(value) {
              return handlers.styleAttrChange('labelErrorColor', value);
            },
            label: strings.error_message
          }]
        })));
      },
      /**
       * Get Button styles JSX code.
       *
       * @since 1.8.1
       *
       * @param {Object} props       Block properties.
       * @param {Object} handlers    Block event handlers.
       * @param {Object} sizeOptions Size selector options.
       *
       * @return {Object}  Button styles JSX code.
       */
      getButtonStyles: function getButtonStyles(props, handlers, sizeOptions) {
        return /*#__PURE__*/React.createElement(PanelBody, {
          className: app.getPanelClass(props),
          title: strings.button_styles
        }, /*#__PURE__*/React.createElement(Flex, {
          gap: 4,
          align: "flex-start",
          className: 'wpforms-gutenberg-form-selector-flex',
          justify: "space-between"
        }, /*#__PURE__*/React.createElement(FlexBlock, null, /*#__PURE__*/React.createElement(SelectControl, {
          label: strings.size,
          value: props.attributes.buttonSize,
          options: sizeOptions,
          onChange: function onChange(value) {
            return handlers.styleAttrChange('buttonSize', value);
          }
        })), /*#__PURE__*/React.createElement(FlexBlock, null, /*#__PURE__*/React.createElement(__experimentalUnitControl, {
          onChange: function onChange(value) {
            return handlers.styleAttrChange('buttonBorderRadius', value);
          },
          label: strings.border_radius,
          isUnitSelectTabbable: true,
          value: props.attributes.buttonBorderRadius
        }))), /*#__PURE__*/React.createElement("div", {
          className: "wpforms-gutenberg-form-selector-color-picker"
        }, /*#__PURE__*/React.createElement("div", {
          className: "wpforms-gutenberg-form-selector-control-label"
        }, strings.colors), /*#__PURE__*/React.createElement(PanelColorSettings, {
          __experimentalIsRenderedInSidebar: true,
          enableAlpha: true,
          showTitle: false,
          className: "wpforms-gutenberg-form-selector-color-panel",
          colorSettings: [{
            value: props.attributes.buttonBackgroundColor,
            onChange: function onChange(value) {
              return handlers.styleAttrChange('buttonBackgroundColor', value);
            },
            label: strings.background
          }, {
            value: props.attributes.buttonTextColor,
            onChange: function onChange(value) {
              return handlers.styleAttrChange('buttonTextColor', value);
            },
            label: strings.text
          }]
        }), /*#__PURE__*/React.createElement("div", {
          className: "wpforms-gutenberg-form-selector-legend wpforms-button-color-notice"
        }, strings.button_color_notice)));
      },
      /**
       * Get style settings JSX code.
       *
       * @since 1.8.1
       *
       * @param {Object} props       Block properties.
       * @param {Object} handlers    Block event handlers.
       * @param {Object} sizeOptions Size selector options.
       *
       * @return {Object} Inspector controls JSX code.
       */
      getStyleSettings: function getStyleSettings(props, handlers, sizeOptions) {
        return /*#__PURE__*/React.createElement(InspectorControls, {
          key: "wpforms-gutenberg-form-selector-style-settings"
        }, app.jsxParts.getFieldStyles(props, handlers, sizeOptions), app.jsxParts.getLabelStyles(props, handlers, sizeOptions), app.jsxParts.getButtonStyles(props, handlers, sizeOptions));
      },
      /**
       * Get advanced settings JSX code.
       *
       * @since 1.8.1
       *
       * @param {Object} props    Block properties.
       * @param {Object} handlers Block event handlers.
       *
       * @return {Object} Inspector advanced controls JSX code.
       */
      getAdvancedSettings: function getAdvancedSettings(props, handlers) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        var _useState = useState(false),
          _useState2 = _slicedToArray(_useState, 2),
          isOpen = _useState2[0],
          setOpen = _useState2[1];
        var openModal = function openModal() {
          return setOpen(true);
        };
        var closeModal = function closeModal() {
          return setOpen(false);
        };
        return /*#__PURE__*/React.createElement(InspectorAdvancedControls, null, /*#__PURE__*/React.createElement("div", {
          className: app.getPanelClass(props)
        }, /*#__PURE__*/React.createElement(TextareaControl, {
          label: strings.copy_paste_settings,
          rows: "4",
          spellCheck: "false",
          value: props.attributes.copyPasteJsonValue,
          onChange: function onChange(value) {
            return handlers.pasteSettings(value);
          }
        }), /*#__PURE__*/React.createElement("div", {
          className: "wpforms-gutenberg-form-selector-legend",
          dangerouslySetInnerHTML: {
            __html: strings.copy_paste_notice
          }
        }), /*#__PURE__*/React.createElement(Button, {
          className: "wpforms-gutenberg-form-selector-reset-button",
          onClick: openModal
        }, strings.reset_style_settings)), isOpen && /*#__PURE__*/React.createElement(Modal, {
          className: "wpforms-gutenberg-modal",
          title: strings.reset_style_settings,
          onRequestClose: closeModal
        }, /*#__PURE__*/React.createElement("p", null, strings.reset_settings_confirm_text), /*#__PURE__*/React.createElement(Flex, {
          gap: 3,
          align: "center",
          justify: "flex-end"
        }, /*#__PURE__*/React.createElement(Button, {
          isSecondary: true,
          onClick: closeModal
        }, strings.btn_no), /*#__PURE__*/React.createElement(Button, {
          isPrimary: true,
          onClick: function onClick() {
            closeModal();
            handlers.resetSettings();
          }
        }, strings.btn_yes_reset))));
      },
      /**
       * Get block content JSX code.
       *
       * @since 1.8.1
       *
       * @param {Object} props Block properties.
       *
       * @return {JSX.Element} Block content JSX code.
       */
      getBlockFormContent: function getBlockFormContent(props) {
        if (triggerServerRender) {
          return /*#__PURE__*/React.createElement(ServerSideRender, {
            key: "wpforms-gutenberg-form-selector-server-side-renderer",
            block: "wpforms/form-selector",
            attributes: props.attributes
          });
        }
        var clientId = props.clientId;
        var block = app.getBlockContainer(props);

        // In the case of empty content, use server side renderer.
        // This happens when the block is duplicated or converted to a reusable block.
        if (!block || !block.innerHTML) {
          triggerServerRender = true;
          return app.jsxParts.getBlockFormContent(props);
        }
        blocks[clientId] = blocks[clientId] || {};
        blocks[clientId].blockHTML = block.innerHTML;
        blocks[clientId].loadedFormId = props.attributes.formId;
        return /*#__PURE__*/React.createElement(Fragment, {
          key: "wpforms-gutenberg-form-selector-fragment-form-html"
        }, /*#__PURE__*/React.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: blocks[clientId].blockHTML
          }
        }));
      },
      /**
       * Get block preview JSX code.
       *
       * @since 1.8.1
       *
       * @return {JSX.Element} Block preview JSX code.
       */
      getBlockPreview: function getBlockPreview() {
        return /*#__PURE__*/React.createElement(Fragment, {
          key: "wpforms-gutenberg-form-selector-fragment-block-preview"
        }, /*#__PURE__*/React.createElement("img", {
          src: wpforms_gutenberg_form_selector.block_preview_url,
          style: {
            width: '100%'
          },
          alt: ""
        }));
      },
      /**
       * Get block empty JSX code.
       *
       * @since 1.8.3
       *
       * @param {Object} props Block properties.
       * @return {JSX.Element} Block empty JSX code.
       */
      getEmptyFormsPreview: function getEmptyFormsPreview(props) {
        var clientId = props.clientId;
        return /*#__PURE__*/React.createElement(Fragment, {
          key: "wpforms-gutenberg-form-selector-fragment-block-empty"
        }, /*#__PURE__*/React.createElement("div", {
          className: "wpforms-no-form-preview"
        }, /*#__PURE__*/React.createElement("img", {
          src: wpforms_gutenberg_form_selector.block_empty_url,
          alt: ""
        }), /*#__PURE__*/React.createElement("p", null, createInterpolateElement(__('You can use <b>WPForms</b> to build contact forms, surveys, payment forms, and more with just a few clicks.', 'wpforms-lite'), {
          b: /*#__PURE__*/React.createElement("strong", null)
        })), /*#__PURE__*/React.createElement("button", {
          type: "button",
          className: "get-started-button components-button is-primary",
          onClick: function onClick() {
            app.openBuilderPopup(clientId);
          }
        }, __('Get Started', 'wpforms-lite')), /*#__PURE__*/React.createElement("p", {
          className: "empty-desc"
        }, createInterpolateElement(__('Need some help? Check out our <a>comprehensive guide.</a>', 'wpforms-lite'), {
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          a: /*#__PURE__*/React.createElement("a", {
            href: wpforms_gutenberg_form_selector.wpforms_guide,
            target: "_blank",
            rel: "noopener noreferrer"
          })
        })), /*#__PURE__*/React.createElement("div", {
          id: "wpforms-gutenberg-popup",
          className: "wpforms-builder-popup"
        }, /*#__PURE__*/React.createElement("iframe", {
          src: "about:blank",
          width: "100%",
          height: "100%",
          id: "wpforms-builder-iframe",
          title: "WPForms Builder Popup"
        }))));
      },
      /**
       * Get block placeholder (form selector) JSX code.
       *
       * @since 1.8.1
       *
       * @param {Object} attributes  Block attributes.
       * @param {Object} handlers    Block event handlers.
       * @param {Object} formOptions Form selector options.
       *
       * @return {JSX.Element} Block placeholder JSX code.
       */
      getBlockPlaceholder: function getBlockPlaceholder(attributes, handlers, formOptions) {
        return /*#__PURE__*/React.createElement(Placeholder, {
          key: "wpforms-gutenberg-form-selector-wrap",
          className: "wpforms-gutenberg-form-selector-wrap"
        }, /*#__PURE__*/React.createElement("img", {
          src: wpforms_gutenberg_form_selector.logo_url,
          alt: ""
        }), /*#__PURE__*/React.createElement(SelectControl, {
          key: "wpforms-gutenberg-form-selector-select-control",
          value: attributes.formId,
          options: formOptions,
          onChange: function onChange(value) {
            return handlers.attrChange('formId', value);
          }
        }));
      }
    },
    /**
     * Get Style Settings panel class.
     *
     * @since 1.8.1
     *
     * @param {Object} props Block properties.
     *
     * @return {string} Style Settings panel class.
     */
    getPanelClass: function getPanelClass(props) {
      var cssClass = 'wpforms-gutenberg-panel wpforms-block-settings-' + props.clientId;
      if (!app.isFullStylingEnabled()) {
        cssClass += ' disabled_panel';
      }
      return cssClass;
    },
    /**
     * Determine whether the full styling is enabled.
     *
     * @since 1.8.1
     *
     * @return {boolean} Whether the full styling is enabled.
     */
    isFullStylingEnabled: function isFullStylingEnabled() {
      return wpforms_gutenberg_form_selector.is_modern_markup && wpforms_gutenberg_form_selector.is_full_styling;
    },
    /**
     * Get block container DOM element.
     *
     * @since 1.8.1
     *
     * @param {Object} props Block properties.
     *
     * @return {Element} Block container.
     */
    getBlockContainer: function getBlockContainer(props) {
      var blockSelector = "#block-".concat(props.clientId, " > div");
      var block = document.querySelector(blockSelector);

      // For FSE / Gutenberg plugin we need to take a look inside the iframe.
      if (!block) {
        var editorCanvas = document.querySelector('iframe[name="editor-canvas"]');
        block = editorCanvas && editorCanvas.contentWindow.document.querySelector(blockSelector);
      }
      return block;
    },
    /**
     * Get settings fields event handlers.
     *
     * @since 1.8.1
     *
     * @param {Object} props Block properties.
     *
     * @return {Object} Object that contains event handlers for the settings fields.
     */
    getSettingsFieldsHandlers: function getSettingsFieldsHandlers(props) {
      // eslint-disable-line max-lines-per-function
      return {
        /**
         * Field style attribute change event handler.
         *
         * @since 1.8.1
         *
         * @param {string} attribute Attribute name.
         * @param {string} value     New attribute value.
         */
        styleAttrChange: function styleAttrChange(attribute, value) {
          var block = app.getBlockContainer(props),
            container = block.querySelector("#wpforms-".concat(props.attributes.formId)),
            property = attribute.replace(/[A-Z]/g, function (letter) {
              return "-".concat(letter.toLowerCase());
            }),
            setAttr = {};
          if (container) {
            switch (property) {
              case 'field-size':
              case 'label-size':
              case 'button-size':
                for (var key in sizes[property][value]) {
                  container.style.setProperty("--wpforms-".concat(property, "-").concat(key), sizes[property][value][key]);
                }
                break;
              default:
                container.style.setProperty("--wpforms-".concat(property), value);
            }
          }
          setAttr[attribute] = value;
          props.setAttributes(setAttr);
          triggerServerRender = false;
          this.updateCopyPasteContent();
          $(window).trigger('wpformsFormSelectorStyleAttrChange', [block, props, attribute, value]);
        },
        /**
         * Field regular attribute change event handler.
         *
         * @since 1.8.1
         *
         * @param {string} attribute Attribute name.
         * @param {string} value     New attribute value.
         */
        attrChange: function attrChange(attribute, value) {
          var setAttr = {};
          setAttr[attribute] = value;
          props.setAttributes(setAttr);
          triggerServerRender = true;
          this.updateCopyPasteContent();
        },
        /**
         * Reset Form Styles settings to defaults.
         *
         * @since 1.8.1
         */
        resetSettings: function resetSettings() {
          for (var key in defaultStyleSettings) {
            this.styleAttrChange(key, defaultStyleSettings[key]);
          }
        },
        /**
         * Update content of the "Copy/Paste" fields.
         *
         * @since 1.8.1
         */
        updateCopyPasteContent: function updateCopyPasteContent() {
          var content = {};
          var atts = wp.data.select('core/block-editor').getBlockAttributes(props.clientId);
          for (var key in defaultStyleSettings) {
            content[key] = atts[key];
          }
          props.setAttributes({
            copyPasteJsonValue: JSON.stringify(content)
          });
        },
        /**
         * Paste settings handler.
         *
         * @since 1.8.1
         *
         * @param {string} value New attribute value.
         */
        pasteSettings: function pasteSettings(value) {
          var pasteAttributes = app.parseValidateJson(value);
          if (!pasteAttributes) {
            wp.data.dispatch('core/notices').createErrorNotice(strings.copy_paste_error, {
              id: 'wpforms-json-parse-error'
            });
            this.updateCopyPasteContent();
            return;
          }
          pasteAttributes.copyPasteJsonValue = value;
          props.setAttributes(pasteAttributes);
          triggerServerRender = true;
        }
      };
    },
    /**
     * Parse and validate JSON string.
     *
     * @since 1.8.1
     *
     * @param {string} value JSON string.
     *
     * @return {boolean|object} Parsed JSON object OR false on error.
     */
    parseValidateJson: function parseValidateJson(value) {
      if (typeof value !== 'string') {
        return false;
      }
      var atts;
      try {
        atts = JSON.parse(value);
      } catch (error) {
        atts = false;
      }
      return atts;
    },
    /**
     * Get WPForms icon DOM element.
     *
     * @since 1.8.1
     *
     * @return {DOM.element} WPForms icon DOM element.
     */
    getIcon: function getIcon() {
      return createElement('svg', {
        width: 20,
        height: 20,
        viewBox: '0 0 612 612',
        className: 'dashicon'
      }, createElement('path', {
        fill: 'currentColor',
        d: 'M544,0H68C30.445,0,0,30.445,0,68v476c0,37.556,30.445,68,68,68h476c37.556,0,68-30.444,68-68V68 C612,30.445,581.556,0,544,0z M464.44,68L387.6,120.02L323.34,68H464.44z M288.66,68l-64.26,52.02L147.56,68H288.66z M544,544H68 V68h22.1l136,92.14l79.9-64.6l79.56,64.6l136-92.14H544V544z M114.24,263.16h95.88v-48.28h-95.88V263.16z M114.24,360.4h95.88 v-48.62h-95.88V360.4z M242.76,360.4h255v-48.62h-255V360.4L242.76,360.4z M242.76,263.16h255v-48.28h-255V263.16L242.76,263.16z M368.22,457.3h129.54V408H368.22V457.3z'
      }));
    },
    /**
     * Get block attributes.
     *
     * @since 1.8.1
     *
     * @return {Object} Block attributes.
     */
    getBlockAttributes: function getBlockAttributes() {
      // eslint-disable-line max-lines-per-function
      return {
        clientId: {
          type: 'string',
          default: ''
        },
        formId: {
          type: 'string',
          default: defaults.formId
        },
        displayTitle: {
          type: 'boolean',
          default: defaults.displayTitle
        },
        displayDesc: {
          type: 'boolean',
          default: defaults.displayDesc
        },
        preview: {
          type: 'boolean'
        },
        fieldSize: {
          type: 'string',
          default: defaults.fieldSize
        },
        fieldBorderRadius: {
          type: 'string',
          default: defaults.fieldBorderRadius
        },
        fieldBackgroundColor: {
          type: 'string',
          default: defaults.fieldBackgroundColor
        },
        fieldBorderColor: {
          type: 'string',
          default: defaults.fieldBorderColor
        },
        fieldTextColor: {
          type: 'string',
          default: defaults.fieldTextColor
        },
        labelSize: {
          type: 'string',
          default: defaults.labelSize
        },
        labelColor: {
          type: 'string',
          default: defaults.labelColor
        },
        labelSublabelColor: {
          type: 'string',
          default: defaults.labelSublabelColor
        },
        labelErrorColor: {
          type: 'string',
          default: defaults.labelErrorColor
        },
        buttonSize: {
          type: 'string',
          default: defaults.buttonSize
        },
        buttonBorderRadius: {
          type: 'string',
          default: defaults.buttonBorderRadius
        },
        buttonBackgroundColor: {
          type: 'string',
          default: defaults.buttonBackgroundColor
        },
        buttonTextColor: {
          type: 'string',
          default: defaults.buttonTextColor
        },
        copyPasteJsonValue: {
          type: 'string',
          default: defaults.copyPasteJsonValue
        }
      };
    },
    /**
     * Get form selector options.
     *
     * @since 1.8.1
     *
     * @return {Array} Form options.
     */
    getFormOptions: function getFormOptions() {
      var formOptions = formList.map(function (value) {
        return {
          value: value.ID,
          label: value.post_title
        };
      });
      formOptions.unshift({
        value: '',
        label: strings.form_select
      });
      return formOptions;
    },
    /**
     * Get size selector options.
     *
     * @since 1.8.1
     *
     * @return {Array} Size options.
     */
    getSizeOptions: function getSizeOptions() {
      return [{
        label: strings.small,
        value: 'small'
      }, {
        label: strings.medium,
        value: 'medium'
      }, {
        label: strings.large,
        value: 'large'
      }];
    },
    /**
     * Event `wpformsFormSelectorEdit` handler.
     *
     * @since 1.8.1
     *
     * @param {Object} e     Event object.
     * @param {Object} props Block properties.
     */
    blockEdit: function blockEdit(e, props) {
      var block = app.getBlockContainer(props);
      if (!block || !block.dataset) {
        return;
      }
      app.initLeadFormSettings(block.parentElement);
    },
    /**
     * Init Lead Form Settings panels.
     *
     * @since 1.8.1
     *
     * @param {Element} block Block element.
     */
    initLeadFormSettings: function initLeadFormSettings(block) {
      if (!block || !block.dataset) {
        return;
      }
      if (!app.isFullStylingEnabled()) {
        return;
      }
      var clientId = block.dataset.block;
      var $form = $(block.querySelector('.wpforms-container'));
      var $panel = $(".wpforms-block-settings-".concat(clientId));
      if ($form.hasClass('wpforms-lead-forms-container')) {
        $panel.addClass('disabled_panel').find('.wpforms-gutenberg-panel-notice.wpforms-lead-form-notice').css('display', 'block');
        $panel.find('.wpforms-gutenberg-panel-notice.wpforms-use-modern-notice').css('display', 'none');
        return;
      }
      $panel.removeClass('disabled_panel').find('.wpforms-gutenberg-panel-notice.wpforms-lead-form-notice').css('display', 'none');
      $panel.find('.wpforms-gutenberg-panel-notice.wpforms-use-modern-notice').css('display', null);
    },
    /**
     * Event `wpformsFormSelectorFormLoaded` handler.
     *
     * @since 1.8.1
     *
     * @param {Object} e Event object.
     */
    formLoaded: function formLoaded(e) {
      app.initLeadFormSettings(e.detail.block);
      app.updateAccentColors(e.detail);
      app.loadChoicesJS(e.detail);
      app.initRichTextField(e.detail.formId);
      $(e.detail.block).off('click').on('click', app.blockClick);
    },
    /**
     * Click on the block event handler.
     *
     * @since 1.8.1
     *
     * @param {Object} e Event object.
     */
    blockClick: function blockClick(e) {
      app.initLeadFormSettings(e.currentTarget);
    },
    /**
     * Update accent colors of some fields in GB block in Modern Markup mode.
     *
     * @since 1.8.1
     *
     * @param {Object} detail Event details object.
     */
    updateAccentColors: function updateAccentColors(detail) {
      if (!wpforms_gutenberg_form_selector.is_modern_markup || !window.WPForms || !window.WPForms.FrontendModern || !detail.block) {
        return;
      }
      var $form = $(detail.block.querySelector("#wpforms-".concat(detail.formId))),
        FrontendModern = window.WPForms.FrontendModern;
      FrontendModern.updateGBBlockPageIndicatorColor($form);
      FrontendModern.updateGBBlockIconChoicesColor($form);
      FrontendModern.updateGBBlockRatingColor($form);
    },
    /**
     * Init Modern style Dropdown fields (<select>).
     *
     * @since 1.8.1
     *
     * @param {Object} detail Event details object.
     */
    loadChoicesJS: function loadChoicesJS(detail) {
      if (typeof window.Choices !== 'function') {
        return;
      }
      var $form = $(detail.block.querySelector("#wpforms-".concat(detail.formId)));
      $form.find('.choicesjs-select').each(function (idx, el) {
        var $el = $(el);
        if ($el.data('choice') === 'active') {
          return;
        }
        var args = window.wpforms_choicesjs_config || {},
          searchEnabled = $el.data('search-enabled'),
          $field = $el.closest('.wpforms-field');
        args.searchEnabled = 'undefined' !== typeof searchEnabled ? searchEnabled : true;
        args.callbackOnInit = function () {
          var self = this,
            $element = $(self.passedElement.element),
            $input = $(self.input.element),
            sizeClass = $element.data('size-class');

          // Add CSS-class for size.
          if (sizeClass) {
            $(self.containerOuter.element).addClass(sizeClass);
          }

          /**
           * If a multiple select has selected choices - hide a placeholder text.
           * In case if select is empty - we return placeholder text back.
           */
          if ($element.prop('multiple')) {
            // On init event.
            $input.data('placeholder', $input.attr('placeholder'));
            if (self.getValue(true).length) {
              $input.removeAttr('placeholder');
            }
          }
          this.disable();
          $field.find('.is-disabled').removeClass('is-disabled');
        };
        try {
          var choicesInstance = new Choices(el, args);

          // Save Choices.js instance for future access.
          $el.data('choicesjs', choicesInstance);
        } catch (e) {} // eslint-disable-line no-empty
      });
    },
    /**
     * Initialize RichText field.
     *
     * @since 1.8.1
     *
     * @param {number} formId Form ID.
     */
    initRichTextField: function initRichTextField(formId) {
      // Set default tab to `Visual`.
      $("#wpforms-".concat(formId, " .wp-editor-wrap")).removeClass('html-active').addClass('tmce-active');
    }
  };

  // Provide access to public functions/properties.
  return app;
}(document, window, jQuery);

// Initialize.
WPForms.FormSelector.init();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJyZXR1cm4iLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJjYXRjaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImluZm8iLCJlcnJvciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwiV1BGb3JtcyIsIndpbmRvdyIsIkZvcm1TZWxlY3RvciIsImRvY3VtZW50IiwiJCIsIl93cCIsIndwIiwiX3dwJHNlcnZlclNpZGVSZW5kZXIiLCJzZXJ2ZXJTaWRlUmVuZGVyIiwiU2VydmVyU2lkZVJlbmRlciIsImNvbXBvbmVudHMiLCJfd3AkZWxlbWVudCIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJ1c2VTdGF0ZSIsImNyZWF0ZUludGVycG9sYXRlRWxlbWVudCIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiX3JlZiIsImJsb2NrRWRpdG9yIiwiZWRpdG9yIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJJbnNwZWN0b3JBZHZhbmNlZENvbnRyb2xzIiwiUGFuZWxDb2xvclNldHRpbmdzIiwiX3dwJGNvbXBvbmVudHMiLCJTZWxlY3RDb250cm9sIiwiVG9nZ2xlQ29udHJvbCIsIlBhbmVsQm9keSIsIlBsYWNlaG9sZGVyIiwiRmxleCIsIkZsZXhCbG9jayIsIl9fZXhwZXJpbWVudGFsVW5pdENvbnRyb2wiLCJUZXh0YXJlYUNvbnRyb2wiLCJCdXR0b24iLCJNb2RhbCIsIl93cGZvcm1zX2d1dGVuYmVyZ19mbyIsIndwZm9ybXNfZ3V0ZW5iZXJnX2Zvcm1fc2VsZWN0b3IiLCJzdHJpbmdzIiwiZGVmYXVsdHMiLCJzaXplcyIsInVybHMiLCJpc1BybyIsImRlZmF1bHRTdHlsZVNldHRpbmdzIiwiX18iLCJpMThuIiwiZm9ybUxpc3QiLCJmb3JtcyIsInRyaWdnZXJTZXJ2ZXJSZW5kZXIiLCIkcG9wdXAiLCJpc0ZldGNoaW5nIiwiYXBwIiwiaW5pdCIsImluaXREZWZhdWx0cyIsInJlZ2lzdGVyQmxvY2siLCJyZWFkeSIsImV2ZW50cyIsIm9uIiwiXyIsImRlYm91bmNlIiwiYmxvY2tFZGl0IiwiZm9ybUxvYWRlZCIsImdldEZvcm1zIiwiX2NhbGxlZSIsInJlc3BvbnNlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImFwaUZldGNoIiwicGF0aCIsImNhY2hlIiwidDAiLCJjb25zb2xlIiwib3BlbkJ1aWxkZXJQb3B1cCIsImNsaWVudElEIiwiaXNFbXB0eU9iamVjdCIsInRtcGwiLCJwYXJlbnQiLCJhZnRlciIsInNpYmxpbmdzIiwidXJsIiwiZ2V0X3N0YXJ0ZWRfdXJsIiwiJGlmcmFtZSIsImZpbmQiLCJidWlsZGVyQ2xvc2VCdXR0b25FdmVudCIsImF0dHIiLCJmYWRlSW4iLCJvZmYiLCJhY3Rpb24iLCJmb3JtSWQiLCJmb3JtVGl0bGUiLCJuZXdCbG9jayIsImNyZWF0ZUJsb2NrIiwidG9TdHJpbmciLCJJRCIsInBvc3RfdGl0bGUiLCJkYXRhIiwiZGlzcGF0Y2giLCJyZW1vdmVCbG9jayIsImluc2VydEJsb2NrcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiZ2V0SWNvbiIsImtleXdvcmRzIiwiZm9ybV9rZXl3b3JkcyIsImNhdGVnb3J5IiwiYXR0cmlidXRlcyIsImdldEJsb2NrQXR0cmlidXRlcyIsInN1cHBvcnRzIiwiY3VzdG9tQ2xhc3NOYW1lIiwiaGFzRm9ybXMiLCJleGFtcGxlIiwicHJldmlldyIsImVkaXQiLCJwcm9wcyIsImZvcm1PcHRpb25zIiwiZ2V0Rm9ybU9wdGlvbnMiLCJoYW5kbGVycyIsImdldFNldHRpbmdzRmllbGRzSGFuZGxlcnMiLCJjbGllbnRJZCIsInNldEF0dHJpYnV0ZXMiLCJqc3giLCJqc3hQYXJ0cyIsImdldE1haW5TZXR0aW5ncyIsImdldEVtcHR5Rm9ybXNQcmV2aWV3Iiwic2l6ZU9wdGlvbnMiLCJnZXRTaXplT3B0aW9ucyIsImdldFN0eWxlU2V0dGluZ3MiLCJnZXRBZHZhbmNlZFNldHRpbmdzIiwiZ2V0QmxvY2tGb3JtQ29udGVudCIsInVwZGF0ZUNvcHlQYXN0ZUNvbnRlbnQiLCJ0cmlnZ2VyIiwiZ2V0QmxvY2tQcmV2aWV3IiwiZ2V0QmxvY2tQbGFjZWhvbGRlciIsInNhdmUiLCJwcmludEVtcHR5Rm9ybXNOb3RpY2UiLCJSZWFjdCIsImNsYXNzTmFtZSIsImZvcm1fc2V0dGluZ3MiLCJsYWJlbCIsImZvcm1fc2VsZWN0ZWQiLCJvcHRpb25zIiwib25DaGFuZ2UiLCJhdHRyQ2hhbmdlIiwiaHJlZiIsImZvcm1fdXJsIiwicmVwbGFjZSIsInJlbCIsInRhcmdldCIsImZvcm1fZWRpdCIsImVudHJpZXNfdXJsIiwiZm9ybV9lbnRyaWVzIiwic2hvd190aXRsZSIsImNoZWNrZWQiLCJkaXNwbGF5VGl0bGUiLCJzaG93X2Rlc2NyaXB0aW9uIiwiZGlzcGxheURlc2MiLCJwYW5lbF9ub3RpY2VfaGVhZCIsInBhbmVsX25vdGljZV90ZXh0IiwicGFuZWxfbm90aWNlX2xpbmsiLCJwYW5lbF9ub3RpY2VfbGlua190ZXh0Iiwic3R5bGUiLCJkaXNwbGF5Iiwib25DbGljayIsImdldEZpZWxkU3R5bGVzIiwiZ2V0UGFuZWxDbGFzcyIsImZpZWxkX3N0eWxlcyIsInVzZV9tb2Rlcm5fbm90aWNlX2hlYWQiLCJ1c2VfbW9kZXJuX25vdGljZV90ZXh0IiwidXNlX21vZGVybl9ub3RpY2VfbGluayIsImxlYXJuX21vcmUiLCJsZWFkX2Zvcm1zX3BhbmVsX25vdGljZV9oZWFkIiwibGVhZF9mb3Jtc19wYW5lbF9ub3RpY2VfdGV4dCIsImdhcCIsImFsaWduIiwianVzdGlmeSIsInNpemUiLCJmaWVsZFNpemUiLCJzdHlsZUF0dHJDaGFuZ2UiLCJib3JkZXJfcmFkaXVzIiwiZmllbGRCb3JkZXJSYWRpdXMiLCJpc1VuaXRTZWxlY3RUYWJiYWJsZSIsImNvbG9ycyIsIl9fZXhwZXJpbWVudGFsSXNSZW5kZXJlZEluU2lkZWJhciIsImVuYWJsZUFscGhhIiwic2hvd1RpdGxlIiwiY29sb3JTZXR0aW5ncyIsImZpZWxkQmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZCIsImZpZWxkQm9yZGVyQ29sb3IiLCJib3JkZXIiLCJmaWVsZFRleHRDb2xvciIsInRleHQiLCJnZXRMYWJlbFN0eWxlcyIsImxhYmVsX3N0eWxlcyIsImxhYmVsU2l6ZSIsImxhYmVsQ29sb3IiLCJsYWJlbFN1YmxhYmVsQ29sb3IiLCJzdWJsYWJlbF9oaW50cyIsImxhYmVsRXJyb3JDb2xvciIsImVycm9yX21lc3NhZ2UiLCJnZXRCdXR0b25TdHlsZXMiLCJidXR0b25fc3R5bGVzIiwiYnV0dG9uU2l6ZSIsImJ1dHRvbkJvcmRlclJhZGl1cyIsImJ1dHRvbkJhY2tncm91bmRDb2xvciIsImJ1dHRvblRleHRDb2xvciIsImJ1dHRvbl9jb2xvcl9ub3RpY2UiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJpc09wZW4iLCJzZXRPcGVuIiwib3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsImNvcHlfcGFzdGVfc2V0dGluZ3MiLCJyb3dzIiwic3BlbGxDaGVjayIsImNvcHlQYXN0ZUpzb25WYWx1ZSIsInBhc3RlU2V0dGluZ3MiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNvcHlfcGFzdGVfbm90aWNlIiwicmVzZXRfc3R5bGVfc2V0dGluZ3MiLCJvblJlcXVlc3RDbG9zZSIsInJlc2V0X3NldHRpbmdzX2NvbmZpcm1fdGV4dCIsImlzU2Vjb25kYXJ5IiwiYnRuX25vIiwiaXNQcmltYXJ5IiwicmVzZXRTZXR0aW5ncyIsImJ0bl95ZXNfcmVzZXQiLCJibG9jayIsImdldEJsb2NrQ29udGFpbmVyIiwiaW5uZXJIVE1MIiwiYmxvY2tIVE1MIiwibG9hZGVkRm9ybUlkIiwic3JjIiwiYmxvY2tfcHJldmlld191cmwiLCJ3aWR0aCIsImFsdCIsImJsb2NrX2VtcHR5X3VybCIsImIiLCJ3cGZvcm1zX2d1aWRlIiwiaWQiLCJoZWlnaHQiLCJsb2dvX3VybCIsImNzc0NsYXNzIiwiaXNGdWxsU3R5bGluZ0VuYWJsZWQiLCJpc19tb2Rlcm5fbWFya3VwIiwiaXNfZnVsbF9zdHlsaW5nIiwiYmxvY2tTZWxlY3RvciIsImNvbmNhdCIsInF1ZXJ5U2VsZWN0b3IiLCJlZGl0b3JDYW52YXMiLCJjb250ZW50V2luZG93IiwiYXR0cmlidXRlIiwiY29udGFpbmVyIiwicHJvcGVydHkiLCJsZXR0ZXIiLCJ0b0xvd2VyQ2FzZSIsInNldEF0dHIiLCJzZXRQcm9wZXJ0eSIsImNvbnRlbnQiLCJhdHRzIiwic2VsZWN0IiwiSlNPTiIsInN0cmluZ2lmeSIsInBhc3RlQXR0cmlidXRlcyIsInBhcnNlVmFsaWRhdGVKc29uIiwiY3JlYXRlRXJyb3JOb3RpY2UiLCJjb3B5X3Bhc3RlX2Vycm9yIiwicGFyc2UiLCJ2aWV3Qm94IiwiZmlsbCIsImRlZmF1bHQiLCJtYXAiLCJ1bnNoaWZ0IiwiZm9ybV9zZWxlY3QiLCJzbWFsbCIsIm1lZGl1bSIsImxhcmdlIiwiZGF0YXNldCIsImluaXRMZWFkRm9ybVNldHRpbmdzIiwicGFyZW50RWxlbWVudCIsIiRmb3JtIiwiJHBhbmVsIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsImNzcyIsInJlbW92ZUNsYXNzIiwiZGV0YWlsIiwidXBkYXRlQWNjZW50Q29sb3JzIiwibG9hZENob2ljZXNKUyIsImluaXRSaWNoVGV4dEZpZWxkIiwiYmxvY2tDbGljayIsImN1cnJlbnRUYXJnZXQiLCJGcm9udGVuZE1vZGVybiIsInVwZGF0ZUdCQmxvY2tQYWdlSW5kaWNhdG9yQ29sb3IiLCJ1cGRhdGVHQkJsb2NrSWNvbkNob2ljZXNDb2xvciIsInVwZGF0ZUdCQmxvY2tSYXRpbmdDb2xvciIsIkNob2ljZXMiLCJlYWNoIiwiaWR4IiwiZWwiLCIkZWwiLCJ3cGZvcm1zX2Nob2ljZXNqc19jb25maWciLCJzZWFyY2hFbmFibGVkIiwiJGZpZWxkIiwiY2xvc2VzdCIsImNhbGxiYWNrT25Jbml0IiwiJGVsZW1lbnQiLCJwYXNzZWRFbGVtZW50IiwiJGlucHV0IiwiaW5wdXQiLCJzaXplQ2xhc3MiLCJjb250YWluZXJPdXRlciIsInByb3AiLCJnZXRWYWx1ZSIsInJlbW92ZUF0dHIiLCJkaXNhYmxlIiwiY2hvaWNlc0luc3RhbmNlIiwialF1ZXJ5Il0sInNvdXJjZXMiOlsiZmFrZV9lYjM4NGQ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCB3cGZvcm1zX2d1dGVuYmVyZ19mb3JtX3NlbGVjdG9yLCBDaG9pY2VzLCBKU1gsIERPTSAqL1xuLyoganNoaW50IGVzMzogZmFsc2UsIGVzdmVyc2lvbjogNiAqL1xuXG4vKipcbiAqIEd1dGVuYmVyZyBlZGl0b3IgYmxvY2suXG4gKlxuICogQHNpbmNlIDEuOC4xXG4gKi9cbmNvbnN0IFdQRm9ybXMgPSB3aW5kb3cuV1BGb3JtcyB8fCB7fTtcblxuV1BGb3Jtcy5Gb3JtU2VsZWN0b3IgPSBXUEZvcm1zLkZvcm1TZWxlY3RvciB8fCAoIGZ1bmN0aW9uKCBkb2N1bWVudCwgd2luZG93LCAkICkge1xuXHRjb25zdCB7IHNlcnZlclNpZGVSZW5kZXI6IFNlcnZlclNpZGVSZW5kZXIgPSB3cC5jb21wb25lbnRzLlNlcnZlclNpZGVSZW5kZXIgfSA9IHdwO1xuXHRjb25zdCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50LCB1c2VTdGF0ZSwgY3JlYXRlSW50ZXJwb2xhdGVFbGVtZW50IH0gPSB3cC5lbGVtZW50O1xuXHRjb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5cdGNvbnN0IHsgSW5zcGVjdG9yQ29udHJvbHMsIEluc3BlY3RvckFkdmFuY2VkQ29udHJvbHMsIFBhbmVsQ29sb3JTZXR0aW5ncyB9ID0gd3AuYmxvY2tFZGl0b3IgfHwgd3AuZWRpdG9yO1xuXHRjb25zdCB7IFNlbGVjdENvbnRyb2wsIFRvZ2dsZUNvbnRyb2wsIFBhbmVsQm9keSwgUGxhY2Vob2xkZXIsIEZsZXgsIEZsZXhCbG9jaywgX19leHBlcmltZW50YWxVbml0Q29udHJvbCwgVGV4dGFyZWFDb250cm9sLCBCdXR0b24sIE1vZGFsIH0gPSB3cC5jb21wb25lbnRzO1xuXHRjb25zdCB7IHN0cmluZ3MsIGRlZmF1bHRzLCBzaXplcywgdXJscywgaXNQcm8gfSA9IHdwZm9ybXNfZ3V0ZW5iZXJnX2Zvcm1fc2VsZWN0b3I7XG5cdGNvbnN0IGRlZmF1bHRTdHlsZVNldHRpbmdzID0gZGVmYXVsdHM7XG5cdGNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cblx0LyoqXG5cdCAqIExpc3Qgb2YgZm9ybXMuXG5cdCAqXG5cdCAqIERlZmF1bHQgdmFsdWUgaXMgbG9jYWxpemVkIGluIEZvcm1TZWxlY3Rvci5waHAuXG5cdCAqXG5cdCAqIEBzaW5jZSAxLjguNFxuXHQgKlxuXHQgKiBAdHlwZSB7T2JqZWN0fVxuXHQgKi9cblx0bGV0IGZvcm1MaXN0ID0gd3Bmb3Jtc19ndXRlbmJlcmdfZm9ybV9zZWxlY3Rvci5mb3JtcztcblxuXHQvKipcblx0ICogQmxvY2tzIHJ1bnRpbWUgZGF0YS5cblx0ICpcblx0ICogQHNpbmNlIDEuOC4xXG5cdCAqXG5cdCAqIEB0eXBlIHtPYmplY3R9XG5cdCAqL1xuXHRjb25zdCBibG9ja3MgPSB7fTtcblxuXHQvKipcblx0ICogV2hldGhlciBpdCBpcyBuZWVkZWQgdG8gdHJpZ2dlciBzZXJ2ZXIgcmVuZGVyaW5nLlxuXHQgKlxuXHQgKiBAc2luY2UgMS44LjFcblx0ICpcblx0ICogQHR5cGUge2Jvb2xlYW59XG5cdCAqL1xuXHRsZXQgdHJpZ2dlclNlcnZlclJlbmRlciA9IHRydWU7XG5cblx0LyoqXG5cdCAqIFBvcHVwIGNvbnRhaW5lci5cblx0ICpcblx0ICogQHNpbmNlIDEuOC4zXG5cdCAqXG5cdCAqIEB0eXBlIHtPYmplY3R9XG5cdCAqL1xuXHRsZXQgJHBvcHVwID0ge307XG5cblx0LyoqXG5cdCAqIFRyYWNrIGZldGNoIHN0YXR1cy5cblx0ICpcblx0ICogQHNpbmNlIDEuOC40XG5cdCAqXG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0bGV0IGlzRmV0Y2hpbmcgPSBmYWxzZTtcblxuXHQvKipcblx0ICogUHVibGljIGZ1bmN0aW9ucyBhbmQgcHJvcGVydGllcy5cblx0ICpcblx0ICogQHNpbmNlIDEuOC4xXG5cdCAqXG5cdCAqIEB0eXBlIHtPYmplY3R9XG5cdCAqL1xuXHRjb25zdCBhcHAgPSB7XG5cblx0XHQvKipcblx0XHQgKiBTdGFydCB0aGUgZW5naW5lLlxuXHRcdCAqXG5cdFx0ICogQHNpbmNlIDEuOC4xXG5cdFx0ICovXG5cdFx0aW5pdCgpIHtcblx0XHRcdGFwcC5pbml0RGVmYXVsdHMoKTtcblx0XHRcdGFwcC5yZWdpc3RlckJsb2NrKCk7XG5cblx0XHRcdCQoIGFwcC5yZWFkeSApO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBEb2N1bWVudCByZWFkeS5cblx0XHQgKlxuXHRcdCAqIEBzaW5jZSAxLjguMVxuXHRcdCAqL1xuXHRcdHJlYWR5KCkge1xuXHRcdFx0YXBwLmV2ZW50cygpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBFdmVudHMuXG5cdFx0ICpcblx0XHQgKiBAc2luY2UgMS44LjFcblx0XHQgKi9cblx0XHRldmVudHMoKSB7XG5cdFx0XHQkKCB3aW5kb3cgKVxuXHRcdFx0XHQub24oICd3cGZvcm1zRm9ybVNlbGVjdG9yRWRpdCcsIF8uZGVib3VuY2UoIGFwcC5ibG9ja0VkaXQsIDI1MCApIClcblx0XHRcdFx0Lm9uKCAnd3Bmb3Jtc0Zvcm1TZWxlY3RvckZvcm1Mb2FkZWQnLCBfLmRlYm91bmNlKCBhcHAuZm9ybUxvYWRlZCwgMjUwICkgKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogR2V0IGZyZXNoIGxpc3Qgb2YgZm9ybXMgdmlhIFJFU1QtQVBJLlxuXHRcdCAqXG5cdFx0ICogQHNpbmNlIDEuOC40XG5cdFx0ICpcblx0XHQgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvYmxvY2stZWRpdG9yL3JlZmVyZW5jZS1ndWlkZXMvcGFja2FnZXMvcGFja2FnZXMtYXBpLWZldGNoL1xuXHRcdCAqL1xuXHRcdGFzeW5jIGdldEZvcm1zKCkge1xuXHRcdFx0Ly8gSWYgYSBmZXRjaCBpcyBhbHJlYWR5IGluIHByb2dyZXNzLCBleGl0IHRoZSBmdW5jdGlvbi5cblx0XHRcdGlmICggaXNGZXRjaGluZyApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZXQgdGhlIGZsYWcgdG8gdHJ1ZSBpbmRpY2F0aW5nIGEgZmV0Y2ggaXMgaW4gcHJvZ3Jlc3MuXG5cdFx0XHRpc0ZldGNoaW5nID0gdHJ1ZTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Ly8gRmV0Y2ggZm9ybXMuXG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd3AuYXBpRmV0Y2goIHtcblx0XHRcdFx0XHRwYXRoOiAnL3dwZm9ybXMvdjEvZm9ybXMvJyxcblx0XHRcdFx0XHRtZXRob2Q6ICdHRVQnLFxuXHRcdFx0XHRcdGNhY2hlOiAnbm8tY2FjaGUnLFxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0Ly8gVXBkYXRlIHRoZSBmb3JtIGxpc3QuXG5cdFx0XHRcdGZvcm1MaXN0ID0gcmVzcG9uc2UuZm9ybXM7XG5cdFx0XHR9IGNhdGNoICggZXJyb3IgKSB7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGVycm9yICk7XG5cdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRpc0ZldGNoaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIE9wZW4gYnVpbGRlciBwb3B1cC5cblx0XHQgKlxuXHRcdCAqIEBzaW5jZSAxLjYuMlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGNsaWVudElEIEJsb2NrIENsaWVudCBJRC5cblx0XHQgKi9cblx0XHRvcGVuQnVpbGRlclBvcHVwKCBjbGllbnRJRCApIHtcblx0XHRcdGlmICggJC5pc0VtcHR5T2JqZWN0KCAkcG9wdXAgKSApIHtcblx0XHRcdFx0Y29uc3QgdG1wbCA9ICQoICcjd3Bmb3Jtcy1ndXRlbmJlcmctcG9wdXAnICk7XG5cdFx0XHRcdGNvbnN0IHBhcmVudCA9ICQoICcjd3B3cmFwJyApO1xuXG5cdFx0XHRcdHBhcmVudC5hZnRlciggdG1wbCApO1xuXG5cdFx0XHRcdCRwb3B1cCA9IHBhcmVudC5zaWJsaW5ncyggJyN3cGZvcm1zLWd1dGVuYmVyZy1wb3B1cCcgKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdXJsID0gd3Bmb3Jtc19ndXRlbmJlcmdfZm9ybV9zZWxlY3Rvci5nZXRfc3RhcnRlZF91cmwsXG5cdFx0XHRcdCRpZnJhbWUgPSAkcG9wdXAuZmluZCggJ2lmcmFtZScgKTtcblxuXHRcdFx0YXBwLmJ1aWxkZXJDbG9zZUJ1dHRvbkV2ZW50KCBjbGllbnRJRCApO1xuXHRcdFx0JGlmcmFtZS5hdHRyKCAnc3JjJywgdXJsICk7XG5cdFx0XHQkcG9wdXAuZmFkZUluKCk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIENsb3NlIGJ1dHRvbiAoaW5zaWRlIHRoZSBmb3JtIGJ1aWxkZXIpIGNsaWNrIGV2ZW50LlxuXHRcdCAqXG5cdFx0ICogQHNpbmNlIDEuOC4zXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gY2xpZW50SUQgQmxvY2sgQ2xpZW50IElELlxuXHRcdCAqL1xuXHRcdGJ1aWxkZXJDbG9zZUJ1dHRvbkV2ZW50KCBjbGllbnRJRCApIHtcblx0XHRcdCRwb3B1cFxuXHRcdFx0XHQub2ZmKCAnd3Bmb3Jtc0J1aWxkZXJJblBvcHVwQ2xvc2UnIClcblx0XHRcdFx0Lm9uKCAnd3Bmb3Jtc0J1aWxkZXJJblBvcHVwQ2xvc2UnLCBmdW5jdGlvbiggZSwgYWN0aW9uLCBmb3JtSWQsIGZvcm1UaXRsZSApIHtcblx0XHRcdFx0XHRpZiAoIGFjdGlvbiAhPT0gJ3NhdmVkJyB8fCAhIGZvcm1JZCApIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBJbnNlcnQgYSBuZXcgYmxvY2sgd2hlbiBhIG5ldyBmb3JtIGlzIGNyZWF0ZWQgZnJvbSB0aGUgcG9wdXAgdG8gdXBkYXRlIHRoZSBmb3JtIGxpc3QgYW5kIGF0dHJpYnV0ZXMuXG5cdFx0XHRcdFx0Y29uc3QgbmV3QmxvY2sgPSB3cC5ibG9ja3MuY3JlYXRlQmxvY2soICd3cGZvcm1zL2Zvcm0tc2VsZWN0b3InLCB7XG5cdFx0XHRcdFx0XHRmb3JtSWQ6IGZvcm1JZC50b1N0cmluZygpLCAvLyBFeHBlY3RzIHN0cmluZyB2YWx1ZSwgbWFrZSBzdXJlIHdlIGluc2VydCBzdHJpbmcuXG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuXHRcdFx0XHRcdGZvcm1MaXN0ID0gWyB7IElEOiBmb3JtSWQsIHBvc3RfdGl0bGU6IGZvcm1UaXRsZSB9IF07XG5cblx0XHRcdFx0XHQvLyBJbnNlcnQgYSBuZXcgYmxvY2suXG5cdFx0XHRcdFx0d3AuZGF0YS5kaXNwYXRjaCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLnJlbW92ZUJsb2NrKCBjbGllbnRJRCApO1xuXHRcdFx0XHRcdHdwLmRhdGEuZGlzcGF0Y2goICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5pbnNlcnRCbG9ja3MoIG5ld0Jsb2NrICk7XG5cdFx0XHRcdH0gKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogUmVnaXN0ZXIgYmxvY2suXG5cdFx0ICpcblx0XHQgKiBAc2luY2UgMS44LjFcblx0XHQgKi9cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuXHRcdHJlZ2lzdGVyQmxvY2soKSB7XG5cdFx0XHRyZWdpc3RlckJsb2NrVHlwZSggJ3dwZm9ybXMvZm9ybS1zZWxlY3RvcicsIHtcblx0XHRcdFx0dGl0bGU6IHN0cmluZ3MudGl0bGUsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBzdHJpbmdzLmRlc2NyaXB0aW9uLFxuXHRcdFx0XHRpY29uOiBhcHAuZ2V0SWNvbigpLFxuXHRcdFx0XHRrZXl3b3Jkczogc3RyaW5ncy5mb3JtX2tleXdvcmRzLFxuXHRcdFx0XHRjYXRlZ29yeTogJ3dpZGdldHMnLFxuXHRcdFx0XHRhdHRyaWJ1dGVzOiBhcHAuZ2V0QmxvY2tBdHRyaWJ1dGVzKCksXG5cdFx0XHRcdHN1cHBvcnRzOiB7XG5cdFx0XHRcdFx0Y3VzdG9tQ2xhc3NOYW1lOiBhcHAuaGFzRm9ybXMoKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXhhbXBsZToge1xuXHRcdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRcdHByZXZpZXc6IHRydWUsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdFx0ZWRpdCggcHJvcHMgKSB7XG5cdFx0XHRcdFx0Ly8gR2V0IGZyZXNoIGxpc3Qgb2YgZm9ybXMuXG5cdFx0XHRcdFx0YXBwLmdldEZvcm1zKCk7XG5cblx0XHRcdFx0XHRjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IHByb3BzO1xuXHRcdFx0XHRcdGNvbnN0IGZvcm1PcHRpb25zID0gYXBwLmdldEZvcm1PcHRpb25zKCk7XG5cdFx0XHRcdFx0Y29uc3QgaGFuZGxlcnMgPSBhcHAuZ2V0U2V0dGluZ3NGaWVsZHNIYW5kbGVycyggcHJvcHMgKTtcblxuXHRcdFx0XHRcdC8vIFN0b3JlIGJsb2NrIGNsaWVudElkIGluIGF0dHJpYnV0ZXMuXG5cdFx0XHRcdFx0aWYgKCAhIGF0dHJpYnV0ZXMuY2xpZW50SWQgKSB7XG5cdFx0XHRcdFx0XHQvLyBXZSBqdXN0IHdhbnQgY2xpZW50IElEIHRvIHVwZGF0ZSBvbmNlLlxuXHRcdFx0XHRcdFx0Ly8gVGhlIGJsb2NrIGVkaXRvciBkb2Vzbid0IGhhdmUgYSBmaXhlZCBibG9jayBJRCwgc28gd2UgbmVlZCB0byBnZXQgaXQgb24gdGhlIGluaXRpYWwgbG9hZCwgYnV0IG9ubHkgb25jZS5cblx0XHRcdFx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHsgY2xpZW50SWQ6IHByb3BzLmNsaWVudElkIH0gKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBNYWluIGJsb2NrIHNldHRpbmdzLlxuXHRcdFx0XHRcdGNvbnN0IGpzeCA9IFtcblx0XHRcdFx0XHRcdGFwcC5qc3hQYXJ0cy5nZXRNYWluU2V0dGluZ3MoIGF0dHJpYnV0ZXMsIGhhbmRsZXJzLCBmb3JtT3B0aW9ucyApLFxuXHRcdFx0XHRcdF07XG5cblx0XHRcdFx0XHQvLyBCbG9jayBwcmV2aWV3IHBpY3R1cmUuXG5cdFx0XHRcdFx0aWYgKCAhIGFwcC5oYXNGb3JtcygpICkge1xuXHRcdFx0XHRcdFx0anN4LnB1c2goXG5cdFx0XHRcdFx0XHRcdGFwcC5qc3hQYXJ0cy5nZXRFbXB0eUZvcm1zUHJldmlldyggcHJvcHMgKSxcblx0XHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRcdHJldHVybiBqc3g7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3Qgc2l6ZU9wdGlvbnMgPSBhcHAuZ2V0U2l6ZU9wdGlvbnMoKTtcblxuXHRcdFx0XHRcdC8vIEZvcm0gc3R5bGUgc2V0dGluZ3MgJiBibG9jayBjb250ZW50LlxuXHRcdFx0XHRcdGlmICggYXR0cmlidXRlcy5mb3JtSWQgKSB7XG5cdFx0XHRcdFx0XHRqc3gucHVzaChcblx0XHRcdFx0XHRcdFx0YXBwLmpzeFBhcnRzLmdldFN0eWxlU2V0dGluZ3MoIHByb3BzLCBoYW5kbGVycywgc2l6ZU9wdGlvbnMgKSxcblx0XHRcdFx0XHRcdFx0YXBwLmpzeFBhcnRzLmdldEFkdmFuY2VkU2V0dGluZ3MoIHByb3BzLCBoYW5kbGVycyApLFxuXHRcdFx0XHRcdFx0XHRhcHAuanN4UGFydHMuZ2V0QmxvY2tGb3JtQ29udGVudCggcHJvcHMgKSxcblx0XHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRcdGhhbmRsZXJzLnVwZGF0ZUNvcHlQYXN0ZUNvbnRlbnQoKTtcblxuXHRcdFx0XHRcdFx0JCggd2luZG93ICkudHJpZ2dlciggJ3dwZm9ybXNGb3JtU2VsZWN0b3JFZGl0JywgWyBwcm9wcyBdICk7XG5cblx0XHRcdFx0XHRcdHJldHVybiBqc3g7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gQmxvY2sgcHJldmlldyBwaWN0dXJlLlxuXHRcdFx0XHRcdGlmICggYXR0cmlidXRlcy5wcmV2aWV3ICkge1xuXHRcdFx0XHRcdFx0anN4LnB1c2goXG5cdFx0XHRcdFx0XHRcdGFwcC5qc3hQYXJ0cy5nZXRCbG9ja1ByZXZpZXcoKSxcblx0XHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRcdHJldHVybiBqc3g7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gQmxvY2sgcGxhY2Vob2xkZXIgKGZvcm0gc2VsZWN0b3IpLlxuXHRcdFx0XHRcdGpzeC5wdXNoKFxuXHRcdFx0XHRcdFx0YXBwLmpzeFBhcnRzLmdldEJsb2NrUGxhY2Vob2xkZXIoIHByb3BzLmF0dHJpYnV0ZXMsIGhhbmRsZXJzLCBmb3JtT3B0aW9ucyApLFxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRyZXR1cm4ganN4O1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzYXZlOiAoKSA9PiBudWxsLFxuXHRcdFx0fSApO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBJbml0IGRlZmF1bHQgc3R5bGUgc2V0dGluZ3MuXG5cdFx0ICpcblx0XHQgKiBAc2luY2UgMS44LjFcblx0XHQgKi9cblx0XHRpbml0RGVmYXVsdHMoKSB7XG5cdFx0XHRbICdmb3JtSWQnLCAnY29weVBhc3RlSnNvblZhbHVlJyBdLmZvckVhY2goICgga2V5ICkgPT4gZGVsZXRlIGRlZmF1bHRTdHlsZVNldHRpbmdzWyBrZXkgXSApO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBDaGVjayBpZiBzaXRlIGhhcyBmb3Jtcy5cblx0XHQgKlxuXHRcdCAqIEBzaW5jZSAxLjguM1xuXHRcdCAqXG5cdFx0ICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciBzaXRlIGhhcyBhdCBsZWFzdCBvbmUgZm9ybS5cblx0XHQgKi9cblx0XHRoYXNGb3JtcygpIHtcblx0XHRcdHJldHVybiBmb3JtTGlzdC5sZW5ndGggPj0gMTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogQmxvY2sgSlNYIHBhcnRzLlxuXHRcdCAqXG5cdFx0ICogQHNpbmNlIDEuOC4xXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdGpzeFBhcnRzOiB7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogR2V0IG1haW4gc2V0dGluZ3MgSlNYIGNvZGUuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHNpbmNlIDEuOC4xXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXMgIEJsb2NrIGF0dHJpYnV0ZXMuXG5cdFx0XHQgKiBAcGFyYW0ge09iamVjdH0gaGFuZGxlcnMgICAgQmxvY2sgZXZlbnQgaGFuZGxlcnMuXG5cdFx0XHQgKiBAcGFyYW0ge09iamVjdH0gZm9ybU9wdGlvbnMgRm9ybSBzZWxlY3RvciBvcHRpb25zLlxuXHRcdFx0ICpcblx0XHRcdCAqIEByZXR1cm4ge0pTWC5FbGVtZW50fSBNYWluIHNldHRpbmcgSlNYIGNvZGUuXG5cdFx0XHQgKi9cblx0XHRcdGdldE1haW5TZXR0aW5ncyggYXR0cmlidXRlcywgaGFuZGxlcnMsIGZvcm1PcHRpb25zICkge1xuXHRcdFx0XHRpZiAoICEgYXBwLmhhc0Zvcm1zKCkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGFwcC5qc3hQYXJ0cy5wcmludEVtcHR5Rm9ybXNOb3RpY2UoIGF0dHJpYnV0ZXMuY2xpZW50SWQgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzIGtleT1cIndwZm9ybXMtZ3V0ZW5iZXJnLWZvcm0tc2VsZWN0b3ItaW5zcGVjdG9yLW1haW4tc2V0dGluZ3NcIj5cblx0XHRcdFx0XHRcdDxQYW5lbEJvZHkgY2xhc3NOYW1lPVwid3Bmb3Jtcy1ndXRlbmJlcmctcGFuZWxcIiB0aXRsZT17IHN0cmluZ3MuZm9ybV9zZXR0aW5ncyB9PlxuXHRcdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgc3RyaW5ncy5mb3JtX3NlbGVjdGVkIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZm9ybUlkIH1cblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgZm9ybU9wdGlvbnMgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IGhhbmRsZXJzLmF0dHJDaGFuZ2UoICdmb3JtSWQnLCB2YWx1ZSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0eyBhdHRyaWJ1dGVzLmZvcm1JZCA/IChcblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ3cGZvcm1zLWd1dGVuYmVyZy1mb3JtLXNlbGVjdG9yLWFjdGlvbnNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9eyB1cmxzLmZvcm1fdXJsLnJlcGxhY2UoICd7SUR9JywgYXR0cmlidXRlcy5mb3JtSWQgKSB9IHJlbD1cIm5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBzdHJpbmdzLmZvcm1fZWRpdCB9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IGlzUHJvICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQmbmJzcDsmbmJzcDt8Jm5ic3A7Jm5ic3A7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj17IHVybHMuZW50cmllc191cmwucmVwbGFjZSggJ3tJRH0nLCBhdHRyaWJ1dGVzLmZvcm1JZCApIH0gcmVsPVwibm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBzdHJpbmdzLmZvcm1fZW50cmllcyB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0KSA6IG51bGwgfVxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgc3RyaW5ncy5zaG93X3RpdGxlIH1cblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5kaXNwbGF5VGl0bGUgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IGhhbmRsZXJzLmF0dHJDaGFuZ2UoICdkaXNwbGF5VGl0bGUnLCB2YWx1ZSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IHN0cmluZ3Muc2hvd19kZXNjcmlwdGlvbiB9XG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuZGlzcGxheURlc2MgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IGhhbmRsZXJzLmF0dHJDaGFuZ2UoICdkaXNwbGF5RGVzYycsIHZhbHVlICkgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ3cGZvcm1zLWd1dGVuYmVyZy1wYW5lbC1ub3RpY2VcIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Ryb25nPnsgc3RyaW5ncy5wYW5lbF9ub3RpY2VfaGVhZCB9PC9zdHJvbmc+XG5cdFx0XHRcdFx0XHRcdFx0eyBzdHJpbmdzLnBhbmVsX25vdGljZV90ZXh0IH1cblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXsgc3RyaW5ncy5wYW5lbF9ub3RpY2VfbGluayB9IHJlbD1cIm5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj57IHN0cmluZ3MucGFuZWxfbm90aWNlX2xpbmtfdGV4dCB9PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBQcmludCBlbXB0eSBmb3JtcyBub3RpY2UuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHNpbmNlIDEuOC4zXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IGNsaWVudElkIEJsb2NrIGNsaWVudCBJRC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcmV0dXJuIHtKU1guRWxlbWVudH0gRmllbGQgc3R5bGVzIEpTWCBjb2RlLlxuXHRcdFx0ICovXG5cdFx0XHRwcmludEVtcHR5Rm9ybXNOb3RpY2UoIGNsaWVudElkICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scyBrZXk9XCJ3cGZvcm1zLWd1dGVuYmVyZy1mb3JtLXNlbGVjdG9yLWluc3BlY3Rvci1tYWluLXNldHRpbmdzXCI+XG5cdFx0XHRcdFx0XHQ8UGFuZWxCb2R5IGNsYXNzTmFtZT1cIndwZm9ybXMtZ3V0ZW5iZXJnLXBhbmVsXCIgdGl0bGU9eyBzdHJpbmdzLmZvcm1fc2V0dGluZ3MgfT5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwid3Bmb3Jtcy1ndXRlbmJlcmctcGFuZWwtbm90aWNlIHdwZm9ybXMtd2FybmluZyB3cGZvcm1zLWVtcHR5LWZvcm0tbm90aWNlXCIgc3R5bGU9eyB7IGRpc3BsYXk6ICdibG9jaycgfSB9PlxuXHRcdFx0XHRcdFx0XHRcdDxzdHJvbmc+eyBfXyggJ1lvdSBoYXZlbuKAmXQgY3JlYXRlZCBhIGZvcm0sIHlldCEnLCAnd3Bmb3Jtcy1saXRlJyApIH08L3N0cm9uZz5cblx0XHRcdFx0XHRcdFx0XHR7IF9fKCAnV2hhdCBhcmUgeW91IHdhaXRpbmcgZm9yPycsICd3cGZvcm1zLWxpdGUnICkgfVxuXHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImdldC1zdGFydGVkLWJ1dHRvbiBjb21wb25lbnRzLWJ1dHRvbiBpcy1zZWNvbmRhcnlcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e1xuXHRcdFx0XHRcdFx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcHAub3BlbkJ1aWxkZXJQb3B1cCggY2xpZW50SWQgKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7IF9fKCAnR2V0IFN0YXJ0ZWQnLCAnd3Bmb3Jtcy1saXRlJyApIH1cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBHZXQgRmllbGQgc3R5bGVzIEpTWCBjb2RlLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBzaW5jZSAxLjguMVxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAgICAgICBCbG9jayBwcm9wZXJ0aWVzLlxuXHRcdFx0ICogQHBhcmFtIHtPYmplY3R9IGhhbmRsZXJzICAgIEJsb2NrIGV2ZW50IGhhbmRsZXJzLlxuXHRcdFx0ICogQHBhcmFtIHtPYmplY3R9IHNpemVPcHRpb25zIFNpemUgc2VsZWN0b3Igb3B0aW9ucy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcmV0dXJuIHtPYmplY3R9IEZpZWxkIHN0eWxlcyBKU1ggY29kZS5cblx0XHRcdCAqL1xuXHRcdFx0Z2V0RmllbGRTdHlsZXMoIHByb3BzLCBoYW5kbGVycywgc2l6ZU9wdGlvbnMgKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxQYW5lbEJvZHkgY2xhc3NOYW1lPXsgYXBwLmdldFBhbmVsQ2xhc3MoIHByb3BzICkgfSB0aXRsZT17IHN0cmluZ3MuZmllbGRfc3R5bGVzIH0+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ3cGZvcm1zLWd1dGVuYmVyZy1wYW5lbC1ub3RpY2Ugd3Bmb3Jtcy11c2UtbW9kZXJuLW5vdGljZVwiPlxuXHRcdFx0XHRcdFx0XHQ8c3Ryb25nPnsgc3RyaW5ncy51c2VfbW9kZXJuX25vdGljZV9oZWFkIH08L3N0cm9uZz5cblx0XHRcdFx0XHRcdFx0eyBzdHJpbmdzLnVzZV9tb2Rlcm5fbm90aWNlX3RleHQgfSA8YSBocmVmPXsgc3RyaW5ncy51c2VfbW9kZXJuX25vdGljZV9saW5rIH0gcmVsPVwibm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPnsgc3RyaW5ncy5sZWFybl9tb3JlIH08L2E+XG5cdFx0XHRcdFx0XHQ8L3A+XG5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIndwZm9ybXMtZ3V0ZW5iZXJnLXBhbmVsLW5vdGljZSB3cGZvcm1zLXdhcm5pbmcgd3Bmb3Jtcy1sZWFkLWZvcm0tbm90aWNlXCIgc3R5bGU9eyB7IGRpc3BsYXk6ICdub25lJyB9IH0+XG5cdFx0XHRcdFx0XHRcdDxzdHJvbmc+eyBzdHJpbmdzLmxlYWRfZm9ybXNfcGFuZWxfbm90aWNlX2hlYWQgfTwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0XHR7IHN0cmluZ3MubGVhZF9mb3Jtc19wYW5lbF9ub3RpY2VfdGV4dCB9XG5cdFx0XHRcdFx0XHQ8L3A+XG5cblx0XHRcdFx0XHRcdDxGbGV4IGdhcD17IDQgfSBhbGlnbj1cImZsZXgtc3RhcnRcIiBjbGFzc05hbWU9eyAnd3Bmb3Jtcy1ndXRlbmJlcmctZm9ybS1zZWxlY3Rvci1mbGV4JyB9IGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XG5cdFx0XHRcdFx0XHRcdDxGbGV4QmxvY2s+XG5cdFx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgc3RyaW5ncy5zaXplIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgcHJvcHMuYXR0cmlidXRlcy5maWVsZFNpemUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17IHNpemVPcHRpb25zIH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IGhhbmRsZXJzLnN0eWxlQXR0ckNoYW5nZSggJ2ZpZWxkU2l6ZScsIHZhbHVlICkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvRmxleEJsb2NrPlxuXHRcdFx0XHRcdFx0XHQ8RmxleEJsb2NrPlxuXHRcdFx0XHRcdFx0XHRcdDxfX2V4cGVyaW1lbnRhbFVuaXRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IHN0cmluZ3MuYm9yZGVyX3JhZGl1cyB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IHByb3BzLmF0dHJpYnV0ZXMuZmllbGRCb3JkZXJSYWRpdXMgfVxuXHRcdFx0XHRcdFx0XHRcdFx0aXNVbml0U2VsZWN0VGFiYmFibGVcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IGhhbmRsZXJzLnN0eWxlQXR0ckNoYW5nZSggJ2ZpZWxkQm9yZGVyUmFkaXVzJywgdmFsdWUgKSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9GbGV4QmxvY2s+XG5cdFx0XHRcdFx0XHQ8L0ZsZXg+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3Bmb3Jtcy1ndXRlbmJlcmctZm9ybS1zZWxlY3Rvci1jb2xvci1waWNrZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cGZvcm1zLWd1dGVuYmVyZy1mb3JtLXNlbGVjdG9yLWNvbnRyb2wtbGFiZWxcIj57IHN0cmluZ3MuY29sb3JzIH08L2Rpdj5cblx0XHRcdFx0XHRcdFx0PFBhbmVsQ29sb3JTZXR0aW5nc1xuXHRcdFx0XHRcdFx0XHRcdF9fZXhwZXJpbWVudGFsSXNSZW5kZXJlZEluU2lkZWJhclxuXHRcdFx0XHRcdFx0XHRcdGVuYWJsZUFscGhhXG5cdFx0XHRcdFx0XHRcdFx0c2hvd1RpdGxlPXsgZmFsc2UgfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIndwZm9ybXMtZ3V0ZW5iZXJnLWZvcm0tc2VsZWN0b3ItY29sb3ItcGFuZWxcIlxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yU2V0dGluZ3M9eyBbXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLmZpZWxkQmFja2dyb3VuZENvbG9yLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogKCB2YWx1ZSApID0+IGhhbmRsZXJzLnN0eWxlQXR0ckNoYW5nZSggJ2ZpZWxkQmFja2dyb3VuZENvbG9yJywgdmFsdWUgKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IHN0cmluZ3MuYmFja2dyb3VuZCxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLmZpZWxkQm9yZGVyQ29sb3IsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiAoIHZhbHVlICkgPT4gaGFuZGxlcnMuc3R5bGVBdHRyQ2hhbmdlKCAnZmllbGRCb3JkZXJDb2xvcicsIHZhbHVlICksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBzdHJpbmdzLmJvcmRlcixcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLmZpZWxkVGV4dENvbG9yLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogKCB2YWx1ZSApID0+IGhhbmRsZXJzLnN0eWxlQXR0ckNoYW5nZSggJ2ZpZWxkVGV4dENvbG9yJywgdmFsdWUgKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IHN0cmluZ3MudGV4dCxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0KTtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogR2V0IExhYmVsIHN0eWxlcyBKU1ggY29kZS5cblx0XHRcdCAqXG5cdFx0XHQgKiBAc2luY2UgMS44LjFcblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgICAgICAgQmxvY2sgcHJvcGVydGllcy5cblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBoYW5kbGVycyAgICBCbG9jayBldmVudCBoYW5kbGVycy5cblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBzaXplT3B0aW9ucyBTaXplIHNlbGVjdG9yIG9wdGlvbnMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHJldHVybiB7T2JqZWN0fSBMYWJlbCBzdHlsZXMgSlNYIGNvZGUuXG5cdFx0XHQgKi9cblx0XHRcdGdldExhYmVsU3R5bGVzKCBwcm9wcywgaGFuZGxlcnMsIHNpemVPcHRpb25zICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxQYW5lbEJvZHkgY2xhc3NOYW1lPXsgYXBwLmdldFBhbmVsQ2xhc3MoIHByb3BzICkgfSB0aXRsZT17IHN0cmluZ3MubGFiZWxfc3R5bGVzIH0+XG5cdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IHN0cmluZ3Muc2l6ZSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgcHJvcHMuYXR0cmlidXRlcy5sYWJlbFNpemUgfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3cGZvcm1zLWd1dGVuYmVyZy1mb3JtLXNlbGVjdG9yLWZpeC1ib3R0b20tbWFyZ2luXCJcblx0XHRcdFx0XHRcdFx0b3B0aW9ucz17IHNpemVPcHRpb25zIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gaGFuZGxlcnMuc3R5bGVBdHRyQ2hhbmdlKCAnbGFiZWxTaXplJywgdmFsdWUgKSB9XG5cdFx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndwZm9ybXMtZ3V0ZW5iZXJnLWZvcm0tc2VsZWN0b3ItY29sb3ItcGlja2VyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3Bmb3Jtcy1ndXRlbmJlcmctZm9ybS1zZWxlY3Rvci1jb250cm9sLWxhYmVsXCI+eyBzdHJpbmdzLmNvbG9ycyB9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxQYW5lbENvbG9yU2V0dGluZ3Ncblx0XHRcdFx0XHRcdFx0XHRfX2V4cGVyaW1lbnRhbElzUmVuZGVyZWRJblNpZGViYXJcblx0XHRcdFx0XHRcdFx0XHRlbmFibGVBbHBoYVxuXHRcdFx0XHRcdFx0XHRcdHNob3dUaXRsZT17IGZhbHNlIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3cGZvcm1zLWd1dGVuYmVyZy1mb3JtLXNlbGVjdG9yLWNvbG9yLXBhbmVsXCJcblx0XHRcdFx0XHRcdFx0XHRjb2xvclNldHRpbmdzPXsgW1xuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy5sYWJlbENvbG9yLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogKCB2YWx1ZSApID0+IGhhbmRsZXJzLnN0eWxlQXR0ckNoYW5nZSggJ2xhYmVsQ29sb3InLCB2YWx1ZSApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogc3RyaW5ncy5sYWJlbCxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLmxhYmVsU3VibGFiZWxDb2xvcixcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6ICggdmFsdWUgKSA9PiBoYW5kbGVycy5zdHlsZUF0dHJDaGFuZ2UoICdsYWJlbFN1YmxhYmVsQ29sb3InLCB2YWx1ZSApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogc3RyaW5ncy5zdWJsYWJlbF9oaW50cy5yZXBsYWNlKCAnJmFtcDsnLCAnJicgKSxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLmxhYmVsRXJyb3JDb2xvcixcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6ICggdmFsdWUgKSA9PiBoYW5kbGVycy5zdHlsZUF0dHJDaGFuZ2UoICdsYWJlbEVycm9yQ29sb3InLCB2YWx1ZSApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogc3RyaW5ncy5lcnJvcl9tZXNzYWdlLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRdIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQpO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBHZXQgQnV0dG9uIHN0eWxlcyBKU1ggY29kZS5cblx0XHRcdCAqXG5cdFx0XHQgKiBAc2luY2UgMS44LjFcblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgICAgICAgQmxvY2sgcHJvcGVydGllcy5cblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBoYW5kbGVycyAgICBCbG9jayBldmVudCBoYW5kbGVycy5cblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBzaXplT3B0aW9ucyBTaXplIHNlbGVjdG9yIG9wdGlvbnMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHJldHVybiB7T2JqZWN0fSAgQnV0dG9uIHN0eWxlcyBKU1ggY29kZS5cblx0XHRcdCAqL1xuXHRcdFx0Z2V0QnV0dG9uU3R5bGVzKCBwcm9wcywgaGFuZGxlcnMsIHNpemVPcHRpb25zICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxQYW5lbEJvZHkgY2xhc3NOYW1lPXsgYXBwLmdldFBhbmVsQ2xhc3MoIHByb3BzICkgfSB0aXRsZT17IHN0cmluZ3MuYnV0dG9uX3N0eWxlcyB9PlxuXHRcdFx0XHRcdFx0PEZsZXggZ2FwPXsgNCB9IGFsaWduPVwiZmxleC1zdGFydFwiIGNsYXNzTmFtZT17ICd3cGZvcm1zLWd1dGVuYmVyZy1mb3JtLXNlbGVjdG9yLWZsZXgnIH0ganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cblx0XHRcdFx0XHRcdFx0PEZsZXhCbG9jaz5cblx0XHRcdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBzdHJpbmdzLnNpemUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBwcm9wcy5hdHRyaWJ1dGVzLmJ1dHRvblNpemUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17IHNpemVPcHRpb25zIH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IGhhbmRsZXJzLnN0eWxlQXR0ckNoYW5nZSggJ2J1dHRvblNpemUnLCB2YWx1ZSApIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0ZsZXhCbG9jaz5cblx0XHRcdFx0XHRcdFx0PEZsZXhCbG9jaz5cblx0XHRcdFx0XHRcdFx0XHQ8X19leHBlcmltZW50YWxVbml0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gaGFuZGxlcnMuc3R5bGVBdHRyQ2hhbmdlKCAnYnV0dG9uQm9yZGVyUmFkaXVzJywgdmFsdWUgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IHN0cmluZ3MuYm9yZGVyX3JhZGl1cyB9XG5cdFx0XHRcdFx0XHRcdFx0XHRpc1VuaXRTZWxlY3RUYWJiYWJsZVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBwcm9wcy5hdHRyaWJ1dGVzLmJ1dHRvbkJvcmRlclJhZGl1cyB9IC8+XG5cdFx0XHRcdFx0XHRcdDwvRmxleEJsb2NrPlxuXHRcdFx0XHRcdFx0PC9GbGV4PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndwZm9ybXMtZ3V0ZW5iZXJnLWZvcm0tc2VsZWN0b3ItY29sb3ItcGlja2VyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3Bmb3Jtcy1ndXRlbmJlcmctZm9ybS1zZWxlY3Rvci1jb250cm9sLWxhYmVsXCI+eyBzdHJpbmdzLmNvbG9ycyB9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxQYW5lbENvbG9yU2V0dGluZ3Ncblx0XHRcdFx0XHRcdFx0XHRfX2V4cGVyaW1lbnRhbElzUmVuZGVyZWRJblNpZGViYXJcblx0XHRcdFx0XHRcdFx0XHRlbmFibGVBbHBoYVxuXHRcdFx0XHRcdFx0XHRcdHNob3dUaXRsZT17IGZhbHNlIH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3cGZvcm1zLWd1dGVuYmVyZy1mb3JtLXNlbGVjdG9yLWNvbG9yLXBhbmVsXCJcblx0XHRcdFx0XHRcdFx0XHRjb2xvclNldHRpbmdzPXsgW1xuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy5idXR0b25CYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiAoIHZhbHVlICkgPT4gaGFuZGxlcnMuc3R5bGVBdHRyQ2hhbmdlKCAnYnV0dG9uQmFja2dyb3VuZENvbG9yJywgdmFsdWUgKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IHN0cmluZ3MuYmFja2dyb3VuZCxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLmJ1dHRvblRleHRDb2xvcixcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6ICggdmFsdWUgKSA9PiBoYW5kbGVycy5zdHlsZUF0dHJDaGFuZ2UoICdidXR0b25UZXh0Q29sb3InLCB2YWx1ZSApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogc3RyaW5ncy50ZXh0LFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRdIH0gLz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cGZvcm1zLWd1dGVuYmVyZy1mb3JtLXNlbGVjdG9yLWxlZ2VuZCB3cGZvcm1zLWJ1dHRvbi1jb2xvci1ub3RpY2VcIj5cblx0XHRcdFx0XHRcdFx0XHR7IHN0cmluZ3MuYnV0dG9uX2NvbG9yX25vdGljZSB9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdCk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEdldCBzdHlsZSBzZXR0aW5ncyBKU1ggY29kZS5cblx0XHRcdCAqXG5cdFx0XHQgKiBAc2luY2UgMS44LjFcblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgICAgICAgQmxvY2sgcHJvcGVydGllcy5cblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBoYW5kbGVycyAgICBCbG9jayBldmVudCBoYW5kbGVycy5cblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBzaXplT3B0aW9ucyBTaXplIHNlbGVjdG9yIG9wdGlvbnMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHJldHVybiB7T2JqZWN0fSBJbnNwZWN0b3IgY29udHJvbHMgSlNYIGNvZGUuXG5cdFx0XHQgKi9cblx0XHRcdGdldFN0eWxlU2V0dGluZ3MoIHByb3BzLCBoYW5kbGVycywgc2l6ZU9wdGlvbnMgKSB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzIGtleT1cIndwZm9ybXMtZ3V0ZW5iZXJnLWZvcm0tc2VsZWN0b3Itc3R5bGUtc2V0dGluZ3NcIj5cblx0XHRcdFx0XHRcdHsgYXBwLmpzeFBhcnRzLmdldEZpZWxkU3R5bGVzKCBwcm9wcywgaGFuZGxlcnMsIHNpemVPcHRpb25zICkgfVxuXHRcdFx0XHRcdFx0eyBhcHAuanN4UGFydHMuZ2V0TGFiZWxTdHlsZXMoIHByb3BzLCBoYW5kbGVycywgc2l6ZU9wdGlvbnMgKSB9XG5cdFx0XHRcdFx0XHR7IGFwcC5qc3hQYXJ0cy5nZXRCdXR0b25TdHlsZXMoIHByb3BzLCBoYW5kbGVycywgc2l6ZU9wdGlvbnMgKSB9XG5cdFx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0KTtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogR2V0IGFkdmFuY2VkIHNldHRpbmdzIEpTWCBjb2RlLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBzaW5jZSAxLjguMVxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAgICBCbG9jayBwcm9wZXJ0aWVzLlxuXHRcdFx0ICogQHBhcmFtIHtPYmplY3R9IGhhbmRsZXJzIEJsb2NrIGV2ZW50IGhhbmRsZXJzLlxuXHRcdFx0ICpcblx0XHRcdCAqIEByZXR1cm4ge09iamVjdH0gSW5zcGVjdG9yIGFkdmFuY2VkIGNvbnRyb2xzIEpTWCBjb2RlLlxuXHRcdFx0ICovXG5cdFx0XHRnZXRBZHZhbmNlZFNldHRpbmdzKCBwcm9wcywgaGFuZGxlcnMgKSB7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuXHRcdFx0XHRjb25zdCBbIGlzT3Blbiwgc2V0T3BlbiBdID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cdFx0XHRcdGNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHNldE9wZW4oIHRydWUgKTtcblx0XHRcdFx0Y29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHNldE9wZW4oIGZhbHNlICk7XG5cblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8SW5zcGVjdG9yQWR2YW5jZWRDb250cm9scz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgYXBwLmdldFBhbmVsQ2xhc3MoIHByb3BzICkgfT5cblx0XHRcdFx0XHRcdFx0PFRleHRhcmVhQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgc3RyaW5ncy5jb3B5X3Bhc3RlX3NldHRpbmdzIH1cblx0XHRcdFx0XHRcdFx0XHRyb3dzPVwiNFwiXG5cdFx0XHRcdFx0XHRcdFx0c3BlbGxDaGVjaz1cImZhbHNlXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IHByb3BzLmF0dHJpYnV0ZXMuY29weVBhc3RlSnNvblZhbHVlIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggdmFsdWUgKSA9PiBoYW5kbGVycy5wYXN0ZVNldHRpbmdzKCB2YWx1ZSApIH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cGZvcm1zLWd1dGVuYmVyZy1mb3JtLXNlbGVjdG9yLWxlZ2VuZFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IHN0cmluZ3MuY29weV9wYXN0ZV9ub3RpY2UgfSB9PjwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPVwid3Bmb3Jtcy1ndXRlbmJlcmctZm9ybS1zZWxlY3Rvci1yZXNldC1idXR0b25cIiBvbkNsaWNrPXsgb3Blbk1vZGFsIH0+eyBzdHJpbmdzLnJlc2V0X3N0eWxlX3NldHRpbmdzIH08L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHR7IGlzT3BlbiAmJiAoXG5cdFx0XHRcdFx0XHRcdDxNb2RhbCBjbGFzc05hbWU9XCJ3cGZvcm1zLWd1dGVuYmVyZy1tb2RhbFwiXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU9eyBzdHJpbmdzLnJlc2V0X3N0eWxlX3NldHRpbmdzIH1cblx0XHRcdFx0XHRcdFx0XHRvblJlcXVlc3RDbG9zZT17IGNsb3NlTW9kYWwgfT5cblxuXHRcdFx0XHRcdFx0XHRcdDxwPnsgc3RyaW5ncy5yZXNldF9zZXR0aW5nc19jb25maXJtX3RleHQgfTwvcD5cblxuXHRcdFx0XHRcdFx0XHRcdDxGbGV4IGdhcD17IDMgfSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJmbGV4LWVuZFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBpc1NlY29uZGFyeSBvbkNsaWNrPXsgY2xvc2VNb2RhbCB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IHN0cmluZ3MuYnRuX25vIH1cblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGlzUHJpbWFyeSBvbkNsaWNrPXsgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbG9zZU1vZGFsKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZXJzLnJlc2V0U2V0dGluZ3MoKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBzdHJpbmdzLmJ0bl95ZXNfcmVzZXQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9GbGV4PlxuXHRcdFx0XHRcdFx0XHQ8L01vZGFsPlxuXHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0PC9JbnNwZWN0b3JBZHZhbmNlZENvbnRyb2xzPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBHZXQgYmxvY2sgY29udGVudCBKU1ggY29kZS5cblx0XHRcdCAqXG5cdFx0XHQgKiBAc2luY2UgMS44LjFcblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgQmxvY2sgcHJvcGVydGllcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcmV0dXJuIHtKU1guRWxlbWVudH0gQmxvY2sgY29udGVudCBKU1ggY29kZS5cblx0XHRcdCAqL1xuXHRcdFx0Z2V0QmxvY2tGb3JtQ29udGVudCggcHJvcHMgKSB7XG5cdFx0XHRcdGlmICggdHJpZ2dlclNlcnZlclJlbmRlciApIHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PFNlcnZlclNpZGVSZW5kZXJcblx0XHRcdFx0XHRcdFx0a2V5PVwid3Bmb3Jtcy1ndXRlbmJlcmctZm9ybS1zZWxlY3Rvci1zZXJ2ZXItc2lkZS1yZW5kZXJlclwiXG5cdFx0XHRcdFx0XHRcdGJsb2NrPVwid3Bmb3Jtcy9mb3JtLXNlbGVjdG9yXCJcblx0XHRcdFx0XHRcdFx0YXR0cmlidXRlcz17IHByb3BzLmF0dHJpYnV0ZXMgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgY2xpZW50SWQgPSBwcm9wcy5jbGllbnRJZDtcblx0XHRcdFx0Y29uc3QgYmxvY2sgPSBhcHAuZ2V0QmxvY2tDb250YWluZXIoIHByb3BzICk7XG5cblx0XHRcdFx0Ly8gSW4gdGhlIGNhc2Ugb2YgZW1wdHkgY29udGVudCwgdXNlIHNlcnZlciBzaWRlIHJlbmRlcmVyLlxuXHRcdFx0XHQvLyBUaGlzIGhhcHBlbnMgd2hlbiB0aGUgYmxvY2sgaXMgZHVwbGljYXRlZCBvciBjb252ZXJ0ZWQgdG8gYSByZXVzYWJsZSBibG9jay5cblx0XHRcdFx0aWYgKCAhIGJsb2NrIHx8ICEgYmxvY2suaW5uZXJIVE1MICkge1xuXHRcdFx0XHRcdHRyaWdnZXJTZXJ2ZXJSZW5kZXIgPSB0cnVlO1xuXG5cdFx0XHRcdFx0cmV0dXJuIGFwcC5qc3hQYXJ0cy5nZXRCbG9ja0Zvcm1Db250ZW50KCBwcm9wcyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YmxvY2tzWyBjbGllbnRJZCBdID0gYmxvY2tzWyBjbGllbnRJZCBdIHx8IHt9O1xuXHRcdFx0XHRibG9ja3NbIGNsaWVudElkIF0uYmxvY2tIVE1MID0gYmxvY2suaW5uZXJIVE1MO1xuXHRcdFx0XHRibG9ja3NbIGNsaWVudElkIF0ubG9hZGVkRm9ybUlkID0gcHJvcHMuYXR0cmlidXRlcy5mb3JtSWQ7XG5cblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8RnJhZ21lbnQga2V5PVwid3Bmb3Jtcy1ndXRlbmJlcmctZm9ybS1zZWxlY3Rvci1mcmFnbWVudC1mb3JtLWh0bWxcIj5cblx0XHRcdFx0XHRcdDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogYmxvY2tzWyBjbGllbnRJZCBdLmJsb2NrSFRNTCB9IH0gLz5cblx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHQpO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBHZXQgYmxvY2sgcHJldmlldyBKU1ggY29kZS5cblx0XHRcdCAqXG5cdFx0XHQgKiBAc2luY2UgMS44LjFcblx0XHRcdCAqXG5cdFx0XHQgKiBAcmV0dXJuIHtKU1guRWxlbWVudH0gQmxvY2sgcHJldmlldyBKU1ggY29kZS5cblx0XHRcdCAqL1xuXHRcdFx0Z2V0QmxvY2tQcmV2aWV3KCkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxGcmFnbWVudFxuXHRcdFx0XHRcdFx0a2V5PVwid3Bmb3Jtcy1ndXRlbmJlcmctZm9ybS1zZWxlY3Rvci1mcmFnbWVudC1ibG9jay1wcmV2aWV3XCI+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17IHdwZm9ybXNfZ3V0ZW5iZXJnX2Zvcm1fc2VsZWN0b3IuYmxvY2tfcHJldmlld191cmwgfSBzdHlsZT17IHsgd2lkdGg6ICcxMDAlJyB9IH0gYWx0PVwiXCIgLz5cblx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHQpO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBHZXQgYmxvY2sgZW1wdHkgSlNYIGNvZGUuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHNpbmNlIDEuOC4zXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtPYmplY3R9IHByb3BzIEJsb2NrIHByb3BlcnRpZXMuXG5cdFx0XHQgKiBAcmV0dXJuIHtKU1guRWxlbWVudH0gQmxvY2sgZW1wdHkgSlNYIGNvZGUuXG5cdFx0XHQgKi9cblx0XHRcdGdldEVtcHR5Rm9ybXNQcmV2aWV3KCBwcm9wcyApIHtcblx0XHRcdFx0Y29uc3QgY2xpZW50SWQgPSBwcm9wcy5jbGllbnRJZDtcblxuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxGcmFnbWVudFxuXHRcdFx0XHRcdFx0a2V5PVwid3Bmb3Jtcy1ndXRlbmJlcmctZm9ybS1zZWxlY3Rvci1mcmFnbWVudC1ibG9jay1lbXB0eVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cGZvcm1zLW5vLWZvcm0tcHJldmlld1wiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17IHdwZm9ybXNfZ3V0ZW5iZXJnX2Zvcm1fc2VsZWN0b3IuYmxvY2tfZW1wdHlfdXJsIH0gYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0Y3JlYXRlSW50ZXJwb2xhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfXyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnWW91IGNhbiB1c2UgPGI+V1BGb3JtczwvYj4gdG8gYnVpbGQgY29udGFjdCBmb3Jtcywgc3VydmV5cywgcGF5bWVudCBmb3JtcywgYW5kIG1vcmUgd2l0aCBqdXN0IGEgZmV3IGNsaWNrcy4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd3cGZvcm1zLWxpdGUnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiOiA8c3Ryb25nIC8+LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImdldC1zdGFydGVkLWJ1dHRvbiBjb21wb25lbnRzLWJ1dHRvbiBpcy1wcmltYXJ5XCJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtcblx0XHRcdFx0XHRcdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXBwLm9wZW5CdWlsZGVyUG9wdXAoIGNsaWVudElkICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0eyBfXyggJ0dldCBTdGFydGVkJywgJ3dwZm9ybXMtbGl0ZScgKSB9XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJlbXB0eS1kZXNjXCI+XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0Y3JlYXRlSW50ZXJwb2xhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfXyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnTmVlZCBzb21lIGhlbHA/IENoZWNrIG91dCBvdXIgPGE+Y29tcHJlaGVuc2l2ZSBndWlkZS48L2E+Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnd3Bmb3Jtcy1saXRlJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L2FuY2hvci1oYXMtY29udGVudFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGE6IDxhIGhyZWY9eyB3cGZvcm1zX2d1dGVuYmVyZ19mb3JtX3NlbGVjdG9yLndwZm9ybXNfZ3VpZGUgfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgLz4sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdDwvcD5cblxuXHRcdFx0XHRcdFx0XHR7IC8qIFRlbXBsYXRlIGZvciBwb3B1cCB3aXRoIGJ1aWxkZXIgaWZyYW1lICovIH1cblx0XHRcdFx0XHRcdFx0PGRpdiBpZD1cIndwZm9ybXMtZ3V0ZW5iZXJnLXBvcHVwXCIgY2xhc3NOYW1lPVwid3Bmb3Jtcy1idWlsZGVyLXBvcHVwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGlmcmFtZSBzcmM9XCJhYm91dDpibGFua1wiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBpZD1cIndwZm9ybXMtYnVpbGRlci1pZnJhbWVcIiB0aXRsZT1cIldQRm9ybXMgQnVpbGRlciBQb3B1cFwiPjwvaWZyYW1lPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdCk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEdldCBibG9jayBwbGFjZWhvbGRlciAoZm9ybSBzZWxlY3RvcikgSlNYIGNvZGUuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHNpbmNlIDEuOC4xXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXMgIEJsb2NrIGF0dHJpYnV0ZXMuXG5cdFx0XHQgKiBAcGFyYW0ge09iamVjdH0gaGFuZGxlcnMgICAgQmxvY2sgZXZlbnQgaGFuZGxlcnMuXG5cdFx0XHQgKiBAcGFyYW0ge09iamVjdH0gZm9ybU9wdGlvbnMgRm9ybSBzZWxlY3RvciBvcHRpb25zLlxuXHRcdFx0ICpcblx0XHRcdCAqIEByZXR1cm4ge0pTWC5FbGVtZW50fSBCbG9jayBwbGFjZWhvbGRlciBKU1ggY29kZS5cblx0XHRcdCAqL1xuXHRcdFx0Z2V0QmxvY2tQbGFjZWhvbGRlciggYXR0cmlidXRlcywgaGFuZGxlcnMsIGZvcm1PcHRpb25zICkge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxQbGFjZWhvbGRlclxuXHRcdFx0XHRcdFx0a2V5PVwid3Bmb3Jtcy1ndXRlbmJlcmctZm9ybS1zZWxlY3Rvci13cmFwXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIndwZm9ybXMtZ3V0ZW5iZXJnLWZvcm0tc2VsZWN0b3Itd3JhcFwiPlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9eyB3cGZvcm1zX2d1dGVuYmVyZ19mb3JtX3NlbGVjdG9yLmxvZ29fdXJsIH0gYWx0PVwiXCIgLz5cblx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdGtleT1cIndwZm9ybXMtZ3V0ZW5iZXJnLWZvcm0tc2VsZWN0b3Itc2VsZWN0LWNvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZm9ybUlkIH1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucz17IGZvcm1PcHRpb25zIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gaGFuZGxlcnMuYXR0ckNoYW5nZSggJ2Zvcm1JZCcsIHZhbHVlICkgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BsYWNlaG9sZGVyPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSxcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogR2V0IFN0eWxlIFNldHRpbmdzIHBhbmVsIGNsYXNzLlxuXHRcdCAqXG5cdFx0ICogQHNpbmNlIDEuOC4xXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgQmxvY2sgcHJvcGVydGllcy5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ30gU3R5bGUgU2V0dGluZ3MgcGFuZWwgY2xhc3MuXG5cdFx0ICovXG5cdFx0Z2V0UGFuZWxDbGFzcyggcHJvcHMgKSB7XG5cdFx0XHRsZXQgY3NzQ2xhc3MgPSAnd3Bmb3Jtcy1ndXRlbmJlcmctcGFuZWwgd3Bmb3Jtcy1ibG9jay1zZXR0aW5ncy0nICsgcHJvcHMuY2xpZW50SWQ7XG5cblx0XHRcdGlmICggISBhcHAuaXNGdWxsU3R5bGluZ0VuYWJsZWQoKSApIHtcblx0XHRcdFx0Y3NzQ2xhc3MgKz0gJyBkaXNhYmxlZF9wYW5lbCc7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBjc3NDbGFzcztcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGZ1bGwgc3R5bGluZyBpcyBlbmFibGVkLlxuXHRcdCAqXG5cdFx0ICogQHNpbmNlIDEuOC4xXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJuIHtib29sZWFufSBXaGV0aGVyIHRoZSBmdWxsIHN0eWxpbmcgaXMgZW5hYmxlZC5cblx0XHQgKi9cblx0XHRpc0Z1bGxTdHlsaW5nRW5hYmxlZCgpIHtcblx0XHRcdHJldHVybiB3cGZvcm1zX2d1dGVuYmVyZ19mb3JtX3NlbGVjdG9yLmlzX21vZGVybl9tYXJrdXAgJiYgd3Bmb3Jtc19ndXRlbmJlcmdfZm9ybV9zZWxlY3Rvci5pc19mdWxsX3N0eWxpbmc7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEdldCBibG9jayBjb250YWluZXIgRE9NIGVsZW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAc2luY2UgMS44LjFcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBCbG9jayBwcm9wZXJ0aWVzLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybiB7RWxlbWVudH0gQmxvY2sgY29udGFpbmVyLlxuXHRcdCAqL1xuXHRcdGdldEJsb2NrQ29udGFpbmVyKCBwcm9wcyApIHtcblx0XHRcdGNvbnN0IGJsb2NrU2VsZWN0b3IgPSBgI2Jsb2NrLSR7IHByb3BzLmNsaWVudElkIH0gPiBkaXZgO1xuXHRcdFx0bGV0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggYmxvY2tTZWxlY3RvciApO1xuXG5cdFx0XHQvLyBGb3IgRlNFIC8gR3V0ZW5iZXJnIHBsdWdpbiB3ZSBuZWVkIHRvIHRha2UgYSBsb29rIGluc2lkZSB0aGUgaWZyYW1lLlxuXHRcdFx0aWYgKCAhIGJsb2NrICkge1xuXHRcdFx0XHRjb25zdCBlZGl0b3JDYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnaWZyYW1lW25hbWU9XCJlZGl0b3ItY2FudmFzXCJdJyApO1xuXG5cdFx0XHRcdGJsb2NrID0gZWRpdG9yQ2FudmFzICYmIGVkaXRvckNhbnZhcy5jb250ZW50V2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGJsb2NrU2VsZWN0b3IgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGJsb2NrO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBHZXQgc2V0dGluZ3MgZmllbGRzIGV2ZW50IGhhbmRsZXJzLlxuXHRcdCAqXG5cdFx0ICogQHNpbmNlIDEuOC4xXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgQmxvY2sgcHJvcGVydGllcy5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm4ge09iamVjdH0gT2JqZWN0IHRoYXQgY29udGFpbnMgZXZlbnQgaGFuZGxlcnMgZm9yIHRoZSBzZXR0aW5ncyBmaWVsZHMuXG5cdFx0ICovXG5cdFx0Z2V0U2V0dGluZ3NGaWVsZHNIYW5kbGVycyggcHJvcHMgKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuXHRcdFx0cmV0dXJuIHtcblxuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogRmllbGQgc3R5bGUgYXR0cmlidXRlIGNoYW5nZSBldmVudCBoYW5kbGVyLlxuXHRcdFx0XHQgKlxuXHRcdFx0XHQgKiBAc2luY2UgMS44LjFcblx0XHRcdFx0ICpcblx0XHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZSBBdHRyaWJ1dGUgbmFtZS5cblx0XHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlICAgICBOZXcgYXR0cmlidXRlIHZhbHVlLlxuXHRcdFx0XHQgKi9cblx0XHRcdFx0c3R5bGVBdHRyQ2hhbmdlKCBhdHRyaWJ1dGUsIHZhbHVlICkge1xuXHRcdFx0XHRcdGNvbnN0IGJsb2NrID0gYXBwLmdldEJsb2NrQ29udGFpbmVyKCBwcm9wcyApLFxuXHRcdFx0XHRcdFx0Y29udGFpbmVyID0gYmxvY2sucXVlcnlTZWxlY3RvciggYCN3cGZvcm1zLSR7IHByb3BzLmF0dHJpYnV0ZXMuZm9ybUlkIH1gICksXG5cdFx0XHRcdFx0XHRwcm9wZXJ0eSA9IGF0dHJpYnV0ZS5yZXBsYWNlKCAvW0EtWl0vZywgKCBsZXR0ZXIgKSA9PiBgLSR7IGxldHRlci50b0xvd2VyQ2FzZSgpIH1gICksXG5cdFx0XHRcdFx0XHRzZXRBdHRyID0ge307XG5cblx0XHRcdFx0XHRpZiAoIGNvbnRhaW5lciApIHtcblx0XHRcdFx0XHRcdHN3aXRjaCAoIHByb3BlcnR5ICkge1xuXHRcdFx0XHRcdFx0XHRjYXNlICdmaWVsZC1zaXplJzpcblx0XHRcdFx0XHRcdFx0Y2FzZSAnbGFiZWwtc2l6ZSc6XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ2J1dHRvbi1zaXplJzpcblx0XHRcdFx0XHRcdFx0XHRmb3IgKCBjb25zdCBrZXkgaW4gc2l6ZXNbIHByb3BlcnR5IF1bIHZhbHVlIF0gKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGAtLXdwZm9ybXMtJHsgcHJvcGVydHkgfS0keyBrZXkgfWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNpemVzWyBwcm9wZXJ0eSBdWyB2YWx1ZSBdWyBrZXkgXSxcblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRjb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoIGAtLXdwZm9ybXMtJHsgcHJvcGVydHkgfWAsIHZhbHVlICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0c2V0QXR0clsgYXR0cmlidXRlIF0gPSB2YWx1ZTtcblxuXHRcdFx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHNldEF0dHIgKTtcblxuXHRcdFx0XHRcdHRyaWdnZXJTZXJ2ZXJSZW5kZXIgPSBmYWxzZTtcblxuXHRcdFx0XHRcdHRoaXMudXBkYXRlQ29weVBhc3RlQ29udGVudCgpO1xuXG5cdFx0XHRcdFx0JCggd2luZG93ICkudHJpZ2dlciggJ3dwZm9ybXNGb3JtU2VsZWN0b3JTdHlsZUF0dHJDaGFuZ2UnLCBbIGJsb2NrLCBwcm9wcywgYXR0cmlidXRlLCB2YWx1ZSBdICk7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIEZpZWxkIHJlZ3VsYXIgYXR0cmlidXRlIGNoYW5nZSBldmVudCBoYW5kbGVyLlxuXHRcdFx0XHQgKlxuXHRcdFx0XHQgKiBAc2luY2UgMS44LjFcblx0XHRcdFx0ICpcblx0XHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZSBBdHRyaWJ1dGUgbmFtZS5cblx0XHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlICAgICBOZXcgYXR0cmlidXRlIHZhbHVlLlxuXHRcdFx0XHQgKi9cblx0XHRcdFx0YXR0ckNoYW5nZSggYXR0cmlidXRlLCB2YWx1ZSApIHtcblx0XHRcdFx0XHRjb25zdCBzZXRBdHRyID0ge307XG5cblx0XHRcdFx0XHRzZXRBdHRyWyBhdHRyaWJ1dGUgXSA9IHZhbHVlO1xuXG5cdFx0XHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyggc2V0QXR0ciApO1xuXG5cdFx0XHRcdFx0dHJpZ2dlclNlcnZlclJlbmRlciA9IHRydWU7XG5cblx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNvcHlQYXN0ZUNvbnRlbnQoKTtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogUmVzZXQgRm9ybSBTdHlsZXMgc2V0dGluZ3MgdG8gZGVmYXVsdHMuXG5cdFx0XHRcdCAqXG5cdFx0XHRcdCAqIEBzaW5jZSAxLjguMVxuXHRcdFx0XHQgKi9cblx0XHRcdFx0cmVzZXRTZXR0aW5ncygpIHtcblx0XHRcdFx0XHRmb3IgKCBjb25zdCBrZXkgaW4gZGVmYXVsdFN0eWxlU2V0dGluZ3MgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN0eWxlQXR0ckNoYW5nZSgga2V5LCBkZWZhdWx0U3R5bGVTZXR0aW5nc1sga2V5IF0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIFVwZGF0ZSBjb250ZW50IG9mIHRoZSBcIkNvcHkvUGFzdGVcIiBmaWVsZHMuXG5cdFx0XHRcdCAqXG5cdFx0XHRcdCAqIEBzaW5jZSAxLjguMVxuXHRcdFx0XHQgKi9cblx0XHRcdFx0dXBkYXRlQ29weVBhc3RlQ29udGVudCgpIHtcblx0XHRcdFx0XHRjb25zdCBjb250ZW50ID0ge307XG5cdFx0XHRcdFx0Y29uc3QgYXR0cyA9IHdwLmRhdGEuc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkuZ2V0QmxvY2tBdHRyaWJ1dGVzKCBwcm9wcy5jbGllbnRJZCApO1xuXG5cdFx0XHRcdFx0Zm9yICggY29uc3Qga2V5IGluIGRlZmF1bHRTdHlsZVNldHRpbmdzICkge1xuXHRcdFx0XHRcdFx0Y29udGVudFsga2V5IF0gPSBhdHRzWyBrZXkgXTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IGNvcHlQYXN0ZUpzb25WYWx1ZTogSlNPTi5zdHJpbmdpZnkoIGNvbnRlbnQgKSB9ICk7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0LyoqXG5cdFx0XHRcdCAqIFBhc3RlIHNldHRpbmdzIGhhbmRsZXIuXG5cdFx0XHRcdCAqXG5cdFx0XHRcdCAqIEBzaW5jZSAxLjguMVxuXHRcdFx0XHQgKlxuXHRcdFx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgTmV3IGF0dHJpYnV0ZSB2YWx1ZS5cblx0XHRcdFx0ICovXG5cdFx0XHRcdHBhc3RlU2V0dGluZ3MoIHZhbHVlICkge1xuXHRcdFx0XHRcdGNvbnN0IHBhc3RlQXR0cmlidXRlcyA9IGFwcC5wYXJzZVZhbGlkYXRlSnNvbiggdmFsdWUgKTtcblxuXHRcdFx0XHRcdGlmICggISBwYXN0ZUF0dHJpYnV0ZXMgKSB7XG5cdFx0XHRcdFx0XHR3cC5kYXRhLmRpc3BhdGNoKCAnY29yZS9ub3RpY2VzJyApLmNyZWF0ZUVycm9yTm90aWNlKFxuXHRcdFx0XHRcdFx0XHRzdHJpbmdzLmNvcHlfcGFzdGVfZXJyb3IsXG5cdFx0XHRcdFx0XHRcdHsgaWQ6ICd3cGZvcm1zLWpzb24tcGFyc2UtZXJyb3InIH1cblx0XHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRcdHRoaXMudXBkYXRlQ29weVBhc3RlQ29udGVudCgpO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cGFzdGVBdHRyaWJ1dGVzLmNvcHlQYXN0ZUpzb25WYWx1ZSA9IHZhbHVlO1xuXG5cdFx0XHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyggcGFzdGVBdHRyaWJ1dGVzICk7XG5cblx0XHRcdFx0XHR0cmlnZ2VyU2VydmVyUmVuZGVyID0gdHJ1ZTtcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFBhcnNlIGFuZCB2YWxpZGF0ZSBKU09OIHN0cmluZy5cblx0XHQgKlxuXHRcdCAqIEBzaW5jZSAxLjguMVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIEpTT04gc3RyaW5nLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybiB7Ym9vbGVhbnxvYmplY3R9IFBhcnNlZCBKU09OIG9iamVjdCBPUiBmYWxzZSBvbiBlcnJvci5cblx0XHQgKi9cblx0XHRwYXJzZVZhbGlkYXRlSnNvbiggdmFsdWUgKSB7XG5cdFx0XHRpZiAoIHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IGF0dHM7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF0dHMgPSBKU09OLnBhcnNlKCB2YWx1ZSApO1xuXHRcdFx0fSBjYXRjaCAoIGVycm9yICkge1xuXHRcdFx0XHRhdHRzID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBhdHRzO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBHZXQgV1BGb3JtcyBpY29uIERPTSBlbGVtZW50LlxuXHRcdCAqXG5cdFx0ICogQHNpbmNlIDEuOC4xXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJuIHtET00uZWxlbWVudH0gV1BGb3JtcyBpY29uIERPTSBlbGVtZW50LlxuXHRcdCAqL1xuXHRcdGdldEljb24oKSB7XG5cdFx0XHRyZXR1cm4gY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3N2ZycsXG5cdFx0XHRcdHsgd2lkdGg6IDIwLCBoZWlnaHQ6IDIwLCB2aWV3Qm94OiAnMCAwIDYxMiA2MTInLCBjbGFzc05hbWU6ICdkYXNoaWNvbicgfSxcblx0XHRcdFx0Y3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQncGF0aCcsXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZmlsbDogJ2N1cnJlbnRDb2xvcicsXG5cdFx0XHRcdFx0XHRkOiAnTTU0NCwwSDY4QzMwLjQ0NSwwLDAsMzAuNDQ1LDAsNjh2NDc2YzAsMzcuNTU2LDMwLjQ0NSw2OCw2OCw2OGg0NzZjMzcuNTU2LDAsNjgtMzAuNDQ0LDY4LTY4VjY4IEM2MTIsMzAuNDQ1LDU4MS41NTYsMCw1NDQsMHogTTQ2NC40NCw2OEwzODcuNiwxMjAuMDJMMzIzLjM0LDY4SDQ2NC40NHogTTI4OC42Niw2OGwtNjQuMjYsNTIuMDJMMTQ3LjU2LDY4SDI4OC42NnogTTU0NCw1NDRINjggVjY4aDIyLjFsMTM2LDkyLjE0bDc5LjktNjQuNmw3OS41Niw2NC42bDEzNi05Mi4xNEg1NDRWNTQ0eiBNMTE0LjI0LDI2My4xNmg5NS44OHYtNDguMjhoLTk1Ljg4VjI2My4xNnogTTExNC4yNCwzNjAuNGg5NS44OCB2LTQ4LjYyaC05NS44OFYzNjAuNHogTTI0Mi43NiwzNjAuNGgyNTV2LTQ4LjYyaC0yNTVWMzYwLjRMMjQyLjc2LDM2MC40eiBNMjQyLjc2LDI2My4xNmgyNTV2LTQ4LjI4aC0yNTVWMjYzLjE2TDI0Mi43NiwyNjMuMTZ6IE0zNjguMjIsNDU3LjNoMTI5LjU0VjQwOEgzNjguMjJWNDU3LjN6Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHQpLFxuXHRcdFx0KTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogR2V0IGJsb2NrIGF0dHJpYnV0ZXMuXG5cdFx0ICpcblx0XHQgKiBAc2luY2UgMS44LjFcblx0XHQgKlxuXHRcdCAqIEByZXR1cm4ge09iamVjdH0gQmxvY2sgYXR0cmlidXRlcy5cblx0XHQgKi9cblx0XHRnZXRCbG9ja0F0dHJpYnV0ZXMoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2xpZW50SWQ6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZWZhdWx0OiAnJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0Zm9ybUlkOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVmYXVsdDogZGVmYXVsdHMuZm9ybUlkLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRkaXNwbGF5VGl0bGU6IHtcblx0XHRcdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRcdFx0ZGVmYXVsdDogZGVmYXVsdHMuZGlzcGxheVRpdGxlLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRkaXNwbGF5RGVzYzoge1xuXHRcdFx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdFx0XHRkZWZhdWx0OiBkZWZhdWx0cy5kaXNwbGF5RGVzYyxcblx0XHRcdFx0fSxcblx0XHRcdFx0cHJldmlldzoge1xuXHRcdFx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0ZmllbGRTaXplOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVmYXVsdDogZGVmYXVsdHMuZmllbGRTaXplLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRmaWVsZEJvcmRlclJhZGl1czoge1xuXHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdGRlZmF1bHQ6IGRlZmF1bHRzLmZpZWxkQm9yZGVyUmFkaXVzLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRmaWVsZEJhY2tncm91bmRDb2xvcjoge1xuXHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdGRlZmF1bHQ6IGRlZmF1bHRzLmZpZWxkQmFja2dyb3VuZENvbG9yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRmaWVsZEJvcmRlckNvbG9yOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVmYXVsdDogZGVmYXVsdHMuZmllbGRCb3JkZXJDb2xvcixcblx0XHRcdFx0fSxcblx0XHRcdFx0ZmllbGRUZXh0Q29sb3I6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZWZhdWx0OiBkZWZhdWx0cy5maWVsZFRleHRDb2xvcixcblx0XHRcdFx0fSxcblx0XHRcdFx0bGFiZWxTaXplOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVmYXVsdDogZGVmYXVsdHMubGFiZWxTaXplLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRsYWJlbENvbG9yOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVmYXVsdDogZGVmYXVsdHMubGFiZWxDb2xvcixcblx0XHRcdFx0fSxcblx0XHRcdFx0bGFiZWxTdWJsYWJlbENvbG9yOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVmYXVsdDogZGVmYXVsdHMubGFiZWxTdWJsYWJlbENvbG9yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRsYWJlbEVycm9yQ29sb3I6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZWZhdWx0OiBkZWZhdWx0cy5sYWJlbEVycm9yQ29sb3IsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJ1dHRvblNpemU6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZWZhdWx0OiBkZWZhdWx0cy5idXR0b25TaXplLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRidXR0b25Cb3JkZXJSYWRpdXM6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZWZhdWx0OiBkZWZhdWx0cy5idXR0b25Cb3JkZXJSYWRpdXMsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJ1dHRvbkJhY2tncm91bmRDb2xvcjoge1xuXHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdGRlZmF1bHQ6IGRlZmF1bHRzLmJ1dHRvbkJhY2tncm91bmRDb2xvcixcblx0XHRcdFx0fSxcblx0XHRcdFx0YnV0dG9uVGV4dENvbG9yOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVmYXVsdDogZGVmYXVsdHMuYnV0dG9uVGV4dENvbG9yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRjb3B5UGFzdGVKc29uVmFsdWU6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZWZhdWx0OiBkZWZhdWx0cy5jb3B5UGFzdGVKc29uVmFsdWUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBHZXQgZm9ybSBzZWxlY3RvciBvcHRpb25zLlxuXHRcdCAqXG5cdFx0ICogQHNpbmNlIDEuOC4xXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJuIHtBcnJheX0gRm9ybSBvcHRpb25zLlxuXHRcdCAqL1xuXHRcdGdldEZvcm1PcHRpb25zKCkge1xuXHRcdFx0Y29uc3QgZm9ybU9wdGlvbnMgPSBmb3JtTGlzdC5tYXAoICggdmFsdWUgKSA9PiAoXG5cdFx0XHRcdHsgdmFsdWU6IHZhbHVlLklELCBsYWJlbDogdmFsdWUucG9zdF90aXRsZSB9XG5cdFx0XHQpICk7XG5cblx0XHRcdGZvcm1PcHRpb25zLnVuc2hpZnQoIHsgdmFsdWU6ICcnLCBsYWJlbDogc3RyaW5ncy5mb3JtX3NlbGVjdCB9ICk7XG5cblx0XHRcdHJldHVybiBmb3JtT3B0aW9ucztcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogR2V0IHNpemUgc2VsZWN0b3Igb3B0aW9ucy5cblx0XHQgKlxuXHRcdCAqIEBzaW5jZSAxLjguMVxuXHRcdCAqXG5cdFx0ICogQHJldHVybiB7QXJyYXl9IFNpemUgb3B0aW9ucy5cblx0XHQgKi9cblx0XHRnZXRTaXplT3B0aW9ucygpIHtcblx0XHRcdHJldHVybiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsYWJlbDogc3RyaW5ncy5zbWFsbCxcblx0XHRcdFx0XHR2YWx1ZTogJ3NtYWxsJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxhYmVsOiBzdHJpbmdzLm1lZGl1bSxcblx0XHRcdFx0XHR2YWx1ZTogJ21lZGl1bScsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsYWJlbDogc3RyaW5ncy5sYXJnZSxcblx0XHRcdFx0XHR2YWx1ZTogJ2xhcmdlJyxcblx0XHRcdFx0fSxcblx0XHRcdF07XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEV2ZW50IGB3cGZvcm1zRm9ybVNlbGVjdG9yRWRpdGAgaGFuZGxlci5cblx0XHQgKlxuXHRcdCAqIEBzaW5jZSAxLjguMVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IGUgICAgIEV2ZW50IG9iamVjdC5cblx0XHQgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgQmxvY2sgcHJvcGVydGllcy5cblx0XHQgKi9cblx0XHRibG9ja0VkaXQoIGUsIHByb3BzICkge1xuXHRcdFx0Y29uc3QgYmxvY2sgPSBhcHAuZ2V0QmxvY2tDb250YWluZXIoIHByb3BzICk7XG5cblx0XHRcdGlmICggISBibG9jayB8fCAhIGJsb2NrLmRhdGFzZXQgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0YXBwLmluaXRMZWFkRm9ybVNldHRpbmdzKCBibG9jay5wYXJlbnRFbGVtZW50ICk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEluaXQgTGVhZCBGb3JtIFNldHRpbmdzIHBhbmVscy5cblx0XHQgKlxuXHRcdCAqIEBzaW5jZSAxLjguMVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtFbGVtZW50fSBibG9jayBCbG9jayBlbGVtZW50LlxuXHRcdCAqL1xuXHRcdGluaXRMZWFkRm9ybVNldHRpbmdzKCBibG9jayApIHtcblx0XHRcdGlmICggISBibG9jayB8fCAhIGJsb2NrLmRhdGFzZXQgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAhIGFwcC5pc0Z1bGxTdHlsaW5nRW5hYmxlZCgpICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGNsaWVudElkID0gYmxvY2suZGF0YXNldC5ibG9jaztcblx0XHRcdGNvbnN0ICRmb3JtID0gJCggYmxvY2sucXVlcnlTZWxlY3RvciggJy53cGZvcm1zLWNvbnRhaW5lcicgKSApO1xuXHRcdFx0Y29uc3QgJHBhbmVsID0gJCggYC53cGZvcm1zLWJsb2NrLXNldHRpbmdzLSR7IGNsaWVudElkIH1gICk7XG5cblx0XHRcdGlmICggJGZvcm0uaGFzQ2xhc3MoICd3cGZvcm1zLWxlYWQtZm9ybXMtY29udGFpbmVyJyApICkge1xuXHRcdFx0XHQkcGFuZWxcblx0XHRcdFx0XHQuYWRkQ2xhc3MoICdkaXNhYmxlZF9wYW5lbCcgKVxuXHRcdFx0XHRcdC5maW5kKCAnLndwZm9ybXMtZ3V0ZW5iZXJnLXBhbmVsLW5vdGljZS53cGZvcm1zLWxlYWQtZm9ybS1ub3RpY2UnIClcblx0XHRcdFx0XHQuY3NzKCAnZGlzcGxheScsICdibG9jaycgKTtcblxuXHRcdFx0XHQkcGFuZWxcblx0XHRcdFx0XHQuZmluZCggJy53cGZvcm1zLWd1dGVuYmVyZy1wYW5lbC1ub3RpY2Uud3Bmb3Jtcy11c2UtbW9kZXJuLW5vdGljZScgKVxuXHRcdFx0XHRcdC5jc3MoICdkaXNwbGF5JywgJ25vbmUnICk7XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQkcGFuZWxcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCAnZGlzYWJsZWRfcGFuZWwnIClcblx0XHRcdFx0LmZpbmQoICcud3Bmb3Jtcy1ndXRlbmJlcmctcGFuZWwtbm90aWNlLndwZm9ybXMtbGVhZC1mb3JtLW5vdGljZScgKVxuXHRcdFx0XHQuY3NzKCAnZGlzcGxheScsICdub25lJyApO1xuXG5cdFx0XHQkcGFuZWxcblx0XHRcdFx0LmZpbmQoICcud3Bmb3Jtcy1ndXRlbmJlcmctcGFuZWwtbm90aWNlLndwZm9ybXMtdXNlLW1vZGVybi1ub3RpY2UnIClcblx0XHRcdFx0LmNzcyggJ2Rpc3BsYXknLCBudWxsICk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEV2ZW50IGB3cGZvcm1zRm9ybVNlbGVjdG9yRm9ybUxvYWRlZGAgaGFuZGxlci5cblx0XHQgKlxuXHRcdCAqIEBzaW5jZSAxLjguMVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IGUgRXZlbnQgb2JqZWN0LlxuXHRcdCAqL1xuXHRcdGZvcm1Mb2FkZWQoIGUgKSB7XG5cdFx0XHRhcHAuaW5pdExlYWRGb3JtU2V0dGluZ3MoIGUuZGV0YWlsLmJsb2NrICk7XG5cdFx0XHRhcHAudXBkYXRlQWNjZW50Q29sb3JzKCBlLmRldGFpbCApO1xuXHRcdFx0YXBwLmxvYWRDaG9pY2VzSlMoIGUuZGV0YWlsICk7XG5cdFx0XHRhcHAuaW5pdFJpY2hUZXh0RmllbGQoIGUuZGV0YWlsLmZvcm1JZCApO1xuXG5cdFx0XHQkKCBlLmRldGFpbC5ibG9jayApXG5cdFx0XHRcdC5vZmYoICdjbGljaycgKVxuXHRcdFx0XHQub24oICdjbGljaycsIGFwcC5ibG9ja0NsaWNrICk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIENsaWNrIG9uIHRoZSBibG9jayBldmVudCBoYW5kbGVyLlxuXHRcdCAqXG5cdFx0ICogQHNpbmNlIDEuOC4xXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gZSBFdmVudCBvYmplY3QuXG5cdFx0ICovXG5cdFx0YmxvY2tDbGljayggZSApIHtcblx0XHRcdGFwcC5pbml0TGVhZEZvcm1TZXR0aW5ncyggZS5jdXJyZW50VGFyZ2V0ICk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFVwZGF0ZSBhY2NlbnQgY29sb3JzIG9mIHNvbWUgZmllbGRzIGluIEdCIGJsb2NrIGluIE1vZGVybiBNYXJrdXAgbW9kZS5cblx0XHQgKlxuXHRcdCAqIEBzaW5jZSAxLjguMVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IGRldGFpbCBFdmVudCBkZXRhaWxzIG9iamVjdC5cblx0XHQgKi9cblx0XHR1cGRhdGVBY2NlbnRDb2xvcnMoIGRldGFpbCApIHtcblx0XHRcdGlmIChcblx0XHRcdFx0ISB3cGZvcm1zX2d1dGVuYmVyZ19mb3JtX3NlbGVjdG9yLmlzX21vZGVybl9tYXJrdXAgfHxcblx0XHRcdFx0ISB3aW5kb3cuV1BGb3JtcyB8fFxuXHRcdFx0XHQhIHdpbmRvdy5XUEZvcm1zLkZyb250ZW5kTW9kZXJuIHx8XG5cdFx0XHRcdCEgZGV0YWlsLmJsb2NrXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCAkZm9ybSA9ICQoIGRldGFpbC5ibG9jay5xdWVyeVNlbGVjdG9yKCBgI3dwZm9ybXMtJHsgZGV0YWlsLmZvcm1JZCB9YCApICksXG5cdFx0XHRcdEZyb250ZW5kTW9kZXJuID0gd2luZG93LldQRm9ybXMuRnJvbnRlbmRNb2Rlcm47XG5cblx0XHRcdEZyb250ZW5kTW9kZXJuLnVwZGF0ZUdCQmxvY2tQYWdlSW5kaWNhdG9yQ29sb3IoICRmb3JtICk7XG5cdFx0XHRGcm9udGVuZE1vZGVybi51cGRhdGVHQkJsb2NrSWNvbkNob2ljZXNDb2xvciggJGZvcm0gKTtcblx0XHRcdEZyb250ZW5kTW9kZXJuLnVwZGF0ZUdCQmxvY2tSYXRpbmdDb2xvciggJGZvcm0gKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogSW5pdCBNb2Rlcm4gc3R5bGUgRHJvcGRvd24gZmllbGRzICg8c2VsZWN0PikuXG5cdFx0ICpcblx0XHQgKiBAc2luY2UgMS44LjFcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBkZXRhaWwgRXZlbnQgZGV0YWlscyBvYmplY3QuXG5cdFx0ICovXG5cdFx0bG9hZENob2ljZXNKUyggZGV0YWlsICkge1xuXHRcdFx0aWYgKCB0eXBlb2Ygd2luZG93LkNob2ljZXMgIT09ICdmdW5jdGlvbicgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgJGZvcm0gPSAkKCBkZXRhaWwuYmxvY2sucXVlcnlTZWxlY3RvciggYCN3cGZvcm1zLSR7IGRldGFpbC5mb3JtSWQgfWAgKSApO1xuXG5cdFx0XHQkZm9ybS5maW5kKCAnLmNob2ljZXNqcy1zZWxlY3QnICkuZWFjaCggZnVuY3Rpb24oIGlkeCwgZWwgKSB7XG5cdFx0XHRcdGNvbnN0ICRlbCA9ICQoIGVsICk7XG5cblx0XHRcdFx0aWYgKCAkZWwuZGF0YSggJ2Nob2ljZScgKSA9PT0gJ2FjdGl2ZScgKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgYXJncyA9IHdpbmRvdy53cGZvcm1zX2Nob2ljZXNqc19jb25maWcgfHwge30sXG5cdFx0XHRcdFx0c2VhcmNoRW5hYmxlZCA9ICRlbC5kYXRhKCAnc2VhcmNoLWVuYWJsZWQnICksXG5cdFx0XHRcdFx0JGZpZWxkID0gJGVsLmNsb3Nlc3QoICcud3Bmb3Jtcy1maWVsZCcgKTtcblxuXHRcdFx0XHRhcmdzLnNlYXJjaEVuYWJsZWQgPSAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIHNlYXJjaEVuYWJsZWQgPyBzZWFyY2hFbmFibGVkIDogdHJ1ZTtcblx0XHRcdFx0YXJncy5jYWxsYmFja09uSW5pdCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzLFxuXHRcdFx0XHRcdFx0JGVsZW1lbnQgPSAkKCBzZWxmLnBhc3NlZEVsZW1lbnQuZWxlbWVudCApLFxuXHRcdFx0XHRcdFx0JGlucHV0ID0gJCggc2VsZi5pbnB1dC5lbGVtZW50ICksXG5cdFx0XHRcdFx0XHRzaXplQ2xhc3MgPSAkZWxlbWVudC5kYXRhKCAnc2l6ZS1jbGFzcycgKTtcblxuXHRcdFx0XHRcdC8vIEFkZCBDU1MtY2xhc3MgZm9yIHNpemUuXG5cdFx0XHRcdFx0aWYgKCBzaXplQ2xhc3MgKSB7XG5cdFx0XHRcdFx0XHQkKCBzZWxmLmNvbnRhaW5lck91dGVyLmVsZW1lbnQgKS5hZGRDbGFzcyggc2l6ZUNsYXNzICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LyoqXG5cdFx0XHRcdFx0ICogSWYgYSBtdWx0aXBsZSBzZWxlY3QgaGFzIHNlbGVjdGVkIGNob2ljZXMgLSBoaWRlIGEgcGxhY2Vob2xkZXIgdGV4dC5cblx0XHRcdFx0XHQgKiBJbiBjYXNlIGlmIHNlbGVjdCBpcyBlbXB0eSAtIHdlIHJldHVybiBwbGFjZWhvbGRlciB0ZXh0IGJhY2suXG5cdFx0XHRcdFx0ICovXG5cdFx0XHRcdFx0aWYgKCAkZWxlbWVudC5wcm9wKCAnbXVsdGlwbGUnICkgKSB7XG5cdFx0XHRcdFx0XHQvLyBPbiBpbml0IGV2ZW50LlxuXHRcdFx0XHRcdFx0JGlucHV0LmRhdGEoICdwbGFjZWhvbGRlcicsICRpbnB1dC5hdHRyKCAncGxhY2Vob2xkZXInICkgKTtcblxuXHRcdFx0XHRcdFx0aWYgKCBzZWxmLmdldFZhbHVlKCB0cnVlICkubGVuZ3RoICkge1xuXHRcdFx0XHRcdFx0XHQkaW5wdXQucmVtb3ZlQXR0ciggJ3BsYWNlaG9sZGVyJyApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuZGlzYWJsZSgpO1xuXHRcdFx0XHRcdCRmaWVsZC5maW5kKCAnLmlzLWRpc2FibGVkJyApLnJlbW92ZUNsYXNzKCAnaXMtZGlzYWJsZWQnICk7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCBjaG9pY2VzSW5zdGFuY2UgPSBuZXcgQ2hvaWNlcyggZWwsIGFyZ3MgKTtcblxuXHRcdFx0XHRcdC8vIFNhdmUgQ2hvaWNlcy5qcyBpbnN0YW5jZSBmb3IgZnV0dXJlIGFjY2Vzcy5cblx0XHRcdFx0XHQkZWwuZGF0YSggJ2Nob2ljZXNqcycsIGNob2ljZXNJbnN0YW5jZSApO1xuXHRcdFx0XHR9IGNhdGNoICggZSApIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcblx0XHRcdH0gKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogSW5pdGlhbGl6ZSBSaWNoVGV4dCBmaWVsZC5cblx0XHQgKlxuXHRcdCAqIEBzaW5jZSAxLjguMVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IGZvcm1JZCBGb3JtIElELlxuXHRcdCAqL1xuXHRcdGluaXRSaWNoVGV4dEZpZWxkKCBmb3JtSWQgKSB7XG5cdFx0XHQvLyBTZXQgZGVmYXVsdCB0YWIgdG8gYFZpc3VhbGAuXG5cdFx0XHQkKCBgI3dwZm9ybXMtJHsgZm9ybUlkIH0gLndwLWVkaXRvci13cmFwYCApLnJlbW92ZUNsYXNzKCAnaHRtbC1hY3RpdmUnICkuYWRkQ2xhc3MoICd0bWNlLWFjdGl2ZScgKTtcblx0XHR9LFxuXHR9O1xuXG5cdC8vIFByb3ZpZGUgYWNjZXNzIHRvIHB1YmxpYyBmdW5jdGlvbnMvcHJvcGVydGllcy5cblx0cmV0dXJuIGFwcDtcbn0oIGRvY3VtZW50LCB3aW5kb3csIGpRdWVyeSApICk7XG5cbi8vIEluaXRpYWxpemUuXG5XUEZvcm1zLkZvcm1TZWxlY3Rvci5pbml0KCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OzsrQ0FDQSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsQ0FBQSxHQUFBSCxDQUFBLENB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
},{}]},{},[1])