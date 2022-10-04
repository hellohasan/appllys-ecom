"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["academic-exams-result"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Academic/Exam/Result.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Academic/Exam/Result.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Result",
  data: function data() {
    return {
      exam: '',
      basic: {}
    };
  },
  methods: {
    printToPaper: function printToPaper() {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var printContents, originalContents;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                printContents = document.getElementById('printMe').innerHTML;
                originalContents = document.body.innerHTML;
                document.body.innerHTML = printContents;
                window.print();
                document.body.innerHTML = originalContents;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    publishResult: function publishResult() {
      var _this = this;

      Swal.fire({
        title: this.$t("confirm_title"),
        icon: "warning",
        html: this.$t("ResultPublishWarning"),
        showCancelButton: true,
        confirmButtonText: this.$t("confirm"),
        cancelButtonText: this.$t("cancel")
      }).then(function (result) {
        if (result.isConfirmed) {
          var custom = _this.$route.params.custom;
          var id = _this.$route.params.id;
          axios.get("/api/academic-exams/".concat(custom, "/").concat(id, "/result/publish")).then(function (res) {
            _this.successPublishMessage();
          });
        }
      });
    },
    loadAcademicExamDetails: function loadAcademicExamDetails() {
      var _this2 = this;

      var custom = this.$route.params.custom;
      var id = this.$route.params.id;
      axios.get("/api/academic-exams/".concat(custom, "/").concat(id, "/result")).then(function (res) {
        _this2.exam = res.data;
      });
    }
  },
  created: function created() {
    this.loadAcademicExamDetails();
    this.basic = this.$store.getters.getBasic;
  }
});

/***/ }),

/***/ "./resources/js/components/Academic/Exam/Result.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Academic/Exam/Result.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Result_vue_vue_type_template_id_23ab2170_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Result.vue?vue&type=template&id=23ab2170&scoped=true& */ "./resources/js/components/Academic/Exam/Result.vue?vue&type=template&id=23ab2170&scoped=true&");
/* harmony import */ var _Result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Result.vue?vue&type=script&lang=js& */ "./resources/js/components/Academic/Exam/Result.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Result_vue_vue_type_template_id_23ab2170_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Result_vue_vue_type_template_id_23ab2170_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "23ab2170",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Academic/Exam/Result.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Academic/Exam/Result.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Academic/Exam/Result.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Result.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Academic/Exam/Result.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Academic/Exam/Result.vue?vue&type=template&id=23ab2170&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Academic/Exam/Result.vue?vue&type=template&id=23ab2170&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_template_id_23ab2170_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_template_id_23ab2170_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_template_id_23ab2170_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Result.vue?vue&type=template&id=23ab2170&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Academic/Exam/Result.vue?vue&type=template&id=23ab2170&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Academic/Exam/Result.vue?vue&type=template&id=23ab2170&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Academic/Exam/Result.vue?vue&type=template&id=23ab2170&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
        title: _vm.$t("ShowExam"),
        url: "/academic-exams",
        text: _vm.$t("ExamList"),
      },
    },
    [
      _c("div", { ref: "printMe", attrs: { id: "printMe" } }, [
        _c("div", { staticClass: "row" }, [
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
          _vm.exam != ""
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
                      _c("td", [_vm._v(_vm._s(_vm.exam.session))]),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(_vm._s(_vm.$t("ExamTitle"))),
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.exam.title))]),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(_vm._s(_vm.$t("AcademicClass"))),
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.exam.academicClass))]),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(_vm._s(_vm.$t("AcademicDetails"))),
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.exam.academicDetail))]),
                    ]),
                  ]
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", { staticClass: "col-12" }, [
            _c("table", { staticClass: "table table-striped table-bordered" }, [
              _c("thead", [
                _c("tr", [
                  _c("th", { attrs: { width: "15%" } }, [
                    _vm._v(_vm._s(_vm.$t("AcademicID"))),
                  ]),
                  _vm._v(" "),
                  _c("th", { attrs: { width: "15%" } }, [
                    _vm._v(_vm._s(_vm.$t("StudentName"))),
                  ]),
                  _vm._v(" "),
                  _c("th", { attrs: { width: "5%" } }, [
                    _vm._v(_vm._s(_vm.$t("Mark"))),
                  ]),
                  _vm._v(" "),
                  _c("th", { attrs: { width: "5%" } }, [
                    _vm._v(_vm._s(_vm.$t("Grade"))),
                  ]),
                  _vm._v(" "),
                  _c("th", { attrs: { width: "5%" } }, [
                    _vm._v(_vm._s(_vm.$t("Point"))),
                  ]),
                  _vm._v(" "),
                  _c("th", { attrs: { width: "55%" } }, [
                    _vm._v(_vm._s(_vm.$t("Mark"))),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.exam.students, function (student, index) {
                  return _c("tr", { key: index }, [
                    _c("td", { staticClass: "align-middle" }, [
                      _vm._v(_vm._s(student.custom)),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "align-middle" }, [
                      _vm._v(_vm._s(student.name)),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "align-middle" }, [
                      _vm._v(
                        _vm._s(
                          student.showResult ? student.totalMarkGain : "***"
                        )
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "align-middle" }, [
                      _c("b", [_vm._v(_vm._s(student.overallGrade))]),
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "align-middle" }, [
                      _vm._v(
                        _vm._s(
                          student.showResult ? student.overallPoint : "***"
                        )
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("table", { staticClass: "table" }, [
                        _c(
                          "tr",
                          _vm._l(student.subjects, function (sub, i) {
                            return _c("th", { key: i }, [
                              _vm._v(_vm._s(sub.subject)),
                            ])
                          }),
                          0
                        ),
                        _vm._v(" "),
                        _c(
                          "tr",
                          _vm._l(student.subjects, function (sub, i) {
                            return _c("td", { key: i }, [
                              _vm._v(_vm._s(sub.mark) + " ("),
                              _c("b", [_vm._v(_vm._s(sub.grade))]),
                              _vm._v(")"),
                            ])
                          }),
                          0
                        ),
                      ]),
                    ]),
                  ])
                }),
                0
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-4" }, [
            _c("table", { staticClass: "table table-bordered" }, [
              _c("thead", [
                _c("tr", [
                  _c("th", [_vm._v(_vm._s(_vm.$t("Grade")))]),
                  _vm._v(" "),
                  _c("th", [_vm._v(_vm._s(_vm.$t("Mark")) + "(%)")]),
                  _vm._v(" "),
                  _c("th", [_vm._v(_vm._s(_vm.$t("Point")))]),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm._l(_vm.exam.percentages, function (percent, ii) {
                    return _c("tr", { key: ii }, [
                      _c("td", [_vm._v(_vm._s(percent.latter))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(percent.min_percentage) +
                            " - " +
                            _vm._s(percent.max_percentage)
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm._f("round_to_2dp")(percent.point))),
                      ]),
                    ])
                  }),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("I")]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.$t("Absent")))]),
                    _vm._v(" "),
                    _c("td", [_vm._v("***")]),
                  ]),
                ],
                2
              ),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-6" }, [
          _c(
            "button",
            {
              directives: [
                {
                  name: "permission",
                  rawName: "v-permission",
                  value: ["academic-exams-result-publish"],
                  expression: "['academic-exams-result-publish']",
                },
              ],
              staticClass: "btn btn-primary btn-block btn-lg",
              attrs: { type: "button" },
              on: { click: _vm.publishResult },
            },
            [
              _c("i", { staticClass: "fas fa-eye" }),
              _vm._v(" " + _vm._s(_vm.$t("PublishResult"))),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-success btn-block btn-lg",
              attrs: { type: "button" },
              on: { click: _vm.printToPaper },
            },
            [
              _c("i", { staticClass: "fas fa-print" }),
              _vm._v(" " + _vm._s(_vm.$t("PrintResult"))),
            ]
          ),
        ]),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);