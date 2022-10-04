"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["teacher/mark-input"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Teacher/Mark/Input.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Teacher/Mark/Input.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validatorjs */ "./node_modules/validatorjs/src/validator.js");
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validatorjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Global_CustomToggle_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Global/CustomToggle.vue */ "./resources/js/components/Global/CustomToggle.vue");


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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    CustomToggle: _Global_CustomToggle_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      form: new Form({
        academic_session_id: '',
        academic_exam_id: '',
        academic_exam_class_id: '',
        academic_subject_id: '',
        students: []
      }),
      sessions: [],
      exams: [],
      classes: [],
      subjects: [],
      subject: {},
      students: [],
      options: {
        on: this.$i18n.t('Present'),
        off: this.$i18n.t('Absent'),
        onstyle: 'success',
        offstyle: 'danger',
        width: '100%',
        height: '40px'
      },
      markSubmit: false
    };
  },
  methods: {
    changeHandler: function changeHandler(index) {
      var rowIndex = --index;
      var mark = this.form.students[rowIndex];
      mark.total = parseFloat(mark.written) + parseFloat(mark.mcq) + parseFloat(mark.practical);
    },
    submitMark: function submitMark() {
      var _this = this;

      Swal.fire({
        title: this.$t("confirm_title"),
        icon: "warning",
        html: this.$t("MarkSubmitWarning"),
        showCancelButton: true,
        confirmButtonText: this.$t("IChecked"),
        cancelButtonText: this.$t("cancel")
      }).then(function (result) {
        if (result.isConfirmed) {
          _this.markSubmit = true;

          _this.form.post('/api/submit-exam-mark').then(function (res) {
            _this.markSubmit = false;

            _this.successCreateMessage();

            _this.$router.push("/exam-mark/".concat(res.data.custom, "/show"));
          })["catch"](function (error) {
            console.log(error);
          });
        }
      });
    },
    searchStudent: function searchStudent() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var validation;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                validation = new validatorjs__WEBPACK_IMPORTED_MODULE_1__(_this2.form, {
                  'academic_session_id': ['required'],
                  'academic_exam_id': ['required'],
                  'academic_exam_class_id': ['required'],
                  'academic_subject_id': ['required']
                });
                _this2.errors = [];

                if (!validation.passes()) {
                  _context.next = 7;
                  break;
                }

                _context.next = 5;
                return _this2.form.post("/api/get-exam-students-for-mark-input").then(function (_ref) {
                  var data = _ref.data;
                  _this2.subject = data.subject;
                  _this2.form.students = data.students;
                });

              case 5:
                _context.next = 8;
                break;

              case 7:
                _this2.form.errors.errors = validation.errors.all();

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    changeSession: function changeSession(e) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.exams = [];
                _this3.classes = [];
                _this3.subjects = [];
                _this3.form.students = [];

                if (!e) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 7;
                return axios.get("/api/load-session-exams/".concat(e)).then(function (_ref2) {
                  var data = _ref2.data;
                  return _this3.exams = data;
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    changeExam: function changeExam(e) {
      var _this4 = this;

      this.classes = [];
      this.subjects = [];
      this.form.students = [];

      if (e) {
        axios.get("/api/load-exam-classes/".concat(e)).then(function (_ref3) {
          var data = _ref3.data;
          return _this4.classes = data;
        });
      }
    },
    changeExamClass: function changeExamClass(e) {
      var _this5 = this;

      this.subjects = [];
      this.form.students = [];

      if (e) {
        axios.get("/api/load-exam-class-subjects/".concat(e)).then(function (_ref4) {
          var data = _ref4.data;
          return _this5.subjects = data;
        });
      }
    },
    changeSubject: function changeSubject(e) {
      this.form.students = [];
    },
    loadAcademicSession: function loadAcademicSession() {
      var _this6 = this;

      axios.get("/api/load-academic-session-list").then(function (_ref5) {
        var data = _ref5.data;
        _this6.sessions = data;
      });
    }
  },
  created: function created() {
    this.loadAcademicSession();
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

/***/ "./resources/js/components/Teacher/Mark/Input.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Teacher/Mark/Input.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Input_vue_vue_type_template_id_1882dd80_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input.vue?vue&type=template&id=1882dd80&scoped=true& */ "./resources/js/components/Teacher/Mark/Input.vue?vue&type=template&id=1882dd80&scoped=true&");
/* harmony import */ var _Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input.vue?vue&type=script&lang=js& */ "./resources/js/components/Teacher/Mark/Input.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Input_vue_vue_type_template_id_1882dd80_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Input_vue_vue_type_template_id_1882dd80_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1882dd80",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Teacher/Mark/Input.vue"
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

/***/ "./resources/js/components/Teacher/Mark/Input.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Teacher/Mark/Input.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Input.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Teacher/Mark/Input.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/Teacher/Mark/Input.vue?vue&type=template&id=1882dd80&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Teacher/Mark/Input.vue?vue&type=template&id=1882dd80&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_1882dd80_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_1882dd80_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_1882dd80_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Input.vue?vue&type=template&id=1882dd80&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Teacher/Mark/Input.vue?vue&type=template&id=1882dd80&scoped=true&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Teacher/Mark/Input.vue?vue&type=template&id=1882dd80&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Teacher/Mark/Input.vue?vue&type=template&id=1882dd80&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: _vm.$t("MarkInput"), icon: "fa fa-pencil-alt" } },
    [
      _c(
        "form",
        {
          attrs: { action: "" },
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.searchStudent.apply(null, arguments)
            },
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
                on: {
                  change: function ($event) {
                    return _vm.changeSession($event)
                  },
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
                  col: "col-md-6",
                  form: _vm.form,
                  name: "academic_exam_id",
                  options: _vm.exams,
                  label: _vm.$t("SelectExam"),
                },
                on: {
                  change: function ($event) {
                    return _vm.changeExam($event)
                  },
                },
                model: {
                  value: _vm.form.academic_exam_id,
                  callback: function ($$v) {
                    _vm.$set(_vm.form, "academic_exam_id", $$v)
                  },
                  expression: "form.academic_exam_id",
                },
              }),
              _vm._v(" "),
              _c("form-group-select", {
                attrs: {
                  col: "col-md-6",
                  form: _vm.form,
                  name: "academic_exam_class_id",
                  options: _vm.classes,
                  label: _vm.$t("SelectAcademicClass"),
                },
                on: {
                  change: function ($event) {
                    return _vm.changeExamClass($event)
                  },
                },
                model: {
                  value: _vm.form.academic_exam_class_id,
                  callback: function ($$v) {
                    _vm.$set(_vm.form, "academic_exam_class_id", $$v)
                  },
                  expression: "form.academic_exam_class_id",
                },
              }),
              _vm._v(" "),
              _c("form-group-select", {
                attrs: {
                  col: "col-md-6",
                  form: _vm.form,
                  name: "academic_subject_id",
                  options: _vm.subjects,
                  label: _vm.$t("SelectAcademicSubject"),
                },
                on: {
                  change: function ($event) {
                    return _vm.changeSubject($event)
                  },
                },
                model: {
                  value: _vm.form.academic_subject_id,
                  callback: function ($$v) {
                    _vm.$set(_vm.form, "academic_subject_id", $$v)
                  },
                  expression: "form.academic_subject_id",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group mt-2" },
            [
              _c("v-button", { attrs: { loading: _vm.form.busy } }, [
                _c("i", { staticClass: "fas fa-search-plus" }),
                _vm._v(" " + _vm._s(_vm.$t("LoadStudent"))),
              ]),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      [
        _c("vue-element-loading", {
          attrs: {
            active: _vm.markSubmit,
            text: _vm.$t("PleaseWait"),
            spinner: "bar-fade-scale",
          },
        }),
        _vm._v(" "),
        _c(
          "form",
          {
            attrs: { method: "post" },
            on: {
              submit: function ($event) {
                $event.preventDefault()
                return _vm.submitMark.apply(null, arguments)
              },
              keydown: function ($event) {
                return _vm.form.onKeydown($event)
              },
            },
          },
          [
            _c("table", { staticClass: "table table-bordered table-striped" }, [
              _c("thead", [
                _c("tr", [
                  _c("th", { attrs: { width: "5%" } }, [
                    _vm._v(_vm._s(_vm.$t("SL"))),
                  ]),
                  _vm._v(" "),
                  _c("th", { attrs: { width: "10%" } }, [
                    _vm._v(_vm._s(_vm.$t("IDNumber"))),
                  ]),
                  _vm._v(" "),
                  _c("th", { attrs: { width: "15%" } }, [
                    _vm._v(_vm._s(_vm.$t("StudentInfo"))),
                  ]),
                  _vm._v(" "),
                  _c("th", { attrs: { width: "10%" } }, [
                    _vm._v(_vm._s(_vm.$t("Attendance"))),
                  ]),
                  _vm._v(" "),
                  _c("th", { attrs: { width: "40%" } }, [
                    _vm._v(_vm._s(_vm.$t("MarkInput"))),
                  ]),
                  _vm._v(" "),
                  _c("th", { attrs: { width: "20%" } }, [
                    _vm._v(_vm._s(_vm.$t("Comment"))),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm.form.students.length
                    ? _vm._l(_vm.form.students, function (student, index) {
                        return _c("tr", { key: index }, [
                          _c("td", [_vm._v(_vm._s(++index))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(student.custom))]),
                          _vm._v(" "),
                          _c("td", {
                            domProps: {
                              innerHTML: _vm._s(student.student_info),
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c("custom-toggle", {
                                attrs: {
                                  id: "students." + index + ".attendance",
                                  options: _vm.options,
                                },
                                model: {
                                  value: student.attendance,
                                  callback: function ($$v) {
                                    _vm.$set(student, "attendance", $$v)
                                  },
                                  expression: "student.attendance",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("td", [
                            _c("table", { staticClass: "table" }, [
                              _c("tr", [
                                _c("th", [_vm._v(_vm._s(_vm.$t("Written")))]),
                                _vm._v(" "),
                                _vm.subject.mark_type == 1 ||
                                _vm.subject.mark_type == 2
                                  ? _c("th", [_vm._v(_vm._s(_vm.$t("MCQ")))])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.subject.mark_type == 2 ||
                                _vm.subject.mark_type == 3
                                  ? _c("th", [
                                      _vm._v(_vm._s(_vm.$t("Practical"))),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("th", [_vm._v(_vm._s(_vm.$t("Total")))]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: student.written,
                                        expression: "student.written",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "number",
                                      step: "0.001",
                                      min: "0",
                                      max: _vm.subject.written,
                                      placeholder: _vm.$t("WrittenMark"),
                                    },
                                    domProps: { value: student.written },
                                    on: {
                                      change: function ($event) {
                                        return _vm.changeHandler(index)
                                      },
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          student,
                                          "written",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                ]),
                                _vm._v(" "),
                                _vm.subject.mark_type == 1 ||
                                _vm.subject.mark_type == 2
                                  ? _c("td", [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: student.mcq,
                                            expression: "student.mcq",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "number",
                                          step: "0.001",
                                          min: "0",
                                          max: _vm.subject.mcq,
                                          placeholder: _vm.$t("MCQMark"),
                                        },
                                        domProps: { value: student.mcq },
                                        on: {
                                          change: function ($event) {
                                            return _vm.changeHandler(index)
                                          },
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              student,
                                              "mcq",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.subject.mark_type == 2 ||
                                _vm.subject.mark_type == 3
                                  ? _c("td", [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: student.practical,
                                            expression: "student.practical",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "number",
                                          step: "0.001",
                                          min: "0",
                                          max: _vm.subject.practical,
                                          placeholder: _vm.$t("PracticalMark"),
                                        },
                                        domProps: { value: student.practical },
                                        on: {
                                          change: function ($event) {
                                            return _vm.changeHandler(index)
                                          },
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              student,
                                              "practical",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: student.total,
                                        expression: "student.total",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "number",
                                      min: "0",
                                      max:
                                        _vm.subject.written +
                                        _vm.subject.mcq +
                                        _vm.subject.practical,
                                      readonly: "",
                                      placeholder: _vm.$t("TotalMark"),
                                    },
                                    domProps: { value: student.total },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          student,
                                          "total",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                ]),
                              ]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: student.comment,
                                  expression: "student.comment",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: {
                                cols: "30",
                                rows: "2",
                                placeholder: _vm.$t("WriteCommentMark"),
                              },
                              domProps: { value: student.comment },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    student,
                                    "comment",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                          ]),
                        ])
                      })
                    : [
                        _c("tr", [
                          _c(
                            "td",
                            {
                              staticClass: "text-center font-weight-bold",
                              attrs: { colspan: "6" },
                            },
                            [_vm._v(_vm._s(_vm.$t("NoStudentFound")))]
                          ),
                        ]),
                      ],
                ],
                2
              ),
            ]),
            _vm._v(" "),
            _vm.form.students.length
              ? _c(
                  "div",
                  { staticClass: "mt-3" },
                  [
                    _c(
                      "v-button",
                      { attrs: { type: "success", loading: _vm.form.busy } },
                      [
                        _c("i", { staticClass: "fas fa-paper-plane" }),
                        _vm._v(" " + _vm._s(_vm.$t("SubmitMark"))),
                      ]
                    ),
                  ],
                  1
                )
              : _vm._e(),
          ]
        ),
      ],
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);