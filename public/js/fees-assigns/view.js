"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["fees-assigns/view"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesAssign/View.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesAssign/View.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FeeView',
  data: function data() {
    return {
      basic: '',
      fees: ''
    };
  },
  methods: {
    saveToPDF: function saveToPDF() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _this$fees, _this$fees2, _this$fees3, _this$fees4;

        var docName;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                docName = "Fees Assign for - ".concat((_this$fees = _this.fees) === null || _this$fees === void 0 ? void 0 : _this$fees.custom, " - ").concat((_this$fees2 = _this.fees) === null || _this$fees2 === void 0 ? void 0 : _this$fees2.student, " - ").concat((_this$fees3 = _this.fees) === null || _this$fees3 === void 0 ? void 0 : _this$fees3["class"], " - ").concat((_this$fees4 = _this.fees) === null || _this$fees4 === void 0 ? void 0 : _this$fees4.classInfo, ".pdf");
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
    loadFeeAssign: function loadFeeAssign() {
      var _this3 = this;

      axios.get("/api/fees-assigns/".concat(this.$route.params.custom, "/").concat(this.$route.params.id, "/view")).then(function (res) {
        _this3.fees = res.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  },
  created: function created() {
    this.basic = this.$store.getters.getBasic;
    this.loadFeeAssign();
  }
});

/***/ }),

/***/ "./resources/js/components/Accountant/FeesAssign/View.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Accountant/FeesAssign/View.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _View_vue_vue_type_template_id_3b26fce4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=3b26fce4&scoped=true& */ "./resources/js/components/Accountant/FeesAssign/View.vue?vue&type=template&id=3b26fce4&scoped=true&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/components/Accountant/FeesAssign/View.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_3b26fce4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _View_vue_vue_type_template_id_3b26fce4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3b26fce4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Accountant/FeesAssign/View.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Accountant/FeesAssign/View.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Accountant/FeesAssign/View.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesAssign/View.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Accountant/FeesAssign/View.vue?vue&type=template&id=3b26fce4&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Accountant/FeesAssign/View.vue?vue&type=template&id=3b26fce4&scoped=true& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_3b26fce4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_3b26fce4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_3b26fce4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./View.vue?vue&type=template&id=3b26fce4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesAssign/View.vue?vue&type=template&id=3b26fce4&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesAssign/View.vue?vue&type=template&id=3b26fce4&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesAssign/View.vue?vue&type=template&id=3b26fce4&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
        title: _vm.$t("ViewFeesAssign"),
        ticon: "fas fa-eye",
        url: "/fees-assigns/create",
        icon: "fas fa-plus",
        text: _vm.$t("NewFeesAssign"),
      },
    },
    [
      _c(
        "div",
        { ref: "printMe", staticClass: "row", attrs: { id: "printMe" } },
        [
          _c("div", { staticClass: "col-12" }, [
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
            ]),
            _vm._v(" "),
            _c("hr"),
          ]),
          _vm._v(" "),
          _vm.fees != ""
            ? _c("div", { staticClass: "col-12 mt-1" }, [
                _c(
                  "table",
                  { staticClass: "table table-striped table-bordered" },
                  [
                    _c("tr", [
                      _c(
                        "th",
                        { staticClass: "text-right", attrs: { width: "50%" } },
                        [_vm._v(_vm._s(_vm.$t("Title")))]
                      ),
                      _vm._v(" "),
                      _c("th", { attrs: { width: "50%" } }, [
                        _vm._v(_vm._s(_vm.$t("Details"))),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(_vm._s(_vm.$t("Academic_Session"))),
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.fees.session))]),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(_vm._s(_vm.$t("AcademicClass"))),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(_vm.fees.class) +
                            " - " +
                            _vm._s(_vm.fees.classInfo)
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(_vm._s(_vm.$t("AcademicID"))),
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.fees.custom))]),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(_vm._s(_vm.$t("StudentInfo"))),
                      ]),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { innerHTML: _vm._s(_vm.fees.student) },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(_vm._s(_vm.$t("GuardianInfo"))),
                      ]),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { innerHTML: _vm._s(_vm.fees.parent) },
                      }),
                    ]),
                  ]
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.fees != ""
            ? _c("div", { staticClass: "col-12 mt-1" }, [
                _c(
                  "table",
                  { staticClass: "table table-bordered table-striped" },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c(
                          "th",
                          { staticClass: "text-left", attrs: { width: "50%" } },
                          [_vm._v(_vm._s(_vm.$t("Title")))]
                        ),
                        _vm._v(" "),
                        _c("th", { attrs: { width: "50%" } }, [
                          _vm._v(
                            _vm._s(_vm.$t("Amount")) +
                              " - " +
                              _vm._s(_vm.$t("BDT"))
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.fees.items, function (l, i) {
                        return _c("tr", { key: i }, [
                          _c("td", { staticClass: "text-left" }, [
                            _vm._v("(" + _vm._s(++i) + ") " + _vm._s(l.title)),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm._f("withCurrency")(l.amount))),
                          ]),
                        ])
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c("tfoot", [
                      _c("tr", [
                        _c("th", { staticClass: "text-right" }, [
                          _vm._v(_vm._s(_vm.$t("TotalFee"))),
                        ]),
                        _vm._v(" "),
                        _c("th", [
                          _vm._v(
                            _vm._s(_vm._f("withCurrency")(_vm.fees.total))
                          ),
                        ]),
                      ]),
                    ]),
                  ]
                ),
              ])
            : _vm._e(),
        ]
      ),
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