"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["fees-receives/receipt"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesReceive/Receipt.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesReceive/Receipt.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2pdf.js */ "./node_modules/html2pdf.js/dist/html2pdf.js");
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2pdf_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_pdfOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/pdfOptions */ "./resources/js/helpers/pdfOptions.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Receipt',
  data: function data() {
    return {
      basic: '',
      printAble: ''
    };
  },
  methods: {
    saveToPDF: function saveToPDF() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _this$printAble;

        var docName;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                docName = "Fee Receive - ".concat((_this$printAble = _this.printAble) === null || _this$printAble === void 0 ? void 0 : _this$printAble.custom, ".pdf");
                _context.next = 3;
                return html2pdf_js__WEBPACK_IMPORTED_MODULE_1___default()(_this.$refs.printMe, (0,_helpers_pdfOptions__WEBPACK_IMPORTED_MODULE_2__["default"])(docName));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    printToPaper: function printToPaper() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$htmlToPaper('printMe');

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    printReceipt: function printReceipt(feeId) {
      var _this3 = this;

      axios.get("/api/fees-receives/".concat(feeId, "/receipt")).then(function (res) {
        _this3.printAble = res.data;
      });
    }
  },
  created: function created() {
    this.basic = this.$store.getters.getBasic;
    this.printReceipt(this.$route.params.custom);
  }
});

/***/ }),

/***/ "./resources/js/components/Accountant/FeesReceive/Receipt.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/Accountant/FeesReceive/Receipt.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Receipt_vue_vue_type_template_id_602a3ed6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Receipt.vue?vue&type=template&id=602a3ed6&scoped=true& */ "./resources/js/components/Accountant/FeesReceive/Receipt.vue?vue&type=template&id=602a3ed6&scoped=true&");
/* harmony import */ var _Receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Receipt.vue?vue&type=script&lang=js& */ "./resources/js/components/Accountant/FeesReceive/Receipt.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Receipt_vue_vue_type_template_id_602a3ed6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Receipt_vue_vue_type_template_id_602a3ed6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "602a3ed6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Accountant/FeesReceive/Receipt.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Accountant/FeesReceive/Receipt.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Accountant/FeesReceive/Receipt.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Receipt.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesReceive/Receipt.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Accountant/FeesReceive/Receipt.vue?vue&type=template&id=602a3ed6&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/Accountant/FeesReceive/Receipt.vue?vue&type=template&id=602a3ed6&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_template_id_602a3ed6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_template_id_602a3ed6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_template_id_602a3ed6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Receipt.vue?vue&type=template&id=602a3ed6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesReceive/Receipt.vue?vue&type=template&id=602a3ed6&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesReceive/Receipt.vue?vue&type=template&id=602a3ed6&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesReceive/Receipt.vue?vue&type=template&id=602a3ed6&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "custom-card",
    {
      attrs: {
        title: _vm.$t("FeesReceiveReceipt"),
        ticon: "fas fa-receipt",
        url: "/fees-receives",
        text: _vm.$t("FeesReceiveList"),
      },
    },
    [
      _c("div", { ref: "printMe", attrs: { id: "printMe" } }, [
        _vm.printAble != ""
          ? _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-6" }, [
                _c("div", { staticClass: "text-center" }, [
                  _c("h3", [_vm._v(_vm._s(_vm.basic.name))]),
                  _vm._v(" "),
                  _c("h5", [_vm._v(_vm._s(_vm.basic.address))]),
                  _vm._v(" "),
                  _c("h5", [
                    _vm._v(
                      _vm._s(_vm.$t("Phone")) + ": " + _vm._s(_vm.basic.phone)
                    ),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "border rounded p-2" }, [
                    _vm._v(_vm._s(_vm.$t("ReceiptOfBill"))),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row mt-3" }, [
                  _c("div", { staticClass: "col-12" }, [
                    _c(
                      "div",
                      { staticClass: "d-flex justify-content-between" },
                      [
                        _c("p", [
                          _vm._v(
                            _vm._s(_vm.$t("Custom")) +
                              ": " +
                              _vm._s(_vm.printAble.custom)
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            _vm._s(_vm.$t("Date")) +
                              ": " +
                              _vm._s(_vm.printAble.updated_at)
                          ),
                        ]),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("p", [
                      _vm._v(
                        _vm._s(_vm.$t("StudentName")) +
                          ": " +
                          _vm._s(_vm.printAble.student_name) +
                          " - (" +
                          _vm._s(_vm.printAble.student_custom) +
                          ")"
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c(
                      "div",
                      { staticClass: "d-flex justify-content-between" },
                      [
                        _c("div", { staticClass: "flex-fill" }, [
                          _c("p", [
                            _vm._v(
                              _vm._s(_vm.$t("Academic_Class")) +
                                ": " +
                                _vm._s(_vm.printAble.academicClass)
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex-fill" }, [
                          _c("p", [
                            _vm._v(
                              _vm._s(_vm.$t("AcademicInfo")) +
                                ": " +
                                _vm._s(_vm.printAble.academicDetail)
                            ),
                          ]),
                        ]),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("table", { staticClass: "table table-bordered" }, [
                      _c("thead", [
                        _c("tr", [
                          _c(
                            "td",
                            {
                              staticClass: "text-right",
                              attrs: { width: "50%" },
                            },
                            [_vm._v(_vm._s(_vm.$t("Details")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass: "text-left",
                              attrs: { width: "50%" },
                            },
                            [_vm._v(_vm._s(_vm.$t("amount")))]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.printAble.items, function (b, r) {
                          return _c("tr", { key: r }, [
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(_vm._s(b.title)),
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(_vm._f("withCurrency")(b.amount))),
                            ]),
                          ])
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c("tfoot", [
                        _c("tr", { staticClass: "bg-gray" }, [
                          _c("td", { staticClass: "text-right" }, [
                            _vm._v(_vm._s(_vm.$t("Total"))),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm._f("withCurrency")(_vm.printAble.total)
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { staticClass: "text-right" }, [
                            _vm._v(_vm._s(_vm.$t("Fine")) + " (+)"),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(_vm._f("withCurrency")(_vm.printAble.fine))
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { staticClass: "text-right" }, [
                            _vm._v(_vm._s(_vm.$t("Waiver")) + " (-)"),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm._f("withCurrency")(_vm.printAble.discount)
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("tr", { staticClass: "bg-indigo" }, [
                          _c("td", { staticClass: "text-right" }, [
                            _vm._v(_vm._s(_vm.$t("GrandTotal"))),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm._f("withCurrency")(
                                  _vm.printAble.total +
                                    _vm.printAble.fine -
                                    _vm.printAble.discount
                                )
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("tr", { staticClass: "bg-cyan" }, [
                          _c("td", { staticClass: "text-right" }, [
                            _vm._v(_vm._s(_vm.$t("PayNow"))),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(_vm._f("withCurrency")(_vm.printAble.pay))
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        !_vm.printAble.is_done
                          ? _c("tr", [
                              _c("td", { staticClass: "text-right" }, [
                                _vm._v(_vm._s(_vm.$t("Due"))),
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(_vm.printAble.due))]),
                            ])
                          : _vm._e(),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("p", [
                      _vm._v(
                        _vm._s(_vm.$t("InWord")) +
                          ": " +
                          _vm._s(
                            _vm._f("toWords")(
                              _vm.printAble.total +
                                _vm.printAble.fine -
                                _vm.printAble.discount
                            )
                          )
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 mt-4" }, [
                    _c(
                      "div",
                      { staticClass: "d-flex justify-content-between" },
                      [
                        _c("p", [_vm._v(_vm._s(_vm.$t("Date")) + ":")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.$t("ReceiverSignature")))]),
                      ]
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-6" }, [
                _c("div", { staticClass: "text-center" }, [
                  _c("h3", [_vm._v(_vm._s(_vm.basic.name))]),
                  _vm._v(" "),
                  _c("h5", [_vm._v(_vm._s(_vm.basic.address))]),
                  _vm._v(" "),
                  _c("h5", [
                    _vm._v(
                      _vm._s(_vm.$t("Phone")) + ": " + _vm._s(_vm.basic.phone)
                    ),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "border rounded p-2" }, [
                    _vm._v(_vm._s(_vm.$t("ReceiptOfBill"))),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row mt-3" }, [
                  _c("div", { staticClass: "col-12" }, [
                    _c(
                      "div",
                      { staticClass: "d-flex justify-content-between" },
                      [
                        _c("p", [
                          _vm._v(
                            _vm._s(_vm.$t("Custom")) +
                              ": " +
                              _vm._s(_vm.printAble.custom)
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            _vm._s(_vm.$t("Date")) +
                              ": " +
                              _vm._s(_vm.printAble.updated_at)
                          ),
                        ]),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("p", [
                      _vm._v(
                        _vm._s(_vm.$t("StudentName")) +
                          ": " +
                          _vm._s(_vm.printAble.student_name) +
                          " - (" +
                          _vm._s(_vm.printAble.student_custom) +
                          ")"
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c(
                      "div",
                      { staticClass: "d-flex justify-content-between" },
                      [
                        _c("div", { staticClass: "flex-fill" }, [
                          _c("p", [
                            _vm._v(
                              _vm._s(_vm.$t("Academic_Class")) +
                                ": " +
                                _vm._s(_vm.printAble.academicClass)
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex-fill" }, [
                          _c("p", [
                            _vm._v(
                              _vm._s(_vm.$t("AcademicInfo")) +
                                ": " +
                                _vm._s(_vm.printAble.academicDetail)
                            ),
                          ]),
                        ]),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("table", { staticClass: "table table-bordered" }, [
                      _c("thead", [
                        _c("tr", [
                          _c(
                            "td",
                            {
                              staticClass: "text-right",
                              attrs: { width: "50%" },
                            },
                            [_vm._v(_vm._s(_vm.$t("Details")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass: "text-left",
                              attrs: { width: "50%" },
                            },
                            [_vm._v(_vm._s(_vm.$t("amount")))]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.printAble.items, function (b, r) {
                          return _c("tr", { key: r }, [
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(_vm._s(b.title)),
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(_vm._f("withCurrency")(b.amount))),
                            ]),
                          ])
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c("tfoot", [
                        _c("tr", { staticClass: "bg-gray" }, [
                          _c("td", { staticClass: "text-right" }, [
                            _vm._v(_vm._s(_vm.$t("Total"))),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm._f("withCurrency")(_vm.printAble.total)
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { staticClass: "text-right" }, [
                            _vm._v(_vm._s(_vm.$t("Fine")) + " (+)"),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(_vm._f("withCurrency")(_vm.printAble.fine))
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { staticClass: "text-right" }, [
                            _vm._v(_vm._s(_vm.$t("Waiver")) + " (-)"),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm._f("withCurrency")(_vm.printAble.discount)
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("tr", { staticClass: "bg-indigo" }, [
                          _c("td", { staticClass: "text-right" }, [
                            _vm._v(_vm._s(_vm.$t("GrandTotal"))),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                _vm._f("withCurrency")(
                                  _vm.printAble.total +
                                    _vm.printAble.fine -
                                    _vm.printAble.discount
                                )
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("tr", { staticClass: "bg-cyan" }, [
                          _c("td", { staticClass: "text-right" }, [
                            _vm._v(_vm._s(_vm.$t("PayNow"))),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(_vm._f("withCurrency")(_vm.printAble.pay))
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        !_vm.printAble.is_done
                          ? _c("tr", [
                              _c("td", { staticClass: "text-right" }, [
                                _vm._v(_vm._s(_vm.$t("Due"))),
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(_vm.printAble.due))]),
                            ])
                          : _vm._e(),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c("p", [
                      _vm._v(
                        _vm._s(_vm.$t("InWord")) +
                          ": " +
                          _vm._s(
                            _vm._f("toWords")(
                              _vm.printAble.total +
                                _vm.printAble.fine -
                                _vm.printAble.discount
                            )
                          )
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 mt-4" }, [
                    _c(
                      "div",
                      { staticClass: "d-flex justify-content-between" },
                      [
                        _c("p", [_vm._v(_vm._s(_vm.$t("Date")) + ":")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.$t("ReceiverSignature")))]),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ])
          : _vm._e(),
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex justify-content-end" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-secondary",
            attrs: { type: "button" },
            on: { click: _vm.saveToPDF },
          },
          [
            _c("i", { staticClass: "fas fa-file-pdf" }),
            _vm._v(" " + _vm._s(_vm.$t("PDF"))),
          ]
        ),
        _vm._v(" \n\t\t"),
        _c(
          "button",
          {
            staticClass: "btn btn-primary",
            attrs: { type: "button" },
            on: { click: _vm.printToPaper },
          },
          [
            _c("i", { staticClass: "fas fa-print" }),
            _vm._v(" " + _vm._s(_vm.$t("Print"))),
          ]
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);