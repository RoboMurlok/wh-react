(function () {
  const f = document.createElement("link").relList;
  if (f && f.supports && f.supports("modulepreload")) return;
  for (const m of document.querySelectorAll('link[rel="modulepreload"]')) o(m);
  new MutationObserver((m) => {
    for (const g of m)
      if (g.type === "childList")
        for (const E of g.addedNodes)
          E.tagName === "LINK" && E.rel === "modulepreload" && o(E);
  }).observe(document, { childList: !0, subtree: !0 });
  function d(m) {
    const g = {};
    return (
      m.integrity && (g.integrity = m.integrity),
      m.referrerPolicy && (g.referrerPolicy = m.referrerPolicy),
      m.crossOrigin === "use-credentials"
        ? (g.credentials = "include")
        : m.crossOrigin === "anonymous"
        ? (g.credentials = "omit")
        : (g.credentials = "same-origin"),
      g
    );
  }
  function o(m) {
    if (m.ep) return;
    m.ep = !0;
    const g = d(m);
    fetch(m.href, g);
  }
})();
var Oc = { exports: {} },
  qn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wd;
function Pp() {
  if (Wd) return qn;
  Wd = 1;
  var c = Symbol.for("react.transitional.element"),
    f = Symbol.for("react.fragment");
  function d(o, m, g) {
    var E = null;
    if (
      (g !== void 0 && (E = "" + g),
      m.key !== void 0 && (E = "" + m.key),
      "key" in m)
    ) {
      g = {};
      for (var D in m) D !== "key" && (g[D] = m[D]);
    } else g = m;
    return (
      (m = g.ref),
      { $$typeof: c, type: o, key: E, ref: m !== void 0 ? m : null, props: g }
    );
  }
  return (qn.Fragment = f), (qn.jsx = d), (qn.jsxs = d), qn;
}
var Fd;
function e0() {
  return Fd || ((Fd = 1), (Oc.exports = Pp())), Oc.exports;
}
var u = e0(),
  _c = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Id;
function a0() {
  if (Id) return W;
  Id = 1;
  var c = Symbol.for("react.transitional.element"),
    f = Symbol.for("react.portal"),
    d = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    m = Symbol.for("react.profiler"),
    g = Symbol.for("react.consumer"),
    E = Symbol.for("react.context"),
    D = Symbol.for("react.forward_ref"),
    b = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    A = Symbol.for("react.lazy"),
    _ = Symbol.for("react.activity"),
    L = Symbol.iterator;
  function Z(v) {
    return v === null || typeof v != "object"
      ? null
      : ((v = (L && v[L]) || v["@@iterator"]),
        typeof v == "function" ? v : null);
  }
  var K = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    k = Object.assign,
    w = {};
  function X(v, q, H) {
    (this.props = v),
      (this.context = q),
      (this.refs = w),
      (this.updater = H || K);
  }
  (X.prototype.isReactComponent = {}),
    (X.prototype.setState = function (v, q) {
      if (typeof v != "object" && typeof v != "function" && v != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, v, q, "setState");
    }),
    (X.prototype.forceUpdate = function (v) {
      this.updater.enqueueForceUpdate(this, v, "forceUpdate");
    });
  function Q() {}
  Q.prototype = X.prototype;
  function F(v, q, H) {
    (this.props = v),
      (this.context = q),
      (this.refs = w),
      (this.updater = H || K);
  }
  var Ne = (F.prototype = new Q());
  (Ne.constructor = F), k(Ne, X.prototype), (Ne.isPureReactComponent = !0);
  var Te = Array.isArray;
  function Le() {}
  var ee = { H: null, A: null, T: null, S: null },
    Be = Object.prototype.hasOwnProperty;
  function Ae(v, q, H) {
    var Y = H.ref;
    return {
      $$typeof: c,
      type: v,
      key: q,
      ref: Y !== void 0 ? Y : null,
      props: H,
    };
  }
  function ua(v, q) {
    return Ae(v.type, q, v.props);
  }
  function ca(v) {
    return typeof v == "object" && v !== null && v.$$typeof === c;
  }
  function Pe(v) {
    var q = { "=": "=0", ":": "=2" };
    return (
      "$" +
      v.replace(/[=:]/g, function (H) {
        return q[H];
      })
    );
  }
  var Dt = /\/+/g;
  function Ga(v, q) {
    return typeof v == "object" && v !== null && v.key != null
      ? Pe("" + v.key)
      : q.toString(36);
  }
  function Ma(v) {
    switch (v.status) {
      case "fulfilled":
        return v.value;
      case "rejected":
        throw v.reason;
      default:
        switch (
          (typeof v.status == "string"
            ? v.then(Le, Le)
            : ((v.status = "pending"),
              v.then(
                function (q) {
                  v.status === "pending" &&
                    ((v.status = "fulfilled"), (v.value = q));
                },
                function (q) {
                  v.status === "pending" &&
                    ((v.status = "rejected"), (v.reason = q));
                }
              )),
          v.status)
        ) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
        }
    }
    throw v;
  }
  function C(v, q, H, Y, I) {
    var te = typeof v;
    (te === "undefined" || te === "boolean") && (v = null);
    var fe = !1;
    if (v === null) fe = !0;
    else
      switch (te) {
        case "bigint":
        case "string":
        case "number":
          fe = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case c:
            case f:
              fe = !0;
              break;
            case A:
              return (fe = v._init), C(fe(v._payload), q, H, Y, I);
          }
      }
    if (fe)
      return (
        (I = I(v)),
        (fe = Y === "" ? "." + Ga(v, 0) : Y),
        Te(I)
          ? ((H = ""),
            fe != null && (H = fe.replace(Dt, "$&/") + "/"),
            C(I, q, H, "", function (Gl) {
              return Gl;
            }))
          : I != null &&
            (ca(I) &&
              (I = ua(
                I,
                H +
                  (I.key == null || (v && v.key === I.key)
                    ? ""
                    : ("" + I.key).replace(Dt, "$&/") + "/") +
                  fe
              )),
            q.push(I)),
        1
      );
    fe = 0;
    var We = Y === "" ? "." : Y + ":";
    if (Te(v))
      for (var Oe = 0; Oe < v.length; Oe++)
        (Y = v[Oe]), (te = We + Ga(Y, Oe)), (fe += C(Y, q, H, te, I));
    else if (((Oe = Z(v)), typeof Oe == "function"))
      for (v = Oe.call(v), Oe = 0; !(Y = v.next()).done; )
        (Y = Y.value), (te = We + Ga(Y, Oe++)), (fe += C(Y, q, H, te, I));
    else if (te === "object") {
      if (typeof v.then == "function") return C(Ma(v), q, H, Y, I);
      throw (
        ((q = String(v)),
        Error(
          "Objects are not valid as a React child (found: " +
            (q === "[object Object]"
              ? "object with keys {" + Object.keys(v).join(", ") + "}"
              : q) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return fe;
  }
  function U(v, q, H) {
    if (v == null) return v;
    var Y = [],
      I = 0;
    return (
      C(v, Y, "", "", function (te) {
        return q.call(H, te, I++);
      }),
      Y
    );
  }
  function $(v) {
    if (v._status === -1) {
      var q = v._result;
      (q = q()),
        q.then(
          function (H) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 1), (v._result = H));
          },
          function (H) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 2), (v._result = H));
          }
        ),
        v._status === -1 && ((v._status = 0), (v._result = q));
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var he =
      typeof reportError == "function"
        ? reportError
        : function (v) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var q = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof v == "object" &&
                  v !== null &&
                  typeof v.message == "string"
                    ? String(v.message)
                    : String(v),
                error: v,
              });
              if (!window.dispatchEvent(q)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", v);
              return;
            }
            console.error(v);
          },
    ge = {
      map: U,
      forEach: function (v, q, H) {
        U(
          v,
          function () {
            q.apply(this, arguments);
          },
          H
        );
      },
      count: function (v) {
        var q = 0;
        return (
          U(v, function () {
            q++;
          }),
          q
        );
      },
      toArray: function (v) {
        return (
          U(v, function (q) {
            return q;
          }) || []
        );
      },
      only: function (v) {
        if (!ca(v))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return v;
      },
    };
  return (
    (W.Activity = _),
    (W.Children = ge),
    (W.Component = X),
    (W.Fragment = d),
    (W.Profiler = m),
    (W.PureComponent = F),
    (W.StrictMode = o),
    (W.Suspense = b),
    (W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ee),
    (W.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (v) {
        return ee.H.useMemoCache(v);
      },
    }),
    (W.cache = function (v) {
      return function () {
        return v.apply(null, arguments);
      };
    }),
    (W.cacheSignal = function () {
      return null;
    }),
    (W.cloneElement = function (v, q, H) {
      if (v == null)
        throw Error(
          "The argument must be a React element, but you passed " + v + "."
        );
      var Y = k({}, v.props),
        I = v.key;
      if (q != null)
        for (te in (q.key !== void 0 && (I = "" + q.key), q))
          !Be.call(q, te) ||
            te === "key" ||
            te === "__self" ||
            te === "__source" ||
            (te === "ref" && q.ref === void 0) ||
            (Y[te] = q[te]);
      var te = arguments.length - 2;
      if (te === 1) Y.children = H;
      else if (1 < te) {
        for (var fe = Array(te), We = 0; We < te; We++)
          fe[We] = arguments[We + 2];
        Y.children = fe;
      }
      return Ae(v.type, I, Y);
    }),
    (W.createContext = function (v) {
      return (
        (v = {
          $$typeof: E,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (v.Provider = v),
        (v.Consumer = { $$typeof: g, _context: v }),
        v
      );
    }),
    (W.createElement = function (v, q, H) {
      var Y,
        I = {},
        te = null;
      if (q != null)
        for (Y in (q.key !== void 0 && (te = "" + q.key), q))
          Be.call(q, Y) &&
            Y !== "key" &&
            Y !== "__self" &&
            Y !== "__source" &&
            (I[Y] = q[Y]);
      var fe = arguments.length - 2;
      if (fe === 1) I.children = H;
      else if (1 < fe) {
        for (var We = Array(fe), Oe = 0; Oe < fe; Oe++)
          We[Oe] = arguments[Oe + 2];
        I.children = We;
      }
      if (v && v.defaultProps)
        for (Y in ((fe = v.defaultProps), fe))
          I[Y] === void 0 && (I[Y] = fe[Y]);
      return Ae(v, te, I);
    }),
    (W.createRef = function () {
      return { current: null };
    }),
    (W.forwardRef = function (v) {
      return { $$typeof: D, render: v };
    }),
    (W.isValidElement = ca),
    (W.lazy = function (v) {
      return { $$typeof: A, _payload: { _status: -1, _result: v }, _init: $ };
    }),
    (W.memo = function (v, q) {
      return { $$typeof: p, type: v, compare: q === void 0 ? null : q };
    }),
    (W.startTransition = function (v) {
      var q = ee.T,
        H = {};
      ee.T = H;
      try {
        var Y = v(),
          I = ee.S;
        I !== null && I(H, Y),
          typeof Y == "object" &&
            Y !== null &&
            typeof Y.then == "function" &&
            Y.then(Le, he);
      } catch (te) {
        he(te);
      } finally {
        q !== null && H.types !== null && (q.types = H.types), (ee.T = q);
      }
    }),
    (W.unstable_useCacheRefresh = function () {
      return ee.H.useCacheRefresh();
    }),
    (W.use = function (v) {
      return ee.H.use(v);
    }),
    (W.useActionState = function (v, q, H) {
      return ee.H.useActionState(v, q, H);
    }),
    (W.useCallback = function (v, q) {
      return ee.H.useCallback(v, q);
    }),
    (W.useContext = function (v) {
      return ee.H.useContext(v);
    }),
    (W.useDebugValue = function () {}),
    (W.useDeferredValue = function (v, q) {
      return ee.H.useDeferredValue(v, q);
    }),
    (W.useEffect = function (v, q) {
      return ee.H.useEffect(v, q);
    }),
    (W.useEffectEvent = function (v) {
      return ee.H.useEffectEvent(v);
    }),
    (W.useId = function () {
      return ee.H.useId();
    }),
    (W.useImperativeHandle = function (v, q, H) {
      return ee.H.useImperativeHandle(v, q, H);
    }),
    (W.useInsertionEffect = function (v, q) {
      return ee.H.useInsertionEffect(v, q);
    }),
    (W.useLayoutEffect = function (v, q) {
      return ee.H.useLayoutEffect(v, q);
    }),
    (W.useMemo = function (v, q) {
      return ee.H.useMemo(v, q);
    }),
    (W.useOptimistic = function (v, q) {
      return ee.H.useOptimistic(v, q);
    }),
    (W.useReducer = function (v, q, H) {
      return ee.H.useReducer(v, q, H);
    }),
    (W.useRef = function (v) {
      return ee.H.useRef(v);
    }),
    (W.useState = function (v) {
      return ee.H.useState(v);
    }),
    (W.useSyncExternalStore = function (v, q, H) {
      return ee.H.useSyncExternalStore(v, q, H);
    }),
    (W.useTransition = function () {
      return ee.H.useTransition();
    }),
    (W.version = "19.2.0"),
    W
  );
}
var Pd;
function Xc() {
  return Pd || ((Pd = 1), (_c.exports = a0())), _c.exports;
}
var M = Xc(),
  Rc = { exports: {} },
  Un = {},
  Dc = { exports: {} },
  qc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var em;
function t0() {
  return (
    em ||
      ((em = 1),
      (function (c) {
        function f(C, U) {
          var $ = C.length;
          C.push(U);
          e: for (; 0 < $; ) {
            var he = ($ - 1) >>> 1,
              ge = C[he];
            if (0 < m(ge, U)) (C[he] = U), (C[$] = ge), ($ = he);
            else break e;
          }
        }
        function d(C) {
          return C.length === 0 ? null : C[0];
        }
        function o(C) {
          if (C.length === 0) return null;
          var U = C[0],
            $ = C.pop();
          if ($ !== U) {
            C[0] = $;
            e: for (var he = 0, ge = C.length, v = ge >>> 1; he < v; ) {
              var q = 2 * (he + 1) - 1,
                H = C[q],
                Y = q + 1,
                I = C[Y];
              if (0 > m(H, $))
                Y < ge && 0 > m(I, H)
                  ? ((C[he] = I), (C[Y] = $), (he = Y))
                  : ((C[he] = H), (C[q] = $), (he = q));
              else if (Y < ge && 0 > m(I, $)) (C[he] = I), (C[Y] = $), (he = Y);
              else break e;
            }
          }
          return U;
        }
        function m(C, U) {
          var $ = C.sortIndex - U.sortIndex;
          return $ !== 0 ? $ : C.id - U.id;
        }
        if (
          ((c.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var g = performance;
          c.unstable_now = function () {
            return g.now();
          };
        } else {
          var E = Date,
            D = E.now();
          c.unstable_now = function () {
            return E.now() - D;
          };
        }
        var b = [],
          p = [],
          A = 1,
          _ = null,
          L = 3,
          Z = !1,
          K = !1,
          k = !1,
          w = !1,
          X = typeof setTimeout == "function" ? setTimeout : null,
          Q = typeof clearTimeout == "function" ? clearTimeout : null,
          F = typeof setImmediate < "u" ? setImmediate : null;
        function Ne(C) {
          for (var U = d(p); U !== null; ) {
            if (U.callback === null) o(p);
            else if (U.startTime <= C)
              o(p), (U.sortIndex = U.expirationTime), f(b, U);
            else break;
            U = d(p);
          }
        }
        function Te(C) {
          if (((k = !1), Ne(C), !K))
            if (d(b) !== null) (K = !0), Le || ((Le = !0), Pe());
            else {
              var U = d(p);
              U !== null && Ma(Te, U.startTime - C);
            }
        }
        var Le = !1,
          ee = -1,
          Be = 5,
          Ae = -1;
        function ua() {
          return w ? !0 : !(c.unstable_now() - Ae < Be);
        }
        function ca() {
          if (((w = !1), Le)) {
            var C = c.unstable_now();
            Ae = C;
            var U = !0;
            try {
              e: {
                (K = !1), k && ((k = !1), Q(ee), (ee = -1)), (Z = !0);
                var $ = L;
                try {
                  a: {
                    for (
                      Ne(C), _ = d(b);
                      _ !== null && !(_.expirationTime > C && ua());

                    ) {
                      var he = _.callback;
                      if (typeof he == "function") {
                        (_.callback = null), (L = _.priorityLevel);
                        var ge = he(_.expirationTime <= C);
                        if (((C = c.unstable_now()), typeof ge == "function")) {
                          (_.callback = ge), Ne(C), (U = !0);
                          break a;
                        }
                        _ === d(b) && o(b), Ne(C);
                      } else o(b);
                      _ = d(b);
                    }
                    if (_ !== null) U = !0;
                    else {
                      var v = d(p);
                      v !== null && Ma(Te, v.startTime - C), (U = !1);
                    }
                  }
                  break e;
                } finally {
                  (_ = null), (L = $), (Z = !1);
                }
                U = void 0;
              }
            } finally {
              U ? Pe() : (Le = !1);
            }
          }
        }
        var Pe;
        if (typeof F == "function")
          Pe = function () {
            F(ca);
          };
        else if (typeof MessageChannel < "u") {
          var Dt = new MessageChannel(),
            Ga = Dt.port2;
          (Dt.port1.onmessage = ca),
            (Pe = function () {
              Ga.postMessage(null);
            });
        } else
          Pe = function () {
            X(ca, 0);
          };
        function Ma(C, U) {
          ee = X(function () {
            C(c.unstable_now());
          }, U);
        }
        (c.unstable_IdlePriority = 5),
          (c.unstable_ImmediatePriority = 1),
          (c.unstable_LowPriority = 4),
          (c.unstable_NormalPriority = 3),
          (c.unstable_Profiling = null),
          (c.unstable_UserBlockingPriority = 2),
          (c.unstable_cancelCallback = function (C) {
            C.callback = null;
          }),
          (c.unstable_forceFrameRate = function (C) {
            0 > C || 125 < C
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Be = 0 < C ? Math.floor(1e3 / C) : 5);
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return L;
          }),
          (c.unstable_next = function (C) {
            switch (L) {
              case 1:
              case 2:
              case 3:
                var U = 3;
                break;
              default:
                U = L;
            }
            var $ = L;
            L = U;
            try {
              return C();
            } finally {
              L = $;
            }
          }),
          (c.unstable_requestPaint = function () {
            w = !0;
          }),
          (c.unstable_runWithPriority = function (C, U) {
            switch (C) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                C = 3;
            }
            var $ = L;
            L = C;
            try {
              return U();
            } finally {
              L = $;
            }
          }),
          (c.unstable_scheduleCallback = function (C, U, $) {
            var he = c.unstable_now();
            switch (
              (typeof $ == "object" && $ !== null
                ? (($ = $.delay),
                  ($ = typeof $ == "number" && 0 < $ ? he + $ : he))
                : ($ = he),
              C)
            ) {
              case 1:
                var ge = -1;
                break;
              case 2:
                ge = 250;
                break;
              case 5:
                ge = 1073741823;
                break;
              case 4:
                ge = 1e4;
                break;
              default:
                ge = 5e3;
            }
            return (
              (ge = $ + ge),
              (C = {
                id: A++,
                callback: U,
                priorityLevel: C,
                startTime: $,
                expirationTime: ge,
                sortIndex: -1,
              }),
              $ > he
                ? ((C.sortIndex = $),
                  f(p, C),
                  d(b) === null &&
                    C === d(p) &&
                    (k ? (Q(ee), (ee = -1)) : (k = !0), Ma(Te, $ - he)))
                : ((C.sortIndex = ge),
                  f(b, C),
                  K || Z || ((K = !0), Le || ((Le = !0), Pe()))),
              C
            );
          }),
          (c.unstable_shouldYield = ua),
          (c.unstable_wrapCallback = function (C) {
            var U = L;
            return function () {
              var $ = L;
              L = U;
              try {
                return C.apply(this, arguments);
              } finally {
                L = $;
              }
            };
          });
      })(qc)),
    qc
  );
}
var am;
function l0() {
  return am || ((am = 1), (Dc.exports = t0())), Dc.exports;
}
var Uc = { exports: {} },
  ke = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tm;
function n0() {
  if (tm) return ke;
  tm = 1;
  var c = Xc();
  function f(b) {
    var p = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var A = 2; A < arguments.length; A++)
        p += "&args[]=" + encodeURIComponent(arguments[A]);
    }
    return (
      "Minified React error #" +
      b +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function d() {}
  var o = {
      d: {
        f: d,
        r: function () {
          throw Error(f(522));
        },
        D: d,
        C: d,
        L: d,
        m: d,
        X: d,
        S: d,
        M: d,
      },
      p: 0,
      findDOMNode: null,
    },
    m = Symbol.for("react.portal");
  function g(b, p, A) {
    var _ =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: m,
      key: _ == null ? null : "" + _,
      children: b,
      containerInfo: p,
      implementation: A,
    };
  }
  var E = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function D(b, p) {
    if (b === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (ke.createPortal = function (b, p) {
      var A =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(f(299));
      return g(b, p, null, A);
    }),
    (ke.flushSync = function (b) {
      var p = E.T,
        A = o.p;
      try {
        if (((E.T = null), (o.p = 2), b)) return b();
      } finally {
        (E.T = p), (o.p = A), o.d.f();
      }
    }),
    (ke.preconnect = function (b, p) {
      typeof b == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        o.d.C(b, p));
    }),
    (ke.prefetchDNS = function (b) {
      typeof b == "string" && o.d.D(b);
    }),
    (ke.preinit = function (b, p) {
      if (typeof b == "string" && p && typeof p.as == "string") {
        var A = p.as,
          _ = D(A, p.crossOrigin),
          L = typeof p.integrity == "string" ? p.integrity : void 0,
          Z = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        A === "style"
          ? o.d.S(b, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: _,
              integrity: L,
              fetchPriority: Z,
            })
          : A === "script" &&
            o.d.X(b, {
              crossOrigin: _,
              integrity: L,
              fetchPriority: Z,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (ke.preinitModule = function (b, p) {
      if (typeof b == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var A = D(p.as, p.crossOrigin);
            o.d.M(b, {
              crossOrigin: A,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && o.d.M(b);
    }),
    (ke.preload = function (b, p) {
      if (
        typeof b == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var A = p.as,
          _ = D(A, p.crossOrigin);
        o.d.L(b, A, {
          crossOrigin: _,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (ke.preloadModule = function (b, p) {
      if (typeof b == "string")
        if (p) {
          var A = D(p.as, p.crossOrigin);
          o.d.m(b, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: A,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else o.d.m(b);
    }),
    (ke.requestFormReset = function (b) {
      o.d.r(b);
    }),
    (ke.unstable_batchedUpdates = function (b, p) {
      return b(p);
    }),
    (ke.useFormState = function (b, p, A) {
      return E.H.useFormState(b, p, A);
    }),
    (ke.useFormStatus = function () {
      return E.H.useHostTransitionStatus();
    }),
    (ke.version = "19.2.0"),
    ke
  );
}
var lm;
function i0() {
  if (lm) return Uc.exports;
  lm = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (f) {
        console.error(f);
      }
  }
  return c(), (Uc.exports = n0()), Uc.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nm;
function s0() {
  if (nm) return Un;
  nm = 1;
  var c = l0(),
    f = Xc(),
    d = i0();
  function o(e) {
    var a = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      a += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++)
        a += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      a +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function m(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function g(e) {
    var a = e,
      t = e;
    if (e.alternate) for (; a.return; ) a = a.return;
    else {
      e = a;
      do (a = e), (a.flags & 4098) !== 0 && (t = a.return), (e = a.return);
      while (e);
    }
    return a.tag === 3 ? t : null;
  }
  function E(e) {
    if (e.tag === 13) {
      var a = e.memoizedState;
      if (
        (a === null && ((e = e.alternate), e !== null && (a = e.memoizedState)),
        a !== null)
      )
        return a.dehydrated;
    }
    return null;
  }
  function D(e) {
    if (e.tag === 31) {
      var a = e.memoizedState;
      if (
        (a === null && ((e = e.alternate), e !== null && (a = e.memoizedState)),
        a !== null)
      )
        return a.dehydrated;
    }
    return null;
  }
  function b(e) {
    if (g(e) !== e) throw Error(o(188));
  }
  function p(e) {
    var a = e.alternate;
    if (!a) {
      if (((a = g(e)), a === null)) throw Error(o(188));
      return a !== e ? null : e;
    }
    for (var t = e, l = a; ; ) {
      var n = t.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (((l = n.return), l !== null)) {
          t = l;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === t) return b(n), e;
          if (i === l) return b(n), a;
          i = i.sibling;
        }
        throw Error(o(188));
      }
      if (t.return !== l.return) (t = n), (l = i);
      else {
        for (var s = !1, r = n.child; r; ) {
          if (r === t) {
            (s = !0), (t = n), (l = i);
            break;
          }
          if (r === l) {
            (s = !0), (l = n), (t = i);
            break;
          }
          r = r.sibling;
        }
        if (!s) {
          for (r = i.child; r; ) {
            if (r === t) {
              (s = !0), (t = i), (l = n);
              break;
            }
            if (r === l) {
              (s = !0), (l = i), (t = n);
              break;
            }
            r = r.sibling;
          }
          if (!s) throw Error(o(189));
        }
      }
      if (t.alternate !== l) throw Error(o(190));
    }
    if (t.tag !== 3) throw Error(o(188));
    return t.stateNode.current === t ? e : a;
  }
  function A(e) {
    var a = e.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((a = A(e)), a !== null)) return a;
      e = e.sibling;
    }
    return null;
  }
  var _ = Object.assign,
    L = Symbol.for("react.element"),
    Z = Symbol.for("react.transitional.element"),
    K = Symbol.for("react.portal"),
    k = Symbol.for("react.fragment"),
    w = Symbol.for("react.strict_mode"),
    X = Symbol.for("react.profiler"),
    Q = Symbol.for("react.consumer"),
    F = Symbol.for("react.context"),
    Ne = Symbol.for("react.forward_ref"),
    Te = Symbol.for("react.suspense"),
    Le = Symbol.for("react.suspense_list"),
    ee = Symbol.for("react.memo"),
    Be = Symbol.for("react.lazy"),
    Ae = Symbol.for("react.activity"),
    ua = Symbol.for("react.memo_cache_sentinel"),
    ca = Symbol.iterator;
  function Pe(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (ca && e[ca]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Dt = Symbol.for("react.client.reference");
  function Ga(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Dt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case k:
        return "Fragment";
      case X:
        return "Profiler";
      case w:
        return "StrictMode";
      case Te:
        return "Suspense";
      case Le:
        return "SuspenseList";
      case Ae:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case K:
          return "Portal";
        case F:
          return e.displayName || "Context";
        case Q:
          return (e._context.displayName || "Context") + ".Consumer";
        case Ne:
          var a = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = a.displayName || a.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ee:
          return (
            (a = e.displayName || null), a !== null ? a : Ga(e.type) || "Memo"
          );
        case Be:
          (a = e._payload), (e = e._init);
          try {
            return Ga(e(a));
          } catch {}
      }
    return null;
  }
  var Ma = Array.isArray,
    C = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    U = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    $ = { pending: !1, data: null, method: null, action: null },
    he = [],
    ge = -1;
  function v(e) {
    return { current: e };
  }
  function q(e) {
    0 > ge || ((e.current = he[ge]), (he[ge] = null), ge--);
  }
  function H(e, a) {
    ge++, (he[ge] = e.current), (e.current = a);
  }
  var Y = v(null),
    I = v(null),
    te = v(null),
    fe = v(null);
  function We(e, a) {
    switch ((H(te, a), H(I, e), H(Y, null), a.nodeType)) {
      case 9:
      case 11:
        e = (e = a.documentElement) && (e = e.namespaceURI) ? xd(e) : 0;
        break;
      default:
        if (((e = a.tagName), (a = a.namespaceURI)))
          (a = xd(a)), (e = bd(a, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    q(Y), H(Y, e);
  }
  function Oe() {
    q(Y), q(I), q(te);
  }
  function Gl(e) {
    e.memoizedState !== null && H(fe, e);
    var a = Y.current,
      t = bd(a, e.type);
    a !== t && (H(I, e), H(Y, t));
  }
  function Qn(e) {
    I.current === e && (q(Y), q(I)),
      fe.current === e && (q(fe), (On._currentValue = $));
  }
  var ds, Jc;
  function qt(e) {
    if (ds === void 0)
      try {
        throw Error();
      } catch (t) {
        var a = t.stack.trim().match(/\n( *(at )?)/);
        (ds = (a && a[1]) || ""),
          (Jc =
            -1 <
            t.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < t.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      ds +
      e +
      Jc
    );
  }
  var ms = !1;
  function hs(e, a) {
    if (!e || ms) return "";
    ms = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (a) {
              var R = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(R.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(R, []);
                } catch (z) {
                  var N = z;
                }
                Reflect.construct(e, [], R);
              } else {
                try {
                  R.call();
                } catch (z) {
                  N = z;
                }
                e.call(R.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                N = z;
              }
              (R = e()) &&
                typeof R.catch == "function" &&
                R.catch(function () {});
            }
          } catch (z) {
            if (z && N && typeof z.stack == "string") return [z.stack, N.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      n &&
        n.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var i = l.DetermineComponentFrameRoot(),
        s = i[0],
        r = i[1];
      if (s && r) {
        var h = s.split(`
`),
          j = r.split(`
`);
        for (
          n = l = 0;
          l < h.length && !h[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; n < j.length && !j[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (l === h.length || n === j.length)
          for (
            l = h.length - 1, n = j.length - 1;
            1 <= l && 0 <= n && h[l] !== j[n];

          )
            n--;
        for (; 1 <= l && 0 <= n; l--, n--)
          if (h[l] !== j[n]) {
            if (l !== 1 || n !== 1)
              do
                if ((l--, n--, 0 > n || h[l] !== j[n])) {
                  var T =
                    `
` + h[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      T.includes("<anonymous>") &&
                      (T = T.replace("<anonymous>", e.displayName)),
                    T
                  );
                }
              while (1 <= l && 0 <= n);
            break;
          }
      }
    } finally {
      (ms = !1), (Error.prepareStackTrace = t);
    }
    return (t = e ? e.displayName || e.name : "") ? qt(t) : "";
  }
  function Om(e, a) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return qt(e.type);
      case 16:
        return qt("Lazy");
      case 13:
        return e.child !== a && a !== null
          ? qt("Suspense Fallback")
          : qt("Suspense");
      case 19:
        return qt("SuspenseList");
      case 0:
      case 15:
        return hs(e.type, !1);
      case 11:
        return hs(e.type.render, !1);
      case 1:
        return hs(e.type, !0);
      case 31:
        return qt("Activity");
      default:
        return "";
    }
  }
  function kc(e) {
    try {
      var a = "",
        t = null;
      do (a += Om(e, t)), (t = e), (e = e.return);
      while (e);
      return a;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  var ps = Object.prototype.hasOwnProperty,
    ys = c.unstable_scheduleCallback,
    vs = c.unstable_cancelCallback,
    _m = c.unstable_shouldYield,
    Rm = c.unstable_requestPaint,
    oa = c.unstable_now,
    Dm = c.unstable_getCurrentPriorityLevel,
    $c = c.unstable_ImmediatePriority,
    Wc = c.unstable_UserBlockingPriority,
    wn = c.unstable_NormalPriority,
    qm = c.unstable_LowPriority,
    Fc = c.unstable_IdlePriority,
    Um = c.log,
    Hm = c.unstable_setDisableYieldValue,
    Xl = null,
    ra = null;
  function ct(e) {
    if (
      (typeof Um == "function" && Hm(e),
      ra && typeof ra.setStrictMode == "function")
    )
      try {
        ra.setStrictMode(Xl, e);
      } catch {}
  }
  var fa = Math.clz32 ? Math.clz32 : Ym,
    Lm = Math.log,
    Bm = Math.LN2;
  function Ym(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Lm(e) / Bm) | 0)) | 0;
  }
  var Zn = 256,
    Vn = 262144,
    Kn = 4194304;
  function Ut(e) {
    var a = e & 42;
    if (a !== 0) return a;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Jn(e, a, t) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var n = 0,
      i = e.suspendedLanes,
      s = e.pingedLanes;
    e = e.warmLanes;
    var r = l & 134217727;
    return (
      r !== 0
        ? ((l = r & ~i),
          l !== 0
            ? (n = Ut(l))
            : ((s &= r),
              s !== 0
                ? (n = Ut(s))
                : t || ((t = r & ~e), t !== 0 && (n = Ut(t)))))
        : ((r = l & ~i),
          r !== 0
            ? (n = Ut(r))
            : s !== 0
            ? (n = Ut(s))
            : t || ((t = l & ~e), t !== 0 && (n = Ut(t)))),
      n === 0
        ? 0
        : a !== 0 &&
          a !== n &&
          (a & i) === 0 &&
          ((i = n & -n),
          (t = a & -a),
          i >= t || (i === 32 && (t & 4194048) !== 0))
        ? a
        : n
    );
  }
  function Ql(e, a) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & a) === 0;
  }
  function Gm(e, a) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return a + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ic() {
    var e = Kn;
    return (Kn <<= 1), (Kn & 62914560) === 0 && (Kn = 4194304), e;
  }
  function gs(e) {
    for (var a = [], t = 0; 31 > t; t++) a.push(e);
    return a;
  }
  function wl(e, a) {
    (e.pendingLanes |= a),
      a !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Xm(e, a, t, l, n, i) {
    var s = e.pendingLanes;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= t),
      (e.entangledLanes &= t),
      (e.errorRecoveryDisabledLanes &= t),
      (e.shellSuspendCounter = 0);
    var r = e.entanglements,
      h = e.expirationTimes,
      j = e.hiddenUpdates;
    for (t = s & ~t; 0 < t; ) {
      var T = 31 - fa(t),
        R = 1 << T;
      (r[T] = 0), (h[T] = -1);
      var N = j[T];
      if (N !== null)
        for (j[T] = null, T = 0; T < N.length; T++) {
          var z = N[T];
          z !== null && (z.lane &= -536870913);
        }
      t &= ~R;
    }
    l !== 0 && Pc(e, l, 0),
      i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(s & ~a));
  }
  function Pc(e, a, t) {
    (e.pendingLanes |= a), (e.suspendedLanes &= ~a);
    var l = 31 - fa(a);
    (e.entangledLanes |= a),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (t & 261930));
  }
  function eo(e, a) {
    var t = (e.entangledLanes |= a);
    for (e = e.entanglements; t; ) {
      var l = 31 - fa(t),
        n = 1 << l;
      (n & a) | (e[l] & a) && (e[l] |= a), (t &= ~n);
    }
  }
  function ao(e, a) {
    var t = a & -a;
    return (
      (t = (t & 42) !== 0 ? 1 : xs(t)),
      (t & (e.suspendedLanes | a)) !== 0 ? 0 : t
    );
  }
  function xs(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function bs(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function to() {
    var e = U.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : wd(e.type));
  }
  function lo(e, a) {
    var t = U.p;
    try {
      return (U.p = e), a();
    } finally {
      U.p = t;
    }
  }
  var ot = Math.random().toString(36).slice(2),
    we = "__reactFiber$" + ot,
    ea = "__reactProps$" + ot,
    el = "__reactContainer$" + ot,
    Ss = "__reactEvents$" + ot,
    Qm = "__reactListeners$" + ot,
    wm = "__reactHandles$" + ot,
    no = "__reactResources$" + ot,
    Zl = "__reactMarker$" + ot;
  function js(e) {
    delete e[we], delete e[ea], delete e[Ss], delete e[Qm], delete e[wm];
  }
  function al(e) {
    var a = e[we];
    if (a) return a;
    for (var t = e.parentNode; t; ) {
      if ((a = t[el] || t[we])) {
        if (
          ((t = a.alternate),
          a.child !== null || (t !== null && t.child !== null))
        )
          for (e = Ad(e); e !== null; ) {
            if ((t = e[we])) return t;
            e = Ad(e);
          }
        return a;
      }
      (e = t), (t = e.parentNode);
    }
    return null;
  }
  function tl(e) {
    if ((e = e[we] || e[el])) {
      var a = e.tag;
      if (
        a === 5 ||
        a === 6 ||
        a === 13 ||
        a === 31 ||
        a === 26 ||
        a === 27 ||
        a === 3
      )
        return e;
    }
    return null;
  }
  function Vl(e) {
    var a = e.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return e.stateNode;
    throw Error(o(33));
  }
  function ll(e) {
    var a = e[no];
    return (
      a ||
        (a = e[no] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      a
    );
  }
  function Ge(e) {
    e[Zl] = !0;
  }
  var io = new Set(),
    so = {};
  function Ht(e, a) {
    nl(e, a), nl(e + "Capture", a);
  }
  function nl(e, a) {
    for (so[e] = a, e = 0; e < a.length; e++) io.add(a[e]);
  }
  var Zm = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    uo = {},
    co = {};
  function Vm(e) {
    return ps.call(co, e)
      ? !0
      : ps.call(uo, e)
      ? !1
      : Zm.test(e)
      ? (co[e] = !0)
      : ((uo[e] = !0), !1);
  }
  function kn(e, a, t) {
    if (Vm(a))
      if (t === null) e.removeAttribute(a);
      else {
        switch (typeof t) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(a);
            return;
          case "boolean":
            var l = a.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(a);
              return;
            }
        }
        e.setAttribute(a, "" + t);
      }
  }
  function $n(e, a, t) {
    if (t === null) e.removeAttribute(a);
    else {
      switch (typeof t) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttribute(a, "" + t);
    }
  }
  function Xa(e, a, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttributeNS(a, t, "" + l);
    }
  }
  function xa(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function oo(e) {
    var a = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (a === "checkbox" || a === "radio")
    );
  }
  function Km(e, a, t) {
    var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, a);
    if (
      !e.hasOwnProperty(a) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var n = l.get,
        i = l.set;
      return (
        Object.defineProperty(e, a, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (s) {
            (t = "" + s), i.call(this, s);
          },
        }),
        Object.defineProperty(e, a, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return t;
          },
          setValue: function (s) {
            t = "" + s;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[a];
          },
        }
      );
    }
  }
  function Ns(e) {
    if (!e._valueTracker) {
      var a = oo(e) ? "checked" : "value";
      e._valueTracker = Km(e, a, "" + e[a]);
    }
  }
  function ro(e) {
    if (!e) return !1;
    var a = e._valueTracker;
    if (!a) return !0;
    var t = a.getValue(),
      l = "";
    return (
      e && (l = oo(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== t ? (a.setValue(e), !0) : !1
    );
  }
  function Wn(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Jm = /[\n"\\]/g;
  function ba(e) {
    return e.replace(Jm, function (a) {
      return "\\" + a.charCodeAt(0).toString(16) + " ";
    });
  }
  function Es(e, a, t, l, n, i, s, r) {
    (e.name = ""),
      s != null &&
      typeof s != "function" &&
      typeof s != "symbol" &&
      typeof s != "boolean"
        ? (e.type = s)
        : e.removeAttribute("type"),
      a != null
        ? s === "number"
          ? ((a === 0 && e.value === "") || e.value != a) &&
            (e.value = "" + xa(a))
          : e.value !== "" + xa(a) && (e.value = "" + xa(a))
        : (s !== "submit" && s !== "reset") || e.removeAttribute("value"),
      a != null
        ? zs(e, s, xa(a))
        : t != null
        ? zs(e, s, xa(t))
        : l != null && e.removeAttribute("value"),
      n == null && i != null && (e.defaultChecked = !!i),
      n != null &&
        (e.checked = n && typeof n != "function" && typeof n != "symbol"),
      r != null &&
      typeof r != "function" &&
      typeof r != "symbol" &&
      typeof r != "boolean"
        ? (e.name = "" + xa(r))
        : e.removeAttribute("name");
  }
  function fo(e, a, t, l, n, i, s, r) {
    if (
      (i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (e.type = i),
      a != null || t != null)
    ) {
      if (!((i !== "submit" && i !== "reset") || a != null)) {
        Ns(e);
        return;
      }
      (t = t != null ? "" + xa(t) : ""),
        (a = a != null ? "" + xa(a) : t),
        r || a === e.value || (e.value = a),
        (e.defaultValue = a);
    }
    (l = l ?? n),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = r ? e.checked : !!l),
      (e.defaultChecked = !!l),
      s != null &&
        typeof s != "function" &&
        typeof s != "symbol" &&
        typeof s != "boolean" &&
        (e.name = s),
      Ns(e);
  }
  function zs(e, a, t) {
    (a === "number" && Wn(e.ownerDocument) === e) ||
      e.defaultValue === "" + t ||
      (e.defaultValue = "" + t);
  }
  function il(e, a, t, l) {
    if (((e = e.options), a)) {
      a = {};
      for (var n = 0; n < t.length; n++) a["$" + t[n]] = !0;
      for (t = 0; t < e.length; t++)
        (n = a.hasOwnProperty("$" + e[t].value)),
          e[t].selected !== n && (e[t].selected = n),
          n && l && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + xa(t), a = null, n = 0; n < e.length; n++) {
        if (e[n].value === t) {
          (e[n].selected = !0), l && (e[n].defaultSelected = !0);
          return;
        }
        a !== null || e[n].disabled || (a = e[n]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function mo(e, a, t) {
    if (
      a != null &&
      ((a = "" + xa(a)), a !== e.value && (e.value = a), t == null)
    ) {
      e.defaultValue !== a && (e.defaultValue = a);
      return;
    }
    e.defaultValue = t != null ? "" + xa(t) : "";
  }
  function ho(e, a, t, l) {
    if (a == null) {
      if (l != null) {
        if (t != null) throw Error(o(92));
        if (Ma(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        t = l;
      }
      t == null && (t = ""), (a = t);
    }
    (t = xa(a)),
      (e.defaultValue = t),
      (l = e.textContent),
      l === t && l !== "" && l !== null && (e.value = l),
      Ns(e);
  }
  function sl(e, a) {
    if (a) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = a;
        return;
      }
    }
    e.textContent = a;
  }
  var km = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function po(e, a, t) {
    var l = a.indexOf("--") === 0;
    t == null || typeof t == "boolean" || t === ""
      ? l
        ? e.setProperty(a, "")
        : a === "float"
        ? (e.cssFloat = "")
        : (e[a] = "")
      : l
      ? e.setProperty(a, t)
      : typeof t != "number" || t === 0 || km.has(a)
      ? a === "float"
        ? (e.cssFloat = t)
        : (e[a] = ("" + t).trim())
      : (e[a] = t + "px");
  }
  function yo(e, a, t) {
    if (a != null && typeof a != "object") throw Error(o(62));
    if (((e = e.style), t != null)) {
      for (var l in t)
        !t.hasOwnProperty(l) ||
          (a != null && a.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
            ? (e.cssFloat = "")
            : (e[l] = ""));
      for (var n in a)
        (l = a[n]), a.hasOwnProperty(n) && t[n] !== l && po(e, n, l);
    } else for (var i in a) a.hasOwnProperty(i) && po(e, i, a[i]);
  }
  function Ts(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var $m = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Wm =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Fn(e) {
    return Wm.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Qa() {}
  var As = null;
  function Cs(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ul = null,
    cl = null;
  function vo(e) {
    var a = tl(e);
    if (a && (e = a.stateNode)) {
      var t = e[ea] || null;
      e: switch (((e = a.stateNode), a.type)) {
        case "input":
          if (
            (Es(
              e,
              t.value,
              t.defaultValue,
              t.defaultValue,
              t.checked,
              t.defaultChecked,
              t.type,
              t.name
            ),
            (a = t.name),
            t.type === "radio" && a != null)
          ) {
            for (t = e; t.parentNode; ) t = t.parentNode;
            for (
              t = t.querySelectorAll(
                'input[name="' + ba("" + a) + '"][type="radio"]'
              ),
                a = 0;
              a < t.length;
              a++
            ) {
              var l = t[a];
              if (l !== e && l.form === e.form) {
                var n = l[ea] || null;
                if (!n) throw Error(o(90));
                Es(
                  l,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (a = 0; a < t.length; a++)
              (l = t[a]), l.form === e.form && ro(l);
          }
          break e;
        case "textarea":
          mo(e, t.value, t.defaultValue);
          break e;
        case "select":
          (a = t.value), a != null && il(e, !!t.multiple, a, !1);
      }
    }
  }
  var Ms = !1;
  function go(e, a, t) {
    if (Ms) return e(a, t);
    Ms = !0;
    try {
      var l = e(a);
      return l;
    } finally {
      if (
        ((Ms = !1),
        (ul !== null || cl !== null) &&
          (Bi(), ul && ((a = ul), (e = cl), (cl = ul = null), vo(a), e)))
      )
        for (a = 0; a < e.length; a++) vo(e[a]);
    }
  }
  function Kl(e, a) {
    var t = e.stateNode;
    if (t === null) return null;
    var l = t[ea] || null;
    if (l === null) return null;
    t = l[a];
    e: switch (a) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (t && typeof t != "function") throw Error(o(231, a, typeof t));
    return t;
  }
  var wa = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Os = !1;
  if (wa)
    try {
      var Jl = {};
      Object.defineProperty(Jl, "passive", {
        get: function () {
          Os = !0;
        },
      }),
        window.addEventListener("test", Jl, Jl),
        window.removeEventListener("test", Jl, Jl);
    } catch {
      Os = !1;
    }
  var rt = null,
    _s = null,
    In = null;
  function xo() {
    if (In) return In;
    var e,
      a = _s,
      t = a.length,
      l,
      n = "value" in rt ? rt.value : rt.textContent,
      i = n.length;
    for (e = 0; e < t && a[e] === n[e]; e++);
    var s = t - e;
    for (l = 1; l <= s && a[t - l] === n[i - l]; l++);
    return (In = n.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Pn(e) {
    var a = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && a === 13 && (e = 13))
        : (e = a),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ei() {
    return !0;
  }
  function bo() {
    return !1;
  }
  function aa(e) {
    function a(t, l, n, i, s) {
      (this._reactName = t),
        (this._targetInst = n),
        (this.type = l),
        (this.nativeEvent = i),
        (this.target = s),
        (this.currentTarget = null);
      for (var r in e)
        e.hasOwnProperty(r) && ((t = e[r]), (this[r] = t ? t(i) : i[r]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? ei
          : bo),
        (this.isPropagationStopped = bo),
        this
      );
    }
    return (
      _(a.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var t = this.nativeEvent;
          t &&
            (t.preventDefault
              ? t.preventDefault()
              : typeof t.returnValue != "unknown" && (t.returnValue = !1),
            (this.isDefaultPrevented = ei));
        },
        stopPropagation: function () {
          var t = this.nativeEvent;
          t &&
            (t.stopPropagation
              ? t.stopPropagation()
              : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
            (this.isPropagationStopped = ei));
        },
        persist: function () {},
        isPersistent: ei,
      }),
      a
    );
  }
  var Lt = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ai = aa(Lt),
    kl = _({}, Lt, { view: 0, detail: 0 }),
    Fm = aa(kl),
    Rs,
    Ds,
    $l,
    ti = _({}, kl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Us,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== $l &&
              ($l && e.type === "mousemove"
                ? ((Rs = e.screenX - $l.screenX), (Ds = e.screenY - $l.screenY))
                : (Ds = Rs = 0),
              ($l = e)),
            Rs);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ds;
      },
    }),
    So = aa(ti),
    Im = _({}, ti, { dataTransfer: 0 }),
    Pm = aa(Im),
    eh = _({}, kl, { relatedTarget: 0 }),
    qs = aa(eh),
    ah = _({}, Lt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    th = aa(ah),
    lh = _({}, Lt, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    nh = aa(lh),
    ih = _({}, Lt, { data: 0 }),
    jo = aa(ih),
    sh = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    uh = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    ch = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function oh(e) {
    var a = this.nativeEvent;
    return a.getModifierState
      ? a.getModifierState(e)
      : (e = ch[e])
      ? !!a[e]
      : !1;
  }
  function Us() {
    return oh;
  }
  var rh = _({}, kl, {
      key: function (e) {
        if (e.key) {
          var a = sh[e.key] || e.key;
          if (a !== "Unidentified") return a;
        }
        return e.type === "keypress"
          ? ((e = Pn(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? uh[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Us,
      charCode: function (e) {
        return e.type === "keypress" ? Pn(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Pn(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    fh = aa(rh),
    dh = _({}, ti, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    No = aa(dh),
    mh = _({}, kl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Us,
    }),
    hh = aa(mh),
    ph = _({}, Lt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    yh = aa(ph),
    vh = _({}, ti, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    gh = aa(vh),
    xh = _({}, Lt, { newState: 0, oldState: 0 }),
    bh = aa(xh),
    Sh = [9, 13, 27, 32],
    Hs = wa && "CompositionEvent" in window,
    Wl = null;
  wa && "documentMode" in document && (Wl = document.documentMode);
  var jh = wa && "TextEvent" in window && !Wl,
    Eo = wa && (!Hs || (Wl && 8 < Wl && 11 >= Wl)),
    zo = " ",
    To = !1;
  function Ao(e, a) {
    switch (e) {
      case "keyup":
        return Sh.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Co(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var ol = !1;
  function Nh(e, a) {
    switch (e) {
      case "compositionend":
        return Co(a);
      case "keypress":
        return a.which !== 32 ? null : ((To = !0), zo);
      case "textInput":
        return (e = a.data), e === zo && To ? null : e;
      default:
        return null;
    }
  }
  function Eh(e, a) {
    if (ol)
      return e === "compositionend" || (!Hs && Ao(e, a))
        ? ((e = xo()), (In = _s = rt = null), (ol = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || (a.ctrlKey && a.altKey)) {
          if (a.char && 1 < a.char.length) return a.char;
          if (a.which) return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return Eo && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var zh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Mo(e) {
    var a = e && e.nodeName && e.nodeName.toLowerCase();
    return a === "input" ? !!zh[e.type] : a === "textarea";
  }
  function Oo(e, a, t, l) {
    ul ? (cl ? cl.push(l) : (cl = [l])) : (ul = l),
      (a = Vi(a, "onChange")),
      0 < a.length &&
        ((t = new ai("onChange", "change", null, t, l)),
        e.push({ event: t, listeners: a }));
  }
  var Fl = null,
    Il = null;
  function Th(e) {
    md(e, 0);
  }
  function li(e) {
    var a = Vl(e);
    if (ro(a)) return e;
  }
  function _o(e, a) {
    if (e === "change") return a;
  }
  var Ro = !1;
  if (wa) {
    var Ls;
    if (wa) {
      var Bs = "oninput" in document;
      if (!Bs) {
        var Do = document.createElement("div");
        Do.setAttribute("oninput", "return;"),
          (Bs = typeof Do.oninput == "function");
      }
      Ls = Bs;
    } else Ls = !1;
    Ro = Ls && (!document.documentMode || 9 < document.documentMode);
  }
  function qo() {
    Fl && (Fl.detachEvent("onpropertychange", Uo), (Il = Fl = null));
  }
  function Uo(e) {
    if (e.propertyName === "value" && li(Il)) {
      var a = [];
      Oo(a, Il, e, Cs(e)), go(Th, a);
    }
  }
  function Ah(e, a, t) {
    e === "focusin"
      ? (qo(), (Fl = a), (Il = t), Fl.attachEvent("onpropertychange", Uo))
      : e === "focusout" && qo();
  }
  function Ch(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return li(Il);
  }
  function Mh(e, a) {
    if (e === "click") return li(a);
  }
  function Oh(e, a) {
    if (e === "input" || e === "change") return li(a);
  }
  function _h(e, a) {
    return (e === a && (e !== 0 || 1 / e === 1 / a)) || (e !== e && a !== a);
  }
  var da = typeof Object.is == "function" ? Object.is : _h;
  function Pl(e, a) {
    if (da(e, a)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof a != "object" ||
      a === null
    )
      return !1;
    var t = Object.keys(e),
      l = Object.keys(a);
    if (t.length !== l.length) return !1;
    for (l = 0; l < t.length; l++) {
      var n = t[l];
      if (!ps.call(a, n) || !da(e[n], a[n])) return !1;
    }
    return !0;
  }
  function Ho(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Lo(e, a) {
    var t = Ho(e);
    e = 0;
    for (var l; t; ) {
      if (t.nodeType === 3) {
        if (((l = e + t.textContent.length), e <= a && l >= a))
          return { node: t, offset: a - e };
        e = l;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = Ho(t);
    }
  }
  function Bo(e, a) {
    return e && a
      ? e === a
        ? !0
        : e && e.nodeType === 3
        ? !1
        : a && a.nodeType === 3
        ? Bo(e, a.parentNode)
        : "contains" in e
        ? e.contains(a)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(a) & 16)
        : !1
      : !1;
  }
  function Yo(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var a = Wn(e.document); a instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof a.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) e = a.contentWindow;
      else break;
      a = Wn(e.document);
    }
    return a;
  }
  function Ys(e) {
    var a = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      a &&
      ((a === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        a === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var Rh = wa && "documentMode" in document && 11 >= document.documentMode,
    rl = null,
    Gs = null,
    en = null,
    Xs = !1;
  function Go(e, a, t) {
    var l =
      t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    Xs ||
      rl == null ||
      rl !== Wn(l) ||
      ((l = rl),
      "selectionStart" in l && Ys(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (en && Pl(en, l)) ||
        ((en = l),
        (l = Vi(Gs, "onSelect")),
        0 < l.length &&
          ((a = new ai("onSelect", "select", null, a, t)),
          e.push({ event: a, listeners: l }),
          (a.target = rl))));
  }
  function Bt(e, a) {
    var t = {};
    return (
      (t[e.toLowerCase()] = a.toLowerCase()),
      (t["Webkit" + e] = "webkit" + a),
      (t["Moz" + e] = "moz" + a),
      t
    );
  }
  var fl = {
      animationend: Bt("Animation", "AnimationEnd"),
      animationiteration: Bt("Animation", "AnimationIteration"),
      animationstart: Bt("Animation", "AnimationStart"),
      transitionrun: Bt("Transition", "TransitionRun"),
      transitionstart: Bt("Transition", "TransitionStart"),
      transitioncancel: Bt("Transition", "TransitionCancel"),
      transitionend: Bt("Transition", "TransitionEnd"),
    },
    Qs = {},
    Xo = {};
  wa &&
    ((Xo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete fl.animationend.animation,
      delete fl.animationiteration.animation,
      delete fl.animationstart.animation),
    "TransitionEvent" in window || delete fl.transitionend.transition);
  function Yt(e) {
    if (Qs[e]) return Qs[e];
    if (!fl[e]) return e;
    var a = fl[e],
      t;
    for (t in a) if (a.hasOwnProperty(t) && t in Xo) return (Qs[e] = a[t]);
    return e;
  }
  var Qo = Yt("animationend"),
    wo = Yt("animationiteration"),
    Zo = Yt("animationstart"),
    Dh = Yt("transitionrun"),
    qh = Yt("transitionstart"),
    Uh = Yt("transitioncancel"),
    Vo = Yt("transitionend"),
    Ko = new Map(),
    ws =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  ws.push("scrollEnd");
  function Oa(e, a) {
    Ko.set(e, a), Ht(a, [e]);
  }
  var ni =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var a = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(a)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    Sa = [],
    dl = 0,
    Zs = 0;
  function ii() {
    for (var e = dl, a = (Zs = dl = 0); a < e; ) {
      var t = Sa[a];
      Sa[a++] = null;
      var l = Sa[a];
      Sa[a++] = null;
      var n = Sa[a];
      Sa[a++] = null;
      var i = Sa[a];
      if (((Sa[a++] = null), l !== null && n !== null)) {
        var s = l.pending;
        s === null ? (n.next = n) : ((n.next = s.next), (s.next = n)),
          (l.pending = n);
      }
      i !== 0 && Jo(t, n, i);
    }
  }
  function si(e, a, t, l) {
    (Sa[dl++] = e),
      (Sa[dl++] = a),
      (Sa[dl++] = t),
      (Sa[dl++] = l),
      (Zs |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l);
  }
  function Vs(e, a, t, l) {
    return si(e, a, t, l), ui(e);
  }
  function Gt(e, a) {
    return si(e, null, null, a), ui(e);
  }
  function Jo(e, a, t) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t);
    for (var n = !1, i = e.return; i !== null; )
      (i.childLanes |= t),
        (l = i.alternate),
        l !== null && (l.childLanes |= t),
        i.tag === 22 &&
          ((e = i.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = i),
        (i = i.return);
    return e.tag === 3
      ? ((i = e.stateNode),
        n &&
          a !== null &&
          ((n = 31 - fa(t)),
          (e = i.hiddenUpdates),
          (l = e[n]),
          l === null ? (e[n] = [a]) : l.push(a),
          (a.lane = t | 536870912)),
        i)
      : null;
  }
  function ui(e) {
    if (50 < Nn) throw ((Nn = 0), (ec = null), Error(o(185)));
    for (var a = e.return; a !== null; ) (e = a), (a = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var ml = {};
  function Hh(e, a, t, l) {
    (this.tag = e),
      (this.key = t),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = a),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ma(e, a, t, l) {
    return new Hh(e, a, t, l);
  }
  function Ks(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Za(e, a) {
    var t = e.alternate;
    return (
      t === null
        ? ((t = ma(e.tag, a, e.key, e.mode)),
          (t.elementType = e.elementType),
          (t.type = e.type),
          (t.stateNode = e.stateNode),
          (t.alternate = e),
          (e.alternate = t))
        : ((t.pendingProps = a),
          (t.type = e.type),
          (t.flags = 0),
          (t.subtreeFlags = 0),
          (t.deletions = null)),
      (t.flags = e.flags & 65011712),
      (t.childLanes = e.childLanes),
      (t.lanes = e.lanes),
      (t.child = e.child),
      (t.memoizedProps = e.memoizedProps),
      (t.memoizedState = e.memoizedState),
      (t.updateQueue = e.updateQueue),
      (a = e.dependencies),
      (t.dependencies =
        a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }),
      (t.sibling = e.sibling),
      (t.index = e.index),
      (t.ref = e.ref),
      (t.refCleanup = e.refCleanup),
      t
    );
  }
  function ko(e, a) {
    e.flags &= 65011714;
    var t = e.alternate;
    return (
      t === null
        ? ((e.childLanes = 0),
          (e.lanes = a),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = t.childLanes),
          (e.lanes = t.lanes),
          (e.child = t.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = t.memoizedProps),
          (e.memoizedState = t.memoizedState),
          (e.updateQueue = t.updateQueue),
          (e.type = t.type),
          (a = t.dependencies),
          (e.dependencies =
            a === null
              ? null
              : { lanes: a.lanes, firstContext: a.firstContext })),
      e
    );
  }
  function ci(e, a, t, l, n, i) {
    var s = 0;
    if (((l = e), typeof e == "function")) Ks(e) && (s = 1);
    else if (typeof e == "string")
      s = Xp(e, t, Y.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case Ae:
          return (e = ma(31, t, a, n)), (e.elementType = Ae), (e.lanes = i), e;
        case k:
          return Xt(t.children, n, i, a);
        case w:
          (s = 8), (n |= 24);
          break;
        case X:
          return (
            (e = ma(12, t, a, n | 2)), (e.elementType = X), (e.lanes = i), e
          );
        case Te:
          return (e = ma(13, t, a, n)), (e.elementType = Te), (e.lanes = i), e;
        case Le:
          return (e = ma(19, t, a, n)), (e.elementType = Le), (e.lanes = i), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case F:
                s = 10;
                break e;
              case Q:
                s = 9;
                break e;
              case Ne:
                s = 11;
                break e;
              case ee:
                s = 14;
                break e;
              case Be:
                (s = 16), (l = null);
                break e;
            }
          (s = 29),
            (t = Error(o(130, e === null ? "null" : typeof e, ""))),
            (l = null);
      }
    return (
      (a = ma(s, t, a, n)), (a.elementType = e), (a.type = l), (a.lanes = i), a
    );
  }
  function Xt(e, a, t, l) {
    return (e = ma(7, e, l, a)), (e.lanes = t), e;
  }
  function Js(e, a, t) {
    return (e = ma(6, e, null, a)), (e.lanes = t), e;
  }
  function $o(e) {
    var a = ma(18, null, null, 0);
    return (a.stateNode = e), a;
  }
  function ks(e, a, t) {
    return (
      (a = ma(4, e.children !== null ? e.children : [], e.key, a)),
      (a.lanes = t),
      (a.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      a
    );
  }
  var Wo = new WeakMap();
  function ja(e, a) {
    if (typeof e == "object" && e !== null) {
      var t = Wo.get(e);
      return t !== void 0
        ? t
        : ((a = { value: e, source: a, stack: kc(a) }), Wo.set(e, a), a);
    }
    return { value: e, source: a, stack: kc(a) };
  }
  var hl = [],
    pl = 0,
    oi = null,
    an = 0,
    Na = [],
    Ea = 0,
    ft = null,
    Da = 1,
    qa = "";
  function Va(e, a) {
    (hl[pl++] = an), (hl[pl++] = oi), (oi = e), (an = a);
  }
  function Fo(e, a, t) {
    (Na[Ea++] = Da), (Na[Ea++] = qa), (Na[Ea++] = ft), (ft = e);
    var l = Da;
    e = qa;
    var n = 32 - fa(l) - 1;
    (l &= ~(1 << n)), (t += 1);
    var i = 32 - fa(a) + n;
    if (30 < i) {
      var s = n - (n % 5);
      (i = (l & ((1 << s) - 1)).toString(32)),
        (l >>= s),
        (n -= s),
        (Da = (1 << (32 - fa(a) + n)) | (t << n) | l),
        (qa = i + e);
    } else (Da = (1 << i) | (t << n) | l), (qa = e);
  }
  function $s(e) {
    e.return !== null && (Va(e, 1), Fo(e, 1, 0));
  }
  function Ws(e) {
    for (; e === oi; )
      (oi = hl[--pl]), (hl[pl] = null), (an = hl[--pl]), (hl[pl] = null);
    for (; e === ft; )
      (ft = Na[--Ea]),
        (Na[Ea] = null),
        (qa = Na[--Ea]),
        (Na[Ea] = null),
        (Da = Na[--Ea]),
        (Na[Ea] = null);
  }
  function Io(e, a) {
    (Na[Ea++] = Da),
      (Na[Ea++] = qa),
      (Na[Ea++] = ft),
      (Da = a.id),
      (qa = a.overflow),
      (ft = e);
  }
  var Ze = null,
    Se = null,
    ue = !1,
    dt = null,
    za = !1,
    Fs = Error(o(519));
  function mt(e) {
    var a = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (tn(ja(a, e)), Fs);
  }
  function Po(e) {
    var a = e.stateNode,
      t = e.type,
      l = e.memoizedProps;
    switch (((a[we] = e), (a[ea] = l), t)) {
      case "dialog":
        ne("cancel", a), ne("close", a);
        break;
      case "iframe":
      case "object":
      case "embed":
        ne("load", a);
        break;
      case "video":
      case "audio":
        for (t = 0; t < zn.length; t++) ne(zn[t], a);
        break;
      case "source":
        ne("error", a);
        break;
      case "img":
      case "image":
      case "link":
        ne("error", a), ne("load", a);
        break;
      case "details":
        ne("toggle", a);
        break;
      case "input":
        ne("invalid", a),
          fo(
            a,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          );
        break;
      case "select":
        ne("invalid", a);
        break;
      case "textarea":
        ne("invalid", a), ho(a, l.value, l.defaultValue, l.children);
    }
    (t = l.children),
      (typeof t != "string" && typeof t != "number" && typeof t != "bigint") ||
      a.textContent === "" + t ||
      l.suppressHydrationWarning === !0 ||
      vd(a.textContent, t)
        ? (l.popover != null && (ne("beforetoggle", a), ne("toggle", a)),
          l.onScroll != null && ne("scroll", a),
          l.onScrollEnd != null && ne("scrollend", a),
          l.onClick != null && (a.onclick = Qa),
          (a = !0))
        : (a = !1),
      a || mt(e, !0);
  }
  function er(e) {
    for (Ze = e.return; Ze; )
      switch (Ze.tag) {
        case 5:
        case 31:
        case 13:
          za = !1;
          return;
        case 27:
        case 3:
          za = !0;
          return;
        default:
          Ze = Ze.return;
      }
  }
  function yl(e) {
    if (e !== Ze) return !1;
    if (!ue) return er(e), (ue = !0), !1;
    var a = e.tag,
      t;
    if (
      ((t = a !== 3 && a !== 27) &&
        ((t = a === 5) &&
          ((t = e.type),
          (t =
            !(t !== "form" && t !== "button") || pc(e.type, e.memoizedProps))),
        (t = !t)),
      t && Se && mt(e),
      er(e),
      a === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      Se = Td(e);
    } else if (a === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      Se = Td(e);
    } else
      a === 27
        ? ((a = Se), At(e.type) ? ((e = bc), (bc = null), (Se = e)) : (Se = a))
        : (Se = Ze ? Aa(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Qt() {
    (Se = Ze = null), (ue = !1);
  }
  function Is() {
    var e = dt;
    return (
      e !== null &&
        (ia === null ? (ia = e) : ia.push.apply(ia, e), (dt = null)),
      e
    );
  }
  function tn(e) {
    dt === null ? (dt = [e]) : dt.push(e);
  }
  var Ps = v(null),
    wt = null,
    Ka = null;
  function ht(e, a, t) {
    H(Ps, a._currentValue), (a._currentValue = t);
  }
  function Ja(e) {
    (e._currentValue = Ps.current), q(Ps);
  }
  function eu(e, a, t) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & a) !== a
          ? ((e.childLanes |= a), l !== null && (l.childLanes |= a))
          : l !== null && (l.childLanes & a) !== a && (l.childLanes |= a),
        e === t)
      )
        break;
      e = e.return;
    }
  }
  function au(e, a, t, l) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var s = n.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var r = i;
          i = n;
          for (var h = 0; h < a.length; h++)
            if (r.context === a[h]) {
              (i.lanes |= t),
                (r = i.alternate),
                r !== null && (r.lanes |= t),
                eu(i.return, t, e),
                l || (s = null);
              break e;
            }
          i = r.next;
        }
      } else if (n.tag === 18) {
        if (((s = n.return), s === null)) throw Error(o(341));
        (s.lanes |= t),
          (i = s.alternate),
          i !== null && (i.lanes |= t),
          eu(s, t, e),
          (s = null);
      } else s = n.child;
      if (s !== null) s.return = n;
      else
        for (s = n; s !== null; ) {
          if (s === e) {
            s = null;
            break;
          }
          if (((n = s.sibling), n !== null)) {
            (n.return = s.return), (s = n);
            break;
          }
          s = s.return;
        }
      n = s;
    }
  }
  function vl(e, a, t, l) {
    e = null;
    for (var n = a, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var s = n.alternate;
        if (s === null) throw Error(o(387));
        if (((s = s.memoizedProps), s !== null)) {
          var r = n.type;
          da(n.pendingProps.value, s.value) ||
            (e !== null ? e.push(r) : (e = [r]));
        }
      } else if (n === fe.current) {
        if (((s = n.alternate), s === null)) throw Error(o(387));
        s.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(On) : (e = [On]));
      }
      n = n.return;
    }
    e !== null && au(a, e, t, l), (a.flags |= 262144);
  }
  function ri(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!da(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Zt(e) {
    (wt = e),
      (Ka = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function Ve(e) {
    return ar(wt, e);
  }
  function fi(e, a) {
    return wt === null && Zt(e), ar(e, a);
  }
  function ar(e, a) {
    var t = a._currentValue;
    if (((a = { context: a, memoizedValue: t, next: null }), Ka === null)) {
      if (e === null) throw Error(o(308));
      (Ka = a),
        (e.dependencies = { lanes: 0, firstContext: a }),
        (e.flags |= 524288);
    } else Ka = Ka.next = a;
    return t;
  }
  var Lh =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              a = (this.signal = {
                aborted: !1,
                addEventListener: function (t, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              (a.aborted = !0),
                e.forEach(function (t) {
                  return t();
                });
            };
          },
    Bh = c.unstable_scheduleCallback,
    Yh = c.unstable_NormalPriority,
    De = {
      $$typeof: F,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function tu() {
    return { controller: new Lh(), data: new Map(), refCount: 0 };
  }
  function ln(e) {
    e.refCount--,
      e.refCount === 0 &&
        Bh(Yh, function () {
          e.controller.abort();
        });
  }
  var nn = null,
    lu = 0,
    gl = 0,
    xl = null;
  function Gh(e, a) {
    if (nn === null) {
      var t = (nn = []);
      (lu = 0),
        (gl = sc()),
        (xl = {
          status: "pending",
          value: void 0,
          then: function (l) {
            t.push(l);
          },
        });
    }
    return lu++, a.then(tr, tr), a;
  }
  function tr() {
    if (--lu === 0 && nn !== null) {
      xl !== null && (xl.status = "fulfilled");
      var e = nn;
      (nn = null), (gl = 0), (xl = null);
      for (var a = 0; a < e.length; a++) (0, e[a])();
    }
  }
  function Xh(e, a) {
    var t = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          t.push(n);
        },
      };
    return (
      e.then(
        function () {
          (l.status = "fulfilled"), (l.value = a);
          for (var n = 0; n < t.length; n++) (0, t[n])(a);
        },
        function (n) {
          for (l.status = "rejected", l.reason = n, n = 0; n < t.length; n++)
            (0, t[n])(void 0);
        }
      ),
      l
    );
  }
  var lr = C.S;
  C.S = function (e, a) {
    (Xf = oa()),
      typeof a == "object" &&
        a !== null &&
        typeof a.then == "function" &&
        Gh(e, a),
      lr !== null && lr(e, a);
  };
  var Vt = v(null);
  function nu() {
    var e = Vt.current;
    return e !== null ? e : xe.pooledCache;
  }
  function di(e, a) {
    a === null ? H(Vt, Vt.current) : H(Vt, a.pool);
  }
  function nr() {
    var e = nu();
    return e === null ? null : { parent: De._currentValue, pool: e };
  }
  var bl = Error(o(460)),
    iu = Error(o(474)),
    mi = Error(o(542)),
    hi = { then: function () {} };
  function ir(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function sr(e, a, t) {
    switch (
      ((t = e[t]),
      t === void 0 ? e.push(a) : t !== a && (a.then(Qa, Qa), (a = t)),
      a.status)
    ) {
      case "fulfilled":
        return a.value;
      case "rejected":
        throw ((e = a.reason), cr(e), e);
      default:
        if (typeof a.status == "string") a.then(Qa, Qa);
        else {
          if (((e = xe), e !== null && 100 < e.shellSuspendCounter))
            throw Error(o(482));
          (e = a),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (a.status === "pending") {
                  var n = a;
                  (n.status = "fulfilled"), (n.value = l);
                }
              },
              function (l) {
                if (a.status === "pending") {
                  var n = a;
                  (n.status = "rejected"), (n.reason = l);
                }
              }
            );
        }
        switch (a.status) {
          case "fulfilled":
            return a.value;
          case "rejected":
            throw ((e = a.reason), cr(e), e);
        }
        throw ((Jt = a), bl);
    }
  }
  function Kt(e) {
    try {
      var a = e._init;
      return a(e._payload);
    } catch (t) {
      throw t !== null && typeof t == "object" && typeof t.then == "function"
        ? ((Jt = t), bl)
        : t;
    }
  }
  var Jt = null;
  function ur() {
    if (Jt === null) throw Error(o(459));
    var e = Jt;
    return (Jt = null), e;
  }
  function cr(e) {
    if (e === bl || e === mi) throw Error(o(483));
  }
  var Sl = null,
    sn = 0;
  function pi(e) {
    var a = sn;
    return (sn += 1), Sl === null && (Sl = []), sr(Sl, e, a);
  }
  function un(e, a) {
    (a = a.props.ref), (e.ref = a !== void 0 ? a : null);
  }
  function yi(e, a) {
    throw a.$$typeof === L
      ? Error(o(525))
      : ((e = Object.prototype.toString.call(a)),
        Error(
          o(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(a).join(", ") + "}"
              : e
          )
        ));
  }
  function or(e) {
    function a(x, y) {
      if (e) {
        var S = x.deletions;
        S === null ? ((x.deletions = [y]), (x.flags |= 16)) : S.push(y);
      }
    }
    function t(x, y) {
      if (!e) return null;
      for (; y !== null; ) a(x, y), (y = y.sibling);
      return null;
    }
    function l(x) {
      for (var y = new Map(); x !== null; )
        x.key !== null ? y.set(x.key, x) : y.set(x.index, x), (x = x.sibling);
      return y;
    }
    function n(x, y) {
      return (x = Za(x, y)), (x.index = 0), (x.sibling = null), x;
    }
    function i(x, y, S) {
      return (
        (x.index = S),
        e
          ? ((S = x.alternate),
            S !== null
              ? ((S = S.index), S < y ? ((x.flags |= 67108866), y) : S)
              : ((x.flags |= 67108866), y))
          : ((x.flags |= 1048576), y)
      );
    }
    function s(x) {
      return e && x.alternate === null && (x.flags |= 67108866), x;
    }
    function r(x, y, S, O) {
      return y === null || y.tag !== 6
        ? ((y = Js(S, x.mode, O)), (y.return = x), y)
        : ((y = n(y, S)), (y.return = x), y);
    }
    function h(x, y, S, O) {
      var V = S.type;
      return V === k
        ? T(x, y, S.props.children, O, S.key)
        : y !== null &&
          (y.elementType === V ||
            (typeof V == "object" &&
              V !== null &&
              V.$$typeof === Be &&
              Kt(V) === y.type))
        ? ((y = n(y, S.props)), un(y, S), (y.return = x), y)
        : ((y = ci(S.type, S.key, S.props, null, x.mode, O)),
          un(y, S),
          (y.return = x),
          y);
    }
    function j(x, y, S, O) {
      return y === null ||
        y.tag !== 4 ||
        y.stateNode.containerInfo !== S.containerInfo ||
        y.stateNode.implementation !== S.implementation
        ? ((y = ks(S, x.mode, O)), (y.return = x), y)
        : ((y = n(y, S.children || [])), (y.return = x), y);
    }
    function T(x, y, S, O, V) {
      return y === null || y.tag !== 7
        ? ((y = Xt(S, x.mode, O, V)), (y.return = x), y)
        : ((y = n(y, S)), (y.return = x), y);
    }
    function R(x, y, S) {
      if (
        (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
      )
        return (y = Js("" + y, x.mode, S)), (y.return = x), y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Z:
            return (
              (S = ci(y.type, y.key, y.props, null, x.mode, S)),
              un(S, y),
              (S.return = x),
              S
            );
          case K:
            return (y = ks(y, x.mode, S)), (y.return = x), y;
          case Be:
            return (y = Kt(y)), R(x, y, S);
        }
        if (Ma(y) || Pe(y))
          return (y = Xt(y, x.mode, S, null)), (y.return = x), y;
        if (typeof y.then == "function") return R(x, pi(y), S);
        if (y.$$typeof === F) return R(x, fi(x, y), S);
        yi(x, y);
      }
      return null;
    }
    function N(x, y, S, O) {
      var V = y !== null ? y.key : null;
      if (
        (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
      )
        return V !== null ? null : r(x, y, "" + S, O);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Z:
            return S.key === V ? h(x, y, S, O) : null;
          case K:
            return S.key === V ? j(x, y, S, O) : null;
          case Be:
            return (S = Kt(S)), N(x, y, S, O);
        }
        if (Ma(S) || Pe(S)) return V !== null ? null : T(x, y, S, O, null);
        if (typeof S.then == "function") return N(x, y, pi(S), O);
        if (S.$$typeof === F) return N(x, y, fi(x, S), O);
        yi(x, S);
      }
      return null;
    }
    function z(x, y, S, O, V) {
      if (
        (typeof O == "string" && O !== "") ||
        typeof O == "number" ||
        typeof O == "bigint"
      )
        return (x = x.get(S) || null), r(y, x, "" + O, V);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case Z:
            return (
              (x = x.get(O.key === null ? S : O.key) || null), h(y, x, O, V)
            );
          case K:
            return (
              (x = x.get(O.key === null ? S : O.key) || null), j(y, x, O, V)
            );
          case Be:
            return (O = Kt(O)), z(x, y, S, O, V);
        }
        if (Ma(O) || Pe(O)) return (x = x.get(S) || null), T(y, x, O, V, null);
        if (typeof O.then == "function") return z(x, y, S, pi(O), V);
        if (O.$$typeof === F) return z(x, y, S, fi(y, O), V);
        yi(y, O);
      }
      return null;
    }
    function B(x, y, S, O) {
      for (
        var V = null, ce = null, G = y, ae = (y = 0), se = null;
        G !== null && ae < S.length;
        ae++
      ) {
        G.index > ae ? ((se = G), (G = null)) : (se = G.sibling);
        var oe = N(x, G, S[ae], O);
        if (oe === null) {
          G === null && (G = se);
          break;
        }
        e && G && oe.alternate === null && a(x, G),
          (y = i(oe, y, ae)),
          ce === null ? (V = oe) : (ce.sibling = oe),
          (ce = oe),
          (G = se);
      }
      if (ae === S.length) return t(x, G), ue && Va(x, ae), V;
      if (G === null) {
        for (; ae < S.length; ae++)
          (G = R(x, S[ae], O)),
            G !== null &&
              ((y = i(G, y, ae)),
              ce === null ? (V = G) : (ce.sibling = G),
              (ce = G));
        return ue && Va(x, ae), V;
      }
      for (G = l(G); ae < S.length; ae++)
        (se = z(G, x, ae, S[ae], O)),
          se !== null &&
            (e &&
              se.alternate !== null &&
              G.delete(se.key === null ? ae : se.key),
            (y = i(se, y, ae)),
            ce === null ? (V = se) : (ce.sibling = se),
            (ce = se));
      return (
        e &&
          G.forEach(function (Rt) {
            return a(x, Rt);
          }),
        ue && Va(x, ae),
        V
      );
    }
    function J(x, y, S, O) {
      if (S == null) throw Error(o(151));
      for (
        var V = null, ce = null, G = y, ae = (y = 0), se = null, oe = S.next();
        G !== null && !oe.done;
        ae++, oe = S.next()
      ) {
        G.index > ae ? ((se = G), (G = null)) : (se = G.sibling);
        var Rt = N(x, G, oe.value, O);
        if (Rt === null) {
          G === null && (G = se);
          break;
        }
        e && G && Rt.alternate === null && a(x, G),
          (y = i(Rt, y, ae)),
          ce === null ? (V = Rt) : (ce.sibling = Rt),
          (ce = Rt),
          (G = se);
      }
      if (oe.done) return t(x, G), ue && Va(x, ae), V;
      if (G === null) {
        for (; !oe.done; ae++, oe = S.next())
          (oe = R(x, oe.value, O)),
            oe !== null &&
              ((y = i(oe, y, ae)),
              ce === null ? (V = oe) : (ce.sibling = oe),
              (ce = oe));
        return ue && Va(x, ae), V;
      }
      for (G = l(G); !oe.done; ae++, oe = S.next())
        (oe = z(G, x, ae, oe.value, O)),
          oe !== null &&
            (e &&
              oe.alternate !== null &&
              G.delete(oe.key === null ? ae : oe.key),
            (y = i(oe, y, ae)),
            ce === null ? (V = oe) : (ce.sibling = oe),
            (ce = oe));
      return (
        e &&
          G.forEach(function (Ip) {
            return a(x, Ip);
          }),
        ue && Va(x, ae),
        V
      );
    }
    function ve(x, y, S, O) {
      if (
        (typeof S == "object" &&
          S !== null &&
          S.type === k &&
          S.key === null &&
          (S = S.props.children),
        typeof S == "object" && S !== null)
      ) {
        switch (S.$$typeof) {
          case Z:
            e: {
              for (var V = S.key; y !== null; ) {
                if (y.key === V) {
                  if (((V = S.type), V === k)) {
                    if (y.tag === 7) {
                      t(x, y.sibling),
                        (O = n(y, S.props.children)),
                        (O.return = x),
                        (x = O);
                      break e;
                    }
                  } else if (
                    y.elementType === V ||
                    (typeof V == "object" &&
                      V !== null &&
                      V.$$typeof === Be &&
                      Kt(V) === y.type)
                  ) {
                    t(x, y.sibling),
                      (O = n(y, S.props)),
                      un(O, S),
                      (O.return = x),
                      (x = O);
                    break e;
                  }
                  t(x, y);
                  break;
                } else a(x, y);
                y = y.sibling;
              }
              S.type === k
                ? ((O = Xt(S.props.children, x.mode, O, S.key)),
                  (O.return = x),
                  (x = O))
                : ((O = ci(S.type, S.key, S.props, null, x.mode, O)),
                  un(O, S),
                  (O.return = x),
                  (x = O));
            }
            return s(x);
          case K:
            e: {
              for (V = S.key; y !== null; ) {
                if (y.key === V)
                  if (
                    y.tag === 4 &&
                    y.stateNode.containerInfo === S.containerInfo &&
                    y.stateNode.implementation === S.implementation
                  ) {
                    t(x, y.sibling),
                      (O = n(y, S.children || [])),
                      (O.return = x),
                      (x = O);
                    break e;
                  } else {
                    t(x, y);
                    break;
                  }
                else a(x, y);
                y = y.sibling;
              }
              (O = ks(S, x.mode, O)), (O.return = x), (x = O);
            }
            return s(x);
          case Be:
            return (S = Kt(S)), ve(x, y, S, O);
        }
        if (Ma(S)) return B(x, y, S, O);
        if (Pe(S)) {
          if (((V = Pe(S)), typeof V != "function")) throw Error(o(150));
          return (S = V.call(S)), J(x, y, S, O);
        }
        if (typeof S.then == "function") return ve(x, y, pi(S), O);
        if (S.$$typeof === F) return ve(x, y, fi(x, S), O);
        yi(x, S);
      }
      return (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
        ? ((S = "" + S),
          y !== null && y.tag === 6
            ? (t(x, y.sibling), (O = n(y, S)), (O.return = x), (x = O))
            : (t(x, y), (O = Js(S, x.mode, O)), (O.return = x), (x = O)),
          s(x))
        : t(x, y);
    }
    return function (x, y, S, O) {
      try {
        sn = 0;
        var V = ve(x, y, S, O);
        return (Sl = null), V;
      } catch (G) {
        if (G === bl || G === mi) throw G;
        var ce = ma(29, G, null, x.mode);
        return (ce.lanes = O), (ce.return = x), ce;
      } finally {
      }
    };
  }
  var kt = or(!0),
    rr = or(!1),
    pt = !1;
  function su(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function uu(e, a) {
    (e = e.updateQueue),
      a.updateQueue === e &&
        (a.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function yt(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function vt(e, a, t) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (re & 2) !== 0)) {
      var n = l.pending;
      return (
        n === null ? (a.next = a) : ((a.next = n.next), (n.next = a)),
        (l.pending = a),
        (a = ui(e)),
        Jo(e, null, t),
        a
      );
    }
    return si(e, l, a, t), ui(e);
  }
  function cn(e, a, t) {
    if (
      ((a = a.updateQueue), a !== null && ((a = a.shared), (t & 4194048) !== 0))
    ) {
      var l = a.lanes;
      (l &= e.pendingLanes), (t |= l), (a.lanes = t), eo(e, t);
    }
  }
  function cu(e, a) {
    var t = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), t === l)) {
      var n = null,
        i = null;
      if (((t = t.firstBaseUpdate), t !== null)) {
        do {
          var s = {
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: null,
            next: null,
          };
          i === null ? (n = i = s) : (i = i.next = s), (t = t.next);
        } while (t !== null);
        i === null ? (n = i = a) : (i = i.next = a);
      } else n = i = a;
      (t = {
        baseState: l.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = t);
      return;
    }
    (e = t.lastBaseUpdate),
      e === null ? (t.firstBaseUpdate = a) : (e.next = a),
      (t.lastBaseUpdate = a);
  }
  var ou = !1;
  function on() {
    if (ou) {
      var e = xl;
      if (e !== null) throw e;
    }
  }
  function rn(e, a, t, l) {
    ou = !1;
    var n = e.updateQueue;
    pt = !1;
    var i = n.firstBaseUpdate,
      s = n.lastBaseUpdate,
      r = n.shared.pending;
    if (r !== null) {
      n.shared.pending = null;
      var h = r,
        j = h.next;
      (h.next = null), s === null ? (i = j) : (s.next = j), (s = h);
      var T = e.alternate;
      T !== null &&
        ((T = T.updateQueue),
        (r = T.lastBaseUpdate),
        r !== s &&
          (r === null ? (T.firstBaseUpdate = j) : (r.next = j),
          (T.lastBaseUpdate = h)));
    }
    if (i !== null) {
      var R = n.baseState;
      (s = 0), (T = j = h = null), (r = i);
      do {
        var N = r.lane & -536870913,
          z = N !== r.lane;
        if (z ? (ie & N) === N : (l & N) === N) {
          N !== 0 && N === gl && (ou = !0),
            T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  tag: r.tag,
                  payload: r.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var B = e,
              J = r;
            N = a;
            var ve = t;
            switch (J.tag) {
              case 1:
                if (((B = J.payload), typeof B == "function")) {
                  R = B.call(ve, R, N);
                  break e;
                }
                R = B;
                break e;
              case 3:
                B.flags = (B.flags & -65537) | 128;
              case 0:
                if (
                  ((B = J.payload),
                  (N = typeof B == "function" ? B.call(ve, R, N) : B),
                  N == null)
                )
                  break e;
                R = _({}, R, N);
                break e;
              case 2:
                pt = !0;
            }
          }
          (N = r.callback),
            N !== null &&
              ((e.flags |= 64),
              z && (e.flags |= 8192),
              (z = n.callbacks),
              z === null ? (n.callbacks = [N]) : z.push(N));
        } else
          (z = {
            lane: N,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          }),
            T === null ? ((j = T = z), (h = R)) : (T = T.next = z),
            (s |= N);
        if (((r = r.next), r === null)) {
          if (((r = n.shared.pending), r === null)) break;
          (z = r),
            (r = z.next),
            (z.next = null),
            (n.lastBaseUpdate = z),
            (n.shared.pending = null);
        }
      } while (!0);
      T === null && (h = R),
        (n.baseState = h),
        (n.firstBaseUpdate = j),
        (n.lastBaseUpdate = T),
        i === null && (n.shared.lanes = 0),
        (jt |= s),
        (e.lanes = s),
        (e.memoizedState = R);
    }
  }
  function fr(e, a) {
    if (typeof e != "function") throw Error(o(191, e));
    e.call(a);
  }
  function dr(e, a) {
    var t = e.callbacks;
    if (t !== null)
      for (e.callbacks = null, e = 0; e < t.length; e++) fr(t[e], a);
  }
  var jl = v(null),
    vi = v(0);
  function mr(e, a) {
    (e = tt), H(vi, e), H(jl, a), (tt = e | a.baseLanes);
  }
  function ru() {
    H(vi, tt), H(jl, jl.current);
  }
  function fu() {
    (tt = vi.current), q(jl), q(vi);
  }
  var ha = v(null),
    Ta = null;
  function gt(e) {
    var a = e.alternate;
    H(_e, _e.current & 1),
      H(ha, e),
      Ta === null &&
        (a === null || jl.current !== null || a.memoizedState !== null) &&
        (Ta = e);
  }
  function du(e) {
    H(_e, _e.current), H(ha, e), Ta === null && (Ta = e);
  }
  function hr(e) {
    e.tag === 22
      ? (H(_e, _e.current), H(ha, e), Ta === null && (Ta = e))
      : xt();
  }
  function xt() {
    H(_e, _e.current), H(ha, ha.current);
  }
  function pa(e) {
    q(ha), Ta === e && (Ta = null), q(_e);
  }
  var _e = v(0);
  function gi(e) {
    for (var a = e; a !== null; ) {
      if (a.tag === 13) {
        var t = a.memoizedState;
        if (t !== null && ((t = t.dehydrated), t === null || gc(t) || xc(t)))
          return a;
      } else if (
        a.tag === 19 &&
        (a.memoizedProps.revealOrder === "forwards" ||
          a.memoizedProps.revealOrder === "backwards" ||
          a.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          a.memoizedProps.revealOrder === "together")
      ) {
        if ((a.flags & 128) !== 0) return a;
      } else if (a.child !== null) {
        (a.child.return = a), (a = a.child);
        continue;
      }
      if (a === e) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === e) return null;
        a = a.return;
      }
      (a.sibling.return = a.return), (a = a.sibling);
    }
    return null;
  }
  var ka = 0,
    P = null,
    pe = null,
    qe = null,
    xi = !1,
    Nl = !1,
    $t = !1,
    bi = 0,
    fn = 0,
    El = null,
    Qh = 0;
  function Ce() {
    throw Error(o(321));
  }
  function mu(e, a) {
    if (a === null) return !1;
    for (var t = 0; t < a.length && t < e.length; t++)
      if (!da(e[t], a[t])) return !1;
    return !0;
  }
  function hu(e, a, t, l, n, i) {
    return (
      (ka = i),
      (P = a),
      (a.memoizedState = null),
      (a.updateQueue = null),
      (a.lanes = 0),
      (C.H = e === null || e.memoizedState === null ? Fr : Mu),
      ($t = !1),
      (i = t(l, n)),
      ($t = !1),
      Nl && (i = yr(a, t, l, n)),
      pr(e),
      i
    );
  }
  function pr(e) {
    C.H = hn;
    var a = pe !== null && pe.next !== null;
    if (((ka = 0), (qe = pe = P = null), (xi = !1), (fn = 0), (El = null), a))
      throw Error(o(300));
    e === null ||
      Ue ||
      ((e = e.dependencies), e !== null && ri(e) && (Ue = !0));
  }
  function yr(e, a, t, l) {
    P = e;
    var n = 0;
    do {
      if ((Nl && (El = null), (fn = 0), (Nl = !1), 25 <= n))
        throw Error(o(301));
      if (((n += 1), (qe = pe = null), e.updateQueue != null)) {
        var i = e.updateQueue;
        (i.lastEffect = null),
          (i.events = null),
          (i.stores = null),
          i.memoCache != null && (i.memoCache.index = 0);
      }
      (C.H = Ir), (i = a(t, l));
    } while (Nl);
    return i;
  }
  function wh() {
    var e = C.H,
      a = e.useState()[0];
    return (
      (a = typeof a.then == "function" ? dn(a) : a),
      (e = e.useState()[0]),
      (pe !== null ? pe.memoizedState : null) !== e && (P.flags |= 1024),
      a
    );
  }
  function pu() {
    var e = bi !== 0;
    return (bi = 0), e;
  }
  function yu(e, a, t) {
    (a.updateQueue = e.updateQueue), (a.flags &= -2053), (e.lanes &= ~t);
  }
  function vu(e) {
    if (xi) {
      for (e = e.memoizedState; e !== null; ) {
        var a = e.queue;
        a !== null && (a.pending = null), (e = e.next);
      }
      xi = !1;
    }
    (ka = 0), (qe = pe = P = null), (Nl = !1), (fn = bi = 0), (El = null);
  }
  function Fe() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return qe === null ? (P.memoizedState = qe = e) : (qe = qe.next = e), qe;
  }
  function Re() {
    if (pe === null) {
      var e = P.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = pe.next;
    var a = qe === null ? P.memoizedState : qe.next;
    if (a !== null) (qe = a), (pe = e);
    else {
      if (e === null)
        throw P.alternate === null ? Error(o(467)) : Error(o(310));
      (pe = e),
        (e = {
          memoizedState: pe.memoizedState,
          baseState: pe.baseState,
          baseQueue: pe.baseQueue,
          queue: pe.queue,
          next: null,
        }),
        qe === null ? (P.memoizedState = qe = e) : (qe = qe.next = e);
    }
    return qe;
  }
  function Si() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function dn(e) {
    var a = fn;
    return (
      (fn += 1),
      El === null && (El = []),
      (e = sr(El, e, a)),
      (a = P),
      (qe === null ? a.memoizedState : qe.next) === null &&
        ((a = a.alternate),
        (C.H = a === null || a.memoizedState === null ? Fr : Mu)),
      e
    );
  }
  function ji(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return dn(e);
      if (e.$$typeof === F) return Ve(e);
    }
    throw Error(o(438, String(e)));
  }
  function gu(e) {
    var a = null,
      t = P.updateQueue;
    if ((t !== null && (a = t.memoCache), a == null)) {
      var l = P.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (a = {
              data: l.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (a == null && (a = { data: [], index: 0 }),
      t === null && ((t = Si()), (P.updateQueue = t)),
      (t.memoCache = a),
      (t = a.data[a.index]),
      t === void 0)
    )
      for (t = a.data[a.index] = Array(e), l = 0; l < e; l++) t[l] = ua;
    return a.index++, t;
  }
  function $a(e, a) {
    return typeof a == "function" ? a(e) : a;
  }
  function Ni(e) {
    var a = Re();
    return xu(a, pe, e);
  }
  function xu(e, a, t) {
    var l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = t;
    var n = e.baseQueue,
      i = l.pending;
    if (i !== null) {
      if (n !== null) {
        var s = n.next;
        (n.next = i.next), (i.next = s);
      }
      (a.baseQueue = n = i), (l.pending = null);
    }
    if (((i = e.baseState), n === null)) e.memoizedState = i;
    else {
      a = n.next;
      var r = (s = null),
        h = null,
        j = a,
        T = !1;
      do {
        var R = j.lane & -536870913;
        if (R !== j.lane ? (ie & R) === R : (ka & R) === R) {
          var N = j.revertLane;
          if (N === 0)
            h !== null &&
              (h = h.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: j.action,
                  hasEagerState: j.hasEagerState,
                  eagerState: j.eagerState,
                  next: null,
                }),
              R === gl && (T = !0);
          else if ((ka & N) === N) {
            (j = j.next), N === gl && (T = !0);
            continue;
          } else
            (R = {
              lane: 0,
              revertLane: j.revertLane,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null,
            }),
              h === null ? ((r = h = R), (s = i)) : (h = h.next = R),
              (P.lanes |= N),
              (jt |= N);
          (R = j.action),
            $t && t(i, R),
            (i = j.hasEagerState ? j.eagerState : t(i, R));
        } else
          (N = {
            lane: R,
            revertLane: j.revertLane,
            gesture: j.gesture,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null,
          }),
            h === null ? ((r = h = N), (s = i)) : (h = h.next = N),
            (P.lanes |= R),
            (jt |= R);
        j = j.next;
      } while (j !== null && j !== a);
      if (
        (h === null ? (s = i) : (h.next = r),
        !da(i, e.memoizedState) && ((Ue = !0), T && ((t = xl), t !== null)))
      )
        throw t;
      (e.memoizedState = i),
        (e.baseState = s),
        (e.baseQueue = h),
        (l.lastRenderedState = i);
    }
    return n === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function bu(e) {
    var a = Re(),
      t = a.queue;
    if (t === null) throw Error(o(311));
    t.lastRenderedReducer = e;
    var l = t.dispatch,
      n = t.pending,
      i = a.memoizedState;
    if (n !== null) {
      t.pending = null;
      var s = (n = n.next);
      do (i = e(i, s.action)), (s = s.next);
      while (s !== n);
      da(i, a.memoizedState) || (Ue = !0),
        (a.memoizedState = i),
        a.baseQueue === null && (a.baseState = i),
        (t.lastRenderedState = i);
    }
    return [i, l];
  }
  function vr(e, a, t) {
    var l = P,
      n = Re(),
      i = ue;
    if (i) {
      if (t === void 0) throw Error(o(407));
      t = t();
    } else t = a();
    var s = !da((pe || n).memoizedState, t);
    if (
      (s && ((n.memoizedState = t), (Ue = !0)),
      (n = n.queue),
      Nu(br.bind(null, l, n, e), [e]),
      n.getSnapshot !== a || s || (qe !== null && qe.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        zl(9, { destroy: void 0 }, xr.bind(null, l, n, t, a), null),
        xe === null)
      )
        throw Error(o(349));
      i || (ka & 127) !== 0 || gr(l, a, t);
    }
    return t;
  }
  function gr(e, a, t) {
    (e.flags |= 16384),
      (e = { getSnapshot: a, value: t }),
      (a = P.updateQueue),
      a === null
        ? ((a = Si()), (P.updateQueue = a), (a.stores = [e]))
        : ((t = a.stores), t === null ? (a.stores = [e]) : t.push(e));
  }
  function xr(e, a, t, l) {
    (a.value = t), (a.getSnapshot = l), Sr(a) && jr(e);
  }
  function br(e, a, t) {
    return t(function () {
      Sr(a) && jr(e);
    });
  }
  function Sr(e) {
    var a = e.getSnapshot;
    e = e.value;
    try {
      var t = a();
      return !da(e, t);
    } catch {
      return !0;
    }
  }
  function jr(e) {
    var a = Gt(e, 2);
    a !== null && sa(a, e, 2);
  }
  function Su(e) {
    var a = Fe();
    if (typeof e == "function") {
      var t = e;
      if (((e = t()), $t)) {
        ct(!0);
        try {
          t();
        } finally {
          ct(!1);
        }
      }
    }
    return (
      (a.memoizedState = a.baseState = e),
      (a.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $a,
        lastRenderedState: e,
      }),
      a
    );
  }
  function Nr(e, a, t, l) {
    return (e.baseState = t), xu(e, pe, typeof l == "function" ? l : $a);
  }
  function Zh(e, a, t, l, n) {
    if (Ti(e)) throw Error(o(485));
    if (((e = a.action), e !== null)) {
      var i = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (s) {
          i.listeners.push(s);
        },
      };
      C.T !== null ? t(!0) : (i.isTransition = !1),
        l(i),
        (t = a.pending),
        t === null
          ? ((i.next = a.pending = i), Er(a, i))
          : ((i.next = t.next), (a.pending = t.next = i));
    }
  }
  function Er(e, a) {
    var t = a.action,
      l = a.payload,
      n = e.state;
    if (a.isTransition) {
      var i = C.T,
        s = {};
      C.T = s;
      try {
        var r = t(n, l),
          h = C.S;
        h !== null && h(s, r), zr(e, a, r);
      } catch (j) {
        ju(e, a, j);
      } finally {
        i !== null && s.types !== null && (i.types = s.types), (C.T = i);
      }
    } else
      try {
        (i = t(n, l)), zr(e, a, i);
      } catch (j) {
        ju(e, a, j);
      }
  }
  function zr(e, a, t) {
    t !== null && typeof t == "object" && typeof t.then == "function"
      ? t.then(
          function (l) {
            Tr(e, a, l);
          },
          function (l) {
            return ju(e, a, l);
          }
        )
      : Tr(e, a, t);
  }
  function Tr(e, a, t) {
    (a.status = "fulfilled"),
      (a.value = t),
      Ar(a),
      (e.state = t),
      (a = e.pending),
      a !== null &&
        ((t = a.next),
        t === a ? (e.pending = null) : ((t = t.next), (a.next = t), Er(e, t)));
  }
  function ju(e, a, t) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do (a.status = "rejected"), (a.reason = t), Ar(a), (a = a.next);
      while (a !== l);
    }
    e.action = null;
  }
  function Ar(e) {
    e = e.listeners;
    for (var a = 0; a < e.length; a++) (0, e[a])();
  }
  function Cr(e, a) {
    return a;
  }
  function Mr(e, a) {
    if (ue) {
      var t = xe.formState;
      if (t !== null) {
        e: {
          var l = P;
          if (ue) {
            if (Se) {
              a: {
                for (var n = Se, i = za; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break a;
                  }
                  if (((n = Aa(n.nextSibling)), n === null)) {
                    n = null;
                    break a;
                  }
                }
                (i = n.data), (n = i === "F!" || i === "F" ? n : null);
              }
              if (n) {
                (Se = Aa(n.nextSibling)), (l = n.data === "F!");
                break e;
              }
            }
            mt(l);
          }
          l = !1;
        }
        l && (a = t[0]);
      }
    }
    return (
      (t = Fe()),
      (t.memoizedState = t.baseState = a),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Cr,
        lastRenderedState: a,
      }),
      (t.queue = l),
      (t = kr.bind(null, P, l)),
      (l.dispatch = t),
      (l = Su(!1)),
      (i = Cu.bind(null, P, !1, l.queue)),
      (l = Fe()),
      (n = { state: a, dispatch: null, action: e, pending: null }),
      (l.queue = n),
      (t = Zh.bind(null, P, n, i, t)),
      (n.dispatch = t),
      (l.memoizedState = e),
      [a, t, !1]
    );
  }
  function Or(e) {
    var a = Re();
    return _r(a, pe, e);
  }
  function _r(e, a, t) {
    if (
      ((a = xu(e, a, Cr)[0]),
      (e = Ni($a)[0]),
      typeof a == "object" && a !== null && typeof a.then == "function")
    )
      try {
        var l = dn(a);
      } catch (s) {
        throw s === bl ? mi : s;
      }
    else l = a;
    a = Re();
    var n = a.queue,
      i = n.dispatch;
    return (
      t !== a.memoizedState &&
        ((P.flags |= 2048),
        zl(9, { destroy: void 0 }, Vh.bind(null, n, t), null)),
      [l, i, e]
    );
  }
  function Vh(e, a) {
    e.action = a;
  }
  function Rr(e) {
    var a = Re(),
      t = pe;
    if (t !== null) return _r(a, t, e);
    Re(), (a = a.memoizedState), (t = Re());
    var l = t.queue.dispatch;
    return (t.memoizedState = e), [a, l, !1];
  }
  function zl(e, a, t, l) {
    return (
      (e = { tag: e, create: t, deps: l, inst: a, next: null }),
      (a = P.updateQueue),
      a === null && ((a = Si()), (P.updateQueue = a)),
      (t = a.lastEffect),
      t === null
        ? (a.lastEffect = e.next = e)
        : ((l = t.next), (t.next = e), (e.next = l), (a.lastEffect = e)),
      e
    );
  }
  function Dr() {
    return Re().memoizedState;
  }
  function Ei(e, a, t, l) {
    var n = Fe();
    (P.flags |= e),
      (n.memoizedState = zl(
        1 | a,
        { destroy: void 0 },
        t,
        l === void 0 ? null : l
      ));
  }
  function zi(e, a, t, l) {
    var n = Re();
    l = l === void 0 ? null : l;
    var i = n.memoizedState.inst;
    pe !== null && l !== null && mu(l, pe.memoizedState.deps)
      ? (n.memoizedState = zl(a, i, t, l))
      : ((P.flags |= e), (n.memoizedState = zl(1 | a, i, t, l)));
  }
  function qr(e, a) {
    Ei(8390656, 8, e, a);
  }
  function Nu(e, a) {
    zi(2048, 8, e, a);
  }
  function Kh(e) {
    P.flags |= 4;
    var a = P.updateQueue;
    if (a === null) (a = Si()), (P.updateQueue = a), (a.events = [e]);
    else {
      var t = a.events;
      t === null ? (a.events = [e]) : t.push(e);
    }
  }
  function Ur(e) {
    var a = Re().memoizedState;
    return (
      Kh({ ref: a, nextImpl: e }),
      function () {
        if ((re & 2) !== 0) throw Error(o(440));
        return a.impl.apply(void 0, arguments);
      }
    );
  }
  function Hr(e, a) {
    return zi(4, 2, e, a);
  }
  function Lr(e, a) {
    return zi(4, 4, e, a);
  }
  function Br(e, a) {
    if (typeof a == "function") {
      e = e();
      var t = a(e);
      return function () {
        typeof t == "function" ? t() : a(null);
      };
    }
    if (a != null)
      return (
        (e = e()),
        (a.current = e),
        function () {
          a.current = null;
        }
      );
  }
  function Yr(e, a, t) {
    (t = t != null ? t.concat([e]) : null), zi(4, 4, Br.bind(null, a, e), t);
  }
  function Eu() {}
  function Gr(e, a) {
    var t = Re();
    a = a === void 0 ? null : a;
    var l = t.memoizedState;
    return a !== null && mu(a, l[1]) ? l[0] : ((t.memoizedState = [e, a]), e);
  }
  function Xr(e, a) {
    var t = Re();
    a = a === void 0 ? null : a;
    var l = t.memoizedState;
    if (a !== null && mu(a, l[1])) return l[0];
    if (((l = e()), $t)) {
      ct(!0);
      try {
        e();
      } finally {
        ct(!1);
      }
    }
    return (t.memoizedState = [l, a]), l;
  }
  function zu(e, a, t) {
    return t === void 0 || ((ka & 1073741824) !== 0 && (ie & 261930) === 0)
      ? (e.memoizedState = a)
      : ((e.memoizedState = t), (e = wf()), (P.lanes |= e), (jt |= e), t);
  }
  function Qr(e, a, t, l) {
    return da(t, a)
      ? t
      : jl.current !== null
      ? ((e = zu(e, t, l)), da(e, a) || (Ue = !0), e)
      : (ka & 42) === 0 || ((ka & 1073741824) !== 0 && (ie & 261930) === 0)
      ? ((Ue = !0), (e.memoizedState = t))
      : ((e = wf()), (P.lanes |= e), (jt |= e), a);
  }
  function wr(e, a, t, l, n) {
    var i = U.p;
    U.p = i !== 0 && 8 > i ? i : 8;
    var s = C.T,
      r = {};
    (C.T = r), Cu(e, !1, a, t);
    try {
      var h = n(),
        j = C.S;
      if (
        (j !== null && j(r, h),
        h !== null && typeof h == "object" && typeof h.then == "function")
      ) {
        var T = Xh(h, l);
        mn(e, a, T, ga(e));
      } else mn(e, a, l, ga(e));
    } catch (R) {
      mn(e, a, { then: function () {}, status: "rejected", reason: R }, ga());
    } finally {
      (U.p = i),
        s !== null && r.types !== null && (s.types = r.types),
        (C.T = s);
    }
  }
  function Jh() {}
  function Tu(e, a, t, l) {
    if (e.tag !== 5) throw Error(o(476));
    var n = Zr(e).queue;
    wr(
      e,
      n,
      a,
      $,
      t === null
        ? Jh
        : function () {
            return Vr(e), t(l);
          }
    );
  }
  function Zr(e) {
    var a = e.memoizedState;
    if (a !== null) return a;
    a = {
      memoizedState: $,
      baseState: $,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $a,
        lastRenderedState: $,
      },
      next: null,
    };
    var t = {};
    return (
      (a.next = {
        memoizedState: t,
        baseState: t,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: $a,
          lastRenderedState: t,
        },
        next: null,
      }),
      (e.memoizedState = a),
      (e = e.alternate),
      e !== null && (e.memoizedState = a),
      a
    );
  }
  function Vr(e) {
    var a = Zr(e);
    a.next === null && (a = e.alternate.memoizedState),
      mn(e, a.next.queue, {}, ga());
  }
  function Au() {
    return Ve(On);
  }
  function Kr() {
    return Re().memoizedState;
  }
  function Jr() {
    return Re().memoizedState;
  }
  function kh(e) {
    for (var a = e.return; a !== null; ) {
      switch (a.tag) {
        case 24:
        case 3:
          var t = ga();
          e = yt(t);
          var l = vt(a, e, t);
          l !== null && (sa(l, a, t), cn(l, a, t)),
            (a = { cache: tu() }),
            (e.payload = a);
          return;
      }
      a = a.return;
    }
  }
  function $h(e, a, t) {
    var l = ga();
    (t = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ti(e)
        ? $r(a, t)
        : ((t = Vs(e, a, t, l)), t !== null && (sa(t, e, l), Wr(t, a, l)));
  }
  function kr(e, a, t) {
    var l = ga();
    mn(e, a, t, l);
  }
  function mn(e, a, t, l) {
    var n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ti(e)) $r(a, n);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = a.lastRenderedReducer), i !== null)
      )
        try {
          var s = a.lastRenderedState,
            r = i(s, t);
          if (((n.hasEagerState = !0), (n.eagerState = r), da(r, s)))
            return si(e, a, n, 0), xe === null && ii(), !1;
        } catch {
        } finally {
        }
      if (((t = Vs(e, a, n, l)), t !== null))
        return sa(t, e, l), Wr(t, a, l), !0;
    }
    return !1;
  }
  function Cu(e, a, t, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: sc(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ti(e))
    ) {
      if (a) throw Error(o(479));
    } else (a = Vs(e, t, l, 2)), a !== null && sa(a, e, 2);
  }
  function Ti(e) {
    var a = e.alternate;
    return e === P || (a !== null && a === P);
  }
  function $r(e, a) {
    Nl = xi = !0;
    var t = e.pending;
    t === null ? (a.next = a) : ((a.next = t.next), (t.next = a)),
      (e.pending = a);
  }
  function Wr(e, a, t) {
    if ((t & 4194048) !== 0) {
      var l = a.lanes;
      (l &= e.pendingLanes), (t |= l), (a.lanes = t), eo(e, t);
    }
  }
  var hn = {
    readContext: Ve,
    use: ji,
    useCallback: Ce,
    useContext: Ce,
    useEffect: Ce,
    useImperativeHandle: Ce,
    useLayoutEffect: Ce,
    useInsertionEffect: Ce,
    useMemo: Ce,
    useReducer: Ce,
    useRef: Ce,
    useState: Ce,
    useDebugValue: Ce,
    useDeferredValue: Ce,
    useTransition: Ce,
    useSyncExternalStore: Ce,
    useId: Ce,
    useHostTransitionStatus: Ce,
    useFormState: Ce,
    useActionState: Ce,
    useOptimistic: Ce,
    useMemoCache: Ce,
    useCacheRefresh: Ce,
  };
  hn.useEffectEvent = Ce;
  var Fr = {
      readContext: Ve,
      use: ji,
      useCallback: function (e, a) {
        return (Fe().memoizedState = [e, a === void 0 ? null : a]), e;
      },
      useContext: Ve,
      useEffect: qr,
      useImperativeHandle: function (e, a, t) {
        (t = t != null ? t.concat([e]) : null),
          Ei(4194308, 4, Br.bind(null, a, e), t);
      },
      useLayoutEffect: function (e, a) {
        return Ei(4194308, 4, e, a);
      },
      useInsertionEffect: function (e, a) {
        Ei(4, 2, e, a);
      },
      useMemo: function (e, a) {
        var t = Fe();
        a = a === void 0 ? null : a;
        var l = e();
        if ($t) {
          ct(!0);
          try {
            e();
          } finally {
            ct(!1);
          }
        }
        return (t.memoizedState = [l, a]), l;
      },
      useReducer: function (e, a, t) {
        var l = Fe();
        if (t !== void 0) {
          var n = t(a);
          if ($t) {
            ct(!0);
            try {
              t(a);
            } finally {
              ct(!1);
            }
          }
        } else n = a;
        return (
          (l.memoizedState = l.baseState = n),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (l.queue = e),
          (e = e.dispatch = $h.bind(null, P, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var a = Fe();
        return (e = { current: e }), (a.memoizedState = e);
      },
      useState: function (e) {
        e = Su(e);
        var a = e.queue,
          t = kr.bind(null, P, a);
        return (a.dispatch = t), [e.memoizedState, t];
      },
      useDebugValue: Eu,
      useDeferredValue: function (e, a) {
        var t = Fe();
        return zu(t, e, a);
      },
      useTransition: function () {
        var e = Su(!1);
        return (
          (e = wr.bind(null, P, e.queue, !0, !1)),
          (Fe().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, a, t) {
        var l = P,
          n = Fe();
        if (ue) {
          if (t === void 0) throw Error(o(407));
          t = t();
        } else {
          if (((t = a()), xe === null)) throw Error(o(349));
          (ie & 127) !== 0 || gr(l, a, t);
        }
        n.memoizedState = t;
        var i = { value: t, getSnapshot: a };
        return (
          (n.queue = i),
          qr(br.bind(null, l, i, e), [e]),
          (l.flags |= 2048),
          zl(9, { destroy: void 0 }, xr.bind(null, l, i, t, a), null),
          t
        );
      },
      useId: function () {
        var e = Fe(),
          a = xe.identifierPrefix;
        if (ue) {
          var t = qa,
            l = Da;
          (t = (l & ~(1 << (32 - fa(l) - 1))).toString(32) + t),
            (a = "_" + a + "R_" + t),
            (t = bi++),
            0 < t && (a += "H" + t.toString(32)),
            (a += "_");
        } else (t = Qh++), (a = "_" + a + "r_" + t.toString(32) + "_");
        return (e.memoizedState = a);
      },
      useHostTransitionStatus: Au,
      useFormState: Mr,
      useActionState: Mr,
      useOptimistic: function (e) {
        var a = Fe();
        a.memoizedState = a.baseState = e;
        var t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (a.queue = t), (a = Cu.bind(null, P, !0, t)), (t.dispatch = a), [e, a]
        );
      },
      useMemoCache: gu,
      useCacheRefresh: function () {
        return (Fe().memoizedState = kh.bind(null, P));
      },
      useEffectEvent: function (e) {
        var a = Fe(),
          t = { impl: e };
        return (
          (a.memoizedState = t),
          function () {
            if ((re & 2) !== 0) throw Error(o(440));
            return t.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Mu = {
      readContext: Ve,
      use: ji,
      useCallback: Gr,
      useContext: Ve,
      useEffect: Nu,
      useImperativeHandle: Yr,
      useInsertionEffect: Hr,
      useLayoutEffect: Lr,
      useMemo: Xr,
      useReducer: Ni,
      useRef: Dr,
      useState: function () {
        return Ni($a);
      },
      useDebugValue: Eu,
      useDeferredValue: function (e, a) {
        var t = Re();
        return Qr(t, pe.memoizedState, e, a);
      },
      useTransition: function () {
        var e = Ni($a)[0],
          a = Re().memoizedState;
        return [typeof e == "boolean" ? e : dn(e), a];
      },
      useSyncExternalStore: vr,
      useId: Kr,
      useHostTransitionStatus: Au,
      useFormState: Or,
      useActionState: Or,
      useOptimistic: function (e, a) {
        var t = Re();
        return Nr(t, pe, e, a);
      },
      useMemoCache: gu,
      useCacheRefresh: Jr,
    };
  Mu.useEffectEvent = Ur;
  var Ir = {
    readContext: Ve,
    use: ji,
    useCallback: Gr,
    useContext: Ve,
    useEffect: Nu,
    useImperativeHandle: Yr,
    useInsertionEffect: Hr,
    useLayoutEffect: Lr,
    useMemo: Xr,
    useReducer: bu,
    useRef: Dr,
    useState: function () {
      return bu($a);
    },
    useDebugValue: Eu,
    useDeferredValue: function (e, a) {
      var t = Re();
      return pe === null ? zu(t, e, a) : Qr(t, pe.memoizedState, e, a);
    },
    useTransition: function () {
      var e = bu($a)[0],
        a = Re().memoizedState;
      return [typeof e == "boolean" ? e : dn(e), a];
    },
    useSyncExternalStore: vr,
    useId: Kr,
    useHostTransitionStatus: Au,
    useFormState: Rr,
    useActionState: Rr,
    useOptimistic: function (e, a) {
      var t = Re();
      return pe !== null
        ? Nr(t, pe, e, a)
        : ((t.baseState = e), [e, t.queue.dispatch]);
    },
    useMemoCache: gu,
    useCacheRefresh: Jr,
  };
  Ir.useEffectEvent = Ur;
  function Ou(e, a, t, l) {
    (a = e.memoizedState),
      (t = t(l, a)),
      (t = t == null ? a : _({}, a, t)),
      (e.memoizedState = t),
      e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var _u = {
    enqueueSetState: function (e, a, t) {
      e = e._reactInternals;
      var l = ga(),
        n = yt(l);
      (n.payload = a),
        t != null && (n.callback = t),
        (a = vt(e, n, l)),
        a !== null && (sa(a, e, l), cn(a, e, l));
    },
    enqueueReplaceState: function (e, a, t) {
      e = e._reactInternals;
      var l = ga(),
        n = yt(l);
      (n.tag = 1),
        (n.payload = a),
        t != null && (n.callback = t),
        (a = vt(e, n, l)),
        a !== null && (sa(a, e, l), cn(a, e, l));
    },
    enqueueForceUpdate: function (e, a) {
      e = e._reactInternals;
      var t = ga(),
        l = yt(t);
      (l.tag = 2),
        a != null && (l.callback = a),
        (a = vt(e, l, t)),
        a !== null && (sa(a, e, t), cn(a, e, t));
    },
  };
  function Pr(e, a, t, l, n, i, s) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, i, s)
        : a.prototype && a.prototype.isPureReactComponent
        ? !Pl(t, l) || !Pl(n, i)
        : !0
    );
  }
  function ef(e, a, t, l) {
    (e = a.state),
      typeof a.componentWillReceiveProps == "function" &&
        a.componentWillReceiveProps(t, l),
      typeof a.UNSAFE_componentWillReceiveProps == "function" &&
        a.UNSAFE_componentWillReceiveProps(t, l),
      a.state !== e && _u.enqueueReplaceState(a, a.state, null);
  }
  function Wt(e, a) {
    var t = a;
    if ("ref" in a) {
      t = {};
      for (var l in a) l !== "ref" && (t[l] = a[l]);
    }
    if ((e = e.defaultProps)) {
      t === a && (t = _({}, t));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    }
    return t;
  }
  function af(e) {
    ni(e);
  }
  function tf(e) {
    console.error(e);
  }
  function lf(e) {
    ni(e);
  }
  function Ai(e, a) {
    try {
      var t = e.onUncaughtError;
      t(a.value, { componentStack: a.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function nf(e, a, t) {
    try {
      var l = e.onCaughtError;
      l(t.value, {
        componentStack: t.stack,
        errorBoundary: a.tag === 1 ? a.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Ru(e, a, t) {
    return (
      (t = yt(t)),
      (t.tag = 3),
      (t.payload = { element: null }),
      (t.callback = function () {
        Ai(e, a);
      }),
      t
    );
  }
  function sf(e) {
    return (e = yt(e)), (e.tag = 3), e;
  }
  function uf(e, a, t, l) {
    var n = t.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = l.value;
      (e.payload = function () {
        return n(i);
      }),
        (e.callback = function () {
          nf(a, t, l);
        });
    }
    var s = t.stateNode;
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (e.callback = function () {
        nf(a, t, l),
          typeof n != "function" &&
            (Nt === null ? (Nt = new Set([this])) : Nt.add(this));
        var r = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: r !== null ? r : "",
        });
      });
  }
  function Wh(e, a, t, l, n) {
    if (
      ((t.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((a = t.alternate),
        a !== null && vl(a, t, n, !0),
        (t = ha.current),
        t !== null)
      ) {
        switch (t.tag) {
          case 31:
          case 13:
            return (
              Ta === null ? Yi() : t.alternate === null && Me === 0 && (Me = 3),
              (t.flags &= -257),
              (t.flags |= 65536),
              (t.lanes = n),
              l === hi
                ? (t.flags |= 16384)
                : ((a = t.updateQueue),
                  a === null ? (t.updateQueue = new Set([l])) : a.add(l),
                  lc(e, l, n)),
              !1
            );
          case 22:
            return (
              (t.flags |= 65536),
              l === hi
                ? (t.flags |= 16384)
                : ((a = t.updateQueue),
                  a === null
                    ? ((a = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (t.updateQueue = a))
                    : ((t = a.retryQueue),
                      t === null ? (a.retryQueue = new Set([l])) : t.add(l)),
                  lc(e, l, n)),
              !1
            );
        }
        throw Error(o(435, t.tag));
      }
      return lc(e, l, n), Yi(), !1;
    }
    if (ue)
      return (
        (a = ha.current),
        a !== null
          ? ((a.flags & 65536) === 0 && (a.flags |= 256),
            (a.flags |= 65536),
            (a.lanes = n),
            l !== Fs && ((e = Error(o(422), { cause: l })), tn(ja(e, t))))
          : (l !== Fs && ((a = Error(o(423), { cause: l })), tn(ja(a, t))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (n &= -n),
            (e.lanes |= n),
            (l = ja(l, t)),
            (n = Ru(e.stateNode, l, n)),
            cu(e, n),
            Me !== 4 && (Me = 2)),
        !1
      );
    var i = Error(o(520), { cause: l });
    if (
      ((i = ja(i, t)),
      jn === null ? (jn = [i]) : jn.push(i),
      Me !== 4 && (Me = 2),
      a === null)
    )
      return !0;
    (l = ja(l, t)), (t = a);
    do {
      switch (t.tag) {
        case 3:
          return (
            (t.flags |= 65536),
            (e = n & -n),
            (t.lanes |= e),
            (e = Ru(t.stateNode, l, e)),
            cu(t, e),
            !1
          );
        case 1:
          if (
            ((a = t.type),
            (i = t.stateNode),
            (t.flags & 128) === 0 &&
              (typeof a.getDerivedStateFromError == "function" ||
                (i !== null &&
                  typeof i.componentDidCatch == "function" &&
                  (Nt === null || !Nt.has(i)))))
          )
            return (
              (t.flags |= 65536),
              (n &= -n),
              (t.lanes |= n),
              (n = sf(n)),
              uf(n, e, t, l),
              cu(t, n),
              !1
            );
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var Du = Error(o(461)),
    Ue = !1;
  function Ke(e, a, t, l) {
    a.child = e === null ? rr(a, null, t, l) : kt(a, e.child, t, l);
  }
  function cf(e, a, t, l, n) {
    t = t.render;
    var i = a.ref;
    if ("ref" in l) {
      var s = {};
      for (var r in l) r !== "ref" && (s[r] = l[r]);
    } else s = l;
    return (
      Zt(a),
      (l = hu(e, a, t, s, i, n)),
      (r = pu()),
      e !== null && !Ue
        ? (yu(e, a, n), Wa(e, a, n))
        : (ue && r && $s(a), (a.flags |= 1), Ke(e, a, l, n), a.child)
    );
  }
  function of(e, a, t, l, n) {
    if (e === null) {
      var i = t.type;
      return typeof i == "function" &&
        !Ks(i) &&
        i.defaultProps === void 0 &&
        t.compare === null
        ? ((a.tag = 15), (a.type = i), rf(e, a, i, l, n))
        : ((e = ci(t.type, null, l, a, a.mode, n)),
          (e.ref = a.ref),
          (e.return = a),
          (a.child = e));
    }
    if (((i = e.child), !Xu(e, n))) {
      var s = i.memoizedProps;
      if (
        ((t = t.compare), (t = t !== null ? t : Pl), t(s, l) && e.ref === a.ref)
      )
        return Wa(e, a, n);
    }
    return (
      (a.flags |= 1),
      (e = Za(i, l)),
      (e.ref = a.ref),
      (e.return = a),
      (a.child = e)
    );
  }
  function rf(e, a, t, l, n) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Pl(i, l) && e.ref === a.ref)
        if (((Ue = !1), (a.pendingProps = l = i), Xu(e, n)))
          (e.flags & 131072) !== 0 && (Ue = !0);
        else return (a.lanes = e.lanes), Wa(e, a, n);
    }
    return qu(e, a, t, l, n);
  }
  function ff(e, a, t, l) {
    var n = l.children,
      i = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        a.stateNode === null &&
        (a.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.mode === "hidden")
    ) {
      if ((a.flags & 128) !== 0) {
        if (((i = i !== null ? i.baseLanes | t : t), e !== null)) {
          for (l = a.child = e.child, n = 0; l !== null; )
            (n = n | l.lanes | l.childLanes), (l = l.sibling);
          l = n & ~i;
        } else (l = 0), (a.child = null);
        return df(e, a, i, t, l);
      }
      if ((t & 536870912) !== 0)
        (a.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && di(a, i !== null ? i.cachePool : null),
          i !== null ? mr(a, i) : ru(),
          hr(a);
      else
        return (
          (l = a.lanes = 536870912),
          df(e, a, i !== null ? i.baseLanes | t : t, t, l)
        );
    } else
      i !== null
        ? (di(a, i.cachePool), mr(a, i), xt(), (a.memoizedState = null))
        : (e !== null && di(a, null), ru(), xt());
    return Ke(e, a, n, t), a.child;
  }
  function pn(e, a) {
    return (
      (e !== null && e.tag === 22) ||
        a.stateNode !== null ||
        (a.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.sibling
    );
  }
  function df(e, a, t, l, n) {
    var i = nu();
    return (
      (i = i === null ? null : { parent: De._currentValue, pool: i }),
      (a.memoizedState = { baseLanes: t, cachePool: i }),
      e !== null && di(a, null),
      ru(),
      hr(a),
      e !== null && vl(e, a, l, !0),
      (a.childLanes = n),
      null
    );
  }
  function Ci(e, a) {
    return (
      (a = Oi({ mode: a.mode, children: a.children }, e.mode)),
      (a.ref = e.ref),
      (e.child = a),
      (a.return = e),
      a
    );
  }
  function mf(e, a, t) {
    return (
      kt(a, e.child, null, t),
      (e = Ci(a, a.pendingProps)),
      (e.flags |= 2),
      pa(a),
      (a.memoizedState = null),
      e
    );
  }
  function Fh(e, a, t) {
    var l = a.pendingProps,
      n = (a.flags & 128) !== 0;
    if (((a.flags &= -129), e === null)) {
      if (ue) {
        if (l.mode === "hidden")
          return (e = Ci(a, l)), (a.lanes = 536870912), pn(null, e);
        if (
          (du(a),
          (e = Se)
            ? ((e = zd(e, za)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((a.memoizedState = {
                  dehydrated: e,
                  treeContext: ft !== null ? { id: Da, overflow: qa } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (t = $o(e)),
                (t.return = a),
                (a.child = t),
                (Ze = a),
                (Se = null)))
            : (e = null),
          e === null)
        )
          throw mt(a);
        return (a.lanes = 536870912), null;
      }
      return Ci(a, l);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var s = i.dehydrated;
      if ((du(a), n))
        if (a.flags & 256) (a.flags &= -257), (a = mf(e, a, t));
        else if (a.memoizedState !== null)
          (a.child = e.child), (a.flags |= 128), (a = null);
        else throw Error(o(558));
      else if (
        (Ue || vl(e, a, t, !1), (n = (t & e.childLanes) !== 0), Ue || n)
      ) {
        if (
          ((l = xe),
          l !== null && ((s = ao(l, t)), s !== 0 && s !== i.retryLane))
        )
          throw ((i.retryLane = s), Gt(e, s), sa(l, e, s), Du);
        Yi(), (a = mf(e, a, t));
      } else
        (e = i.treeContext),
          (Se = Aa(s.nextSibling)),
          (Ze = a),
          (ue = !0),
          (dt = null),
          (za = !1),
          e !== null && Io(a, e),
          (a = Ci(a, l)),
          (a.flags |= 4096);
      return a;
    }
    return (
      (e = Za(e.child, { mode: l.mode, children: l.children })),
      (e.ref = a.ref),
      (a.child = e),
      (e.return = a),
      e
    );
  }
  function Mi(e, a) {
    var t = a.ref;
    if (t === null) e !== null && e.ref !== null && (a.flags |= 4194816);
    else {
      if (typeof t != "function" && typeof t != "object") throw Error(o(284));
      (e === null || e.ref !== t) && (a.flags |= 4194816);
    }
  }
  function qu(e, a, t, l, n) {
    return (
      Zt(a),
      (t = hu(e, a, t, l, void 0, n)),
      (l = pu()),
      e !== null && !Ue
        ? (yu(e, a, n), Wa(e, a, n))
        : (ue && l && $s(a), (a.flags |= 1), Ke(e, a, t, n), a.child)
    );
  }
  function hf(e, a, t, l, n, i) {
    return (
      Zt(a),
      (a.updateQueue = null),
      (t = yr(a, l, t, n)),
      pr(e),
      (l = pu()),
      e !== null && !Ue
        ? (yu(e, a, i), Wa(e, a, i))
        : (ue && l && $s(a), (a.flags |= 1), Ke(e, a, t, i), a.child)
    );
  }
  function pf(e, a, t, l, n) {
    if ((Zt(a), a.stateNode === null)) {
      var i = ml,
        s = t.contextType;
      typeof s == "object" && s !== null && (i = Ve(s)),
        (i = new t(l, i)),
        (a.memoizedState =
          i.state !== null && i.state !== void 0 ? i.state : null),
        (i.updater = _u),
        (a.stateNode = i),
        (i._reactInternals = a),
        (i = a.stateNode),
        (i.props = l),
        (i.state = a.memoizedState),
        (i.refs = {}),
        su(a),
        (s = t.contextType),
        (i.context = typeof s == "object" && s !== null ? Ve(s) : ml),
        (i.state = a.memoizedState),
        (s = t.getDerivedStateFromProps),
        typeof s == "function" && (Ou(a, t, s, l), (i.state = a.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function" ||
          (typeof i.UNSAFE_componentWillMount != "function" &&
            typeof i.componentWillMount != "function") ||
          ((s = i.state),
          typeof i.componentWillMount == "function" && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == "function" &&
            i.UNSAFE_componentWillMount(),
          s !== i.state && _u.enqueueReplaceState(i, i.state, null),
          rn(a, l, i, n),
          on(),
          (i.state = a.memoizedState)),
        typeof i.componentDidMount == "function" && (a.flags |= 4194308),
        (l = !0);
    } else if (e === null) {
      i = a.stateNode;
      var r = a.memoizedProps,
        h = Wt(t, r);
      i.props = h;
      var j = i.context,
        T = t.contextType;
      (s = ml), typeof T == "object" && T !== null && (s = Ve(T));
      var R = t.getDerivedStateFromProps;
      (T =
        typeof R == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function"),
        (r = a.pendingProps !== r),
        T ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((r || j !== s) && ef(a, i, l, s)),
        (pt = !1);
      var N = a.memoizedState;
      (i.state = N),
        rn(a, l, i, n),
        on(),
        (j = a.memoizedState),
        r || N !== j || pt
          ? (typeof R == "function" && (Ou(a, t, R, l), (j = a.memoizedState)),
            (h = pt || Pr(a, t, h, l, N, j, s))
              ? (T ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (a.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (a.flags |= 4194308),
                (a.memoizedProps = l),
                (a.memoizedState = j)),
            (i.props = l),
            (i.state = j),
            (i.context = s),
            (l = h))
          : (typeof i.componentDidMount == "function" && (a.flags |= 4194308),
            (l = !1));
    } else {
      (i = a.stateNode),
        uu(e, a),
        (s = a.memoizedProps),
        (T = Wt(t, s)),
        (i.props = T),
        (R = a.pendingProps),
        (N = i.context),
        (j = t.contextType),
        (h = ml),
        typeof j == "object" && j !== null && (h = Ve(j)),
        (r = t.getDerivedStateFromProps),
        (j =
          typeof r == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function") ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((s !== R || N !== h) && ef(a, i, l, h)),
        (pt = !1),
        (N = a.memoizedState),
        (i.state = N),
        rn(a, l, i, n),
        on();
      var z = a.memoizedState;
      s !== R ||
      N !== z ||
      pt ||
      (e !== null && e.dependencies !== null && ri(e.dependencies))
        ? (typeof r == "function" && (Ou(a, t, r, l), (z = a.memoizedState)),
          (T =
            pt ||
            Pr(a, t, T, l, N, z, h) ||
            (e !== null && e.dependencies !== null && ri(e.dependencies)))
            ? (j ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(l, z, h),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(l, z, h)),
              typeof i.componentDidUpdate == "function" && (a.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (a.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (s === e.memoizedProps && N === e.memoizedState) ||
                (a.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (s === e.memoizedProps && N === e.memoizedState) ||
                (a.flags |= 1024),
              (a.memoizedProps = l),
              (a.memoizedState = z)),
          (i.props = l),
          (i.state = z),
          (i.context = h),
          (l = T))
        : (typeof i.componentDidUpdate != "function" ||
            (s === e.memoizedProps && N === e.memoizedState) ||
            (a.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (s === e.memoizedProps && N === e.memoizedState) ||
            (a.flags |= 1024),
          (l = !1));
    }
    return (
      (i = l),
      Mi(e, a),
      (l = (a.flags & 128) !== 0),
      i || l
        ? ((i = a.stateNode),
          (t =
            l && typeof t.getDerivedStateFromError != "function"
              ? null
              : i.render()),
          (a.flags |= 1),
          e !== null && l
            ? ((a.child = kt(a, e.child, null, n)),
              (a.child = kt(a, null, t, n)))
            : Ke(e, a, t, n),
          (a.memoizedState = i.state),
          (e = a.child))
        : (e = Wa(e, a, n)),
      e
    );
  }
  function yf(e, a, t, l) {
    return Qt(), (a.flags |= 256), Ke(e, a, t, l), a.child;
  }
  var Uu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Hu(e) {
    return { baseLanes: e, cachePool: nr() };
  }
  function Lu(e, a, t) {
    return (e = e !== null ? e.childLanes & ~t : 0), a && (e |= va), e;
  }
  function vf(e, a, t) {
    var l = a.pendingProps,
      n = !1,
      i = (a.flags & 128) !== 0,
      s;
    if (
      ((s = i) ||
        (s =
          e !== null && e.memoizedState === null ? !1 : (_e.current & 2) !== 0),
      s && ((n = !0), (a.flags &= -129)),
      (s = (a.flags & 32) !== 0),
      (a.flags &= -33),
      e === null)
    ) {
      if (ue) {
        if (
          (n ? gt(a) : xt(),
          (e = Se)
            ? ((e = zd(e, za)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((a.memoizedState = {
                  dehydrated: e,
                  treeContext: ft !== null ? { id: Da, overflow: qa } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (t = $o(e)),
                (t.return = a),
                (a.child = t),
                (Ze = a),
                (Se = null)))
            : (e = null),
          e === null)
        )
          throw mt(a);
        return xc(e) ? (a.lanes = 32) : (a.lanes = 536870912), null;
      }
      var r = l.children;
      return (
        (l = l.fallback),
        n
          ? (xt(),
            (n = a.mode),
            (r = Oi({ mode: "hidden", children: r }, n)),
            (l = Xt(l, n, t, null)),
            (r.return = a),
            (l.return = a),
            (r.sibling = l),
            (a.child = r),
            (l = a.child),
            (l.memoizedState = Hu(t)),
            (l.childLanes = Lu(e, s, t)),
            (a.memoizedState = Uu),
            pn(null, l))
          : (gt(a), Bu(a, r))
      );
    }
    var h = e.memoizedState;
    if (h !== null && ((r = h.dehydrated), r !== null)) {
      if (i)
        a.flags & 256
          ? (gt(a), (a.flags &= -257), (a = Yu(e, a, t)))
          : a.memoizedState !== null
          ? (xt(), (a.child = e.child), (a.flags |= 128), (a = null))
          : (xt(),
            (r = l.fallback),
            (n = a.mode),
            (l = Oi({ mode: "visible", children: l.children }, n)),
            (r = Xt(r, n, t, null)),
            (r.flags |= 2),
            (l.return = a),
            (r.return = a),
            (l.sibling = r),
            (a.child = l),
            kt(a, e.child, null, t),
            (l = a.child),
            (l.memoizedState = Hu(t)),
            (l.childLanes = Lu(e, s, t)),
            (a.memoizedState = Uu),
            (a = pn(null, l)));
      else if ((gt(a), xc(r))) {
        if (((s = r.nextSibling && r.nextSibling.dataset), s)) var j = s.dgst;
        (s = j),
          (l = Error(o(419))),
          (l.stack = ""),
          (l.digest = s),
          tn({ value: l, source: null, stack: null }),
          (a = Yu(e, a, t));
      } else if (
        (Ue || vl(e, a, t, !1), (s = (t & e.childLanes) !== 0), Ue || s)
      ) {
        if (
          ((s = xe),
          s !== null && ((l = ao(s, t)), l !== 0 && l !== h.retryLane))
        )
          throw ((h.retryLane = l), Gt(e, l), sa(s, e, l), Du);
        gc(r) || Yi(), (a = Yu(e, a, t));
      } else
        gc(r)
          ? ((a.flags |= 192), (a.child = e.child), (a = null))
          : ((e = h.treeContext),
            (Se = Aa(r.nextSibling)),
            (Ze = a),
            (ue = !0),
            (dt = null),
            (za = !1),
            e !== null && Io(a, e),
            (a = Bu(a, l.children)),
            (a.flags |= 4096));
      return a;
    }
    return n
      ? (xt(),
        (r = l.fallback),
        (n = a.mode),
        (h = e.child),
        (j = h.sibling),
        (l = Za(h, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = h.subtreeFlags & 65011712),
        j !== null ? (r = Za(j, r)) : ((r = Xt(r, n, t, null)), (r.flags |= 2)),
        (r.return = a),
        (l.return = a),
        (l.sibling = r),
        (a.child = l),
        pn(null, l),
        (l = a.child),
        (r = e.child.memoizedState),
        r === null
          ? (r = Hu(t))
          : ((n = r.cachePool),
            n !== null
              ? ((h = De._currentValue),
                (n = n.parent !== h ? { parent: h, pool: h } : n))
              : (n = nr()),
            (r = { baseLanes: r.baseLanes | t, cachePool: n })),
        (l.memoizedState = r),
        (l.childLanes = Lu(e, s, t)),
        (a.memoizedState = Uu),
        pn(e.child, l))
      : (gt(a),
        (t = e.child),
        (e = t.sibling),
        (t = Za(t, { mode: "visible", children: l.children })),
        (t.return = a),
        (t.sibling = null),
        e !== null &&
          ((s = a.deletions),
          s === null ? ((a.deletions = [e]), (a.flags |= 16)) : s.push(e)),
        (a.child = t),
        (a.memoizedState = null),
        t);
  }
  function Bu(e, a) {
    return (
      (a = Oi({ mode: "visible", children: a }, e.mode)),
      (a.return = e),
      (e.child = a)
    );
  }
  function Oi(e, a) {
    return (e = ma(22, e, null, a)), (e.lanes = 0), e;
  }
  function Yu(e, a, t) {
    return (
      kt(a, e.child, null, t),
      (e = Bu(a, a.pendingProps.children)),
      (e.flags |= 2),
      (a.memoizedState = null),
      e
    );
  }
  function gf(e, a, t) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a), eu(e.return, a, t);
  }
  function Gu(e, a, t, l, n, i) {
    var s = e.memoizedState;
    s === null
      ? (e.memoizedState = {
          isBackwards: a,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: t,
          tailMode: n,
          treeForkCount: i,
        })
      : ((s.isBackwards = a),
        (s.rendering = null),
        (s.renderingStartTime = 0),
        (s.last = l),
        (s.tail = t),
        (s.tailMode = n),
        (s.treeForkCount = i));
  }
  function xf(e, a, t) {
    var l = a.pendingProps,
      n = l.revealOrder,
      i = l.tail;
    l = l.children;
    var s = _e.current,
      r = (s & 2) !== 0;
    if (
      (r ? ((s = (s & 1) | 2), (a.flags |= 128)) : (s &= 1),
      H(_e, s),
      Ke(e, a, l, t),
      (l = ue ? an : 0),
      !r && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = a.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && gf(e, t, a);
        else if (e.tag === 19) gf(e, t, a);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === a) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === a) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    switch (n) {
      case "forwards":
        for (t = a.child, n = null; t !== null; )
          (e = t.alternate),
            e !== null && gi(e) === null && (n = t),
            (t = t.sibling);
        (t = n),
          t === null
            ? ((n = a.child), (a.child = null))
            : ((n = t.sibling), (t.sibling = null)),
          Gu(a, !1, n, t, i, l);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (t = null, n = a.child, a.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && gi(e) === null)) {
            a.child = n;
            break;
          }
          (e = n.sibling), (n.sibling = t), (t = n), (n = e);
        }
        Gu(a, !0, t, null, i, l);
        break;
      case "together":
        Gu(a, !1, null, null, void 0, l);
        break;
      default:
        a.memoizedState = null;
    }
    return a.child;
  }
  function Wa(e, a, t) {
    if (
      (e !== null && (a.dependencies = e.dependencies),
      (jt |= a.lanes),
      (t & a.childLanes) === 0)
    )
      if (e !== null) {
        if ((vl(e, a, t, !1), (t & a.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && a.child !== e.child) throw Error(o(153));
    if (a.child !== null) {
      for (
        e = a.child, t = Za(e, e.pendingProps), a.child = t, t.return = a;
        e.sibling !== null;

      )
        (e = e.sibling),
          (t = t.sibling = Za(e, e.pendingProps)),
          (t.return = a);
      t.sibling = null;
    }
    return a.child;
  }
  function Xu(e, a) {
    return (e.lanes & a) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && ri(e)));
  }
  function Ih(e, a, t) {
    switch (a.tag) {
      case 3:
        We(a, a.stateNode.containerInfo),
          ht(a, De, e.memoizedState.cache),
          Qt();
        break;
      case 27:
      case 5:
        Gl(a);
        break;
      case 4:
        We(a, a.stateNode.containerInfo);
        break;
      case 10:
        ht(a, a.type, a.memoizedProps.value);
        break;
      case 31:
        if (a.memoizedState !== null) return (a.flags |= 128), du(a), null;
        break;
      case 13:
        var l = a.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (gt(a), (a.flags |= 128), null)
            : (t & a.child.childLanes) !== 0
            ? vf(e, a, t)
            : (gt(a), (e = Wa(e, a, t)), e !== null ? e.sibling : null);
        gt(a);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (
          ((l = (t & a.childLanes) !== 0),
          l || (vl(e, a, t, !1), (l = (t & a.childLanes) !== 0)),
          n)
        ) {
          if (l) return xf(e, a, t);
          a.flags |= 128;
        }
        if (
          ((n = a.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          H(_e, _e.current),
          l)
        )
          break;
        return null;
      case 22:
        return (a.lanes = 0), ff(e, a, t, a.pendingProps);
      case 24:
        ht(a, De, e.memoizedState.cache);
    }
    return Wa(e, a, t);
  }
  function bf(e, a, t) {
    if (e !== null)
      if (e.memoizedProps !== a.pendingProps) Ue = !0;
      else {
        if (!Xu(e, t) && (a.flags & 128) === 0) return (Ue = !1), Ih(e, a, t);
        Ue = (e.flags & 131072) !== 0;
      }
    else (Ue = !1), ue && (a.flags & 1048576) !== 0 && Fo(a, an, a.index);
    switch (((a.lanes = 0), a.tag)) {
      case 16:
        e: {
          var l = a.pendingProps;
          if (((e = Kt(a.elementType)), (a.type = e), typeof e == "function"))
            Ks(e)
              ? ((l = Wt(e, l)), (a.tag = 1), (a = pf(null, a, e, l, t)))
              : ((a.tag = 0), (a = qu(null, a, e, l, t)));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === Ne) {
                (a.tag = 11), (a = cf(null, a, e, l, t));
                break e;
              } else if (n === ee) {
                (a.tag = 14), (a = of(null, a, e, l, t));
                break e;
              }
            }
            throw ((a = Ga(e) || e), Error(o(306, a, "")));
          }
        }
        return a;
      case 0:
        return qu(e, a, a.type, a.pendingProps, t);
      case 1:
        return (l = a.type), (n = Wt(l, a.pendingProps)), pf(e, a, l, n, t);
      case 3:
        e: {
          if ((We(a, a.stateNode.containerInfo), e === null))
            throw Error(o(387));
          l = a.pendingProps;
          var i = a.memoizedState;
          (n = i.element), uu(e, a), rn(a, l, null, t);
          var s = a.memoizedState;
          if (
            ((l = s.cache),
            ht(a, De, l),
            l !== i.cache && au(a, [De], t, !0),
            on(),
            (l = s.element),
            i.isDehydrated)
          )
            if (
              ((i = { element: l, isDehydrated: !1, cache: s.cache }),
              (a.updateQueue.baseState = i),
              (a.memoizedState = i),
              a.flags & 256)
            ) {
              a = yf(e, a, l, t);
              break e;
            } else if (l !== n) {
              (n = ja(Error(o(424)), a)), tn(n), (a = yf(e, a, l, t));
              break e;
            } else {
              switch (((e = a.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                Se = Aa(e.firstChild),
                  Ze = a,
                  ue = !0,
                  dt = null,
                  za = !0,
                  t = rr(a, null, l, t),
                  a.child = t;
                t;

              )
                (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
            }
          else {
            if ((Qt(), l === n)) {
              a = Wa(e, a, t);
              break e;
            }
            Ke(e, a, l, t);
          }
          a = a.child;
        }
        return a;
      case 26:
        return (
          Mi(e, a),
          e === null
            ? (t = _d(a.type, null, a.pendingProps, null))
              ? (a.memoizedState = t)
              : ue ||
                ((t = a.type),
                (e = a.pendingProps),
                (l = Ki(te.current).createElement(t)),
                (l[we] = a),
                (l[ea] = e),
                Je(l, t, e),
                Ge(l),
                (a.stateNode = l))
            : (a.memoizedState = _d(
                a.type,
                e.memoizedProps,
                a.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          Gl(a),
          e === null &&
            ue &&
            ((l = a.stateNode = Cd(a.type, a.pendingProps, te.current)),
            (Ze = a),
            (za = !0),
            (n = Se),
            At(a.type) ? ((bc = n), (Se = Aa(l.firstChild))) : (Se = n)),
          Ke(e, a, a.pendingProps.children, t),
          Mi(e, a),
          e === null && (a.flags |= 4194304),
          a.child
        );
      case 5:
        return (
          e === null &&
            ue &&
            ((n = l = Se) &&
              ((l = Cp(l, a.type, a.pendingProps, za)),
              l !== null
                ? ((a.stateNode = l),
                  (Ze = a),
                  (Se = Aa(l.firstChild)),
                  (za = !1),
                  (n = !0))
                : (n = !1)),
            n || mt(a)),
          Gl(a),
          (n = a.type),
          (i = a.pendingProps),
          (s = e !== null ? e.memoizedProps : null),
          (l = i.children),
          pc(n, i) ? (l = null) : s !== null && pc(n, s) && (a.flags |= 32),
          a.memoizedState !== null &&
            ((n = hu(e, a, wh, null, null, t)), (On._currentValue = n)),
          Mi(e, a),
          Ke(e, a, l, t),
          a.child
        );
      case 6:
        return (
          e === null &&
            ue &&
            ((e = t = Se) &&
              ((t = Mp(t, a.pendingProps, za)),
              t !== null
                ? ((a.stateNode = t), (Ze = a), (Se = null), (e = !0))
                : (e = !1)),
            e || mt(a)),
          null
        );
      case 13:
        return vf(e, a, t);
      case 4:
        return (
          We(a, a.stateNode.containerInfo),
          (l = a.pendingProps),
          e === null ? (a.child = kt(a, null, l, t)) : Ke(e, a, l, t),
          a.child
        );
      case 11:
        return cf(e, a, a.type, a.pendingProps, t);
      case 7:
        return Ke(e, a, a.pendingProps, t), a.child;
      case 8:
        return Ke(e, a, a.pendingProps.children, t), a.child;
      case 12:
        return Ke(e, a, a.pendingProps.children, t), a.child;
      case 10:
        return (
          (l = a.pendingProps),
          ht(a, a.type, l.value),
          Ke(e, a, l.children, t),
          a.child
        );
      case 9:
        return (
          (n = a.type._context),
          (l = a.pendingProps.children),
          Zt(a),
          (n = Ve(n)),
          (l = l(n)),
          (a.flags |= 1),
          Ke(e, a, l, t),
          a.child
        );
      case 14:
        return of(e, a, a.type, a.pendingProps, t);
      case 15:
        return rf(e, a, a.type, a.pendingProps, t);
      case 19:
        return xf(e, a, t);
      case 31:
        return Fh(e, a, t);
      case 22:
        return ff(e, a, t, a.pendingProps);
      case 24:
        return (
          Zt(a),
          (l = Ve(De)),
          e === null
            ? ((n = nu()),
              n === null &&
                ((n = xe),
                (i = tu()),
                (n.pooledCache = i),
                i.refCount++,
                i !== null && (n.pooledCacheLanes |= t),
                (n = i)),
              (a.memoizedState = { parent: l, cache: n }),
              su(a),
              ht(a, De, n))
            : ((e.lanes & t) !== 0 && (uu(e, a), rn(a, null, null, t), on()),
              (n = e.memoizedState),
              (i = a.memoizedState),
              n.parent !== l
                ? ((n = { parent: l, cache: l }),
                  (a.memoizedState = n),
                  a.lanes === 0 &&
                    (a.memoizedState = a.updateQueue.baseState = n),
                  ht(a, De, l))
                : ((l = i.cache),
                  ht(a, De, l),
                  l !== n.cache && au(a, [De], t, !0))),
          Ke(e, a, a.pendingProps.children, t),
          a.child
        );
      case 29:
        throw a.pendingProps;
    }
    throw Error(o(156, a.tag));
  }
  function Fa(e) {
    e.flags |= 4;
  }
  function Qu(e, a, t, l, n) {
    if (((a = (e.mode & 32) !== 0) && (a = !1), a)) {
      if (((e.flags |= 16777216), (n & 335544128) === n))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Jf()) e.flags |= 8192;
        else throw ((Jt = hi), iu);
    } else e.flags &= -16777217;
  }
  function Sf(e, a) {
    if (a.type !== "stylesheet" || (a.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Hd(a)))
      if (Jf()) e.flags |= 8192;
      else throw ((Jt = hi), iu);
  }
  function _i(e, a) {
    a !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((a = e.tag !== 22 ? Ic() : 536870912), (e.lanes |= a), (Ml |= a));
  }
  function yn(e, a) {
    if (!ue)
      switch (e.tailMode) {
        case "hidden":
          a = e.tail;
          for (var t = null; a !== null; )
            a.alternate !== null && (t = a), (a = a.sibling);
          t === null ? (e.tail = null) : (t.sibling = null);
          break;
        case "collapsed":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), (t = t.sibling);
          l === null
            ? a || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function je(e) {
    var a = e.alternate !== null && e.alternate.child === e.child,
      t = 0,
      l = 0;
    if (a)
      for (var n = e.child; n !== null; )
        (t |= n.lanes | n.childLanes),
          (l |= n.subtreeFlags & 65011712),
          (l |= n.flags & 65011712),
          (n.return = e),
          (n = n.sibling);
    else
      for (n = e.child; n !== null; )
        (t |= n.lanes | n.childLanes),
          (l |= n.subtreeFlags),
          (l |= n.flags),
          (n.return = e),
          (n = n.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = t), a;
  }
  function Ph(e, a, t) {
    var l = a.pendingProps;
    switch ((Ws(a), a.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return je(a), null;
      case 1:
        return je(a), null;
      case 3:
        return (
          (t = a.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          a.memoizedState.cache !== l && (a.flags |= 2048),
          Ja(De),
          Oe(),
          t.pendingContext &&
            ((t.context = t.pendingContext), (t.pendingContext = null)),
          (e === null || e.child === null) &&
            (yl(a)
              ? Fa(a)
              : e === null ||
                (e.memoizedState.isDehydrated && (a.flags & 256) === 0) ||
                ((a.flags |= 1024), Is())),
          je(a),
          null
        );
      case 26:
        var n = a.type,
          i = a.memoizedState;
        return (
          e === null
            ? (Fa(a),
              i !== null ? (je(a), Sf(a, i)) : (je(a), Qu(a, n, null, l, t)))
            : i
            ? i !== e.memoizedState
              ? (Fa(a), je(a), Sf(a, i))
              : (je(a), (a.flags &= -16777217))
            : ((e = e.memoizedProps),
              e !== l && Fa(a),
              je(a),
              Qu(a, n, e, l, t)),
          null
        );
      case 27:
        if (
          (Qn(a),
          (t = te.current),
          (n = a.type),
          e !== null && a.stateNode != null)
        )
          e.memoizedProps !== l && Fa(a);
        else {
          if (!l) {
            if (a.stateNode === null) throw Error(o(166));
            return je(a), null;
          }
          (e = Y.current),
            yl(a) ? Po(a) : ((e = Cd(n, l, t)), (a.stateNode = e), Fa(a));
        }
        return je(a), null;
      case 5:
        if ((Qn(a), (n = a.type), e !== null && a.stateNode != null))
          e.memoizedProps !== l && Fa(a);
        else {
          if (!l) {
            if (a.stateNode === null) throw Error(o(166));
            return je(a), null;
          }
          if (((i = Y.current), yl(a))) Po(a);
          else {
            var s = Ki(te.current);
            switch (i) {
              case 1:
                i = s.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                i = s.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    i = s.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    i = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (i = s.createElement("div")),
                      (i.innerHTML = "<script></script>"),
                      (i = i.removeChild(i.firstChild));
                    break;
                  case "select":
                    (i =
                      typeof l.is == "string"
                        ? s.createElement("select", { is: l.is })
                        : s.createElement("select")),
                      l.multiple
                        ? (i.multiple = !0)
                        : l.size && (i.size = l.size);
                    break;
                  default:
                    i =
                      typeof l.is == "string"
                        ? s.createElement(n, { is: l.is })
                        : s.createElement(n);
                }
            }
            (i[we] = a), (i[ea] = l);
            e: for (s = a.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6) i.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                (s.child.return = s), (s = s.child);
                continue;
              }
              if (s === a) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === a) break e;
                s = s.return;
              }
              (s.sibling.return = s.return), (s = s.sibling);
            }
            a.stateNode = i;
            e: switch ((Je(i, n, l), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Fa(a);
          }
        }
        return (
          je(a),
          Qu(a, a.type, e === null ? null : e.memoizedProps, a.pendingProps, t),
          null
        );
      case 6:
        if (e && a.stateNode != null) e.memoizedProps !== l && Fa(a);
        else {
          if (typeof l != "string" && a.stateNode === null) throw Error(o(166));
          if (((e = te.current), yl(a))) {
            if (
              ((e = a.stateNode),
              (t = a.memoizedProps),
              (l = null),
              (n = Ze),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  l = n.memoizedProps;
              }
            (e[we] = a),
              (e = !!(
                e.nodeValue === t ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                vd(e.nodeValue, t)
              )),
              e || mt(a, !0);
          } else (e = Ki(e).createTextNode(l)), (e[we] = a), (a.stateNode = e);
        }
        return je(a), null;
      case 31:
        if (((t = a.memoizedState), e === null || e.memoizedState !== null)) {
          if (((l = yl(a)), t !== null)) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (
                ((e = a.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(o(557));
              e[we] = a;
            } else
              Qt(),
                (a.flags & 128) === 0 && (a.memoizedState = null),
                (a.flags |= 4);
            je(a), (e = !1);
          } else
            (t = Is()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = t),
              (e = !0);
          if (!e) return a.flags & 256 ? (pa(a), a) : (pa(a), null);
          if ((a.flags & 128) !== 0) throw Error(o(558));
        }
        return je(a), null;
      case 13:
        if (
          ((l = a.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = yl(a)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(o(318));
              if (
                ((n = a.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(o(317));
              n[we] = a;
            } else
              Qt(),
                (a.flags & 128) === 0 && (a.memoizedState = null),
                (a.flags |= 4);
            je(a), (n = !1);
          } else
            (n = Is()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (n = !0);
          if (!n) return a.flags & 256 ? (pa(a), a) : (pa(a), null);
        }
        return (
          pa(a),
          (a.flags & 128) !== 0
            ? ((a.lanes = t), a)
            : ((t = l !== null),
              (e = e !== null && e.memoizedState !== null),
              t &&
                ((l = a.child),
                (n = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (n = l.alternate.memoizedState.cachePool.pool),
                (i = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (i = l.memoizedState.cachePool.pool),
                i !== n && (l.flags |= 2048)),
              t !== e && t && (a.child.flags |= 8192),
              _i(a, a.updateQueue),
              je(a),
              null)
        );
      case 4:
        return Oe(), e === null && rc(a.stateNode.containerInfo), je(a), null;
      case 10:
        return Ja(a.type), je(a), null;
      case 19:
        if ((q(_e), (l = a.memoizedState), l === null)) return je(a), null;
        if (((n = (a.flags & 128) !== 0), (i = l.rendering), i === null))
          if (n) yn(l, !1);
          else {
            if (Me !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = a.child; e !== null; ) {
                if (((i = gi(e)), i !== null)) {
                  for (
                    a.flags |= 128,
                      yn(l, !1),
                      e = i.updateQueue,
                      a.updateQueue = e,
                      _i(a, e),
                      a.subtreeFlags = 0,
                      e = t,
                      t = a.child;
                    t !== null;

                  )
                    ko(t, e), (t = t.sibling);
                  return (
                    H(_e, (_e.current & 1) | 2),
                    ue && Va(a, l.treeForkCount),
                    a.child
                  );
                }
                e = e.sibling;
              }
            l.tail !== null &&
              oa() > Hi &&
              ((a.flags |= 128), (n = !0), yn(l, !1), (a.lanes = 4194304));
          }
        else {
          if (!n)
            if (((e = gi(i)), e !== null)) {
              if (
                ((a.flags |= 128),
                (n = !0),
                (e = e.updateQueue),
                (a.updateQueue = e),
                _i(a, e),
                yn(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !i.alternate &&
                  !ue)
              )
                return je(a), null;
            } else
              2 * oa() - l.renderingStartTime > Hi &&
                t !== 536870912 &&
                ((a.flags |= 128), (n = !0), yn(l, !1), (a.lanes = 4194304));
          l.isBackwards
            ? ((i.sibling = a.child), (a.child = i))
            : ((e = l.last),
              e !== null ? (e.sibling = i) : (a.child = i),
              (l.last = i));
        }
        return l.tail !== null
          ? ((e = l.tail),
            (l.rendering = e),
            (l.tail = e.sibling),
            (l.renderingStartTime = oa()),
            (e.sibling = null),
            (t = _e.current),
            H(_e, n ? (t & 1) | 2 : t & 1),
            ue && Va(a, l.treeForkCount),
            e)
          : (je(a), null);
      case 22:
      case 23:
        return (
          pa(a),
          fu(),
          (l = a.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (a.flags |= 8192)
            : l && (a.flags |= 8192),
          l
            ? (t & 536870912) !== 0 &&
              (a.flags & 128) === 0 &&
              (je(a), a.subtreeFlags & 6 && (a.flags |= 8192))
            : je(a),
          (t = a.updateQueue),
          t !== null && _i(a, t.retryQueue),
          (t = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (t = e.memoizedState.cachePool.pool),
          (l = null),
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (l = a.memoizedState.cachePool.pool),
          l !== t && (a.flags |= 2048),
          e !== null && q(Vt),
          null
        );
      case 24:
        return (
          (t = null),
          e !== null && (t = e.memoizedState.cache),
          a.memoizedState.cache !== t && (a.flags |= 2048),
          Ja(De),
          je(a),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, a.tag));
  }
  function ep(e, a) {
    switch ((Ws(a), a.tag)) {
      case 1:
        return (
          (e = a.flags), e & 65536 ? ((a.flags = (e & -65537) | 128), a) : null
        );
      case 3:
        return (
          Ja(De),
          Oe(),
          (e = a.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((a.flags = (e & -65537) | 128), a)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Qn(a), null;
      case 31:
        if (a.memoizedState !== null) {
          if ((pa(a), a.alternate === null)) throw Error(o(340));
          Qt();
        }
        return (
          (e = a.flags), e & 65536 ? ((a.flags = (e & -65537) | 128), a) : null
        );
      case 13:
        if (
          (pa(a), (e = a.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (a.alternate === null) throw Error(o(340));
          Qt();
        }
        return (
          (e = a.flags), e & 65536 ? ((a.flags = (e & -65537) | 128), a) : null
        );
      case 19:
        return q(_e), null;
      case 4:
        return Oe(), null;
      case 10:
        return Ja(a.type), null;
      case 22:
      case 23:
        return (
          pa(a),
          fu(),
          e !== null && q(Vt),
          (e = a.flags),
          e & 65536 ? ((a.flags = (e & -65537) | 128), a) : null
        );
      case 24:
        return Ja(De), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function jf(e, a) {
    switch ((Ws(a), a.tag)) {
      case 3:
        Ja(De), Oe();
        break;
      case 26:
      case 27:
      case 5:
        Qn(a);
        break;
      case 4:
        Oe();
        break;
      case 31:
        a.memoizedState !== null && pa(a);
        break;
      case 13:
        pa(a);
        break;
      case 19:
        q(_e);
        break;
      case 10:
        Ja(a.type);
        break;
      case 22:
      case 23:
        pa(a), fu(), e !== null && q(Vt);
        break;
      case 24:
        Ja(De);
    }
  }
  function vn(e, a) {
    try {
      var t = a.updateQueue,
        l = t !== null ? t.lastEffect : null;
      if (l !== null) {
        var n = l.next;
        t = n;
        do {
          if ((t.tag & e) === e) {
            l = void 0;
            var i = t.create,
              s = t.inst;
            (l = i()), (s.destroy = l);
          }
          t = t.next;
        } while (t !== n);
      }
    } catch (r) {
      me(a, a.return, r);
    }
  }
  function bt(e, a, t) {
    try {
      var l = a.updateQueue,
        n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        l = i;
        do {
          if ((l.tag & e) === e) {
            var s = l.inst,
              r = s.destroy;
            if (r !== void 0) {
              (s.destroy = void 0), (n = a);
              var h = t,
                j = r;
              try {
                j();
              } catch (T) {
                me(n, h, T);
              }
            }
          }
          l = l.next;
        } while (l !== i);
      }
    } catch (T) {
      me(a, a.return, T);
    }
  }
  function Nf(e) {
    var a = e.updateQueue;
    if (a !== null) {
      var t = e.stateNode;
      try {
        dr(a, t);
      } catch (l) {
        me(e, e.return, l);
      }
    }
  }
  function Ef(e, a, t) {
    (t.props = Wt(e.type, e.memoizedProps)), (t.state = e.memoizedState);
    try {
      t.componentWillUnmount();
    } catch (l) {
      me(e, a, l);
    }
  }
  function gn(e, a) {
    try {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof t == "function" ? (e.refCleanup = t(l)) : (t.current = l);
      }
    } catch (n) {
      me(e, a, n);
    }
  }
  function Ua(e, a) {
    var t = e.ref,
      l = e.refCleanup;
    if (t !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (n) {
          me(e, a, n);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof t == "function")
        try {
          t(null);
        } catch (n) {
          me(e, a, n);
        }
      else t.current = null;
  }
  function zf(e) {
    var a = e.type,
      t = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (a) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          t.autoFocus && l.focus();
          break e;
        case "img":
          t.src ? (l.src = t.src) : t.srcSet && (l.srcset = t.srcSet);
      }
    } catch (n) {
      me(e, e.return, n);
    }
  }
  function wu(e, a, t) {
    try {
      var l = e.stateNode;
      jp(l, e.type, t, a), (l[ea] = a);
    } catch (n) {
      me(e, e.return, n);
    }
  }
  function Tf(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && At(e.type)) ||
      e.tag === 4
    );
  }
  function Zu(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Tf(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && At(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Vu(e, a, t) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        a
          ? (t.nodeType === 9
              ? t.body
              : t.nodeName === "HTML"
              ? t.ownerDocument.body
              : t
            ).insertBefore(e, a)
          : ((a =
              t.nodeType === 9
                ? t.body
                : t.nodeName === "HTML"
                ? t.ownerDocument.body
                : t),
            a.appendChild(e),
            (t = t._reactRootContainer),
            t != null || a.onclick !== null || (a.onclick = Qa));
    else if (
      l !== 4 &&
      (l === 27 && At(e.type) && ((t = e.stateNode), (a = null)),
      (e = e.child),
      e !== null)
    )
      for (Vu(e, a, t), e = e.sibling; e !== null; )
        Vu(e, a, t), (e = e.sibling);
  }
  function Ri(e, a, t) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), a ? t.insertBefore(e, a) : t.appendChild(e);
    else if (
      l !== 4 &&
      (l === 27 && At(e.type) && (t = e.stateNode), (e = e.child), e !== null)
    )
      for (Ri(e, a, t), e = e.sibling; e !== null; )
        Ri(e, a, t), (e = e.sibling);
  }
  function Af(e) {
    var a = e.stateNode,
      t = e.memoizedProps;
    try {
      for (var l = e.type, n = a.attributes; n.length; )
        a.removeAttributeNode(n[0]);
      Je(a, l, t), (a[we] = e), (a[ea] = t);
    } catch (i) {
      me(e, e.return, i);
    }
  }
  var Ia = !1,
    He = !1,
    Ku = !1,
    Cf = typeof WeakSet == "function" ? WeakSet : Set,
    Xe = null;
  function ap(e, a) {
    if (((e = e.containerInfo), (mc = Pi), (e = Yo(e)), Ys(e))) {
      if ("selectionStart" in e)
        var t = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          t = ((t = e.ownerDocument) && t.defaultView) || window;
          var l = t.getSelection && t.getSelection();
          if (l && l.rangeCount !== 0) {
            t = l.anchorNode;
            var n = l.anchorOffset,
              i = l.focusNode;
            l = l.focusOffset;
            try {
              t.nodeType, i.nodeType;
            } catch {
              t = null;
              break e;
            }
            var s = 0,
              r = -1,
              h = -1,
              j = 0,
              T = 0,
              R = e,
              N = null;
            a: for (;;) {
              for (
                var z;
                R !== t || (n !== 0 && R.nodeType !== 3) || (r = s + n),
                  R !== i || (l !== 0 && R.nodeType !== 3) || (h = s + l),
                  R.nodeType === 3 && (s += R.nodeValue.length),
                  (z = R.firstChild) !== null;

              )
                (N = R), (R = z);
              for (;;) {
                if (R === e) break a;
                if (
                  (N === t && ++j === n && (r = s),
                  N === i && ++T === l && (h = s),
                  (z = R.nextSibling) !== null)
                )
                  break;
                (R = N), (N = R.parentNode);
              }
              R = z;
            }
            t = r === -1 || h === -1 ? null : { start: r, end: h };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (
      hc = { focusedElem: e, selectionRange: t }, Pi = !1, Xe = a;
      Xe !== null;

    )
      if (
        ((a = Xe), (e = a.child), (a.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = a), (Xe = e);
      else
        for (; Xe !== null; ) {
          switch (((a = Xe), (i = a.alternate), (e = a.flags), a.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = a.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (t = 0; t < e.length; t++)
                  (n = e[t]), (n.ref.impl = n.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                (e = void 0),
                  (t = a),
                  (n = i.memoizedProps),
                  (i = i.memoizedState),
                  (l = t.stateNode);
                try {
                  var B = Wt(t.type, n);
                  (e = l.getSnapshotBeforeUpdate(B, i)),
                    (l.__reactInternalSnapshotBeforeUpdate = e);
                } catch (J) {
                  me(t, t.return, J);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = a.stateNode.containerInfo), (t = e.nodeType), t === 9)
                )
                  vc(e);
                else if (t === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      vc(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (((e = a.sibling), e !== null)) {
            (e.return = a.return), (Xe = e);
            break;
          }
          Xe = a.return;
        }
  }
  function Mf(e, a, t) {
    var l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        et(e, t), l & 4 && vn(5, t);
        break;
      case 1:
        if ((et(e, t), l & 4))
          if (((e = t.stateNode), a === null))
            try {
              e.componentDidMount();
            } catch (s) {
              me(t, t.return, s);
            }
          else {
            var n = Wt(t.type, a.memoizedProps);
            a = a.memoizedState;
            try {
              e.componentDidUpdate(n, a, e.__reactInternalSnapshotBeforeUpdate);
            } catch (s) {
              me(t, t.return, s);
            }
          }
        l & 64 && Nf(t), l & 512 && gn(t, t.return);
        break;
      case 3:
        if ((et(e, t), l & 64 && ((e = t.updateQueue), e !== null))) {
          if (((a = null), t.child !== null))
            switch (t.child.tag) {
              case 27:
              case 5:
                a = t.child.stateNode;
                break;
              case 1:
                a = t.child.stateNode;
            }
          try {
            dr(e, a);
          } catch (s) {
            me(t, t.return, s);
          }
        }
        break;
      case 27:
        a === null && l & 4 && Af(t);
      case 26:
      case 5:
        et(e, t), a === null && l & 4 && zf(t), l & 512 && gn(t, t.return);
        break;
      case 12:
        et(e, t);
        break;
      case 31:
        et(e, t), l & 4 && Rf(e, t);
        break;
      case 13:
        et(e, t),
          l & 4 && Df(e, t),
          l & 64 &&
            ((e = t.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((t = rp.bind(null, t)), Op(e, t))));
        break;
      case 22:
        if (((l = t.memoizedState !== null || Ia), !l)) {
          (a = (a !== null && a.memoizedState !== null) || He), (n = Ia);
          var i = He;
          (Ia = l),
            (He = a) && !i ? at(e, t, (t.subtreeFlags & 8772) !== 0) : et(e, t),
            (Ia = n),
            (He = i);
        }
        break;
      case 30:
        break;
      default:
        et(e, t);
    }
  }
  function Of(e) {
    var a = e.alternate;
    a !== null && ((e.alternate = null), Of(a)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((a = e.stateNode), a !== null && js(a)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Ee = null,
    ta = !1;
  function Pa(e, a, t) {
    for (t = t.child; t !== null; ) _f(e, a, t), (t = t.sibling);
  }
  function _f(e, a, t) {
    if (ra && typeof ra.onCommitFiberUnmount == "function")
      try {
        ra.onCommitFiberUnmount(Xl, t);
      } catch {}
    switch (t.tag) {
      case 26:
        He || Ua(t, a),
          Pa(e, a, t),
          t.memoizedState
            ? t.memoizedState.count--
            : t.stateNode && ((t = t.stateNode), t.parentNode.removeChild(t));
        break;
      case 27:
        He || Ua(t, a);
        var l = Ee,
          n = ta;
        At(t.type) && ((Ee = t.stateNode), (ta = !1)),
          Pa(e, a, t),
          An(t.stateNode),
          (Ee = l),
          (ta = n);
        break;
      case 5:
        He || Ua(t, a);
      case 6:
        if (
          ((l = Ee),
          (n = ta),
          (Ee = null),
          Pa(e, a, t),
          (Ee = l),
          (ta = n),
          Ee !== null)
        )
          if (ta)
            try {
              (Ee.nodeType === 9
                ? Ee.body
                : Ee.nodeName === "HTML"
                ? Ee.ownerDocument.body
                : Ee
              ).removeChild(t.stateNode);
            } catch (i) {
              me(t, a, i);
            }
          else
            try {
              Ee.removeChild(t.stateNode);
            } catch (i) {
              me(t, a, i);
            }
        break;
      case 18:
        Ee !== null &&
          (ta
            ? ((e = Ee),
              Nd(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e,
                t.stateNode
              ),
              Ll(e))
            : Nd(Ee, t.stateNode));
        break;
      case 4:
        (l = Ee),
          (n = ta),
          (Ee = t.stateNode.containerInfo),
          (ta = !0),
          Pa(e, a, t),
          (Ee = l),
          (ta = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        bt(2, t, a), He || bt(4, t, a), Pa(e, a, t);
        break;
      case 1:
        He ||
          (Ua(t, a),
          (l = t.stateNode),
          typeof l.componentWillUnmount == "function" && Ef(t, a, l)),
          Pa(e, a, t);
        break;
      case 21:
        Pa(e, a, t);
        break;
      case 22:
        (He = (l = He) || t.memoizedState !== null), Pa(e, a, t), (He = l);
        break;
      default:
        Pa(e, a, t);
    }
  }
  function Rf(e, a) {
    if (
      a.memoizedState === null &&
      ((e = a.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Ll(e);
      } catch (t) {
        me(a, a.return, t);
      }
    }
  }
  function Df(e, a) {
    if (
      a.memoizedState === null &&
      ((e = a.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ll(e);
      } catch (t) {
        me(a, a.return, t);
      }
  }
  function tp(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var a = e.stateNode;
        return a === null && (a = e.stateNode = new Cf()), a;
      case 22:
        return (
          (e = e.stateNode),
          (a = e._retryCache),
          a === null && (a = e._retryCache = new Cf()),
          a
        );
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Di(e, a) {
    var t = tp(e);
    a.forEach(function (l) {
      if (!t.has(l)) {
        t.add(l);
        var n = fp.bind(null, e, l);
        l.then(n, n);
      }
    });
  }
  function la(e, a) {
    var t = a.deletions;
    if (t !== null)
      for (var l = 0; l < t.length; l++) {
        var n = t[l],
          i = e,
          s = a,
          r = s;
        e: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
              if (At(r.type)) {
                (Ee = r.stateNode), (ta = !1);
                break e;
              }
              break;
            case 5:
              (Ee = r.stateNode), (ta = !1);
              break e;
            case 3:
            case 4:
              (Ee = r.stateNode.containerInfo), (ta = !0);
              break e;
          }
          r = r.return;
        }
        if (Ee === null) throw Error(o(160));
        _f(i, s, n),
          (Ee = null),
          (ta = !1),
          (i = n.alternate),
          i !== null && (i.return = null),
          (n.return = null);
      }
    if (a.subtreeFlags & 13886)
      for (a = a.child; a !== null; ) qf(a, e), (a = a.sibling);
  }
  var _a = null;
  function qf(e, a) {
    var t = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        la(a, e),
          na(e),
          l & 4 && (bt(3, e, e.return), vn(3, e), bt(5, e, e.return));
        break;
      case 1:
        la(a, e),
          na(e),
          l & 512 && (He || t === null || Ua(t, t.return)),
          l & 64 &&
            Ia &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((t = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = t === null ? l : t.concat(l)))));
        break;
      case 26:
        var n = _a;
        if (
          (la(a, e),
          na(e),
          l & 512 && (He || t === null || Ua(t, t.return)),
          l & 4)
        ) {
          var i = t !== null ? t.memoizedState : null;
          if (((l = e.memoizedState), t === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  (l = e.type),
                    (t = e.memoizedProps),
                    (n = n.ownerDocument || n);
                  a: switch (l) {
                    case "title":
                      (i = n.getElementsByTagName("title")[0]),
                        (!i ||
                          i[Zl] ||
                          i[we] ||
                          i.namespaceURI === "http://www.w3.org/2000/svg" ||
                          i.hasAttribute("itemprop")) &&
                          ((i = n.createElement(l)),
                          n.head.insertBefore(
                            i,
                            n.querySelector("head > title")
                          )),
                        Je(i, l, t),
                        (i[we] = e),
                        Ge(i),
                        (l = i);
                      break e;
                    case "link":
                      var s = qd("link", "href", n).get(l + (t.href || ""));
                      if (s) {
                        for (var r = 0; r < s.length; r++)
                          if (
                            ((i = s[r]),
                            i.getAttribute("href") ===
                              (t.href == null || t.href === ""
                                ? null
                                : t.href) &&
                              i.getAttribute("rel") ===
                                (t.rel == null ? null : t.rel) &&
                              i.getAttribute("title") ===
                                (t.title == null ? null : t.title) &&
                              i.getAttribute("crossorigin") ===
                                (t.crossOrigin == null ? null : t.crossOrigin))
                          ) {
                            s.splice(r, 1);
                            break a;
                          }
                      }
                      (i = n.createElement(l)),
                        Je(i, l, t),
                        n.head.appendChild(i);
                      break;
                    case "meta":
                      if (
                        (s = qd("meta", "content", n).get(
                          l + (t.content || "")
                        ))
                      ) {
                        for (r = 0; r < s.length; r++)
                          if (
                            ((i = s[r]),
                            i.getAttribute("content") ===
                              (t.content == null ? null : "" + t.content) &&
                              i.getAttribute("name") ===
                                (t.name == null ? null : t.name) &&
                              i.getAttribute("property") ===
                                (t.property == null ? null : t.property) &&
                              i.getAttribute("http-equiv") ===
                                (t.httpEquiv == null ? null : t.httpEquiv) &&
                              i.getAttribute("charset") ===
                                (t.charSet == null ? null : t.charSet))
                          ) {
                            s.splice(r, 1);
                            break a;
                          }
                      }
                      (i = n.createElement(l)),
                        Je(i, l, t),
                        n.head.appendChild(i);
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  (i[we] = e), Ge(i), (l = i);
                }
                e.stateNode = l;
              } else Ud(n, e.type, e.stateNode);
            else e.stateNode = Dd(n, l, e.memoizedProps);
          else
            i !== l
              ? (i === null
                  ? t.stateNode !== null &&
                    ((t = t.stateNode), t.parentNode.removeChild(t))
                  : i.count--,
                l === null
                  ? Ud(n, e.type, e.stateNode)
                  : Dd(n, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                wu(e, e.memoizedProps, t.memoizedProps);
        }
        break;
      case 27:
        la(a, e),
          na(e),
          l & 512 && (He || t === null || Ua(t, t.return)),
          t !== null && l & 4 && wu(e, e.memoizedProps, t.memoizedProps);
        break;
      case 5:
        if (
          (la(a, e),
          na(e),
          l & 512 && (He || t === null || Ua(t, t.return)),
          e.flags & 32)
        ) {
          n = e.stateNode;
          try {
            sl(n, "");
          } catch (B) {
            me(e, e.return, B);
          }
        }
        l & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), wu(e, n, t !== null ? t.memoizedProps : n)),
          l & 1024 && (Ku = !0);
        break;
      case 6:
        if ((la(a, e), na(e), l & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (l = e.memoizedProps), (t = e.stateNode);
          try {
            t.nodeValue = l;
          } catch (B) {
            me(e, e.return, B);
          }
        }
        break;
      case 3:
        if (
          (($i = null),
          (n = _a),
          (_a = Ji(a.containerInfo)),
          la(a, e),
          (_a = n),
          na(e),
          l & 4 && t !== null && t.memoizedState.isDehydrated)
        )
          try {
            Ll(a.containerInfo);
          } catch (B) {
            me(e, e.return, B);
          }
        Ku && ((Ku = !1), Uf(e));
        break;
      case 4:
        (l = _a),
          (_a = Ji(e.stateNode.containerInfo)),
          la(a, e),
          na(e),
          (_a = l);
        break;
      case 12:
        la(a, e), na(e);
        break;
      case 31:
        la(a, e),
          na(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Di(e, l)));
        break;
      case 13:
        la(a, e),
          na(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (t !== null && t.memoizedState !== null) &&
            (Ui = oa()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Di(e, l)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var h = t !== null && t.memoizedState !== null,
          j = Ia,
          T = He;
        if (
          ((Ia = j || n),
          (He = T || h),
          la(a, e),
          (He = T),
          (Ia = j),
          na(e),
          l & 8192)
        )
          e: for (
            a = e.stateNode,
              a._visibility = n ? a._visibility & -2 : a._visibility | 1,
              n && (t === null || h || Ia || He || Ft(e)),
              t = null,
              a = e;
            ;

          ) {
            if (a.tag === 5 || a.tag === 26) {
              if (t === null) {
                h = t = a;
                try {
                  if (((i = h.stateNode), n))
                    (s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none");
                  else {
                    r = h.stateNode;
                    var R = h.memoizedProps.style,
                      N =
                        R != null && R.hasOwnProperty("display")
                          ? R.display
                          : null;
                    r.style.display =
                      N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                  }
                } catch (B) {
                  me(h, h.return, B);
                }
              }
            } else if (a.tag === 6) {
              if (t === null) {
                h = a;
                try {
                  h.stateNode.nodeValue = n ? "" : h.memoizedProps;
                } catch (B) {
                  me(h, h.return, B);
                }
              }
            } else if (a.tag === 18) {
              if (t === null) {
                h = a;
                try {
                  var z = h.stateNode;
                  n ? Ed(z, !0) : Ed(h.stateNode, !1);
                } catch (B) {
                  me(h, h.return, B);
                }
              }
            } else if (
              ((a.tag !== 22 && a.tag !== 23) ||
                a.memoizedState === null ||
                a === e) &&
              a.child !== null
            ) {
              (a.child.return = a), (a = a.child);
              continue;
            }
            if (a === e) break e;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === e) break e;
              t === a && (t = null), (a = a.return);
            }
            t === a && (t = null),
              (a.sibling.return = a.return),
              (a = a.sibling);
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((t = l.retryQueue),
            t !== null && ((l.retryQueue = null), Di(e, t))));
        break;
      case 19:
        la(a, e),
          na(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Di(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        la(a, e), na(e);
    }
  }
  function na(e) {
    var a = e.flags;
    if (a & 2) {
      try {
        for (var t, l = e.return; l !== null; ) {
          if (Tf(l)) {
            t = l;
            break;
          }
          l = l.return;
        }
        if (t == null) throw Error(o(160));
        switch (t.tag) {
          case 27:
            var n = t.stateNode,
              i = Zu(e);
            Ri(e, i, n);
            break;
          case 5:
            var s = t.stateNode;
            t.flags & 32 && (sl(s, ""), (t.flags &= -33));
            var r = Zu(e);
            Ri(e, r, s);
            break;
          case 3:
          case 4:
            var h = t.stateNode.containerInfo,
              j = Zu(e);
            Vu(e, j, h);
            break;
          default:
            throw Error(o(161));
        }
      } catch (T) {
        me(e, e.return, T);
      }
      e.flags &= -3;
    }
    a & 4096 && (e.flags &= -4097);
  }
  function Uf(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var a = e;
        Uf(a),
          a.tag === 5 && a.flags & 1024 && a.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function et(e, a) {
    if (a.subtreeFlags & 8772)
      for (a = a.child; a !== null; ) Mf(e, a.alternate, a), (a = a.sibling);
  }
  function Ft(e) {
    for (e = e.child; e !== null; ) {
      var a = e;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          bt(4, a, a.return), Ft(a);
          break;
        case 1:
          Ua(a, a.return);
          var t = a.stateNode;
          typeof t.componentWillUnmount == "function" && Ef(a, a.return, t),
            Ft(a);
          break;
        case 27:
          An(a.stateNode);
        case 26:
        case 5:
          Ua(a, a.return), Ft(a);
          break;
        case 22:
          a.memoizedState === null && Ft(a);
          break;
        case 30:
          Ft(a);
          break;
        default:
          Ft(a);
      }
      e = e.sibling;
    }
  }
  function at(e, a, t) {
    for (t = t && (a.subtreeFlags & 8772) !== 0, a = a.child; a !== null; ) {
      var l = a.alternate,
        n = e,
        i = a,
        s = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          at(n, i, t), vn(4, i);
          break;
        case 1:
          if (
            (at(n, i, t),
            (l = i),
            (n = l.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (j) {
              me(l, l.return, j);
            }
          if (((l = i), (n = l.updateQueue), n !== null)) {
            var r = l.stateNode;
            try {
              var h = n.shared.hiddenCallbacks;
              if (h !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < h.length; n++)
                  fr(h[n], r);
            } catch (j) {
              me(l, l.return, j);
            }
          }
          t && s & 64 && Nf(i), gn(i, i.return);
          break;
        case 27:
          Af(i);
        case 26:
        case 5:
          at(n, i, t), t && l === null && s & 4 && zf(i), gn(i, i.return);
          break;
        case 12:
          at(n, i, t);
          break;
        case 31:
          at(n, i, t), t && s & 4 && Rf(n, i);
          break;
        case 13:
          at(n, i, t), t && s & 4 && Df(n, i);
          break;
        case 22:
          i.memoizedState === null && at(n, i, t), gn(i, i.return);
          break;
        case 30:
          break;
        default:
          at(n, i, t);
      }
      a = a.sibling;
    }
  }
  function Ju(e, a) {
    var t = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (t = e.memoizedState.cachePool.pool),
      (e = null),
      a.memoizedState !== null &&
        a.memoizedState.cachePool !== null &&
        (e = a.memoizedState.cachePool.pool),
      e !== t && (e != null && e.refCount++, t != null && ln(t));
  }
  function ku(e, a) {
    (e = null),
      a.alternate !== null && (e = a.alternate.memoizedState.cache),
      (a = a.memoizedState.cache),
      a !== e && (a.refCount++, e != null && ln(e));
  }
  function Ra(e, a, t, l) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) Hf(e, a, t, l), (a = a.sibling);
  }
  function Hf(e, a, t, l) {
    var n = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Ra(e, a, t, l), n & 2048 && vn(9, a);
        break;
      case 1:
        Ra(e, a, t, l);
        break;
      case 3:
        Ra(e, a, t, l),
          n & 2048 &&
            ((e = null),
            a.alternate !== null && (e = a.alternate.memoizedState.cache),
            (a = a.memoizedState.cache),
            a !== e && (a.refCount++, e != null && ln(e)));
        break;
      case 12:
        if (n & 2048) {
          Ra(e, a, t, l), (e = a.stateNode);
          try {
            var i = a.memoizedProps,
              s = i.id,
              r = i.onPostCommit;
            typeof r == "function" &&
              r(
                s,
                a.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (h) {
            me(a, a.return, h);
          }
        } else Ra(e, a, t, l);
        break;
      case 31:
        Ra(e, a, t, l);
        break;
      case 13:
        Ra(e, a, t, l);
        break;
      case 23:
        break;
      case 22:
        (i = a.stateNode),
          (s = a.alternate),
          a.memoizedState !== null
            ? i._visibility & 2
              ? Ra(e, a, t, l)
              : xn(e, a)
            : i._visibility & 2
            ? Ra(e, a, t, l)
            : ((i._visibility |= 2),
              Tl(e, a, t, l, (a.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && Ju(s, a);
        break;
      case 24:
        Ra(e, a, t, l), n & 2048 && ku(a.alternate, a);
        break;
      default:
        Ra(e, a, t, l);
    }
  }
  function Tl(e, a, t, l, n) {
    for (
      n = n && ((a.subtreeFlags & 10256) !== 0 || !1), a = a.child;
      a !== null;

    ) {
      var i = e,
        s = a,
        r = t,
        h = l,
        j = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Tl(i, s, r, h, n), vn(8, s);
          break;
        case 23:
          break;
        case 22:
          var T = s.stateNode;
          s.memoizedState !== null
            ? T._visibility & 2
              ? Tl(i, s, r, h, n)
              : xn(i, s)
            : ((T._visibility |= 2), Tl(i, s, r, h, n)),
            n && j & 2048 && Ju(s.alternate, s);
          break;
        case 24:
          Tl(i, s, r, h, n), n && j & 2048 && ku(s.alternate, s);
          break;
        default:
          Tl(i, s, r, h, n);
      }
      a = a.sibling;
    }
  }
  function xn(e, a) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) {
        var t = e,
          l = a,
          n = l.flags;
        switch (l.tag) {
          case 22:
            xn(t, l), n & 2048 && Ju(l.alternate, l);
            break;
          case 24:
            xn(t, l), n & 2048 && ku(l.alternate, l);
            break;
          default:
            xn(t, l);
        }
        a = a.sibling;
      }
  }
  var bn = 8192;
  function Al(e, a, t) {
    if (e.subtreeFlags & bn)
      for (e = e.child; e !== null; ) Lf(e, a, t), (e = e.sibling);
  }
  function Lf(e, a, t) {
    switch (e.tag) {
      case 26:
        Al(e, a, t),
          e.flags & bn &&
            e.memoizedState !== null &&
            Qp(t, _a, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Al(e, a, t);
        break;
      case 3:
      case 4:
        var l = _a;
        (_a = Ji(e.stateNode.containerInfo)), Al(e, a, t), (_a = l);
        break;
      case 22:
        e.memoizedState === null &&
          ((l = e.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = bn), (bn = 16777216), Al(e, a, t), (bn = l))
            : Al(e, a, t));
        break;
      default:
        Al(e, a, t);
    }
  }
  function Bf(e) {
    var a = e.alternate;
    if (a !== null && ((e = a.child), e !== null)) {
      a.child = null;
      do (a = e.sibling), (e.sibling = null), (e = a);
      while (e !== null);
    }
  }
  function Sn(e) {
    var a = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (a !== null)
        for (var t = 0; t < a.length; t++) {
          var l = a[t];
          (Xe = l), Gf(l, e);
        }
      Bf(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Yf(e), (e = e.sibling);
  }
  function Yf(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Sn(e), e.flags & 2048 && bt(9, e, e.return);
        break;
      case 3:
        Sn(e);
        break;
      case 12:
        Sn(e);
        break;
      case 22:
        var a = e.stateNode;
        e.memoizedState !== null &&
        a._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((a._visibility &= -3), qi(e))
          : Sn(e);
        break;
      default:
        Sn(e);
    }
  }
  function qi(e) {
    var a = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (a !== null)
        for (var t = 0; t < a.length; t++) {
          var l = a[t];
          (Xe = l), Gf(l, e);
        }
      Bf(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((a = e), a.tag)) {
        case 0:
        case 11:
        case 15:
          bt(8, a, a.return), qi(a);
          break;
        case 22:
          (t = a.stateNode),
            t._visibility & 2 && ((t._visibility &= -3), qi(a));
          break;
        default:
          qi(a);
      }
      e = e.sibling;
    }
  }
  function Gf(e, a) {
    for (; Xe !== null; ) {
      var t = Xe;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          bt(8, t, a);
          break;
        case 23:
        case 22:
          if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
            var l = t.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          ln(t.memoizedState.cache);
      }
      if (((l = t.child), l !== null)) (l.return = t), (Xe = l);
      else
        e: for (t = e; Xe !== null; ) {
          l = Xe;
          var n = l.sibling,
            i = l.return;
          if ((Of(l), l === t)) {
            Xe = null;
            break e;
          }
          if (n !== null) {
            (n.return = i), (Xe = n);
            break e;
          }
          Xe = i;
        }
    }
  }
  var lp = {
      getCacheForType: function (e) {
        var a = Ve(De),
          t = a.data.get(e);
        return t === void 0 && ((t = e()), a.data.set(e, t)), t;
      },
      cacheSignal: function () {
        return Ve(De).controller.signal;
      },
    },
    np = typeof WeakMap == "function" ? WeakMap : Map,
    re = 0,
    xe = null,
    le = null,
    ie = 0,
    de = 0,
    ya = null,
    St = !1,
    Cl = !1,
    $u = !1,
    tt = 0,
    Me = 0,
    jt = 0,
    It = 0,
    Wu = 0,
    va = 0,
    Ml = 0,
    jn = null,
    ia = null,
    Fu = !1,
    Ui = 0,
    Xf = 0,
    Hi = 1 / 0,
    Li = null,
    Nt = null,
    Ye = 0,
    Et = null,
    Ol = null,
    lt = 0,
    Iu = 0,
    Pu = null,
    Qf = null,
    Nn = 0,
    ec = null;
  function ga() {
    return (re & 2) !== 0 && ie !== 0 ? ie & -ie : C.T !== null ? sc() : to();
  }
  function wf() {
    if (va === 0)
      if ((ie & 536870912) === 0 || ue) {
        var e = Vn;
        (Vn <<= 1), (Vn & 3932160) === 0 && (Vn = 262144), (va = e);
      } else va = 536870912;
    return (e = ha.current), e !== null && (e.flags |= 32), va;
  }
  function sa(e, a, t) {
    ((e === xe && (de === 2 || de === 9)) || e.cancelPendingCommit !== null) &&
      (_l(e, 0), zt(e, ie, va, !1)),
      wl(e, t),
      ((re & 2) === 0 || e !== xe) &&
        (e === xe &&
          ((re & 2) === 0 && (It |= t), Me === 4 && zt(e, ie, va, !1)),
        Ha(e));
  }
  function Zf(e, a, t) {
    if ((re & 6) !== 0) throw Error(o(327));
    var l = (!t && (a & 127) === 0 && (a & e.expiredLanes) === 0) || Ql(e, a),
      n = l ? up(e, a) : tc(e, a, !0),
      i = l;
    do {
      if (n === 0) {
        Cl && !l && zt(e, a, 0, !1);
        break;
      } else {
        if (((t = e.current.alternate), i && !ip(t))) {
          (n = tc(e, a, !1)), (i = !1);
          continue;
        }
        if (n === 2) {
          if (((i = a), e.errorRecoveryDisabledLanes & i)) var s = 0;
          else
            (s = e.pendingLanes & -536870913),
              (s = s !== 0 ? s : s & 536870912 ? 536870912 : 0);
          if (s !== 0) {
            a = s;
            e: {
              var r = e;
              n = jn;
              var h = r.current.memoizedState.isDehydrated;
              if ((h && (_l(r, s).flags |= 256), (s = tc(r, s, !1)), s !== 2)) {
                if ($u && !h) {
                  (r.errorRecoveryDisabledLanes |= i), (It |= i), (n = 4);
                  break e;
                }
                (i = ia),
                  (ia = n),
                  i !== null && (ia === null ? (ia = i) : ia.push.apply(ia, i));
              }
              n = s;
            }
            if (((i = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          _l(e, 0), zt(e, a, 0, !0);
          break;
        }
        e: {
          switch (((l = e), (i = n), i)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((a & 4194048) !== a) break;
            case 6:
              zt(l, a, va, !St);
              break e;
            case 2:
              ia = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((a & 62914560) === a && ((n = Ui + 300 - oa()), 10 < n)) {
            if ((zt(l, a, va, !St), Jn(l, 0, !0) !== 0)) break e;
            (lt = a),
              (l.timeoutHandle = Sd(
                Vf.bind(
                  null,
                  l,
                  t,
                  ia,
                  Li,
                  Fu,
                  a,
                  va,
                  It,
                  Ml,
                  St,
                  i,
                  "Throttled",
                  -0,
                  0
                ),
                n
              ));
            break e;
          }
          Vf(l, t, ia, Li, Fu, a, va, It, Ml, St, i, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ha(e);
  }
  function Vf(e, a, t, l, n, i, s, r, h, j, T, R, N, z) {
    if (
      ((e.timeoutHandle = -1),
      (R = a.subtreeFlags),
      R & 8192 || (R & 16785408) === 16785408)
    ) {
      (R = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Qa,
      }),
        Lf(a, i, R);
      var B =
        (i & 62914560) === i ? Ui - oa() : (i & 4194048) === i ? Xf - oa() : 0;
      if (((B = wp(R, B)), B !== null)) {
        (lt = i),
          (e.cancelPendingCommit = B(
            Pf.bind(null, e, a, i, t, l, n, s, r, h, T, R, null, N, z)
          )),
          zt(e, i, s, !j);
        return;
      }
    }
    Pf(e, a, i, t, l, n, s, r, h);
  }
  function ip(e) {
    for (var a = e; ; ) {
      var t = a.tag;
      if (
        (t === 0 || t === 11 || t === 15) &&
        a.flags & 16384 &&
        ((t = a.updateQueue), t !== null && ((t = t.stores), t !== null))
      )
        for (var l = 0; l < t.length; l++) {
          var n = t[l],
            i = n.getSnapshot;
          n = n.value;
          try {
            if (!da(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((t = a.child), a.subtreeFlags & 16384 && t !== null))
        (t.return = a), (a = t);
      else {
        if (a === e) break;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e) return !0;
          a = a.return;
        }
        (a.sibling.return = a.return), (a = a.sibling);
      }
    }
    return !0;
  }
  function zt(e, a, t, l) {
    (a &= ~Wu),
      (a &= ~It),
      (e.suspendedLanes |= a),
      (e.pingedLanes &= ~a),
      l && (e.warmLanes |= a),
      (l = e.expirationTimes);
    for (var n = a; 0 < n; ) {
      var i = 31 - fa(n),
        s = 1 << i;
      (l[i] = -1), (n &= ~s);
    }
    t !== 0 && Pc(e, t, a);
  }
  function Bi() {
    return (re & 6) === 0 ? (En(0), !1) : !0;
  }
  function ac() {
    if (le !== null) {
      if (de === 0) var e = le.return;
      else (e = le), (Ka = wt = null), vu(e), (Sl = null), (sn = 0), (e = le);
      for (; e !== null; ) jf(e.alternate, e), (e = e.return);
      le = null;
    }
  }
  function _l(e, a) {
    var t = e.timeoutHandle;
    t !== -1 && ((e.timeoutHandle = -1), zp(t)),
      (t = e.cancelPendingCommit),
      t !== null && ((e.cancelPendingCommit = null), t()),
      (lt = 0),
      ac(),
      (xe = e),
      (le = t = Za(e.current, null)),
      (ie = a),
      (de = 0),
      (ya = null),
      (St = !1),
      (Cl = Ql(e, a)),
      ($u = !1),
      (Ml = va = Wu = It = jt = Me = 0),
      (ia = jn = null),
      (Fu = !1),
      (a & 8) !== 0 && (a |= a & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= a; 0 < l; ) {
        var n = 31 - fa(l),
          i = 1 << n;
        (a |= e[n]), (l &= ~i);
      }
    return (tt = a), ii(), t;
  }
  function Kf(e, a) {
    (P = null),
      (C.H = hn),
      a === bl || a === mi
        ? ((a = ur()), (de = 3))
        : a === iu
        ? ((a = ur()), (de = 4))
        : (de =
            a === Du
              ? 8
              : a !== null &&
                typeof a == "object" &&
                typeof a.then == "function"
              ? 6
              : 1),
      (ya = a),
      le === null && ((Me = 1), Ai(e, ja(a, e.current)));
  }
  function Jf() {
    var e = ha.current;
    return e === null
      ? !0
      : (ie & 4194048) === ie
      ? Ta === null
      : (ie & 62914560) === ie || (ie & 536870912) !== 0
      ? e === Ta
      : !1;
  }
  function kf() {
    var e = C.H;
    return (C.H = hn), e === null ? hn : e;
  }
  function $f() {
    var e = C.A;
    return (C.A = lp), e;
  }
  function Yi() {
    (Me = 4),
      St || ((ie & 4194048) !== ie && ha.current !== null) || (Cl = !0),
      ((jt & 134217727) === 0 && (It & 134217727) === 0) ||
        xe === null ||
        zt(xe, ie, va, !1);
  }
  function tc(e, a, t) {
    var l = re;
    re |= 2;
    var n = kf(),
      i = $f();
    (xe !== e || ie !== a) && ((Li = null), _l(e, a)), (a = !1);
    var s = Me;
    e: do
      try {
        if (de !== 0 && le !== null) {
          var r = le,
            h = ya;
          switch (de) {
            case 8:
              ac(), (s = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ha.current === null && (a = !0);
              var j = de;
              if (((de = 0), (ya = null), Rl(e, r, h, j), t && Cl)) {
                s = 0;
                break e;
              }
              break;
            default:
              (j = de), (de = 0), (ya = null), Rl(e, r, h, j);
          }
        }
        sp(), (s = Me);
        break;
      } catch (T) {
        Kf(e, T);
      }
    while (!0);
    return (
      a && e.shellSuspendCounter++,
      (Ka = wt = null),
      (re = l),
      (C.H = n),
      (C.A = i),
      le === null && ((xe = null), (ie = 0), ii()),
      s
    );
  }
  function sp() {
    for (; le !== null; ) Wf(le);
  }
  function up(e, a) {
    var t = re;
    re |= 2;
    var l = kf(),
      n = $f();
    xe !== e || ie !== a
      ? ((Li = null), (Hi = oa() + 500), _l(e, a))
      : (Cl = Ql(e, a));
    e: do
      try {
        if (de !== 0 && le !== null) {
          a = le;
          var i = ya;
          a: switch (de) {
            case 1:
              (de = 0), (ya = null), Rl(e, a, i, 1);
              break;
            case 2:
            case 9:
              if (ir(i)) {
                (de = 0), (ya = null), Ff(a);
                break;
              }
              (a = function () {
                (de !== 2 && de !== 9) || xe !== e || (de = 7), Ha(e);
              }),
                i.then(a, a);
              break e;
            case 3:
              de = 7;
              break e;
            case 4:
              de = 5;
              break e;
            case 7:
              ir(i)
                ? ((de = 0), (ya = null), Ff(a))
                : ((de = 0), (ya = null), Rl(e, a, i, 7));
              break;
            case 5:
              var s = null;
              switch (le.tag) {
                case 26:
                  s = le.memoizedState;
                case 5:
                case 27:
                  var r = le;
                  if (s ? Hd(s) : r.stateNode.complete) {
                    (de = 0), (ya = null);
                    var h = r.sibling;
                    if (h !== null) le = h;
                    else {
                      var j = r.return;
                      j !== null ? ((le = j), Gi(j)) : (le = null);
                    }
                    break a;
                  }
              }
              (de = 0), (ya = null), Rl(e, a, i, 5);
              break;
            case 6:
              (de = 0), (ya = null), Rl(e, a, i, 6);
              break;
            case 8:
              ac(), (Me = 6);
              break e;
            default:
              throw Error(o(462));
          }
        }
        cp();
        break;
      } catch (T) {
        Kf(e, T);
      }
    while (!0);
    return (
      (Ka = wt = null),
      (C.H = l),
      (C.A = n),
      (re = t),
      le !== null ? 0 : ((xe = null), (ie = 0), ii(), Me)
    );
  }
  function cp() {
    for (; le !== null && !_m(); ) Wf(le);
  }
  function Wf(e) {
    var a = bf(e.alternate, e, tt);
    (e.memoizedProps = e.pendingProps), a === null ? Gi(e) : (le = a);
  }
  function Ff(e) {
    var a = e,
      t = a.alternate;
    switch (a.tag) {
      case 15:
      case 0:
        a = hf(t, a, a.pendingProps, a.type, void 0, ie);
        break;
      case 11:
        a = hf(t, a, a.pendingProps, a.type.render, a.ref, ie);
        break;
      case 5:
        vu(a);
      default:
        jf(t, a), (a = le = ko(a, tt)), (a = bf(t, a, tt));
    }
    (e.memoizedProps = e.pendingProps), a === null ? Gi(e) : (le = a);
  }
  function Rl(e, a, t, l) {
    (Ka = wt = null), vu(a), (Sl = null), (sn = 0);
    var n = a.return;
    try {
      if (Wh(e, n, a, t, ie)) {
        (Me = 1), Ai(e, ja(t, e.current)), (le = null);
        return;
      }
    } catch (i) {
      if (n !== null) throw ((le = n), i);
      (Me = 1), Ai(e, ja(t, e.current)), (le = null);
      return;
    }
    a.flags & 32768
      ? (ue || l === 1
          ? (e = !0)
          : Cl || (ie & 536870912) !== 0
          ? (e = !1)
          : ((St = e = !0),
            (l === 2 || l === 9 || l === 3 || l === 6) &&
              ((l = ha.current),
              l !== null && l.tag === 13 && (l.flags |= 16384))),
        If(a, e))
      : Gi(a);
  }
  function Gi(e) {
    var a = e;
    do {
      if ((a.flags & 32768) !== 0) {
        If(a, St);
        return;
      }
      e = a.return;
      var t = Ph(a.alternate, a, tt);
      if (t !== null) {
        le = t;
        return;
      }
      if (((a = a.sibling), a !== null)) {
        le = a;
        return;
      }
      le = a = e;
    } while (a !== null);
    Me === 0 && (Me = 5);
  }
  function If(e, a) {
    do {
      var t = ep(e.alternate, e);
      if (t !== null) {
        (t.flags &= 32767), (le = t);
        return;
      }
      if (
        ((t = e.return),
        t !== null &&
          ((t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null)),
        !a && ((e = e.sibling), e !== null))
      ) {
        le = e;
        return;
      }
      le = e = t;
    } while (e !== null);
    (Me = 6), (le = null);
  }
  function Pf(e, a, t, l, n, i, s, r, h) {
    e.cancelPendingCommit = null;
    do Xi();
    while (Ye !== 0);
    if ((re & 6) !== 0) throw Error(o(327));
    if (a !== null) {
      if (a === e.current) throw Error(o(177));
      if (
        ((i = a.lanes | a.childLanes),
        (i |= Zs),
        Xm(e, t, i, s, r, h),
        e === xe && ((le = xe = null), (ie = 0)),
        (Ol = a),
        (Et = e),
        (lt = t),
        (Iu = i),
        (Pu = n),
        (Qf = l),
        (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            dp(wn, function () {
              return nd(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (a.flags & 13878) !== 0),
        (a.subtreeFlags & 13878) !== 0 || l)
      ) {
        (l = C.T), (C.T = null), (n = U.p), (U.p = 2), (s = re), (re |= 4);
        try {
          ap(e, a, t);
        } finally {
          (re = s), (U.p = n), (C.T = l);
        }
      }
      (Ye = 1), ed(), ad(), td();
    }
  }
  function ed() {
    if (Ye === 1) {
      Ye = 0;
      var e = Et,
        a = Ol,
        t = (a.flags & 13878) !== 0;
      if ((a.subtreeFlags & 13878) !== 0 || t) {
        (t = C.T), (C.T = null);
        var l = U.p;
        U.p = 2;
        var n = re;
        re |= 4;
        try {
          qf(a, e);
          var i = hc,
            s = Yo(e.containerInfo),
            r = i.focusedElem,
            h = i.selectionRange;
          if (
            s !== r &&
            r &&
            r.ownerDocument &&
            Bo(r.ownerDocument.documentElement, r)
          ) {
            if (h !== null && Ys(r)) {
              var j = h.start,
                T = h.end;
              if ((T === void 0 && (T = j), "selectionStart" in r))
                (r.selectionStart = j),
                  (r.selectionEnd = Math.min(T, r.value.length));
              else {
                var R = r.ownerDocument || document,
                  N = (R && R.defaultView) || window;
                if (N.getSelection) {
                  var z = N.getSelection(),
                    B = r.textContent.length,
                    J = Math.min(h.start, B),
                    ve = h.end === void 0 ? J : Math.min(h.end, B);
                  !z.extend && J > ve && ((s = ve), (ve = J), (J = s));
                  var x = Lo(r, J),
                    y = Lo(r, ve);
                  if (
                    x &&
                    y &&
                    (z.rangeCount !== 1 ||
                      z.anchorNode !== x.node ||
                      z.anchorOffset !== x.offset ||
                      z.focusNode !== y.node ||
                      z.focusOffset !== y.offset)
                  ) {
                    var S = R.createRange();
                    S.setStart(x.node, x.offset),
                      z.removeAllRanges(),
                      J > ve
                        ? (z.addRange(S), z.extend(y.node, y.offset))
                        : (S.setEnd(y.node, y.offset), z.addRange(S));
                  }
                }
              }
            }
            for (R = [], z = r; (z = z.parentNode); )
              z.nodeType === 1 &&
                R.push({ element: z, left: z.scrollLeft, top: z.scrollTop });
            for (
              typeof r.focus == "function" && r.focus(), r = 0;
              r < R.length;
              r++
            ) {
              var O = R[r];
              (O.element.scrollLeft = O.left), (O.element.scrollTop = O.top);
            }
          }
          (Pi = !!mc), (hc = mc = null);
        } finally {
          (re = n), (U.p = l), (C.T = t);
        }
      }
      (e.current = a), (Ye = 2);
    }
  }
  function ad() {
    if (Ye === 2) {
      Ye = 0;
      var e = Et,
        a = Ol,
        t = (a.flags & 8772) !== 0;
      if ((a.subtreeFlags & 8772) !== 0 || t) {
        (t = C.T), (C.T = null);
        var l = U.p;
        U.p = 2;
        var n = re;
        re |= 4;
        try {
          Mf(e, a.alternate, a);
        } finally {
          (re = n), (U.p = l), (C.T = t);
        }
      }
      Ye = 3;
    }
  }
  function td() {
    if (Ye === 4 || Ye === 3) {
      (Ye = 0), Rm();
      var e = Et,
        a = Ol,
        t = lt,
        l = Qf;
      (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0
        ? (Ye = 5)
        : ((Ye = 0), (Ol = Et = null), ld(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (
        (n === 0 && (Nt = null),
        bs(t),
        (a = a.stateNode),
        ra && typeof ra.onCommitFiberRoot == "function")
      )
        try {
          ra.onCommitFiberRoot(Xl, a, void 0, (a.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        (a = C.T), (n = U.p), (U.p = 2), (C.T = null);
        try {
          for (var i = e.onRecoverableError, s = 0; s < l.length; s++) {
            var r = l[s];
            i(r.value, { componentStack: r.stack });
          }
        } finally {
          (C.T = a), (U.p = n);
        }
      }
      (lt & 3) !== 0 && Xi(),
        Ha(e),
        (n = e.pendingLanes),
        (t & 261930) !== 0 && (n & 42) !== 0
          ? e === ec
            ? Nn++
            : ((Nn = 0), (ec = e))
          : (Nn = 0),
        En(0);
    }
  }
  function ld(e, a) {
    (e.pooledCacheLanes &= a) === 0 &&
      ((a = e.pooledCache), a != null && ((e.pooledCache = null), ln(a)));
  }
  function Xi() {
    return ed(), ad(), td(), nd();
  }
  function nd() {
    if (Ye !== 5) return !1;
    var e = Et,
      a = Iu;
    Iu = 0;
    var t = bs(lt),
      l = C.T,
      n = U.p;
    try {
      (U.p = 32 > t ? 32 : t), (C.T = null), (t = Pu), (Pu = null);
      var i = Et,
        s = lt;
      if (((Ye = 0), (Ol = Et = null), (lt = 0), (re & 6) !== 0))
        throw Error(o(331));
      var r = re;
      if (
        ((re |= 4),
        Yf(i.current),
        Hf(i, i.current, s, t),
        (re = r),
        En(0, !1),
        ra && typeof ra.onPostCommitFiberRoot == "function")
      )
        try {
          ra.onPostCommitFiberRoot(Xl, i);
        } catch {}
      return !0;
    } finally {
      (U.p = n), (C.T = l), ld(e, a);
    }
  }
  function id(e, a, t) {
    (a = ja(t, a)),
      (a = Ru(e.stateNode, a, 2)),
      (e = vt(e, a, 2)),
      e !== null && (wl(e, 2), Ha(e));
  }
  function me(e, a, t) {
    if (e.tag === 3) id(e, e, t);
    else
      for (; a !== null; ) {
        if (a.tag === 3) {
          id(a, e, t);
          break;
        } else if (a.tag === 1) {
          var l = a.stateNode;
          if (
            typeof a.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Nt === null || !Nt.has(l)))
          ) {
            (e = ja(t, e)),
              (t = sf(2)),
              (l = vt(a, t, 2)),
              l !== null && (uf(t, l, a, e), wl(l, 2), Ha(l));
            break;
          }
        }
        a = a.return;
      }
  }
  function lc(e, a, t) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new np();
      var n = new Set();
      l.set(a, n);
    } else (n = l.get(a)), n === void 0 && ((n = new Set()), l.set(a, n));
    n.has(t) ||
      (($u = !0), n.add(t), (e = op.bind(null, e, a, t)), a.then(e, e));
  }
  function op(e, a, t) {
    var l = e.pingCache;
    l !== null && l.delete(a),
      (e.pingedLanes |= e.suspendedLanes & t),
      (e.warmLanes &= ~t),
      xe === e &&
        (ie & t) === t &&
        (Me === 4 || (Me === 3 && (ie & 62914560) === ie && 300 > oa() - Ui)
          ? (re & 2) === 0 && _l(e, 0)
          : (Wu |= t),
        Ml === ie && (Ml = 0)),
      Ha(e);
  }
  function sd(e, a) {
    a === 0 && (a = Ic()), (e = Gt(e, a)), e !== null && (wl(e, a), Ha(e));
  }
  function rp(e) {
    var a = e.memoizedState,
      t = 0;
    a !== null && (t = a.retryLane), sd(e, t);
  }
  function fp(e, a) {
    var t = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode,
          n = e.memoizedState;
        n !== null && (t = n.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(a), sd(e, t);
  }
  function dp(e, a) {
    return ys(e, a);
  }
  var Qi = null,
    Dl = null,
    nc = !1,
    wi = !1,
    ic = !1,
    Tt = 0;
  function Ha(e) {
    e !== Dl &&
      e.next === null &&
      (Dl === null ? (Qi = Dl = e) : (Dl = Dl.next = e)),
      (wi = !0),
      nc || ((nc = !0), hp());
  }
  function En(e, a) {
    if (!ic && wi) {
      ic = !0;
      do
        for (var t = !1, l = Qi; l !== null; ) {
          if (e !== 0) {
            var n = l.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var s = l.suspendedLanes,
                r = l.pingedLanes;
              (i = (1 << (31 - fa(42 | e) + 1)) - 1),
                (i &= n & ~(s & ~r)),
                (i = i & 201326741 ? (i & 201326741) | 1 : i ? i | 2 : 0);
            }
            i !== 0 && ((t = !0), rd(l, i));
          } else
            (i = ie),
              (i = Jn(
                l,
                l === xe ? i : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (i & 3) === 0 || Ql(l, i) || ((t = !0), rd(l, i));
          l = l.next;
        }
      while (t);
      ic = !1;
    }
  }
  function mp() {
    ud();
  }
  function ud() {
    wi = nc = !1;
    var e = 0;
    Tt !== 0 && Ep() && (e = Tt);
    for (var a = oa(), t = null, l = Qi; l !== null; ) {
      var n = l.next,
        i = cd(l, a);
      i === 0
        ? ((l.next = null),
          t === null ? (Qi = n) : (t.next = n),
          n === null && (Dl = t))
        : ((t = l), (e !== 0 || (i & 3) !== 0) && (wi = !0)),
        (l = n);
    }
    (Ye !== 0 && Ye !== 5) || En(e), Tt !== 0 && (Tt = 0);
  }
  function cd(e, a) {
    for (
      var t = e.suspendedLanes,
        l = e.pingedLanes,
        n = e.expirationTimes,
        i = e.pendingLanes & -62914561;
      0 < i;

    ) {
      var s = 31 - fa(i),
        r = 1 << s,
        h = n[s];
      h === -1
        ? ((r & t) === 0 || (r & l) !== 0) && (n[s] = Gm(r, a))
        : h <= a && (e.expiredLanes |= r),
        (i &= ~r);
    }
    if (
      ((a = xe),
      (t = ie),
      (t = Jn(
        e,
        e === a ? t : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (l = e.callbackNode),
      t === 0 ||
        (e === a && (de === 2 || de === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && vs(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((t & 3) === 0 || Ql(e, t)) {
      if (((a = t & -t), a === e.callbackPriority)) return a;
      switch ((l !== null && vs(l), bs(t))) {
        case 2:
        case 8:
          t = Wc;
          break;
        case 32:
          t = wn;
          break;
        case 268435456:
          t = Fc;
          break;
        default:
          t = wn;
      }
      return (
        (l = od.bind(null, e)),
        (t = ys(t, l)),
        (e.callbackPriority = a),
        (e.callbackNode = t),
        a
      );
    }
    return (
      l !== null && l !== null && vs(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function od(e, a) {
    if (Ye !== 0 && Ye !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var t = e.callbackNode;
    if (Xi() && e.callbackNode !== t) return null;
    var l = ie;
    return (
      (l = Jn(
        e,
        e === xe ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      l === 0
        ? null
        : (Zf(e, l, a),
          cd(e, oa()),
          e.callbackNode != null && e.callbackNode === t
            ? od.bind(null, e)
            : null)
    );
  }
  function rd(e, a) {
    if (Xi()) return null;
    Zf(e, a, !0);
  }
  function hp() {
    Tp(function () {
      (re & 6) !== 0 ? ys($c, mp) : ud();
    });
  }
  function sc() {
    if (Tt === 0) {
      var e = gl;
      e === 0 && ((e = Zn), (Zn <<= 1), (Zn & 261888) === 0 && (Zn = 256)),
        (Tt = e);
    }
    return Tt;
  }
  function fd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : Fn("" + e);
  }
  function dd(e, a) {
    var t = a.ownerDocument.createElement("input");
    return (
      (t.name = a.name),
      (t.value = a.value),
      e.id && t.setAttribute("form", e.id),
      a.parentNode.insertBefore(t, a),
      (e = new FormData(e)),
      t.parentNode.removeChild(t),
      e
    );
  }
  function pp(e, a, t, l, n) {
    if (a === "submit" && t && t.stateNode === n) {
      var i = fd((n[ea] || null).action),
        s = l.submitter;
      s &&
        ((a = (a = s[ea] || null)
          ? fd(a.formAction)
          : s.getAttribute("formAction")),
        a !== null && ((i = a), (s = null)));
      var r = new ai("action", "action", null, l, n);
      e.push({
        event: r,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Tt !== 0) {
                  var h = s ? dd(n, s) : new FormData(n);
                  Tu(
                    t,
                    { pending: !0, data: h, method: n.method, action: i },
                    null,
                    h
                  );
                }
              } else
                typeof i == "function" &&
                  (r.preventDefault(),
                  (h = s ? dd(n, s) : new FormData(n)),
                  Tu(
                    t,
                    { pending: !0, data: h, method: n.method, action: i },
                    i,
                    h
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var uc = 0; uc < ws.length; uc++) {
    var cc = ws[uc],
      yp = cc.toLowerCase(),
      vp = cc[0].toUpperCase() + cc.slice(1);
    Oa(yp, "on" + vp);
  }
  Oa(Qo, "onAnimationEnd"),
    Oa(wo, "onAnimationIteration"),
    Oa(Zo, "onAnimationStart"),
    Oa("dblclick", "onDoubleClick"),
    Oa("focusin", "onFocus"),
    Oa("focusout", "onBlur"),
    Oa(Dh, "onTransitionRun"),
    Oa(qh, "onTransitionStart"),
    Oa(Uh, "onTransitionCancel"),
    Oa(Vo, "onTransitionEnd"),
    nl("onMouseEnter", ["mouseout", "mouseover"]),
    nl("onMouseLeave", ["mouseout", "mouseover"]),
    nl("onPointerEnter", ["pointerout", "pointerover"]),
    nl("onPointerLeave", ["pointerout", "pointerover"]),
    Ht(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Ht(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Ht("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ht(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ht(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ht(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var zn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    gp = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(zn)
    );
  function md(e, a) {
    a = (a & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var l = e[t],
        n = l.event;
      l = l.listeners;
      e: {
        var i = void 0;
        if (a)
          for (var s = l.length - 1; 0 <= s; s--) {
            var r = l[s],
              h = r.instance,
              j = r.currentTarget;
            if (((r = r.listener), h !== i && n.isPropagationStopped()))
              break e;
            (i = r), (n.currentTarget = j);
            try {
              i(n);
            } catch (T) {
              ni(T);
            }
            (n.currentTarget = null), (i = h);
          }
        else
          for (s = 0; s < l.length; s++) {
            if (
              ((r = l[s]),
              (h = r.instance),
              (j = r.currentTarget),
              (r = r.listener),
              h !== i && n.isPropagationStopped())
            )
              break e;
            (i = r), (n.currentTarget = j);
            try {
              i(n);
            } catch (T) {
              ni(T);
            }
            (n.currentTarget = null), (i = h);
          }
      }
    }
  }
  function ne(e, a) {
    var t = a[Ss];
    t === void 0 && (t = a[Ss] = new Set());
    var l = e + "__bubble";
    t.has(l) || (hd(a, e, 2, !1), t.add(l));
  }
  function oc(e, a, t) {
    var l = 0;
    a && (l |= 4), hd(t, e, l, a);
  }
  var Zi = "_reactListening" + Math.random().toString(36).slice(2);
  function rc(e) {
    if (!e[Zi]) {
      (e[Zi] = !0),
        io.forEach(function (t) {
          t !== "selectionchange" && (gp.has(t) || oc(t, !1, e), oc(t, !0, e));
        });
      var a = e.nodeType === 9 ? e : e.ownerDocument;
      a === null || a[Zi] || ((a[Zi] = !0), oc("selectionchange", !1, a));
    }
  }
  function hd(e, a, t, l) {
    switch (wd(a)) {
      case 2:
        var n = Kp;
        break;
      case 8:
        n = Jp;
        break;
      default:
        n = zc;
    }
    (t = n.bind(null, a, t, e)),
      (n = void 0),
      !Os ||
        (a !== "touchstart" && a !== "touchmove" && a !== "wheel") ||
        (n = !0),
      l
        ? n !== void 0
          ? e.addEventListener(a, t, { capture: !0, passive: n })
          : e.addEventListener(a, t, !0)
        : n !== void 0
        ? e.addEventListener(a, t, { passive: n })
        : e.addEventListener(a, t, !1);
  }
  function fc(e, a, t, l, n) {
    var i = l;
    if ((a & 1) === 0 && (a & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var s = l.tag;
        if (s === 3 || s === 4) {
          var r = l.stateNode.containerInfo;
          if (r === n) break;
          if (s === 4)
            for (s = l.return; s !== null; ) {
              var h = s.tag;
              if ((h === 3 || h === 4) && s.stateNode.containerInfo === n)
                return;
              s = s.return;
            }
          for (; r !== null; ) {
            if (((s = al(r)), s === null)) return;
            if (((h = s.tag), h === 5 || h === 6 || h === 26 || h === 27)) {
              l = i = s;
              continue e;
            }
            r = r.parentNode;
          }
        }
        l = l.return;
      }
    go(function () {
      var j = i,
        T = Cs(t),
        R = [];
      e: {
        var N = Ko.get(e);
        if (N !== void 0) {
          var z = ai,
            B = e;
          switch (e) {
            case "keypress":
              if (Pn(t) === 0) break e;
            case "keydown":
            case "keyup":
              z = fh;
              break;
            case "focusin":
              (B = "focus"), (z = qs);
              break;
            case "focusout":
              (B = "blur"), (z = qs);
              break;
            case "beforeblur":
            case "afterblur":
              z = qs;
              break;
            case "click":
              if (t.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              z = So;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = Pm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = hh;
              break;
            case Qo:
            case wo:
            case Zo:
              z = th;
              break;
            case Vo:
              z = yh;
              break;
            case "scroll":
            case "scrollend":
              z = Fm;
              break;
            case "wheel":
              z = gh;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = nh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = No;
              break;
            case "toggle":
            case "beforetoggle":
              z = bh;
          }
          var J = (a & 4) !== 0,
            ve = !J && (e === "scroll" || e === "scrollend"),
            x = J ? (N !== null ? N + "Capture" : null) : N;
          J = [];
          for (var y = j, S; y !== null; ) {
            var O = y;
            if (
              ((S = O.stateNode),
              (O = O.tag),
              (O !== 5 && O !== 26 && O !== 27) ||
                S === null ||
                x === null ||
                ((O = Kl(y, x)), O != null && J.push(Tn(y, O, S))),
              ve)
            )
              break;
            y = y.return;
          }
          0 < J.length &&
            ((N = new z(N, B, null, t, T)), R.push({ event: N, listeners: J }));
        }
      }
      if ((a & 7) === 0) {
        e: {
          if (
            ((N = e === "mouseover" || e === "pointerover"),
            (z = e === "mouseout" || e === "pointerout"),
            N &&
              t !== As &&
              (B = t.relatedTarget || t.fromElement) &&
              (al(B) || B[el]))
          )
            break e;
          if (
            (z || N) &&
            ((N =
              T.window === T
                ? T
                : (N = T.ownerDocument)
                ? N.defaultView || N.parentWindow
                : window),
            z
              ? ((B = t.relatedTarget || t.toElement),
                (z = j),
                (B = B ? al(B) : null),
                B !== null &&
                  ((ve = g(B)),
                  (J = B.tag),
                  B !== ve || (J !== 5 && J !== 27 && J !== 6)) &&
                  (B = null))
              : ((z = null), (B = j)),
            z !== B)
          ) {
            if (
              ((J = So),
              (O = "onMouseLeave"),
              (x = "onMouseEnter"),
              (y = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((J = No),
                (O = "onPointerLeave"),
                (x = "onPointerEnter"),
                (y = "pointer")),
              (ve = z == null ? N : Vl(z)),
              (S = B == null ? N : Vl(B)),
              (N = new J(O, y + "leave", z, t, T)),
              (N.target = ve),
              (N.relatedTarget = S),
              (O = null),
              al(T) === j &&
                ((J = new J(x, y + "enter", B, t, T)),
                (J.target = S),
                (J.relatedTarget = ve),
                (O = J)),
              (ve = O),
              z && B)
            )
              a: {
                for (J = xp, x = z, y = B, S = 0, O = x; O; O = J(O)) S++;
                O = 0;
                for (var V = y; V; V = J(V)) O++;
                for (; 0 < S - O; ) (x = J(x)), S--;
                for (; 0 < O - S; ) (y = J(y)), O--;
                for (; S--; ) {
                  if (x === y || (y !== null && x === y.alternate)) {
                    J = x;
                    break a;
                  }
                  (x = J(x)), (y = J(y));
                }
                J = null;
              }
            else J = null;
            z !== null && pd(R, N, z, J, !1),
              B !== null && ve !== null && pd(R, ve, B, J, !0);
          }
        }
        e: {
          if (
            ((N = j ? Vl(j) : window),
            (z = N.nodeName && N.nodeName.toLowerCase()),
            z === "select" || (z === "input" && N.type === "file"))
          )
            var ce = _o;
          else if (Mo(N))
            if (Ro) ce = Oh;
            else {
              ce = Ch;
              var G = Ah;
            }
          else
            (z = N.nodeName),
              !z ||
              z.toLowerCase() !== "input" ||
              (N.type !== "checkbox" && N.type !== "radio")
                ? j && Ts(j.elementType) && (ce = _o)
                : (ce = Mh);
          if (ce && (ce = ce(e, j))) {
            Oo(R, ce, t, T);
            break e;
          }
          G && G(e, N, j),
            e === "focusout" &&
              j &&
              N.type === "number" &&
              j.memoizedProps.value != null &&
              zs(N, "number", N.value);
        }
        switch (((G = j ? Vl(j) : window), e)) {
          case "focusin":
            (Mo(G) || G.contentEditable === "true") &&
              ((rl = G), (Gs = j), (en = null));
            break;
          case "focusout":
            en = Gs = rl = null;
            break;
          case "mousedown":
            Xs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Xs = !1), Go(R, t, T);
            break;
          case "selectionchange":
            if (Rh) break;
          case "keydown":
          case "keyup":
            Go(R, t, T);
        }
        var ae;
        if (Hs)
          e: {
            switch (e) {
              case "compositionstart":
                var se = "onCompositionStart";
                break e;
              case "compositionend":
                se = "onCompositionEnd";
                break e;
              case "compositionupdate":
                se = "onCompositionUpdate";
                break e;
            }
            se = void 0;
          }
        else
          ol
            ? Ao(e, t) && (se = "onCompositionEnd")
            : e === "keydown" &&
              t.keyCode === 229 &&
              (se = "onCompositionStart");
        se &&
          (Eo &&
            t.locale !== "ko" &&
            (ol || se !== "onCompositionStart"
              ? se === "onCompositionEnd" && ol && (ae = xo())
              : ((rt = T),
                (_s = "value" in rt ? rt.value : rt.textContent),
                (ol = !0))),
          (G = Vi(j, se)),
          0 < G.length &&
            ((se = new jo(se, e, null, t, T)),
            R.push({ event: se, listeners: G }),
            ae
              ? (se.data = ae)
              : ((ae = Co(t)), ae !== null && (se.data = ae)))),
          (ae = jh ? Nh(e, t) : Eh(e, t)) &&
            ((se = Vi(j, "onBeforeInput")),
            0 < se.length &&
              ((G = new jo("onBeforeInput", "beforeinput", null, t, T)),
              R.push({ event: G, listeners: se }),
              (G.data = ae))),
          pp(R, e, j, t, T);
      }
      md(R, a);
    });
  }
  function Tn(e, a, t) {
    return { instance: e, listener: a, currentTarget: t };
  }
  function Vi(e, a) {
    for (var t = a + "Capture", l = []; e !== null; ) {
      var n = e,
        i = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          i === null ||
          ((n = Kl(e, t)),
          n != null && l.unshift(Tn(e, n, i)),
          (n = Kl(e, a)),
          n != null && l.push(Tn(e, n, i))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function xp(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function pd(e, a, t, l, n) {
    for (var i = a._reactName, s = []; t !== null && t !== l; ) {
      var r = t,
        h = r.alternate,
        j = r.stateNode;
      if (((r = r.tag), h !== null && h === l)) break;
      (r !== 5 && r !== 26 && r !== 27) ||
        j === null ||
        ((h = j),
        n
          ? ((j = Kl(t, i)), j != null && s.unshift(Tn(t, j, h)))
          : n || ((j = Kl(t, i)), j != null && s.push(Tn(t, j, h)))),
        (t = t.return);
    }
    s.length !== 0 && e.push({ event: a, listeners: s });
  }
  var bp = /\r\n?/g,
    Sp = /\u0000|\uFFFD/g;
  function yd(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        bp,
        `
`
      )
      .replace(Sp, "");
  }
  function vd(e, a) {
    return (a = yd(a)), yd(e) === a;
  }
  function ye(e, a, t, l, n, i) {
    switch (t) {
      case "children":
        typeof l == "string"
          ? a === "body" || (a === "textarea" && l === "") || sl(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            a !== "body" &&
            sl(e, "" + l);
        break;
      case "className":
        $n(e, "class", l);
        break;
      case "tabIndex":
        $n(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        $n(e, t, l);
        break;
      case "style":
        yo(e, l, i);
        break;
      case "data":
        if (a !== "object") {
          $n(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (a !== "a" || t !== "href")) {
          e.removeAttribute(t);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(t);
          break;
        }
        (l = Fn("" + l)), e.setAttribute(t, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            t,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" &&
            (t === "formAction"
              ? (a !== "input" && ye(e, a, "name", n.name, n, null),
                ye(e, a, "formEncType", n.formEncType, n, null),
                ye(e, a, "formMethod", n.formMethod, n, null),
                ye(e, a, "formTarget", n.formTarget, n, null))
              : (ye(e, a, "encType", n.encType, n, null),
                ye(e, a, "method", n.method, n, null),
                ye(e, a, "target", n.target, n, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(t);
          break;
        }
        (l = Fn("" + l)), e.setAttribute(t, l);
        break;
      case "onClick":
        l != null && (e.onclick = Qa);
        break;
      case "onScroll":
        l != null && ne("scroll", e);
        break;
      case "onScrollEnd":
        l != null && ne("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(o(61));
          if (((t = l.__html), t != null)) {
            if (n.children != null) throw Error(o(60));
            e.innerHTML = t;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (t = Fn("" + l)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", t);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(t, "" + l)
          : e.removeAttribute(t);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(t, "")
          : e.removeAttribute(t);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(t, "")
          : l !== !1 &&
            l != null &&
            typeof l != "function" &&
            typeof l != "symbol"
          ? e.setAttribute(t, l)
          : e.removeAttribute(t);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(t, l)
          : e.removeAttribute(t);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(t)
          : e.setAttribute(t, l);
        break;
      case "popover":
        ne("beforetoggle", e), ne("toggle", e), kn(e, "popover", l);
        break;
      case "xlinkActuate":
        Xa(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        Xa(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        Xa(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        Xa(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        Xa(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        Xa(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        Xa(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        Xa(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        Xa(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        kn(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
          ((t = $m.get(t) || t), kn(e, t, l));
    }
  }
  function dc(e, a, t, l, n, i) {
    switch (t) {
      case "style":
        yo(e, l, i);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(o(61));
          if (((t = l.__html), t != null)) {
            if (n.children != null) throw Error(o(60));
            e.innerHTML = t;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? sl(e, l)
          : (typeof l == "number" || typeof l == "bigint") && sl(e, "" + l);
        break;
      case "onScroll":
        l != null && ne("scroll", e);
        break;
      case "onScrollEnd":
        l != null && ne("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = Qa);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!so.hasOwnProperty(t))
          e: {
            if (
              t[0] === "o" &&
              t[1] === "n" &&
              ((n = t.endsWith("Capture")),
              (a = t.slice(2, n ? t.length - 7 : void 0)),
              (i = e[ea] || null),
              (i = i != null ? i[t] : null),
              typeof i == "function" && e.removeEventListener(a, i, n),
              typeof l == "function")
            ) {
              typeof i != "function" &&
                i !== null &&
                (t in e
                  ? (e[t] = null)
                  : e.hasAttribute(t) && e.removeAttribute(t)),
                e.addEventListener(a, l, n);
              break e;
            }
            t in e
              ? (e[t] = l)
              : l === !0
              ? e.setAttribute(t, "")
              : kn(e, t, l);
          }
    }
  }
  function Je(e, a, t) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ne("error", e), ne("load", e);
        var l = !1,
          n = !1,
          i;
        for (i in t)
          if (t.hasOwnProperty(i)) {
            var s = t[i];
            if (s != null)
              switch (i) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, a));
                default:
                  ye(e, a, i, s, t, null);
              }
          }
        n && ye(e, a, "srcSet", t.srcSet, t, null),
          l && ye(e, a, "src", t.src, t, null);
        return;
      case "input":
        ne("invalid", e);
        var r = (i = s = n = null),
          h = null,
          j = null;
        for (l in t)
          if (t.hasOwnProperty(l)) {
            var T = t[l];
            if (T != null)
              switch (l) {
                case "name":
                  n = T;
                  break;
                case "type":
                  s = T;
                  break;
                case "checked":
                  h = T;
                  break;
                case "defaultChecked":
                  j = T;
                  break;
                case "value":
                  i = T;
                  break;
                case "defaultValue":
                  r = T;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (T != null) throw Error(o(137, a));
                  break;
                default:
                  ye(e, a, l, T, t, null);
              }
          }
        fo(e, i, r, h, j, s, n, !1);
        return;
      case "select":
        ne("invalid", e), (l = s = i = null);
        for (n in t)
          if (t.hasOwnProperty(n) && ((r = t[n]), r != null))
            switch (n) {
              case "value":
                i = r;
                break;
              case "defaultValue":
                s = r;
                break;
              case "multiple":
                l = r;
              default:
                ye(e, a, n, r, t, null);
            }
        (a = i),
          (t = s),
          (e.multiple = !!l),
          a != null ? il(e, !!l, a, !1) : t != null && il(e, !!l, t, !0);
        return;
      case "textarea":
        ne("invalid", e), (i = n = l = null);
        for (s in t)
          if (t.hasOwnProperty(s) && ((r = t[s]), r != null))
            switch (s) {
              case "value":
                l = r;
                break;
              case "defaultValue":
                n = r;
                break;
              case "children":
                i = r;
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(o(91));
                break;
              default:
                ye(e, a, s, r, t, null);
            }
        ho(e, l, n, i);
        return;
      case "option":
        for (h in t)
          if (t.hasOwnProperty(h) && ((l = t[h]), l != null))
            switch (h) {
              case "selected":
                e.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                ye(e, a, h, l, t, null);
            }
        return;
      case "dialog":
        ne("beforetoggle", e), ne("toggle", e), ne("cancel", e), ne("close", e);
        break;
      case "iframe":
      case "object":
        ne("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < zn.length; l++) ne(zn[l], e);
        break;
      case "image":
        ne("error", e), ne("load", e);
        break;
      case "details":
        ne("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        ne("error", e), ne("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (j in t)
          if (t.hasOwnProperty(j) && ((l = t[j]), l != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, a));
              default:
                ye(e, a, j, l, t, null);
            }
        return;
      default:
        if (Ts(a)) {
          for (T in t)
            t.hasOwnProperty(T) &&
              ((l = t[T]), l !== void 0 && dc(e, a, T, l, t, void 0));
          return;
        }
    }
    for (r in t)
      t.hasOwnProperty(r) && ((l = t[r]), l != null && ye(e, a, r, l, t, null));
  }
  function jp(e, a, t, l) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          i = null,
          s = null,
          r = null,
          h = null,
          j = null,
          T = null;
        for (z in t) {
          var R = t[z];
          if (t.hasOwnProperty(z) && R != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = R;
              default:
                l.hasOwnProperty(z) || ye(e, a, z, null, l, R);
            }
        }
        for (var N in l) {
          var z = l[N];
          if (((R = t[N]), l.hasOwnProperty(N) && (z != null || R != null)))
            switch (N) {
              case "type":
                i = z;
                break;
              case "name":
                n = z;
                break;
              case "checked":
                j = z;
                break;
              case "defaultChecked":
                T = z;
                break;
              case "value":
                s = z;
                break;
              case "defaultValue":
                r = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(o(137, a));
                break;
              default:
                z !== R && ye(e, a, N, z, l, R);
            }
        }
        Es(e, s, r, h, j, T, i, n);
        return;
      case "select":
        z = s = r = N = null;
        for (i in t)
          if (((h = t[i]), t.hasOwnProperty(i) && h != null))
            switch (i) {
              case "value":
                break;
              case "multiple":
                z = h;
              default:
                l.hasOwnProperty(i) || ye(e, a, i, null, l, h);
            }
        for (n in l)
          if (
            ((i = l[n]),
            (h = t[n]),
            l.hasOwnProperty(n) && (i != null || h != null))
          )
            switch (n) {
              case "value":
                N = i;
                break;
              case "defaultValue":
                r = i;
                break;
              case "multiple":
                s = i;
              default:
                i !== h && ye(e, a, n, i, l, h);
            }
        (a = r),
          (t = s),
          (l = z),
          N != null
            ? il(e, !!t, N, !1)
            : !!l != !!t &&
              (a != null ? il(e, !!t, a, !0) : il(e, !!t, t ? [] : "", !1));
        return;
      case "textarea":
        z = N = null;
        for (r in t)
          if (
            ((n = t[r]),
            t.hasOwnProperty(r) && n != null && !l.hasOwnProperty(r))
          )
            switch (r) {
              case "value":
                break;
              case "children":
                break;
              default:
                ye(e, a, r, null, l, n);
            }
        for (s in l)
          if (
            ((n = l[s]),
            (i = t[s]),
            l.hasOwnProperty(s) && (n != null || i != null))
          )
            switch (s) {
              case "value":
                N = n;
                break;
              case "defaultValue":
                z = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(o(91));
                break;
              default:
                n !== i && ye(e, a, s, n, l, i);
            }
        mo(e, N, z);
        return;
      case "option":
        for (var B in t)
          if (
            ((N = t[B]),
            t.hasOwnProperty(B) && N != null && !l.hasOwnProperty(B))
          )
            switch (B) {
              case "selected":
                e.selected = !1;
                break;
              default:
                ye(e, a, B, null, l, N);
            }
        for (h in l)
          if (
            ((N = l[h]),
            (z = t[h]),
            l.hasOwnProperty(h) && N !== z && (N != null || z != null))
          )
            switch (h) {
              case "selected":
                e.selected =
                  N && typeof N != "function" && typeof N != "symbol";
                break;
              default:
                ye(e, a, h, N, l, z);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var J in t)
          (N = t[J]),
            t.hasOwnProperty(J) &&
              N != null &&
              !l.hasOwnProperty(J) &&
              ye(e, a, J, null, l, N);
        for (j in l)
          if (
            ((N = l[j]),
            (z = t[j]),
            l.hasOwnProperty(j) && N !== z && (N != null || z != null))
          )
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(o(137, a));
                break;
              default:
                ye(e, a, j, N, l, z);
            }
        return;
      default:
        if (Ts(a)) {
          for (var ve in t)
            (N = t[ve]),
              t.hasOwnProperty(ve) &&
                N !== void 0 &&
                !l.hasOwnProperty(ve) &&
                dc(e, a, ve, void 0, l, N);
          for (T in l)
            (N = l[T]),
              (z = t[T]),
              !l.hasOwnProperty(T) ||
                N === z ||
                (N === void 0 && z === void 0) ||
                dc(e, a, T, N, l, z);
          return;
        }
    }
    for (var x in t)
      (N = t[x]),
        t.hasOwnProperty(x) &&
          N != null &&
          !l.hasOwnProperty(x) &&
          ye(e, a, x, null, l, N);
    for (R in l)
      (N = l[R]),
        (z = t[R]),
        !l.hasOwnProperty(R) ||
          N === z ||
          (N == null && z == null) ||
          ye(e, a, R, N, l, z);
  }
  function gd(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Np() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, a = 0, t = performance.getEntriesByType("resource"), l = 0;
        l < t.length;
        l++
      ) {
        var n = t[l],
          i = n.transferSize,
          s = n.initiatorType,
          r = n.duration;
        if (i && r && gd(s)) {
          for (s = 0, r = n.responseEnd, l += 1; l < t.length; l++) {
            var h = t[l],
              j = h.startTime;
            if (j > r) break;
            var T = h.transferSize,
              R = h.initiatorType;
            T &&
              gd(R) &&
              ((h = h.responseEnd), (s += T * (h < r ? 1 : (r - j) / (h - j))));
          }
          if ((--l, (a += (8 * (i + s)) / (n.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return a / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var mc = null,
    hc = null;
  function Ki(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function xd(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function bd(e, a) {
    if (e === 0)
      switch (a) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && a === "foreignObject" ? 0 : e;
  }
  function pc(e, a) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof a.children == "string" ||
      typeof a.children == "number" ||
      typeof a.children == "bigint" ||
      (typeof a.dangerouslySetInnerHTML == "object" &&
        a.dangerouslySetInnerHTML !== null &&
        a.dangerouslySetInnerHTML.__html != null)
    );
  }
  var yc = null;
  function Ep() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === yc
        ? !1
        : ((yc = e), !0)
      : ((yc = null), !1);
  }
  var Sd = typeof setTimeout == "function" ? setTimeout : void 0,
    zp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    jd = typeof Promise == "function" ? Promise : void 0,
    Tp =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof jd < "u"
        ? function (e) {
            return jd.resolve(null).then(e).catch(Ap);
          }
        : Sd;
  function Ap(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function At(e) {
    return e === "head";
  }
  function Nd(e, a) {
    var t = a,
      l = 0;
    do {
      var n = t.nextSibling;
      if ((e.removeChild(t), n && n.nodeType === 8))
        if (((t = n.data), t === "/$" || t === "/&")) {
          if (l === 0) {
            e.removeChild(n), Ll(a);
            return;
          }
          l--;
        } else if (
          t === "$" ||
          t === "$?" ||
          t === "$~" ||
          t === "$!" ||
          t === "&"
        )
          l++;
        else if (t === "html") An(e.ownerDocument.documentElement);
        else if (t === "head") {
          (t = e.ownerDocument.head), An(t);
          for (var i = t.firstChild; i; ) {
            var s = i.nextSibling,
              r = i.nodeName;
            i[Zl] ||
              r === "SCRIPT" ||
              r === "STYLE" ||
              (r === "LINK" && i.rel.toLowerCase() === "stylesheet") ||
              t.removeChild(i),
              (i = s);
          }
        } else t === "body" && An(e.ownerDocument.body);
      t = n;
    } while (t);
    Ll(a);
  }
  function Ed(e, a) {
    var t = e;
    e = 0;
    do {
      var l = t.nextSibling;
      if (
        (t.nodeType === 1
          ? a
            ? ((t._stashedDisplay = t.style.display),
              (t.style.display = "none"))
            : ((t.style.display = t._stashedDisplay || ""),
              t.getAttribute("style") === "" && t.removeAttribute("style"))
          : t.nodeType === 3 &&
            (a
              ? ((t._stashedText = t.nodeValue), (t.nodeValue = ""))
              : (t.nodeValue = t._stashedText || "")),
        l && l.nodeType === 8)
      )
        if (((t = l.data), t === "/$")) {
          if (e === 0) break;
          e--;
        } else (t !== "$" && t !== "$?" && t !== "$~" && t !== "$!") || e++;
      t = l;
    } while (t);
  }
  function vc(e) {
    var a = e.firstChild;
    for (a && a.nodeType === 10 && (a = a.nextSibling); a; ) {
      var t = a;
      switch (((a = a.nextSibling), t.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          vc(t), js(t);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (t.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(t);
    }
  }
  function Cp(e, a, t, l) {
    for (; e.nodeType === 1; ) {
      var n = t;
      if (e.nodeName.toLowerCase() !== a.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[Zl])
          switch (a) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((i = e.getAttribute("rel")),
                i === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                i !== n.rel ||
                e.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                e.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                e.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((i = e.getAttribute("src")),
                (i !== (n.src == null ? null : n.src) ||
                  e.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  e.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  i &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (a === "input" && e.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === i) return e;
      } else return e;
      if (((e = Aa(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Mp(e, a, t) {
    if (a === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = Aa(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function zd(e, a) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
        ((e = Aa(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function gc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function xc(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function Op(e, a) {
    var t = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = a;
    else if (e.data !== "$?" || t.readyState !== "loading") a();
    else {
      var l = function () {
        a(), t.removeEventListener("DOMContentLoaded", l);
      };
      t.addEventListener("DOMContentLoaded", l), (e._reactRetry = l);
    }
  }
  function Aa(e) {
    for (; e != null; e = e.nextSibling) {
      var a = e.nodeType;
      if (a === 1 || a === 3) break;
      if (a === 8) {
        if (
          ((a = e.data),
          a === "$" ||
            a === "$!" ||
            a === "$?" ||
            a === "$~" ||
            a === "&" ||
            a === "F!" ||
            a === "F")
        )
          break;
        if (a === "/$" || a === "/&") return null;
      }
    }
    return e;
  }
  var bc = null;
  function Td(e) {
    e = e.nextSibling;
    for (var a = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "/$" || t === "/&") {
          if (a === 0) return Aa(e.nextSibling);
          a--;
        } else
          (t !== "$" && t !== "$!" && t !== "$?" && t !== "$~" && t !== "&") ||
            a++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Ad(e) {
    e = e.previousSibling;
    for (var a = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&") {
          if (a === 0) return e;
          a--;
        } else (t !== "/$" && t !== "/&") || a++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Cd(e, a, t) {
    switch (((a = Ki(t)), e)) {
      case "html":
        if (((e = a.documentElement), !e)) throw Error(o(452));
        return e;
      case "head":
        if (((e = a.head), !e)) throw Error(o(453));
        return e;
      case "body":
        if (((e = a.body), !e)) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function An(e) {
    for (var a = e.attributes; a.length; ) e.removeAttributeNode(a[0]);
    js(e);
  }
  var Ca = new Map(),
    Md = new Set();
  function Ji(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument;
  }
  var nt = U.d;
  U.d = { f: _p, r: Rp, D: Dp, C: qp, L: Up, m: Hp, X: Bp, S: Lp, M: Yp };
  function _p() {
    var e = nt.f(),
      a = Bi();
    return e || a;
  }
  function Rp(e) {
    var a = tl(e);
    a !== null && a.tag === 5 && a.type === "form" ? Vr(a) : nt.r(e);
  }
  var ql = typeof document > "u" ? null : document;
  function Od(e, a, t) {
    var l = ql;
    if (l && typeof a == "string" && a) {
      var n = ba(a);
      (n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof t == "string" && (n += '[crossorigin="' + t + '"]'),
        Md.has(n) ||
          (Md.add(n),
          (e = { rel: e, crossOrigin: t, href: a }),
          l.querySelector(n) === null &&
            ((a = l.createElement("link")),
            Je(a, "link", e),
            Ge(a),
            l.head.appendChild(a)));
    }
  }
  function Dp(e) {
    nt.D(e), Od("dns-prefetch", e, null);
  }
  function qp(e, a) {
    nt.C(e, a), Od("preconnect", e, a);
  }
  function Up(e, a, t) {
    nt.L(e, a, t);
    var l = ql;
    if (l && e && a) {
      var n = 'link[rel="preload"][as="' + ba(a) + '"]';
      a === "image" && t && t.imageSrcSet
        ? ((n += '[imagesrcset="' + ba(t.imageSrcSet) + '"]'),
          typeof t.imageSizes == "string" &&
            (n += '[imagesizes="' + ba(t.imageSizes) + '"]'))
        : (n += '[href="' + ba(e) + '"]');
      var i = n;
      switch (a) {
        case "style":
          i = Ul(e);
          break;
        case "script":
          i = Hl(e);
      }
      Ca.has(i) ||
        ((e = _(
          {
            rel: "preload",
            href: a === "image" && t && t.imageSrcSet ? void 0 : e,
            as: a,
          },
          t
        )),
        Ca.set(i, e),
        l.querySelector(n) !== null ||
          (a === "style" && l.querySelector(Cn(i))) ||
          (a === "script" && l.querySelector(Mn(i))) ||
          ((a = l.createElement("link")),
          Je(a, "link", e),
          Ge(a),
          l.head.appendChild(a)));
    }
  }
  function Hp(e, a) {
    nt.m(e, a);
    var t = ql;
    if (t && e) {
      var l = a && typeof a.as == "string" ? a.as : "script",
        n =
          'link[rel="modulepreload"][as="' + ba(l) + '"][href="' + ba(e) + '"]',
        i = n;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Hl(e);
      }
      if (
        !Ca.has(i) &&
        ((e = _({ rel: "modulepreload", href: e }, a)),
        Ca.set(i, e),
        t.querySelector(n) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (t.querySelector(Mn(i))) return;
        }
        (l = t.createElement("link")),
          Je(l, "link", e),
          Ge(l),
          t.head.appendChild(l);
      }
    }
  }
  function Lp(e, a, t) {
    nt.S(e, a, t);
    var l = ql;
    if (l && e) {
      var n = ll(l).hoistableStyles,
        i = Ul(e);
      a = a || "default";
      var s = n.get(i);
      if (!s) {
        var r = { loading: 0, preload: null };
        if ((s = l.querySelector(Cn(i)))) r.loading = 5;
        else {
          (e = _({ rel: "stylesheet", href: e, "data-precedence": a }, t)),
            (t = Ca.get(i)) && Sc(e, t);
          var h = (s = l.createElement("link"));
          Ge(h),
            Je(h, "link", e),
            (h._p = new Promise(function (j, T) {
              (h.onload = j), (h.onerror = T);
            })),
            h.addEventListener("load", function () {
              r.loading |= 1;
            }),
            h.addEventListener("error", function () {
              r.loading |= 2;
            }),
            (r.loading |= 4),
            ki(s, a, l);
        }
        (s = { type: "stylesheet", instance: s, count: 1, state: r }),
          n.set(i, s);
      }
    }
  }
  function Bp(e, a) {
    nt.X(e, a);
    var t = ql;
    if (t && e) {
      var l = ll(t).hoistableScripts,
        n = Hl(e),
        i = l.get(n);
      i ||
        ((i = t.querySelector(Mn(n))),
        i ||
          ((e = _({ src: e, async: !0 }, a)),
          (a = Ca.get(n)) && jc(e, a),
          (i = t.createElement("script")),
          Ge(i),
          Je(i, "link", e),
          t.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        l.set(n, i));
    }
  }
  function Yp(e, a) {
    nt.M(e, a);
    var t = ql;
    if (t && e) {
      var l = ll(t).hoistableScripts,
        n = Hl(e),
        i = l.get(n);
      i ||
        ((i = t.querySelector(Mn(n))),
        i ||
          ((e = _({ src: e, async: !0, type: "module" }, a)),
          (a = Ca.get(n)) && jc(e, a),
          (i = t.createElement("script")),
          Ge(i),
          Je(i, "link", e),
          t.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        l.set(n, i));
    }
  }
  function _d(e, a, t, l) {
    var n = (n = te.current) ? Ji(n) : null;
    if (!n) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof t.precedence == "string" && typeof t.href == "string"
          ? ((a = Ul(t.href)),
            (t = ll(n).hoistableStyles),
            (l = t.get(a)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              t.set(a, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          t.rel === "stylesheet" &&
          typeof t.href == "string" &&
          typeof t.precedence == "string"
        ) {
          e = Ul(t.href);
          var i = ll(n).hoistableStyles,
            s = i.get(e);
          if (
            (s ||
              ((n = n.ownerDocument || n),
              (s = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              i.set(e, s),
              (i = n.querySelector(Cn(e))) &&
                !i._p &&
                ((s.instance = i), (s.state.loading = 5)),
              Ca.has(e) ||
                ((t = {
                  rel: "preload",
                  as: "style",
                  href: t.href,
                  crossOrigin: t.crossOrigin,
                  integrity: t.integrity,
                  media: t.media,
                  hrefLang: t.hrefLang,
                  referrerPolicy: t.referrerPolicy,
                }),
                Ca.set(e, t),
                i || Gp(n, e, t, s.state))),
            a && l === null)
          )
            throw Error(o(528, ""));
          return s;
        }
        if (a && l !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (a = t.async),
          (t = t.src),
          typeof t == "string" &&
          a &&
          typeof a != "function" &&
          typeof a != "symbol"
            ? ((a = Hl(t)),
              (t = ll(n).hoistableScripts),
              (l = t.get(a)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                t.set(a, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, e));
    }
  }
  function Ul(e) {
    return 'href="' + ba(e) + '"';
  }
  function Cn(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Rd(e) {
    return _({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Gp(e, a, t, l) {
    e.querySelector('link[rel="preload"][as="style"][' + a + "]")
      ? (l.loading = 1)
      : ((a = e.createElement("link")),
        (l.preload = a),
        a.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        a.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        Je(a, "link", t),
        Ge(a),
        e.head.appendChild(a));
  }
  function Hl(e) {
    return '[src="' + ba(e) + '"]';
  }
  function Mn(e) {
    return "script[async]" + e;
  }
  function Dd(e, a, t) {
    if ((a.count++, a.instance === null))
      switch (a.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + ba(t.href) + '"]');
          if (l) return (a.instance = l), Ge(l), l;
          var n = _({}, t, {
            "data-href": t.href,
            "data-precedence": t.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            Ge(l),
            Je(l, "style", n),
            ki(l, t.precedence, e),
            (a.instance = l)
          );
        case "stylesheet":
          n = Ul(t.href);
          var i = e.querySelector(Cn(n));
          if (i) return (a.state.loading |= 4), (a.instance = i), Ge(i), i;
          (l = Rd(t)),
            (n = Ca.get(n)) && Sc(l, n),
            (i = (e.ownerDocument || e).createElement("link")),
            Ge(i);
          var s = i;
          return (
            (s._p = new Promise(function (r, h) {
              (s.onload = r), (s.onerror = h);
            })),
            Je(i, "link", l),
            (a.state.loading |= 4),
            ki(i, t.precedence, e),
            (a.instance = i)
          );
        case "script":
          return (
            (i = Hl(t.src)),
            (n = e.querySelector(Mn(i)))
              ? ((a.instance = n), Ge(n), n)
              : ((l = t),
                (n = Ca.get(i)) && ((l = _({}, t)), jc(l, n)),
                (e = e.ownerDocument || e),
                (n = e.createElement("script")),
                Ge(n),
                Je(n, "link", l),
                e.head.appendChild(n),
                (a.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, a.type));
      }
    else
      a.type === "stylesheet" &&
        (a.state.loading & 4) === 0 &&
        ((l = a.instance), (a.state.loading |= 4), ki(l, t.precedence, e));
    return a.instance;
  }
  function ki(e, a, t) {
    for (
      var l = t.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        n = l.length ? l[l.length - 1] : null,
        i = n,
        s = 0;
      s < l.length;
      s++
    ) {
      var r = l[s];
      if (r.dataset.precedence === a) i = r;
      else if (i !== n) break;
    }
    i
      ? i.parentNode.insertBefore(e, i.nextSibling)
      : ((a = t.nodeType === 9 ? t.head : t), a.insertBefore(e, a.firstChild));
  }
  function Sc(e, a) {
    e.crossOrigin == null && (e.crossOrigin = a.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = a.referrerPolicy),
      e.title == null && (e.title = a.title);
  }
  function jc(e, a) {
    e.crossOrigin == null && (e.crossOrigin = a.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = a.referrerPolicy),
      e.integrity == null && (e.integrity = a.integrity);
  }
  var $i = null;
  function qd(e, a, t) {
    if ($i === null) {
      var l = new Map(),
        n = ($i = new Map());
      n.set(t, l);
    } else (n = $i), (l = n.get(t)), l || ((l = new Map()), n.set(t, l));
    if (l.has(e)) return l;
    for (
      l.set(e, null), t = t.getElementsByTagName(e), n = 0;
      n < t.length;
      n++
    ) {
      var i = t[n];
      if (
        !(
          i[Zl] ||
          i[we] ||
          (e === "link" && i.getAttribute("rel") === "stylesheet")
        ) &&
        i.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var s = i.getAttribute(a) || "";
        s = e + s;
        var r = l.get(s);
        r ? r.push(i) : l.set(s, [i]);
      }
    }
    return l;
  }
  function Ud(e, a, t) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        t,
        a === "title" ? e.querySelector("head > title") : null
      );
  }
  function Xp(e, a, t) {
    if (t === 1 || a.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof a.precedence != "string" ||
          typeof a.href != "string" ||
          a.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof a.rel != "string" ||
          typeof a.href != "string" ||
          a.href === "" ||
          a.onLoad ||
          a.onError
        )
          break;
        switch (a.rel) {
          case "stylesheet":
            return (
              (e = a.disabled), typeof a.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          a.async &&
          typeof a.async != "function" &&
          typeof a.async != "symbol" &&
          !a.onLoad &&
          !a.onError &&
          a.src &&
          typeof a.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Hd(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Qp(e, a, t, l) {
    if (
      t.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var n = Ul(l.href),
          i = a.querySelector(Cn(n));
        if (i) {
          (a = i._p),
            a !== null &&
              typeof a == "object" &&
              typeof a.then == "function" &&
              (e.count++, (e = Wi.bind(e)), a.then(e, e)),
            (t.state.loading |= 4),
            (t.instance = i),
            Ge(i);
          return;
        }
        (i = a.ownerDocument || a),
          (l = Rd(l)),
          (n = Ca.get(n)) && Sc(l, n),
          (i = i.createElement("link")),
          Ge(i);
        var s = i;
        (s._p = new Promise(function (r, h) {
          (s.onload = r), (s.onerror = h);
        })),
          Je(i, "link", l),
          (t.instance = i);
      }
      e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(t, a),
        (a = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (e.count++,
          (t = Wi.bind(e)),
          a.addEventListener("load", t),
          a.addEventListener("error", t));
    }
  }
  var Nc = 0;
  function wp(e, a) {
    return (
      e.stylesheets && e.count === 0 && Ii(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (t) {
            var l = setTimeout(function () {
              if ((e.stylesheets && Ii(e, e.stylesheets), e.unsuspend)) {
                var i = e.unsuspend;
                (e.unsuspend = null), i();
              }
            }, 6e4 + a);
            0 < e.imgBytes && Nc === 0 && (Nc = 62500 * Np());
            var n = setTimeout(function () {
              if (
                ((e.waitingForImages = !1),
                e.count === 0 &&
                  (e.stylesheets && Ii(e, e.stylesheets), e.unsuspend))
              ) {
                var i = e.unsuspend;
                (e.unsuspend = null), i();
              }
            }, (e.imgBytes > Nc ? 50 : 800) + a);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(l), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function Wi() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Ii(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Fi = null;
  function Ii(e, a) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Fi = new Map()),
        a.forEach(Zp, e),
        (Fi = null),
        Wi.call(e));
  }
  function Zp(e, a) {
    if (!(a.state.loading & 4)) {
      var t = Fi.get(e);
      if (t) var l = t.get(null);
      else {
        (t = new Map()), Fi.set(e, t);
        for (
          var n = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            i = 0;
          i < n.length;
          i++
        ) {
          var s = n[i];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") &&
            (t.set(s.dataset.precedence, s), (l = s));
        }
        l && t.set(null, l);
      }
      (n = a.instance),
        (s = n.getAttribute("data-precedence")),
        (i = t.get(s) || l),
        i === l && t.set(null, n),
        t.set(s, n),
        this.count++,
        (l = Wi.bind(this)),
        n.addEventListener("load", l),
        n.addEventListener("error", l),
        i
          ? i.parentNode.insertBefore(n, i.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(n, e.firstChild)),
        (a.state.loading |= 4);
    }
  }
  var On = {
    $$typeof: F,
    Provider: null,
    Consumer: null,
    _currentValue: $,
    _currentValue2: $,
    _threadCount: 0,
  };
  function Vp(e, a, t, l, n, i, s, r, h) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = gs(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = gs(0)),
      (this.hiddenUpdates = gs(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = n),
      (this.onCaughtError = i),
      (this.onRecoverableError = s),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = h),
      (this.incompleteTransitions = new Map());
  }
  function Ld(e, a, t, l, n, i, s, r, h, j, T, R) {
    return (
      (e = new Vp(e, a, t, s, h, j, T, R, r)),
      (a = 1),
      i === !0 && (a |= 24),
      (i = ma(3, null, null, a)),
      (e.current = i),
      (i.stateNode = e),
      (a = tu()),
      a.refCount++,
      (e.pooledCache = a),
      a.refCount++,
      (i.memoizedState = { element: l, isDehydrated: t, cache: a }),
      su(i),
      e
    );
  }
  function Bd(e) {
    return e ? ((e = ml), e) : ml;
  }
  function Yd(e, a, t, l, n, i) {
    (n = Bd(n)),
      l.context === null ? (l.context = n) : (l.pendingContext = n),
      (l = yt(a)),
      (l.payload = { element: t }),
      (i = i === void 0 ? null : i),
      i !== null && (l.callback = i),
      (t = vt(e, l, a)),
      t !== null && (sa(t, e, a), cn(t, e, a));
  }
  function Gd(e, a) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < a ? t : a;
    }
  }
  function Ec(e, a) {
    Gd(e, a), (e = e.alternate) && Gd(e, a);
  }
  function Xd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var a = Gt(e, 67108864);
      a !== null && sa(a, e, 67108864), Ec(e, 67108864);
    }
  }
  function Qd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var a = ga();
      a = xs(a);
      var t = Gt(e, a);
      t !== null && sa(t, e, a), Ec(e, a);
    }
  }
  var Pi = !0;
  function Kp(e, a, t, l) {
    var n = C.T;
    C.T = null;
    var i = U.p;
    try {
      (U.p = 2), zc(e, a, t, l);
    } finally {
      (U.p = i), (C.T = n);
    }
  }
  function Jp(e, a, t, l) {
    var n = C.T;
    C.T = null;
    var i = U.p;
    try {
      (U.p = 8), zc(e, a, t, l);
    } finally {
      (U.p = i), (C.T = n);
    }
  }
  function zc(e, a, t, l) {
    if (Pi) {
      var n = Tc(l);
      if (n === null) fc(e, a, l, es, t), Zd(e, l);
      else if ($p(n, e, a, t, l)) l.stopPropagation();
      else if ((Zd(e, l), a & 4 && -1 < kp.indexOf(e))) {
        for (; n !== null; ) {
          var i = tl(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                  var s = Ut(i.pendingLanes);
                  if (s !== 0) {
                    var r = i;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; s; ) {
                      var h = 1 << (31 - fa(s));
                      (r.entanglements[1] |= h), (s &= ~h);
                    }
                    Ha(i), (re & 6) === 0 && ((Hi = oa() + 500), En(0));
                  }
                }
                break;
              case 31:
              case 13:
                (r = Gt(i, 2)), r !== null && sa(r, i, 2), Bi(), Ec(i, 2);
            }
          if (((i = Tc(l)), i === null && fc(e, a, l, es, t), i === n)) break;
          n = i;
        }
        n !== null && l.stopPropagation();
      } else fc(e, a, l, null, t);
    }
  }
  function Tc(e) {
    return (e = Cs(e)), Ac(e);
  }
  var es = null;
  function Ac(e) {
    if (((es = null), (e = al(e)), e !== null)) {
      var a = g(e);
      if (a === null) e = null;
      else {
        var t = a.tag;
        if (t === 13) {
          if (((e = E(a)), e !== null)) return e;
          e = null;
        } else if (t === 31) {
          if (((e = D(a)), e !== null)) return e;
          e = null;
        } else if (t === 3) {
          if (a.stateNode.current.memoizedState.isDehydrated)
            return a.tag === 3 ? a.stateNode.containerInfo : null;
          e = null;
        } else a !== e && (e = null);
      }
    }
    return (es = e), null;
  }
  function wd(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Dm()) {
          case $c:
            return 2;
          case Wc:
            return 8;
          case wn:
          case qm:
            return 32;
          case Fc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Cc = !1,
    Ct = null,
    Mt = null,
    Ot = null,
    _n = new Map(),
    Rn = new Map(),
    _t = [],
    kp =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Zd(e, a) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ct = null;
        break;
      case "dragenter":
      case "dragleave":
        Mt = null;
        break;
      case "mouseover":
      case "mouseout":
        Ot = null;
        break;
      case "pointerover":
      case "pointerout":
        _n.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rn.delete(a.pointerId);
    }
  }
  function Dn(e, a, t, l, n, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: a,
          domEventName: t,
          eventSystemFlags: l,
          nativeEvent: i,
          targetContainers: [n],
        }),
        a !== null && ((a = tl(a)), a !== null && Xd(a)),
        e)
      : ((e.eventSystemFlags |= l),
        (a = e.targetContainers),
        n !== null && a.indexOf(n) === -1 && a.push(n),
        e);
  }
  function $p(e, a, t, l, n) {
    switch (a) {
      case "focusin":
        return (Ct = Dn(Ct, e, a, t, l, n)), !0;
      case "dragenter":
        return (Mt = Dn(Mt, e, a, t, l, n)), !0;
      case "mouseover":
        return (Ot = Dn(Ot, e, a, t, l, n)), !0;
      case "pointerover":
        var i = n.pointerId;
        return _n.set(i, Dn(_n.get(i) || null, e, a, t, l, n)), !0;
      case "gotpointercapture":
        return (
          (i = n.pointerId), Rn.set(i, Dn(Rn.get(i) || null, e, a, t, l, n)), !0
        );
    }
    return !1;
  }
  function Vd(e) {
    var a = al(e.target);
    if (a !== null) {
      var t = g(a);
      if (t !== null) {
        if (((a = t.tag), a === 13)) {
          if (((a = E(t)), a !== null)) {
            (e.blockedOn = a),
              lo(e.priority, function () {
                Qd(t);
              });
            return;
          }
        } else if (a === 31) {
          if (((a = D(t)), a !== null)) {
            (e.blockedOn = a),
              lo(e.priority, function () {
                Qd(t);
              });
            return;
          }
        } else if (a === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function as(e) {
    if (e.blockedOn !== null) return !1;
    for (var a = e.targetContainers; 0 < a.length; ) {
      var t = Tc(e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var l = new t.constructor(t.type, t);
        (As = l), t.target.dispatchEvent(l), (As = null);
      } else return (a = tl(t)), a !== null && Xd(a), (e.blockedOn = t), !1;
      a.shift();
    }
    return !0;
  }
  function Kd(e, a, t) {
    as(e) && t.delete(a);
  }
  function Wp() {
    (Cc = !1),
      Ct !== null && as(Ct) && (Ct = null),
      Mt !== null && as(Mt) && (Mt = null),
      Ot !== null && as(Ot) && (Ot = null),
      _n.forEach(Kd),
      Rn.forEach(Kd);
  }
  function ts(e, a) {
    e.blockedOn === a &&
      ((e.blockedOn = null),
      Cc ||
        ((Cc = !0),
        c.unstable_scheduleCallback(c.unstable_NormalPriority, Wp)));
  }
  var ls = null;
  function Jd(e) {
    ls !== e &&
      ((ls = e),
      c.unstable_scheduleCallback(c.unstable_NormalPriority, function () {
        ls === e && (ls = null);
        for (var a = 0; a < e.length; a += 3) {
          var t = e[a],
            l = e[a + 1],
            n = e[a + 2];
          if (typeof l != "function") {
            if (Ac(l || t) === null) continue;
            break;
          }
          var i = tl(t);
          i !== null &&
            (e.splice(a, 3),
            (a -= 3),
            Tu(i, { pending: !0, data: n, method: t.method, action: l }, l, n));
        }
      }));
  }
  function Ll(e) {
    function a(h) {
      return ts(h, e);
    }
    Ct !== null && ts(Ct, e),
      Mt !== null && ts(Mt, e),
      Ot !== null && ts(Ot, e),
      _n.forEach(a),
      Rn.forEach(a);
    for (var t = 0; t < _t.length; t++) {
      var l = _t[t];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < _t.length && ((t = _t[0]), t.blockedOn === null); )
      Vd(t), t.blockedOn === null && _t.shift();
    if (((t = (e.ownerDocument || e).$$reactFormReplay), t != null))
      for (l = 0; l < t.length; l += 3) {
        var n = t[l],
          i = t[l + 1],
          s = n[ea] || null;
        if (typeof i == "function") s || Jd(t);
        else if (s) {
          var r = null;
          if (i && i.hasAttribute("formAction")) {
            if (((n = i), (s = i[ea] || null))) r = s.formAction;
            else if (Ac(n) !== null) continue;
          } else r = s.action;
          typeof r == "function" ? (t[l + 1] = r) : (t.splice(l, 3), (l -= 3)),
            Jd(t);
        }
      }
  }
  function kd() {
    function e(i) {
      i.canIntercept &&
        i.info === "react-transition" &&
        i.intercept({
          handler: function () {
            return new Promise(function (s) {
              return (n = s);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function a() {
      n !== null && (n(), (n = null)), l || setTimeout(t, 20);
    }
    function t() {
      if (!l && !navigation.transition) {
        var i = navigation.currentEntry;
        i &&
          i.url != null &&
          navigation.navigate(i.url, {
            state: i.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var l = !1,
        n = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", a),
        navigation.addEventListener("navigateerror", a),
        setTimeout(t, 100),
        function () {
          (l = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", a),
            navigation.removeEventListener("navigateerror", a),
            n !== null && (n(), (n = null));
        }
      );
    }
  }
  function Mc(e) {
    this._internalRoot = e;
  }
  (ns.prototype.render = Mc.prototype.render =
    function (e) {
      var a = this._internalRoot;
      if (a === null) throw Error(o(409));
      var t = a.current,
        l = ga();
      Yd(t, l, e, a, null, null);
    }),
    (ns.prototype.unmount = Mc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var a = e.containerInfo;
          Yd(e.current, 2, null, e, null, null), Bi(), (a[el] = null);
        }
      });
  function ns(e) {
    this._internalRoot = e;
  }
  ns.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var a = to();
      e = { blockedOn: null, target: e, priority: a };
      for (var t = 0; t < _t.length && a !== 0 && a < _t[t].priority; t++);
      _t.splice(t, 0, e), t === 0 && Vd(e);
    }
  };
  var $d = f.version;
  if ($d !== "19.2.0") throw Error(o(527, $d, "19.2.0"));
  U.findDOMNode = function (e) {
    var a = e._reactInternals;
    if (a === void 0)
      throw typeof e.render == "function"
        ? Error(o(188))
        : ((e = Object.keys(e).join(",")), Error(o(268, e)));
    return (
      (e = p(a)),
      (e = e !== null ? A(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Fp = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: C,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var is = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!is.isDisabled && is.supportsFiber)
      try {
        (Xl = is.inject(Fp)), (ra = is);
      } catch {}
  }
  return (
    (Un.createRoot = function (e, a) {
      if (!m(e)) throw Error(o(299));
      var t = !1,
        l = "",
        n = af,
        i = tf,
        s = lf;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (t = !0),
          a.identifierPrefix !== void 0 && (l = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (i = a.onCaughtError),
          a.onRecoverableError !== void 0 && (s = a.onRecoverableError)),
        (a = Ld(e, 1, !1, null, null, t, l, null, n, i, s, kd)),
        (e[el] = a.current),
        rc(e),
        new Mc(a)
      );
    }),
    (Un.hydrateRoot = function (e, a, t) {
      if (!m(e)) throw Error(o(299));
      var l = !1,
        n = "",
        i = af,
        s = tf,
        r = lf,
        h = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (s = t.onCaughtError),
          t.onRecoverableError !== void 0 && (r = t.onRecoverableError),
          t.formState !== void 0 && (h = t.formState)),
        (a = Ld(e, 1, !0, a, t ?? null, l, n, h, i, s, r, kd)),
        (a.context = Bd(null)),
        (t = a.current),
        (l = ga()),
        (l = xs(l)),
        (n = yt(l)),
        (n.callback = null),
        vt(t, n, l),
        (t = l),
        (a.current.lanes = t),
        wl(a, t),
        Ha(a),
        (e[el] = a.current),
        rc(e),
        new ns(a)
      );
    }),
    (Un.version = "19.2.0"),
    Un
  );
}
var im;
function u0() {
  if (im) return Rc.exports;
  im = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (f) {
        console.error(f);
      }
  }
  return c(), (Rc.exports = s0()), Rc.exports;
}
var c0 = u0();
/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var sm = "popstate";
function o0(c = {}) {
  function f(o, m) {
    let { pathname: g, search: E, hash: D } = o.location;
    return Yc(
      "",
      { pathname: g, search: E, hash: D },
      (m.state && m.state.usr) || null,
      (m.state && m.state.key) || "default"
    );
  }
  function d(o, m) {
    return typeof m == "string" ? m : Bn(m);
  }
  return f0(f, d, null, c);
}
function ze(c, f) {
  if (c === !1 || c === null || typeof c > "u") throw new Error(f);
}
function La(c, f) {
  if (!c) {
    typeof console < "u" && console.warn(f);
    try {
      throw new Error(f);
    } catch {}
  }
}
function r0() {
  return Math.random().toString(36).substring(2, 10);
}
function um(c, f) {
  return { usr: c.state, key: c.key, idx: f };
}
function Yc(c, f, d = null, o) {
  return {
    pathname: typeof c == "string" ? c : c.pathname,
    search: "",
    hash: "",
    ...(typeof f == "string" ? Bl(f) : f),
    state: d,
    key: (f && f.key) || o || r0(),
  };
}
function Bn({ pathname: c = "/", search: f = "", hash: d = "" }) {
  return (
    f && f !== "?" && (c += f.charAt(0) === "?" ? f : "?" + f),
    d && d !== "#" && (c += d.charAt(0) === "#" ? d : "#" + d),
    c
  );
}
function Bl(c) {
  let f = {};
  if (c) {
    let d = c.indexOf("#");
    d >= 0 && ((f.hash = c.substring(d)), (c = c.substring(0, d)));
    let o = c.indexOf("?");
    o >= 0 && ((f.search = c.substring(o)), (c = c.substring(0, o))),
      c && (f.pathname = c);
  }
  return f;
}
function f0(c, f, d, o = {}) {
  let { window: m = document.defaultView, v5Compat: g = !1 } = o,
    E = m.history,
    D = "POP",
    b = null,
    p = A();
  p == null && ((p = 0), E.replaceState({ ...E.state, idx: p }, ""));
  function A() {
    return (E.state || { idx: null }).idx;
  }
  function _() {
    D = "POP";
    let w = A(),
      X = w == null ? null : w - p;
    (p = w), b && b({ action: D, location: k.location, delta: X });
  }
  function L(w, X) {
    D = "PUSH";
    let Q = Yc(k.location, w, X);
    p = A() + 1;
    let F = um(Q, p),
      Ne = k.createHref(Q);
    try {
      E.pushState(F, "", Ne);
    } catch (Te) {
      if (Te instanceof DOMException && Te.name === "DataCloneError") throw Te;
      m.location.assign(Ne);
    }
    g && b && b({ action: D, location: k.location, delta: 1 });
  }
  function Z(w, X) {
    D = "REPLACE";
    let Q = Yc(k.location, w, X);
    p = A();
    let F = um(Q, p),
      Ne = k.createHref(Q);
    E.replaceState(F, "", Ne),
      g && b && b({ action: D, location: k.location, delta: 0 });
  }
  function K(w) {
    return d0(w);
  }
  let k = {
    get action() {
      return D;
    },
    get location() {
      return c(m, E);
    },
    listen(w) {
      if (b) throw new Error("A history only accepts one active listener");
      return (
        m.addEventListener(sm, _),
        (b = w),
        () => {
          m.removeEventListener(sm, _), (b = null);
        }
      );
    },
    createHref(w) {
      return f(m, w);
    },
    createURL: K,
    encodeLocation(w) {
      let X = K(w);
      return { pathname: X.pathname, search: X.search, hash: X.hash };
    },
    push: L,
    replace: Z,
    go(w) {
      return E.go(w);
    },
  };
  return k;
}
function d0(c, f = !1) {
  let d = "http://localhost";
  typeof window < "u" &&
    (d =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    ze(d, "No window.location.(origin|href) available to create URL");
  let o = typeof c == "string" ? c : Bn(c);
  return (
    (o = o.replace(/ $/, "%20")),
    !f && o.startsWith("//") && (o = d + o),
    new URL(o, d)
  );
}
function dm(c, f, d = "/") {
  return m0(c, f, d, !1);
}
function m0(c, f, d, o) {
  let m = typeof f == "string" ? Bl(f) : f,
    g = st(m.pathname || "/", d);
  if (g == null) return null;
  let E = mm(c);
  h0(E);
  let D = null;
  for (let b = 0; D == null && b < E.length; ++b) {
    let p = z0(g);
    D = N0(E[b], p, o);
  }
  return D;
}
function mm(c, f = [], d = [], o = "", m = !1) {
  let g = (E, D, b = m, p) => {
    let A = {
      relativePath: p === void 0 ? E.path || "" : p,
      caseSensitive: E.caseSensitive === !0,
      childrenIndex: D,
      route: E,
    };
    if (A.relativePath.startsWith("/")) {
      if (!A.relativePath.startsWith(o) && b) return;
      ze(
        A.relativePath.startsWith(o),
        `Absolute route path "${A.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (A.relativePath = A.relativePath.slice(o.length));
    }
    let _ = it([o, A.relativePath]),
      L = d.concat(A);
    E.children &&
      E.children.length > 0 &&
      (ze(
        E.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${_}".`
      ),
      mm(E.children, f, L, _, b)),
      !(E.path == null && !E.index) &&
        f.push({ path: _, score: S0(_, E.index), routesMeta: L });
  };
  return (
    c.forEach((E, D) => {
      if (E.path === "" || !E.path?.includes("?")) g(E, D);
      else for (let b of hm(E.path)) g(E, D, !0, b);
    }),
    f
  );
}
function hm(c) {
  let f = c.split("/");
  if (f.length === 0) return [];
  let [d, ...o] = f,
    m = d.endsWith("?"),
    g = d.replace(/\?$/, "");
  if (o.length === 0) return m ? [g, ""] : [g];
  let E = hm(o.join("/")),
    D = [];
  return (
    D.push(...E.map((b) => (b === "" ? g : [g, b].join("/")))),
    m && D.push(...E),
    D.map((b) => (c.startsWith("/") && b === "" ? "/" : b))
  );
}
function h0(c) {
  c.sort((f, d) =>
    f.score !== d.score
      ? d.score - f.score
      : j0(
          f.routesMeta.map((o) => o.childrenIndex),
          d.routesMeta.map((o) => o.childrenIndex)
        )
  );
}
var p0 = /^:[\w-]+$/,
  y0 = 3,
  v0 = 2,
  g0 = 1,
  x0 = 10,
  b0 = -2,
  cm = (c) => c === "*";
function S0(c, f) {
  let d = c.split("/"),
    o = d.length;
  return (
    d.some(cm) && (o += b0),
    f && (o += v0),
    d
      .filter((m) => !cm(m))
      .reduce((m, g) => m + (p0.test(g) ? y0 : g === "" ? g0 : x0), o)
  );
}
function j0(c, f) {
  return c.length === f.length && c.slice(0, -1).every((o, m) => o === f[m])
    ? c[c.length - 1] - f[f.length - 1]
    : 0;
}
function N0(c, f, d = !1) {
  let { routesMeta: o } = c,
    m = {},
    g = "/",
    E = [];
  for (let D = 0; D < o.length; ++D) {
    let b = o[D],
      p = D === o.length - 1,
      A = g === "/" ? f : f.slice(g.length) || "/",
      _ = os(
        { path: b.relativePath, caseSensitive: b.caseSensitive, end: p },
        A
      ),
      L = b.route;
    if (
      (!_ &&
        p &&
        d &&
        !o[o.length - 1].route.index &&
        (_ = os(
          { path: b.relativePath, caseSensitive: b.caseSensitive, end: !1 },
          A
        )),
      !_)
    )
      return null;
    Object.assign(m, _.params),
      E.push({
        params: m,
        pathname: it([g, _.pathname]),
        pathnameBase: M0(it([g, _.pathnameBase])),
        route: L,
      }),
      _.pathnameBase !== "/" && (g = it([g, _.pathnameBase]));
  }
  return E;
}
function os(c, f) {
  typeof c == "string" && (c = { path: c, caseSensitive: !1, end: !0 });
  let [d, o] = E0(c.path, c.caseSensitive, c.end),
    m = f.match(d);
  if (!m) return null;
  let g = m[0],
    E = g.replace(/(.)\/+$/, "$1"),
    D = m.slice(1);
  return {
    params: o.reduce((p, { paramName: A, isOptional: _ }, L) => {
      if (A === "*") {
        let K = D[L] || "";
        E = g.slice(0, g.length - K.length).replace(/(.)\/+$/, "$1");
      }
      const Z = D[L];
      return (
        _ && !Z ? (p[A] = void 0) : (p[A] = (Z || "").replace(/%2F/g, "/")), p
      );
    }, {}),
    pathname: g,
    pathnameBase: E,
    pattern: c,
  };
}
function E0(c, f = !1, d = !0) {
  La(
    c === "*" || !c.endsWith("*") || c.endsWith("/*"),
    `Route path "${c}" will be treated as if it were "${c.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let o = [],
    m =
      "^" +
      c
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (E, D, b) => (
            o.push({ paramName: D, isOptional: b != null }),
            b ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    c.endsWith("*")
      ? (o.push({ paramName: "*" }),
        (m += c === "*" || c === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : d
      ? (m += "\\/*$")
      : c !== "" && c !== "/" && (m += "(?:(?=\\/|$))"),
    [new RegExp(m, f ? void 0 : "i"), o]
  );
}
function z0(c) {
  try {
    return c
      .split("/")
      .map((f) => decodeURIComponent(f).replace(/\//g, "%2F"))
      .join("/");
  } catch (f) {
    return (
      La(
        !1,
        `The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`
      ),
      c
    );
  }
}
function st(c, f) {
  if (f === "/") return c;
  if (!c.toLowerCase().startsWith(f.toLowerCase())) return null;
  let d = f.endsWith("/") ? f.length - 1 : f.length,
    o = c.charAt(d);
  return o && o !== "/" ? null : c.slice(d) || "/";
}
function T0(c, f = "/") {
  let {
    pathname: d,
    search: o = "",
    hash: m = "",
  } = typeof c == "string" ? Bl(c) : c;
  return {
    pathname: d ? (d.startsWith("/") ? d : A0(d, f)) : f,
    search: O0(o),
    hash: _0(m),
  };
}
function A0(c, f) {
  let d = f.replace(/\/+$/, "").split("/");
  return (
    c.split("/").forEach((m) => {
      m === ".." ? d.length > 1 && d.pop() : m !== "." && d.push(m);
    }),
    d.length > 1 ? d.join("/") : "/"
  );
}
function Hc(c, f, d, o) {
  return `Cannot include a '${c}' character in a manually specified \`to.${f}\` field [${JSON.stringify(
    o
  )}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function C0(c) {
  return c.filter(
    (f, d) => d === 0 || (f.route.path && f.route.path.length > 0)
  );
}
function pm(c) {
  let f = C0(c);
  return f.map((d, o) => (o === f.length - 1 ? d.pathname : d.pathnameBase));
}
function ym(c, f, d, o = !1) {
  let m;
  typeof c == "string"
    ? (m = Bl(c))
    : ((m = { ...c }),
      ze(
        !m.pathname || !m.pathname.includes("?"),
        Hc("?", "pathname", "search", m)
      ),
      ze(
        !m.pathname || !m.pathname.includes("#"),
        Hc("#", "pathname", "hash", m)
      ),
      ze(!m.search || !m.search.includes("#"), Hc("#", "search", "hash", m)));
  let g = c === "" || m.pathname === "",
    E = g ? "/" : m.pathname,
    D;
  if (E == null) D = d;
  else {
    let _ = f.length - 1;
    if (!o && E.startsWith("..")) {
      let L = E.split("/");
      for (; L[0] === ".."; ) L.shift(), (_ -= 1);
      m.pathname = L.join("/");
    }
    D = _ >= 0 ? f[_] : "/";
  }
  let b = T0(m, D),
    p = E && E !== "/" && E.endsWith("/"),
    A = (g || E === ".") && d.endsWith("/");
  return !b.pathname.endsWith("/") && (p || A) && (b.pathname += "/"), b;
}
var it = (c) => c.join("/").replace(/\/\/+/g, "/"),
  M0 = (c) => c.replace(/\/+$/, "").replace(/^\/*/, "/"),
  O0 = (c) => (!c || c === "?" ? "" : c.startsWith("?") ? c : "?" + c),
  _0 = (c) => (!c || c === "#" ? "" : c.startsWith("#") ? c : "#" + c);
function R0(c) {
  return (
    c != null &&
    typeof c.status == "number" &&
    typeof c.statusText == "string" &&
    typeof c.internal == "boolean" &&
    "data" in c
  );
}
var vm = ["POST", "PUT", "PATCH", "DELETE"];
new Set(vm);
var D0 = ["GET", ...vm];
new Set(D0);
var Yl = M.createContext(null);
Yl.displayName = "DataRouter";
var rs = M.createContext(null);
rs.displayName = "DataRouterState";
M.createContext(!1);
var gm = M.createContext({ isTransitioning: !1 });
gm.displayName = "ViewTransition";
var q0 = M.createContext(new Map());
q0.displayName = "Fetchers";
var U0 = M.createContext(null);
U0.displayName = "Await";
var Ba = M.createContext(null);
Ba.displayName = "Navigation";
var Yn = M.createContext(null);
Yn.displayName = "Location";
var Ya = M.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Ya.displayName = "Route";
var Qc = M.createContext(null);
Qc.displayName = "RouteError";
function H0(c, { relative: f } = {}) {
  ze(
    Gn(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: d, navigator: o } = M.useContext(Ba),
    { hash: m, pathname: g, search: E } = Xn(c, { relative: f }),
    D = g;
  return (
    d !== "/" && (D = g === "/" ? d : it([d, g])),
    o.createHref({ pathname: D, search: E, hash: m })
  );
}
function Gn() {
  return M.useContext(Yn) != null;
}
function Pt() {
  return (
    ze(
      Gn(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    M.useContext(Yn).location
  );
}
var xm =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function bm(c) {
  M.useContext(Ba).static || M.useLayoutEffect(c);
}
function L0() {
  let { isDataRoute: c } = M.useContext(Ya);
  return c ? F0() : B0();
}
function B0() {
  ze(
    Gn(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let c = M.useContext(Yl),
    { basename: f, navigator: d } = M.useContext(Ba),
    { matches: o } = M.useContext(Ya),
    { pathname: m } = Pt(),
    g = JSON.stringify(pm(o)),
    E = M.useRef(!1);
  return (
    bm(() => {
      E.current = !0;
    }),
    M.useCallback(
      (b, p = {}) => {
        if ((La(E.current, xm), !E.current)) return;
        if (typeof b == "number") {
          d.go(b);
          return;
        }
        let A = ym(b, JSON.parse(g), m, p.relative === "path");
        c == null &&
          f !== "/" &&
          (A.pathname = A.pathname === "/" ? f : it([f, A.pathname])),
          (p.replace ? d.replace : d.push)(A, p.state, p);
      },
      [f, d, g, m, c]
    )
  );
}
M.createContext(null);
function Y0() {
  let { matches: c } = M.useContext(Ya),
    f = c[c.length - 1];
  return f ? f.params : {};
}
function Xn(c, { relative: f } = {}) {
  let { matches: d } = M.useContext(Ya),
    { pathname: o } = Pt(),
    m = JSON.stringify(pm(d));
  return M.useMemo(() => ym(c, JSON.parse(m), o, f === "path"), [c, m, o, f]);
}
function G0(c, f) {
  return Sm(c, f);
}
function Sm(c, f, d, o, m) {
  ze(
    Gn(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: g } = M.useContext(Ba),
    { matches: E } = M.useContext(Ya),
    D = E[E.length - 1],
    b = D ? D.params : {},
    p = D ? D.pathname : "/",
    A = D ? D.pathnameBase : "/",
    _ = D && D.route;
  {
    let Q = (_ && _.path) || "";
    jm(
      p,
      !_ || Q.endsWith("*") || Q.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${
        Q === "/" ? "*" : `${Q}/*`
      }">.`
    );
  }
  let L = Pt(),
    Z;
  if (f) {
    let Q = typeof f == "string" ? Bl(f) : f;
    ze(
      A === "/" || Q.pathname?.startsWith(A),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${A}" but pathname "${Q.pathname}" was given in the \`location\` prop.`
    ),
      (Z = Q);
  } else Z = L;
  let K = Z.pathname || "/",
    k = K;
  if (A !== "/") {
    let Q = A.replace(/^\//, "").split("/");
    k = "/" + K.replace(/^\//, "").split("/").slice(Q.length).join("/");
  }
  let w = dm(c, { pathname: k });
  La(
    _ || w != null,
    `No routes matched location "${Z.pathname}${Z.search}${Z.hash}" `
  ),
    La(
      w == null ||
        w[w.length - 1].route.element !== void 0 ||
        w[w.length - 1].route.Component !== void 0 ||
        w[w.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${Z.pathname}${Z.search}${Z.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let X = V0(
    w &&
      w.map((Q) =>
        Object.assign({}, Q, {
          params: Object.assign({}, b, Q.params),
          pathname: it([
            A,
            g.encodeLocation
              ? g.encodeLocation(
                  Q.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
                ).pathname
              : Q.pathname,
          ]),
          pathnameBase:
            Q.pathnameBase === "/"
              ? A
              : it([
                  A,
                  g.encodeLocation
                    ? g.encodeLocation(
                        Q.pathnameBase
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23")
                      ).pathname
                    : Q.pathnameBase,
                ]),
        })
      ),
    E,
    d,
    o,
    m
  );
  return f && X
    ? M.createElement(
        Yn.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...Z,
            },
            navigationType: "POP",
          },
        },
        X
      )
    : X;
}
function X0() {
  let c = W0(),
    f = R0(c)
      ? `${c.status} ${c.statusText}`
      : c instanceof Error
      ? c.message
      : JSON.stringify(c),
    d = c instanceof Error ? c.stack : null,
    o = "rgba(200,200,200, 0.5)",
    m = { padding: "0.5rem", backgroundColor: o },
    g = { padding: "2px 4px", backgroundColor: o },
    E = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", c),
    (E = M.createElement(
      M.Fragment,
      null,
      M.createElement("p", null, "💿 Hey developer 👋"),
      M.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        M.createElement("code", { style: g }, "ErrorBoundary"),
        " or",
        " ",
        M.createElement("code", { style: g }, "errorElement"),
        " prop on your route."
      )
    )),
    M.createElement(
      M.Fragment,
      null,
      M.createElement("h2", null, "Unexpected Application Error!"),
      M.createElement("h3", { style: { fontStyle: "italic" } }, f),
      d ? M.createElement("pre", { style: m }, d) : null,
      E
    )
  );
}
var Q0 = M.createElement(X0, null),
  w0 = class extends M.Component {
    constructor(c) {
      super(c),
        (this.state = {
          location: c.location,
          revalidation: c.revalidation,
          error: c.error,
        });
    }
    static getDerivedStateFromError(c) {
      return { error: c };
    }
    static getDerivedStateFromProps(c, f) {
      return f.location !== c.location ||
        (f.revalidation !== "idle" && c.revalidation === "idle")
        ? { error: c.error, location: c.location, revalidation: c.revalidation }
        : {
            error: c.error !== void 0 ? c.error : f.error,
            location: f.location,
            revalidation: c.revalidation || f.revalidation,
          };
    }
    componentDidCatch(c, f) {
      this.props.unstable_onError
        ? this.props.unstable_onError(c, f)
        : console.error(
            "React Router caught the following error during render",
            c
          );
    }
    render() {
      return this.state.error !== void 0
        ? M.createElement(
            Ya.Provider,
            { value: this.props.routeContext },
            M.createElement(Qc.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Z0({ routeContext: c, match: f, children: d }) {
  let o = M.useContext(Yl);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (f.route.errorElement || f.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = f.route.id),
    M.createElement(Ya.Provider, { value: c }, d)
  );
}
function V0(c, f = [], d = null, o = null, m = null) {
  if (c == null) {
    if (!d) return null;
    if (d.errors) c = d.matches;
    else if (f.length === 0 && !d.initialized && d.matches.length > 0)
      c = d.matches;
    else return null;
  }
  let g = c,
    E = d?.errors;
  if (E != null) {
    let p = g.findIndex((A) => A.route.id && E?.[A.route.id] !== void 0);
    ze(
      p >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        E
      ).join(",")}`
    ),
      (g = g.slice(0, Math.min(g.length, p + 1)));
  }
  let D = !1,
    b = -1;
  if (d)
    for (let p = 0; p < g.length; p++) {
      let A = g[p];
      if (
        ((A.route.HydrateFallback || A.route.hydrateFallbackElement) && (b = p),
        A.route.id)
      ) {
        let { loaderData: _, errors: L } = d,
          Z =
            A.route.loader &&
            !_.hasOwnProperty(A.route.id) &&
            (!L || L[A.route.id] === void 0);
        if (A.route.lazy || Z) {
          (D = !0), b >= 0 ? (g = g.slice(0, b + 1)) : (g = [g[0]]);
          break;
        }
      }
    }
  return g.reduceRight((p, A, _) => {
    let L,
      Z = !1,
      K = null,
      k = null;
    d &&
      ((L = E && A.route.id ? E[A.route.id] : void 0),
      (K = A.route.errorElement || Q0),
      D &&
        (b < 0 && _ === 0
          ? (jm(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (Z = !0),
            (k = null))
          : b === _ &&
            ((Z = !0), (k = A.route.hydrateFallbackElement || null))));
    let w = f.concat(g.slice(0, _ + 1)),
      X = () => {
        let Q;
        return (
          L
            ? (Q = K)
            : Z
            ? (Q = k)
            : A.route.Component
            ? (Q = M.createElement(A.route.Component, null))
            : A.route.element
            ? (Q = A.route.element)
            : (Q = p),
          M.createElement(Z0, {
            match: A,
            routeContext: { outlet: p, matches: w, isDataRoute: d != null },
            children: Q,
          })
        );
      };
    return d && (A.route.ErrorBoundary || A.route.errorElement || _ === 0)
      ? M.createElement(w0, {
          location: d.location,
          revalidation: d.revalidation,
          component: K,
          error: L,
          children: X(),
          routeContext: { outlet: null, matches: w, isDataRoute: !0 },
          unstable_onError: o,
        })
      : X();
  }, null);
}
function wc(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function K0(c) {
  let f = M.useContext(Yl);
  return ze(f, wc(c)), f;
}
function J0(c) {
  let f = M.useContext(rs);
  return ze(f, wc(c)), f;
}
function k0(c) {
  let f = M.useContext(Ya);
  return ze(f, wc(c)), f;
}
function Zc(c) {
  let f = k0(c),
    d = f.matches[f.matches.length - 1];
  return (
    ze(
      d.route.id,
      `${c} can only be used on routes that contain a unique "id"`
    ),
    d.route.id
  );
}
function $0() {
  return Zc("useRouteId");
}
function W0() {
  let c = M.useContext(Qc),
    f = J0("useRouteError"),
    d = Zc("useRouteError");
  return c !== void 0 ? c : f.errors?.[d];
}
function F0() {
  let { router: c } = K0("useNavigate"),
    f = Zc("useNavigate"),
    d = M.useRef(!1);
  return (
    bm(() => {
      d.current = !0;
    }),
    M.useCallback(
      async (m, g = {}) => {
        La(d.current, xm),
          d.current &&
            (typeof m == "number"
              ? c.navigate(m)
              : await c.navigate(m, { fromRouteId: f, ...g }));
      },
      [c, f]
    )
  );
}
var om = {};
function jm(c, f, d) {
  !f && !om[c] && ((om[c] = !0), La(!1, d));
}
M.memo(I0);
function I0({ routes: c, future: f, state: d, unstable_onError: o }) {
  return Sm(c, void 0, d, o, f);
}
function Qe(c) {
  ze(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function P0({
  basename: c = "/",
  children: f = null,
  location: d,
  navigationType: o = "POP",
  navigator: m,
  static: g = !1,
}) {
  ze(
    !Gn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let E = c.replace(/^\/*/, "/"),
    D = M.useMemo(
      () => ({ basename: E, navigator: m, static: g, future: {} }),
      [E, m, g]
    );
  typeof d == "string" && (d = Bl(d));
  let {
      pathname: b = "/",
      search: p = "",
      hash: A = "",
      state: _ = null,
      key: L = "default",
    } = d,
    Z = M.useMemo(() => {
      let K = st(b, E);
      return K == null
        ? null
        : {
            location: { pathname: K, search: p, hash: A, state: _, key: L },
            navigationType: o,
          };
    }, [E, b, p, A, _, L, o]);
  return (
    La(
      Z != null,
      `<Router basename="${E}"> is not able to match the URL "${b}${p}${A}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    Z == null
      ? null
      : M.createElement(
          Ba.Provider,
          { value: D },
          M.createElement(Yn.Provider, { children: f, value: Z })
        )
  );
}
function ey({ children: c, location: f }) {
  return G0(Gc(c), f);
}
function Gc(c, f = []) {
  let d = [];
  return (
    M.Children.forEach(c, (o, m) => {
      if (!M.isValidElement(o)) return;
      let g = [...f, m];
      if (o.type === M.Fragment) {
        d.push.apply(d, Gc(o.props.children, g));
        return;
      }
      ze(
        o.type === Qe,
        `[${
          typeof o.type == "string" ? o.type : o.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        ze(
          !o.props.index || !o.props.children,
          "An index route cannot have child routes."
        );
      let E = {
        id: o.props.id || g.join("-"),
        caseSensitive: o.props.caseSensitive,
        element: o.props.element,
        Component: o.props.Component,
        index: o.props.index,
        path: o.props.path,
        middleware: o.props.middleware,
        loader: o.props.loader,
        action: o.props.action,
        hydrateFallbackElement: o.props.hydrateFallbackElement,
        HydrateFallback: o.props.HydrateFallback,
        errorElement: o.props.errorElement,
        ErrorBoundary: o.props.ErrorBoundary,
        hasErrorBoundary:
          o.props.hasErrorBoundary === !0 ||
          o.props.ErrorBoundary != null ||
          o.props.errorElement != null,
        shouldRevalidate: o.props.shouldRevalidate,
        handle: o.props.handle,
        lazy: o.props.lazy,
      };
      o.props.children && (E.children = Gc(o.props.children, g)), d.push(E);
    }),
    d
  );
}
var us = "get",
  cs = "application/x-www-form-urlencoded";
function fs(c) {
  return c != null && typeof c.tagName == "string";
}
function ay(c) {
  return fs(c) && c.tagName.toLowerCase() === "button";
}
function ty(c) {
  return fs(c) && c.tagName.toLowerCase() === "form";
}
function ly(c) {
  return fs(c) && c.tagName.toLowerCase() === "input";
}
function ny(c) {
  return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey);
}
function iy(c, f) {
  return c.button === 0 && (!f || f === "_self") && !ny(c);
}
var ss = null;
function sy() {
  if (ss === null)
    try {
      new FormData(document.createElement("form"), 0), (ss = !1);
    } catch {
      ss = !0;
    }
  return ss;
}
var uy = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Lc(c) {
  return c != null && !uy.has(c)
    ? (La(
        !1,
        `"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cs}"`
      ),
      null)
    : c;
}
function cy(c, f) {
  let d, o, m, g, E;
  if (ty(c)) {
    let D = c.getAttribute("action");
    (o = D ? st(D, f) : null),
      (d = c.getAttribute("method") || us),
      (m = Lc(c.getAttribute("enctype")) || cs),
      (g = new FormData(c));
  } else if (ay(c) || (ly(c) && (c.type === "submit" || c.type === "image"))) {
    let D = c.form;
    if (D == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let b = c.getAttribute("formaction") || D.getAttribute("action");
    if (
      ((o = b ? st(b, f) : null),
      (d = c.getAttribute("formmethod") || D.getAttribute("method") || us),
      (m =
        Lc(c.getAttribute("formenctype")) ||
        Lc(D.getAttribute("enctype")) ||
        cs),
      (g = new FormData(D, c)),
      !sy())
    ) {
      let { name: p, type: A, value: _ } = c;
      if (A === "image") {
        let L = p ? `${p}.` : "";
        g.append(`${L}x`, "0"), g.append(`${L}y`, "0");
      } else p && g.append(p, _);
    }
  } else {
    if (fs(c))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (d = us), (o = null), (m = cs), (E = c);
  }
  return (
    g && m === "text/plain" && ((E = g), (g = void 0)),
    { action: o, method: d.toLowerCase(), encType: m, formData: g, body: E }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Vc(c, f) {
  if (c === !1 || c === null || typeof c > "u") throw new Error(f);
}
function oy(c, f, d) {
  let o =
    typeof c == "string"
      ? new URL(
          c,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : c;
  return (
    o.pathname === "/"
      ? (o.pathname = `_root.${d}`)
      : f && st(o.pathname, f) === "/"
      ? (o.pathname = `${f.replace(/\/$/, "")}/_root.${d}`)
      : (o.pathname = `${o.pathname.replace(/\/$/, "")}.${d}`),
    o
  );
}
async function ry(c, f) {
  if (c.id in f) return f[c.id];
  try {
    let d = await import(c.module);
    return (f[c.id] = d), d;
  } catch (d) {
    return (
      console.error(
        `Error loading route module \`${c.module}\`, reloading page...`
      ),
      console.error(d),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function fy(c) {
  return c == null
    ? !1
    : c.href == null
    ? c.rel === "preload" &&
      typeof c.imageSrcSet == "string" &&
      typeof c.imageSizes == "string"
    : typeof c.rel == "string" && typeof c.href == "string";
}
async function dy(c, f, d) {
  let o = await Promise.all(
    c.map(async (m) => {
      let g = f.routes[m.route.id];
      if (g) {
        let E = await ry(g, d);
        return E.links ? E.links() : [];
      }
      return [];
    })
  );
  return yy(
    o
      .flat(1)
      .filter(fy)
      .filter((m) => m.rel === "stylesheet" || m.rel === "preload")
      .map((m) =>
        m.rel === "stylesheet"
          ? { ...m, rel: "prefetch", as: "style" }
          : { ...m, rel: "prefetch" }
      )
  );
}
function rm(c, f, d, o, m, g) {
  let E = (b, p) => (d[p] ? b.route.id !== d[p].route.id : !0),
    D = (b, p) =>
      d[p].pathname !== b.pathname ||
      (d[p].route.path?.endsWith("*") && d[p].params["*"] !== b.params["*"]);
  return g === "assets"
    ? f.filter((b, p) => E(b, p) || D(b, p))
    : g === "data"
    ? f.filter((b, p) => {
        let A = o.routes[b.route.id];
        if (!A || !A.hasLoader) return !1;
        if (E(b, p) || D(b, p)) return !0;
        if (b.route.shouldRevalidate) {
          let _ = b.route.shouldRevalidate({
            currentUrl: new URL(m.pathname + m.search + m.hash, window.origin),
            currentParams: d[0]?.params || {},
            nextUrl: new URL(c, window.origin),
            nextParams: b.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof _ == "boolean") return _;
        }
        return !0;
      })
    : [];
}
function my(c, f, { includeHydrateFallback: d } = {}) {
  return hy(
    c
      .map((o) => {
        let m = f.routes[o.route.id];
        if (!m) return [];
        let g = [m.module];
        return (
          m.clientActionModule && (g = g.concat(m.clientActionModule)),
          m.clientLoaderModule && (g = g.concat(m.clientLoaderModule)),
          d &&
            m.hydrateFallbackModule &&
            (g = g.concat(m.hydrateFallbackModule)),
          m.imports && (g = g.concat(m.imports)),
          g
        );
      })
      .flat(1)
  );
}
function hy(c) {
  return [...new Set(c)];
}
function py(c) {
  let f = {},
    d = Object.keys(c).sort();
  for (let o of d) f[o] = c[o];
  return f;
}
function yy(c, f) {
  let d = new Set();
  return (
    new Set(f),
    c.reduce((o, m) => {
      let g = JSON.stringify(py(m));
      return d.has(g) || (d.add(g), o.push({ key: g, link: m })), o;
    }, [])
  );
}
function Nm() {
  let c = M.useContext(Yl);
  return (
    Vc(
      c,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    c
  );
}
function vy() {
  let c = M.useContext(rs);
  return (
    Vc(
      c,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    c
  );
}
var Kc = M.createContext(void 0);
Kc.displayName = "FrameworkContext";
function Em() {
  let c = M.useContext(Kc);
  return (
    Vc(c, "You must render this element inside a <HydratedRouter> element"), c
  );
}
function gy(c, f) {
  let d = M.useContext(Kc),
    [o, m] = M.useState(!1),
    [g, E] = M.useState(!1),
    {
      onFocus: D,
      onBlur: b,
      onMouseEnter: p,
      onMouseLeave: A,
      onTouchStart: _,
    } = f,
    L = M.useRef(null);
  M.useEffect(() => {
    if ((c === "render" && E(!0), c === "viewport")) {
      let k = (X) => {
          X.forEach((Q) => {
            E(Q.isIntersecting);
          });
        },
        w = new IntersectionObserver(k, { threshold: 0.5 });
      return (
        L.current && w.observe(L.current),
        () => {
          w.disconnect();
        }
      );
    }
  }, [c]),
    M.useEffect(() => {
      if (o) {
        let k = setTimeout(() => {
          E(!0);
        }, 100);
        return () => {
          clearTimeout(k);
        };
      }
    }, [o]);
  let Z = () => {
      m(!0);
    },
    K = () => {
      m(!1), E(!1);
    };
  return d
    ? c !== "intent"
      ? [g, L, {}]
      : [
          g,
          L,
          {
            onFocus: Hn(D, Z),
            onBlur: Hn(b, K),
            onMouseEnter: Hn(p, Z),
            onMouseLeave: Hn(A, K),
            onTouchStart: Hn(_, Z),
          },
        ]
    : [!1, L, {}];
}
function Hn(c, f) {
  return (d) => {
    c && c(d), d.defaultPrevented || f(d);
  };
}
function xy({ page: c, ...f }) {
  let { router: d } = Nm(),
    o = M.useMemo(() => dm(d.routes, c, d.basename), [d.routes, c, d.basename]);
  return o ? M.createElement(Sy, { page: c, matches: o, ...f }) : null;
}
function by(c) {
  let { manifest: f, routeModules: d } = Em(),
    [o, m] = M.useState([]);
  return (
    M.useEffect(() => {
      let g = !1;
      return (
        dy(c, f, d).then((E) => {
          g || m(E);
        }),
        () => {
          g = !0;
        }
      );
    }, [c, f, d]),
    o
  );
}
function Sy({ page: c, matches: f, ...d }) {
  let o = Pt(),
    { manifest: m, routeModules: g } = Em(),
    { basename: E } = Nm(),
    { loaderData: D, matches: b } = vy(),
    p = M.useMemo(() => rm(c, f, b, m, o, "data"), [c, f, b, m, o]),
    A = M.useMemo(() => rm(c, f, b, m, o, "assets"), [c, f, b, m, o]),
    _ = M.useMemo(() => {
      if (c === o.pathname + o.search + o.hash) return [];
      let K = new Set(),
        k = !1;
      if (
        (f.forEach((X) => {
          let Q = m.routes[X.route.id];
          !Q ||
            !Q.hasLoader ||
            ((!p.some((F) => F.route.id === X.route.id) &&
              X.route.id in D &&
              g[X.route.id]?.shouldRevalidate) ||
            Q.hasClientLoader
              ? (k = !0)
              : K.add(X.route.id));
        }),
        K.size === 0)
      )
        return [];
      let w = oy(c, E, "data");
      return (
        k &&
          K.size > 0 &&
          w.searchParams.set(
            "_routes",
            f
              .filter((X) => K.has(X.route.id))
              .map((X) => X.route.id)
              .join(",")
          ),
        [w.pathname + w.search]
      );
    }, [E, D, o, m, p, f, c, g]),
    L = M.useMemo(() => my(A, m), [A, m]),
    Z = by(A);
  return M.createElement(
    M.Fragment,
    null,
    _.map((K) =>
      M.createElement("link", {
        key: K,
        rel: "prefetch",
        as: "fetch",
        href: K,
        ...d,
      })
    ),
    L.map((K) =>
      M.createElement("link", { key: K, rel: "modulepreload", href: K, ...d })
    ),
    Z.map(({ key: K, link: k }) =>
      M.createElement("link", { key: K, nonce: d.nonce, ...k })
    )
  );
}
function jy(...c) {
  return (f) => {
    c.forEach((d) => {
      typeof d == "function" ? d(f) : d != null && (d.current = f);
    });
  };
}
var zm =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  zm && (window.__reactRouterVersion = "7.9.4");
} catch {}
function Ny({ basename: c, children: f, window: d }) {
  let o = M.useRef();
  o.current == null && (o.current = o0({ window: d, v5Compat: !0 }));
  let m = o.current,
    [g, E] = M.useState({ action: m.action, location: m.location }),
    D = M.useCallback(
      (b) => {
        M.startTransition(() => E(b));
      },
      [E]
    );
  return (
    M.useLayoutEffect(() => m.listen(D), [m, D]),
    M.createElement(P0, {
      basename: c,
      children: f,
      location: g.location,
      navigationType: g.action,
      navigator: m,
    })
  );
}
var Tm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ut = M.forwardRef(function (
    {
      onClick: f,
      discover: d = "render",
      prefetch: o = "none",
      relative: m,
      reloadDocument: g,
      replace: E,
      state: D,
      target: b,
      to: p,
      preventScrollReset: A,
      viewTransition: _,
      ...L
    },
    Z
  ) {
    let { basename: K } = M.useContext(Ba),
      k = typeof p == "string" && Tm.test(p),
      w,
      X = !1;
    if (typeof p == "string" && k && ((w = p), zm))
      try {
        let Ae = new URL(window.location.href),
          ua = p.startsWith("//") ? new URL(Ae.protocol + p) : new URL(p),
          ca = st(ua.pathname, K);
        ua.origin === Ae.origin && ca != null
          ? (p = ca + ua.search + ua.hash)
          : (X = !0);
      } catch {
        La(
          !1,
          `<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let Q = H0(p, { relative: m }),
      [F, Ne, Te] = gy(o, L),
      Le = Ty(p, {
        replace: E,
        state: D,
        target: b,
        preventScrollReset: A,
        relative: m,
        viewTransition: _,
      });
    function ee(Ae) {
      f && f(Ae), Ae.defaultPrevented || Le(Ae);
    }
    let Be = M.createElement("a", {
      ...L,
      ...Te,
      href: w || Q,
      onClick: X || g ? f : ee,
      ref: jy(Z, Ne),
      target: b,
      "data-discover": !k && d === "render" ? "true" : void 0,
    });
    return F && !k
      ? M.createElement(M.Fragment, null, Be, M.createElement(xy, { page: Q }))
      : Be;
  });
ut.displayName = "Link";
var Am = M.forwardRef(function (
  {
    "aria-current": f = "page",
    caseSensitive: d = !1,
    className: o = "",
    end: m = !1,
    style: g,
    to: E,
    viewTransition: D,
    children: b,
    ...p
  },
  A
) {
  let _ = Xn(E, { relative: p.relative }),
    L = Pt(),
    Z = M.useContext(rs),
    { navigator: K, basename: k } = M.useContext(Ba),
    w = Z != null && _y(_) && D === !0,
    X = K.encodeLocation ? K.encodeLocation(_).pathname : _.pathname,
    Q = L.pathname,
    F =
      Z && Z.navigation && Z.navigation.location
        ? Z.navigation.location.pathname
        : null;
  d ||
    ((Q = Q.toLowerCase()),
    (F = F ? F.toLowerCase() : null),
    (X = X.toLowerCase())),
    F && k && (F = st(F, k) || F);
  const Ne = X !== "/" && X.endsWith("/") ? X.length - 1 : X.length;
  let Te = Q === X || (!m && Q.startsWith(X) && Q.charAt(Ne) === "/"),
    Le =
      F != null &&
      (F === X || (!m && F.startsWith(X) && F.charAt(X.length) === "/")),
    ee = { isActive: Te, isPending: Le, isTransitioning: w },
    Be = Te ? f : void 0,
    Ae;
  typeof o == "function"
    ? (Ae = o(ee))
    : (Ae = [
        o,
        Te ? "active" : null,
        Le ? "pending" : null,
        w ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let ua = typeof g == "function" ? g(ee) : g;
  return M.createElement(
    ut,
    {
      ...p,
      "aria-current": Be,
      className: Ae,
      ref: A,
      style: ua,
      to: E,
      viewTransition: D,
    },
    typeof b == "function" ? b(ee) : b
  );
});
Am.displayName = "NavLink";
var Ey = M.forwardRef(
  (
    {
      discover: c = "render",
      fetcherKey: f,
      navigate: d,
      reloadDocument: o,
      replace: m,
      state: g,
      method: E = us,
      action: D,
      onSubmit: b,
      relative: p,
      preventScrollReset: A,
      viewTransition: _,
      ...L
    },
    Z
  ) => {
    let K = My(),
      k = Oy(D, { relative: p }),
      w = E.toLowerCase() === "get" ? "get" : "post",
      X = typeof D == "string" && Tm.test(D),
      Q = (F) => {
        if ((b && b(F), F.defaultPrevented)) return;
        F.preventDefault();
        let Ne = F.nativeEvent.submitter,
          Te = Ne?.getAttribute("formmethod") || E;
        K(Ne || F.currentTarget, {
          fetcherKey: f,
          method: Te,
          navigate: d,
          replace: m,
          state: g,
          relative: p,
          preventScrollReset: A,
          viewTransition: _,
        });
      };
    return M.createElement("form", {
      ref: Z,
      method: w,
      action: k,
      onSubmit: o ? b : Q,
      ...L,
      "data-discover": !X && c === "render" ? "true" : void 0,
    });
  }
);
Ey.displayName = "Form";
function zy(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Cm(c) {
  let f = M.useContext(Yl);
  return ze(f, zy(c)), f;
}
function Ty(
  c,
  {
    target: f,
    replace: d,
    state: o,
    preventScrollReset: m,
    relative: g,
    viewTransition: E,
  } = {}
) {
  let D = L0(),
    b = Pt(),
    p = Xn(c, { relative: g });
  return M.useCallback(
    (A) => {
      if (iy(A, f)) {
        A.preventDefault();
        let _ = d !== void 0 ? d : Bn(b) === Bn(p);
        D(c, {
          replace: _,
          state: o,
          preventScrollReset: m,
          relative: g,
          viewTransition: E,
        });
      }
    },
    [b, D, p, d, o, f, c, m, g, E]
  );
}
var Ay = 0,
  Cy = () => `__${String(++Ay)}__`;
function My() {
  let { router: c } = Cm("useSubmit"),
    { basename: f } = M.useContext(Ba),
    d = $0();
  return M.useCallback(
    async (o, m = {}) => {
      let { action: g, method: E, encType: D, formData: b, body: p } = cy(o, f);
      if (m.navigate === !1) {
        let A = m.fetcherKey || Cy();
        await c.fetch(A, d, m.action || g, {
          preventScrollReset: m.preventScrollReset,
          formData: b,
          body: p,
          formMethod: m.method || E,
          formEncType: m.encType || D,
          flushSync: m.flushSync,
        });
      } else
        await c.navigate(m.action || g, {
          preventScrollReset: m.preventScrollReset,
          formData: b,
          body: p,
          formMethod: m.method || E,
          formEncType: m.encType || D,
          replace: m.replace,
          state: m.state,
          fromRouteId: d,
          flushSync: m.flushSync,
          viewTransition: m.viewTransition,
        });
    },
    [c, f, d]
  );
}
function Oy(c, { relative: f } = {}) {
  let { basename: d } = M.useContext(Ba),
    o = M.useContext(Ya);
  ze(o, "useFormAction must be used inside a RouteContext");
  let [m] = o.matches.slice(-1),
    g = { ...Xn(c || ".", { relative: f }) },
    E = Pt();
  if (c == null) {
    g.search = E.search;
    let D = new URLSearchParams(g.search),
      b = D.getAll("index");
    if (b.some((A) => A === "")) {
      D.delete("index"),
        b.filter((_) => _).forEach((_) => D.append("index", _));
      let A = D.toString();
      g.search = A ? `?${A}` : "";
    }
  }
  return (
    (!c || c === ".") &&
      m.route.index &&
      (g.search = g.search ? g.search.replace(/^\?/, "?index&") : "?index"),
    d !== "/" && (g.pathname = g.pathname === "/" ? d : it([d, g.pathname])),
    Bn(g)
  );
}
function _y(c, { relative: f } = {}) {
  let d = M.useContext(gm);
  ze(
    d != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = Cm("useViewTransitionState"),
    m = Xn(c, { relative: f });
  if (!d.isTransitioning) return !1;
  let g = st(d.currentLocation.pathname, o) || d.currentLocation.pathname,
    E = st(d.nextLocation.pathname, o) || d.nextLocation.pathname;
  return os(m.pathname, E) != null || os(m.pathname, g) != null;
}
const be = {
    brandName: "artcas.beauty",
    siteTitle: "Artcas — enfoque educativo seguro",
    email: "hello@artcas.beauty",
    telegram: "https://t.me/artcasbeauty",
    instagram: "https://instagram.com/artcasbeauty",
    theme: { brandPrimary: "#20bc2dff" },
  },
  Ry = (c, f = 0.85) => {
    const d = c.replace("#", ""),
      o = Math.floor(parseInt(d.substring(0, 2), 16) * f),
      m = Math.floor(parseInt(d.substring(2, 4), 16) * f),
      g = Math.floor(parseInt(d.substring(4, 6), 16) * f);
    return `#${o.toString(16).padStart(2, "0")}${m
      .toString(16)
      .padStart(2, "0")}${g.toString(16).padStart(2, "0")}`;
  },
  Dy = (c) => {
    document.title = c.siteTitle;
    const f = c.theme.brandPrimary,
      d = c.theme.brandHover ?? Ry(f);
    document.documentElement.style.setProperty("--brand-primary", f),
      document.documentElement.style.setProperty("--brand-primary-hover", d);
    let o = document.querySelector('meta[name="theme-color"]');
    o ||
      ((o = document.createElement("meta")),
      (o.name = "theme-color"),
      document.head.appendChild(o)),
      (o.content = f);
  };
function fm({ to: c, children: f, className: d = "", ...o }) {
  return u.jsx(Am, {
    to: c,
    className: ({ isActive: m }) =>
      ["link-brand", "transition-colors", m ? "font-medium" : "", d]
        .filter(Boolean)
        .join(" "),
    ...o,
    children: f,
  });
}
function $e({ to: c, children: f, className: d = "", ...o }) {
  const m = ["link-brand", "transition-colors", d].filter(Boolean).join(" ");
  return u.jsx(ut, { to: c, className: m, ...o, children: f });
}
function qy() {
  const [c, f] = M.useState(!1);
  M.useEffect(() => {
    function o(m) {
      m.key === "Escape" && f(!1);
    }
    return (
      document.addEventListener("keydown", o),
      () => document.removeEventListener("keydown", o)
    );
  }, []);
  const d = [
    { to: "/", label: "Inicio" },
    { to: "/sobre-nosotros", label: "Sobre el proyecto" },
    { to: "/casos", label: "Casos y ejemplos" },
    { to: "/consejos", label: "Recomendaciones" },
    { to: "/start", label: "Cómo empezar" },
    { to: "/blog", label: "Blog" },
    { to: "/resources", label: "Recursos de referencia" },
    { to: "/contacts", label: "Contactos" },
  ];
  return u.jsxs("header", {
    className:
      "sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur",
    children: [
      u.jsxs("div", {
        className:
          "mx-auto flex max-w-6xl items-center justify-between px-4 py-3",
        children: [
          u.jsxs($e, {
            to: "/",
            className: "flex items-center gap-2",
            "aria-label": "Ir a la página de inicio",
            children: [
              u.jsx("span", {
                className:
                  "inline-block h-3 w-3 rounded-sm bg-[var(--brand-primary)]",
                "aria-hidden": "true",
              }),
              u.jsx("span", {
                className: "font-semibold tracking-tight",
                children: be.brandName,
              }),
            ],
          }),
          u.jsx("nav", {
            className: "hidden gap-6 md:flex",
            "aria-label": "Navegación principal",
            children: d.map(({ to: o, label: m }) =>
              u.jsx(fm, { to: o, className: "text-sm", children: m }, o)
            ),
          }),
          u.jsx("div", {
            className: "md:hidden",
            children: u.jsx("button", {
              type: "button",
              className:
                "rounded border border-neutral-200 px-3 py-1 text-sm text-neutral-700",
              "aria-label": "Abrir navegación",
              "aria-expanded": c,
              "aria-controls": "mobile-menu",
              onClick: () => f((o) => !o),
              children: c ? "Cerrar menú" : "Navegación",
            }),
          }),
        ],
      }),
      u.jsxs("div", {
        id: "mobile-menu",
        className: `${c ? "block" : "hidden"} md:hidden`,
        children: [
          u.jsx("div", {
            className: "fixed inset-0 z-40 bg-black/20",
            onClick: () => f(!1),
            "aria-hidden": "true",
          }),
          u.jsx("nav", {
            className:
              "fixed inset-x-0 top-0 z-50 mt-14 rounded-b-lg border border-neutral-200 bg-white p-4 shadow-md",
            "aria-label": "Navegación para móviles",
            children: u.jsx("ul", {
              className: "space-y-3",
              children: d.map(({ to: o, label: m }) =>
                u.jsx(
                  "li",
                  {
                    children: u.jsx(fm, {
                      to: o,
                      onClick: () => f(!1),
                      className: "block rounded px-2 py-2 text-sm",
                      children: m,
                    }),
                  },
                  o
                )
              ),
            }),
          }),
        ],
      }),
    ],
  });
}
function Uy() {
  return u.jsx("footer", {
    className: "border-t border-neutral-200 bg-white",
    children: u.jsxs("div", {
      className: "mx-auto max-w-6xl px-4 py-8",
      children: [
        u.jsxs("div", {
          className: "grid gap-6 md:grid-cols-3",
          children: [
            u.jsxs("div", {
              children: [
                u.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    u.jsx("span", {
                      className:
                        "inline-block h-3 w-3 rounded-sm bg-[var(--brand-primary)]",
                      "aria-hidden": "true",
                    }),
                    u.jsx("span", {
                      className: "font-semibold",
                      children: be.brandName,
                    }),
                  ],
                }),
                u.jsx("p", {
                  className: "mt-3 text-sm text-neutral-600",
                  children:
                    "Proyecto informativo neutral sobre planificación y prácticas sostenibles. Materiales de autoaprendizaje, no son una recomendación personal.",
                }),
              ],
            }),
            u.jsxs("div", {
              children: [
                u.jsx("h2", {
                  className: "mb-3 text-sm font-semibold text-neutral-800",
                  children: "Navegación",
                }),
                u.jsxs("ul", {
                  className: "space-y-2 text-sm",
                  children: [
                    u.jsx("li", {
                      children: u.jsx($e, {
                        to: "/o-nas",
                        children: "Sobre el proyecto",
                      }),
                    }),
                    u.jsx("li", {
                      children: u.jsx($e, {
                        to: "/keisy",
                        children: "Casos y ejemplos",
                      }),
                    }),
                    u.jsx("li", {
                      children: u.jsx($e, {
                        to: "/sovety",
                        children: "Recomendaciones",
                      }),
                    }),
                    u.jsx("li", {
                      children: u.jsx($e, {
                        to: "/start",
                        children: "Cómo empezar",
                      }),
                    }),
                    u.jsx("li", {
                      children: u.jsx($e, { to: "/blog", children: "Blog" }),
                    }),
                    u.jsx("li", {
                      children: u.jsx($e, {
                        to: "/resources",
                        children: "Recursos de referencia",
                      }),
                    }),
                    u.jsx("li", {
                      children: u.jsx($e, {
                        to: "/faq",
                        children: "Preguntas frecuentes",
                      }),
                    }),
                    u.jsx("li", {
                      children: u.jsx($e, {
                        to: "/glossary",
                        children: "Glosario",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              children: [
                u.jsx("h2", {
                  className: "mb-3 text-sm font-semibold text-neutral-800",
                  children: "Secciones legales",
                }),
                u.jsxs("ul", {
                  className: "space-y-2 text-sm",
                  children: [
                    u.jsx("li", {
                      children: u.jsx($e, {
                        to: "/privacy",
                        children: "Privacidad",
                      }),
                    }),
                    u.jsx("li", {
                      children: u.jsx($e, {
                        to: "/cookies",
                        children: "Política de cookies",
                      }),
                    }),
                    u.jsx("li", {
                      children: u.jsx($e, {
                        to: "/cookie-settings",
                        children: "Configuración de cookies",
                      }),
                    }),
                    u.jsx("li", {
                      children: u.jsx($e, {
                        to: "/terms",
                        children: "Términos de uso del sitio",
                      }),
                    }),
                    u.jsx("li", {
                      children: u.jsx($e, {
                        to: "/accessibility",
                        children: "Accesibilidad",
                      }),
                    }),
                    u.jsx("li", {
                      children: u.jsx($e, {
                        to: "/ads-policy",
                        children: "Política de publicidad",
                      }),
                    }),
                    u.jsx("li", {
                      children: u.jsx($e, {
                        to: "/contacts",
                        children: "Contactos",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        u.jsx("div", {
          className:
            "mt-8 border-t border-neutral-200 pt-4 text-xs text-neutral-500",
          children: u.jsxs("p", {
            children: [
              "© ",
              new Date().getFullYear(),
              " ",
              be.brandName,
              ". Todos los derechos reservados. Los materiales no constituyen una oferta, un llamamiento o una garantía de resultados.",
            ],
          }),
        }),
      ],
    }),
  });
}
const Ln = "cookie_consent_v1";
function Hy() {
  const [c, f] = M.useState(!1),
    [d, o] = M.useState(!1),
    [m, g] = M.useState(!1);
  M.useEffect(() => {
    const _ = localStorage.getItem(Ln);
    if (!_) f(!0);
    else
      try {
        const L = JSON.parse(_);
        g(!!L.analytics);
      } catch {}
  }, []);
  function E(_) {
    try {
      window.dispatchEvent(
        new CustomEvent("cookie-consent-updated", { detail: _ })
      );
    } catch {}
  }
  function D() {
    localStorage.setItem(
      Ln,
      JSON.stringify({
        essential: !0,
        analytics: !0,
        date: new Date().toISOString(),
      })
    ),
      E({ essential: !0, analytics: !0 }),
      f(!1),
      o(!1);
  }
  function b() {
    localStorage.setItem(
      Ln,
      JSON.stringify({
        essential: !0,
        analytics: !1,
        declined: !0,
        date: new Date().toISOString(),
      })
    ),
      E({ essential: !0, analytics: !1, declined: !0 }),
      f(!1),
      o(!1);
  }
  function p() {
    localStorage.setItem(
      Ln,
      JSON.stringify({
        essential: !0,
        analytics: m,
        date: new Date().toISOString(),
      })
    ),
      E({ essential: !0, analytics: m }),
      f(!1),
      o(!1);
  }
  function A() {
    localStorage.removeItem(Ln),
      g(!1),
      f(!0),
      o(!0),
      E({ essential: !0, analytics: !1, reset: !0 });
  }
  return c
    ? u.jsx("div", {
        className: "fixed bottom-0 left-0 right-0 z-50",
        children: u.jsx("div", {
          className: "mx-auto max-w-6xl px-4 pb-4",
          children: u.jsxs("div", {
            className:
              "fade-in rounded-lg border border-neutral-200 bg-white p-4 shadow-sm",
            children: [
              u.jsxs("p", {
                className: "text-sm text-neutral-700",
                children: [
                  "Utilizamos cookies estrictamente necesarias para el funcionamiento del sitio y estadísticas anónimas, solo con su consentimiento. La decisión se puede cambiar más tarde. Más detalles en la ",
                  u.jsx(ut, {
                    to: "/cookies",
                    className: "link-brand",
                    children: "Política de cookies",
                  }),
                  ".",
                ],
              }),
              u.jsxs("div", {
                className: "mt-3 flex flex-wrap gap-2",
                children: [
                  u.jsx("button", {
                    onClick: D,
                    className:
                      "rounded bg-brand px-4 py-2 text-sm text-white hover:bg-brandHover",
                    children: "Aceptar",
                  }),
                  u.jsx("button", {
                    onClick: b,
                    className:
                      "rounded border border-neutral-200 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50",
                    children: "Rechazar",
                  }),
                  u.jsx("button", {
                    onClick: () => o((_) => !_),
                    className:
                      "rounded border border-neutral-200 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50",
                    "aria-expanded": d,
                    "aria-controls": "cookie-settings",
                    children: "Configuración",
                  }),
                ],
              }),
              d &&
                u.jsxs("div", {
                  id: "cookie-settings",
                  className: "mt-3 rounded-lg border border-neutral-200 p-3",
                  children: [
                    u.jsx("h3", {
                      className: "text-sm font-medium text-neutral-900",
                      children: "Configuración de cookies",
                    }),
                    u.jsxs("div", {
                      className: "mt-2 flex items-center justify-between",
                      children: [
                        u.jsx("label", {
                          htmlFor: "analytics-toggle",
                          className: "text-sm text-neutral-700",
                          children: "Análisis (estadísticas anónimas)",
                        }),
                        u.jsx("input", {
                          id: "analytics-toggle",
                          type: "checkbox",
                          checked: m,
                          onChange: (_) => g(_.target.checked),
                          className: "h-4 w-4 rounded border-neutral-300",
                          "aria-checked": m,
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: "mt-3 flex gap-2",
                      children: [
                        u.jsx("button", {
                          onClick: p,
                          className:
                            "rounded bg-brand px-4 py-2 text-sm text-white hover:bg-brandHover",
                          children: "Guardar",
                        }),
                        u.jsx("button", {
                          onClick: () => o(!1),
                          className:
                            "rounded border border-neutral-200 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50",
                          children: "Cancelar",
                        }),
                        u.jsx("button", {
                          onClick: A,
                          className:
                            "rounded border border-neutral-200 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50",
                          children: "Restablecer",
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        }),
      })
    : null;
}
function Ie(c, f) {
  return typeof c != "string"
    ? ""
    : c
        .replaceAll("{brand}", f)
        .replaceAll("{{brand}}", f)
        .replaceAll("[[brand]]", f);
}
function Ly() {
  const c = [
      "{brand} — un punto de partida neutral para decisiones personales. La sostenibilidad se forma con pequeñas acciones repetibles: llevar un registro, establecer metas realistas, verificar fuentes y aceptar los errores con calma.",
      "Contexto de Madrid, España — publicaciones oficiales, requisitos regulatorios y datos verificables. Consulte regularmente las fuentes primarias (madrid.es, Banco de España, Bolsa de Madrid).",
      "La planificación aclara el panorama: objetivos, obligaciones, tareas variables y reserva de tiempo/recursos. La regularidad y el reflejo honesto de la realidad son más importantes que la perfección.",
      "Siempre existen riesgos, por lo tanto, establezca límites de antemano: cuánto tiempo y recursos para el aprendizaje, qué fuentes son aceptables, qué escenarios se excluyen.",
      "La gestión del tiempo es importante. Las revisiones semanales cortas ayudan a ver el progreso y simplificar el proceso. Pequeños pasos forman una base sólida.",
      "Higiene de la información: distinga hechos de opiniones, separe los materiales educativos de la publicidad, anote la fuente y la fecha, verifique los documentos primarios.",
      "No publicamos ofertas pagadas ni prometemos resultados. Los materiales son neutrales y están destinados al autoaprendizaje. No tome decisiones basándose en una sola fuente.",
      "Para empezar, concéntrese en lo básico: un objetivo al mes, una herramienta de seguimiento conveniente, una breve revisión al final de la semana.",
      "Respete los límites personales y la seguridad. Rechace acciones bajo presión, condiciones no transparentes o promesas de resultados.",
      "{brand} apoya un enfoque tranquilo y basado en evidencia sin llamamientos intrusivos.",
    ],
    f = [
      {
        src: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Escritorio con notas y planificación",
      },
      {
        src: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Portátil y cuaderno minimalistas",
      },
      {
        src: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Trabajo en equipo y discusión de tareas",
      },
      {
        src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Discusión tranquila de planes",
      },
    ];
  return u.jsx("section", {
    className: "fade-in",
    children: u.jsxs("div", {
      className: "mx-auto max-w-6xl px-4 py-16",
      children: [
        u.jsxs("div", {
          className: "grid items-center gap-10 md:grid-cols-2",
          children: [
            u.jsxs("div", {
              children: [
                u.jsx("h1", {
                  className:
                    "text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl",
                  children:
                    "Enfoque tranquilo y consistente para decisiones personales en Madrid, España",
                }),
                u.jsx("p", {
                  className: "mt-4 text-neutral-700",
                  children: Ie(
                    "{brand} — materiales neutrales, ejemplos y guías breves para decisiones informadas. Sin promesas de ingresos ni ventas agresivas: solo fuentes verificadas y un tono tranquilo.",
                    be.brandName
                  ),
                }),
                u.jsxs("div", {
                  className: "mt-6 flex gap-3",
                  children: [
                    u.jsx(ut, {
                      to: "/start",
                      className:
                        "rounded bg-brand px-4 py-2 text-white hover:bg-brandHover",
                      children: "Por dónde empezar",
                    }),
                    u.jsx(ut, {
                      to: "/consejos",
                      className:
                        "rounded border border-neutral-200 px-4 py-2 text-neutral-800 hover:bg-neutral-50",
                      children: "Consejos para principiantes",
                    }),
                  ],
                }),
                u.jsx("p", {
                  className: "mt-4 text-xs text-neutral-500",
                  children:
                    "Los materiales son informativos y no sustituyen el asesoramiento individual.",
                }),
              ],
            }),
            u.jsx("div", {
              children: u.jsx("img", {
                src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
                alt: "Minimalismo moderno en el trabajo y la planificación",
                className:
                  "w-full rounded-lg border border-neutral-200 shadow-sm",
              }),
            }),
          ],
        }),
        u.jsx("div", {
          className: "mt-16 grid gap-6 md:grid-cols-3",
          children: [
            {
              title: "Guías paso a paso",
              desc: "Cómo formular objetivos y planificar un presupuesto sin sobrecargarse: pasos sencillos.",
            },
            {
              title: "Elección informada",
              desc: "Evaluación de riesgos y rechazo de promesas de ganancias rápidas y ruido informativo.",
            },
            {
              title: "Ejemplos y escenarios",
              desc: "Situaciones para diferentes contextos de vida en Madrid, España sin garantías de resultados.",
            },
          ].map((d) =>
            u.jsxs(
              "div",
              {
                className: "rounded-lg border border-neutral-200 p-4",
                children: [
                  u.jsx("h3", {
                    className: "text-lg font-medium text-neutral-900",
                    children: d.title,
                  }),
                  u.jsx("p", {
                    className: "mt-2 text-sm text-neutral-700",
                    children: d.desc,
                  }),
                ],
              },
              d.title
            )
          ),
        }),
        u.jsxs("div", {
          className: "mt-16",
          children: [
            u.jsx("h2", {
              className: "text-xl font-semibold text-neutral-900",
              children: "Enfoque tranquilo y basado en evidencia",
            }),
            u.jsx("div", {
              className:
                "mt-4 space-y-4 text-sm leading-relaxed text-neutral-800",
              children: c.map((d, o) =>
                u.jsx("p", { children: Ie(d, be.brandName) }, o)
              ),
            }),
          ],
        }),
        u.jsxs("div", {
          className: "mt-12",
          children: [
            u.jsx("h2", {
              className: "text-xl font-semibold text-neutral-900",
              children: "Notas visuales",
            }),
            u.jsx("div", {
              className: "mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3",
              children: f.map((d) =>
                u.jsxs(
                  "figure",
                  {
                    className:
                      "overflow-hidden rounded-lg border border-neutral-200",
                    children: [
                      u.jsx("img", {
                        src: d.src,
                        alt: d.alt,
                        className: "h-48 w-full object-cover",
                      }),
                      u.jsx("figcaption", {
                        className: "p-2 text-xs text-neutral-600",
                        children: d.alt,
                      }),
                    ],
                  },
                  d.src
                )
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
function By() {
  const c = [
      "{brand} — un proyecto educativo neutral sobre decisiones personales y planificación. Sin promesas de «rentabilidad», sin publicidad agresiva. Los materiales de autoaprendizaje ayudan a actuar con calma y coherencia.",
      "La base es simple: llevar un registro, formular objetivos, verificar fuentes, tomar los errores con calma. No se trata de la perfección, sino de la regularidad. Cuando se ve el panorama general, las decisiones son más ponderadas.",
      "Consideramos el contexto de Madrid, España: documentos primarios (gob.es, Banco de España) y marcos regulatorios. Sin garantías, solo disciplina y precaución.",
      "No ofrecemos recomendaciones individuales ni vendemos productos. La tarea es una estructura simple, respeto a la ley y un tono tranquilo.",
      "El equipo — diseñadores y desarrolladores, cercanos al minimalismo de las interfaces y la claridad del lenguaje. Evitamos la sobrecarga — más importante es la utilidad y la navegación comprensible.",
      "¿Por qué es necesario? El ruido informativo y las declaraciones publicitarias crean presión. Ofrecemos una alternativa: explicaciones neutrales, enlaces verificables y micro-pasos.",
      "La plataforma se desarrolla gradualmente: añadimos secciones, ampliamos textos y mantenemos la transparencia — de dónde se tomó la cifra, qué significa el término, cómo verificar la fuente.",
      "Si estás empezando, limita el volumen: un objetivo, un formato de registro, una revisión a la semana. El hábito reduce la sobrecarga y simplifica la adición de nuevas capas.",
      "Agradecemos los comentarios, pero mantenemos la neutralidad. La publicidad agresiva y las promesas de ganancias rápidas no son compatibles.",
      "{brand} — un espacio sin ruido: palabras claras, fuentes verificables y estabilidad a pequeños pasos.",
    ],
    f = [
      {
        src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Trabajo en equipo en el contenido",
      },
      {
        src: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Proceso de trabajo minimalista",
      },
      {
        src: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Estética de la simplicidad y claridad",
      },
      {
        src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Discusión sobre ética y transparencia",
      },
    ];
  return u.jsx("section", {
    className: "fade-in",
    children: u.jsxs("div", {
      className: "mx-auto max-w-6xl px-4 py-12",
      children: [
        u.jsx("h1", {
          className: "text-2xl font-semibold text-neutral-900",
          children: "Sobre el proyecto",
        }),
        u.jsx("p", {
          className: "mt-4 text-neutral-700",
          children:
            "Somos un equipo de diseñadores y desarrolladores, creando un producto educativo tranquilo sobre decisiones personales y planificación. Nuestro objetivo es la accesibilidad de una práctica responsable sin promesas de «resultados rápidos».",
        }),
        u.jsx("div", {
          className: "mt-8 grid gap-6 md:grid-cols-3",
          children: [
            {
              title: "Transparencia",
              desc: "Estructura clara de materiales, enlaces verificables y ausencia de llamadas agresivas.",
            },
            {
              title: "Horizonte a largo plazo",
              desc: "Enfoque en la estabilidad, disciplina y gradualidad de las decisiones.",
            },
            {
              title: "Principios éticos",
              desc: "Respetamos la ley y seguimos las reglas de moderación publicitaria.",
            },
          ].map((d) =>
            u.jsxs(
              "div",
              {
                className: "rounded-lg border border-neutral-200 p-4",
                children: [
                  u.jsx("h3", {
                    className: "text-lg font-medium text-neutral-900",
                    children: d.title,
                  }),
                  u.jsx("p", {
                    className: "mt-2 text-sm text-neutral-700",
                    children: d.desc,
                  }),
                ],
              },
              d.title
            )
          ),
        }),
        u.jsxs("div", {
          className: "mt-12",
          children: [
            u.jsx("h2", {
              className: "text-xl font-semibold text-neutral-900",
              children: "Nuestro enfoque",
            }),
            u.jsx("div", {
              className:
                "mt-4 space-y-4 text-sm leading-relaxed text-neutral-800",
              children: c.map((d, o) =>
                u.jsx("p", { children: Ie(d, be.brandName) }, o)
              ),
            }),
          ],
        }),
        u.jsxs("div", {
          className: "mt-12",
          children: [
            u.jsx("h2", {
              className: "text-xl font-semibold text-neutral-900",
              children: "Notas visuales",
            }),
            u.jsx("div", {
              className: "mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3",
              children: f.map((d) =>
                u.jsxs(
                  "figure",
                  {
                    className:
                      "overflow-hidden rounded-lg border border-neutral-200",
                    children: [
                      u.jsx("img", {
                        src: d.src,
                        alt: d.alt,
                        className: "h-48 w-full object-cover",
                      }),
                      u.jsx("figcaption", {
                        className: "p-2 text-xs text-neutral-600",
                        children: d.alt,
                      }),
                    ],
                  },
                  d.src
                )
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
function Yy() {
  const c = [
      {
        title: "Escenario: fondo de reserva",
        desc: "Cómo formar un colchón de seguridad: enfoques para la acumulación gradual y la disciplina presupuestaria. Esta es una descripción del proceso, no una promesa de resultado.",
      },
      {
        title: "Escenario: objetivos a largo plazo",
        desc: "Establecimiento de objetivos financieros a 3-5 años, elección de pasos seguros y control de riesgos. Sin mencionar herramientas específicas.",
      },
      {
        title: "Escenario: formación y desarrollo",
        desc: "Planificación de gastos de formación y mejora de cualificaciones para el crecimiento de competencias.",
      },
    ],
    f = [
      "Los casos en {brand} son escenarios tranquilos en los que es importante ver los pasos, suposiciones y limitaciones. No modelamos la rentabilidad ni indicamos herramientas específicas para mantener la neutralidad y evitar interpretaciones publicitarias. La tarea principal es mostrar el proceso de pensamiento y garantizar la transparencia de la lógica.",
      "El fondo de reserva ilustra la idea de la gradualidad: pequeñas y regulares deducciones, límites claros de uso y revisión periódica del volumen. No se trata de sobrecarga; se trata de disciplina que mantiene la estabilidad en situaciones inesperadas.",
      "Los objetivos a largo plazo requieren un establecimiento claro: formulación, criterios de éxito, riesgos aceptables, plazos, mecánica de observación. Es importante registrar por escrito y realizar revisiones mensuales para ajustar el plan sin autocrítica ni presión.",
      "La formación y el desarrollo son una inversión en habilidades, no en promesas de ganancias. Compare cursos, verifique reseñas, lea descripciones de programas primarios y haga preguntas sobre el contenido. Esté atento a la transparencia de las condiciones y evite los desencadenantes emocionales.",
      "Cada escenario va acompañado de advertencias: cualquier decisión requiere una verificación independiente de los hechos y una comparación con fuentes oficiales. Los materiales del sitio son educativos, no recomendaciones individuales y no garantizan resultados.",
      "Nos adherimos intencionadamente a un tono estricto: explicamos términos, mostramos los límites de lo permisible y recordamos que la disciplina tranquila es más fuerte que las acciones espontáneas. Esto reduce la probabilidad de errores y ayuda a mantener el enfoque.",
      "La práctica de casos es útil para formar hábitos. Cuando el proceso es transparente, surge la confianza en las propias observaciones. Son estas las que consideramos una guía más valiosa que las ruidosas promesas externas.",
      'Repetimos: evite la presión y mantenga la seguridad. Si las condiciones no están claras, no actúe. Si hay promesas de "beneficios rápidos", considérelas como una razón para una verificación adicional o un rechazo.',
      "Los casos no reemplazan las publicaciones oficiales. Siempre sugerimos verificar los números y las formulaciones en las fuentes primarias y no tomar decisiones basándose en un solo material.",
      "Así se forma un enfoque maduro: estructura, pasos transparentes y secuencia de acciones sin ruido innecesario.",
    ],
    d = [
      {
        src: "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Planificación de escenarios",
      },
      {
        src: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Discusión de riesgos",
      },
      {
        src: "https://images.pexels.com/photos/3183172/pexels-photo-3183172.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Verificación de supuestos en equipo",
      },
    ];
  return u.jsx("section", {
    className: "fade-in",
    children: u.jsxs("div", {
      className: "mx-auto max-w-6xl px-4 py-12",
      children: [
        u.jsx("h1", {
          className: "text-2xl font-semibold text-neutral-900",
          children: "Nuestros casos",
        }),
        u.jsx("p", {
          className: "mt-2 text-sm text-neutral-600",
          children:
            "Los casos se presentan para demostrar enfoques y principios. No describen ingresos ni garantizan resultados.",
        }),
        u.jsx("div", {
          className: "mt-6 grid gap-6 md:grid-cols-3",
          children: c.map((o) =>
            u.jsxs(
              "article",
              {
                className: "rounded-lg border border-neutral-200 p-4",
                children: [
                  u.jsx("h3", {
                    className: "text-lg font-medium text-neutral-900",
                    children: o.title,
                  }),
                  u.jsx("p", {
                    className: "mt-2 text-sm text-neutral-700",
                    children: o.desc,
                  }),
                ],
              },
              o.title
            )
          ),
        }),
        u.jsxs("div", {
          className: "mt-12",
          children: [
            u.jsx("h2", {
              className: "text-xl font-semibold text-neutral-900",
              children: "Explicaciones detalladas",
            }),
            u.jsx("div", {
              className:
                "mt-4 space-y-4 text-sm leading-relaxed text-neutral-800",
              children: f.map((o, m) =>
                u.jsx("p", { children: Ie(o, be.brandName) }, m)
              ),
            }),
          ],
        }),
        u.jsxs("div", {
          className: "mt-12",
          children: [
            u.jsx("h2", {
              className: "text-xl font-semibold text-neutral-900",
              children: "Acentos visuales",
            }),
            u.jsx("div", {
              className: "mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3",
              children: d.map((o) =>
                u.jsxs(
                  "figure",
                  {
                    className:
                      "overflow-hidden rounded-lg border border-neutral-200",
                    children: [
                      u.jsx("img", {
                        src: o.src,
                        alt: o.alt,
                        className: "h-48 w-full object-cover",
                      }),
                      u.jsx("figcaption", {
                        className: "p-2 text-xs text-neutral-600",
                        children: o.alt,
                      }),
                    ],
                  },
                  o.src
                )
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
function Gy() {
  const c = [
      "Establezca objetivos: a corto, medio y largo plazo.",
      "Lleve un registro de los gastos: ayuda a ver el panorama y disciplina.",
      "Evite las promesas de «ganancias rápidas». Concéntrese en acciones sostenibles.",
      "Diversifique el tiempo y la atención: no apueste todo a una sola idea.",
      "Revise y ajuste regularmente el plan según los cambios.",
    ],
    f = [
      "Los consejos en {brand} se basan en la idea de una disciplina tranquila. No damos garantías ni ofrecemos «trucos secretos». En cambio, proponemos prácticas que aumentan la claridad: registrar observaciones, separar hechos de opiniones, reducir la emocionalidad de las decisiones.",
      "Empiece poco a poco: elija una forma conveniente de llevar un registro (tabla, aplicación, cuaderno) y hágalo honestamente. La regularidad y el realismo son importantes. No tema a los errores: son inevitables y útiles para los ajustes.",
      "Trabaje con objetivos: anote el contexto, los plazos, los criterios de éxito y los riesgos aceptables. Cuando un objetivo es visible, es más fácil dividirlo en pasos y registrar el progreso. Esto reduce el deseo de «acelerar» el proceso a través de ofertas dudosas.",
      "Planifique revisiones: semanal y mensualmente, haga notas breves sobre lo que funcionó y lo que se puede simplificar. Al acumular observaciones, desarrollará estabilidad y confianza, incluso si el entorno externo cambia.",
      "Verifique las fuentes: utilice publicaciones oficiales y documentos primarios. Evite promesas emocionales y construcciones publicitarias. Si ve «garantías», es una razón para detenerse y verificar.",
      "Mantenga los límites: la seguridad es más importante que la velocidad. Rechace acciones en condiciones poco claras, bajo presión o intentos de generar urgencia. Esto ayuda a mantener el enfoque y evitar riesgos innecesarios.",
      "No se compare con historias de éxito de otros. Su trayectoria es única y depende de sus circunstancias. Valore sus pequeños pasos, son la base.",
      "Mantenga la higiene de la información: etiquete los materiales por fuentes y temas, vuelva a los textos primarios. Separe el contenido educativo de la publicidad y mantenga una actitud crítica.",
      "Recuerde que la sostenibilidad es un proceso. Se basa en la transparencia, la repetibilidad y el respeto por las propias limitaciones. Es menos espectacular, pero más fiable.",
      "Nos mantenemos neutrales y no publicamos ofertas pagas. Todos los consejos son educativos, no individuales y sin garantía de resultados.",
    ],
    d = [
      {
        src: "https://images.pexels.com/photos/669618/pexels-photo-669618.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Cuaderno con plan",
      },
      {
        src: "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Reunión de trabajo",
      },
      {
        src: "https://images.pexels.com/photos/934062/pexels-photo-934062.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Organización minimalista",
      },
    ];
  return u.jsx("section", {
    className: "fade-in",
    children: u.jsxs("div", {
      className: "mx-auto max-w-6xl px-4 py-12",
      children: [
        u.jsx("h1", {
          className: "text-2xl font-semibold text-neutral-900",
          children: "Consejos para principiantes",
        }),
        u.jsx("ul", {
          className: "mt-6 space-y-3",
          children: c.map((o, m) =>
            u.jsx(
              "li",
              {
                className:
                  "rounded-lg border border-neutral-200 p-4 text-sm text-neutral-700",
                children: o,
              },
              m
            )
          ),
        }),
        u.jsxs("div", {
          className: "mt-12",
          children: [
            u.jsx("h2", {
              className: "text-xl font-semibold text-neutral-900",
              children: "Recomendaciones detalladas",
            }),
            u.jsx("div", {
              className:
                "mt-4 space-y-4 text-sm leading-relaxed text-neutral-800",
              children: f.map((o, m) =>
                u.jsx("p", { children: Ie(o, be.brandName) }, m)
              ),
            }),
          ],
        }),
        u.jsxs("div", {
          className: "mt-12",
          children: [
            u.jsx("h2", {
              className: "text-xl font-semibold text-neutral-900",
              children: "Ilustraciones",
            }),
            u.jsx("div", {
              className: "mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3",
              children: d.map((o) =>
                u.jsxs(
                  "figure",
                  {
                    className:
                      "overflow-hidden rounded-lg border border-neutral-200",
                    children: [
                      u.jsx("img", {
                        src: o.src,
                        alt: o.alt,
                        className: "h-48 w-full object-cover",
                      }),
                      u.jsx("figcaption", {
                        className: "p-2 text-xs text-neutral-600",
                        children: o.alt,
                      }),
                    ],
                  },
                  o.src
                )
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
function Xy() {
  const c = [
      {
        title: "Paso 1. Define el contexto",
        desc: "Recopila información básica sobre ingresos y gastos obligatorios sin autoengaño.",
      },
      {
        title: "Paso 2. Establece objetivos",
        desc: "Divide los objetivos en horizontes. Esto reduce el estrés y mejora el enfoque.",
      },
      {
        title: "Paso 3. Escenarios",
        desc: "Modela 2-3 escenarios con diferentes suposiciones. Sin promesas de resultados.",
      },
      {
        title: "Paso 4. Mini-plan",
        desc: "Define acciones regulares simples que se puedan realizar sin sobrecarga.",
      },
    ],
    f = [
      "Comienza sin sobrecarga: recopila hechos, formula objetivos y establece límites. La base se crea con pequeños pasos consecutivos.",
      "El contexto es el punto de partida: ingresos, gastos obligatorios y gastos variables. La honestidad es más productiva que la idealidad: la visibilidad de los hechos reduce la incertidumbre.",
      "Los objetivos son puntos de referencia. Divídelos en plazos y criterios. Formula de manera afirmativa y establece una verificación: ¿cómo saber si hay movimiento?",
      'Los escenarios muestran alternativas. Escribe 2-3 variantes con diferentes suposiciones. Considérelos como una herramienta de pensamiento, no como una "corrección".',
      "El mini-plan son acciones regulares: contabilidad semanal, revisión breve, una tarea al mes. La acumulación de pequeños pasos fortalece la confianza.",
      "Higiene de la información desde el primer día: verifica las fuentes, separa el contenido educativo de las opiniones, evita las promesas publicitarias.",
      "Mantén los límites. Si las condiciones no son claras o hay presión, rechaza. La seguridad y un tono tranquilo son más importantes que la velocidad.",
      "No publicamos ofertas pagas ni damos recomendaciones individuales. Los materiales son educativos, sin garantía de resultados.",
      "Práctica a largo plazo sin prisas: una base de calidad es más importante que la velocidad. La consistencia se convierte en estabilidad.",
      "{brand} — una guía tranquila: pasos claros, fuentes verificables y respeto por las limitaciones.",
    ],
    d = [
      {
        src: "https://images.pexels.com/photos/3184618/pexels-photo-3184618.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Primer paso y plan",
      },
      {
        src: "https://images.pexels.com/photos/3184617/pexels-photo-3184617.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Verificación de pasos en equipo",
      },
      {
        src: "https://images.pexels.com/photos/3184452/pexels-photo-3184452.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Notas minimalistas",
      },
    ];
  return u.jsx("section", {
    className: "fade-in",
    children: u.jsxs("div", {
      className: "mx-auto max-w-6xl px-4 py-12",
      children: [
        u.jsx("h1", {
          className: "text-2xl font-semibold text-neutral-900",
          children: "Por dónde empezar",
        }),
        u.jsx("div", {
          className: "mt-6 grid gap-6 md:grid-cols-2",
          children: c.map((o) =>
            u.jsxs(
              "div",
              {
                className: "rounded-lg border border-neutral-200 p-4",
                children: [
                  u.jsx("h3", {
                    className: "text-lg font-medium text-neutral-900",
                    children: o.title,
                  }),
                  u.jsx("p", {
                    className: "mt-2 text-sm text-neutral-700",
                    children: o.desc,
                  }),
                ],
              },
              o.title
            )
          ),
        }),
        u.jsx("p", {
          className: "mt-6 text-xs text-neutral-500",
          children:
            "Este material es informativo y no constituye una recomendación individual.",
        }),
        u.jsxs("div", {
          className: "mt-12",
          children: [
            u.jsx("h2", {
              className: "text-xl font-semibold text-neutral-900",
              children: "Explicaciones detalladas",
            }),
            u.jsx("div", {
              className:
                "mt-4 space-y-4 text-sm leading-relaxed text-neutral-800",
              children: f.map((o, m) =>
                u.jsx("p", { children: Ie(o, be.brandName) }, m)
              ),
            }),
          ],
        }),
        u.jsxs("div", {
          className: "mt-12",
          children: [
            u.jsx("h2", {
              className: "text-xl font-semibold text-neutral-900",
              children: "Ilustraciones",
            }),
            u.jsx("div", {
              className: "mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3",
              children: d.map((o) =>
                u.jsxs(
                  "figure",
                  {
                    className:
                      "overflow-hidden rounded-lg border border-neutral-200",
                    children: [
                      u.jsx("img", {
                        src: o.src,
                        alt: o.alt,
                        className: "h-48 w-full object-cover",
                      }),
                      u.jsx("figcaption", {
                        className: "p-2 text-xs text-neutral-600",
                        children: o.alt,
                      }),
                    ],
                  },
                  o.src
                )
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
function Qy() {
  return u.jsx("section", {
    className: "fade-in",
    children: u.jsxs("div", {
      className: "mx-auto max-w-6xl px-4 py-12",
      children: [
        u.jsx("h1", {
          className: "text-2xl font-semibold text-neutral-900",
          children: "Política de privacidad",
        }),
        u.jsx("p", {
          className: "mt-4 text-sm text-neutral-700",
          children: Ie(
            "En {brand} respetamos la privacidad y actuamos con transparencia. A continuación, qué datos procesamos, con qué base, para qué fines y cómo ejercer sus derechos.",
            be.brandName
          ),
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Principios y fines del procesamiento",
        }),
        u.jsxs("div", {
          className: "mt-2 space-y-3 text-sm text-neutral-700",
          children: [
            u.jsx("p", {
              children:
                "Procesamos un mínimo de datos para un funcionamiento estable, seguridad, comodidad y estadísticas. No vendemos datos personales y evitamos la recopilación excesiva.",
            }),
            u.jsx("p", {
              children:
                "Bases: prestación del servicio (visualización del sitio), intereses legítimos (seguridad), así como consentimiento — para cookies no obligatorias y análisis.",
            }),
          ],
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Categorías de datos recopilados",
        }),
        u.jsxs("ul", {
          className: "mt-2 list-disc pl-5 text-sm text-neutral-700 space-y-2",
          children: [
            u.jsx("li", {
              children:
                "Registros técnicos del servidor (IP, tipo de navegador, tiempo de solicitud, URL solicitada).",
            }),
            u.jsx("li", {
              children:
                "Cookies estrictamente necesarias (sesión, preferencias simples de interfaz).",
            }),
            u.jsx("li", {
              children:
                "Estadísticas anónimas agregadas (vistas, tiempo en la página, fuentes de tráfico).",
            }),
          ],
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Archivos cookie",
        }),
        u.jsxs("div", {
          className: "mt-2 space-y-3 text-sm text-neutral-700",
          children: [
            u.jsx("p", {
              children:
                "Las cookies son pequeños archivos que ayudan al sitio a funcionar correctamente. Utilizamos cookies estrictamente necesarias para la estabilidad y comodidad (por ejemplo, tema y configuración básica de la interfaz).",
            }),
            u.jsx("p", {
              children:
                "Las cookies no obligatorias, incluidos los análisis, se activan solo con su elección. Las preferencias se pueden cambiar o las cookies se pueden eliminar en la configuración del navegador.",
            }),
          ],
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Análisis y métricas",
        }),
        u.jsxs("div", {
          className: "mt-2 space-y-3 text-sm text-neutral-700",
          children: [
            u.jsx("p", {
              children:
                "Utilizamos métricas agregadas para mejorar el contenido y la navegación. Los informes se generan sin identificación personal.",
            }),
            u.jsx("p", {
              children:
                "Análisis de terceros — con minimización de datos y desidentificación, sin perfilado ni seguimiento entre sitios.",
            }),
          ],
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Períodos de almacenamiento",
        }),
        u.jsx("div", {
          className: "mt-2 space-y-3 text-sm text-neutral-700",
          children: u.jsx("p", {
            children:
              "Los registros técnicos se almacenan de forma limitada y se rotan. Los informes agregados — por más tiempo, ya que no contienen datos personales. La vida útil de las cookies depende de su tipo y la configuración del navegador.",
          }),
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Transferencia y divulgación",
        }),
        u.jsxs("div", {
          className: "mt-2 space-y-3 text-sm text-neutral-700",
          children: [
            u.jsx("p", {
              children:
                "No vendemos datos. La transferencia es posible solo para la prestación de servicios (alojamiento, análisis) con obligaciones contractuales y medidas de seguridad.",
            }),
            u.jsx("p", {
              children:
                "Los datos no se publican sin base legal. El acceso está limitado a empleados y contratistas según el principio de necesidad.",
            }),
          ],
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Transferencia internacional",
        }),
        u.jsx("div", {
          className: "mt-2 space-y-3 text-sm text-neutral-700",
          children: u.jsx("p", {
            children:
              "Al procesar fuera de su jurisdicción, se aplican garantías suficientes: medidas contractuales, técnicas y organizativas.",
          }),
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Seguridad",
        }),
        u.jsx("div", {
          className: "mt-2 space-y-3 text-sm text-neutral-700",
          children: u.jsx("p", {
            children:
              "Aplicamos medidas técnicas y organizativas: restricción de acceso, control de autorizaciones, canales seguros, actualizaciones regulares. La seguridad absoluta es inalcanzable, pero el nivel de protección es alto.",
          }),
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Sus derechos",
        }),
        u.jsxs("div", {
          className: "mt-2 space-y-3 text-sm text-neutral-700",
          children: [
            u.jsxs("p", {
              children: [
                "Tiene derecho a solicitar acceso, rectificación, eliminación, limitación del procesamiento, objeción y portabilidad — si así lo establece la ley. Para contactarnos, utilice la sección ",
                u.jsx("a", {
                  href: "/contacts",
                  className: "link-brand",
                  children: "Contactos",
                }),
                ".",
              ],
            }),
            u.jsx("p", {
              children:
                "Podemos solicitar la verificación de identidad. La respuesta se proporciona en un plazo razonable, teniendo en cuenta la complejidad de la solicitud y el volumen de datos.",
            }),
          ],
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Niños",
        }),
        u.jsx("div", {
          className: "mt-2 space-y-3 text-sm text-neutral-700",
          children: u.jsx("p", {
            children:
              "El sitio no está destinado a personas menores de la edad legal. No recopilamos datos de niños. Si cree que un niño nos ha proporcionado datos, contáctenos — eliminaremos la información.",
          }),
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Cambios en la política",
        }),
        u.jsxs("div", {
          className: "mt-2 space-y-3 text-sm text-neutral-700",
          children: [
            u.jsx("p", {
              children:
                "La política puede actualizarse. La fecha actual se indica a continuación. Al continuar utilizando el sitio después de la actualización, acepta la nueva edición.",
            }),
            u.jsx("p", {
              className: "text-xs text-neutral-600",
              children: "Fecha de publicación actual: 2025-10-19.",
            }),
          ],
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Contactos",
        }),
        u.jsxs("p", {
          className: "mt-2 text-sm text-neutral-700",
          children: [
            "Las preguntas sobre privacidad se pueden enviar a",
            " ",
            u.jsx("a", {
              href: `mailto:${be.email}`,
              className: "link-brand",
              children: be.email,
            }),
            ".",
          ],
        }),
      ],
    }),
  });
}
function wy() {
  return u.jsx("section", {
    className: "fade-in",
    children: u.jsxs("div", {
      className: "mx-auto max-w-6xl px-4 py-12",
      children: [
        u.jsx("h1", {
          className: "text-2xl font-semibold text-neutral-900",
          children: "Política de cookies",
        }),
        u.jsx("p", {
          className: "mt-4 text-sm text-neutral-700",
          children:
            "Las cookies son pequeños datos en el navegador. Apoyan el funcionamiento de la interfaz y recuerdan las elecciones. Los análisis se utilizan solo con consentimiento y de forma anónima. Nos adherimos a la minimización de datos y no utilizamos cookies publicitarias o de perfilado.",
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Fundamentos legales y principios",
        }),
        u.jsxs("div", {
          className: "mt-2 space-y-3 text-sm text-neutral-700",
          children: [
            u.jsxs("p", {
              children: [
                "Las cookies ",
                u.jsx("strong", { children: "estrictamente necesarias" }),
                " se utilizan para proporcionar el servicio (por ejemplo, registrar el consentimiento). Las cookies ",
                u.jsx("strong", { children: "opcionales" }),
                ", incluidos los análisis, se utilizan solo con ",
                u.jsx("strong", { children: "consentimiento explícito" }),
                ".",
              ],
            }),
            u.jsx("p", {
              children:
                "No utilizamos identificadores de red publicitarios, no combinamos cookies con datos personales y no transferimos identificadores a terceros para la segmentación.",
            }),
          ],
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Tipos de cookies",
        }),
        u.jsxs("ul", {
          className: "mt-2 list-disc pl-5 text-sm text-neutral-700 space-y-2",
          children: [
            u.jsxs("li", {
              children: [
                u.jsx("strong", { children: "Necesarias" }),
                " — funcionalidad básica: registro de consentimiento, notificaciones, preferencias de interfaz simples.",
              ],
            }),
            u.jsxs("li", {
              children: [
                u.jsx("strong", { children: "Preferencias (opcional)" }),
                " — configuración de visualización (idioma, tema) al cambiar.",
              ],
            }),
            u.jsxs("li", {
              children: [
                u.jsx("strong", { children: "Analíticas (opcional)" }),
                " — estadísticas anónimas de visitas para mejorar la navegación y los materiales. Se activan solo con consentimiento.",
              ],
            }),
          ],
        }),
        u.jsx("p", {
          className: "mt-3 text-xs text-neutral-600",
          children:
            "No utilizamos cookies de marketing y no realizamos perfilado.",
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Servicios de terceros",
        }),
        u.jsxs("div", {
          className: "mt-2 space-y-3 text-sm text-neutral-700",
          children: [
            u.jsx("p", {
              children:
                "Evitamos los scripts de seguimiento externos. Los materiales descargados de plataformas externas no están destinados a rastrear la actividad en nuestro sitio.",
            }),
            u.jsx("p", {
              children:
                "No utilizamos píxeles publicitarios, retargeting y otros mecanismos de segmentación conductual.",
            }),
          ],
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Períodos de almacenamiento",
        }),
        u.jsx("div", {
          className: "mt-2 space-y-3 text-sm text-neutral-700",
          children: u.jsx("p", {
            children:
              "La vida útil depende del tipo y la configuración del navegador. Las cookies técnicas se eliminan al cerrar la sesión, las preferencias pueden almacenarse por más tiempo. El registro de la decisión puede estar en el almacenamiento local (por ejemplo, «cookie_consent_v1»).",
          }),
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Gestión de cookies y consentimiento",
        }),
        u.jsxs("div", {
          className: "mt-2 space-y-3 text-sm text-neutral-700",
          children: [
            u.jsx("p", {
              children:
                "Las cookies no obligatorias se pueden aceptar o rechazar a través del banner en la parte inferior del sitio. La limpieza de cookies y el almacenamiento local está disponible en la configuración del navegador.",
            }),
            u.jsx("p", {
              children:
                "La retirada del consentimiento no afecta la legalidad del procesamiento antes de la retirada, pero dejamos de aplicar las cookies no obligatorias en adelante.",
            }),
          ],
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Seguridad y privacidad",
        }),
        u.jsx("div", {
          className: "mt-2 space-y-3 text-sm text-neutral-700",
          children: u.jsx("p", {
            children:
              "Las cookies no identifican a la persona. No las combinamos con datos personales y las utilizamos solo dentro de los fines descritos. El acceso está limitado y controlado.",
          }),
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Cambios en la política",
        }),
        u.jsxs("div", {
          className: "mt-2 space-y-3 text-sm text-neutral-700",
          children: [
            u.jsx("p", {
              children:
                "El documento puede actualizarse a medida que cambian las prácticas. La edición actual está disponible en esta página; la fecha de publicación se indica a continuación.",
            }),
            u.jsx("p", {
              className: "text-xs text-neutral-600",
              children: "Fecha de publicación actual: 2025-10-19.",
            }),
          ],
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Contactos",
        }),
        u.jsxs("p", {
          className: "mt-2 text-sm text-neutral-700",
          children: [
            "Las preguntas sobre el uso de cookies se pueden enviar a través de la sección ",
            u.jsx("a", {
              href: "/contacts",
              className: "link-brand",
              children: "Contactos",
            }),
            ".",
          ],
        }),
      ],
    }),
  });
}
function Zy() {
  return u.jsx("section", {
    className: "fade-in",
    children: u.jsxs("div", {
      className: "mx-auto max-w-6xl px-4 py-12",
      children: [
        u.jsx("h1", {
          className: "text-2xl font-semibold text-neutral-900",
          children: "Términos de uso del sitio",
        }),
        u.jsx("p", {
          className: "mt-4 text-sm text-neutral-700",
          children: Ie(
            "Los materiales de {brand} son educativos: no son una recomendación personal ni una promesa de resultados o ingresos.",
            be.brandName
          ),
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Ámbito de aplicación",
        }),
        u.jsx("p", {
          className: "mt-2 text-sm text-neutral-700",
          children: Ie(
            "Estos términos (en adelante, «Condiciones») describen el uso de todas las secciones del sitio {brand}, el contenido y las interfaces, independientemente del dispositivo y el método de acceso.",
            be.brandName
          ),
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Aceptación de las condiciones",
        }),
        u.jsx("p", {
          className: "mt-2 text-sm text-neutral-700",
          children:
            "Al utilizar el Sitio, usted acepta las Condiciones. Si no está de acuerdo, deje de usarlo.",
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Naturaleza de los materiales",
        }),
        u.jsxs("div", {
          className: "mt-2 space-y-2 text-sm text-neutral-700",
          children: [
            u.jsx("p", {
              children:
                "El contenido es para información general y educación. No tiene en cuenta los objetivos individuales, las limitaciones y el riesgo. Los ejemplos sirven como ilustraciones para la autoevaluación.",
            }),
            u.jsx("p", {
              children:
                "No brindamos servicios profesionales, no realizamos actividades financieras, no atraemos fondos y no actuamos en nombre de terceros.",
            }),
          ],
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Ausencia de garantías",
        }),
        u.jsxs("div", {
          className: "mt-2 space-y-2 text-sm text-neutral-700",
          children: [
            u.jsx("p", {
              children:
                "El Sitio se proporciona «tal cual». No garantizamos ingresos, resultados, precisión absoluta y relevancia para sus objetivos. Los resultados pasados no garantizan los futuros.",
            }),
            u.jsx("p", {
              children:
                "Nos esforzamos por la corrección, pero son posibles errores técnicos, retrasos e incompletitud de los datos.",
            }),
          ],
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Riesgos y decisiones independientes",
        }),
        u.jsx("p", {
          className: "mt-2 text-sm text-neutral-700",
          children:
            "Las decisiones se toman de forma independiente después de verificar los hechos y las fuentes. Debe basarse en documentos primarios, publicaciones oficiales y estándares de la industria.",
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Uso de materiales",
        }),
        u.jsxs("div", {
          className: "mt-2 space-y-2 text-sm text-neutral-700",
          children: [
            u.jsx("p", {
              children:
                "Se permite la familiarización personal y la citación con la indicación de la fuente y sin distorsión del significado. La copia masiva, el procesamiento y la publicación sin consentimiento están prohibidos.",
            }),
            u.jsx("p", {
              children: Ie(
                "Está prohibido presentar materiales como propios, trabajos derivados comerciales y el uso de la marca {brand} sin consentimiento.",
                be.brandName
              ),
            }),
          ],
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Propiedad intelectual",
        }),
        u.jsx("p", {
          className: "mt-2 text-sm text-neutral-700",
          children: Ie(
            "El contenido, el diseño y la interfaz están protegidos por la ley. El titular de los derechos de autor es {brand} y/o las personas que otorgaron los derechos. Al citar, indique la fuente.",
            be.brandName
          ),
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Acciones prohibidas",
        }),
        u.jsxs("ul", {
          className: "mt-2 list-disc pl-5 text-sm text-neutral-700 space-y-1",
          children: [
            u.jsx("li", {
              children:
                "Violación intencional de la funcionalidad del Sitio o elusión de los medios técnicos de protección.",
            }),
            u.jsx("li", {
              children:
                "Recopilación automatizada de datos que contradiga las reglas y sobrecargue la infraestructura.",
            }),
            u.jsx("li", {
              children:
                "Publicación de información falsa, suplantación de identidad.",
            }),
            u.jsx("li", {
              children:
                "Distribución de spam, código malicioso e intentos de acceso no autorizado.",
            }),
          ],
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Enlaces y recursos externos",
        }),
        u.jsxs("div", {
          className: "mt-2 space-y-2 text-sm text-neutral-700",
          children: [
            u.jsx("p", {
              children:
                "El Sitio contiene enlaces a recursos de terceros. No controlamos su contenido, disponibilidad y cumplimiento. El usuario es responsable de su uso.",
            }),
            u.jsx("p", {
              children:
                "Compare los datos con las fuentes primarias y los documentos normativos: las explicaciones no reemplazan las publicaciones oficiales.",
            }),
          ],
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Responsabilidad",
        }),
        u.jsxs("div", {
          className: "mt-2 space-y-2 text-sm text-neutral-700",
          children: [
            u.jsx("p", {
              children:
                "En la medida permitida por la ley, se excluyen los daños indirectos, incidentales, especiales y punitivos, incluidas las ganancias perdidas, la pérdida de datos y la pérdida de reputación.",
            }),
            u.jsx("p", {
              children:
                "No somos responsables de las decisiones tomadas en base a los materiales y las consecuencias de su aplicación.",
            }),
          ],
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Compensación",
        }),
        u.jsx("p", {
          className: "mt-2 text-sm text-neutral-700",
          children: Ie(
            "Usted se compromete a indemnizar a {brand} y a las personas relacionadas por las pérdidas y gastos incurridos debido a la violación de las Condiciones o los derechos de terceros al utilizar el Sitio.",
            be.brandName
          ),
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Cambios en las condiciones",
        }),
        u.jsxs("div", {
          className: "mt-2 space-y-2 text-sm text-neutral-700",
          children: [
            u.jsx("p", {
              children:
                "Las Condiciones pueden actualizarse. La fecha actual se indica a continuación. Al continuar utilizando el Sitio después de la actualización, usted acepta la nueva edición.",
            }),
            u.jsx("p", {
              className: "text-xs text-neutral-600",
              children: "Fecha de publicación actual: 2025-10-19.",
            }),
          ],
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Terminación del acceso",
        }),
        u.jsx("p", {
          className: "mt-2 text-sm text-neutral-700",
          children:
            "El acceso al Sitio puede suspenderse o terminarse en caso de violación de las Condiciones, amenaza a la seguridad o por otros motivos legales.",
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Ley aplicable y disputas",
        }),
        u.jsx("p", {
          className: "mt-2 text-sm text-neutral-700",
          children:
            "Las disputas se resuelven de acuerdo con la ley aplicable en el lugar de registro y actividad de las personas relevantes relacionadas con el Sitio. Las partes se esfuerzan por resolver las diferencias mediante negociaciones antes de los tribunales.",
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Comentarios",
        }),
        u.jsxs("p", {
          className: "mt-2 text-sm text-neutral-700",
          children: [
            "Las preguntas sobre las Condiciones pueden enviarse a",
            " ",
            u.jsx("a", {
              href: `mailto:${be.email}`,
              className: "link-brand",
              children: be.email,
            }),
            " ",
            "o a través de la sección ",
            u.jsx("a", {
              href: "/contacts",
              className: "link-brand",
              children: "Contactos",
            }),
            ".",
          ],
        }),
      ],
    }),
  });
}
function Vy() {
  return u.jsx("section", {
    className: "fade-in",
    children: u.jsxs("div", {
      className: "mx-auto max-w-6xl px-4 py-12",
      children: [
        u.jsx("h1", {
          className: "text-2xl font-semibold text-neutral-900",
          children: "Declaración de accesibilidad",
        }),
        u.jsxs("p", {
          className: "mt-4 text-sm text-neutral-700",
          children: [
            "Seguimos las mejores prácticas de accesibilidad: semántica, contraste, textos alternativos y soporte para la navegación con teclado. Si nota un problema, infórmelo a través de la sección ",
            u.jsx("a", {
              href: "/contacts",
              className: "link-brand",
              children: "Contactos",
            }),
            ".",
          ],
        }),
      ],
    }),
  });
}
function Ky() {
  const c = [
      "Esta página trata sobre una comunicación tranquila y clara. Valoramos su tiempo y respetamos los límites: la correspondencia no es una consulta ni una promesa de resultados. {brand} se adhiere a un enfoque educativo: ayudamos a navegar por los materiales, explicamos términos y metodologías para que pueda tomar decisiones más informadas de forma independiente.",
      "No damos consejos personales sobre carteras y transacciones. Nuestras respuestas son informativas y no tienen en cuenta el contexto personal. Para una evaluación profesional, consulte a especialistas con licencia. Apoyamos la disciplina, la verificación de hechos y el trabajo con fuentes primarias.",
      "Revisamos los correos electrónicos durante el horario laboral. Intentamos responder de forma concisa y al grano. Si se requiere una aclaración, podemos pedirle que especifique el contexto (objetivo, horizonte, limitaciones, fuentes). Esto no es burocracia, sino una forma de mantener la claridad y la utilidad del diálogo.",
      "La confidencialidad es importante: no recopilamos datos personales innecesarios y no los transferimos a terceros sin motivos legales. Por favor, no envíe información sensible: números de tarjetas, datos de pasaporte, contraseñas. Para los casos, utilice ejemplos anónimos y fuentes abiertas.",
      "El enfoque de la correspondencia es la claridad. Evitamos formulaciones publicitarias y promesas. Si proporcionamos enlaces, considérelos como una invitación a la verificación independiente: consulte la fecha de publicación, el contexto, el autor y compárelos con los documentos normativos de su jurisdicción.",
      "Para acelerar la respuesta, agregue estructura: el propósito de la pregunta, la hipótesis actual, qué fuentes ha estudiado, dónde surgió la incertidumbre. Una formulación corta y precisa casi siempre ayuda y mejora la calidad de la retroalimentación.",
      "No abrimos archivos adjuntos de fuentes desconocidas ni seguimos enlaces sospechosos. Si desea compartir un documento, utilice alojamientos fiables y proporcione los derechos de acceso mínimos. Si es necesario, solicitaremos un extracto o citas para verificar el contexto.",
      "Si la pregunta excede el formato educativo (por ejemplo, requiere una evaluación legal o una recomendación financiera personal), lo informamos honestamente y le indicamos a dónde acudir. La transparencia es más importante que la imitación de un soporte preciso.",
      "Un ritmo tranquilo reduce el ruido y ayuda a mantener el enfoque en los hechos. No apresuramos las decisiones ni estimulamos las reacciones emocionales. En cambio, ofrecemos prácticas (listas de verificación, análisis de escenarios, verificación de fuentes) que fortalecen la estabilidad.",
      "{brand} trata sobre la claridad, la responsabilidad y el respeto por los límites. Escriba si necesita navegación por los materiales, explicación de términos, metodologías de verificación de hechos. Haremos todo lo posible para que la respuesta sea concisa, precisa y tranquila.",
    ],
    f = [
      {
        src: "https://images.pexels.com/photos/3182826/pexels-photo-3182826.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Comunicación empresarial tranquila",
      },
      {
        src: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Estructuras de consulta",
      },
      {
        src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Trabajo con fuentes primarias",
      },
      {
        src: "https://images.pexels.com/photos/3861968/pexels-photo-3861968.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Verificación de hechos y notas",
      },
    ];
  return u.jsx("section", {
    className: "fade-in",
    children: u.jsxs("div", {
      className: "mx-auto max-w-6xl px-4 py-12",
      children: [
        u.jsx("h1", {
          className: "text-2xl font-semibold text-neutral-900",
          children: "Contactos",
        }),
        u.jsxs("p", {
          className: "mt-4 text-sm text-neutral-700",
          children: [
            "Puede contactarnos por correo electrónico: ",
            u.jsx("a", {
              href: `mailto:${be.email}`,
              className: "link-brand",
              children: be.email,
            }),
            ". Respondemos durante el horario laboral y ayudamos a navegar por los materiales.",
          ],
        }),
        u.jsxs("div", {
          className: "mt-6 grid gap-6 md:grid-cols-2",
          children: [
            u.jsxs("div", {
              className: "rounded-lg border border-neutral-200 p-4",
              children: [
                u.jsx("h3", {
                  className: "text-lg font-medium text-neutral-900",
                  children: "Plataformas sociales",
                }),
                u.jsx("p", {
                  className: "mt-2 text-sm text-neutral-700",
                  children:
                    "Publicamos noticias y materiales de acceso abierto.",
                }),
                u.jsxs("ul", {
                  className: "mt-2 space-y-2 text-sm",
                  children: [
                    u.jsx("li", {
                      children: u.jsx("a", {
                        className: "link-brand",
                        href: be.telegram,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Telegram (canal de actualizaciones)",
                      }),
                    }),
                    u.jsx("li", {
                      children: u.jsx("a", {
                        className: "link-brand",
                        href: be.instagram,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Instagram (anuncios y notas)",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              className: "rounded-lg border border-neutral-200 p-4",
              children: [
                u.jsx("h3", {
                  className: "text-lg font-medium text-neutral-900",
                  children: "Dirección",
                }),
                u.jsx("p", {
                  className: "mt-2 text-sm text-neutral-700",
                  children: "Madrid, España. Trabajamos de forma remota.",
                }),
              ],
            }),
          ],
        }),
        u.jsxs("div", {
          className: "mt-12",
          children: [
            u.jsx("h2", {
              className: "text-xl font-semibold text-neutral-900",
              children: "Reglas de comunicación",
            }),
            u.jsx("div", {
              className:
                "mt-4 space-y-4 text-sm leading-relaxed text-neutral-800",
              children: c.map((d, o) =>
                u.jsx("p", { children: Ie(d, be.brandName) }, o)
              ),
            }),
          ],
        }),
        u.jsxs("div", {
          className: "mt-12",
          children: [
            u.jsx("h2", {
              className: "text-xl font-semibold text-neutral-900",
              children: "Notas visuales",
            }),
            u.jsx("div", {
              className: "mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3",
              children: f.map((d) =>
                u.jsxs(
                  "figure",
                  {
                    className:
                      "overflow-hidden rounded-lg border border-neutral-200",
                    children: [
                      u.jsx("img", {
                        src: d.src,
                        alt: d.alt,
                        className: "h-48 w-full object-cover",
                      }),
                      u.jsx("figcaption", {
                        className: "p-2 text-xs text-neutral-600",
                        children: d.alt,
                      }),
                    ],
                  },
                  d.src
                )
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
function Jy() {
  const c = [
      {
        q: "¿Ofrecen recomendaciones financieras?",
        a: "No. El contenido es informativo y no sustituye el asesoramiento personal.",
      },
      {
        q: "¿Garantizan ingresos o resultados?",
        a: "No. No ofrecemos garantías ni utilizamos promesas publicitarias.",
      },
      {
        q: "¿Hay materiales de pago?",
        a: "Los materiales en el sitio son gratuitos: artículos educativos y guías.",
      },
      {
        q: "¿Operan solo en Madrid, España?",
        a: "El contenido está enfocado en Madrid, España, pero los principios de educación financiera son universales.",
      },
    ],
    f = [
      "El objetivo de las Preguntas Frecuentes es reducir la ansiedad y aclarar las expectativas. No reemplazamos la consulta ni asumimos responsabilidad por sus decisiones. El enfoque es educativo: principios, metodologías y errores comunes para pasos conscientes.",
      "El contenido educativo no es una recomendación personal: no tiene en cuenta su situación, objetivos y limitaciones. Los ejemplos en {brand} son ilustraciones de la lógica, no instrucciones para la acción. Relacione los conocimientos con los requisitos de su jurisdicción.",
      "No prometemos rentabilidad y evitamos exageraciones publicitarias. El mercado no está obligado a confirmar las expectativas, el pasado no garantiza el futuro. Los productos conllevan riesgos de mercado y operativos. Planifique rangos de resultados y utilice el análisis de escenarios.",
      "Verifique las fuentes primarias: documentos, publicaciones de reguladores, estándares. Las explicaciones populares son convenientes, pero no reemplazan las fuentes. Compare formulaciones, fechas, versiones y contexto. Los enlaces son una invitación a verificar, no una señal de confianza.",
      "Los materiales son gratuitos y sin ventas ocultas. Las recomendaciones prácticas son para un aprendizaje autodirigido seguro. No promocionamos productos ni recibimos remuneraciones; la prioridad es la claridad, la precisión y el respeto de los límites.",
      "El contexto geográfico es importante: consideramos la regulación de Madrid, España, pero los principios de educación financiera son universales. Compare fuentes internacionales (por ejemplo, la OCDE) con las normas locales.",
      "Las decisiones son un proceso. Defina el horizonte, los criterios de riesgo y las condiciones de revisión. Reduzca el ruido: limite las verificaciones de precios, use listas de verificación y recuérdese la verificación repetida de los hechos.",
      "Describimos las herramientas y plataformas de forma neutral: señalamos características y limitaciones. No hay soluciones “mejores” sin contexto. Equilibre objetivos, plazos, comisiones, liquidez, regulación y resistencia a las caídas.",
      "Escríbanos dentro de los límites: no damos recomendaciones individuales de cartera ni evaluamos transacciones. La retroalimentación es sobre la claridad de los materiales. Mantenemos una estricta confidencialidad.",
      "El contenido se actualiza a medida que aparecen nuevos datos y normas. Indicamos las fechas de publicación y revisión. Informe de errores: la corrección es más importante que la velocidad. {brand} se adhiere a un enfoque tranquilo y basado en pruebas.",
    ],
    d = [
      {
        src: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Discusión de preguntas",
      },
      {
        src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Discusión tranquila, notas",
      },
      {
        src: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Trabajo en equipo",
      },
      {
        src: "https://images.pexels.com/photos/5717482/pexels-photo-5717482.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Análisis de documentos y riesgos",
      },
    ];
  return u.jsx("section", {
    className: "fade-in",
    children: u.jsxs("div", {
      className: "mx-auto max-w-6xl px-4 py-12",
      children: [
        u.jsx("h1", {
          className: "text-2xl font-semibold text-neutral-900",
          children: "Preguntas Frecuentes",
        }),
        u.jsx("p", {
          className: "mt-4 text-sm text-neutral-700",
          children:
            "A continuación, respuestas breves. Adicionalmente, explicaciones y notas visuales.",
        }),
        u.jsx("div", {
          className: "mt-6 space-y-4",
          children: c.map((o, m) =>
            u.jsxs(
              "details",
              {
                className: "rounded-lg border border-neutral-200 p-4",
                children: [
                  u.jsx("summary", {
                    className:
                      "cursor-pointer text-sm font-medium text-neutral-900",
                    children: o.q,
                  }),
                  u.jsx("p", {
                    className: "mt-2 text-sm text-neutral-700",
                    children: o.a,
                  }),
                ],
              },
              m
            )
          ),
        }),
        u.jsxs("div", {
          className: "mt-12",
          children: [
            u.jsx("h2", {
              className: "text-xl font-semibold text-neutral-900",
              children: "Explicaciones",
            }),
            u.jsx("div", {
              className:
                "mt-4 space-y-4 text-sm leading-relaxed text-neutral-800",
              children: f.map((o, m) =>
                u.jsx("p", { children: Ie(o, be.brandName) }, m)
              ),
            }),
          ],
        }),
        u.jsxs("div", {
          className: "mt-12",
          children: [
            u.jsx("h2", {
              className: "text-xl font-semibold text-neutral-900",
              children: "Notas visuales",
            }),
            u.jsx("div", {
              className: "mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3",
              children: d.map((o) =>
                u.jsxs(
                  "figure",
                  {
                    className:
                      "overflow-hidden rounded-lg border border-neutral-200",
                    children: [
                      u.jsx("img", {
                        src: o.src,
                        alt: o.alt,
                        className: "h-48 w-full object-cover",
                      }),
                      u.jsx("figcaption", {
                        className: "p-2 text-xs text-neutral-600",
                        children: o.alt,
                      }),
                    ],
                  },
                  o.src
                )
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
function ky() {
  const c = [
      {
        name: "Banco Nacional de España",
        url: "https://www.bde.es/",
        desc: "Publicaciones oficiales, estadísticas, documentos regulatorios.",
      },
      {
        name: "Bolsa de Madrid",
        url: "https://www.bolsamadrid.es/",
        desc: "Noticias y materiales sobre el mercado. Informamos, sin llamadas a la acción.",
      },
      {
        name: "administracion.gob.es",
        url: "https://administracion.gob.es/",
        desc: "Servicios públicos e información de referencia.",
      },
      {
        name: "OECD — educación financiera",
        url: "https://www.oecd.org/financial/education/",
        desc: "Estándares e investigaciones internacionales.",
      },
    ],
    f = [
      "Sección para navegar por fuentes oficiales. No promocionamos productos; los enlaces ayudan a verificar hechos y términos. Primero las fuentes primarias, luego las interpretaciones.",
      "Banco de España — estadísticas, reseñas, textos regulatorios. Bolsa de Madrid — materiales prácticos. Cualquier decisión requiere verificación independiente y evaluación de riesgos.",
      "administracion.gob.es — servicios públicos e información. Fuentes internacionales (por ejemplo, la OCDE) amplían el contexto; siempre relaciónelas con la regulación local.",
      "No sacamos conclusiones por usted ni damos recomendaciones individuales. Práctica: verificar, volver a verificar y citar fuentes — menos emociones, más disciplina.",
      "«Garantías» y llamadas agresivas — motivo para una verificación adicional o un rechazo. El apoyo es un enfoque tranquilo y basado en pruebas.",
      "Anote la fecha, el autor, el contexto y los conceptos clave. Vuelva a las fuentes primarias; no se base en un solo material.",
      "{brand} mantiene un entorno sin ruido: navegación, explicaciones precisas, respeto por los límites. No prometemos resultados, ayudamos en la práctica de la conciencia.",
    ],
    d = [
      {
        src: "https://images.pexels.com/photos/3184463/pexels-photo-3184463.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Búsqueda y verificación de fuentes",
      },
      {
        src: "https://images.pexels.com/photos/3184456/pexels-photo-3184456.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Notas, enlaces",
      },
      {
        src: "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Trabajo con documentos",
      },
    ];
  return u.jsx("section", {
    className: "fade-in",
    children: u.jsxs("div", {
      className: "mx-auto max-w-6xl px-4 py-12",
      children: [
        u.jsx("h1", {
          className: "text-2xl font-semibold text-neutral-900",
          children: "Recursos útiles",
        }),
        u.jsx("p", {
          className: "mt-4 text-sm text-neutral-700",
          children:
            "A continuación, fuentes oficiales para el estudio independiente. No promocionamos productos.",
        }),
        u.jsx("ul", {
          className: "mt-6 space-y-3",
          children: c.map((o) =>
            u.jsxs(
              "li",
              {
                className: "rounded-lg border border-neutral-200 p-4",
                children: [
                  u.jsx("a", {
                    href: o.url,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "link-brand",
                    children: o.name,
                  }),
                  u.jsx("p", {
                    className: "mt-2 text-sm text-neutral-700",
                    children: o.desc,
                  }),
                ],
              },
              o.url
            )
          ),
        }),
        u.jsxs("div", {
          className: "mt-12",
          children: [
            u.jsx("h2", {
              className: "text-xl font-semibold text-neutral-900",
              children: "Cómo trabajar con fuentes",
            }),
            u.jsx("div", {
              className:
                "mt-4 space-y-4 text-sm leading-relaxed text-neutral-800",
              children: f.map((o, m) =>
                u.jsx("p", { children: Ie(o, be.brandName) }, m)
              ),
            }),
          ],
        }),
        u.jsxs("div", {
          className: "mt-12",
          children: [
            u.jsx("h2", {
              className: "text-xl font-semibold text-neutral-900",
              children: "Notas visuales",
            }),
            u.jsx("div", {
              className: "mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3",
              children: d.map((o) =>
                u.jsxs(
                  "figure",
                  {
                    className:
                      "overflow-hidden rounded-lg border border-neutral-200",
                    children: [
                      u.jsx("img", {
                        src: o.src,
                        alt: o.alt,
                        className: "h-48 w-full object-cover",
                      }),
                      u.jsx("figcaption", {
                        className: "p-2 text-xs text-neutral-600",
                        children: o.alt,
                      }),
                    ],
                  },
                  o.src
                )
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
function $y() {
  const c = [
    {
      term: "Educación financiera",
      def: "Conocimientos y habilidades básicas para gestionar las finanzas personales.",
    },
    {
      term: "Diversificación",
      def: "Distribución de la atención/recursos para reducir riesgos.",
    },
    { term: "Fondo de reserva", def: "Ahorros para situaciones imprevistas." },
    {
      term: "Horizonte de planificación",
      def: "Plazo para el que se establecen los objetivos financieros.",
    },
  ];
  return u.jsx("section", {
    className: "fade-in",
    children: u.jsxs("div", {
      className: "mx-auto max-w-6xl px-4 py-12",
      children: [
        u.jsx("h1", {
          className: "text-2xl font-semibold text-neutral-900",
          children: "Glosario",
        }),
        u.jsx("dl", {
          className: "mt-6 space-y-3",
          children: c.map((f) =>
            u.jsxs(
              "div",
              {
                className: "rounded-lg border border-neutral-200 p-4",
                children: [
                  u.jsx("dt", {
                    className: "text-sm font-medium text-neutral-900",
                    children: f.term,
                  }),
                  u.jsx("dd", {
                    className: "mt-2 text-sm text-neutral-700",
                    children: f.def,
                  }),
                ],
              },
              f.term
            )
          ),
        }),
      ],
    }),
  });
}
const Mm = [
  {
    slug: "privychki-i-finansy",
    title: "Hábitos y finanzas: cómo actuar con calma",
    date: "2025-01-12",
    excerpt:
      "Regularidad, disciplina y ausencia de promesas: la base de un enfoque sostenible.",
    image:
      "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `Un enfoque sostenible de las finanzas personales comienza con hábitos: llevar un registro, establecer metas realistas y
    evitar promesas de «hacerse rico rápidamente». Esto no garantiza un resultado, pero mejora la calidad de las decisiones.`,
  },
  {
    slug: "uchet-rashodov-bez-stressa",
    title: "Control de gastos sin estrés",
    date: "2025-01-18",
    excerpt:
      "Un esquema de contabilidad simple ayuda a ver el panorama y reducir la impulsividad.",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `Elija una herramienta de contabilidad que le resulte conveniente. La regularidad es más importante que la perfección. Los datos sirven para
    el análisis, no para la autoevaluación.`,
  },
  {
    slug: "dlitelnye-celi",
    title: "Objetivos a largo plazo y pasos locales",
    date: "2025-02-01",
    excerpt:
      "Una estrategia para años requiere pasos pequeños pero constantes sin promesas de ingresos.",
    image:
      "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content:
      "Concéntrese en los procesos. Evalúe los riesgos, evite el bombo y realice acciones pequeñas y repetibles.",
  },
  {
    slug: "rabota-onlajn-disciplinna",
    title: "Trabajo en línea: disciplina y seguridad",
    date: "2025-02-12",
    excerpt:
      "Organización del tiempo, verificación de fuentes, rechazo de promesas de ingresos instantáneos.",
    image:
      "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `El trabajo en línea es posible, pero es importante observar la higiene de seguridad: verificar las plataformas, evitar promesas
    de «pago instantáneo», tomar descansos y planificar tareas.`,
  },
  {
    slug: "start-dlya-nachinayushchih",
    title: "Inicio para principiantes: mini-plan para un mes",
    date: "2025-03-05",
    excerpt:
      "Pasos sencillos sin sobrecarga para empezar a orientarse en las finanzas personales.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `Formule un objetivo, lleve un registro, realice una mini-auditoría de suscripciones y gastos. Este es un material para
    orientación, no una instrucción de ingresos.`,
  },
  {
    slug: "kontekst-madrid-ispaniya",
    title: "Contexto de Madrid, España: qué considerar",
    date: "2025-03-22",
    excerpt:
      "Características de la información y fuentes abiertas sin mencionar herramientas específicas.",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `Al trabajar con información, tenga en cuenta las fuentes oficiales y los requisitos reglamentarios. No damos
    recomendaciones individuales ni describimos ingresos.`,
  },
];
function Wy() {
  return u.jsx("section", {
    className: "fade-in",
    children: u.jsxs("div", {
      className: "mx-auto max-w-6xl px-4 py-12",
      children: [
        u.jsxs("div", {
          className: "flex items-end justify-between",
          children: [
            u.jsx("h1", {
              className: "text-2xl font-semibold text-neutral-900",
              children: "Blog",
            }),
            u.jsx("p", {
              className: "text-lg text-neutral-500",
              children: "Materiales educativos, sin promesas de ingresos.",
            }),
          ],
        }),
        u.jsx("div", {
          className: "mt-6 grid gap-6 md:grid-cols-3",
          children: Mm.map((c) =>
            u.jsxs(
              "article",
              {
                className:
                  "overflow-hidden rounded-lg border border-neutral-200",
                children: [
                  u.jsx("img", {
                    src: c.image,
                    alt: c.title,
                    className: "h-40 w-full object-cover",
                  }),
                  u.jsxs("div", {
                    className: "p-4",
                    children: [
                      u.jsx("time", {
                        className: "text-xs text-neutral-500",
                        dateTime: c.date,
                        children: c.date,
                      }),
                      u.jsx("h3", {
                        className: "mt-2 text-lg font-medium text-neutral-900",
                        children: c.title,
                      }),
                      u.jsx("p", {
                        className: "mt-2 text-sm text-neutral-700",
                        children: c.excerpt,
                      }),
                      u.jsx(ut, {
                        to: `/blog/${c.slug}`,
                        className: "mt-3 inline-block text-sm link-brand",
                        children: "Leer más",
                      }),
                    ],
                  }),
                ],
              },
              c.slug
            )
          ),
        }),
      ],
    }),
  });
}
function Fy() {
  const { slug: c } = Y0(),
    f = Mm.find((d) => d.slug === c);
  return f
    ? u.jsx("article", {
        className: "fade-in",
        children: u.jsxs("div", {
          className: "mx-auto max-w-3xl px-4 py-12",
          children: [
            u.jsx("img", {
              src: f.image,
              alt: f.title,
              className:
                "h-56 w-full rounded-lg border border-neutral-200 object-cover",
            }),
            u.jsx("time", {
              className: "mt-4 block text-xs text-neutral-500",
              dateTime: f.date,
              children: f.date,
            }),
            u.jsx("h1", {
              className: "mt-2 text-2xl font-semibold text-neutral-900",
              children: f.title,
            }),
            u.jsx("p", {
              className: "mt-4 text-sm text-neutral-700 whitespace-pre-line",
              children: f.content,
            }),
            u.jsx("p", {
              className: "mt-6 text-xs text-neutral-500",
              children:
                "El material es de carácter informativo y no constituye una recomendación individual.",
            }),
            u.jsx(ut, {
              to: "/blog",
              className: "mt-4 inline-block text-sm link-brand",
              children: "← Volver al blog",
            }),
          ],
        }),
      })
    : u.jsx("section", {
        className: "fade-in",
        children: u.jsxs("div", {
          className: "mx-auto max-w-6xl px-4 py-12",
          children: [
            u.jsx("h1", {
              className: "text-2xl font-semibold text-neutral-900",
              children: "Artículo no encontrado",
            }),
            u.jsx("p", {
              className: "mt-2 text-sm text-neutral-700",
              children:
                "Verifique la dirección o regrese a la sección del blog.",
            }),
            u.jsx(ut, {
              to: "/blog",
              className: "mt-3 inline-block text-sm link-brand",
              children: "Volver al blog",
            }),
          ],
        }),
      });
}
const Bc = "cookie_consent_v1";
function Iy() {
  const [c, f] = M.useState(!1),
    [d, o] = M.useState(!1),
    [m, g] = M.useState("");
  M.useEffect(() => {
    try {
      const p = localStorage.getItem(Bc);
      if (p) {
        const A = JSON.parse(p);
        o(!!A.analytics);
      } else o(!1);
    } catch {
      o(!1);
    } finally {
      f(!0);
    }
  }, []);
  function E(p) {
    try {
      window.dispatchEvent(
        new CustomEvent("cookie-consent-updated", { detail: p })
      );
    } catch {}
  }
  function D() {
    localStorage.setItem(
      Bc,
      JSON.stringify({
        essential: !0,
        analytics: d,
        date: new Date().toISOString(),
      })
    ),
      E({ essential: !0, analytics: d }),
      g("Configuración guardada. Se puede cambiar en cualquier momento.");
  }
  function b() {
    localStorage.removeItem(Bc),
      o(!1),
      E({ essential: !0, analytics: !1, reset: !0 }),
      g(
        "Selección restablecida. El banner de consentimiento aparecerá en la próxima visita."
      );
  }
  return u.jsx("section", {
    className: "fade-in",
    children: u.jsxs("div", {
      className: "mx-auto max-w-6xl px-4 py-12",
      children: [
        u.jsx("h1", {
          className: "text-2xl font-semibold text-neutral-900",
          children: "Configuración de cookies",
        }),
        u.jsx("p", {
          className: "mt-4 text-sm text-neutral-700",
          children:
            "Administre las cookies opcionales. Las estrictamente necesarias siempre están activadas; los análisis, solo con consentimiento.",
        }),
        u.jsxs("div", {
          className: "mt-6 rounded-lg border border-neutral-200 bg-white p-4",
          children: [
            u.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                u.jsxs("div", {
                  children: [
                    u.jsx("p", {
                      className: "text-sm font-medium text-neutral-900",
                      children: "Análisis",
                    }),
                    u.jsx("p", {
                      className: "text-xs text-neutral-600",
                      children:
                        "Estadísticas anónimas de visitas. Ayuda a mejorar la navegación y los materiales.",
                    }),
                  ],
                }),
                u.jsx("input", {
                  id: "analytics-toggle",
                  type: "checkbox",
                  checked: d,
                  onChange: (p) => o(p.target.checked),
                  className: "h-4 w-4 rounded border-neutral-300",
                  "aria-checked": d,
                }),
              ],
            }),
            u.jsxs("div", {
              className: "mt-4 flex gap-2",
              children: [
                u.jsx("button", {
                  onClick: D,
                  className:
                    "rounded bg-brand px-4 py-2 text-sm text-white hover:bg-brandHover",
                  children: "Guardar",
                }),
                u.jsx("button", {
                  onClick: b,
                  className:
                    "rounded border border-neutral-200 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50",
                  children: "Restablecer",
                }),
              ],
            }),
            m &&
              u.jsx("p", {
                role: "status",
                "aria-live": "polite",
                className: "mt-3 text-xs text-neutral-600",
                children: m,
              }),
          ],
        }),
        u.jsxs("div", {
          className: "mt-8 space-y-3 text-sm text-neutral-700",
          children: [
            u.jsxs("p", {
              children: [
                "Más detalles en la ",
                u.jsx("a", {
                  href: "/cookies",
                  className: "link-brand",
                  children: "Política de cookies",
                }),
                " y la",
                u.jsx("a", {
                  href: "/privacy",
                  className: "ml-1 link-brand",
                  children: "Política de privacidad",
                }),
                ".",
              ],
            }),
            u.jsx("p", {
              children:
                "Las cookies y el almacenamiento local se pueden borrar en la configuración del navegador.",
            }),
          ],
        }),
      ],
    }),
  });
}
function Py() {
  return u.jsx("section", {
    className: "fade-in",
    children: u.jsxs("div", {
      className: "mx-auto max-w-6xl px-4 py-12",
      children: [
        u.jsx("h1", {
          className: "text-2xl font-semibold text-neutral-900",
          children: "Publicidad y estándares editoriales",
        }),
        u.jsx("p", {
          className: "mt-4 text-sm text-neutral-700",
          children:
            "Operamos según las reglas de Google Ads y la legislación de España/UE. La publicidad y los materiales de socios se indican claramente, sin promesas engañosas ni formulaciones agresivas.",
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Principios clave",
        }),
        u.jsxs("ul", {
          className: "mt-2 list-disc pl-5 text-sm text-neutral-700 space-y-2",
          children: [
            u.jsx("li", {
              children:
                "No hay contenido prohibido: violencia, discriminación, actividades ilegales, contenido para adultos.",
            }),
            u.jsx("li", {
              children:
                "Sin declaraciones engañosas, promesas poco realistas y garantías de resultados.",
            }),
            u.jsx("li", {
              children:
                "Etiquetado claro de publicidad, materiales de socios y patrocinio (si aplica).",
            }),
            u.jsx("li", {
              children:
                "Respeto a la privacidad: sin personalización por categorías sensibles.",
            }),
            u.jsx("li", {
              children:
                "Consideración de restricciones de edad y normas locales de publicación de información.",
            }),
          ],
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Datos y privacidad",
        }),
        u.jsxs("div", {
          className: "mt-2 space-y-3 text-sm text-neutral-700",
          children: [
            u.jsx("p", {
              children:
                "No vendemos datos personales ni segmentamos por categorías sensibles. Las métricas y análisis se aplican de forma agregada y anónima con su consentimiento.",
            }),
            u.jsxs("p", {
              children: [
                "Para más detalles, consulte la ",
                u.jsx("a", {
                  href: "/privacy",
                  className: "link-brand",
                  children: "Política de privacidad",
                }),
                " y",
                u.jsx("a", {
                  href: "/cookies",
                  className: "ml-1 link-brand",
                  children: "Política de uso de cookies",
                }),
                ".",
              ],
            }),
          ],
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Exactitud y transparencia",
        }),
        u.jsxs("div", {
          className: "mt-2 space-y-3 text-sm text-neutral-700",
          children: [
            u.jsxs("p", {
              children: [
                "Publicamos contenido preciso y verificable. Si cree que los materiales o la publicidad infringen las normas, infórmenos a través de la sección ",
                u.jsx("a", {
                  href: "/contacts",
                  className: "link-brand",
                  children: "Contactos",
                }),
                ".",
              ],
            }),
            u.jsx("p", {
              children:
                "Procesamos las solicitudes rápidamente: corregimos materiales o retiramos la publicidad.",
            }),
          ],
        }),
        u.jsx("h2", {
          className: "mt-8 text-lg font-medium text-neutral-900",
          children: "Actualizaciones",
        }),
        u.jsx("p", {
          className: "mt-2 text-sm text-neutral-700",
          children:
            "El documento se actualiza periódicamente. La versión actual está disponible en esta página. Fecha de publicación: 2025-10-19.",
        }),
      ],
    }),
  });
}
function ev() {
  return (
    M.useEffect(() => {
      Dy(be);
    }, []),
    u.jsx(Ny, {
      children: u.jsxs("div", {
        className: "flex min-h-screen flex-col bg-white",
        children: [
          u.jsx(qy, {}),
          u.jsx(Hy, {}),
          u.jsx("main", {
            className: "flex-1",
            children: u.jsxs(ey, {
              children: [
                u.jsx(Qe, { path: "/", element: u.jsx(Ly, {}) }),
                u.jsx(Qe, { path: "/sobre-nosotros", element: u.jsx(By, {}) }),
                u.jsx(Qe, { path: "/casos", element: u.jsx(Yy, {}) }),
                u.jsx(Qe, { path: "/consejos", element: u.jsx(Gy, {}) }),
                u.jsx(Qe, { path: "/start", element: u.jsx(Xy, {}) }),
                u.jsx(Qe, { path: "/blog", element: u.jsx(Wy, {}) }),
                u.jsx(Qe, { path: "/blog/:slug", element: u.jsx(Fy, {}) }),
                u.jsx(Qe, { path: "/privacy", element: u.jsx(Qy, {}) }),
                u.jsx(Qe, { path: "/cookies", element: u.jsx(wy, {}) }),
                u.jsx(Qe, { path: "/cookie-settings", element: u.jsx(Iy, {}) }),
                u.jsx(Qe, { path: "/terms", element: u.jsx(Zy, {}) }),
                u.jsx(Qe, { path: "/accessibility", element: u.jsx(Vy, {}) }),
                u.jsx(Qe, { path: "/contacts", element: u.jsx(Ky, {}) }),
                u.jsx(Qe, { path: "/faq", element: u.jsx(Jy, {}) }),
                u.jsx(Qe, { path: "/resources", element: u.jsx(ky, {}) }),
                u.jsx(Qe, { path: "/glossary", element: u.jsx($y, {}) }),
                u.jsx(Qe, { path: "/ads-policy", element: u.jsx(Py, {}) }),
              ],
            }),
          }),
          u.jsx(Uy, {}),
        ],
      }),
    })
  );
}
c0.createRoot(document.getElementById("root")).render(
  u.jsx(M.StrictMode, { children: u.jsx(ev, {}) })
);
