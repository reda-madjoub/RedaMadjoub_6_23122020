// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script.e63fa78b.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "KA2S": [function (require, module, exports) {
    var define;

    var t,
        r = function (t) {
      "use strict";

      var r,
          e = Object.prototype,
          n = e.hasOwnProperty,
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          a = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";

      function u(t, r, e) {
        return Object.defineProperty(t, r, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }), t[r];
      }

      try {
        u({}, "");
      } catch (P) {
        u = function u(t, r, e) {
          return t[r] = e;
        };
      }

      function h(t, r, e, n) {
        var o = r && r.prototype instanceof d ? r : d,
            i = Object.create(o.prototype),
            a = new G(n || []);
        return i._invoke = function (t, r, e) {
          var n = l;
          return function (o, i) {
            if (n === p) throw new Error("Generator is already running");

            if (n === y) {
              if ("throw" === o) throw i;
              return F();
            }

            for (e.method = o, e.arg = i;;) {
              var a = e.delegate;

              if (a) {
                var c = j(a, e);

                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }

              if ("next" === e.method) e.sent = e._sent = e.arg;else if ("throw" === e.method) {
                if (n === l) throw n = y, e.arg;
                e.dispatchException(e.arg);
              } else "return" === e.method && e.abrupt("return", e.arg);
              n = p;
              var u = f(t, r, e);

              if ("normal" === u.type) {
                if (n = e.done ? y : s, u.arg === v) continue;
                return {
                  value: u.arg,
                  done: e.done
                };
              }

              "throw" === u.type && (n = y, e.method = "throw", e.arg = u.arg);
            }
          };
        }(t, e, a), i;
      }

      function f(t, r, e) {
        try {
          return {
            type: "normal",
            arg: t.call(r, e)
          };
        } catch (P) {
          return {
            type: "throw",
            arg: P
          };
        }
      }

      t.wrap = h;
      var l = "suspendedStart",
          s = "suspendedYield",
          p = "executing",
          y = "completed",
          v = {};

      function d() {}

      function g() {}

      function m() {}

      var w = {};

      w[i] = function () {
        return this;
      };

      var L = Object.getPrototypeOf,
          x = L && L(L(N([])));
      x && x !== e && n.call(x, i) && (w = x);
      var b = m.prototype = d.prototype = Object.create(w);

      function E(t) {
        ["next", "throw", "return"].forEach(function (r) {
          u(t, r, function (t) {
            return this._invoke(r, t);
          });
        });
      }

      function _(t, r) {
        var e;

        this._invoke = function (o, i) {
          function a() {
            return new r(function (e, a) {
              !function e(o, i, a, c) {
                var u = f(t[o], t, i);

                if ("throw" !== u.type) {
                  var h = u.arg,
                      l = h.value;
                  return l && "object" == _typeof(l) && n.call(l, "__await") ? r.resolve(l.__await).then(function (t) {
                    e("next", t, a, c);
                  }, function (t) {
                    e("throw", t, a, c);
                  }) : r.resolve(l).then(function (t) {
                    h.value = t, a(h);
                  }, function (t) {
                    return e("throw", t, a, c);
                  });
                }

                c(u.arg);
              }(o, i, e, a);
            });
          }

          return e = e ? e.then(a, a) : a();
        };
      }

      function j(t, e) {
        var n = t.iterator[e.method];

        if (n === r) {
          if (e.delegate = null, "throw" === e.method) {
            if (t.iterator.return && (e.method = "return", e.arg = r, j(t, e), "throw" === e.method)) return v;
            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return v;
        }

        var o = f(n, t.iterator, e.arg);
        if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, v;
        var i = o.arg;
        return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = r), e.delegate = null, v) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, v);
      }

      function O(t) {
        var r = {
          tryLoc: t[0]
        };
        1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r);
      }

      function k(t) {
        var r = t.completion || {};
        r.type = "normal", delete r.arg, t.completion = r;
      }

      function G(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(O, this), this.reset(!0);
      }

      function N(t) {
        if (t) {
          var e = t[i];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;

          if (!isNaN(t.length)) {
            var o = -1,
                a = function e() {
              for (; ++o < t.length;) {
                if (n.call(t, o)) return e.value = t[o], e.done = !1, e;
              }

              return e.value = r, e.done = !0, e;
            };

            return a.next = a;
          }
        }

        return {
          next: F
        };
      }

      function F() {
        return {
          value: r,
          done: !0
        };
      }

      return g.prototype = b.constructor = m, m.constructor = g, g.displayName = u(m, c, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
        var r = "function" == typeof t && t.constructor;
        return !!r && (r === g || "GeneratorFunction" === (r.displayName || r.name));
      }, t.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m, u(t, c, "GeneratorFunction")), t.prototype = Object.create(b), t;
      }, t.awrap = function (t) {
        return {
          __await: t
        };
      }, E(_.prototype), _.prototype[a] = function () {
        return this;
      }, t.AsyncIterator = _, t.async = function (r, e, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new _(h(r, e, n, o), i);
        return t.isGeneratorFunction(e) ? a : a.next().then(function (t) {
          return t.done ? t.value : a.next();
        });
      }, E(b), u(b, c, "Generator"), b[i] = function () {
        return this;
      }, b.toString = function () {
        return "[object Generator]";
      }, t.keys = function (t) {
        var r = [];

        for (var e in t) {
          r.push(e);
        }

        return r.reverse(), function e() {
          for (; r.length;) {
            var n = r.pop();
            if (n in t) return e.value = n, e.done = !1, e;
          }

          return e.done = !0, e;
        };
      }, t.values = N, G.prototype = {
        constructor: G,
        reset: function reset(t) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(k), !t) for (var e in this) {
            "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r);
          }
        },
        stop: function stop() {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(t) {
          if (this.done) throw t;
          var e = this;

          function o(n, o) {
            return c.type = "throw", c.arg = t, e.next = n, o && (e.method = "next", e.arg = r), !!o;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
                c = a.completion;
            if ("root" === a.tryLoc) return o("end");

            if (a.tryLoc <= this.prev) {
              var u = n.call(a, "catchLoc"),
                  h = n.call(a, "finallyLoc");

              if (u && h) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (u) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              } else {
                if (!h) throw new Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(t, r) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var o = this.tryEntries[e];

            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
              var i = o;
              break;
            }
          }

          i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
          var a = i ? i.completion : {};
          return a.type = t, a.arg = r, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(a);
        },
        complete: function complete(t, r) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), v;
        },
        finish: function finish(t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var e = this.tryEntries[r];
            if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), k(e), v;
          }
        },
        catch: function _catch(t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var e = this.tryEntries[r];

            if (e.tryLoc === t) {
              var n = e.completion;

              if ("throw" === n.type) {
                var o = n.arg;
                k(e);
              }

              return o;
            }
          }

          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(t, e, n) {
          return this.delegate = {
            iterator: N(t),
            resultName: e,
            nextLoc: n
          }, "next" === this.method && (this.arg = r), v;
        }
      }, t;
    }("object" == _typeof(module) ? module.exports : {});

    try {
      regeneratorRuntime = r;
    } catch (e) {
      Function("r", "regeneratorRuntime = r")(r);
    }
  }, {}],
  "VRwd": [function (require, module, exports) {}, {}],
  "MO7r": [function (require, module, exports) {
    "use strict";

    function r(r) {
      return o(r) || e(r) || n(r) || t();
    }

    function t() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function n(r, t) {
      if (r) {
        if ("string" == typeof r) return a(r, t);
        var n = Object.prototype.toString.call(r).slice(8, -1);
        return "Object" === n && r.constructor && (n = r.constructor.name), "Map" === n || "Set" === n ? Array.from(r) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(r, t) : void 0;
      }
    }

    function e(r) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(r)) return Array.from(r);
    }

    function o(r) {
      if (Array.isArray(r)) return a(r);
    }

    function a(r, t) {
      (null == t || t > r.length) && (t = r.length);

      for (var n = 0, e = new Array(t); n < t; n++) {
        e[n] = r[n];
      }

      return e;
    }

    function c(r, t, n, e, o, a, c) {
      try {
        var i = r[a](c),
            u = i.value;
      } catch (s) {
        return void n(s);
      }

      i.done ? t(u) : Promise.resolve(u).then(e, o);
    }

    function i(r) {
      return function () {
        var t = this,
            n = arguments;
        return new Promise(function (e, o) {
          var a = r.apply(t, n);

          function i(r) {
            c(a, e, o, i, u, "next", r);
          }

          function u(r) {
            c(a, e, o, i, u, "throw", r);
          }

          i(void 0);
        });
      };
    }

    require("regenerator-runtime/runtime"), require("./test.js");

    var u = document.getElementsByClassName("photographers"),
        s = {
      method: "GET",
      redirect: "follow"
    },
        p = "",
        f = function () {
      var r = i(regeneratorRuntime.mark(function r() {
        var t, n;
        return regeneratorRuntime.wrap(function (r) {
          for (;;) {
            switch (r.prev = r.next) {
              case 0:
                return r.next = 2, fetch("https://cors-anywhere.herokuapp.com/https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeDataFR.json", s);

              case 2:
                return t = r.sent, r.next = 5, t.json();

              case 5:
                n = r.sent, h(n);

              case 7:
              case "end":
                return r.stop();
            }
          }
        }, r);
      }));
      return function () {
        return r.apply(this, arguments);
      };
    }(),
        h = function () {
      var t = i(regeneratorRuntime.mark(function t(n) {
        var e, o;
        return regeneratorRuntime.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {
              case 0:
                return t.next = 2, r(n.photographers).map(function (r) {
                  return r;
                });

              case 2:
                for (e = t.sent, o = 0; o < e.length; o++) {
                  console.log(e), p += '\n        <div class="card">\n            <a href="#">\n                <img src="./assets/portfolio-photographe/PhotographersIDPhotos/'.concat(e[o].portrait, '" alt="').concat(e[o].name, '">\n                <h2>').concat(e[o].name, "</h2>\n            </a>\n            <p>").concat(e[o].city, ", ").concat(e[o].country, "</p>\n            <p>").concat(e[o].tagline, "</p>\n            <p>").concat(e[o].price, "€/jour</p>\n        </div>\n        ");
                }

                return u[0].innerHTML = p, t.abrupt("return", e);

              case 6:
              case "end":
                return t.stop();
            }
          }
        }, t);
      }));
      return function (r) {
        return t.apply(this, arguments);
      };
    }();

    f();
  }, {
    "regenerator-runtime/runtime": "KA2S",
    "./test.js": "VRwd"
  }]
}, {}, ["MO7r"], null);
},{}]