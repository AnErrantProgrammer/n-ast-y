/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("56d7");


/***/ }),

/***/ "15aa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var PartWeights = {};
PartWeights.Identifier = [['NewIdentifier', 'ExistingIdentifier'], [1, 3]];
PartWeights.Conditional = [['IfStatement', 'IfElseStatement'], [3, 2]];
PartWeights.Literal = [['LiteralNumber', 'LiteralString', 'LiteralBoolean'], [4, 1, 3]];
PartWeights.Program = [['Program'], [1]];
PartWeights.ArrayExpression = [['ArrayExpression'], [1]];
PartWeights.VariableDeclaration = [['VariableDeclaration'], [1]];
PartWeights.VariableDeclarator = [['VariableDeclarator'], [1]];
PartWeights.NewIdentifier = [['NewIdentifier'], [1]];
PartWeights.ExistingIdentifier = [['ExistingIdentifier'], [1]];
PartWeights.MathIdentifier = [['MathIdentifier'], [1]];
PartWeights.AbsIdentifier = [['AbsIdentifier'], [1]];
PartWeights.ConsoleIdentifier = [['ConsoleIdentifier'], [1]];
PartWeights.LogIdentifier = [['LogIdentifier'], [1]];
PartWeights.MemberExpression = [['MemberExpression'], [1]];
PartWeights.ExpressionStatement = [['ExpressionStatement'], [1]];
PartWeights.AssignmentExpression = [['AssignmentExpression'], [1]];
PartWeights.CallExpression = [['CallExpression'], [1]];
PartWeights.BinaryExpression = [['BinaryExpression', 'BinaryComparisonExpression'], [1, 1]];
PartWeights.LiteralString = [['LiteralString'], [1]];
PartWeights.LiteralNumber = [['LiteralNumber'], [1]];
PartWeights.IfStatement = [['IfStatement'], [1]];
PartWeights.IfElseStatement = [['IfElseStatement'], [1]];
PartWeights.BlockStatement = [['BlockStatement'], [1]];
PartWeights.ForStatement = [['ForStatement'], [1]];
PartWeights.UpdateExpression = [['UpdateExpression'], [1]];
PartWeights.ReturnStatement = [['ReturnStatement'], [1]];
/* harmony default export */ __webpack_exports__["a"] = (PartWeights);

/***/ }),

/***/ "199c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_runner_work_n_ast_y_n_ast_y_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("53ca");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("b64b");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("159b");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("7db0");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("25f0");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("99af");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("2ca0");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("a434");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("c740");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("b0c0");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("d81d");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _language_Syntax_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("561e");
/* harmony import */ var _language_Parts_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("15aa");
/* harmony import */ var _language_Values_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("50de");
/* harmony import */ var _language_Properties_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("3dea");
/* harmony import */ var _language_Arguments_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("3a0a");
/* harmony import */ var _validations_sample_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("476a");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("b166");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("2ef0");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("9e67");
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(chance__WEBPACK_IMPORTED_MODULE_20__);












//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









var chance = new chance__WEBPACK_IMPORTED_MODULE_20___default.a();
/* harmony default export */ __webpack_exports__["a"] = ({
  name: "App",
  data: function data() {
    return {
      programState: "stopped",
      syntax: _language_Syntax_js__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"],
      partWeights: _language_Parts_js__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"],
      argumentWeights: _language_Arguments_js__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"],
      propertyWeights: _language_Properties_js__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"],
      valueWeights: _language_Values_js__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"],
      program: "",
      programs: [],
      selectedProgramIndex: 0,
      nextGenPrograms: [],
      mostFitProgram: "// None yet",
      mostFitAST: {
        type: "Program",
        body: [],
        sourceType: "script"
      },
      deLearnRate: 0.1,
      learnRate: 0.1,
      initialLearn: 0.1,
      mutateWeight: 20,
      replaceWeight: 10,
      leaveWeight: 1,
      removeWeight: 5,
      additionalLearnRate: 250,
      staleGenerationCount: 10,
      maxLearnedPrograms: 250,
      fitness: 0,
      foundGeneration: 0,
      totalGenerations: 0,
      maxAttempts: 500,
      sandboxCount: 0,
      sandboxes: [],
      maxSandboxCount: 250,
      mainLoopInterval: null,
      selectedPart: null,
      sampleValidations: _validations_sample_js__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"],
      selectedValidation: _validations_sample_js__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].SUM_2,
      validations: _validations_sample_js__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].SUM_2.validations,
      validationInputs: {},
      mutatedProgram: "",
      currentProgram: 'console.log("Hello World");',
      teacherProgram: "",
      programOutputIndex: 0,
      lastProgram: "",
      learningEnabled: false,
      testPart: "",
      testNode: ""
    };
  },
  components: {},
  computed: {
    validationInputKeys: function validationInputKeys() {
      return Object.keys(lodash__WEBPACK_IMPORTED_MODULE_19___default.a.cloneDeep(this.validations[0].inputs));
    },
    totalFitness: function totalFitness() {
      return this.fitness / this.validations.length * 100;
    },
    isRunning: function isRunning() {
      return typeof this.mainLoopInterval == "number";
    },
    queue: function queue() {
      return parseInt(100 - this.programs.length / this.maxAttempts * 100, 10);
    },
    programSource: function programSource() {
      if (Object(_home_runner_work_n_ast_y_n_ast_y_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this.program) === "object") {
        //eslint-disable-next-line no-undef
        return escodegen.generate(this.program);
      } else {
        return "// None";
      }
    }
  },
  created: function created() {
    var vm = this;
  },
  methods: {
    nextProgram: function nextProgram() {
      this.selectedProgramIndex++;
      this.selectedProgramIndex = Math.min(this.selectedProgramIndex, this.programs.length);
    },
    prevProgram: function prevProgram() {
      this.selectedProgramIndex = Math.max(--this.selectedProgramIndex, 0);
    },
    selectedProgram: function selectedProgram() {
      var vm = this;

      if (vm.programs.length > vm.selectedProgramIndex && vm.programs.length != 0) {
        vm.lastProgram = vm.programs[vm.selectedProgramIndex].code;
        return vm.programs[vm.selectedProgramIndex].code;
      } else {
        return vm.lastProgram;
      }
    },
    openPartDetail: function openPartDetail(part) {
      var vm = this;
      vm.selectedPart = part;
      this.$bvModal.show("syntax-details");
    },
    restart: function restart() {
      document.getElementById("log").innerHTML = "";
      var vm = this;
      vm.programState = "stopped";
      vm.nextGenPrograms = [];
      vm.programs = [];
      vm.totalGenerations = 0;
      vm.foundGeneration = 0;
      vm.fitness = 0;
      vm.lastProgram = "";
      vm.mostFitProgram = "// None yet";
      vm.mostFitAST = {
        type: "Program",
        body: [],
        sourceType: "script"
      };
      vm.terminateSandboxes();
    },
    start: function start() {
      var vm = this;
      vm.programState = "runnning";

      if (vm.sandboxes.length < vm.maxSandboxCount) {
        vm.initializeSandboxes();
      }

      vm.createGeneration();
      vm.logOutput("Starting interval process");
      vm.mainLoopInterval = setTimeout(vm.processQueue, 5);
    },
    createGeneration: function createGeneration() {
      var vm = this;
      var i;
      vm.totalGenerations++;

      if (vm.fitness > 0) {
        var count = Math.ceil(vm.maxAttempts / 10);
        vm.logOutput("Mutating " + count + " of the most fit programs");

        for (i = 0; i < count; i++) {
          vm.mutateProgram(vm.mostFitAST);
        }
      }

      vm.logOutput("Mutating " + vm.nextGenPrograms.length + " programs");

      lodash__WEBPACK_IMPORTED_MODULE_19___default.a.forEach(vm.nextGenPrograms, function (nextGenProgram) {
        vm.mutateProgram(nextGenProgram.ast);
      });

      vm.logOutput("Creating " + (vm.maxAttempts - vm.programs.length) + " programs");

      for (i = vm.programs.length; i < vm.maxAttempts; i++) {
        vm.createProgram();
      }

      vm.logOutput("Finished creating programs");
    },
    stop: function stop() {
      var vm = this;
      vm.programState = "paused";
      clearInterval(vm.mainLoopInterval);
      vm.logOutput("Stopping interval process");
      vm.mainLoopInterval = null;
    },
    getProgramSource: function getProgramSource(ast) {
      //eslint-disable-next-line no-undef
      return escodegen.generate(ast);
    },
    processQueue: function processQueue() {
      var vm = this;

      if (vm.programs.length > 0) {
        var sandbox = getSandbox();

        while (vm.programs.length > 0 && sandbox) {
          var program = vm.programs.pop();
          vm.runProgram(program.code, program.ast, sandbox);
          sandbox = getSandbox();
        }

        vm.mainLoopInterval = setTimeout(vm.processQueue, 5);
      } else {
        vm.logOutput("Generation ".concat(vm.totalGenerations, " complete"));

        if (vm.fitness < vm.validations.length) {
          var boomerGen = vm.totalGenerations - vm.foundGeneration;

          if (boomerGen >= vm.staleGenerationCount) {
            vm.deWeightLearnedSyntax();
          }

          if (boomerGen >= vm.staleGenerationCount * 2) {
            vm.fitness = 0;
            vm.mostFitProgram = "// None yet";
            vm.mostFitAST = {
              type: "Program",
              body: [],
              sourceType: "script"
            };
          }

          vm.createGeneration();
          vm.logOutput("Executing generation ".concat(vm.totalGenerations));
          vm.mainLoopInterval = setTimeout(vm.processQueue, 5);
        } else {
          vm.logOutput("Found the most fit program");
          vm.stop();
        }
      }

      function getSandbox() {
        return vm.sandboxes.find(function (sandbox) {
          return sandbox.state == "idle";
        });
      }
    },
    logOutput: function logOutput(message) {
      var node = document.createElement("PRE");
      var log = document.getElementById("log");
      var textnode = document.createTextNode(Object(date_fns__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"])(new Date(), "yyyy-MM-dd HH:mm:ss") + ": " + message);
      node.appendChild(textnode);
      log.appendChild(node);
      log.scrollTop = log.scrollHeight;
    },
    terminateSandboxes: function terminateSandboxes() {
      var vm = this;
      vm.logOutput("Clearing old sandboxes");
      vm.sandboxes.forEach(function (sandbox) {
        sandbox.terminate();
      });
      vm.sandboxes = [];
      vm.logOutput("Finished clearing old sandboxes");
    },
    initializeSandboxes: function initializeSandboxes() {
      var vm = this;
      vm.logOutput("Creating sandboxes");

      var replacer = function replacer(key, value) {
        if (typeof value === "function") {
          return value.toString();
        }

        return value;
      };

      for (var count = vm.sandboxes.length; count < vm.maxSandboxCount; count++) {
        var sandbox = new Worker("js/sandbox.js");
        sandbox.state = "idle";
        var init = {
          topic: "setValidations",
          payload: JSON.stringify(vm.validations, replacer)
        };
        sandbox.addEventListener("message", function (messageEvent) {
          this.state = "idle";
          var event = messageEvent;

          if (event.data.fitness > vm.fitness) {
            vm.logOutput("Found a more fit function");
            vm.logOutput("Fitness: ".concat(event.data.fitness, "\nProgram:\n").concat(event.data.code));
            vm.foundGeneration = vm.totalGenerations;
            vm.fitness = event.data.fitness;
            vm.mostFitProgram = event.data.code;
            vm.mostFitAST = event.data.ast;
            vm.nextGenPrograms.unshift(event.data);

            if (vm.learningEnabled) {
              vm.learnProgram(event.data.ast, event.data.fitness);
            }
          } else if (vm.fitness > 1 && event.data.fitness >= vm.fitness - 1) {
            vm.nextGenPrograms.unshift(event.data);

            if (vm.learningEnabled) {
              var shouldLearn = chance.weighted([true, false], [1, vm.additionalLearnRate]);

              if (shouldLearn) {
                vm.learnProgram(event.data.ast, event.data.fitness);
              }
            }
          }

          while (vm.nextGenPrograms.length > vm.maxLearnedPrograms) {
            vm.nextGenPrograms.pop();
          }
        });
        sandbox.addEventListener("error", function (errorEvent) {
          console.log("An error occcurred in worker: " + errorEvent.message); //vm.logOutput(`Fitness: Error\nProgram:\n${e.data.program}` );
        });
        sandbox.postMessage(init);
        vm.sandboxes.push(sandbox);
      }

      vm.logOutput("Finished creating sandboxes");
    },
    deWeightLearnedSyntax: function deWeightLearnedSyntax() {
      var vm = this;
      vm.logOutput("Lowering Weights because program is stale");

      lodash__WEBPACK_IMPORTED_MODULE_19___default.a.forEach(vm.partWeights, function (partWeights) {
        var weightsLength = partWeights[0].length;

        for (var i = 0; i < weightsLength; i++) {
          if (partWeights[0][i].startsWith("_")) {
            partWeights[1][i] -= parseFloat(vm.deLearnRate);
          }

          if (partWeights[1][i] <= 0) {
            partWeights[0].splice(i, 1);
            partWeights[1].splice(i, 1);
            weightsLength--;
            i--;
          }
        }
      });
    },
    clearLearnedParts: function clearLearnedParts() {
      var vm = this;

      lodash__WEBPACK_IMPORTED_MODULE_19___default.a.forEach(vm.partWeights, function (partWeights) {
        var weightsLength = partWeights[0].length;

        for (var i = 0; i < weightsLength; i++) {
          if (partWeights[0][i].startsWith("_")) {
            partWeights[0].splice(i, 1);
            partWeights[1].splice(i, 1);
            weightsLength--;
            i--;
          }
        }
      });
    },
    runProgram: function runProgram(program, ast, sandbox) {
      var vm = this;
      var app = {
        topic: "executeProgram",
        ast: ast,
        payload: program
      };
      sandbox.state = "running";
      sandbox.postMessage(app);
    },
    generateNode: function generateNode() {
      var program = this.createNode(this.testPart, null);
      this.testNode = this.getProgramSource(program);
    },
    createProgram: function createProgram() {
      var vm = this;
      var program = this.createNode("Program", null);

      while (program.body.length == 0) {
        program = this.createNode("Program", null);
      }

      vm.programs.push({
        code: vm.getProgramSource(program),
        ast: program,
        fitness: -1
      });
    },
    validateProgram: function validateProgram() {
      var vm = this;

      lodash__WEBPACK_IMPORTED_MODULE_19___default.a.forEach(vm.validationInputs, function (validationInput, key) {
        try {
          window[key] = eval(validationInput);
        } catch (ex) {
          window[key] = validationInput;
        }
      }); //eslint-disable-next-line no-undef


      window.answer = null;
      eval(vm.mostFitProgram);
      vm.validationInputs["answer"] = window.answer;
    },
    mutateProgram: function mutateProgram(ast) {
      var vm = this; //eslint-disable-next-line no-undef
      // var ast = esprima.parse(vm.currentProgram);
      // var ast = _.cloneDeep(vm.mostFitAST);
      //eslint-disable-next-line no-undef

      estraverse.traverse(ast, {
        enter: function enter(node, parent) {
          var scope = [];

          if (parent != null) {
            scope = parent.scope;
          } else {
            scope = Object.keys(vm.validations[0].inputs);
          }

          node.scope = scope;
          node.parent = parent;

          if (node.type !== "Program") {
            var action = chance.weighted(["mutate", "replace", "leave", "remove"], [vm.mutateWeight, vm.replaceWeight, vm.leaveWeight, vm.removeWeight]);

            switch (action) {
              case "mutate":
                return vm.mutateNode(node);

              case "replace":
                return vm.createNode(node.type, node.parent);

              case "remove":
                this.remove();
                break;

              case "leave":
                break;
            }
          }
        }
      }); //eslint-disable-next-line no-undef
      // vm.mutatedProgram = escodegen.generate(ast);
      //

      vm.programs.push({
        code: vm.getProgramSource(ast),
        ast: ast,
        fitness: 0
      });
    },
    teachProgram: function teachProgram() {
      var vm = this; //eslint-disable-next-line no-undef

      var ast = esprima.parse(vm.teacherProgram); //eslint-disable-next-line no-undef

      estraverse.traverse(ast, {
        enter: function enter(node, parent) {
          if (typeof node._id === "undefined") {
            node._id = "_" + chance.guid({
              version: 4
            });
          }
        }
      });
      vm.learnProgram(JSON.parse(JSON.stringify(ast)), 1);
    },
    learnProgram: function learnProgram(ast, fitness) {
      var vm = this;
      vm.logOutput("Learning new program"); //eslint-disable-next-line no-undef

      estraverse.traverse(ast, {
        enter: function enter(node, parent) {
          if (node.type !== "Program") {
            if (typeof vm.partWeights[node.type] === "undefined") {
              vm.partWeights[node.type] = [[], []];
            }

            var partIndex = lodash__WEBPACK_IMPORTED_MODULE_19___default.a.findIndex(vm.partWeights[node.type][0], function (e) {
              return e == node._id;
            });

            if (partIndex != -1) {
              //console.log("Part Exists: incrementing");
              vm.partWeights[node.type][1][partIndex] += parseFloat(vm.learnRate);
            } else {
              // console.log("Creating new part: " + node.type + ' ' + node._id);
              vm.partWeights[node.type][0].push(node._id);
              vm.partWeights[node.type][1].push(parseFloat(vm.initialLearn));
            }

            vm.syntax[node._id] = [];

            for (var prop in node) {
              if (prop != "scope") {
                vm.syntax[node._id].push({
                  key: prop,
                  value: node[prop],
                  type: "Static"
                });
              }
            }
          }
        }
      });
    },
    mutateNode: function mutateNode(node) {
      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var vm = this;
      var key = node.type;
      var mutated = false;
      var syntax = vm.syntax[key];

      lodash__WEBPACK_IMPORTED_MODULE_19___default.a.forEach(syntax, function (syntaxPart) {
        try {
          var action = chance.weighted(["mutate", "leave"], [4, 3]);

          if (syntaxPart.value == null) {
            if (typeof vm.propertyWeights[key] !== "undefined" && typeof vm.propertyWeights[key][syntaxPart.key] !== "undefined") {
              syntaxPart.value = vm.propertyWeights[key][syntaxPart.key];
            }

            if (typeof vm.valueWeights[key] !== "undefined" && typeof vm.valueWeights[key][syntaxPart.key] !== "undefined") {
              syntaxPart.value = vm.valueWeights[key][syntaxPart.key];
            }
          }

          if (action == "mutate") {
            mutated = true;

            if (syntaxPart.type === "Static") {
              node[syntaxPart.key] = syntaxPart.value;
            } else if (syntaxPart.type === "Dynamic") {
              node[syntaxPart.key] = vm.generateDynamic(syntaxPart, node);
            } else if (syntaxPart.type === "DynamicValue") {
              node[syntaxPart.key] = chance.weighted(syntaxPart.value[0], syntaxPart.value[1]);
            } else if (syntaxPart.type === "Function") {
              node[syntaxPart.key] = syntaxPart.value.call(node);
            } else if (syntaxPart.type === "KeyFunction") {
              node[syntaxPart.key] = vm.createNode(syntaxPart.value.call(node), node);
            } else if (syntaxPart.type === "Arguments") {
              var argumentPattern = [];

              if (node.callee.type == "Identifier") {
                var identifier = node.callee.name;

                if (typeof vm.argumentWeights[identifier] !== "undefined") {
                  argumentPattern = chance.weighted(vm.argumentWeights[identifier][0], vm.argumentWeights[identifier][1]);
                }
              } else if (node.callee.type == "MemberExpression") {
                var obj = node.callee.object.name;
                var property = node.callee.property.name;

                if (typeof vm.argumentWeights[obj] != "undefined" && typeof vm.argumentWeights[obj][property] !== "undefined") {
                  argumentPattern = chance.weighted(vm.argumentWeights[obj][property][0], vm.argumentWeights[obj][property][1]);
                }
              }

              node[syntaxPart.key] = argumentPattern.map(function (argumentPart) {
                return vm.createNode(argumentPart);
              });
            } else if (syntaxPart.type === "Body") {
              var bodyMutationType = chance.weighted(["leave", "mutate", "shuffle"], [4, 3, 1]);
              node.scope = lodash__WEBPACK_IMPORTED_MODULE_19___default.a.cloneDeep(node.scope);

              if (bodyMutationType == "mutate") {
                depth++;
                node[syntaxPart.key] = vm.generateBody(syntaxPart, node, depth);
                depth--;
              } else if (bodyMutationType == "shuffle") {
                node[syntaxPart.key] = lodash__WEBPACK_IMPORTED_MODULE_19___default.a.shuffle(node[syntaxPart.key]);
              }
            }
          }
        } catch (ex) {
          console.error(ex);
          throw ex;
        }
      });

      if (mutated) {
        node._id = "_" + chance.guid({
          version: 4
        });
      }

      return node;
    },
    selectedWeightedPart: function selectedWeightedPart(keyName) {
      var vm = this;
      var key;

      try {
        key = chance.weighted(vm.partWeights[keyName][0], vm.partWeights[keyName][1]);
      } catch (ex) {
        console.error(keyName);
        console.error(ex);
        throw ex;
      }

      return key;
    },
    initializeScope: function initializeScope(parent) {
      var vm = this;

      if (parent != null) {
        return parent.scope;
      } else {
        return Object.keys(vm.validations[0].inputs);
      }
    },
    createNode: function createNode(keyName, parent) {
      var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var vm = this;
      var scope = []; // For the given syntactic part select one of the valid types

      var key = vm.selectedWeightedPart(keyName); // Create an empty scope or inherit the scope from the parent

      scope = vm.initializeScope(parent); // The node parts is an object which represents the abstract syntax tree for this node

      var nodeParts = {
        scope: scope,
        parent: parent
      }; // The key will refer to a part of syntax and will contain 1 or more keys which are
      // the different parts of the syntax
      // Iterate over each of those key parts and for each part specify or create the value and add it to the node parts

      lodash__WEBPACK_IMPORTED_MODULE_19___default.a.forEach(vm.syntax[key], function (syntaxPart) {
        try {
          // If the syntax part has a null value it means we want to look up the potential lists of values
          if (syntaxPart.value == null) {
            // Check to see if the syntax part is looking for a property
            if (typeof vm.propertyWeights[key] !== "undefined" && typeof vm.propertyWeights[key][syntaxPart.key] !== "undefined") {
              syntaxPart.value = vm.propertyWeights[key][syntaxPart.key];
            } // Check to see if the syntax part is looking for a value such as an operator


            if (typeof vm.valueWeights[key] !== "undefined" && typeof vm.valueWeights[key][syntaxPart.key] !== "undefined") {
              syntaxPart.value = vm.valueWeights[key][syntaxPart.key];
            }
          } // If the syntax part type is STATIC then the value of the key on the node should be the value of the part
          // If the syntax part type is DYNAMIC then RWC a potential value then create and return that sub-node
          // If the syntax part type is DYNAMIC_VALUE then RWC a potential value and assign it to the value of the key on the node
          // If the syntax part type is FUNCTION then call the function and return the value to the key on the node
          // If the syntax part type is BODY then increase the depth, copy the scope of variables, create a new body and assign it to the value of the key on the node


          if (syntaxPart.type === "Static") {
            nodeParts[syntaxPart.key] = syntaxPart.value;
          } else if (syntaxPart.type === "Dynamic") {
            nodeParts[syntaxPart.key] = vm.generateDynamic(syntaxPart, nodeParts);
          } else if (syntaxPart.type === "DynamicValue") {
            nodeParts[syntaxPart.key] = chance.weighted(syntaxPart.value[0], syntaxPart.value[1]);
          } else if (syntaxPart.type === "Function") {
            nodeParts[syntaxPart.key] = syntaxPart.value.call(nodeParts);
          } else if (syntaxPart.type === "KeyFunction") {
            nodeParts[syntaxPart.key] = vm.createNode(syntaxPart.value.call(nodeParts), nodeParts, depth);
          } else if (syntaxPart.type === "List") {
            var length = chance.integer({
              min: 0,
              max: 10
            });
            var elements = [];

            for (var i = 0; i < length; i++) {
              var elementKey = chance.weighted(syntaxPart.value[0], syntaxPart.value[1]);
              var elementValue = vm.selectedWeightedPart(elementKey);
              elements.push(vm.createNode(elementValue));
            }

            nodeParts[syntaxPart.key] = elements;
          } else if (syntaxPart.type === "Arguments") {
            var argumentPattern = [];

            if (nodeParts.callee.type == "Identifier") {
              var identifier = nodeParts.callee.name;

              if (typeof vm.argumentWeights[identifier] !== "undefined") {
                argumentPattern = chance.weighted(vm.argumentWeights[identifier][0], vm.argumentWeights[identifier][1]);
              }
            } else if (nodeParts.callee.type == "MemberExpression") {
              var obj = nodeParts.callee.object.name;
              var property = nodeParts.callee.property.name;

              if (typeof vm.argumentWeights[obj] != "undefined" && typeof vm.argumentWeights[obj][property] !== "undefined") {
                argumentPattern = chance.weighted(vm.argumentWeights[obj][property][0], vm.argumentWeights[obj][property][1]);
              }
            }

            nodeParts[syntaxPart.key] = argumentPattern.map(function (argumentPart) {
              return vm.createNode(argumentPart);
            });
          } else if (syntaxPart.type === "Body") {
            depth++;
            nodeParts.scope = lodash__WEBPACK_IMPORTED_MODULE_19___default.a.cloneDeep(nodeParts.scope);
            nodeParts[syntaxPart.key] = vm.generateBody(syntaxPart, nodeParts, depth);
            depth--;
          }
        } catch (ex) {
          console.error(key);
          console.error(ex);
          throw ex;
        }
      });

      if (typeof nodeParts._id === "undefined") {
        nodeParts._id = "_" + chance.guid({
          version: 4
        });
      }

      delete nodeParts.parent;
      return nodeParts;
    },
    generateDynamic: function generateDynamic(syntaxPart, nodeParts) {
      var vm = this;
      var subPart = chance.weighted(syntaxPart.value[0], syntaxPart.value[1]);
      return vm.createNode(subPart, nodeParts);
    },
    generateBody: function generateBody(syntaxPart, nodeParts, depth) {
      var vm = this;
      var body = [];
      var subPart = chance.weighted(syntaxPart.value[0], syntaxPart.value[1]);

      while (syntaxPart.min > 0 && body.length < syntaxPart.min || subPart !== "Terminate" && subPart !== "ReturnStatement") {
        if (subPart !== "Terminate") {
          body.push(vm.createNode(subPart, nodeParts, depth));
        }

        subPart = chance.weighted(syntaxPart.value[0], syntaxPart.value[1]);

        if (subPart !== "Terminate" && subPart !== "ReturnStatement") {
          subPart = chance.weighted([subPart, "Terminate"], [1, depth - 1]);
        }
      }

      return body;
    }
  }
});

/***/ }),

/***/ "3a0a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var ArgumentWeights = {};
ArgumentWeights.Math = {};
ArgumentWeights.Math.abs = [[['LiteralNumber'], ['ExistingIdentifier']], [1, 1]];
/* harmony default export */ __webpack_exports__["a"] = (ArgumentWeights);

/***/ }),

/***/ "3dea":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var PropertyWeights = {};
PropertyWeights.Program = {};
PropertyWeights.Program.body = [["VariableDeclaration", "ExpressionStatement", "Conditional", "ReturnStatement", "Terminate"], [1, 2, 1, 1, 8]];
PropertyWeights.VariableDeclaration = {};
PropertyWeights.VariableDeclaration.declarations = [["VariableDeclarator", "Terminate"], [1, 1]];
PropertyWeights.VariableDeclarator = {};
PropertyWeights.VariableDeclarator.id = [["NewIdentifier"], [1]];
PropertyWeights.VariableDeclarator.init = [["Literal", "BinaryExpression"], [1, 1]];
PropertyWeights.NewIdentifier = {};
PropertyWeights.ExistingIdentifier = {};
PropertyWeights.MathIdentifier = {};
PropertyWeights.MathIdentifier.properties = [["AbsIdentifier"], [1]];
PropertyWeights.AbsIdentifier = {};
PropertyWeights.ConsoleIdentifier = {};
PropertyWeights.ConsoleIdentifier.properties = [["LogIdentifier"], [1]];
PropertyWeights.MathIdentifier = {};
PropertyWeights.MathIdentifier.properties = [["AbsIdentifier"], [1]];
PropertyWeights.AbsIdentifier = {};
PropertyWeights.LogIdentifier = {};
PropertyWeights.MemberExpression = {};
PropertyWeights.MemberExpression.object = [["ConsoleIdentifier", "MathIdentifier"], [0, 1]];
PropertyWeights.ArrayExpression = {};
PropertyWeights.ArrayExpression.elements = [["Identifier"], [1]];
PropertyWeights.ExpressionStatement = {};
PropertyWeights.ExpressionStatement.expression = [["BinaryExpression", "CallExpression", "MemberExpression", "AssignmentExpression", "UpdateExpression", "ArrayExpression"], [1, 1, 0, 5, 1, 1]];
PropertyWeights.AssignmentExpression = {};
PropertyWeights.AssignmentExpression.left = [["ExistingIdentifier"], [1]];
PropertyWeights.AssignmentExpression.right = [["Literal", "BinaryExpression", "ExistingIdentifier"], [1, 3, 2]];
PropertyWeights.CallExpression = {};
PropertyWeights.CallExpression.callee = [["MemberExpression"], [1]];
PropertyWeights.CallExpression.arguments = [["Literal", "Terminate"], [1, 2]];
PropertyWeights.BinaryExpression = {};
PropertyWeights.BinaryExpression.left = [["Literal", "ExistingIdentifier", "BinaryExpression"], [1, 2, 4]];
PropertyWeights.BinaryExpression.right = [["Literal", "ExistingIdentifier"], [4, 1]];
PropertyWeights.BinaryComparisonExpression = {};
PropertyWeights.BinaryComparisonExpression.left = [["Literal", "ExistingIdentifier", "BinaryExpression"], [1, 2, 4]];
PropertyWeights.BinaryComparisonExpression.right = [["Literal", "ExistingIdentifier"], [4, 3]];
PropertyWeights.LiteralString = {};
PropertyWeights.LiteralNumber = {};
PropertyWeights.LiteralBoolean = {};
PropertyWeights.IfStatement = {};
PropertyWeights.IfStatement.test = [["ExistingIdentifier", "BinaryExpression"], [1, 1]];
PropertyWeights.IfStatement.consequent = [["BlockStatement"], [1]];
PropertyWeights.IfElseStatement = {};
PropertyWeights.IfElseStatement.test = [["ExistingIdentifier", "BinaryExpression"], [1, 4]];
PropertyWeights.IfElseStatement.consequent = [["BlockStatement"], [1]];
PropertyWeights.IfElseStatement.alternate = [["BlockStatement"], [1]];
PropertyWeights.BlockStatement = {};
PropertyWeights.BlockStatement.body = [["VariableDeclaration", "ExpressionStatement", "Conditional", "ReturnStatement", "Terminate"], [1, 5, 7, 5, 20]];
PropertyWeights.ForStatement = {};
PropertyWeights.ForStatement.init = [["VariableDeclaration"], [1]];
PropertyWeights.ForStatement.test = [["BinaryExpression"], [1]];
PropertyWeights.ForStatement.update = [["UpdateExpression"], [1]];
PropertyWeights.ForStatement.body = [["VariableDeclaration", "ExpressionStatement", "Conditional", "ReturnStatement", "Terminate"], [1, 10, 1, 30]];
PropertyWeights.UpdateExpression = {};
PropertyWeights.UpdateExpression.argument = [["ExistingIdentifier"], [1]];
PropertyWeights.ReturnStatement = {};
PropertyWeights.ReturnStatement.argument = [["ExistingIdentifier"], [1]];
/* harmony default export */ __webpack_exports__["a"] = (PropertyWeights);

/***/ }),

/***/ "476a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b0c0");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a4d3");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("e01a");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);



var SampleProblems = {};
SampleProblems.easy = {};
SampleProblems.easy.name = "Easy";
SampleProblems.easy.description = 'Answer should be whatever value is in the b variable.';
SampleProblems.easy.validations = [{
  inputs: {
    'answer': null,
    'a': true,
    'b': 20,
    'c': 30
  },
  validation: function validation(answer) {
    return answer == 20;
  }
}];
SampleProblems.medium = {};
SampleProblems.medium.name = "Medium";
SampleProblems.medium.description = 'If a is true answer should be b, if a is false answer should be c.';
SampleProblems.medium.validations = [{
  inputs: {
    'answer': null,
    'a': true,
    'b': 1,
    'c': 2
  },
  validation: function validation(answer) {
    return answer == 1;
  }
}, {
  inputs: {
    'answer': null,
    'a': true,
    'b': "B",
    'c': "C"
  },
  validation: function validation(answer) {
    return answer == "B";
  }
}, {
  inputs: {
    'answer': null,
    'a': true,
    'b': 20,
    'c': 30
  },
  validation: function validation(answer) {
    return answer == 20;
  }
}, {
  inputs: {
    'answer': null,
    'a': false,
    'b': "B",
    'c': "C"
  },
  validation: function validation(answer) {
    return answer == "C";
  }
}, {
  inputs: {
    'answer': null,
    'a': false,
    'b': 20,
    'c': 30
  },
  validation: function validation(answer) {
    return answer == 30;
  }
}];
SampleProblems.EVEN_ODD = {};
SampleProblems.EVEN_ODD.name = "Even/Odd";
SampleProblems.EVEN_ODD.description = 'If a is even answer should be true, if a is odd answer should be false.';
SampleProblems.EVEN_ODD.validations = [{
  inputs: {
    'answer': null,
    'a': 2
  },
  validation: function validation(answer) {
    return typeof answer == 'boolean' && answer == true;
  }
}, {
  inputs: {
    'answer': null,
    'a': 4
  },
  validation: function validation(answer) {
    return typeof answer == 'boolean' && answer == true;
  }
}, {
  inputs: {
    'answer': null,
    'a': 1
  },
  validation: function validation(answer) {
    return typeof answer == 'boolean' && answer == false;
  }
}, {
  inputs: {
    'answer': null,
    'a': 3
  },
  validation: function validation(answer) {
    return typeof answer == 'boolean' && answer == false;
  }
}, {
  inputs: {
    'answer': null,
    'a': 0
  },
  validation: function validation(answer) {
    return typeof answer == 'boolean' && answer == true;
  }
}, {
  inputs: {
    'answer': null,
    'a': 5
  },
  validation: function validation(answer) {
    return typeof answer == 'boolean' && answer == false;
  }
}];
SampleProblems.SUM_2 = {};
SampleProblems.SUM_2.name = "Sum 2";
SampleProblems.SUM_2.description = 'Answer should be a sum of a and b';
SampleProblems.SUM_2.validations = [{
  inputs: {
    'answer': null,
    'a': 2,
    'b': 3
  },
  validation: function validation(answer) {
    return answer == 5;
  }
}, {
  inputs: {
    'answer': null,
    'a': 1,
    'b': 1
  },
  validation: function validation(answer) {
    return answer == 2;
  }
}, {
  inputs: {
    'answer': null,
    'a': 1,
    'b': 2
  },
  validation: function validation(answer) {
    return answer == 3;
  }
}, {
  inputs: {
    'answer': null,
    'a': 2,
    'b': 2
  },
  validation: function validation(answer) {
    return answer == 4;
  }
}];
SampleProblems.SUM_3 = {};
SampleProblems.SUM_3.name = "Sum 3";
SampleProblems.SUM_3.description = 'Answer should be a sum of a,b,c in that order.';
SampleProblems.SUM_3.validations = [{
  inputs: {
    'answer': null,
    'a': 2,
    'b': 3,
    'c': 4
  },
  validation: function validation(answer) {
    return answer == 9;
  }
}, {
  inputs: {
    'answer': null,
    'a': 1,
    'b': 1,
    'c': 1
  },
  validation: function validation(answer) {
    return answer == 3;
  }
}, {
  inputs: {
    'answer': null,
    'a': 2,
    'b': 2,
    'c': 4
  },
  validation: function validation(answer) {
    return answer == 8;
  }
}, {
  inputs: {
    'answer': null,
    'a': 1,
    'b': 100,
    'c': 1
  },
  validation: function validation(answer) {
    return answer == 102;
  }
}, {
  inputs: {
    'answer': null,
    'a': 'f',
    'b': 'o',
    'c': 'o'
  },
  validation: function validation(answer) {
    return answer == 'foo';
  }
}];
/* harmony default export */ __webpack_exports__["a"] = (SampleProblems);

/***/ }),

/***/ "50de":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var ValueWeights = {};
ValueWeights.BinaryExpression = {};
ValueWeights.BinaryExpression.operator = [['%', '+', '-', '*', '/', '==', '!=', '===', '!=='], [1, 1, 1, 1, 1, 1, 1, 1, 1]];
ValueWeights.BinaryComparisonExpression = {};
ValueWeights.BinaryComparisonExpression.operator = [['==', '!=', '===', '!=='], [1, 1, 1, 1]];
ValueWeights.UpdateExpression = {};
ValueWeights.UpdateExpression.operator = [['++', '--'], [1, 1]];
ValueWeights.UpdateExpression.prefix = [[true, false], [1, 1]];
/* harmony default export */ __webpack_exports__["a"] = (ValueWeights);

/***/ }),

/***/ "561e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9e67");
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chance__WEBPACK_IMPORTED_MODULE_0__);

var chance = new chance__WEBPACK_IMPORTED_MODULE_0___default.a();
var Syntax = {};
Syntax.Program = [{
  key: 'type',
  value: 'Program',
  type: 'Static'
}, {
  key: 'body',
  value: null,
  type: 'Body',
  min: 1
}, {
  key: "sourceType",
  value: "script",
  type: "Static"
}];
Syntax.VariableDeclaration = [{
  key: 'type',
  value: 'VariableDeclaration',
  type: 'Static'
}, {
  key: 'declarations',
  value: null,
  type: 'Body',
  min: 1
}, {
  key: 'kind',
  value: 'var',
  type: 'Static'
}];
Syntax.VariableDeclarator = [{
  key: 'type',
  value: 'VariableDeclarator',
  type: 'Static'
}, {
  key: 'id',
  value: null,
  type: 'Dynamic',
  min: 1
}, {
  key: 'init',
  value: null,
  type: 'Dynamic'
}];
Syntax.NewIdentifier = [{
  key: 'type',
  value: 'Identifier',
  type: 'Static'
}, {
  key: 'name',
  value: function value() {
    var newIdentifier = chance.word();
    this.scope.push(newIdentifier);
    return newIdentifier;
  },
  type: 'Function'
}];
Syntax.ExistingIdentifier = [{
  key: 'type',
  value: 'Identifier',
  type: 'Static'
}, {
  key: 'name',
  value: function value() {
    if (this.scope.length > 0) {
      var id = chance.pickone(this.scope);
      return id;
    } else {
      var newIdentifier = chance.word();
      this.scope.push(newIdentifier);
      return newIdentifier;
    }
  },
  type: 'Function'
}];
Syntax.ArrayExpression = [{
  key: 'type',
  value: 'ArrayExpression',
  type: 'Static'
}, {
  key: 'elements',
  value: null,
  type: 'List'
}];
Syntax.MathIdentifier = [{
  key: 'type',
  value: 'Identifier',
  type: 'Static'
}, {
  key: 'name',
  value: 'Math',
  type: 'Static'
}, {
  key: 'properties',
  value: null,
  type: 'Static'
}];
Syntax.AbsIdentifier = [{
  key: 'type',
  value: 'Identifier',
  type: 'Static'
}, {
  key: 'name',
  value: 'abs',
  type: 'Static'
}];
Syntax.ConsoleIdentifier = [{
  key: 'type',
  value: 'Identifier',
  type: 'Static'
}, {
  key: 'name',
  value: 'console',
  type: 'Static'
}, {
  key: 'properties',
  value: null,
  type: 'Static'
}];
Syntax.LogIdentifier = [{
  key: 'type',
  value: 'Identifier',
  type: 'Static'
}, {
  key: 'name',
  value: 'log',
  type: 'Static'
}];
Syntax.MemberExpression = [{
  key: 'type',
  value: 'MemberExpression',
  type: 'Static'
}, {
  key: 'computed',
  value: false,
  type: 'Static'
}, {
  key: 'object',
  value: null,
  type: 'Dynamic'
}, {
  key: 'property',
  value: function value() {
    if (typeof this.object.properties !== 'undefined') {
      return chance.weighted(this.object.properties[0], this.object.properties[1]);
    } else {
      return chance.weighted(this.object.property);
    }
  },
  type: 'KeyFunction'
}];
Syntax.ExpressionStatement = [{
  key: 'type',
  value: 'ExpressionStatement',
  type: 'Static'
}, {
  key: 'expression',
  value: null,
  type: 'Dynamic'
}];
Syntax.AssignmentExpression = [{
  key: 'type',
  value: 'AssignmentExpression',
  type: 'Static'
}, {
  key: 'operator',
  value: '=',
  type: 'Static'
}, {
  key: 'left',
  value: null,
  type: 'Dynamic'
}, {
  key: 'right',
  value: null,
  type: 'Dynamic'
}];
Syntax.CallExpression = [{
  key: 'type',
  value: 'CallExpression',
  type: 'Static'
}, {
  key: 'callee',
  value: null,
  type: 'Dynamic'
}, {
  key: 'arguments',
  value: null,
  type: 'Arguments'
}];
Syntax.BinaryExpression = [{
  key: 'type',
  value: 'BinaryExpression',
  type: 'Static'
}, {
  key: 'operator',
  value: null,
  type: 'DynamicValue'
}, {
  key: 'left',
  value: null,
  type: 'Dynamic'
}, {
  key: 'right',
  value: null,
  type: 'Dynamic'
}];
Syntax.BinaryComparisonExpression = [{
  key: 'type',
  value: 'BinaryExpression',
  type: 'Static'
}, {
  key: 'operator',
  value: null,
  type: 'DynamicValue'
}, {
  key: 'left',
  value: null,
  type: 'Dynamic'
}, {
  key: 'right',
  value: null,
  type: 'Dynamic'
}];
Syntax.LiteralString = [{
  key: 'type',
  value: 'Literal',
  type: 'Static'
}, {
  key: 'value',
  value: function value() {
    return chance.word();
  },
  type: 'Function'
}, {
  key: 'raw',
  value: function value() {
    return "\"".concat(this.value, "\"");
  },
  type: 'Function'
}];
Syntax.LiteralNumber = [{
  key: 'type',
  value: 'Literal',
  type: 'Static'
}, {
  key: 'value',
  value: function value() {
    return chance.integer({
      min: 0,
      max: 10
    });
  },
  type: 'Function'
}, {
  key: 'raw',
  value: function value() {
    return "\"".concat(this.value, "\"");
  },
  type: 'Function'
}];
Syntax.LiteralBoolean = [{
  key: 'type',
  value: 'Literal',
  type: 'Static'
}, {
  key: 'value',
  value: function value() {
    return chance.pickone([true, false]);
  },
  type: 'Function'
}, {
  key: 'raw',
  value: function value() {
    return "\"".concat(this.value, "\"");
  },
  type: 'Function'
}];
Syntax.IfStatement = [{
  key: 'type',
  value: 'IfStatement',
  type: 'Static'
}, {
  key: 'test',
  value: null,
  type: 'Dynamic'
}, {
  key: 'consequent',
  value: null,
  type: 'Dynamic'
}, {
  key: 'alternate',
  value: null,
  type: 'Static'
}];
Syntax.IfElseStatement = [{
  key: 'type',
  value: 'IfStatement',
  type: 'Static'
}, {
  key: 'test',
  value: null,
  type: 'Dynamic'
}, {
  key: 'consequent',
  value: null,
  type: 'Dynamic'
}, {
  key: 'alternate',
  value: null,
  type: 'Dynamic'
}];
Syntax.BlockStatement = [{
  key: 'type',
  value: 'BlockStatement',
  type: 'Static'
}, {
  key: 'body',
  value: null,
  type: 'Body',
  min: 0
}];
Syntax.ForStatement = [{
  key: 'type',
  value: 'ForStatement',
  type: 'Static'
}, {
  key: 'init',
  value: null,
  type: 'Dynamic'
}, {
  key: 'test',
  value: null,
  type: 'Dynamic'
}, {
  key: 'update',
  value: null,
  type: 'Dynamic'
}, {
  key: 'body',
  value: null,
  type: 'Dynamic'
}];
Syntax.UpdateExpression = [{
  key: 'type',
  value: 'UpdateExpression',
  type: 'Static'
}, {
  key: 'argument',
  value: null,
  type: 'Dynamic'
}, {
  key: 'operator',
  value: null,
  type: 'DynamicValue'
}, {
  key: 'prefix',
  value: null,
  type: 'DynamicValue'
}];
Syntax.ReturnStatement = [{
  key: 'type',
  value: 'ReturnStatement',
  type: 'Static'
}, {
  key: 'argument',
  value: null,
  type: 'Dynamic'
}];
/* harmony default export */ __webpack_exports__["a"] = (Syntax);

/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__("a79d");

// EXTERNAL MODULE: ./node_modules/@babel/polyfill/lib/index.js
var lib = __webpack_require__("e792");

// EXTERNAL MODULE: ./node_modules/mutationobserver-shim/dist/mutationobserver.min.js
var mutationobserver_min = __webpack_require__("0cdd");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/index.js + 295 modules
var esm = __webpack_require__("5f5b");

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("ab8b");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/dist/bootstrap-vue.css
var bootstrap_vue = __webpack_require__("2dd8");

// CONCATENATED MODULE: ./src/plugins/bootstrap-vue.js




vue_runtime_esm["default"].use(esm["a" /* default */]);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"bb4561dc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=2e837694&
var Appvue_type_template_id_2e837694_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('b-modal',{attrs:{"id":"teacher","title":"Program Teacher"}},[_c('b-form-textarea',{attrs:{"rows":"6","max-rows":"12"},model:{value:(_vm.teacherProgram),callback:function ($$v) {_vm.teacherProgram=$$v},expression:"teacherProgram"}}),_c('b-button',{attrs:{"variant":"success"},on:{"click":_vm.teachProgram}},[_vm._v("Teach")])],1),_c('b-modal',{attrs:{"id":"select-validation","title":"Sample Validations"}},[_c('p',[_vm._v(_vm._s(_vm.selectedPart))]),_c('ul',{staticClass:"list-unstyled"},[_c('span',[_vm._v("Selected Validation: "),_c('strong',[_vm._v(_vm._s(_vm.selectedValidation.name))])]),_c('hr'),_vm._l((_vm.sampleValidations),function(validation,index){return _c('li',{key:index},[_c('a',{staticClass:"text-primary",on:{"click":function($event){_vm.validations = validation.validations;
            _vm.selectedValidation = validation;}}},[_vm._v(_vm._s(validation.name)+" - "+_vm._s(validation.description))])])})],2)]),_c('b-modal',{attrs:{"id":"validate-program","title":"Program Validator"}},[_c('ul',{staticClass:"list-unstyled"},_vm._l((_vm.validationInputKeys),function(validationInput,index){return _c('li',{key:index},[(validationInput != 'answer')?_c('div',[_c('label',[_vm._v(_vm._s(validationInput))]),_c('b-form-input',{model:{value:(_vm.validationInputs[validationInput]),callback:function ($$v) {_vm.$set(_vm.validationInputs, validationInput, $$v)},expression:"validationInputs[validationInput]"}})],1):_vm._e()])}),0),_c('pre',{staticStyle:{"height":"200px","overflow-y":"scroll"}},[_vm._v(_vm._s(_vm.mostFitProgram))]),_c('pre',{staticStyle:{"height":"100px","overflow-y":"scroll"}},[_vm._v(_vm._s(_vm.validationInputs["answer"]))]),_c('b-button',{on:{"click":_vm.validateProgram}},[_vm._v("Validate")])],1),_c('b-modal',{attrs:{"id":"syntax-details","title":"Syntax Details"}},[_c('p',{staticClass:"my-4"},[_vm._v(_vm._s(_vm.selectedPart))]),_c('ul',{staticClass:"list-unstyled"},_vm._l((_vm.syntax[_vm.selectedPart]),function(property,index){return _c('li',{key:index},[_c('strong',[_vm._v(_vm._s(property.key))]),_vm._v(" "+_vm._s(property.value)+" ")])}),0)]),_c('b-navbar',{attrs:{"toggleable":"lg","type":"dark","variant":"dark"}},[_c('b-navbar-brand',[_vm._v("n-ast-y")]),_c('b-navbar-nav',[_c('b-button',{staticClass:"mr-1",attrs:{"size":"sm","variant":"success","disabled":_vm.isRunning},on:{"click":_vm.start}},[_vm._v("Run")]),_vm._v("   "),_c('b-button',{staticClass:"mr-1",attrs:{"size":"sm","variant":"warning","disabled":!_vm.isRunning},on:{"click":_vm.stop}},[_vm._v("Pause")]),_vm._v("   "),_c('b-button',{staticClass:"mr-1",attrs:{"size":"sm","variant":"danger","disabled":_vm.programState == 'stopped'},on:{"click":_vm.restart}},[_vm._v("Reset")]),_vm._v("   "),_c('b-dropdown',{attrs:{"id":"dropdown-1","left":"","text":"View","size":"sm","variant":"primary"}},[_c('b-dropdown-item',{directives:[{name:"b-modal",rawName:"v-b-modal.select-validation",modifiers:{"select-validation":true}}]},[_vm._v("Validation Selector")]),_c('b-dropdown-item',{directives:[{name:"b-modal",rawName:"v-b-modal.validate-program",modifiers:{"validate-program":true}}]},[_vm._v("Solution Validator")]),_c('b-dropdown-item',{directives:[{name:"b-modal",rawName:"v-b-modal.teacher",modifiers:{"teacher":true}}]},[_vm._v("Teacher")])],1)],1),_c('b-navbar-nav',{staticClass:"ml-auto"},[_c('b-navbar-brand',{attrs:{"href":"http://anerrantprogrammer.com/"}},[_c('img',{staticClass:"nav-image",attrs:{"src":"avatar.png","alt":"anerrantprogrammer"}})]),_c('b-navbar-brand',{attrs:{"href":"https://twitter.com/errantProgrammr"}},[_c('img',{staticClass:"nav-image",attrs:{"src":"twitter.png","alt":"@errantProgrammr"}})])],1)],1),_c('b-container',{attrs:{"fluid":""}},[_c('b-row',{staticStyle:{"margin-top":"25px","height":"calc(100vh - 120px)"}},[_c('b-col',{attrs:{"cols":"9"}},[_c('b-row',[_c('b-col',{attrs:{"cols":"6"}},[_c('b-card',{attrs:{"no-body":"","bg-variant":"light"},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('div',{staticClass:"mb-0"},[_c('h6',{staticClass:"mb-0",staticStyle:{"display":"inline"}},[_vm._v("Current Generations Programs")]),_c('span',{staticClass:"ml-auto",staticStyle:{"float":"right"}},[_c('div',{staticClass:"text-center"},[_c('b-button',{attrs:{"variant":"light","size":"sm"}},[_vm._v(" Generation # "),_c('b-badge',{attrs:{"variant":"primary"}},[_vm._v(_vm._s(_vm.totalGenerations))])],1)],1)])])]},proxy:true}])},[_c('b-card-body',[_c('b-card-text',[_c('pre',{staticStyle:{"height":"243px","overflow-y":"scroll"}},[_vm._v(_vm._s(_vm.selectedProgram()))])])],1),_c('b-card-footer',[_c('b-button',{staticClass:"mr-1",attrs:{"size":"sm","variant":"info","disabled":_vm.programs.length==0},on:{"click":_vm.prevProgram}},[_vm._v("Previous")]),_vm._v(" "+_vm._s(_vm.selectedProgramIndex)+" of "+_vm._s(_vm.programs.length)+" "),_c('b-button',{staticClass:"mr-1",attrs:{"size":"sm","variant":"info","disabled":_vm.programs.length==0},on:{"click":_vm.nextProgram}},[_vm._v("Next")])],1)],1)],1),_c('b-col',{attrs:{"cols":"6"}},[_c('b-card',{attrs:{"bg-variant":"light"},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('div',{staticClass:"mb-0"},[_c('h6',{staticClass:"mb-0",staticStyle:{"display":"inline"}},[_vm._v("Fittest Program")]),_c('span',{staticClass:"ml-auto",staticStyle:{"float":"right"}},[_c('div',{staticClass:"text-center"},[_c('b-button',{attrs:{"variant":"light","size":"sm"}},[_vm._v(" Highest Fitness "),_c('b-badge',{attrs:{"variant":"primary"}},[_vm._v(_vm._s(_vm.fitness)+"/"+_vm._s(_vm.validations.length))])],1)],1)])])]},proxy:true}])},[_c('b-card-text',[_c('pre',{staticStyle:{"height":"300px","overflow-y":"scroll"}},[_vm._v(_vm._s(_vm.mostFitProgram))])])],1)],1)],1),_c('b-row',{staticStyle:{"margin-top":"25px"}},[_c('b-col',{attrs:{"cols":"6"}},[_c('b-card',{attrs:{"bg-variant":"light"},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('div',{staticClass:"mb-0"},[_c('h6',{staticClass:"mb-0",staticStyle:{"display":"inline"}},[_vm._v("Log")])])]},proxy:true}])},[_c('b-card-text',[_c('div',{staticStyle:{"height":"230px","overflow-y":"scroll"},attrs:{"id":"log"}})])],1)],1),_c('b-col',{attrs:{"cols":"6"}},[_c('b-card',{attrs:{"bg-variant":"light"},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('div',{staticClass:"mb-0"},[_c('h6',{staticClass:"mb-0",staticStyle:{"display":"inline"}},[_vm._v("Test Part")])])]},proxy:true}])},[_c('b-card-text',[_c('b-form',{attrs:{"inline":""}},[_c('b-form-select',{model:{value:(_vm.testPart),callback:function ($$v) {_vm.testPart=$$v},expression:"testPart"}},_vm._l((_vm.partWeights),function(partWeight,key){return _c('option',{key:key,domProps:{"value":key}},[_vm._v(_vm._s(key))])}),0),_vm._v("    "),_c('b-button',{staticClass:"mr-1",attrs:{"size":"sm","disabled":_vm.testPart=='',"variant":"info"},on:{"click":_vm.generateNode}},[_vm._v("Generate Node")])],1),_c('hr'),_c('pre',{staticStyle:{"height":"143px","overflow-y":"scroll"}},[_vm._v(_vm._s(_vm.testNode))])],1)],1)],1)],1)],1),_c('b-col',{attrs:{"cols":"3"}},[_c('h4',[_vm._v("Settings")]),_c('b-tabs',[_c('b-tab',{attrs:{"title":"Settings"}},[_c('ul',{staticClass:"list-unstyled sidebar-list"},[_c('li',[_c('h6',[_vm._v("Validation Settings")])]),_c('li',[_c('p',[_vm._v(" Selected Validation: "),_c('strong',[_vm._v(_vm._s(_vm.selectedValidation.name))])]),_c('p',[_vm._v(_vm._s(_vm.selectedValidation.description))])]),_c('li',[_c('h6',[_vm._v("Sandbox Settings")])]),_c('li',[_c('b-row',[_c('b-col',{attrs:{"cols":"8"}},[_c('label',[_vm._v("Max Sandboxes")])]),_c('b-col',{attrs:{"cols":"3"}},[_c('b-form-input',{attrs:{"type":"number","step":"1","size":"sm"},model:{value:(_vm.maxSandboxCount),callback:function ($$v) {_vm.maxSandboxCount=$$v},expression:"maxSandboxCount"}})],1)],1)],1),_c('li',[_c('h6',[_vm._v("Generation Settings")])]),_c('li',[_c('b-row',[_c('b-col',{attrs:{"cols":"8"}},[_c('label',[_vm._v("Programs Per Generation")])]),_c('b-col',{attrs:{"cols":"3"}},[_c('b-form-input',{attrs:{"type":"number","step":"1","size":"sm"},model:{value:(_vm.maxAttempts),callback:function ($$v) {_vm.maxAttempts=$$v},expression:"maxAttempts"}})],1)],1)],1),_c('li',[_c('b-row',[_c('b-col',{attrs:{"cols":"8"}},[_c('label',[_vm._v("Stale Generation Max")])]),_c('b-col',{attrs:{"cols":"3"}},[_c('b-form-input',{attrs:{"type":"number","step":"1","size":"sm"},model:{value:(_vm.staleGenerationCount),callback:function ($$v) {_vm.staleGenerationCount=$$v},expression:"staleGenerationCount"}})],1)],1)],1),_c('li',[_c('b-row',[_c('b-col',{attrs:{"cols":"8"}},[_c('label',[_vm._v("Learned Program Max")])]),_c('b-col',{attrs:{"cols":"3"}},[_c('b-form-input',{attrs:{"type":"number","step":"1","size":"sm"},model:{value:(_vm.maxLearnedPrograms),callback:function ($$v) {_vm.maxLearnedPrograms=$$v},expression:"maxLearnedPrograms"}})],1)],1)],1),_c('li',[_c('h6',[_vm._v("Learning Settings")])]),_c('li',[_c('b-row',[_c('b-col',{attrs:{"cols":"8"}},[_c('label',[_vm._v("Enable Learning")])]),_c('b-col',{attrs:{"cols":"3"}},[_c('b-form-checkbox',{attrs:{"size":"sm","value":"true","unchecked-value":"false"},model:{value:(_vm.learningEnabled),callback:function ($$v) {_vm.learningEnabled=$$v},expression:"learningEnabled"}})],1)],1)],1),_c('li',[_c('b-row',[_c('b-col',{attrs:{"cols":"8"}},[_c('label',[_vm._v("Rate to learn less fit programs")])]),_c('b-col',{attrs:{"cols":"3"}},[_c('b-form-input',{attrs:{"type":"number","step":"1","size":"sm"},model:{value:(_vm.additionalLearnRate),callback:function ($$v) {_vm.additionalLearnRate=$$v},expression:"additionalLearnRate"}})],1)],1)],1),_c('li',[_c('b-row',[_c('b-col',{attrs:{"cols":"8"}},[_c('label',[_vm._v("Initial weight for learned parts")])]),_c('b-col',{attrs:{"cols":"3"}},[_c('b-form-input',{attrs:{"type":"number","step":"1","size":"sm"},model:{value:(_vm.initialLearn),callback:function ($$v) {_vm.initialLearn=$$v},expression:"initialLearn"}})],1)],1)],1),_c('li',[_c('b-row',[_c('b-col',{attrs:{"cols":"8"}},[_c('label',[_vm._v("Learn rate for fit parts")])]),_c('b-col',{attrs:{"cols":"3"}},[_c('b-form-input',{attrs:{"type":"number","step":"1","size":"sm"},model:{value:(_vm.learnRate),callback:function ($$v) {_vm.learnRate=$$v},expression:"learnRate"}})],1)],1)],1),_c('li',[_c('b-row',[_c('b-col',{attrs:{"cols":"8"}},[_c('label',[_vm._v("De-learn weight for unfit parts")])]),_c('b-col',{attrs:{"cols":"3"}},[_c('b-form-input',{attrs:{"type":"number","step":"1","size":"sm"},model:{value:(_vm.deLearnRate),callback:function ($$v) {_vm.deLearnRate=$$v},expression:"deLearnRate"}})],1)],1)],1),_c('li',[_c('h6',[_vm._v("Mutation Settings")])]),_c('li',[_c('b-row',[_c('b-col',{attrs:{"cols":"8"}},[_c('label',[_vm._v("Mutate Weight")])]),_c('b-col',{attrs:{"cols":"3"}},[_c('b-form-input',{attrs:{"type":"number","step":"1","size":"sm"},model:{value:(_vm.mutateWeight),callback:function ($$v) {_vm.mutateWeight=$$v},expression:"mutateWeight"}})],1)],1)],1),_c('li',[_c('b-row',[_c('b-col',{attrs:{"cols":"8"}},[_c('label',[_vm._v("Replace Weight")])]),_c('b-col',{attrs:{"cols":"3"}},[_c('b-form-input',{attrs:{"type":"number","step":"1","size":"sm"},model:{value:(_vm.replaceWeight),callback:function ($$v) {_vm.replaceWeight=$$v},expression:"replaceWeight"}})],1)],1)],1),_c('li',[_c('b-row',[_c('b-col',{attrs:{"cols":"8"}},[_c('label',[_vm._v("Leave Weight")])]),_c('b-col',{attrs:{"cols":"3"}},[_c('b-form-input',{attrs:{"type":"number","step":"1","size":"sm"},model:{value:(_vm.leaveWeight),callback:function ($$v) {_vm.leaveWeight=$$v},expression:"leaveWeight"}})],1)],1)],1),_c('li',[_c('b-row',[_c('b-col',{attrs:{"cols":"8"}},[_c('label',[_vm._v("Remove Weight")])]),_c('b-col',{attrs:{"cols":"3"}},[_c('b-form-input',{attrs:{"type":"number","step":"1","size":"sm"},model:{value:(_vm.removeWeight),callback:function ($$v) {_vm.removeWeight=$$v},expression:"removeWeight"}})],1)],1)],1)])]),_c('b-tab',{attrs:{"title":"Syntax"}},[_c('b-button',{staticClass:"mt-3",attrs:{"size":"sm","variant":"danger"},on:{"click":_vm.clearLearnedParts}},[_vm._v("Clear All Learned Syntax")]),_vm._v("  "),_c('ul',{staticClass:"list-unstyled sidebar-list"},_vm._l((_vm.partWeights),function(partWeight,key){return _c('li',{key:key},[_c('strong',[_vm._v(_vm._s(key))]),_c('ul',{staticClass:"list-unstyled"},_vm._l((partWeight[0]),function(part,index){return _c('li',{key:index},[_c('b-row',[_c('b-col',{attrs:{"cols":"8"}},[_c('label',{on:{"click":function($event){return _vm.openPartDetail(part)}}},[_vm._v(_vm._s(part))])]),_c('b-col',{attrs:{"cols":"3"}},[_c('b-form-input',{attrs:{"type":"number","step":"0.1","size":"sm"},model:{value:(partWeight[1][index]),callback:function ($$v) {_vm.$set(partWeight[1], index, $$v)},expression:"partWeight[1][index]"}})],1)],1)],1)}),0)])}),0)],1),_c('b-tab',{attrs:{"title":"Properties"}},[_c('ul',{staticClass:"list-unstyled sidebar-list"},_vm._l((_vm.propertyWeights),function(propertyWeight,key){return _c('li',{key:key},[_c('a',{attrs:{"name":key}},[(Object.keys(propertyWeight).length > 0)?_c('strong',[_vm._v(_vm._s(key))]):_vm._e()]),(Object.keys(propertyWeight).length > 0)?_c('ul',{staticClass:"list-unstyled"},_vm._l((propertyWeight),function(propertyWeightKey,key){return _c('li',{key:key},[_c('small',[_c('strong',[_vm._v(_vm._s(key))])]),_c('ul',{staticClass:"list-unstyled"},_vm._l((propertyWeightKey[0]),function(part,index){return _c('li',{key:index},[_c('b-row',[_c('b-col',{attrs:{"cols":"8"}},[_c('label',[_c('a',{attrs:{"href":'#' + part}},[_vm._v(_vm._s(part))])])]),_c('b-col',{attrs:{"cols":"3"}},[_c('b-form-input',{attrs:{"type":"number","step":"0.1","size":"sm"},model:{value:(propertyWeightKey[1][index]),callback:function ($$v) {_vm.$set(propertyWeightKey[1], index, $$v)},expression:"propertyWeightKey[1][index]"}})],1)],1)],1)}),0)])}),0):_vm._e()])}),0)]),_c('b-tab',{attrs:{"title":"Values"}},[_c('ul',{staticClass:"list-unstyled sidebar-list"},_vm._l((_vm.valueWeights),function(valueWeight,key){return _c('li',{key:key},[_c('strong',[_vm._v(_vm._s(key))]),_c('ul',{staticClass:"list-unstyled"},_vm._l((valueWeight),function(valueWeightKey,key){return _c('li',{key:key},[_c('small',[_c('strong',[_vm._v(_vm._s(key))])]),_c('ul',{staticClass:"list-unstyled"},_vm._l((valueWeightKey[0]),function(part,index){return _c('li',{key:index},[_c('b-row',[_c('b-col',{attrs:{"cols":"8"}},[_c('label',[_vm._v(_vm._s(part))])]),_c('b-col',{attrs:{"cols":"3"}},[_c('b-form-input',{attrs:{"type":"number","step":"0.1","size":"sm"},model:{value:(valueWeightKey[1][index]),callback:function ($$v) {_vm.$set(valueWeightKey[1], index, $$v)},expression:"valueWeightKey[1][index]"}})],1)],1)],1)}),0)])}),0)])}),0)])],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=2e837694&

// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
var Appvue_type_script_lang_js_ = __webpack_require__("199c");

// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&lang=scss&
var Appvue_type_style_index_0_lang_scss_ = __webpack_require__("5c0b");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  Appvue_type_template_id_2e837694_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// CONCATENATED MODULE: ./src/main.js









vue_runtime_esm["default"].config.productionTip = false;
window.app = new vue_runtime_esm["default"]({
  render: function render(h) {
    return h(App);
  }
}).$mount('#app');

/***/ }),

/***/ "5c0b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9c0c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "9c0c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.25b54366.js.map