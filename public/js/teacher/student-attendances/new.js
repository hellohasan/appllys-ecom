"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["teacher/student-attendances/new"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Global/CustomToggle.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Global/CustomToggle.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge */ "./node_modules/merge/lib/src/index.js");
/* harmony import */ var merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//

var defaults = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  defaults: defaults,
  name: "CustomToggle",
  props: {
    value: {
      "default": false
    },
    options: {
      type: Object,
      "default": function _default() {
        return {
          on: this.$i18n.t('Activated'),
          off: this.$i18n.t('Deactivated'),
          onstyle: 'success',
          offstyle: 'danger',
          width: '100%',
          height: '40px'
        };
      }
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    id: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      updating: false
    };
  },
  computed: {
    $$el: function $$el() {
      return jQuery(this.$refs[this.id]);
    }
  },
  watch: {
    value: function value(newValue) {
      if (this.updating) {
        return;
      }

      this.$$el.bootstrapToggle(newValue ? 'on' : 'off');
    },
    disabled: function disabled(newValue) {
      this.$$el.bootstrapToggle(newValue ? 'disable' : 'enable');
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$$el.bootstrapToggle(merge__WEBPACK_IMPORTED_MODULE_0___default().recursive(true, defaults, this.options));

    if (this.disabled) {
      this.$$el.bootstrapToggle('disable');
    }

    if (this.value) {
      this.$$el.prop('checked', true).change();
    }

    this.$$el.change(function () {
      _this.updating = true;

      _this.$emit('input', _this.$$el.prop('checked'));

      _this.$nextTick(function () {
        return _this.updating = false;
      });
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.$$el.bootstrapToggle('destroy');
    this.$$el.off('change');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Teacher/Attendance/New.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Teacher/Attendance/New.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var _Global_CustomToggle_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Global/CustomToggle.vue */ "./resources/js/components/Global/CustomToggle.vue");


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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'New',
  components: {
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_3__["default"],
    CustomToggle: _Global_CustomToggle_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
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
        attendance_date: '',
        students: []
      }),
      basic: '',
      print: '',
      sessions: [],
      classes: [],
      sections: [],
      groups: [],
      departments: [],
      years: [],
      options: {
        on: this.$i18n.t('Present'),
        off: this.$i18n.t('Absent'),
        onstyle: 'success',
        offstyle: 'danger',
        width: '100%',
        height: '40px'
      },
      shortcuts: [{
        text: 'Today',
        onClick: function onClick() {
          return new Date();
        }
      }, {
        text: 'Yesterday',
        onClick: function onClick() {
          var date = new Date();
          date.setTime(date.getTime() - 3600 * 1000 * 24);
          return date;
        }
      }]
    };
  },
  methods: {
    saveToPDF: function saveToPDF() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _this$print, _this$print2;

        var docName;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                docName = "".concat(_this.form.attendance_date, " - ").concat((_this$print = _this.print) === null || _this$print === void 0 ? void 0 : _this$print["class"], " - ").concat((_this$print2 = _this.print) === null || _this$print2 === void 0 ? void 0 : _this$print2.academicInfo, ".pdf");
                _context.next = 3;
                return html2pdf_js__WEBPACK_IMPORTED_MODULE_1___default()(_this.$refs.document, (0,_helpers_pdfOptions__WEBPACK_IMPORTED_MODULE_2__["default"])(docName));

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
    printStudents: function printStudents() {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return $('#itemModal').modal('show');

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    submitAttendance: function submitAttendance() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this3.form.post('/api/student-attendances/store').then(function (res) {
                  Swal.fire({
                    title: _this3.$t("Congratulation"),
                    icon: "success",
                    html: _this3.$t("AttendanceStoreSuccessfully"),
                    confirmButtonText: _this3.$t("ok"),
                    timer: 2500
                  });

                  _this3.loadStudents();
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    disabledFutureDate: function disabledFutureDate(date) {
      return date > new Date(new Date().getTime(0, 0, 0, 0));
    },
    loadStudents: function loadStudents() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this4.form.students = [];
                _context5.next = 3;
                return _this4.form.post('/api/student-attendances/students').then(function (res) {
                  _this4.print = res.data.print;
                  _this4.form.students = res.data.students;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    classChange: function classChange(classId) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this5.form.students = [];

                if (!classId) {
                  _context6.next = 4;
                  break;
                }

                _context6.next = 4;
                return axios.get("/api/load-class-type/".concat(classId)).then(function (res) {
                  _this5.form.class_type = res.data;
                });

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    loadAcademicAllElement: function loadAcademicAllElement() {
      var _this6 = this;

      axios.get('/api/load-academic-all-elements').then(function (res) {
        _this6.sessions = res.data.sessions;
        _this6.classes = res.data.classes;
        _this6.sections = res.data.sections;
        _this6.groups = res.data.groups;
        _this6.departments = res.data.departments;
        _this6.years = res.data.years;
      });
    }
  },
  created: function created() {
    this.basic = this.$store.getters.getBasic;
    this.loadAcademicAllElement();
  }
});

/***/ }),

/***/ "./resources/js/components/Global/CustomToggle.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Global/CustomToggle.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomToggle_vue_vue_type_template_id_61373a96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomToggle.vue?vue&type=template&id=61373a96&scoped=true& */ "./resources/js/components/Global/CustomToggle.vue?vue&type=template&id=61373a96&scoped=true&");
/* harmony import */ var _CustomToggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomToggle.vue?vue&type=script&lang=js& */ "./resources/js/components/Global/CustomToggle.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomToggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomToggle_vue_vue_type_template_id_61373a96_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomToggle_vue_vue_type_template_id_61373a96_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "61373a96",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Global/CustomToggle.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Teacher/Attendance/New.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Teacher/Attendance/New.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _New_vue_vue_type_template_id_02b603f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./New.vue?vue&type=template&id=02b603f2&scoped=true& */ "./resources/js/components/Teacher/Attendance/New.vue?vue&type=template&id=02b603f2&scoped=true&");
/* harmony import */ var _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./New.vue?vue&type=script&lang=js& */ "./resources/js/components/Teacher/Attendance/New.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _New_vue_vue_type_template_id_02b603f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _New_vue_vue_type_template_id_02b603f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "02b603f2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Teacher/Attendance/New.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Global/CustomToggle.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Global/CustomToggle.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomToggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomToggle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Global/CustomToggle.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomToggle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Teacher/Attendance/New.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Teacher/Attendance/New.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./New.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Teacher/Attendance/New.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Global/CustomToggle.vue?vue&type=template&id=61373a96&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Global/CustomToggle.vue?vue&type=template&id=61373a96&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomToggle_vue_vue_type_template_id_61373a96_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomToggle_vue_vue_type_template_id_61373a96_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomToggle_vue_vue_type_template_id_61373a96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomToggle.vue?vue&type=template&id=61373a96&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Global/CustomToggle.vue?vue&type=template&id=61373a96&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Teacher/Attendance/New.vue?vue&type=template&id=02b603f2&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Teacher/Attendance/New.vue?vue&type=template&id=02b603f2&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_02b603f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_02b603f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_02b603f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./New.vue?vue&type=template&id=02b603f2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Teacher/Attendance/New.vue?vue&type=template&id=02b603f2&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Global/CustomToggle.vue?vue&type=template&id=61373a96&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Global/CustomToggle.vue?vue&type=template&id=61373a96&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("input", { ref: _vm.id, attrs: { id: _vm.id, type: "checkbox" } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Teacher/Attendance/New.vue?vue&type=template&id=02b603f2&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Teacher/Attendance/New.vue?vue&type=template&id=02b603f2&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    "card",
    { attrs: { title: _vm.$t("NewAttendance"), icon: "fa fa-notes-medical" } },
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
                  col: "col-md-6",
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
              _c(
                "div",
                { staticClass: "form-group col-md-6" },
                [
                  _c("label", { attrs: { for: "attendance_date" } }, [
                    _vm._v(_vm._s(_vm.$t("AttendanceDate")) + ":"),
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("date-picker", {
                    attrs: {
                      placeholder: _vm.$t("AttendanceDate"),
                      shortcuts: _vm.shortcuts,
                      format: "YYYY-MM-DD",
                      "value-type": "format",
                      "disabled-date": _vm.disabledFutureDate,
                      editable: false,
                      clearable: "",
                      "input-class": _vm.form.errors.has("attendance_date")
                        ? "form-control is-invalid"
                        : "form-control",
                    },
                    model: {
                      value: _vm.form.attendance_date,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "attendance_date", $$v)
                      },
                      expression: "form.attendance_date",
                    },
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "attendance_date" },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("form-group-select", {
                attrs: {
                  col: "col-md-6",
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
          _c("div", { staticClass: "form-row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-success btn-lg btn-block",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.printStudents.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("i", { staticClass: "fas fa-print" }),
                  _vm._v(" " + _vm._s(_vm.$t("Print"))),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-lg btn-block",
                  attrs: { type: "button", disabled: _vm.form.busy },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.loadStudents.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("i", { staticClass: "fas fa-search" }),
                  _vm._v(" " + _vm._s(_vm.$t("LoadStudent"))),
                ]
              ),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      this.form.students.length
        ? [
            _c("hr"),
            _vm._v(" "),
            _c("div", { staticClass: "form-row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c(
                  "table",
                  { staticClass: "table table-striped table-bordered" },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v(_vm._s(_vm.$t("AcademicID")))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.$t("StudentName")))]),
                        _vm._v(" "),
                        _c("th", { attrs: { width: "30%" } }, [
                          _vm._v(_vm._s(_vm.$t("Attendance"))),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.form.students, function (student, index) {
                        return _c("tr", { key: index }, [
                          _c("td", [_vm._v(_vm._s(student.custom))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(student.name))]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c("custom-toggle", {
                                attrs: {
                                  options: _vm.options,
                                  id: "students." + index + ".is_attend",
                                },
                                model: {
                                  value: student.is_attend,
                                  callback: function ($$v) {
                                    _vm.$set(student, "is_attend", $$v)
                                  },
                                  expression: "student.is_attend",
                                },
                              }),
                            ],
                            1
                          ),
                        ])
                      }),
                      0
                    ),
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
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.submitAttendance.apply(null, arguments)
                  },
                },
              },
              [
                _c("i", { staticClass: "fas fa-paper-plane" }),
                _vm._v(" " + _vm._s(_vm.$t("Submit"))),
              ]
            ),
          ]
        : [
            _c("div", { staticClass: "form-row mt-3" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("h1", { staticClass: "text-center text-danger" }, [
                  _vm._v(_vm._s(_vm.$t("NoStudentFound"))),
                ]),
              ]),
            ]),
          ],
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "itemModal",
            tabindex: "-1",
            "aria-labelledby": "userModalLabel",
            "aria-hidden": "true",
          },
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog modal-xl modal-dialog-centered" },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c(
                    "h5",
                    {
                      staticClass: "modal-title",
                      attrs: { id: "userModalLabel" },
                    },
                    [_vm._v(_vm._s(_vm.$t("StudentAttendance")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: {
                        type: "button",
                        "data-dismiss": "modal",
                        "aria-label": "Close",
                      },
                    },
                    [
                      _c("span", { attrs: { "aria-hidden": "true" } }, [
                        _vm._v("×"),
                      ]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c(
                    "div",
                    {
                      ref: "document",
                      staticClass: "row",
                      attrs: { id: "printMe" },
                    },
                    [
                      _c("div", { staticClass: "col-12" }, [
                        _c("div", { staticClass: "text-center" }, [
                          _c("h3", [_vm._v(_vm._s(_vm.basic.name))]),
                          _vm._v(" "),
                          _c("h5", [_vm._v(_vm._s(_vm.basic.address))]),
                          _vm._v(" "),
                          _c("h5", [
                            _vm._v(
                              _vm._s(_vm.$t("Phone")) +
                                ": " +
                                _vm._s(_vm.basic.phone)
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("hr"),
                      ]),
                      _vm._v(" "),
                      _vm.form.students.length
                        ? _c("div", { staticClass: "col-12 mt-1" }, [
                            _c(
                              "table",
                              {
                                staticClass:
                                  "table table-striped table-bordered",
                              },
                              [
                                _c("tr", [
                                  _c(
                                    "th",
                                    {
                                      staticClass: "text-right",
                                      attrs: { width: "50%" },
                                    },
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
                                    _vm._v(_vm._s(_vm.$t("Title"))),
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(_vm.$t("StudentAttendance"))),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", { staticClass: "text-right" }, [
                                    _vm._v(_vm._s(_vm.$t("Academic_Session"))),
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(_vm.print.session))]),
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", { staticClass: "text-right" }, [
                                    _vm._v(_vm._s(_vm.$t("AcademicClass"))),
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(_vm.print.class))]),
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", { staticClass: "text-right" }, [
                                    _vm._v(_vm._s(_vm.$t("AcademicDetails"))),
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(_vm.print.academicInfo)),
                                  ]),
                                ]),
                              ]
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.print != ""
                        ? _c("div", { staticClass: "col-12 mt-1" }, [
                            _c(
                              "table",
                              {
                                staticClass:
                                  "table table-stripe table-bordered",
                              },
                              [
                                _c("thead", [
                                  _c("tr", [
                                    _c("th", [
                                      _vm._v(_vm._s(_vm.$t("AcademicID"))),
                                    ]),
                                    _vm._v(" "),
                                    _c("th", [
                                      _vm._v(_vm._s(_vm.$t("StudentName"))),
                                    ]),
                                    _vm._v(" "),
                                    _c("th", [
                                      _vm._v(_vm._s(_vm.$t("Attendance"))),
                                    ]),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  [
                                    _vm.form.students.length
                                      ? _vm._l(
                                          _vm.form.students,
                                          function (student, index) {
                                            return _c(
                                              "tr",
                                              {
                                                key: index,
                                                class: !student.is_attend
                                                  ? "bg-warning text-white"
                                                  : "",
                                              },
                                              [
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(student.custom)
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("td", {
                                                  domProps: {
                                                    innerHTML: _vm._s(
                                                      student.name
                                                    ),
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      student.is_attend
                                                        ? _vm.$t("Present")
                                                        : _vm.$t("Absent")
                                                    )
                                                  ),
                                                ]),
                                              ]
                                            )
                                          }
                                        )
                                      : [
                                          _c("tr", [
                                            _c(
                                              "td",
                                              {
                                                staticClass: "text-center",
                                                attrs: { colspan: "3" },
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t("NoStudentFound")
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]),
                                        ],
                                  ],
                                  2
                                ),
                              ]
                            ),
                          ])
                        : _vm._e(),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button", "data-dismiss": "modal" },
                    },
                    [
                      _c("i", { staticClass: "fas fa-times" }),
                      _vm._v(" " + _vm._s(_vm.$t("Close"))),
                    ]
                  ),
                  _vm._v(" "),
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
                  _vm._v(" "),
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
              ]),
            ]
          ),
        ]
      ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);