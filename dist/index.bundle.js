(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_Todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Todo.js */ "./src/modules/Todo.js");
/* harmony import */ var _modules_Todo_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_Todo_js__WEBPACK_IMPORTED_MODULE_1__);


var form = document.getElementById('add-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  (0,_modules_Todo_js__WEBPACK_IMPORTED_MODULE_1__.addToDo)();
});
(0,_modules_Todo_js__WEBPACK_IMPORTED_MODULE_1__.displayToDos)();

/***/ }),

/***/ "./src/modules/Todo.js":
/*!*****************************!*\
  !*** ./src/modules/Todo.js ***!
  \*****************************/
/***/ (() => {

var taskInput = document.getElementById('task');
var addButton = document.getElementById('add-task');
var taskList = document.getElementById('todo-list');
var tasks = [];
var storedTasks = JSON.parse(localStorage.getItem('tasks'));
if (storedTasks) {
  tasks = storedTasks;
}

// Save tasks to local storage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add a new task
var addTask = function addTask() {
  var taskDescription = taskInput.value;
  if (taskDescription.trim()) {
    var newTask = {
      description: taskDescription,
      completed: false,
      index: tasks.length
    };
    tasks.push(newTask);
    saveTasks();
    renderTasks();
    taskInput.value = '';
  }
};

// Delete a task
var deleteTask = function deleteTask(index) {
  // Remove the task from the array

  tasks.splice(index, 1);

  // Update the index of the remaining tasks
  for (var i = index; i < todoList.length; i++) {
    todoList[i].index = i + 1;
  }

  // Update the todo list in local storage
  localStorage.setItem("todoList", JSON.stringify(todoList));

  // Redraw the todo list
  drawTodoList();
};

// Edit a task description
var updateTask = function updateTask(index, newDescription) {
  tasks[index].description = newDescription;
  saveTasks();
  renderTasks();
};

// Toggle a task's completed status
var toggleComplete = function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
};

// Render the task list
var renderTasks = function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach(function (task, index) {
    var listItem = document.createElement('li');
    listItem.id = "task-".concat(index);
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('click', function () {
      toggleComplete(index);
    });
    var taskDescription = document.createElement('input');
    taskDescription.type = 'text';
    taskDescription.value = task.description;
    taskDescription.addEventListener('blur', function () {
      updateTask(index, taskDescription.value);
    });
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
      deleteTask(index);
    });
    listItem.appendChild(checkbox);
    listItem.appendChild(taskDescription);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    if (task.completed) {
      taskDescription.style.textDecoration = 'line-through';
    }
  });
};

// Add event listener for adding a task
addButton.addEventListener('click', addTask);

// Load tasks and render on page load
renderTasks();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgb(236, 236, 236);\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.todos-section {\r\n  padding-top: 8px;\r\n  width: 40%;\r\n  margin: 2rem auto;\r\n  box-shadow: 4px 4px 12px #808080;\r\n}\r\n\r\n.title {\r\n  margin-top: 24px;\r\n  margin-bottom: 12px;\r\n  padding-left: 12px;\r\n}\r\n\r\n.title h4 {\r\n  color: rgba(43, 43, 43, 0.6);\r\n  font-weight: 500;\r\n}\r\n\r\n.material-symbols-outlined {\r\n  font-variation-settings:\r\n    'FILL' 0,\r\n    'wght' 400,\r\n    'GRAD' 0,\r\n    'opsz' 48;\r\n}\r\n\r\n.delete-btn {\r\n  margin-left: auto;\r\n  text-align: center;\r\n  padding-top: 12px;\r\n}\r\n\r\nform {\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nform.add button {\r\n  border: none;\r\n  background-color: #fff;\r\n  margin-bottom: 5px;\r\n  text-align: center;\r\n}\r\n\r\nform input,\r\nbutton.clear-btn {\r\n  padding: 12px;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  border: transparent;\r\n  color: rgba(43, 43, 43, 0.6);\r\n}\r\n\r\nform input {\r\n  margin-bottom: 5px;\r\n}\r\n\r\nform input:focus {\r\n  outline: none;\r\n}\r\n\r\ninput::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\n.completed {\r\n  color: rgba(43, 43, 43, 0.4);\r\n  text-decoration: line-through;\r\n}\r\n\r\nbutton.clear-btn {\r\n  background-color: rgb(236, 236, 236);\r\n  letter-spacing: 1px;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n  display: flex;\r\n  background-color: #fff;\r\n  width: 90%;\r\n  padding: 12px;\r\n  margin-bottom: 5px;\r\n  color: rgba(43, 43, 43, 0.9);\r\n}\r\n\r\nli:hover {\r\n  background-color: rgba(248, 208, 99, 0.3);\r\n}\r\n\r\n.todo-description {\r\n  outline: 0;\r\n  background-color: inherit;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  border: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,WAAW;EACX,aAAa;EACb,oCAAoC;EACpC,iCAAiC;AACnC;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,iBAAiB;EACjB,gCAAgC;AAClC;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,4BAA4B;EAC5B,gBAAgB;AAClB;;AAEA;EACE;;;;aAIW;AACb;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,WAAW;EACX,sBAAsB;EACtB,mBAAmB;EACnB,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,4BAA4B;EAC5B,6BAA6B;AAC/B;;AAEA;EACE,oCAAoC;EACpC,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,aAAa;EACb,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,UAAU;EACV,yBAAyB;EACzB,cAAc;EACd,WAAW;EACX,YAAY;AACd","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgb(236, 236, 236);\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.todos-section {\r\n  padding-top: 8px;\r\n  width: 40%;\r\n  margin: 2rem auto;\r\n  box-shadow: 4px 4px 12px #808080;\r\n}\r\n\r\n.title {\r\n  margin-top: 24px;\r\n  margin-bottom: 12px;\r\n  padding-left: 12px;\r\n}\r\n\r\n.title h4 {\r\n  color: rgba(43, 43, 43, 0.6);\r\n  font-weight: 500;\r\n}\r\n\r\n.material-symbols-outlined {\r\n  font-variation-settings:\r\n    'FILL' 0,\r\n    'wght' 400,\r\n    'GRAD' 0,\r\n    'opsz' 48;\r\n}\r\n\r\n.delete-btn {\r\n  margin-left: auto;\r\n  text-align: center;\r\n  padding-top: 12px;\r\n}\r\n\r\nform {\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nform.add button {\r\n  border: none;\r\n  background-color: #fff;\r\n  margin-bottom: 5px;\r\n  text-align: center;\r\n}\r\n\r\nform input,\r\nbutton.clear-btn {\r\n  padding: 12px;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  border: transparent;\r\n  color: rgba(43, 43, 43, 0.6);\r\n}\r\n\r\nform input {\r\n  margin-bottom: 5px;\r\n}\r\n\r\nform input:focus {\r\n  outline: none;\r\n}\r\n\r\ninput::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\n.completed {\r\n  color: rgba(43, 43, 43, 0.4);\r\n  text-decoration: line-through;\r\n}\r\n\r\nbutton.clear-btn {\r\n  background-color: rgb(236, 236, 236);\r\n  letter-spacing: 1px;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n  display: flex;\r\n  background-color: #fff;\r\n  width: 90%;\r\n  padding: 12px;\r\n  margin-bottom: 5px;\r\n  color: rgba(43, 43, 43, 0.9);\r\n}\r\n\r\nli:hover {\r\n  background-color: rgba(248, 208, 99, 0.3);\r\n}\r\n\r\n.todo-description {\r\n  outline: 0;\r\n  background-color: inherit;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  border: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGFkZFRvRG8sIGRpc3BsYXlUb0RvcyB9IGZyb20gJy4vbW9kdWxlcy9Ub2RvLmpzJztcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtZm9ybScpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGFkZFRvRG8oKTtcbn0pO1xuXG5kaXNwbGF5VG9Eb3MoKTsiLCJjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzaycpO1xuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrJyk7XG5jb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWxpc3QnKTtcblxubGV0IHRhc2tzID0gW107XG5jb25zdCBzdG9yZWRUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xuICBpZiAoc3RvcmVkVGFza3MpIHtcbiAgICB0YXNrcyA9IHN0b3JlZFRhc2tzO1xuICB9XG5cbi8vIFNhdmUgdGFza3MgdG8gbG9jYWwgc3RvcmFnZVxuZnVuY3Rpb24gc2F2ZVRhc2tzKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xufVxuXG4vLyBBZGQgYSBuZXcgdGFza1xuY29uc3QgYWRkVGFzayA9ICgpID0+IHtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gdGFza0lucHV0LnZhbHVlO1xuICBpZiAodGFza0Rlc2NyaXB0aW9uLnRyaW0oKSkge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSB7XG4gICAgICBkZXNjcmlwdGlvbjogdGFza0Rlc2NyaXB0aW9uLFxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgIGluZGV4OiB0YXNrcy5sZW5ndGgsXG4gICAgfTtcbiAgICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIHNhdmVUYXNrcygpO1xuICAgIHJlbmRlclRhc2tzKCk7XG4gICAgdGFza0lucHV0LnZhbHVlID0gJyc7XG4gIH1cbn07XG5cbi8vIERlbGV0ZSBhIHRhc2tcbmNvbnN0IGRlbGV0ZVRhc2sgPSAoaW5kZXgpID0+IHtcbiAgLy8gUmVtb3ZlIHRoZSB0YXNrIGZyb20gdGhlIGFycmF5XG4gIFxuICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gIC8vIFVwZGF0ZSB0aGUgaW5kZXggb2YgdGhlIHJlbWFpbmluZyB0YXNrc1xuICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCB0b2RvTGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHRvZG9MaXN0W2ldLmluZGV4ID0gaSArIDE7XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIHRvZG8gbGlzdCBpbiBsb2NhbCBzdG9yYWdlXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QpKTtcblxuICAvLyBSZWRyYXcgdGhlIHRvZG8gbGlzdFxuICBkcmF3VG9kb0xpc3QoKTtcbn07XG5cblxuLy8gRWRpdCBhIHRhc2sgZGVzY3JpcHRpb25cbmNvbnN0IHVwZGF0ZVRhc2sgPSAoaW5kZXgsIG5ld0Rlc2NyaXB0aW9uKSA9PiB7XG4gIHRhc2tzW2luZGV4XS5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICBzYXZlVGFza3MoKTtcbiAgcmVuZGVyVGFza3MoKTtcbn07XG5cbi8vIFRvZ2dsZSBhIHRhc2sncyBjb21wbGV0ZWQgc3RhdHVzXG5jb25zdCB0b2dnbGVDb21wbGV0ZSA9IChpbmRleCkgPT4ge1xuICB0YXNrc1tpbmRleF0uY29tcGxldGVkID0gIXRhc2tzW2luZGV4XS5jb21wbGV0ZWQ7XG4gIHNhdmVUYXNrcygpO1xuICByZW5kZXJUYXNrcygpO1xufTtcblxuLy8gUmVuZGVyIHRoZSB0YXNrIGxpc3RcbmNvbnN0IHJlbmRlclRhc2tzID0gKCkgPT4ge1xuICB0YXNrTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdEl0ZW0uaWQgPSBgdGFzay0ke2luZGV4fWA7XG5cbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suY29tcGxldGVkO1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdG9nZ2xlQ29tcGxldGUoaW5kZXgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0YXNrRGVzY3JpcHRpb24udHlwZSA9ICd0ZXh0JztcbiAgICB0YXNrRGVzY3JpcHRpb24udmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIHRhc2tEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgdXBkYXRlVGFzayhpbmRleCwgdGFza0Rlc2NyaXB0aW9uLnZhbHVlKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRlbGV0ZVRhc2soaW5kZXgpO1xuICAgIH0pO1xuXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cbiAgICBpZiAodGFzay5jb21wbGV0ZWQpIHtcbiAgICAgIHRhc2tEZXNjcmlwdGlvbi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBBZGQgZXZlbnQgbGlzdGVuZXIgZm9yIGFkZGluZyBhIHRhc2tcbmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRhc2spO1xuXG4vLyBMb2FkIHRhc2tzIGFuZCByZW5kZXIgb24gcGFnZSBsb2FkXG5yZW5kZXJUYXNrcygpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi50b2Rvcy1zZWN0aW9uIHtcXHJcXG4gIHBhZGRpbmctdG9wOiA4cHg7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxyXFxuICBib3gtc2hhZG93OiA0cHggNHB4IDEycHggIzgwODA4MDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgaDQge1xcclxcbiAgY29sb3I6IHJnYmEoNDMsIDQzLCA0MywgMC42KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXHJcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxcclxcbiAgICAnRklMTCcgMCxcXHJcXG4gICAgJ3dnaHQnIDQwMCxcXHJcXG4gICAgJ0dSQUQnIDAsXFxyXFxuICAgICdvcHN6JyA0ODtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1idG4ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtLmFkZCBidXR0b24ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dCxcXHJcXG5idXR0b24uY2xlYXItYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcclxcbiAgY29sb3I6IHJnYmEoNDMsIDQzLCA0MywgMC42KTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlZCB7XFxyXFxuICBjb2xvcjogcmdiYSg0MywgNDMsIDQzLCAwLjQpO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5jbGVhci1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gIGNvbG9yOiByZ2JhKDQzLCA0MywgNDMsIDAuOSk7XFxyXFxufVxcclxcblxcclxcbmxpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAyMDgsIDk5LCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kZXNjcmlwdGlvbiB7XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7Ozs7YUFJVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzUwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi50b2Rvcy1zZWN0aW9uIHtcXHJcXG4gIHBhZGRpbmctdG9wOiA4cHg7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxyXFxuICBib3gtc2hhZG93OiA0cHggNHB4IDEycHggIzgwODA4MDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgaDQge1xcclxcbiAgY29sb3I6IHJnYmEoNDMsIDQzLCA0MywgMC42KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXHJcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxcclxcbiAgICAnRklMTCcgMCxcXHJcXG4gICAgJ3dnaHQnIDQwMCxcXHJcXG4gICAgJ0dSQUQnIDAsXFxyXFxuICAgICdvcHN6JyA0ODtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1idG4ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtLmFkZCBidXR0b24ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dCxcXHJcXG5idXR0b24uY2xlYXItYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcclxcbiAgY29sb3I6IHJnYmEoNDMsIDQzLCA0MywgMC42KTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlZCB7XFxyXFxuICBjb2xvcjogcmdiYSg0MywgNDMsIDQzLCAwLjQpO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5jbGVhci1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gIGNvbG9yOiByZ2JhKDQzLCA0MywgNDMsIDAuOSk7XFxyXFxufVxcclxcblxcclxcbmxpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAyMDgsIDk5LCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kZXNjcmlwdGlvbiB7XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiYWRkVG9EbyIsImRpc3BsYXlUb0RvcyIsImZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhc2tJbnB1dCIsImFkZEJ1dHRvbiIsInRhc2tMaXN0IiwidGFza3MiLCJzdG9yZWRUYXNrcyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzYXZlVGFza3MiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWRkVGFzayIsInRhc2tEZXNjcmlwdGlvbiIsInZhbHVlIiwidHJpbSIsIm5ld1Rhc2siLCJkZXNjcmlwdGlvbiIsImNvbXBsZXRlZCIsImluZGV4IiwibGVuZ3RoIiwicHVzaCIsInJlbmRlclRhc2tzIiwiZGVsZXRlVGFzayIsInNwbGljZSIsImkiLCJ0b2RvTGlzdCIsImRyYXdUb2RvTGlzdCIsInVwZGF0ZVRhc2siLCJuZXdEZXNjcmlwdGlvbiIsInRvZ2dsZUNvbXBsZXRlIiwiaW5uZXJIVE1MIiwiZm9yRWFjaCIsInRhc2siLCJsaXN0SXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImNvbmNhdCIsImNoZWNrYm94IiwidHlwZSIsImNoZWNrZWQiLCJkZWxldGVCdXR0b24iLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=