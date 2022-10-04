"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["fees-receives/create"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesReceive/Create.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesReceive/Create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Create',
  data: function data() {
    var _Form;

    return {
      form: new Form({
        academic_session_id: '',
        academic_class_id: '',
        class_type: '',
        academic_section_id: '',
        academic_group_id: '',
        academic_department_id: '',
        academic_year_id: ''
      }),
      basic: '',
      student: '',
      sessions: [],
      classes: [],
      sections: [],
      groups: [],
      departments: [],
      years: [],
      students: [],
      receiveFee: '',
      feesItems: [],
      isPrint: false,
      printAble: '',
      feeForm: new Form((_Form = {
        'id': '',
        'total': '',
        'fine': '',
        'discount': '',
        'itemTotal': ''
      }, _defineProperty(_Form, "total", ''), _defineProperty(_Form, 'due', ''), _defineProperty(_Form, 'oldPay', ''), _defineProperty(_Form, 'pay', ''), _defineProperty(_Form, 'is_attempt', ''), _defineProperty(_Form, 'is_paid', false), _Form))
    };
  },
  watch: {
    "feeForm.pay": function feeFormPay(val) {
      var pay = val === "" ? 0 : val;

      if (this.feeForm.is_attempt) {
        var limit = parseFloat(this.feeForm.total) - parseFloat(this.feeForm.oldPay);

        if (pay > limit) {
          this.feeForm.pay = limit;
        } else {
          this.feeForm.pay = val === "" ? 0 : val;
        }
      } else {
        if (pay > this.feeForm.total) {
          this.feeForm.pay = this.feeForm.total;
        } else {
          this.feeForm.pay = val === "" ? 0 : val;
        }
      }

      this.countDue();
    },
    "feeForm.fine": function feeFormFine(val) {
      this.feeForm.fine = val === "" ? 0 : val;
      this.feeForm.pay = 0;
      this.countTotal();
      this.countDue();
    },
    "feeForm.discount": function feeFormDiscount(val) {
      this.feeForm.discount = val === "" ? 0 : val;
      this.feeForm.pay = 0;
      this.countTotal();
      this.countDue();
    }
  },
  methods: {
    print: function print() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$htmlToPaper('printMe');

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    submitFeeReceive: function submitFeeReceive() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.feeForm.post('/api/fees-receives/submit').then(function (res) {
                  _this2.loadSpecificData(res.data.academic_data_id);

                  _this2.printReceipt(res.data.id);

                  _this2.feeForm.clear();

                  $("#receiveModal").modal("hide");
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    countDue: function countDue() {
      var due = parseFloat(this.feeForm.total) - parseFloat(this.feeForm.oldPay) - parseFloat(this.feeForm.pay);

      if (due === 0) {
        this.feeForm.due = this.$t("Paid");
        this.feeForm.is_paid = true;
      } else {
        this.feeForm.due = due;
        this.feeForm.is_paid = false;
      }
    },
    countTotal: function countTotal() {
      var itemTotal = this.feeForm.itemTotal;
      var waiver = this.feeForm.discount;
      var fine = this.feeForm.fine;
      this.feeForm.total = parseFloat(itemTotal) + parseFloat(fine) - parseFloat(waiver);
    },
    openReceiveModal: function openReceiveModal() {
      //this.feeForm.reset();
      this.feeForm.clear();
      $("#receiveModal").modal("show");
    },
    receiveNow: function receiveNow(fee) {
      this.receiveFee = fee;
      this.feesItems = fee.items;
      this.feeForm.id = fee.id;
      this.feeForm.itemTotal = fee.total; //fee package total

      this.feeForm.fine = fee.fine;
      this.feeForm.discount = fee.discount;
      this.feeForm.total = parseFloat(fee.total) + parseFloat(fee.fine) - parseFloat(fee.discount);
      this.feeForm.due = fee.due;
      this.feeForm.oldPay = fee.pay;
      this.feeForm.pay = 0;
      this.feeForm.is_attempt = fee.is_attempt;
      this.openReceiveModal();
    },
    printReceipt: function printReceipt(feeId) {
      var _this3 = this;

      axios.get("/api/fees-receives/".concat(feeId, "/receipt")).then(function (res) {
        _this3.printAble = res.data;
        setTimeout(function () {
          _this3.print();
        }, 2000);
      });
    },
    selectStudent: function selectStudent(academicId) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (academicId) {
                  _this4.loadSpecificData(academicId);
                }

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    loadSpecificData: function loadSpecificData(id) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.get("/api/fees-receives/".concat(id, "/student")).then(function (res) {
                  _this5.student = res.data;
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
    classChange: function classChange(classId) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this6.students = [];
                _this6.student = '';

                if (!classId) {
                  _context5.next = 5;
                  break;
                }

                _context5.next = 5;
                return axios.get("/api/load-class-type/".concat(classId)).then(function (res) {
                  _this6.form.class_type = res.data;
                });

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    loadStudents: function loadStudents() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this7.students = [];
                _context6.next = 3;
                return _this7.form.post('/api/load-academic-data-with-academic-elements').then(function (res) {
                  _this7.students = res.data;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    loadAcademicAllElement: function loadAcademicAllElement() {
      var _this8 = this;

      axios.get('/api/load-academic-all-elements').then(function (res) {
        _this8.sessions = res.data.sessions;
        _this8.classes = res.data.classes;
        _this8.sections = res.data.sections;
        _this8.groups = res.data.groups;
        _this8.departments = res.data.departments;
        _this8.years = res.data.years;
      });
    }
  },
  created: function created() {
    this.loadAcademicAllElement();
    this.basic = this.$store.getters.getBasic;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesReceive/Create.vue?vue&type=style&index=0&id=0cfd5da2&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesReceive/Create.vue?vue&type=style&index=0&id=0cfd5da2&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.table-user-information > tbody > tr[data-v-0cfd5da2]:first-child {\n\tborder-top: 0;\n}\n.table-user-information > tbody > tr > td[data-v-0cfd5da2] {\n\tborder-top: 0;\n}\n@media print {\n#printMe[data-v-0cfd5da2],\n\t#printMe *[data-v-0cfd5da2] {\n\t\tvisibility: visible;\n}\n#printMe[data-v-0cfd5da2] {\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\ttop: 0;\n\t\tmargin: 0 !important;\n}\n}\n@page {\n\tmargin: 0 !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesReceive/Create.vue?vue&type=style&index=0&id=0cfd5da2&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesReceive/Create.vue?vue&type=style&index=0&id=0cfd5da2&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_0cfd5da2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=style&index=0&id=0cfd5da2&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesReceive/Create.vue?vue&type=style&index=0&id=0cfd5da2&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_0cfd5da2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_0cfd5da2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Accountant/FeesReceive/Create.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Accountant/FeesReceive/Create.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_0cfd5da2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=0cfd5da2&scoped=true& */ "./resources/js/components/Accountant/FeesReceive/Create.vue?vue&type=template&id=0cfd5da2&scoped=true&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/components/Accountant/FeesReceive/Create.vue?vue&type=script&lang=js&");
/* harmony import */ var _Create_vue_vue_type_style_index_0_id_0cfd5da2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=0&id=0cfd5da2&scoped=true&lang=css& */ "./resources/js/components/Accountant/FeesReceive/Create.vue?vue&type=style&index=0&id=0cfd5da2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_0cfd5da2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Create_vue_vue_type_template_id_0cfd5da2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0cfd5da2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Accountant/FeesReceive/Create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Accountant/FeesReceive/Create.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Accountant/FeesReceive/Create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesReceive/Create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Accountant/FeesReceive/Create.vue?vue&type=style&index=0&id=0cfd5da2&scoped=true&lang=css&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/Accountant/FeesReceive/Create.vue?vue&type=style&index=0&id=0cfd5da2&scoped=true&lang=css& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_0cfd5da2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=style&index=0&id=0cfd5da2&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesReceive/Create.vue?vue&type=style&index=0&id=0cfd5da2&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Accountant/FeesReceive/Create.vue?vue&type=template&id=0cfd5da2&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/Accountant/FeesReceive/Create.vue?vue&type=template&id=0cfd5da2&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_0cfd5da2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_0cfd5da2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_0cfd5da2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=template&id=0cfd5da2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesReceive/Create.vue?vue&type=template&id=0cfd5da2&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesReceive/Create.vue?vue&type=template&id=0cfd5da2&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Accountant/FeesReceive/Create.vue?vue&type=template&id=0cfd5da2&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
        title: _vm.$t("NewFeesReceive"),
        url: "/fees-receives",
        text: _vm.$t("FeesReceiveList"),
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
          _vm.students.length
            ? [
                _c("hr"),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-row" },
                  [
                    _c("form-group-select", {
                      attrs: {
                        col: "col-md-12",
                        form: _vm.form,
                        name: "student_id",
                        options: _vm.students,
                        label: _vm.$t("SelectStudent"),
                      },
                      on: { change: _vm.selectStudent },
                      model: {
                        value: _vm.form.student_id,
                        callback: function ($$v) {
                          _vm.$set(_vm.form, "student_id", $$v)
                        },
                        expression: "form.student_id",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.student != ""
                  ? [
                      _c("hr"),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-row" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-xs-12 col-sm-12 col-md-6 col-lg-6 offset-md-3 offset-lg-3",
                          },
                          [
                            _c("div", { staticClass: "card card-success" }, [
                              _c("div", { staticClass: "card-header" }, [
                                _c("h3", { staticClass: "text-center" }, [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\t" +
                                      _vm._s(_vm.student.studentName) +
                                      "\n\t\t\t\t\t\t\t\t"
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "card-body p-2" }, [
                                _c("div", { staticClass: "form-row" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-md-3 col-lg-3 text-center",
                                    },
                                    [
                                      _c("img", {
                                        staticClass:
                                          "img-thumbnail img-responsive",
                                        staticStyle: { width: "80%" },
                                        attrs: {
                                          alt: "User Pic",
                                          src: _vm.student.studentPhoto,
                                        },
                                      }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-md-9 col-lg-9" },
                                    [
                                      _c(
                                        "table",
                                        {
                                          staticClass:
                                            "table table-user-information table-striped table-bordered",
                                        },
                                        [
                                          _c("tbody", [
                                            _c("tr", [
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(_vm.$t("AcademicID"))
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.student.studentCustom
                                                  )
                                                ),
                                              ]),
                                            ]),
                                            _vm._v(" "),
                                            _c("tr", [
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(_vm.$t("AcademicInfo"))
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.student.academicClass
                                                  ) +
                                                    " " +
                                                    _vm._s(
                                                      _vm.student.academicDetail
                                                    )
                                                ),
                                              ]),
                                            ]),
                                            _vm._v(" "),
                                            _c("tr", [
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t("GuardianInfo")
                                                  ) +
                                                    " - " +
                                                    _vm._s(_vm.$t("Phone"))
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.student.guardianInfo
                                                  )
                                                ),
                                              ]),
                                            ]),
                                          ]),
                                        ]
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-md-12" }, [
                                    _c(
                                      "table",
                                      {
                                        staticClass:
                                          "table table-user-information table-striped table-bordered",
                                      },
                                      [
                                        _c("tbody", [
                                          _c(
                                            "tr",
                                            { staticClass: "bg-indigo" },
                                            [
                                              _c("td", [
                                                _vm._v(
                                                  "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                    _vm._s(_vm.$t("TotalFee")) +
                                                    ": " +
                                                    _vm._s(
                                                      _vm._f("items")(
                                                        _vm.student.total_fees
                                                      )
                                                    ) +
                                                    "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { staticClass: "bg-secondary" },
                                                [
                                                  _vm._v(
                                                    "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                      _vm._s(
                                                        _vm.$t("TotalDemand")
                                                      ) +
                                                      ": " +
                                                      _vm._s(
                                                        _vm._f("withCurrency")(
                                                          _vm.student
                                                            .total_demand
                                                        )
                                                      ) +
                                                      "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("tr", [
                                            _c(
                                              "td",
                                              { staticClass: "bg-success" },
                                              [
                                                _vm._v(
                                                  "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                    _vm._s(_vm.$t("PaidFee")) +
                                                    ": " +
                                                    _vm._s(
                                                      _vm._f("items")(
                                                        _vm.student
                                                          .total_paid_fees
                                                      )
                                                    ) +
                                                    "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { staticClass: "bg-success" },
                                              [
                                                _vm._v(
                                                  "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                    _vm._s(
                                                      _vm.$t("TotalPaid")
                                                    ) +
                                                    ": " +
                                                    _vm._s(
                                                      _vm._f("withCurrency")(
                                                        _vm.student.total_pay
                                                      )
                                                    ) +
                                                    "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                                ),
                                              ]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("tr", [
                                            _c(
                                              "td",
                                              { staticClass: "bg-danger" },
                                              [
                                                _vm._v(
                                                  "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                    _vm._s(
                                                      _vm.$t("TotalFine")
                                                    ) +
                                                    ": " +
                                                    _vm._s(
                                                      _vm._f("withCurrency")(
                                                        _vm.student.total_fine
                                                      )
                                                    ) +
                                                    "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { staticClass: "bg-green" },
                                              [
                                                _vm._v(
                                                  "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                    _vm._s(
                                                      _vm.$t("TotalDiscount")
                                                    ) +
                                                    ": " +
                                                    _vm._s(
                                                      _vm._f("withCurrency")(
                                                        _vm.student
                                                          .total_discount
                                                      )
                                                    ) +
                                                    "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                                ),
                                              ]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("tr", [
                                            _c(
                                              "td",
                                              { staticClass: "bg-info" },
                                              [
                                                _vm._v(
                                                  "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                    _vm._s(_vm.$t("LastPay")) +
                                                    ": " +
                                                    _vm._s(
                                                      _vm.student.last_paid_at
                                                    ) +
                                                    "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { staticClass: "bg-warning" },
                                              [
                                                _vm._v(
                                                  "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                    _vm._s(_vm.$t("StillDue")) +
                                                    ": " +
                                                    _vm._s(
                                                      _vm._f("withCurrency")(
                                                        _vm.student.total_due
                                                      )
                                                    ) +
                                                    "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                                ),
                                              ]
                                            ),
                                          ]),
                                        ]),
                                      ]
                                    ),
                                  ]),
                                ]),
                              ]),
                            ]),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-row" }, [
                        _c("div", { staticClass: "col-md-12" }, [
                          _c(
                            "table",
                            {
                              staticClass: "table table-bordered table-striped",
                            },
                            [
                              _c("thead", [
                                _c("tr", [
                                  _c("th", [_vm._v(_vm._s(_vm.$t("SL")))]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v(_vm._s(_vm.$t("Custom")))]),
                                  _vm._v(" "),
                                  _c("th", [
                                    _vm._v(_vm._s(_vm.$t("AssignedAt"))),
                                  ]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v(_vm._s(_vm.$t("Total")))]),
                                  _vm._v(" "),
                                  _c("th", [
                                    _vm._v(_vm._s(_vm.$t("Fine")) + " (+)"),
                                  ]),
                                  _vm._v(" "),
                                  _c("th", [
                                    _vm._v(_vm._s(_vm.$t("Waiver")) + " (-)"),
                                  ]),
                                  _vm._v(" "),
                                  _c("th", [
                                    _vm._v(_vm._s(_vm.$t("GrandTotal"))),
                                  ]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v(_vm._s(_vm.$t("Paid")))]),
                                  _vm._v(" "),
                                  _c("th", [
                                    _vm._v(
                                      _vm._s(_vm.$t("Due")) +
                                        "/" +
                                        _vm._s(_vm.$t("Status")) +
                                        "/" +
                                        _vm._s(_vm.$t("Date"))
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v(_vm._s(_vm.$t("Action")))]),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                _vm._l(_vm.student.fees, function (fee, index) {
                                  return _c("tr", { key: index }, [
                                    _c("td", [_vm._v(_vm._s(++index))]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(fee.custom))]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(fee.created_at))]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("withCurrency")(fee.total)
                                        )
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(_vm._f("withCurrency")(fee.fine))
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("withCurrency")(fee.discount)
                                        )
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\t\t" +
                                          _vm._s(
                                            _vm._f("withCurrency")(
                                              fee.total +
                                                fee.fine -
                                                fee.discount
                                            )
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t"
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(_vm._f("withCurrency")(fee.pay))
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        fee.is_done
                                          ? [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "badge badge-success",
                                                },
                                                [_vm._v(_vm._s(_vm.$t("Paid")))]
                                              ),
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    _vm._f("date")(
                                                      fee.updated_at
                                                    )
                                                  ) +
                                                  "\n\t\t\t\t\t\t\t\t\t\t"
                                              ),
                                            ]
                                          : [
                                              _c(
                                                "span",
                                                { staticClass: "text-danger" },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm._f("withCurrency")(
                                                        fee.due
                                                      )
                                                    )
                                                  ),
                                                ]
                                              ),
                                            ],
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        fee.is_done
                                          ? [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-success btn-sm",
                                                  on: {
                                                    click: function ($event) {
                                                      $event.preventDefault()
                                                      return _vm.printReceipt(
                                                        fee.id
                                                      )
                                                    },
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("Print"))
                                                  ),
                                                ]
                                              ),
                                            ]
                                          : [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-info btn-sm text-white",
                                                  attrs: { type: "button" },
                                                  on: {
                                                    click: function ($event) {
                                                      return _vm.receiveNow(fee)
                                                    },
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("ReceiveNow"))
                                                  ),
                                                ]
                                              ),
                                            ],
                                      ],
                                      2
                                    ),
                                  ])
                                }),
                                0
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]
                  : _vm._e(),
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
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "receiveModal",
            tabindex: "-1",
            "aria-labelledby": "receiveModalLabel",
            "aria-hidden": "true",
          },
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog modal-dialog-centered modal-xl" },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c(
                    "h5",
                    {
                      staticClass: "modal-title",
                      attrs: { id: "receiveModalLabel" },
                    },
                    [_vm._v(_vm._s(_vm.$t("NewFeesReceive")))]
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
                    "table",
                    { staticClass: "table table-bordered table-secondary" },
                    [
                      _c("thead", [
                        _c("tr", [
                          _c(
                            "th",
                            {
                              staticClass: "text-right",
                              attrs: { width: "50%" },
                            },
                            [_vm._v(_vm._s(_vm.$t("Details")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
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
                        [
                          _vm._l(_vm.feesItems, function (b, rr) {
                            return _c("tr", { key: rr }, [
                              _c("td", { staticClass: "text-right" }, [
                                _vm._v(_vm._s(b.title)),
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-left" }, [
                                _vm._v(
                                  _vm._s(_vm._f("withCurrency")(b.amount))
                                ),
                              ]),
                            ])
                          }),
                          _vm._v(" "),
                          _c("tr", { staticClass: "bg-secondary white" }, [
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(_vm._s(_vm.$t("Total"))),
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-left" }, [
                              _vm._v(
                                _vm._s(
                                  _vm._f("withCurrency")(_vm.feeForm.itemTotal)
                                )
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("tr", { staticClass: "bg-secondary white" }, [
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(_vm._s(_vm.$t("Fine")) + " (+)"),
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "text-left" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.feeForm.fine,
                                      expression: "feeForm.fine",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid":
                                      _vm.feeForm.errors.has("fine"),
                                  },
                                  attrs: {
                                    type: "number",
                                    step: "0.001",
                                    readonly: _vm.feeForm.is_attempt == true,
                                    id: "fine",
                                    placeholder: _vm.$t("Fine"),
                                  },
                                  domProps: { value: _vm.feeForm.fine },
                                  on: {
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.feeForm,
                                        "fine",
                                        $event.target.value
                                      )
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: { form: _vm.feeForm, field: "fine" },
                                }),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("tr", { staticClass: "bg-secondary white" }, [
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(_vm._s(_vm.$t("Waiver")) + " (-)"),
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "text-left" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.feeForm.discount,
                                      expression: "feeForm.discount",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid":
                                      _vm.feeForm.errors.has("discount"),
                                  },
                                  attrs: {
                                    type: "number",
                                    step: "0.001",
                                    readonly: _vm.feeForm.is_attempt == true,
                                    id: "discount",
                                    placeholder: _vm.$t("Waiver"),
                                  },
                                  domProps: { value: _vm.feeForm.discount },
                                  on: {
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.feeForm,
                                        "discount",
                                        $event.target.value
                                      )
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: {
                                    form: _vm.feeForm,
                                    field: "discount",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("tr", { staticClass: "bg-secondary white" }, [
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(_vm._s(_vm.$t("GrandTotal"))),
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-left" }, [
                              _vm._v(
                                _vm._s(
                                  _vm._f("withCurrency")(_vm.feeForm.total)
                                )
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _vm.feeForm.is_attempt == true
                            ? _c("tr", { staticClass: "bg-secondary white" }, [
                                _c("td", { staticClass: "text-right" }, [
                                  _vm._v(_vm._s(_vm.$t("PreviousPay"))),
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-left" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("withCurrency")(_vm.feeForm.oldPay)
                                    )
                                  ),
                                ]),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("tr", { staticClass: "bg-success white" }, [
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(_vm._s(_vm.$t("PayNow"))),
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "text-left" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.feeForm.pay,
                                      expression: "feeForm.pay",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.feeForm.errors.has("pay"),
                                  },
                                  attrs: {
                                    type: "number",
                                    step: "0.001",
                                    id: "pay",
                                    placeholder: _vm.$t("PayNow"),
                                  },
                                  domProps: { value: _vm.feeForm.pay },
                                  on: {
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.feeForm,
                                        "pay",
                                        $event.target.value
                                      )
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: { form: _vm.feeForm, field: "pay" },
                                }),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("tr", { staticClass: "bg-secondary white" }, [
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(
                                _vm._s(_vm.$t("Due")) +
                                  "/" +
                                  _vm._s(_vm.$t("Status"))
                              ),
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "text-left" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.feeForm.due,
                                      expression: "feeForm.due",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.feeForm.errors.has("due"),
                                  },
                                  attrs: {
                                    type: "text",
                                    id: "due",
                                    placeholder: _vm.$t("Due"),
                                    readonly: "",
                                  },
                                  domProps: { value: _vm.feeForm.due },
                                  on: {
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.feeForm,
                                        "due",
                                        $event.target.value
                                      )
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: { form: _vm.feeForm, field: "due" },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ],
                        2
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-6" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-secondary text-right",
                          attrs: { type: "button", "data-dismiss": "modal" },
                        },
                        [
                          _c("i", { staticClass: "fas fa-times" }),
                          _vm._v(" " + _vm._s(_vm.$t("Close"))),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-6" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { disabled: _vm.feeForm.busy, type: "button" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.submitFeeReceive.apply(null, arguments)
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "fas fa-save" }),
                          _vm._v(" " + _vm._s(_vm.$t("ReceiveNow"))),
                        ]
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.isPrint,
              expression: "isPrint",
            },
          ],
          attrs: { id: "printMe" },
        },
        [
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
                            _vm._s(_vm.student.studentName) +
                            " - (" +
                            _vm._s(_vm.student.studentCustom) +
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
                                  _vm._s(_vm.student.academicClass)
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "flex-fill" }, [
                            _c("p", [
                              _vm._v(
                                _vm._s(_vm.$t("AcademicInfo")) +
                                  ": " +
                                  _vm._s(_vm.student.academicDetail)
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
                                _vm._v(
                                  _vm._s(_vm._f("withCurrency")(b.amount))
                                ),
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
                                _vm._s(
                                  _vm._f("withCurrency")(_vm.printAble.fine)
                                )
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
                                _vm._s(
                                  _vm._f("withCurrency")(_vm.printAble.pay)
                                )
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
                          _c("p", [
                            _vm._v(_vm._s(_vm.$t("ReceiverSignature"))),
                          ]),
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
                            _vm._s(_vm.student.studentName) +
                            " - (" +
                            _vm._s(_vm.student.studentCustom) +
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
                                  _vm._s(_vm.student.academicClass)
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "flex-fill" }, [
                            _c("p", [
                              _vm._v(
                                _vm._s(_vm.$t("AcademicInfo")) +
                                  ": " +
                                  _vm._s(_vm.student.academicDetail)
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
                                _vm._v(
                                  _vm._s(_vm._f("withCurrency")(b.amount))
                                ),
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
                                _vm._s(
                                  _vm._f("withCurrency")(_vm.printAble.fine)
                                )
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
                                _vm._s(
                                  _vm._f("withCurrency")(_vm.printAble.pay)
                                )
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
                          _c("p", [
                            _vm._v(_vm._s(_vm.$t("ReceiverSignature"))),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                ]),
              ])
            : _vm._e(),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);