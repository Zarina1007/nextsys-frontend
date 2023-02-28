(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-reporting-admin-reporting-module"], {
    /***/
    "./node_modules/@firebase/installations/dist/index.esm2017.js":
    /*!********************************************************************!*\
      !*** ./node_modules/@firebase/installations/dist/index.esm2017.js ***!
      \********************************************************************/

    /*! exports provided: deleteInstallations, getId, getInstallations, getToken, onIdChange */

    /***/
    function node_modulesFirebaseInstallationsDistIndexEsm2017Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _ERROR_DESCRIPTION_MA;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteInstallations", function () {
        return deleteInstallations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getId", function () {
        return _getId2;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getInstallations", function () {
        return getInstallations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getToken", function () {
        return _getToken2;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "onIdChange", function () {
        return onIdChange;
      });
      /* harmony import */


      var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @firebase/app */
      "./node_modules/@firebase/app/dist/index.esm2017.js");
      /* harmony import */


      var _firebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @firebase/component */
      "./node_modules/@firebase/component/dist/index.esm.js");
      /* harmony import */


      var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @firebase/util */
      "./node_modules/@firebase/util/dist/index.esm2017.js");
      /* harmony import */


      var idb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! idb */
      "./node_modules/idb/build/idb.js");
      /* harmony import */


      var idb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(idb__WEBPACK_IMPORTED_MODULE_3__);

      var name = "@firebase/installations";
      var version = "0.5.2";
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var PENDING_TIMEOUT_MS = 10000;
      var PACKAGE_VERSION = "w:".concat(version);
      var INTERNAL_AUTH_VERSION = 'FIS_v2';
      var INSTALLATIONS_API_URL = 'https://firebaseinstallations.googleapis.com/v1';
      var TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1000; // One hour

      var SERVICE = 'installations';
      var SERVICE_NAME = 'Installations';
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var ERROR_DESCRIPTION_MAP = (_ERROR_DESCRIPTION_MA = {}, _defineProperty(_ERROR_DESCRIPTION_MA, "missing-app-config-values"
      /* MISSING_APP_CONFIG_VALUES */
      , 'Missing App configuration value: "{$valueName}"'), _defineProperty(_ERROR_DESCRIPTION_MA, "not-registered"
      /* NOT_REGISTERED */
      , 'Firebase Installation is not registered.'), _defineProperty(_ERROR_DESCRIPTION_MA, "installation-not-found"
      /* INSTALLATION_NOT_FOUND */
      , 'Firebase Installation not found.'), _defineProperty(_ERROR_DESCRIPTION_MA, "request-failed"
      /* REQUEST_FAILED */
      , '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'), _defineProperty(_ERROR_DESCRIPTION_MA, "app-offline"
      /* APP_OFFLINE */
      , 'Could not process request. Application offline.'), _defineProperty(_ERROR_DESCRIPTION_MA, "delete-pending-registration"
      /* DELETE_PENDING_REGISTRATION */
      , "Can't delete installation while there is a pending registration request."), _ERROR_DESCRIPTION_MA);
      var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__["ErrorFactory"](SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
      /** Returns true if error is a FirebaseError that is based on an error from the server. */

      function isServerError(error) {
        return error instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_2__["FirebaseError"] && error.code.includes("request-failed"
        /* REQUEST_FAILED */
        );
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function getInstallationsEndpoint(_ref) {
        var projectId = _ref.projectId;
        return "".concat(INSTALLATIONS_API_URL, "/projects/").concat(projectId, "/installations");
      }

      function extractAuthTokenInfoFromResponse(response) {
        return {
          token: response.token,
          requestStatus: 2
          /* COMPLETED */
          ,
          expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
          creationTime: Date.now()
        };
      }

      function getErrorFromResponse(_x, _x2) {
        return _getErrorFromResponse.apply(this, arguments);
      }

      function _getErrorFromResponse() {
        _getErrorFromResponse = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(requestName, response) {
          var responseJson, errorData;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return response.json();

                case 2:
                  responseJson = _context.sent;
                  errorData = responseJson.error;
                  return _context.abrupt("return", ERROR_FACTORY.create("request-failed"
                  /* REQUEST_FAILED */
                  , {
                    requestName: requestName,
                    serverCode: errorData.code,
                    serverMessage: errorData.message,
                    serverStatus: errorData.status
                  }));

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _getErrorFromResponse.apply(this, arguments);
      }

      function getHeaders(_ref2) {
        var apiKey = _ref2.apiKey;
        return new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'x-goog-api-key': apiKey
        });
      }

      function getHeadersWithAuth(appConfig, _ref3) {
        var refreshToken = _ref3.refreshToken;
        var headers = getHeaders(appConfig);
        headers.append('Authorization', getAuthorizationHeader(refreshToken));
        return headers;
      }
      /**
       * Calls the passed in fetch wrapper and returns the response.
       * If the returned response has a status of 5xx, re-runs the function once and
       * returns the response.
       */


      function retryIfServerError(_x3) {
        return _retryIfServerError.apply(this, arguments);
      }

      function _retryIfServerError() {
        _retryIfServerError = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(fn) {
          var result;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return fn();

                case 2:
                  result = _context2.sent;

                  if (!(result.status >= 500 && result.status < 600)) {
                    _context2.next = 5;
                    break;
                  }

                  return _context2.abrupt("return", fn());

                case 5:
                  return _context2.abrupt("return", result);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return _retryIfServerError.apply(this, arguments);
      }

      function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
        // This works because the server will never respond with fractions of a second.
        return Number(responseExpiresIn.replace('s', '000'));
      }

      function getAuthorizationHeader(refreshToken) {
        return "".concat(INTERNAL_AUTH_VERSION, " ").concat(refreshToken);
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function createInstallationRequest(_x4, _x5) {
        return _createInstallationRequest.apply(this, arguments);
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** Returns a promise that resolves after given time passes. */


      function _createInstallationRequest() {
        _createInstallationRequest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(appConfig, _ref4) {
          var fid, endpoint, headers, body, request, response, responseValue, registeredInstallationEntry;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  fid = _ref4.fid;
                  endpoint = getInstallationsEndpoint(appConfig);
                  headers = getHeaders(appConfig);
                  body = {
                    fid: fid,
                    authVersion: INTERNAL_AUTH_VERSION,
                    appId: appConfig.appId,
                    sdkVersion: PACKAGE_VERSION
                  };
                  request = {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(body)
                  };
                  _context3.next = 7;
                  return retryIfServerError(function () {
                    return fetch(endpoint, request);
                  });

                case 7:
                  response = _context3.sent;

                  if (!response.ok) {
                    _context3.next = 16;
                    break;
                  }

                  _context3.next = 11;
                  return response.json();

                case 11:
                  responseValue = _context3.sent;
                  registeredInstallationEntry = {
                    fid: responseValue.fid || fid,
                    registrationStatus: 2
                    /* COMPLETED */
                    ,
                    refreshToken: responseValue.refreshToken,
                    authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
                  };
                  return _context3.abrupt("return", registeredInstallationEntry);

                case 16:
                  _context3.next = 18;
                  return getErrorFromResponse('Create Installation', response);

                case 18:
                  throw _context3.sent;

                case 19:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));
        return _createInstallationRequest.apply(this, arguments);
      }

      function sleep(ms) {
        return new Promise(function (resolve) {
          setTimeout(resolve, ms);
        });
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function bufferToBase64UrlSafe(array) {
        var b64 = btoa(String.fromCharCode.apply(String, _toConsumableArray(array)));
        return b64.replace(/\+/g, '-').replace(/\//g, '_');
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
      var INVALID_FID = '';
      /**
       * Generates a new FID using random values from Web Crypto API.
       * Returns an empty string if FID generation fails for any reason.
       */

      function generateFid() {
        try {
          // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
          // bytes. our implementation generates a 17 byte array instead.
          var fidByteArray = new Uint8Array(17);
          var crypto = self.crypto || self.msCrypto;
          crypto.getRandomValues(fidByteArray); // Replace the first 4 random bits with the constant FID header of 0b0111.

          fidByteArray[0] = 112 + fidByteArray[0] % 16;
          var fid = encode(fidByteArray);
          return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
        } catch (_a) {
          // FID generation errored
          return INVALID_FID;
        }
      }
      /** Converts a FID Uint8Array to a base64 string representation. */


      function encode(fidByteArray) {
        var b64String = bufferToBase64UrlSafe(fidByteArray); // Remove the 23rd character that was added because of the extra 4 bits at the
        // end of our 17 byte array, and the '=' padding.

        return b64String.substr(0, 22);
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /** Returns a string key that can be used to identify the app. */


      function getKey(appConfig) {
        return "".concat(appConfig.appName, "!").concat(appConfig.appId);
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var fidChangeCallbacks = new Map();
      /**
       * Calls the onIdChange callbacks with the new FID value, and broadcasts the
       * change to other tabs.
       */

      function fidChanged(appConfig, fid) {
        var key = getKey(appConfig);
        callFidChangeCallbacks(key, fid);
        broadcastFidChange(key, fid);
      }

      function addCallback(appConfig, callback) {
        // Open the broadcast channel if it's not already open,
        // to be able to listen to change events from other tabs.
        getBroadcastChannel();
        var key = getKey(appConfig);
        var callbackSet = fidChangeCallbacks.get(key);

        if (!callbackSet) {
          callbackSet = new Set();
          fidChangeCallbacks.set(key, callbackSet);
        }

        callbackSet.add(callback);
      }

      function removeCallback(appConfig, callback) {
        var key = getKey(appConfig);
        var callbackSet = fidChangeCallbacks.get(key);

        if (!callbackSet) {
          return;
        }

        callbackSet["delete"](callback);

        if (callbackSet.size === 0) {
          fidChangeCallbacks["delete"](key);
        } // Close broadcast channel if there are no more callbacks.


        closeBroadcastChannel();
      }

      function callFidChangeCallbacks(key, fid) {
        var callbacks = fidChangeCallbacks.get(key);

        if (!callbacks) {
          return;
        }

        var _iterator = _createForOfIteratorHelper(callbacks),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var callback = _step.value;
            callback(fid);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      function broadcastFidChange(key, fid) {
        var channel = getBroadcastChannel();

        if (channel) {
          channel.postMessage({
            key: key,
            fid: fid
          });
        }

        closeBroadcastChannel();
      }

      var broadcastChannel = null;
      /** Opens and returns a BroadcastChannel if it is supported by the browser. */

      function getBroadcastChannel() {
        if (!broadcastChannel && 'BroadcastChannel' in self) {
          broadcastChannel = new BroadcastChannel('[Firebase] FID Change');

          broadcastChannel.onmessage = function (e) {
            callFidChangeCallbacks(e.data.key, e.data.fid);
          };
        }

        return broadcastChannel;
      }

      function closeBroadcastChannel() {
        if (fidChangeCallbacks.size === 0 && broadcastChannel) {
          broadcastChannel.close();
          broadcastChannel = null;
        }
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var DATABASE_NAME = 'firebase-installations-database';
      var DATABASE_VERSION = 1;
      var OBJECT_STORE_NAME = 'firebase-installations-store';
      var dbPromise = null;

      function getDbPromise() {
        if (!dbPromise) {
          dbPromise = Object(idb__WEBPACK_IMPORTED_MODULE_3__["openDb"])(DATABASE_NAME, DATABASE_VERSION, function (upgradeDB) {
            // We don't use 'break' in this switch statement, the fall-through
            // behavior is what we want, because if there are multiple versions between
            // the old version and the current version, we want ALL the migrations
            // that correspond to those versions to run, not only the last one.
            // eslint-disable-next-line default-case
            switch (upgradeDB.oldVersion) {
              case 0:
                upgradeDB.createObjectStore(OBJECT_STORE_NAME);
            }
          });
        }

        return dbPromise;
      }
      /** Assigns or overwrites the record for the given key with the given value. */


      function set(_x6, _x7) {
        return _set.apply(this, arguments);
      }
      /** Removes record(s) from the objectStore that match the given key. */


      function _set() {
        _set = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(appConfig, value) {
          var key, db, tx, objectStore, oldValue;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  key = getKey(appConfig);
                  _context4.next = 3;
                  return getDbPromise();

                case 3:
                  db = _context4.sent;
                  tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                  objectStore = tx.objectStore(OBJECT_STORE_NAME);
                  _context4.next = 8;
                  return objectStore.get(key);

                case 8:
                  oldValue = _context4.sent;
                  _context4.next = 11;
                  return objectStore.put(value, key);

                case 11:
                  _context4.next = 13;
                  return tx.complete;

                case 13:
                  if (!oldValue || oldValue.fid !== value.fid) {
                    fidChanged(appConfig, value.fid);
                  }

                  return _context4.abrupt("return", value);

                case 15:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));
        return _set.apply(this, arguments);
      }

      function remove(_x8) {
        return _remove.apply(this, arguments);
      }
      /**
       * Atomically updates a record with the result of updateFn, which gets
       * called with the current value. If newValue is undefined, the record is
       * deleted instead.
       * @return Updated value
       */


      function _remove() {
        _remove = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(appConfig) {
          var key, db, tx;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  key = getKey(appConfig);
                  _context5.next = 3;
                  return getDbPromise();

                case 3:
                  db = _context5.sent;
                  tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                  _context5.next = 7;
                  return tx.objectStore(OBJECT_STORE_NAME)["delete"](key);

                case 7:
                  _context5.next = 9;
                  return tx.complete;

                case 9:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));
        return _remove.apply(this, arguments);
      }

      function update(_x9, _x10) {
        return _update.apply(this, arguments);
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Updates and returns the InstallationEntry from the database.
       * Also triggers a registration request if it is necessary and possible.
       */


      function _update() {
        _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(appConfig, updateFn) {
          var key, db, tx, store, oldValue, newValue;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  key = getKey(appConfig);
                  _context6.next = 3;
                  return getDbPromise();

                case 3:
                  db = _context6.sent;
                  tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                  store = tx.objectStore(OBJECT_STORE_NAME);
                  _context6.next = 8;
                  return store.get(key);

                case 8:
                  oldValue = _context6.sent;
                  newValue = updateFn(oldValue);

                  if (!(newValue === undefined)) {
                    _context6.next = 15;
                    break;
                  }

                  _context6.next = 13;
                  return store["delete"](key);

                case 13:
                  _context6.next = 17;
                  break;

                case 15:
                  _context6.next = 17;
                  return store.put(newValue, key);

                case 17:
                  _context6.next = 19;
                  return tx.complete;

                case 19:
                  if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
                    fidChanged(appConfig, newValue.fid);
                  }

                  return _context6.abrupt("return", newValue);

                case 21:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));
        return _update.apply(this, arguments);
      }

      function getInstallationEntry(_x11) {
        return _getInstallationEntry.apply(this, arguments);
      }
      /**
       * Creates a new Installation Entry if one does not exist.
       * Also clears timed out pending requests.
       */


      function _getInstallationEntry() {
        _getInstallationEntry = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(appConfig) {
          var registrationPromise, installationEntry;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return update(appConfig, function (oldEntry) {
                    var installationEntry = updateOrCreateInstallationEntry(oldEntry);
                    var entryWithPromise = triggerRegistrationIfNecessary(appConfig, installationEntry);
                    registrationPromise = entryWithPromise.registrationPromise;
                    return entryWithPromise.installationEntry;
                  });

                case 2:
                  installationEntry = _context7.sent;

                  if (!(installationEntry.fid === INVALID_FID)) {
                    _context7.next = 8;
                    break;
                  }

                  _context7.next = 6;
                  return registrationPromise;

                case 6:
                  _context7.t0 = _context7.sent;
                  return _context7.abrupt("return", {
                    installationEntry: _context7.t0
                  });

                case 8:
                  return _context7.abrupt("return", {
                    installationEntry: installationEntry,
                    registrationPromise: registrationPromise
                  });

                case 9:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));
        return _getInstallationEntry.apply(this, arguments);
      }

      function updateOrCreateInstallationEntry(oldEntry) {
        var entry = oldEntry || {
          fid: generateFid(),
          registrationStatus: 0
          /* NOT_STARTED */

        };
        return clearTimedOutRequest(entry);
      }
      /**
       * If the Firebase Installation is not registered yet, this will trigger the
       * registration and return an InProgressInstallationEntry.
       *
       * If registrationPromise does not exist, the installationEntry is guaranteed
       * to be registered.
       */


      function triggerRegistrationIfNecessary(appConfig, installationEntry) {
        if (installationEntry.registrationStatus === 0
        /* NOT_STARTED */
        ) {
            if (!navigator.onLine) {
              // Registration required but app is offline.
              var registrationPromiseWithError = Promise.reject(ERROR_FACTORY.create("app-offline"
              /* APP_OFFLINE */
              ));
              return {
                installationEntry: installationEntry,
                registrationPromise: registrationPromiseWithError
              };
            } // Try registering. Change status to IN_PROGRESS.


            var inProgressEntry = {
              fid: installationEntry.fid,
              registrationStatus: 1
              /* IN_PROGRESS */
              ,
              registrationTime: Date.now()
            };
            var registrationPromise = registerInstallation(appConfig, inProgressEntry);
            return {
              installationEntry: inProgressEntry,
              registrationPromise: registrationPromise
            };
          } else if (installationEntry.registrationStatus === 1
        /* IN_PROGRESS */
        ) {
            return {
              installationEntry: installationEntry,
              registrationPromise: waitUntilFidRegistration(appConfig)
            };
          } else {
          return {
            installationEntry: installationEntry
          };
        }
      }
      /** This will be executed only once for each new Firebase Installation. */


      function registerInstallation(_x12, _x13) {
        return _registerInstallation.apply(this, arguments);
      }
      /** Call if FID registration is pending in another request. */


      function _registerInstallation() {
        _registerInstallation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(appConfig, installationEntry) {
          var registeredInstallationEntry;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.prev = 0;
                  _context8.next = 3;
                  return createInstallationRequest(appConfig, installationEntry);

                case 3:
                  registeredInstallationEntry = _context8.sent;
                  return _context8.abrupt("return", set(appConfig, registeredInstallationEntry));

                case 7:
                  _context8.prev = 7;
                  _context8.t0 = _context8["catch"](0);

                  if (!(isServerError(_context8.t0) && _context8.t0.customData.serverCode === 409)) {
                    _context8.next = 14;
                    break;
                  }

                  _context8.next = 12;
                  return remove(appConfig);

                case 12:
                  _context8.next = 16;
                  break;

                case 14:
                  _context8.next = 16;
                  return set(appConfig, {
                    fid: installationEntry.fid,
                    registrationStatus: 0
                    /* NOT_STARTED */

                  });

                case 16:
                  throw _context8.t0;

                case 17:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, null, [[0, 7]]);
        }));
        return _registerInstallation.apply(this, arguments);
      }

      function waitUntilFidRegistration(_x14) {
        return _waitUntilFidRegistration.apply(this, arguments);
      }
      /**
       * Called only if there is a CreateInstallation request in progress.
       *
       * Updates the InstallationEntry in the DB based on the status of the
       * CreateInstallation request.
       *
       * Returns the updated InstallationEntry.
       */


      function _waitUntilFidRegistration() {
        _waitUntilFidRegistration = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(appConfig) {
          var entry, _yield$getInstallatio, installationEntry, registrationPromise;

          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return updateInstallationRequest(appConfig);

                case 2:
                  entry = _context9.sent;

                case 3:
                  if (!(entry.registrationStatus === 1
                  /* IN_PROGRESS */
                  )) {
                    _context9.next = 11;
                    break;
                  }

                  _context9.next = 6;
                  return sleep(100);

                case 6:
                  _context9.next = 8;
                  return updateInstallationRequest(appConfig);

                case 8:
                  entry = _context9.sent;
                  _context9.next = 3;
                  break;

                case 11:
                  if (!(entry.registrationStatus === 0
                  /* NOT_STARTED */
                  )) {
                    _context9.next = 22;
                    break;
                  }

                  _context9.next = 14;
                  return getInstallationEntry(appConfig);

                case 14:
                  _yield$getInstallatio = _context9.sent;
                  installationEntry = _yield$getInstallatio.installationEntry;
                  registrationPromise = _yield$getInstallatio.registrationPromise;

                  if (!registrationPromise) {
                    _context9.next = 21;
                    break;
                  }

                  return _context9.abrupt("return", registrationPromise);

                case 21:
                  return _context9.abrupt("return", installationEntry);

                case 22:
                  return _context9.abrupt("return", entry);

                case 23:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));
        return _waitUntilFidRegistration.apply(this, arguments);
      }

      function updateInstallationRequest(appConfig) {
        return update(appConfig, function (oldEntry) {
          if (!oldEntry) {
            throw ERROR_FACTORY.create("installation-not-found"
            /* INSTALLATION_NOT_FOUND */
            );
          }

          return clearTimedOutRequest(oldEntry);
        });
      }

      function clearTimedOutRequest(entry) {
        if (hasInstallationRequestTimedOut(entry)) {
          return {
            fid: entry.fid,
            registrationStatus: 0
            /* NOT_STARTED */

          };
        }

        return entry;
      }

      function hasInstallationRequestTimedOut(installationEntry) {
        return installationEntry.registrationStatus === 1
        /* IN_PROGRESS */
        && installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now();
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function generateAuthTokenRequest(_x15, _x16) {
        return _generateAuthTokenRequest.apply(this, arguments);
      }

      function _generateAuthTokenRequest() {
        _generateAuthTokenRequest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(_ref5, installationEntry) {
          var appConfig, platformLoggerProvider, endpoint, headers, platformLogger, body, request, response, responseValue, completedAuthToken;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  appConfig = _ref5.appConfig, platformLoggerProvider = _ref5.platformLoggerProvider;
                  endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
                  headers = getHeadersWithAuth(appConfig, installationEntry); // If platform logger exists, add the platform info string to the header.

                  platformLogger = platformLoggerProvider.getImmediate({
                    optional: true
                  });

                  if (platformLogger) {
                    headers.append('x-firebase-client', platformLogger.getPlatformInfoString());
                  }

                  body = {
                    installation: {
                      sdkVersion: PACKAGE_VERSION
                    }
                  };
                  request = {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(body)
                  };
                  _context10.next = 9;
                  return retryIfServerError(function () {
                    return fetch(endpoint, request);
                  });

                case 9:
                  response = _context10.sent;

                  if (!response.ok) {
                    _context10.next = 18;
                    break;
                  }

                  _context10.next = 13;
                  return response.json();

                case 13:
                  responseValue = _context10.sent;
                  completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
                  return _context10.abrupt("return", completedAuthToken);

                case 18:
                  _context10.next = 20;
                  return getErrorFromResponse('Generate Auth Token', response);

                case 20:
                  throw _context10.sent;

                case 21:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));
        return _generateAuthTokenRequest.apply(this, arguments);
      }

      function getGenerateAuthTokenEndpoint(appConfig, _ref6) {
        var fid = _ref6.fid;
        return "".concat(getInstallationsEndpoint(appConfig), "/").concat(fid, "/authTokens:generate");
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Returns a valid authentication token for the installation. Generates a new
       * token if one doesn't exist, is expired or about to expire.
       *
       * Should only be called if the Firebase Installation is registered.
       */


      function refreshAuthToken(_x17) {
        return _refreshAuthToken.apply(this, arguments);
      }
      /**
       * Call only if FID is registered and Auth Token request is in progress.
       *
       * Waits until the current pending request finishes. If the request times out,
       * tries once in this thread as well.
       */


      function _refreshAuthToken() {
        _refreshAuthToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(installations) {
          var forceRefresh,
              tokenPromise,
              entry,
              authToken,
              _args11 = arguments;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  forceRefresh = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : false;
                  _context11.next = 3;
                  return update(installations.appConfig, function (oldEntry) {
                    if (!isEntryRegistered(oldEntry)) {
                      throw ERROR_FACTORY.create("not-registered"
                      /* NOT_REGISTERED */
                      );
                    }

                    var oldAuthToken = oldEntry.authToken;

                    if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
                      // There is a valid token in the DB.
                      return oldEntry;
                    } else if (oldAuthToken.requestStatus === 1
                    /* IN_PROGRESS */
                    ) {
                        // There already is a token request in progress.
                        tokenPromise = waitUntilAuthTokenRequest(installations, forceRefresh);
                        return oldEntry;
                      } else {
                      // No token or token expired.
                      if (!navigator.onLine) {
                        throw ERROR_FACTORY.create("app-offline"
                        /* APP_OFFLINE */
                        );
                      }

                      var inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
                      tokenPromise = fetchAuthTokenFromServer(installations, inProgressEntry);
                      return inProgressEntry;
                    }
                  });

                case 3:
                  entry = _context11.sent;

                  if (!tokenPromise) {
                    _context11.next = 10;
                    break;
                  }

                  _context11.next = 7;
                  return tokenPromise;

                case 7:
                  _context11.t0 = _context11.sent;
                  _context11.next = 11;
                  break;

                case 10:
                  _context11.t0 = entry.authToken;

                case 11:
                  authToken = _context11.t0;
                  return _context11.abrupt("return", authToken);

                case 13:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));
        return _refreshAuthToken.apply(this, arguments);
      }

      function waitUntilAuthTokenRequest(_x18, _x19) {
        return _waitUntilAuthTokenRequest.apply(this, arguments);
      }
      /**
       * Called only if there is a GenerateAuthToken request in progress.
       *
       * Updates the InstallationEntry in the DB based on the status of the
       * GenerateAuthToken request.
       *
       * Returns the updated InstallationEntry.
       */


      function _waitUntilAuthTokenRequest() {
        _waitUntilAuthTokenRequest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(installations, forceRefresh) {
          var entry, authToken;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  _context12.next = 2;
                  return updateAuthTokenRequest(installations.appConfig);

                case 2:
                  entry = _context12.sent;

                case 3:
                  if (!(entry.authToken.requestStatus === 1
                  /* IN_PROGRESS */
                  )) {
                    _context12.next = 11;
                    break;
                  }

                  _context12.next = 6;
                  return sleep(100);

                case 6:
                  _context12.next = 8;
                  return updateAuthTokenRequest(installations.appConfig);

                case 8:
                  entry = _context12.sent;
                  _context12.next = 3;
                  break;

                case 11:
                  authToken = entry.authToken;

                  if (!(authToken.requestStatus === 0
                  /* NOT_STARTED */
                  )) {
                    _context12.next = 16;
                    break;
                  }

                  return _context12.abrupt("return", refreshAuthToken(installations, forceRefresh));

                case 16:
                  return _context12.abrupt("return", authToken);

                case 17:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12);
        }));
        return _waitUntilAuthTokenRequest.apply(this, arguments);
      }

      function updateAuthTokenRequest(appConfig) {
        return update(appConfig, function (oldEntry) {
          if (!isEntryRegistered(oldEntry)) {
            throw ERROR_FACTORY.create("not-registered"
            /* NOT_REGISTERED */
            );
          }

          var oldAuthToken = oldEntry.authToken;

          if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
            return Object.assign(Object.assign({}, oldEntry), {
              authToken: {
                requestStatus: 0
                /* NOT_STARTED */

              }
            });
          }

          return oldEntry;
        });
      }

      function fetchAuthTokenFromServer(_x20, _x21) {
        return _fetchAuthTokenFromServer.apply(this, arguments);
      }

      function _fetchAuthTokenFromServer() {
        _fetchAuthTokenFromServer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(installations, installationEntry) {
          var authToken, updatedInstallationEntry, _updatedInstallationEntry;

          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  _context13.prev = 0;
                  _context13.next = 3;
                  return generateAuthTokenRequest(installations, installationEntry);

                case 3:
                  authToken = _context13.sent;
                  updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), {
                    authToken: authToken
                  });
                  _context13.next = 7;
                  return set(installations.appConfig, updatedInstallationEntry);

                case 7:
                  return _context13.abrupt("return", authToken);

                case 10:
                  _context13.prev = 10;
                  _context13.t0 = _context13["catch"](0);

                  if (!(isServerError(_context13.t0) && (_context13.t0.customData.serverCode === 401 || _context13.t0.customData.serverCode === 404))) {
                    _context13.next = 17;
                    break;
                  }

                  _context13.next = 15;
                  return remove(installations.appConfig);

                case 15:
                  _context13.next = 20;
                  break;

                case 17:
                  _updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), {
                    authToken: {
                      requestStatus: 0
                      /* NOT_STARTED */

                    }
                  });
                  _context13.next = 20;
                  return set(installations.appConfig, _updatedInstallationEntry);

                case 20:
                  throw _context13.t0;

                case 21:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13, null, [[0, 10]]);
        }));
        return _fetchAuthTokenFromServer.apply(this, arguments);
      }

      function isEntryRegistered(installationEntry) {
        return installationEntry !== undefined && installationEntry.registrationStatus === 2
        /* COMPLETED */
        ;
      }

      function isAuthTokenValid(authToken) {
        return authToken.requestStatus === 2
        /* COMPLETED */
        && !isAuthTokenExpired(authToken);
      }

      function isAuthTokenExpired(authToken) {
        var now = Date.now();
        return now < authToken.creationTime || authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER;
      }
      /** Returns an updated InstallationEntry with an InProgressAuthToken. */


      function makeAuthTokenRequestInProgressEntry(oldEntry) {
        var inProgressAuthToken = {
          requestStatus: 1
          /* IN_PROGRESS */
          ,
          requestTime: Date.now()
        };
        return Object.assign(Object.assign({}, oldEntry), {
          authToken: inProgressAuthToken
        });
      }

      function hasAuthTokenRequestTimedOut(authToken) {
        return authToken.requestStatus === 1
        /* IN_PROGRESS */
        && authToken.requestTime + PENDING_TIMEOUT_MS < Date.now();
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Creates a Firebase Installation if there isn't one for the app and
       * returns the Installation ID.
       * @param installations - The `Installations` instance.
       *
       * @public
       */


      function _getId2(_x22) {
        return _getId.apply(this, arguments);
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Returns a Firebase Installations auth token, identifying the current
       * Firebase Installation.
       * @param installations - The `Installations` instance.
       * @param forceRefresh - Force refresh regardless of token expiration.
       *
       * @public
       */


      function _getId() {
        _getId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(installations) {
          var installationsImpl, _yield$getInstallatio2, installationEntry, registrationPromise;

          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  installationsImpl = installations;
                  _context14.next = 3;
                  return getInstallationEntry(installationsImpl.appConfig);

                case 3:
                  _yield$getInstallatio2 = _context14.sent;
                  installationEntry = _yield$getInstallatio2.installationEntry;
                  registrationPromise = _yield$getInstallatio2.registrationPromise;

                  if (registrationPromise) {
                    registrationPromise["catch"](console.error);
                  } else {
                    // If the installation is already registered, update the authentication
                    // token if needed.
                    refreshAuthToken(installationsImpl)["catch"](console.error);
                  }

                  return _context14.abrupt("return", installationEntry.fid);

                case 8:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14);
        }));
        return _getId.apply(this, arguments);
      }

      function _getToken2(_x23) {
        return _getToken.apply(this, arguments);
      }

      function _getToken() {
        _getToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(installations) {
          var forceRefresh,
              installationsImpl,
              authToken,
              _args15 = arguments;
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  forceRefresh = _args15.length > 1 && _args15[1] !== undefined ? _args15[1] : false;
                  installationsImpl = installations;
                  _context15.next = 4;
                  return completeInstallationRegistration(installationsImpl.appConfig);

                case 4:
                  _context15.next = 6;
                  return refreshAuthToken(installationsImpl, forceRefresh);

                case 6:
                  authToken = _context15.sent;
                  return _context15.abrupt("return", authToken.token);

                case 8:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15);
        }));
        return _getToken.apply(this, arguments);
      }

      function completeInstallationRegistration(_x24) {
        return _completeInstallationRegistration.apply(this, arguments);
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function _completeInstallationRegistration() {
        _completeInstallationRegistration = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(appConfig) {
          var _yield$getInstallatio3, registrationPromise;

          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  _context16.next = 2;
                  return getInstallationEntry(appConfig);

                case 2:
                  _yield$getInstallatio3 = _context16.sent;
                  registrationPromise = _yield$getInstallatio3.registrationPromise;

                  if (!registrationPromise) {
                    _context16.next = 7;
                    break;
                  }

                  _context16.next = 7;
                  return registrationPromise;

                case 7:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16);
        }));
        return _completeInstallationRegistration.apply(this, arguments);
      }

      function deleteInstallationRequest(_x25, _x26) {
        return _deleteInstallationRequest.apply(this, arguments);
      }

      function _deleteInstallationRequest() {
        _deleteInstallationRequest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(appConfig, installationEntry) {
          var endpoint, headers, request, response;
          return regeneratorRuntime.wrap(function _callee17$(_context17) {
            while (1) {
              switch (_context17.prev = _context17.next) {
                case 0:
                  endpoint = getDeleteEndpoint(appConfig, installationEntry);
                  headers = getHeadersWithAuth(appConfig, installationEntry);
                  request = {
                    method: 'DELETE',
                    headers: headers
                  };
                  _context17.next = 5;
                  return retryIfServerError(function () {
                    return fetch(endpoint, request);
                  });

                case 5:
                  response = _context17.sent;

                  if (response.ok) {
                    _context17.next = 10;
                    break;
                  }

                  _context17.next = 9;
                  return getErrorFromResponse('Delete Installation', response);

                case 9:
                  throw _context17.sent;

                case 10:
                case "end":
                  return _context17.stop();
              }
            }
          }, _callee17);
        }));
        return _deleteInstallationRequest.apply(this, arguments);
      }

      function getDeleteEndpoint(appConfig, _ref7) {
        var fid = _ref7.fid;
        return "".concat(getInstallationsEndpoint(appConfig), "/").concat(fid);
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Deletes the Firebase Installation and all associated data.
       * @param installations - The `Installations` instance.
       *
       * @public
       */


      function deleteInstallations(_x27) {
        return _deleteInstallations.apply(this, arguments);
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Sets a new callback that will get called when Installation ID changes.
       * Returns an unsubscribe function that will remove the callback when called.
       * @param installations - The `Installations` instance.
       * @param callback - The callback function that is invoked when FID changes.
       * @returns A function that can be called to unsubscribe.
       *
       * @public
       */


      function _deleteInstallations() {
        _deleteInstallations = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(installations) {
          var appConfig, entry;
          return regeneratorRuntime.wrap(function _callee18$(_context18) {
            while (1) {
              switch (_context18.prev = _context18.next) {
                case 0:
                  appConfig = installations.appConfig;
                  _context18.next = 3;
                  return update(appConfig, function (oldEntry) {
                    if (oldEntry && oldEntry.registrationStatus === 0
                    /* NOT_STARTED */
                    ) {
                        // Delete the unregistered entry without sending a deleteInstallation request.
                        return undefined;
                      }

                    return oldEntry;
                  });

                case 3:
                  entry = _context18.sent;

                  if (!entry) {
                    _context18.next = 18;
                    break;
                  }

                  if (!(entry.registrationStatus === 1
                  /* IN_PROGRESS */
                  )) {
                    _context18.next = 9;
                    break;
                  }

                  throw ERROR_FACTORY.create("delete-pending-registration"
                  /* DELETE_PENDING_REGISTRATION */
                  );

                case 9:
                  if (!(entry.registrationStatus === 2
                  /* COMPLETED */
                  )) {
                    _context18.next = 18;
                    break;
                  }

                  if (navigator.onLine) {
                    _context18.next = 14;
                    break;
                  }

                  throw ERROR_FACTORY.create("app-offline"
                  /* APP_OFFLINE */
                  );

                case 14:
                  _context18.next = 16;
                  return deleteInstallationRequest(appConfig, entry);

                case 16:
                  _context18.next = 18;
                  return remove(appConfig);

                case 18:
                case "end":
                  return _context18.stop();
              }
            }
          }, _callee18);
        }));
        return _deleteInstallations.apply(this, arguments);
      }

      function onIdChange(installations, callback) {
        var appConfig = installations.appConfig;
        addCallback(appConfig, callback);
        return function () {
          removeCallback(appConfig, callback);
        };
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Returns an instance of {@link Installations} associated with the given
       * {@link @firebase/app#FirebaseApp} instance.
       * @param app - The {@link @firebase/app#FirebaseApp} instance.
       *
       * @public
       */


      function getInstallations() {
        var app = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["getApp"])();
        var installationsImpl = Object(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["_getProvider"])(app, 'installations').getImmediate();
        return installationsImpl;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function extractAppConfig(app) {
        if (!app || !app.options) {
          throw getMissingValueError('App Configuration');
        }

        if (!app.name) {
          throw getMissingValueError('App Name');
        } // Required app config keys


        var configKeys = ['projectId', 'apiKey', 'appId'];

        for (var _i = 0, _configKeys = configKeys; _i < _configKeys.length; _i++) {
          var keyName = _configKeys[_i];

          if (!app.options[keyName]) {
            throw getMissingValueError(keyName);
          }
        }

        return {
          appName: app.name,
          projectId: app.options.projectId,
          apiKey: app.options.apiKey,
          appId: app.options.appId
        };
      }

      function getMissingValueError(valueName) {
        return ERROR_FACTORY.create("missing-app-config-values"
        /* MISSING_APP_CONFIG_VALUES */
        , {
          valueName: valueName
        });
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var INSTALLATIONS_NAME = 'installations';
      var INSTALLATIONS_NAME_INTERNAL = 'installations-internal';

      var publicFactory = function publicFactory(container) {
        var app = container.getProvider('app').getImmediate(); // Throws if app isn't configured properly.

        var appConfig = extractAppConfig(app);
        var platformLoggerProvider = Object(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["_getProvider"])(app, 'platform-logger');
        var installationsImpl = {
          app: app,
          appConfig: appConfig,
          platformLoggerProvider: platformLoggerProvider,
          _delete: function _delete() {
            return Promise.resolve();
          }
        };
        return installationsImpl;
      };

      var internalFactory = function internalFactory(container) {
        var app = container.getProvider('app').getImmediate(); // Internal FIS instance relies on public FIS instance.

        var installations = Object(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["_getProvider"])(app, INSTALLATIONS_NAME).getImmediate();
        var installationsInternal = {
          getId: function getId() {
            return _getId2(installations);
          },
          getToken: function getToken(forceRefresh) {
            return _getToken2(installations, forceRefresh);
          }
        };
        return installationsInternal;
      };

      function registerInstallations() {
        Object(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["_registerComponent"])(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__["Component"](INSTALLATIONS_NAME, publicFactory, "PUBLIC"
        /* PUBLIC */
        ));
        Object(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["_registerComponent"])(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__["Component"](INSTALLATIONS_NAME_INTERNAL, internalFactory, "PRIVATE"
        /* PRIVATE */
        ));
      }
      /**
       * Firebase Installations
       *
       * @packageDocumentation
       */


      registerInstallations();
      Object(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["registerVersion"])(name, version); // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation

      Object(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["registerVersion"])(name, version, 'esm2017'); //# sourceMappingURL=index.esm2017.js.map

      /***/
    },

    /***/
    "./node_modules/@firebase/messaging/dist/index.esm2017.js":
    /*!****************************************************************!*\
      !*** ./node_modules/@firebase/messaging/dist/index.esm2017.js ***!
      \****************************************************************/

    /*! exports provided: deleteToken, getMessaging, getToken, isSupported, onMessage */

    /***/
    function node_modulesFirebaseMessagingDistIndexEsm2017Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _ERROR_MAP;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteToken", function () {
        return deleteToken;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMessaging", function () {
        return getMessagingInWindow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getToken", function () {
        return getToken;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isSupported", function () {
        return isWindowSupported;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "onMessage", function () {
        return onMessage;
      });
      /* harmony import */


      var _firebase_installations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @firebase/installations */
      "./node_modules/@firebase/installations/dist/index.esm2017.js");
      /* harmony import */


      var _firebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @firebase/component */
      "./node_modules/@firebase/component/dist/index.esm.js");
      /* harmony import */


      var idb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! idb */
      "./node_modules/idb/build/idb.js");
      /* harmony import */


      var idb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(idb__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _firebase_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @firebase/util */
      "./node_modules/@firebase/util/dist/index.esm2017.js");
      /* harmony import */


      var _firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @firebase/app */
      "./node_modules/@firebase/app/dist/index.esm2017.js");
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var DEFAULT_SW_PATH = '/firebase-messaging-sw.js';
      var DEFAULT_SW_SCOPE = '/firebase-cloud-messaging-push-scope';
      var DEFAULT_VAPID_KEY = 'BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4';
      var ENDPOINT = 'https://fcmregistrations.googleapis.com/v1';
      var CONSOLE_CAMPAIGN_ID = 'google.c.a.c_id';
      var CONSOLE_CAMPAIGN_NAME = 'google.c.a.c_l';
      var CONSOLE_CAMPAIGN_TIME = 'google.c.a.ts';
      /** Set to '1' if Analytics is enabled for the campaign */

      var CONSOLE_CAMPAIGN_ANALYTICS_ENABLED = 'google.c.a.e';
      var MessageType$1;

      (function (MessageType) {
        MessageType[MessageType["DATA_MESSAGE"] = 1] = "DATA_MESSAGE";
        MessageType[MessageType["DISPLAY_NOTIFICATION"] = 3] = "DISPLAY_NOTIFICATION";
      })(MessageType$1 || (MessageType$1 = {}));
      /**
       * @license
       * Copyright 2018 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
       * in compliance with the License. You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software distributed under the License
       * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
       * or implied. See the License for the specific language governing permissions and limitations under
       * the License.
       */


      var MessageType;

      (function (MessageType) {
        MessageType["PUSH_RECEIVED"] = "push-received";
        MessageType["NOTIFICATION_CLICKED"] = "notification-clicked";
      })(MessageType || (MessageType = {}));
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function arrayToBase64(array) {
        var uint8Array = new Uint8Array(array);
        var base64String = btoa(String.fromCharCode.apply(String, _toConsumableArray(uint8Array)));
        return base64String.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
      }

      function base64ToArray(base64String) {
        var padding = '='.repeat((4 - base64String.length % 4) % 4);
        var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
        var rawData = atob(base64);
        var outputArray = new Uint8Array(rawData.length);

        for (var i = 0; i < rawData.length; ++i) {
          outputArray[i] = rawData.charCodeAt(i);
        }

        return outputArray;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var OLD_DB_NAME = 'fcm_token_details_db';
      /**
       * The last DB version of 'fcm_token_details_db' was 4. This is one higher, so that the upgrade
       * callback is called for all versions of the old DB.
       */

      var OLD_DB_VERSION = 5;
      var OLD_OBJECT_STORE_NAME = 'fcm_token_object_Store';

      function migrateOldDatabase(_x28) {
        return _migrateOldDatabase.apply(this, arguments);
      }

      function _migrateOldDatabase() {
        _migrateOldDatabase = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(senderId) {
          var databases, dbNames, tokenDetails, db;
          return regeneratorRuntime.wrap(function _callee20$(_context20) {
            while (1) {
              switch (_context20.prev = _context20.next) {
                case 0:
                  if (!('databases' in indexedDB)) {
                    _context20.next = 7;
                    break;
                  }

                  _context20.next = 3;
                  return indexedDB.databases();

                case 3:
                  databases = _context20.sent;
                  dbNames = databases.map(function (db) {
                    return db.name;
                  });

                  if (dbNames.includes(OLD_DB_NAME)) {
                    _context20.next = 7;
                    break;
                  }

                  return _context20.abrupt("return", null);

                case 7:
                  tokenDetails = null;
                  _context20.next = 10;
                  return Object(idb__WEBPACK_IMPORTED_MODULE_2__["openDb"])(OLD_DB_NAME, OLD_DB_VERSION, /*#__PURE__*/function () {
                    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(db) {
                      var _a, objectStore, value, oldDetails, _oldDetails, _oldDetails2;

                      return regeneratorRuntime.wrap(function _callee19$(_context19) {
                        while (1) {
                          switch (_context19.prev = _context19.next) {
                            case 0:
                              if (!(db.oldVersion < 2)) {
                                _context19.next = 2;
                                break;
                              }

                              return _context19.abrupt("return");

                            case 2:
                              if (db.objectStoreNames.contains(OLD_OBJECT_STORE_NAME)) {
                                _context19.next = 4;
                                break;
                              }

                              return _context19.abrupt("return");

                            case 4:
                              objectStore = db.transaction.objectStore(OLD_OBJECT_STORE_NAME);
                              _context19.next = 7;
                              return objectStore.index('fcmSenderId').get(senderId);

                            case 7:
                              value = _context19.sent;
                              _context19.next = 10;
                              return objectStore.clear();

                            case 10:
                              if (value) {
                                _context19.next = 12;
                                break;
                              }

                              return _context19.abrupt("return");

                            case 12:
                              if (!(db.oldVersion === 2)) {
                                _context19.next = 19;
                                break;
                              }

                              oldDetails = value;

                              if (!(!oldDetails.auth || !oldDetails.p256dh || !oldDetails.endpoint)) {
                                _context19.next = 16;
                                break;
                              }

                              return _context19.abrupt("return");

                            case 16:
                              tokenDetails = {
                                token: oldDetails.fcmToken,
                                createTime: (_a = oldDetails.createTime) !== null && _a !== void 0 ? _a : Date.now(),
                                subscriptionOptions: {
                                  auth: oldDetails.auth,
                                  p256dh: oldDetails.p256dh,
                                  endpoint: oldDetails.endpoint,
                                  swScope: oldDetails.swScope,
                                  vapidKey: typeof oldDetails.vapidKey === 'string' ? oldDetails.vapidKey : arrayToBase64(oldDetails.vapidKey)
                                }
                              };
                              _context19.next = 20;
                              break;

                            case 19:
                              if (db.oldVersion === 3) {
                                _oldDetails = value;
                                tokenDetails = {
                                  token: _oldDetails.fcmToken,
                                  createTime: _oldDetails.createTime,
                                  subscriptionOptions: {
                                    auth: arrayToBase64(_oldDetails.auth),
                                    p256dh: arrayToBase64(_oldDetails.p256dh),
                                    endpoint: _oldDetails.endpoint,
                                    swScope: _oldDetails.swScope,
                                    vapidKey: arrayToBase64(_oldDetails.vapidKey)
                                  }
                                };
                              } else if (db.oldVersion === 4) {
                                _oldDetails2 = value;
                                tokenDetails = {
                                  token: _oldDetails2.fcmToken,
                                  createTime: _oldDetails2.createTime,
                                  subscriptionOptions: {
                                    auth: arrayToBase64(_oldDetails2.auth),
                                    p256dh: arrayToBase64(_oldDetails2.p256dh),
                                    endpoint: _oldDetails2.endpoint,
                                    swScope: _oldDetails2.swScope,
                                    vapidKey: arrayToBase64(_oldDetails2.vapidKey)
                                  }
                                };
                              }

                            case 20:
                            case "end":
                              return _context19.stop();
                          }
                        }
                      }, _callee19);
                    }));

                    return function (_x63) {
                      return _ref12.apply(this, arguments);
                    };
                  }());

                case 10:
                  db = _context20.sent;
                  db.close(); // Delete all old databases.

                  _context20.next = 14;
                  return Object(idb__WEBPACK_IMPORTED_MODULE_2__["deleteDb"])(OLD_DB_NAME);

                case 14:
                  _context20.next = 16;
                  return Object(idb__WEBPACK_IMPORTED_MODULE_2__["deleteDb"])('fcm_vapid_details_db');

                case 16:
                  _context20.next = 18;
                  return Object(idb__WEBPACK_IMPORTED_MODULE_2__["deleteDb"])('undefined');

                case 18:
                  return _context20.abrupt("return", checkTokenDetails(tokenDetails) ? tokenDetails : null);

                case 19:
                case "end":
                  return _context20.stop();
              }
            }
          }, _callee20);
        }));
        return _migrateOldDatabase.apply(this, arguments);
      }

      function checkTokenDetails(tokenDetails) {
        if (!tokenDetails || !tokenDetails.subscriptionOptions) {
          return false;
        }

        var subscriptionOptions = tokenDetails.subscriptionOptions;
        return typeof tokenDetails.createTime === 'number' && tokenDetails.createTime > 0 && typeof tokenDetails.token === 'string' && tokenDetails.token.length > 0 && typeof subscriptionOptions.auth === 'string' && subscriptionOptions.auth.length > 0 && typeof subscriptionOptions.p256dh === 'string' && subscriptionOptions.p256dh.length > 0 && typeof subscriptionOptions.endpoint === 'string' && subscriptionOptions.endpoint.length > 0 && typeof subscriptionOptions.swScope === 'string' && subscriptionOptions.swScope.length > 0 && typeof subscriptionOptions.vapidKey === 'string' && subscriptionOptions.vapidKey.length > 0;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // Exported for tests.


      var DATABASE_NAME = 'firebase-messaging-database';
      var DATABASE_VERSION = 1;
      var OBJECT_STORE_NAME = 'firebase-messaging-store';
      var dbPromise = null;

      function getDbPromise() {
        if (!dbPromise) {
          dbPromise = Object(idb__WEBPACK_IMPORTED_MODULE_2__["openDb"])(DATABASE_NAME, DATABASE_VERSION, function (upgradeDb) {
            // We don't use 'break' in this switch statement, the fall-through behavior is what we want,
            // because if there are multiple versions between the old version and the current version, we
            // want ALL the migrations that correspond to those versions to run, not only the last one.
            // eslint-disable-next-line default-case
            switch (upgradeDb.oldVersion) {
              case 0:
                upgradeDb.createObjectStore(OBJECT_STORE_NAME);
            }
          });
        }

        return dbPromise;
      }
      /** Gets record(s) from the objectStore that match the given key. */


      function dbGet(_x29) {
        return _dbGet.apply(this, arguments);
      }
      /** Assigns or overwrites the record for the given key with the given value. */


      function _dbGet() {
        _dbGet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(firebaseDependencies) {
          var key, db, tokenDetails, oldTokenDetails;
          return regeneratorRuntime.wrap(function _callee21$(_context21) {
            while (1) {
              switch (_context21.prev = _context21.next) {
                case 0:
                  key = getKey(firebaseDependencies);
                  _context21.next = 3;
                  return getDbPromise();

                case 3:
                  db = _context21.sent;
                  _context21.next = 6;
                  return db.transaction(OBJECT_STORE_NAME).objectStore(OBJECT_STORE_NAME).get(key);

                case 6:
                  tokenDetails = _context21.sent;

                  if (!tokenDetails) {
                    _context21.next = 11;
                    break;
                  }

                  return _context21.abrupt("return", tokenDetails);

                case 11:
                  _context21.next = 13;
                  return migrateOldDatabase(firebaseDependencies.appConfig.senderId);

                case 13:
                  oldTokenDetails = _context21.sent;

                  if (!oldTokenDetails) {
                    _context21.next = 18;
                    break;
                  }

                  _context21.next = 17;
                  return dbSet(firebaseDependencies, oldTokenDetails);

                case 17:
                  return _context21.abrupt("return", oldTokenDetails);

                case 18:
                case "end":
                  return _context21.stop();
              }
            }
          }, _callee21);
        }));
        return _dbGet.apply(this, arguments);
      }

      function dbSet(_x30, _x31) {
        return _dbSet.apply(this, arguments);
      }
      /** Removes record(s) from the objectStore that match the given key. */


      function _dbSet() {
        _dbSet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(firebaseDependencies, tokenDetails) {
          var key, db, tx;
          return regeneratorRuntime.wrap(function _callee22$(_context22) {
            while (1) {
              switch (_context22.prev = _context22.next) {
                case 0:
                  key = getKey(firebaseDependencies);
                  _context22.next = 3;
                  return getDbPromise();

                case 3:
                  db = _context22.sent;
                  tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                  _context22.next = 7;
                  return tx.objectStore(OBJECT_STORE_NAME).put(tokenDetails, key);

                case 7:
                  _context22.next = 9;
                  return tx.complete;

                case 9:
                  return _context22.abrupt("return", tokenDetails);

                case 10:
                case "end":
                  return _context22.stop();
              }
            }
          }, _callee22);
        }));
        return _dbSet.apply(this, arguments);
      }

      function dbRemove(_x32) {
        return _dbRemove.apply(this, arguments);
      }

      function _dbRemove() {
        _dbRemove = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(firebaseDependencies) {
          var key, db, tx;
          return regeneratorRuntime.wrap(function _callee23$(_context23) {
            while (1) {
              switch (_context23.prev = _context23.next) {
                case 0:
                  key = getKey(firebaseDependencies);
                  _context23.next = 3;
                  return getDbPromise();

                case 3:
                  db = _context23.sent;
                  tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                  _context23.next = 7;
                  return tx.objectStore(OBJECT_STORE_NAME)["delete"](key);

                case 7:
                  _context23.next = 9;
                  return tx.complete;

                case 9:
                case "end":
                  return _context23.stop();
              }
            }
          }, _callee23);
        }));
        return _dbRemove.apply(this, arguments);
      }

      function getKey(_ref8) {
        var appConfig = _ref8.appConfig;
        return appConfig.appId;
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var ERROR_MAP = (_ERROR_MAP = {}, _defineProperty(_ERROR_MAP, "missing-app-config-values"
      /* MISSING_APP_CONFIG_VALUES */
      , 'Missing App configuration value: "{$valueName}"'), _defineProperty(_ERROR_MAP, "only-available-in-window"
      /* AVAILABLE_IN_WINDOW */
      , 'This method is available in a Window context.'), _defineProperty(_ERROR_MAP, "only-available-in-sw"
      /* AVAILABLE_IN_SW */
      , 'This method is available in a service worker context.'), _defineProperty(_ERROR_MAP, "permission-default"
      /* PERMISSION_DEFAULT */
      , 'The notification permission was not granted and dismissed instead.'), _defineProperty(_ERROR_MAP, "permission-blocked"
      /* PERMISSION_BLOCKED */
      , 'The notification permission was not granted and blocked instead.'), _defineProperty(_ERROR_MAP, "unsupported-browser"
      /* UNSUPPORTED_BROWSER */
      , "This browser doesn't support the API's required to use the firebase SDK."), _defineProperty(_ERROR_MAP, "indexed-db-unsupported"
      /* INDEXED_DB_UNSUPPORTED */
      , "This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)"), _defineProperty(_ERROR_MAP, "failed-service-worker-registration"
      /* FAILED_DEFAULT_REGISTRATION */
      , 'We are unable to register the default service worker. {$browserErrorMessage}'), _defineProperty(_ERROR_MAP, "token-subscribe-failed"
      /* TOKEN_SUBSCRIBE_FAILED */
      , 'A problem occurred while subscribing the user to FCM: {$errorInfo}'), _defineProperty(_ERROR_MAP, "token-subscribe-no-token"
      /* TOKEN_SUBSCRIBE_NO_TOKEN */
      , 'FCM returned no token when subscribing the user to push.'), _defineProperty(_ERROR_MAP, "token-unsubscribe-failed"
      /* TOKEN_UNSUBSCRIBE_FAILED */
      , 'A problem occurred while unsubscribing the ' + 'user from FCM: {$errorInfo}'), _defineProperty(_ERROR_MAP, "token-update-failed"
      /* TOKEN_UPDATE_FAILED */
      , 'A problem occurred while updating the user from FCM: {$errorInfo}'), _defineProperty(_ERROR_MAP, "token-update-no-token"
      /* TOKEN_UPDATE_NO_TOKEN */
      , 'FCM returned no token when updating the user to push.'), _defineProperty(_ERROR_MAP, "use-sw-after-get-token"
      /* USE_SW_AFTER_GET_TOKEN */
      , 'The useServiceWorker() method may only be called once and must be ' + 'called before calling getToken() to ensure your service worker is used.'), _defineProperty(_ERROR_MAP, "invalid-sw-registration"
      /* INVALID_SW_REGISTRATION */
      , 'The input to useServiceWorker() must be a ServiceWorkerRegistration.'), _defineProperty(_ERROR_MAP, "invalid-bg-handler"
      /* INVALID_BG_HANDLER */
      , 'The input to setBackgroundMessageHandler() must be a function.'), _defineProperty(_ERROR_MAP, "invalid-vapid-key"
      /* INVALID_VAPID_KEY */
      , 'The public VAPID key must be a string.'), _defineProperty(_ERROR_MAP, "use-vapid-key-after-get-token"
      /* USE_VAPID_KEY_AFTER_GET_TOKEN */
      , 'The usePublicVapidKey() method may only be called once and must be ' + 'called before calling getToken() to ensure your VAPID key is used.'), _ERROR_MAP);
      var ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_3__["ErrorFactory"]('messaging', 'Messaging', ERROR_MAP);
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      function requestGetToken(_x33, _x34) {
        return _requestGetToken.apply(this, arguments);
      }

      function _requestGetToken() {
        _requestGetToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(firebaseDependencies, subscriptionOptions) {
          var headers, body, subscribeOptions, responseData, response, message;
          return regeneratorRuntime.wrap(function _callee24$(_context24) {
            while (1) {
              switch (_context24.prev = _context24.next) {
                case 0:
                  _context24.next = 2;
                  return getHeaders(firebaseDependencies);

                case 2:
                  headers = _context24.sent;
                  body = getBody(subscriptionOptions);
                  subscribeOptions = {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(body)
                  };
                  _context24.prev = 5;
                  _context24.next = 8;
                  return fetch(getEndpoint(firebaseDependencies.appConfig), subscribeOptions);

                case 8:
                  response = _context24.sent;
                  _context24.next = 11;
                  return response.json();

                case 11:
                  responseData = _context24.sent;
                  _context24.next = 17;
                  break;

                case 14:
                  _context24.prev = 14;
                  _context24.t0 = _context24["catch"](5);
                  throw ERROR_FACTORY.create("token-subscribe-failed"
                  /* TOKEN_SUBSCRIBE_FAILED */
                  , {
                    errorInfo: _context24.t0
                  });

                case 17:
                  if (!responseData.error) {
                    _context24.next = 20;
                    break;
                  }

                  message = responseData.error.message;
                  throw ERROR_FACTORY.create("token-subscribe-failed"
                  /* TOKEN_SUBSCRIBE_FAILED */
                  , {
                    errorInfo: message
                  });

                case 20:
                  if (responseData.token) {
                    _context24.next = 22;
                    break;
                  }

                  throw ERROR_FACTORY.create("token-subscribe-no-token"
                  /* TOKEN_SUBSCRIBE_NO_TOKEN */
                  );

                case 22:
                  return _context24.abrupt("return", responseData.token);

                case 23:
                case "end":
                  return _context24.stop();
              }
            }
          }, _callee24, null, [[5, 14]]);
        }));
        return _requestGetToken.apply(this, arguments);
      }

      function requestUpdateToken(_x35, _x36) {
        return _requestUpdateToken.apply(this, arguments);
      }

      function _requestUpdateToken() {
        _requestUpdateToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(firebaseDependencies, tokenDetails) {
          var headers, body, updateOptions, responseData, response, message;
          return regeneratorRuntime.wrap(function _callee25$(_context25) {
            while (1) {
              switch (_context25.prev = _context25.next) {
                case 0:
                  _context25.next = 2;
                  return getHeaders(firebaseDependencies);

                case 2:
                  headers = _context25.sent;
                  body = getBody(tokenDetails.subscriptionOptions);
                  updateOptions = {
                    method: 'PATCH',
                    headers: headers,
                    body: JSON.stringify(body)
                  };
                  _context25.prev = 5;
                  _context25.next = 8;
                  return fetch("".concat(getEndpoint(firebaseDependencies.appConfig), "/").concat(tokenDetails.token), updateOptions);

                case 8:
                  response = _context25.sent;
                  _context25.next = 11;
                  return response.json();

                case 11:
                  responseData = _context25.sent;
                  _context25.next = 17;
                  break;

                case 14:
                  _context25.prev = 14;
                  _context25.t0 = _context25["catch"](5);
                  throw ERROR_FACTORY.create("token-update-failed"
                  /* TOKEN_UPDATE_FAILED */
                  , {
                    errorInfo: _context25.t0
                  });

                case 17:
                  if (!responseData.error) {
                    _context25.next = 20;
                    break;
                  }

                  message = responseData.error.message;
                  throw ERROR_FACTORY.create("token-update-failed"
                  /* TOKEN_UPDATE_FAILED */
                  , {
                    errorInfo: message
                  });

                case 20:
                  if (responseData.token) {
                    _context25.next = 22;
                    break;
                  }

                  throw ERROR_FACTORY.create("token-update-no-token"
                  /* TOKEN_UPDATE_NO_TOKEN */
                  );

                case 22:
                  return _context25.abrupt("return", responseData.token);

                case 23:
                case "end":
                  return _context25.stop();
              }
            }
          }, _callee25, null, [[5, 14]]);
        }));
        return _requestUpdateToken.apply(this, arguments);
      }

      function requestDeleteToken(_x37, _x38) {
        return _requestDeleteToken.apply(this, arguments);
      }

      function _requestDeleteToken() {
        _requestDeleteToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(firebaseDependencies, token) {
          var headers, unsubscribeOptions, response, responseData, message;
          return regeneratorRuntime.wrap(function _callee26$(_context26) {
            while (1) {
              switch (_context26.prev = _context26.next) {
                case 0:
                  _context26.next = 2;
                  return getHeaders(firebaseDependencies);

                case 2:
                  headers = _context26.sent;
                  unsubscribeOptions = {
                    method: 'DELETE',
                    headers: headers
                  };
                  _context26.prev = 4;
                  _context26.next = 7;
                  return fetch("".concat(getEndpoint(firebaseDependencies.appConfig), "/").concat(token), unsubscribeOptions);

                case 7:
                  response = _context26.sent;
                  _context26.next = 10;
                  return response.json();

                case 10:
                  responseData = _context26.sent;

                  if (!responseData.error) {
                    _context26.next = 14;
                    break;
                  }

                  message = responseData.error.message;
                  throw ERROR_FACTORY.create("token-unsubscribe-failed"
                  /* TOKEN_UNSUBSCRIBE_FAILED */
                  , {
                    errorInfo: message
                  });

                case 14:
                  _context26.next = 19;
                  break;

                case 16:
                  _context26.prev = 16;
                  _context26.t0 = _context26["catch"](4);
                  throw ERROR_FACTORY.create("token-unsubscribe-failed"
                  /* TOKEN_UNSUBSCRIBE_FAILED */
                  , {
                    errorInfo: _context26.t0
                  });

                case 19:
                case "end":
                  return _context26.stop();
              }
            }
          }, _callee26, null, [[4, 16]]);
        }));
        return _requestDeleteToken.apply(this, arguments);
      }

      function getEndpoint(_ref9) {
        var projectId = _ref9.projectId;
        return "".concat(ENDPOINT, "/projects/").concat(projectId, "/registrations");
      }

      function getHeaders(_x39) {
        return _getHeaders.apply(this, arguments);
      }

      function _getHeaders() {
        _getHeaders = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27(_ref10) {
          var appConfig, installations, authToken;
          return regeneratorRuntime.wrap(function _callee27$(_context27) {
            while (1) {
              switch (_context27.prev = _context27.next) {
                case 0:
                  appConfig = _ref10.appConfig, installations = _ref10.installations;
                  _context27.next = 3;
                  return installations.getToken();

                case 3:
                  authToken = _context27.sent;
                  return _context27.abrupt("return", new Headers({
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'x-goog-api-key': appConfig.apiKey,
                    'x-goog-firebase-installations-auth': "FIS ".concat(authToken)
                  }));

                case 5:
                case "end":
                  return _context27.stop();
              }
            }
          }, _callee27);
        }));
        return _getHeaders.apply(this, arguments);
      }

      function getBody(_ref11) {
        var p256dh = _ref11.p256dh,
            auth = _ref11.auth,
            endpoint = _ref11.endpoint,
            vapidKey = _ref11.vapidKey;
        var body = {
          web: {
            endpoint: endpoint,
            auth: auth,
            p256dh: p256dh
          }
        };

        if (vapidKey !== DEFAULT_VAPID_KEY) {
          body.web.applicationPubKey = vapidKey;
        }

        return body;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      // UpdateRegistration will be called once every week.


      var TOKEN_EXPIRATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

      function getTokenInternal(_x40) {
        return _getTokenInternal.apply(this, arguments);
      }
      /**
       * This method deletes the token from the database, unsubscribes the token from FCM, and unregisters
       * the push subscription if it exists.
       */


      function _getTokenInternal() {
        _getTokenInternal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(messaging) {
          var pushSubscription, subscriptionOptions, tokenDetails;
          return regeneratorRuntime.wrap(function _callee28$(_context28) {
            while (1) {
              switch (_context28.prev = _context28.next) {
                case 0:
                  _context28.next = 2;
                  return getPushSubscription(messaging.swRegistration, messaging.vapidKey);

                case 2:
                  pushSubscription = _context28.sent;
                  subscriptionOptions = {
                    vapidKey: messaging.vapidKey,
                    swScope: messaging.swRegistration.scope,
                    endpoint: pushSubscription.endpoint,
                    auth: arrayToBase64(pushSubscription.getKey('auth')),
                    p256dh: arrayToBase64(pushSubscription.getKey('p256dh'))
                  };
                  _context28.next = 6;
                  return dbGet(messaging.firebaseDependencies);

                case 6:
                  tokenDetails = _context28.sent;

                  if (tokenDetails) {
                    _context28.next = 11;
                    break;
                  }

                  return _context28.abrupt("return", getNewToken(messaging.firebaseDependencies, subscriptionOptions));

                case 11:
                  if (isTokenValid(tokenDetails.subscriptionOptions, subscriptionOptions)) {
                    _context28.next = 23;
                    break;
                  }

                  _context28.prev = 12;
                  _context28.next = 15;
                  return requestDeleteToken(messaging.firebaseDependencies, tokenDetails.token);

                case 15:
                  _context28.next = 20;
                  break;

                case 17:
                  _context28.prev = 17;
                  _context28.t0 = _context28["catch"](12);
                  // Suppress errors because of #2364
                  console.warn(_context28.t0);

                case 20:
                  return _context28.abrupt("return", getNewToken(messaging.firebaseDependencies, subscriptionOptions));

                case 23:
                  if (!(Date.now() >= tokenDetails.createTime + TOKEN_EXPIRATION_MS)) {
                    _context28.next = 27;
                    break;
                  }

                  return _context28.abrupt("return", updateToken(messaging, {
                    token: tokenDetails.token,
                    createTime: Date.now(),
                    subscriptionOptions: subscriptionOptions
                  }));

                case 27:
                  return _context28.abrupt("return", tokenDetails.token);

                case 28:
                case "end":
                  return _context28.stop();
              }
            }
          }, _callee28, null, [[12, 17]]);
        }));
        return _getTokenInternal.apply(this, arguments);
      }

      function deleteTokenInternal(_x41) {
        return _deleteTokenInternal.apply(this, arguments);
      }

      function _deleteTokenInternal() {
        _deleteTokenInternal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29(messaging) {
          var tokenDetails, pushSubscription;
          return regeneratorRuntime.wrap(function _callee29$(_context29) {
            while (1) {
              switch (_context29.prev = _context29.next) {
                case 0:
                  _context29.next = 2;
                  return dbGet(messaging.firebaseDependencies);

                case 2:
                  tokenDetails = _context29.sent;

                  if (!tokenDetails) {
                    _context29.next = 8;
                    break;
                  }

                  _context29.next = 6;
                  return requestDeleteToken(messaging.firebaseDependencies, tokenDetails.token);

                case 6:
                  _context29.next = 8;
                  return dbRemove(messaging.firebaseDependencies);

                case 8:
                  _context29.next = 10;
                  return messaging.swRegistration.pushManager.getSubscription();

                case 10:
                  pushSubscription = _context29.sent;

                  if (!pushSubscription) {
                    _context29.next = 13;
                    break;
                  }

                  return _context29.abrupt("return", pushSubscription.unsubscribe());

                case 13:
                  return _context29.abrupt("return", true);

                case 14:
                case "end":
                  return _context29.stop();
              }
            }
          }, _callee29);
        }));
        return _deleteTokenInternal.apply(this, arguments);
      }

      function updateToken(_x42, _x43) {
        return _updateToken.apply(this, arguments);
      }

      function _updateToken() {
        _updateToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30(messaging, tokenDetails) {
          var updatedToken, updatedTokenDetails;
          return regeneratorRuntime.wrap(function _callee30$(_context30) {
            while (1) {
              switch (_context30.prev = _context30.next) {
                case 0:
                  _context30.prev = 0;
                  _context30.next = 3;
                  return requestUpdateToken(messaging.firebaseDependencies, tokenDetails);

                case 3:
                  updatedToken = _context30.sent;
                  updatedTokenDetails = Object.assign(Object.assign({}, tokenDetails), {
                    token: updatedToken,
                    createTime: Date.now()
                  });
                  _context30.next = 7;
                  return dbSet(messaging.firebaseDependencies, updatedTokenDetails);

                case 7:
                  return _context30.abrupt("return", updatedToken);

                case 10:
                  _context30.prev = 10;
                  _context30.t0 = _context30["catch"](0);
                  _context30.next = 14;
                  return deleteTokenInternal(messaging);

                case 14:
                  throw _context30.t0;

                case 15:
                case "end":
                  return _context30.stop();
              }
            }
          }, _callee30, null, [[0, 10]]);
        }));
        return _updateToken.apply(this, arguments);
      }

      function getNewToken(_x44, _x45) {
        return _getNewToken.apply(this, arguments);
      }
      /**
       * Gets a PushSubscription for the current user.
       */


      function _getNewToken() {
        _getNewToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31(firebaseDependencies, subscriptionOptions) {
          var token, tokenDetails;
          return regeneratorRuntime.wrap(function _callee31$(_context31) {
            while (1) {
              switch (_context31.prev = _context31.next) {
                case 0:
                  _context31.next = 2;
                  return requestGetToken(firebaseDependencies, subscriptionOptions);

                case 2:
                  token = _context31.sent;
                  tokenDetails = {
                    token: token,
                    createTime: Date.now(),
                    subscriptionOptions: subscriptionOptions
                  };
                  _context31.next = 6;
                  return dbSet(firebaseDependencies, tokenDetails);

                case 6:
                  return _context31.abrupt("return", tokenDetails.token);

                case 7:
                case "end":
                  return _context31.stop();
              }
            }
          }, _callee31);
        }));
        return _getNewToken.apply(this, arguments);
      }

      function getPushSubscription(_x46, _x47) {
        return _getPushSubscription.apply(this, arguments);
      }
      /**
       * Checks if the saved tokenDetails object matches the configuration provided.
       */


      function _getPushSubscription() {
        _getPushSubscription = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32(swRegistration, vapidKey) {
          var subscription;
          return regeneratorRuntime.wrap(function _callee32$(_context32) {
            while (1) {
              switch (_context32.prev = _context32.next) {
                case 0:
                  _context32.next = 2;
                  return swRegistration.pushManager.getSubscription();

                case 2:
                  subscription = _context32.sent;

                  if (!subscription) {
                    _context32.next = 5;
                    break;
                  }

                  return _context32.abrupt("return", subscription);

                case 5:
                  return _context32.abrupt("return", swRegistration.pushManager.subscribe({
                    userVisibleOnly: true,
                    // Chrome <= 75 doesn't support base64-encoded VAPID key. For backward compatibility, VAPID key
                    // submitted to pushManager#subscribe must be of type Uint8Array.
                    applicationServerKey: base64ToArray(vapidKey)
                  }));

                case 6:
                case "end":
                  return _context32.stop();
              }
            }
          }, _callee32);
        }));
        return _getPushSubscription.apply(this, arguments);
      }

      function isTokenValid(dbOptions, currentOptions) {
        var isVapidKeyEqual = currentOptions.vapidKey === dbOptions.vapidKey;
        var isEndpointEqual = currentOptions.endpoint === dbOptions.endpoint;
        var isAuthEqual = currentOptions.auth === dbOptions.auth;
        var isP256dhEqual = currentOptions.p256dh === dbOptions.p256dh;
        return isVapidKeyEqual && isEndpointEqual && isAuthEqual && isP256dhEqual;
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function externalizePayload(internalPayload) {
        var payload = {
          from: internalPayload.from,
          // eslint-disable-next-line camelcase
          collapseKey: internalPayload.collapse_key,
          // eslint-disable-next-line camelcase
          messageId: internalPayload.fcm_message_id
        };
        propagateNotificationPayload(payload, internalPayload);
        propagateDataPayload(payload, internalPayload);
        propagateFcmOptions(payload, internalPayload);
        return payload;
      }

      function propagateNotificationPayload(payload, messagePayloadInternal) {
        if (!messagePayloadInternal.notification) {
          return;
        }

        payload.notification = {};
        var title = messagePayloadInternal.notification.title;

        if (!!title) {
          payload.notification.title = title;
        }

        var body = messagePayloadInternal.notification.body;

        if (!!body) {
          payload.notification.body = body;
        }

        var image = messagePayloadInternal.notification.image;

        if (!!image) {
          payload.notification.image = image;
        }
      }

      function propagateDataPayload(payload, messagePayloadInternal) {
        if (!messagePayloadInternal.data) {
          return;
        }

        payload.data = messagePayloadInternal.data;
      }

      function propagateFcmOptions(payload, messagePayloadInternal) {
        if (!messagePayloadInternal.fcmOptions) {
          return;
        }

        payload.fcmOptions = {};
        var link = messagePayloadInternal.fcmOptions.link;

        if (!!link) {
          payload.fcmOptions.link = link;
        } // eslint-disable-next-line camelcase


        var analyticsLabel = messagePayloadInternal.fcmOptions.analytics_label;

        if (!!analyticsLabel) {
          payload.fcmOptions.analyticsLabel = analyticsLabel;
        }
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function isConsoleMessage(data) {
        // This message has a campaign ID, meaning it was sent using the Firebase Console.
        return typeof data === 'object' && !!data && CONSOLE_CAMPAIGN_ID in data;
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      _mergeStrings('hts/frbslgigp.ogepscmv/ieo/eaylg', 'tp:/ieaeogn-agolai.o/1frlglgc/o');

      _mergeStrings('AzSCbw63g1R0nCw85jG8', 'Iaya3yLKwmgvh7cF0q4');

      function _mergeStrings(s1, s2) {
        var resultArray = [];

        for (var i = 0; i < s1.length; i++) {
          resultArray.push(s1.charAt(i));

          if (i < s2.length) {
            resultArray.push(s2.charAt(i));
          }
        }

        return resultArray.join('');
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function extractAppConfig(app) {
        if (!app || !app.options) {
          throw getMissingValueError('App Configuration Object');
        }

        if (!app.name) {
          throw getMissingValueError('App Name');
        } // Required app config keys


        var configKeys = ['projectId', 'apiKey', 'appId', 'messagingSenderId'];
        var options = app.options;

        for (var _i2 = 0, _configKeys2 = configKeys; _i2 < _configKeys2.length; _i2++) {
          var keyName = _configKeys2[_i2];

          if (!options[keyName]) {
            throw getMissingValueError(keyName);
          }
        }

        return {
          appName: app.name,
          projectId: options.projectId,
          apiKey: options.apiKey,
          appId: options.appId,
          senderId: options.messagingSenderId
        };
      }

      function getMissingValueError(valueName) {
        return ERROR_FACTORY.create("missing-app-config-values"
        /* MISSING_APP_CONFIG_VALUES */
        , {
          valueName: valueName
        });
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var MessagingService = /*#__PURE__*/function () {
        function MessagingService(app, installations, analyticsProvider) {
          _classCallCheck(this, MessagingService);

          // logging is only done with end user consent. Default to false.
          this.deliveryMetricsExportedToBigQueryEnabled = false;
          this.onBackgroundMessageHandler = null;
          this.onMessageHandler = null;
          this.logEvents = [];
          this.isLogServiceStarted = false;
          var appConfig = extractAppConfig(app);
          this.firebaseDependencies = {
            app: app,
            appConfig: appConfig,
            installations: installations,
            analyticsProvider: analyticsProvider
          };
        }

        _createClass(MessagingService, [{
          key: "_delete",
          value: function _delete() {
            return Promise.resolve();
          }
        }]);

        return MessagingService;
      }();
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function registerDefaultSw(_x48) {
        return _registerDefaultSw.apply(this, arguments);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function _registerDefaultSw() {
        _registerDefaultSw = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee33(messaging) {
          return regeneratorRuntime.wrap(function _callee33$(_context33) {
            while (1) {
              switch (_context33.prev = _context33.next) {
                case 0:
                  _context33.prev = 0;
                  _context33.next = 3;
                  return navigator.serviceWorker.register(DEFAULT_SW_PATH, {
                    scope: DEFAULT_SW_SCOPE
                  });

                case 3:
                  messaging.swRegistration = _context33.sent;
                  // The timing when browser updates sw when sw has an update is unreliable from experiment. It
                  // leads to version conflict when the SDK upgrades to a newer version in the main page, but sw
                  // is stuck with the old version. For example,
                  // https://github.com/firebase/firebase-js-sdk/issues/2590 The following line reliably updates
                  // sw if there was an update.
                  messaging.swRegistration.update()["catch"](function () {
                    /* it is non blocking and we don't care if it failed */
                  });
                  _context33.next = 10;
                  break;

                case 7:
                  _context33.prev = 7;
                  _context33.t0 = _context33["catch"](0);
                  throw ERROR_FACTORY.create("failed-service-worker-registration"
                  /* FAILED_DEFAULT_REGISTRATION */
                  , {
                    browserErrorMessage: _context33.t0.message
                  });

                case 10:
                case "end":
                  return _context33.stop();
              }
            }
          }, _callee33, null, [[0, 7]]);
        }));
        return _registerDefaultSw.apply(this, arguments);
      }

      function updateSwReg(_x49, _x50) {
        return _updateSwReg.apply(this, arguments);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function _updateSwReg() {
        _updateSwReg = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee34(messaging, swRegistration) {
          return regeneratorRuntime.wrap(function _callee34$(_context34) {
            while (1) {
              switch (_context34.prev = _context34.next) {
                case 0:
                  if (!(!swRegistration && !messaging.swRegistration)) {
                    _context34.next = 3;
                    break;
                  }

                  _context34.next = 3;
                  return registerDefaultSw(messaging);

                case 3:
                  if (!(!swRegistration && !!messaging.swRegistration)) {
                    _context34.next = 5;
                    break;
                  }

                  return _context34.abrupt("return");

                case 5:
                  if (swRegistration instanceof ServiceWorkerRegistration) {
                    _context34.next = 7;
                    break;
                  }

                  throw ERROR_FACTORY.create("invalid-sw-registration"
                  /* INVALID_SW_REGISTRATION */
                  );

                case 7:
                  messaging.swRegistration = swRegistration;

                case 8:
                case "end":
                  return _context34.stop();
              }
            }
          }, _callee34);
        }));
        return _updateSwReg.apply(this, arguments);
      }

      function updateVapidKey(_x51, _x52) {
        return _updateVapidKey.apply(this, arguments);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function _updateVapidKey() {
        _updateVapidKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee35(messaging, vapidKey) {
          return regeneratorRuntime.wrap(function _callee35$(_context35) {
            while (1) {
              switch (_context35.prev = _context35.next) {
                case 0:
                  if (!!vapidKey) {
                    messaging.vapidKey = vapidKey;
                  } else if (!messaging.vapidKey) {
                    messaging.vapidKey = DEFAULT_VAPID_KEY;
                  }

                case 1:
                case "end":
                  return _context35.stop();
              }
            }
          }, _callee35);
        }));
        return _updateVapidKey.apply(this, arguments);
      }

      function getToken$1(_x53, _x54) {
        return _getToken$.apply(this, arguments);
      }
      /**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function _getToken$() {
        _getToken$ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee36(messaging, options) {
          return regeneratorRuntime.wrap(function _callee36$(_context36) {
            while (1) {
              switch (_context36.prev = _context36.next) {
                case 0:
                  if (navigator) {
                    _context36.next = 2;
                    break;
                  }

                  throw ERROR_FACTORY.create("only-available-in-window"
                  /* AVAILABLE_IN_WINDOW */
                  );

                case 2:
                  if (!(Notification.permission === 'default')) {
                    _context36.next = 5;
                    break;
                  }

                  _context36.next = 5;
                  return Notification.requestPermission();

                case 5:
                  if (!(Notification.permission !== 'granted')) {
                    _context36.next = 7;
                    break;
                  }

                  throw ERROR_FACTORY.create("permission-blocked"
                  /* PERMISSION_BLOCKED */
                  );

                case 7:
                  _context36.next = 9;
                  return updateVapidKey(messaging, options === null || options === void 0 ? void 0 : options.vapidKey);

                case 9:
                  _context36.next = 11;
                  return updateSwReg(messaging, options === null || options === void 0 ? void 0 : options.serviceWorkerRegistration);

                case 11:
                  return _context36.abrupt("return", getTokenInternal(messaging));

                case 12:
                case "end":
                  return _context36.stop();
              }
            }
          }, _callee36);
        }));
        return _getToken$.apply(this, arguments);
      }

      function logToScion(_x55, _x56, _x57) {
        return _logToScion.apply(this, arguments);
      }

      function _logToScion() {
        _logToScion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee37(messaging, messageType, data) {
          var eventType, analytics;
          return regeneratorRuntime.wrap(function _callee37$(_context37) {
            while (1) {
              switch (_context37.prev = _context37.next) {
                case 0:
                  eventType = getEventType(messageType);
                  _context37.next = 3;
                  return messaging.firebaseDependencies.analyticsProvider.get();

                case 3:
                  analytics = _context37.sent;
                  analytics.logEvent(eventType, {
                    /* eslint-disable camelcase */
                    message_id: data[CONSOLE_CAMPAIGN_ID],
                    message_name: data[CONSOLE_CAMPAIGN_NAME],
                    message_time: data[CONSOLE_CAMPAIGN_TIME],
                    message_device_time: Math.floor(Date.now() / 1000)
                    /* eslint-enable camelcase */

                  });

                case 5:
                case "end":
                  return _context37.stop();
              }
            }
          }, _callee37);
        }));
        return _logToScion.apply(this, arguments);
      }

      function getEventType(messageType) {
        switch (messageType) {
          case MessageType.NOTIFICATION_CLICKED:
            return 'notification_open';

          case MessageType.PUSH_RECEIVED:
            return 'notification_foreground';

          default:
            throw new Error();
        }
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function messageEventListener(_x58, _x59) {
        return _messageEventListener.apply(this, arguments);
      }

      function _messageEventListener() {
        _messageEventListener = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee38(messaging, event) {
          var internalPayload, dataPayload;
          return regeneratorRuntime.wrap(function _callee38$(_context38) {
            while (1) {
              switch (_context38.prev = _context38.next) {
                case 0:
                  internalPayload = event.data;

                  if (internalPayload.isFirebaseMessaging) {
                    _context38.next = 3;
                    break;
                  }

                  return _context38.abrupt("return");

                case 3:
                  if (messaging.onMessageHandler && internalPayload.messageType === MessageType.PUSH_RECEIVED) {
                    if (typeof messaging.onMessageHandler === 'function') {
                      messaging.onMessageHandler(externalizePayload(internalPayload));
                    } else {
                      messaging.onMessageHandler.next(externalizePayload(internalPayload));
                    }
                  } // Log to Scion if applicable


                  dataPayload = internalPayload.data;

                  if (!(isConsoleMessage(dataPayload) && dataPayload[CONSOLE_CAMPAIGN_ANALYTICS_ENABLED] === '1')) {
                    _context38.next = 8;
                    break;
                  }

                  _context38.next = 8;
                  return logToScion(messaging, internalPayload.messageType, dataPayload);

                case 8:
                case "end":
                  return _context38.stop();
              }
            }
          }, _callee38);
        }));
        return _messageEventListener.apply(this, arguments);
      }

      var name = "@firebase/messaging";
      var version = "0.9.2";
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      var WindowMessagingFactory = function WindowMessagingFactory(container) {
        var messaging = new MessagingService(container.getProvider('app').getImmediate(), container.getProvider('installations-internal').getImmediate(), container.getProvider('analytics-internal'));
        navigator.serviceWorker.addEventListener('message', function (e) {
          return messageEventListener(messaging, e);
        });
        return messaging;
      };

      var WindowMessagingInternalFactory = function WindowMessagingInternalFactory(container) {
        var messaging = container.getProvider('messaging').getImmediate();
        var messagingInternal = {
          getToken: function getToken(options) {
            return getToken$1(messaging, options);
          }
        };
        return messagingInternal;
      };

      function registerMessagingInWindow() {
        Object(_firebase_app__WEBPACK_IMPORTED_MODULE_4__["_registerComponent"])(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__["Component"]('messaging', WindowMessagingFactory, "PUBLIC"
        /* PUBLIC */
        ));
        Object(_firebase_app__WEBPACK_IMPORTED_MODULE_4__["_registerComponent"])(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__["Component"]('messaging-internal', WindowMessagingInternalFactory, "PRIVATE"
        /* PRIVATE */
        ));
        Object(_firebase_app__WEBPACK_IMPORTED_MODULE_4__["registerVersion"])(name, version); // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation

        Object(_firebase_app__WEBPACK_IMPORTED_MODULE_4__["registerVersion"])(name, version, 'esm2017');
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Checks if all required APIs exist in the browser.
       * @returns a Promise that resolves to a boolean.
       *
       * @public
       */


      function isWindowSupported() {
        return _isWindowSupported.apply(this, arguments);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function _isWindowSupported() {
        _isWindowSupported = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee39() {
          return regeneratorRuntime.wrap(function _callee39$(_context39) {
            while (1) {
              switch (_context39.prev = _context39.next) {
                case 0:
                  _context39.t7 = typeof window !== 'undefined' && Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["isIndexedDBAvailable"])();

                  if (!_context39.t7) {
                    _context39.next = 5;
                    break;
                  }

                  _context39.next = 4;
                  return Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["validateIndexedDBOpenable"])();

                case 4:
                  _context39.t7 = _context39.sent;

                case 5:
                  _context39.t6 = _context39.t7;

                  if (!_context39.t6) {
                    _context39.next = 8;
                    break;
                  }

                  _context39.t6 = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["areCookiesEnabled"])();

                case 8:
                  _context39.t5 = _context39.t6;

                  if (!_context39.t5) {
                    _context39.next = 11;
                    break;
                  }

                  _context39.t5 = 'serviceWorker' in navigator;

                case 11:
                  _context39.t4 = _context39.t5;

                  if (!_context39.t4) {
                    _context39.next = 14;
                    break;
                  }

                  _context39.t4 = 'PushManager' in window;

                case 14:
                  _context39.t3 = _context39.t4;

                  if (!_context39.t3) {
                    _context39.next = 17;
                    break;
                  }

                  _context39.t3 = 'Notification' in window;

                case 17:
                  _context39.t2 = _context39.t3;

                  if (!_context39.t2) {
                    _context39.next = 20;
                    break;
                  }

                  _context39.t2 = 'fetch' in window;

                case 20:
                  _context39.t1 = _context39.t2;

                  if (!_context39.t1) {
                    _context39.next = 23;
                    break;
                  }

                  _context39.t1 = ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification');

                case 23:
                  _context39.t0 = _context39.t1;

                  if (!_context39.t0) {
                    _context39.next = 26;
                    break;
                  }

                  _context39.t0 = PushSubscription.prototype.hasOwnProperty('getKey');

                case 26:
                  return _context39.abrupt("return", _context39.t0);

                case 27:
                case "end":
                  return _context39.stop();
              }
            }
          }, _callee39);
        }));
        return _isWindowSupported.apply(this, arguments);
      }

      function deleteToken$1(_x60) {
        return _deleteToken$.apply(this, arguments);
      }
      /**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      function _deleteToken$() {
        _deleteToken$ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee40(messaging) {
          return regeneratorRuntime.wrap(function _callee40$(_context40) {
            while (1) {
              switch (_context40.prev = _context40.next) {
                case 0:
                  if (navigator) {
                    _context40.next = 2;
                    break;
                  }

                  throw ERROR_FACTORY.create("only-available-in-window"
                  /* AVAILABLE_IN_WINDOW */
                  );

                case 2:
                  if (messaging.swRegistration) {
                    _context40.next = 5;
                    break;
                  }

                  _context40.next = 5;
                  return registerDefaultSw(messaging);

                case 5:
                  return _context40.abrupt("return", deleteTokenInternal(messaging));

                case 6:
                case "end":
                  return _context40.stop();
              }
            }
          }, _callee40);
        }));
        return _deleteToken$.apply(this, arguments);
      }

      function onMessage$1(messaging, nextOrObserver) {
        if (!navigator) {
          throw ERROR_FACTORY.create("only-available-in-window"
          /* AVAILABLE_IN_WINDOW */
          );
        }

        messaging.onMessageHandler = nextOrObserver;
        return function () {
          messaging.onMessageHandler = null;
        };
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Retrieves a Firebase Cloud Messaging instance.
       *
       * @returns The Firebase Cloud Messaging instance associated with the provided firebase app.
       *
       * @public
       */


      function getMessagingInWindow() {
        var app = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(_firebase_app__WEBPACK_IMPORTED_MODULE_4__["getApp"])();
        // Conscious decision to make this async check non-blocking during the messaging instance
        // initialization phase for performance consideration. An error would be thrown latter for
        // developer's information. Developers can then choose to import and call `isSupported` for
        // special handling.
        isWindowSupported().then(function (isSupported) {
          // If `isWindowSupported()` resolved, but returned false.
          if (!isSupported) {
            throw ERROR_FACTORY.create("unsupported-browser"
            /* UNSUPPORTED_BROWSER */
            );
          }
        }, function (_) {
          // If `isWindowSupported()` rejected.
          throw ERROR_FACTORY.create("indexed-db-unsupported"
          /* INDEXED_DB_UNSUPPORTED */
          );
        });
        return Object(_firebase_app__WEBPACK_IMPORTED_MODULE_4__["_getProvider"])(Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["getModularInstance"])(app), 'messaging').getImmediate();
      }
      /**
       * Subscribes the {@link Messaging} instance to push notifications. Returns an Firebase Cloud
       * Messaging registration token that can be used to send push messages to that {@link Messaging}
       * instance.
       *
       * If a notification permission isn't already granted, this method asks the user for permission. The
       * returned promise rejects if the user does not allow the app to show notifications.
       *
       * @param messaging - The {@link Messaging} instance.
       * @param options - Provides an optional vapid key and an optinoal service worker registration
       *
       * @returns The promise resolves with an FCM registration token.
       *
       * @public
       */


      function getToken(_x61, _x62) {
        return _getToken3.apply(this, arguments);
      }
      /**
       * Deletes the registration token associated with this {@link Messaging} instance and unsubscribes
       * the {@link Messaging} instance from the push subscription.
       *
       * @param messaging - The {@link Messaging} instance.
       *
       * @returns The promise resolves when the token has been successfully deleted.
       *
       * @public
       */


      function _getToken3() {
        _getToken3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee41(messaging, options) {
          return regeneratorRuntime.wrap(function _callee41$(_context41) {
            while (1) {
              switch (_context41.prev = _context41.next) {
                case 0:
                  messaging = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["getModularInstance"])(messaging);
                  return _context41.abrupt("return", getToken$1(messaging, options));

                case 2:
                case "end":
                  return _context41.stop();
              }
            }
          }, _callee41);
        }));
        return _getToken3.apply(this, arguments);
      }

      function deleteToken(messaging) {
        messaging = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["getModularInstance"])(messaging);
        return deleteToken$1(messaging);
      }
      /**
       * When a push message is received and the user is currently on a page for your origin, the
       * message is passed to the page and an `onMessage()` event is dispatched with the payload of
       * the push message.
       *
       *
       * @param messaging - The {@link Messaging} instance.
       * @param nextOrObserver - This function, or observer object with `next` defined,
       *     is called when a message is received and the user is currently viewing your page.
       * @returns To stop listening for messages execute this returned function.
       *
       * @public
       */


      function onMessage(messaging, nextOrObserver) {
        messaging = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_3__["getModularInstance"])(messaging);
        return onMessage$1(messaging, nextOrObserver);
      }
      /**
       * Firebase Cloud Messaging
       *
       * @packageDocumentation
       */


      registerMessagingInWindow(); //# sourceMappingURL=index.esm2017.js.map

      /***/
    },

    /***/
    "./node_modules/firebase/messaging/dist/index.esm.js":
    /*!***********************************************************!*\
      !*** ./node_modules/firebase/messaging/dist/index.esm.js ***!
      \***********************************************************/

    /*! exports provided: deleteToken, getMessaging, getToken, isSupported, onMessage */

    /***/
    function node_modulesFirebaseMessagingDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _firebase_messaging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @firebase/messaging */
      "./node_modules/@firebase/messaging/dist/index.esm2017.js");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "deleteToken", function () {
        return _firebase_messaging__WEBPACK_IMPORTED_MODULE_0__["deleteToken"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getMessaging", function () {
        return _firebase_messaging__WEBPACK_IMPORTED_MODULE_0__["getMessaging"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "getToken", function () {
        return _firebase_messaging__WEBPACK_IMPORTED_MODULE_0__["getToken"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "isSupported", function () {
        return _firebase_messaging__WEBPACK_IMPORTED_MODULE_0__["isSupported"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "onMessage", function () {
        return _firebase_messaging__WEBPACK_IMPORTED_MODULE_0__["onMessage"];
      }); //# sourceMappingURL=index.esm.js.map

      /***/

    },

    /***/
    "./node_modules/idb/build/idb.js":
    /*!***************************************!*\
      !*** ./node_modules/idb/build/idb.js ***!
      \***************************************/

    /*! no static exports found */

    /***/
    function node_modulesIdbBuildIdbJs(module, exports, __webpack_require__) {
      (function (global, factory) {
        true ? factory(exports) : undefined;
      })(this, function (exports) {
        'use strict';

        function toArray(arr) {
          return Array.prototype.slice.call(arr);
        }

        function promisifyRequest(request) {
          return new Promise(function (resolve, reject) {
            request.onsuccess = function () {
              resolve(request.result);
            };

            request.onerror = function () {
              reject(request.error);
            };
          });
        }

        function promisifyRequestCall(obj, method, args) {
          var request;
          var p = new Promise(function (resolve, reject) {
            request = obj[method].apply(obj, args);
            promisifyRequest(request).then(resolve, reject);
          });
          p.request = request;
          return p;
        }

        function promisifyCursorRequestCall(obj, method, args) {
          var p = promisifyRequestCall(obj, method, args);
          return p.then(function (value) {
            if (!value) return;
            return new Cursor(value, p.request);
          });
        }

        function proxyProperties(ProxyClass, targetProp, properties) {
          properties.forEach(function (prop) {
            Object.defineProperty(ProxyClass.prototype, prop, {
              get: function get() {
                return this[targetProp][prop];
              },
              set: function set(val) {
                this[targetProp][prop] = val;
              }
            });
          });
        }

        function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
          properties.forEach(function (prop) {
            if (!(prop in Constructor.prototype)) return;

            ProxyClass.prototype[prop] = function () {
              return promisifyRequestCall(this[targetProp], prop, arguments);
            };
          });
        }

        function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
          properties.forEach(function (prop) {
            if (!(prop in Constructor.prototype)) return;

            ProxyClass.prototype[prop] = function () {
              return this[targetProp][prop].apply(this[targetProp], arguments);
            };
          });
        }

        function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
          properties.forEach(function (prop) {
            if (!(prop in Constructor.prototype)) return;

            ProxyClass.prototype[prop] = function () {
              return promisifyCursorRequestCall(this[targetProp], prop, arguments);
            };
          });
        }

        function Index(index) {
          this._index = index;
        }

        proxyProperties(Index, '_index', ['name', 'keyPath', 'multiEntry', 'unique']);
        proxyRequestMethods(Index, '_index', IDBIndex, ['get', 'getKey', 'getAll', 'getAllKeys', 'count']);
        proxyCursorRequestMethods(Index, '_index', IDBIndex, ['openCursor', 'openKeyCursor']);

        function Cursor(cursor, request) {
          this._cursor = cursor;
          this._request = request;
        }

        proxyProperties(Cursor, '_cursor', ['direction', 'key', 'primaryKey', 'value']);
        proxyRequestMethods(Cursor, '_cursor', IDBCursor, ['update', 'delete']); // proxy 'next' methods

        ['advance', 'continue', 'continuePrimaryKey'].forEach(function (methodName) {
          if (!(methodName in IDBCursor.prototype)) return;

          Cursor.prototype[methodName] = function () {
            var cursor = this;
            var args = arguments;
            return Promise.resolve().then(function () {
              cursor._cursor[methodName].apply(cursor._cursor, args);

              return promisifyRequest(cursor._request).then(function (value) {
                if (!value) return;
                return new Cursor(value, cursor._request);
              });
            });
          };
        });

        function ObjectStore(store) {
          this._store = store;
        }

        ObjectStore.prototype.createIndex = function () {
          return new Index(this._store.createIndex.apply(this._store, arguments));
        };

        ObjectStore.prototype.index = function () {
          return new Index(this._store.index.apply(this._store, arguments));
        };

        proxyProperties(ObjectStore, '_store', ['name', 'keyPath', 'indexNames', 'autoIncrement']);
        proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, ['put', 'add', 'delete', 'clear', 'get', 'getAll', 'getKey', 'getAllKeys', 'count']);
        proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, ['openCursor', 'openKeyCursor']);
        proxyMethods(ObjectStore, '_store', IDBObjectStore, ['deleteIndex']);

        function Transaction(idbTransaction) {
          this._tx = idbTransaction;
          this.complete = new Promise(function (resolve, reject) {
            idbTransaction.oncomplete = function () {
              resolve();
            };

            idbTransaction.onerror = function () {
              reject(idbTransaction.error);
            };

            idbTransaction.onabort = function () {
              reject(idbTransaction.error);
            };
          });
        }

        Transaction.prototype.objectStore = function () {
          return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
        };

        proxyProperties(Transaction, '_tx', ['objectStoreNames', 'mode']);
        proxyMethods(Transaction, '_tx', IDBTransaction, ['abort']);

        function UpgradeDB(db, oldVersion, transaction) {
          this._db = db;
          this.oldVersion = oldVersion;
          this.transaction = new Transaction(transaction);
        }

        UpgradeDB.prototype.createObjectStore = function () {
          return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
        };

        proxyProperties(UpgradeDB, '_db', ['name', 'version', 'objectStoreNames']);
        proxyMethods(UpgradeDB, '_db', IDBDatabase, ['deleteObjectStore', 'close']);

        function DB(db) {
          this._db = db;
        }

        DB.prototype.transaction = function () {
          return new Transaction(this._db.transaction.apply(this._db, arguments));
        };

        proxyProperties(DB, '_db', ['name', 'version', 'objectStoreNames']);
        proxyMethods(DB, '_db', IDBDatabase, ['close']); // Add cursor iterators
        // TODO: remove this once browsers do the right thing with promises

        ['openCursor', 'openKeyCursor'].forEach(function (funcName) {
          [ObjectStore, Index].forEach(function (Constructor) {
            // Don't create iterateKeyCursor if openKeyCursor doesn't exist.
            if (!(funcName in Constructor.prototype)) return;

            Constructor.prototype[funcName.replace('open', 'iterate')] = function () {
              var args = toArray(arguments);
              var callback = args[args.length - 1];
              var nativeObject = this._store || this._index;
              var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));

              request.onsuccess = function () {
                callback(request.result);
              };
            };
          });
        }); // polyfill getAll

        [Index, ObjectStore].forEach(function (Constructor) {
          if (Constructor.prototype.getAll) return;

          Constructor.prototype.getAll = function (query, count) {
            var instance = this;
            var items = [];
            return new Promise(function (resolve) {
              instance.iterateCursor(query, function (cursor) {
                if (!cursor) {
                  resolve(items);
                  return;
                }

                items.push(cursor.value);

                if (count !== undefined && items.length == count) {
                  resolve(items);
                  return;
                }

                cursor["continue"]();
              });
            });
          };
        });

        function openDb(name, version, upgradeCallback) {
          var p = promisifyRequestCall(indexedDB, 'open', [name, version]);
          var request = p.request;

          if (request) {
            request.onupgradeneeded = function (event) {
              if (upgradeCallback) {
                upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
              }
            };
          }

          return p.then(function (db) {
            return new DB(db);
          });
        }

        function deleteDb(name) {
          return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);
        }

        exports.openDb = openDb;
        exports.deleteDb = deleteDb;
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
      });
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/accounting/accounting.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/admin-reporting/accounting/accounting.component.ts ***!
      \****************************************************************************/

    /*! exports provided: AccountingComponent */

    /***/
    function srcAppModulesAdminReportingAccountingAccountingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountingComponent", function () {
        return AccountingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_shared_service_admin_stats_accounting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/accounting.service */
      "./src/app/shared/service/admin-stats/accounting.service.ts");
      /* harmony import */


      var src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modules/tag-management/tag-management.service */
      "./src/app/modules/tag-management/tag-management.service.ts");
      /* harmony import */


      var src_app_modules_company_management_company_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modules/company-management/company-management.service */
      "./src/app/modules/company-management/company-management.service.ts");
      /* harmony import */


      var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */
      "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["expandableTable"];

      function AccountingComponent_ng_template_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var report_r8 = ctx.$implicit;
          var i_r9 = ctx.index;

          var row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().row;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", report_r8, " : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 2, row_r5.everyrevenue[i_r9], "USD"));
        }
      }

      function AccountingComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AccountingComponent_ng_template_4_div_1_Template, 9, 5, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Total : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "strong", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r5 = ctx.row;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", row_r5.reporting);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 2, row_r5.total, "USD"));
        }
      }

      function AccountingComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountingComponent_ng_template_6_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var row_r11 = ctx.row;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r13.toggleExpandRow(row_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r12 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("datatable-icon-right", !expanded_r12)("datatable-icon-down", expanded_r12);
        }
      }

      function AccountingComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher Name ");
        }
      }

      function AccountingComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r16 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r16);
        }
      }

      var AccountingComponent = /*#__PURE__*/function () {
        function AccountingComponent(cdr, userService, accountingService, tagService, companyService) {
          _classCallCheck(this, AccountingComponent);

          this.cdr = cdr;
          this.userService = userService;
          this.accountingService = accountingService;
          this.tagService = tagService;
          this.companyService = companyService;
          this.rows = [];
          this.loadingIndicator = true;
          this.range = {
            startDate: '',
            endDate: ''
          };
          this.allRubiStats = [];
          this.allLyonStats = [];
          this.allPerionStats = [];
          this.allSystem1Stats = [];
          this.allVerizonStats = [];
          this.allSolexBCStats = [];
          this.allApptitudeStats = [];
          this.tagList = [];
          this.tempStatData = [];
          this.tempUpdateStatData = [];
          this.reportTypeData = [];
          this.selectedCompany = this.getSelectedCompanyStored();
        }

        _createClass(AccountingComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee42() {
              var result, _i3, _result, resultData;

              return regeneratorRuntime.wrap(function _callee42$(_context42) {
                while (1) {
                  switch (_context42.prev = _context42.next) {
                    case 0:
                      _context42.next = 2;
                      return this.getCompanyTags(this.selectedCompany);

                    case 2:
                      this.tagList = _context42.sent;
                      _context42.next = 5;
                      return this.getReportingProviderList();

                    case 5:
                      this.reportTypeData = _context42.sent;
                      this.rows = [];
                      this.tempStatData = [];
                      _context42.next = 10;
                      return this.getPerionStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 10:
                      this.PerionData = _context42.sent;
                      _context42.next = 13;
                      return this.getLyonStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 13:
                      this.LyonData = _context42.sent;
                      _context42.next = 16;
                      return this.getRubiStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 16:
                      this.RubiData = _context42.sent;
                      _context42.next = 19;
                      return this.getApptitudeStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 19:
                      this.ApptitudeData = _context42.sent;
                      _context42.next = 22;
                      return this.getSolexBCStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 22:
                      this.SolexBCData = _context42.sent;
                      _context42.next = 25;
                      return this.getVerizonDirectStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 25:
                      this.VerizonData = _context42.sent;
                      _context42.next = 28;
                      return this.getSystem1Stats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 28:
                      this.System1Data = _context42.sent;

                      if (this.reportTypeData.includes('perion')) {
                        this.tempStatData = this.tempStatData.concat(this.PerionData);
                      }

                      if (this.reportTypeData.includes('lyons')) {
                        this.tempStatData = this.tempStatData.concat(this.LyonData);
                      }

                      if (this.reportTypeData.includes('rubi')) {
                        this.tempStatData = this.tempStatData.concat(this.RubiData);
                      }

                      if (this.reportTypeData.includes('apptitude')) {
                        this.tempStatData = this.tempStatData.concat(this.ApptitudeData);
                      }

                      if (this.reportTypeData.includes('solex-bc')) {
                        this.tempStatData = this.tempStatData.concat(this.SolexBCData);
                      }

                      if (this.reportTypeData.includes('verizon-direct')) {
                        this.tempStatData = this.tempStatData.concat(this.VerizonData);
                      }

                      if (this.reportTypeData.includes('verizon-direct')) {
                        this.tempStatData = this.tempStatData.concat(this.System1Data);
                      }

                      result = [];
                      this.tempStatData.forEach(function (object) {
                        var existing = result.filter(function (item) {
                          return item.publisher == object.publisher;
                        });

                        if (existing.length) {
                          var existingIndex = result.indexOf(existing[0]);
                          result[existingIndex].reporting = result[existingIndex].reporting.concat(object.reporting);
                          result[existingIndex].everyrevenue = result[existingIndex].everyrevenue.concat(String(object.revenue));
                          result[existingIndex].total = result[existingIndex].total + object.revenue;
                        } else {
                          if (typeof object.reporting == 'string') object.reporting = [object.reporting];

                          if (typeof object.revenue == 'number') {
                            object.everyrevenue = [String(object.revenue)];
                            object.total = object.revenue;
                          }

                          result.push(object);
                        }
                      });

                      for (_i3 = 0, _result = result; _i3 < _result.length; _i3++) {
                        resultData = _result[_i3];
                        resultData.detailHeight = (resultData.reporting.length + 1) * 30;
                      }

                      this.rows = result;
                      this.loadingIndicator = false;
                      this.cdr.detectChanges();

                    case 42:
                    case "end":
                      return _context42.stop();
                  }
                }
              }, _callee42, this);
            }));
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyStored",
          value: function getSelectedCompanyStored() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }, {
          key: "updateReportingFiltering",
          value: function updateReportingFiltering(range) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee43() {
              var perionUpData, lyonsUpData, rubiUpData, apptitudeUpData, solexBCUpData, verizonUpData, system1UpData, result, _i4, _result2, resultData;

              return regeneratorRuntime.wrap(function _callee43$(_context43) {
                while (1) {
                  switch (_context43.prev = _context43.next) {
                    case 0:
                      this.loadingIndicator = true;
                      this.range = range;
                      this.rows = [];
                      this.tempUpdateStatData = [];
                      perionUpData = [];
                      lyonsUpData = [];
                      rubiUpData = [];
                      apptitudeUpData = [];
                      solexBCUpData = [];
                      verizonUpData = [];
                      system1UpData = [];
                      _context43.next = 13;
                      return this.getPerionStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 13:
                      perionUpData = _context43.sent;
                      _context43.next = 16;
                      return this.getLyonStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 16:
                      lyonsUpData = _context43.sent;
                      _context43.next = 19;
                      return this.getRubiStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 19:
                      rubiUpData = _context43.sent;
                      _context43.next = 22;
                      return this.getApptitudeStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 22:
                      apptitudeUpData = _context43.sent;
                      _context43.next = 25;
                      return this.getSolexBCStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 25:
                      solexBCUpData = _context43.sent;
                      _context43.next = 28;
                      return this.getVerizonDirectStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 28:
                      verizonUpData = _context43.sent;
                      _context43.next = 31;
                      return this.getSystem1Stats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 31:
                      system1UpData = _context43.sent;

                      if (this.reportTypeData.includes('perion')) {
                        this.tempUpdateStatData = this.tempUpdateStatData.concat(perionUpData);
                      }

                      if (this.reportTypeData.includes('lyons')) {
                        this.tempUpdateStatData = this.tempUpdateStatData.concat(lyonsUpData);
                      }

                      if (this.reportTypeData.includes('rubi')) {
                        this.tempUpdateStatData = this.tempUpdateStatData.concat(rubiUpData);
                      }

                      if (this.reportTypeData.includes('apptitude')) {
                        this.tempUpdateStatData = this.tempUpdateStatData.concat(apptitudeUpData);
                      }

                      if (this.reportTypeData.includes('solex-bc')) {
                        this.tempUpdateStatData = this.tempUpdateStatData.concat(solexBCUpData);
                      }

                      if (this.reportTypeData.includes('verizon-direct')) {
                        this.tempUpdateStatData = this.tempUpdateStatData.concat(verizonUpData);
                      }

                      if (this.reportTypeData.includes('system1')) {
                        this.tempUpdateStatData = this.tempUpdateStatData.concat(system1UpData);
                      }

                      result = [];
                      this.tempUpdateStatData.forEach(function (object) {
                        var existing = result.filter(function (item) {
                          return item.publisher == object.publisher;
                        });

                        if (existing.length) {
                          var existingIndex = result.indexOf(existing[0]);
                          result[existingIndex].reporting = result[existingIndex].reporting.concat(object.reporting);
                          result[existingIndex].everyrevenue = result[existingIndex].everyrevenue.concat(String(object.revenue));
                          result[existingIndex].total = result[existingIndex].total + object.revenue;
                        } else {
                          if (typeof object.reporting == 'string') object.reporting = [object.reporting];

                          if (typeof object.revenue == 'number') {
                            object.everyrevenue = [String(object.revenue)];
                            object.total = object.revenue;
                          }

                          result.push(object);
                        }
                      });

                      for (_i4 = 0, _result2 = result; _i4 < _result2.length; _i4++) {
                        resultData = _result2[_i4];
                        resultData.detailHeight = (resultData.reporting.length + 1) * 30;
                      }

                      this.rows = result;
                      this.loadingIndicator = false;
                      this.cdr.detectChanges();

                    case 45:
                    case "end":
                      return _context43.stop();
                  }
                }
              }, _callee43, this);
            }));
          } //get Report Providers in Current Company

        }, {
          key: "getReportingProviderList",
          value: function getReportingProviderList() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee44() {
              var res, providerList;
              return regeneratorRuntime.wrap(function _callee44$(_context44) {
                while (1) {
                  switch (_context44.prev = _context44.next) {
                    case 0:
                      if (!this.selectedCompany) {
                        _context44.next = 14;
                        break;
                      }

                      _context44.prev = 1;
                      _context44.next = 4;
                      return this.companyService.getReportCompany(this.selectedCompany.split('/')[1]).toPromise();

                    case 4:
                      res = _context44.sent;
                      providerList = [];
                      res.reportingProviders.map(function (report) {
                        providerList.push(report.reportingProvider);
                      });
                      return _context44.abrupt("return", providerList);

                    case 10:
                      _context44.prev = 10;
                      _context44.t0 = _context44["catch"](1);
                      return _context44.abrupt("return", _context44.t0);

                    case 13:
                      ;

                    case 14:
                    case "end":
                      return _context44.stop();
                  }
                }
              }, _callee44, this, [[1, 10]]);
            }));
          }
        }, {
          key: "getRubiStats",
          value: function getRubiStats(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee45() {
              var response, _iterator2, _step2, tagL, _iterator3, _step3, tagSub, rubiStats, helperRubiSummary, groupRubiData;

              return regeneratorRuntime.wrap(function _callee45$(_context45) {
                while (1) {
                  switch (_context45.prev = _context45.next) {
                    case 0:
                      _context45.next = 2;
                      return this.accountingService.getRubiStats(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context45.sent;
                      this.allRubiStats = response.stats;
                      _iterator2 = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                          tagL = _step2.value;

                          if (tagL.tag.advertiser == "rubi") {
                            _iterator3 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                                tagSub = _step3.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allRubiStats.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat.reporting = "Rubi";
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allRubiStats.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_1.reporting = "Rubi";
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allRubiStats.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_2.reporting = "Rubi";
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allRubiStats.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_3.reporting = "Rubi";
                                    }
                                  });
                                }
                              }
                            } catch (err) {
                              _iterator3.e(err);
                            } finally {
                              _iterator3.f();
                            }
                          }
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }

                      rubiStats = [];
                      helperRubiSummary = {};

                      if (this.allRubiStats.length > 0) {
                        groupRubiData = this.allRubiStats.reduce(function (r, o) {
                          var key = o.publisher;

                          if (!helperRubiSummary[key]) {
                            helperRubiSummary[key] = Object.assign({}, o); // create a copy of o

                            r.push(helperRubiSummary[key]);
                          } else {
                            helperRubiSummary[key].revenue += parseFloat(o.revenue);
                          }

                          return r;
                        }, []);
                        groupRubiData.map(function (rubiOne) {
                          rubiStats.push({
                            publisher: rubiOne.publisher ? rubiOne.publisher : "No Publisher",
                            reporting: rubiOne.reporting ? rubiOne.reporting : "No Reporting",
                            revenue: rubiOne.revenue
                          });
                        });
                      }

                      return _context45.abrupt("return", rubiStats);

                    case 10:
                    case "end":
                      return _context45.stop();
                  }
                }
              }, _callee45, this);
            }));
          }
        }, {
          key: "getSolexBCStats",
          value: function getSolexBCStats(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee46() {
              var response, _iterator4, _step4, tagL, _iterator5, _step5, tagSub, solexBCStats, helperSolexBCSummary, groupSolexBCData;

              return regeneratorRuntime.wrap(function _callee46$(_context46) {
                while (1) {
                  switch (_context46.prev = _context46.next) {
                    case 0:
                      _context46.next = 2;
                      return this.accountingService.getSolexBCStats(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context46.sent;
                      this.allSolexBCStats = response.stats;
                      _iterator4 = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                          tagL = _step4.value;

                          if (tagL.tag.advertiser == "solex-bc") {
                            _iterator5 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                                tagSub = _step5.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allSolexBCStats.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat.reporting = "Solex BC";
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allSolexBCStats.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_1.reporting = "Solex BC";
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allSolexBCStats.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_2.reporting = "Solex BC";
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allSolexBCStats.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_3.reporting = "Solex BC";
                                    }
                                  });
                                }
                              }
                            } catch (err) {
                              _iterator5.e(err);
                            } finally {
                              _iterator5.f();
                            }
                          }
                        }
                      } catch (err) {
                        _iterator4.e(err);
                      } finally {
                        _iterator4.f();
                      }

                      solexBCStats = [];
                      helperSolexBCSummary = {};

                      if (this.allSolexBCStats.length > 0) {
                        groupSolexBCData = this.allSolexBCStats.reduce(function (r, o) {
                          var key = o.publisher;

                          if (!helperSolexBCSummary[key]) {
                            helperSolexBCSummary[key] = Object.assign({}, o); // create a copy of o

                            r.push(helperSolexBCSummary[key]);
                          } else {
                            helperSolexBCSummary[key].revenue += parseFloat(o.revenue);
                          }

                          return r;
                        }, []);
                        groupSolexBCData.map(function (solexbcOne) {
                          solexBCStats.push({
                            publisher: solexbcOne.publisher ? solexbcOne.publisher : "No Publisher",
                            reporting: solexbcOne.reporting ? solexbcOne.reporting : "No Reporting",
                            revenue: solexbcOne.revenue
                          });
                        });
                      }

                      return _context46.abrupt("return", solexBCStats);

                    case 10:
                    case "end":
                      return _context46.stop();
                  }
                }
              }, _callee46, this);
            }));
          }
        }, {
          key: "getVerizonDirectStats",
          value: function getVerizonDirectStats(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee47() {
              var response, _iterator6, _step6, tagL, _iterator7, _step7, tagSub, verizonStats, helperVerizonSummary, groupVerizonData;

              return regeneratorRuntime.wrap(function _callee47$(_context47) {
                while (1) {
                  switch (_context47.prev = _context47.next) {
                    case 0:
                      _context47.next = 2;
                      return this.accountingService.getVerizonDirectStats(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context47.sent;
                      this.allVerizonStats = response.stats;
                      _iterator6 = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                          tagL = _step6.value;

                          if (tagL.tag.advertiser == "verizon-direct") {
                            _iterator7 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                                tagSub = _step7.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allVerizonStats.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat.reporting = "Verizon Direct";
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allVerizonStats.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_1.reporting = "Verizon Direct";
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allVerizonStats.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_2.reporting = "Verizon Direct";
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allVerizonStats.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_3.reporting = "Verizon Direct";
                                    }
                                  });
                                }
                              }
                            } catch (err) {
                              _iterator7.e(err);
                            } finally {
                              _iterator7.f();
                            }
                          }
                        }
                      } catch (err) {
                        _iterator6.e(err);
                      } finally {
                        _iterator6.f();
                      }

                      verizonStats = [];
                      helperVerizonSummary = {};

                      if (this.allVerizonStats.length > 0) {
                        groupVerizonData = this.allVerizonStats.reduce(function (r, o) {
                          var key = o.publisher;

                          if (!helperVerizonSummary[key]) {
                            helperVerizonSummary[key] = Object.assign({}, o); // create a copy of o

                            r.push(helperVerizonSummary[key]);
                          } else {
                            helperVerizonSummary[key].revenue += parseFloat(o.revenue);
                          }

                          return r;
                        }, []);
                        groupVerizonData.map(function (verizonOne) {
                          verizonStats.push({
                            publisher: verizonOne.publisher ? verizonOne.publisher : "No Publisher",
                            reporting: verizonOne.reporting ? verizonOne.reporting : "No Reporting",
                            revenue: verizonOne.revenue
                          });
                        });
                      }

                      return _context47.abrupt("return", verizonStats);

                    case 10:
                    case "end":
                      return _context47.stop();
                  }
                }
              }, _callee47, this);
            }));
          }
        }, {
          key: "getLyonStats",
          value: function getLyonStats(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee48() {
              var response, _iterator8, _step8, tagL, _iterator9, _step9, tagSub, lyonStats, helperLyonsSummary, groupLyonsData;

              return regeneratorRuntime.wrap(function _callee48$(_context48) {
                while (1) {
                  switch (_context48.prev = _context48.next) {
                    case 0:
                      _context48.next = 2;
                      return this.accountingService.getLyonStats(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context48.sent;
                      this.allLyonStats = response.stats;
                      _iterator8 = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                          tagL = _step8.value;

                          if (tagL.tag.advertiser == "lyons") {
                            _iterator9 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                                tagSub = _step9.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allLyonStats.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat.reporting = "Lyons";
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allLyonStats.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_1.reporting = "Lyons";
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allLyonStats.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_2.reporting = "Lyons";
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allLyonStats.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_3.reporting = "Lyons";
                                    }
                                  });
                                }
                              }
                            } catch (err) {
                              _iterator9.e(err);
                            } finally {
                              _iterator9.f();
                            }
                          }
                        }
                      } catch (err) {
                        _iterator8.e(err);
                      } finally {
                        _iterator8.f();
                      }

                      lyonStats = [];
                      helperLyonsSummary = {};

                      if (this.allLyonStats.length > 0) {
                        groupLyonsData = this.allLyonStats.reduce(function (r, o) {
                          var key = o.publisher;

                          if (!helperLyonsSummary[key]) {
                            helperLyonsSummary[key] = Object.assign({}, o); // create a copy of o

                            r.push(helperLyonsSummary[key]);
                          } else {
                            helperLyonsSummary[key].revenue += parseFloat(o.revenue);
                          }

                          return r;
                        }, []);
                        groupLyonsData.map(function (lyonOne) {
                          lyonStats.push({
                            publisher: lyonOne.publisher ? lyonOne.publisher : "No Publisher",
                            reporting: lyonOne.reporting ? lyonOne.reporting : "No Reporting",
                            revenue: lyonOne.revenue
                          });
                        });
                      }

                      return _context48.abrupt("return", lyonStats);

                    case 10:
                    case "end":
                      return _context48.stop();
                  }
                }
              }, _callee48, this);
            }));
          }
        }, {
          key: "getPerionStats",
          value: function getPerionStats(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee49() {
              var response, _iterator10, _step10, tagL, _iterator11, _step11, tagSub, perionStats, helperPerionSummary, groupPerionData;

              return regeneratorRuntime.wrap(function _callee49$(_context49) {
                while (1) {
                  switch (_context49.prev = _context49.next) {
                    case 0:
                      _context49.next = 2;
                      return this.accountingService.getPerionStats(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context49.sent;
                      this.allPerionStats = response.stats;
                      _iterator10 = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                          tagL = _step10.value;

                          if (tagL.tag.advertiser == "perion") {
                            _iterator11 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                                tagSub = _step11.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allPerionStats.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat.reporting = "Perion";
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allPerionStats.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_1.reporting = "Perion";
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allPerionStats.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_2.reporting = "Perion";
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allPerionStats.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_3.reporting = "Perion";
                                    }
                                  });
                                }
                              }
                            } catch (err) {
                              _iterator11.e(err);
                            } finally {
                              _iterator11.f();
                            }
                          }
                        }
                      } catch (err) {
                        _iterator10.e(err);
                      } finally {
                        _iterator10.f();
                      }

                      perionStats = [];
                      helperPerionSummary = {};

                      if (this.allPerionStats.length > 0) {
                        groupPerionData = this.allPerionStats.reduce(function (r, o) {
                          var key = o.publisher;

                          if (!helperPerionSummary[key]) {
                            helperPerionSummary[key] = Object.assign({}, o); // create a copy of o

                            r.push(helperPerionSummary[key]);
                          } else {
                            helperPerionSummary[key].revenue += parseFloat(o.revenue);
                          }

                          return r;
                        }, []);
                        groupPerionData.map(function (perionOne) {
                          perionStats.push({
                            publisher: perionOne.publisher ? perionOne.publisher : "No Publisher",
                            reporting: perionOne.reporting ? perionOne.reporting : "No Reporting",
                            revenue: perionOne.revenue
                          });
                        });
                      }

                      return _context49.abrupt("return", perionStats);

                    case 10:
                    case "end":
                      return _context49.stop();
                  }
                }
              }, _callee49, this);
            }));
          }
        }, {
          key: "getApptitudeStats",
          value: function getApptitudeStats(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee50() {
              var response, _iterator12, _step12, tagL, _iterator13, _step13, tagSub, apptitudeStats, helperApptitudeSummary, groupApptitudeData;

              return regeneratorRuntime.wrap(function _callee50$(_context50) {
                while (1) {
                  switch (_context50.prev = _context50.next) {
                    case 0:
                      _context50.next = 2;
                      return this.accountingService.getApptitudeStats(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context50.sent;
                      this.allApptitudeStats = response.stats;
                      _iterator12 = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                          tagL = _step12.value;

                          if (tagL.tag.advertiser == "apptitude") {
                            _iterator13 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                                tagSub = _step13.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allApptitudeStats.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat.reporting = "Apptitude";
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allApptitudeStats.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_1.reporting = "Apptitude";
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allApptitudeStats.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_2.reporting = "Apptitude";
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allApptitudeStats.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_3.reporting = "Apptitude";
                                    }
                                  });
                                }
                              }
                            } catch (err) {
                              _iterator13.e(err);
                            } finally {
                              _iterator13.f();
                            }
                          }
                        }
                      } catch (err) {
                        _iterator12.e(err);
                      } finally {
                        _iterator12.f();
                      }

                      apptitudeStats = [];
                      helperApptitudeSummary = {};

                      if (this.allApptitudeStats.length > 0) {
                        groupApptitudeData = this.allApptitudeStats.reduce(function (r, o) {
                          var key = o.publisher;

                          if (!helperApptitudeSummary[key]) {
                            helperApptitudeSummary[key] = Object.assign({}, o); // create a copy of o

                            r.push(helperApptitudeSummary[key]);
                          } else {
                            helperApptitudeSummary[key].revenue += parseFloat(o.revenue);
                          }

                          return r;
                        }, []);
                        groupApptitudeData.map(function (apptitudeOne) {
                          apptitudeStats.push({
                            publisher: apptitudeOne.publisher ? apptitudeOne.publisher : "No Publisher",
                            reporting: apptitudeOne.reporting ? apptitudeOne.reporting : "No Reporting",
                            revenue: apptitudeOne.revenue
                          });
                        });
                      } // console.log(this.allApptitudeStats, "dfsdfsdf")


                      return _context50.abrupt("return", apptitudeStats);

                    case 10:
                    case "end":
                      return _context50.stop();
                  }
                }
              }, _callee50, this);
            }));
          }
        }, {
          key: "getSystem1Stats",
          value: function getSystem1Stats(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee51() {
              var response, _iterator14, _step14, tagL, _iterator15, _step15, tagSub, system1Stats, helperSystem1Summary, groupSystem1Data;

              return regeneratorRuntime.wrap(function _callee51$(_context51) {
                while (1) {
                  switch (_context51.prev = _context51.next) {
                    case 0:
                      _context51.next = 2;
                      return this.accountingService.getSystem1Stats(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context51.sent;
                      this.allSystem1Stats = response.stats;
                      _iterator14 = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                          tagL = _step14.value;

                          if (tagL.tag.advertiser == "system1") {
                            _iterator15 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                                tagSub = _step15.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allSystem1Stats.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat.reporting = "System1";
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allSystem1Stats.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_1.reporting = "System1";
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allSystem1Stats.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_2.reporting = "System1";
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allSystem1Stats.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_3.reporting = "System1";
                                    }
                                  });
                                }
                              }
                            } catch (err) {
                              _iterator15.e(err);
                            } finally {
                              _iterator15.f();
                            }
                          }
                        }
                      } catch (err) {
                        _iterator14.e(err);
                      } finally {
                        _iterator14.f();
                      }

                      system1Stats = [];
                      helperSystem1Summary = {};

                      if (this.allSystem1Stats.length > 0) {
                        groupSystem1Data = this.allSystem1Stats.reduce(function (r, o) {
                          var key = o.publisher;

                          if (!helperSystem1Summary[key]) {
                            helperSystem1Summary[key] = Object.assign({}, o); // create a copy of o

                            r.push(helperSystem1Summary[key]);
                          } else {
                            helperSystem1Summary[key].revenue += parseFloat(o.revenue);
                          }

                          return r;
                        }, []);
                        groupSystem1Data.map(function (system1One) {
                          system1Stats.push({
                            publisher: system1One.publisher ? system1One.publisher : "No Publisher",
                            reporting: system1One.reporting ? system1One.reporting : "No Reporting",
                            revenue: system1One.revenue
                          });
                        });
                      }

                      return _context51.abrupt("return", system1Stats);

                    case 10:
                    case "end":
                      return _context51.stop();
                  }
                }
              }, _callee51, this);
            }));
          } //get Tags with selected company

        }, {
          key: "getCompanyTags",
          value: function getCompanyTags(selectedCompany) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee52() {
              var companyId, response;
              return regeneratorRuntime.wrap(function _callee52$(_context52) {
                while (1) {
                  switch (_context52.prev = _context52.next) {
                    case 0:
                      companyId = selectedCompany.split("/")[1];
                      _context52.prev = 1;
                      _context52.next = 4;
                      return this.tagService.getCompanyTags(companyId).toPromise();

                    case 4:
                      response = _context52.sent;
                      return _context52.abrupt("return", response);

                    case 8:
                      _context52.prev = 8;
                      _context52.t0 = _context52["catch"](1);
                      return _context52.abrupt("return", _context52.t0);

                    case 11:
                    case "end":
                      return _context52.stop();
                  }
                }
              }, _callee52, this, [[1, 8]]);
            }));
          }
        }, {
          key: "toggleExpandRow",
          value: function toggleExpandRow(row) {
            console.log('Toggled Expand Row!', row);
            this.table.rowDetail.toggleExpandRow(row);
          }
        }, {
          key: "onDetailToggle",
          value: function onDetailToggle(event) {
            console.log('Detail Toggled', event);
          }
        }, {
          key: "getDetailRowHeight",
          value: function getDetailRowHeight(row, index) {
            var height;

            if (row) {
              height = row.detailHeight;
            }

            console.log(height, "-------");
            return height;
          }
        }]);

        return AccountingComponent;
      }();

      AccountingComponent.ɵfac = function AccountingComponent_Factory(t) {
        return new (t || AccountingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_accounting_service__WEBPACK_IMPORTED_MODULE_3__["AccountingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_company_management_company_management_service__WEBPACK_IMPORTED_MODULE_5__["CompanyManagementService"]));
      };

      AccountingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AccountingComponent,
        selectors: [["app-accounting"]],
        viewQuery: function AccountingComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 10,
        vars: 14,
        consts: [[3, "onDatesPicked"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "loadingIndicator"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "publisher", 3, "minWidth"], ["ngx-datatable-header-template", ""], [2, "padding-left", "36px"], [4, "ngFor", "ngForOf"], [2, "padding-left", "36px", "margin-top", "5px"], [2, "display", "flex"], [2, "min-width", "20%"], [2, "font-size", "14px"], [2, "min-width", "80%"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"]],
        template: function AccountingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDatesPicked", function AccountingComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngx-datatable", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ngx-datatable-row-detail", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggle", function AccountingComponent_Template_ngx_datatable_row_detail_toggle_3_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AccountingComponent_ng_template_4_Template, 11, 5, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ngx-datatable-column", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AccountingComponent_ng_template_6_Template, 1, 4, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ngx-datatable-column", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AccountingComponent_ng_template_8_Template, 1, 0, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AccountingComponent_ng_template_9_Template, 2, 1, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", ctx.getDetailRowHeight);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 30)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
          }
        },
        directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_6__["ReportingFilteringComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnHeaderDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"]],
        styles: [".ngx-datatable[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-detail[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  overflow-x: hidden !important;\n}\n\n.ngx-datatable.material[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-row-detail[_ngcontent-%COMP%] {\n  border-top: 1px solid #222 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1yZXBvcnRpbmcvYWNjb3VudGluZy9hY2NvdW50aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUVBO0VBQ0kscUNBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL2FjY291bnRpbmcvYWNjb3VudGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy1kZXRhaWwge1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LWRldGFpbCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzIyMiFpbXBvcnRhbnQ7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AccountingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-accounting',
            templateUrl: './accounting.component.html',
            styleUrls: ['./accounting.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: src_app_shared_service_admin_stats_accounting_service__WEBPACK_IMPORTED_MODULE_3__["AccountingService"]
          }, {
            type: src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]
          }, {
            type: src_app_modules_company_management_company_management_service__WEBPACK_IMPORTED_MODULE_5__["CompanyManagementService"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['expandableTable']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/admin-reporting-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/admin-reporting/admin-reporting-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: AdminReportingRoutingModule */

    /***/
    function srcAppModulesAdminReportingAdminReportingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminReportingRoutingModule", function () {
        return AdminReportingRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _apptitude_apptitude_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./apptitude/apptitude.component */
      "./src/app/modules/admin-reporting/apptitude/apptitude.component.ts");
      /* harmony import */


      var _hopkins_hopkins_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./hopkins/hopkins.component */
      "./src/app/modules/admin-reporting/hopkins/hopkins.component.ts");
      /* harmony import */


      var _imgage_advantage_imgage_advantage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./imgage-advantage/imgage-advantage.component */
      "./src/app/modules/admin-reporting/imgage-advantage/imgage-advantage.component.ts");
      /* harmony import */


      var _media_net_media_net_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./media-net/media-net.component */
      "./src/app/modules/admin-reporting/media-net/media-net.component.ts");
      /* harmony import */


      var _perion_perion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./perion/perion.component */
      "./src/app/modules/admin-reporting/perion/perion.component.ts");
      /* harmony import */


      var _admin_reporting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./admin-reporting.component */
      "./src/app/modules/admin-reporting/admin-reporting.component.ts");
      /* harmony import */


      var _third_party_third_party_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./third-party/third-party.component */
      "./src/app/modules/admin-reporting/third-party/third-party.component.ts");
      /* harmony import */


      var _bing_direct_bing_direct_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./bing-direct/bing-direct.component */
      "./src/app/modules/admin-reporting/bing-direct/bing-direct.component.ts");
      /* harmony import */


      var _lyons_lyons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./lyons/lyons.component */
      "./src/app/modules/admin-reporting/lyons/lyons.component.ts");
      /* harmony import */


      var _rubi_rubi_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./rubi/rubi.component */
      "./src/app/modules/admin-reporting/rubi/rubi.component.ts");
      /* harmony import */


      var _verizon_direct_verizon_direct_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./verizon-direct/verizon-direct.component */
      "./src/app/modules/admin-reporting/verizon-direct/verizon-direct.component.ts");
      /* harmony import */


      var _system1_system1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./system1/system1.component */
      "./src/app/modules/admin-reporting/system1/system1.component.ts");
      /* harmony import */


      var _manual_update_manual_update_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./manual-update/manual-update.component */
      "./src/app/modules/admin-reporting/manual-update/manual-update.component.ts");
      /* harmony import */


      var _manual_split_update_manual_split_update_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./manual-split-update/manual-split-update.component */
      "./src/app/modules/admin-reporting/manual-split-update/manual-split-update.component.ts");
      /* harmony import */


      var _solex_bc_solex_bc_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./solex-bc/solex-bc.component */
      "./src/app/modules/admin-reporting/solex-bc/solex-bc.component.ts");
      /* harmony import */


      var _accounting_accounting_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./accounting/accounting.component */
      "./src/app/modules/admin-reporting/accounting/accounting.component.ts");

      var routes = [{
        path: '',
        component: _admin_reporting_component__WEBPACK_IMPORTED_MODULE_7__["AdminReportingComponent"],
        children: [{
          path: 'accounting',
          component: _accounting_accounting_component__WEBPACK_IMPORTED_MODULE_17__["AccountingComponent"]
        }, {
          path: 'perion',
          component: _perion_perion_component__WEBPACK_IMPORTED_MODULE_6__["PerionComponent"]
        }, {
          path: 'image-advantage',
          component: _imgage_advantage_imgage_advantage_component__WEBPACK_IMPORTED_MODULE_4__["ImgageAdvantageComponent"]
        }, {
          path: 'hopkins',
          component: _hopkins_hopkins_component__WEBPACK_IMPORTED_MODULE_3__["HopkinsComponent"]
        }, {
          path: 'apptitude',
          component: _apptitude_apptitude_component__WEBPACK_IMPORTED_MODULE_2__["ApptitudeComponent"]
        }, {
          path: 'media-net',
          component: _media_net_media_net_component__WEBPACK_IMPORTED_MODULE_5__["MediaNetComponent"]
        }, {
          path: 'bing-direct',
          component: _bing_direct_bing_direct_component__WEBPACK_IMPORTED_MODULE_9__["BingDirectComponent"]
        }, {
          path: 'lyons',
          component: _lyons_lyons_component__WEBPACK_IMPORTED_MODULE_10__["LyonsComponent"]
        }, {
          path: 'rubi',
          component: _rubi_rubi_component__WEBPACK_IMPORTED_MODULE_11__["RubiComponent"]
        }, {
          path: 'system1',
          component: _system1_system1_component__WEBPACK_IMPORTED_MODULE_13__["System1Component"]
        }, {
          path: 'verizon-direct',
          component: _verizon_direct_verizon_direct_component__WEBPACK_IMPORTED_MODULE_12__["VerizonDirectComponent"]
        }, {
          path: 'third-party',
          component: _third_party_third_party_component__WEBPACK_IMPORTED_MODULE_8__["ThirdPartyComponent"]
        }, {
          path: 'solex-bc',
          component: _solex_bc_solex_bc_component__WEBPACK_IMPORTED_MODULE_16__["SolexBcComponent"]
        }, {
          path: 'manual-stat-update',
          component: _manual_update_manual_update_component__WEBPACK_IMPORTED_MODULE_14__["ManualUpdateComponent"]
        }, {
          path: 'manual-split-update',
          component: _manual_split_update_manual_split_update_component__WEBPACK_IMPORTED_MODULE_15__["ManualSplitUpdateComponent"]
        }, {
          path: '',
          redirectTo: '',
          pathMatch: 'full'
        }, {
          path: '**',
          redirectTo: '',
          pathMatch: 'full'
        }]
      }];

      var AdminReportingRoutingModule = function AdminReportingRoutingModule() {
        _classCallCheck(this, AdminReportingRoutingModule);
      };

      AdminReportingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AdminReportingRoutingModule
      });
      AdminReportingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AdminReportingRoutingModule_Factory(t) {
          return new (t || AdminReportingRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminReportingRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminReportingRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/admin-reporting.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/admin-reporting/admin-reporting.module.ts ***!
      \*******************************************************************/

    /*! exports provided: AdminReportingModule */

    /***/
    function srcAppModulesAdminReportingAdminReportingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminReportingModule", function () {
        return AdminReportingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _admin_reporting_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin-reporting-routing.module */
      "./src/app/modules/admin-reporting/admin-reporting-routing.module.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _perion_perion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./perion/perion.component */
      "./src/app/modules/admin-reporting/perion/perion.component.ts");
      /* harmony import */


      var _imgage_advantage_imgage_advantage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./imgage-advantage/imgage-advantage.component */
      "./src/app/modules/admin-reporting/imgage-advantage/imgage-advantage.component.ts");
      /* harmony import */


      var _hopkins_hopkins_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./hopkins/hopkins.component */
      "./src/app/modules/admin-reporting/hopkins/hopkins.component.ts");
      /* harmony import */


      var _apptitude_apptitude_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./apptitude/apptitude.component */
      "./src/app/modules/admin-reporting/apptitude/apptitude.component.ts");
      /* harmony import */


      var _all_reporting_all_reporting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./all-reporting/all-reporting.component */
      "./src/app/modules/admin-reporting/all-reporting/all-reporting.component.ts");
      /* harmony import */


      var _media_net_media_net_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./media-net/media-net.component */
      "./src/app/modules/admin-reporting/media-net/media-net.component.ts");
      /* harmony import */


      var _third_party_third_party_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./third-party/third-party.component */
      "./src/app/modules/admin-reporting/third-party/third-party.component.ts");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "./src/app/shared/modules/shared.module.ts");
      /* harmony import */


      var _bing_direct_bing_direct_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./bing-direct/bing-direct.component */
      "./src/app/modules/admin-reporting/bing-direct/bing-direct.component.ts");
      /* harmony import */


      var _lyons_lyons_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./lyons/lyons.component */
      "./src/app/modules/admin-reporting/lyons/lyons.component.ts");
      /* harmony import */


      var _rubi_rubi_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./rubi/rubi.component */
      "./src/app/modules/admin-reporting/rubi/rubi.component.ts");
      /* harmony import */


      var _verizon_direct_verizon_direct_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./verizon-direct/verizon-direct.component */
      "./src/app/modules/admin-reporting/verizon-direct/verizon-direct.component.ts");
      /* harmony import */


      var _manual_update_manual_update_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./manual-update/manual-update.component */
      "./src/app/modules/admin-reporting/manual-update/manual-update.component.ts");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ng-inline-svg */
      "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js");
      /* harmony import */


      var _manual_split_update_manual_split_update_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./manual-split-update/manual-split-update.component */
      "./src/app/modules/admin-reporting/manual-split-update/manual-split-update.component.ts");
      /* harmony import */


      var _system1_system1_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./system1/system1.component */
      "./src/app/modules/admin-reporting/system1/system1.component.ts");
      /* harmony import */


      var _solex_bc_solex_bc_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./solex-bc/solex-bc.component */
      "./src/app/modules/admin-reporting/solex-bc/solex-bc.component.ts");
      /* harmony import */


      var _accounting_accounting_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./accounting/accounting.component */
      "./src/app/modules/admin-reporting/accounting/accounting.component.ts");

      var AdminReportingModule = function AdminReportingModule() {
        _classCallCheck(this, AdminReportingModule);
      };

      AdminReportingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AdminReportingModule
      });
      AdminReportingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AdminReportingModule_Factory(t) {
          return new (t || AdminReportingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_reporting_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminReportingRoutingModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOptionModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_26__["InlineSVGModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminReportingModule, {
          declarations: [_perion_perion_component__WEBPACK_IMPORTED_MODULE_4__["PerionComponent"], _imgage_advantage_imgage_advantage_component__WEBPACK_IMPORTED_MODULE_5__["ImgageAdvantageComponent"], _hopkins_hopkins_component__WEBPACK_IMPORTED_MODULE_6__["HopkinsComponent"], _apptitude_apptitude_component__WEBPACK_IMPORTED_MODULE_7__["ApptitudeComponent"], _all_reporting_all_reporting_component__WEBPACK_IMPORTED_MODULE_8__["AllReportingComponent"], _media_net_media_net_component__WEBPACK_IMPORTED_MODULE_9__["MediaNetComponent"], _third_party_third_party_component__WEBPACK_IMPORTED_MODULE_10__["ThirdPartyComponent"], _bing_direct_bing_direct_component__WEBPACK_IMPORTED_MODULE_19__["BingDirectComponent"], _lyons_lyons_component__WEBPACK_IMPORTED_MODULE_20__["LyonsComponent"], _rubi_rubi_component__WEBPACK_IMPORTED_MODULE_21__["RubiComponent"], _verizon_direct_verizon_direct_component__WEBPACK_IMPORTED_MODULE_22__["VerizonDirectComponent"], _manual_update_manual_update_component__WEBPACK_IMPORTED_MODULE_23__["ManualUpdateComponent"], _manual_split_update_manual_split_update_component__WEBPACK_IMPORTED_MODULE_27__["ManualSplitUpdateComponent"], _system1_system1_component__WEBPACK_IMPORTED_MODULE_28__["System1Component"], _solex_bc_solex_bc_component__WEBPACK_IMPORTED_MODULE_29__["SolexBcComponent"], _accounting_accounting_component__WEBPACK_IMPORTED_MODULE_30__["AccountingComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_reporting_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminReportingRoutingModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOptionModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_26__["InlineSVGModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminReportingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_perion_perion_component__WEBPACK_IMPORTED_MODULE_4__["PerionComponent"], _imgage_advantage_imgage_advantage_component__WEBPACK_IMPORTED_MODULE_5__["ImgageAdvantageComponent"], _hopkins_hopkins_component__WEBPACK_IMPORTED_MODULE_6__["HopkinsComponent"], _apptitude_apptitude_component__WEBPACK_IMPORTED_MODULE_7__["ApptitudeComponent"], _all_reporting_all_reporting_component__WEBPACK_IMPORTED_MODULE_8__["AllReportingComponent"], _media_net_media_net_component__WEBPACK_IMPORTED_MODULE_9__["MediaNetComponent"], _third_party_third_party_component__WEBPACK_IMPORTED_MODULE_10__["ThirdPartyComponent"], _bing_direct_bing_direct_component__WEBPACK_IMPORTED_MODULE_19__["BingDirectComponent"], _lyons_lyons_component__WEBPACK_IMPORTED_MODULE_20__["LyonsComponent"], _rubi_rubi_component__WEBPACK_IMPORTED_MODULE_21__["RubiComponent"], _verizon_direct_verizon_direct_component__WEBPACK_IMPORTED_MODULE_22__["VerizonDirectComponent"], _manual_update_manual_update_component__WEBPACK_IMPORTED_MODULE_23__["ManualUpdateComponent"], _manual_split_update_manual_split_update_component__WEBPACK_IMPORTED_MODULE_27__["ManualSplitUpdateComponent"], _system1_system1_component__WEBPACK_IMPORTED_MODULE_28__["System1Component"], _solex_bc_solex_bc_component__WEBPACK_IMPORTED_MODULE_29__["SolexBcComponent"], _accounting_accounting_component__WEBPACK_IMPORTED_MODULE_30__["AccountingComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_reporting_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminReportingRoutingModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOptionModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_26__["InlineSVGModule"]],
            entryComponents: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/all-reporting/all-reporting.component.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/admin-reporting/all-reporting/all-reporting.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: AllReportingComponent */

    /***/
    function srcAppModulesAdminReportingAllReportingAllReportingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllReportingComponent", function () {
        return AllReportingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AllReportingComponent = /*#__PURE__*/function () {
        function AllReportingComponent() {
          _classCallCheck(this, AllReportingComponent);
        }

        _createClass(AllReportingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AllReportingComponent;
      }();

      AllReportingComponent.ɵfac = function AllReportingComponent_Factory(t) {
        return new (t || AllReportingComponent)();
      };

      AllReportingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AllReportingComponent,
        selectors: [["app-all-reporting"]],
        decls: 2,
        vars: 0,
        template: function AllReportingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "all-reporting works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL2FsbC1yZXBvcnRpbmcvYWxsLXJlcG9ydGluZy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllReportingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-all-reporting',
            templateUrl: './all-reporting.component.html',
            styleUrls: ['./all-reporting.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/apptitude/apptitude.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/modules/admin-reporting/apptitude/apptitude.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ApptitudeComponent */

    /***/
    function srcAppModulesAdminReportingApptitudeApptitudeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApptitudeComponent", function () {
        return ApptitudeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_shared_service_admin_stats_apptitude_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/apptitude.service */
      "./src/app/shared/service/admin-stats/apptitude.service.ts");
      /* harmony import */


      var _tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../tag-management/tag-management.service */
      "./src/app/modules/tag-management/tag-management.service.ts");
      /* harmony import */


      var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */
      "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-revenue-chart/reporting-revenue-chart.component */
      "./src/app/shared/modules/reporting-revenue-chart/reporting-revenue-chart.component.ts");
      /* harmony import */


      var _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/modules/summary-metrics/summary-metrics.component */
      "./src/app/shared/modules/summary-metrics/summary-metrics.component.ts");

      var _c0 = ["expandableTable"];

      function ApptitudeComponent_app_reporting_revenue_chart_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-reporting-revenue-chart", 26);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chartData", ctx_r0.chartData);
        }
      }

      function ApptitudeComponent_app_summary_metrics_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-summary-metrics", 27);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("summaryMetricsData", ctx_r1.summaryMetrics);
        }
      }

      function ApptitudeComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ApptitudeComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApptitudeComponent_ng_template_14_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);

            var row_r25 = ctx.row;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r27.toggleExpandRow(row_r25);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r26 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("datatable-icon-right", !expanded_r26)("datatable-icon-down", expanded_r26);
        }
      }

      function ApptitudeComponent_ngx_datatable_column_15_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Date ");
        }
      }

      function ApptitudeComponent_ngx_datatable_column_15_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r32 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r32));
        }
      }

      function ApptitudeComponent_ngx_datatable_column_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApptitudeComponent_ngx_datatable_column_15_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ApptitudeComponent_ngx_datatable_column_15_ng_template_2_Template, 3, 3, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
        }
      }

      function ApptitudeComponent_ngx_datatable_column_16_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Subid ");
        }
      }

      function ApptitudeComponent_ngx_datatable_column_16_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r36 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r36);
        }
      }

      function ApptitudeComponent_ngx_datatable_column_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApptitudeComponent_ngx_datatable_column_16_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ApptitudeComponent_ngx_datatable_column_16_ng_template_2_Template, 2, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ApptitudeComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher ");
        }
      }

      function ApptitudeComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r38 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r38);
        }
      }

      function ApptitudeComponent_ngx_datatable_column_20_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Clicks ");
        }
      }

      function ApptitudeComponent_ngx_datatable_column_20_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r42 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r42));
        }
      }

      function ApptitudeComponent_ngx_datatable_column_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApptitudeComponent_ngx_datatable_column_20_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ApptitudeComponent_ngx_datatable_column_20_ng_template_2_Template, 3, 3, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ApptitudeComponent_ngx_datatable_column_21_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Searches ");
        }
      }

      function ApptitudeComponent_ngx_datatable_column_21_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r46 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r46));
        }
      }

      function ApptitudeComponent_ngx_datatable_column_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApptitudeComponent_ngx_datatable_column_21_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ApptitudeComponent_ngx_datatable_column_21_ng_template_2_Template, 3, 3, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ApptitudeComponent_ngx_datatable_column_22_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Impressions ");
        }
      }

      function ApptitudeComponent_ngx_datatable_column_22_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r50 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r50));
        }
      }

      function ApptitudeComponent_ngx_datatable_column_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApptitudeComponent_ngx_datatable_column_22_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ApptitudeComponent_ngx_datatable_column_22_ng_template_2_Template, 3, 3, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ApptitudeComponent_ngx_datatable_column_23_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " CPC ");
        }
      }

      function ApptitudeComponent_ngx_datatable_column_23_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r54 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r54, "1.2-2"));
        }
      }

      function ApptitudeComponent_ngx_datatable_column_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApptitudeComponent_ngx_datatable_column_23_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ApptitudeComponent_ngx_datatable_column_23_ng_template_2_Template, 3, 4, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ApptitudeComponent_ngx_datatable_column_24_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " CTR ");
        }
      }

      function ApptitudeComponent_ngx_datatable_column_24_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r58 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r58, "1.2-2"));
        }
      }

      function ApptitudeComponent_ngx_datatable_column_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApptitudeComponent_ngx_datatable_column_24_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ApptitudeComponent_ngx_datatable_column_24_ng_template_2_Template, 3, 4, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ApptitudeComponent_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Split ");
        }
      }

      function ApptitudeComponent_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r60 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r60));
        }
      }

      function ApptitudeComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher Net ");
        }
      }

      function ApptitudeComponent_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r62 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r62, "USD"));
        }
      }

      function ApptitudeComponent_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Profit ");
        }
      }

      function ApptitudeComponent_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r64 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r64, "USD"));
        }
      }

      function ApptitudeComponent_ng_template_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Revenue ");
        }
      }

      function ApptitudeComponent_ng_template_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r66 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r66, "USD"));
        }
      }

      var ApptitudeComponent = /*#__PURE__*/function () {
        function ApptitudeComponent(cdr, userService, apptitudeService, tagService) {
          _classCallCheck(this, ApptitudeComponent);

          this.cdr = cdr;
          this.userService = userService;
          this.apptitudeService = apptitudeService;
          this.tagService = tagService; //Chart setup variables

          this.range = {
            startDate: '',
            endDate: ''
          };
          this.loadingIndicator = true;
          this.expanded = {};
          this.tagList = [];
          this.groupPublishFlag = false;
          this.selectedCompany = this.getSelectedCompanyStored();
        }

        _createClass(ApptitudeComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee53() {
              return regeneratorRuntime.wrap(function _callee53$(_context53) {
                while (1) {
                  switch (_context53.prev = _context53.next) {
                    case 0:
                      _context53.next = 2;
                      return this.getCompanyTags(this.selectedCompany);

                    case 2:
                      this.tagList = _context53.sent;
                      this.rows = [];
                      _context53.next = 6;
                      return this.getAllApptitudeStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.rows = _context53.sent;
                      _context53.next = 9;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.chartData = _context53.sent;
                      _context53.next = 12;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 12:
                      this.summaryMetrics = _context53.sent;
                      this.cdr.markForCheck();

                    case 14:
                    case "end":
                      return _context53.stop();
                  }
                }
              }, _callee53, this);
            }));
          }
        }, {
          key: "getAllApptitudeStats",
          value: function getAllApptitudeStats(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee54() {
              var response, _iterator16, _step16, tagL, _iterator17, _step17, tagSub;

              return regeneratorRuntime.wrap(function _callee54$(_context54) {
                while (1) {
                  switch (_context54.prev = _context54.next) {
                    case 0:
                      _context54.next = 2;
                      return this.apptitudeService.getApptitudeStats(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context54.sent;
                      console.log('getApptitudeStats() response:', response);
                      this.loadingIndicator = false;
                      this.allStats = response.stats;
                      this.allStats.map(function (resStat) {
                        resStat.publisher = "No Publisher";
                      });
                      _iterator16 = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                          tagL = _step16.value;

                          if (tagL.tag.advertiser == "apptitude") {
                            _iterator17 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                                tagSub = _step17.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allStats.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allStats.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allStats.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allStats.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                    }
                                  });
                                }
                              }
                            } catch (err) {
                              _iterator17.e(err);
                            } finally {
                              _iterator17.f();
                            }
                          }
                        }
                      } catch (err) {
                        _iterator16.e(err);
                      } finally {
                        _iterator16.f();
                      }

                      return _context54.abrupt("return", this.allStats);

                    case 10:
                    case "end":
                      return _context54.stop();
                  }
                }
              }, _callee54, this);
            }));
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyStored",
          value: function getSelectedCompanyStored() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }, {
          key: "toggleExpandRow",
          value: function toggleExpandRow(row) {
            console.log('Toggled Expand Row!', row);
            this.table.rowDetail.toggleExpandRow(row);
          }
        }, {
          key: "onDetailToggle",
          value: function onDetailToggle(event) {
            console.log('Detail Toggled', event);
          }
        }, {
          key: "updateReportingFiltering",
          value: function updateReportingFiltering(range) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee55() {
              return regeneratorRuntime.wrap(function _callee55$(_context55) {
                while (1) {
                  switch (_context55.prev = _context55.next) {
                    case 0:
                      this.range = range;
                      _context55.next = 3;
                      return this.getAllApptitudeStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 3:
                      this.rows = _context55.sent;
                      _context55.next = 6;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.chartData = _context55.sent;
                      _context55.next = 9;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.summaryMetrics = _context55.sent;
                      this.groupPublishFlag = false;
                      this.cdr.markForCheck();

                    case 12:
                    case "end":
                      return _context55.stop();
                  }
                }
              }, _callee55, this);
            }));
          }
        }, {
          key: "groupProvider",
          value: function groupProvider() {
            var helperSummary = {};
            var groupData = this.allStats.reduce(function (r, o) {
              var key = o.publisher;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].cpc += parseFloat(o.cpc ? o.cpc : 0);
                helperSummary[key].ctr += parseFloat(o.ctr ? o.ctr : 0);
                helperSummary[key].impressions += parseFloat(o.impressions ? o.impressions : 0);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator18 = _createForOfIteratorHelper(groupData),
                _step18;

            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                var group = _step18.value;
                group.split = group.split / group.counter;
                group.cpc = group.cpc / group.counter;
                group.ctr = group.ctr / group.counter;
              }
            } catch (err) {
              _iterator18.e(err);
            } finally {
              _iterator18.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = true;
            this.cdr.markForCheck();
          }
        }, {
          key: "backProvider",
          value: function backProvider() {
            this.rows = this.allStats;
            this.groupPublishFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "getChartMetrics",
          value: function getChartMetrics(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee56() {
              var response;
              return regeneratorRuntime.wrap(function _callee56$(_context56) {
                while (1) {
                  switch (_context56.prev = _context56.next) {
                    case 0:
                      _context56.prev = 0;
                      _context56.next = 3;
                      return this.apptitudeService.getChartMetrics(company, startDate, endDate).toPromise();

                    case 3:
                      response = _context56.sent;
                      return _context56.abrupt("return", response);

                    case 7:
                      _context56.prev = 7;
                      _context56.t0 = _context56["catch"](0);
                      return _context56.abrupt("return", _context56.t0);

                    case 10:
                    case "end":
                      return _context56.stop();
                  }
                }
              }, _callee56, this, [[0, 7]]);
            }));
          }
        }, {
          key: "getSummaryMetrics",
          value: function getSummaryMetrics(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee57() {
              var response, allSummary, currentPercentPace, lastPercentPace, selectedPercentPace;
              return regeneratorRuntime.wrap(function _callee57$(_context57) {
                while (1) {
                  switch (_context57.prev = _context57.next) {
                    case 0:
                      _context57.next = 2;
                      return this.apptitudeService.getSummaryMetrics(this.selectedCompany, startDate, endDate).toPromise();

                    case 2:
                      response = _context57.sent;
                      allSummary = {};
                      currentPercentPace = 0;
                      lastPercentPace = 0;
                      selectedPercentPace = 0;

                      if (response.summary[0].lastMonthStat[0].profitPace != 0) {
                        currentPercentPace = (response.summary[0].summaryMetrics[0].profitPace - response.summary[0].lastMonthStat[0].profitPace) / response.summary[0].lastMonthStat[0].profitPace * 100;
                      }

                      if (response.summary[0].twoLastMonthStat[0].profitPace != 0) {
                        lastPercentPace = (response.summary[0].lastMonthStat[0].profitPace - response.summary[0].twoLastMonthStat[0].profitPace) / response.summary[0].twoLastMonthStat[0].profitPace * 100;
                      }

                      if (response.summary[0].prevSelectedStat[0].profitPace != 0) {
                        selectedPercentPace = (response.summary[0].selectedStat[0].profitPace - response.summary[0].prevSelectedStat[0].profitPace) / response.summary[0].prevSelectedStat[0].profitPace * 100;
                      }

                      response.summary[0].summaryMetrics[0].percentPace = currentPercentPace;
                      response.summary[0].lastMonthStat[0].percentPace = lastPercentPace;
                      response.summary[0].selectedStat[0].percentPace = selectedPercentPace;
                      response.summary[0].selectedStat[0].selectedStartDate = startDate;
                      response.summary[0].selectedStat[0].selectedEndDate = endDate;
                      allSummary['summary'] = response.summary;
                      return _context57.abrupt("return", allSummary);

                    case 17:
                    case "end":
                      return _context57.stop();
                  }
                }
              }, _callee57, this);
            }));
          } //get Tags with selected company

        }, {
          key: "getCompanyTags",
          value: function getCompanyTags(selectedCompany) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee58() {
              var companyId, response;
              return regeneratorRuntime.wrap(function _callee58$(_context58) {
                while (1) {
                  switch (_context58.prev = _context58.next) {
                    case 0:
                      companyId = selectedCompany.split("/")[1];
                      _context58.prev = 1;
                      _context58.next = 4;
                      return this.tagService.getCompanyTags(companyId).toPromise();

                    case 4:
                      response = _context58.sent;
                      return _context58.abrupt("return", response);

                    case 8:
                      _context58.prev = 8;
                      _context58.t0 = _context58["catch"](1);
                      return _context58.abrupt("return", _context58.t0);

                    case 11:
                    case "end":
                      return _context58.stop();
                  }
                }
              }, _callee58, this, [[1, 8]]);
            }));
          }
        }]);

        return ApptitudeComponent;
      }();

      ApptitudeComponent.ɵfac = function ApptitudeComponent_Factory(t) {
        return new (t || ApptitudeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_apptitude_service__WEBPACK_IMPORTED_MODULE_3__["ApptitudeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]));
      };

      ApptitudeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ApptitudeComponent,
        selectors: [["app-apptitude"]],
        viewQuery: function ApptitudeComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 37,
        vars: 22,
        consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [3, "summaryMetricsData", 4, "ngIf"], [1, "row", "px-6"], [1, "btn", "btn-sm", "btn-primary", "mx-3", 3, "click"], [1, "btn", "btn-sm", "btn-dark", "mx-3", 3, "click"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "loadingIndicator"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "date", 3, "minWidth", 4, "ngIf"], ["name", "subid", 4, "ngIf"], ["name", "publisher"], ["ngx-datatable-header-template", ""], ["name", "clicks", 4, "ngIf"], ["name", "searches", 4, "ngIf"], ["name", "impressions", 4, "ngIf"], ["name", "cpc", 4, "ngIf"], ["name", "ctr", 4, "ngIf"], ["name", "split"], ["name", "publisherNet"], ["name", "profit"], ["name", "revenue"], [3, "chartData"], [3, "summaryMetricsData"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], ["name", "date", 3, "minWidth"], ["name", "subid"], ["name", "clicks"], ["name", "searches"], ["name", "impressions"], ["name", "cpc"], ["name", "ctr"]],
        template: function ApptitudeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDatesPicked", function ApptitudeComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ApptitudeComponent_app_reporting_revenue_chart_1_Template, 1, 1, "app-reporting-revenue-chart", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ApptitudeComponent_app_summary_metrics_2_Template, 1, 1, "app-summary-metrics", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApptitudeComponent_Template_button_click_4_listener() {
              return ctx.groupProvider();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Group ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApptitudeComponent_Template_button_click_6_listener() {
              return ctx.backProvider();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ngx-datatable", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ngx-datatable-row-detail", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggle", function ApptitudeComponent_Template_ngx_datatable_row_detail_toggle_10_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ApptitudeComponent_ng_template_12_Template, 6, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ngx-datatable-column", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ApptitudeComponent_ng_template_14_Template, 1, 4, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ApptitudeComponent_ngx_datatable_column_15_Template, 3, 1, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ApptitudeComponent_ngx_datatable_column_16_Template, 3, 0, "ngx-datatable-column", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ngx-datatable-column", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ApptitudeComponent_ng_template_18_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ApptitudeComponent_ng_template_19_Template, 2, 1, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ApptitudeComponent_ngx_datatable_column_20_Template, 3, 0, "ngx-datatable-column", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ApptitudeComponent_ngx_datatable_column_21_Template, 3, 0, "ngx-datatable-column", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ApptitudeComponent_ngx_datatable_column_22_Template, 3, 0, "ngx-datatable-column", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ApptitudeComponent_ngx_datatable_column_23_Template, 3, 0, "ngx-datatable-column", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ApptitudeComponent_ngx_datatable_column_24_Template, 3, 0, "ngx-datatable-column", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ngx-datatable-column", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ApptitudeComponent_ng_template_26_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ApptitudeComponent_ng_template_27_Template, 3, 3, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ngx-datatable-column", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ApptitudeComponent_ng_template_29_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ApptitudeComponent_ng_template_30_Template, 3, 4, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ngx-datatable-column", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ApptitudeComponent_ng_template_32_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ApptitudeComponent_ng_template_33_Template, 3, 4, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ngx-datatable-column", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, ApptitudeComponent_ng_template_35_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ApptitudeComponent_ng_template_36_Template, 3, 4, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.summaryMetrics);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 50)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);
          }
        },
        directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__["ReportingFilteringComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnHeaderDirective"], _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__["ReportingRevenueChartComponent"], _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__["SummaryMetricsComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL2FwcHRpdHVkZS9hcHB0aXR1ZGUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApptitudeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-apptitude',
            templateUrl: './apptitude.component.html',
            styleUrls: ['./apptitude.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: src_app_shared_service_admin_stats_apptitude_service__WEBPACK_IMPORTED_MODULE_3__["ApptitudeService"]
          }, {
            type: _tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['expandableTable']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/bing-direct/bing-direct.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/admin-reporting/bing-direct/bing-direct.component.ts ***!
      \******************************************************************************/

    /*! exports provided: BingDirectComponent */

    /***/
    function srcAppModulesAdminReportingBingDirectBingDirectComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BingDirectComponent", function () {
        return BingDirectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var BingDirectComponent = /*#__PURE__*/function () {
        function BingDirectComponent() {
          _classCallCheck(this, BingDirectComponent);
        }

        _createClass(BingDirectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BingDirectComponent;
      }();

      BingDirectComponent.ɵfac = function BingDirectComponent_Factory(t) {
        return new (t || BingDirectComponent)();
      };

      BingDirectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BingDirectComponent,
        selectors: [["app-bing-direct"]],
        decls: 2,
        vars: 0,
        template: function BingDirectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "bing-direct works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL2JpbmctZGlyZWN0L2JpbmctZGlyZWN0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BingDirectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-bing-direct',
            templateUrl: './bing-direct.component.html',
            styleUrls: ['./bing-direct.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/hopkins/hopkins.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/admin-reporting/hopkins/hopkins.component.ts ***!
      \**********************************************************************/

    /*! exports provided: HopkinsComponent */

    /***/
    function srcAppModulesAdminReportingHopkinsHopkinsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HopkinsComponent", function () {
        return HopkinsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_shared_service_admin_stats_hopkin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/hopkin.service */
      "./src/app/shared/service/admin-stats/hopkin.service.ts");
      /* harmony import */


      var _tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../tag-management/tag-management.service */
      "./src/app/modules/tag-management/tag-management.service.ts");
      /* harmony import */


      var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */
      "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-revenue-chart/reporting-revenue-chart.component */
      "./src/app/shared/modules/reporting-revenue-chart/reporting-revenue-chart.component.ts");
      /* harmony import */


      var _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/modules/summary-metrics/summary-metrics.component */
      "./src/app/shared/modules/summary-metrics/summary-metrics.component.ts");

      var _c0 = ["expandableTable"];

      function HopkinsComponent_app_reporting_revenue_chart_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-reporting-revenue-chart", 26);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chartData", ctx_r0.chartData);
        }
      }

      function HopkinsComponent_app_summary_metrics_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-summary-metrics", 27);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("summaryMetricsData", ctx_r1.summaryMetrics);
        }
      }

      function HopkinsComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HopkinsComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HopkinsComponent_ng_template_14_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);

            var row_r25 = ctx.row;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r27.toggleExpandRow(row_r25);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r26 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("datatable-icon-right", !expanded_r26)("datatable-icon-down", expanded_r26);
        }
      }

      function HopkinsComponent_ngx_datatable_column_15_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Date ");
        }
      }

      function HopkinsComponent_ngx_datatable_column_15_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r32 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r32));
        }
      }

      function HopkinsComponent_ngx_datatable_column_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HopkinsComponent_ngx_datatable_column_15_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HopkinsComponent_ngx_datatable_column_15_ng_template_2_Template, 3, 3, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
        }
      }

      function HopkinsComponent_ngx_datatable_column_16_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Subid ");
        }
      }

      function HopkinsComponent_ngx_datatable_column_16_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r36 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r36);
        }
      }

      function HopkinsComponent_ngx_datatable_column_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HopkinsComponent_ngx_datatable_column_16_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HopkinsComponent_ngx_datatable_column_16_ng_template_2_Template, 2, 1, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HopkinsComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher ");
        }
      }

      function HopkinsComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r38 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r38);
        }
      }

      function HopkinsComponent_ngx_datatable_column_20_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Searches ");
        }
      }

      function HopkinsComponent_ngx_datatable_column_20_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r42 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r42));
        }
      }

      function HopkinsComponent_ngx_datatable_column_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HopkinsComponent_ngx_datatable_column_20_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HopkinsComponent_ngx_datatable_column_20_ng_template_2_Template, 3, 3, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HopkinsComponent_ngx_datatable_column_21_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Clicks ");
        }
      }

      function HopkinsComponent_ngx_datatable_column_21_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r46 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r46));
        }
      }

      function HopkinsComponent_ngx_datatable_column_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HopkinsComponent_ngx_datatable_column_21_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HopkinsComponent_ngx_datatable_column_21_ng_template_2_Template, 3, 3, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HopkinsComponent_ngx_datatable_column_22_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Coverage ");
        }
      }

      function HopkinsComponent_ngx_datatable_column_22_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r50 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r50));
        }
      }

      function HopkinsComponent_ngx_datatable_column_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HopkinsComponent_ngx_datatable_column_22_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HopkinsComponent_ngx_datatable_column_22_ng_template_2_Template, 3, 3, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HopkinsComponent_ngx_datatable_column_23_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " PPC ");
        }
      }

      function HopkinsComponent_ngx_datatable_column_23_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r54 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r54));
        }
      }

      function HopkinsComponent_ngx_datatable_column_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HopkinsComponent_ngx_datatable_column_23_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HopkinsComponent_ngx_datatable_column_23_ng_template_2_Template, 3, 3, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HopkinsComponent_ngx_datatable_column_24_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " TQ ");
        }
      }

      function HopkinsComponent_ngx_datatable_column_24_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r58 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r58));
        }
      }

      function HopkinsComponent_ngx_datatable_column_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HopkinsComponent_ngx_datatable_column_24_ng_template_1_Template, 1, 0, "ng-template", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HopkinsComponent_ngx_datatable_column_24_ng_template_2_Template, 3, 3, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HopkinsComponent_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Split ");
        }
      }

      function HopkinsComponent_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r60 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r60) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, 0, "1.0-0"));
        }
      }

      function HopkinsComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher Net ");
        }
      }

      function HopkinsComponent_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r62 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r62, "USD"));
        }
      }

      function HopkinsComponent_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Profit ");
        }
      }

      function HopkinsComponent_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r64 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r64, "USD"));
        }
      }

      function HopkinsComponent_ng_template_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Revenue ");
        }
      }

      function HopkinsComponent_ng_template_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r66 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r66, "USD"));
        }
      }

      var HopkinsComponent = /*#__PURE__*/function () {
        function HopkinsComponent(cdr, userService, hopkinService, tagService) {
          _classCallCheck(this, HopkinsComponent);

          this.cdr = cdr;
          this.userService = userService;
          this.hopkinService = hopkinService;
          this.tagService = tagService;
          this.range = {
            startDate: '',
            endDate: ''
          };
          this.loadingIndicator = true;
          this.groupPublishFlag = false;
          this.expanded = {};
          this.tagList = [];
          this.selectedCompany = this.getSelectedCompanyStored();
        }

        _createClass(HopkinsComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee59() {
              return regeneratorRuntime.wrap(function _callee59$(_context59) {
                while (1) {
                  switch (_context59.prev = _context59.next) {
                    case 0:
                      _context59.next = 2;
                      return this.getCompanyTags(this.selectedCompany);

                    case 2:
                      this.tagList = _context59.sent;
                      this.rows = [];
                      _context59.next = 6;
                      return this.getAllHopkinStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.rows = _context59.sent;
                      _context59.next = 9;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.chartData = _context59.sent;
                      _context59.next = 12;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 12:
                      this.summaryMetrics = _context59.sent;
                      this.refreshTable();

                    case 14:
                    case "end":
                      return _context59.stop();
                  }
                }
              }, _callee59, this);
            }));
          }
        }, {
          key: "getAllHopkinStats",
          value: function getAllHopkinStats(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee60() {
              var response, _iterator19, _step19, tagL, _iterator20, _step20, tagSub;

              return regeneratorRuntime.wrap(function _callee60$(_context60) {
                while (1) {
                  switch (_context60.prev = _context60.next) {
                    case 0:
                      _context60.next = 2;
                      return this.hopkinService.getHopkinStats(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context60.sent;
                      console.log('response:', response);
                      this.loadingIndicator = false;
                      this.allStats = response.stats;
                      this.allStats.map(function (resStat) {
                        resStat.publisher = "No Publisher";
                        resStat.tagname = "No Tag";
                      });
                      _iterator19 = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                          tagL = _step19.value;

                          if (tagL.tag.advertiser == "hopkins") {
                            _iterator20 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                                tagSub = _step20.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allStats.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allStats.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_1.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allStats.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_2.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allStats.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_3.tagname = tagL.tag.name;
                                    }
                                  });
                                }
                              }
                            } catch (err) {
                              _iterator20.e(err);
                            } finally {
                              _iterator20.f();
                            }
                          }
                        }
                      } catch (err) {
                        _iterator19.e(err);
                      } finally {
                        _iterator19.f();
                      }

                      return _context60.abrupt("return", this.allStats);

                    case 10:
                    case "end":
                      return _context60.stop();
                  }
                }
              }, _callee60, this);
            }));
          }
        }, {
          key: "groupProvider",
          value: function groupProvider() {
            var helperSummary = {};
            var groupData = this.allStats.reduce(function (r, o) {
              var key = o.publisher;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].coverage += parseFloat(o.coverage ? o.coverage : 0);
                helperSummary[key].ppc += parseFloat(o.ppc ? o.ppc : 0);
                helperSummary[key].tq += parseFloat(o.tq ? o.tq : 0);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator21 = _createForOfIteratorHelper(groupData),
                _step21;

            try {
              for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                var group = _step21.value;
                group.split = group.split / group.counter;
              }
            } catch (err) {
              _iterator21.e(err);
            } finally {
              _iterator21.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = true;
            this.cdr.markForCheck();
          }
        }, {
          key: "backProvider",
          value: function backProvider() {
            this.rows = this.allStats;
            this.groupPublishFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "updateReportingFiltering",
          value: function updateReportingFiltering(range) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee61() {
              return regeneratorRuntime.wrap(function _callee61$(_context61) {
                while (1) {
                  switch (_context61.prev = _context61.next) {
                    case 0:
                      this.range = range;
                      _context61.next = 3;
                      return this.getAllHopkinStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 3:
                      this.rows = _context61.sent;
                      _context61.next = 6;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.chartData = _context61.sent;
                      _context61.next = 9;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.summaryMetrics = _context61.sent;
                      this.groupPublishFlag = false;
                      this.refreshTable();

                    case 12:
                    case "end":
                      return _context61.stop();
                  }
                }
              }, _callee61, this);
            }));
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyStored",
          value: function getSelectedCompanyStored() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }, {
          key: "toggleExpandRow",
          value: function toggleExpandRow(row) {
            console.log('Toggled Expand Row!', row);
            this.table.rowDetail.toggleExpandRow(row);
          }
        }, {
          key: "onDetailToggle",
          value: function onDetailToggle(event) {
            console.log('Detail Toggled', event);
          }
        }, {
          key: "refreshTable",
          value: function refreshTable() {
            this.cdr.markForCheck();
          } //get Tags with selected company

        }, {
          key: "getCompanyTags",
          value: function getCompanyTags(selectedCompany) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee62() {
              var companyId, response;
              return regeneratorRuntime.wrap(function _callee62$(_context62) {
                while (1) {
                  switch (_context62.prev = _context62.next) {
                    case 0:
                      companyId = selectedCompany.split("/")[1];
                      _context62.prev = 1;
                      _context62.next = 4;
                      return this.tagService.getCompanyTags(companyId).toPromise();

                    case 4:
                      response = _context62.sent;
                      return _context62.abrupt("return", response);

                    case 8:
                      _context62.prev = 8;
                      _context62.t0 = _context62["catch"](1);
                      return _context62.abrupt("return", _context62.t0);

                    case 11:
                    case "end":
                      return _context62.stop();
                  }
                }
              }, _callee62, this, [[1, 8]]);
            }));
          }
        }, {
          key: "getChartMetrics",
          value: function getChartMetrics(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee63() {
              var response;
              return regeneratorRuntime.wrap(function _callee63$(_context63) {
                while (1) {
                  switch (_context63.prev = _context63.next) {
                    case 0:
                      _context63.prev = 0;
                      _context63.next = 3;
                      return this.hopkinService.getChartMetrics(company, startDate, endDate).toPromise();

                    case 3:
                      response = _context63.sent;
                      return _context63.abrupt("return", response);

                    case 7:
                      _context63.prev = 7;
                      _context63.t0 = _context63["catch"](0);
                      return _context63.abrupt("return", _context63.t0);

                    case 10:
                    case "end":
                      return _context63.stop();
                  }
                }
              }, _callee63, this, [[0, 7]]);
            }));
          }
        }, {
          key: "getSummaryMetrics",
          value: function getSummaryMetrics(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee64() {
              var response, allSummary, currentPercentPace, lastPercentPace, selectedPercentPace;
              return regeneratorRuntime.wrap(function _callee64$(_context64) {
                while (1) {
                  switch (_context64.prev = _context64.next) {
                    case 0:
                      _context64.next = 2;
                      return this.hopkinService.getSummaryMetrics(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context64.sent;
                      allSummary = {};
                      currentPercentPace = 0;
                      lastPercentPace = 0;
                      selectedPercentPace = 0;

                      if (response.summary[0].lastMonthStat[0].profitPace != 0) {
                        currentPercentPace = (response.summary[0].summaryMetrics[0].profitPace - response.summary[0].lastMonthStat[0].profitPace) / response.summary[0].lastMonthStat[0].profitPace * 100;
                      }

                      if (response.summary[0].twoLastMonthStat[0].profitPace != 0) {
                        lastPercentPace = (response.summary[0].lastMonthStat[0].profitPace - response.summary[0].twoLastMonthStat[0].profitPace) / response.summary[0].twoLastMonthStat[0].profitPace * 100;
                      }

                      if (response.summary[0].prevSelectedStat[0].profitPace != 0) {
                        selectedPercentPace = (response.summary[0].selectedStat[0].profitPace - response.summary[0].prevSelectedStat[0].profitPace) / response.summary[0].prevSelectedStat[0].profitPace * 100;
                      }

                      response.summary[0].summaryMetrics[0].percentPace = currentPercentPace;
                      response.summary[0].lastMonthStat[0].percentPace = lastPercentPace;
                      response.summary[0].selectedStat[0].percentPace = selectedPercentPace;
                      response.summary[0].selectedStat[0].selectedStartDate = startDate;
                      response.summary[0].selectedStat[0].selectedEndDate = endDate;
                      allSummary['summary'] = response.summary;
                      return _context64.abrupt("return", allSummary);

                    case 17:
                    case "end":
                      return _context64.stop();
                  }
                }
              }, _callee64, this);
            }));
          }
        }]);

        return HopkinsComponent;
      }();

      HopkinsComponent.ɵfac = function HopkinsComponent_Factory(t) {
        return new (t || HopkinsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_hopkin_service__WEBPACK_IMPORTED_MODULE_3__["HopkinService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]));
      };

      HopkinsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HopkinsComponent,
        selectors: [["app-hopkins"]],
        viewQuery: function HopkinsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 37,
        vars: 24,
        consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [3, "summaryMetricsData", 4, "ngIf"], [1, "row", "px-6"], [1, "btn", "btn-sm", "btn-primary", "mx-3", 3, "click"], [1, "btn", "btn-sm", "btn-dark", "mx-3", 3, "click"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "loadingIndicator"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "date", 3, "minWidth", 4, "ngIf"], ["name", "subid", 4, "ngIf"], ["name", "publisher", 3, "minWidth"], ["ngx-datatable-header-template", ""], ["name", "searches", 4, "ngIf"], ["name", "clicks", 4, "ngIf"], ["name", "coverage", 4, "ngIf"], ["name", "ppc", 4, "ngIf"], ["name", "tq", 4, "ngIf"], ["name", "split", 3, "minWidth"], ["name", "publisherNet"], ["name", "profit"], ["name", "revenue"], [3, "chartData"], [3, "summaryMetricsData"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], ["name", "date", 3, "minWidth"], ["name", "subid"], ["name", "searches"], ["name", "clicks"], ["name", "coverage"], ["name", "ppc"], ["name", "tq"]],
        template: function HopkinsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDatesPicked", function HopkinsComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HopkinsComponent_app_reporting_revenue_chart_1_Template, 1, 1, "app-reporting-revenue-chart", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HopkinsComponent_app_summary_metrics_2_Template, 1, 1, "app-summary-metrics", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HopkinsComponent_Template_button_click_4_listener() {
              return ctx.groupProvider();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Group ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HopkinsComponent_Template_button_click_6_listener() {
              return ctx.backProvider();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ngx-datatable", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ngx-datatable-row-detail", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggle", function HopkinsComponent_Template_ngx_datatable_row_detail_toggle_10_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HopkinsComponent_ng_template_12_Template, 6, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ngx-datatable-column", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HopkinsComponent_ng_template_14_Template, 1, 4, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, HopkinsComponent_ngx_datatable_column_15_Template, 3, 1, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, HopkinsComponent_ngx_datatable_column_16_Template, 3, 0, "ngx-datatable-column", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ngx-datatable-column", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, HopkinsComponent_ng_template_18_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, HopkinsComponent_ng_template_19_Template, 2, 1, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, HopkinsComponent_ngx_datatable_column_20_Template, 3, 0, "ngx-datatable-column", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, HopkinsComponent_ngx_datatable_column_21_Template, 3, 0, "ngx-datatable-column", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, HopkinsComponent_ngx_datatable_column_22_Template, 3, 0, "ngx-datatable-column", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, HopkinsComponent_ngx_datatable_column_23_Template, 3, 0, "ngx-datatable-column", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, HopkinsComponent_ngx_datatable_column_24_Template, 3, 0, "ngx-datatable-column", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ngx-datatable-column", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, HopkinsComponent_ng_template_26_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, HopkinsComponent_ng_template_27_Template, 4, 6, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ngx-datatable-column", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, HopkinsComponent_ng_template_29_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, HopkinsComponent_ng_template_30_Template, 3, 4, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ngx-datatable-column", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, HopkinsComponent_ng_template_32_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, HopkinsComponent_ng_template_33_Template, 3, 4, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ngx-datatable-column", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, HopkinsComponent_ng_template_35_Template, 1, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, HopkinsComponent_ng_template_36_Template, 3, 4, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.summaryMetrics);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 30)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 35);
          }
        },
        directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__["ReportingFilteringComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnHeaderDirective"], _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__["ReportingRevenueChartComponent"], _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__["SummaryMetricsComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL2hvcGtpbnMvaG9wa2lucy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HopkinsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-hopkins',
            templateUrl: './hopkins.component.html',
            styleUrls: ['./hopkins.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: src_app_shared_service_admin_stats_hopkin_service__WEBPACK_IMPORTED_MODULE_3__["HopkinService"]
          }, {
            type: _tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['expandableTable']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/imgage-advantage/imgage-advantage.component.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/admin-reporting/imgage-advantage/imgage-advantage.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: ImgageAdvantageComponent */

    /***/
    function srcAppModulesAdminReportingImgageAdvantageImgageAdvantageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImgageAdvantageComponent", function () {
        return ImgageAdvantageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/divider */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["expandableTable"];

      function ImgageAdvantageComponent_ng_template_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ImgageAdvantageComponent_ng_template_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImgageAdvantageComponent_ng_template_45_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var row_r22 = ctx.row;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.toggleExpandRow(row_r22);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r23 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("datatable-icon-right", !expanded_r23)("datatable-icon-down", expanded_r23);
        }
      }

      function ImgageAdvantageComponent_ng_template_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Publisher ");
        }
      }

      function ImgageAdvantageComponent_ng_template_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r27 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r27);
        }
      }

      function ImgageAdvantageComponent_ng_template_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Tag ");
        }
      }

      function ImgageAdvantageComponent_ng_template_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r29 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r29);
        }
      }

      function ImgageAdvantageComponent_ng_template_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Total Searches ");
        }
      }

      function ImgageAdvantageComponent_ng_template_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r31 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, value_r31));
        }
      }

      function ImgageAdvantageComponent_ng_template_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Monetized Searches ");
        }
      }

      function ImgageAdvantageComponent_ng_template_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r33 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, value_r33));
        }
      }

      function ImgageAdvantageComponent_ng_template_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Clicks ");
        }
      }

      function ImgageAdvantageComponent_ng_template_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r35 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, value_r35));
        }
      }

      function ImgageAdvantageComponent_ng_template_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Follow On ");
        }
      }

      function ImgageAdvantageComponent_ng_template_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r37 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r37);
        }
      }

      function ImgageAdvantageComponent_ng_template_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r38 = ctx.column;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r38.name);
        }
      }

      function ImgageAdvantageComponent_ng_template_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "strong", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "percent");
        }

        if (rf & 2) {
          var row_r40 = ctx.row;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, row_r40["clicks"] / row_r40["totalSearches"], "2.2-2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function ImgageAdvantageComponent_ng_template_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Revenue ");
        }
      }

      function ImgageAdvantageComponent_ng_template_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r43 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, value_r43, "USD"));
        }
      }

      var ImgageAdvantageComponent = /*#__PURE__*/function () {
        function ImgageAdvantageComponent() {
          _classCallCheck(this, ImgageAdvantageComponent);

          this.rows = [{
            name: 'Greg',
            tag: 'YHS Organic',
            totalSearches: '536412',
            monetizedSearches: '501235',
            revenue: '52623',
            clicks: 50351,
            followOn: '13%'
          }];
          this.columns = [{
            prop: 'name'
          }, {
            name: 'Gender'
          }];
          this.expanded = {};
        }

        _createClass(ImgageAdvantageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleExpandRow",
          value: function toggleExpandRow(row) {
            console.log('Toggled Expand Row!', row);
            this.table.rowDetail.toggleExpandRow(row);
          }
        }, {
          key: "onDetailToggle",
          value: function onDetailToggle(event) {
            console.log('Detail Toggled', event);
          }
        }]);

        return ImgageAdvantageComponent;
      }();

      ImgageAdvantageComponent.ɵfac = function ImgageAdvantageComponent_Factory(t) {
        return new (t || ImgageAdvantageComponent)();
      };

      ImgageAdvantageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ImgageAdvantageComponent,
        selectors: [["app-imgage-advantage"]],
        viewQuery: function ImgageAdvantageComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 70,
        vars: 13,
        consts: [[1, "row"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], [1, "material", "fullscreen", "expandable", 2, "top", "52px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH", "rows"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "name"], ["ngx-datatable-header-template", ""], ["name", "tag"], ["name", "totalSearches"], ["name", "monetizedSearches"], ["name", "clicks"], ["name", "followOn"], ["name", "CTR"], ["name", "revenue"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], [3, "innerHTML"]],
        template: function ImgageAdvantageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Month to Date Stats");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Revenue: $103,201.26");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Revenue Pace: $131,285.19");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Profit: $21,109.59");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Profit Pace: $173,121.45");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Percentage Change: +27%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Last Month Stats");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Revenue: $113,542.23");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Profit: $14,121.39");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Percentage Change: +11%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ngx-datatable", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ngx-datatable-row-detail", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggle", function ImgageAdvantageComponent_Template_ngx_datatable_row_detail_toggle_41_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ImgageAdvantageComponent_ng_template_43_Template, 6, 0, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ngx-datatable-column", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ImgageAdvantageComponent_ng_template_45_Template, 1, 4, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ngx-datatable-column", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ImgageAdvantageComponent_ng_template_47_Template, 1, 0, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ImgageAdvantageComponent_ng_template_48_Template, 2, 1, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ngx-datatable-column", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ImgageAdvantageComponent_ng_template_50_Template, 1, 0, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ImgageAdvantageComponent_ng_template_51_Template, 2, 1, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ngx-datatable-column", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ImgageAdvantageComponent_ng_template_53_Template, 1, 0, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ImgageAdvantageComponent_ng_template_54_Template, 3, 3, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ngx-datatable-column", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ImgageAdvantageComponent_ng_template_56_Template, 1, 0, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ImgageAdvantageComponent_ng_template_57_Template, 3, 3, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ngx-datatable-column", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ImgageAdvantageComponent_ng_template_59_Template, 1, 0, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ImgageAdvantageComponent_ng_template_60_Template, 3, 3, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ngx-datatable-column", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ImgageAdvantageComponent_ng_template_62_Template, 1, 0, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ImgageAdvantageComponent_ng_template_63_Template, 2, 1, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ngx-datatable-column", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, ImgageAdvantageComponent_ng_template_65_Template, 2, 1, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, ImgageAdvantageComponent_ng_template_66_Template, 2, 4, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ngx-datatable-column", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ImgageAdvantageComponent_ng_template_68_Template, 1, 0, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ImgageAdvantageComponent_ng_template_69_Template, 3, 4, "ng-template", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("scrollbarH", true)("rows", ctx.rows);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 50)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
          }
        },
        directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDivider"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnHeaderDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL2ltZ2FnZS1hZHZhbnRhZ2UvaW1nYWdlLWFkdmFudGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgageAdvantageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-imgage-advantage',
            templateUrl: './imgage-advantage.component.html',
            styleUrls: ['./imgage-advantage.component.scss']
          }]
        }], function () {
          return [];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['expandableTable']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/lyons/lyons.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/modules/admin-reporting/lyons/lyons.component.ts ***!
      \******************************************************************/

    /*! exports provided: LyonsComponent */

    /***/
    function srcAppModulesAdminReportingLyonsLyonsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LyonsComponent", function () {
        return LyonsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_shared_service_admin_stats_lyon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/lyon.service */
      "./src/app/shared/service/admin-stats/lyon.service.ts");
      /* harmony import */


      var _shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modules/tag-management/tag-management.service */
      "./src/app/modules/tag-management/tag-management.service.ts");
      /* harmony import */


      var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */
      "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-revenue-chart/reporting-revenue-chart.component */
      "./src/app/shared/modules/reporting-revenue-chart/reporting-revenue-chart.component.ts");
      /* harmony import */


      var _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/modules/summary-metrics/summary-metrics.component */
      "./src/app/shared/modules/summary-metrics/summary-metrics.component.ts");

      var _c0 = ["expandableTable"];

      function LyonsComponent_app_reporting_revenue_chart_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-reporting-revenue-chart", 28);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chartData", ctx_r0.chartData);
        }
      }

      function LyonsComponent_app_summary_metrics_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-summary-metrics", 29);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("summaryMetricsData", ctx_r1.summaryMetricsData);
        }
      }

      function LyonsComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LyonsComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LyonsComponent_ng_template_18_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);

            var row_r24 = ctx.row;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r26.toggleExpandRow(row_r24);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r25 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("datatable-icon-right", !expanded_r25)("datatable-icon-down", expanded_r25);
        }
      }

      function LyonsComponent_ngx_datatable_column_19_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Date ");
        }
      }

      function LyonsComponent_ngx_datatable_column_19_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r31 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r31));
        }
      }

      function LyonsComponent_ngx_datatable_column_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LyonsComponent_ngx_datatable_column_19_ng_template_1_Template, 1, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LyonsComponent_ngx_datatable_column_19_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LyonsComponent_ngx_datatable_column_20_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Subid ");
        }
      }

      function LyonsComponent_ngx_datatable_column_20_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r35 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r35);
        }
      }

      function LyonsComponent_ngx_datatable_column_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LyonsComponent_ngx_datatable_column_20_ng_template_1_Template, 1, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LyonsComponent_ngx_datatable_column_20_ng_template_2_Template, 2, 1, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LyonsComponent_ngx_datatable_column_21_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher ");
        }
      }

      function LyonsComponent_ngx_datatable_column_21_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r39 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r39);
        }
      }

      function LyonsComponent_ngx_datatable_column_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LyonsComponent_ngx_datatable_column_21_ng_template_1_Template, 1, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LyonsComponent_ngx_datatable_column_21_ng_template_2_Template, 2, 1, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LyonsComponent_ngx_datatable_column_22_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Searches ");
        }
      }

      function LyonsComponent_ngx_datatable_column_22_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r43 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r43));
        }
      }

      function LyonsComponent_ngx_datatable_column_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LyonsComponent_ngx_datatable_column_22_ng_template_1_Template, 1, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LyonsComponent_ngx_datatable_column_22_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LyonsComponent_ngx_datatable_column_23_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Bid Searches ");
        }
      }

      function LyonsComponent_ngx_datatable_column_23_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r47 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r47));
        }
      }

      function LyonsComponent_ngx_datatable_column_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LyonsComponent_ngx_datatable_column_23_ng_template_1_Template, 1, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LyonsComponent_ngx_datatable_column_23_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LyonsComponent_ngx_datatable_column_24_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Clicks ");
        }
      }

      function LyonsComponent_ngx_datatable_column_24_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r51 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r51));
        }
      }

      function LyonsComponent_ngx_datatable_column_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LyonsComponent_ngx_datatable_column_24_ng_template_1_Template, 1, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LyonsComponent_ngx_datatable_column_24_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LyonsComponent_ngx_datatable_column_25_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " BiddedCTR ");
        }
      }

      function LyonsComponent_ngx_datatable_column_25_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r55 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r55, "2.2-2") || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, 0, "2.2-2"));
        }
      }

      function LyonsComponent_ngx_datatable_column_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LyonsComponent_ngx_datatable_column_25_ng_template_1_Template, 1, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LyonsComponent_ngx_datatable_column_25_ng_template_2_Template, 4, 7, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LyonsComponent_ngx_datatable_column_26_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " CTR ");
        }
      }

      function LyonsComponent_ngx_datatable_column_26_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r59 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r59, "2.2-2") || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, 0, "2.2-2"));
        }
      }

      function LyonsComponent_ngx_datatable_column_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LyonsComponent_ngx_datatable_column_26_ng_template_1_Template, 1, 0, "ng-template", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LyonsComponent_ngx_datatable_column_26_ng_template_2_Template, 4, 7, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LyonsComponent_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher Net ");
        }
      }

      function LyonsComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r61 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r61, "USD"));
        }
      }

      function LyonsComponent_ng_template_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Profit ");
        }
      }

      function LyonsComponent_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r63 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r63, "USD"));
        }
      }

      function LyonsComponent_ng_template_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Revenue ");
        }
      }

      function LyonsComponent_ng_template_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r65 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r65, "USD"));
        }
      }

      function LyonsComponent_ng_template_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Spilt ");
        }
      }

      function LyonsComponent_ng_template_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r67 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r67) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, 0, "1.0-0"));
        }
      }

      var LyonsComponent = /*#__PURE__*/function () {
        function LyonsComponent(lyonService, cdr, userService, tagService) {
          _classCallCheck(this, LyonsComponent);

          this.lyonService = lyonService;
          this.cdr = cdr;
          this.userService = userService;
          this.tagService = tagService;
          this.range = {
            startDate: '',
            endDate: ''
          };
          this.summary = {
            revenue: 0,
            profit: 0
          };
          this.loadingIndicator = true;
          this.columns = [{
            prop: 'name'
          }, {
            name: 'Gender'
          }];
          this.expanded = {};
          this.tagList = [];
          this.filteredLyonStat = [];
          this.groupPublishFlag = false;
          this.groupDateShowFlag = false;
          this.groupSubidShowFlag = false;
          this.selectedCompany = this.getSelectedCompanyFromLocalStorage();
        }

        _createClass(LyonsComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee65() {
              return regeneratorRuntime.wrap(function _callee65$(_context65) {
                while (1) {
                  switch (_context65.prev = _context65.next) {
                    case 0:
                      _context65.next = 2;
                      return this.getCompanyTags(this.selectedCompany);

                    case 2:
                      this.tagList = _context65.sent;
                      this.rows = [];
                      _context65.next = 6;
                      return this.getAllLyonStats(this.range.startDate, this.range.endDate);

                    case 6:
                      this.rows = _context65.sent;
                      _context65.next = 9;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.chartData = _context65.sent;
                      _context65.next = 12;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 12:
                      this.summaryMetricsData = _context65.sent;
                      this.refreshTable();

                    case 14:
                    case "end":
                      return _context65.stop();
                  }
                }
              }, _callee65, this);
            }));
          }
        }, {
          key: "toggleExpandRow",
          value: function toggleExpandRow(row) {
            console.log('Toggled Expand Row!', row);
            this.table.rowDetail.toggleExpandRow(row);
          }
        }, {
          key: "onDetailToggle",
          value: function onDetailToggle(event) {
            console.log('Detail Toggled', event);
          }
        }, {
          key: "routeTester",
          value: function routeTester() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee66() {
              return regeneratorRuntime.wrap(function _callee66$(_context66) {
                while (1) {
                  switch (_context66.prev = _context66.next) {
                    case 0:
                      console.log('Testing Route');
                      this.lyonService.testingRoute().subscribe(function (response) {
                        console.log(response);
                      }), function (err) {
                        console.log(err);
                      };

                    case 2:
                    case "end":
                      return _context66.stop();
                  }
                }
              }, _callee66, this);
            }));
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyFromLocalStorage",
          value: function getSelectedCompanyFromLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          } //get Tags with selected company

        }, {
          key: "getCompanyTags",
          value: function getCompanyTags(selectedCompany) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee67() {
              var companyId, response;
              return regeneratorRuntime.wrap(function _callee67$(_context67) {
                while (1) {
                  switch (_context67.prev = _context67.next) {
                    case 0:
                      companyId = selectedCompany.split("/")[1];
                      _context67.prev = 1;
                      _context67.next = 4;
                      return this.tagService.getCompanyTags(companyId).toPromise();

                    case 4:
                      response = _context67.sent;
                      return _context67.abrupt("return", response);

                    case 8:
                      _context67.prev = 8;
                      _context67.t0 = _context67["catch"](1);
                      return _context67.abrupt("return", _context67.t0);

                    case 11:
                    case "end":
                      return _context67.stop();
                  }
                }
              }, _callee67, this, [[1, 8]]);
            }));
          } //get Stat all

        }, {
          key: "getAllLyonStats",
          value: function getAllLyonStats(startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee68() {
              var response, _iterator22, _step22, tagL, _iterator23, _step23, tagSub;

              return regeneratorRuntime.wrap(function _callee68$(_context68) {
                while (1) {
                  switch (_context68.prev = _context68.next) {
                    case 0:
                      _context68.prev = 0;
                      _context68.next = 3;
                      return this.lyonService.getAllStats(startDate, endDate).toPromise();

                    case 3:
                      response = _context68.sent;
                      this.loadingIndicator = false;
                      this.allstat = response;
                      this.allstat.map(function (resStat) {
                        resStat.publisher = "No Publisher";
                        resStat.tagname = "No Tag";
                      }); // var allLyonStat = [];

                      _iterator22 = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                          tagL = _step22.value;

                          if (tagL.tag.advertiser == "lyons") {
                            _iterator23 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                                tagSub = _step23.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allstat.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allstat.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_1.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allstat.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_2.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allstat.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_3.tagname = tagL.tag.name;
                                    }
                                  });
                                }
                              }
                            } catch (err) {
                              _iterator23.e(err);
                            } finally {
                              _iterator23.f();
                            }
                          }
                        }
                      } catch (err) {
                        _iterator22.e(err);
                      } finally {
                        _iterator22.f();
                      }

                      return _context68.abrupt("return", this.allstat);

                    case 12:
                      _context68.prev = 12;
                      _context68.t0 = _context68["catch"](0);
                      return _context68.abrupt("return", _context68.t0);

                    case 15:
                    case "end":
                      return _context68.stop();
                  }
                }
              }, _callee68, this, [[0, 12]]);
            }));
          }
        }, {
          key: "groupDate",
          value: function groupDate() {
            var helperSummary = {};
            var groupData = this.allstat.reduce(function (r, o) {
              var key = o.date;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].cpc += parseFloat(o.cpc ? o.cpc : 0);
                helperSummary[key].ctr += parseFloat(o.ctr ? o.ctr : 0);
                helperSummary[key].biddedCtr += parseFloat(o.biddedCtr ? o.biddedCtr : 0);
                helperSummary[key].biddedSearches += parseFloat(o.biddedSearches ? o.biddedSearches : 0);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator24 = _createForOfIteratorHelper(groupData),
                _step24;

            try {
              for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                var group = _step24.value;
                group.split = group.split / group.counter;
                group.biddedCtr = group.biddedCtr / group.counter;
                group.ctr = group.ctr / group.counter;
              }
            } catch (err) {
              _iterator24.e(err);
            } finally {
              _iterator24.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = true;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "groupSubid",
          value: function groupSubid() {
            var helperSummary = {};
            var groupData = this.allstat.reduce(function (r, o) {
              var key = o.subid;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].cpc += parseFloat(o.cpc ? o.cpc : 0);
                helperSummary[key].ctr += parseFloat(o.ctr ? o.ctr : 0);
                helperSummary[key].biddedCtr += parseFloat(o.biddedCtr ? o.biddedCtr : 0);
                helperSummary[key].biddedSearches += parseFloat(o.biddedSearches ? o.biddedSearches : 0);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator25 = _createForOfIteratorHelper(groupData),
                _step25;

            try {
              for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                var group = _step25.value;
                group.split = group.split / group.counter;
                group.biddedCtr = group.biddedCtr / group.counter;
                group.ctr = group.ctr / group.counter;
              }
            } catch (err) {
              _iterator25.e(err);
            } finally {
              _iterator25.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = true;
            this.cdr.markForCheck();
          }
        }, {
          key: "groupProvider",
          value: function groupProvider() {
            var helperSummary = {};
            var groupData = this.allstat.reduce(function (r, o) {
              var key = o.publisher;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].cpc += parseFloat(o.cpc ? o.cpc : 0);
                helperSummary[key].ctr += parseFloat(o.ctr ? o.ctr : 0);
                helperSummary[key].biddedCtr += parseFloat(o.biddedCtr ? o.biddedCtr : 0);
                helperSummary[key].biddedSearches += parseFloat(o.biddedSearches ? o.biddedSearches : 0);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator26 = _createForOfIteratorHelper(groupData),
                _step26;

            try {
              for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                var group = _step26.value;
                group.split = group.split / group.counter;
                group.biddedCtr = group.biddedCtr / group.counter;
                group.ctr = group.ctr / group.counter;
              }
            } catch (err) {
              _iterator26.e(err);
            } finally {
              _iterator26.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = true;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "backGroup",
          value: function backGroup() {
            this.rows = this.allstat;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "updateAllLyonStats",
          value: function updateAllLyonStats(company, startDate, endDate) {
            this.lyonService.updateAllLyonStats(company, startDate, endDate).subscribe(function (response) {
              console.log(response);
            }), function (err) {
              console.log(err);
            };
          }
        }, {
          key: "updateReportingFiltering",
          value: function updateReportingFiltering(range) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee69() {
              return regeneratorRuntime.wrap(function _callee69$(_context69) {
                while (1) {
                  switch (_context69.prev = _context69.next) {
                    case 0:
                      // console.log('Update report filtering....');
                      this.range = range;
                      _context69.next = 3;
                      return this.getAllLyonStats(this.range.startDate, this.range.endDate);

                    case 3:
                      this.rows = _context69.sent;
                      _context69.next = 6;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.chartData = _context69.sent;
                      _context69.next = 9;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.summaryMetricsData = _context69.sent;
                      this.groupPublishFlag = false;
                      this.refreshTable();

                    case 12:
                    case "end":
                      return _context69.stop();
                  }
                }
              }, _callee69, this);
            }));
          }
        }, {
          key: "refreshTable",
          value: function refreshTable() {
            this.cdr.markForCheck();
          }
        }, {
          key: "getSummaryMetrics",
          value: function getSummaryMetrics(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee70() {
              var response, allSummary, currentPercentPace, lastPercentPace, selectedPercentPace;
              return regeneratorRuntime.wrap(function _callee70$(_context70) {
                while (1) {
                  switch (_context70.prev = _context70.next) {
                    case 0:
                      _context70.prev = 0;
                      _context70.next = 3;
                      return this.lyonService.getSummaryMetrics(company, startDate, endDate).toPromise();

                    case 3:
                      response = _context70.sent;
                      allSummary = {};
                      currentPercentPace = 0;
                      lastPercentPace = 0;
                      selectedPercentPace = 0;

                      if (response.summary[0].lastMonthStat[0].profitPace != 0) {
                        currentPercentPace = (response.summary[0].summaryMetrics[0].profitPace - response.summary[0].lastMonthStat[0].profitPace) / response.summary[0].lastMonthStat[0].profitPace * 100;
                      }

                      if (response.summary[0].twoLastMonthStat[0].profitPace != 0) {
                        lastPercentPace = (response.summary[0].lastMonthStat[0].profitPace - response.summary[0].twoLastMonthStat[0].profitPace) / response.summary[0].twoLastMonthStat[0].profitPace * 100;
                      }

                      if (response.summary[0].prevSelectedStat[0].profitPace != 0) {
                        selectedPercentPace = (response.summary[0].selectedStat[0].profitPace - response.summary[0].prevSelectedStat[0].profitPace) / response.summary[0].prevSelectedStat[0].profitPace * 100;
                      }

                      response.summary[0].summaryMetrics[0].percentPace = currentPercentPace;
                      response.summary[0].lastMonthStat[0].percentPace = lastPercentPace;
                      response.summary[0].selectedStat[0].percentPace = selectedPercentPace;
                      response.summary[0].selectedStat[0].selectedStartDate = startDate;
                      response.summary[0].selectedStat[0].selectedEndDate = endDate;
                      allSummary['summary'] = response.summary;
                      return _context70.abrupt("return", allSummary);

                    case 20:
                      _context70.prev = 20;
                      _context70.t0 = _context70["catch"](0);
                      return _context70.abrupt("return", _context70.t0);

                    case 23:
                    case "end":
                      return _context70.stop();
                  }
                }
              }, _callee70, this, [[0, 20]]);
            }));
          }
        }, {
          key: "getChartMetrics",
          value: function getChartMetrics(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee71() {
              var response, sortResponse, helperChart, resultChart, revenuePerDayVal, datesOfRevenueVal, searchesPerDayVal, chartDataValue, _iterator27, _step27, resVal;

              return regeneratorRuntime.wrap(function _callee71$(_context71) {
                while (1) {
                  switch (_context71.prev = _context71.next) {
                    case 0:
                      _context71.prev = 0;
                      _context71.next = 3;
                      return this.lyonService.getAllStats(startDate, endDate).toPromise();

                    case 3:
                      response = _context71.sent;
                      sortResponse = response.slice().sort(function (a, b) {
                        return a.date - b.date;
                      });
                      this.allChart = sortResponse; // var chartAllLyonStat = [];
                      // for (var tagL of this.tagList) {
                      //   for (var tagSub of tagL.tag.subids) {
                      //     if(tagSub.filterTag =="Contains") {
                      //       chartAllLyonStat = chartAllLyonStat.concat(this.allChart.filter(stat => stat.subid.includes(tagSub.subid)))
                      //       chartAllLyonStat.map(stat => {
                      //         stat.publisher = tagL.user ? tagL.user[0].fullname : ""
                      //         stat.tagname = tagL.tag.name
                      //       })
                      //     } else if (tagSub.filterTag =="StartsWith") {
                      //       chartAllLyonStat = chartAllLyonStat.concat(this.allChart.filter(stat => stat.subid.startsWith(tagSub.subid)))
                      //       chartAllLyonStat.map(stat => {
                      //         stat.publisher = tagL.user ? tagL.user[0].fullname : ""
                      //         stat.tagname = tagL.tag.name
                      //       })
                      //     } else if (tagSub.filterTag =="EndsWith") {
                      //       chartAllLyonStat = chartAllLyonStat.concat(this.allChart.filter(stat => stat.subid.endsWith(tagSub.subid)))
                      //       chartAllLyonStat.map(stat => {
                      //         stat.publisher = tagL.user ? tagL.user[0].fullname : ""
                      //         stat.tagname = tagL.tag.name
                      //       })
                      //     } else if (tagSub.filterTag =="ExactValue") {
                      //       chartAllLyonStat = chartAllLyonStat.concat(this.allChart.filter(stat => stat.subid == tagSub.subid ))
                      //       chartAllLyonStat.map(stat => {
                      //         stat.publisher = tagL.user ? tagL.user[0].fullname : ""
                      //         stat.tagname = tagL.tag.name
                      //       })
                      //     }
                      //   }
                      // }
                      //duplicated remove
                      // let filter_data = chartAllLyonStat.filter((obj, pos, arr) => {
                      //   return arr
                      //     .map(mapObj => mapObj._id)
                      //     .indexOf(obj._id) == pos;
                      // });

                      helperChart = {}; // this.allChart.map(f =>{
                      //   f.revenue = parseFloat(f.revenue);
                      //   f.ctr = parseFloat(f.ctr);
                      //   f.searches = parseFloat(f.searches);
                      //   f.biddedCtr = parseFloat(f.biddedCTR);
                      // })

                      resultChart = this.allChart.reduce(function (r, o) {
                        var key = o.date;

                        if (!helperChart[key]) {
                          helperChart[key] = Object.assign({}, o); // create a copy of o

                          r.push(helperChart[key]);
                        } else {
                          helperChart[key].searches += parseInt(o.searches);

                          if (o.revenue) {
                            helperChart[key].revenue += o.revenue;
                          }
                        }

                        return r;
                      }, []);
                      revenuePerDayVal = [];
                      datesOfRevenueVal = [];
                      searchesPerDayVal = [];
                      chartDataValue = {};
                      _iterator27 = _createForOfIteratorHelper(resultChart);

                      try {
                        for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                          resVal = _step27.value;
                          revenuePerDayVal.push(resVal.revenue);
                          datesOfRevenueVal.push(resVal.date);
                          searchesPerDayVal.push(resVal.searches);
                        }
                      } catch (err) {
                        _iterator27.e(err);
                      } finally {
                        _iterator27.f();
                      }

                      chartDataValue['revenuePerDay'] = revenuePerDayVal;
                      chartDataValue['datesOfRevenue'] = datesOfRevenueVal;
                      chartDataValue['searchesPerDay'] = searchesPerDayVal;
                      return _context71.abrupt("return", chartDataValue);

                    case 20:
                      _context71.prev = 20;
                      _context71.t0 = _context71["catch"](0);
                      return _context71.abrupt("return", _context71.t0);

                    case 23:
                    case "end":
                      return _context71.stop();
                  }
                }
              }, _callee71, this, [[0, 20]]);
            }));
          }
        }, {
          key: "combineSummaryMetrics",
          value: function combineSummaryMetrics(metrics) {
            var _this = this;

            metrics.summary.keys.forEach(function (element) {
              _this.summary.revenue += element.revenue;
              _this.summary.profit += element.revenue * ((100 - element.split) * 0.01);
            });
          }
        }]);

        return LyonsComponent;
      }();

      LyonsComponent.ɵfac = function LyonsComponent_Factory(t) {
        return new (t || LyonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_lyon_service__WEBPACK_IMPORTED_MODULE_2__["LyonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]));
      };

      LyonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LyonsComponent,
        selectors: [["app-lyons"]],
        viewQuery: function LyonsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 39,
        vars: 23,
        consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [3, "summaryMetricsData", 4, "ngIf"], [1, "row", "px-6"], [1, "btn", "btn-sm", "btn-primary", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-success", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-info", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-dark", "mx-1", 3, "click"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "loadingIndicator"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "date", 4, "ngIf"], ["name", "subid", 4, "ngIf"], ["name", "publisher", 4, "ngIf"], ["name", "searches", 4, "ngIf"], ["name", "biddedSearches", 4, "ngIf"], ["name", "clicks", 4, "ngIf"], ["name", "biddedCtr", 4, "ngIf"], ["name", "ctr", 4, "ngIf"], ["name", "publisherNet"], ["ngx-datatable-header-template", ""], ["name", "profit"], ["name", "revenue"], ["name", "split"], [3, "chartData"], [3, "summaryMetricsData"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], ["name", "date"], ["name", "subid"], ["name", "publisher"], ["name", "searches"], ["name", "biddedSearches"], ["name", "clicks"], ["name", "biddedCtr"], ["name", "ctr"]],
        template: function LyonsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDatesPicked", function LyonsComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LyonsComponent_app_reporting_revenue_chart_1_Template, 1, 1, "app-reporting-revenue-chart", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LyonsComponent_app_summary_metrics_2_Template, 1, 1, "app-summary-metrics", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LyonsComponent_Template_button_click_4_listener() {
              return ctx.groupDate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Group by Date ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LyonsComponent_Template_button_click_6_listener() {
              return ctx.groupProvider();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Group by Publisher ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LyonsComponent_Template_button_click_8_listener() {
              return ctx.groupSubid();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Group by Subid ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LyonsComponent_Template_button_click_10_listener() {
              return ctx.backGroup();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ngx-datatable", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ngx-datatable-row-detail", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggle", function LyonsComponent_Template_ngx_datatable_row_detail_toggle_14_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LyonsComponent_ng_template_16_Template, 6, 0, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LyonsComponent_ng_template_18_Template, 1, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LyonsComponent_ngx_datatable_column_19_Template, 3, 0, "ngx-datatable-column", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LyonsComponent_ngx_datatable_column_20_Template, 3, 0, "ngx-datatable-column", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, LyonsComponent_ngx_datatable_column_21_Template, 3, 0, "ngx-datatable-column", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, LyonsComponent_ngx_datatable_column_22_Template, 3, 0, "ngx-datatable-column", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, LyonsComponent_ngx_datatable_column_23_Template, 3, 0, "ngx-datatable-column", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, LyonsComponent_ngx_datatable_column_24_Template, 3, 0, "ngx-datatable-column", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, LyonsComponent_ngx_datatable_column_25_Template, 3, 0, "ngx-datatable-column", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, LyonsComponent_ngx_datatable_column_26_Template, 3, 0, "ngx-datatable-column", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ngx-datatable-column", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, LyonsComponent_ng_template_28_Template, 1, 0, "ng-template", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, LyonsComponent_ng_template_29_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ngx-datatable-column", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, LyonsComponent_ng_template_31_Template, 1, 0, "ng-template", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, LyonsComponent_ng_template_32_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ngx-datatable-column", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, LyonsComponent_ng_template_34_Template, 1, 0, "ng-template", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, LyonsComponent_ng_template_35_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ngx-datatable-column", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, LyonsComponent_ng_template_37_Template, 1, 0, "ng-template", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, LyonsComponent_ng_template_38_Template, 4, 6, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.summaryMetricsData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 30)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);
          }
        },
        directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__["ReportingFilteringComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnHeaderDirective"], _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__["ReportingRevenueChartComponent"], _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__["SummaryMetricsComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL2x5b25zL2x5b25zLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LyonsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-lyons',
            templateUrl: './lyons.component.html',
            styleUrls: ['./lyons.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_service_admin_stats_lyon_service__WEBPACK_IMPORTED_MODULE_2__["LyonService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
          }, {
            type: src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['expandableTable']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/manual-split-update/manual-split-update.component.ts":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/admin-reporting/manual-split-update/manual-split-update.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ManualSplitUpdateComponent */

    /***/
    function srcAppModulesAdminReportingManualSplitUpdateManualSplitUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManualSplitUpdateComponent", function () {
        return ManualSplitUpdateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_shared_service_admin_stats_update_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/update.service */
      "./src/app/shared/service/admin-stats/update.service.ts");
      /* harmony import */


      var src_app_modules_company_management_company_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modules/company-management/company-management.service */
      "./src/app/modules/company-management/company-management.service.ts");
      /* harmony import */


      var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modules/auth/_services/auth.service */
      "./src/app/modules/auth/_services/auth.service.ts");
      /* harmony import */


      var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/service/notification.service */
      "./src/app/shared/service/notification.service.ts");
      /* harmony import */


      var _tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../tag-management/tag-management.service */
      "./src/app/modules/tag-management/tag-management.service.ts");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

      function ManualSplitUpdateComponent_mat_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var reportProvider_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", reportProvider_r8.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", reportProvider_r8.viewValue, " ");
        }
      }

      function ManualSplitUpdateComponent_mat_option_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tagItem_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tagItem_r9.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tagItem_r9.viewValue, " ");
        }
      }

      function ManualSplitUpdateComponent_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid start date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ManualSplitUpdateComponent_mat_error_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid end date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ManualSplitUpdateComponent_mat_error_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Start Date Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ManualSplitUpdateComponent_mat_error_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "End Date Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ManualSplitUpdateComponent_mat_option_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dateRange_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", dateRange_r10.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dateRange_r10.viewValue, " ");
        }
      }

      var ManualSplitUpdateComponent = /*#__PURE__*/function () {
        function ManualSplitUpdateComponent(manualUpdateService, fb, companyService, authService, userService, notification, tagService, cdr) {
          _classCallCheck(this, ManualSplitUpdateComponent);

          this.manualUpdateService = manualUpdateService;
          this.fb = fb;
          this.companyService = companyService;
          this.authService = authService;
          this.userService = userService;
          this.notification = notification;
          this.tagService = tagService;
          this.cdr = cdr;
          this.reportProviderData = [];
          this.tagData = [];
          this.selectedTagData = [];
          this.reportUpdateTitle = 'Report Split Update';
          this.selectedTagName = '';
          this.currentUser = this.authService.currentUserValue;
          this.companySelected = this.getSelectedCompanyLocalStorage();
        }

        _createClass(ManualSplitUpdateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getReportingProviderList();
            this.getAllTags();
            this.manaulUpFG = this.fb.group({
              reportType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              tag: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              preSelectValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            }); //Get the all PRESELECT ranges

            this.preSetDateRanges = this.getDateRanges();
            this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            }); //Selected range of date picker

            this.selectedRange = {
              startDate: '',
              endDate: ''
            }; //Starting value of mat select

            this.preSelectValue = 'last7days'; //Gets the true start and end date values in date format

            this.preSelectDates = this.getPreSetDateRange(this.preSelectValue); //Manually updates the mat date picker with new start and end dates

            this.updateDatePickerRange(this.preSelectDates.startDate, this.preSelectDates.endDate);
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyLocalStorage",
          value: function getSelectedCompanyLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }, {
          key: "getAllTags",
          value: function getAllTags() {
            var _this2 = this;

            this.tagService.getAllTags().subscribe(function (response) {
              var resData = [];

              if (_this2.companySelected) {
                resData = response.filter(function (res) {
                  return res.company[0]['_id'] == _this2.companySelected;
                });
              }

              resData.map(function (res) {
                _this2.tagData.push({
                  value: res._id,
                  viewValue: res.name,
                  advertiser: res.advertiser
                });
              });
              _this2.selectedTagData = _this2.tagData;

              _this2.cdr.detectChanges();
            });
          }
        }, {
          key: "handleTag",
          value: function handleTag(event) {
            this.selectedTagName = this.tagData.filter(function (tag) {
              return tag.value == event.value;
            })[0].viewValue;
          } //get report Provider List

        }, {
          key: "getReportingProviderList",
          value: function getReportingProviderList() {
            var _this3 = this;

            if (this.companySelected) {
              this.companyService.getOneCompany(this.companySelected.split('/')[1]).subscribe(function (res) {
                res.reportingProviders.map(function (report) {
                  _this3.reportProviderData.push({
                    value: report.reportingProvider,
                    viewValue: report.reportingProvider
                  });
                });
              });
            }
          } //Updates the date picker range manually
          //Params startDate and endDate

        }, {
          key: "updateDatePickerRange",
          value: function updateDatePickerRange(startDate, endDate) {
            this.manaulUpFG.patchValue({
              startDate: moment__WEBPACK_IMPORTED_MODULE_2__(startDate, 'MM-DD-YYYY').toDate(),
              endDate: moment__WEBPACK_IMPORTED_MODULE_2__(endDate, 'MM-DD-YYYY').toDate()
            });
            this.range.patchValue({
              startDate: moment__WEBPACK_IMPORTED_MODULE_2__(startDate, 'MM-DD-YYYY').toDate(),
              endDate: moment__WEBPACK_IMPORTED_MODULE_2__(endDate, 'MM-DD-YYYY').toDate()
            });
          } //Grabbing the mat selector options

        }, {
          key: "getDateRanges",
          value: function getDateRanges() {
            return [{
              value: 'today',
              viewValue: 'Today'
            }, {
              value: 'yesterday',
              viewValue: 'Yesterday'
            }, {
              value: 'last7days',
              viewValue: 'Last 7 Days'
            }, {
              value: 'last30days',
              viewValue: 'Last 30 Days'
            }, {
              value: 'monthToDate',
              viewValue: 'Month to Date'
            }, {
              value: 'lastMonth',
              viewValue: 'Last Month'
            }, {
              value: 'custom',
              viewValue: 'Custom'
            }];
          } //Monitors mat selector, if changed (and not custom). updates the actual date picker

        }, {
          key: "onPreSetRangeSelectChange",
          value: function onPreSetRangeSelectChange(selection) {
            if (selection.value !== 'custom') {
              this.preSelectValue = selection.value;
              this.preSelectDates = this.getPreSetDateRange(this.preSelectValue); //Updates the date picker range manually

              this.updateDatePickerRange(this.preSelectDates.startDate, this.preSelectDates.endDate);
            }
          } //Convert mat selector options and return actual dates

        }, {
          key: "getPreSetDateRange",
          value: function getPreSetDateRange(selection) {
            var dateFormat = 'MM-DD-YYYY';

            switch (selection) {
              case 'today':
                return {
                  startDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().startOf('day').format(dateFormat),
                  endDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().endOf('day').format(dateFormat)
                };

              case 'yesterday':
                return {
                  startDate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'days').utc().startOf('day').format(dateFormat),
                  endDate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'days').utc().endOf('day').format(dateFormat)
                };

              case 'last7days':
                return {
                  startDate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(7, 'days').utc().startOf('day').format(dateFormat),
                  endDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().endOf('day').format(dateFormat)
                };

              case 'last30days':
                return {
                  startDate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(30, 'days').utc().startOf('day').format(dateFormat),
                  endDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().endOf('day').format(dateFormat)
                };

              case 'monthToDate':
                return {
                  startDate: moment__WEBPACK_IMPORTED_MODULE_2__().startOf('month').utc().startOf('day').format(dateFormat),
                  endDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().endOf('day').format(dateFormat)
                };

              case 'lastMonth':
                return {
                  startDate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'months').startOf('month').utc().startOf('day').format(dateFormat),
                  endDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().subtract(1, 'months').endOf('month').format(dateFormat)
                };
            }
          }
        }, {
          key: "handleReport",
          value: function handleReport(event) {
            if (event.value.length > 0) {
              var typeName = event.value.toLowerCase().replace(/\b[a-z]/g, function (letter) {
                return letter.toUpperCase();
              });
              this.reportUpdateTitle = "".concat(typeName, " Split Update");
              this.selectedTagData = this.tagData.filter(function (tag) {
                return tag.advertiser == event.value;
              });
              this.cdr.detectChanges();
            }
          }
        }, {
          key: "onReportSubmit",
          value: function onReportSubmit() {
            var _this4 = this;

            if (this.manaulUpFG.valid) {
              this.manaulUpFG.addControl('company', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
              this.manaulUpFG.patchValue({
                company: this.companySelected
              }); //var reportTypeValue = this.manaulUpFG.value['reportType'];

              this.manualUpdateService.updateManualSplit(this.manaulUpFG.value).subscribe(function (response) {
                var checkExist = _this4.isObjectEmpty(response);

                if (!checkExist) {
                  _this4.notification.showSuccess("".concat(_this4.selectedTagName, " data splits  successfully updated!"), "");
                } else {
                  _this4.notification.showWarning("".concat(_this4.selectedTagName, " data not existed!"), "");
                }
              });
            }
          }
        }, {
          key: "isObjectEmpty",
          value: function isObjectEmpty(obj) {
            return Object.keys(obj).length === 0;
          } //Detects when datepicker change is updated

        }, {
          key: "changeDatePicker",
          value: function changeDatePicker() {
            if (this.range.valid) {
              this.selectedRange.startDate = this.range.value.startDate;
              this.selectedRange.endDate = this.range.value.endDate;
              this.manaulUpFG.patchValue({
                startDate: moment__WEBPACK_IMPORTED_MODULE_2__(this.range.value.startDate, 'MM-DD-YYYY').toDate(),
                endDate: moment__WEBPACK_IMPORTED_MODULE_2__(this.range.value.endDate, 'MM-DD-YYYY').toDate()
              });
              this.preSelectValue = 'custom';
            }
          }
        }]);

        return ManualSplitUpdateComponent;
      }();

      ManualSplitUpdateComponent.ɵfac = function ManualSplitUpdateComponent_Factory(t) {
        return new (t || ManualSplitUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_update_service__WEBPACK_IMPORTED_MODULE_3__["ManualUpdateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_company_management_company_management_service__WEBPACK_IMPORTED_MODULE_4__["CompanyManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_8__["TagManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      ManualSplitUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ManualSplitUpdateComponent,
        selectors: [["app-manual-split-update"]],
        decls: 41,
        vars: 13,
        consts: [["id", "manaulUpForm", 1, "example-container", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], ["matNativeControl", "", "placeholder", "Select Provider", "formControlName", "reportType", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "placeholder", "Select Report", "formControlName", "tag", 3, "selectionChange"], [3, "rangePicker", "formGroup", "dateChange"], ["matStartDate", "", "formControlName", "startDate", "placeholder", "Start date", "required", ""], ["matEndDate", "", "formControlName", "endDate", "placeholder", "End date", "required", "", 3, "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], ["formControlName", "preSelectValue", 3, "ngModel", "ngModelChange", "selectionChange"], ["mat-raised-button", "", "color", "primary", "type", "submit"], [3, "value"]],
        template: function ManualSplitUpdateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ManualSplitUpdateComponent_Template_form_ngSubmit_0_listener() {
              return ctx.onReportSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Provider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ManualSplitUpdateComponent_Template_mat_select_selectionChange_12_listener($event) {
              return ctx.handleReport($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ManualSplitUpdateComponent_mat_option_13_Template, 2, 2, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tag");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ManualSplitUpdateComponent_Template_mat_select_selectionChange_17_listener($event) {
              return ctx.handleTag($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ManualSplitUpdateComponent_mat_option_18_Template, 2, 2, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Enter a custom date range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-date-range-input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function ManualSplitUpdateComponent_Template_mat_date_range_input_dateChange_22_listener() {
              return ctx.changeDatePicker();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function ManualSplitUpdateComponent_Template_input_dateChange_24_listener() {
              return ctx.changeDatePicker();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-datepicker-toggle", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-date-range-picker", null, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ManualSplitUpdateComponent_mat_error_28_Template, 2, 0, "mat-error", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ManualSplitUpdateComponent_mat_error_29_Template, 2, 0, "mat-error", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ManualSplitUpdateComponent_mat_error_30_Template, 2, 0, "mat-error", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ManualSplitUpdateComponent_mat_error_31_Template, 2, 0, "mat-error", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Preset Date Range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-select", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManualSplitUpdateComponent_Template_mat_select_ngModelChange_35_listener($event) {
              return ctx.preSelectValue = $event;
            })("selectionChange", function ManualSplitUpdateComponent_Template_mat_select_selectionChange_35_listener($event) {
              return ctx.onPreSetRangeSelectChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ManualSplitUpdateComponent_mat_option_36_Template, 2, 2, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Update Splits");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.manaulUpFG);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reportUpdateTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reportProviderData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedTagData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rangePicker", _r2)("formGroup", ctx.range);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.manaulUpFG.controls.startDate.hasError("matStartDateInvalid"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.manaulUpFG.controls.endDate.hasError("matEndDateInvalid"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.manaulUpFG.controls.startDate.errors == null ? null : ctx.manaulUpFG.controls.startDate.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.manaulUpFG.controls.endDate.errors == null ? null : ctx.manaulUpFG.controls.endDate.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.preSelectValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.preSetDateRanges);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatStartDate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDateRangePicker"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL21hbnVhbC1zcGxpdC11cGRhdGUvbWFudWFsLXNwbGl0LXVwZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManualSplitUpdateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-manual-split-update',
            templateUrl: './manual-split-update.component.html',
            styleUrls: ['./manual-split-update.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_service_admin_stats_update_service__WEBPACK_IMPORTED_MODULE_3__["ManualUpdateService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_modules_company_management_company_management_service__WEBPACK_IMPORTED_MODULE_4__["CompanyManagementService"]
          }, {
            type: src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }, {
            type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]
          }, {
            type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]
          }, {
            type: _tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_8__["TagManagementService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/manual-update/manual-update.component.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/admin-reporting/manual-update/manual-update.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: ManualUpdateComponent */

    /***/
    function srcAppModulesAdminReportingManualUpdateManualUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManualUpdateComponent", function () {
        return ManualUpdateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var firebase_messaging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase/messaging */
      "./node_modules/firebase/messaging/dist/index.esm.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var src_app_shared_service_admin_stats_update_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/update.service */
      "./src/app/shared/service/admin-stats/update.service.ts");
      /* harmony import */


      var src_app_modules_company_management_company_management_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modules/company-management/company-management.service */
      "./src/app/modules/company-management/company-management.service.ts");
      /* harmony import */


      var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modules/auth/_services/auth.service */
      "./src/app/modules/auth/_services/auth.service.ts");
      /* harmony import */


      var src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/service/notification.service */
      "./src/app/shared/service/notification.service.ts");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

      function ManualUpdateComponent_mat_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var reportItem_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", reportItem_r7.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", reportItem_r7.viewValue, " ");
        }
      }

      function ManualUpdateComponent_mat_error_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid start date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ManualUpdateComponent_mat_error_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid end date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ManualUpdateComponent_mat_error_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Start Date Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ManualUpdateComponent_mat_error_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "End Date Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ManualUpdateComponent_mat_option_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dateRange_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", dateRange_r8.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dateRange_r8.viewValue, " ");
        }
      }

      var ManualUpdateComponent = /*#__PURE__*/function () {
        function ManualUpdateComponent(manualUpdateService, fb, companyService, authService, userService, notification) {
          _classCallCheck(this, ManualUpdateComponent);

          this.manualUpdateService = manualUpdateService;
          this.fb = fb;
          this.companyService = companyService;
          this.authService = authService;
          this.userService = userService;
          this.notification = notification;
          this.reportUpdateTitle = 'Report Stat Update';
          this.reportTypeData = [];
          this.message = null;
          this.currentUser = this.authService.currentUserValue;
          this.companySelected = this.getSelectedCompanyLocalStorage();
        }

        _createClass(ManualUpdateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getReportingProviderList();
            this.manaulUpFG = this.fb.group({
              reportType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              preSelectValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            }); //Get the all PRESELECT ranges

            this.preSetDateRanges = this.getDateRanges();
            this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            }); //Selected range of date picker

            this.selectedRange = {
              startDate: '',
              endDate: ''
            }; //Starting value of mat select

            this.preSelectValue = 'last7days'; //Gets the true start and end date values in date format

            this.preSelectDates = this.getPreSetDateRange(this.preSelectValue); //Manually updates the mat date picker with new start and end dates

            this.updateDatePickerRange(this.preSelectDates.startDate, this.preSelectDates.endDate);
            this.requestPermission();
            this.listenNotification();
          }
        }, {
          key: "requestPermission",
          value: function requestPermission() {
            var _this5 = this;

            var messaging = Object(firebase_messaging__WEBPACK_IMPORTED_MODULE_3__["getMessaging"])();
            console.log(messaging, "------message");
            Object(firebase_messaging__WEBPACK_IMPORTED_MODULE_3__["getToken"])(messaging, {
              vapidKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase.vapidKey
            }).then(function (currentToken) {
              if (currentToken) {
                _this5.deviceToken = currentToken;
              } else {
                // Show permission request UI
                console.log('No registration token available. Request permission to generate one.');
              }
            })["catch"](function (err) {
              console.log('An error occurred while retrieving token. ', err);
            });
          }
        }, {
          key: "listenNotification",
          value: function listenNotification() {
            var _this6 = this;

            var messaging = Object(firebase_messaging__WEBPACK_IMPORTED_MODULE_3__["getMessaging"])();
            console.log(messaging, "----lissten--message");
            Object(firebase_messaging__WEBPACK_IMPORTED_MODULE_3__["onMessage"])(messaging, function (payload) {
              console.log('Message received. ', payload);
              _this6.message = payload;

              _this6.notification.showWarning(payload.notification.body, payload.notification.title);
            });
          } //get Report Providers in Current Company

        }, {
          key: "getReportingProviderList",
          value: function getReportingProviderList() {
            var _this7 = this;

            if (this.companySelected) {
              this.companyService.getOneCompany(this.companySelected.split('/')[1]).subscribe(function (res) {
                res.reportingProviders.map(function (report) {
                  _this7.reportTypeData.push({
                    value: report.reportingProvider,
                    viewValue: report.reportingProvider
                  });
                });
              });
            }
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyLocalStorage",
          value: function getSelectedCompanyLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }, {
          key: "onReportSubmit",
          value: function onReportSubmit() {
            var _this8 = this;

            if (this.manaulUpFG.valid) {
              this.manaulUpFG.addControl('company', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
              this.manaulUpFG.patchValue({
                company: this.companySelected
              });
              var reportTypeValue = this.manaulUpFG.value['reportType'];
              this.manualUpdateService.updateManualStats(this.manaulUpFG.value, this.deviceToken).subscribe(function (response) {
                var checkExist = _this8.isObjectEmpty(response);

                if (!checkExist) {
                  _this8.notification.showSuccess("".concat(reportTypeValue, " data stats successfully updated!"), "");
                } else {
                  _this8.notification.showWarning("".concat(reportTypeValue, " data not existed!"), "");
                }
              });
            }
          }
        }, {
          key: "isObjectEmpty",
          value: function isObjectEmpty(obj) {
            return Object.keys(obj).length === 0;
          } //Grabbing the mat selector options

        }, {
          key: "getDateRanges",
          value: function getDateRanges() {
            return [{
              value: 'today',
              viewValue: 'Today'
            }, {
              value: 'yesterday',
              viewValue: 'Yesterday'
            }, {
              value: 'last7days',
              viewValue: 'Last 7 Days'
            }, {
              value: 'last30days',
              viewValue: 'Last 30 Days'
            }, {
              value: 'monthToDate',
              viewValue: 'Month to Date'
            }, {
              value: 'lastMonth',
              viewValue: 'Last Month'
            }, {
              value: 'custom',
              viewValue: 'Custom'
            }];
          } //Detects when datepicker change is updated

        }, {
          key: "changeDatePicker",
          value: function changeDatePicker() {
            if (this.range.valid) {
              this.selectedRange.startDate = this.range.value.startDate;
              this.selectedRange.endDate = this.range.value.endDate;
              this.manaulUpFG.patchValue({
                startDate: moment__WEBPACK_IMPORTED_MODULE_2__(this.range.value.startDate, 'MM-DD-YYYY').toDate(),
                endDate: moment__WEBPACK_IMPORTED_MODULE_2__(this.range.value.endDate, 'MM-DD-YYYY').toDate()
              });
              this.preSelectValue = 'custom';
            }
          } //Monitors mat selector, if changed (and not custom). updates the actual date picker

        }, {
          key: "onPreSetRangeSelectChange",
          value: function onPreSetRangeSelectChange(selection) {
            if (selection.value !== 'custom') {
              this.preSelectValue = selection.value;
              this.preSelectDates = this.getPreSetDateRange(this.preSelectValue); //Updates the date picker range manually

              this.updateDatePickerRange(this.preSelectDates.startDate, this.preSelectDates.endDate);
            }
          } //Updates the date picker range manually
          //Params startDate and endDate

        }, {
          key: "updateDatePickerRange",
          value: function updateDatePickerRange(startDate, endDate) {
            this.manaulUpFG.patchValue({
              startDate: moment__WEBPACK_IMPORTED_MODULE_2__(startDate, 'MM-DD-YYYY').toDate(),
              endDate: moment__WEBPACK_IMPORTED_MODULE_2__(endDate, 'MM-DD-YYYY').toDate()
            });
            this.range.patchValue({
              startDate: moment__WEBPACK_IMPORTED_MODULE_2__(startDate, 'MM-DD-YYYY').toDate(),
              endDate: moment__WEBPACK_IMPORTED_MODULE_2__(endDate, 'MM-DD-YYYY').toDate()
            });
          } //Convert mat selector options and return actual dates

        }, {
          key: "getPreSetDateRange",
          value: function getPreSetDateRange(selection) {
            var dateFormat = 'MM-DD-YYYY';

            switch (selection) {
              case 'today':
                return {
                  startDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().startOf('day').format(dateFormat),
                  endDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().endOf('day').format(dateFormat)
                };

              case 'yesterday':
                return {
                  startDate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'days').utc().startOf('day').format(dateFormat),
                  endDate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'days').utc().endOf('day').format(dateFormat)
                };

              case 'last7days':
                return {
                  startDate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(7, 'days').utc().startOf('day').format(dateFormat),
                  endDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().endOf('day').format(dateFormat)
                };

              case 'last30days':
                return {
                  startDate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(30, 'days').utc().startOf('day').format(dateFormat),
                  endDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().endOf('day').format(dateFormat)
                };

              case 'monthToDate':
                return {
                  startDate: moment__WEBPACK_IMPORTED_MODULE_2__().startOf('month').utc().startOf('day').format(dateFormat),
                  endDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().endOf('day').format(dateFormat)
                };

              case 'lastMonth':
                return {
                  startDate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(1, 'months').startOf('month').utc().startOf('day').format(dateFormat),
                  endDate: moment__WEBPACK_IMPORTED_MODULE_2__().utc().subtract(1, 'months').endOf('month').format(dateFormat)
                };
            }
          }
        }, {
          key: "handleReport",
          value: function handleReport(event) {
            if (event.value.length > 0) {
              var typeName = event.value.toLowerCase().replace(/\b[a-z]/g, function (letter) {
                return letter.toUpperCase();
              });
              this.reportUpdateTitle = "".concat(typeName, " Stat Update");
            }
          }
        }]);

        return ManualUpdateComponent;
      }();

      ManualUpdateComponent.ɵfac = function ManualUpdateComponent_Factory(t) {
        return new (t || ManualUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_update_service__WEBPACK_IMPORTED_MODULE_5__["ManualUpdateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_company_management_company_management_service__WEBPACK_IMPORTED_MODULE_6__["CompanyManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"]));
      };

      ManualUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ManualUpdateComponent,
        selectors: [["app-manual-update"]],
        decls: 36,
        vars: 12,
        consts: [["id", "manaulUpForm", 1, "example-container", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-6"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-body"], ["matNativeControl", "", "placeholder", "Select Report", "formControlName", "reportType", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "rangePicker", "formGroup", "dateChange"], ["matStartDate", "", "formControlName", "startDate", "placeholder", "Start date", "required", ""], ["matEndDate", "", "formControlName", "endDate", "placeholder", "End date", "required", "", 3, "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], ["formControlName", "preSelectValue", 3, "ngModel", "ngModelChange", "selectionChange"], ["mat-raised-button", "", "color", "primary", "type", "submit"], [3, "value"]],
        template: function ManualUpdateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ManualUpdateComponent_Template_form_ngSubmit_0_listener() {
              return ctx.onReportSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Report Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ManualUpdateComponent_Template_mat_select_selectionChange_12_listener($event) {
              return ctx.handleReport($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ManualUpdateComponent_mat_option_13_Template, 2, 2, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Enter a custom date range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-date-range-input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function ManualUpdateComponent_Template_mat_date_range_input_dateChange_17_listener() {
              return ctx.changeDatePicker();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function ManualUpdateComponent_Template_input_dateChange_19_listener() {
              return ctx.changeDatePicker();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-datepicker-toggle", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-date-range-picker", null, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ManualUpdateComponent_mat_error_23_Template, 2, 0, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ManualUpdateComponent_mat_error_24_Template, 2, 0, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ManualUpdateComponent_mat_error_25_Template, 2, 0, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ManualUpdateComponent_mat_error_26_Template, 2, 0, "mat-error", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Preset Date Range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-select", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManualUpdateComponent_Template_mat_select_ngModelChange_30_listener($event) {
              return ctx.preSelectValue = $event;
            })("selectionChange", function ManualUpdateComponent_Template_mat_select_selectionChange_30_listener($event) {
              return ctx.onPreSetRangeSelectChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ManualUpdateComponent_mat_option_31_Template, 2, 2, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Update Stats");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.manaulUpFG);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reportUpdateTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reportTypeData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rangePicker", _r1)("formGroup", ctx.range);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.manaulUpFG.controls.startDate.hasError("matStartDateInvalid"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.manaulUpFG.controls.endDate.hasError("matEndDateInvalid"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.manaulUpFG.controls.startDate.errors == null ? null : ctx.manaulUpFG.controls.startDate.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.manaulUpFG.controls.endDate.errors == null ? null : ctx.manaulUpFG.controls.endDate.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.preSelectValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.preSetDateRanges);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatStartDate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDateRangePicker"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL21hbnVhbC11cGRhdGUvbWFudWFsLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManualUpdateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-manual-update',
            templateUrl: './manual-update.component.html',
            styleUrls: ['./manual-update.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_service_admin_stats_update_service__WEBPACK_IMPORTED_MODULE_5__["ManualUpdateService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_modules_company_management_company_management_service__WEBPACK_IMPORTED_MODULE_6__["CompanyManagementService"]
          }, {
            type: src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
          }, {
            type: src_app_shared_service_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"]
          }, {
            type: src_app_shared_service_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/media-net/media-net.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/modules/admin-reporting/media-net/media-net.component.ts ***!
      \**************************************************************************/

    /*! exports provided: MediaNetComponent */

    /***/
    function srcAppModulesAdminReportingMediaNetMediaNetComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaNetComponent", function () {
        return MediaNetComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MediaNetComponent = /*#__PURE__*/function () {
        function MediaNetComponent() {
          _classCallCheck(this, MediaNetComponent);
        }

        _createClass(MediaNetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MediaNetComponent;
      }();

      MediaNetComponent.ɵfac = function MediaNetComponent_Factory(t) {
        return new (t || MediaNetComponent)();
      };

      MediaNetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MediaNetComponent,
        selectors: [["app-media-net"]],
        decls: 2,
        vars: 0,
        template: function MediaNetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "media-net works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL21lZGlhLW5ldC9tZWRpYS1uZXQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaNetComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-media-net',
            templateUrl: './media-net.component.html',
            styleUrls: ['./media-net.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/perion/perion.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/modules/admin-reporting/perion/perion.component.ts ***!
      \********************************************************************/

    /*! exports provided: PerionComponent */

    /***/
    function srcAppModulesAdminReportingPerionPerionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerionComponent", function () {
        return PerionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_shared_service_admin_stats_perion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/perion.service */
      "./src/app/shared/service/admin-stats/perion.service.ts");
      /* harmony import */


      var _shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modules/tag-management/tag-management.service */
      "./src/app/modules/tag-management/tag-management.service.ts");
      /* harmony import */


      var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */
      "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-revenue-chart/reporting-revenue-chart.component */
      "./src/app/shared/modules/reporting-revenue-chart/reporting-revenue-chart.component.ts");
      /* harmony import */


      var _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/modules/summary-metrics/summary-metrics.component */
      "./src/app/shared/modules/summary-metrics/summary-metrics.component.ts");

      var _c0 = ["expandableTable"];

      function PerionComponent_app_reporting_revenue_chart_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-reporting-revenue-chart", 27);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chartData", ctx_r0.chartData);
        }
      }

      function PerionComponent_app_summary_metrics_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-summary-metrics", 28);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("summaryMetricsData", ctx_r1.summaryMetrics);
        }
      }

      function PerionComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PerionComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerionComponent_ng_template_18_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

            var row_r23 = ctx.row;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r25.toggleExpandRow(row_r23);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r24 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("datatable-icon-right", !expanded_r24)("datatable-icon-down", expanded_r24);
        }
      }

      function PerionComponent_ngx_datatable_column_19_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Date ");
        }
      }

      function PerionComponent_ngx_datatable_column_19_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r30 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r30));
        }
      }

      function PerionComponent_ngx_datatable_column_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerionComponent_ngx_datatable_column_19_ng_template_1_Template, 1, 0, "ng-template", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PerionComponent_ngx_datatable_column_19_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
        }
      }

      function PerionComponent_ngx_datatable_column_20_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Subid ");
        }
      }

      function PerionComponent_ngx_datatable_column_20_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r34 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r34);
        }
      }

      function PerionComponent_ngx_datatable_column_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerionComponent_ngx_datatable_column_20_ng_template_1_Template, 1, 0, "ng-template", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PerionComponent_ngx_datatable_column_20_ng_template_2_Template, 2, 1, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PerionComponent_ngx_datatable_column_21_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher ");
        }
      }

      function PerionComponent_ngx_datatable_column_21_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r38 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r38);
        }
      }

      function PerionComponent_ngx_datatable_column_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerionComponent_ngx_datatable_column_21_ng_template_1_Template, 1, 0, "ng-template", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PerionComponent_ngx_datatable_column_21_ng_template_2_Template, 2, 1, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
        }
      }

      function PerionComponent_ngx_datatable_column_22_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Searches ");
        }
      }

      function PerionComponent_ngx_datatable_column_22_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r42 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r42));
        }
      }

      function PerionComponent_ngx_datatable_column_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerionComponent_ngx_datatable_column_22_ng_template_1_Template, 1, 0, "ng-template", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PerionComponent_ngx_datatable_column_22_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PerionComponent_ngx_datatable_column_23_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Clicks ");
        }
      }

      function PerionComponent_ngx_datatable_column_23_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r46 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r46));
        }
      }

      function PerionComponent_ngx_datatable_column_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerionComponent_ngx_datatable_column_23_ng_template_1_Template, 1, 0, "ng-template", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PerionComponent_ngx_datatable_column_23_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PerionComponent_ngx_datatable_column_24_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " CPC ");
        }
      }

      function PerionComponent_ngx_datatable_column_24_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r50 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r50, "USD") || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, 0, "USD"));
        }
      }

      function PerionComponent_ngx_datatable_column_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerionComponent_ngx_datatable_column_24_ng_template_1_Template, 1, 0, "ng-template", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PerionComponent_ngx_datatable_column_24_ng_template_2_Template, 4, 7, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PerionComponent_ngx_datatable_column_25_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " CTR ");
        }
      }

      function PerionComponent_ngx_datatable_column_25_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "percent");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "percent");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r54 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r54, "2.2-2") || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, 0, "2.2-2"));
        }
      }

      function PerionComponent_ngx_datatable_column_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerionComponent_ngx_datatable_column_25_ng_template_1_Template, 1, 0, "ng-template", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PerionComponent_ngx_datatable_column_25_ng_template_2_Template, 4, 7, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PerionComponent_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher Net ");
        }
      }

      function PerionComponent_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r56 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r56, "USD"));
        }
      }

      function PerionComponent_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Profit ");
        }
      }

      function PerionComponent_ng_template_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r58 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r58, "USD"));
        }
      }

      function PerionComponent_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Revenue ");
        }
      }

      function PerionComponent_ng_template_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r60 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r60, "USD"));
        }
      }

      function PerionComponent_ng_template_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Split ");
        }
      }

      function PerionComponent_ng_template_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r62 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r62) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, 0, "1.0-0"));
        }
      }

      var PerionComponent = /*#__PURE__*/function () {
        function PerionComponent(perionService, cdr, userService, tagService) {
          _classCallCheck(this, PerionComponent);

          this.perionService = perionService;
          this.cdr = cdr;
          this.userService = userService;
          this.tagService = tagService;
          this.range = {
            startDate: '',
            endDate: ''
          };
          this.loadingIndicator = true;
          this.summary = {
            revenue: 0,
            profit: 0
          };
          this.groupPublishFlag = false;
          this.groupDateShowFlag = false;
          this.groupSubidShowFlag = false;
          this.columns = [{
            prop: 'name'
          }, {
            name: 'Gender'
          }];
          this.expanded = {};
          this.tagList = [];
          this.selectedCompany = this.getSelectedCompanyFromLocalStorage();
        }

        _createClass(PerionComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee72() {
              return regeneratorRuntime.wrap(function _callee72$(_context72) {
                while (1) {
                  switch (_context72.prev = _context72.next) {
                    case 0:
                      _context72.next = 2;
                      return this.getCompanyTags(this.selectedCompany);

                    case 2:
                      this.tagList = _context72.sent;
                      this.rows = [];
                      _context72.next = 6;
                      return this.getAllPerionStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.rows = _context72.sent;
                      _context72.next = 9;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.chartData = _context72.sent;
                      _context72.next = 12;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 12:
                      this.summaryMetrics = _context72.sent;
                      this.refreshTable();

                    case 14:
                    case "end":
                      return _context72.stop();
                  }
                }
              }, _callee72, this);
            }));
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyFromLocalStorage",
          value: function getSelectedCompanyFromLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }, {
          key: "toggleExpandRow",
          value: function toggleExpandRow(row) {
            console.log('Toggled Expand Row!', row);
            this.table.rowDetail.toggleExpandRow(row);
          }
        }, {
          key: "onDetailToggle",
          value: function onDetailToggle(event) {
            console.log('Detail Toggled', event);
          }
        }, {
          key: "routeTester",
          value: function routeTester() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee73() {
              return regeneratorRuntime.wrap(function _callee73$(_context73) {
                while (1) {
                  switch (_context73.prev = _context73.next) {
                    case 0:
                      console.log('Testing Route');
                      this.perionService.testingRoute().subscribe(function (response) {
                        console.log(response);
                      }), function (err) {
                        console.log(err);
                      };

                    case 2:
                    case "end":
                      return _context73.stop();
                  }
                }
              }, _callee73, this);
            }));
          }
        }, {
          key: "updateAllPerionStats",
          value: function updateAllPerionStats(company, startDate, endDate) {
            this.perionService.updateAllPerionStats(company, startDate, endDate).subscribe(function (response) {
              console.log(response);
            }), function (err) {
              console.log(err);
            };
          }
        }, {
          key: "updateReportingFiltering",
          value: function updateReportingFiltering(range) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee74() {
              return regeneratorRuntime.wrap(function _callee74$(_context74) {
                while (1) {
                  switch (_context74.prev = _context74.next) {
                    case 0:
                      // console.log('Update report filtering....');
                      this.range = range;
                      _context74.next = 3;
                      return this.getAllPerionStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 3:
                      this.rows = _context74.sent;
                      _context74.next = 6;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.chartData = _context74.sent;
                      _context74.next = 9;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.summaryMetrics = _context74.sent;
                      this.groupPublishFlag = false;
                      this.refreshTable();

                    case 12:
                    case "end":
                      return _context74.stop();
                  }
                }
              }, _callee74, this);
            }));
          }
        }, {
          key: "getAllPerionStats",
          value: function getAllPerionStats(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee75() {
              var response, _iterator28, _step28, tagL, _iterator29, _step29, tagSub;

              return regeneratorRuntime.wrap(function _callee75$(_context75) {
                while (1) {
                  switch (_context75.prev = _context75.next) {
                    case 0:
                      _context75.prev = 0;
                      _context75.next = 3;
                      return this.perionService.getAllPerionStats(company, startDate, endDate).toPromise();

                    case 3:
                      response = _context75.sent;
                      // console.log('response:', response);
                      this.loadingIndicator = false;
                      this.allStat = response.stats;
                      this.allStat.map(function (resStat) {
                        resStat.publisher = "No Publisher";
                        resStat.tagname = "No Tag";
                      });
                      _iterator28 = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                          tagL = _step28.value;

                          if (tagL.tag.advertiser == "perion") {
                            _iterator29 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                                tagSub = _step29.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allStat.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allStat.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_1.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allStat.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_2.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allStat.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_3.tagname = tagL.tag.name;
                                    }
                                  });
                                }
                              }
                            } catch (err) {
                              _iterator29.e(err);
                            } finally {
                              _iterator29.f();
                            }
                          }
                        }
                      } catch (err) {
                        _iterator28.e(err);
                      } finally {
                        _iterator28.f();
                      }

                      return _context75.abrupt("return", this.allStat);

                    case 12:
                      _context75.prev = 12;
                      _context75.t0 = _context75["catch"](0);
                      return _context75.abrupt("return", _context75.t0);

                    case 15:
                    case "end":
                      return _context75.stop();
                  }
                }
              }, _callee75, this, [[0, 12]]);
            }));
          }
        }, {
          key: "groupDate",
          value: function groupDate() {
            var helperSummary = {};
            var groupData = this.allStat.reduce(function (r, o) {
              var key = o.date;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].cpc += parseFloat(o.cpc ? o.cpc : 0);
                helperSummary[key].ctr += parseFloat(o.ctr ? o.ctr : 0);
                helperSummary[key].impressions += parseFloat(o.impressions ? o.impressions : 0);
                helperSummary[key].totalsearches += parseFloat(o.totalsearches ? o.totalsearches : 0);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator30 = _createForOfIteratorHelper(groupData),
                _step30;

            try {
              for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                var group = _step30.value;
                group.split = group.split / group.counter;
                group.followon = group.followon / group.counter;
                group.ctr = group.ctr / group.counter;
              }
            } catch (err) {
              _iterator30.e(err);
            } finally {
              _iterator30.f();
            }

            console.log("=======", groupData);
            this.rows = groupData;
            this.groupDateShowFlag = true;
            this.groupPublishFlag = false;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "groupSubid",
          value: function groupSubid() {
            var helperSummary = {};
            var groupData = this.allStat.reduce(function (r, o) {
              var key = o.subid;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].cpc += parseFloat(o.cpc ? o.cpc : 0);
                helperSummary[key].ctr += parseFloat(o.ctr ? o.ctr : 0);
                helperSummary[key].impressions += parseFloat(o.impressions ? o.impressions : 0);
                helperSummary[key].totalsearches += parseFloat(o.totalsearches ? o.totalsearches : 0);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator31 = _createForOfIteratorHelper(groupData),
                _step31;

            try {
              for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                var group = _step31.value;
                group.split = group.split / group.counter;
                group.followon = group.followon / group.counter;
                group.ctr = group.ctr / group.counter;
              }
            } catch (err) {
              _iterator31.e(err);
            } finally {
              _iterator31.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = true;
            this.cdr.markForCheck();
          }
        }, {
          key: "groupProvider",
          value: function groupProvider() {
            var helperSummary = {};
            var groupData = this.allStat.reduce(function (r, o) {
              var key = o.publisher;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].cpc += parseFloat(o.cpc ? o.cpc : 0);
                helperSummary[key].ctr += parseFloat(o.ctr ? o.ctr : 0);
                helperSummary[key].impressions += parseFloat(o.impressions ? o.impressions : 0);
                helperSummary[key].totalsearches += parseFloat(o.totalsearches ? o.totalsearches : 0);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator32 = _createForOfIteratorHelper(groupData),
                _step32;

            try {
              for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                var group = _step32.value;
                group.split = group.split / group.counter;
                group.followon = group.followon / group.counter;
                group.ctr = group.ctr / group.counter;
              }
            } catch (err) {
              _iterator32.e(err);
            } finally {
              _iterator32.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = true;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "backGroup",
          value: function backGroup() {
            this.rows = this.allStat;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "refreshTable",
          value: function refreshTable() {
            this.cdr.markForCheck();
          }
        }, {
          key: "getSummaryMetrics",
          value: function getSummaryMetrics(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee76() {
              var response, allSummary, currentPercentPace, lastPercentPace, selectedPercentPace;
              return regeneratorRuntime.wrap(function _callee76$(_context76) {
                while (1) {
                  switch (_context76.prev = _context76.next) {
                    case 0:
                      _context76.prev = 0;
                      _context76.next = 3;
                      return this.perionService.getSummaryMetrics(company, startDate, endDate).toPromise();

                    case 3:
                      response = _context76.sent;
                      allSummary = {};
                      currentPercentPace = 0;
                      lastPercentPace = 0;
                      selectedPercentPace = 0;

                      if (response.summary[0].lastMonthStat[0].profitPace != 0) {
                        currentPercentPace = (response.summary[0].summaryMetrics[0].profitPace - response.summary[0].lastMonthStat[0].profitPace) / response.summary[0].lastMonthStat[0].profitPace * 100;
                      }

                      if (response.summary[0].twoLastMonthStat[0].profitPace != 0) {
                        lastPercentPace = (response.summary[0].lastMonthStat[0].profitPace - response.summary[0].twoLastMonthStat[0].profitPace) / response.summary[0].twoLastMonthStat[0].profitPace * 100;
                      }

                      if (response.summary[0].prevSelectedStat[0].profitPace != 0) {
                        selectedPercentPace = (response.summary[0].selectedStat[0].profitPace - response.summary[0].prevSelectedStat[0].profitPace) / response.summary[0].prevSelectedStat[0].profitPace * 100;
                      }

                      response.summary[0].summaryMetrics[0].percentPace = currentPercentPace;
                      response.summary[0].lastMonthStat[0].percentPace = lastPercentPace;
                      response.summary[0].selectedStat[0].percentPace = selectedPercentPace;
                      response.summary[0].selectedStat[0].selectedStartDate = startDate;
                      response.summary[0].selectedStat[0].selectedEndDate = endDate;
                      allSummary['summary'] = response.summary;
                      return _context76.abrupt("return", allSummary);

                    case 20:
                      _context76.prev = 20;
                      _context76.t0 = _context76["catch"](0);
                      return _context76.abrupt("return", _context76.t0);

                    case 23:
                    case "end":
                      return _context76.stop();
                  }
                }
              }, _callee76, this, [[0, 20]]);
            }));
          }
        }, {
          key: "getChartMetrics",
          value: function getChartMetrics(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee77() {
              var response, helperChart, resultChart, revenuePerDayVal, datesOfRevenueVal, searchesPerDayVal, chartDataValue, _iterator33, _step33, resVal;

              return regeneratorRuntime.wrap(function _callee77$(_context77) {
                while (1) {
                  switch (_context77.prev = _context77.next) {
                    case 0:
                      _context77.prev = 0;
                      _context77.next = 3;
                      return this.perionService.getAllPerionStats(company, startDate, endDate).toPromise();

                    case 3:
                      response = _context77.sent;
                      // console.log('getAllPerionStats() response:');
                      this.allChartStat = response.stats;
                      this.allChartStat = this.allChartStat.slice().sort(function (a, b) {
                        return a.date - b.date;
                      });
                      helperChart = {};
                      resultChart = this.allChartStat.reduce(function (r, o) {
                        var key = o.date;

                        if (!helperChart[key]) {
                          helperChart[key] = Object.assign({}, o); // create a copy of o

                          r.push(helperChart[key]);
                        } else {
                          helperChart[key].totalsearches += parseInt(o.totalsearches);

                          if (o.revenue) {
                            helperChart[key].revenue += o.revenue;
                          }
                        }

                        return r;
                      }, []);
                      revenuePerDayVal = [];
                      datesOfRevenueVal = [];
                      searchesPerDayVal = [];
                      chartDataValue = {};
                      _iterator33 = _createForOfIteratorHelper(resultChart);

                      try {
                        for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                          resVal = _step33.value;
                          revenuePerDayVal.push(resVal.revenue);
                          datesOfRevenueVal.push(resVal.date);
                          searchesPerDayVal.push(resVal.totalsearches);
                        }
                      } catch (err) {
                        _iterator33.e(err);
                      } finally {
                        _iterator33.f();
                      }

                      chartDataValue['revenuePerDay'] = revenuePerDayVal;
                      chartDataValue['datesOfRevenue'] = datesOfRevenueVal;
                      chartDataValue['searchesPerDay'] = searchesPerDayVal;
                      return _context77.abrupt("return", chartDataValue);

                    case 20:
                      _context77.prev = 20;
                      _context77.t0 = _context77["catch"](0);
                      return _context77.abrupt("return", _context77.t0);

                    case 23:
                    case "end":
                      return _context77.stop();
                  }
                }
              }, _callee77, this, [[0, 20]]);
            }));
          }
        }, {
          key: "combineSummaryMetrics",
          value: function combineSummaryMetrics(metrics) {
            var _this9 = this;

            metrics.summary.keys.forEach(function (element) {
              console.log(element.revenue);
              _this9.summary.revenue += element.revenue;
              _this9.summary.profit += element.revenue * ((100 - element.split) * 0.01);
            });
          } //get Tags with selected company

        }, {
          key: "getCompanyTags",
          value: function getCompanyTags(selectedCompany) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee78() {
              var companyId, response;
              return regeneratorRuntime.wrap(function _callee78$(_context78) {
                while (1) {
                  switch (_context78.prev = _context78.next) {
                    case 0:
                      companyId = selectedCompany.split("/")[1];
                      _context78.prev = 1;
                      _context78.next = 4;
                      return this.tagService.getCompanyTags(companyId).toPromise();

                    case 4:
                      response = _context78.sent;
                      return _context78.abrupt("return", response);

                    case 8:
                      _context78.prev = 8;
                      _context78.t0 = _context78["catch"](1);
                      return _context78.abrupt("return", _context78.t0);

                    case 11:
                    case "end":
                      return _context78.stop();
                  }
                }
              }, _callee78, this, [[1, 8]]);
            }));
          }
        }]);

        return PerionComponent;
      }();

      PerionComponent.ɵfac = function PerionComponent_Factory(t) {
        return new (t || PerionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_perion_service__WEBPACK_IMPORTED_MODULE_2__["PerionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]));
      };

      PerionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: PerionComponent,
        selectors: [["app-perion"]],
        viewQuery: function PerionComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 38,
        vars: 23,
        consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [3, "summaryMetricsData", 4, "ngIf"], [1, "row", "px-6"], [1, "btn", "btn-sm", "btn-primary", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-success", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-info", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-dark", "mx-1", 3, "click"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "loadingIndicator"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "date", 3, "minWidth", 4, "ngIf"], ["name", "subid", 4, "ngIf"], ["name", "publisher", 3, "minWidth", 4, "ngIf"], ["name", "totalsearches", 4, "ngIf"], ["name", "clicks", 4, "ngIf"], ["name", "cpc", 4, "ngIf"], ["name", "ctr", 4, "ngIf"], ["name", "publisherNet"], ["ngx-datatable-header-template", ""], ["name", "profit"], ["name", "revenue"], ["name", "split", 3, "minWidth"], [3, "chartData"], [3, "summaryMetricsData"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], ["name", "date", 3, "minWidth"], ["name", "subid"], ["name", "publisher", 3, "minWidth"], ["name", "totalsearches"], ["name", "clicks"], ["name", "cpc"], ["name", "ctr"]],
        template: function PerionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDatesPicked", function PerionComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PerionComponent_app_reporting_revenue_chart_1_Template, 1, 1, "app-reporting-revenue-chart", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PerionComponent_app_summary_metrics_2_Template, 1, 1, "app-summary-metrics", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerionComponent_Template_button_click_4_listener() {
              return ctx.groupDate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Group by Date ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerionComponent_Template_button_click_6_listener() {
              return ctx.groupProvider();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Group by Publisher ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerionComponent_Template_button_click_8_listener() {
              return ctx.groupSubid();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Group by Subid ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PerionComponent_Template_button_click_10_listener() {
              return ctx.backGroup();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ngx-datatable", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ngx-datatable-row-detail", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggle", function PerionComponent_Template_ngx_datatable_row_detail_toggle_14_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PerionComponent_ng_template_16_Template, 6, 0, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, PerionComponent_ng_template_18_Template, 1, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, PerionComponent_ngx_datatable_column_19_Template, 3, 1, "ngx-datatable-column", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, PerionComponent_ngx_datatable_column_20_Template, 3, 0, "ngx-datatable-column", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, PerionComponent_ngx_datatable_column_21_Template, 3, 1, "ngx-datatable-column", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, PerionComponent_ngx_datatable_column_22_Template, 3, 0, "ngx-datatable-column", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, PerionComponent_ngx_datatable_column_23_Template, 3, 0, "ngx-datatable-column", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, PerionComponent_ngx_datatable_column_24_Template, 3, 0, "ngx-datatable-column", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, PerionComponent_ngx_datatable_column_25_Template, 3, 0, "ngx-datatable-column", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ngx-datatable-column", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, PerionComponent_ng_template_27_Template, 1, 0, "ng-template", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, PerionComponent_ng_template_28_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ngx-datatable-column", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, PerionComponent_ng_template_30_Template, 1, 0, "ng-template", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, PerionComponent_ng_template_31_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ngx-datatable-column", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, PerionComponent_ng_template_33_Template, 1, 0, "ng-template", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, PerionComponent_ng_template_34_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ngx-datatable-column", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, PerionComponent_ng_template_36_Template, 1, 0, "ng-template", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, PerionComponent_ng_template_37_Template, 4, 6, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.summaryMetrics);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 30)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 35);
          }
        },
        directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__["ReportingFilteringComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnHeaderDirective"], _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__["ReportingRevenueChartComponent"], _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__["SummaryMetricsComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["PercentPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL3Blcmlvbi9wZXJpb24uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PerionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-perion',
            templateUrl: './perion.component.html',
            styleUrls: ['./perion.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_service_admin_stats_perion_service__WEBPACK_IMPORTED_MODULE_2__["PerionService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
          }, {
            type: src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['expandableTable']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/rubi/rubi.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/modules/admin-reporting/rubi/rubi.component.ts ***!
      \****************************************************************/

    /*! exports provided: RubiComponent */

    /***/
    function srcAppModulesAdminReportingRubiRubiComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RubiComponent", function () {
        return RubiComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_shared_service_admin_stats_rubi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/rubi.service */
      "./src/app/shared/service/admin-stats/rubi.service.ts");
      /* harmony import */


      var src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modules/tag-management/tag-management.service */
      "./src/app/modules/tag-management/tag-management.service.ts");
      /* harmony import */


      var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */
      "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-revenue-chart/reporting-revenue-chart.component */
      "./src/app/shared/modules/reporting-revenue-chart/reporting-revenue-chart.component.ts");
      /* harmony import */


      var _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/modules/summary-metrics/summary-metrics.component */
      "./src/app/shared/modules/summary-metrics/summary-metrics.component.ts");

      var _c0 = ["expandableTable"];

      function RubiComponent_app_reporting_revenue_chart_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-reporting-revenue-chart", 25);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chartData", ctx_r0.chartData);
        }
      }

      function RubiComponent_app_summary_metrics_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-summary-metrics", 26);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("summaryMetricsData", ctx_r1.summaryMetrics);
        }
      }

      function RubiComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RubiComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubiComponent_ng_template_18_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var row_r21 = ctx.row;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r23.toggleExpandRow(row_r21);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r22 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("datatable-icon-right", !expanded_r22)("datatable-icon-down", expanded_r22);
        }
      }

      function RubiComponent_ngx_datatable_column_19_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Date ");
        }
      }

      function RubiComponent_ngx_datatable_column_19_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r28 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r28));
        }
      }

      function RubiComponent_ngx_datatable_column_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RubiComponent_ngx_datatable_column_19_ng_template_1_Template, 1, 0, "ng-template", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RubiComponent_ngx_datatable_column_19_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
        }
      }

      function RubiComponent_ngx_datatable_column_20_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Subid ");
        }
      }

      function RubiComponent_ngx_datatable_column_20_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r32 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r32);
        }
      }

      function RubiComponent_ngx_datatable_column_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RubiComponent_ngx_datatable_column_20_ng_template_1_Template, 1, 0, "ng-template", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RubiComponent_ngx_datatable_column_20_ng_template_2_Template, 2, 1, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RubiComponent_ngx_datatable_column_21_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher ");
        }
      }

      function RubiComponent_ngx_datatable_column_21_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r36 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r36);
        }
      }

      function RubiComponent_ngx_datatable_column_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RubiComponent_ngx_datatable_column_21_ng_template_1_Template, 1, 0, "ng-template", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RubiComponent_ngx_datatable_column_21_ng_template_2_Template, 2, 1, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
        }
      }

      function RubiComponent_ngx_datatable_column_22_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Searches ");
        }
      }

      function RubiComponent_ngx_datatable_column_22_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r40 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r40));
        }
      }

      function RubiComponent_ngx_datatable_column_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RubiComponent_ngx_datatable_column_22_ng_template_1_Template, 1, 0, "ng-template", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RubiComponent_ngx_datatable_column_22_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RubiComponent_ngx_datatable_column_23_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Clicks ");
        }
      }

      function RubiComponent_ngx_datatable_column_23_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r44 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r44));
        }
      }

      function RubiComponent_ngx_datatable_column_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RubiComponent_ngx_datatable_column_23_ng_template_1_Template, 1, 0, "ng-template", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RubiComponent_ngx_datatable_column_23_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RubiComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Split ");
        }
      }

      function RubiComponent_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r46 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r46) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, 0, "1.0-0"));
        }
      }

      function RubiComponent_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher Net ");
        }
      }

      function RubiComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r48 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r48, "USD"));
        }
      }

      function RubiComponent_ng_template_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Profit ");
        }
      }

      function RubiComponent_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r50 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r50, "USD"));
        }
      }

      function RubiComponent_ng_template_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Revenue ");
        }
      }

      function RubiComponent_ng_template_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r52 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r52, "USD"));
        }
      }

      var RubiComponent = /*#__PURE__*/function () {
        function RubiComponent(cdr, userService, rubiService, tagService) {
          _classCallCheck(this, RubiComponent);

          this.cdr = cdr;
          this.userService = userService;
          this.rubiService = rubiService;
          this.tagService = tagService;
          this.range = {
            startDate: '',
            endDate: ''
          };
          this.loadingIndicator = true;
          this.groupPublishFlag = false;
          this.groupDateShowFlag = false;
          this.groupSubidShowFlag = false;
          this.expanded = {};
          this.tagList = [];
          this.selectedCompany = this.getSelectedCompanyStored();
        }

        _createClass(RubiComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee79() {
              return regeneratorRuntime.wrap(function _callee79$(_context79) {
                while (1) {
                  switch (_context79.prev = _context79.next) {
                    case 0:
                      _context79.next = 2;
                      return this.getCompanyTags(this.selectedCompany);

                    case 2:
                      this.tagList = _context79.sent;
                      this.rows = [];
                      _context79.next = 6;
                      return this.getAllRubiStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.rows = _context79.sent;
                      _context79.next = 9;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.chartData = _context79.sent;
                      _context79.next = 12;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 12:
                      this.summaryMetrics = _context79.sent;
                      this.refreshTable();

                    case 14:
                    case "end":
                      return _context79.stop();
                  }
                }
              }, _callee79, this);
            }));
          }
        }, {
          key: "updateReportingFiltering",
          value: function updateReportingFiltering(range) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee80() {
              return regeneratorRuntime.wrap(function _callee80$(_context80) {
                while (1) {
                  switch (_context80.prev = _context80.next) {
                    case 0:
                      this.range = range;
                      _context80.next = 3;
                      return this.getAllRubiStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 3:
                      this.rows = _context80.sent;
                      _context80.next = 6;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.chartData = _context80.sent;
                      _context80.next = 9;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.summaryMetrics = _context80.sent;
                      this.groupPublishFlag = false;
                      this.refreshTable();

                    case 12:
                    case "end":
                      return _context80.stop();
                  }
                }
              }, _callee80, this);
            }));
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyStored",
          value: function getSelectedCompanyStored() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }, {
          key: "toggleExpandRow",
          value: function toggleExpandRow(row) {
            console.log('Toggled Expand Row!', row);
            this.table.rowDetail.toggleExpandRow(row);
          }
        }, {
          key: "onDetailToggle",
          value: function onDetailToggle(event) {
            console.log('Detail Toggled', event);
          }
        }, {
          key: "refreshTable",
          value: function refreshTable() {
            this.cdr.markForCheck();
          }
        }, {
          key: "getAllRubiStats",
          value: function getAllRubiStats(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee81() {
              var response, _iterator34, _step34, tagL, _iterator35, _step35, tagSub;

              return regeneratorRuntime.wrap(function _callee81$(_context81) {
                while (1) {
                  switch (_context81.prev = _context81.next) {
                    case 0:
                      _context81.next = 2;
                      return this.rubiService.getRubiStats(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context81.sent;
                      console.log('getRubiStats() response:', response);
                      this.loadingIndicator = false;
                      this.allStats = response.stats;
                      this.allStats.map(function (resStat) {
                        resStat.publisher = "No Publisher";
                        resStat.tagname = "No Tag";
                      });
                      _iterator34 = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                          tagL = _step34.value;

                          if (tagL.tag.advertiser == "rubi") {
                            _iterator35 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                                tagSub = _step35.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allStats.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allStats.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_1.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allStats.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_2.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allStats.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_3.tagname = tagL.tag.name;
                                    }
                                  });
                                }
                              }
                            } catch (err) {
                              _iterator35.e(err);
                            } finally {
                              _iterator35.f();
                            }
                          }
                        }
                      } catch (err) {
                        _iterator34.e(err);
                      } finally {
                        _iterator34.f();
                      }

                      return _context81.abrupt("return", this.allStats);

                    case 10:
                    case "end":
                      return _context81.stop();
                  }
                }
              }, _callee81, this);
            }));
          }
        }, {
          key: "groupDate",
          value: function groupDate() {
            var helperSummary = {};
            var groupData = this.allStats.reduce(function (r, o) {
              var key = o.date;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].monetized_searches += parseFloat(o.monetized_searches ? o.monetized_searches : 0);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator36 = _createForOfIteratorHelper(groupData),
                _step36;

            try {
              for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                var group = _step36.value;
                group.split = group.split / group.counter;
              }
            } catch (err) {
              _iterator36.e(err);
            } finally {
              _iterator36.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = true;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "groupSubid",
          value: function groupSubid() {
            var helperSummary = {};
            var groupData = this.allStats.reduce(function (r, o) {
              var key = o.subid;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].monetized_searches += parseFloat(o.monetized_searches ? o.monetized_searches : 0);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator37 = _createForOfIteratorHelper(groupData),
                _step37;

            try {
              for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
                var group = _step37.value;
                group.split = group.split / group.counter;
              }
            } catch (err) {
              _iterator37.e(err);
            } finally {
              _iterator37.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = true;
            this.cdr.markForCheck();
          }
        }, {
          key: "groupProvider",
          value: function groupProvider() {
            var helperSummary = {};
            var groupData = this.allStats.reduce(function (r, o) {
              var key = o.publisher;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].monetized_searches += parseFloat(o.monetized_searches ? o.monetized_searches : 0);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator38 = _createForOfIteratorHelper(groupData),
                _step38;

            try {
              for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                var group = _step38.value;
                group.split = group.split / group.counter;
              }
            } catch (err) {
              _iterator38.e(err);
            } finally {
              _iterator38.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = true;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "backGroup",
          value: function backGroup() {
            this.rows = this.allStats;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "getChartMetrics",
          value: function getChartMetrics(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee82() {
              var response;
              return regeneratorRuntime.wrap(function _callee82$(_context82) {
                while (1) {
                  switch (_context82.prev = _context82.next) {
                    case 0:
                      _context82.prev = 0;
                      _context82.next = 3;
                      return this.rubiService.getChartMetrics(company, startDate, endDate).toPromise();

                    case 3:
                      response = _context82.sent;
                      return _context82.abrupt("return", response);

                    case 7:
                      _context82.prev = 7;
                      _context82.t0 = _context82["catch"](0);
                      return _context82.abrupt("return", _context82.t0);

                    case 10:
                    case "end":
                      return _context82.stop();
                  }
                }
              }, _callee82, this, [[0, 7]]);
            }));
          }
        }, {
          key: "getSummaryMetrics",
          value: function getSummaryMetrics(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee83() {
              var response, allSummary, currentPercentPace, lastPercentPace, selectedPercentPace;
              return regeneratorRuntime.wrap(function _callee83$(_context83) {
                while (1) {
                  switch (_context83.prev = _context83.next) {
                    case 0:
                      _context83.next = 2;
                      return this.rubiService.getSummaryMetrics(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context83.sent;
                      allSummary = {};
                      currentPercentPace = 0;
                      lastPercentPace = 0;
                      selectedPercentPace = 0;

                      if (response.summary[0].lastMonthStat[0].profitPace != 0) {
                        currentPercentPace = (response.summary[0].summaryMetrics[0].profitPace - response.summary[0].lastMonthStat[0].profitPace) / response.summary[0].lastMonthStat[0].profitPace * 100;
                      }

                      if (response.summary[0].twoLastMonthStat[0].profitPace != 0) {
                        lastPercentPace = (response.summary[0].lastMonthStat[0].profitPace - response.summary[0].twoLastMonthStat[0].profitPace) / response.summary[0].twoLastMonthStat[0].profitPace * 100;
                      }

                      if (response.summary[0].prevSelectedStat[0].profitPace != 0) {
                        selectedPercentPace = (response.summary[0].selectedStat[0].profitPace - response.summary[0].prevSelectedStat[0].profitPace) / response.summary[0].prevSelectedStat[0].profitPace * 100;
                      }

                      response.summary[0].summaryMetrics[0].percentPace = currentPercentPace;
                      response.summary[0].lastMonthStat[0].percentPace = lastPercentPace;
                      response.summary[0].selectedStat[0].percentPace = selectedPercentPace;
                      response.summary[0].selectedStat[0].selectedStartDate = startDate;
                      response.summary[0].selectedStat[0].selectedEndDate = endDate;
                      allSummary['summary'] = response.summary;
                      return _context83.abrupt("return", allSummary);

                    case 17:
                    case "end":
                      return _context83.stop();
                  }
                }
              }, _callee83, this);
            }));
          } //get Tags with selected company

        }, {
          key: "getCompanyTags",
          value: function getCompanyTags(selectedCompany) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee84() {
              var companyId, response;
              return regeneratorRuntime.wrap(function _callee84$(_context84) {
                while (1) {
                  switch (_context84.prev = _context84.next) {
                    case 0:
                      companyId = selectedCompany.split("/")[1];
                      _context84.prev = 1;
                      _context84.next = 4;
                      return this.tagService.getCompanyTags(companyId).toPromise();

                    case 4:
                      response = _context84.sent;
                      return _context84.abrupt("return", response);

                    case 8:
                      _context84.prev = 8;
                      _context84.t0 = _context84["catch"](1);
                      return _context84.abrupt("return", _context84.t0);

                    case 11:
                    case "end":
                      return _context84.stop();
                  }
                }
              }, _callee84, this, [[1, 8]]);
            }));
          }
        }]);

        return RubiComponent;
      }();

      RubiComponent.ɵfac = function RubiComponent_Factory(t) {
        return new (t || RubiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_rubi_service__WEBPACK_IMPORTED_MODULE_3__["RubiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]));
      };

      RubiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RubiComponent,
        selectors: [["app-rubi"]],
        viewQuery: function RubiComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 36,
        vars: 21,
        consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [3, "summaryMetricsData", 4, "ngIf"], [1, "row", "px-6"], [1, "btn", "btn-sm", "btn-primary", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-success", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-info", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-dark", "mx-1", 3, "click"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "loadingIndicator"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "date", 3, "minWidth", 4, "ngIf"], ["name", "subid", 4, "ngIf"], ["name", "publisher", 3, "minWidth", 4, "ngIf"], ["name", "searches", 4, "ngIf"], ["name", "clicks", 4, "ngIf"], ["name", "split", 3, "minWidth"], ["ngx-datatable-header-template", ""], ["name", "publisherNet"], ["name", "profit"], ["name", "revenue"], [3, "chartData"], [3, "summaryMetricsData"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], ["name", "date", 3, "minWidth"], ["name", "subid"], ["name", "publisher", 3, "minWidth"], ["name", "searches"], ["name", "clicks"]],
        template: function RubiComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDatesPicked", function RubiComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RubiComponent_app_reporting_revenue_chart_1_Template, 1, 1, "app-reporting-revenue-chart", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RubiComponent_app_summary_metrics_2_Template, 1, 1, "app-summary-metrics", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubiComponent_Template_button_click_4_listener() {
              return ctx.groupDate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Group by Date ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubiComponent_Template_button_click_6_listener() {
              return ctx.groupProvider();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Group by Publisher ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubiComponent_Template_button_click_8_listener() {
              return ctx.groupSubid();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Group by Subid ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubiComponent_Template_button_click_10_listener() {
              return ctx.backGroup();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ngx-datatable", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ngx-datatable-row-detail", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggle", function RubiComponent_Template_ngx_datatable_row_detail_toggle_14_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, RubiComponent_ng_template_16_Template, 6, 0, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, RubiComponent_ng_template_18_Template, 1, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RubiComponent_ngx_datatable_column_19_Template, 3, 1, "ngx-datatable-column", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, RubiComponent_ngx_datatable_column_20_Template, 3, 0, "ngx-datatable-column", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, RubiComponent_ngx_datatable_column_21_Template, 3, 1, "ngx-datatable-column", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, RubiComponent_ngx_datatable_column_22_Template, 3, 0, "ngx-datatable-column", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, RubiComponent_ngx_datatable_column_23_Template, 3, 0, "ngx-datatable-column", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ngx-datatable-column", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, RubiComponent_ng_template_25_Template, 1, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, RubiComponent_ng_template_26_Template, 4, 6, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ngx-datatable-column", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, RubiComponent_ng_template_28_Template, 1, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, RubiComponent_ng_template_29_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ngx-datatable-column", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, RubiComponent_ng_template_31_Template, 1, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, RubiComponent_ng_template_32_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ngx-datatable-column", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, RubiComponent_ng_template_34_Template, 1, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, RubiComponent_ng_template_35_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.summaryMetrics);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 30)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 35);
          }
        },
        directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__["ReportingFilteringComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnHeaderDirective"], _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__["ReportingRevenueChartComponent"], _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__["SummaryMetricsComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL3J1YmkvcnViaS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RubiComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-rubi',
            templateUrl: './rubi.component.html',
            styleUrls: ['./rubi.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: src_app_shared_service_admin_stats_rubi_service__WEBPACK_IMPORTED_MODULE_3__["RubiService"]
          }, {
            type: src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['expandableTable']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/solex-bc/solex-bc.component.ts":
    /*!************************************************************************!*\
      !*** ./src/app/modules/admin-reporting/solex-bc/solex-bc.component.ts ***!
      \************************************************************************/

    /*! exports provided: SolexBcComponent */

    /***/
    function srcAppModulesAdminReportingSolexBcSolexBcComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SolexBcComponent", function () {
        return SolexBcComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_shared_service_admin_stats_solexbc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/solexbc.service */
      "./src/app/shared/service/admin-stats/solexbc.service.ts");
      /* harmony import */


      var src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modules/tag-management/tag-management.service */
      "./src/app/modules/tag-management/tag-management.service.ts");
      /* harmony import */


      var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */
      "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-revenue-chart/reporting-revenue-chart.component */
      "./src/app/shared/modules/reporting-revenue-chart/reporting-revenue-chart.component.ts");
      /* harmony import */


      var _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/modules/summary-metrics/summary-metrics.component */
      "./src/app/shared/modules/summary-metrics/summary-metrics.component.ts");

      var _c0 = ["expandableTable"];

      function SolexBcComponent_app_reporting_revenue_chart_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-reporting-revenue-chart", 25);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chartData", ctx_r0.chartData);
        }
      }

      function SolexBcComponent_app_summary_metrics_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-summary-metrics", 26);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("summaryMetricsData", ctx_r1.summaryMetrics);
        }
      }

      function SolexBcComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SolexBcComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SolexBcComponent_ng_template_18_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var row_r21 = ctx.row;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r23.toggleExpandRow(row_r21);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r22 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("datatable-icon-right", !expanded_r22)("datatable-icon-down", expanded_r22);
        }
      }

      function SolexBcComponent_ngx_datatable_column_19_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Date ");
        }
      }

      function SolexBcComponent_ngx_datatable_column_19_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r28 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r28));
        }
      }

      function SolexBcComponent_ngx_datatable_column_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SolexBcComponent_ngx_datatable_column_19_ng_template_1_Template, 1, 0, "ng-template", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SolexBcComponent_ngx_datatable_column_19_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
        }
      }

      function SolexBcComponent_ngx_datatable_column_20_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Subid ");
        }
      }

      function SolexBcComponent_ngx_datatable_column_20_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r32 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r32);
        }
      }

      function SolexBcComponent_ngx_datatable_column_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SolexBcComponent_ngx_datatable_column_20_ng_template_1_Template, 1, 0, "ng-template", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SolexBcComponent_ngx_datatable_column_20_ng_template_2_Template, 2, 1, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SolexBcComponent_ngx_datatable_column_21_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher ");
        }
      }

      function SolexBcComponent_ngx_datatable_column_21_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r36 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r36);
        }
      }

      function SolexBcComponent_ngx_datatable_column_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SolexBcComponent_ngx_datatable_column_21_ng_template_1_Template, 1, 0, "ng-template", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SolexBcComponent_ngx_datatable_column_21_ng_template_2_Template, 2, 1, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
        }
      }

      function SolexBcComponent_ngx_datatable_column_22_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Searches ");
        }
      }

      function SolexBcComponent_ngx_datatable_column_22_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r40 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r40));
        }
      }

      function SolexBcComponent_ngx_datatable_column_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SolexBcComponent_ngx_datatable_column_22_ng_template_1_Template, 1, 0, "ng-template", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SolexBcComponent_ngx_datatable_column_22_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SolexBcComponent_ngx_datatable_column_23_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Clicks ");
        }
      }

      function SolexBcComponent_ngx_datatable_column_23_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r44 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r44));
        }
      }

      function SolexBcComponent_ngx_datatable_column_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SolexBcComponent_ngx_datatable_column_23_ng_template_1_Template, 1, 0, "ng-template", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SolexBcComponent_ngx_datatable_column_23_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SolexBcComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Split ");
        }
      }

      function SolexBcComponent_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r46 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r46) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, 0, "1.0-0"));
        }
      }

      function SolexBcComponent_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher Net ");
        }
      }

      function SolexBcComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r48 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r48, "USD"));
        }
      }

      function SolexBcComponent_ng_template_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Profit ");
        }
      }

      function SolexBcComponent_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r50 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r50, "USD"));
        }
      }

      function SolexBcComponent_ng_template_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Revenue ");
        }
      }

      function SolexBcComponent_ng_template_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r52 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r52, "USD"));
        }
      }

      var SolexBcComponent = /*#__PURE__*/function () {
        function SolexBcComponent(cdr, userService, solexBCService, tagService) {
          _classCallCheck(this, SolexBcComponent);

          this.cdr = cdr;
          this.userService = userService;
          this.solexBCService = solexBCService;
          this.tagService = tagService;
          this.range = {
            startDate: '',
            endDate: ''
          };
          this.loadingIndicator = true;
          this.expanded = {};
          this.tagList = [];
          this.groupPublishFlag = false;
          this.groupDateShowFlag = false;
          this.groupSubidShowFlag = false;
          this.selectedCompany = this.getSelectedCompanyStored();
        }

        _createClass(SolexBcComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee85() {
              return regeneratorRuntime.wrap(function _callee85$(_context85) {
                while (1) {
                  switch (_context85.prev = _context85.next) {
                    case 0:
                      _context85.next = 2;
                      return this.getCompanyTags(this.selectedCompany);

                    case 2:
                      this.tagList = _context85.sent;
                      this.rows = [];
                      _context85.next = 6;
                      return this.getAllSolexBCStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.rows = _context85.sent;
                      _context85.next = 9;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.chartData = _context85.sent;
                      _context85.next = 12;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 12:
                      this.summaryMetrics = _context85.sent;
                      this.refreshTable();

                    case 14:
                    case "end":
                      return _context85.stop();
                  }
                }
              }, _callee85, this);
            }));
          }
        }, {
          key: "updateReportingFiltering",
          value: function updateReportingFiltering(range) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee86() {
              return regeneratorRuntime.wrap(function _callee86$(_context86) {
                while (1) {
                  switch (_context86.prev = _context86.next) {
                    case 0:
                      this.range = range;
                      _context86.next = 3;
                      return this.getAllSolexBCStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 3:
                      this.rows = _context86.sent;
                      _context86.next = 6;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.chartData = _context86.sent;
                      _context86.next = 9;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.summaryMetrics = _context86.sent;
                      this.groupPublishFlag = false;
                      this.refreshTable();

                    case 12:
                    case "end":
                      return _context86.stop();
                  }
                }
              }, _callee86, this);
            }));
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyStored",
          value: function getSelectedCompanyStored() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }, {
          key: "toggleExpandRow",
          value: function toggleExpandRow(row) {
            console.log('Toggled Expand Row!', row);
            this.table.rowDetail.toggleExpandRow(row);
          }
        }, {
          key: "onDetailToggle",
          value: function onDetailToggle(event) {
            console.log('Detail Toggled', event);
          }
        }, {
          key: "refreshTable",
          value: function refreshTable() {
            this.cdr.markForCheck();
          }
        }, {
          key: "getAllSolexBCStats",
          value: function getAllSolexBCStats(company, startDate, endDate) {
            var _this10 = this;

            return this.solexBCService.getSolexBCStats(company, startDate, endDate).toPromise().then(function (response) {
              console.log('getSolexBCStats() response:', response);
              _this10.loadingIndicator = false;
              _this10.allStats = response.stats;

              _this10.allStats.map(function (resStat) {
                resStat.publisher = "No Publisher";
                resStat.tagname = "No Tag";
              });

              var _iterator39 = _createForOfIteratorHelper(_this10.tagList),
                  _step39;

              try {
                for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                  var tagL = _step39.value;

                  if (tagL.tag.advertiser == "solex-bc") {
                    var _iterator40 = _createForOfIteratorHelper(tagL.tag.subids),
                        _step40;

                    try {
                      for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
                        var tagSub = _step40.value;

                        if (tagSub.filterTag == "Contains") {
                          _this10.allStats.map(function (stat) {
                            if (stat.subid.includes(tagSub.subid)) {
                              stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                              stat.tagname = tagL.tag.name;
                            }
                          });
                        } else if (tagSub.filterTag == "StartsWith") {
                          _this10.allStats.map(function (stat) {
                            if (stat.subid.startsWith(tagSub.subid)) {
                              stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                              stat.tagname = tagL.tag.name;
                            }
                          });
                        } else if (tagSub.filterTag == "EndsWith") {
                          _this10.allStats.map(function (stat) {
                            if (stat.subid.endsWith(tagSub.subid)) {
                              stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                              stat.tagname = tagL.tag.name;
                            }
                          });
                        } else if (tagSub.filterTag == "ExactValue") {
                          _this10.allStats.map(function (stat) {
                            if (stat.subid == tagSub.subid) {
                              stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                              stat.tagname = tagL.tag.name;
                            }
                          });
                        }
                      }
                    } catch (err) {
                      _iterator40.e(err);
                    } finally {
                      _iterator40.f();
                    }
                  }
                }
              } catch (err) {
                _iterator39.e(err);
              } finally {
                _iterator39.f();
              }

              return _this10.allStats;
            });
          }
        }, {
          key: "groupSubid",
          value: function groupSubid() {
            var helperSummary = {};
            var groupData = this.allStats.reduce(function (r, o) {
              var key = o.subid;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator41 = _createForOfIteratorHelper(groupData),
                _step41;

            try {
              for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
                var group = _step41.value;
                group.split = group.split / group.counter;
              }
            } catch (err) {
              _iterator41.e(err);
            } finally {
              _iterator41.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = true;
            this.cdr.markForCheck();
          }
        }, {
          key: "groupDate",
          value: function groupDate() {
            var helperSummary = {};
            var groupData = this.allStats.reduce(function (r, o) {
              var key = o.date;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator42 = _createForOfIteratorHelper(groupData),
                _step42;

            try {
              for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
                var group = _step42.value;
                group.split = group.split / group.counter;
              }
            } catch (err) {
              _iterator42.e(err);
            } finally {
              _iterator42.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = true;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "groupProvider",
          value: function groupProvider() {
            var helperSummary = {};
            var groupData = this.allStats.reduce(function (r, o) {
              var key = o.publisher;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator43 = _createForOfIteratorHelper(groupData),
                _step43;

            try {
              for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
                var group = _step43.value;
                group.split = group.split / group.counter;
              }
            } catch (err) {
              _iterator43.e(err);
            } finally {
              _iterator43.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = true;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "backGroup",
          value: function backGroup() {
            this.rows = this.allStats;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "getChartMetrics",
          value: function getChartMetrics(company, startDate, endDate) {
            return this.solexBCService.getChartMetrics(company, startDate, endDate).toPromise().then(function (response) {
              return response;
            })["catch"](function (error) {
              return error;
            });
          }
        }, {
          key: "getSummaryMetrics",
          value: function getSummaryMetrics(company, startDate, endDate) {
            return this.solexBCService.getSummaryMetrics(company, startDate, endDate).toPromise().then(function (response) {
              var allSummary = {};
              var currentPercentPace = 0;
              var lastPercentPace = 0;
              var selectedPercentPace = 0;

              if (response.summary[0].lastMonthStat[0].profitPace != 0) {
                currentPercentPace = (response.summary[0].summaryMetrics[0].profitPace - response.summary[0].lastMonthStat[0].profitPace) / response.summary[0].lastMonthStat[0].profitPace * 100;
              }

              if (response.summary[0].twoLastMonthStat[0].profitPace != 0) {
                lastPercentPace = (response.summary[0].lastMonthStat[0].profitPace - response.summary[0].twoLastMonthStat[0].profitPace) / response.summary[0].twoLastMonthStat[0].profitPace * 100;
              }

              if (response.summary[0].prevSelectedStat[0].profitPace != 0) {
                selectedPercentPace = (response.summary[0].selectedStat[0].profitPace - response.summary[0].prevSelectedStat[0].profitPace) / response.summary[0].prevSelectedStat[0].profitPace * 100;
              }

              response.summary[0].summaryMetrics[0].percentPace = currentPercentPace;
              response.summary[0].lastMonthStat[0].percentPace = lastPercentPace;
              response.summary[0].selectedStat[0].percentPace = selectedPercentPace;
              response.summary[0].selectedStat[0].selectedStartDate = startDate;
              response.summary[0].selectedStat[0].selectedEndDate = endDate;
              allSummary['summary'] = response.summary;
              return allSummary;
            });
          } //get Tags with selected company

        }, {
          key: "getCompanyTags",
          value: function getCompanyTags(selectedCompany) {
            var companyId = selectedCompany.split("/")[1];
            return this.tagService.getCompanyTags(companyId).toPromise().then(function (response) {
              return response;
            })["catch"](function (error) {
              return error;
            });
          }
        }]);

        return SolexBcComponent;
      }();

      SolexBcComponent.ɵfac = function SolexBcComponent_Factory(t) {
        return new (t || SolexBcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_solexbc_service__WEBPACK_IMPORTED_MODULE_3__["SolexBCService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]));
      };

      SolexBcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SolexBcComponent,
        selectors: [["app-solex-bc"]],
        viewQuery: function SolexBcComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 36,
        vars: 21,
        consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [3, "summaryMetricsData", 4, "ngIf"], [1, "row", "px-6"], [1, "btn", "btn-sm", "btn-primary", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-success", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-info", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-dark", "mx-1", 3, "click"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "loadingIndicator"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "date", 3, "minWidth", 4, "ngIf"], ["name", "subid", 4, "ngIf"], ["name", "publisher", 3, "minWidth", 4, "ngIf"], ["name", "searches", 4, "ngIf"], ["name", "clicks", 4, "ngIf"], ["name", "split", 3, "minWidth"], ["ngx-datatable-header-template", ""], ["name", "publisherNet"], ["name", "profit"], ["name", "revenue"], [3, "chartData"], [3, "summaryMetricsData"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], ["name", "date", 3, "minWidth"], ["name", "subid"], ["name", "publisher", 3, "minWidth"], ["name", "searches"], ["name", "clicks"]],
        template: function SolexBcComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDatesPicked", function SolexBcComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SolexBcComponent_app_reporting_revenue_chart_1_Template, 1, 1, "app-reporting-revenue-chart", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SolexBcComponent_app_summary_metrics_2_Template, 1, 1, "app-summary-metrics", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SolexBcComponent_Template_button_click_4_listener() {
              return ctx.groupDate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Group by Date ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SolexBcComponent_Template_button_click_6_listener() {
              return ctx.groupProvider();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Group by Publisher ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SolexBcComponent_Template_button_click_8_listener() {
              return ctx.groupSubid();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Group by Subid ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SolexBcComponent_Template_button_click_10_listener() {
              return ctx.backGroup();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ngx-datatable", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ngx-datatable-row-detail", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggle", function SolexBcComponent_Template_ngx_datatable_row_detail_toggle_14_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SolexBcComponent_ng_template_16_Template, 6, 0, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SolexBcComponent_ng_template_18_Template, 1, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SolexBcComponent_ngx_datatable_column_19_Template, 3, 1, "ngx-datatable-column", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SolexBcComponent_ngx_datatable_column_20_Template, 3, 0, "ngx-datatable-column", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SolexBcComponent_ngx_datatable_column_21_Template, 3, 1, "ngx-datatable-column", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, SolexBcComponent_ngx_datatable_column_22_Template, 3, 0, "ngx-datatable-column", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, SolexBcComponent_ngx_datatable_column_23_Template, 3, 0, "ngx-datatable-column", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ngx-datatable-column", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SolexBcComponent_ng_template_25_Template, 1, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, SolexBcComponent_ng_template_26_Template, 4, 6, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ngx-datatable-column", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, SolexBcComponent_ng_template_28_Template, 1, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, SolexBcComponent_ng_template_29_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ngx-datatable-column", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, SolexBcComponent_ng_template_31_Template, 1, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, SolexBcComponent_ng_template_32_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ngx-datatable-column", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, SolexBcComponent_ng_template_34_Template, 1, 0, "ng-template", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, SolexBcComponent_ng_template_35_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.summaryMetrics);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 30)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 35);
          }
        },
        directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__["ReportingFilteringComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnHeaderDirective"], _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__["ReportingRevenueChartComponent"], _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__["SummaryMetricsComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL3NvbGV4LWJjL3NvbGV4LWJjLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SolexBcComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-solex-bc',
            templateUrl: './solex-bc.component.html',
            styleUrls: ['./solex-bc.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: src_app_shared_service_admin_stats_solexbc_service__WEBPACK_IMPORTED_MODULE_3__["SolexBCService"]
          }, {
            type: src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['expandableTable']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/system1/system1.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/admin-reporting/system1/system1.component.ts ***!
      \**********************************************************************/

    /*! exports provided: System1Component */

    /***/
    function srcAppModulesAdminReportingSystem1System1ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "System1Component", function () {
        return System1Component;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_shared_service_admin_stats_system1_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/system1.service */
      "./src/app/shared/service/admin-stats/system1.service.ts");
      /* harmony import */


      var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */
      "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["expandableTable"];

      function System1Component_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function System1Component_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function System1Component_ng_template_7_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var row_r16 = ctx.row;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r18.toggleExpandRow(row_r16);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r17 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("datatable-icon-right", !expanded_r17)("datatable-icon-down", expanded_r17);
        }
      }

      function System1Component_ngx_datatable_column_8_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Date ");
        }
      }

      function System1Component_ngx_datatable_column_8_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r23 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r23));
        }
      }

      function System1Component_ngx_datatable_column_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, System1Component_ngx_datatable_column_8_ng_template_1_Template, 1, 0, "ng-template", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, System1Component_ngx_datatable_column_8_ng_template_2_Template, 3, 3, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
        }
      }

      function System1Component_ngx_datatable_column_9_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Subid ");
        }
      }

      function System1Component_ngx_datatable_column_9_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r27 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r27);
        }
      }

      function System1Component_ngx_datatable_column_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, System1Component_ngx_datatable_column_9_ng_template_1_Template, 1, 0, "ng-template", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, System1Component_ngx_datatable_column_9_ng_template_2_Template, 2, 1, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function System1Component_ngx_datatable_column_10_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Device ");
        }
      }

      function System1Component_ngx_datatable_column_10_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r31 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r31);
        }
      }

      function System1Component_ngx_datatable_column_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, System1Component_ngx_datatable_column_10_ng_template_1_Template, 1, 0, "ng-template", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, System1Component_ngx_datatable_column_10_ng_template_2_Template, 2, 1, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
        }
      }

      function System1Component_ngx_datatable_column_11_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " PageViews ");
        }
      }

      function System1Component_ngx_datatable_column_11_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r35 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r35));
        }
      }

      function System1Component_ngx_datatable_column_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, System1Component_ngx_datatable_column_11_ng_template_1_Template, 1, 0, "ng-template", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, System1Component_ngx_datatable_column_11_ng_template_2_Template, 3, 3, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function System1Component_ngx_datatable_column_12_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Clicks ");
        }
      }

      function System1Component_ngx_datatable_column_12_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r39 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r39));
        }
      }

      function System1Component_ngx_datatable_column_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, System1Component_ngx_datatable_column_12_ng_template_1_Template, 1, 0, "ng-template", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, System1Component_ngx_datatable_column_12_ng_template_2_Template, 3, 3, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function System1Component_ngx_datatable_column_13_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Impressions ");
        }
      }

      function System1Component_ngx_datatable_column_13_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r43 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r43) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, 0, "1.0-0"));
        }
      }

      function System1Component_ngx_datatable_column_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, System1Component_ngx_datatable_column_13_ng_template_1_Template, 1, 0, "ng-template", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, System1Component_ngx_datatable_column_13_ng_template_2_Template, 4, 6, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 35);
        }
      }

      function System1Component_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Split ");
        }
      }

      function System1Component_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r45 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r45) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, 0, "1.0-0"));
        }
      }

      function System1Component_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Revenue ");
        }
      }

      function System1Component_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r47 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r47, "USD"));
        }
      }

      var System1Component = /*#__PURE__*/function () {
        function System1Component(cdr, userService, system1Service) {
          _classCallCheck(this, System1Component);

          this.cdr = cdr;
          this.userService = userService;
          this.system1Service = system1Service;
          this.range = {
            startDate: '',
            endDate: ''
          };
          this.loadingIndicator = true;
          this.groupPublishFlag = false;
          this.selectedCompany = this.getSelectedCompanyFromLocalStorage();
        }

        _createClass(System1Component, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee87() {
              return regeneratorRuntime.wrap(function _callee87$(_context87) {
                while (1) {
                  switch (_context87.prev = _context87.next) {
                    case 0:
                      this.rows = [];
                      _context87.next = 3;
                      return this.getAllSystem1Stats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 3:
                      this.rows = _context87.sent;

                    case 4:
                    case "end":
                      return _context87.stop();
                  }
                }
              }, _callee87, this);
            }));
          }
        }, {
          key: "updateReportingFiltering",
          value: function updateReportingFiltering(range) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee88() {
              return regeneratorRuntime.wrap(function _callee88$(_context88) {
                while (1) {
                  switch (_context88.prev = _context88.next) {
                    case 0:
                      // console.log('Update report filtering....');
                      this.range = range;
                      _context88.next = 3;
                      return this.getAllSystem1Stats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 3:
                      this.rows = _context88.sent;
                      this.groupPublishFlag = false;
                      this.refreshTable();

                    case 6:
                    case "end":
                      return _context88.stop();
                  }
                }
              }, _callee88, this);
            }));
          } //get Stat all

        }, {
          key: "getAllSystem1Stats",
          value: function getAllSystem1Stats(company, startDate, endDate) {
            var _this11 = this;

            return this.system1Service.getAllSystem1Stats(company, startDate, endDate).toPromise().then(function (response) {
              console.log('getAllSystem1Stats() response:', response);
              _this11.loadingIndicator = false;
              _this11.allStats = response.stats;
              return _this11.allStats;
            });
          }
        }, {
          key: "getSummaryMetrics",
          value: function getSummaryMetrics(company) {
            return [];
          }
        }, {
          key: "toggleExpandRow",
          value: function toggleExpandRow(row) {
            console.log('Toggled Expand Row!', row);
            this.table.rowDetail.toggleExpandRow(row);
          }
        }, {
          key: "onDetailToggle",
          value: function onDetailToggle(event) {
            console.log('Detail Toggled', event);
          }
        }, {
          key: "refreshTable",
          value: function refreshTable() {
            this.cdr.markForCheck();
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyFromLocalStorage",
          value: function getSelectedCompanyFromLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }]);

        return System1Component;
      }();

      System1Component.ɵfac = function System1Component_Factory(t) {
        return new (t || System1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_system1_service__WEBPACK_IMPORTED_MODULE_3__["System1Service"]));
      };

      System1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: System1Component,
        selectors: [["app-system1"]],
        viewQuery: function System1Component_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 20,
        vars: 20,
        consts: [[3, "onDatesPicked"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "loadingIndicator"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "date", 3, "minWidth", 4, "ngIf"], ["name", "subid", 4, "ngIf"], ["name", "device", 3, "minWidth", 4, "ngIf"], ["name", "pageviews", 4, "ngIf"], ["name", "clicks", 4, "ngIf"], ["name", "impressions", 3, "minWidth", 4, "ngIf"], ["name", "split", 3, "minWidth"], ["ngx-datatable-header-template", ""], ["name", "revenue"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], ["name", "date", 3, "minWidth"], ["name", "subid"], ["name", "device", 3, "minWidth"], ["name", "pageviews"], ["name", "clicks"], ["name", "impressions", 3, "minWidth"]],
        template: function System1Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDatesPicked", function System1Component_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngx-datatable", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ngx-datatable-row-detail", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggle", function System1Component_Template_ngx_datatable_row_detail_toggle_3_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, System1Component_ng_template_5_Template, 6, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ngx-datatable-column", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, System1Component_ng_template_7_Template, 1, 4, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, System1Component_ngx_datatable_column_8_Template, 3, 1, "ngx-datatable-column", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, System1Component_ngx_datatable_column_9_Template, 3, 0, "ngx-datatable-column", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, System1Component_ngx_datatable_column_10_Template, 3, 1, "ngx-datatable-column", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, System1Component_ngx_datatable_column_11_Template, 3, 0, "ngx-datatable-column", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, System1Component_ngx_datatable_column_12_Template, 3, 0, "ngx-datatable-column", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, System1Component_ngx_datatable_column_13_Template, 3, 1, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ngx-datatable-column", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, System1Component_ng_template_15_Template, 1, 0, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, System1Component_ng_template_16_Template, 4, 6, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ngx-datatable-column", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, System1Component_ng_template_18_Template, 1, 0, "ng-template", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, System1Component_ng_template_19_Template, 3, 4, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 30)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 35);
          }
        },
        directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_4__["ReportingFilteringComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTableColumnCellDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTableColumnHeaderDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL3N5c3RlbTEvc3lzdGVtMS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](System1Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-system1',
            templateUrl: './system1.component.html',
            styleUrls: ['./system1.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: src_app_shared_service_admin_stats_system1_service__WEBPACK_IMPORTED_MODULE_3__["System1Service"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['expandableTable']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/third-party/third-party.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/admin-reporting/third-party/third-party.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ThirdPartyComponent */

    /***/
    function srcAppModulesAdminReportingThirdPartyThirdPartyComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThirdPartyComponent", function () {
        return ThirdPartyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! echarts */
      "./node_modules/echarts/index.js");
      /* harmony import */


      var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */
      "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["expandableTable"];

      function ThirdPartyComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ThirdPartyComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThirdPartyComponent_ng_template_8_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var row_r20 = ctx.row;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.toggleExpandRow(row_r20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r21 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("datatable-icon-right", !expanded_r21)("datatable-icon-down", expanded_r21);
        }
      }

      function ThirdPartyComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Publisher ");
        }
      }

      function ThirdPartyComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r25 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r25);
        }
      }

      function ThirdPartyComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Tag ");
        }
      }

      function ThirdPartyComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r27 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r27);
        }
      }

      function ThirdPartyComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Total Searches ");
        }
      }

      function ThirdPartyComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r29 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, value_r29));
        }
      }

      function ThirdPartyComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Monetized Searches ");
        }
      }

      function ThirdPartyComponent_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r31 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, value_r31));
        }
      }

      function ThirdPartyComponent_ng_template_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Clicks ");
        }
      }

      function ThirdPartyComponent_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r33 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, value_r33));
        }
      }

      function ThirdPartyComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r34 = ctx.column;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r34.name);
        }
      }

      function ThirdPartyComponent_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "strong", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "percent");
        }

        if (rf & 2) {
          var row_r36 = ctx.row;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, row_r36["clicks"] / row_r36["totalSearches"], "2.2-2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function ThirdPartyComponent_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Revenue ");
        }
      }

      function ThirdPartyComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r39 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, value_r39, "USD"));
        }
      }

      var ThirdPartyComponent = /*#__PURE__*/function () {
        function ThirdPartyComponent() {
          _classCallCheck(this, ThirdPartyComponent);

          this.rows = [{
            name: 'Datalox',
            tag: 'Guppy Media',
            totalSearches: '5341',
            monetizedSearches: '5213',
            revenue: '1362',
            clicks: 562
          }, {
            name: 'Hopkins Branded',
            tag: 'Guppy Media',
            totalSearches: '5341',
            monetizedSearches: '5213',
            revenue: '1362',
            clicks: 562
          }, {
            name: 'Datalox 2',
            tag: 'Guppy Media',
            totalSearches: '5341',
            monetizedSearches: '5213',
            revenue: '1362',
            clicks: 562
          }];
          this.columns = [{
            prop: 'name'
          }, {
            name: 'Gender'
          }];
          this.expanded = {};
        }

        _createClass(ThirdPartyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var revenueByDayArray = Array.from({
              length: 20
            }, function () {
              return Math.floor(Math.random() * (8000 - 4000) + 4000);
            });
            var searchesPerDay = Array.from({
              length: 20
            }, function () {
              return Math.floor(Math.random() * (100000 - 40000) + 40000);
            });
            this.setChartOptions(10000, 100000, ['Nov 1, Nov 2, Nov 3, Nov 4', 'Nov 5', 'Nov 5', 'Nov 6', 'Nov 7', 'Nov 8', 'Nov 9', 'Nov 10', 'Nov 11', 'Nov 12', 'Nov 13', 'Nov 14', 'Nov 15', 'Nov 16', 'Nov 17', 'Nov 18', 'Nov 19', 'Nov 20'], revenueByDayArray, searchesPerDay);
          }
        }, {
          key: "updateReportingFiltering",
          value: function updateReportingFiltering(range) {
            // this.range = range;
            // this.getAllPerionStats(
            //   'manic_perion',
            //   this.range.startDate,
            //   this.range.endDate
            // );
            console.log('Report');
          }
        }, {
          key: "toggleExpandRow",
          value: function toggleExpandRow(row) {
            console.log('Toggled Expand Row!', row);
            this.table.rowDetail.toggleExpandRow(row);
          }
        }, {
          key: "onDetailToggle",
          value: function onDetailToggle(event) {
            console.log('Detail Toggled', event);
          }
        }, {
          key: "setChartOptions",
          value: function setChartOptions(maxRevenue, maxSearches, daysArray, revenueByDayArray, searchesPerDay) {
            this.chartDom = document.getElementById('main');
            this.myChart = echarts__WEBPACK_IMPORTED_MODULE_1__["init"](this.chartDom);
            this.option = {
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross',
                  crossStyle: {
                    color: '#999'
                  }
                }
              },
              toolbox: {
                feature: {
                  dataView: {
                    show: true,
                    readOnly: false
                  },
                  magicType: {
                    show: true,
                    type: ['line', 'bar']
                  },
                  restore: {
                    show: true
                  },
                  saveAsImage: {
                    show: true
                  }
                }
              },
              legend: {
                data: ['Revenue', 'Searches']
              },
              xAxis: [{
                type: 'category',
                data: daysArray,
                axisPointer: {
                  type: 'shadow'
                }
              }],
              yAxis: [{
                type: 'value',
                name: 'Revenue',
                min: 0,
                max: maxRevenue,
                interval: 25000,
                axisLabel: {
                  formatter: '${value}'
                }
              }, {
                type: 'value',
                name: 'Searches',
                min: 0,
                max: maxSearches,
                interval: 100000,
                axisLabel: {
                  formatter: '{value}'
                }
              }],
              series: [{
                name: 'Revenue',
                type: 'bar',
                data: revenueByDayArray
              }, {
                name: 'Searches',
                type: 'line',
                yAxisIndex: 1,
                data: searchesPerDay
              }]
            };
            this.option && this.myChart.setOption(this.option);
          }
        }]);

        return ThirdPartyComponent;
      }();

      ThirdPartyComponent.ɵfac = function ThirdPartyComponent_Factory(t) {
        return new (t || ThirdPartyComponent)();
      };

      ThirdPartyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ThirdPartyComponent,
        selectors: [["app-third-party"]],
        viewQuery: function ThirdPartyComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 30,
        vars: 13,
        consts: [[3, "onDatesPicked"], ["id", "main", 2, "width", "100%", "height", "300px"], [1, "material", "fullscreen", "expandable", 2, "top", "52px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH", "rows"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "name"], ["ngx-datatable-header-template", ""], ["name", "tag"], ["name", "totalSearches"], ["name", "monetizedSearches"], ["name", "clicks"], ["name", "CTR"], ["name", "revenue"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], [3, "innerHTML"]],
        template: function ThirdPartyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDatesPicked", function ThirdPartyComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-datatable", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-datatable-row-detail", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggle", function ThirdPartyComponent_Template_ngx_datatable_row_detail_toggle_4_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ThirdPartyComponent_ng_template_6_Template, 6, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngx-datatable-column", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ThirdPartyComponent_ng_template_8_Template, 1, 4, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngx-datatable-column", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ThirdPartyComponent_ng_template_10_Template, 1, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ThirdPartyComponent_ng_template_11_Template, 2, 1, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngx-datatable-column", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ThirdPartyComponent_ng_template_13_Template, 1, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ThirdPartyComponent_ng_template_14_Template, 2, 1, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ngx-datatable-column", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ThirdPartyComponent_ng_template_16_Template, 1, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ThirdPartyComponent_ng_template_17_Template, 3, 3, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ThirdPartyComponent_ng_template_19_Template, 1, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ThirdPartyComponent_ng_template_20_Template, 3, 3, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ngx-datatable-column", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ThirdPartyComponent_ng_template_22_Template, 1, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ThirdPartyComponent_ng_template_23_Template, 3, 3, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ngx-datatable-column", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ThirdPartyComponent_ng_template_25_Template, 2, 1, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ThirdPartyComponent_ng_template_26_Template, 2, 4, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ngx-datatable-column", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ThirdPartyComponent_ng_template_28_Template, 1, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ThirdPartyComponent_ng_template_29_Template, 3, 4, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("scrollbarH", true)("rows", ctx.rows);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 50)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
          }
        },
        directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_2__["ReportingFilteringComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnHeaderDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL3RoaXJkLXBhcnR5L3RoaXJkLXBhcnR5LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThirdPartyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-third-party',
            templateUrl: './third-party.component.html',
            styleUrls: ['./third-party.component.scss']
          }]
        }], function () {
          return [];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['expandableTable']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/modules/admin-reporting/verizon-direct/verizon-direct.component.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/admin-reporting/verizon-direct/verizon-direct.component.ts ***!
      \************************************************************************************/

    /*! exports provided: VerizonDirectComponent */

    /***/
    function srcAppModulesAdminReportingVerizonDirectVerizonDirectComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerizonDirectComponent", function () {
        return VerizonDirectComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_shared_service_admin_stats_verizon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/service/admin-stats/verizon.service */
      "./src/app/shared/service/admin-stats/verizon.service.ts");
      /* harmony import */


      var _shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/service/users.service */
      "./src/app/shared/service/users.service.ts");
      /* harmony import */


      var src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modules/tag-management/tag-management.service */
      "./src/app/modules/tag-management/tag-management.service.ts");
      /* harmony import */


      var _shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-filtering/reporting-filtering.component */
      "./src/app/shared/modules/reporting-filtering/reporting-filtering.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/modules/reporting-revenue-chart/reporting-revenue-chart.component */
      "./src/app/shared/modules/reporting-revenue-chart/reporting-revenue-chart.component.ts");
      /* harmony import */


      var _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/modules/summary-metrics/summary-metrics.component */
      "./src/app/shared/modules/summary-metrics/summary-metrics.component.ts");

      var _c0 = ["expandableTable"];

      function VerizonDirectComponent_app_reporting_revenue_chart_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-reporting-revenue-chart", 32);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chartData", ctx_r0.chartData);
        }
      }

      function VerizonDirectComponent_app_summary_metrics_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-summary-metrics", 33);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("summaryMetricsData", ctx_r1.summaryMetrics);
        }
      }

      function VerizonDirectComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function VerizonDirectComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerizonDirectComponent_ng_template_18_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);

            var row_r28 = ctx.row;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r30.toggleExpandRow(row_r28);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var expanded_r29 = ctx.expanded;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("datatable-icon-right", !expanded_r29)("datatable-icon-down", expanded_r29);
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_19_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Date ");
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_19_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r35 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r35));
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_ngx_datatable_column_19_ng_template_1_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_ngx_datatable_column_19_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_20_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Subid ");
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_20_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r39 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r39);
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_ngx_datatable_column_20_ng_template_1_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_ngx_datatable_column_20_ng_template_2_Template, 2, 1, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_21_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher ");
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_21_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r43 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r43);
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_ngx_datatable_column_21_ng_template_1_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_ngx_datatable_column_21_ng_template_2_Template, 2, 1, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 100);
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_22_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Searches ");
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_22_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r47 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r47));
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_ngx_datatable_column_22_ng_template_1_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_ngx_datatable_column_22_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_23_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Bid Searches ");
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_23_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r51 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r51));
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_ngx_datatable_column_23_ng_template_1_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_ngx_datatable_column_23_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_24_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Bid Searches Result ");
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_24_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r55 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r55));
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_ngx_datatable_column_24_ng_template_1_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_ngx_datatable_column_24_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_25_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Clicks ");
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_25_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r59 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r59));
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_ngx_datatable_column_25_ng_template_1_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_ngx_datatable_column_25_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_26_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Coverage ");
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_26_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r63 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r63));
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_ngx_datatable_column_26_ng_template_1_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_ngx_datatable_column_26_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_27_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " CPC ");
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_27_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r67 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r67));
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_ngx_datatable_column_27_ng_template_1_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_ngx_datatable_column_27_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_28_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " CTR ");
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_28_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r71 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r71));
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_ngx_datatable_column_28_ng_template_1_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_ngx_datatable_column_28_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_29_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " RN ");
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_29_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r75 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r75));
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_ngx_datatable_column_29_ng_template_1_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_ngx_datatable_column_29_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_30_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " TqScore ");
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_30_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r79 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r79));
        }
      }

      function VerizonDirectComponent_ngx_datatable_column_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-datatable-column", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_ngx_datatable_column_30_ng_template_1_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_ngx_datatable_column_30_ng_template_2_Template, 3, 3, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function VerizonDirectComponent_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Publisher Net ");
        }
      }

      function VerizonDirectComponent_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r81 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r81, "USD"));
        }
      }

      function VerizonDirectComponent_ng_template_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Profit ");
        }
      }

      function VerizonDirectComponent_ng_template_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r83 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r83, "USD"));
        }
      }

      function VerizonDirectComponent_ng_template_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Revenue ");
        }
      }

      function VerizonDirectComponent_ng_template_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r85 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, value_r85, "USD"));
        }
      }

      function VerizonDirectComponent_ng_template_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Split ");
        }
      }

      function VerizonDirectComponent_ng_template_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r87 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, value_r87) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, 0, "1.0-0"));
        }
      }

      var VerizonDirectComponent = /*#__PURE__*/function () {
        function VerizonDirectComponent(verizonService, cdr, userService, tagService) {
          _classCallCheck(this, VerizonDirectComponent);

          this.verizonService = verizonService;
          this.cdr = cdr;
          this.userService = userService;
          this.tagService = tagService;
          this.range = {
            startDate: '',
            endDate: ''
          };
          this.loadingIndicator = true;
          this.tagList = [];
          this.groupPublishFlag = false;
          this.groupDateShowFlag = false;
          this.groupSubidShowFlag = false;
          this.selectedCompany = this.getSelectedCompanyFromLocalStorage();
        }

        _createClass(VerizonDirectComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee89() {
              return regeneratorRuntime.wrap(function _callee89$(_context89) {
                while (1) {
                  switch (_context89.prev = _context89.next) {
                    case 0:
                      _context89.next = 2;
                      return this.getCompanyTags(this.selectedCompany);

                    case 2:
                      this.tagList = _context89.sent;
                      this.rows = [];
                      _context89.next = 6;
                      return this.getAllVerizonStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.rows = _context89.sent;
                      _context89.next = 9;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.chartData = _context89.sent;
                      _context89.next = 12;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 12:
                      this.summaryMetrics = _context89.sent;
                      this.refreshTable();

                    case 14:
                    case "end":
                      return _context89.stop();
                  }
                }
              }, _callee89, this);
            }));
          } //get Tags with selected company

        }, {
          key: "getCompanyTags",
          value: function getCompanyTags(selectedCompany) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee90() {
              var companyId, response;
              return regeneratorRuntime.wrap(function _callee90$(_context90) {
                while (1) {
                  switch (_context90.prev = _context90.next) {
                    case 0:
                      companyId = selectedCompany.split("/")[1];
                      _context90.prev = 1;
                      _context90.next = 4;
                      return this.tagService.getCompanyTags(companyId).toPromise();

                    case 4:
                      response = _context90.sent;
                      return _context90.abrupt("return", response);

                    case 8:
                      _context90.prev = 8;
                      _context90.t0 = _context90["catch"](1);
                      return _context90.abrupt("return", _context90.t0);

                    case 11:
                    case "end":
                      return _context90.stop();
                  }
                }
              }, _callee90, this, [[1, 8]]);
            }));
          } //Gets the Selected Company from Local Storage

        }, {
          key: "getSelectedCompanyFromLocalStorage",
          value: function getSelectedCompanyFromLocalStorage() {
            return this.userService.getSelectedCompanyFromLocalStorage();
          }
        }, {
          key: "updateReportingFiltering",
          value: function updateReportingFiltering(range) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee91() {
              return regeneratorRuntime.wrap(function _callee91$(_context91) {
                while (1) {
                  switch (_context91.prev = _context91.next) {
                    case 0:
                      // console.log('Update report filtering....');
                      this.range = range;
                      _context91.next = 3;
                      return this.getAllVerizonStats(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 3:
                      this.rows = _context91.sent;
                      _context91.next = 6;
                      return this.getChartMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 6:
                      this.chartData = _context91.sent;
                      _context91.next = 9;
                      return this.getSummaryMetrics(this.selectedCompany, this.range.startDate, this.range.endDate);

                    case 9:
                      this.summaryMetrics = _context91.sent;
                      this.refreshTable();

                    case 11:
                    case "end":
                      return _context91.stop();
                  }
                }
              }, _callee91, this);
            }));
          }
        }, {
          key: "refreshTable",
          value: function refreshTable() {
            this.cdr.markForCheck();
          }
        }, {
          key: "groupDate",
          value: function groupDate() {
            var helperSummary = {};
            var groupData = this.allStats.reduce(function (r, o) {
              var key = o.date;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].cpc += parseFloat(o.cpc ? o.cpc : 0);
                helperSummary[key].ctr += parseFloat(o.ctr ? o.ctr : 0);
                helperSummary[key].rn += parseFloat(o.rn ? o.rn : 0);
                helperSummary[key].coverage += parseFloat(o.coverage ? o.coverage : 0);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].biddedSearches += parseFloat(o.biddedSearches ? o.biddedSearches : 0);
                helperSummary[key].biddedResults += parseFloat(o.biddedResults ? o.biddedResults : 0);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator44 = _createForOfIteratorHelper(groupData),
                _step44;

            try {
              for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
                var group = _step44.value;
                group.split = group.split / group.counter;
                group.ctr = group.ctr / group.counter;
              }
            } catch (err) {
              _iterator44.e(err);
            } finally {
              _iterator44.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = true;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "groupSubid",
          value: function groupSubid() {
            var helperSummary = {};
            var groupData = this.allStats.reduce(function (r, o) {
              var key = o.subid;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].cpc += parseFloat(o.cpc ? o.cpc : 0);
                helperSummary[key].ctr += parseFloat(o.ctr ? o.ctr : 0);
                helperSummary[key].rn += parseFloat(o.rn ? o.rn : 0);
                helperSummary[key].coverage += parseFloat(o.coverage ? o.coverage : 0);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].biddedSearches += parseFloat(o.biddedSearches ? o.biddedSearches : 0);
                helperSummary[key].biddedResults += parseFloat(o.biddedResults ? o.biddedResults : 0);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator45 = _createForOfIteratorHelper(groupData),
                _step45;

            try {
              for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
                var group = _step45.value;
                group.split = group.split / group.counter;
                group.ctr = group.ctr / group.counter;
              }
            } catch (err) {
              _iterator45.e(err);
            } finally {
              _iterator45.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = true;
            this.cdr.markForCheck();
          }
        }, {
          key: "groupProvider",
          value: function groupProvider() {
            var helperSummary = {};
            var groupData = this.allStats.reduce(function (r, o) {
              var key = o.publisher;

              if (!helperSummary[key]) {
                helperSummary[key] = Object.assign({}, o); // create a copy of o

                helperSummary[key].counter = 1;
                r.push(helperSummary[key]);
              } else {
                helperSummary[key].clicks += parseFloat(o.clicks);
                helperSummary[key].cpc += parseFloat(o.cpc ? o.cpc : 0);
                helperSummary[key].ctr += parseFloat(o.ctr ? o.ctr : 0);
                helperSummary[key].rn += parseFloat(o.rn ? o.rn : 0);
                helperSummary[key].coverage += parseFloat(o.coverage ? o.coverage : 0);
                helperSummary[key].searches += parseFloat(o.searches ? o.searches : 0);
                helperSummary[key].biddedSearches += parseFloat(o.biddedSearches ? o.biddedSearches : 0);
                helperSummary[key].biddedResults += parseFloat(o.biddedResults ? o.biddedResults : 0);
                helperSummary[key].profit += parseFloat(o.profit);
                helperSummary[key].publisherNet += parseFloat(o.publisherNet);
                helperSummary[key].revenue += parseFloat(o.revenue);
                helperSummary[key].split += parseFloat(o.split);
                helperSummary[key].counter++;
              }

              return r;
            }, []);

            var _iterator46 = _createForOfIteratorHelper(groupData),
                _step46;

            try {
              for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
                var group = _step46.value;
                group.split = group.split / group.counter;
                group.ctr = group.ctr / group.counter;
              }
            } catch (err) {
              _iterator46.e(err);
            } finally {
              _iterator46.f();
            }

            this.rows = groupData;
            this.groupPublishFlag = true;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "backGroup",
          value: function backGroup() {
            this.rows = this.allStats;
            this.groupPublishFlag = false;
            this.groupDateShowFlag = false;
            this.groupSubidShowFlag = false;
            this.cdr.markForCheck();
          }
        }, {
          key: "toggleExpandRow",
          value: function toggleExpandRow(row) {
            console.log('Toggled Expand Row!', row);
            this.table.rowDetail.toggleExpandRow(row);
          }
        }, {
          key: "onDetailToggle",
          value: function onDetailToggle(event) {
            console.log('Detail Toggled', event);
          }
        }, {
          key: "getChartMetrics",
          value: function getChartMetrics(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee92() {
              var response;
              return regeneratorRuntime.wrap(function _callee92$(_context92) {
                while (1) {
                  switch (_context92.prev = _context92.next) {
                    case 0:
                      _context92.prev = 0;
                      _context92.next = 3;
                      return this.verizonService.getChartMetrics(company, startDate, endDate).toPromise();

                    case 3:
                      response = _context92.sent;
                      return _context92.abrupt("return", response);

                    case 7:
                      _context92.prev = 7;
                      _context92.t0 = _context92["catch"](0);
                      return _context92.abrupt("return", _context92.t0);

                    case 10:
                    case "end":
                      return _context92.stop();
                  }
                }
              }, _callee92, this, [[0, 7]]);
            }));
          }
        }, {
          key: "getAllVerizonStats",
          value: function getAllVerizonStats(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee93() {
              var response, _iterator47, _step47, tagL, _iterator48, _step48, tagSub;

              return regeneratorRuntime.wrap(function _callee93$(_context93) {
                while (1) {
                  switch (_context93.prev = _context93.next) {
                    case 0:
                      _context93.next = 2;
                      return this.verizonService.getAllVerizonStats(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context93.sent;
                      console.log('getAllVerizonStats() response:', response);
                      this.loadingIndicator = false;
                      this.allStats = response.stats;
                      this.allStats.map(function (resStat) {
                        resStat.publisher = "No Publisher";
                        resStat.tagname = "No Tag";
                      });
                      _iterator47 = _createForOfIteratorHelper(this.tagList);

                      try {
                        for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
                          tagL = _step47.value;

                          if (tagL.tag.advertiser == "verizon-direct") {
                            _iterator48 = _createForOfIteratorHelper(tagL.tag.subids);

                            try {
                              for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
                                tagSub = _step48.value;

                                if (tagSub.filterTag == "Contains") {
                                  this.allStats.map(function (stat) {
                                    if (stat.subid.includes(tagSub.subid)) {
                                      stat.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "StartsWith") {
                                  this.allStats.map(function (stat_1) {
                                    if (stat_1.subid.startsWith(tagSub.subid)) {
                                      stat_1.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_1.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "EndsWith") {
                                  this.allStats.map(function (stat_2) {
                                    if (stat_2.subid.endsWith(tagSub.subid)) {
                                      stat_2.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_2.tagname = tagL.tag.name;
                                    }
                                  });
                                } else if (tagSub.filterTag == "ExactValue") {
                                  this.allStats.map(function (stat_3) {
                                    if (stat_3.subid == tagSub.subid) {
                                      stat_3.publisher = tagL.user.length ? tagL.user[0].fullname : "No Publisher";
                                      stat_3.tagname = tagL.tag.name;
                                    }
                                  });
                                }
                              }
                            } catch (err) {
                              _iterator48.e(err);
                            } finally {
                              _iterator48.f();
                            }
                          }
                        }
                      } catch (err) {
                        _iterator47.e(err);
                      } finally {
                        _iterator47.f();
                      }

                      return _context93.abrupt("return", this.allStats);

                    case 10:
                    case "end":
                      return _context93.stop();
                  }
                }
              }, _callee93, this);
            }));
          }
        }, {
          key: "getSummaryMetrics",
          value: function getSummaryMetrics(company, startDate, endDate) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee94() {
              var response, allSummary, currentPercentPace, lastPercentPace, selectedPercentPace;
              return regeneratorRuntime.wrap(function _callee94$(_context94) {
                while (1) {
                  switch (_context94.prev = _context94.next) {
                    case 0:
                      _context94.next = 2;
                      return this.verizonService.getSummaryMetrics(company, startDate, endDate).toPromise();

                    case 2:
                      response = _context94.sent;
                      allSummary = {};
                      currentPercentPace = 0;
                      lastPercentPace = 0;
                      selectedPercentPace = 0;

                      if (response.summary[0].lastMonthStat[0].profitPace != 0) {
                        currentPercentPace = (response.summary[0].summaryMetrics[0].profitPace - response.summary[0].lastMonthStat[0].profitPace) / response.summary[0].lastMonthStat[0].profitPace * 100;
                      }

                      if (response.summary[0].twoLastMonthStat[0].profitPace != 0) {
                        lastPercentPace = (response.summary[0].lastMonthStat[0].profitPace - response.summary[0].twoLastMonthStat[0].profitPace) / response.summary[0].twoLastMonthStat[0].profitPace * 100;
                      }

                      if (response.summary[0].prevSelectedStat[0].profitPace != 0) {
                        selectedPercentPace = (response.summary[0].selectedStat[0].profitPace - response.summary[0].prevSelectedStat[0].profitPace) / response.summary[0].prevSelectedStat[0].profitPace * 100;
                      }

                      response.summary[0].summaryMetrics[0].percentPace = currentPercentPace;
                      response.summary[0].lastMonthStat[0].percentPace = lastPercentPace;
                      response.summary[0].selectedStat[0].percentPace = selectedPercentPace;
                      response.summary[0].selectedStat[0].selectedStartDate = startDate;
                      response.summary[0].selectedStat[0].selectedEndDate = endDate;
                      allSummary['summary'] = response.summary;
                      return _context94.abrupt("return", allSummary);

                    case 17:
                    case "end":
                      return _context94.stop();
                  }
                }
              }, _callee94, this);
            }));
          }
        }]);

        return VerizonDirectComponent;
      }();

      VerizonDirectComponent.ɵfac = function VerizonDirectComponent_Factory(t) {
        return new (t || VerizonDirectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_admin_stats_verizon_service__WEBPACK_IMPORTED_MODULE_2__["VerizonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]));
      };

      VerizonDirectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: VerizonDirectComponent,
        selectors: [["app-verizon-direct"]],
        viewQuery: function VerizonDirectComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 43,
        vars: 28,
        consts: [[3, "onDatesPicked"], [3, "chartData", 4, "ngIf"], [3, "summaryMetricsData", 4, "ngIf"], [1, "row", "px-6"], [1, "btn", "btn-sm", "btn-primary", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-success", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-info", "mx-1", 3, "click"], [1, "btn", "btn-sm", "btn-dark", "mx-1", 3, "click"], [1, "material", "fullscreen", "expandable", 2, "top", "30px", "height", "500px", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "rows", "loadingIndicator"], ["expandableTable", ""], [3, "rowHeight", "toggle"], ["myDetailRow", ""], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["ngx-datatable-cell-template", ""], ["name", "date", 3, "minWidth", 4, "ngIf"], ["name", "subid", 4, "ngIf"], ["name", "publisher", 3, "minWidth", 4, "ngIf"], ["name", "searches", 4, "ngIf"], ["name", "biddedSearches", 4, "ngIf"], ["name", "biddedResults", 4, "ngIf"], ["name", "clicks", 4, "ngIf"], ["name", "coverage", 4, "ngIf"], ["name", "cpc", 4, "ngIf"], ["name", "ctr", 4, "ngIf"], ["name", "rn", 4, "ngIf"], ["name", "tqScore", 4, "ngIf"], ["name", "publisherNet"], ["ngx-datatable-header-template", ""], ["name", "profit"], ["name", "revenue"], ["name", "split", 3, "minWidth"], [3, "chartData"], [3, "summaryMetricsData"], [2, "padding-left", "35px"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], ["name", "date", 3, "minWidth"], ["name", "subid"], ["name", "publisher", 3, "minWidth"], ["name", "searches"], ["name", "biddedSearches"], ["name", "biddedResults"], ["name", "clicks"], ["name", "coverage"], ["name", "cpc"], ["name", "ctr"], ["name", "rn"], ["name", "tqScore"]],
        template: function VerizonDirectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-reporting-filtering", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDatesPicked", function VerizonDirectComponent_Template_app_reporting_filtering_onDatesPicked_0_listener($event) {
              return ctx.updateReportingFiltering($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerizonDirectComponent_app_reporting_revenue_chart_1_Template, 1, 1, "app-reporting-revenue-chart", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerizonDirectComponent_app_summary_metrics_2_Template, 1, 1, "app-summary-metrics", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerizonDirectComponent_Template_button_click_4_listener() {
              return ctx.groupDate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Group by Date ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerizonDirectComponent_Template_button_click_6_listener() {
              return ctx.groupProvider();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Group by Publisher ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerizonDirectComponent_Template_button_click_8_listener() {
              return ctx.groupSubid();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Group by Subid ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerizonDirectComponent_Template_button_click_10_listener() {
              return ctx.backGroup();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ngx-datatable", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ngx-datatable-row-detail", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggle", function VerizonDirectComponent_Template_ngx_datatable_row_detail_toggle_14_listener($event) {
              return ctx.onDetailToggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, VerizonDirectComponent_ng_template_16_Template, 6, 0, "ng-template", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, VerizonDirectComponent_ng_template_18_Template, 1, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, VerizonDirectComponent_ngx_datatable_column_19_Template, 3, 1, "ngx-datatable-column", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, VerizonDirectComponent_ngx_datatable_column_20_Template, 3, 0, "ngx-datatable-column", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, VerizonDirectComponent_ngx_datatable_column_21_Template, 3, 1, "ngx-datatable-column", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, VerizonDirectComponent_ngx_datatable_column_22_Template, 3, 0, "ngx-datatable-column", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, VerizonDirectComponent_ngx_datatable_column_23_Template, 3, 0, "ngx-datatable-column", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, VerizonDirectComponent_ngx_datatable_column_24_Template, 3, 0, "ngx-datatable-column", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, VerizonDirectComponent_ngx_datatable_column_25_Template, 3, 0, "ngx-datatable-column", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, VerizonDirectComponent_ngx_datatable_column_26_Template, 3, 0, "ngx-datatable-column", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, VerizonDirectComponent_ngx_datatable_column_27_Template, 3, 0, "ngx-datatable-column", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, VerizonDirectComponent_ngx_datatable_column_28_Template, 3, 0, "ngx-datatable-column", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, VerizonDirectComponent_ngx_datatable_column_29_Template, 3, 0, "ngx-datatable-column", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, VerizonDirectComponent_ngx_datatable_column_30_Template, 3, 0, "ngx-datatable-column", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ngx-datatable-column", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, VerizonDirectComponent_ng_template_32_Template, 1, 0, "ng-template", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, VerizonDirectComponent_ng_template_33_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ngx-datatable-column", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, VerizonDirectComponent_ng_template_35_Template, 1, 0, "ng-template", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, VerizonDirectComponent_ng_template_36_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ngx-datatable-column", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, VerizonDirectComponent_ng_template_38_Template, 1, 0, "ng-template", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, VerizonDirectComponent_ng_template_39_Template, 3, 4, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ngx-datatable-column", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, VerizonDirectComponent_ng_template_41_Template, 1, 0, "ng-template", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, VerizonDirectComponent_ng_template_42_Template, 4, 6, "ng-template", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.summaryMetrics);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("rows", ctx.rows)("loadingIndicator", ctx.loadingIndicator);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 30)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.groupPublishFlag && !ctx.groupDateShowFlag && !ctx.groupSubidShowFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 35);
          }
        },
        directives: [_shared_modules_reporting_filtering_reporting_filtering_component__WEBPACK_IMPORTED_MODULE_5__["ReportingFilteringComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableColumnHeaderDirective"], _shared_modules_reporting_revenue_chart_reporting_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__["ReportingRevenueChartComponent"], _shared_modules_summary_metrics_summary_metrics_component__WEBPACK_IMPORTED_MODULE_9__["SummaryMetricsComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcmVwb3J0aW5nL3Zlcml6b24tZGlyZWN0L3Zlcml6b24tZGlyZWN0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VerizonDirectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-verizon-direct',
            templateUrl: './verizon-direct.component.html',
            styleUrls: ['./verizon-direct.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_service_admin_stats_verizon_service__WEBPACK_IMPORTED_MODULE_2__["VerizonService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _shared_service_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
          }, {
            type: src_app_modules_tag_management_tag_management_service__WEBPACK_IMPORTED_MODULE_4__["TagManagementService"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['expandableTable']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/service/admin-stats/accounting.service.ts":
    /*!******************************************************************!*\
      !*** ./src/app/shared/service/admin-stats/accounting.service.ts ***!
      \******************************************************************/

    /*! exports provided: AccountingService */

    /***/
    function srcAppSharedServiceAdminStatsAccountingServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountingService", function () {
        return AccountingService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var API_ACCOUNTING_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/stats/admin/accounting");

      var AccountingService = /*#__PURE__*/function () {
        function AccountingService(http) {
          _classCallCheck(this, AccountingService);

          this.http = http;
        }

        _createClass(AccountingService, [{
          key: "getRubiStats",
          value: function getRubiStats(company, startDate, endDate) {
            return this.http.get(API_ACCOUNTING_URL + '/rubi', {
              params: {
                company: company,
                startDate: startDate,
                endDate: endDate
              }
            });
          }
        }, {
          key: "getPerionStats",
          value: function getPerionStats(company, startDate, endDate) {
            return this.http.get(API_ACCOUNTING_URL + '/perion', {
              params: {
                company: company,
                startDate: startDate,
                endDate: endDate
              }
            });
          }
        }, {
          key: "getLyonStats",
          value: function getLyonStats(company, startDate, endDate) {
            return this.http.get(API_ACCOUNTING_URL + '/lyons', {
              params: {
                company: company,
                startDate: startDate,
                endDate: endDate
              }
            });
          }
        }, {
          key: "getApptitudeStats",
          value: function getApptitudeStats(company, startDate, endDate) {
            return this.http.get(API_ACCOUNTING_URL + '/apptitude', {
              params: {
                company: company,
                startDate: startDate,
                endDate: endDate
              }
            });
          }
        }, {
          key: "getSolexBCStats",
          value: function getSolexBCStats(company, startDate, endDate) {
            return this.http.get(API_ACCOUNTING_URL + '/solex-bc', {
              params: {
                company: company,
                startDate: startDate,
                endDate: endDate
              }
            });
          }
        }, {
          key: "getVerizonDirectStats",
          value: function getVerizonDirectStats(company, startDate, endDate) {
            return this.http.get(API_ACCOUNTING_URL + '/verizon-direct', {
              params: {
                company: company,
                startDate: startDate,
                endDate: endDate
              }
            });
          }
        }, {
          key: "getSystem1Stats",
          value: function getSystem1Stats(company, startDate, endDate) {
            return this.http.get(API_ACCOUNTING_URL + '/system1', {
              params: {
                company: company,
                startDate: startDate,
                endDate: endDate
              }
            });
          }
        }]);

        return AccountingService;
      }();

      AccountingService.ɵfac = function AccountingService_Factory(t) {
        return new (t || AccountingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      AccountingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AccountingService,
        factory: AccountingService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountingService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/service/admin-stats/update.service.ts":
    /*!**************************************************************!*\
      !*** ./src/app/shared/service/admin-stats/update.service.ts ***!
      \**************************************************************/

    /*! exports provided: ManualUpdateService */

    /***/
    function srcAppSharedServiceAdminStatsUpdateServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManualUpdateService", function () {
        return ManualUpdateService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var API_MANUAL_UPDATE_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl, "/stats/admin/manual-update");

      var ManualUpdateService = /*#__PURE__*/function () {
        function ManualUpdateService(http) {
          _classCallCheck(this, ManualUpdateService);

          this.http = http;
        }

        _createClass(ManualUpdateService, [{
          key: "updateManualStats",
          value: function updateManualStats(updateData, deviceToken) {
            var company = updateData.company,
                reportType = updateData.reportType,
                startDate = updateData.startDate,
                endDate = updateData.endDate;
            var data = {
              "company": company,
              "reportType": reportType,
              'startDate': moment__WEBPACK_IMPORTED_MODULE_2__(startDate).format("YYYY-MM-DD"),
              'endDate': moment__WEBPACK_IMPORTED_MODULE_2__(endDate).format("YYYY-MM-DD"),
              "deviceToken": deviceToken
            };
            return this.http.put(API_MANUAL_UPDATE_URL + '/stat-update', data);
          }
        }, {
          key: "updateManualSplit",
          value: function updateManualSplit(updateData) {
            var company = updateData.company,
                reportType = updateData.reportType,
                tag = updateData.tag,
                startDate = updateData.startDate,
                endDate = updateData.endDate;
            var data = {
              "company": company,
              "reportType": reportType,
              "tag": tag,
              'startDate': startDate,
              'endDate': endDate
            };
            return this.http.put(API_MANUAL_UPDATE_URL + '/split-update', data);
          }
        }]);

        return ManualUpdateService;
      }();

      ManualUpdateService.ɵfac = function ManualUpdateService_Factory(t) {
        return new (t || ManualUpdateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      ManualUpdateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ManualUpdateService,
        factory: ManualUpdateService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManualUpdateService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-admin-reporting-admin-reporting-module-es5.js.map