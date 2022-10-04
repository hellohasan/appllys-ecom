"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["fees-assigns/create"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesAssign/Create.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesAssign/Create.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validatorjs */ "./node_modules/validatorjs/src/validator.js");
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validatorjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Global_CustomInput_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Global/CustomInput.vue */ "./resources/js/components/Global/CustomInput.vue");


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Create",
  components: {
    CustomInput: _Global_CustomInput_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      form: new Form({
        academic_session_id: '',
        academic_class_id: '',
        class_type: '',
        academic_section_id: '',
        academic_group_id: '',
        academic_department_id: '',
        academic_year_id: '',
        fee_type: '',
        student_ids: [],
        items: [],
        total: 0
      }),
      sessions: [],
      classes: [],
      sections: [],
      groups: [],
      departments: [],
      years: [],
      students: [],
      specialStudent: false,
      types: [{
        id: "All",
        text: this.$t("AllStudent")
      }, {
        id: "Specific",
        text: this.$t("SpecificStudent")
      }]
    };
  },
  methods: {
    submitFeeAssign: function submitFeeAssign() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _Validator;

        var validation;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                validation = new validatorjs__WEBPACK_IMPORTED_MODULE_1__(_this.form, (_Validator = {
                  'academic_session_id': ['required'],
                  'academic_class_id': ['required'],
                  'class_type': ['required'],
                  'academic_section_id': ["required_if:class_type,0"],
                  'academic_group_id': ["required_if:class_type,1"]
                }, _defineProperty(_Validator, "academic_section_id", ['required_if:class_type,1']), _defineProperty(_Validator, 'academic_department_id', ['required_if:class_type,2']), _defineProperty(_Validator, 'academic_year_id', ['required_if:class_type,2']), _defineProperty(_Validator, 'fee_type', ['required']), _defineProperty(_Validator, 'student_ids', ['required_if:fee_type,Specific']), _defineProperty(_Validator, 'items', ['required', 'array']), _defineProperty(_Validator, 'items.*.amount', ['required', 'numeric']), _Validator));

                if (!validation.passes()) {
                  _context.next = 6;
                  break;
                }

                _context.next = 4;
                return Swal.fire({
                  title: _this.$t("confirm_title"),
                  icon: "warning",
                  html: _this.$t("FeesAssignWarning"),
                  showCancelButton: true,
                  confirmButtonText: _this.$t("confirm"),
                  cancelButtonText: _this.$t("cancel")
                }).then(function (result) {
                  if (result.isConfirmed) {
                    _this.form.post("/api/submit-fee-for-student").then(function (res) {
                      _this.successCreateMessage();

                      _this.$router.push("/fees-assigns/".concat(res.data.custom, "/show"));
                    })["catch"](function (error) {
                      console.log(error);
                    });
                  }
                });

              case 4:
                _context.next = 7;
                break;

              case 6:
                _this.form.errors.errors = validation.errors.all();

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    deleteItem: function deleteItem(index) {
      if (this.form.items.length > 1) {
        this.form.items.splice(index, 1);
      }
    },
    getTotal: function getTotal() {
      var total = 0;

      _.forEach(this.form.items, function (value) {
        total = parseInt(total) + parseInt(value.amount);
      });

      this.form.total = total;
      return total;
    },
    typeChange: function typeChange(e) {
      if (e == 'Specific') {
        this.specialStudent = true;
      } else {
        this.specialStudent = false;
      }
    },
    loadStudents: function loadStudents() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.students = [];
                _context2.next = 3;
                return _this2.form.post('/api/load-academic-data-with-academic-elements').then(function (res) {
                  _this2.students = res.data;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    classChange: function classChange(classId) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.students = [];

                if (!classId) {
                  _context3.next = 4;
                  break;
                }

                _context3.next = 4;
                return axios.get("/api/load-class-type/".concat(classId)).then(function (res) {
                  _this3.form.class_type = res.data;
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    loadFeeForStudents: function loadFeeForStudents() {
      var _this4 = this;

      axios.get("/api/load-fee-for-student").then(function (res) {
        _this4.form.items = res.data;
      });
    },
    loadAcademicAllElement: function loadAcademicAllElement() {
      var _this5 = this;

      axios.get('/api/load-academic-all-elements').then(function (res) {
        _this5.sessions = res.data.sessions;
        _this5.classes = res.data.classes;
        _this5.sections = res.data.sections;
        _this5.groups = res.data.groups;
        _this5.departments = res.data.departments;
        _this5.years = res.data.years;
      });
    }
  },
  created: function created() {
    this.loadAcademicAllElement();
    this.loadFeeForStudents();
  }
});

/***/ }),

/***/ "./resources/js/components/Accountant/FeesAssign/Create.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Accountant/FeesAssign/Create.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_0e3d17b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=0e3d17b6&scoped=true& */ "./resources/js/components/Accountant/FeesAssign/Create.vue?vue&type=template&id=0e3d17b6&scoped=true&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/components/Accountant/FeesAssign/Create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_0e3d17b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Create_vue_vue_type_template_id_0e3d17b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0e3d17b6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Accountant/FeesAssign/Create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Accountant/FeesAssign/Create.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Accountant/FeesAssign/Create.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesAssign/Create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Accountant/FeesAssign/Create.vue?vue&type=template&id=0e3d17b6&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Accountant/FeesAssign/Create.vue?vue&type=template&id=0e3d17b6&scoped=true& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_0e3d17b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_0e3d17b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_0e3d17b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=template&id=0e3d17b6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesAssign/Create.vue?vue&type=template&id=0e3d17b6&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesAssign/Create.vue?vue&type=template&id=0e3d17b6&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesAssign/Create.vue?vue&type=template&id=0e3d17b6&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
        title: _vm.$t("NewFeesAssign"),
        url: "/fees-assigns",
        text: _vm.$t("FeesAssignList"),
      },
    },
    [
      _c(
        "form",
        {
          on: {
            keydown: function ($event) {
              return _vm.form.onKeydown($event)
            },
          },
        },
        [
          _c(
            "div",
            { staticClass: "form-row" },
            [
              _c("form-group-select", {
                attrs: {
                  col: "col-md-3",
                  form: _vm.form,
                  name: "academic_session_id",
                  options: _vm.sessions,
                  label: _vm.$t("SelectAcademicSession"),
                },
                model: {
                  value: _vm.form.academic_session_id,
                  callback: function ($$v) {
                    _vm.$set(_vm.form, "academic_session_id", $$v)
                  },
                  expression: "form.academic_session_id",
                },
              }),
              _vm._v(" "),
              _c("form-group-select", {
                attrs: {
                  col: "col-md-3",
                  form: _vm.form,
                  name: "academic_class_id",
                  options: _vm.classes,
                  label: _vm.$t("SelectAcademicClass"),
                },
                on: { change: _vm.classChange },
                model: {
                  value: _vm.form.academic_class_id,
                  callback: function ($$v) {
                    _vm.$set(_vm.form, "academic_class_id", $$v)
                  },
                  expression: "form.academic_class_id",
                },
              }),
              _vm._v(" "),
              this.form.class_type == "0"
                ? [
                    _c("form-group-select", {
                      attrs: {
                        col: "col-md-6",
                        form: _vm.form,
                        name: "academic_section_id",
                        options: _vm.sections,
                        label: _vm.$t("SelectAcademicSection"),
                      },
                      model: {
                        value: _vm.form.academic_section_id,
                        callback: function ($$v) {
                          _vm.$set(_vm.form, "academic_section_id", $$v)
                        },
                        expression: "form.academic_section_id",
                      },
                    }),
                  ]
                : _vm._e(),
              _vm._v(" "),
              this.form.class_type == "1"
                ? [
                    _c("form-group-select", {
                      attrs: {
                        col: "col-md-3",
                        form: _vm.form,
                        name: "academic_group_id",
                        options: _vm.groups,
                        label: _vm.$t("SelectAcademicGroup"),
                      },
                      model: {
                        value: _vm.form.academic_group_id,
                        callback: function ($$v) {
                          _vm.$set(_vm.form, "academic_group_id", $$v)
                        },
                        expression: "form.academic_group_id",
                      },
                    }),
                    _vm._v(" "),
                    _c("form-group-select", {
                      attrs: {
                        col: "col-md-3",
                        form: _vm.form,
                        name: "academic_section_id",
                        options: _vm.sections,
                        label: _vm.$t("SelectAcademicSection"),
                      },
                      model: {
                        value: _vm.form.academic_section_id,
                        callback: function ($$v) {
                          _vm.$set(_vm.form, "academic_section_id", $$v)
                        },
                        expression: "form.academic_section_id",
                      },
                    }),
                  ]
                : _vm._e(),
              _vm._v(" "),
              this.form.class_type == "2"
                ? [
                    _c("form-group-select", {
                      attrs: {
                        col: "col-md-3",
                        form: _vm.form,
                        name: "academic_department_id",
                        options: _vm.departments,
                        label: _vm.$t("SelectAcademicDepartment"),
                      },
                      model: {
                        value: _vm.form.academic_department_id,
                        callback: function ($$v) {
                          _vm.$set(_vm.form, "academic_department_id", $$v)
                        },
                        expression: "form.academic_department_id",
                      },
                    }),
                    _vm._v(" "),
                    _c("form-group-select", {
                      attrs: {
                        col: "col-md-3",
                        form: _vm.form,
                        name: "academic_year_id",
                        options: _vm.years,
                        label: _vm.$t("SelectDepartmentYear"),
                      },
                      model: {
                        value: _vm.form.academic_year_id,
                        callback: function ($$v) {
                          _vm.$set(_vm.form, "academic_year_id", $$v)
                        },
                        expression: "form.academic_year_id",
                      },
                    }),
                  ]
                : _vm._e(),
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-lg btn-block",
              attrs: { type: "button", disabled: _vm.form.busy },
              on: { click: _vm.loadStudents },
            },
            [
              _c("i", { staticClass: "fas fa-search" }),
              _vm._v(" " + _vm._s(_vm.$t("LoadStudent"))),
            ]
          ),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm.students.length
            ? [
                _c(
                  "div",
                  { staticClass: "form-row" },
                  [
                    _c("form-group-select", {
                      attrs: {
                        col: "col-md-12",
                        form: _vm.form,
                        name: "fee_type",
                        options: _vm.types,
                        label: _vm.$t("FeeType"),
                      },
                      on: { change: _vm.typeChange },
                      model: {
                        value: _vm.form.fee_type,
                        callback: function ($$v) {
                          _vm.$set(_vm.form, "fee_type", $$v)
                        },
                        expression: "form.fee_type",
                      },
                    }),
                    _vm._v(" "),
                    _vm.specialStudent
                      ? _c("form-group-select-multiple", {
                          attrs: {
                            col: "col-md-12",
                            form: _vm.form,
                            name: "student_ids",
                            options: _vm.students,
                            label: _vm.$t("SelectStudent"),
                          },
                          model: {
                            value: _vm.form.student_ids,
                            callback: function ($$v) {
                              _vm.$set(_vm.form, "student_ids", $$v)
                            },
                            expression: "form.student_ids",
                          },
                        })
                      : _vm._e(),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "d-flex justify-content-between border-bottom",
                      },
                      [_c("h4", [_vm._v(_vm._s(_vm.$t("FeesList")))])]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-12" }, [
                    _c(
                      "table",
                      { staticClass: "table table-bordered table-striped" },
                      [
                        _c("thead", [
                          _c("tr", [
                            _c("th", { staticClass: "text-right" }, [
                              _vm._v(_vm._s(_vm.$t("Title"))),
                            ]),
                            _vm._v(" "),
                            _c("th", [
                              _vm._v(
                                _vm._s(_vm.$t("Amount")) +
                                  " (" +
                                  _vm._s(_vm.$t("BDT")) +
                                  ")"
                              ),
                            ]),
                            _vm._v(" "),
                            _c("th", [_vm._v(_vm._s(_vm.$t("Action")))]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.form.items, function (item, index) {
                            return _c("tr", { key: index }, [
                              _c("td", { staticClass: "text-right" }, [
                                _vm._v(_vm._s(item.title)),
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  item.id == 1001 || item.id == 1002
                                    ? [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(_vm.$t("Predetermined")) +
                                            "\n\t\t\t\t\t\t\t\t\t"
                                        ),
                                      ]
                                    : [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: item.amount,
                                              expression: "item.amount",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": _vm.form.errors.has(
                                              "items." + index + ".amount"
                                            ),
                                          },
                                          attrs: {
                                            type: "number",
                                            min: "0",
                                            placeholder:
                                              _vm.$t("Amount") +
                                              " - (" +
                                              _vm.$t("BDT") +
                                              ")",
                                            name: "items." + index + ".amount",
                                          },
                                          domProps: { value: item.amount },
                                          on: {
                                            input: function ($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                item,
                                                "amount",
                                                $event.target.value
                                              )
                                            },
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c("has-error", {
                                          attrs: {
                                            form: _vm.form,
                                            field: "items." + index + ".amount",
                                          },
                                        }),
                                      ],
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-danger btn-sm",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.deleteItem(index)
                                      },
                                    },
                                  },
                                  [
                                    _c("i", { staticClass: "fas fa-times" }),
                                    _vm._v(" " + _vm._s(_vm.$t("Remove"))),
                                  ]
                                ),
                              ]),
                            ])
                          }),
                          0
                        ),
                        _vm._v(" "),
                        _c("tfoot", [
                          _c("tr", [
                            _c("th", { staticClass: "text-right" }, [
                              _vm._v(_vm._s(_vm.$t("Total"))),
                            ]),
                            _vm._v(" "),
                            _c("th", [
                              _vm._v(
                                _vm._s(_vm._f("withCurrency")(_vm.getTotal()))
                              ),
                            ]),
                          ]),
                        ]),
                      ]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btn-lg btn-block",
                    attrs: { type: "button", disabled: _vm.form.busy },
                    on: { click: _vm.submitFeeAssign },
                  },
                  [
                    _c("i", { staticClass: "fas fa-paper-plane" }),
                    _vm._v(" " + _vm._s(_vm.$t("Submit"))),
                  ]
                ),
              ]
            : [
                _c("div", { staticClass: "form-row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("h1", { staticClass: "text-center text-danger" }, [
                      _vm._v(_vm._s(_vm.$t("NoStudentFound"))),
                    ]),
                  ]),
                ]),
              ],
        ],
        2
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);