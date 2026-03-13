function vA(e, i) {
    for (var a = 0; a < i.length; a++) {
        const r = i[a];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const u = Object.getOwnPropertyDescriptor(r, o);
                    u && Object.defineProperty(e, o, u.get ? u : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const u of o)
            if (u.type === "childList")
                for (const f of u.addedNodes)
                    f.tagName === "LINK" && f.rel === "modulepreload" && r(f)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function a(o) {
        const u = {};
        return o.integrity && (u.integrity = o.integrity),
        o.referrerPolicy && (u.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? u.credentials = "include" : o.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin",
        u
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const u = a(o);
        fetch(o.href, u)
    }
}
)();
function Tx(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Hf = {
    exports: {}
}
  , Mr = {};
var tv;
function xA() {
    if (tv)
        return Mr;
    tv = 1;
    var e = Symbol.for("react.transitional.element")
      , i = Symbol.for("react.fragment");
    function a(r, o, u) {
        var f = null;
        if (u !== void 0 && (f = "" + u),
        o.key !== void 0 && (f = "" + o.key),
        "key"in o) {
            u = {};
            for (var h in o)
                h !== "key" && (u[h] = o[h])
        } else
            u = o;
        return o = u.ref,
        {
            $$typeof: e,
            type: r,
            key: f,
            ref: o !== void 0 ? o : null,
            props: u
        }
    }
    return Mr.Fragment = i,
    Mr.jsx = a,
    Mr.jsxs = a,
    Mr
}
var ev;
function bA() {
    return ev || (ev = 1,
    Hf.exports = xA()),
    Hf.exports
}
var v = bA()
  , qf = {
    exports: {}
}
  , Nr = {}
  , Ff = {
    exports: {}
}
  , Gf = {};
var nv;
function SA() {
    return nv || (nv = 1,
    (function(e) {
        function i(z, q) {
            var k = z.length;
            z.push(q);
            t: for (; 0 < k; ) {
                var rt = k - 1 >>> 1
                  , xt = z[rt];
                if (0 < o(xt, q))
                    z[rt] = q,
                    z[k] = xt,
                    k = rt;
                else
                    break t
            }
        }
        function a(z) {
            return z.length === 0 ? null : z[0]
        }
        function r(z) {
            if (z.length === 0)
                return null;
            var q = z[0]
              , k = z.pop();
            if (k !== q) {
                z[0] = k;
                t: for (var rt = 0, xt = z.length, D = xt >>> 1; rt < D; ) {
                    var K = 2 * (rt + 1) - 1
                      , $ = z[K]
                      , nt = K + 1
                      , St = z[nt];
                    if (0 > o($, k))
                        nt < xt && 0 > o(St, $) ? (z[rt] = St,
                        z[nt] = k,
                        rt = nt) : (z[rt] = $,
                        z[K] = k,
                        rt = K);
                    else if (nt < xt && 0 > o(St, k))
                        z[rt] = St,
                        z[nt] = k,
                        rt = nt;
                    else
                        break t
                }
            }
            return q
        }
        function o(z, q) {
            var k = z.sortIndex - q.sortIndex;
            return k !== 0 ? k : z.id - q.id
        }
        if (e.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var u = performance;
            e.unstable_now = function() {
                return u.now()
            }
        } else {
            var f = Date
              , h = f.now();
            e.unstable_now = function() {
                return f.now() - h
            }
        }
        var m = []
          , p = []
          , g = 1
          , x = null
          , S = 3
          , w = !1
          , E = !1
          , A = !1
          , M = !1
          , j = typeof setTimeout == "function" ? setTimeout : null
          , O = typeof clearTimeout == "function" ? clearTimeout : null
          , V = typeof setImmediate < "u" ? setImmediate : null;
        function G(z) {
            for (var q = a(p); q !== null; ) {
                if (q.callback === null)
                    r(p);
                else if (q.startTime <= z)
                    r(p),
                    q.sortIndex = q.expirationTime,
                    i(m, q);
                else
                    break;
                q = a(p)
            }
        }
        function H(z) {
            if (A = !1,
            G(z),
            !E)
                if (a(m) !== null)
                    E = !0,
                    J || (J = !0,
                    at());
                else {
                    var q = a(p);
                    q !== null && mt(H, q.startTime - z)
                }
        }
        var J = !1
          , Z = -1
          , Y = 5
          , ot = -1;
        function ht() {
            return M ? !0 : !(e.unstable_now() - ot < Y)
        }
        function Tt() {
            if (M = !1,
            J) {
                var z = e.unstable_now();
                ot = z;
                var q = !0;
                try {
                    t: {
                        E = !1,
                        A && (A = !1,
                        O(Z),
                        Z = -1),
                        w = !0;
                        var k = S;
                        try {
                            e: {
                                for (G(z),
                                x = a(m); x !== null && !(x.expirationTime > z && ht()); ) {
                                    var rt = x.callback;
                                    if (typeof rt == "function") {
                                        x.callback = null,
                                        S = x.priorityLevel;
                                        var xt = rt(x.expirationTime <= z);
                                        if (z = e.unstable_now(),
                                        typeof xt == "function") {
                                            x.callback = xt,
                                            G(z),
                                            q = !0;
                                            break e
                                        }
                                        x === a(m) && r(m),
                                        G(z)
                                    } else
                                        r(m);
                                    x = a(m)
                                }
                                if (x !== null)
                                    q = !0;
                                else {
                                    var D = a(p);
                                    D !== null && mt(H, D.startTime - z),
                                    q = !1
                                }
                            }
                            break t
                        } finally {
                            x = null,
                            S = k,
                            w = !1
                        }
                        q = void 0
                    }
                } finally {
                    q ? at() : J = !1
                }
            }
        }
        var at;
        if (typeof V == "function")
            at = function() {
                V(Tt)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var ct = new MessageChannel
              , tt = ct.port2;
            ct.port1.onmessage = Tt,
            at = function() {
                tt.postMessage(null)
            }
        } else
            at = function() {
                j(Tt, 0)
            }
            ;
        function mt(z, q) {
            Z = j(function() {
                z(e.unstable_now())
            }, q)
        }
        e.unstable_IdlePriority = 5,
        e.unstable_ImmediatePriority = 1,
        e.unstable_LowPriority = 4,
        e.unstable_NormalPriority = 3,
        e.unstable_Profiling = null,
        e.unstable_UserBlockingPriority = 2,
        e.unstable_cancelCallback = function(z) {
            z.callback = null
        }
        ,
        e.unstable_forceFrameRate = function(z) {
            0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Y = 0 < z ? Math.floor(1e3 / z) : 5
        }
        ,
        e.unstable_getCurrentPriorityLevel = function() {
            return S
        }
        ,
        e.unstable_next = function(z) {
            switch (S) {
            case 1:
            case 2:
            case 3:
                var q = 3;
                break;
            default:
                q = S
            }
            var k = S;
            S = q;
            try {
                return z()
            } finally {
                S = k
            }
        }
        ,
        e.unstable_requestPaint = function() {
            M = !0
        }
        ,
        e.unstable_runWithPriority = function(z, q) {
            switch (z) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                z = 3
            }
            var k = S;
            S = z;
            try {
                return q()
            } finally {
                S = k
            }
        }
        ,
        e.unstable_scheduleCallback = function(z, q, k) {
            var rt = e.unstable_now();
            switch (typeof k == "object" && k !== null ? (k = k.delay,
            k = typeof k == "number" && 0 < k ? rt + k : rt) : k = rt,
            z) {
            case 1:
                var xt = -1;
                break;
            case 2:
                xt = 250;
                break;
            case 5:
                xt = 1073741823;
                break;
            case 4:
                xt = 1e4;
                break;
            default:
                xt = 5e3
            }
            return xt = k + xt,
            z = {
                id: g++,
                callback: q,
                priorityLevel: z,
                startTime: k,
                expirationTime: xt,
                sortIndex: -1
            },
            k > rt ? (z.sortIndex = k,
            i(p, z),
            a(m) === null && z === a(p) && (A ? (O(Z),
            Z = -1) : A = !0,
            mt(H, k - rt))) : (z.sortIndex = xt,
            i(m, z),
            E || w || (E = !0,
            J || (J = !0,
            at()))),
            z
        }
        ,
        e.unstable_shouldYield = ht,
        e.unstable_wrapCallback = function(z) {
            var q = S;
            return function() {
                var k = S;
                S = q;
                try {
                    return z.apply(this, arguments)
                } finally {
                    S = k
                }
            }
        }
    }
    )(Gf)),
    Gf
}
var iv;
function wA() {
    return iv || (iv = 1,
    Ff.exports = SA()),
    Ff.exports
}
var Yf = {
    exports: {}
}
  , Et = {};
var sv;
function TA() {
    if (sv)
        return Et;
    sv = 1;
    var e = Symbol.for("react.transitional.element")
      , i = Symbol.for("react.portal")
      , a = Symbol.for("react.fragment")
      , r = Symbol.for("react.strict_mode")
      , o = Symbol.for("react.profiler")
      , u = Symbol.for("react.consumer")
      , f = Symbol.for("react.context")
      , h = Symbol.for("react.forward_ref")
      , m = Symbol.for("react.suspense")
      , p = Symbol.for("react.memo")
      , g = Symbol.for("react.lazy")
      , x = Symbol.for("react.activity")
      , S = Symbol.iterator;
    function w(D) {
        return D === null || typeof D != "object" ? null : (D = S && D[S] || D["@@iterator"],
        typeof D == "function" ? D : null)
    }
    var E = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , A = Object.assign
      , M = {};
    function j(D, K, $) {
        this.props = D,
        this.context = K,
        this.refs = M,
        this.updater = $ || E
    }
    j.prototype.isReactComponent = {},
    j.prototype.setState = function(D, K) {
        if (typeof D != "object" && typeof D != "function" && D != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, D, K, "setState")
    }
    ,
    j.prototype.forceUpdate = function(D) {
        this.updater.enqueueForceUpdate(this, D, "forceUpdate")
    }
    ;
    function O() {}
    O.prototype = j.prototype;
    function V(D, K, $) {
        this.props = D,
        this.context = K,
        this.refs = M,
        this.updater = $ || E
    }
    var G = V.prototype = new O;
    G.constructor = V,
    A(G, j.prototype),
    G.isPureReactComponent = !0;
    var H = Array.isArray;
    function J() {}
    var Z = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , Y = Object.prototype.hasOwnProperty;
    function ot(D, K, $) {
        var nt = $.ref;
        return {
            $$typeof: e,
            type: D,
            key: K,
            ref: nt !== void 0 ? nt : null,
            props: $
        }
    }
    function ht(D, K) {
        return ot(D.type, K, D.props)
    }
    function Tt(D) {
        return typeof D == "object" && D !== null && D.$$typeof === e
    }
    function at(D) {
        var K = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + D.replace(/[=:]/g, function($) {
            return K[$]
        })
    }
    var ct = /\/+/g;
    function tt(D, K) {
        return typeof D == "object" && D !== null && D.key != null ? at("" + D.key) : K.toString(36)
    }
    function mt(D) {
        switch (D.status) {
        case "fulfilled":
            return D.value;
        case "rejected":
            throw D.reason;
        default:
            switch (typeof D.status == "string" ? D.then(J, J) : (D.status = "pending",
            D.then(function(K) {
                D.status === "pending" && (D.status = "fulfilled",
                D.value = K)
            }, function(K) {
                D.status === "pending" && (D.status = "rejected",
                D.reason = K)
            })),
            D.status) {
            case "fulfilled":
                return D.value;
            case "rejected":
                throw D.reason
            }
        }
        throw D
    }
    function z(D, K, $, nt, St) {
        var At = typeof D;
        (At === "undefined" || At === "boolean") && (D = null);
        var gt = !1;
        if (D === null)
            gt = !0;
        else
            switch (At) {
            case "bigint":
            case "string":
            case "number":
                gt = !0;
                break;
            case "object":
                switch (D.$$typeof) {
                case e:
                case i:
                    gt = !0;
                    break;
                case g:
                    return gt = D._init,
                    z(gt(D._payload), K, $, nt, St)
                }
            }
        if (gt)
            return St = St(D),
            gt = nt === "" ? "." + tt(D, 0) : nt,
            H(St) ? ($ = "",
            gt != null && ($ = gt.replace(ct, "$&/") + "/"),
            z(St, K, $, "", function(je) {
                return je
            })) : St != null && (Tt(St) && (St = ht(St, $ + (St.key == null || D && D.key === St.key ? "" : ("" + St.key).replace(ct, "$&/") + "/") + gt)),
            K.push(St)),
            1;
        gt = 0;
        var Qt = nt === "" ? "." : nt + ":";
        if (H(D))
            for (var Ut = 0; Ut < D.length; Ut++)
                nt = D[Ut],
                At = Qt + tt(nt, Ut),
                gt += z(nt, K, $, At, St);
        else if (Ut = w(D),
        typeof Ut == "function")
            for (D = Ut.call(D),
            Ut = 0; !(nt = D.next()).done; )
                nt = nt.value,
                At = Qt + tt(nt, Ut++),
                gt += z(nt, K, $, At, St);
        else if (At === "object") {
            if (typeof D.then == "function")
                return z(mt(D), K, $, nt, St);
            throw K = String(D),
            Error("Objects are not valid as a React child (found: " + (K === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : K) + "). If you meant to render a collection of children, use an array instead.")
        }
        return gt
    }
    function q(D, K, $) {
        if (D == null)
            return D;
        var nt = []
          , St = 0;
        return z(D, nt, "", "", function(At) {
            return K.call($, At, St++)
        }),
        nt
    }
    function k(D) {
        if (D._status === -1) {
            var K = D._result;
            K = K(),
            K.then(function($) {
                (D._status === 0 || D._status === -1) && (D._status = 1,
                D._result = $)
            }, function($) {
                (D._status === 0 || D._status === -1) && (D._status = 2,
                D._result = $)
            }),
            D._status === -1 && (D._status = 0,
            D._result = K)
        }
        if (D._status === 1)
            return D._result.default;
        throw D._result
    }
    var rt = typeof reportError == "function" ? reportError : function(D) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var K = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof D == "object" && D !== null && typeof D.message == "string" ? String(D.message) : String(D),
                error: D
            });
            if (!window.dispatchEvent(K))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", D);
            return
        }
        console.error(D)
    }
      , xt = {
        map: q,
        forEach: function(D, K, $) {
            q(D, function() {
                K.apply(this, arguments)
            }, $)
        },
        count: function(D) {
            var K = 0;
            return q(D, function() {
                K++
            }),
            K
        },
        toArray: function(D) {
            return q(D, function(K) {
                return K
            }) || []
        },
        only: function(D) {
            if (!Tt(D))
                throw Error("React.Children.only expected to receive a single React element child.");
            return D
        }
    };
    return Et.Activity = x,
    Et.Children = xt,
    Et.Component = j,
    Et.Fragment = a,
    Et.Profiler = o,
    Et.PureComponent = V,
    Et.StrictMode = r,
    Et.Suspense = m,
    Et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Z,
    Et.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(D) {
            return Z.H.useMemoCache(D)
        }
    },
    Et.cache = function(D) {
        return function() {
            return D.apply(null, arguments)
        }
    }
    ,
    Et.cacheSignal = function() {
        return null
    }
    ,
    Et.cloneElement = function(D, K, $) {
        if (D == null)
            throw Error("The argument must be a React element, but you passed " + D + ".");
        var nt = A({}, D.props)
          , St = D.key;
        if (K != null)
            for (At in K.key !== void 0 && (St = "" + K.key),
            K)
                !Y.call(K, At) || At === "key" || At === "__self" || At === "__source" || At === "ref" && K.ref === void 0 || (nt[At] = K[At]);
        var At = arguments.length - 2;
        if (At === 1)
            nt.children = $;
        else if (1 < At) {
            for (var gt = Array(At), Qt = 0; Qt < At; Qt++)
                gt[Qt] = arguments[Qt + 2];
            nt.children = gt
        }
        return ot(D.type, St, nt)
    }
    ,
    Et.createContext = function(D) {
        return D = {
            $$typeof: f,
            _currentValue: D,
            _currentValue2: D,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        D.Provider = D,
        D.Consumer = {
            $$typeof: u,
            _context: D
        },
        D
    }
    ,
    Et.createElement = function(D, K, $) {
        var nt, St = {}, At = null;
        if (K != null)
            for (nt in K.key !== void 0 && (At = "" + K.key),
            K)
                Y.call(K, nt) && nt !== "key" && nt !== "__self" && nt !== "__source" && (St[nt] = K[nt]);
        var gt = arguments.length - 2;
        if (gt === 1)
            St.children = $;
        else if (1 < gt) {
            for (var Qt = Array(gt), Ut = 0; Ut < gt; Ut++)
                Qt[Ut] = arguments[Ut + 2];
            St.children = Qt
        }
        if (D && D.defaultProps)
            for (nt in gt = D.defaultProps,
            gt)
                St[nt] === void 0 && (St[nt] = gt[nt]);
        return ot(D, At, St)
    }
    ,
    Et.createRef = function() {
        return {
            current: null
        }
    }
    ,
    Et.forwardRef = function(D) {
        return {
            $$typeof: h,
            render: D
        }
    }
    ,
    Et.isValidElement = Tt,
    Et.lazy = function(D) {
        return {
            $$typeof: g,
            _payload: {
                _status: -1,
                _result: D
            },
            _init: k
        }
    }
    ,
    Et.memo = function(D, K) {
        return {
            $$typeof: p,
            type: D,
            compare: K === void 0 ? null : K
        }
    }
    ,
    Et.startTransition = function(D) {
        var K = Z.T
          , $ = {};
        Z.T = $;
        try {
            var nt = D()
              , St = Z.S;
            St !== null && St($, nt),
            typeof nt == "object" && nt !== null && typeof nt.then == "function" && nt.then(J, rt)
        } catch (At) {
            rt(At)
        } finally {
            K !== null && $.types !== null && (K.types = $.types),
            Z.T = K
        }
    }
    ,
    Et.unstable_useCacheRefresh = function() {
        return Z.H.useCacheRefresh()
    }
    ,
    Et.use = function(D) {
        return Z.H.use(D)
    }
    ,
    Et.useActionState = function(D, K, $) {
        return Z.H.useActionState(D, K, $)
    }
    ,
    Et.useCallback = function(D, K) {
        return Z.H.useCallback(D, K)
    }
    ,
    Et.useContext = function(D) {
        return Z.H.useContext(D)
    }
    ,
    Et.useDebugValue = function() {}
    ,
    Et.useDeferredValue = function(D, K) {
        return Z.H.useDeferredValue(D, K)
    }
    ,
    Et.useEffect = function(D, K) {
        return Z.H.useEffect(D, K)
    }
    ,
    Et.useEffectEvent = function(D) {
        return Z.H.useEffectEvent(D)
    }
    ,
    Et.useId = function() {
        return Z.H.useId()
    }
    ,
    Et.useImperativeHandle = function(D, K, $) {
        return Z.H.useImperativeHandle(D, K, $)
    }
    ,
    Et.useInsertionEffect = function(D, K) {
        return Z.H.useInsertionEffect(D, K)
    }
    ,
    Et.useLayoutEffect = function(D, K) {
        return Z.H.useLayoutEffect(D, K)
    }
    ,
    Et.useMemo = function(D, K) {
        return Z.H.useMemo(D, K)
    }
    ,
    Et.useOptimistic = function(D, K) {
        return Z.H.useOptimistic(D, K)
    }
    ,
    Et.useReducer = function(D, K, $) {
        return Z.H.useReducer(D, K, $)
    }
    ,
    Et.useRef = function(D) {
        return Z.H.useRef(D)
    }
    ,
    Et.useState = function(D) {
        return Z.H.useState(D)
    }
    ,
    Et.useSyncExternalStore = function(D, K, $) {
        return Z.H.useSyncExternalStore(D, K, $)
    }
    ,
    Et.useTransition = function() {
        return Z.H.useTransition()
    }
    ,
    Et.version = "19.2.3",
    Et
}
var av;
function lc() {
    return av || (av = 1,
    Yf.exports = TA()),
    Yf.exports
}
var Xf = {
    exports: {}
}
  , Oe = {};
var rv;
function AA() {
    if (rv)
        return Oe;
    rv = 1;
    var e = lc();
    function i(m) {
        var p = "https://react.dev/errors/" + m;
        if (1 < arguments.length) {
            p += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var g = 2; g < arguments.length; g++)
                p += "&args[]=" + encodeURIComponent(arguments[g])
        }
        return "Minified React error #" + m + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function a() {}
    var r = {
        d: {
            f: a,
            r: function() {
                throw Error(i(522))
            },
            D: a,
            C: a,
            L: a,
            m: a,
            X: a,
            S: a,
            M: a
        },
        p: 0,
        findDOMNode: null
    }
      , o = Symbol.for("react.portal");
    function u(m, p, g) {
        var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: o,
            key: x == null ? null : "" + x,
            children: m,
            containerInfo: p,
            implementation: g
        }
    }
    var f = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function h(m, p) {
        if (m === "font")
            return "";
        if (typeof p == "string")
            return p === "use-credentials" ? p : ""
    }
    return Oe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r,
    Oe.createPortal = function(m, p) {
        var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
            throw Error(i(299));
        return u(m, p, null, g)
    }
    ,
    Oe.flushSync = function(m) {
        var p = f.T
          , g = r.p;
        try {
            if (f.T = null,
            r.p = 2,
            m)
                return m()
        } finally {
            f.T = p,
            r.p = g,
            r.d.f()
        }
    }
    ,
    Oe.preconnect = function(m, p) {
        typeof m == "string" && (p ? (p = p.crossOrigin,
        p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null,
        r.d.C(m, p))
    }
    ,
    Oe.prefetchDNS = function(m) {
        typeof m == "string" && r.d.D(m)
    }
    ,
    Oe.preinit = function(m, p) {
        if (typeof m == "string" && p && typeof p.as == "string") {
            var g = p.as
              , x = h(g, p.crossOrigin)
              , S = typeof p.integrity == "string" ? p.integrity : void 0
              , w = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
            g === "style" ? r.d.S(m, typeof p.precedence == "string" ? p.precedence : void 0, {
                crossOrigin: x,
                integrity: S,
                fetchPriority: w
            }) : g === "script" && r.d.X(m, {
                crossOrigin: x,
                integrity: S,
                fetchPriority: w,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0
            })
        }
    }
    ,
    Oe.preinitModule = function(m, p) {
        if (typeof m == "string")
            if (typeof p == "object" && p !== null) {
                if (p.as == null || p.as === "script") {
                    var g = h(p.as, p.crossOrigin);
                    r.d.M(m, {
                        crossOrigin: g,
                        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                        nonce: typeof p.nonce == "string" ? p.nonce : void 0
                    })
                }
            } else
                p == null && r.d.M(m)
    }
    ,
    Oe.preload = function(m, p) {
        if (typeof m == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
            var g = p.as
              , x = h(g, p.crossOrigin);
            r.d.L(m, g, {
                crossOrigin: x,
                integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                nonce: typeof p.nonce == "string" ? p.nonce : void 0,
                type: typeof p.type == "string" ? p.type : void 0,
                fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
                referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
                imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
                imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
                media: typeof p.media == "string" ? p.media : void 0
            })
        }
    }
    ,
    Oe.preloadModule = function(m, p) {
        if (typeof m == "string")
            if (p) {
                var g = h(p.as, p.crossOrigin);
                r.d.m(m, {
                    as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
                    crossOrigin: g,
                    integrity: typeof p.integrity == "string" ? p.integrity : void 0
                })
            } else
                r.d.m(m)
    }
    ,
    Oe.requestFormReset = function(m) {
        r.d.r(m)
    }
    ,
    Oe.unstable_batchedUpdates = function(m, p) {
        return m(p)
    }
    ,
    Oe.useFormState = function(m, p, g) {
        return f.H.useFormState(m, p, g)
    }
    ,
    Oe.useFormStatus = function() {
        return f.H.useHostTransitionStatus()
    }
    ,
    Oe.version = "19.2.3",
    Oe
}
var lv;
function Ax() {
    if (lv)
        return Xf.exports;
    lv = 1;
    function e() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (i) {
                console.error(i)
            }
    }
    return e(),
    Xf.exports = AA(),
    Xf.exports
}
var ov;
function EA() {
    if (ov)
        return Nr;
    ov = 1;
    var e = wA()
      , i = lc()
      , a = Ax();
    function r(t) {
        var n = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            n += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var s = 2; s < arguments.length; s++)
                n += "&args[]=" + encodeURIComponent(arguments[s])
        }
        return "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function o(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }
    function u(t) {
        var n = t
          , s = t;
        if (t.alternate)
            for (; n.return; )
                n = n.return;
        else {
            t = n;
            do
                n = t,
                (n.flags & 4098) !== 0 && (s = n.return),
                t = n.return;
            while (t)
        }
        return n.tag === 3 ? s : null
    }
    function f(t) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n === null && (t = t.alternate,
            t !== null && (n = t.memoizedState)),
            n !== null)
                return n.dehydrated
        }
        return null
    }
    function h(t) {
        if (t.tag === 31) {
            var n = t.memoizedState;
            if (n === null && (t = t.alternate,
            t !== null && (n = t.memoizedState)),
            n !== null)
                return n.dehydrated
        }
        return null
    }
    function m(t) {
        if (u(t) !== t)
            throw Error(r(188))
    }
    function p(t) {
        var n = t.alternate;
        if (!n) {
            if (n = u(t),
            n === null)
                throw Error(r(188));
            return n !== t ? null : t
        }
        for (var s = t, l = n; ; ) {
            var c = s.return;
            if (c === null)
                break;
            var d = c.alternate;
            if (d === null) {
                if (l = c.return,
                l !== null) {
                    s = l;
                    continue
                }
                break
            }
            if (c.child === d.child) {
                for (d = c.child; d; ) {
                    if (d === s)
                        return m(c),
                        t;
                    if (d === l)
                        return m(c),
                        n;
                    d = d.sibling
                }
                throw Error(r(188))
            }
            if (s.return !== l.return)
                s = c,
                l = d;
            else {
                for (var y = !1, b = c.child; b; ) {
                    if (b === s) {
                        y = !0,
                        s = c,
                        l = d;
                        break
                    }
                    if (b === l) {
                        y = !0,
                        l = c,
                        s = d;
                        break
                    }
                    b = b.sibling
                }
                if (!y) {
                    for (b = d.child; b; ) {
                        if (b === s) {
                            y = !0,
                            s = d,
                            l = c;
                            break
                        }
                        if (b === l) {
                            y = !0,
                            l = d,
                            s = c;
                            break
                        }
                        b = b.sibling
                    }
                    if (!y)
                        throw Error(r(189))
                }
            }
            if (s.alternate !== l)
                throw Error(r(190))
        }
        if (s.tag !== 3)
            throw Error(r(188));
        return s.stateNode.current === s ? t : n
    }
    function g(t) {
        var n = t.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6)
            return t;
        for (t = t.child; t !== null; ) {
            if (n = g(t),
            n !== null)
                return n;
            t = t.sibling
        }
        return null
    }
    var x = Object.assign
      , S = Symbol.for("react.element")
      , w = Symbol.for("react.transitional.element")
      , E = Symbol.for("react.portal")
      , A = Symbol.for("react.fragment")
      , M = Symbol.for("react.strict_mode")
      , j = Symbol.for("react.profiler")
      , O = Symbol.for("react.consumer")
      , V = Symbol.for("react.context")
      , G = Symbol.for("react.forward_ref")
      , H = Symbol.for("react.suspense")
      , J = Symbol.for("react.suspense_list")
      , Z = Symbol.for("react.memo")
      , Y = Symbol.for("react.lazy")
      , ot = Symbol.for("react.activity")
      , ht = Symbol.for("react.memo_cache_sentinel")
      , Tt = Symbol.iterator;
    function at(t) {
        return t === null || typeof t != "object" ? null : (t = Tt && t[Tt] || t["@@iterator"],
        typeof t == "function" ? t : null)
    }
    var ct = Symbol.for("react.client.reference");
    function tt(t) {
        if (t == null)
            return null;
        if (typeof t == "function")
            return t.$$typeof === ct ? null : t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
        switch (t) {
        case A:
            return "Fragment";
        case j:
            return "Profiler";
        case M:
            return "StrictMode";
        case H:
            return "Suspense";
        case J:
            return "SuspenseList";
        case ot:
            return "Activity"
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
            case E:
                return "Portal";
            case V:
                return t.displayName || "Context";
            case O:
                return (t._context.displayName || "Context") + ".Consumer";
            case G:
                var n = t.render;
                return t = t.displayName,
                t || (t = n.displayName || n.name || "",
                t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
                t;
            case Z:
                return n = t.displayName || null,
                n !== null ? n : tt(t.type) || "Memo";
            case Y:
                n = t._payload,
                t = t._init;
                try {
                    return tt(t(n))
                } catch {}
            }
        return null
    }
    var mt = Array.isArray
      , z = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , q = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , k = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , rt = []
      , xt = -1;
    function D(t) {
        return {
            current: t
        }
    }
    function K(t) {
        0 > xt || (t.current = rt[xt],
        rt[xt] = null,
        xt--)
    }
    function $(t, n) {
        xt++,
        rt[xt] = t.current,
        t.current = n
    }
    var nt = D(null)
      , St = D(null)
      , At = D(null)
      , gt = D(null);
    function Qt(t, n) {
        switch ($(At, n),
        $(St, t),
        $(nt, null),
        n.nodeType) {
        case 9:
        case 11:
            t = (t = n.documentElement) && (t = t.namespaceURI) ? Tg(t) : 0;
            break;
        default:
            if (t = n.tagName,
            n = n.namespaceURI)
                n = Tg(n),
                t = Ag(n, t);
            else
                switch (t) {
                case "svg":
                    t = 1;
                    break;
                case "math":
                    t = 2;
                    break;
                default:
                    t = 0
                }
        }
        K(nt),
        $(nt, t)
    }
    function Ut() {
        K(nt),
        K(St),
        K(At)
    }
    function je(t) {
        t.memoizedState !== null && $(gt, t);
        var n = nt.current
          , s = Ag(n, t.type);
        n !== s && ($(St, t),
        $(nt, s))
    }
    function Pe(t) {
        St.current === t && (K(nt),
        K(St)),
        gt.current === t && (K(gt),
        Tr._currentValue = k)
    }
    var ln, Vn;
    function Qn(t) {
        if (ln === void 0)
            try {
                throw Error()
            } catch (s) {
                var n = s.stack.trim().match(/\n( *(at )?)/);
                ln = n && n[1] || "",
                Vn = -1 < s.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < s.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + ln + t + Vn
    }
    var Rs = !1;
    function js(t, n) {
        if (!t || Rs)
            return "";
        Rs = !0;
        var s = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var l = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (n) {
                            var W = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(W.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(W, [])
                                } catch (F) {
                                    var P = F
                                }
                                Reflect.construct(t, [], W)
                            } else {
                                try {
                                    W.call()
                                } catch (F) {
                                    P = F
                                }
                                t.call(W.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (F) {
                                P = F
                            }
                            (W = t()) && typeof W.catch == "function" && W.catch(function() {})
                        }
                    } catch (F) {
                        if (F && P && typeof F.stack == "string")
                            return [F.stack, P.stack]
                    }
                    return [null, null]
                }
            };
            l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var c = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
            c && c.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var d = l.DetermineComponentFrameRoot()
              , y = d[0]
              , b = d[1];
            if (y && b) {
                var C = y.split(`
`)
                  , U = b.split(`
`);
                for (c = l = 0; l < C.length && !C[l].includes("DetermineComponentFrameRoot"); )
                    l++;
                for (; c < U.length && !U[c].includes("DetermineComponentFrameRoot"); )
                    c++;
                if (l === C.length || c === U.length)
                    for (l = C.length - 1,
                    c = U.length - 1; 1 <= l && 0 <= c && C[l] !== U[c]; )
                        c--;
                for (; 1 <= l && 0 <= c; l--,
                c--)
                    if (C[l] !== U[c]) {
                        if (l !== 1 || c !== 1)
                            do
                                if (l--,
                                c--,
                                0 > c || C[l] !== U[c]) {
                                    var Q = `
` + C[l].replace(" at new ", " at ");
                                    return t.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", t.displayName)),
                                    Q
                                }
                            while (1 <= l && 0 <= c);
                        break
                    }
            }
        } finally {
            Rs = !1,
            Error.prepareStackTrace = s
        }
        return (s = t ? t.displayName || t.name : "") ? Qn(s) : ""
    }
    function Cc(t, n) {
        switch (t.tag) {
        case 26:
        case 27:
        case 5:
            return Qn(t.type);
        case 16:
            return Qn("Lazy");
        case 13:
            return t.child !== n && n !== null ? Qn("Suspense Fallback") : Qn("Suspense");
        case 19:
            return Qn("SuspenseList");
        case 0:
        case 15:
            return js(t.type, !1);
        case 11:
            return js(t.type.render, !1);
        case 1:
            return js(t.type, !0);
        case 31:
            return Qn("Activity");
        default:
            return ""
        }
    }
    function ll(t) {
        try {
            var n = ""
              , s = null;
            do
                n += Cc(t, s),
                s = t,
                t = t.return;
            while (t);
            return n
        } catch (l) {
            return `
Error generating stack: ` + l.message + `
` + l.stack
        }
    }
    var ol = Object.prototype.hasOwnProperty
      , Os = e.unstable_scheduleCallback
      , N = e.unstable_cancelCallback
      , B = e.unstable_shouldYield
      , X = e.unstable_requestPaint
      , it = e.unstable_now
      , st = e.unstable_getCurrentPriorityLevel
      , et = e.unstable_ImmediatePriority
      , vt = e.unstable_UserBlockingPriority
      , Vt = e.unstable_NormalPriority
      , kt = e.unstable_LowPriority
      , Se = e.unstable_IdlePriority
      , Kn = e.log
      , zn = e.unstable_setDisableYieldValue
      , ts = null
      , Ae = null;
    function on(t) {
        if (typeof Kn == "function" && zn(t),
        Ae && typeof Ae.setStrictMode == "function")
            try {
                Ae.setStrictMode(ts, t)
            } catch {}
    }
    var Ve = Math.clz32 ? Math.clz32 : ul
      , cl = Math.log
      , Mc = Math.LN2;
    function ul(t) {
        return t >>>= 0,
        t === 0 ? 32 : 31 - (cl(t) / Mc | 0) | 0
    }
    var fl = 256
      , dl = 262144
      , hl = 4194304;
    function es(t) {
        var n = t & 42;
        if (n !== 0)
            return n;
        switch (t & -t) {
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
            return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return t & 62914560;
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
            return t
        }
    }
    function ml(t, n, s) {
        var l = t.pendingLanes;
        if (l === 0)
            return 0;
        var c = 0
          , d = t.suspendedLanes
          , y = t.pingedLanes;
        t = t.warmLanes;
        var b = l & 134217727;
        return b !== 0 ? (l = b & ~d,
        l !== 0 ? c = es(l) : (y &= b,
        y !== 0 ? c = es(y) : s || (s = b & ~t,
        s !== 0 && (c = es(s))))) : (b = l & ~d,
        b !== 0 ? c = es(b) : y !== 0 ? c = es(y) : s || (s = l & ~t,
        s !== 0 && (c = es(s)))),
        c === 0 ? 0 : n !== 0 && n !== c && (n & d) === 0 && (d = c & -c,
        s = n & -n,
        d >= s || d === 32 && (s & 4194048) !== 0) ? n : c
    }
    function La(t, n) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0
    }
    function aw(t, n) {
        switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return n + 250;
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
            return n + 5e3;
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
            return -1
        }
    }
    function sm() {
        var t = hl;
        return hl <<= 1,
        (hl & 62914560) === 0 && (hl = 4194304),
        t
    }
    function Nc(t) {
        for (var n = [], s = 0; 31 > s; s++)
            n.push(t);
        return n
    }
    function Ua(t, n) {
        t.pendingLanes |= n,
        n !== 268435456 && (t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0)
    }
    function rw(t, n, s, l, c, d) {
        var y = t.pendingLanes;
        t.pendingLanes = s,
        t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0,
        t.expiredLanes &= s,
        t.entangledLanes &= s,
        t.errorRecoveryDisabledLanes &= s,
        t.shellSuspendCounter = 0;
        var b = t.entanglements
          , C = t.expirationTimes
          , U = t.hiddenUpdates;
        for (s = y & ~s; 0 < s; ) {
            var Q = 31 - Ve(s)
              , W = 1 << Q;
            b[Q] = 0,
            C[Q] = -1;
            var P = U[Q];
            if (P !== null)
                for (U[Q] = null,
                Q = 0; Q < P.length; Q++) {
                    var F = P[Q];
                    F !== null && (F.lane &= -536870913)
                }
            s &= ~W
        }
        l !== 0 && am(t, l, 0),
        d !== 0 && c === 0 && t.tag !== 0 && (t.suspendedLanes |= d & ~(y & ~n))
    }
    function am(t, n, s) {
        t.pendingLanes |= n,
        t.suspendedLanes &= ~n;
        var l = 31 - Ve(n);
        t.entangledLanes |= n,
        t.entanglements[l] = t.entanglements[l] | 1073741824 | s & 261930
    }
    function rm(t, n) {
        var s = t.entangledLanes |= n;
        for (t = t.entanglements; s; ) {
            var l = 31 - Ve(s)
              , c = 1 << l;
            c & n | t[l] & n && (t[l] |= n),
            s &= ~c
        }
    }
    function lm(t, n) {
        var s = n & -n;
        return s = (s & 42) !== 0 ? 1 : Dc(s),
        (s & (t.suspendedLanes | n)) !== 0 ? 0 : s
    }
    function Dc(t) {
        switch (t) {
        case 2:
            t = 1;
            break;
        case 8:
            t = 4;
            break;
        case 32:
            t = 16;
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
            t = 128;
            break;
        case 268435456:
            t = 134217728;
            break;
        default:
            t = 0
        }
        return t
    }
    function Rc(t) {
        return t &= -t,
        2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function om() {
        var t = q.p;
        return t !== 0 ? t : (t = window.event,
        t === void 0 ? 32 : Qg(t.type))
    }
    function cm(t, n) {
        var s = q.p;
        try {
            return q.p = t,
            n()
        } finally {
            q.p = s
        }
    }
    var xi = Math.random().toString(36).slice(2)
      , Ee = "__reactFiber$" + xi
      , He = "__reactProps$" + xi
      , _s = "__reactContainer$" + xi
      , jc = "__reactEvents$" + xi
      , lw = "__reactListeners$" + xi
      , ow = "__reactHandles$" + xi
      , um = "__reactResources$" + xi
      , ka = "__reactMarker$" + xi;
    function Oc(t) {
        delete t[Ee],
        delete t[He],
        delete t[jc],
        delete t[lw],
        delete t[ow]
    }
    function Vs(t) {
        var n = t[Ee];
        if (n)
            return n;
        for (var s = t.parentNode; s; ) {
            if (n = s[_s] || s[Ee]) {
                if (s = n.alternate,
                n.child !== null || s !== null && s.child !== null)
                    for (t = jg(t); t !== null; ) {
                        if (s = t[Ee])
                            return s;
                        t = jg(t)
                    }
                return n
            }
            t = s,
            s = t.parentNode
        }
        return null
    }
    function zs(t) {
        if (t = t[Ee] || t[_s]) {
            var n = t.tag;
            if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
                return t
        }
        return null
    }
    function Ba(t) {
        var n = t.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6)
            return t.stateNode;
        throw Error(r(33))
    }
    function Ls(t) {
        var n = t[um];
        return n || (n = t[um] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        n
    }
    function we(t) {
        t[ka] = !0
    }
    var fm = new Set
      , dm = {};
    function ns(t, n) {
        Us(t, n),
        Us(t + "Capture", n)
    }
    function Us(t, n) {
        for (dm[t] = n,
        t = 0; t < n.length; t++)
            fm.add(n[t])
    }
    var cw = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , hm = {}
      , mm = {};
    function uw(t) {
        return ol.call(mm, t) ? !0 : ol.call(hm, t) ? !1 : cw.test(t) ? mm[t] = !0 : (hm[t] = !0,
        !1)
    }
    function pl(t, n, s) {
        if (uw(n))
            if (s === null)
                t.removeAttribute(n);
            else {
                switch (typeof s) {
                case "undefined":
                case "function":
                case "symbol":
                    t.removeAttribute(n);
                    return;
                case "boolean":
                    var l = n.toLowerCase().slice(0, 5);
                    if (l !== "data-" && l !== "aria-") {
                        t.removeAttribute(n);
                        return
                    }
                }
                t.setAttribute(n, "" + s)
            }
    }
    function yl(t, n, s) {
        if (s === null)
            t.removeAttribute(n);
        else {
            switch (typeof s) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(n);
                return
            }
            t.setAttribute(n, "" + s)
        }
    }
    function Zn(t, n, s, l) {
        if (l === null)
            t.removeAttribute(s);
        else {
            switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(s);
                return
            }
            t.setAttributeNS(n, s, "" + l)
        }
    }
    function cn(t) {
        switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
        }
    }
    function pm(t) {
        var n = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (n === "checkbox" || n === "radio")
    }
    function fw(t, n, s) {
        var l = Object.getOwnPropertyDescriptor(t.constructor.prototype, n);
        if (!t.hasOwnProperty(n) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
            var c = l.get
              , d = l.set;
            return Object.defineProperty(t, n, {
                configurable: !0,
                get: function() {
                    return c.call(this)
                },
                set: function(y) {
                    s = "" + y,
                    d.call(this, y)
                }
            }),
            Object.defineProperty(t, n, {
                enumerable: l.enumerable
            }),
            {
                getValue: function() {
                    return s
                },
                setValue: function(y) {
                    s = "" + y
                },
                stopTracking: function() {
                    t._valueTracker = null,
                    delete t[n]
                }
            }
        }
    }
    function _c(t) {
        if (!t._valueTracker) {
            var n = pm(t) ? "checked" : "value";
            t._valueTracker = fw(t, n, "" + t[n])
        }
    }
    function ym(t) {
        if (!t)
            return !1;
        var n = t._valueTracker;
        if (!n)
            return !0;
        var s = n.getValue()
          , l = "";
        return t && (l = pm(t) ? t.checked ? "true" : "false" : t.value),
        t = l,
        t !== s ? (n.setValue(t),
        !0) : !1
    }
    function gl(t) {
        if (t = t || (typeof document < "u" ? document : void 0),
        typeof t > "u")
            return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var dw = /[\n"\\]/g;
    function un(t) {
        return t.replace(dw, function(n) {
            return "\\" + n.charCodeAt(0).toString(16) + " "
        })
    }
    function Vc(t, n, s, l, c, d, y, b) {
        t.name = "",
        y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? t.type = y : t.removeAttribute("type"),
        n != null ? y === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + cn(n)) : t.value !== "" + cn(n) && (t.value = "" + cn(n)) : y !== "submit" && y !== "reset" || t.removeAttribute("value"),
        n != null ? zc(t, y, cn(n)) : s != null ? zc(t, y, cn(s)) : l != null && t.removeAttribute("value"),
        c == null && d != null && (t.defaultChecked = !!d),
        c != null && (t.checked = c && typeof c != "function" && typeof c != "symbol"),
        b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? t.name = "" + cn(b) : t.removeAttribute("name")
    }
    function gm(t, n, s, l, c, d, y, b) {
        if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (t.type = d),
        n != null || s != null) {
            if (!(d !== "submit" && d !== "reset" || n != null)) {
                _c(t);
                return
            }
            s = s != null ? "" + cn(s) : "",
            n = n != null ? "" + cn(n) : s,
            b || n === t.value || (t.value = n),
            t.defaultValue = n
        }
        l = l ?? c,
        l = typeof l != "function" && typeof l != "symbol" && !!l,
        t.checked = b ? t.checked : !!l,
        t.defaultChecked = !!l,
        y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (t.name = y),
        _c(t)
    }
    function zc(t, n, s) {
        n === "number" && gl(t.ownerDocument) === t || t.defaultValue === "" + s || (t.defaultValue = "" + s)
    }
    function ks(t, n, s, l) {
        if (t = t.options,
        n) {
            n = {};
            for (var c = 0; c < s.length; c++)
                n["$" + s[c]] = !0;
            for (s = 0; s < t.length; s++)
                c = n.hasOwnProperty("$" + t[s].value),
                t[s].selected !== c && (t[s].selected = c),
                c && l && (t[s].defaultSelected = !0)
        } else {
            for (s = "" + cn(s),
            n = null,
            c = 0; c < t.length; c++) {
                if (t[c].value === s) {
                    t[c].selected = !0,
                    l && (t[c].defaultSelected = !0);
                    return
                }
                n !== null || t[c].disabled || (n = t[c])
            }
            n !== null && (n.selected = !0)
        }
    }
    function vm(t, n, s) {
        if (n != null && (n = "" + cn(n),
        n !== t.value && (t.value = n),
        s == null)) {
            t.defaultValue !== n && (t.defaultValue = n);
            return
        }
        t.defaultValue = s != null ? "" + cn(s) : ""
    }
    function xm(t, n, s, l) {
        if (n == null) {
            if (l != null) {
                if (s != null)
                    throw Error(r(92));
                if (mt(l)) {
                    if (1 < l.length)
                        throw Error(r(93));
                    l = l[0]
                }
                s = l
            }
            s == null && (s = ""),
            n = s
        }
        s = cn(n),
        t.defaultValue = s,
        l = t.textContent,
        l === s && l !== "" && l !== null && (t.value = l),
        _c(t)
    }
    function Bs(t, n) {
        if (n) {
            var s = t.firstChild;
            if (s && s === t.lastChild && s.nodeType === 3) {
                s.nodeValue = n;
                return
            }
        }
        t.textContent = n
    }
    var hw = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function bm(t, n, s) {
        var l = n.indexOf("--") === 0;
        s == null || typeof s == "boolean" || s === "" ? l ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "" : l ? t.setProperty(n, s) : typeof s != "number" || s === 0 || hw.has(n) ? n === "float" ? t.cssFloat = s : t[n] = ("" + s).trim() : t[n] = s + "px"
    }
    function Sm(t, n, s) {
        if (n != null && typeof n != "object")
            throw Error(r(62));
        if (t = t.style,
        s != null) {
            for (var l in s)
                !s.hasOwnProperty(l) || n != null && n.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
            for (var c in n)
                l = n[c],
                n.hasOwnProperty(c) && s[c] !== l && bm(t, c, l)
        } else
            for (var d in n)
                n.hasOwnProperty(d) && bm(t, d, n[d])
    }
    function Lc(t) {
        if (t.indexOf("-") === -1)
            return !1;
        switch (t) {
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
            return !0
        }
    }
    var mw = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , pw = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function vl(t) {
        return pw.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    function In() {}
    var Uc = null;
    function kc(t) {
        return t = t.target || t.srcElement || window,
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    }
    var Ps = null
      , Hs = null;
    function wm(t) {
        var n = zs(t);
        if (n && (t = n.stateNode)) {
            var s = t[He] || null;
            t: switch (t = n.stateNode,
            n.type) {
            case "input":
                if (Vc(t, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name),
                n = s.name,
                s.type === "radio" && n != null) {
                    for (s = t; s.parentNode; )
                        s = s.parentNode;
                    for (s = s.querySelectorAll('input[name="' + un("" + n) + '"][type="radio"]'),
                    n = 0; n < s.length; n++) {
                        var l = s[n];
                        if (l !== t && l.form === t.form) {
                            var c = l[He] || null;
                            if (!c)
                                throw Error(r(90));
                            Vc(l, c.value, c.defaultValue, c.defaultValue, c.checked, c.defaultChecked, c.type, c.name)
                        }
                    }
                    for (n = 0; n < s.length; n++)
                        l = s[n],
                        l.form === t.form && ym(l)
                }
                break t;
            case "textarea":
                vm(t, s.value, s.defaultValue);
                break t;
            case "select":
                n = s.value,
                n != null && ks(t, !!s.multiple, n, !1)
            }
        }
    }
    var Bc = !1;
    function Tm(t, n, s) {
        if (Bc)
            return t(n, s);
        Bc = !0;
        try {
            var l = t(n);
            return l
        } finally {
            if (Bc = !1,
            (Ps !== null || Hs !== null) && (ao(),
            Ps && (n = Ps,
            t = Hs,
            Hs = Ps = null,
            wm(n),
            t)))
                for (n = 0; n < t.length; n++)
                    wm(t[n])
        }
    }
    function Pa(t, n) {
        var s = t.stateNode;
        if (s === null)
            return null;
        var l = s[He] || null;
        if (l === null)
            return null;
        s = l[n];
        t: switch (n) {
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
            (l = !l.disabled) || (t = t.type,
            l = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
            t = !l;
            break t;
        default:
            t = !1
        }
        if (t)
            return null;
        if (s && typeof s != "function")
            throw Error(r(231, n, typeof s));
        return s
    }
    var Wn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , Pc = !1;
    if (Wn)
        try {
            var Ha = {};
            Object.defineProperty(Ha, "passive", {
                get: function() {
                    Pc = !0
                }
            }),
            window.addEventListener("test", Ha, Ha),
            window.removeEventListener("test", Ha, Ha)
        } catch {
            Pc = !1
        }
    var bi = null
      , Hc = null
      , xl = null;
    function Am() {
        if (xl)
            return xl;
        var t, n = Hc, s = n.length, l, c = "value"in bi ? bi.value : bi.textContent, d = c.length;
        for (t = 0; t < s && n[t] === c[t]; t++)
            ;
        var y = s - t;
        for (l = 1; l <= y && n[s - l] === c[d - l]; l++)
            ;
        return xl = c.slice(t, 1 < l ? 1 - l : void 0)
    }
    function bl(t) {
        var n = t.keyCode;
        return "charCode"in t ? (t = t.charCode,
        t === 0 && n === 13 && (t = 13)) : t = n,
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    }
    function Sl() {
        return !0
    }
    function Em() {
        return !1
    }
    function qe(t) {
        function n(s, l, c, d, y) {
            this._reactName = s,
            this._targetInst = c,
            this.type = l,
            this.nativeEvent = d,
            this.target = y,
            this.currentTarget = null;
            for (var b in t)
                t.hasOwnProperty(b) && (s = t[b],
                this[b] = s ? s(d) : d[b]);
            return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Sl : Em,
            this.isPropagationStopped = Em,
            this
        }
        return x(n.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var s = this.nativeEvent;
                s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1),
                this.isDefaultPrevented = Sl)
            },
            stopPropagation: function() {
                var s = this.nativeEvent;
                s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
                this.isPropagationStopped = Sl)
            },
            persist: function() {},
            isPersistent: Sl
        }),
        n
    }
    var is = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, wl = qe(is), qa = x({}, is, {
        view: 0,
        detail: 0
    }), yw = qe(qa), qc, Fc, Fa, Tl = x({}, qa, {
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
        getModifierState: Yc,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX"in t ? t.movementX : (t !== Fa && (Fa && t.type === "mousemove" ? (qc = t.screenX - Fa.screenX,
            Fc = t.screenY - Fa.screenY) : Fc = qc = 0,
            Fa = t),
            qc)
        },
        movementY: function(t) {
            return "movementY"in t ? t.movementY : Fc
        }
    }), Cm = qe(Tl), gw = x({}, Tl, {
        dataTransfer: 0
    }), vw = qe(gw), xw = x({}, qa, {
        relatedTarget: 0
    }), Gc = qe(xw), bw = x({}, is, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Sw = qe(bw), ww = x({}, is, {
        clipboardData: function(t) {
            return "clipboardData"in t ? t.clipboardData : window.clipboardData
        }
    }), Tw = qe(ww), Aw = x({}, is, {
        data: 0
    }), Mm = qe(Aw), Ew = {
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
        MozPrintableKey: "Unidentified"
    }, Cw = {
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
        224: "Meta"
    }, Mw = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Nw(t) {
        var n = this.nativeEvent;
        return n.getModifierState ? n.getModifierState(t) : (t = Mw[t]) ? !!n[t] : !1
    }
    function Yc() {
        return Nw
    }
    var Dw = x({}, qa, {
        key: function(t) {
            if (t.key) {
                var n = Ew[t.key] || t.key;
                if (n !== "Unidentified")
                    return n
            }
            return t.type === "keypress" ? (t = bl(t),
            t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Cw[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Yc,
        charCode: function(t) {
            return t.type === "keypress" ? bl(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? bl(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    })
      , Rw = qe(Dw)
      , jw = x({}, Tl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Nm = qe(jw)
      , Ow = x({}, qa, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Yc
    })
      , _w = qe(Ow)
      , Vw = x({}, is, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , zw = qe(Vw)
      , Lw = x({}, Tl, {
        deltaX: function(t) {
            return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Uw = qe(Lw)
      , kw = x({}, is, {
        newState: 0,
        oldState: 0
    })
      , Bw = qe(kw)
      , Pw = [9, 13, 27, 32]
      , Xc = Wn && "CompositionEvent"in window
      , Ga = null;
    Wn && "documentMode"in document && (Ga = document.documentMode);
    var Hw = Wn && "TextEvent"in window && !Ga
      , Dm = Wn && (!Xc || Ga && 8 < Ga && 11 >= Ga)
      , Rm = " "
      , jm = !1;
    function Om(t, n) {
        switch (t) {
        case "keyup":
            return Pw.indexOf(n.keyCode) !== -1;
        case "keydown":
            return n.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function _m(t) {
        return t = t.detail,
        typeof t == "object" && "data"in t ? t.data : null
    }
    var qs = !1;
    function qw(t, n) {
        switch (t) {
        case "compositionend":
            return _m(n);
        case "keypress":
            return n.which !== 32 ? null : (jm = !0,
            Rm);
        case "textInput":
            return t = n.data,
            t === Rm && jm ? null : t;
        default:
            return null
        }
    }
    function Fw(t, n) {
        if (qs)
            return t === "compositionend" || !Xc && Om(t, n) ? (t = Am(),
            xl = Hc = bi = null,
            qs = !1,
            t) : null;
        switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                if (n.char && 1 < n.char.length)
                    return n.char;
                if (n.which)
                    return String.fromCharCode(n.which)
            }
            return null;
        case "compositionend":
            return Dm && n.locale !== "ko" ? null : n.data;
        default:
            return null
        }
    }
    var Gw = {
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
        week: !0
    };
    function Vm(t) {
        var n = t && t.nodeName && t.nodeName.toLowerCase();
        return n === "input" ? !!Gw[t.type] : n === "textarea"
    }
    function zm(t, n, s, l) {
        Ps ? Hs ? Hs.push(l) : Hs = [l] : Ps = l,
        n = ho(n, "onChange"),
        0 < n.length && (s = new wl("onChange","change",null,s,l),
        t.push({
            event: s,
            listeners: n
        }))
    }
    var Ya = null
      , Xa = null;
    function Yw(t) {
        gg(t, 0)
    }
    function Al(t) {
        var n = Ba(t);
        if (ym(n))
            return t
    }
    function Lm(t, n) {
        if (t === "change")
            return n
    }
    var Um = !1;
    if (Wn) {
        var Qc;
        if (Wn) {
            var Kc = "oninput"in document;
            if (!Kc) {
                var km = document.createElement("div");
                km.setAttribute("oninput", "return;"),
                Kc = typeof km.oninput == "function"
            }
            Qc = Kc
        } else
            Qc = !1;
        Um = Qc && (!document.documentMode || 9 < document.documentMode)
    }
    function Bm() {
        Ya && (Ya.detachEvent("onpropertychange", Pm),
        Xa = Ya = null)
    }
    function Pm(t) {
        if (t.propertyName === "value" && Al(Xa)) {
            var n = [];
            zm(n, Xa, t, kc(t)),
            Tm(Yw, n)
        }
    }
    function Xw(t, n, s) {
        t === "focusin" ? (Bm(),
        Ya = n,
        Xa = s,
        Ya.attachEvent("onpropertychange", Pm)) : t === "focusout" && Bm()
    }
    function Qw(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown")
            return Al(Xa)
    }
    function Kw(t, n) {
        if (t === "click")
            return Al(n)
    }
    function Zw(t, n) {
        if (t === "input" || t === "change")
            return Al(n)
    }
    function Iw(t, n) {
        return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n
    }
    var Ie = typeof Object.is == "function" ? Object.is : Iw;
    function Qa(t, n) {
        if (Ie(t, n))
            return !0;
        if (typeof t != "object" || t === null || typeof n != "object" || n === null)
            return !1;
        var s = Object.keys(t)
          , l = Object.keys(n);
        if (s.length !== l.length)
            return !1;
        for (l = 0; l < s.length; l++) {
            var c = s[l];
            if (!ol.call(n, c) || !Ie(t[c], n[c]))
                return !1
        }
        return !0
    }
    function Hm(t) {
        for (; t && t.firstChild; )
            t = t.firstChild;
        return t
    }
    function qm(t, n) {
        var s = Hm(t);
        t = 0;
        for (var l; s; ) {
            if (s.nodeType === 3) {
                if (l = t + s.textContent.length,
                t <= n && l >= n)
                    return {
                        node: s,
                        offset: n - t
                    };
                t = l
            }
            t: {
                for (; s; ) {
                    if (s.nextSibling) {
                        s = s.nextSibling;
                        break t
                    }
                    s = s.parentNode
                }
                s = void 0
            }
            s = Hm(s)
        }
    }
    function Fm(t, n) {
        return t && n ? t === n ? !0 : t && t.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Fm(t, n.parentNode) : "contains"in t ? t.contains(n) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(n) & 16) : !1 : !1
    }
    function Gm(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var n = gl(t.document); n instanceof t.HTMLIFrameElement; ) {
            try {
                var s = typeof n.contentWindow.location.href == "string"
            } catch {
                s = !1
            }
            if (s)
                t = n.contentWindow;
            else
                break;
            n = gl(t.document)
        }
        return n
    }
    function Zc(t) {
        var n = t && t.nodeName && t.nodeName.toLowerCase();
        return n && (n === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || n === "textarea" || t.contentEditable === "true")
    }
    var Ww = Wn && "documentMode"in document && 11 >= document.documentMode
      , Fs = null
      , Ic = null
      , Ka = null
      , Wc = !1;
    function Ym(t, n, s) {
        var l = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
        Wc || Fs == null || Fs !== gl(l) || (l = Fs,
        "selectionStart"in l && Zc(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(),
        l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }),
        Ka && Qa(Ka, l) || (Ka = l,
        l = ho(Ic, "onSelect"),
        0 < l.length && (n = new wl("onSelect","select",null,n,s),
        t.push({
            event: n,
            listeners: l
        }),
        n.target = Fs)))
    }
    function ss(t, n) {
        var s = {};
        return s[t.toLowerCase()] = n.toLowerCase(),
        s["Webkit" + t] = "webkit" + n,
        s["Moz" + t] = "moz" + n,
        s
    }
    var Gs = {
        animationend: ss("Animation", "AnimationEnd"),
        animationiteration: ss("Animation", "AnimationIteration"),
        animationstart: ss("Animation", "AnimationStart"),
        transitionrun: ss("Transition", "TransitionRun"),
        transitionstart: ss("Transition", "TransitionStart"),
        transitioncancel: ss("Transition", "TransitionCancel"),
        transitionend: ss("Transition", "TransitionEnd")
    }
      , Jc = {}
      , Xm = {};
    Wn && (Xm = document.createElement("div").style,
    "AnimationEvent"in window || (delete Gs.animationend.animation,
    delete Gs.animationiteration.animation,
    delete Gs.animationstart.animation),
    "TransitionEvent"in window || delete Gs.transitionend.transition);
    function as(t) {
        if (Jc[t])
            return Jc[t];
        if (!Gs[t])
            return t;
        var n = Gs[t], s;
        for (s in n)
            if (n.hasOwnProperty(s) && s in Xm)
                return Jc[t] = n[s];
        return t
    }
    var Qm = as("animationend")
      , Km = as("animationiteration")
      , Zm = as("animationstart")
      , Jw = as("transitionrun")
      , $w = as("transitionstart")
      , tT = as("transitioncancel")
      , Im = as("transitionend")
      , Wm = new Map
      , $c = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    $c.push("scrollEnd");
    function Tn(t, n) {
        Wm.set(t, n),
        ns(n, [t])
    }
    var El = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var n = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(n))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    }
      , fn = []
      , Ys = 0
      , tu = 0;
    function Cl() {
        for (var t = Ys, n = tu = Ys = 0; n < t; ) {
            var s = fn[n];
            fn[n++] = null;
            var l = fn[n];
            fn[n++] = null;
            var c = fn[n];
            fn[n++] = null;
            var d = fn[n];
            if (fn[n++] = null,
            l !== null && c !== null) {
                var y = l.pending;
                y === null ? c.next = c : (c.next = y.next,
                y.next = c),
                l.pending = c
            }
            d !== 0 && Jm(s, c, d)
        }
    }
    function Ml(t, n, s, l) {
        fn[Ys++] = t,
        fn[Ys++] = n,
        fn[Ys++] = s,
        fn[Ys++] = l,
        tu |= l,
        t.lanes |= l,
        t = t.alternate,
        t !== null && (t.lanes |= l)
    }
    function eu(t, n, s, l) {
        return Ml(t, n, s, l),
        Nl(t)
    }
    function rs(t, n) {
        return Ml(t, null, null, n),
        Nl(t)
    }
    function Jm(t, n, s) {
        t.lanes |= s;
        var l = t.alternate;
        l !== null && (l.lanes |= s);
        for (var c = !1, d = t.return; d !== null; )
            d.childLanes |= s,
            l = d.alternate,
            l !== null && (l.childLanes |= s),
            d.tag === 22 && (t = d.stateNode,
            t === null || t._visibility & 1 || (c = !0)),
            t = d,
            d = d.return;
        return t.tag === 3 ? (d = t.stateNode,
        c && n !== null && (c = 31 - Ve(s),
        t = d.hiddenUpdates,
        l = t[c],
        l === null ? t[c] = [n] : l.push(n),
        n.lane = s | 536870912),
        d) : null
    }
    function Nl(t) {
        if (50 < yr)
            throw yr = 0,
            ff = null,
            Error(r(185));
        for (var n = t.return; n !== null; )
            t = n,
            n = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var Xs = {};
    function eT(t, n, s, l) {
        this.tag = t,
        this.key = s,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = n,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = l,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function We(t, n, s, l) {
        return new eT(t,n,s,l)
    }
    function nu(t) {
        return t = t.prototype,
        !(!t || !t.isReactComponent)
    }
    function Jn(t, n) {
        var s = t.alternate;
        return s === null ? (s = We(t.tag, n, t.key, t.mode),
        s.elementType = t.elementType,
        s.type = t.type,
        s.stateNode = t.stateNode,
        s.alternate = t,
        t.alternate = s) : (s.pendingProps = n,
        s.type = t.type,
        s.flags = 0,
        s.subtreeFlags = 0,
        s.deletions = null),
        s.flags = t.flags & 65011712,
        s.childLanes = t.childLanes,
        s.lanes = t.lanes,
        s.child = t.child,
        s.memoizedProps = t.memoizedProps,
        s.memoizedState = t.memoizedState,
        s.updateQueue = t.updateQueue,
        n = t.dependencies,
        s.dependencies = n === null ? null : {
            lanes: n.lanes,
            firstContext: n.firstContext
        },
        s.sibling = t.sibling,
        s.index = t.index,
        s.ref = t.ref,
        s.refCleanup = t.refCleanup,
        s
    }
    function $m(t, n) {
        t.flags &= 65011714;
        var s = t.alternate;
        return s === null ? (t.childLanes = 0,
        t.lanes = n,
        t.child = null,
        t.subtreeFlags = 0,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.updateQueue = null,
        t.dependencies = null,
        t.stateNode = null) : (t.childLanes = s.childLanes,
        t.lanes = s.lanes,
        t.child = s.child,
        t.subtreeFlags = 0,
        t.deletions = null,
        t.memoizedProps = s.memoizedProps,
        t.memoizedState = s.memoizedState,
        t.updateQueue = s.updateQueue,
        t.type = s.type,
        n = s.dependencies,
        t.dependencies = n === null ? null : {
            lanes: n.lanes,
            firstContext: n.firstContext
        }),
        t
    }
    function Dl(t, n, s, l, c, d) {
        var y = 0;
        if (l = t,
        typeof t == "function")
            nu(t) && (y = 1);
        else if (typeof t == "string")
            y = rA(t, s, nt.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else
            t: switch (t) {
            case ot:
                return t = We(31, s, n, c),
                t.elementType = ot,
                t.lanes = d,
                t;
            case A:
                return ls(s.children, c, d, n);
            case M:
                y = 8,
                c |= 24;
                break;
            case j:
                return t = We(12, s, n, c | 2),
                t.elementType = j,
                t.lanes = d,
                t;
            case H:
                return t = We(13, s, n, c),
                t.elementType = H,
                t.lanes = d,
                t;
            case J:
                return t = We(19, s, n, c),
                t.elementType = J,
                t.lanes = d,
                t;
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                    case V:
                        y = 10;
                        break t;
                    case O:
                        y = 9;
                        break t;
                    case G:
                        y = 11;
                        break t;
                    case Z:
                        y = 14;
                        break t;
                    case Y:
                        y = 16,
                        l = null;
                        break t
                    }
                y = 29,
                s = Error(r(130, t === null ? "null" : typeof t, "")),
                l = null
            }
        return n = We(y, s, n, c),
        n.elementType = t,
        n.type = l,
        n.lanes = d,
        n
    }
    function ls(t, n, s, l) {
        return t = We(7, t, l, n),
        t.lanes = s,
        t
    }
    function iu(t, n, s) {
        return t = We(6, t, null, n),
        t.lanes = s,
        t
    }
    function tp(t) {
        var n = We(18, null, null, 0);
        return n.stateNode = t,
        n
    }
    function su(t, n, s) {
        return n = We(4, t.children !== null ? t.children : [], t.key, n),
        n.lanes = s,
        n.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        },
        n
    }
    var ep = new WeakMap;
    function dn(t, n) {
        if (typeof t == "object" && t !== null) {
            var s = ep.get(t);
            return s !== void 0 ? s : (n = {
                value: t,
                source: n,
                stack: ll(n)
            },
            ep.set(t, n),
            n)
        }
        return {
            value: t,
            source: n,
            stack: ll(n)
        }
    }
    var Qs = []
      , Ks = 0
      , Rl = null
      , Za = 0
      , hn = []
      , mn = 0
      , Si = null
      , Ln = 1
      , Un = "";
    function $n(t, n) {
        Qs[Ks++] = Za,
        Qs[Ks++] = Rl,
        Rl = t,
        Za = n
    }
    function np(t, n, s) {
        hn[mn++] = Ln,
        hn[mn++] = Un,
        hn[mn++] = Si,
        Si = t;
        var l = Ln;
        t = Un;
        var c = 32 - Ve(l) - 1;
        l &= ~(1 << c),
        s += 1;
        var d = 32 - Ve(n) + c;
        if (30 < d) {
            var y = c - c % 5;
            d = (l & (1 << y) - 1).toString(32),
            l >>= y,
            c -= y,
            Ln = 1 << 32 - Ve(n) + c | s << c | l,
            Un = d + t
        } else
            Ln = 1 << d | s << c | l,
            Un = t
    }
    function au(t) {
        t.return !== null && ($n(t, 1),
        np(t, 1, 0))
    }
    function ru(t) {
        for (; t === Rl; )
            Rl = Qs[--Ks],
            Qs[Ks] = null,
            Za = Qs[--Ks],
            Qs[Ks] = null;
        for (; t === Si; )
            Si = hn[--mn],
            hn[mn] = null,
            Un = hn[--mn],
            hn[mn] = null,
            Ln = hn[--mn],
            hn[mn] = null
    }
    function ip(t, n) {
        hn[mn++] = Ln,
        hn[mn++] = Un,
        hn[mn++] = Si,
        Ln = n.id,
        Un = n.overflow,
        Si = t
    }
    var Ce = null
      , Kt = null
      , _t = !1
      , wi = null
      , pn = !1
      , lu = Error(r(519));
    function Ti(t) {
        var n = Error(r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw Ia(dn(n, t)),
        lu
    }
    function sp(t) {
        var n = t.stateNode
          , s = t.type
          , l = t.memoizedProps;
        switch (n[Ee] = t,
        n[He] = l,
        s) {
        case "dialog":
            Rt("cancel", n),
            Rt("close", n);
            break;
        case "iframe":
        case "object":
        case "embed":
            Rt("load", n);
            break;
        case "video":
        case "audio":
            for (s = 0; s < vr.length; s++)
                Rt(vr[s], n);
            break;
        case "source":
            Rt("error", n);
            break;
        case "img":
        case "image":
        case "link":
            Rt("error", n),
            Rt("load", n);
            break;
        case "details":
            Rt("toggle", n);
            break;
        case "input":
            Rt("invalid", n),
            gm(n, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0);
            break;
        case "select":
            Rt("invalid", n);
            break;
        case "textarea":
            Rt("invalid", n),
            xm(n, l.value, l.defaultValue, l.children)
        }
        s = l.children,
        typeof s != "string" && typeof s != "number" && typeof s != "bigint" || n.textContent === "" + s || l.suppressHydrationWarning === !0 || Sg(n.textContent, s) ? (l.popover != null && (Rt("beforetoggle", n),
        Rt("toggle", n)),
        l.onScroll != null && Rt("scroll", n),
        l.onScrollEnd != null && Rt("scrollend", n),
        l.onClick != null && (n.onclick = In),
        n = !0) : n = !1,
        n || Ti(t, !0)
    }
    function ap(t) {
        for (Ce = t.return; Ce; )
            switch (Ce.tag) {
            case 5:
            case 31:
            case 13:
                pn = !1;
                return;
            case 27:
            case 3:
                pn = !0;
                return;
            default:
                Ce = Ce.return
            }
    }
    function Zs(t) {
        if (t !== Ce)
            return !1;
        if (!_t)
            return ap(t),
            _t = !0,
            !1;
        var n = t.tag, s;
        if ((s = n !== 3 && n !== 27) && ((s = n === 5) && (s = t.type,
        s = !(s !== "form" && s !== "button") || Cf(t.type, t.memoizedProps)),
        s = !s),
        s && Kt && Ti(t),
        ap(t),
        n === 13) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(r(317));
            Kt = Rg(t)
        } else if (n === 31) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(r(317));
            Kt = Rg(t)
        } else
            n === 27 ? (n = Kt,
            Ui(t.type) ? (t = jf,
            jf = null,
            Kt = t) : Kt = n) : Kt = Ce ? gn(t.stateNode.nextSibling) : null;
        return !0
    }
    function os() {
        Kt = Ce = null,
        _t = !1
    }
    function ou() {
        var t = wi;
        return t !== null && (Xe === null ? Xe = t : Xe.push.apply(Xe, t),
        wi = null),
        t
    }
    function Ia(t) {
        wi === null ? wi = [t] : wi.push(t)
    }
    var cu = D(null)
      , cs = null
      , ti = null;
    function Ai(t, n, s) {
        $(cu, n._currentValue),
        n._currentValue = s
    }
    function ei(t) {
        t._currentValue = cu.current,
        K(cu)
    }
    function uu(t, n, s) {
        for (; t !== null; ) {
            var l = t.alternate;
            if ((t.childLanes & n) !== n ? (t.childLanes |= n,
            l !== null && (l.childLanes |= n)) : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n),
            t === s)
                break;
            t = t.return
        }
    }
    function fu(t, n, s, l) {
        var c = t.child;
        for (c !== null && (c.return = t); c !== null; ) {
            var d = c.dependencies;
            if (d !== null) {
                var y = c.child;
                d = d.firstContext;
                t: for (; d !== null; ) {
                    var b = d;
                    d = c;
                    for (var C = 0; C < n.length; C++)
                        if (b.context === n[C]) {
                            d.lanes |= s,
                            b = d.alternate,
                            b !== null && (b.lanes |= s),
                            uu(d.return, s, t),
                            l || (y = null);
                            break t
                        }
                    d = b.next
                }
            } else if (c.tag === 18) {
                if (y = c.return,
                y === null)
                    throw Error(r(341));
                y.lanes |= s,
                d = y.alternate,
                d !== null && (d.lanes |= s),
                uu(y, s, t),
                y = null
            } else
                y = c.child;
            if (y !== null)
                y.return = c;
            else
                for (y = c; y !== null; ) {
                    if (y === t) {
                        y = null;
                        break
                    }
                    if (c = y.sibling,
                    c !== null) {
                        c.return = y.return,
                        y = c;
                        break
                    }
                    y = y.return
                }
            c = y
        }
    }
    function Is(t, n, s, l) {
        t = null;
        for (var c = n, d = !1; c !== null; ) {
            if (!d) {
                if ((c.flags & 524288) !== 0)
                    d = !0;
                else if ((c.flags & 262144) !== 0)
                    break
            }
            if (c.tag === 10) {
                var y = c.alternate;
                if (y === null)
                    throw Error(r(387));
                if (y = y.memoizedProps,
                y !== null) {
                    var b = c.type;
                    Ie(c.pendingProps.value, y.value) || (t !== null ? t.push(b) : t = [b])
                }
            } else if (c === gt.current) {
                if (y = c.alternate,
                y === null)
                    throw Error(r(387));
                y.memoizedState.memoizedState !== c.memoizedState.memoizedState && (t !== null ? t.push(Tr) : t = [Tr])
            }
            c = c.return
        }
        t !== null && fu(n, t, s, l),
        n.flags |= 262144
    }
    function jl(t) {
        for (t = t.firstContext; t !== null; ) {
            if (!Ie(t.context._currentValue, t.memoizedValue))
                return !0;
            t = t.next
        }
        return !1
    }
    function us(t) {
        cs = t,
        ti = null,
        t = t.dependencies,
        t !== null && (t.firstContext = null)
    }
    function Me(t) {
        return rp(cs, t)
    }
    function Ol(t, n) {
        return cs === null && us(t),
        rp(t, n)
    }
    function rp(t, n) {
        var s = n._currentValue;
        if (n = {
            context: n,
            memoizedValue: s,
            next: null
        },
        ti === null) {
            if (t === null)
                throw Error(r(308));
            ti = n,
            t.dependencies = {
                lanes: 0,
                firstContext: n
            },
            t.flags |= 524288
        } else
            ti = ti.next = n;
        return s
    }
    var nT = typeof AbortController < "u" ? AbortController : function() {
        var t = []
          , n = this.signal = {
            aborted: !1,
            addEventListener: function(s, l) {
                t.push(l)
            }
        };
        this.abort = function() {
            n.aborted = !0,
            t.forEach(function(s) {
                return s()
            })
        }
    }
      , iT = e.unstable_scheduleCallback
      , sT = e.unstable_NormalPriority
      , oe = {
        $$typeof: V,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function du() {
        return {
            controller: new nT,
            data: new Map,
            refCount: 0
        }
    }
    function Wa(t) {
        t.refCount--,
        t.refCount === 0 && iT(sT, function() {
            t.controller.abort()
        })
    }
    var Ja = null
      , hu = 0
      , Ws = 0
      , Js = null;
    function aT(t, n) {
        if (Ja === null) {
            var s = Ja = [];
            hu = 0,
            Ws = gf(),
            Js = {
                status: "pending",
                value: void 0,
                then: function(l) {
                    s.push(l)
                }
            }
        }
        return hu++,
        n.then(lp, lp),
        n
    }
    function lp() {
        if (--hu === 0 && Ja !== null) {
            Js !== null && (Js.status = "fulfilled");
            var t = Ja;
            Ja = null,
            Ws = 0,
            Js = null;
            for (var n = 0; n < t.length; n++)
                (0,
                t[n])()
        }
    }
    function rT(t, n) {
        var s = []
          , l = {
            status: "pending",
            value: null,
            reason: null,
            then: function(c) {
                s.push(c)
            }
        };
        return t.then(function() {
            l.status = "fulfilled",
            l.value = n;
            for (var c = 0; c < s.length; c++)
                (0,
                s[c])(n)
        }, function(c) {
            for (l.status = "rejected",
            l.reason = c,
            c = 0; c < s.length; c++)
                (0,
                s[c])(void 0)
        }),
        l
    }
    var op = z.S;
    z.S = function(t, n) {
        Yy = it(),
        typeof n == "object" && n !== null && typeof n.then == "function" && aT(t, n),
        op !== null && op(t, n)
    }
    ;
    var fs = D(null);
    function mu() {
        var t = fs.current;
        return t !== null ? t : Yt.pooledCache
    }
    function _l(t, n) {
        n === null ? $(fs, fs.current) : $(fs, n.pool)
    }
    function cp() {
        var t = mu();
        return t === null ? null : {
            parent: oe._currentValue,
            pool: t
        }
    }
    var $s = Error(r(460))
      , pu = Error(r(474))
      , Vl = Error(r(542))
      , zl = {
        then: function() {}
    };
    function up(t) {
        return t = t.status,
        t === "fulfilled" || t === "rejected"
    }
    function fp(t, n, s) {
        switch (s = t[s],
        s === void 0 ? t.push(n) : s !== n && (n.then(In, In),
        n = s),
        n.status) {
        case "fulfilled":
            return n.value;
        case "rejected":
            throw t = n.reason,
            hp(t),
            t;
        default:
            if (typeof n.status == "string")
                n.then(In, In);
            else {
                if (t = Yt,
                t !== null && 100 < t.shellSuspendCounter)
                    throw Error(r(482));
                t = n,
                t.status = "pending",
                t.then(function(l) {
                    if (n.status === "pending") {
                        var c = n;
                        c.status = "fulfilled",
                        c.value = l
                    }
                }, function(l) {
                    if (n.status === "pending") {
                        var c = n;
                        c.status = "rejected",
                        c.reason = l
                    }
                })
            }
            switch (n.status) {
            case "fulfilled":
                return n.value;
            case "rejected":
                throw t = n.reason,
                hp(t),
                t
            }
            throw hs = n,
            $s
        }
    }
    function ds(t) {
        try {
            var n = t._init;
            return n(t._payload)
        } catch (s) {
            throw s !== null && typeof s == "object" && typeof s.then == "function" ? (hs = s,
            $s) : s
        }
    }
    var hs = null;
    function dp() {
        if (hs === null)
            throw Error(r(459));
        var t = hs;
        return hs = null,
        t
    }
    function hp(t) {
        if (t === $s || t === Vl)
            throw Error(r(483))
    }
    var ta = null
      , $a = 0;
    function Ll(t) {
        var n = $a;
        return $a += 1,
        ta === null && (ta = []),
        fp(ta, t, n)
    }
    function tr(t, n) {
        n = n.props.ref,
        t.ref = n !== void 0 ? n : null
    }
    function Ul(t, n) {
        throw n.$$typeof === S ? Error(r(525)) : (t = Object.prototype.toString.call(n),
        Error(r(31, t === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : t)))
    }
    function mp(t) {
        function n(_, R) {
            if (t) {
                var L = _.deletions;
                L === null ? (_.deletions = [R],
                _.flags |= 16) : L.push(R)
            }
        }
        function s(_, R) {
            if (!t)
                return null;
            for (; R !== null; )
                n(_, R),
                R = R.sibling;
            return null
        }
        function l(_) {
            for (var R = new Map; _ !== null; )
                _.key !== null ? R.set(_.key, _) : R.set(_.index, _),
                _ = _.sibling;
            return R
        }
        function c(_, R) {
            return _ = Jn(_, R),
            _.index = 0,
            _.sibling = null,
            _
        }
        function d(_, R, L) {
            return _.index = L,
            t ? (L = _.alternate,
            L !== null ? (L = L.index,
            L < R ? (_.flags |= 67108866,
            R) : L) : (_.flags |= 67108866,
            R)) : (_.flags |= 1048576,
            R)
        }
        function y(_) {
            return t && _.alternate === null && (_.flags |= 67108866),
            _
        }
        function b(_, R, L, I) {
            return R === null || R.tag !== 6 ? (R = iu(L, _.mode, I),
            R.return = _,
            R) : (R = c(R, L),
            R.return = _,
            R)
        }
        function C(_, R, L, I) {
            var bt = L.type;
            return bt === A ? Q(_, R, L.props.children, I, L.key) : R !== null && (R.elementType === bt || typeof bt == "object" && bt !== null && bt.$$typeof === Y && ds(bt) === R.type) ? (R = c(R, L.props),
            tr(R, L),
            R.return = _,
            R) : (R = Dl(L.type, L.key, L.props, null, _.mode, I),
            tr(R, L),
            R.return = _,
            R)
        }
        function U(_, R, L, I) {
            return R === null || R.tag !== 4 || R.stateNode.containerInfo !== L.containerInfo || R.stateNode.implementation !== L.implementation ? (R = su(L, _.mode, I),
            R.return = _,
            R) : (R = c(R, L.children || []),
            R.return = _,
            R)
        }
        function Q(_, R, L, I, bt) {
            return R === null || R.tag !== 7 ? (R = ls(L, _.mode, I, bt),
            R.return = _,
            R) : (R = c(R, L),
            R.return = _,
            R)
        }
        function W(_, R, L) {
            if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
                return R = iu("" + R, _.mode, L),
                R.return = _,
                R;
            if (typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                case w:
                    return L = Dl(R.type, R.key, R.props, null, _.mode, L),
                    tr(L, R),
                    L.return = _,
                    L;
                case E:
                    return R = su(R, _.mode, L),
                    R.return = _,
                    R;
                case Y:
                    return R = ds(R),
                    W(_, R, L)
                }
                if (mt(R) || at(R))
                    return R = ls(R, _.mode, L, null),
                    R.return = _,
                    R;
                if (typeof R.then == "function")
                    return W(_, Ll(R), L);
                if (R.$$typeof === V)
                    return W(_, Ol(_, R), L);
                Ul(_, R)
            }
            return null
        }
        function P(_, R, L, I) {
            var bt = R !== null ? R.key : null;
            if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
                return bt !== null ? null : b(_, R, "" + L, I);
            if (typeof L == "object" && L !== null) {
                switch (L.$$typeof) {
                case w:
                    return L.key === bt ? C(_, R, L, I) : null;
                case E:
                    return L.key === bt ? U(_, R, L, I) : null;
                case Y:
                    return L = ds(L),
                    P(_, R, L, I)
                }
                if (mt(L) || at(L))
                    return bt !== null ? null : Q(_, R, L, I, null);
                if (typeof L.then == "function")
                    return P(_, R, Ll(L), I);
                if (L.$$typeof === V)
                    return P(_, R, Ol(_, L), I);
                Ul(_, L)
            }
            return null
        }
        function F(_, R, L, I, bt) {
            if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint")
                return _ = _.get(L) || null,
                b(R, _, "" + I, bt);
            if (typeof I == "object" && I !== null) {
                switch (I.$$typeof) {
                case w:
                    return _ = _.get(I.key === null ? L : I.key) || null,
                    C(R, _, I, bt);
                case E:
                    return _ = _.get(I.key === null ? L : I.key) || null,
                    U(R, _, I, bt);
                case Y:
                    return I = ds(I),
                    F(_, R, L, I, bt)
                }
                if (mt(I) || at(I))
                    return _ = _.get(L) || null,
                    Q(R, _, I, bt, null);
                if (typeof I.then == "function")
                    return F(_, R, L, Ll(I), bt);
                if (I.$$typeof === V)
                    return F(_, R, L, Ol(R, I), bt);
                Ul(R, I)
            }
            return null
        }
        function ut(_, R, L, I) {
            for (var bt = null, zt = null, pt = R, Mt = R = 0, Ot = null; pt !== null && Mt < L.length; Mt++) {
                pt.index > Mt ? (Ot = pt,
                pt = null) : Ot = pt.sibling;
                var Lt = P(_, pt, L[Mt], I);
                if (Lt === null) {
                    pt === null && (pt = Ot);
                    break
                }
                t && pt && Lt.alternate === null && n(_, pt),
                R = d(Lt, R, Mt),
                zt === null ? bt = Lt : zt.sibling = Lt,
                zt = Lt,
                pt = Ot
            }
            if (Mt === L.length)
                return s(_, pt),
                _t && $n(_, Mt),
                bt;
            if (pt === null) {
                for (; Mt < L.length; Mt++)
                    pt = W(_, L[Mt], I),
                    pt !== null && (R = d(pt, R, Mt),
                    zt === null ? bt = pt : zt.sibling = pt,
                    zt = pt);
                return _t && $n(_, Mt),
                bt
            }
            for (pt = l(pt); Mt < L.length; Mt++)
                Ot = F(pt, _, Mt, L[Mt], I),
                Ot !== null && (t && Ot.alternate !== null && pt.delete(Ot.key === null ? Mt : Ot.key),
                R = d(Ot, R, Mt),
                zt === null ? bt = Ot : zt.sibling = Ot,
                zt = Ot);
            return t && pt.forEach(function(qi) {
                return n(_, qi)
            }),
            _t && $n(_, Mt),
            bt
        }
        function wt(_, R, L, I) {
            if (L == null)
                throw Error(r(151));
            for (var bt = null, zt = null, pt = R, Mt = R = 0, Ot = null, Lt = L.next(); pt !== null && !Lt.done; Mt++,
            Lt = L.next()) {
                pt.index > Mt ? (Ot = pt,
                pt = null) : Ot = pt.sibling;
                var qi = P(_, pt, Lt.value, I);
                if (qi === null) {
                    pt === null && (pt = Ot);
                    break
                }
                t && pt && qi.alternate === null && n(_, pt),
                R = d(qi, R, Mt),
                zt === null ? bt = qi : zt.sibling = qi,
                zt = qi,
                pt = Ot
            }
            if (Lt.done)
                return s(_, pt),
                _t && $n(_, Mt),
                bt;
            if (pt === null) {
                for (; !Lt.done; Mt++,
                Lt = L.next())
                    Lt = W(_, Lt.value, I),
                    Lt !== null && (R = d(Lt, R, Mt),
                    zt === null ? bt = Lt : zt.sibling = Lt,
                    zt = Lt);
                return _t && $n(_, Mt),
                bt
            }
            for (pt = l(pt); !Lt.done; Mt++,
            Lt = L.next())
                Lt = F(pt, _, Mt, Lt.value, I),
                Lt !== null && (t && Lt.alternate !== null && pt.delete(Lt.key === null ? Mt : Lt.key),
                R = d(Lt, R, Mt),
                zt === null ? bt = Lt : zt.sibling = Lt,
                zt = Lt);
            return t && pt.forEach(function(gA) {
                return n(_, gA)
            }),
            _t && $n(_, Mt),
            bt
        }
        function Gt(_, R, L, I) {
            if (typeof L == "object" && L !== null && L.type === A && L.key === null && (L = L.props.children),
            typeof L == "object" && L !== null) {
                switch (L.$$typeof) {
                case w:
                    t: {
                        for (var bt = L.key; R !== null; ) {
                            if (R.key === bt) {
                                if (bt = L.type,
                                bt === A) {
                                    if (R.tag === 7) {
                                        s(_, R.sibling),
                                        I = c(R, L.props.children),
                                        I.return = _,
                                        _ = I;
                                        break t
                                    }
                                } else if (R.elementType === bt || typeof bt == "object" && bt !== null && bt.$$typeof === Y && ds(bt) === R.type) {
                                    s(_, R.sibling),
                                    I = c(R, L.props),
                                    tr(I, L),
                                    I.return = _,
                                    _ = I;
                                    break t
                                }
                                s(_, R);
                                break
                            } else
                                n(_, R);
                            R = R.sibling
                        }
                        L.type === A ? (I = ls(L.props.children, _.mode, I, L.key),
                        I.return = _,
                        _ = I) : (I = Dl(L.type, L.key, L.props, null, _.mode, I),
                        tr(I, L),
                        I.return = _,
                        _ = I)
                    }
                    return y(_);
                case E:
                    t: {
                        for (bt = L.key; R !== null; ) {
                            if (R.key === bt)
                                if (R.tag === 4 && R.stateNode.containerInfo === L.containerInfo && R.stateNode.implementation === L.implementation) {
                                    s(_, R.sibling),
                                    I = c(R, L.children || []),
                                    I.return = _,
                                    _ = I;
                                    break t
                                } else {
                                    s(_, R);
                                    break
                                }
                            else
                                n(_, R);
                            R = R.sibling
                        }
                        I = su(L, _.mode, I),
                        I.return = _,
                        _ = I
                    }
                    return y(_);
                case Y:
                    return L = ds(L),
                    Gt(_, R, L, I)
                }
                if (mt(L))
                    return ut(_, R, L, I);
                if (at(L)) {
                    if (bt = at(L),
                    typeof bt != "function")
                        throw Error(r(150));
                    return L = bt.call(L),
                    wt(_, R, L, I)
                }
                if (typeof L.then == "function")
                    return Gt(_, R, Ll(L), I);
                if (L.$$typeof === V)
                    return Gt(_, R, Ol(_, L), I);
                Ul(_, L)
            }
            return typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint" ? (L = "" + L,
            R !== null && R.tag === 6 ? (s(_, R.sibling),
            I = c(R, L),
            I.return = _,
            _ = I) : (s(_, R),
            I = iu(L, _.mode, I),
            I.return = _,
            _ = I),
            y(_)) : s(_, R)
        }
        return function(_, R, L, I) {
            try {
                $a = 0;
                var bt = Gt(_, R, L, I);
                return ta = null,
                bt
            } catch (pt) {
                if (pt === $s || pt === Vl)
                    throw pt;
                var zt = We(29, pt, null, _.mode);
                return zt.lanes = I,
                zt.return = _,
                zt
            }
        }
    }
    var ms = mp(!0)
      , pp = mp(!1)
      , Ei = !1;
    function yu(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function gu(t, n) {
        t = t.updateQueue,
        n.updateQueue === t && (n.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }
    function Ci(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Mi(t, n, s) {
        var l = t.updateQueue;
        if (l === null)
            return null;
        if (l = l.shared,
        (Bt & 2) !== 0) {
            var c = l.pending;
            return c === null ? n.next = n : (n.next = c.next,
            c.next = n),
            l.pending = n,
            n = Nl(t),
            Jm(t, null, s),
            n
        }
        return Ml(t, l, n, s),
        Nl(t)
    }
    function er(t, n, s) {
        if (n = n.updateQueue,
        n !== null && (n = n.shared,
        (s & 4194048) !== 0)) {
            var l = n.lanes;
            l &= t.pendingLanes,
            s |= l,
            n.lanes = s,
            rm(t, s)
        }
    }
    function vu(t, n) {
        var s = t.updateQueue
          , l = t.alternate;
        if (l !== null && (l = l.updateQueue,
        s === l)) {
            var c = null
              , d = null;
            if (s = s.firstBaseUpdate,
            s !== null) {
                do {
                    var y = {
                        lane: s.lane,
                        tag: s.tag,
                        payload: s.payload,
                        callback: null,
                        next: null
                    };
                    d === null ? c = d = y : d = d.next = y,
                    s = s.next
                } while (s !== null);
                d === null ? c = d = n : d = d.next = n
            } else
                c = d = n;
            s = {
                baseState: l.baseState,
                firstBaseUpdate: c,
                lastBaseUpdate: d,
                shared: l.shared,
                callbacks: l.callbacks
            },
            t.updateQueue = s;
            return
        }
        t = s.lastBaseUpdate,
        t === null ? s.firstBaseUpdate = n : t.next = n,
        s.lastBaseUpdate = n
    }
    var xu = !1;
    function nr() {
        if (xu) {
            var t = Js;
            if (t !== null)
                throw t
        }
    }
    function ir(t, n, s, l) {
        xu = !1;
        var c = t.updateQueue;
        Ei = !1;
        var d = c.firstBaseUpdate
          , y = c.lastBaseUpdate
          , b = c.shared.pending;
        if (b !== null) {
            c.shared.pending = null;
            var C = b
              , U = C.next;
            C.next = null,
            y === null ? d = U : y.next = U,
            y = C;
            var Q = t.alternate;
            Q !== null && (Q = Q.updateQueue,
            b = Q.lastBaseUpdate,
            b !== y && (b === null ? Q.firstBaseUpdate = U : b.next = U,
            Q.lastBaseUpdate = C))
        }
        if (d !== null) {
            var W = c.baseState;
            y = 0,
            Q = U = C = null,
            b = d;
            do {
                var P = b.lane & -536870913
                  , F = P !== b.lane;
                if (F ? (jt & P) === P : (l & P) === P) {
                    P !== 0 && P === Ws && (xu = !0),
                    Q !== null && (Q = Q.next = {
                        lane: 0,
                        tag: b.tag,
                        payload: b.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var ut = t
                          , wt = b;
                        P = n;
                        var Gt = s;
                        switch (wt.tag) {
                        case 1:
                            if (ut = wt.payload,
                            typeof ut == "function") {
                                W = ut.call(Gt, W, P);
                                break t
                            }
                            W = ut;
                            break t;
                        case 3:
                            ut.flags = ut.flags & -65537 | 128;
                        case 0:
                            if (ut = wt.payload,
                            P = typeof ut == "function" ? ut.call(Gt, W, P) : ut,
                            P == null)
                                break t;
                            W = x({}, W, P);
                            break t;
                        case 2:
                            Ei = !0
                        }
                    }
                    P = b.callback,
                    P !== null && (t.flags |= 64,
                    F && (t.flags |= 8192),
                    F = c.callbacks,
                    F === null ? c.callbacks = [P] : F.push(P))
                } else
                    F = {
                        lane: P,
                        tag: b.tag,
                        payload: b.payload,
                        callback: b.callback,
                        next: null
                    },
                    Q === null ? (U = Q = F,
                    C = W) : Q = Q.next = F,
                    y |= P;
                if (b = b.next,
                b === null) {
                    if (b = c.shared.pending,
                    b === null)
                        break;
                    F = b,
                    b = F.next,
                    F.next = null,
                    c.lastBaseUpdate = F,
                    c.shared.pending = null
                }
            } while (!0);
            Q === null && (C = W),
            c.baseState = C,
            c.firstBaseUpdate = U,
            c.lastBaseUpdate = Q,
            d === null && (c.shared.lanes = 0),
            Oi |= y,
            t.lanes = y,
            t.memoizedState = W
        }
    }
    function yp(t, n) {
        if (typeof t != "function")
            throw Error(r(191, t));
        t.call(n)
    }
    function gp(t, n) {
        var s = t.callbacks;
        if (s !== null)
            for (t.callbacks = null,
            t = 0; t < s.length; t++)
                yp(s[t], n)
    }
    var ea = D(null)
      , kl = D(0);
    function vp(t, n) {
        t = ui,
        $(kl, t),
        $(ea, n),
        ui = t | n.baseLanes
    }
    function bu() {
        $(kl, ui),
        $(ea, ea.current)
    }
    function Su() {
        ui = kl.current,
        K(ea),
        K(kl)
    }
    var Je = D(null)
      , yn = null;
    function Ni(t) {
        var n = t.alternate;
        $(re, re.current & 1),
        $(Je, t),
        yn === null && (n === null || ea.current !== null || n.memoizedState !== null) && (yn = t)
    }
    function wu(t) {
        $(re, re.current),
        $(Je, t),
        yn === null && (yn = t)
    }
    function xp(t) {
        t.tag === 22 ? ($(re, re.current),
        $(Je, t),
        yn === null && (yn = t)) : Di()
    }
    function Di() {
        $(re, re.current),
        $(Je, Je.current)
    }
    function $e(t) {
        K(Je),
        yn === t && (yn = null),
        K(re)
    }
    var re = D(0);
    function Bl(t) {
        for (var n = t; n !== null; ) {
            if (n.tag === 13) {
                var s = n.memoizedState;
                if (s !== null && (s = s.dehydrated,
                s === null || Df(s) || Rf(s)))
                    return n
            } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
                if ((n.flags & 128) !== 0)
                    return n
            } else if (n.child !== null) {
                n.child.return = n,
                n = n.child;
                continue
            }
            if (n === t)
                break;
            for (; n.sibling === null; ) {
                if (n.return === null || n.return === t)
                    return null;
                n = n.return
            }
            n.sibling.return = n.return,
            n = n.sibling
        }
        return null
    }
    var ni = 0
      , Ct = null
      , qt = null
      , ce = null
      , Pl = !1
      , na = !1
      , ps = !1
      , Hl = 0
      , sr = 0
      , ia = null
      , lT = 0;
    function ie() {
        throw Error(r(321))
    }
    function Tu(t, n) {
        if (n === null)
            return !1;
        for (var s = 0; s < n.length && s < t.length; s++)
            if (!Ie(t[s], n[s]))
                return !1;
        return !0
    }
    function Au(t, n, s, l, c, d) {
        return ni = d,
        Ct = n,
        n.memoizedState = null,
        n.updateQueue = null,
        n.lanes = 0,
        z.H = t === null || t.memoizedState === null ? ny : Bu,
        ps = !1,
        d = s(l, c),
        ps = !1,
        na && (d = Sp(n, s, l, c)),
        bp(t),
        d
    }
    function bp(t) {
        z.H = lr;
        var n = qt !== null && qt.next !== null;
        if (ni = 0,
        ce = qt = Ct = null,
        Pl = !1,
        sr = 0,
        ia = null,
        n)
            throw Error(r(300));
        t === null || ue || (t = t.dependencies,
        t !== null && jl(t) && (ue = !0))
    }
    function Sp(t, n, s, l) {
        Ct = t;
        var c = 0;
        do {
            if (na && (ia = null),
            sr = 0,
            na = !1,
            25 <= c)
                throw Error(r(301));
            if (c += 1,
            ce = qt = null,
            t.updateQueue != null) {
                var d = t.updateQueue;
                d.lastEffect = null,
                d.events = null,
                d.stores = null,
                d.memoCache != null && (d.memoCache.index = 0)
            }
            z.H = iy,
            d = n(s, l)
        } while (na);
        return d
    }
    function oT() {
        var t = z.H
          , n = t.useState()[0];
        return n = typeof n.then == "function" ? ar(n) : n,
        t = t.useState()[0],
        (qt !== null ? qt.memoizedState : null) !== t && (Ct.flags |= 1024),
        n
    }
    function Eu() {
        var t = Hl !== 0;
        return Hl = 0,
        t
    }
    function Cu(t, n, s) {
        n.updateQueue = t.updateQueue,
        n.flags &= -2053,
        t.lanes &= ~s
    }
    function Mu(t) {
        if (Pl) {
            for (t = t.memoizedState; t !== null; ) {
                var n = t.queue;
                n !== null && (n.pending = null),
                t = t.next
            }
            Pl = !1
        }
        ni = 0,
        ce = qt = Ct = null,
        na = !1,
        sr = Hl = 0,
        ia = null
    }
    function ze() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return ce === null ? Ct.memoizedState = ce = t : ce = ce.next = t,
        ce
    }
    function le() {
        if (qt === null) {
            var t = Ct.alternate;
            t = t !== null ? t.memoizedState : null
        } else
            t = qt.next;
        var n = ce === null ? Ct.memoizedState : ce.next;
        if (n !== null)
            ce = n,
            qt = t;
        else {
            if (t === null)
                throw Ct.alternate === null ? Error(r(467)) : Error(r(310));
            qt = t,
            t = {
                memoizedState: qt.memoizedState,
                baseState: qt.baseState,
                baseQueue: qt.baseQueue,
                queue: qt.queue,
                next: null
            },
            ce === null ? Ct.memoizedState = ce = t : ce = ce.next = t
        }
        return ce
    }
    function ql() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function ar(t) {
        var n = sr;
        return sr += 1,
        ia === null && (ia = []),
        t = fp(ia, t, n),
        n = Ct,
        (ce === null ? n.memoizedState : ce.next) === null && (n = n.alternate,
        z.H = n === null || n.memoizedState === null ? ny : Bu),
        t
    }
    function Fl(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function")
                return ar(t);
            if (t.$$typeof === V)
                return Me(t)
        }
        throw Error(r(438, String(t)))
    }
    function Nu(t) {
        var n = null
          , s = Ct.updateQueue;
        if (s !== null && (n = s.memoCache),
        n == null) {
            var l = Ct.alternate;
            l !== null && (l = l.updateQueue,
            l !== null && (l = l.memoCache,
            l != null && (n = {
                data: l.data.map(function(c) {
                    return c.slice()
                }),
                index: 0
            })))
        }
        if (n == null && (n = {
            data: [],
            index: 0
        }),
        s === null && (s = ql(),
        Ct.updateQueue = s),
        s.memoCache = n,
        s = n.data[n.index],
        s === void 0)
            for (s = n.data[n.index] = Array(t),
            l = 0; l < t; l++)
                s[l] = ht;
        return n.index++,
        s
    }
    function ii(t, n) {
        return typeof n == "function" ? n(t) : n
    }
    function Gl(t) {
        var n = le();
        return Du(n, qt, t)
    }
    function Du(t, n, s) {
        var l = t.queue;
        if (l === null)
            throw Error(r(311));
        l.lastRenderedReducer = s;
        var c = t.baseQueue
          , d = l.pending;
        if (d !== null) {
            if (c !== null) {
                var y = c.next;
                c.next = d.next,
                d.next = y
            }
            n.baseQueue = c = d,
            l.pending = null
        }
        if (d = t.baseState,
        c === null)
            t.memoizedState = d;
        else {
            n = c.next;
            var b = y = null
              , C = null
              , U = n
              , Q = !1;
            do {
                var W = U.lane & -536870913;
                if (W !== U.lane ? (jt & W) === W : (ni & W) === W) {
                    var P = U.revertLane;
                    if (P === 0)
                        C !== null && (C = C.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: U.action,
                            hasEagerState: U.hasEagerState,
                            eagerState: U.eagerState,
                            next: null
                        }),
                        W === Ws && (Q = !0);
                    else if ((ni & P) === P) {
                        U = U.next,
                        P === Ws && (Q = !0);
                        continue
                    } else
                        W = {
                            lane: 0,
                            revertLane: U.revertLane,
                            gesture: null,
                            action: U.action,
                            hasEagerState: U.hasEagerState,
                            eagerState: U.eagerState,
                            next: null
                        },
                        C === null ? (b = C = W,
                        y = d) : C = C.next = W,
                        Ct.lanes |= P,
                        Oi |= P;
                    W = U.action,
                    ps && s(d, W),
                    d = U.hasEagerState ? U.eagerState : s(d, W)
                } else
                    P = {
                        lane: W,
                        revertLane: U.revertLane,
                        gesture: U.gesture,
                        action: U.action,
                        hasEagerState: U.hasEagerState,
                        eagerState: U.eagerState,
                        next: null
                    },
                    C === null ? (b = C = P,
                    y = d) : C = C.next = P,
                    Ct.lanes |= W,
                    Oi |= W;
                U = U.next
            } while (U !== null && U !== n);
            if (C === null ? y = d : C.next = b,
            !Ie(d, t.memoizedState) && (ue = !0,
            Q && (s = Js,
            s !== null)))
                throw s;
            t.memoizedState = d,
            t.baseState = y,
            t.baseQueue = C,
            l.lastRenderedState = d
        }
        return c === null && (l.lanes = 0),
        [t.memoizedState, l.dispatch]
    }
    function Ru(t) {
        var n = le()
          , s = n.queue;
        if (s === null)
            throw Error(r(311));
        s.lastRenderedReducer = t;
        var l = s.dispatch
          , c = s.pending
          , d = n.memoizedState;
        if (c !== null) {
            s.pending = null;
            var y = c = c.next;
            do
                d = t(d, y.action),
                y = y.next;
            while (y !== c);
            Ie(d, n.memoizedState) || (ue = !0),
            n.memoizedState = d,
            n.baseQueue === null && (n.baseState = d),
            s.lastRenderedState = d
        }
        return [d, l]
    }
    function wp(t, n, s) {
        var l = Ct
          , c = le()
          , d = _t;
        if (d) {
            if (s === void 0)
                throw Error(r(407));
            s = s()
        } else
            s = n();
        var y = !Ie((qt || c).memoizedState, s);
        if (y && (c.memoizedState = s,
        ue = !0),
        c = c.queue,
        _u(Ep.bind(null, l, c, t), [t]),
        c.getSnapshot !== n || y || ce !== null && ce.memoizedState.tag & 1) {
            if (l.flags |= 2048,
            sa(9, {
                destroy: void 0
            }, Ap.bind(null, l, c, s, n), null),
            Yt === null)
                throw Error(r(349));
            d || (ni & 127) !== 0 || Tp(l, n, s)
        }
        return s
    }
    function Tp(t, n, s) {
        t.flags |= 16384,
        t = {
            getSnapshot: n,
            value: s
        },
        n = Ct.updateQueue,
        n === null ? (n = ql(),
        Ct.updateQueue = n,
        n.stores = [t]) : (s = n.stores,
        s === null ? n.stores = [t] : s.push(t))
    }
    function Ap(t, n, s, l) {
        n.value = s,
        n.getSnapshot = l,
        Cp(n) && Mp(t)
    }
    function Ep(t, n, s) {
        return s(function() {
            Cp(n) && Mp(t)
        })
    }
    function Cp(t) {
        var n = t.getSnapshot;
        t = t.value;
        try {
            var s = n();
            return !Ie(t, s)
        } catch {
            return !0
        }
    }
    function Mp(t) {
        var n = rs(t, 2);
        n !== null && Qe(n, t, 2)
    }
    function ju(t) {
        var n = ze();
        if (typeof t == "function") {
            var s = t;
            if (t = s(),
            ps) {
                on(!0);
                try {
                    s()
                } finally {
                    on(!1)
                }
            }
        }
        return n.memoizedState = n.baseState = t,
        n.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ii,
            lastRenderedState: t
        },
        n
    }
    function Np(t, n, s, l) {
        return t.baseState = s,
        Du(t, qt, typeof l == "function" ? l : ii)
    }
    function cT(t, n, s, l, c) {
        if (Ql(t))
            throw Error(r(485));
        if (t = n.action,
        t !== null) {
            var d = {
                payload: c,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(y) {
                    d.listeners.push(y)
                }
            };
            z.T !== null ? s(!0) : d.isTransition = !1,
            l(d),
            s = n.pending,
            s === null ? (d.next = n.pending = d,
            Dp(n, d)) : (d.next = s.next,
            n.pending = s.next = d)
        }
    }
    function Dp(t, n) {
        var s = n.action
          , l = n.payload
          , c = t.state;
        if (n.isTransition) {
            var d = z.T
              , y = {};
            z.T = y;
            try {
                var b = s(c, l)
                  , C = z.S;
                C !== null && C(y, b),
                Rp(t, n, b)
            } catch (U) {
                Ou(t, n, U)
            } finally {
                d !== null && y.types !== null && (d.types = y.types),
                z.T = d
            }
        } else
            try {
                d = s(c, l),
                Rp(t, n, d)
            } catch (U) {
                Ou(t, n, U)
            }
    }
    function Rp(t, n, s) {
        s !== null && typeof s == "object" && typeof s.then == "function" ? s.then(function(l) {
            jp(t, n, l)
        }, function(l) {
            return Ou(t, n, l)
        }) : jp(t, n, s)
    }
    function jp(t, n, s) {
        n.status = "fulfilled",
        n.value = s,
        Op(n),
        t.state = s,
        n = t.pending,
        n !== null && (s = n.next,
        s === n ? t.pending = null : (s = s.next,
        n.next = s,
        Dp(t, s)))
    }
    function Ou(t, n, s) {
        var l = t.pending;
        if (t.pending = null,
        l !== null) {
            l = l.next;
            do
                n.status = "rejected",
                n.reason = s,
                Op(n),
                n = n.next;
            while (n !== l)
        }
        t.action = null
    }
    function Op(t) {
        t = t.listeners;
        for (var n = 0; n < t.length; n++)
            (0,
            t[n])()
    }
    function _p(t, n) {
        return n
    }
    function Vp(t, n) {
        if (_t) {
            var s = Yt.formState;
            if (s !== null) {
                t: {
                    var l = Ct;
                    if (_t) {
                        if (Kt) {
                            e: {
                                for (var c = Kt, d = pn; c.nodeType !== 8; ) {
                                    if (!d) {
                                        c = null;
                                        break e
                                    }
                                    if (c = gn(c.nextSibling),
                                    c === null) {
                                        c = null;
                                        break e
                                    }
                                }
                                d = c.data,
                                c = d === "F!" || d === "F" ? c : null
                            }
                            if (c) {
                                Kt = gn(c.nextSibling),
                                l = c.data === "F!";
                                break t
                            }
                        }
                        Ti(l)
                    }
                    l = !1
                }
                l && (n = s[0])
            }
        }
        return s = ze(),
        s.memoizedState = s.baseState = n,
        l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: _p,
            lastRenderedState: n
        },
        s.queue = l,
        s = $p.bind(null, Ct, l),
        l.dispatch = s,
        l = ju(!1),
        d = ku.bind(null, Ct, !1, l.queue),
        l = ze(),
        c = {
            state: n,
            dispatch: null,
            action: t,
            pending: null
        },
        l.queue = c,
        s = cT.bind(null, Ct, c, d, s),
        c.dispatch = s,
        l.memoizedState = t,
        [n, s, !1]
    }
    function zp(t) {
        var n = le();
        return Lp(n, qt, t)
    }
    function Lp(t, n, s) {
        if (n = Du(t, n, _p)[0],
        t = Gl(ii)[0],
        typeof n == "object" && n !== null && typeof n.then == "function")
            try {
                var l = ar(n)
            } catch (y) {
                throw y === $s ? Vl : y
            }
        else
            l = n;
        n = le();
        var c = n.queue
          , d = c.dispatch;
        return s !== n.memoizedState && (Ct.flags |= 2048,
        sa(9, {
            destroy: void 0
        }, uT.bind(null, c, s), null)),
        [l, d, t]
    }
    function uT(t, n) {
        t.action = n
    }
    function Up(t) {
        var n = le()
          , s = qt;
        if (s !== null)
            return Lp(n, s, t);
        le(),
        n = n.memoizedState,
        s = le();
        var l = s.queue.dispatch;
        return s.memoizedState = t,
        [n, l, !1]
    }
    function sa(t, n, s, l) {
        return t = {
            tag: t,
            create: s,
            deps: l,
            inst: n,
            next: null
        },
        n = Ct.updateQueue,
        n === null && (n = ql(),
        Ct.updateQueue = n),
        s = n.lastEffect,
        s === null ? n.lastEffect = t.next = t : (l = s.next,
        s.next = t,
        t.next = l,
        n.lastEffect = t),
        t
    }
    function kp() {
        return le().memoizedState
    }
    function Yl(t, n, s, l) {
        var c = ze();
        Ct.flags |= t,
        c.memoizedState = sa(1 | n, {
            destroy: void 0
        }, s, l === void 0 ? null : l)
    }
    function Xl(t, n, s, l) {
        var c = le();
        l = l === void 0 ? null : l;
        var d = c.memoizedState.inst;
        qt !== null && l !== null && Tu(l, qt.memoizedState.deps) ? c.memoizedState = sa(n, d, s, l) : (Ct.flags |= t,
        c.memoizedState = sa(1 | n, d, s, l))
    }
    function Bp(t, n) {
        Yl(8390656, 8, t, n)
    }
    function _u(t, n) {
        Xl(2048, 8, t, n)
    }
    function fT(t) {
        Ct.flags |= 4;
        var n = Ct.updateQueue;
        if (n === null)
            n = ql(),
            Ct.updateQueue = n,
            n.events = [t];
        else {
            var s = n.events;
            s === null ? n.events = [t] : s.push(t)
        }
    }
    function Pp(t) {
        var n = le().memoizedState;
        return fT({
            ref: n,
            nextImpl: t
        }),
        function() {
            if ((Bt & 2) !== 0)
                throw Error(r(440));
            return n.impl.apply(void 0, arguments)
        }
    }
    function Hp(t, n) {
        return Xl(4, 2, t, n)
    }
    function qp(t, n) {
        return Xl(4, 4, t, n)
    }
    function Fp(t, n) {
        if (typeof n == "function") {
            t = t();
            var s = n(t);
            return function() {
                typeof s == "function" ? s() : n(null)
            }
        }
        if (n != null)
            return t = t(),
            n.current = t,
            function() {
                n.current = null
            }
    }
    function Gp(t, n, s) {
        s = s != null ? s.concat([t]) : null,
        Xl(4, 4, Fp.bind(null, n, t), s)
    }
    function Vu() {}
    function Yp(t, n) {
        var s = le();
        n = n === void 0 ? null : n;
        var l = s.memoizedState;
        return n !== null && Tu(n, l[1]) ? l[0] : (s.memoizedState = [t, n],
        t)
    }
    function Xp(t, n) {
        var s = le();
        n = n === void 0 ? null : n;
        var l = s.memoizedState;
        if (n !== null && Tu(n, l[1]))
            return l[0];
        if (l = t(),
        ps) {
            on(!0);
            try {
                t()
            } finally {
                on(!1)
            }
        }
        return s.memoizedState = [l, n],
        l
    }
    function zu(t, n, s) {
        return s === void 0 || (ni & 1073741824) !== 0 && (jt & 261930) === 0 ? t.memoizedState = n : (t.memoizedState = s,
        t = Qy(),
        Ct.lanes |= t,
        Oi |= t,
        s)
    }
    function Qp(t, n, s, l) {
        return Ie(s, n) ? s : ea.current !== null ? (t = zu(t, s, l),
        Ie(t, n) || (ue = !0),
        t) : (ni & 42) === 0 || (ni & 1073741824) !== 0 && (jt & 261930) === 0 ? (ue = !0,
        t.memoizedState = s) : (t = Qy(),
        Ct.lanes |= t,
        Oi |= t,
        n)
    }
    function Kp(t, n, s, l, c) {
        var d = q.p;
        q.p = d !== 0 && 8 > d ? d : 8;
        var y = z.T
          , b = {};
        z.T = b,
        ku(t, !1, n, s);
        try {
            var C = c()
              , U = z.S;
            if (U !== null && U(b, C),
            C !== null && typeof C == "object" && typeof C.then == "function") {
                var Q = rT(C, l);
                rr(t, n, Q, nn(t))
            } else
                rr(t, n, l, nn(t))
        } catch (W) {
            rr(t, n, {
                then: function() {},
                status: "rejected",
                reason: W
            }, nn())
        } finally {
            q.p = d,
            y !== null && b.types !== null && (y.types = b.types),
            z.T = y
        }
    }
    function dT() {}
    function Lu(t, n, s, l) {
        if (t.tag !== 5)
            throw Error(r(476));
        var c = Zp(t).queue;
        Kp(t, c, n, k, s === null ? dT : function() {
            return Ip(t),
            s(l)
        }
        )
    }
    function Zp(t) {
        var n = t.memoizedState;
        if (n !== null)
            return n;
        n = {
            memoizedState: k,
            baseState: k,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ii,
                lastRenderedState: k
            },
            next: null
        };
        var s = {};
        return n.next = {
            memoizedState: s,
            baseState: s,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ii,
                lastRenderedState: s
            },
            next: null
        },
        t.memoizedState = n,
        t = t.alternate,
        t !== null && (t.memoizedState = n),
        n
    }
    function Ip(t) {
        var n = Zp(t);
        n.next === null && (n = t.alternate.memoizedState),
        rr(t, n.next.queue, {}, nn())
    }
    function Uu() {
        return Me(Tr)
    }
    function Wp() {
        return le().memoizedState
    }
    function Jp() {
        return le().memoizedState
    }
    function hT(t) {
        for (var n = t.return; n !== null; ) {
            switch (n.tag) {
            case 24:
            case 3:
                var s = nn();
                t = Ci(s);
                var l = Mi(n, t, s);
                l !== null && (Qe(l, n, s),
                er(l, n, s)),
                n = {
                    cache: du()
                },
                t.payload = n;
                return
            }
            n = n.return
        }
    }
    function mT(t, n, s) {
        var l = nn();
        s = {
            lane: l,
            revertLane: 0,
            gesture: null,
            action: s,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Ql(t) ? ty(n, s) : (s = eu(t, n, s, l),
        s !== null && (Qe(s, t, l),
        ey(s, n, l)))
    }
    function $p(t, n, s) {
        var l = nn();
        rr(t, n, s, l)
    }
    function rr(t, n, s, l) {
        var c = {
            lane: l,
            revertLane: 0,
            gesture: null,
            action: s,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Ql(t))
            ty(n, c);
        else {
            var d = t.alternate;
            if (t.lanes === 0 && (d === null || d.lanes === 0) && (d = n.lastRenderedReducer,
            d !== null))
                try {
                    var y = n.lastRenderedState
                      , b = d(y, s);
                    if (c.hasEagerState = !0,
                    c.eagerState = b,
                    Ie(b, y))
                        return Ml(t, n, c, 0),
                        Yt === null && Cl(),
                        !1
                } catch {}
            if (s = eu(t, n, c, l),
            s !== null)
                return Qe(s, t, l),
                ey(s, n, l),
                !0
        }
        return !1
    }
    function ku(t, n, s, l) {
        if (l = {
            lane: 2,
            revertLane: gf(),
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Ql(t)) {
            if (n)
                throw Error(r(479))
        } else
            n = eu(t, s, l, 2),
            n !== null && Qe(n, t, 2)
    }
    function Ql(t) {
        var n = t.alternate;
        return t === Ct || n !== null && n === Ct
    }
    function ty(t, n) {
        na = Pl = !0;
        var s = t.pending;
        s === null ? n.next = n : (n.next = s.next,
        s.next = n),
        t.pending = n
    }
    function ey(t, n, s) {
        if ((s & 4194048) !== 0) {
            var l = n.lanes;
            l &= t.pendingLanes,
            s |= l,
            n.lanes = s,
            rm(t, s)
        }
    }
    var lr = {
        readContext: Me,
        use: Fl,
        useCallback: ie,
        useContext: ie,
        useEffect: ie,
        useImperativeHandle: ie,
        useLayoutEffect: ie,
        useInsertionEffect: ie,
        useMemo: ie,
        useReducer: ie,
        useRef: ie,
        useState: ie,
        useDebugValue: ie,
        useDeferredValue: ie,
        useTransition: ie,
        useSyncExternalStore: ie,
        useId: ie,
        useHostTransitionStatus: ie,
        useFormState: ie,
        useActionState: ie,
        useOptimistic: ie,
        useMemoCache: ie,
        useCacheRefresh: ie
    };
    lr.useEffectEvent = ie;
    var ny = {
        readContext: Me,
        use: Fl,
        useCallback: function(t, n) {
            return ze().memoizedState = [t, n === void 0 ? null : n],
            t
        },
        useContext: Me,
        useEffect: Bp,
        useImperativeHandle: function(t, n, s) {
            s = s != null ? s.concat([t]) : null,
            Yl(4194308, 4, Fp.bind(null, n, t), s)
        },
        useLayoutEffect: function(t, n) {
            return Yl(4194308, 4, t, n)
        },
        useInsertionEffect: function(t, n) {
            Yl(4, 2, t, n)
        },
        useMemo: function(t, n) {
            var s = ze();
            n = n === void 0 ? null : n;
            var l = t();
            if (ps) {
                on(!0);
                try {
                    t()
                } finally {
                    on(!1)
                }
            }
            return s.memoizedState = [l, n],
            l
        },
        useReducer: function(t, n, s) {
            var l = ze();
            if (s !== void 0) {
                var c = s(n);
                if (ps) {
                    on(!0);
                    try {
                        s(n)
                    } finally {
                        on(!1)
                    }
                }
            } else
                c = n;
            return l.memoizedState = l.baseState = c,
            t = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: c
            },
            l.queue = t,
            t = t.dispatch = mT.bind(null, Ct, t),
            [l.memoizedState, t]
        },
        useRef: function(t) {
            var n = ze();
            return t = {
                current: t
            },
            n.memoizedState = t
        },
        useState: function(t) {
            t = ju(t);
            var n = t.queue
              , s = $p.bind(null, Ct, n);
            return n.dispatch = s,
            [t.memoizedState, s]
        },
        useDebugValue: Vu,
        useDeferredValue: function(t, n) {
            var s = ze();
            return zu(s, t, n)
        },
        useTransition: function() {
            var t = ju(!1);
            return t = Kp.bind(null, Ct, t.queue, !0, !1),
            ze().memoizedState = t,
            [!1, t]
        },
        useSyncExternalStore: function(t, n, s) {
            var l = Ct
              , c = ze();
            if (_t) {
                if (s === void 0)
                    throw Error(r(407));
                s = s()
            } else {
                if (s = n(),
                Yt === null)
                    throw Error(r(349));
                (jt & 127) !== 0 || Tp(l, n, s)
            }
            c.memoizedState = s;
            var d = {
                value: s,
                getSnapshot: n
            };
            return c.queue = d,
            Bp(Ep.bind(null, l, d, t), [t]),
            l.flags |= 2048,
            sa(9, {
                destroy: void 0
            }, Ap.bind(null, l, d, s, n), null),
            s
        },
        useId: function() {
            var t = ze()
              , n = Yt.identifierPrefix;
            if (_t) {
                var s = Un
                  , l = Ln;
                s = (l & ~(1 << 32 - Ve(l) - 1)).toString(32) + s,
                n = "_" + n + "R_" + s,
                s = Hl++,
                0 < s && (n += "H" + s.toString(32)),
                n += "_"
            } else
                s = lT++,
                n = "_" + n + "r_" + s.toString(32) + "_";
            return t.memoizedState = n
        },
        useHostTransitionStatus: Uu,
        useFormState: Vp,
        useActionState: Vp,
        useOptimistic: function(t) {
            var n = ze();
            n.memoizedState = n.baseState = t;
            var s = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return n.queue = s,
            n = ku.bind(null, Ct, !0, s),
            s.dispatch = n,
            [t, n]
        },
        useMemoCache: Nu,
        useCacheRefresh: function() {
            return ze().memoizedState = hT.bind(null, Ct)
        },
        useEffectEvent: function(t) {
            var n = ze()
              , s = {
                impl: t
            };
            return n.memoizedState = s,
            function() {
                if ((Bt & 2) !== 0)
                    throw Error(r(440));
                return s.impl.apply(void 0, arguments)
            }
        }
    }
      , Bu = {
        readContext: Me,
        use: Fl,
        useCallback: Yp,
        useContext: Me,
        useEffect: _u,
        useImperativeHandle: Gp,
        useInsertionEffect: Hp,
        useLayoutEffect: qp,
        useMemo: Xp,
        useReducer: Gl,
        useRef: kp,
        useState: function() {
            return Gl(ii)
        },
        useDebugValue: Vu,
        useDeferredValue: function(t, n) {
            var s = le();
            return Qp(s, qt.memoizedState, t, n)
        },
        useTransition: function() {
            var t = Gl(ii)[0]
              , n = le().memoizedState;
            return [typeof t == "boolean" ? t : ar(t), n]
        },
        useSyncExternalStore: wp,
        useId: Wp,
        useHostTransitionStatus: Uu,
        useFormState: zp,
        useActionState: zp,
        useOptimistic: function(t, n) {
            var s = le();
            return Np(s, qt, t, n)
        },
        useMemoCache: Nu,
        useCacheRefresh: Jp
    };
    Bu.useEffectEvent = Pp;
    var iy = {
        readContext: Me,
        use: Fl,
        useCallback: Yp,
        useContext: Me,
        useEffect: _u,
        useImperativeHandle: Gp,
        useInsertionEffect: Hp,
        useLayoutEffect: qp,
        useMemo: Xp,
        useReducer: Ru,
        useRef: kp,
        useState: function() {
            return Ru(ii)
        },
        useDebugValue: Vu,
        useDeferredValue: function(t, n) {
            var s = le();
            return qt === null ? zu(s, t, n) : Qp(s, qt.memoizedState, t, n)
        },
        useTransition: function() {
            var t = Ru(ii)[0]
              , n = le().memoizedState;
            return [typeof t == "boolean" ? t : ar(t), n]
        },
        useSyncExternalStore: wp,
        useId: Wp,
        useHostTransitionStatus: Uu,
        useFormState: Up,
        useActionState: Up,
        useOptimistic: function(t, n) {
            var s = le();
            return qt !== null ? Np(s, qt, t, n) : (s.baseState = t,
            [t, s.queue.dispatch])
        },
        useMemoCache: Nu,
        useCacheRefresh: Jp
    };
    iy.useEffectEvent = Pp;
    function Pu(t, n, s, l) {
        n = t.memoizedState,
        s = s(l, n),
        s = s == null ? n : x({}, n, s),
        t.memoizedState = s,
        t.lanes === 0 && (t.updateQueue.baseState = s)
    }
    var Hu = {
        enqueueSetState: function(t, n, s) {
            t = t._reactInternals;
            var l = nn()
              , c = Ci(l);
            c.payload = n,
            s != null && (c.callback = s),
            n = Mi(t, c, l),
            n !== null && (Qe(n, t, l),
            er(n, t, l))
        },
        enqueueReplaceState: function(t, n, s) {
            t = t._reactInternals;
            var l = nn()
              , c = Ci(l);
            c.tag = 1,
            c.payload = n,
            s != null && (c.callback = s),
            n = Mi(t, c, l),
            n !== null && (Qe(n, t, l),
            er(n, t, l))
        },
        enqueueForceUpdate: function(t, n) {
            t = t._reactInternals;
            var s = nn()
              , l = Ci(s);
            l.tag = 2,
            n != null && (l.callback = n),
            n = Mi(t, l, s),
            n !== null && (Qe(n, t, s),
            er(n, t, s))
        }
    };
    function sy(t, n, s, l, c, d, y) {
        return t = t.stateNode,
        typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, d, y) : n.prototype && n.prototype.isPureReactComponent ? !Qa(s, l) || !Qa(c, d) : !0
    }
    function ay(t, n, s, l) {
        t = n.state,
        typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(s, l),
        typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(s, l),
        n.state !== t && Hu.enqueueReplaceState(n, n.state, null)
    }
    function ys(t, n) {
        var s = n;
        if ("ref"in n) {
            s = {};
            for (var l in n)
                l !== "ref" && (s[l] = n[l])
        }
        if (t = t.defaultProps) {
            s === n && (s = x({}, s));
            for (var c in t)
                s[c] === void 0 && (s[c] = t[c])
        }
        return s
    }
    function ry(t) {
        El(t)
    }
    function ly(t) {
        console.error(t)
    }
    function oy(t) {
        El(t)
    }
    function Kl(t, n) {
        try {
            var s = t.onUncaughtError;
            s(n.value, {
                componentStack: n.stack
            })
        } catch (l) {
            setTimeout(function() {
                throw l
            })
        }
    }
    function cy(t, n, s) {
        try {
            var l = t.onCaughtError;
            l(s.value, {
                componentStack: s.stack,
                errorBoundary: n.tag === 1 ? n.stateNode : null
            })
        } catch (c) {
            setTimeout(function() {
                throw c
            })
        }
    }
    function qu(t, n, s) {
        return s = Ci(s),
        s.tag = 3,
        s.payload = {
            element: null
        },
        s.callback = function() {
            Kl(t, n)
        }
        ,
        s
    }
    function uy(t) {
        return t = Ci(t),
        t.tag = 3,
        t
    }
    function fy(t, n, s, l) {
        var c = s.type.getDerivedStateFromError;
        if (typeof c == "function") {
            var d = l.value;
            t.payload = function() {
                return c(d)
            }
            ,
            t.callback = function() {
                cy(n, s, l)
            }
        }
        var y = s.stateNode;
        y !== null && typeof y.componentDidCatch == "function" && (t.callback = function() {
            cy(n, s, l),
            typeof c != "function" && (_i === null ? _i = new Set([this]) : _i.add(this));
            var b = l.stack;
            this.componentDidCatch(l.value, {
                componentStack: b !== null ? b : ""
            })
        }
        )
    }
    function pT(t, n, s, l, c) {
        if (s.flags |= 32768,
        l !== null && typeof l == "object" && typeof l.then == "function") {
            if (n = s.alternate,
            n !== null && Is(n, s, c, !0),
            s = Je.current,
            s !== null) {
                switch (s.tag) {
                case 31:
                case 13:
                    return yn === null ? ro() : s.alternate === null && se === 0 && (se = 3),
                    s.flags &= -257,
                    s.flags |= 65536,
                    s.lanes = c,
                    l === zl ? s.flags |= 16384 : (n = s.updateQueue,
                    n === null ? s.updateQueue = new Set([l]) : n.add(l),
                    mf(t, l, c)),
                    !1;
                case 22:
                    return s.flags |= 65536,
                    l === zl ? s.flags |= 16384 : (n = s.updateQueue,
                    n === null ? (n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l])
                    },
                    s.updateQueue = n) : (s = n.retryQueue,
                    s === null ? n.retryQueue = new Set([l]) : s.add(l)),
                    mf(t, l, c)),
                    !1
                }
                throw Error(r(435, s.tag))
            }
            return mf(t, l, c),
            ro(),
            !1
        }
        if (_t)
            return n = Je.current,
            n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            n.flags |= 65536,
            n.lanes = c,
            l !== lu && (t = Error(r(422), {
                cause: l
            }),
            Ia(dn(t, s)))) : (l !== lu && (n = Error(r(423), {
                cause: l
            }),
            Ia(dn(n, s))),
            t = t.current.alternate,
            t.flags |= 65536,
            c &= -c,
            t.lanes |= c,
            l = dn(l, s),
            c = qu(t.stateNode, l, c),
            vu(t, c),
            se !== 4 && (se = 2)),
            !1;
        var d = Error(r(520), {
            cause: l
        });
        if (d = dn(d, s),
        pr === null ? pr = [d] : pr.push(d),
        se !== 4 && (se = 2),
        n === null)
            return !0;
        l = dn(l, s),
        s = n;
        do {
            switch (s.tag) {
            case 3:
                return s.flags |= 65536,
                t = c & -c,
                s.lanes |= t,
                t = qu(s.stateNode, l, t),
                vu(s, t),
                !1;
            case 1:
                if (n = s.type,
                d = s.stateNode,
                (s.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (_i === null || !_i.has(d))))
                    return s.flags |= 65536,
                    c &= -c,
                    s.lanes |= c,
                    c = uy(c),
                    fy(c, t, s, l),
                    vu(s, c),
                    !1
            }
            s = s.return
        } while (s !== null);
        return !1
    }
    var Fu = Error(r(461))
      , ue = !1;
    function Ne(t, n, s, l) {
        n.child = t === null ? pp(n, null, s, l) : ms(n, t.child, s, l)
    }
    function dy(t, n, s, l, c) {
        s = s.render;
        var d = n.ref;
        if ("ref"in l) {
            var y = {};
            for (var b in l)
                b !== "ref" && (y[b] = l[b])
        } else
            y = l;
        return us(n),
        l = Au(t, n, s, y, d, c),
        b = Eu(),
        t !== null && !ue ? (Cu(t, n, c),
        si(t, n, c)) : (_t && b && au(n),
        n.flags |= 1,
        Ne(t, n, l, c),
        n.child)
    }
    function hy(t, n, s, l, c) {
        if (t === null) {
            var d = s.type;
            return typeof d == "function" && !nu(d) && d.defaultProps === void 0 && s.compare === null ? (n.tag = 15,
            n.type = d,
            my(t, n, d, l, c)) : (t = Dl(s.type, null, l, n, n.mode, c),
            t.ref = n.ref,
            t.return = n,
            n.child = t)
        }
        if (d = t.child,
        !Wu(t, c)) {
            var y = d.memoizedProps;
            if (s = s.compare,
            s = s !== null ? s : Qa,
            s(y, l) && t.ref === n.ref)
                return si(t, n, c)
        }
        return n.flags |= 1,
        t = Jn(d, l),
        t.ref = n.ref,
        t.return = n,
        n.child = t
    }
    function my(t, n, s, l, c) {
        if (t !== null) {
            var d = t.memoizedProps;
            if (Qa(d, l) && t.ref === n.ref)
                if (ue = !1,
                n.pendingProps = l = d,
                Wu(t, c))
                    (t.flags & 131072) !== 0 && (ue = !0);
                else
                    return n.lanes = t.lanes,
                    si(t, n, c)
        }
        return Gu(t, n, s, l, c)
    }
    function py(t, n, s, l) {
        var c = l.children
          , d = t !== null ? t.memoizedState : null;
        if (t === null && n.stateNode === null && (n.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        l.mode === "hidden") {
            if ((n.flags & 128) !== 0) {
                if (d = d !== null ? d.baseLanes | s : s,
                t !== null) {
                    for (l = n.child = t.child,
                    c = 0; l !== null; )
                        c = c | l.lanes | l.childLanes,
                        l = l.sibling;
                    l = c & ~d
                } else
                    l = 0,
                    n.child = null;
                return yy(t, n, d, s, l)
            }
            if ((s & 536870912) !== 0)
                n.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                t !== null && _l(n, d !== null ? d.cachePool : null),
                d !== null ? vp(n, d) : bu(),
                xp(n);
            else
                return l = n.lanes = 536870912,
                yy(t, n, d !== null ? d.baseLanes | s : s, s, l)
        } else
            d !== null ? (_l(n, d.cachePool),
            vp(n, d),
            Di(),
            n.memoizedState = null) : (t !== null && _l(n, null),
            bu(),
            Di());
        return Ne(t, n, c, s),
        n.child
    }
    function or(t, n) {
        return t !== null && t.tag === 22 || n.stateNode !== null || (n.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        n.sibling
    }
    function yy(t, n, s, l, c) {
        var d = mu();
        return d = d === null ? null : {
            parent: oe._currentValue,
            pool: d
        },
        n.memoizedState = {
            baseLanes: s,
            cachePool: d
        },
        t !== null && _l(n, null),
        bu(),
        xp(n),
        t !== null && Is(t, n, l, !0),
        n.childLanes = c,
        null
    }
    function Zl(t, n) {
        return n = Wl({
            mode: n.mode,
            children: n.children
        }, t.mode),
        n.ref = t.ref,
        t.child = n,
        n.return = t,
        n
    }
    function gy(t, n, s) {
        return ms(n, t.child, null, s),
        t = Zl(n, n.pendingProps),
        t.flags |= 2,
        $e(n),
        n.memoizedState = null,
        t
    }
    function yT(t, n, s) {
        var l = n.pendingProps
          , c = (n.flags & 128) !== 0;
        if (n.flags &= -129,
        t === null) {
            if (_t) {
                if (l.mode === "hidden")
                    return t = Zl(n, l),
                    n.lanes = 536870912,
                    or(null, t);
                if (wu(n),
                (t = Kt) ? (t = Dg(t, pn),
                t = t !== null && t.data === "&" ? t : null,
                t !== null && (n.memoizedState = {
                    dehydrated: t,
                    treeContext: Si !== null ? {
                        id: Ln,
                        overflow: Un
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                s = tp(t),
                s.return = n,
                n.child = s,
                Ce = n,
                Kt = null)) : t = null,
                t === null)
                    throw Ti(n);
                return n.lanes = 536870912,
                null
            }
            return Zl(n, l)
        }
        var d = t.memoizedState;
        if (d !== null) {
            var y = d.dehydrated;
            if (wu(n),
            c)
                if (n.flags & 256)
                    n.flags &= -257,
                    n = gy(t, n, s);
                else if (n.memoizedState !== null)
                    n.child = t.child,
                    n.flags |= 128,
                    n = null;
                else
                    throw Error(r(558));
            else if (ue || Is(t, n, s, !1),
            c = (s & t.childLanes) !== 0,
            ue || c) {
                if (l = Yt,
                l !== null && (y = lm(l, s),
                y !== 0 && y !== d.retryLane))
                    throw d.retryLane = y,
                    rs(t, y),
                    Qe(l, t, y),
                    Fu;
                ro(),
                n = gy(t, n, s)
            } else
                t = d.treeContext,
                Kt = gn(y.nextSibling),
                Ce = n,
                _t = !0,
                wi = null,
                pn = !1,
                t !== null && ip(n, t),
                n = Zl(n, l),
                n.flags |= 4096;
            return n
        }
        return t = Jn(t.child, {
            mode: l.mode,
            children: l.children
        }),
        t.ref = n.ref,
        n.child = t,
        t.return = n,
        t
    }
    function Il(t, n) {
        var s = n.ref;
        if (s === null)
            t !== null && t.ref !== null && (n.flags |= 4194816);
        else {
            if (typeof s != "function" && typeof s != "object")
                throw Error(r(284));
            (t === null || t.ref !== s) && (n.flags |= 4194816)
        }
    }
    function Gu(t, n, s, l, c) {
        return us(n),
        s = Au(t, n, s, l, void 0, c),
        l = Eu(),
        t !== null && !ue ? (Cu(t, n, c),
        si(t, n, c)) : (_t && l && au(n),
        n.flags |= 1,
        Ne(t, n, s, c),
        n.child)
    }
    function vy(t, n, s, l, c, d) {
        return us(n),
        n.updateQueue = null,
        s = Sp(n, l, s, c),
        bp(t),
        l = Eu(),
        t !== null && !ue ? (Cu(t, n, d),
        si(t, n, d)) : (_t && l && au(n),
        n.flags |= 1,
        Ne(t, n, s, d),
        n.child)
    }
    function xy(t, n, s, l, c) {
        if (us(n),
        n.stateNode === null) {
            var d = Xs
              , y = s.contextType;
            typeof y == "object" && y !== null && (d = Me(y)),
            d = new s(l,d),
            n.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null,
            d.updater = Hu,
            n.stateNode = d,
            d._reactInternals = n,
            d = n.stateNode,
            d.props = l,
            d.state = n.memoizedState,
            d.refs = {},
            yu(n),
            y = s.contextType,
            d.context = typeof y == "object" && y !== null ? Me(y) : Xs,
            d.state = n.memoizedState,
            y = s.getDerivedStateFromProps,
            typeof y == "function" && (Pu(n, s, y, l),
            d.state = n.memoizedState),
            typeof s.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (y = d.state,
            typeof d.componentWillMount == "function" && d.componentWillMount(),
            typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(),
            y !== d.state && Hu.enqueueReplaceState(d, d.state, null),
            ir(n, l, d, c),
            nr(),
            d.state = n.memoizedState),
            typeof d.componentDidMount == "function" && (n.flags |= 4194308),
            l = !0
        } else if (t === null) {
            d = n.stateNode;
            var b = n.memoizedProps
              , C = ys(s, b);
            d.props = C;
            var U = d.context
              , Q = s.contextType;
            y = Xs,
            typeof Q == "object" && Q !== null && (y = Me(Q));
            var W = s.getDerivedStateFromProps;
            Q = typeof W == "function" || typeof d.getSnapshotBeforeUpdate == "function",
            b = n.pendingProps !== b,
            Q || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (b || U !== y) && ay(n, d, l, y),
            Ei = !1;
            var P = n.memoizedState;
            d.state = P,
            ir(n, l, d, c),
            nr(),
            U = n.memoizedState,
            b || P !== U || Ei ? (typeof W == "function" && (Pu(n, s, W, l),
            U = n.memoizedState),
            (C = Ei || sy(n, s, C, l, P, U, y)) ? (Q || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(),
            typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()),
            typeof d.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308),
            n.memoizedProps = l,
            n.memoizedState = U),
            d.props = l,
            d.state = U,
            d.context = y,
            l = C) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308),
            l = !1)
        } else {
            d = n.stateNode,
            gu(t, n),
            y = n.memoizedProps,
            Q = ys(s, y),
            d.props = Q,
            W = n.pendingProps,
            P = d.context,
            U = s.contextType,
            C = Xs,
            typeof U == "object" && U !== null && (C = Me(U)),
            b = s.getDerivedStateFromProps,
            (U = typeof b == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (y !== W || P !== C) && ay(n, d, l, C),
            Ei = !1,
            P = n.memoizedState,
            d.state = P,
            ir(n, l, d, c),
            nr();
            var F = n.memoizedState;
            y !== W || P !== F || Ei || t !== null && t.dependencies !== null && jl(t.dependencies) ? (typeof b == "function" && (Pu(n, s, b, l),
            F = n.memoizedState),
            (Q = Ei || sy(n, s, Q, l, P, F, C) || t !== null && t.dependencies !== null && jl(t.dependencies)) ? (U || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(l, F, C),
            typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(l, F, C)),
            typeof d.componentDidUpdate == "function" && (n.flags |= 4),
            typeof d.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || y === t.memoizedProps && P === t.memoizedState || (n.flags |= 4),
            typeof d.getSnapshotBeforeUpdate != "function" || y === t.memoizedProps && P === t.memoizedState || (n.flags |= 1024),
            n.memoizedProps = l,
            n.memoizedState = F),
            d.props = l,
            d.state = F,
            d.context = C,
            l = Q) : (typeof d.componentDidUpdate != "function" || y === t.memoizedProps && P === t.memoizedState || (n.flags |= 4),
            typeof d.getSnapshotBeforeUpdate != "function" || y === t.memoizedProps && P === t.memoizedState || (n.flags |= 1024),
            l = !1)
        }
        return d = l,
        Il(t, n),
        l = (n.flags & 128) !== 0,
        d || l ? (d = n.stateNode,
        s = l && typeof s.getDerivedStateFromError != "function" ? null : d.render(),
        n.flags |= 1,
        t !== null && l ? (n.child = ms(n, t.child, null, c),
        n.child = ms(n, null, s, c)) : Ne(t, n, s, c),
        n.memoizedState = d.state,
        t = n.child) : t = si(t, n, c),
        t
    }
    function by(t, n, s, l) {
        return os(),
        n.flags |= 256,
        Ne(t, n, s, l),
        n.child
    }
    var Yu = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Xu(t) {
        return {
            baseLanes: t,
            cachePool: cp()
        }
    }
    function Qu(t, n, s) {
        return t = t !== null ? t.childLanes & ~s : 0,
        n && (t |= en),
        t
    }
    function Sy(t, n, s) {
        var l = n.pendingProps, c = !1, d = (n.flags & 128) !== 0, y;
        if ((y = d) || (y = t !== null && t.memoizedState === null ? !1 : (re.current & 2) !== 0),
        y && (c = !0,
        n.flags &= -129),
        y = (n.flags & 32) !== 0,
        n.flags &= -33,
        t === null) {
            if (_t) {
                if (c ? Ni(n) : Di(),
                (t = Kt) ? (t = Dg(t, pn),
                t = t !== null && t.data !== "&" ? t : null,
                t !== null && (n.memoizedState = {
                    dehydrated: t,
                    treeContext: Si !== null ? {
                        id: Ln,
                        overflow: Un
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                s = tp(t),
                s.return = n,
                n.child = s,
                Ce = n,
                Kt = null)) : t = null,
                t === null)
                    throw Ti(n);
                return Rf(t) ? n.lanes = 32 : n.lanes = 536870912,
                null
            }
            var b = l.children;
            return l = l.fallback,
            c ? (Di(),
            c = n.mode,
            b = Wl({
                mode: "hidden",
                children: b
            }, c),
            l = ls(l, c, s, null),
            b.return = n,
            l.return = n,
            b.sibling = l,
            n.child = b,
            l = n.child,
            l.memoizedState = Xu(s),
            l.childLanes = Qu(t, y, s),
            n.memoizedState = Yu,
            or(null, l)) : (Ni(n),
            Ku(n, b))
        }
        var C = t.memoizedState;
        if (C !== null && (b = C.dehydrated,
        b !== null)) {
            if (d)
                n.flags & 256 ? (Ni(n),
                n.flags &= -257,
                n = Zu(t, n, s)) : n.memoizedState !== null ? (Di(),
                n.child = t.child,
                n.flags |= 128,
                n = null) : (Di(),
                b = l.fallback,
                c = n.mode,
                l = Wl({
                    mode: "visible",
                    children: l.children
                }, c),
                b = ls(b, c, s, null),
                b.flags |= 2,
                l.return = n,
                b.return = n,
                l.sibling = b,
                n.child = l,
                ms(n, t.child, null, s),
                l = n.child,
                l.memoizedState = Xu(s),
                l.childLanes = Qu(t, y, s),
                n.memoizedState = Yu,
                n = or(null, l));
            else if (Ni(n),
            Rf(b)) {
                if (y = b.nextSibling && b.nextSibling.dataset,
                y)
                    var U = y.dgst;
                y = U,
                l = Error(r(419)),
                l.stack = "",
                l.digest = y,
                Ia({
                    value: l,
                    source: null,
                    stack: null
                }),
                n = Zu(t, n, s)
            } else if (ue || Is(t, n, s, !1),
            y = (s & t.childLanes) !== 0,
            ue || y) {
                if (y = Yt,
                y !== null && (l = lm(y, s),
                l !== 0 && l !== C.retryLane))
                    throw C.retryLane = l,
                    rs(t, l),
                    Qe(y, t, l),
                    Fu;
                Df(b) || ro(),
                n = Zu(t, n, s)
            } else
                Df(b) ? (n.flags |= 192,
                n.child = t.child,
                n = null) : (t = C.treeContext,
                Kt = gn(b.nextSibling),
                Ce = n,
                _t = !0,
                wi = null,
                pn = !1,
                t !== null && ip(n, t),
                n = Ku(n, l.children),
                n.flags |= 4096);
            return n
        }
        return c ? (Di(),
        b = l.fallback,
        c = n.mode,
        C = t.child,
        U = C.sibling,
        l = Jn(C, {
            mode: "hidden",
            children: l.children
        }),
        l.subtreeFlags = C.subtreeFlags & 65011712,
        U !== null ? b = Jn(U, b) : (b = ls(b, c, s, null),
        b.flags |= 2),
        b.return = n,
        l.return = n,
        l.sibling = b,
        n.child = l,
        or(null, l),
        l = n.child,
        b = t.child.memoizedState,
        b === null ? b = Xu(s) : (c = b.cachePool,
        c !== null ? (C = oe._currentValue,
        c = c.parent !== C ? {
            parent: C,
            pool: C
        } : c) : c = cp(),
        b = {
            baseLanes: b.baseLanes | s,
            cachePool: c
        }),
        l.memoizedState = b,
        l.childLanes = Qu(t, y, s),
        n.memoizedState = Yu,
        or(t.child, l)) : (Ni(n),
        s = t.child,
        t = s.sibling,
        s = Jn(s, {
            mode: "visible",
            children: l.children
        }),
        s.return = n,
        s.sibling = null,
        t !== null && (y = n.deletions,
        y === null ? (n.deletions = [t],
        n.flags |= 16) : y.push(t)),
        n.child = s,
        n.memoizedState = null,
        s)
    }
    function Ku(t, n) {
        return n = Wl({
            mode: "visible",
            children: n
        }, t.mode),
        n.return = t,
        t.child = n
    }
    function Wl(t, n) {
        return t = We(22, t, null, n),
        t.lanes = 0,
        t
    }
    function Zu(t, n, s) {
        return ms(n, t.child, null, s),
        t = Ku(n, n.pendingProps.children),
        t.flags |= 2,
        n.memoizedState = null,
        t
    }
    function wy(t, n, s) {
        t.lanes |= n;
        var l = t.alternate;
        l !== null && (l.lanes |= n),
        uu(t.return, n, s)
    }
    function Iu(t, n, s, l, c, d) {
        var y = t.memoizedState;
        y === null ? t.memoizedState = {
            isBackwards: n,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: s,
            tailMode: c,
            treeForkCount: d
        } : (y.isBackwards = n,
        y.rendering = null,
        y.renderingStartTime = 0,
        y.last = l,
        y.tail = s,
        y.tailMode = c,
        y.treeForkCount = d)
    }
    function Ty(t, n, s) {
        var l = n.pendingProps
          , c = l.revealOrder
          , d = l.tail;
        l = l.children;
        var y = re.current
          , b = (y & 2) !== 0;
        if (b ? (y = y & 1 | 2,
        n.flags |= 128) : y &= 1,
        $(re, y),
        Ne(t, n, l, s),
        l = _t ? Za : 0,
        !b && t !== null && (t.flags & 128) !== 0)
            t: for (t = n.child; t !== null; ) {
                if (t.tag === 13)
                    t.memoizedState !== null && wy(t, s, n);
                else if (t.tag === 19)
                    wy(t, s, n);
                else if (t.child !== null) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === n)
                    break t;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === n)
                        break t;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        switch (c) {
        case "forwards":
            for (s = n.child,
            c = null; s !== null; )
                t = s.alternate,
                t !== null && Bl(t) === null && (c = s),
                s = s.sibling;
            s = c,
            s === null ? (c = n.child,
            n.child = null) : (c = s.sibling,
            s.sibling = null),
            Iu(n, !1, c, s, d, l);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (s = null,
            c = n.child,
            n.child = null; c !== null; ) {
                if (t = c.alternate,
                t !== null && Bl(t) === null) {
                    n.child = c;
                    break
                }
                t = c.sibling,
                c.sibling = s,
                s = c,
                c = t
            }
            Iu(n, !0, s, null, d, l);
            break;
        case "together":
            Iu(n, !1, null, null, void 0, l);
            break;
        default:
            n.memoizedState = null
        }
        return n.child
    }
    function si(t, n, s) {
        if (t !== null && (n.dependencies = t.dependencies),
        Oi |= n.lanes,
        (s & n.childLanes) === 0)
            if (t !== null) {
                if (Is(t, n, s, !1),
                (s & n.childLanes) === 0)
                    return null
            } else
                return null;
        if (t !== null && n.child !== t.child)
            throw Error(r(153));
        if (n.child !== null) {
            for (t = n.child,
            s = Jn(t, t.pendingProps),
            n.child = s,
            s.return = n; t.sibling !== null; )
                t = t.sibling,
                s = s.sibling = Jn(t, t.pendingProps),
                s.return = n;
            s.sibling = null
        }
        return n.child
    }
    function Wu(t, n) {
        return (t.lanes & n) !== 0 ? !0 : (t = t.dependencies,
        !!(t !== null && jl(t)))
    }
    function gT(t, n, s) {
        switch (n.tag) {
        case 3:
            Qt(n, n.stateNode.containerInfo),
            Ai(n, oe, t.memoizedState.cache),
            os();
            break;
        case 27:
        case 5:
            je(n);
            break;
        case 4:
            Qt(n, n.stateNode.containerInfo);
            break;
        case 10:
            Ai(n, n.type, n.memoizedProps.value);
            break;
        case 31:
            if (n.memoizedState !== null)
                return n.flags |= 128,
                wu(n),
                null;
            break;
        case 13:
            var l = n.memoizedState;
            if (l !== null)
                return l.dehydrated !== null ? (Ni(n),
                n.flags |= 128,
                null) : (s & n.child.childLanes) !== 0 ? Sy(t, n, s) : (Ni(n),
                t = si(t, n, s),
                t !== null ? t.sibling : null);
            Ni(n);
            break;
        case 19:
            var c = (t.flags & 128) !== 0;
            if (l = (s & n.childLanes) !== 0,
            l || (Is(t, n, s, !1),
            l = (s & n.childLanes) !== 0),
            c) {
                if (l)
                    return Ty(t, n, s);
                n.flags |= 128
            }
            if (c = n.memoizedState,
            c !== null && (c.rendering = null,
            c.tail = null,
            c.lastEffect = null),
            $(re, re.current),
            l)
                break;
            return null;
        case 22:
            return n.lanes = 0,
            py(t, n, s, n.pendingProps);
        case 24:
            Ai(n, oe, t.memoizedState.cache)
        }
        return si(t, n, s)
    }
    function Ay(t, n, s) {
        if (t !== null)
            if (t.memoizedProps !== n.pendingProps)
                ue = !0;
            else {
                if (!Wu(t, s) && (n.flags & 128) === 0)
                    return ue = !1,
                    gT(t, n, s);
                ue = (t.flags & 131072) !== 0
            }
        else
            ue = !1,
            _t && (n.flags & 1048576) !== 0 && np(n, Za, n.index);
        switch (n.lanes = 0,
        n.tag) {
        case 16:
            t: {
                var l = n.pendingProps;
                if (t = ds(n.elementType),
                n.type = t,
                typeof t == "function")
                    nu(t) ? (l = ys(t, l),
                    n.tag = 1,
                    n = xy(null, n, t, l, s)) : (n.tag = 0,
                    n = Gu(null, n, t, l, s));
                else {
                    if (t != null) {
                        var c = t.$$typeof;
                        if (c === G) {
                            n.tag = 11,
                            n = dy(null, n, t, l, s);
                            break t
                        } else if (c === Z) {
                            n.tag = 14,
                            n = hy(null, n, t, l, s);
                            break t
                        }
                    }
                    throw n = tt(t) || t,
                    Error(r(306, n, ""))
                }
            }
            return n;
        case 0:
            return Gu(t, n, n.type, n.pendingProps, s);
        case 1:
            return l = n.type,
            c = ys(l, n.pendingProps),
            xy(t, n, l, c, s);
        case 3:
            t: {
                if (Qt(n, n.stateNode.containerInfo),
                t === null)
                    throw Error(r(387));
                l = n.pendingProps;
                var d = n.memoizedState;
                c = d.element,
                gu(t, n),
                ir(n, l, null, s);
                var y = n.memoizedState;
                if (l = y.cache,
                Ai(n, oe, l),
                l !== d.cache && fu(n, [oe], s, !0),
                nr(),
                l = y.element,
                d.isDehydrated)
                    if (d = {
                        element: l,
                        isDehydrated: !1,
                        cache: y.cache
                    },
                    n.updateQueue.baseState = d,
                    n.memoizedState = d,
                    n.flags & 256) {
                        n = by(t, n, l, s);
                        break t
                    } else if (l !== c) {
                        c = dn(Error(r(424)), n),
                        Ia(c),
                        n = by(t, n, l, s);
                        break t
                    } else
                        for (t = n.stateNode.containerInfo,
                        t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t,
                        Kt = gn(t.firstChild),
                        Ce = n,
                        _t = !0,
                        wi = null,
                        pn = !0,
                        s = pp(n, null, l, s),
                        n.child = s; s; )
                            s.flags = s.flags & -3 | 4096,
                            s = s.sibling;
                else {
                    if (os(),
                    l === c) {
                        n = si(t, n, s);
                        break t
                    }
                    Ne(t, n, l, s)
                }
                n = n.child
            }
            return n;
        case 26:
            return Il(t, n),
            t === null ? (s = zg(n.type, null, n.pendingProps, null)) ? n.memoizedState = s : _t || (s = n.type,
            t = n.pendingProps,
            l = mo(At.current).createElement(s),
            l[Ee] = n,
            l[He] = t,
            De(l, s, t),
            we(l),
            n.stateNode = l) : n.memoizedState = zg(n.type, t.memoizedProps, n.pendingProps, t.memoizedState),
            null;
        case 27:
            return je(n),
            t === null && _t && (l = n.stateNode = Og(n.type, n.pendingProps, At.current),
            Ce = n,
            pn = !0,
            c = Kt,
            Ui(n.type) ? (jf = c,
            Kt = gn(l.firstChild)) : Kt = c),
            Ne(t, n, n.pendingProps.children, s),
            Il(t, n),
            t === null && (n.flags |= 4194304),
            n.child;
        case 5:
            return t === null && _t && ((c = l = Kt) && (l = QT(l, n.type, n.pendingProps, pn),
            l !== null ? (n.stateNode = l,
            Ce = n,
            Kt = gn(l.firstChild),
            pn = !1,
            c = !0) : c = !1),
            c || Ti(n)),
            je(n),
            c = n.type,
            d = n.pendingProps,
            y = t !== null ? t.memoizedProps : null,
            l = d.children,
            Cf(c, d) ? l = null : y !== null && Cf(c, y) && (n.flags |= 32),
            n.memoizedState !== null && (c = Au(t, n, oT, null, null, s),
            Tr._currentValue = c),
            Il(t, n),
            Ne(t, n, l, s),
            n.child;
        case 6:
            return t === null && _t && ((t = s = Kt) && (s = KT(s, n.pendingProps, pn),
            s !== null ? (n.stateNode = s,
            Ce = n,
            Kt = null,
            t = !0) : t = !1),
            t || Ti(n)),
            null;
        case 13:
            return Sy(t, n, s);
        case 4:
            return Qt(n, n.stateNode.containerInfo),
            l = n.pendingProps,
            t === null ? n.child = ms(n, null, l, s) : Ne(t, n, l, s),
            n.child;
        case 11:
            return dy(t, n, n.type, n.pendingProps, s);
        case 7:
            return Ne(t, n, n.pendingProps, s),
            n.child;
        case 8:
            return Ne(t, n, n.pendingProps.children, s),
            n.child;
        case 12:
            return Ne(t, n, n.pendingProps.children, s),
            n.child;
        case 10:
            return l = n.pendingProps,
            Ai(n, n.type, l.value),
            Ne(t, n, l.children, s),
            n.child;
        case 9:
            return c = n.type._context,
            l = n.pendingProps.children,
            us(n),
            c = Me(c),
            l = l(c),
            n.flags |= 1,
            Ne(t, n, l, s),
            n.child;
        case 14:
            return hy(t, n, n.type, n.pendingProps, s);
        case 15:
            return my(t, n, n.type, n.pendingProps, s);
        case 19:
            return Ty(t, n, s);
        case 31:
            return yT(t, n, s);
        case 22:
            return py(t, n, s, n.pendingProps);
        case 24:
            return us(n),
            l = Me(oe),
            t === null ? (c = mu(),
            c === null && (c = Yt,
            d = du(),
            c.pooledCache = d,
            d.refCount++,
            d !== null && (c.pooledCacheLanes |= s),
            c = d),
            n.memoizedState = {
                parent: l,
                cache: c
            },
            yu(n),
            Ai(n, oe, c)) : ((t.lanes & s) !== 0 && (gu(t, n),
            ir(n, null, null, s),
            nr()),
            c = t.memoizedState,
            d = n.memoizedState,
            c.parent !== l ? (c = {
                parent: l,
                cache: l
            },
            n.memoizedState = c,
            n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c),
            Ai(n, oe, l)) : (l = d.cache,
            Ai(n, oe, l),
            l !== c.cache && fu(n, [oe], s, !0))),
            Ne(t, n, n.pendingProps.children, s),
            n.child;
        case 29:
            throw n.pendingProps
        }
        throw Error(r(156, n.tag))
    }
    function ai(t) {
        t.flags |= 4
    }
    function Ju(t, n, s, l, c) {
        if ((n = (t.mode & 32) !== 0) && (n = !1),
        n) {
            if (t.flags |= 16777216,
            (c & 335544128) === c)
                if (t.stateNode.complete)
                    t.flags |= 8192;
                else if (Wy())
                    t.flags |= 8192;
                else
                    throw hs = zl,
                    pu
        } else
            t.flags &= -16777217
    }
    function Ey(t, n) {
        if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
            t.flags &= -16777217;
        else if (t.flags |= 16777216,
        !Pg(n))
            if (Wy())
                t.flags |= 8192;
            else
                throw hs = zl,
                pu
    }
    function Jl(t, n) {
        n !== null && (t.flags |= 4),
        t.flags & 16384 && (n = t.tag !== 22 ? sm() : 536870912,
        t.lanes |= n,
        oa |= n)
    }
    function cr(t, n) {
        if (!_t)
            switch (t.tailMode) {
            case "hidden":
                n = t.tail;
                for (var s = null; n !== null; )
                    n.alternate !== null && (s = n),
                    n = n.sibling;
                s === null ? t.tail = null : s.sibling = null;
                break;
            case "collapsed":
                s = t.tail;
                for (var l = null; s !== null; )
                    s.alternate !== null && (l = s),
                    s = s.sibling;
                l === null ? n || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null
            }
    }
    function Zt(t) {
        var n = t.alternate !== null && t.alternate.child === t.child
          , s = 0
          , l = 0;
        if (n)
            for (var c = t.child; c !== null; )
                s |= c.lanes | c.childLanes,
                l |= c.subtreeFlags & 65011712,
                l |= c.flags & 65011712,
                c.return = t,
                c = c.sibling;
        else
            for (c = t.child; c !== null; )
                s |= c.lanes | c.childLanes,
                l |= c.subtreeFlags,
                l |= c.flags,
                c.return = t,
                c = c.sibling;
        return t.subtreeFlags |= l,
        t.childLanes = s,
        n
    }
    function vT(t, n, s) {
        var l = n.pendingProps;
        switch (ru(n),
        n.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Zt(n),
            null;
        case 1:
            return Zt(n),
            null;
        case 3:
            return s = n.stateNode,
            l = null,
            t !== null && (l = t.memoizedState.cache),
            n.memoizedState.cache !== l && (n.flags |= 2048),
            ei(oe),
            Ut(),
            s.pendingContext && (s.context = s.pendingContext,
            s.pendingContext = null),
            (t === null || t.child === null) && (Zs(n) ? ai(n) : t === null || t.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024,
            ou())),
            Zt(n),
            null;
        case 26:
            var c = n.type
              , d = n.memoizedState;
            return t === null ? (ai(n),
            d !== null ? (Zt(n),
            Ey(n, d)) : (Zt(n),
            Ju(n, c, null, l, s))) : d ? d !== t.memoizedState ? (ai(n),
            Zt(n),
            Ey(n, d)) : (Zt(n),
            n.flags &= -16777217) : (t = t.memoizedProps,
            t !== l && ai(n),
            Zt(n),
            Ju(n, c, t, l, s)),
            null;
        case 27:
            if (Pe(n),
            s = At.current,
            c = n.type,
            t !== null && n.stateNode != null)
                t.memoizedProps !== l && ai(n);
            else {
                if (!l) {
                    if (n.stateNode === null)
                        throw Error(r(166));
                    return Zt(n),
                    null
                }
                t = nt.current,
                Zs(n) ? sp(n) : (t = Og(c, l, s),
                n.stateNode = t,
                ai(n))
            }
            return Zt(n),
            null;
        case 5:
            if (Pe(n),
            c = n.type,
            t !== null && n.stateNode != null)
                t.memoizedProps !== l && ai(n);
            else {
                if (!l) {
                    if (n.stateNode === null)
                        throw Error(r(166));
                    return Zt(n),
                    null
                }
                if (d = nt.current,
                Zs(n))
                    sp(n);
                else {
                    var y = mo(At.current);
                    switch (d) {
                    case 1:
                        d = y.createElementNS("http://www.w3.org/2000/svg", c);
                        break;
                    case 2:
                        d = y.createElementNS("http://www.w3.org/1998/Math/MathML", c);
                        break;
                    default:
                        switch (c) {
                        case "svg":
                            d = y.createElementNS("http://www.w3.org/2000/svg", c);
                            break;
                        case "math":
                            d = y.createElementNS("http://www.w3.org/1998/Math/MathML", c);
                            break;
                        case "script":
                            d = y.createElement("div"),
                            d.innerHTML = "<script><\/script>",
                            d = d.removeChild(d.firstChild);
                            break;
                        case "select":
                            d = typeof l.is == "string" ? y.createElement("select", {
                                is: l.is
                            }) : y.createElement("select"),
                            l.multiple ? d.multiple = !0 : l.size && (d.size = l.size);
                            break;
                        default:
                            d = typeof l.is == "string" ? y.createElement(c, {
                                is: l.is
                            }) : y.createElement(c)
                        }
                    }
                    d[Ee] = n,
                    d[He] = l;
                    t: for (y = n.child; y !== null; ) {
                        if (y.tag === 5 || y.tag === 6)
                            d.appendChild(y.stateNode);
                        else if (y.tag !== 4 && y.tag !== 27 && y.child !== null) {
                            y.child.return = y,
                            y = y.child;
                            continue
                        }
                        if (y === n)
                            break t;
                        for (; y.sibling === null; ) {
                            if (y.return === null || y.return === n)
                                break t;
                            y = y.return
                        }
                        y.sibling.return = y.return,
                        y = y.sibling
                    }
                    n.stateNode = d;
                    t: switch (De(d, c, l),
                    c) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        l = !!l.autoFocus;
                        break t;
                    case "img":
                        l = !0;
                        break t;
                    default:
                        l = !1
                    }
                    l && ai(n)
                }
            }
            return Zt(n),
            Ju(n, n.type, t === null ? null : t.memoizedProps, n.pendingProps, s),
            null;
        case 6:
            if (t && n.stateNode != null)
                t.memoizedProps !== l && ai(n);
            else {
                if (typeof l != "string" && n.stateNode === null)
                    throw Error(r(166));
                if (t = At.current,
                Zs(n)) {
                    if (t = n.stateNode,
                    s = n.memoizedProps,
                    l = null,
                    c = Ce,
                    c !== null)
                        switch (c.tag) {
                        case 27:
                        case 5:
                            l = c.memoizedProps
                        }
                    t[Ee] = n,
                    t = !!(t.nodeValue === s || l !== null && l.suppressHydrationWarning === !0 || Sg(t.nodeValue, s)),
                    t || Ti(n, !0)
                } else
                    t = mo(t).createTextNode(l),
                    t[Ee] = n,
                    n.stateNode = t
            }
            return Zt(n),
            null;
        case 31:
            if (s = n.memoizedState,
            t === null || t.memoizedState !== null) {
                if (l = Zs(n),
                s !== null) {
                    if (t === null) {
                        if (!l)
                            throw Error(r(318));
                        if (t = n.memoizedState,
                        t = t !== null ? t.dehydrated : null,
                        !t)
                            throw Error(r(557));
                        t[Ee] = n
                    } else
                        os(),
                        (n.flags & 128) === 0 && (n.memoizedState = null),
                        n.flags |= 4;
                    Zt(n),
                    t = !1
                } else
                    s = ou(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s),
                    t = !0;
                if (!t)
                    return n.flags & 256 ? ($e(n),
                    n) : ($e(n),
                    null);
                if ((n.flags & 128) !== 0)
                    throw Error(r(558))
            }
            return Zt(n),
            null;
        case 13:
            if (l = n.memoizedState,
            t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (c = Zs(n),
                l !== null && l.dehydrated !== null) {
                    if (t === null) {
                        if (!c)
                            throw Error(r(318));
                        if (c = n.memoizedState,
                        c = c !== null ? c.dehydrated : null,
                        !c)
                            throw Error(r(317));
                        c[Ee] = n
                    } else
                        os(),
                        (n.flags & 128) === 0 && (n.memoizedState = null),
                        n.flags |= 4;
                    Zt(n),
                    c = !1
                } else
                    c = ou(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = c),
                    c = !0;
                if (!c)
                    return n.flags & 256 ? ($e(n),
                    n) : ($e(n),
                    null)
            }
            return $e(n),
            (n.flags & 128) !== 0 ? (n.lanes = s,
            n) : (s = l !== null,
            t = t !== null && t.memoizedState !== null,
            s && (l = n.child,
            c = null,
            l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (c = l.alternate.memoizedState.cachePool.pool),
            d = null,
            l.memoizedState !== null && l.memoizedState.cachePool !== null && (d = l.memoizedState.cachePool.pool),
            d !== c && (l.flags |= 2048)),
            s !== t && s && (n.child.flags |= 8192),
            Jl(n, n.updateQueue),
            Zt(n),
            null);
        case 4:
            return Ut(),
            t === null && Sf(n.stateNode.containerInfo),
            Zt(n),
            null;
        case 10:
            return ei(n.type),
            Zt(n),
            null;
        case 19:
            if (K(re),
            l = n.memoizedState,
            l === null)
                return Zt(n),
                null;
            if (c = (n.flags & 128) !== 0,
            d = l.rendering,
            d === null)
                if (c)
                    cr(l, !1);
                else {
                    if (se !== 0 || t !== null && (t.flags & 128) !== 0)
                        for (t = n.child; t !== null; ) {
                            if (d = Bl(t),
                            d !== null) {
                                for (n.flags |= 128,
                                cr(l, !1),
                                t = d.updateQueue,
                                n.updateQueue = t,
                                Jl(n, t),
                                n.subtreeFlags = 0,
                                t = s,
                                s = n.child; s !== null; )
                                    $m(s, t),
                                    s = s.sibling;
                                return $(re, re.current & 1 | 2),
                                _t && $n(n, l.treeForkCount),
                                n.child
                            }
                            t = t.sibling
                        }
                    l.tail !== null && it() > io && (n.flags |= 128,
                    c = !0,
                    cr(l, !1),
                    n.lanes = 4194304)
                }
            else {
                if (!c)
                    if (t = Bl(d),
                    t !== null) {
                        if (n.flags |= 128,
                        c = !0,
                        t = t.updateQueue,
                        n.updateQueue = t,
                        Jl(n, t),
                        cr(l, !0),
                        l.tail === null && l.tailMode === "hidden" && !d.alternate && !_t)
                            return Zt(n),
                            null
                    } else
                        2 * it() - l.renderingStartTime > io && s !== 536870912 && (n.flags |= 128,
                        c = !0,
                        cr(l, !1),
                        n.lanes = 4194304);
                l.isBackwards ? (d.sibling = n.child,
                n.child = d) : (t = l.last,
                t !== null ? t.sibling = d : n.child = d,
                l.last = d)
            }
            return l.tail !== null ? (t = l.tail,
            l.rendering = t,
            l.tail = t.sibling,
            l.renderingStartTime = it(),
            t.sibling = null,
            s = re.current,
            $(re, c ? s & 1 | 2 : s & 1),
            _t && $n(n, l.treeForkCount),
            t) : (Zt(n),
            null);
        case 22:
        case 23:
            return $e(n),
            Su(),
            l = n.memoizedState !== null,
            t !== null ? t.memoizedState !== null !== l && (n.flags |= 8192) : l && (n.flags |= 8192),
            l ? (s & 536870912) !== 0 && (n.flags & 128) === 0 && (Zt(n),
            n.subtreeFlags & 6 && (n.flags |= 8192)) : Zt(n),
            s = n.updateQueue,
            s !== null && Jl(n, s.retryQueue),
            s = null,
            t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (s = t.memoizedState.cachePool.pool),
            l = null,
            n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool),
            l !== s && (n.flags |= 2048),
            t !== null && K(fs),
            null;
        case 24:
            return s = null,
            t !== null && (s = t.memoizedState.cache),
            n.memoizedState.cache !== s && (n.flags |= 2048),
            ei(oe),
            Zt(n),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(r(156, n.tag))
    }
    function xT(t, n) {
        switch (ru(n),
        n.tag) {
        case 1:
            return t = n.flags,
            t & 65536 ? (n.flags = t & -65537 | 128,
            n) : null;
        case 3:
            return ei(oe),
            Ut(),
            t = n.flags,
            (t & 65536) !== 0 && (t & 128) === 0 ? (n.flags = t & -65537 | 128,
            n) : null;
        case 26:
        case 27:
        case 5:
            return Pe(n),
            null;
        case 31:
            if (n.memoizedState !== null) {
                if ($e(n),
                n.alternate === null)
                    throw Error(r(340));
                os()
            }
            return t = n.flags,
            t & 65536 ? (n.flags = t & -65537 | 128,
            n) : null;
        case 13:
            if ($e(n),
            t = n.memoizedState,
            t !== null && t.dehydrated !== null) {
                if (n.alternate === null)
                    throw Error(r(340));
                os()
            }
            return t = n.flags,
            t & 65536 ? (n.flags = t & -65537 | 128,
            n) : null;
        case 19:
            return K(re),
            null;
        case 4:
            return Ut(),
            null;
        case 10:
            return ei(n.type),
            null;
        case 22:
        case 23:
            return $e(n),
            Su(),
            t !== null && K(fs),
            t = n.flags,
            t & 65536 ? (n.flags = t & -65537 | 128,
            n) : null;
        case 24:
            return ei(oe),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function Cy(t, n) {
        switch (ru(n),
        n.tag) {
        case 3:
            ei(oe),
            Ut();
            break;
        case 26:
        case 27:
        case 5:
            Pe(n);
            break;
        case 4:
            Ut();
            break;
        case 31:
            n.memoizedState !== null && $e(n);
            break;
        case 13:
            $e(n);
            break;
        case 19:
            K(re);
            break;
        case 10:
            ei(n.type);
            break;
        case 22:
        case 23:
            $e(n),
            Su(),
            t !== null && K(fs);
            break;
        case 24:
            ei(oe)
        }
    }
    function ur(t, n) {
        try {
            var s = n.updateQueue
              , l = s !== null ? s.lastEffect : null;
            if (l !== null) {
                var c = l.next;
                s = c;
                do {
                    if ((s.tag & t) === t) {
                        l = void 0;
                        var d = s.create
                          , y = s.inst;
                        l = d(),
                        y.destroy = l
                    }
                    s = s.next
                } while (s !== c)
            }
        } catch (b) {
            Ht(n, n.return, b)
        }
    }
    function Ri(t, n, s) {
        try {
            var l = n.updateQueue
              , c = l !== null ? l.lastEffect : null;
            if (c !== null) {
                var d = c.next;
                l = d;
                do {
                    if ((l.tag & t) === t) {
                        var y = l.inst
                          , b = y.destroy;
                        if (b !== void 0) {
                            y.destroy = void 0,
                            c = n;
                            var C = s
                              , U = b;
                            try {
                                U()
                            } catch (Q) {
                                Ht(c, C, Q)
                            }
                        }
                    }
                    l = l.next
                } while (l !== d)
            }
        } catch (Q) {
            Ht(n, n.return, Q)
        }
    }
    function My(t) {
        var n = t.updateQueue;
        if (n !== null) {
            var s = t.stateNode;
            try {
                gp(n, s)
            } catch (l) {
                Ht(t, t.return, l)
            }
        }
    }
    function Ny(t, n, s) {
        s.props = ys(t.type, t.memoizedProps),
        s.state = t.memoizedState;
        try {
            s.componentWillUnmount()
        } catch (l) {
            Ht(t, n, l)
        }
    }
    function fr(t, n) {
        try {
            var s = t.ref;
            if (s !== null) {
                switch (t.tag) {
                case 26:
                case 27:
                case 5:
                    var l = t.stateNode;
                    break;
                case 30:
                    l = t.stateNode;
                    break;
                default:
                    l = t.stateNode
                }
                typeof s == "function" ? t.refCleanup = s(l) : s.current = l
            }
        } catch (c) {
            Ht(t, n, c)
        }
    }
    function kn(t, n) {
        var s = t.ref
          , l = t.refCleanup;
        if (s !== null)
            if (typeof l == "function")
                try {
                    l()
                } catch (c) {
                    Ht(t, n, c)
                } finally {
                    t.refCleanup = null,
                    t = t.alternate,
                    t != null && (t.refCleanup = null)
                }
            else if (typeof s == "function")
                try {
                    s(null)
                } catch (c) {
                    Ht(t, n, c)
                }
            else
                s.current = null
    }
    function Dy(t) {
        var n = t.type
          , s = t.memoizedProps
          , l = t.stateNode;
        try {
            t: switch (n) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                s.autoFocus && l.focus();
                break t;
            case "img":
                s.src ? l.src = s.src : s.srcSet && (l.srcset = s.srcSet)
            }
        } catch (c) {
            Ht(t, t.return, c)
        }
    }
    function $u(t, n, s) {
        try {
            var l = t.stateNode;
            HT(l, t.type, s, n),
            l[He] = n
        } catch (c) {
            Ht(t, t.return, c)
        }
    }
    function Ry(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ui(t.type) || t.tag === 4
    }
    function tf(t) {
        t: for (; ; ) {
            for (; t.sibling === null; ) {
                if (t.return === null || Ry(t.return))
                    return null;
                t = t.return
            }
            for (t.sibling.return = t.return,
            t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
                if (t.tag === 27 && Ui(t.type) || t.flags & 2 || t.child === null || t.tag === 4)
                    continue t;
                t.child.return = t,
                t = t.child
            }
            if (!(t.flags & 2))
                return t.stateNode
        }
    }
    function ef(t, n, s) {
        var l = t.tag;
        if (l === 5 || l === 6)
            t = t.stateNode,
            n ? (s.nodeType === 9 ? s.body : s.nodeName === "HTML" ? s.ownerDocument.body : s).insertBefore(t, n) : (n = s.nodeType === 9 ? s.body : s.nodeName === "HTML" ? s.ownerDocument.body : s,
            n.appendChild(t),
            s = s._reactRootContainer,
            s != null || n.onclick !== null || (n.onclick = In));
        else if (l !== 4 && (l === 27 && Ui(t.type) && (s = t.stateNode,
        n = null),
        t = t.child,
        t !== null))
            for (ef(t, n, s),
            t = t.sibling; t !== null; )
                ef(t, n, s),
                t = t.sibling
    }
    function $l(t, n, s) {
        var l = t.tag;
        if (l === 5 || l === 6)
            t = t.stateNode,
            n ? s.insertBefore(t, n) : s.appendChild(t);
        else if (l !== 4 && (l === 27 && Ui(t.type) && (s = t.stateNode),
        t = t.child,
        t !== null))
            for ($l(t, n, s),
            t = t.sibling; t !== null; )
                $l(t, n, s),
                t = t.sibling
    }
    function jy(t) {
        var n = t.stateNode
          , s = t.memoizedProps;
        try {
            for (var l = t.type, c = n.attributes; c.length; )
                n.removeAttributeNode(c[0]);
            De(n, l, s),
            n[Ee] = t,
            n[He] = s
        } catch (d) {
            Ht(t, t.return, d)
        }
    }
    var ri = !1
      , fe = !1
      , nf = !1
      , Oy = typeof WeakSet == "function" ? WeakSet : Set
      , Te = null;
    function bT(t, n) {
        if (t = t.containerInfo,
        Af = So,
        t = Gm(t),
        Zc(t)) {
            if ("selectionStart"in t)
                var s = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
            else
                t: {
                    s = (s = t.ownerDocument) && s.defaultView || window;
                    var l = s.getSelection && s.getSelection();
                    if (l && l.rangeCount !== 0) {
                        s = l.anchorNode;
                        var c = l.anchorOffset
                          , d = l.focusNode;
                        l = l.focusOffset;
                        try {
                            s.nodeType,
                            d.nodeType
                        } catch {
                            s = null;
                            break t
                        }
                        var y = 0
                          , b = -1
                          , C = -1
                          , U = 0
                          , Q = 0
                          , W = t
                          , P = null;
                        e: for (; ; ) {
                            for (var F; W !== s || c !== 0 && W.nodeType !== 3 || (b = y + c),
                            W !== d || l !== 0 && W.nodeType !== 3 || (C = y + l),
                            W.nodeType === 3 && (y += W.nodeValue.length),
                            (F = W.firstChild) !== null; )
                                P = W,
                                W = F;
                            for (; ; ) {
                                if (W === t)
                                    break e;
                                if (P === s && ++U === c && (b = y),
                                P === d && ++Q === l && (C = y),
                                (F = W.nextSibling) !== null)
                                    break;
                                W = P,
                                P = W.parentNode
                            }
                            W = F
                        }
                        s = b === -1 || C === -1 ? null : {
                            start: b,
                            end: C
                        }
                    } else
                        s = null
                }
            s = s || {
                start: 0,
                end: 0
            }
        } else
            s = null;
        for (Ef = {
            focusedElem: t,
            selectionRange: s
        },
        So = !1,
        Te = n; Te !== null; )
            if (n = Te,
            t = n.child,
            (n.subtreeFlags & 1028) !== 0 && t !== null)
                t.return = n,
                Te = t;
            else
                for (; Te !== null; ) {
                    switch (n = Te,
                    d = n.alternate,
                    t = n.flags,
                    n.tag) {
                    case 0:
                        if ((t & 4) !== 0 && (t = n.updateQueue,
                        t = t !== null ? t.events : null,
                        t !== null))
                            for (s = 0; s < t.length; s++)
                                c = t[s],
                                c.ref.impl = c.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((t & 1024) !== 0 && d !== null) {
                            t = void 0,
                            s = n,
                            c = d.memoizedProps,
                            d = d.memoizedState,
                            l = s.stateNode;
                            try {
                                var ut = ys(s.type, c);
                                t = l.getSnapshotBeforeUpdate(ut, d),
                                l.__reactInternalSnapshotBeforeUpdate = t
                            } catch (wt) {
                                Ht(s, s.return, wt)
                            }
                        }
                        break;
                    case 3:
                        if ((t & 1024) !== 0) {
                            if (t = n.stateNode.containerInfo,
                            s = t.nodeType,
                            s === 9)
                                Nf(t);
                            else if (s === 1)
                                switch (t.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Nf(t);
                                    break;
                                default:
                                    t.textContent = ""
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
                        if ((t & 1024) !== 0)
                            throw Error(r(163))
                    }
                    if (t = n.sibling,
                    t !== null) {
                        t.return = n.return,
                        Te = t;
                        break
                    }
                    Te = n.return
                }
    }
    function _y(t, n, s) {
        var l = s.flags;
        switch (s.tag) {
        case 0:
        case 11:
        case 15:
            oi(t, s),
            l & 4 && ur(5, s);
            break;
        case 1:
            if (oi(t, s),
            l & 4)
                if (t = s.stateNode,
                n === null)
                    try {
                        t.componentDidMount()
                    } catch (y) {
                        Ht(s, s.return, y)
                    }
                else {
                    var c = ys(s.type, n.memoizedProps);
                    n = n.memoizedState;
                    try {
                        t.componentDidUpdate(c, n, t.__reactInternalSnapshotBeforeUpdate)
                    } catch (y) {
                        Ht(s, s.return, y)
                    }
                }
            l & 64 && My(s),
            l & 512 && fr(s, s.return);
            break;
        case 3:
            if (oi(t, s),
            l & 64 && (t = s.updateQueue,
            t !== null)) {
                if (n = null,
                s.child !== null)
                    switch (s.child.tag) {
                    case 27:
                    case 5:
                        n = s.child.stateNode;
                        break;
                    case 1:
                        n = s.child.stateNode
                    }
                try {
                    gp(t, n)
                } catch (y) {
                    Ht(s, s.return, y)
                }
            }
            break;
        case 27:
            n === null && l & 4 && jy(s);
        case 26:
        case 5:
            oi(t, s),
            n === null && l & 4 && Dy(s),
            l & 512 && fr(s, s.return);
            break;
        case 12:
            oi(t, s);
            break;
        case 31:
            oi(t, s),
            l & 4 && Ly(t, s);
            break;
        case 13:
            oi(t, s),
            l & 4 && Uy(t, s),
            l & 64 && (t = s.memoizedState,
            t !== null && (t = t.dehydrated,
            t !== null && (s = DT.bind(null, s),
            ZT(t, s))));
            break;
        case 22:
            if (l = s.memoizedState !== null || ri,
            !l) {
                n = n !== null && n.memoizedState !== null || fe,
                c = ri;
                var d = fe;
                ri = l,
                (fe = n) && !d ? ci(t, s, (s.subtreeFlags & 8772) !== 0) : oi(t, s),
                ri = c,
                fe = d
            }
            break;
        case 30:
            break;
        default:
            oi(t, s)
        }
    }
    function Vy(t) {
        var n = t.alternate;
        n !== null && (t.alternate = null,
        Vy(n)),
        t.child = null,
        t.deletions = null,
        t.sibling = null,
        t.tag === 5 && (n = t.stateNode,
        n !== null && Oc(n)),
        t.stateNode = null,
        t.return = null,
        t.dependencies = null,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.pendingProps = null,
        t.stateNode = null,
        t.updateQueue = null
    }
    var Jt = null
      , Fe = !1;
    function li(t, n, s) {
        for (s = s.child; s !== null; )
            zy(t, n, s),
            s = s.sibling
    }
    function zy(t, n, s) {
        if (Ae && typeof Ae.onCommitFiberUnmount == "function")
            try {
                Ae.onCommitFiberUnmount(ts, s)
            } catch {}
        switch (s.tag) {
        case 26:
            fe || kn(s, n),
            li(t, n, s),
            s.memoizedState ? s.memoizedState.count-- : s.stateNode && (s = s.stateNode,
            s.parentNode.removeChild(s));
            break;
        case 27:
            fe || kn(s, n);
            var l = Jt
              , c = Fe;
            Ui(s.type) && (Jt = s.stateNode,
            Fe = !1),
            li(t, n, s),
            br(s.stateNode),
            Jt = l,
            Fe = c;
            break;
        case 5:
            fe || kn(s, n);
        case 6:
            if (l = Jt,
            c = Fe,
            Jt = null,
            li(t, n, s),
            Jt = l,
            Fe = c,
            Jt !== null)
                if (Fe)
                    try {
                        (Jt.nodeType === 9 ? Jt.body : Jt.nodeName === "HTML" ? Jt.ownerDocument.body : Jt).removeChild(s.stateNode)
                    } catch (d) {
                        Ht(s, n, d)
                    }
                else
                    try {
                        Jt.removeChild(s.stateNode)
                    } catch (d) {
                        Ht(s, n, d)
                    }
            break;
        case 18:
            Jt !== null && (Fe ? (t = Jt,
            Mg(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, s.stateNode),
            ya(t)) : Mg(Jt, s.stateNode));
            break;
        case 4:
            l = Jt,
            c = Fe,
            Jt = s.stateNode.containerInfo,
            Fe = !0,
            li(t, n, s),
            Jt = l,
            Fe = c;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Ri(2, s, n),
            fe || Ri(4, s, n),
            li(t, n, s);
            break;
        case 1:
            fe || (kn(s, n),
            l = s.stateNode,
            typeof l.componentWillUnmount == "function" && Ny(s, n, l)),
            li(t, n, s);
            break;
        case 21:
            li(t, n, s);
            break;
        case 22:
            fe = (l = fe) || s.memoizedState !== null,
            li(t, n, s),
            fe = l;
            break;
        default:
            li(t, n, s)
        }
    }
    function Ly(t, n) {
        if (n.memoizedState === null && (t = n.alternate,
        t !== null && (t = t.memoizedState,
        t !== null))) {
            t = t.dehydrated;
            try {
                ya(t)
            } catch (s) {
                Ht(n, n.return, s)
            }
        }
    }
    function Uy(t, n) {
        if (n.memoizedState === null && (t = n.alternate,
        t !== null && (t = t.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null))))
            try {
                ya(t)
            } catch (s) {
                Ht(n, n.return, s)
            }
    }
    function ST(t) {
        switch (t.tag) {
        case 31:
        case 13:
        case 19:
            var n = t.stateNode;
            return n === null && (n = t.stateNode = new Oy),
            n;
        case 22:
            return t = t.stateNode,
            n = t._retryCache,
            n === null && (n = t._retryCache = new Oy),
            n;
        default:
            throw Error(r(435, t.tag))
        }
    }
    function to(t, n) {
        var s = ST(t);
        n.forEach(function(l) {
            if (!s.has(l)) {
                s.add(l);
                var c = RT.bind(null, t, l);
                l.then(c, c)
            }
        })
    }
    function Ge(t, n) {
        var s = n.deletions;
        if (s !== null)
            for (var l = 0; l < s.length; l++) {
                var c = s[l]
                  , d = t
                  , y = n
                  , b = y;
                t: for (; b !== null; ) {
                    switch (b.tag) {
                    case 27:
                        if (Ui(b.type)) {
                            Jt = b.stateNode,
                            Fe = !1;
                            break t
                        }
                        break;
                    case 5:
                        Jt = b.stateNode,
                        Fe = !1;
                        break t;
                    case 3:
                    case 4:
                        Jt = b.stateNode.containerInfo,
                        Fe = !0;
                        break t
                    }
                    b = b.return
                }
                if (Jt === null)
                    throw Error(r(160));
                zy(d, y, c),
                Jt = null,
                Fe = !1,
                d = c.alternate,
                d !== null && (d.return = null),
                c.return = null
            }
        if (n.subtreeFlags & 13886)
            for (n = n.child; n !== null; )
                ky(n, t),
                n = n.sibling
    }
    var An = null;
    function ky(t, n) {
        var s = t.alternate
          , l = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            Ge(n, t),
            Ye(t),
            l & 4 && (Ri(3, t, t.return),
            ur(3, t),
            Ri(5, t, t.return));
            break;
        case 1:
            Ge(n, t),
            Ye(t),
            l & 512 && (fe || s === null || kn(s, s.return)),
            l & 64 && ri && (t = t.updateQueue,
            t !== null && (l = t.callbacks,
            l !== null && (s = t.shared.hiddenCallbacks,
            t.shared.hiddenCallbacks = s === null ? l : s.concat(l))));
            break;
        case 26:
            var c = An;
            if (Ge(n, t),
            Ye(t),
            l & 512 && (fe || s === null || kn(s, s.return)),
            l & 4) {
                var d = s !== null ? s.memoizedState : null;
                if (l = t.memoizedState,
                s === null)
                    if (l === null)
                        if (t.stateNode === null) {
                            t: {
                                l = t.type,
                                s = t.memoizedProps,
                                c = c.ownerDocument || c;
                                e: switch (l) {
                                case "title":
                                    d = c.getElementsByTagName("title")[0],
                                    (!d || d[ka] || d[Ee] || d.namespaceURI === "http://www.w3.org/2000/svg" || d.hasAttribute("itemprop")) && (d = c.createElement(l),
                                    c.head.insertBefore(d, c.querySelector("head > title"))),
                                    De(d, l, s),
                                    d[Ee] = t,
                                    we(d),
                                    l = d;
                                    break t;
                                case "link":
                                    var y = kg("link", "href", c).get(l + (s.href || ""));
                                    if (y) {
                                        for (var b = 0; b < y.length; b++)
                                            if (d = y[b],
                                            d.getAttribute("href") === (s.href == null || s.href === "" ? null : s.href) && d.getAttribute("rel") === (s.rel == null ? null : s.rel) && d.getAttribute("title") === (s.title == null ? null : s.title) && d.getAttribute("crossorigin") === (s.crossOrigin == null ? null : s.crossOrigin)) {
                                                y.splice(b, 1);
                                                break e
                                            }
                                    }
                                    d = c.createElement(l),
                                    De(d, l, s),
                                    c.head.appendChild(d);
                                    break;
                                case "meta":
                                    if (y = kg("meta", "content", c).get(l + (s.content || ""))) {
                                        for (b = 0; b < y.length; b++)
                                            if (d = y[b],
                                            d.getAttribute("content") === (s.content == null ? null : "" + s.content) && d.getAttribute("name") === (s.name == null ? null : s.name) && d.getAttribute("property") === (s.property == null ? null : s.property) && d.getAttribute("http-equiv") === (s.httpEquiv == null ? null : s.httpEquiv) && d.getAttribute("charset") === (s.charSet == null ? null : s.charSet)) {
                                                y.splice(b, 1);
                                                break e
                                            }
                                    }
                                    d = c.createElement(l),
                                    De(d, l, s),
                                    c.head.appendChild(d);
                                    break;
                                default:
                                    throw Error(r(468, l))
                                }
                                d[Ee] = t,
                                we(d),
                                l = d
                            }
                            t.stateNode = l
                        } else
                            Bg(c, t.type, t.stateNode);
                    else
                        t.stateNode = Ug(c, l, t.memoizedProps);
                else
                    d !== l ? (d === null ? s.stateNode !== null && (s = s.stateNode,
                    s.parentNode.removeChild(s)) : d.count--,
                    l === null ? Bg(c, t.type, t.stateNode) : Ug(c, l, t.memoizedProps)) : l === null && t.stateNode !== null && $u(t, t.memoizedProps, s.memoizedProps)
            }
            break;
        case 27:
            Ge(n, t),
            Ye(t),
            l & 512 && (fe || s === null || kn(s, s.return)),
            s !== null && l & 4 && $u(t, t.memoizedProps, s.memoizedProps);
            break;
        case 5:
            if (Ge(n, t),
            Ye(t),
            l & 512 && (fe || s === null || kn(s, s.return)),
            t.flags & 32) {
                c = t.stateNode;
                try {
                    Bs(c, "")
                } catch (ut) {
                    Ht(t, t.return, ut)
                }
            }
            l & 4 && t.stateNode != null && (c = t.memoizedProps,
            $u(t, c, s !== null ? s.memoizedProps : c)),
            l & 1024 && (nf = !0);
            break;
        case 6:
            if (Ge(n, t),
            Ye(t),
            l & 4) {
                if (t.stateNode === null)
                    throw Error(r(162));
                l = t.memoizedProps,
                s = t.stateNode;
                try {
                    s.nodeValue = l
                } catch (ut) {
                    Ht(t, t.return, ut)
                }
            }
            break;
        case 3:
            if (go = null,
            c = An,
            An = po(n.containerInfo),
            Ge(n, t),
            An = c,
            Ye(t),
            l & 4 && s !== null && s.memoizedState.isDehydrated)
                try {
                    ya(n.containerInfo)
                } catch (ut) {
                    Ht(t, t.return, ut)
                }
            nf && (nf = !1,
            By(t));
            break;
        case 4:
            l = An,
            An = po(t.stateNode.containerInfo),
            Ge(n, t),
            Ye(t),
            An = l;
            break;
        case 12:
            Ge(n, t),
            Ye(t);
            break;
        case 31:
            Ge(n, t),
            Ye(t),
            l & 4 && (l = t.updateQueue,
            l !== null && (t.updateQueue = null,
            to(t, l)));
            break;
        case 13:
            Ge(n, t),
            Ye(t),
            t.child.flags & 8192 && t.memoizedState !== null != (s !== null && s.memoizedState !== null) && (no = it()),
            l & 4 && (l = t.updateQueue,
            l !== null && (t.updateQueue = null,
            to(t, l)));
            break;
        case 22:
            c = t.memoizedState !== null;
            var C = s !== null && s.memoizedState !== null
              , U = ri
              , Q = fe;
            if (ri = U || c,
            fe = Q || C,
            Ge(n, t),
            fe = Q,
            ri = U,
            Ye(t),
            l & 8192)
                t: for (n = t.stateNode,
                n._visibility = c ? n._visibility & -2 : n._visibility | 1,
                c && (s === null || C || ri || fe || gs(t)),
                s = null,
                n = t; ; ) {
                    if (n.tag === 5 || n.tag === 26) {
                        if (s === null) {
                            C = s = n;
                            try {
                                if (d = C.stateNode,
                                c)
                                    y = d.style,
                                    typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                                else {
                                    b = C.stateNode;
                                    var W = C.memoizedProps.style
                                      , P = W != null && W.hasOwnProperty("display") ? W.display : null;
                                    b.style.display = P == null || typeof P == "boolean" ? "" : ("" + P).trim()
                                }
                            } catch (ut) {
                                Ht(C, C.return, ut)
                            }
                        }
                    } else if (n.tag === 6) {
                        if (s === null) {
                            C = n;
                            try {
                                C.stateNode.nodeValue = c ? "" : C.memoizedProps
                            } catch (ut) {
                                Ht(C, C.return, ut)
                            }
                        }
                    } else if (n.tag === 18) {
                        if (s === null) {
                            C = n;
                            try {
                                var F = C.stateNode;
                                c ? Ng(F, !0) : Ng(C.stateNode, !1)
                            } catch (ut) {
                                Ht(C, C.return, ut)
                            }
                        }
                    } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === t) && n.child !== null) {
                        n.child.return = n,
                        n = n.child;
                        continue
                    }
                    if (n === t)
                        break t;
                    for (; n.sibling === null; ) {
                        if (n.return === null || n.return === t)
                            break t;
                        s === n && (s = null),
                        n = n.return
                    }
                    s === n && (s = null),
                    n.sibling.return = n.return,
                    n = n.sibling
                }
            l & 4 && (l = t.updateQueue,
            l !== null && (s = l.retryQueue,
            s !== null && (l.retryQueue = null,
            to(t, s))));
            break;
        case 19:
            Ge(n, t),
            Ye(t),
            l & 4 && (l = t.updateQueue,
            l !== null && (t.updateQueue = null,
            to(t, l)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            Ge(n, t),
            Ye(t)
        }
    }
    function Ye(t) {
        var n = t.flags;
        if (n & 2) {
            try {
                for (var s, l = t.return; l !== null; ) {
                    if (Ry(l)) {
                        s = l;
                        break
                    }
                    l = l.return
                }
                if (s == null)
                    throw Error(r(160));
                switch (s.tag) {
                case 27:
                    var c = s.stateNode
                      , d = tf(t);
                    $l(t, d, c);
                    break;
                case 5:
                    var y = s.stateNode;
                    s.flags & 32 && (Bs(y, ""),
                    s.flags &= -33);
                    var b = tf(t);
                    $l(t, b, y);
                    break;
                case 3:
                case 4:
                    var C = s.stateNode.containerInfo
                      , U = tf(t);
                    ef(t, U, C);
                    break;
                default:
                    throw Error(r(161))
                }
            } catch (Q) {
                Ht(t, t.return, Q)
            }
            t.flags &= -3
        }
        n & 4096 && (t.flags &= -4097)
    }
    function By(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null; ) {
                var n = t;
                By(n),
                n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
                t = t.sibling
            }
    }
    function oi(t, n) {
        if (n.subtreeFlags & 8772)
            for (n = n.child; n !== null; )
                _y(t, n.alternate, n),
                n = n.sibling
    }
    function gs(t) {
        for (t = t.child; t !== null; ) {
            var n = t;
            switch (n.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Ri(4, n, n.return),
                gs(n);
                break;
            case 1:
                kn(n, n.return);
                var s = n.stateNode;
                typeof s.componentWillUnmount == "function" && Ny(n, n.return, s),
                gs(n);
                break;
            case 27:
                br(n.stateNode);
            case 26:
            case 5:
                kn(n, n.return),
                gs(n);
                break;
            case 22:
                n.memoizedState === null && gs(n);
                break;
            case 30:
                gs(n);
                break;
            default:
                gs(n)
            }
            t = t.sibling
        }
    }
    function ci(t, n, s) {
        for (s = s && (n.subtreeFlags & 8772) !== 0,
        n = n.child; n !== null; ) {
            var l = n.alternate
              , c = t
              , d = n
              , y = d.flags;
            switch (d.tag) {
            case 0:
            case 11:
            case 15:
                ci(c, d, s),
                ur(4, d);
                break;
            case 1:
                if (ci(c, d, s),
                l = d,
                c = l.stateNode,
                typeof c.componentDidMount == "function")
                    try {
                        c.componentDidMount()
                    } catch (U) {
                        Ht(l, l.return, U)
                    }
                if (l = d,
                c = l.updateQueue,
                c !== null) {
                    var b = l.stateNode;
                    try {
                        var C = c.shared.hiddenCallbacks;
                        if (C !== null)
                            for (c.shared.hiddenCallbacks = null,
                            c = 0; c < C.length; c++)
                                yp(C[c], b)
                    } catch (U) {
                        Ht(l, l.return, U)
                    }
                }
                s && y & 64 && My(d),
                fr(d, d.return);
                break;
            case 27:
                jy(d);
            case 26:
            case 5:
                ci(c, d, s),
                s && l === null && y & 4 && Dy(d),
                fr(d, d.return);
                break;
            case 12:
                ci(c, d, s);
                break;
            case 31:
                ci(c, d, s),
                s && y & 4 && Ly(c, d);
                break;
            case 13:
                ci(c, d, s),
                s && y & 4 && Uy(c, d);
                break;
            case 22:
                d.memoizedState === null && ci(c, d, s),
                fr(d, d.return);
                break;
            case 30:
                break;
            default:
                ci(c, d, s)
            }
            n = n.sibling
        }
    }
    function sf(t, n) {
        var s = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (s = t.memoizedState.cachePool.pool),
        t = null,
        n.memoizedState !== null && n.memoizedState.cachePool !== null && (t = n.memoizedState.cachePool.pool),
        t !== s && (t != null && t.refCount++,
        s != null && Wa(s))
    }
    function af(t, n) {
        t = null,
        n.alternate !== null && (t = n.alternate.memoizedState.cache),
        n = n.memoizedState.cache,
        n !== t && (n.refCount++,
        t != null && Wa(t))
    }
    function En(t, n, s, l) {
        if (n.subtreeFlags & 10256)
            for (n = n.child; n !== null; )
                Py(t, n, s, l),
                n = n.sibling
    }
    function Py(t, n, s, l) {
        var c = n.flags;
        switch (n.tag) {
        case 0:
        case 11:
        case 15:
            En(t, n, s, l),
            c & 2048 && ur(9, n);
            break;
        case 1:
            En(t, n, s, l);
            break;
        case 3:
            En(t, n, s, l),
            c & 2048 && (t = null,
            n.alternate !== null && (t = n.alternate.memoizedState.cache),
            n = n.memoizedState.cache,
            n !== t && (n.refCount++,
            t != null && Wa(t)));
            break;
        case 12:
            if (c & 2048) {
                En(t, n, s, l),
                t = n.stateNode;
                try {
                    var d = n.memoizedProps
                      , y = d.id
                      , b = d.onPostCommit;
                    typeof b == "function" && b(y, n.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                } catch (C) {
                    Ht(n, n.return, C)
                }
            } else
                En(t, n, s, l);
            break;
        case 31:
            En(t, n, s, l);
            break;
        case 13:
            En(t, n, s, l);
            break;
        case 23:
            break;
        case 22:
            d = n.stateNode,
            y = n.alternate,
            n.memoizedState !== null ? d._visibility & 2 ? En(t, n, s, l) : dr(t, n) : d._visibility & 2 ? En(t, n, s, l) : (d._visibility |= 2,
            aa(t, n, s, l, (n.subtreeFlags & 10256) !== 0 || !1)),
            c & 2048 && sf(y, n);
            break;
        case 24:
            En(t, n, s, l),
            c & 2048 && af(n.alternate, n);
            break;
        default:
            En(t, n, s, l)
        }
    }
    function aa(t, n, s, l, c) {
        for (c = c && ((n.subtreeFlags & 10256) !== 0 || !1),
        n = n.child; n !== null; ) {
            var d = t
              , y = n
              , b = s
              , C = l
              , U = y.flags;
            switch (y.tag) {
            case 0:
            case 11:
            case 15:
                aa(d, y, b, C, c),
                ur(8, y);
                break;
            case 23:
                break;
            case 22:
                var Q = y.stateNode;
                y.memoizedState !== null ? Q._visibility & 2 ? aa(d, y, b, C, c) : dr(d, y) : (Q._visibility |= 2,
                aa(d, y, b, C, c)),
                c && U & 2048 && sf(y.alternate, y);
                break;
            case 24:
                aa(d, y, b, C, c),
                c && U & 2048 && af(y.alternate, y);
                break;
            default:
                aa(d, y, b, C, c)
            }
            n = n.sibling
        }
    }
    function dr(t, n) {
        if (n.subtreeFlags & 10256)
            for (n = n.child; n !== null; ) {
                var s = t
                  , l = n
                  , c = l.flags;
                switch (l.tag) {
                case 22:
                    dr(s, l),
                    c & 2048 && sf(l.alternate, l);
                    break;
                case 24:
                    dr(s, l),
                    c & 2048 && af(l.alternate, l);
                    break;
                default:
                    dr(s, l)
                }
                n = n.sibling
            }
    }
    var hr = 8192;
    function ra(t, n, s) {
        if (t.subtreeFlags & hr)
            for (t = t.child; t !== null; )
                Hy(t, n, s),
                t = t.sibling
    }
    function Hy(t, n, s) {
        switch (t.tag) {
        case 26:
            ra(t, n, s),
            t.flags & hr && t.memoizedState !== null && lA(s, An, t.memoizedState, t.memoizedProps);
            break;
        case 5:
            ra(t, n, s);
            break;
        case 3:
        case 4:
            var l = An;
            An = po(t.stateNode.containerInfo),
            ra(t, n, s),
            An = l;
            break;
        case 22:
            t.memoizedState === null && (l = t.alternate,
            l !== null && l.memoizedState !== null ? (l = hr,
            hr = 16777216,
            ra(t, n, s),
            hr = l) : ra(t, n, s));
            break;
        default:
            ra(t, n, s)
        }
    }
    function qy(t) {
        var n = t.alternate;
        if (n !== null && (t = n.child,
        t !== null)) {
            n.child = null;
            do
                n = t.sibling,
                t.sibling = null,
                t = n;
            while (t !== null)
        }
    }
    function mr(t) {
        var n = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (n !== null)
                for (var s = 0; s < n.length; s++) {
                    var l = n[s];
                    Te = l,
                    Gy(l, t)
                }
            qy(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                Fy(t),
                t = t.sibling
    }
    function Fy(t) {
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            mr(t),
            t.flags & 2048 && Ri(9, t, t.return);
            break;
        case 3:
            mr(t);
            break;
        case 12:
            mr(t);
            break;
        case 22:
            var n = t.stateNode;
            t.memoizedState !== null && n._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (n._visibility &= -3,
            eo(t)) : mr(t);
            break;
        default:
            mr(t)
        }
    }
    function eo(t) {
        var n = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (n !== null)
                for (var s = 0; s < n.length; s++) {
                    var l = n[s];
                    Te = l,
                    Gy(l, t)
                }
            qy(t)
        }
        for (t = t.child; t !== null; ) {
            switch (n = t,
            n.tag) {
            case 0:
            case 11:
            case 15:
                Ri(8, n, n.return),
                eo(n);
                break;
            case 22:
                s = n.stateNode,
                s._visibility & 2 && (s._visibility &= -3,
                eo(n));
                break;
            default:
                eo(n)
            }
            t = t.sibling
        }
    }
    function Gy(t, n) {
        for (; Te !== null; ) {
            var s = Te;
            switch (s.tag) {
            case 0:
            case 11:
            case 15:
                Ri(8, s, n);
                break;
            case 23:
            case 22:
                if (s.memoizedState !== null && s.memoizedState.cachePool !== null) {
                    var l = s.memoizedState.cachePool.pool;
                    l != null && l.refCount++
                }
                break;
            case 24:
                Wa(s.memoizedState.cache)
            }
            if (l = s.child,
            l !== null)
                l.return = s,
                Te = l;
            else
                t: for (s = t; Te !== null; ) {
                    l = Te;
                    var c = l.sibling
                      , d = l.return;
                    if (Vy(l),
                    l === s) {
                        Te = null;
                        break t
                    }
                    if (c !== null) {
                        c.return = d,
                        Te = c;
                        break t
                    }
                    Te = d
                }
        }
    }
    var wT = {
        getCacheForType: function(t) {
            var n = Me(oe)
              , s = n.data.get(t);
            return s === void 0 && (s = t(),
            n.data.set(t, s)),
            s
        },
        cacheSignal: function() {
            return Me(oe).controller.signal
        }
    }
      , TT = typeof WeakMap == "function" ? WeakMap : Map
      , Bt = 0
      , Yt = null
      , Dt = null
      , jt = 0
      , Pt = 0
      , tn = null
      , ji = !1
      , la = !1
      , rf = !1
      , ui = 0
      , se = 0
      , Oi = 0
      , vs = 0
      , lf = 0
      , en = 0
      , oa = 0
      , pr = null
      , Xe = null
      , of = !1
      , no = 0
      , Yy = 0
      , io = 1 / 0
      , so = null
      , _i = null
      , pe = 0
      , Vi = null
      , ca = null
      , fi = 0
      , cf = 0
      , uf = null
      , Xy = null
      , yr = 0
      , ff = null;
    function nn() {
        return (Bt & 2) !== 0 && jt !== 0 ? jt & -jt : z.T !== null ? gf() : om()
    }
    function Qy() {
        if (en === 0)
            if ((jt & 536870912) === 0 || _t) {
                var t = dl;
                dl <<= 1,
                (dl & 3932160) === 0 && (dl = 262144),
                en = t
            } else
                en = 536870912;
        return t = Je.current,
        t !== null && (t.flags |= 32),
        en
    }
    function Qe(t, n, s) {
        (t === Yt && (Pt === 2 || Pt === 9) || t.cancelPendingCommit !== null) && (ua(t, 0),
        zi(t, jt, en, !1)),
        Ua(t, s),
        ((Bt & 2) === 0 || t !== Yt) && (t === Yt && ((Bt & 2) === 0 && (vs |= s),
        se === 4 && zi(t, jt, en, !1)),
        Bn(t))
    }
    function Ky(t, n, s) {
        if ((Bt & 6) !== 0)
            throw Error(r(327));
        var l = !s && (n & 127) === 0 && (n & t.expiredLanes) === 0 || La(t, n)
          , c = l ? CT(t, n) : hf(t, n, !0)
          , d = l;
        do {
            if (c === 0) {
                la && !l && zi(t, n, 0, !1);
                break
            } else {
                if (s = t.current.alternate,
                d && !AT(s)) {
                    c = hf(t, n, !1),
                    d = !1;
                    continue
                }
                if (c === 2) {
                    if (d = n,
                    t.errorRecoveryDisabledLanes & d)
                        var y = 0;
                    else
                        y = t.pendingLanes & -536870913,
                        y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
                    if (y !== 0) {
                        n = y;
                        t: {
                            var b = t;
                            c = pr;
                            var C = b.current.memoizedState.isDehydrated;
                            if (C && (ua(b, y).flags |= 256),
                            y = hf(b, y, !1),
                            y !== 2) {
                                if (rf && !C) {
                                    b.errorRecoveryDisabledLanes |= d,
                                    vs |= d,
                                    c = 4;
                                    break t
                                }
                                d = Xe,
                                Xe = c,
                                d !== null && (Xe === null ? Xe = d : Xe.push.apply(Xe, d))
                            }
                            c = y
                        }
                        if (d = !1,
                        c !== 2)
                            continue
                    }
                }
                if (c === 1) {
                    ua(t, 0),
                    zi(t, n, 0, !0);
                    break
                }
                t: {
                    switch (l = t,
                    d = c,
                    d) {
                    case 0:
                    case 1:
                        throw Error(r(345));
                    case 4:
                        if ((n & 4194048) !== n)
                            break;
                    case 6:
                        zi(l, n, en, !ji);
                        break t;
                    case 2:
                        Xe = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(r(329))
                    }
                    if ((n & 62914560) === n && (c = no + 300 - it(),
                    10 < c)) {
                        if (zi(l, n, en, !ji),
                        ml(l, 0, !0) !== 0)
                            break t;
                        fi = n,
                        l.timeoutHandle = Eg(Zy.bind(null, l, s, Xe, so, of, n, en, vs, oa, ji, d, "Throttled", -0, 0), c);
                        break t
                    }
                    Zy(l, s, Xe, so, of, n, en, vs, oa, ji, d, null, -0, 0)
                }
            }
            break
        } while (!0);
        Bn(t)
    }
    function Zy(t, n, s, l, c, d, y, b, C, U, Q, W, P, F) {
        if (t.timeoutHandle = -1,
        W = n.subtreeFlags,
        W & 8192 || (W & 16785408) === 16785408) {
            W = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: In
            },
            Hy(n, d, W);
            var ut = (d & 62914560) === d ? no - it() : (d & 4194048) === d ? Yy - it() : 0;
            if (ut = oA(W, ut),
            ut !== null) {
                fi = d,
                t.cancelPendingCommit = ut(ig.bind(null, t, n, d, s, l, c, y, b, C, Q, W, null, P, F)),
                zi(t, d, y, !U);
                return
            }
        }
        ig(t, n, d, s, l, c, y, b, C)
    }
    function AT(t) {
        for (var n = t; ; ) {
            var s = n.tag;
            if ((s === 0 || s === 11 || s === 15) && n.flags & 16384 && (s = n.updateQueue,
            s !== null && (s = s.stores,
            s !== null)))
                for (var l = 0; l < s.length; l++) {
                    var c = s[l]
                      , d = c.getSnapshot;
                    c = c.value;
                    try {
                        if (!Ie(d(), c))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (s = n.child,
            n.subtreeFlags & 16384 && s !== null)
                s.return = n,
                n = s;
            else {
                if (n === t)
                    break;
                for (; n.sibling === null; ) {
                    if (n.return === null || n.return === t)
                        return !0;
                    n = n.return
                }
                n.sibling.return = n.return,
                n = n.sibling
            }
        }
        return !0
    }
    function zi(t, n, s, l) {
        n &= ~lf,
        n &= ~vs,
        t.suspendedLanes |= n,
        t.pingedLanes &= ~n,
        l && (t.warmLanes |= n),
        l = t.expirationTimes;
        for (var c = n; 0 < c; ) {
            var d = 31 - Ve(c)
              , y = 1 << d;
            l[d] = -1,
            c &= ~y
        }
        s !== 0 && am(t, s, n)
    }
    function ao() {
        return (Bt & 6) === 0 ? (gr(0),
        !1) : !0
    }
    function df() {
        if (Dt !== null) {
            if (Pt === 0)
                var t = Dt.return;
            else
                t = Dt,
                ti = cs = null,
                Mu(t),
                ta = null,
                $a = 0,
                t = Dt;
            for (; t !== null; )
                Cy(t.alternate, t),
                t = t.return;
            Dt = null
        }
    }
    function ua(t, n) {
        var s = t.timeoutHandle;
        s !== -1 && (t.timeoutHandle = -1,
        GT(s)),
        s = t.cancelPendingCommit,
        s !== null && (t.cancelPendingCommit = null,
        s()),
        fi = 0,
        df(),
        Yt = t,
        Dt = s = Jn(t.current, null),
        jt = n,
        Pt = 0,
        tn = null,
        ji = !1,
        la = La(t, n),
        rf = !1,
        oa = en = lf = vs = Oi = se = 0,
        Xe = pr = null,
        of = !1,
        (n & 8) !== 0 && (n |= n & 32);
        var l = t.entangledLanes;
        if (l !== 0)
            for (t = t.entanglements,
            l &= n; 0 < l; ) {
                var c = 31 - Ve(l)
                  , d = 1 << c;
                n |= t[c],
                l &= ~d
            }
        return ui = n,
        Cl(),
        s
    }
    function Iy(t, n) {
        Ct = null,
        z.H = lr,
        n === $s || n === Vl ? (n = dp(),
        Pt = 3) : n === pu ? (n = dp(),
        Pt = 4) : Pt = n === Fu ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1,
        tn = n,
        Dt === null && (se = 1,
        Kl(t, dn(n, t.current)))
    }
    function Wy() {
        var t = Je.current;
        return t === null ? !0 : (jt & 4194048) === jt ? yn === null : (jt & 62914560) === jt || (jt & 536870912) !== 0 ? t === yn : !1
    }
    function Jy() {
        var t = z.H;
        return z.H = lr,
        t === null ? lr : t
    }
    function $y() {
        var t = z.A;
        return z.A = wT,
        t
    }
    function ro() {
        se = 4,
        ji || (jt & 4194048) !== jt && Je.current !== null || (la = !0),
        (Oi & 134217727) === 0 && (vs & 134217727) === 0 || Yt === null || zi(Yt, jt, en, !1)
    }
    function hf(t, n, s) {
        var l = Bt;
        Bt |= 2;
        var c = Jy()
          , d = $y();
        (Yt !== t || jt !== n) && (so = null,
        ua(t, n)),
        n = !1;
        var y = se;
        t: do
            try {
                if (Pt !== 0 && Dt !== null) {
                    var b = Dt
                      , C = tn;
                    switch (Pt) {
                    case 8:
                        df(),
                        y = 6;
                        break t;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        Je.current === null && (n = !0);
                        var U = Pt;
                        if (Pt = 0,
                        tn = null,
                        fa(t, b, C, U),
                        s && la) {
                            y = 0;
                            break t
                        }
                        break;
                    default:
                        U = Pt,
                        Pt = 0,
                        tn = null,
                        fa(t, b, C, U)
                    }
                }
                ET(),
                y = se;
                break
            } catch (Q) {
                Iy(t, Q)
            }
        while (!0);
        return n && t.shellSuspendCounter++,
        ti = cs = null,
        Bt = l,
        z.H = c,
        z.A = d,
        Dt === null && (Yt = null,
        jt = 0,
        Cl()),
        y
    }
    function ET() {
        for (; Dt !== null; )
            tg(Dt)
    }
    function CT(t, n) {
        var s = Bt;
        Bt |= 2;
        var l = Jy()
          , c = $y();
        Yt !== t || jt !== n ? (so = null,
        io = it() + 500,
        ua(t, n)) : la = La(t, n);
        t: do
            try {
                if (Pt !== 0 && Dt !== null) {
                    n = Dt;
                    var d = tn;
                    e: switch (Pt) {
                    case 1:
                        Pt = 0,
                        tn = null,
                        fa(t, n, d, 1);
                        break;
                    case 2:
                    case 9:
                        if (up(d)) {
                            Pt = 0,
                            tn = null,
                            eg(n);
                            break
                        }
                        n = function() {
                            Pt !== 2 && Pt !== 9 || Yt !== t || (Pt = 7),
                            Bn(t)
                        }
                        ,
                        d.then(n, n);
                        break t;
                    case 3:
                        Pt = 7;
                        break t;
                    case 4:
                        Pt = 5;
                        break t;
                    case 7:
                        up(d) ? (Pt = 0,
                        tn = null,
                        eg(n)) : (Pt = 0,
                        tn = null,
                        fa(t, n, d, 7));
                        break;
                    case 5:
                        var y = null;
                        switch (Dt.tag) {
                        case 26:
                            y = Dt.memoizedState;
                        case 5:
                        case 27:
                            var b = Dt;
                            if (y ? Pg(y) : b.stateNode.complete) {
                                Pt = 0,
                                tn = null;
                                var C = b.sibling;
                                if (C !== null)
                                    Dt = C;
                                else {
                                    var U = b.return;
                                    U !== null ? (Dt = U,
                                    lo(U)) : Dt = null
                                }
                                break e
                            }
                        }
                        Pt = 0,
                        tn = null,
                        fa(t, n, d, 5);
                        break;
                    case 6:
                        Pt = 0,
                        tn = null,
                        fa(t, n, d, 6);
                        break;
                    case 8:
                        df(),
                        se = 6;
                        break t;
                    default:
                        throw Error(r(462))
                    }
                }
                MT();
                break
            } catch (Q) {
                Iy(t, Q)
            }
        while (!0);
        return ti = cs = null,
        z.H = l,
        z.A = c,
        Bt = s,
        Dt !== null ? 0 : (Yt = null,
        jt = 0,
        Cl(),
        se)
    }
    function MT() {
        for (; Dt !== null && !B(); )
            tg(Dt)
    }
    function tg(t) {
        var n = Ay(t.alternate, t, ui);
        t.memoizedProps = t.pendingProps,
        n === null ? lo(t) : Dt = n
    }
    function eg(t) {
        var n = t
          , s = n.alternate;
        switch (n.tag) {
        case 15:
        case 0:
            n = vy(s, n, n.pendingProps, n.type, void 0, jt);
            break;
        case 11:
            n = vy(s, n, n.pendingProps, n.type.render, n.ref, jt);
            break;
        case 5:
            Mu(n);
        default:
            Cy(s, n),
            n = Dt = $m(n, ui),
            n = Ay(s, n, ui)
        }
        t.memoizedProps = t.pendingProps,
        n === null ? lo(t) : Dt = n
    }
    function fa(t, n, s, l) {
        ti = cs = null,
        Mu(n),
        ta = null,
        $a = 0;
        var c = n.return;
        try {
            if (pT(t, c, n, s, jt)) {
                se = 1,
                Kl(t, dn(s, t.current)),
                Dt = null;
                return
            }
        } catch (d) {
            if (c !== null)
                throw Dt = c,
                d;
            se = 1,
            Kl(t, dn(s, t.current)),
            Dt = null;
            return
        }
        n.flags & 32768 ? (_t || l === 1 ? t = !0 : la || (jt & 536870912) !== 0 ? t = !1 : (ji = t = !0,
        (l === 2 || l === 9 || l === 3 || l === 6) && (l = Je.current,
        l !== null && l.tag === 13 && (l.flags |= 16384))),
        ng(n, t)) : lo(n)
    }
    function lo(t) {
        var n = t;
        do {
            if ((n.flags & 32768) !== 0) {
                ng(n, ji);
                return
            }
            t = n.return;
            var s = vT(n.alternate, n, ui);
            if (s !== null) {
                Dt = s;
                return
            }
            if (n = n.sibling,
            n !== null) {
                Dt = n;
                return
            }
            Dt = n = t
        } while (n !== null);
        se === 0 && (se = 5)
    }
    function ng(t, n) {
        do {
            var s = xT(t.alternate, t);
            if (s !== null) {
                s.flags &= 32767,
                Dt = s;
                return
            }
            if (s = t.return,
            s !== null && (s.flags |= 32768,
            s.subtreeFlags = 0,
            s.deletions = null),
            !n && (t = t.sibling,
            t !== null)) {
                Dt = t;
                return
            }
            Dt = t = s
        } while (t !== null);
        se = 6,
        Dt = null
    }
    function ig(t, n, s, l, c, d, y, b, C) {
        t.cancelPendingCommit = null;
        do
            oo();
        while (pe !== 0);
        if ((Bt & 6) !== 0)
            throw Error(r(327));
        if (n !== null) {
            if (n === t.current)
                throw Error(r(177));
            if (d = n.lanes | n.childLanes,
            d |= tu,
            rw(t, s, d, y, b, C),
            t === Yt && (Dt = Yt = null,
            jt = 0),
            ca = n,
            Vi = t,
            fi = s,
            cf = d,
            uf = c,
            Xy = l,
            (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (t.callbackNode = null,
            t.callbackPriority = 0,
            jT(Vt, function() {
                return og(),
                null
            })) : (t.callbackNode = null,
            t.callbackPriority = 0),
            l = (n.flags & 13878) !== 0,
            (n.subtreeFlags & 13878) !== 0 || l) {
                l = z.T,
                z.T = null,
                c = q.p,
                q.p = 2,
                y = Bt,
                Bt |= 4;
                try {
                    bT(t, n, s)
                } finally {
                    Bt = y,
                    q.p = c,
                    z.T = l
                }
            }
            pe = 1,
            sg(),
            ag(),
            rg()
        }
    }
    function sg() {
        if (pe === 1) {
            pe = 0;
            var t = Vi
              , n = ca
              , s = (n.flags & 13878) !== 0;
            if ((n.subtreeFlags & 13878) !== 0 || s) {
                s = z.T,
                z.T = null;
                var l = q.p;
                q.p = 2;
                var c = Bt;
                Bt |= 4;
                try {
                    ky(n, t);
                    var d = Ef
                      , y = Gm(t.containerInfo)
                      , b = d.focusedElem
                      , C = d.selectionRange;
                    if (y !== b && b && b.ownerDocument && Fm(b.ownerDocument.documentElement, b)) {
                        if (C !== null && Zc(b)) {
                            var U = C.start
                              , Q = C.end;
                            if (Q === void 0 && (Q = U),
                            "selectionStart"in b)
                                b.selectionStart = U,
                                b.selectionEnd = Math.min(Q, b.value.length);
                            else {
                                var W = b.ownerDocument || document
                                  , P = W && W.defaultView || window;
                                if (P.getSelection) {
                                    var F = P.getSelection()
                                      , ut = b.textContent.length
                                      , wt = Math.min(C.start, ut)
                                      , Gt = C.end === void 0 ? wt : Math.min(C.end, ut);
                                    !F.extend && wt > Gt && (y = Gt,
                                    Gt = wt,
                                    wt = y);
                                    var _ = qm(b, wt)
                                      , R = qm(b, Gt);
                                    if (_ && R && (F.rangeCount !== 1 || F.anchorNode !== _.node || F.anchorOffset !== _.offset || F.focusNode !== R.node || F.focusOffset !== R.offset)) {
                                        var L = W.createRange();
                                        L.setStart(_.node, _.offset),
                                        F.removeAllRanges(),
                                        wt > Gt ? (F.addRange(L),
                                        F.extend(R.node, R.offset)) : (L.setEnd(R.node, R.offset),
                                        F.addRange(L))
                                    }
                                }
                            }
                        }
                        for (W = [],
                        F = b; F = F.parentNode; )
                            F.nodeType === 1 && W.push({
                                element: F,
                                left: F.scrollLeft,
                                top: F.scrollTop
                            });
                        for (typeof b.focus == "function" && b.focus(),
                        b = 0; b < W.length; b++) {
                            var I = W[b];
                            I.element.scrollLeft = I.left,
                            I.element.scrollTop = I.top
                        }
                    }
                    So = !!Af,
                    Ef = Af = null
                } finally {
                    Bt = c,
                    q.p = l,
                    z.T = s
                }
            }
            t.current = n,
            pe = 2
        }
    }
    function ag() {
        if (pe === 2) {
            pe = 0;
            var t = Vi
              , n = ca
              , s = (n.flags & 8772) !== 0;
            if ((n.subtreeFlags & 8772) !== 0 || s) {
                s = z.T,
                z.T = null;
                var l = q.p;
                q.p = 2;
                var c = Bt;
                Bt |= 4;
                try {
                    _y(t, n.alternate, n)
                } finally {
                    Bt = c,
                    q.p = l,
                    z.T = s
                }
            }
            pe = 3
        }
    }
    function rg() {
        if (pe === 4 || pe === 3) {
            pe = 0,
            X();
            var t = Vi
              , n = ca
              , s = fi
              , l = Xy;
            (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? pe = 5 : (pe = 0,
            ca = Vi = null,
            lg(t, t.pendingLanes));
            var c = t.pendingLanes;
            if (c === 0 && (_i = null),
            Rc(s),
            n = n.stateNode,
            Ae && typeof Ae.onCommitFiberRoot == "function")
                try {
                    Ae.onCommitFiberRoot(ts, n, void 0, (n.current.flags & 128) === 128)
                } catch {}
            if (l !== null) {
                n = z.T,
                c = q.p,
                q.p = 2,
                z.T = null;
                try {
                    for (var d = t.onRecoverableError, y = 0; y < l.length; y++) {
                        var b = l[y];
                        d(b.value, {
                            componentStack: b.stack
                        })
                    }
                } finally {
                    z.T = n,
                    q.p = c
                }
            }
            (fi & 3) !== 0 && oo(),
            Bn(t),
            c = t.pendingLanes,
            (s & 261930) !== 0 && (c & 42) !== 0 ? t === ff ? yr++ : (yr = 0,
            ff = t) : yr = 0,
            gr(0)
        }
    }
    function lg(t, n) {
        (t.pooledCacheLanes &= n) === 0 && (n = t.pooledCache,
        n != null && (t.pooledCache = null,
        Wa(n)))
    }
    function oo() {
        return sg(),
        ag(),
        rg(),
        og()
    }
    function og() {
        if (pe !== 5)
            return !1;
        var t = Vi
          , n = cf;
        cf = 0;
        var s = Rc(fi)
          , l = z.T
          , c = q.p;
        try {
            q.p = 32 > s ? 32 : s,
            z.T = null,
            s = uf,
            uf = null;
            var d = Vi
              , y = fi;
            if (pe = 0,
            ca = Vi = null,
            fi = 0,
            (Bt & 6) !== 0)
                throw Error(r(331));
            var b = Bt;
            if (Bt |= 4,
            Fy(d.current),
            Py(d, d.current, y, s),
            Bt = b,
            gr(0, !1),
            Ae && typeof Ae.onPostCommitFiberRoot == "function")
                try {
                    Ae.onPostCommitFiberRoot(ts, d)
                } catch {}
            return !0
        } finally {
            q.p = c,
            z.T = l,
            lg(t, n)
        }
    }
    function cg(t, n, s) {
        n = dn(s, n),
        n = qu(t.stateNode, n, 2),
        t = Mi(t, n, 2),
        t !== null && (Ua(t, 2),
        Bn(t))
    }
    function Ht(t, n, s) {
        if (t.tag === 3)
            cg(t, t, s);
        else
            for (; n !== null; ) {
                if (n.tag === 3) {
                    cg(n, t, s);
                    break
                } else if (n.tag === 1) {
                    var l = n.stateNode;
                    if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (_i === null || !_i.has(l))) {
                        t = dn(s, t),
                        s = uy(2),
                        l = Mi(n, s, 2),
                        l !== null && (fy(s, l, n, t),
                        Ua(l, 2),
                        Bn(l));
                        break
                    }
                }
                n = n.return
            }
    }
    function mf(t, n, s) {
        var l = t.pingCache;
        if (l === null) {
            l = t.pingCache = new TT;
            var c = new Set;
            l.set(n, c)
        } else
            c = l.get(n),
            c === void 0 && (c = new Set,
            l.set(n, c));
        c.has(s) || (rf = !0,
        c.add(s),
        t = NT.bind(null, t, n, s),
        n.then(t, t))
    }
    function NT(t, n, s) {
        var l = t.pingCache;
        l !== null && l.delete(n),
        t.pingedLanes |= t.suspendedLanes & s,
        t.warmLanes &= ~s,
        Yt === t && (jt & s) === s && (se === 4 || se === 3 && (jt & 62914560) === jt && 300 > it() - no ? (Bt & 2) === 0 && ua(t, 0) : lf |= s,
        oa === jt && (oa = 0)),
        Bn(t)
    }
    function ug(t, n) {
        n === 0 && (n = sm()),
        t = rs(t, n),
        t !== null && (Ua(t, n),
        Bn(t))
    }
    function DT(t) {
        var n = t.memoizedState
          , s = 0;
        n !== null && (s = n.retryLane),
        ug(t, s)
    }
    function RT(t, n) {
        var s = 0;
        switch (t.tag) {
        case 31:
        case 13:
            var l = t.stateNode
              , c = t.memoizedState;
            c !== null && (s = c.retryLane);
            break;
        case 19:
            l = t.stateNode;
            break;
        case 22:
            l = t.stateNode._retryCache;
            break;
        default:
            throw Error(r(314))
        }
        l !== null && l.delete(n),
        ug(t, s)
    }
    function jT(t, n) {
        return Os(t, n)
    }
    var co = null
      , da = null
      , pf = !1
      , uo = !1
      , yf = !1
      , Li = 0;
    function Bn(t) {
        t !== da && t.next === null && (da === null ? co = da = t : da = da.next = t),
        uo = !0,
        pf || (pf = !0,
        _T())
    }
    function gr(t, n) {
        if (!yf && uo) {
            yf = !0;
            do
                for (var s = !1, l = co; l !== null; ) {
                    if (t !== 0) {
                        var c = l.pendingLanes;
                        if (c === 0)
                            var d = 0;
                        else {
                            var y = l.suspendedLanes
                              , b = l.pingedLanes;
                            d = (1 << 31 - Ve(42 | t) + 1) - 1,
                            d &= c & ~(y & ~b),
                            d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0
                        }
                        d !== 0 && (s = !0,
                        mg(l, d))
                    } else
                        d = jt,
                        d = ml(l, l === Yt ? d : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
                        (d & 3) === 0 || La(l, d) || (s = !0,
                        mg(l, d));
                    l = l.next
                }
            while (s);
            yf = !1
        }
    }
    function OT() {
        fg()
    }
    function fg() {
        uo = pf = !1;
        var t = 0;
        Li !== 0 && FT() && (t = Li);
        for (var n = it(), s = null, l = co; l !== null; ) {
            var c = l.next
              , d = dg(l, n);
            d === 0 ? (l.next = null,
            s === null ? co = c : s.next = c,
            c === null && (da = s)) : (s = l,
            (t !== 0 || (d & 3) !== 0) && (uo = !0)),
            l = c
        }
        pe !== 0 && pe !== 5 || gr(t),
        Li !== 0 && (Li = 0)
    }
    function dg(t, n) {
        for (var s = t.suspendedLanes, l = t.pingedLanes, c = t.expirationTimes, d = t.pendingLanes & -62914561; 0 < d; ) {
            var y = 31 - Ve(d)
              , b = 1 << y
              , C = c[y];
            C === -1 ? ((b & s) === 0 || (b & l) !== 0) && (c[y] = aw(b, n)) : C <= n && (t.expiredLanes |= b),
            d &= ~b
        }
        if (n = Yt,
        s = jt,
        s = ml(t, t === n ? s : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        l = t.callbackNode,
        s === 0 || t === n && (Pt === 2 || Pt === 9) || t.cancelPendingCommit !== null)
            return l !== null && l !== null && N(l),
            t.callbackNode = null,
            t.callbackPriority = 0;
        if ((s & 3) === 0 || La(t, s)) {
            if (n = s & -s,
            n === t.callbackPriority)
                return n;
            switch (l !== null && N(l),
            Rc(s)) {
            case 2:
            case 8:
                s = vt;
                break;
            case 32:
                s = Vt;
                break;
            case 268435456:
                s = Se;
                break;
            default:
                s = Vt
            }
            return l = hg.bind(null, t),
            s = Os(s, l),
            t.callbackPriority = n,
            t.callbackNode = s,
            n
        }
        return l !== null && l !== null && N(l),
        t.callbackPriority = 2,
        t.callbackNode = null,
        2
    }
    function hg(t, n) {
        if (pe !== 0 && pe !== 5)
            return t.callbackNode = null,
            t.callbackPriority = 0,
            null;
        var s = t.callbackNode;
        if (oo() && t.callbackNode !== s)
            return null;
        var l = jt;
        return l = ml(t, t === Yt ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        l === 0 ? null : (Ky(t, l, n),
        dg(t, it()),
        t.callbackNode != null && t.callbackNode === s ? hg.bind(null, t) : null)
    }
    function mg(t, n) {
        if (oo())
            return null;
        Ky(t, n, !0)
    }
    function _T() {
        YT(function() {
            (Bt & 6) !== 0 ? Os(et, OT) : fg()
        })
    }
    function gf() {
        if (Li === 0) {
            var t = Ws;
            t === 0 && (t = fl,
            fl <<= 1,
            (fl & 261888) === 0 && (fl = 256)),
            Li = t
        }
        return Li
    }
    function pg(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : vl("" + t)
    }
    function yg(t, n) {
        var s = n.ownerDocument.createElement("input");
        return s.name = n.name,
        s.value = n.value,
        t.id && s.setAttribute("form", t.id),
        n.parentNode.insertBefore(s, n),
        t = new FormData(t),
        s.parentNode.removeChild(s),
        t
    }
    function VT(t, n, s, l, c) {
        if (n === "submit" && s && s.stateNode === c) {
            var d = pg((c[He] || null).action)
              , y = l.submitter;
            y && (n = (n = y[He] || null) ? pg(n.formAction) : y.getAttribute("formAction"),
            n !== null && (d = n,
            y = null));
            var b = new wl("action","action",null,l,c);
            t.push({
                event: b,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (l.defaultPrevented) {
                            if (Li !== 0) {
                                var C = y ? yg(c, y) : new FormData(c);
                                Lu(s, {
                                    pending: !0,
                                    data: C,
                                    method: c.method,
                                    action: d
                                }, null, C)
                            }
                        } else
                            typeof d == "function" && (b.preventDefault(),
                            C = y ? yg(c, y) : new FormData(c),
                            Lu(s, {
                                pending: !0,
                                data: C,
                                method: c.method,
                                action: d
                            }, d, C))
                    },
                    currentTarget: c
                }]
            })
        }
    }
    for (var vf = 0; vf < $c.length; vf++) {
        var xf = $c[vf]
          , zT = xf.toLowerCase()
          , LT = xf[0].toUpperCase() + xf.slice(1);
        Tn(zT, "on" + LT)
    }
    Tn(Qm, "onAnimationEnd"),
    Tn(Km, "onAnimationIteration"),
    Tn(Zm, "onAnimationStart"),
    Tn("dblclick", "onDoubleClick"),
    Tn("focusin", "onFocus"),
    Tn("focusout", "onBlur"),
    Tn(Jw, "onTransitionRun"),
    Tn($w, "onTransitionStart"),
    Tn(tT, "onTransitionCancel"),
    Tn(Im, "onTransitionEnd"),
    Us("onMouseEnter", ["mouseout", "mouseover"]),
    Us("onMouseLeave", ["mouseout", "mouseover"]),
    Us("onPointerEnter", ["pointerout", "pointerover"]),
    Us("onPointerLeave", ["pointerout", "pointerover"]),
    ns("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    ns("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    ns("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ns("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    ns("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    ns("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var vr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , UT = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vr));
    function gg(t, n) {
        n = (n & 4) !== 0;
        for (var s = 0; s < t.length; s++) {
            var l = t[s]
              , c = l.event;
            l = l.listeners;
            t: {
                var d = void 0;
                if (n)
                    for (var y = l.length - 1; 0 <= y; y--) {
                        var b = l[y]
                          , C = b.instance
                          , U = b.currentTarget;
                        if (b = b.listener,
                        C !== d && c.isPropagationStopped())
                            break t;
                        d = b,
                        c.currentTarget = U;
                        try {
                            d(c)
                        } catch (Q) {
                            El(Q)
                        }
                        c.currentTarget = null,
                        d = C
                    }
                else
                    for (y = 0; y < l.length; y++) {
                        if (b = l[y],
                        C = b.instance,
                        U = b.currentTarget,
                        b = b.listener,
                        C !== d && c.isPropagationStopped())
                            break t;
                        d = b,
                        c.currentTarget = U;
                        try {
                            d(c)
                        } catch (Q) {
                            El(Q)
                        }
                        c.currentTarget = null,
                        d = C
                    }
            }
        }
    }
    function Rt(t, n) {
        var s = n[jc];
        s === void 0 && (s = n[jc] = new Set);
        var l = t + "__bubble";
        s.has(l) || (vg(n, t, 2, !1),
        s.add(l))
    }
    function bf(t, n, s) {
        var l = 0;
        n && (l |= 4),
        vg(s, t, l, n)
    }
    var fo = "_reactListening" + Math.random().toString(36).slice(2);
    function Sf(t) {
        if (!t[fo]) {
            t[fo] = !0,
            fm.forEach(function(s) {
                s !== "selectionchange" && (UT.has(s) || bf(s, !1, t),
                bf(s, !0, t))
            });
            var n = t.nodeType === 9 ? t : t.ownerDocument;
            n === null || n[fo] || (n[fo] = !0,
            bf("selectionchange", !1, n))
        }
    }
    function vg(t, n, s, l) {
        switch (Qg(n)) {
        case 2:
            var c = fA;
            break;
        case 8:
            c = dA;
            break;
        default:
            c = Lf
        }
        s = c.bind(null, n, s, t),
        c = void 0,
        !Pc || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (c = !0),
        l ? c !== void 0 ? t.addEventListener(n, s, {
            capture: !0,
            passive: c
        }) : t.addEventListener(n, s, !0) : c !== void 0 ? t.addEventListener(n, s, {
            passive: c
        }) : t.addEventListener(n, s, !1)
    }
    function wf(t, n, s, l, c) {
        var d = l;
        if ((n & 1) === 0 && (n & 2) === 0 && l !== null)
            t: for (; ; ) {
                if (l === null)
                    return;
                var y = l.tag;
                if (y === 3 || y === 4) {
                    var b = l.stateNode.containerInfo;
                    if (b === c)
                        break;
                    if (y === 4)
                        for (y = l.return; y !== null; ) {
                            var C = y.tag;
                            if ((C === 3 || C === 4) && y.stateNode.containerInfo === c)
                                return;
                            y = y.return
                        }
                    for (; b !== null; ) {
                        if (y = Vs(b),
                        y === null)
                            return;
                        if (C = y.tag,
                        C === 5 || C === 6 || C === 26 || C === 27) {
                            l = d = y;
                            continue t
                        }
                        b = b.parentNode
                    }
                }
                l = l.return
            }
        Tm(function() {
            var U = d
              , Q = kc(s)
              , W = [];
            t: {
                var P = Wm.get(t);
                if (P !== void 0) {
                    var F = wl
                      , ut = t;
                    switch (t) {
                    case "keypress":
                        if (bl(s) === 0)
                            break t;
                    case "keydown":
                    case "keyup":
                        F = Rw;
                        break;
                    case "focusin":
                        ut = "focus",
                        F = Gc;
                        break;
                    case "focusout":
                        ut = "blur",
                        F = Gc;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        F = Gc;
                        break;
                    case "click":
                        if (s.button === 2)
                            break t;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        F = Cm;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        F = vw;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        F = _w;
                        break;
                    case Qm:
                    case Km:
                    case Zm:
                        F = Sw;
                        break;
                    case Im:
                        F = zw;
                        break;
                    case "scroll":
                    case "scrollend":
                        F = yw;
                        break;
                    case "wheel":
                        F = Uw;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        F = Tw;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        F = Nm;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        F = Bw
                    }
                    var wt = (n & 4) !== 0
                      , Gt = !wt && (t === "scroll" || t === "scrollend")
                      , _ = wt ? P !== null ? P + "Capture" : null : P;
                    wt = [];
                    for (var R = U, L; R !== null; ) {
                        var I = R;
                        if (L = I.stateNode,
                        I = I.tag,
                        I !== 5 && I !== 26 && I !== 27 || L === null || _ === null || (I = Pa(R, _),
                        I != null && wt.push(xr(R, I, L))),
                        Gt)
                            break;
                        R = R.return
                    }
                    0 < wt.length && (P = new F(P,ut,null,s,Q),
                    W.push({
                        event: P,
                        listeners: wt
                    }))
                }
            }
            if ((n & 7) === 0) {
                t: {
                    if (P = t === "mouseover" || t === "pointerover",
                    F = t === "mouseout" || t === "pointerout",
                    P && s !== Uc && (ut = s.relatedTarget || s.fromElement) && (Vs(ut) || ut[_s]))
                        break t;
                    if ((F || P) && (P = Q.window === Q ? Q : (P = Q.ownerDocument) ? P.defaultView || P.parentWindow : window,
                    F ? (ut = s.relatedTarget || s.toElement,
                    F = U,
                    ut = ut ? Vs(ut) : null,
                    ut !== null && (Gt = u(ut),
                    wt = ut.tag,
                    ut !== Gt || wt !== 5 && wt !== 27 && wt !== 6) && (ut = null)) : (F = null,
                    ut = U),
                    F !== ut)) {
                        if (wt = Cm,
                        I = "onMouseLeave",
                        _ = "onMouseEnter",
                        R = "mouse",
                        (t === "pointerout" || t === "pointerover") && (wt = Nm,
                        I = "onPointerLeave",
                        _ = "onPointerEnter",
                        R = "pointer"),
                        Gt = F == null ? P : Ba(F),
                        L = ut == null ? P : Ba(ut),
                        P = new wt(I,R + "leave",F,s,Q),
                        P.target = Gt,
                        P.relatedTarget = L,
                        I = null,
                        Vs(Q) === U && (wt = new wt(_,R + "enter",ut,s,Q),
                        wt.target = L,
                        wt.relatedTarget = Gt,
                        I = wt),
                        Gt = I,
                        F && ut)
                            e: {
                                for (wt = kT,
                                _ = F,
                                R = ut,
                                L = 0,
                                I = _; I; I = wt(I))
                                    L++;
                                I = 0;
                                for (var bt = R; bt; bt = wt(bt))
                                    I++;
                                for (; 0 < L - I; )
                                    _ = wt(_),
                                    L--;
                                for (; 0 < I - L; )
                                    R = wt(R),
                                    I--;
                                for (; L--; ) {
                                    if (_ === R || R !== null && _ === R.alternate) {
                                        wt = _;
                                        break e
                                    }
                                    _ = wt(_),
                                    R = wt(R)
                                }
                                wt = null
                            }
                        else
                            wt = null;
                        F !== null && xg(W, P, F, wt, !1),
                        ut !== null && Gt !== null && xg(W, Gt, ut, wt, !0)
                    }
                }
                t: {
                    if (P = U ? Ba(U) : window,
                    F = P.nodeName && P.nodeName.toLowerCase(),
                    F === "select" || F === "input" && P.type === "file")
                        var zt = Lm;
                    else if (Vm(P))
                        if (Um)
                            zt = Zw;
                        else {
                            zt = Qw;
                            var pt = Xw
                        }
                    else
                        F = P.nodeName,
                        !F || F.toLowerCase() !== "input" || P.type !== "checkbox" && P.type !== "radio" ? U && Lc(U.elementType) && (zt = Lm) : zt = Kw;
                    if (zt && (zt = zt(t, U))) {
                        zm(W, zt, s, Q);
                        break t
                    }
                    pt && pt(t, P, U),
                    t === "focusout" && U && P.type === "number" && U.memoizedProps.value != null && zc(P, "number", P.value)
                }
                switch (pt = U ? Ba(U) : window,
                t) {
                case "focusin":
                    (Vm(pt) || pt.contentEditable === "true") && (Fs = pt,
                    Ic = U,
                    Ka = null);
                    break;
                case "focusout":
                    Ka = Ic = Fs = null;
                    break;
                case "mousedown":
                    Wc = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Wc = !1,
                    Ym(W, s, Q);
                    break;
                case "selectionchange":
                    if (Ww)
                        break;
                case "keydown":
                case "keyup":
                    Ym(W, s, Q)
                }
                var Mt;
                if (Xc)
                    t: {
                        switch (t) {
                        case "compositionstart":
                            var Ot = "onCompositionStart";
                            break t;
                        case "compositionend":
                            Ot = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            Ot = "onCompositionUpdate";
                            break t
                        }
                        Ot = void 0
                    }
                else
                    qs ? Om(t, s) && (Ot = "onCompositionEnd") : t === "keydown" && s.keyCode === 229 && (Ot = "onCompositionStart");
                Ot && (Dm && s.locale !== "ko" && (qs || Ot !== "onCompositionStart" ? Ot === "onCompositionEnd" && qs && (Mt = Am()) : (bi = Q,
                Hc = "value"in bi ? bi.value : bi.textContent,
                qs = !0)),
                pt = ho(U, Ot),
                0 < pt.length && (Ot = new Mm(Ot,t,null,s,Q),
                W.push({
                    event: Ot,
                    listeners: pt
                }),
                Mt ? Ot.data = Mt : (Mt = _m(s),
                Mt !== null && (Ot.data = Mt)))),
                (Mt = Hw ? qw(t, s) : Fw(t, s)) && (Ot = ho(U, "onBeforeInput"),
                0 < Ot.length && (pt = new Mm("onBeforeInput","beforeinput",null,s,Q),
                W.push({
                    event: pt,
                    listeners: Ot
                }),
                pt.data = Mt)),
                VT(W, t, U, s, Q)
            }
            gg(W, n)
        })
    }
    function xr(t, n, s) {
        return {
            instance: t,
            listener: n,
            currentTarget: s
        }
    }
    function ho(t, n) {
        for (var s = n + "Capture", l = []; t !== null; ) {
            var c = t
              , d = c.stateNode;
            if (c = c.tag,
            c !== 5 && c !== 26 && c !== 27 || d === null || (c = Pa(t, s),
            c != null && l.unshift(xr(t, c, d)),
            c = Pa(t, n),
            c != null && l.push(xr(t, c, d))),
            t.tag === 3)
                return l;
            t = t.return
        }
        return []
    }
    function kT(t) {
        if (t === null)
            return null;
        do
            t = t.return;
        while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }
    function xg(t, n, s, l, c) {
        for (var d = n._reactName, y = []; s !== null && s !== l; ) {
            var b = s
              , C = b.alternate
              , U = b.stateNode;
            if (b = b.tag,
            C !== null && C === l)
                break;
            b !== 5 && b !== 26 && b !== 27 || U === null || (C = U,
            c ? (U = Pa(s, d),
            U != null && y.unshift(xr(s, U, C))) : c || (U = Pa(s, d),
            U != null && y.push(xr(s, U, C)))),
            s = s.return
        }
        y.length !== 0 && t.push({
            event: n,
            listeners: y
        })
    }
    var BT = /\r\n?/g
      , PT = /\u0000|\uFFFD/g;
    function bg(t) {
        return (typeof t == "string" ? t : "" + t).replace(BT, `
`).replace(PT, "")
    }
    function Sg(t, n) {
        return n = bg(n),
        bg(t) === n
    }
    function Ft(t, n, s, l, c, d) {
        switch (s) {
        case "children":
            typeof l == "string" ? n === "body" || n === "textarea" && l === "" || Bs(t, l) : (typeof l == "number" || typeof l == "bigint") && n !== "body" && Bs(t, "" + l);
            break;
        case "className":
            yl(t, "class", l);
            break;
        case "tabIndex":
            yl(t, "tabindex", l);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            yl(t, s, l);
            break;
        case "style":
            Sm(t, l, d);
            break;
        case "data":
            if (n !== "object") {
                yl(t, "data", l);
                break
            }
        case "src":
        case "href":
            if (l === "" && (n !== "a" || s !== "href")) {
                t.removeAttribute(s);
                break
            }
            if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
                t.removeAttribute(s);
                break
            }
            l = vl("" + l),
            t.setAttribute(s, l);
            break;
        case "action":
        case "formAction":
            if (typeof l == "function") {
                t.setAttribute(s, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof d == "function" && (s === "formAction" ? (n !== "input" && Ft(t, n, "name", c.name, c, null),
                Ft(t, n, "formEncType", c.formEncType, c, null),
                Ft(t, n, "formMethod", c.formMethod, c, null),
                Ft(t, n, "formTarget", c.formTarget, c, null)) : (Ft(t, n, "encType", c.encType, c, null),
                Ft(t, n, "method", c.method, c, null),
                Ft(t, n, "target", c.target, c, null)));
            if (l == null || typeof l == "symbol" || typeof l == "boolean") {
                t.removeAttribute(s);
                break
            }
            l = vl("" + l),
            t.setAttribute(s, l);
            break;
        case "onClick":
            l != null && (t.onclick = In);
            break;
        case "onScroll":
            l != null && Rt("scroll", t);
            break;
        case "onScrollEnd":
            l != null && Rt("scrollend", t);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html"in l))
                    throw Error(r(61));
                if (s = l.__html,
                s != null) {
                    if (c.children != null)
                        throw Error(r(60));
                    t.innerHTML = s
                }
            }
            break;
        case "multiple":
            t.multiple = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "muted":
            t.muted = l && typeof l != "function" && typeof l != "symbol";
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
            if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
                t.removeAttribute("xlink:href");
                break
            }
            s = vl("" + l),
            t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(s, "" + l) : t.removeAttribute(s);
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
            l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(s, "") : t.removeAttribute(s);
            break;
        case "capture":
        case "download":
            l === !0 ? t.setAttribute(s, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(s, l) : t.removeAttribute(s);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(s, l) : t.removeAttribute(s);
            break;
        case "rowSpan":
        case "start":
            l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(s) : t.setAttribute(s, l);
            break;
        case "popover":
            Rt("beforetoggle", t),
            Rt("toggle", t),
            pl(t, "popover", l);
            break;
        case "xlinkActuate":
            Zn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
            break;
        case "xlinkArcrole":
            Zn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
            break;
        case "xlinkRole":
            Zn(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
            break;
        case "xlinkShow":
            Zn(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
            break;
        case "xlinkTitle":
            Zn(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
            break;
        case "xlinkType":
            Zn(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
            break;
        case "xmlBase":
            Zn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
            break;
        case "xmlLang":
            Zn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
            break;
        case "xmlSpace":
            Zn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
            break;
        case "is":
            pl(t, "is", l);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (s = mw.get(s) || s,
            pl(t, s, l))
        }
    }
    function Tf(t, n, s, l, c, d) {
        switch (s) {
        case "style":
            Sm(t, l, d);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html"in l))
                    throw Error(r(61));
                if (s = l.__html,
                s != null) {
                    if (c.children != null)
                        throw Error(r(60));
                    t.innerHTML = s
                }
            }
            break;
        case "children":
            typeof l == "string" ? Bs(t, l) : (typeof l == "number" || typeof l == "bigint") && Bs(t, "" + l);
            break;
        case "onScroll":
            l != null && Rt("scroll", t);
            break;
        case "onScrollEnd":
            l != null && Rt("scrollend", t);
            break;
        case "onClick":
            l != null && (t.onclick = In);
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
            if (!dm.hasOwnProperty(s))
                t: {
                    if (s[0] === "o" && s[1] === "n" && (c = s.endsWith("Capture"),
                    n = s.slice(2, c ? s.length - 7 : void 0),
                    d = t[He] || null,
                    d = d != null ? d[s] : null,
                    typeof d == "function" && t.removeEventListener(n, d, c),
                    typeof l == "function")) {
                        typeof d != "function" && d !== null && (s in t ? t[s] = null : t.hasAttribute(s) && t.removeAttribute(s)),
                        t.addEventListener(n, l, c);
                        break t
                    }
                    s in t ? t[s] = l : l === !0 ? t.setAttribute(s, "") : pl(t, s, l)
                }
        }
    }
    function De(t, n, s) {
        switch (n) {
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
            Rt("error", t),
            Rt("load", t);
            var l = !1, c = !1, d;
            for (d in s)
                if (s.hasOwnProperty(d)) {
                    var y = s[d];
                    if (y != null)
                        switch (d) {
                        case "src":
                            l = !0;
                            break;
                        case "srcSet":
                            c = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(r(137, n));
                        default:
                            Ft(t, n, d, y, s, null)
                        }
                }
            c && Ft(t, n, "srcSet", s.srcSet, s, null),
            l && Ft(t, n, "src", s.src, s, null);
            return;
        case "input":
            Rt("invalid", t);
            var b = d = y = c = null
              , C = null
              , U = null;
            for (l in s)
                if (s.hasOwnProperty(l)) {
                    var Q = s[l];
                    if (Q != null)
                        switch (l) {
                        case "name":
                            c = Q;
                            break;
                        case "type":
                            y = Q;
                            break;
                        case "checked":
                            C = Q;
                            break;
                        case "defaultChecked":
                            U = Q;
                            break;
                        case "value":
                            d = Q;
                            break;
                        case "defaultValue":
                            b = Q;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (Q != null)
                                throw Error(r(137, n));
                            break;
                        default:
                            Ft(t, n, l, Q, s, null)
                        }
                }
            gm(t, d, b, C, U, y, c, !1);
            return;
        case "select":
            Rt("invalid", t),
            l = y = d = null;
            for (c in s)
                if (s.hasOwnProperty(c) && (b = s[c],
                b != null))
                    switch (c) {
                    case "value":
                        d = b;
                        break;
                    case "defaultValue":
                        y = b;
                        break;
                    case "multiple":
                        l = b;
                    default:
                        Ft(t, n, c, b, s, null)
                    }
            n = d,
            s = y,
            t.multiple = !!l,
            n != null ? ks(t, !!l, n, !1) : s != null && ks(t, !!l, s, !0);
            return;
        case "textarea":
            Rt("invalid", t),
            d = c = l = null;
            for (y in s)
                if (s.hasOwnProperty(y) && (b = s[y],
                b != null))
                    switch (y) {
                    case "value":
                        l = b;
                        break;
                    case "defaultValue":
                        c = b;
                        break;
                    case "children":
                        d = b;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (b != null)
                            throw Error(r(91));
                        break;
                    default:
                        Ft(t, n, y, b, s, null)
                    }
            xm(t, l, c, d);
            return;
        case "option":
            for (C in s)
                s.hasOwnProperty(C) && (l = s[C],
                l != null) && (C === "selected" ? t.selected = l && typeof l != "function" && typeof l != "symbol" : Ft(t, n, C, l, s, null));
            return;
        case "dialog":
            Rt("beforetoggle", t),
            Rt("toggle", t),
            Rt("cancel", t),
            Rt("close", t);
            break;
        case "iframe":
        case "object":
            Rt("load", t);
            break;
        case "video":
        case "audio":
            for (l = 0; l < vr.length; l++)
                Rt(vr[l], t);
            break;
        case "image":
            Rt("error", t),
            Rt("load", t);
            break;
        case "details":
            Rt("toggle", t);
            break;
        case "embed":
        case "source":
        case "link":
            Rt("error", t),
            Rt("load", t);
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
            for (U in s)
                if (s.hasOwnProperty(U) && (l = s[U],
                l != null))
                    switch (U) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(r(137, n));
                    default:
                        Ft(t, n, U, l, s, null)
                    }
            return;
        default:
            if (Lc(n)) {
                for (Q in s)
                    s.hasOwnProperty(Q) && (l = s[Q],
                    l !== void 0 && Tf(t, n, Q, l, s, void 0));
                return
            }
        }
        for (b in s)
            s.hasOwnProperty(b) && (l = s[b],
            l != null && Ft(t, n, b, l, s, null))
    }
    function HT(t, n, s, l) {
        switch (n) {
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
            var c = null
              , d = null
              , y = null
              , b = null
              , C = null
              , U = null
              , Q = null;
            for (F in s) {
                var W = s[F];
                if (s.hasOwnProperty(F) && W != null)
                    switch (F) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        C = W;
                    default:
                        l.hasOwnProperty(F) || Ft(t, n, F, null, l, W)
                    }
            }
            for (var P in l) {
                var F = l[P];
                if (W = s[P],
                l.hasOwnProperty(P) && (F != null || W != null))
                    switch (P) {
                    case "type":
                        d = F;
                        break;
                    case "name":
                        c = F;
                        break;
                    case "checked":
                        U = F;
                        break;
                    case "defaultChecked":
                        Q = F;
                        break;
                    case "value":
                        y = F;
                        break;
                    case "defaultValue":
                        b = F;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (F != null)
                            throw Error(r(137, n));
                        break;
                    default:
                        F !== W && Ft(t, n, P, F, l, W)
                    }
            }
            Vc(t, y, b, C, U, Q, d, c);
            return;
        case "select":
            F = y = b = P = null;
            for (d in s)
                if (C = s[d],
                s.hasOwnProperty(d) && C != null)
                    switch (d) {
                    case "value":
                        break;
                    case "multiple":
                        F = C;
                    default:
                        l.hasOwnProperty(d) || Ft(t, n, d, null, l, C)
                    }
            for (c in l)
                if (d = l[c],
                C = s[c],
                l.hasOwnProperty(c) && (d != null || C != null))
                    switch (c) {
                    case "value":
                        P = d;
                        break;
                    case "defaultValue":
                        b = d;
                        break;
                    case "multiple":
                        y = d;
                    default:
                        d !== C && Ft(t, n, c, d, l, C)
                    }
            n = b,
            s = y,
            l = F,
            P != null ? ks(t, !!s, P, !1) : !!l != !!s && (n != null ? ks(t, !!s, n, !0) : ks(t, !!s, s ? [] : "", !1));
            return;
        case "textarea":
            F = P = null;
            for (b in s)
                if (c = s[b],
                s.hasOwnProperty(b) && c != null && !l.hasOwnProperty(b))
                    switch (b) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        Ft(t, n, b, null, l, c)
                    }
            for (y in l)
                if (c = l[y],
                d = s[y],
                l.hasOwnProperty(y) && (c != null || d != null))
                    switch (y) {
                    case "value":
                        P = c;
                        break;
                    case "defaultValue":
                        F = c;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (c != null)
                            throw Error(r(91));
                        break;
                    default:
                        c !== d && Ft(t, n, y, c, l, d)
                    }
            vm(t, P, F);
            return;
        case "option":
            for (var ut in s)
                P = s[ut],
                s.hasOwnProperty(ut) && P != null && !l.hasOwnProperty(ut) && (ut === "selected" ? t.selected = !1 : Ft(t, n, ut, null, l, P));
            for (C in l)
                P = l[C],
                F = s[C],
                l.hasOwnProperty(C) && P !== F && (P != null || F != null) && (C === "selected" ? t.selected = P && typeof P != "function" && typeof P != "symbol" : Ft(t, n, C, P, l, F));
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
            for (var wt in s)
                P = s[wt],
                s.hasOwnProperty(wt) && P != null && !l.hasOwnProperty(wt) && Ft(t, n, wt, null, l, P);
            for (U in l)
                if (P = l[U],
                F = s[U],
                l.hasOwnProperty(U) && P !== F && (P != null || F != null))
                    switch (U) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (P != null)
                            throw Error(r(137, n));
                        break;
                    default:
                        Ft(t, n, U, P, l, F)
                    }
            return;
        default:
            if (Lc(n)) {
                for (var Gt in s)
                    P = s[Gt],
                    s.hasOwnProperty(Gt) && P !== void 0 && !l.hasOwnProperty(Gt) && Tf(t, n, Gt, void 0, l, P);
                for (Q in l)
                    P = l[Q],
                    F = s[Q],
                    !l.hasOwnProperty(Q) || P === F || P === void 0 && F === void 0 || Tf(t, n, Q, P, l, F);
                return
            }
        }
        for (var _ in s)
            P = s[_],
            s.hasOwnProperty(_) && P != null && !l.hasOwnProperty(_) && Ft(t, n, _, null, l, P);
        for (W in l)
            P = l[W],
            F = s[W],
            !l.hasOwnProperty(W) || P === F || P == null && F == null || Ft(t, n, W, P, l, F)
    }
    function wg(t) {
        switch (t) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function qT() {
        if (typeof performance.getEntriesByType == "function") {
            for (var t = 0, n = 0, s = performance.getEntriesByType("resource"), l = 0; l < s.length; l++) {
                var c = s[l]
                  , d = c.transferSize
                  , y = c.initiatorType
                  , b = c.duration;
                if (d && b && wg(y)) {
                    for (y = 0,
                    b = c.responseEnd,
                    l += 1; l < s.length; l++) {
                        var C = s[l]
                          , U = C.startTime;
                        if (U > b)
                            break;
                        var Q = C.transferSize
                          , W = C.initiatorType;
                        Q && wg(W) && (C = C.responseEnd,
                        y += Q * (C < b ? 1 : (b - U) / (C - U)))
                    }
                    if (--l,
                    n += 8 * (d + y) / (c.duration / 1e3),
                    t++,
                    10 < t)
                        break
                }
            }
            if (0 < t)
                return n / t / 1e6
        }
        return navigator.connection && (t = navigator.connection.downlink,
        typeof t == "number") ? t : 5
    }
    var Af = null
      , Ef = null;
    function mo(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }
    function Tg(t) {
        switch (t) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function Ag(t, n) {
        if (t === 0)
            switch (n) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return t === 1 && n === "foreignObject" ? 0 : t
    }
    function Cf(t, n) {
        return t === "textarea" || t === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null
    }
    var Mf = null;
    function FT() {
        var t = window.event;
        return t && t.type === "popstate" ? t === Mf ? !1 : (Mf = t,
        !0) : (Mf = null,
        !1)
    }
    var Eg = typeof setTimeout == "function" ? setTimeout : void 0
      , GT = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Cg = typeof Promise == "function" ? Promise : void 0
      , YT = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cg < "u" ? function(t) {
        return Cg.resolve(null).then(t).catch(XT)
    }
    : Eg;
    function XT(t) {
        setTimeout(function() {
            throw t
        })
    }
    function Ui(t) {
        return t === "head"
    }
    function Mg(t, n) {
        var s = n
          , l = 0;
        do {
            var c = s.nextSibling;
            if (t.removeChild(s),
            c && c.nodeType === 8)
                if (s = c.data,
                s === "/$" || s === "/&") {
                    if (l === 0) {
                        t.removeChild(c),
                        ya(n);
                        return
                    }
                    l--
                } else if (s === "$" || s === "$?" || s === "$~" || s === "$!" || s === "&")
                    l++;
                else if (s === "html")
                    br(t.ownerDocument.documentElement);
                else if (s === "head") {
                    s = t.ownerDocument.head,
                    br(s);
                    for (var d = s.firstChild; d; ) {
                        var y = d.nextSibling
                          , b = d.nodeName;
                        d[ka] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && d.rel.toLowerCase() === "stylesheet" || s.removeChild(d),
                        d = y
                    }
                } else
                    s === "body" && br(t.ownerDocument.body);
            s = c
        } while (s);
        ya(n)
    }
    function Ng(t, n) {
        var s = t;
        t = 0;
        do {
            var l = s.nextSibling;
            if (s.nodeType === 1 ? n ? (s._stashedDisplay = s.style.display,
            s.style.display = "none") : (s.style.display = s._stashedDisplay || "",
            s.getAttribute("style") === "" && s.removeAttribute("style")) : s.nodeType === 3 && (n ? (s._stashedText = s.nodeValue,
            s.nodeValue = "") : s.nodeValue = s._stashedText || ""),
            l && l.nodeType === 8)
                if (s = l.data,
                s === "/$") {
                    if (t === 0)
                        break;
                    t--
                } else
                    s !== "$" && s !== "$?" && s !== "$~" && s !== "$!" || t++;
            s = l
        } while (s)
    }
    function Nf(t) {
        var n = t.firstChild;
        for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
            var s = n;
            switch (n = n.nextSibling,
            s.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Nf(s),
                Oc(s);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (s.rel.toLowerCase() === "stylesheet")
                    continue
            }
            t.removeChild(s)
        }
    }
    function QT(t, n, s, l) {
        for (; t.nodeType === 1; ) {
            var c = s;
            if (t.nodeName.toLowerCase() !== n.toLowerCase()) {
                if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden"))
                    break
            } else if (l) {
                if (!t[ka])
                    switch (n) {
                    case "meta":
                        if (!t.hasAttribute("itemprop"))
                            break;
                        return t;
                    case "link":
                        if (d = t.getAttribute("rel"),
                        d === "stylesheet" && t.hasAttribute("data-precedence"))
                            break;
                        if (d !== c.rel || t.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || t.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || t.getAttribute("title") !== (c.title == null ? null : c.title))
                            break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence"))
                            break;
                        return t;
                    case "script":
                        if (d = t.getAttribute("src"),
                        (d !== (c.src == null ? null : c.src) || t.getAttribute("type") !== (c.type == null ? null : c.type) || t.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && d && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                            break;
                        return t;
                    default:
                        return t
                    }
            } else if (n === "input" && t.type === "hidden") {
                var d = c.name == null ? null : "" + c.name;
                if (c.type === "hidden" && t.getAttribute("name") === d)
                    return t
            } else
                return t;
            if (t = gn(t.nextSibling),
            t === null)
                break
        }
        return null
    }
    function KT(t, n, s) {
        if (n === "")
            return null;
        for (; t.nodeType !== 3; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !s || (t = gn(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function Dg(t, n) {
        for (; t.nodeType !== 8; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = gn(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function Df(t) {
        return t.data === "$?" || t.data === "$~"
    }
    function Rf(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading"
    }
    function ZT(t, n) {
        var s = t.ownerDocument;
        if (t.data === "$~")
            t._reactRetry = n;
        else if (t.data !== "$?" || s.readyState !== "loading")
            n();
        else {
            var l = function() {
                n(),
                s.removeEventListener("DOMContentLoaded", l)
            };
            s.addEventListener("DOMContentLoaded", l),
            t._reactRetry = l
        }
    }
    function gn(t) {
        for (; t != null; t = t.nextSibling) {
            var n = t.nodeType;
            if (n === 1 || n === 3)
                break;
            if (n === 8) {
                if (n = t.data,
                n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
                    break;
                if (n === "/$" || n === "/&")
                    return null
            }
        }
        return t
    }
    var jf = null;
    function Rg(t) {
        t = t.nextSibling;
        for (var n = 0; t; ) {
            if (t.nodeType === 8) {
                var s = t.data;
                if (s === "/$" || s === "/&") {
                    if (n === 0)
                        return gn(t.nextSibling);
                    n--
                } else
                    s !== "$" && s !== "$!" && s !== "$?" && s !== "$~" && s !== "&" || n++
            }
            t = t.nextSibling
        }
        return null
    }
    function jg(t) {
        t = t.previousSibling;
        for (var n = 0; t; ) {
            if (t.nodeType === 8) {
                var s = t.data;
                if (s === "$" || s === "$!" || s === "$?" || s === "$~" || s === "&") {
                    if (n === 0)
                        return t;
                    n--
                } else
                    s !== "/$" && s !== "/&" || n++
            }
            t = t.previousSibling
        }
        return null
    }
    function Og(t, n, s) {
        switch (n = mo(s),
        t) {
        case "html":
            if (t = n.documentElement,
            !t)
                throw Error(r(452));
            return t;
        case "head":
            if (t = n.head,
            !t)
                throw Error(r(453));
            return t;
        case "body":
            if (t = n.body,
            !t)
                throw Error(r(454));
            return t;
        default:
            throw Error(r(451))
        }
    }
    function br(t) {
        for (var n = t.attributes; n.length; )
            t.removeAttributeNode(n[0]);
        Oc(t)
    }
    var vn = new Map
      , _g = new Set;
    function po(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var di = q.d;
    q.d = {
        f: IT,
        r: WT,
        D: JT,
        C: $T,
        L: tA,
        m: eA,
        X: iA,
        S: nA,
        M: sA
    };
    function IT() {
        var t = di.f()
          , n = ao();
        return t || n
    }
    function WT(t) {
        var n = zs(t);
        n !== null && n.tag === 5 && n.type === "form" ? Ip(n) : di.r(t)
    }
    var ha = typeof document > "u" ? null : document;
    function Vg(t, n, s) {
        var l = ha;
        if (l && typeof n == "string" && n) {
            var c = un(n);
            c = 'link[rel="' + t + '"][href="' + c + '"]',
            typeof s == "string" && (c += '[crossorigin="' + s + '"]'),
            _g.has(c) || (_g.add(c),
            t = {
                rel: t,
                crossOrigin: s,
                href: n
            },
            l.querySelector(c) === null && (n = l.createElement("link"),
            De(n, "link", t),
            we(n),
            l.head.appendChild(n)))
        }
    }
    function JT(t) {
        di.D(t),
        Vg("dns-prefetch", t, null)
    }
    function $T(t, n) {
        di.C(t, n),
        Vg("preconnect", t, n)
    }
    function tA(t, n, s) {
        di.L(t, n, s);
        var l = ha;
        if (l && t && n) {
            var c = 'link[rel="preload"][as="' + un(n) + '"]';
            n === "image" && s && s.imageSrcSet ? (c += '[imagesrcset="' + un(s.imageSrcSet) + '"]',
            typeof s.imageSizes == "string" && (c += '[imagesizes="' + un(s.imageSizes) + '"]')) : c += '[href="' + un(t) + '"]';
            var d = c;
            switch (n) {
            case "style":
                d = ma(t);
                break;
            case "script":
                d = pa(t)
            }
            vn.has(d) || (t = x({
                rel: "preload",
                href: n === "image" && s && s.imageSrcSet ? void 0 : t,
                as: n
            }, s),
            vn.set(d, t),
            l.querySelector(c) !== null || n === "style" && l.querySelector(Sr(d)) || n === "script" && l.querySelector(wr(d)) || (n = l.createElement("link"),
            De(n, "link", t),
            we(n),
            l.head.appendChild(n)))
        }
    }
    function eA(t, n) {
        di.m(t, n);
        var s = ha;
        if (s && t) {
            var l = n && typeof n.as == "string" ? n.as : "script"
              , c = 'link[rel="modulepreload"][as="' + un(l) + '"][href="' + un(t) + '"]'
              , d = c;
            switch (l) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                d = pa(t)
            }
            if (!vn.has(d) && (t = x({
                rel: "modulepreload",
                href: t
            }, n),
            vn.set(d, t),
            s.querySelector(c) === null)) {
                switch (l) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (s.querySelector(wr(d)))
                        return
                }
                l = s.createElement("link"),
                De(l, "link", t),
                we(l),
                s.head.appendChild(l)
            }
        }
    }
    function nA(t, n, s) {
        di.S(t, n, s);
        var l = ha;
        if (l && t) {
            var c = Ls(l).hoistableStyles
              , d = ma(t);
            n = n || "default";
            var y = c.get(d);
            if (!y) {
                var b = {
                    loading: 0,
                    preload: null
                };
                if (y = l.querySelector(Sr(d)))
                    b.loading = 5;
                else {
                    t = x({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": n
                    }, s),
                    (s = vn.get(d)) && Of(t, s);
                    var C = y = l.createElement("link");
                    we(C),
                    De(C, "link", t),
                    C._p = new Promise(function(U, Q) {
                        C.onload = U,
                        C.onerror = Q
                    }
                    ),
                    C.addEventListener("load", function() {
                        b.loading |= 1
                    }),
                    C.addEventListener("error", function() {
                        b.loading |= 2
                    }),
                    b.loading |= 4,
                    yo(y, n, l)
                }
                y = {
                    type: "stylesheet",
                    instance: y,
                    count: 1,
                    state: b
                },
                c.set(d, y)
            }
        }
    }
    function iA(t, n) {
        di.X(t, n);
        var s = ha;
        if (s && t) {
            var l = Ls(s).hoistableScripts
              , c = pa(t)
              , d = l.get(c);
            d || (d = s.querySelector(wr(c)),
            d || (t = x({
                src: t,
                async: !0
            }, n),
            (n = vn.get(c)) && _f(t, n),
            d = s.createElement("script"),
            we(d),
            De(d, "link", t),
            s.head.appendChild(d)),
            d = {
                type: "script",
                instance: d,
                count: 1,
                state: null
            },
            l.set(c, d))
        }
    }
    function sA(t, n) {
        di.M(t, n);
        var s = ha;
        if (s && t) {
            var l = Ls(s).hoistableScripts
              , c = pa(t)
              , d = l.get(c);
            d || (d = s.querySelector(wr(c)),
            d || (t = x({
                src: t,
                async: !0,
                type: "module"
            }, n),
            (n = vn.get(c)) && _f(t, n),
            d = s.createElement("script"),
            we(d),
            De(d, "link", t),
            s.head.appendChild(d)),
            d = {
                type: "script",
                instance: d,
                count: 1,
                state: null
            },
            l.set(c, d))
        }
    }
    function zg(t, n, s, l) {
        var c = (c = At.current) ? po(c) : null;
        if (!c)
            throw Error(r(446));
        switch (t) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof s.precedence == "string" && typeof s.href == "string" ? (n = ma(s.href),
            s = Ls(c).hoistableStyles,
            l = s.get(n),
            l || (l = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            s.set(n, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (s.rel === "stylesheet" && typeof s.href == "string" && typeof s.precedence == "string") {
                t = ma(s.href);
                var d = Ls(c).hoistableStyles
                  , y = d.get(t);
                if (y || (c = c.ownerDocument || c,
                y = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                d.set(t, y),
                (d = c.querySelector(Sr(t))) && !d._p && (y.instance = d,
                y.state.loading = 5),
                vn.has(t) || (s = {
                    rel: "preload",
                    as: "style",
                    href: s.href,
                    crossOrigin: s.crossOrigin,
                    integrity: s.integrity,
                    media: s.media,
                    hrefLang: s.hrefLang,
                    referrerPolicy: s.referrerPolicy
                },
                vn.set(t, s),
                d || aA(c, t, s, y.state))),
                n && l === null)
                    throw Error(r(528, ""));
                return y
            }
            if (n && l !== null)
                throw Error(r(529, ""));
            return null;
        case "script":
            return n = s.async,
            s = s.src,
            typeof s == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = pa(s),
            s = Ls(c).hoistableScripts,
            l = s.get(n),
            l || (l = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            s.set(n, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(r(444, t))
        }
    }
    function ma(t) {
        return 'href="' + un(t) + '"'
    }
    function Sr(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }
    function Lg(t) {
        return x({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }
    function aA(t, n, s, l) {
        t.querySelector('link[rel="preload"][as="style"][' + n + "]") ? l.loading = 1 : (n = t.createElement("link"),
        l.preload = n,
        n.addEventListener("load", function() {
            return l.loading |= 1
        }),
        n.addEventListener("error", function() {
            return l.loading |= 2
        }),
        De(n, "link", s),
        we(n),
        t.head.appendChild(n))
    }
    function pa(t) {
        return '[src="' + un(t) + '"]'
    }
    function wr(t) {
        return "script[async]" + t
    }
    function Ug(t, n, s) {
        if (n.count++,
        n.instance === null)
            switch (n.type) {
            case "style":
                var l = t.querySelector('style[data-href~="' + un(s.href) + '"]');
                if (l)
                    return n.instance = l,
                    we(l),
                    l;
                var c = x({}, s, {
                    "data-href": s.href,
                    "data-precedence": s.precedence,
                    href: null,
                    precedence: null
                });
                return l = (t.ownerDocument || t).createElement("style"),
                we(l),
                De(l, "style", c),
                yo(l, s.precedence, t),
                n.instance = l;
            case "stylesheet":
                c = ma(s.href);
                var d = t.querySelector(Sr(c));
                if (d)
                    return n.state.loading |= 4,
                    n.instance = d,
                    we(d),
                    d;
                l = Lg(s),
                (c = vn.get(c)) && Of(l, c),
                d = (t.ownerDocument || t).createElement("link"),
                we(d);
                var y = d;
                return y._p = new Promise(function(b, C) {
                    y.onload = b,
                    y.onerror = C
                }
                ),
                De(d, "link", l),
                n.state.loading |= 4,
                yo(d, s.precedence, t),
                n.instance = d;
            case "script":
                return d = pa(s.src),
                (c = t.querySelector(wr(d))) ? (n.instance = c,
                we(c),
                c) : (l = s,
                (c = vn.get(d)) && (l = x({}, s),
                _f(l, c)),
                t = t.ownerDocument || t,
                c = t.createElement("script"),
                we(c),
                De(c, "link", l),
                t.head.appendChild(c),
                n.instance = c);
            case "void":
                return null;
            default:
                throw Error(r(443, n.type))
            }
        else
            n.type === "stylesheet" && (n.state.loading & 4) === 0 && (l = n.instance,
            n.state.loading |= 4,
            yo(l, s.precedence, t));
        return n.instance
    }
    function yo(t, n, s) {
        for (var l = s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), c = l.length ? l[l.length - 1] : null, d = c, y = 0; y < l.length; y++) {
            var b = l[y];
            if (b.dataset.precedence === n)
                d = b;
            else if (d !== c)
                break
        }
        d ? d.parentNode.insertBefore(t, d.nextSibling) : (n = s.nodeType === 9 ? s.head : s,
        n.insertBefore(t, n.firstChild))
    }
    function Of(t, n) {
        t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
        t.title == null && (t.title = n.title)
    }
    function _f(t, n) {
        t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
        t.integrity == null && (t.integrity = n.integrity)
    }
    var go = null;
    function kg(t, n, s) {
        if (go === null) {
            var l = new Map
              , c = go = new Map;
            c.set(s, l)
        } else
            c = go,
            l = c.get(s),
            l || (l = new Map,
            c.set(s, l));
        if (l.has(t))
            return l;
        for (l.set(t, null),
        s = s.getElementsByTagName(t),
        c = 0; c < s.length; c++) {
            var d = s[c];
            if (!(d[ka] || d[Ee] || t === "link" && d.getAttribute("rel") === "stylesheet") && d.namespaceURI !== "http://www.w3.org/2000/svg") {
                var y = d.getAttribute(n) || "";
                y = t + y;
                var b = l.get(y);
                b ? b.push(d) : l.set(y, [d])
            }
        }
        return l
    }
    function Bg(t, n, s) {
        t = t.ownerDocument || t,
        t.head.insertBefore(s, n === "title" ? t.querySelector("head > title") : null)
    }
    function rA(t, n, s) {
        if (s === 1 || n.itemProp != null)
            return !1;
        switch (t) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
                break;
            return !0;
        case "link":
            if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
                break;
            return n.rel === "stylesheet" ? (t = n.disabled,
            typeof n.precedence == "string" && t == null) : !0;
        case "script":
            if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
                return !0
        }
        return !1
    }
    function Pg(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    function lA(t, n, s, l) {
        if (s.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (s.state.loading & 4) === 0) {
            if (s.instance === null) {
                var c = ma(l.href)
                  , d = n.querySelector(Sr(c));
                if (d) {
                    n = d._p,
                    n !== null && typeof n == "object" && typeof n.then == "function" && (t.count++,
                    t = vo.bind(t),
                    n.then(t, t)),
                    s.state.loading |= 4,
                    s.instance = d,
                    we(d);
                    return
                }
                d = n.ownerDocument || n,
                l = Lg(l),
                (c = vn.get(c)) && Of(l, c),
                d = d.createElement("link"),
                we(d);
                var y = d;
                y._p = new Promise(function(b, C) {
                    y.onload = b,
                    y.onerror = C
                }
                ),
                De(d, "link", l),
                s.instance = d
            }
            t.stylesheets === null && (t.stylesheets = new Map),
            t.stylesheets.set(s, n),
            (n = s.state.preload) && (s.state.loading & 3) === 0 && (t.count++,
            s = vo.bind(t),
            n.addEventListener("load", s),
            n.addEventListener("error", s))
        }
    }
    var Vf = 0;
    function oA(t, n) {
        return t.stylesheets && t.count === 0 && bo(t, t.stylesheets),
        0 < t.count || 0 < t.imgCount ? function(s) {
            var l = setTimeout(function() {
                if (t.stylesheets && bo(t, t.stylesheets),
                t.unsuspend) {
                    var d = t.unsuspend;
                    t.unsuspend = null,
                    d()
                }
            }, 6e4 + n);
            0 < t.imgBytes && Vf === 0 && (Vf = 62500 * qT());
            var c = setTimeout(function() {
                if (t.waitingForImages = !1,
                t.count === 0 && (t.stylesheets && bo(t, t.stylesheets),
                t.unsuspend)) {
                    var d = t.unsuspend;
                    t.unsuspend = null,
                    d()
                }
            }, (t.imgBytes > Vf ? 50 : 800) + n);
            return t.unsuspend = s,
            function() {
                t.unsuspend = null,
                clearTimeout(l),
                clearTimeout(c)
            }
        }
        : null
    }
    function vo() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                bo(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null,
                t()
            }
        }
    }
    var xo = null;
    function bo(t, n) {
        t.stylesheets = null,
        t.unsuspend !== null && (t.count++,
        xo = new Map,
        n.forEach(cA, t),
        xo = null,
        vo.call(t))
    }
    function cA(t, n) {
        if (!(n.state.loading & 4)) {
            var s = xo.get(t);
            if (s)
                var l = s.get(null);
            else {
                s = new Map,
                xo.set(t, s);
                for (var c = t.querySelectorAll("link[data-precedence],style[data-precedence]"), d = 0; d < c.length; d++) {
                    var y = c[d];
                    (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (s.set(y.dataset.precedence, y),
                    l = y)
                }
                l && s.set(null, l)
            }
            c = n.instance,
            y = c.getAttribute("data-precedence"),
            d = s.get(y) || l,
            d === l && s.set(null, c),
            s.set(y, c),
            this.count++,
            l = vo.bind(this),
            c.addEventListener("load", l),
            c.addEventListener("error", l),
            d ? d.parentNode.insertBefore(c, d.nextSibling) : (t = t.nodeType === 9 ? t.head : t,
            t.insertBefore(c, t.firstChild)),
            n.state.loading |= 4
        }
    }
    var Tr = {
        $$typeof: V,
        Provider: null,
        Consumer: null,
        _currentValue: k,
        _currentValue2: k,
        _threadCount: 0
    };
    function uA(t, n, s, l, c, d, y, b, C) {
        this.tag = 1,
        this.containerInfo = t,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = Nc(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Nc(0),
        this.hiddenUpdates = Nc(null),
        this.identifierPrefix = l,
        this.onUncaughtError = c,
        this.onCaughtError = d,
        this.onRecoverableError = y,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = C,
        this.incompleteTransitions = new Map
    }
    function Hg(t, n, s, l, c, d, y, b, C, U, Q, W) {
        return t = new uA(t,n,s,y,C,U,Q,W,b),
        n = 1,
        d === !0 && (n |= 24),
        d = We(3, null, null, n),
        t.current = d,
        d.stateNode = t,
        n = du(),
        n.refCount++,
        t.pooledCache = n,
        n.refCount++,
        d.memoizedState = {
            element: l,
            isDehydrated: s,
            cache: n
        },
        yu(d),
        t
    }
    function qg(t) {
        return t ? (t = Xs,
        t) : Xs
    }
    function Fg(t, n, s, l, c, d) {
        c = qg(c),
        l.context === null ? l.context = c : l.pendingContext = c,
        l = Ci(n),
        l.payload = {
            element: s
        },
        d = d === void 0 ? null : d,
        d !== null && (l.callback = d),
        s = Mi(t, l, n),
        s !== null && (Qe(s, t, n),
        er(s, t, n))
    }
    function Gg(t, n) {
        if (t = t.memoizedState,
        t !== null && t.dehydrated !== null) {
            var s = t.retryLane;
            t.retryLane = s !== 0 && s < n ? s : n
        }
    }
    function zf(t, n) {
        Gg(t, n),
        (t = t.alternate) && Gg(t, n)
    }
    function Yg(t) {
        if (t.tag === 13 || t.tag === 31) {
            var n = rs(t, 67108864);
            n !== null && Qe(n, t, 67108864),
            zf(t, 67108864)
        }
    }
    function Xg(t) {
        if (t.tag === 13 || t.tag === 31) {
            var n = nn();
            n = Dc(n);
            var s = rs(t, n);
            s !== null && Qe(s, t, n),
            zf(t, n)
        }
    }
    var So = !0;
    function fA(t, n, s, l) {
        var c = z.T;
        z.T = null;
        var d = q.p;
        try {
            q.p = 2,
            Lf(t, n, s, l)
        } finally {
            q.p = d,
            z.T = c
        }
    }
    function dA(t, n, s, l) {
        var c = z.T;
        z.T = null;
        var d = q.p;
        try {
            q.p = 8,
            Lf(t, n, s, l)
        } finally {
            q.p = d,
            z.T = c
        }
    }
    function Lf(t, n, s, l) {
        if (So) {
            var c = Uf(l);
            if (c === null)
                wf(t, n, l, wo, s),
                Kg(t, l);
            else if (mA(c, t, n, s, l))
                l.stopPropagation();
            else if (Kg(t, l),
            n & 4 && -1 < hA.indexOf(t)) {
                for (; c !== null; ) {
                    var d = zs(c);
                    if (d !== null)
                        switch (d.tag) {
                        case 3:
                            if (d = d.stateNode,
                            d.current.memoizedState.isDehydrated) {
                                var y = es(d.pendingLanes);
                                if (y !== 0) {
                                    var b = d;
                                    for (b.pendingLanes |= 2,
                                    b.entangledLanes |= 2; y; ) {
                                        var C = 1 << 31 - Ve(y);
                                        b.entanglements[1] |= C,
                                        y &= ~C
                                    }
                                    Bn(d),
                                    (Bt & 6) === 0 && (io = it() + 500,
                                    gr(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            b = rs(d, 2),
                            b !== null && Qe(b, d, 2),
                            ao(),
                            zf(d, 2)
                        }
                    if (d = Uf(l),
                    d === null && wf(t, n, l, wo, s),
                    d === c)
                        break;
                    c = d
                }
                c !== null && l.stopPropagation()
            } else
                wf(t, n, l, null, s)
        }
    }
    function Uf(t) {
        return t = kc(t),
        kf(t)
    }
    var wo = null;
    function kf(t) {
        if (wo = null,
        t = Vs(t),
        t !== null) {
            var n = u(t);
            if (n === null)
                t = null;
            else {
                var s = n.tag;
                if (s === 13) {
                    if (t = f(n),
                    t !== null)
                        return t;
                    t = null
                } else if (s === 31) {
                    if (t = h(n),
                    t !== null)
                        return t;
                    t = null
                } else if (s === 3) {
                    if (n.stateNode.current.memoizedState.isDehydrated)
                        return n.tag === 3 ? n.stateNode.containerInfo : null;
                    t = null
                } else
                    n !== t && (t = null)
            }
        }
        return wo = t,
        null
    }
    function Qg(t) {
        switch (t) {
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
            switch (st()) {
            case et:
                return 2;
            case vt:
                return 8;
            case Vt:
            case kt:
                return 32;
            case Se:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var Bf = !1
      , ki = null
      , Bi = null
      , Pi = null
      , Ar = new Map
      , Er = new Map
      , Hi = []
      , hA = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Kg(t, n) {
        switch (t) {
        case "focusin":
        case "focusout":
            ki = null;
            break;
        case "dragenter":
        case "dragleave":
            Bi = null;
            break;
        case "mouseover":
        case "mouseout":
            Pi = null;
            break;
        case "pointerover":
        case "pointerout":
            Ar.delete(n.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Er.delete(n.pointerId)
        }
    }
    function Cr(t, n, s, l, c, d) {
        return t === null || t.nativeEvent !== d ? (t = {
            blockedOn: n,
            domEventName: s,
            eventSystemFlags: l,
            nativeEvent: d,
            targetContainers: [c]
        },
        n !== null && (n = zs(n),
        n !== null && Yg(n)),
        t) : (t.eventSystemFlags |= l,
        n = t.targetContainers,
        c !== null && n.indexOf(c) === -1 && n.push(c),
        t)
    }
    function mA(t, n, s, l, c) {
        switch (n) {
        case "focusin":
            return ki = Cr(ki, t, n, s, l, c),
            !0;
        case "dragenter":
            return Bi = Cr(Bi, t, n, s, l, c),
            !0;
        case "mouseover":
            return Pi = Cr(Pi, t, n, s, l, c),
            !0;
        case "pointerover":
            var d = c.pointerId;
            return Ar.set(d, Cr(Ar.get(d) || null, t, n, s, l, c)),
            !0;
        case "gotpointercapture":
            return d = c.pointerId,
            Er.set(d, Cr(Er.get(d) || null, t, n, s, l, c)),
            !0
        }
        return !1
    }
    function Zg(t) {
        var n = Vs(t.target);
        if (n !== null) {
            var s = u(n);
            if (s !== null) {
                if (n = s.tag,
                n === 13) {
                    if (n = f(s),
                    n !== null) {
                        t.blockedOn = n,
                        cm(t.priority, function() {
                            Xg(s)
                        });
                        return
                    }
                } else if (n === 31) {
                    if (n = h(s),
                    n !== null) {
                        t.blockedOn = n,
                        cm(t.priority, function() {
                            Xg(s)
                        });
                        return
                    }
                } else if (n === 3 && s.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }
    function To(t) {
        if (t.blockedOn !== null)
            return !1;
        for (var n = t.targetContainers; 0 < n.length; ) {
            var s = Uf(t.nativeEvent);
            if (s === null) {
                s = t.nativeEvent;
                var l = new s.constructor(s.type,s);
                Uc = l,
                s.target.dispatchEvent(l),
                Uc = null
            } else
                return n = zs(s),
                n !== null && Yg(n),
                t.blockedOn = s,
                !1;
            n.shift()
        }
        return !0
    }
    function Ig(t, n, s) {
        To(t) && s.delete(n)
    }
    function pA() {
        Bf = !1,
        ki !== null && To(ki) && (ki = null),
        Bi !== null && To(Bi) && (Bi = null),
        Pi !== null && To(Pi) && (Pi = null),
        Ar.forEach(Ig),
        Er.forEach(Ig)
    }
    function Ao(t, n) {
        t.blockedOn === n && (t.blockedOn = null,
        Bf || (Bf = !0,
        e.unstable_scheduleCallback(e.unstable_NormalPriority, pA)))
    }
    var Eo = null;
    function Wg(t) {
        Eo !== t && (Eo = t,
        e.unstable_scheduleCallback(e.unstable_NormalPriority, function() {
            Eo === t && (Eo = null);
            for (var n = 0; n < t.length; n += 3) {
                var s = t[n]
                  , l = t[n + 1]
                  , c = t[n + 2];
                if (typeof l != "function") {
                    if (kf(l || s) === null)
                        continue;
                    break
                }
                var d = zs(s);
                d !== null && (t.splice(n, 3),
                n -= 3,
                Lu(d, {
                    pending: !0,
                    data: c,
                    method: s.method,
                    action: l
                }, l, c))
            }
        }))
    }
    function ya(t) {
        function n(C) {
            return Ao(C, t)
        }
        ki !== null && Ao(ki, t),
        Bi !== null && Ao(Bi, t),
        Pi !== null && Ao(Pi, t),
        Ar.forEach(n),
        Er.forEach(n);
        for (var s = 0; s < Hi.length; s++) {
            var l = Hi[s];
            l.blockedOn === t && (l.blockedOn = null)
        }
        for (; 0 < Hi.length && (s = Hi[0],
        s.blockedOn === null); )
            Zg(s),
            s.blockedOn === null && Hi.shift();
        if (s = (t.ownerDocument || t).$$reactFormReplay,
        s != null)
            for (l = 0; l < s.length; l += 3) {
                var c = s[l]
                  , d = s[l + 1]
                  , y = c[He] || null;
                if (typeof d == "function")
                    y || Wg(s);
                else if (y) {
                    var b = null;
                    if (d && d.hasAttribute("formAction")) {
                        if (c = d,
                        y = d[He] || null)
                            b = y.formAction;
                        else if (kf(c) !== null)
                            continue
                    } else
                        b = y.action;
                    typeof b == "function" ? s[l + 1] = b : (s.splice(l, 3),
                    l -= 3),
                    Wg(s)
                }
            }
    }
    function Jg() {
        function t(d) {
            d.canIntercept && d.info === "react-transition" && d.intercept({
                handler: function() {
                    return new Promise(function(y) {
                        return c = y
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function n() {
            c !== null && (c(),
            c = null),
            l || setTimeout(s, 20)
        }
        function s() {
            if (!l && !navigation.transition) {
                var d = navigation.currentEntry;
                d && d.url != null && navigation.navigate(d.url, {
                    state: d.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var l = !1
              , c = null;
            return navigation.addEventListener("navigate", t),
            navigation.addEventListener("navigatesuccess", n),
            navigation.addEventListener("navigateerror", n),
            setTimeout(s, 100),
            function() {
                l = !0,
                navigation.removeEventListener("navigate", t),
                navigation.removeEventListener("navigatesuccess", n),
                navigation.removeEventListener("navigateerror", n),
                c !== null && (c(),
                c = null)
            }
        }
    }
    function Pf(t) {
        this._internalRoot = t
    }
    Co.prototype.render = Pf.prototype.render = function(t) {
        var n = this._internalRoot;
        if (n === null)
            throw Error(r(409));
        var s = n.current
          , l = nn();
        Fg(s, l, t, n, null, null)
    }
    ,
    Co.prototype.unmount = Pf.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var n = t.containerInfo;
            Fg(t.current, 2, null, t, null, null),
            ao(),
            n[_s] = null
        }
    }
    ;
    function Co(t) {
        this._internalRoot = t
    }
    Co.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var n = om();
            t = {
                blockedOn: null,
                target: t,
                priority: n
            };
            for (var s = 0; s < Hi.length && n !== 0 && n < Hi[s].priority; s++)
                ;
            Hi.splice(s, 0, t),
            s === 0 && Zg(t)
        }
    }
    ;
    var $g = i.version;
    if ($g !== "19.2.3")
        throw Error(r(527, $g, "19.2.3"));
    q.findDOMNode = function(t) {
        var n = t._reactInternals;
        if (n === void 0)
            throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","),
            Error(r(268, t)));
        return t = p(n),
        t = t !== null ? g(t) : null,
        t = t === null ? null : t.stateNode,
        t
    }
    ;
    var yA = {
        bundleType: 0,
        version: "19.2.3",
        rendererPackageName: "react-dom",
        currentDispatcherRef: z,
        reconcilerVersion: "19.2.3"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Mo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Mo.isDisabled && Mo.supportsFiber)
            try {
                ts = Mo.inject(yA),
                Ae = Mo
            } catch {}
    }
    return Nr.createRoot = function(t, n) {
        if (!o(t))
            throw Error(r(299));
        var s = !1
          , l = ""
          , c = ry
          , d = ly
          , y = oy;
        return n != null && (n.unstable_strictMode === !0 && (s = !0),
        n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
        n.onUncaughtError !== void 0 && (c = n.onUncaughtError),
        n.onCaughtError !== void 0 && (d = n.onCaughtError),
        n.onRecoverableError !== void 0 && (y = n.onRecoverableError)),
        n = Hg(t, 1, !1, null, null, s, l, null, c, d, y, Jg),
        t[_s] = n.current,
        Sf(t),
        new Pf(n)
    }
    ,
    Nr.hydrateRoot = function(t, n, s) {
        if (!o(t))
            throw Error(r(299));
        var l = !1
          , c = ""
          , d = ry
          , y = ly
          , b = oy
          , C = null;
        return s != null && (s.unstable_strictMode === !0 && (l = !0),
        s.identifierPrefix !== void 0 && (c = s.identifierPrefix),
        s.onUncaughtError !== void 0 && (d = s.onUncaughtError),
        s.onCaughtError !== void 0 && (y = s.onCaughtError),
        s.onRecoverableError !== void 0 && (b = s.onRecoverableError),
        s.formState !== void 0 && (C = s.formState)),
        n = Hg(t, 1, !0, n, s ?? null, l, c, C, d, y, b, Jg),
        n.context = qg(null),
        s = n.current,
        l = nn(),
        l = Dc(l),
        c = Ci(l),
        c.callback = null,
        Mi(s, c, l),
        s = l,
        n.current.lanes = s,
        Ua(n, s),
        Bn(n),
        t[_s] = n.current,
        Sf(t),
        new Co(n)
    }
    ,
    Nr.version = "19.2.3",
    Nr
}
var cv;
function CA() {
    if (cv)
        return qf.exports;
    cv = 1;
    function e() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (i) {
                console.error(i)
            }
    }
    return e(),
    qf.exports = EA(),
    qf.exports
}
var MA = CA();
function NA(e, i) {
    if (e instanceof RegExp)
        return {
            keys: !1,
            pattern: e
        };
    var a, r, o, u, f = [], h = "", m = e.split("/");
    for (m[0] || m.shift(); o = m.shift(); )
        a = o[0],
        a === "*" ? (f.push(a),
        h += o[1] === "?" ? "(?:/(.*))?" : "/(.*)") : a === ":" ? (r = o.indexOf("?", 1),
        u = o.indexOf(".", 1),
        f.push(o.substring(1, ~r ? r : ~u ? u : o.length)),
        h += ~r && !~u ? "(?:/([^/]+?))?" : "/([^/]+?)",
        ~u && (h += (~r ? "?" : "") + "\\" + o.substring(u))) : h += "/" + o;
    return {
        keys: f,
        pattern: new RegExp("^" + h + (i ? "(?=$|/)" : "/?$"),"i")
    }
}
var T = lc();
const te = Tx(T)
  , ih = vA({
    __proto__: null,
    default: te
}, [T]);
var Qf = {
    exports: {}
}
  , Kf = {};
var uv;
function DA() {
    if (uv)
        return Kf;
    uv = 1;
    var e = lc();
    function i(x, S) {
        return x === S && (x !== 0 || 1 / x === 1 / S) || x !== x && S !== S
    }
    var a = typeof Object.is == "function" ? Object.is : i
      , r = e.useState
      , o = e.useEffect
      , u = e.useLayoutEffect
      , f = e.useDebugValue;
    function h(x, S) {
        var w = S()
          , E = r({
            inst: {
                value: w,
                getSnapshot: S
            }
        })
          , A = E[0].inst
          , M = E[1];
        return u(function() {
            A.value = w,
            A.getSnapshot = S,
            m(A) && M({
                inst: A
            })
        }, [x, w, S]),
        o(function() {
            return m(A) && M({
                inst: A
            }),
            x(function() {
                m(A) && M({
                    inst: A
                })
            })
        }, [x]),
        f(w),
        w
    }
    function m(x) {
        var S = x.getSnapshot;
        x = x.value;
        try {
            var w = S();
            return !a(x, w)
        } catch {
            return !0
        }
    }
    function p(x, S) {
        return S()
    }
    var g = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? p : h;
    return Kf.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : g,
    Kf
}
var fv;
function RA() {
    return fv || (fv = 1,
    Qf.exports = DA()),
    Qf.exports
}
var jA = RA();
const OA = ih.useInsertionEffect
  , _A = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , VA = _A ? T.useLayoutEffect : T.useEffect
  , zA = OA || VA
  , Ex = e => {
    const i = T.useRef([e, (...a) => i[0](...a)]).current;
    return zA( () => {
        i[0] = e
    }
    ),
    i[1]
}
  , LA = "popstate"
  , sh = "pushState"
  , ah = "replaceState"
  , UA = "hashchange"
  , dv = [LA, sh, ah, UA]
  , kA = e => {
    for (const i of dv)
        addEventListener(i, e);
    return () => {
        for (const i of dv)
            removeEventListener(i, e)
    }
}
  , Cx = (e, i) => jA.useSyncExternalStore(kA, e, i)
  , hv = () => location.search
  , BA = ({ssrSearch: e}={}) => Cx(hv, e != null ? () => e : hv)
  , mv = () => location.pathname
  , PA = ({ssrPath: e}={}) => Cx(mv, e != null ? () => e : mv)
  , HA = (e, {replace: i=!1, state: a=null}={}) => history[i ? ah : sh](a, "", e)
  , qA = (e={}) => [PA(e), HA]
  , pv = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[pv] > "u") {
    for (const e of [sh, ah]) {
        const i = history[e];
        history[e] = function() {
            const a = i.apply(this, arguments)
              , r = new Event(e);
            return r.arguments = arguments,
            dispatchEvent(r),
            a
        }
    }
    Object.defineProperty(window, pv, {
        value: !0
    })
}
const FA = (e, i) => i.toLowerCase().indexOf(e.toLowerCase()) ? "~" + i : i.slice(e.length) || "/"
  , Mx = (e="") => e === "/" ? "" : e
  , GA = (e, i) => e[0] === "~" ? e.slice(1) : Mx(i) + e
  , YA = (e="", i) => FA(yv(Mx(e)), yv(i))
  , yv = e => {
    try {
        return decodeURI(e)
    } catch {
        return e
    }
}
  , Nx = {
    hook: qA,
    searchHook: BA,
    parser: NA,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: e => e,
    aroundNav: (e, i, a) => e(i, a)
}
  , Dx = T.createContext(Nx)
  , Jr = () => T.useContext(Dx)
  , Rx = {}
  , jx = T.createContext(Rx)
  , XA = () => T.useContext(jx)
  , oc = e => {
    const [i,a] = e.hook(e);
    return [YA(e.base, i), Ex( (r, o) => e.aroundNav(a, GA(r, e.base), o))]
}
  , QA = () => oc(Jr())
  , Ox = (e, i, a, r) => {
    const {pattern: o, keys: u} = i instanceof RegExp ? {
        keys: !1,
        pattern: i
    } : e(i || "*", r)
      , f = o.exec(a) || []
      , [h,...m] = f;
    return h !== void 0 ? [!0, ( () => {
        const p = u !== !1 ? Object.fromEntries(u.map( (x, S) => [x, m[S]])) : f.groups;
        let g = {
            ...m
        };
        return p && Object.assign(g, p),
        g
    }
    )(), ...r ? [h] : []] : [!1, null]
}
  , KA = ({children: e, ...i}) => {
    const a = Jr()
      , r = i.hook ? Nx : a;
    let o = r;
    const [u,f=i.ssrSearch ?? ""] = i.ssrPath?.split("?") ?? [];
    u && (i.ssrSearch = f,
    i.ssrPath = u),
    i.hrefs = i.hrefs ?? i.hook?.hrefs,
    i.searchHook = i.searchHook ?? i.hook?.searchHook;
    let h = T.useRef({})
      , m = h.current
      , p = m;
    for (let g in r) {
        const x = g === "base" ? r[g] + (i[g] ?? "") : i[g] ?? r[g];
        m === p && x !== p[g] && (h.current = p = {
            ...p
        }),
        p[g] = x,
        (x !== r[g] || x !== o[g]) && (o = p)
    }
    return T.createElement(Dx.Provider, {
        value: o,
        children: e
    })
}
  , gv = ({children: e, component: i}, a) => i ? T.createElement(i, {
    params: a
}) : typeof e == "function" ? e(a) : e
  , ZA = e => {
    let i = T.useRef(Rx);
    const a = i.current;
    return i.current = Object.keys(e).length !== Object.keys(a).length || Object.entries(e).some( ([r,o]) => o !== a[r]) ? e : a
}
  , xs = ({path: e, nest: i, match: a, ...r}) => {
    const o = Jr()
      , [u] = oc(o)
      , [f,h,m] = a ?? Ox(o.parser, e, u, i)
      , p = ZA({
        ...XA(),
        ...h
    });
    if (!f)
        return null;
    const g = m ? T.createElement(KA, {
        base: m
    }, gv(r, p)) : gv(r, p);
    return T.createElement(jx.Provider, {
        value: p,
        children: g
    })
}
  , be = T.forwardRef( (e, i) => {
    const a = Jr()
      , [r,o] = oc(a)
      , {to: u="", href: f=u, onClick: h, asChild: m, children: p, className: g, replace: x, state: S, transition: w, ...E} = e
      , A = Ex(j => {
        j.ctrlKey || j.metaKey || j.altKey || j.shiftKey || j.button !== 0 || (h?.(j),
        j.defaultPrevented || (j.preventDefault(),
        o(f, e)))
    }
    )
      , M = a.hrefs(f[0] === "~" ? f.slice(1) : a.base + f, a);
    return m && T.isValidElement(p) ? T.cloneElement(p, {
        onClick: A,
        href: M
    }) : T.createElement("a", {
        ...E,
        onClick: A,
        href: M,
        className: g?.call ? g(r === f) : g,
        children: p,
        ref: i
    })
}
)
  , _x = e => Array.isArray(e) ? e.flatMap(i => _x(i && i.type === T.Fragment ? i.props.children : i)) : [e]
  , IA = ({children: e, location: i}) => {
    const a = Jr()
      , [r] = oc(a);
    for (const o of _x(e)) {
        let u = 0;
        if (T.isValidElement(o) && (u = Ox(a.parser, o.props.path, i || r, o.props.nest))[0])
            return T.cloneElement(o, {
                match: u
            })
    }
    return null
}
;
var cc = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , WA = {
    setTimeout: (e, i) => setTimeout(e, i),
    clearTimeout: e => clearTimeout(e),
    setInterval: (e, i) => setInterval(e, i),
    clearInterval: e => clearInterval(e)
}
  , JA = class {
    #t = WA;
    #e = !1;
    setTimeoutProvider(e) {
        this.#t = e
    }
    setTimeout(e, i) {
        return this.#t.setTimeout(e, i)
    }
    clearTimeout(e) {
        this.#t.clearTimeout(e)
    }
    setInterval(e, i) {
        return this.#t.setInterval(e, i)
    }
    clearInterval(e) {
        this.#t.clearInterval(e)
    }
}
  , xd = new JA;
function $A(e) {
    setTimeout(e, 0)
}
var uc = typeof window > "u" || "Deno"in globalThis;
function Nn() {}
function t2(e, i) {
    return typeof e == "function" ? e(i) : e
}
function e2(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function n2(e, i) {
    return Math.max(e + (i || 0) - Date.now(), 0)
}
function bd(e, i) {
    return typeof e == "function" ? e(i) : e
}
function i2(e, i) {
    return typeof e == "function" ? e(i) : e
}
function vv(e, i) {
    const {type: a="all", exact: r, fetchStatus: o, predicate: u, queryKey: f, stale: h} = e;
    if (f) {
        if (r) {
            if (i.queryHash !== rh(f, i.options))
                return !1
        } else if (!Gr(i.queryKey, f))
            return !1
    }
    if (a !== "all") {
        const m = i.isActive();
        if (a === "active" && !m || a === "inactive" && m)
            return !1
    }
    return !(typeof h == "boolean" && i.isStale() !== h || o && o !== i.state.fetchStatus || u && !u(i))
}
function xv(e, i) {
    const {exact: a, status: r, predicate: o, mutationKey: u} = e;
    if (u) {
        if (!i.options.mutationKey)
            return !1;
        if (a) {
            if (Fr(i.options.mutationKey) !== Fr(u))
                return !1
        } else if (!Gr(i.options.mutationKey, u))
            return !1
    }
    return !(r && i.state.status !== r || o && !o(i))
}
function rh(e, i) {
    return (i?.queryKeyHashFn || Fr)(e)
}
function Fr(e) {
    return JSON.stringify(e, (i, a) => Sd(a) ? Object.keys(a).sort().reduce( (r, o) => (r[o] = a[o],
    r), {}) : a)
}
function Gr(e, i) {
    return e === i ? !0 : typeof e != typeof i ? !1 : e && i && typeof e == "object" && typeof i == "object" ? Object.keys(i).every(a => Gr(e[a], i[a])) : !1
}
var s2 = Object.prototype.hasOwnProperty;
function Vx(e, i, a=0) {
    if (e === i)
        return e;
    if (a > 500)
        return i;
    const r = bv(e) && bv(i);
    if (!r && !(Sd(e) && Sd(i)))
        return i;
    const u = (r ? e : Object.keys(e)).length
      , f = r ? i : Object.keys(i)
      , h = f.length
      , m = r ? new Array(h) : {};
    let p = 0;
    for (let g = 0; g < h; g++) {
        const x = r ? g : f[g]
          , S = e[x]
          , w = i[x];
        if (S === w) {
            m[x] = S,
            (r ? g < u : s2.call(e, x)) && p++;
            continue
        }
        if (S === null || w === null || typeof S != "object" || typeof w != "object") {
            m[x] = w;
            continue
        }
        const E = Vx(S, w, a + 1);
        m[x] = E,
        E === S && p++
    }
    return u === h && p === u ? e : m
}
function bv(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Sd(e) {
    if (!Sv(e))
        return !1;
    const i = e.constructor;
    if (i === void 0)
        return !0;
    const a = i.prototype;
    return !(!Sv(a) || !a.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Sv(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function a2(e) {
    return new Promise(i => {
        xd.setTimeout(i, e)
    }
    )
}
function r2(e, i, a) {
    return typeof a.structuralSharing == "function" ? a.structuralSharing(e, i) : a.structuralSharing !== !1 ? Vx(e, i) : i
}
function l2(e, i, a=0) {
    const r = [...e, i];
    return a && r.length > a ? r.slice(1) : r
}
function o2(e, i, a=0) {
    const r = [i, ...e];
    return a && r.length > a ? r.slice(0, -1) : r
}
var lh = Symbol();
function zx(e, i) {
    return !e.queryFn && i?.initialPromise ? () => i.initialPromise : !e.queryFn || e.queryFn === lh ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
function c2(e, i, a) {
    let r = !1, o;
    return Object.defineProperty(e, "signal", {
        enumerable: !0,
        get: () => (o ??= i(),
        r || (r = !0,
        o.aborted ? a() : o.addEventListener("abort", a, {
            once: !0
        })),
        o)
    }),
    e
}
var u2 = class extends cc {
    #t;
    #e;
    #n;
    constructor() {
        super(),
        this.#n = e => {
            if (!uc && window.addEventListener) {
                const i = () => e();
                return window.addEventListener("visibilitychange", i, !1),
                () => {
                    window.removeEventListener("visibilitychange", i)
                }
            }
        }
    }
    onSubscribe() {
        this.#e || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#e?.(),
        this.#e = void 0)
    }
    setEventListener(e) {
        this.#n = e,
        this.#e?.(),
        this.#e = e(i => {
            typeof i == "boolean" ? this.setFocused(i) : this.onFocus()
        }
        )
    }
    setFocused(e) {
        this.#t !== e && (this.#t = e,
        this.onFocus())
    }
    onFocus() {
        const e = this.isFocused();
        this.listeners.forEach(i => {
            i(e)
        }
        )
    }
    isFocused() {
        return typeof this.#t == "boolean" ? this.#t : globalThis.document?.visibilityState !== "hidden"
    }
}
  , Lx = new u2;
function f2() {
    let e, i;
    const a = new Promise( (o, u) => {
        e = o,
        i = u
    }
    );
    a.status = "pending",
    a.catch( () => {}
    );
    function r(o) {
        Object.assign(a, o),
        delete a.resolve,
        delete a.reject
    }
    return a.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    a.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        i(o)
    }
    ,
    a
}
var d2 = $A;
function h2() {
    let e = []
      , i = 0
      , a = h => {
        h()
    }
      , r = h => {
        h()
    }
      , o = d2;
    const u = h => {
        i ? e.push(h) : o( () => {
            a(h)
        }
        )
    }
      , f = () => {
        const h = e;
        e = [],
        h.length && o( () => {
            r( () => {
                h.forEach(m => {
                    a(m)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: h => {
            let m;
            i++;
            try {
                m = h()
            } finally {
                i--,
                i || f()
            }
            return m
        }
        ,
        batchCalls: h => (...m) => {
            u( () => {
                h(...m)
            }
            )
        }
        ,
        schedule: u,
        setNotifyFunction: h => {
            a = h
        }
        ,
        setBatchNotifyFunction: h => {
            r = h
        }
        ,
        setScheduler: h => {
            o = h
        }
    }
}
var Ue = h2()
  , m2 = class extends cc {
    #t = !0;
    #e;
    #n;
    constructor() {
        super(),
        this.#n = e => {
            if (!uc && window.addEventListener) {
                const i = () => e(!0)
                  , a = () => e(!1);
                return window.addEventListener("online", i, !1),
                window.addEventListener("offline", a, !1),
                () => {
                    window.removeEventListener("online", i),
                    window.removeEventListener("offline", a)
                }
            }
        }
    }
    onSubscribe() {
        this.#e || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#e?.(),
        this.#e = void 0)
    }
    setEventListener(e) {
        this.#n = e,
        this.#e?.(),
        this.#e = e(this.setOnline.bind(this))
    }
    setOnline(e) {
        this.#t !== e && (this.#t = e,
        this.listeners.forEach(a => {
            a(e)
        }
        ))
    }
    isOnline() {
        return this.#t
    }
}
  , Yo = new m2;
function p2(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function Ux(e) {
    return (e ?? "online") === "online" ? Yo.isOnline() : !0
}
var wd = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e?.revert,
        this.silent = e?.silent
    }
}
;
function kx(e) {
    let i = !1, a = 0, r;
    const o = f2()
      , u = () => o.status !== "pending"
      , f = A => {
        if (!u()) {
            const M = new wd(A);
            S(M),
            e.onCancel?.(M)
        }
    }
      , h = () => {
        i = !0
    }
      , m = () => {
        i = !1
    }
      , p = () => Lx.isFocused() && (e.networkMode === "always" || Yo.isOnline()) && e.canRun()
      , g = () => Ux(e.networkMode) && e.canRun()
      , x = A => {
        u() || (r?.(),
        o.resolve(A))
    }
      , S = A => {
        u() || (r?.(),
        o.reject(A))
    }
      , w = () => new Promise(A => {
        r = M => {
            (u() || p()) && A(M)
        }
        ,
        e.onPause?.()
    }
    ).then( () => {
        r = void 0,
        u() || e.onContinue?.()
    }
    )
      , E = () => {
        if (u())
            return;
        let A;
        const M = a === 0 ? e.initialPromise : void 0;
        try {
            A = M ?? e.fn()
        } catch (j) {
            A = Promise.reject(j)
        }
        Promise.resolve(A).then(x).catch(j => {
            if (u())
                return;
            const O = e.retry ?? (uc ? 0 : 3)
              , V = e.retryDelay ?? p2
              , G = typeof V == "function" ? V(a, j) : V
              , H = O === !0 || typeof O == "number" && a < O || typeof O == "function" && O(a, j);
            if (i || !H) {
                S(j);
                return
            }
            a++,
            e.onFail?.(a, j),
            a2(G).then( () => p() ? void 0 : w()).then( () => {
                i ? S(j) : E()
            }
            )
        }
        )
    }
    ;
    return {
        promise: o,
        status: () => o.status,
        cancel: f,
        continue: () => (r?.(),
        o),
        cancelRetry: h,
        continueRetry: m,
        canStart: g,
        start: () => (g() ? E() : w().then(E),
        o)
    }
}
var Bx = class {
    #t;
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        e2(this.gcTime) && (this.#t = xd.setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (uc ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        this.#t && (xd.clearTimeout(this.#t),
        this.#t = void 0)
    }
}
  , y2 = class extends Bx {
    #t;
    #e;
    #n;
    #s;
    #i;
    #r;
    #l;
    constructor(e) {
        super(),
        this.#l = !1,
        this.#r = e.defaultOptions,
        this.setOptions(e.options),
        this.observers = [],
        this.#s = e.client,
        this.#n = this.#s.getQueryCache(),
        this.queryKey = e.queryKey,
        this.queryHash = e.queryHash,
        this.#t = Tv(this.options),
        this.state = e.state ?? this.#t,
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        return this.#i?.promise
    }
    setOptions(e) {
        if (this.options = {
            ...this.#r,
            ...e
        },
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0) {
            const i = Tv(this.options);
            i.data !== void 0 && (this.setState(wv(i.data, i.dataUpdatedAt)),
            this.#t = i)
        }
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && this.#n.remove(this)
    }
    setData(e, i) {
        const a = r2(this.state.data, e, this.options);
        return this.#a({
            data: a,
            type: "success",
            dataUpdatedAt: i?.updatedAt,
            manual: i?.manual
        }),
        a
    }
    setState(e, i) {
        this.#a({
            type: "setState",
            state: e,
            setStateOptions: i
        })
    }
    cancel(e) {
        const i = this.#i?.promise;
        return this.#i?.cancel(e),
        i ? i.then(Nn).catch(Nn) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(this.#t)
    }
    isActive() {
        return this.observers.some(e => i2(e.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === lh || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(e => bd(e.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(e=0) {
        return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !n2(this.state.dataUpdatedAt, e)
    }
    onFocus() {
        this.observers.find(i => i.shouldFetchOnWindowFocus())?.refetch({
            cancelRefetch: !1
        }),
        this.#i?.continue()
    }
    onOnline() {
        this.observers.find(i => i.shouldFetchOnReconnect())?.refetch({
            cancelRefetch: !1
        }),
        this.#i?.continue()
    }
    addObserver(e) {
        this.observers.includes(e) || (this.observers.push(e),
        this.clearGcTimeout(),
        this.#n.notify({
            type: "observerAdded",
            query: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.observers.includes(e) && (this.observers = this.observers.filter(i => i !== e),
        this.observers.length || (this.#i && (this.#l ? this.#i.cancel({
            revert: !0
        }) : this.#i.cancelRetry()),
        this.scheduleGc()),
        this.#n.notify({
            type: "observerRemoved",
            query: this,
            observer: e
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || this.#a({
            type: "invalidate"
        })
    }
    async fetch(e, i) {
        if (this.state.fetchStatus !== "idle" && this.#i?.status() !== "rejected") {
            if (this.state.data !== void 0 && i?.cancelRefetch)
                this.cancel({
                    silent: !0
                });
            else if (this.#i)
                return this.#i.continueRetry(),
                this.#i.promise
        }
        if (e && this.setOptions(e),
        !this.options.queryFn) {
            const h = this.observers.find(m => m.options.queryFn);
            h && this.setOptions(h.options)
        }
        const a = new AbortController
          , r = h => {
            Object.defineProperty(h, "signal", {
                enumerable: !0,
                get: () => (this.#l = !0,
                a.signal)
            })
        }
          , o = () => {
            const h = zx(this.options, i)
              , p = ( () => {
                const g = {
                    client: this.#s,
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return r(g),
                g
            }
            )();
            return this.#l = !1,
            this.options.persister ? this.options.persister(h, p, this) : h(p)
        }
          , f = ( () => {
            const h = {
                fetchOptions: i,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#s,
                state: this.state,
                fetchFn: o
            };
            return r(h),
            h
        }
        )();
        this.options.behavior?.onFetch(f, this),
        this.#e = this.state,
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== f.fetchOptions?.meta) && this.#a({
            type: "fetch",
            meta: f.fetchOptions?.meta
        }),
        this.#i = kx({
            initialPromise: i?.initialPromise,
            fn: f.fetchFn,
            onCancel: h => {
                h instanceof wd && h.revert && this.setState({
                    ...this.#e,
                    fetchStatus: "idle"
                }),
                a.abort()
            }
            ,
            onFail: (h, m) => {
                this.#a({
                    type: "failed",
                    failureCount: h,
                    error: m
                })
            }
            ,
            onPause: () => {
                this.#a({
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                this.#a({
                    type: "continue"
                })
            }
            ,
            retry: f.options.retry,
            retryDelay: f.options.retryDelay,
            networkMode: f.options.networkMode,
            canRun: () => !0
        });
        try {
            const h = await this.#i.start();
            if (h === void 0)
                throw new Error(`${this.queryHash} data is undefined`);
            return this.setData(h),
            this.#n.config.onSuccess?.(h, this),
            this.#n.config.onSettled?.(h, this.state.error, this),
            h
        } catch (h) {
            if (h instanceof wd) {
                if (h.silent)
                    return this.#i.promise;
                if (h.revert) {
                    if (this.state.data === void 0)
                        throw h;
                    return this.state.data
                }
            }
            throw this.#a({
                type: "error",
                error: h
            }),
            this.#n.config.onError?.(h, this),
            this.#n.config.onSettled?.(this.state.data, h, this),
            h
        } finally {
            this.scheduleGc()
        }
    }
    #a(e) {
        const i = a => {
            switch (e.type) {
            case "failed":
                return {
                    ...a,
                    fetchFailureCount: e.failureCount,
                    fetchFailureReason: e.error
                };
            case "pause":
                return {
                    ...a,
                    fetchStatus: "paused"
                };
            case "continue":
                return {
                    ...a,
                    fetchStatus: "fetching"
                };
            case "fetch":
                return {
                    ...a,
                    ...g2(a.data, this.options),
                    fetchMeta: e.meta ?? null
                };
            case "success":
                const r = {
                    ...a,
                    ...wv(e.data, e.dataUpdatedAt),
                    dataUpdateCount: a.dataUpdateCount + 1,
                    ...!e.manual && {
                        fetchStatus: "idle",
                        fetchFailureCount: 0,
                        fetchFailureReason: null
                    }
                };
                return this.#e = e.manual ? r : void 0,
                r;
            case "error":
                const o = e.error;
                return {
                    ...a,
                    error: o,
                    errorUpdateCount: a.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: a.fetchFailureCount + 1,
                    fetchFailureReason: o,
                    fetchStatus: "idle",
                    status: "error",
                    isInvalidated: !0
                };
            case "invalidate":
                return {
                    ...a,
                    isInvalidated: !0
                };
            case "setState":
                return {
                    ...a,
                    ...e.state
                }
            }
        }
        ;
        this.state = i(this.state),
        Ue.batch( () => {
            this.observers.forEach(a => {
                a.onQueryUpdate()
            }
            ),
            this.#n.notify({
                query: this,
                type: "updated",
                action: e
            })
        }
        )
    }
}
;
function g2(e, i) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Ux(i.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function wv(e, i) {
    return {
        data: e,
        dataUpdatedAt: i ?? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success"
    }
}
function Tv(e) {
    const i = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , a = i !== void 0
      , r = a ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: i,
        dataUpdateCount: 0,
        dataUpdatedAt: a ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: a ? "success" : "pending",
        fetchStatus: "idle"
    }
}
function Av(e) {
    return {
        onFetch: (i, a) => {
            const r = i.options
              , o = i.fetchOptions?.meta?.fetchMore?.direction
              , u = i.state.data?.pages || []
              , f = i.state.data?.pageParams || [];
            let h = {
                pages: [],
                pageParams: []
            }
              , m = 0;
            const p = async () => {
                let g = !1;
                const x = E => {
                    c2(E, () => i.signal, () => g = !0)
                }
                  , S = zx(i.options, i.fetchOptions)
                  , w = async (E, A, M) => {
                    if (g)
                        return Promise.reject();
                    if (A == null && E.pages.length)
                        return Promise.resolve(E);
                    const O = ( () => {
                        const J = {
                            client: i.client,
                            queryKey: i.queryKey,
                            pageParam: A,
                            direction: M ? "backward" : "forward",
                            meta: i.options.meta
                        };
                        return x(J),
                        J
                    }
                    )()
                      , V = await S(O)
                      , {maxPages: G} = i.options
                      , H = M ? o2 : l2;
                    return {
                        pages: H(E.pages, V, G),
                        pageParams: H(E.pageParams, A, G)
                    }
                }
                ;
                if (o && u.length) {
                    const E = o === "backward"
                      , A = E ? v2 : Ev
                      , M = {
                        pages: u,
                        pageParams: f
                    }
                      , j = A(r, M);
                    h = await w(M, j, E)
                } else {
                    const E = e ?? u.length;
                    do {
                        const A = m === 0 ? f[0] ?? r.initialPageParam : Ev(r, h);
                        if (m > 0 && A == null)
                            break;
                        h = await w(h, A),
                        m++
                    } while (m < E)
                }
                return h
            }
            ;
            i.options.persister ? i.fetchFn = () => i.options.persister?.(p, {
                client: i.client,
                queryKey: i.queryKey,
                meta: i.options.meta,
                signal: i.signal
            }, a) : i.fetchFn = p
        }
    }
}
function Ev(e, {pages: i, pageParams: a}) {
    const r = i.length - 1;
    return i.length > 0 ? e.getNextPageParam(i[r], i, a[r], a) : void 0
}
function v2(e, {pages: i, pageParams: a}) {
    return i.length > 0 ? e.getPreviousPageParam?.(i[0], i, a[0], a) : void 0
}
var x2 = class extends Bx {
    #t;
    #e;
    #n;
    #s;
    constructor(e) {
        super(),
        this.#t = e.client,
        this.mutationId = e.mutationId,
        this.#n = e.mutationCache,
        this.#e = [],
        this.state = e.state || b2(),
        this.setOptions(e.options),
        this.scheduleGc()
    }
    setOptions(e) {
        this.options = e,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(e) {
        this.#e.includes(e) || (this.#e.push(e),
        this.clearGcTimeout(),
        this.#n.notify({
            type: "observerAdded",
            mutation: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.#e = this.#e.filter(i => i !== e),
        this.scheduleGc(),
        this.#n.notify({
            type: "observerRemoved",
            mutation: this,
            observer: e
        })
    }
    optionalRemove() {
        this.#e.length || (this.state.status === "pending" ? this.scheduleGc() : this.#n.remove(this))
    }
    continue() {
        return this.#s?.continue() ?? this.execute(this.state.variables)
    }
    async execute(e) {
        const i = () => {
            this.#i({
                type: "continue"
            })
        }
          , a = {
            client: this.#t,
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        this.#s = kx({
            fn: () => this.options.mutationFn ? this.options.mutationFn(e, a) : Promise.reject(new Error("No mutationFn found")),
            onFail: (u, f) => {
                this.#i({
                    type: "failed",
                    failureCount: u,
                    error: f
                })
            }
            ,
            onPause: () => {
                this.#i({
                    type: "pause"
                })
            }
            ,
            onContinue: i,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => this.#n.canRun(this)
        });
        const r = this.state.status === "pending"
          , o = !this.#s.canStart();
        try {
            if (r)
                i();
            else {
                this.#i({
                    type: "pending",
                    variables: e,
                    isPaused: o
                }),
                await this.#n.config.onMutate?.(e, this, a);
                const f = await this.options.onMutate?.(e, a);
                f !== this.state.context && this.#i({
                    type: "pending",
                    context: f,
                    variables: e,
                    isPaused: o
                })
            }
            const u = await this.#s.start();
            return await this.#n.config.onSuccess?.(u, e, this.state.context, this, a),
            await this.options.onSuccess?.(u, e, this.state.context, a),
            await this.#n.config.onSettled?.(u, null, this.state.variables, this.state.context, this, a),
            await this.options.onSettled?.(u, null, e, this.state.context, a),
            this.#i({
                type: "success",
                data: u
            }),
            u
        } catch (u) {
            try {
                await this.#n.config.onError?.(u, e, this.state.context, this, a)
            } catch (f) {
                Promise.reject(f)
            }
            try {
                await this.options.onError?.(u, e, this.state.context, a)
            } catch (f) {
                Promise.reject(f)
            }
            try {
                await this.#n.config.onSettled?.(void 0, u, this.state.variables, this.state.context, this, a)
            } catch (f) {
                Promise.reject(f)
            }
            try {
                await this.options.onSettled?.(void 0, u, e, this.state.context, a)
            } catch (f) {
                Promise.reject(f)
            }
            throw this.#i({
                type: "error",
                error: u
            }),
            u
        } finally {
            this.#n.runNext(this)
        }
    }
    #i(e) {
        const i = a => {
            switch (e.type) {
            case "failed":
                return {
                    ...a,
                    failureCount: e.failureCount,
                    failureReason: e.error
                };
            case "pause":
                return {
                    ...a,
                    isPaused: !0
                };
            case "continue":
                return {
                    ...a,
                    isPaused: !1
                };
            case "pending":
                return {
                    ...a,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: e.isPaused,
                    status: "pending",
                    variables: e.variables,
                    submittedAt: Date.now()
                };
            case "success":
                return {
                    ...a,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1
                };
            case "error":
                return {
                    ...a,
                    data: void 0,
                    error: e.error,
                    failureCount: a.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: "error"
                }
            }
        }
        ;
        this.state = i(this.state),
        Ue.batch( () => {
            this.#e.forEach(a => {
                a.onMutationUpdate(e)
            }
            ),
            this.#n.notify({
                mutation: this,
                type: "updated",
                action: e
            })
        }
        )
    }
}
;
function b2() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var S2 = class extends cc {
    constructor(e={}) {
        super(),
        this.config = e,
        this.#t = new Set,
        this.#e = new Map,
        this.#n = 0
    }
    #t;
    #e;
    #n;
    build(e, i, a) {
        const r = new x2({
            client: e,
            mutationCache: this,
            mutationId: ++this.#n,
            options: e.defaultMutationOptions(i),
            state: a
        });
        return this.add(r),
        r
    }
    add(e) {
        this.#t.add(e);
        const i = No(e);
        if (typeof i == "string") {
            const a = this.#e.get(i);
            a ? a.push(e) : this.#e.set(i, [e])
        }
        this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        if (this.#t.delete(e)) {
            const i = No(e);
            if (typeof i == "string") {
                const a = this.#e.get(i);
                if (a)
                    if (a.length > 1) {
                        const r = a.indexOf(e);
                        r !== -1 && a.splice(r, 1)
                    } else
                        a[0] === e && this.#e.delete(i)
            }
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        const i = No(e);
        if (typeof i == "string") {
            const r = this.#e.get(i)?.find(o => o.state.status === "pending");
            return !r || r === e
        } else
            return !0
    }
    runNext(e) {
        const i = No(e);
        return typeof i == "string" ? this.#e.get(i)?.find(r => r !== e && r.state.isPaused)?.continue() ?? Promise.resolve() : Promise.resolve()
    }
    clear() {
        Ue.batch( () => {
            this.#t.forEach(e => {
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }
            ),
            this.#t.clear(),
            this.#e.clear()
        }
        )
    }
    getAll() {
        return Array.from(this.#t)
    }
    find(e) {
        const i = {
            exact: !0,
            ...e
        };
        return this.getAll().find(a => xv(i, a))
    }
    findAll(e={}) {
        return this.getAll().filter(i => xv(e, i))
    }
    notify(e) {
        Ue.batch( () => {
            this.listeners.forEach(i => {
                i(e)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const e = this.getAll().filter(i => i.state.isPaused);
        return Ue.batch( () => Promise.all(e.map(i => i.continue().catch(Nn))))
    }
}
;
function No(e) {
    return e.options.scope?.id
}
var w2 = class extends cc {
    constructor(e={}) {
        super(),
        this.config = e,
        this.#t = new Map
    }
    #t;
    build(e, i, a) {
        const r = i.queryKey
          , o = i.queryHash ?? rh(r, i);
        let u = this.get(o);
        return u || (u = new y2({
            client: e,
            queryKey: r,
            queryHash: o,
            options: e.defaultQueryOptions(i),
            state: a,
            defaultOptions: e.getQueryDefaults(r)
        }),
        this.add(u)),
        u
    }
    add(e) {
        this.#t.has(e.queryHash) || (this.#t.set(e.queryHash, e),
        this.notify({
            type: "added",
            query: e
        }))
    }
    remove(e) {
        const i = this.#t.get(e.queryHash);
        i && (e.destroy(),
        i === e && this.#t.delete(e.queryHash),
        this.notify({
            type: "removed",
            query: e
        }))
    }
    clear() {
        Ue.batch( () => {
            this.getAll().forEach(e => {
                this.remove(e)
            }
            )
        }
        )
    }
    get(e) {
        return this.#t.get(e)
    }
    getAll() {
        return [...this.#t.values()]
    }
    find(e) {
        const i = {
            exact: !0,
            ...e
        };
        return this.getAll().find(a => vv(i, a))
    }
    findAll(e={}) {
        const i = this.getAll();
        return Object.keys(e).length > 0 ? i.filter(a => vv(e, a)) : i
    }
    notify(e) {
        Ue.batch( () => {
            this.listeners.forEach(i => {
                i(e)
            }
            )
        }
        )
    }
    onFocus() {
        Ue.batch( () => {
            this.getAll().forEach(e => {
                e.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        Ue.batch( () => {
            this.getAll().forEach(e => {
                e.onOnline()
            }
            )
        }
        )
    }
}
  , T2 = class {
    #t;
    #e;
    #n;
    #s;
    #i;
    #r;
    #l;
    #a;
    constructor(e={}) {
        this.#t = e.queryCache || new w2,
        this.#e = e.mutationCache || new S2,
        this.#n = e.defaultOptions || {},
        this.#s = new Map,
        this.#i = new Map,
        this.#r = 0
    }
    mount() {
        this.#r++,
        this.#r === 1 && (this.#l = Lx.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            this.#t.onFocus())
        }
        ),
        this.#a = Yo.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            this.#t.onOnline())
        }
        ))
    }
    unmount() {
        this.#r--,
        this.#r === 0 && (this.#l?.(),
        this.#l = void 0,
        this.#a?.(),
        this.#a = void 0)
    }
    isFetching(e) {
        return this.#t.findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return this.#e.findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        const i = this.defaultQueryOptions({
            queryKey: e
        });
        return this.#t.get(i.queryHash)?.state.data
    }
    ensureQueryData(e) {
        const i = this.defaultQueryOptions(e)
          , a = this.#t.build(this, i)
          , r = a.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && a.isStaleByTime(bd(i.staleTime, a)) && this.prefetchQuery(i),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return this.#t.findAll(e).map( ({queryKey: i, state: a}) => {
            const r = a.data;
            return [i, r]
        }
        )
    }
    setQueryData(e, i, a) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , u = this.#t.get(r.queryHash)?.state.data
          , f = t2(i, u);
        if (f !== void 0)
            return this.#t.build(this, r).setData(f, {
                ...a,
                manual: !0
            })
    }
    setQueriesData(e, i, a) {
        return Ue.batch( () => this.#t.findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, i, a)]))
    }
    getQueryState(e) {
        const i = this.defaultQueryOptions({
            queryKey: e
        });
        return this.#t.get(i.queryHash)?.state
    }
    removeQueries(e) {
        const i = this.#t;
        Ue.batch( () => {
            i.findAll(e).forEach(a => {
                i.remove(a)
            }
            )
        }
        )
    }
    resetQueries(e, i) {
        const a = this.#t;
        return Ue.batch( () => (a.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, i)))
    }
    cancelQueries(e, i={}) {
        const a = {
            revert: !0,
            ...i
        }
          , r = Ue.batch( () => this.#t.findAll(e).map(o => o.cancel(a)));
        return Promise.all(r).then(Nn).catch(Nn)
    }
    invalidateQueries(e, i={}) {
        return Ue.batch( () => (this.#t.findAll(e).forEach(a => {
            a.invalidate()
        }
        ),
        e?.refetchType === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: e?.refetchType ?? e?.type ?? "active"
        }, i)))
    }
    refetchQueries(e, i={}) {
        const a = {
            ...i,
            cancelRefetch: i.cancelRefetch ?? !0
        }
          , r = Ue.batch( () => this.#t.findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
            let u = o.fetch(void 0, a);
            return a.throwOnError || (u = u.catch(Nn)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : u
        }
        ));
        return Promise.all(r).then(Nn)
    }
    fetchQuery(e) {
        const i = this.defaultQueryOptions(e);
        i.retry === void 0 && (i.retry = !1);
        const a = this.#t.build(this, i);
        return a.isStaleByTime(bd(i.staleTime, a)) ? a.fetch(i) : Promise.resolve(a.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(Nn).catch(Nn)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Av(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Nn).catch(Nn)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Av(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return Yo.isOnline() ? this.#e.resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return this.#t
    }
    getMutationCache() {
        return this.#e
    }
    getDefaultOptions() {
        return this.#n
    }
    setDefaultOptions(e) {
        this.#n = e
    }
    setQueryDefaults(e, i) {
        this.#s.set(Fr(e), {
            queryKey: e,
            defaultOptions: i
        })
    }
    getQueryDefaults(e) {
        const i = [...this.#s.values()]
          , a = {};
        return i.forEach(r => {
            Gr(e, r.queryKey) && Object.assign(a, r.defaultOptions)
        }
        ),
        a
    }
    setMutationDefaults(e, i) {
        this.#i.set(Fr(e), {
            mutationKey: e,
            defaultOptions: i
        })
    }
    getMutationDefaults(e) {
        const i = [...this.#i.values()]
          , a = {};
        return i.forEach(r => {
            Gr(e, r.mutationKey) && Object.assign(a, r.defaultOptions)
        }
        ),
        a
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const i = {
            ...this.#n.queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return i.queryHash || (i.queryHash = rh(i.queryKey, i)),
        i.refetchOnReconnect === void 0 && (i.refetchOnReconnect = i.networkMode !== "always"),
        i.throwOnError === void 0 && (i.throwOnError = !!i.suspense),
        !i.networkMode && i.persister && (i.networkMode = "offlineFirst"),
        i.queryFn === lh && (i.enabled = !1),
        i
    }
    defaultMutationOptions(e) {
        return e?._defaulted ? e : {
            ...this.#n.mutations,
            ...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        this.#t.clear(),
        this.#e.clear()
    }
}
  , A2 = T.createContext(void 0)
  , E2 = ({client: e, children: i}) => (T.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
v.jsx(A2.Provider, {
    value: e,
    children: i
}));
async function C2(e) {
    if (!e.ok) {
        const i = await e.text() || e.statusText;
        throw new Error(`${e.status}: ${i}`)
    }
}
const M2 = ({on401: e}) => async ({queryKey: i}) => {
    const a = await fetch(i.join("/"), {
        credentials: "include"
    });
    return await C2(a),
    await a.json()
}
  , N2 = new T2({
    defaultOptions: {
        queries: {
            queryFn: M2({
                on401: "throw"
            }),
            refetchInterval: !1,
            refetchOnWindowFocus: !1,
            staleTime: 1 / 0,
            retry: !1
        },
        mutations: {
            retry: !1
        }
    }
})
  , D2 = 1
  , R2 = 1e6;
let Zf = 0;
function j2() {
    return Zf = (Zf + 1) % Number.MAX_SAFE_INTEGER,
    Zf.toString()
}
const If = new Map
  , Cv = e => {
    if (If.has(e))
        return;
    const i = setTimeout( () => {
        If.delete(e),
        zr({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , R2);
    If.set(e, i)
}
  , O2 = (e, i) => {
    switch (i.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [i.toast, ...e.toasts].slice(0, D2)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(a => a.id === i.toast.id ? {
                ...a,
                ...i.toast
            } : a)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: a} = i;
            return a ? Cv(a) : e.toasts.forEach(r => {
                Cv(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === a || a === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return i.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(a => a.id !== i.toastId)
        }
    }
}
  , Uo = [];
let ko = {
    toasts: []
};
function zr(e) {
    ko = O2(ko, e),
    Uo.forEach(i => {
        i(ko)
    }
    )
}
function _2({...e}) {
    const i = j2()
      , a = o => zr({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: i
        }
    })
      , r = () => zr({
        type: "DISMISS_TOAST",
        toastId: i
    });
    return zr({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: i,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: i,
        dismiss: r,
        update: a
    }
}
function Px() {
    const [e,i] = T.useState(ko);
    return T.useEffect( () => (Uo.push(i),
    () => {
        const a = Uo.indexOf(i);
        a > -1 && Uo.splice(a, 1)
    }
    ), [e]),
    {
        ...e,
        toast: _2,
        dismiss: a => zr({
            type: "DISMISS_TOAST",
            toastId: a
        })
    }
}
var fc = Ax();
const V2 = Tx(fc);
function xe(e, i, {checkForDefaultPrevented: a=!0}={}) {
    return function(o) {
        if (e?.(o),
        a === !1 || !o.defaultPrevented)
            return i?.(o)
    }
}
function Mv(e, i) {
    if (typeof e == "function")
        return e(i);
    e != null && (e.current = i)
}
function dc(...e) {
    return i => {
        let a = !1;
        const r = e.map(o => {
            const u = Mv(o, i);
            return !a && typeof u == "function" && (a = !0),
            u
        }
        );
        if (a)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const u = r[o];
                    typeof u == "function" ? u() : Mv(e[o], null)
                }
            }
    }
}
function jn(...e) {
    return T.useCallback(dc(...e), e)
}
function hc(e, i=[]) {
    let a = [];
    function r(u, f) {
        const h = T.createContext(f)
          , m = a.length;
        a = [...a, f];
        const p = x => {
            const {scope: S, children: w, ...E} = x
              , A = S?.[e]?.[m] || h
              , M = T.useMemo( () => E, Object.values(E));
            return v.jsx(A.Provider, {
                value: M,
                children: w
            })
        }
        ;
        p.displayName = u + "Provider";
        function g(x, S) {
            const w = S?.[e]?.[m] || h
              , E = T.useContext(w);
            if (E)
                return E;
            if (f !== void 0)
                return f;
            throw new Error(`\`${x}\` must be used within \`${u}\``)
        }
        return [p, g]
    }
    const o = () => {
        const u = a.map(f => T.createContext(f));
        return function(h) {
            const m = h?.[e] || u;
            return T.useMemo( () => ({
                [`__scope${e}`]: {
                    ...h,
                    [e]: m
                }
            }), [h, m])
        }
    }
    ;
    return o.scopeName = e,
    [r, z2(o, ...i)]
}
function z2(...e) {
    const i = e[0];
    if (e.length === 1)
        return i;
    const a = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(u) {
            const f = r.reduce( (h, {useScope: m, scopeName: p}) => {
                const x = m(u)[`__scope${p}`];
                return {
                    ...h,
                    ...x
                }
            }
            , {});
            return T.useMemo( () => ({
                [`__scope${i.scopeName}`]: f
            }), [f])
        }
    }
    ;
    return a.scopeName = i.scopeName,
    a
}
function Nv(e) {
    const i = L2(e)
      , a = T.forwardRef( (r, o) => {
        const {children: u, ...f} = r
          , h = T.Children.toArray(u)
          , m = h.find(k2);
        if (m) {
            const p = m.props.children
              , g = h.map(x => x === m ? T.Children.count(p) > 1 ? T.Children.only(null) : T.isValidElement(p) ? p.props.children : null : x);
            return v.jsx(i, {
                ...f,
                ref: o,
                children: T.isValidElement(p) ? T.cloneElement(p, void 0, g) : null
            })
        }
        return v.jsx(i, {
            ...f,
            ref: o,
            children: u
        })
    }
    );
    return a.displayName = `${e}.Slot`,
    a
}
function L2(e) {
    const i = T.forwardRef( (a, r) => {
        const {children: o, ...u} = a;
        if (T.isValidElement(o)) {
            const f = P2(o)
              , h = B2(u, o.props);
            return o.type !== T.Fragment && (h.ref = r ? dc(r, f) : f),
            T.cloneElement(o, h)
        }
        return T.Children.count(o) > 1 ? T.Children.only(null) : null
    }
    );
    return i.displayName = `${e}.SlotClone`,
    i
}
var U2 = Symbol("radix.slottable");
function k2(e) {
    return T.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === U2
}
function B2(e, i) {
    const a = {
        ...i
    };
    for (const r in i) {
        const o = e[r]
          , u = i[r];
        /^on[A-Z]/.test(r) ? o && u ? a[r] = (...h) => {
            const m = u(...h);
            return o(...h),
            m
        }
        : o && (a[r] = o) : r === "style" ? a[r] = {
            ...o,
            ...u
        } : r === "className" && (a[r] = [o, u].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...a
    }
}
function P2(e) {
    let i = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
      , a = i && "isReactWarning"in i && i.isReactWarning;
    return a ? e.ref : (i = Object.getOwnPropertyDescriptor(e, "ref")?.get,
    a = i && "isReactWarning"in i && i.isReactWarning,
    a ? e.props.ref : e.props.ref || e.ref)
}
function H2(e) {
    const i = e + "CollectionProvider"
      , [a,r] = hc(i)
      , [o,u] = a(i, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , f = A => {
        const {scope: M, children: j} = A
          , O = te.useRef(null)
          , V = te.useRef(new Map).current;
        return v.jsx(o, {
            scope: M,
            itemMap: V,
            collectionRef: O,
            children: j
        })
    }
    ;
    f.displayName = i;
    const h = e + "CollectionSlot"
      , m = Nv(h)
      , p = te.forwardRef( (A, M) => {
        const {scope: j, children: O} = A
          , V = u(h, j)
          , G = jn(M, V.collectionRef);
        return v.jsx(m, {
            ref: G,
            children: O
        })
    }
    );
    p.displayName = h;
    const g = e + "CollectionItemSlot"
      , x = "data-radix-collection-item"
      , S = Nv(g)
      , w = te.forwardRef( (A, M) => {
        const {scope: j, children: O, ...V} = A
          , G = te.useRef(null)
          , H = jn(M, G)
          , J = u(g, j);
        return te.useEffect( () => (J.itemMap.set(G, {
            ref: G,
            ...V
        }),
        () => {
            J.itemMap.delete(G)
        }
        )),
        v.jsx(S, {
            [x]: "",
            ref: H,
            children: O
        })
    }
    );
    w.displayName = g;
    function E(A) {
        const M = u(e + "CollectionConsumer", A);
        return te.useCallback( () => {
            const O = M.collectionRef.current;
            if (!O)
                return [];
            const V = Array.from(O.querySelectorAll(`[${x}]`));
            return Array.from(M.itemMap.values()).sort( (J, Z) => V.indexOf(J.ref.current) - V.indexOf(Z.ref.current))
        }
        , [M.collectionRef, M.itemMap])
    }
    return [{
        Provider: f,
        Slot: p,
        ItemSlot: w
    }, E, r]
}
function q2(e) {
    const i = F2(e)
      , a = T.forwardRef( (r, o) => {
        const {children: u, ...f} = r
          , h = T.Children.toArray(u)
          , m = h.find(Y2);
        if (m) {
            const p = m.props.children
              , g = h.map(x => x === m ? T.Children.count(p) > 1 ? T.Children.only(null) : T.isValidElement(p) ? p.props.children : null : x);
            return v.jsx(i, {
                ...f,
                ref: o,
                children: T.isValidElement(p) ? T.cloneElement(p, void 0, g) : null
            })
        }
        return v.jsx(i, {
            ...f,
            ref: o,
            children: u
        })
    }
    );
    return a.displayName = `${e}.Slot`,
    a
}
function F2(e) {
    const i = T.forwardRef( (a, r) => {
        const {children: o, ...u} = a;
        if (T.isValidElement(o)) {
            const f = Q2(o)
              , h = X2(u, o.props);
            return o.type !== T.Fragment && (h.ref = r ? dc(r, f) : f),
            T.cloneElement(o, h)
        }
        return T.Children.count(o) > 1 ? T.Children.only(null) : null
    }
    );
    return i.displayName = `${e}.SlotClone`,
    i
}
var G2 = Symbol("radix.slottable");
function Y2(e) {
    return T.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === G2
}
function X2(e, i) {
    const a = {
        ...i
    };
    for (const r in i) {
        const o = e[r]
          , u = i[r];
        /^on[A-Z]/.test(r) ? o && u ? a[r] = (...h) => {
            const m = u(...h);
            return o(...h),
            m
        }
        : o && (a[r] = o) : r === "style" ? a[r] = {
            ...o,
            ...u
        } : r === "className" && (a[r] = [o, u].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...a
    }
}
function Q2(e) {
    let i = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
      , a = i && "isReactWarning"in i && i.isReactWarning;
    return a ? e.ref : (i = Object.getOwnPropertyDescriptor(e, "ref")?.get,
    a = i && "isReactWarning"in i && i.isReactWarning,
    a ? e.props.ref : e.props.ref || e.ref)
}
var K2 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , Ze = K2.reduce( (e, i) => {
    const a = q2(`Primitive.${i}`)
      , r = T.forwardRef( (o, u) => {
        const {asChild: f, ...h} = o
          , m = f ? a : i;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        v.jsx(m, {
            ...h,
            ref: u
        })
    }
    );
    return r.displayName = `Primitive.${i}`,
    {
        ...e,
        [i]: r
    }
}
, {});
function Hx(e, i) {
    e && fc.flushSync( () => e.dispatchEvent(i))
}
function Qi(e) {
    const i = T.useRef(e);
    return T.useEffect( () => {
        i.current = e
    }
    ),
    T.useMemo( () => (...a) => i.current?.(...a), [])
}
function Z2(e, i=globalThis?.document) {
    const a = Qi(e);
    T.useEffect( () => {
        const r = o => {
            o.key === "Escape" && a(o)
        }
        ;
        return i.addEventListener("keydown", r, {
            capture: !0
        }),
        () => i.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [a, i])
}
var I2 = "DismissableLayer", Td = "dismissableLayer.update", W2 = "dismissableLayer.pointerDownOutside", J2 = "dismissableLayer.focusOutside", Dv, qx = T.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), oh = T.forwardRef( (e, i) => {
    const {disableOutsidePointerEvents: a=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: u, onInteractOutside: f, onDismiss: h, ...m} = e
      , p = T.useContext(qx)
      , [g,x] = T.useState(null)
      , S = g?.ownerDocument ?? globalThis?.document
      , [,w] = T.useState({})
      , E = jn(i, Z => x(Z))
      , A = Array.from(p.layers)
      , [M] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1)
      , j = A.indexOf(M)
      , O = g ? A.indexOf(g) : -1
      , V = p.layersWithOutsidePointerEventsDisabled.size > 0
      , G = O >= j
      , H = tE(Z => {
        const Y = Z.target
          , ot = [...p.branches].some(ht => ht.contains(Y));
        !G || ot || (o?.(Z),
        f?.(Z),
        Z.defaultPrevented || h?.())
    }
    , S)
      , J = eE(Z => {
        const Y = Z.target;
        [...p.branches].some(ht => ht.contains(Y)) || (u?.(Z),
        f?.(Z),
        Z.defaultPrevented || h?.())
    }
    , S);
    return Z2(Z => {
        O === p.layers.size - 1 && (r?.(Z),
        !Z.defaultPrevented && h && (Z.preventDefault(),
        h()))
    }
    , S),
    T.useEffect( () => {
        if (g)
            return a && (p.layersWithOutsidePointerEventsDisabled.size === 0 && (Dv = S.body.style.pointerEvents,
            S.body.style.pointerEvents = "none"),
            p.layersWithOutsidePointerEventsDisabled.add(g)),
            p.layers.add(g),
            Rv(),
            () => {
                a && p.layersWithOutsidePointerEventsDisabled.size === 1 && (S.body.style.pointerEvents = Dv)
            }
    }
    , [g, S, a, p]),
    T.useEffect( () => () => {
        g && (p.layers.delete(g),
        p.layersWithOutsidePointerEventsDisabled.delete(g),
        Rv())
    }
    , [g, p]),
    T.useEffect( () => {
        const Z = () => w({});
        return document.addEventListener(Td, Z),
        () => document.removeEventListener(Td, Z)
    }
    , []),
    v.jsx(Ze.div, {
        ...m,
        ref: E,
        style: {
            pointerEvents: V ? G ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: xe(e.onFocusCapture, J.onFocusCapture),
        onBlurCapture: xe(e.onBlurCapture, J.onBlurCapture),
        onPointerDownCapture: xe(e.onPointerDownCapture, H.onPointerDownCapture)
    })
}
);
oh.displayName = I2;
var $2 = "DismissableLayerBranch"
  , Fx = T.forwardRef( (e, i) => {
    const a = T.useContext(qx)
      , r = T.useRef(null)
      , o = jn(i, r);
    return T.useEffect( () => {
        const u = r.current;
        if (u)
            return a.branches.add(u),
            () => {
                a.branches.delete(u)
            }
    }
    , [a.branches]),
    v.jsx(Ze.div, {
        ...e,
        ref: o
    })
}
);
Fx.displayName = $2;
function tE(e, i=globalThis?.document) {
    const a = Qi(e)
      , r = T.useRef(!1)
      , o = T.useRef( () => {}
    );
    return T.useEffect( () => {
        const u = h => {
            if (h.target && !r.current) {
                let m = function() {
                    Gx(W2, a, p, {
                        discrete: !0
                    })
                };
                const p = {
                    originalEvent: h
                };
                h.pointerType === "touch" ? (i.removeEventListener("click", o.current),
                o.current = m,
                i.addEventListener("click", o.current, {
                    once: !0
                })) : m()
            } else
                i.removeEventListener("click", o.current);
            r.current = !1
        }
          , f = window.setTimeout( () => {
            i.addEventListener("pointerdown", u)
        }
        , 0);
        return () => {
            window.clearTimeout(f),
            i.removeEventListener("pointerdown", u),
            i.removeEventListener("click", o.current)
        }
    }
    , [i, a]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function eE(e, i=globalThis?.document) {
    const a = Qi(e)
      , r = T.useRef(!1);
    return T.useEffect( () => {
        const o = u => {
            u.target && !r.current && Gx(J2, a, {
                originalEvent: u
            }, {
                discrete: !1
            })
        }
        ;
        return i.addEventListener("focusin", o),
        () => i.removeEventListener("focusin", o)
    }
    , [i, a]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function Rv() {
    const e = new CustomEvent(Td);
    document.dispatchEvent(e)
}
function Gx(e, i, a, {discrete: r}) {
    const o = a.originalEvent.target
      , u = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: a
    });
    i && o.addEventListener(e, i, {
        once: !0
    }),
    r ? Hx(o, u) : o.dispatchEvent(u)
}
var nE = oh
  , iE = Fx
  , Ki = globalThis?.document ? T.useLayoutEffect : () => {}
  , sE = "Portal"
  , ch = T.forwardRef( (e, i) => {
    const {container: a, ...r} = e
      , [o,u] = T.useState(!1);
    Ki( () => u(!0), []);
    const f = a || o && globalThis?.document?.body;
    return f ? V2.createPortal(v.jsx(Ze.div, {
        ...r,
        ref: i
    }), f) : null
}
);
ch.displayName = sE;
function aE(e, i) {
    return T.useReducer( (a, r) => i[a][r] ?? a, e)
}
var mc = e => {
    const {present: i, children: a} = e
      , r = rE(i)
      , o = typeof a == "function" ? a({
        present: r.isPresent
    }) : T.Children.only(a)
      , u = jn(r.ref, lE(o));
    return typeof a == "function" || r.isPresent ? T.cloneElement(o, {
        ref: u
    }) : null
}
;
mc.displayName = "Presence";
function rE(e) {
    const [i,a] = T.useState()
      , r = T.useRef(null)
      , o = T.useRef(e)
      , u = T.useRef("none")
      , f = e ? "mounted" : "unmounted"
      , [h,m] = aE(f, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return T.useEffect( () => {
        const p = Do(r.current);
        u.current = h === "mounted" ? p : "none"
    }
    , [h]),
    Ki( () => {
        const p = r.current
          , g = o.current;
        if (g !== e) {
            const S = u.current
              , w = Do(p);
            e ? m("MOUNT") : w === "none" || p?.display === "none" ? m("UNMOUNT") : m(g && S !== w ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, m]),
    Ki( () => {
        if (i) {
            let p;
            const g = i.ownerDocument.defaultView ?? window
              , x = w => {
                const A = Do(r.current).includes(CSS.escape(w.animationName));
                if (w.target === i && A && (m("ANIMATION_END"),
                !o.current)) {
                    const M = i.style.animationFillMode;
                    i.style.animationFillMode = "forwards",
                    p = g.setTimeout( () => {
                        i.style.animationFillMode === "forwards" && (i.style.animationFillMode = M)
                    }
                    )
                }
            }
              , S = w => {
                w.target === i && (u.current = Do(r.current))
            }
            ;
            return i.addEventListener("animationstart", S),
            i.addEventListener("animationcancel", x),
            i.addEventListener("animationend", x),
            () => {
                g.clearTimeout(p),
                i.removeEventListener("animationstart", S),
                i.removeEventListener("animationcancel", x),
                i.removeEventListener("animationend", x)
            }
        } else
            m("ANIMATION_END")
    }
    , [i, m]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(h),
        ref: T.useCallback(p => {
            r.current = p ? getComputedStyle(p) : null,
            a(p)
        }
        , [])
    }
}
function Do(e) {
    return e?.animationName || "none"
}
function lE(e) {
    let i = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
      , a = i && "isReactWarning"in i && i.isReactWarning;
    return a ? e.ref : (i = Object.getOwnPropertyDescriptor(e, "ref")?.get,
    a = i && "isReactWarning"in i && i.isReactWarning,
    a ? e.props.ref : e.props.ref || e.ref)
}
var oE = ih[" useInsertionEffect ".trim().toString()] || Ki;
function cE({prop: e, defaultProp: i, onChange: a= () => {}
, caller: r}) {
    const [o,u,f] = uE({
        defaultProp: i,
        onChange: a
    })
      , h = e !== void 0
      , m = h ? e : o;
    {
        const g = T.useRef(e !== void 0);
        T.useEffect( () => {
            const x = g.current;
            x !== h && console.warn(`${r} is changing from ${x ? "controlled" : "uncontrolled"} to ${h ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            g.current = h
        }
        , [h, r])
    }
    const p = T.useCallback(g => {
        if (h) {
            const x = fE(g) ? g(e) : g;
            x !== e && f.current?.(x)
        } else
            u(g)
    }
    , [h, e, u, f]);
    return [m, p]
}
function uE({defaultProp: e, onChange: i}) {
    const [a,r] = T.useState(e)
      , o = T.useRef(a)
      , u = T.useRef(i);
    return oE( () => {
        u.current = i
    }
    , [i]),
    T.useEffect( () => {
        o.current !== a && (u.current?.(a),
        o.current = a)
    }
    , [a, o]),
    [a, r, u]
}
function fE(e) {
    return typeof e == "function"
}
var dE = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , hE = "VisuallyHidden"
  , pc = T.forwardRef( (e, i) => v.jsx(Ze.span, {
    ...e,
    ref: i,
    style: {
        ...dE,
        ...e.style
    }
}));
pc.displayName = hE;
var mE = pc
  , uh = "ToastProvider"
  , [fh,pE,yE] = H2("Toast")
  , [Yx] = hc("Toast", [yE])
  , [gE,yc] = Yx(uh)
  , Xx = e => {
    const {__scopeToast: i, label: a="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: u=50, children: f} = e
      , [h,m] = T.useState(null)
      , [p,g] = T.useState(0)
      , x = T.useRef(!1)
      , S = T.useRef(!1);
    return a.trim() || console.error(`Invalid prop \`label\` supplied to \`${uh}\`. Expected non-empty \`string\`.`),
    v.jsx(fh.Provider, {
        scope: i,
        children: v.jsx(gE, {
            scope: i,
            label: a,
            duration: r,
            swipeDirection: o,
            swipeThreshold: u,
            toastCount: p,
            viewport: h,
            onViewportChange: m,
            onToastAdd: T.useCallback( () => g(w => w + 1), []),
            onToastRemove: T.useCallback( () => g(w => w - 1), []),
            isFocusedToastEscapeKeyDownRef: x,
            isClosePausedRef: S,
            children: f
        })
    })
}
;
Xx.displayName = uh;
var Qx = "ToastViewport"
  , vE = ["F8"]
  , Ad = "toast.viewportPause"
  , Ed = "toast.viewportResume"
  , Kx = T.forwardRef( (e, i) => {
    const {__scopeToast: a, hotkey: r=vE, label: o="Notifications ({hotkey})", ...u} = e
      , f = yc(Qx, a)
      , h = pE(a)
      , m = T.useRef(null)
      , p = T.useRef(null)
      , g = T.useRef(null)
      , x = T.useRef(null)
      , S = jn(i, x, f.onViewportChange)
      , w = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , E = f.toastCount > 0;
    T.useEffect( () => {
        const M = j => {
            r.length !== 0 && r.every(V => j[V] || j.code === V) && x.current?.focus()
        }
        ;
        return document.addEventListener("keydown", M),
        () => document.removeEventListener("keydown", M)
    }
    , [r]),
    T.useEffect( () => {
        const M = m.current
          , j = x.current;
        if (E && M && j) {
            const O = () => {
                if (!f.isClosePausedRef.current) {
                    const J = new CustomEvent(Ad);
                    j.dispatchEvent(J),
                    f.isClosePausedRef.current = !0
                }
            }
              , V = () => {
                if (f.isClosePausedRef.current) {
                    const J = new CustomEvent(Ed);
                    j.dispatchEvent(J),
                    f.isClosePausedRef.current = !1
                }
            }
              , G = J => {
                !M.contains(J.relatedTarget) && V()
            }
              , H = () => {
                M.contains(document.activeElement) || V()
            }
            ;
            return M.addEventListener("focusin", O),
            M.addEventListener("focusout", G),
            M.addEventListener("pointermove", O),
            M.addEventListener("pointerleave", H),
            window.addEventListener("blur", O),
            window.addEventListener("focus", V),
            () => {
                M.removeEventListener("focusin", O),
                M.removeEventListener("focusout", G),
                M.removeEventListener("pointermove", O),
                M.removeEventListener("pointerleave", H),
                window.removeEventListener("blur", O),
                window.removeEventListener("focus", V)
            }
        }
    }
    , [E, f.isClosePausedRef]);
    const A = T.useCallback( ({tabbingDirection: M}) => {
        const O = h().map(V => {
            const G = V.ref.current
              , H = [G, ...jE(G)];
            return M === "forwards" ? H : H.reverse()
        }
        );
        return (M === "forwards" ? O.reverse() : O).flat()
    }
    , [h]);
    return T.useEffect( () => {
        const M = x.current;
        if (M) {
            const j = O => {
                const V = O.altKey || O.ctrlKey || O.metaKey;
                if (O.key === "Tab" && !V) {
                    const H = document.activeElement
                      , J = O.shiftKey;
                    if (O.target === M && J) {
                        p.current?.focus();
                        return
                    }
                    const ot = A({
                        tabbingDirection: J ? "backwards" : "forwards"
                    })
                      , ht = ot.findIndex(Tt => Tt === H);
                    Wf(ot.slice(ht + 1)) ? O.preventDefault() : J ? p.current?.focus() : g.current?.focus()
                }
            }
            ;
            return M.addEventListener("keydown", j),
            () => M.removeEventListener("keydown", j)
        }
    }
    , [h, A]),
    v.jsxs(iE, {
        ref: m,
        role: "region",
        "aria-label": o.replace("{hotkey}", w),
        tabIndex: -1,
        style: {
            pointerEvents: E ? void 0 : "none"
        },
        children: [E && v.jsx(Cd, {
            ref: p,
            onFocusFromOutsideViewport: () => {
                const M = A({
                    tabbingDirection: "forwards"
                });
                Wf(M)
            }
        }), v.jsx(fh.Slot, {
            scope: a,
            children: v.jsx(Ze.ol, {
                tabIndex: -1,
                ...u,
                ref: S
            })
        }), E && v.jsx(Cd, {
            ref: g,
            onFocusFromOutsideViewport: () => {
                const M = A({
                    tabbingDirection: "backwards"
                });
                Wf(M)
            }
        })]
    })
}
);
Kx.displayName = Qx;
var Zx = "ToastFocusProxy"
  , Cd = T.forwardRef( (e, i) => {
    const {__scopeToast: a, onFocusFromOutsideViewport: r, ...o} = e
      , u = yc(Zx, a);
    return v.jsx(pc, {
        tabIndex: 0,
        ...o,
        ref: i,
        style: {
            position: "fixed"
        },
        onFocus: f => {
            const h = f.relatedTarget;
            !u.viewport?.contains(h) && r()
        }
    })
}
);
Cd.displayName = Zx;
var $r = "Toast"
  , xE = "toast.swipeStart"
  , bE = "toast.swipeMove"
  , SE = "toast.swipeCancel"
  , wE = "toast.swipeEnd"
  , Ix = T.forwardRef( (e, i) => {
    const {forceMount: a, open: r, defaultOpen: o, onOpenChange: u, ...f} = e
      , [h,m] = cE({
        prop: r,
        defaultProp: o ?? !0,
        onChange: u,
        caller: $r
    });
    return v.jsx(mc, {
        present: a || h,
        children: v.jsx(EE, {
            open: h,
            ...f,
            ref: i,
            onClose: () => m(!1),
            onPause: Qi(e.onPause),
            onResume: Qi(e.onResume),
            onSwipeStart: xe(e.onSwipeStart, p => {
                p.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: xe(e.onSwipeMove, p => {
                const {x: g, y: x} = p.detail.delta;
                p.currentTarget.setAttribute("data-swipe", "move"),
                p.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${g}px`),
                p.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${x}px`)
            }
            ),
            onSwipeCancel: xe(e.onSwipeCancel, p => {
                p.currentTarget.setAttribute("data-swipe", "cancel"),
                p.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                p.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                p.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                p.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: xe(e.onSwipeEnd, p => {
                const {x: g, y: x} = p.detail.delta;
                p.currentTarget.setAttribute("data-swipe", "end"),
                p.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                p.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                p.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${g}px`),
                p.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${x}px`),
                m(!1)
            }
            )
        })
    })
}
);
Ix.displayName = $r;
var [TE,AE] = Yx($r, {
    onClose() {}
})
  , EE = T.forwardRef( (e, i) => {
    const {__scopeToast: a, type: r="foreground", duration: o, open: u, onClose: f, onEscapeKeyDown: h, onPause: m, onResume: p, onSwipeStart: g, onSwipeMove: x, onSwipeCancel: S, onSwipeEnd: w, ...E} = e
      , A = yc($r, a)
      , [M,j] = T.useState(null)
      , O = jn(i, tt => j(tt))
      , V = T.useRef(null)
      , G = T.useRef(null)
      , H = o || A.duration
      , J = T.useRef(0)
      , Z = T.useRef(H)
      , Y = T.useRef(0)
      , {onToastAdd: ot, onToastRemove: ht} = A
      , Tt = Qi( () => {
        M?.contains(document.activeElement) && A.viewport?.focus(),
        f()
    }
    )
      , at = T.useCallback(tt => {
        !tt || tt === 1 / 0 || (window.clearTimeout(Y.current),
        J.current = new Date().getTime(),
        Y.current = window.setTimeout(Tt, tt))
    }
    , [Tt]);
    T.useEffect( () => {
        const tt = A.viewport;
        if (tt) {
            const mt = () => {
                at(Z.current),
                p?.()
            }
              , z = () => {
                const q = new Date().getTime() - J.current;
                Z.current = Z.current - q,
                window.clearTimeout(Y.current),
                m?.()
            }
            ;
            return tt.addEventListener(Ad, z),
            tt.addEventListener(Ed, mt),
            () => {
                tt.removeEventListener(Ad, z),
                tt.removeEventListener(Ed, mt)
            }
        }
    }
    , [A.viewport, H, m, p, at]),
    T.useEffect( () => {
        u && !A.isClosePausedRef.current && at(H)
    }
    , [u, H, A.isClosePausedRef, at]),
    T.useEffect( () => (ot(),
    () => ht()), [ot, ht]);
    const ct = T.useMemo( () => M ? ib(M) : null, [M]);
    return A.viewport ? v.jsxs(v.Fragment, {
        children: [ct && v.jsx(CE, {
            __scopeToast: a,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            children: ct
        }), v.jsx(TE, {
            scope: a,
            onClose: Tt,
            children: fc.createPortal(v.jsx(fh.ItemSlot, {
                scope: a,
                children: v.jsx(nE, {
                    asChild: !0,
                    onEscapeKeyDown: xe(h, () => {
                        A.isFocusedToastEscapeKeyDownRef.current || Tt(),
                        A.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: v.jsx(Ze.li, {
                        tabIndex: 0,
                        "data-state": u ? "open" : "closed",
                        "data-swipe-direction": A.swipeDirection,
                        ...E,
                        ref: O,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: xe(e.onKeyDown, tt => {
                            tt.key === "Escape" && (h?.(tt.nativeEvent),
                            tt.nativeEvent.defaultPrevented || (A.isFocusedToastEscapeKeyDownRef.current = !0,
                            Tt()))
                        }
                        ),
                        onPointerDown: xe(e.onPointerDown, tt => {
                            tt.button === 0 && (V.current = {
                                x: tt.clientX,
                                y: tt.clientY
                            })
                        }
                        ),
                        onPointerMove: xe(e.onPointerMove, tt => {
                            if (!V.current)
                                return;
                            const mt = tt.clientX - V.current.x
                              , z = tt.clientY - V.current.y
                              , q = !!G.current
                              , k = ["left", "right"].includes(A.swipeDirection)
                              , rt = ["left", "up"].includes(A.swipeDirection) ? Math.min : Math.max
                              , xt = k ? rt(0, mt) : 0
                              , D = k ? 0 : rt(0, z)
                              , K = tt.pointerType === "touch" ? 10 : 2
                              , $ = {
                                x: xt,
                                y: D
                            }
                              , nt = {
                                originalEvent: tt,
                                delta: $
                            };
                            q ? (G.current = $,
                            Ro(bE, x, nt, {
                                discrete: !1
                            })) : jv($, A.swipeDirection, K) ? (G.current = $,
                            Ro(xE, g, nt, {
                                discrete: !1
                            }),
                            tt.target.setPointerCapture(tt.pointerId)) : (Math.abs(mt) > K || Math.abs(z) > K) && (V.current = null)
                        }
                        ),
                        onPointerUp: xe(e.onPointerUp, tt => {
                            const mt = G.current
                              , z = tt.target;
                            if (z.hasPointerCapture(tt.pointerId) && z.releasePointerCapture(tt.pointerId),
                            G.current = null,
                            V.current = null,
                            mt) {
                                const q = tt.currentTarget
                                  , k = {
                                    originalEvent: tt,
                                    delta: mt
                                };
                                jv(mt, A.swipeDirection, A.swipeThreshold) ? Ro(wE, w, k, {
                                    discrete: !0
                                }) : Ro(SE, S, k, {
                                    discrete: !0
                                }),
                                q.addEventListener("click", rt => rt.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), A.viewport)
        })]
    }) : null
}
)
  , CE = e => {
    const {__scopeToast: i, children: a, ...r} = e
      , o = yc($r, i)
      , [u,f] = T.useState(!1)
      , [h,m] = T.useState(!1);
    return DE( () => f(!0)),
    T.useEffect( () => {
        const p = window.setTimeout( () => m(!0), 1e3);
        return () => window.clearTimeout(p)
    }
    , []),
    h ? null : v.jsx(ch, {
        asChild: !0,
        children: v.jsx(pc, {
            ...r,
            children: u && v.jsxs(v.Fragment, {
                children: [o.label, " ", a]
            })
        })
    })
}
  , ME = "ToastTitle"
  , Wx = T.forwardRef( (e, i) => {
    const {__scopeToast: a, ...r} = e;
    return v.jsx(Ze.div, {
        ...r,
        ref: i
    })
}
);
Wx.displayName = ME;
var NE = "ToastDescription"
  , Jx = T.forwardRef( (e, i) => {
    const {__scopeToast: a, ...r} = e;
    return v.jsx(Ze.div, {
        ...r,
        ref: i
    })
}
);
Jx.displayName = NE;
var $x = "ToastAction"
  , tb = T.forwardRef( (e, i) => {
    const {altText: a, ...r} = e;
    return a.trim() ? v.jsx(nb, {
        altText: a,
        asChild: !0,
        children: v.jsx(dh, {
            ...r,
            ref: i
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${$x}\`. Expected non-empty \`string\`.`),
    null)
}
);
tb.displayName = $x;
var eb = "ToastClose"
  , dh = T.forwardRef( (e, i) => {
    const {__scopeToast: a, ...r} = e
      , o = AE(eb, a);
    return v.jsx(nb, {
        asChild: !0,
        children: v.jsx(Ze.button, {
            type: "button",
            ...r,
            ref: i,
            onClick: xe(e.onClick, o.onClose)
        })
    })
}
);
dh.displayName = eb;
var nb = T.forwardRef( (e, i) => {
    const {__scopeToast: a, altText: r, ...o} = e;
    return v.jsx(Ze.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: i
    })
}
);
function ib(e) {
    const i = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && i.push(r.textContent),
        RE(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , u = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (u) {
                    const f = r.dataset.radixToastAnnounceAlt;
                    f && i.push(f)
                } else
                    i.push(...ib(r))
        }
    }
    ),
    i
}
function Ro(e, i, a, {discrete: r}) {
    const o = a.originalEvent.currentTarget
      , u = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: a
    });
    i && o.addEventListener(e, i, {
        once: !0
    }),
    r ? Hx(o, u) : o.dispatchEvent(u)
}
var jv = (e, i, a=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , u = r > o;
    return i === "left" || i === "right" ? u && r > a : !u && o > a
}
;
function DE(e= () => {}
) {
    const i = Qi(e);
    Ki( () => {
        let a = 0
          , r = 0;
        return a = window.requestAnimationFrame( () => r = window.requestAnimationFrame(i)),
        () => {
            window.cancelAnimationFrame(a),
            window.cancelAnimationFrame(r)
        }
    }
    , [i])
}
function RE(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function jE(e) {
    const i = []
      , a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; a.nextNode(); )
        i.push(a.currentNode);
    return i
}
function Wf(e) {
    const i = document.activeElement;
    return e.some(a => a === i ? !0 : (a.focus(),
    document.activeElement !== i))
}
var OE = Xx
  , sb = Kx
  , ab = Ix
  , rb = Wx
  , lb = Jx
  , ob = tb
  , cb = dh;
function ub(e) {
    var i, a, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (i = 0; i < o; i++)
                e[i] && (a = ub(e[i])) && (r && (r += " "),
                r += a)
        } else
            for (a in e)
                e[a] && (r && (r += " "),
                r += a);
    return r
}
function fb() {
    for (var e, i, a = 0, r = "", o = arguments.length; a < o; a++)
        (e = arguments[a]) && (i = ub(e)) && (r && (r += " "),
        r += i);
    return r
}
const Ov = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , _v = fb
  , db = (e, i) => a => {
    var r;
    if (i?.variants == null)
        return _v(e, a?.class, a?.className);
    const {variants: o, defaultVariants: u} = i
      , f = Object.keys(o).map(p => {
        const g = a?.[p]
          , x = u?.[p];
        if (g === null)
            return null;
        const S = Ov(g) || Ov(x);
        return o[p][S]
    }
    )
      , h = a && Object.entries(a).reduce( (p, g) => {
        let[x,S] = g;
        return S === void 0 || (p[x] = S),
        p
    }
    , {})
      , m = i == null || (r = i.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (p, g) => {
        let {class: x, className: S, ...w} = g;
        return Object.entries(w).every(E => {
            let[A,M] = E;
            return Array.isArray(M) ? M.includes({
                ...u,
                ...h
            }[A]) : {
                ...u,
                ...h
            }[A] === M
        }
        ) ? [...p, x, S] : p
    }
    , []);
    return _v(e, f, m, a?.class, a?.className)
}
;
const _E = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , VE = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, a, r) => r ? r.toUpperCase() : a.toLowerCase())
  , Vv = e => {
    const i = VE(e);
    return i.charAt(0).toUpperCase() + i.slice(1)
}
  , hb = (...e) => e.filter( (i, a, r) => !!i && i.trim() !== "" && r.indexOf(i) === a).join(" ").trim()
  , zE = e => {
    for (const i in e)
        if (i.startsWith("aria-") || i === "role" || i === "title")
            return !0
}
;
var LE = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const UE = T.forwardRef( ({color: e="currentColor", size: i=24, strokeWidth: a=2, absoluteStrokeWidth: r, className: o="", children: u, iconNode: f, ...h}, m) => T.createElement("svg", {
    ref: m,
    ...LE,
    width: i,
    height: i,
    stroke: e,
    strokeWidth: r ? Number(a) * 24 / Number(i) : a,
    className: hb("lucide", o),
    ...!u && !zE(h) && {
        "aria-hidden": "true"
    },
    ...h
}, [...f.map( ([p,g]) => T.createElement(p, g)), ...Array.isArray(u) ? u : [u]]));
const Xt = (e, i) => {
    const a = T.forwardRef( ({className: r, ...o}, u) => T.createElement(UE, {
        ref: u,
        iconNode: i,
        className: hb(`lucide-${_E(Vv(e))}`, `lucide-${e}`, r),
        ...o
    }));
    return a.displayName = Vv(e),
    a
}
;
const kE = [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]
  , mb = Xt("arrow-right", kE);
const BE = [["path", {
    d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
    key: "1yiouv"
}], ["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}]]
  , PE = Xt("award", BE);
const HE = [["path", {
    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
    key: "3c2336"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]
  , qE = Xt("badge-check", HE);
const FE = [["path", {
    d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
    key: "jecpp"
}], ["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "6",
    rx: "2",
    key: "i6l2r4"
}]]
  , GE = Xt("briefcase", FE);
const YE = [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]
  , XE = Xt("chevron-right", YE);
const QE = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]
  , KE = Xt("circle-alert", QE);
const ZE = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]
  , IE = Xt("circle-check", ZE);
const WE = [["path", {
    d: "M21.801 10A10 10 0 1 1 17 3.335",
    key: "yps3ct"
}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]]
  , JE = Xt("circle-check-big", WE);
const $E = [["path", {
    d: "M12 16h.01",
    key: "1drbdi"
}], ["path", {
    d: "M16 16h.01",
    key: "1f9h7w"
}], ["path", {
    d: "M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",
    key: "1iv0i2"
}], ["path", {
    d: "M8 16h.01",
    key: "18s6g9"
}]]
  , tC = Xt("factory", $E);
const eC = [["path", {
    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    key: "1jg4f8"
}]]
  , nC = Xt("facebook", eC);
const iC = [["path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    key: "1rqfz7"
}], ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "m9 15 2 2 4-4",
    key: "1grp1n"
}]]
  , sC = Xt("file-check", iC);
const aC = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
    key: "13o1zl"
}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}]]
  , rC = Xt("globe", aC);
const lC = [["rect", {
    width: "20",
    height: "20",
    x: "2",
    y: "2",
    rx: "5",
    ry: "5",
    key: "2e1cvw"
}], ["path", {
    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
    key: "9exkf1"
}], ["line", {
    x1: "17.5",
    x2: "17.51",
    y1: "6.5",
    y2: "6.5",
    key: "r4j83e"
}]]
  , oC = Xt("instagram", lC);
const cC = [["path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    key: "c2jq9f"
}], ["rect", {
    width: "4",
    height: "12",
    x: "2",
    y: "9",
    key: "mk3on5"
}], ["circle", {
    cx: "4",
    cy: "4",
    r: "2",
    key: "bt5ra8"
}]]
  , uC = Xt("linkedin", cC);
const fC = [["path", {
    d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
    key: "132q7q"
}], ["rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2",
    key: "izxlao"
}]]
  , pb = Xt("mail", fC);
const dC = [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]
  , yb = Xt("map-pin", dC);
const hC = [["path", {
    d: "M4 5h16",
    key: "1tepv9"
}], ["path", {
    d: "M4 12h16",
    key: "1lakjw"
}], ["path", {
    d: "M4 19h16",
    key: "1djgab"
}]]
  , mC = Xt("menu", hC);
const pC = [["path", {
    d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
    key: "9njp5v"
}]]
  , gb = Xt("phone", pC);
const yC = [["path", {
    d: "m21 21-4.34-4.34",
    key: "14j7rj"
}], ["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}]]
  , gC = Xt("search", yC);
const vC = [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]
  , Bo = Xt("shield-check", vC);
const xC = [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]
  , bC = Xt("shield", xC);
const SC = [["path", {
    d: "m10 20-1.25-2.5L6 18",
    key: "18frcb"
}], ["path", {
    d: "M10 4 8.75 6.5 6 6",
    key: "7mghy3"
}], ["path", {
    d: "m14 20 1.25-2.5L18 18",
    key: "1chtki"
}], ["path", {
    d: "m14 4 1.25 2.5L18 6",
    key: "1b4wsy"
}], ["path", {
    d: "m17 21-3-6h-4",
    key: "15hhxa"
}], ["path", {
    d: "m17 3-3 6 1.5 3",
    key: "11697g"
}], ["path", {
    d: "M2 12h6.5L10 9",
    key: "kv9z4n"
}], ["path", {
    d: "m20 10-1.5 2 1.5 2",
    key: "1swlpi"
}], ["path", {
    d: "M22 12h-6.5L14 15",
    key: "1mxi28"
}], ["path", {
    d: "m4 10 1.5 2L4 14",
    key: "k9enpj"
}], ["path", {
    d: "m7 21 3-6-1.5-3",
    key: "j8hb9u"
}], ["path", {
    d: "m7 3 3 6h4",
    key: "1otusx"
}]]
  , wC = Xt("snowflake", SC);
const TC = [["path", {
    d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
    key: "wrbu53"
}], ["path", {
    d: "M15 18H9",
    key: "1lyqi6"
}], ["path", {
    d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
    key: "lysw3i"
}], ["circle", {
    cx: "17",
    cy: "18",
    r: "2",
    key: "332jqn"
}], ["circle", {
    cx: "7",
    cy: "18",
    r: "2",
    key: "19iecd"
}]]
  , AC = Xt("truck", TC);
const EC = [["path", {
    d: "m16 11 2 2 4-4",
    key: "9rsbq5"
}], ["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}]]
  , CC = Xt("user-check", EC);
const MC = [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["path", {
    d: "M16 3.128a4 4 0 0 1 0 7.744",
    key: "16gr8j"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}]]
  , NC = Xt("users", MC);
const DC = [["path", {
    d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
    key: "knzxuh"
}], ["path", {
    d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
    key: "2jd2cc"
}], ["path", {
    d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
    key: "rd2r6e"
}]]
  , RC = Xt("waves", DC);
const jC = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , vb = Xt("x", jC)
  , OC = (e, i) => {
    const a = new Array(e.length + i.length);
    for (let r = 0; r < e.length; r++)
        a[r] = e[r];
    for (let r = 0; r < i.length; r++)
        a[e.length + r] = i[r];
    return a
}
  , _C = (e, i) => ({
    classGroupId: e,
    validator: i
})
  , xb = (e=new Map, i=null, a) => ({
    nextPart: e,
    validators: i,
    classGroupId: a
})
  , Xo = "-"
  , zv = []
  , VC = "arbitrary.."
  , zC = e => {
    const i = UC(e)
      , {conflictingClassGroups: a, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: f => {
            if (f.startsWith("[") && f.endsWith("]"))
                return LC(f);
            const h = f.split(Xo)
              , m = h[0] === "" && h.length > 1 ? 1 : 0;
            return bb(h, m, i)
        }
        ,
        getConflictingClassGroupIds: (f, h) => {
            if (h) {
                const m = r[f]
                  , p = a[f];
                return m ? p ? OC(p, m) : m : p || zv
            }
            return a[f] || zv
        }
    }
}
  , bb = (e, i, a) => {
    if (e.length - i === 0)
        return a.classGroupId;
    const o = e[i]
      , u = a.nextPart.get(o);
    if (u) {
        const p = bb(e, i + 1, u);
        if (p)
            return p
    }
    const f = a.validators;
    if (f === null)
        return;
    const h = i === 0 ? e.join(Xo) : e.slice(i).join(Xo)
      , m = f.length;
    for (let p = 0; p < m; p++) {
        const g = f[p];
        if (g.validator(h))
            return g.classGroupId
    }
}
  , LC = e => e.slice(1, -1).indexOf(":") === -1 ? void 0 : ( () => {
    const i = e.slice(1, -1)
      , a = i.indexOf(":")
      , r = i.slice(0, a);
    return r ? VC + r : void 0
}
)()
  , UC = e => {
    const {theme: i, classGroups: a} = e;
    return kC(a, i)
}
  , kC = (e, i) => {
    const a = xb();
    for (const r in e) {
        const o = e[r];
        hh(o, a, r, i)
    }
    return a
}
  , hh = (e, i, a, r) => {
    const o = e.length;
    for (let u = 0; u < o; u++) {
        const f = e[u];
        BC(f, i, a, r)
    }
}
  , BC = (e, i, a, r) => {
    if (typeof e == "string") {
        PC(e, i, a);
        return
    }
    if (typeof e == "function") {
        HC(e, i, a, r);
        return
    }
    qC(e, i, a, r)
}
  , PC = (e, i, a) => {
    const r = e === "" ? i : Sb(i, e);
    r.classGroupId = a
}
  , HC = (e, i, a, r) => {
    if (FC(e)) {
        hh(e(r), i, a, r);
        return
    }
    i.validators === null && (i.validators = []),
    i.validators.push(_C(a, e))
}
  , qC = (e, i, a, r) => {
    const o = Object.entries(e)
      , u = o.length;
    for (let f = 0; f < u; f++) {
        const [h,m] = o[f];
        hh(m, Sb(i, h), a, r)
    }
}
  , Sb = (e, i) => {
    let a = e;
    const r = i.split(Xo)
      , o = r.length;
    for (let u = 0; u < o; u++) {
        const f = r[u];
        let h = a.nextPart.get(f);
        h || (h = xb(),
        a.nextPart.set(f, h)),
        a = h
    }
    return a
}
  , FC = e => "isThemeGetter"in e && e.isThemeGetter === !0
  , GC = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let i = 0
      , a = Object.create(null)
      , r = Object.create(null);
    const o = (u, f) => {
        a[u] = f,
        i++,
        i > e && (i = 0,
        r = a,
        a = Object.create(null))
    }
    ;
    return {
        get(u) {
            let f = a[u];
            if (f !== void 0)
                return f;
            if ((f = r[u]) !== void 0)
                return o(u, f),
                f
        },
        set(u, f) {
            u in a ? a[u] = f : o(u, f)
        }
    }
}
  , Md = "!"
  , Lv = ":"
  , YC = []
  , Uv = (e, i, a, r, o) => ({
    modifiers: e,
    hasImportantModifier: i,
    baseClassName: a,
    maybePostfixModifierPosition: r,
    isExternal: o
})
  , XC = e => {
    const {prefix: i, experimentalParseClassName: a} = e;
    let r = o => {
        const u = [];
        let f = 0, h = 0, m = 0, p;
        const g = o.length;
        for (let A = 0; A < g; A++) {
            const M = o[A];
            if (f === 0 && h === 0) {
                if (M === Lv) {
                    u.push(o.slice(m, A)),
                    m = A + 1;
                    continue
                }
                if (M === "/") {
                    p = A;
                    continue
                }
            }
            M === "[" ? f++ : M === "]" ? f-- : M === "(" ? h++ : M === ")" && h--
        }
        const x = u.length === 0 ? o : o.slice(m);
        let S = x
          , w = !1;
        x.endsWith(Md) ? (S = x.slice(0, -1),
        w = !0) : x.startsWith(Md) && (S = x.slice(1),
        w = !0);
        const E = p && p > m ? p - m : void 0;
        return Uv(u, w, S, E)
    }
    ;
    if (i) {
        const o = i + Lv
          , u = r;
        r = f => f.startsWith(o) ? u(f.slice(o.length)) : Uv(YC, !1, f, void 0, !0)
    }
    if (a) {
        const o = r;
        r = u => a({
            className: u,
            parseClassName: o
        })
    }
    return r
}
  , QC = e => {
    const i = new Map;
    return e.orderSensitiveModifiers.forEach( (a, r) => {
        i.set(a, 1e6 + r)
    }
    ),
    a => {
        const r = [];
        let o = [];
        for (let u = 0; u < a.length; u++) {
            const f = a[u]
              , h = f[0] === "["
              , m = i.has(f);
            h || m ? (o.length > 0 && (o.sort(),
            r.push(...o),
            o = []),
            r.push(f)) : o.push(f)
        }
        return o.length > 0 && (o.sort(),
        r.push(...o)),
        r
    }
}
  , KC = e => ({
    cache: GC(e.cacheSize),
    parseClassName: XC(e),
    sortModifiers: QC(e),
    ...zC(e)
})
  , ZC = /\s+/
  , IC = (e, i) => {
    const {parseClassName: a, getClassGroupId: r, getConflictingClassGroupIds: o, sortModifiers: u} = i
      , f = []
      , h = e.trim().split(ZC);
    let m = "";
    for (let p = h.length - 1; p >= 0; p -= 1) {
        const g = h[p]
          , {isExternal: x, modifiers: S, hasImportantModifier: w, baseClassName: E, maybePostfixModifierPosition: A} = a(g);
        if (x) {
            m = g + (m.length > 0 ? " " + m : m);
            continue
        }
        let M = !!A
          , j = r(M ? E.substring(0, A) : E);
        if (!j) {
            if (!M) {
                m = g + (m.length > 0 ? " " + m : m);
                continue
            }
            if (j = r(E),
            !j) {
                m = g + (m.length > 0 ? " " + m : m);
                continue
            }
            M = !1
        }
        const O = S.length === 0 ? "" : S.length === 1 ? S[0] : u(S).join(":")
          , V = w ? O + Md : O
          , G = V + j;
        if (f.indexOf(G) > -1)
            continue;
        f.push(G);
        const H = o(j, M);
        for (let J = 0; J < H.length; ++J) {
            const Z = H[J];
            f.push(V + Z)
        }
        m = g + (m.length > 0 ? " " + m : m)
    }
    return m
}
  , WC = (...e) => {
    let i = 0, a, r, o = "";
    for (; i < e.length; )
        (a = e[i++]) && (r = wb(a)) && (o && (o += " "),
        o += r);
    return o
}
  , wb = e => {
    if (typeof e == "string")
        return e;
    let i, a = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (i = wb(e[r])) && (a && (a += " "),
        a += i);
    return a
}
  , JC = (e, ...i) => {
    let a, r, o, u;
    const f = m => {
        const p = i.reduce( (g, x) => x(g), e());
        return a = KC(p),
        r = a.cache.get,
        o = a.cache.set,
        u = h,
        h(m)
    }
      , h = m => {
        const p = r(m);
        if (p)
            return p;
        const g = IC(m, a);
        return o(m, g),
        g
    }
    ;
    return u = f,
    (...m) => u(WC(...m))
}
  , $C = []
  , ye = e => {
    const i = a => a[e] || $C;
    return i.isThemeGetter = !0,
    i
}
  , Tb = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
  , Ab = /^\((?:(\w[\w-]*):)?(.+)\)$/i
  , tM = /^\d+\/\d+$/
  , eM = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , nM = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , iM = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
  , sM = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , aM = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , ga = e => tM.test(e)
  , Nt = e => !!e && !Number.isNaN(Number(e))
  , Fi = e => !!e && Number.isInteger(Number(e))
  , Jf = e => e.endsWith("%") && Nt(e.slice(0, -1))
  , hi = e => eM.test(e)
  , rM = () => !0
  , lM = e => nM.test(e) && !iM.test(e)
  , Eb = () => !1
  , oM = e => sM.test(e)
  , cM = e => aM.test(e)
  , uM = e => !ft(e) && !dt(e)
  , fM = e => Da(e, Nb, Eb)
  , ft = e => Tb.test(e)
  , bs = e => Da(e, Db, lM)
  , $f = e => Da(e, yM, Nt)
  , kv = e => Da(e, Cb, Eb)
  , dM = e => Da(e, Mb, cM)
  , jo = e => Da(e, Rb, oM)
  , dt = e => Ab.test(e)
  , Dr = e => Ra(e, Db)
  , hM = e => Ra(e, gM)
  , Bv = e => Ra(e, Cb)
  , mM = e => Ra(e, Nb)
  , pM = e => Ra(e, Mb)
  , Oo = e => Ra(e, Rb, !0)
  , Da = (e, i, a) => {
    const r = Tb.exec(e);
    return r ? r[1] ? i(r[1]) : a(r[2]) : !1
}
  , Ra = (e, i, a=!1) => {
    const r = Ab.exec(e);
    return r ? r[1] ? i(r[1]) : a : !1
}
  , Cb = e => e === "position" || e === "percentage"
  , Mb = e => e === "image" || e === "url"
  , Nb = e => e === "length" || e === "size" || e === "bg-size"
  , Db = e => e === "length"
  , yM = e => e === "number"
  , gM = e => e === "family-name"
  , Rb = e => e === "shadow"
  , vM = () => {
    const e = ye("color")
      , i = ye("font")
      , a = ye("text")
      , r = ye("font-weight")
      , o = ye("tracking")
      , u = ye("leading")
      , f = ye("breakpoint")
      , h = ye("container")
      , m = ye("spacing")
      , p = ye("radius")
      , g = ye("shadow")
      , x = ye("inset-shadow")
      , S = ye("text-shadow")
      , w = ye("drop-shadow")
      , E = ye("blur")
      , A = ye("perspective")
      , M = ye("aspect")
      , j = ye("ease")
      , O = ye("animate")
      , V = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , G = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
      , H = () => [...G(), dt, ft]
      , J = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , Z = () => ["auto", "contain", "none"]
      , Y = () => [dt, ft, m]
      , ot = () => [ga, "full", "auto", ...Y()]
      , ht = () => [Fi, "none", "subgrid", dt, ft]
      , Tt = () => ["auto", {
        span: ["full", Fi, dt, ft]
    }, Fi, dt, ft]
      , at = () => [Fi, "auto", dt, ft]
      , ct = () => ["auto", "min", "max", "fr", dt, ft]
      , tt = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
      , mt = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"]
      , z = () => ["auto", ...Y()]
      , q = () => [ga, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...Y()]
      , k = () => [e, dt, ft]
      , rt = () => [...G(), Bv, kv, {
        position: [dt, ft]
    }]
      , xt = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
    }]
      , D = () => ["auto", "cover", "contain", mM, fM, {
        size: [dt, ft]
    }]
      , K = () => [Jf, Dr, bs]
      , $ = () => ["", "none", "full", p, dt, ft]
      , nt = () => ["", Nt, Dr, bs]
      , St = () => ["solid", "dashed", "dotted", "double"]
      , At = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , gt = () => [Nt, Jf, Bv, kv]
      , Qt = () => ["", "none", E, dt, ft]
      , Ut = () => ["none", Nt, dt, ft]
      , je = () => ["none", Nt, dt, ft]
      , Pe = () => [Nt, dt, ft]
      , ln = () => [ga, "full", ...Y()];
    return {
        cacheSize: 500,
        theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [hi],
            breakpoint: [hi],
            color: [rM],
            container: [hi],
            "drop-shadow": [hi],
            ease: ["in", "out", "in-out"],
            font: [uM],
            "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
            "inset-shadow": [hi],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
            radius: [hi],
            shadow: [hi],
            spacing: ["px", Nt],
            text: [hi],
            "text-shadow": [hi],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", ga, ft, dt, M]
            }],
            container: ["container"],
            columns: [{
                columns: [Nt, ft, dt, h]
            }],
            "break-after": [{
                "break-after": V()
            }],
            "break-before": [{
                "break-before": V()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            sr: ["sr-only", "not-sr-only"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: H()
            }],
            overflow: [{
                overflow: J()
            }],
            "overflow-x": [{
                "overflow-x": J()
            }],
            "overflow-y": [{
                "overflow-y": J()
            }],
            overscroll: [{
                overscroll: Z()
            }],
            "overscroll-x": [{
                "overscroll-x": Z()
            }],
            "overscroll-y": [{
                "overscroll-y": Z()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: ot()
            }],
            "inset-x": [{
                "inset-x": ot()
            }],
            "inset-y": [{
                "inset-y": ot()
            }],
            start: [{
                start: ot()
            }],
            end: [{
                end: ot()
            }],
            top: [{
                top: ot()
            }],
            right: [{
                right: ot()
            }],
            bottom: [{
                bottom: ot()
            }],
            left: [{
                left: ot()
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: [Fi, "auto", dt, ft]
            }],
            basis: [{
                basis: [ga, "full", "auto", h, ...Y()]
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["nowrap", "wrap", "wrap-reverse"]
            }],
            flex: [{
                flex: [Nt, ga, "auto", "initial", "none", ft]
            }],
            grow: [{
                grow: ["", Nt, dt, ft]
            }],
            shrink: [{
                shrink: ["", Nt, dt, ft]
            }],
            order: [{
                order: [Fi, "first", "last", "none", dt, ft]
            }],
            "grid-cols": [{
                "grid-cols": ht()
            }],
            "col-start-end": [{
                col: Tt()
            }],
            "col-start": [{
                "col-start": at()
            }],
            "col-end": [{
                "col-end": at()
            }],
            "grid-rows": [{
                "grid-rows": ht()
            }],
            "row-start-end": [{
                row: Tt()
            }],
            "row-start": [{
                "row-start": at()
            }],
            "row-end": [{
                "row-end": at()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ct()
            }],
            "auto-rows": [{
                "auto-rows": ct()
            }],
            gap: [{
                gap: Y()
            }],
            "gap-x": [{
                "gap-x": Y()
            }],
            "gap-y": [{
                "gap-y": Y()
            }],
            "justify-content": [{
                justify: [...tt(), "normal"]
            }],
            "justify-items": [{
                "justify-items": [...mt(), "normal"]
            }],
            "justify-self": [{
                "justify-self": ["auto", ...mt()]
            }],
            "align-content": [{
                content: ["normal", ...tt()]
            }],
            "align-items": [{
                items: [...mt(), {
                    baseline: ["", "last"]
                }]
            }],
            "align-self": [{
                self: ["auto", ...mt(), {
                    baseline: ["", "last"]
                }]
            }],
            "place-content": [{
                "place-content": tt()
            }],
            "place-items": [{
                "place-items": [...mt(), "baseline"]
            }],
            "place-self": [{
                "place-self": ["auto", ...mt()]
            }],
            p: [{
                p: Y()
            }],
            px: [{
                px: Y()
            }],
            py: [{
                py: Y()
            }],
            ps: [{
                ps: Y()
            }],
            pe: [{
                pe: Y()
            }],
            pt: [{
                pt: Y()
            }],
            pr: [{
                pr: Y()
            }],
            pb: [{
                pb: Y()
            }],
            pl: [{
                pl: Y()
            }],
            m: [{
                m: z()
            }],
            mx: [{
                mx: z()
            }],
            my: [{
                my: z()
            }],
            ms: [{
                ms: z()
            }],
            me: [{
                me: z()
            }],
            mt: [{
                mt: z()
            }],
            mr: [{
                mr: z()
            }],
            mb: [{
                mb: z()
            }],
            ml: [{
                ml: z()
            }],
            "space-x": [{
                "space-x": Y()
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": Y()
            }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{
                size: q()
            }],
            w: [{
                w: [h, "screen", ...q()]
            }],
            "min-w": [{
                "min-w": [h, "screen", "none", ...q()]
            }],
            "max-w": [{
                "max-w": [h, "screen", "none", "prose", {
                    screen: [f]
                }, ...q()]
            }],
            h: [{
                h: ["screen", "lh", ...q()]
            }],
            "min-h": [{
                "min-h": ["screen", "lh", "none", ...q()]
            }],
            "max-h": [{
                "max-h": ["screen", "lh", ...q()]
            }],
            "font-size": [{
                text: ["base", a, Dr, bs]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: [r, dt, $f]
            }],
            "font-stretch": [{
                "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Jf, ft]
            }],
            "font-family": [{
                font: [hM, ft, i]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: [o, dt, ft]
            }],
            "line-clamp": [{
                "line-clamp": [Nt, "none", dt, $f]
            }],
            leading: [{
                leading: [u, ...Y()]
            }],
            "list-image": [{
                "list-image": ["none", dt, ft]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "list-style-type": [{
                list: ["disc", "decimal", "none", dt, ft]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "placeholder-color": [{
                placeholder: k()
            }],
            "text-color": [{
                text: k()
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...St(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: [Nt, "from-font", "auto", dt, bs]
            }],
            "text-decoration-color": [{
                decoration: k()
            }],
            "underline-offset": [{
                "underline-offset": [Nt, "auto", dt, ft]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: Y()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", dt, ft]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            wrap: [{
                wrap: ["break-word", "anywhere", "normal"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", dt, ft]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: rt()
            }],
            "bg-repeat": [{
                bg: xt()
            }],
            "bg-size": [{
                bg: D()
            }],
            "bg-image": [{
                bg: ["none", {
                    linear: [{
                        to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, Fi, dt, ft],
                    radial: ["", dt, ft],
                    conic: [Fi, dt, ft]
                }, pM, dM]
            }],
            "bg-color": [{
                bg: k()
            }],
            "gradient-from-pos": [{
                from: K()
            }],
            "gradient-via-pos": [{
                via: K()
            }],
            "gradient-to-pos": [{
                to: K()
            }],
            "gradient-from": [{
                from: k()
            }],
            "gradient-via": [{
                via: k()
            }],
            "gradient-to": [{
                to: k()
            }],
            rounded: [{
                rounded: $()
            }],
            "rounded-s": [{
                "rounded-s": $()
            }],
            "rounded-e": [{
                "rounded-e": $()
            }],
            "rounded-t": [{
                "rounded-t": $()
            }],
            "rounded-r": [{
                "rounded-r": $()
            }],
            "rounded-b": [{
                "rounded-b": $()
            }],
            "rounded-l": [{
                "rounded-l": $()
            }],
            "rounded-ss": [{
                "rounded-ss": $()
            }],
            "rounded-se": [{
                "rounded-se": $()
            }],
            "rounded-ee": [{
                "rounded-ee": $()
            }],
            "rounded-es": [{
                "rounded-es": $()
            }],
            "rounded-tl": [{
                "rounded-tl": $()
            }],
            "rounded-tr": [{
                "rounded-tr": $()
            }],
            "rounded-br": [{
                "rounded-br": $()
            }],
            "rounded-bl": [{
                "rounded-bl": $()
            }],
            "border-w": [{
                border: nt()
            }],
            "border-w-x": [{
                "border-x": nt()
            }],
            "border-w-y": [{
                "border-y": nt()
            }],
            "border-w-s": [{
                "border-s": nt()
            }],
            "border-w-e": [{
                "border-e": nt()
            }],
            "border-w-t": [{
                "border-t": nt()
            }],
            "border-w-r": [{
                "border-r": nt()
            }],
            "border-w-b": [{
                "border-b": nt()
            }],
            "border-w-l": [{
                "border-l": nt()
            }],
            "divide-x": [{
                "divide-x": nt()
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": nt()
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{
                border: [...St(), "hidden", "none"]
            }],
            "divide-style": [{
                divide: [...St(), "hidden", "none"]
            }],
            "border-color": [{
                border: k()
            }],
            "border-color-x": [{
                "border-x": k()
            }],
            "border-color-y": [{
                "border-y": k()
            }],
            "border-color-s": [{
                "border-s": k()
            }],
            "border-color-e": [{
                "border-e": k()
            }],
            "border-color-t": [{
                "border-t": k()
            }],
            "border-color-r": [{
                "border-r": k()
            }],
            "border-color-b": [{
                "border-b": k()
            }],
            "border-color-l": [{
                "border-l": k()
            }],
            "divide-color": [{
                divide: k()
            }],
            "outline-style": [{
                outline: [...St(), "none", "hidden"]
            }],
            "outline-offset": [{
                "outline-offset": [Nt, dt, ft]
            }],
            "outline-w": [{
                outline: ["", Nt, Dr, bs]
            }],
            "outline-color": [{
                outline: k()
            }],
            shadow: [{
                shadow: ["", "none", g, Oo, jo]
            }],
            "shadow-color": [{
                shadow: k()
            }],
            "inset-shadow": [{
                "inset-shadow": ["none", x, Oo, jo]
            }],
            "inset-shadow-color": [{
                "inset-shadow": k()
            }],
            "ring-w": [{
                ring: nt()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: k()
            }],
            "ring-offset-w": [{
                "ring-offset": [Nt, bs]
            }],
            "ring-offset-color": [{
                "ring-offset": k()
            }],
            "inset-ring-w": [{
                "inset-ring": nt()
            }],
            "inset-ring-color": [{
                "inset-ring": k()
            }],
            "text-shadow": [{
                "text-shadow": ["none", S, Oo, jo]
            }],
            "text-shadow-color": [{
                "text-shadow": k()
            }],
            opacity: [{
                opacity: [Nt, dt, ft]
            }],
            "mix-blend": [{
                "mix-blend": [...At(), "plus-darker", "plus-lighter"]
            }],
            "bg-blend": [{
                "bg-blend": At()
            }],
            "mask-clip": [{
                "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
            }, "mask-no-clip"],
            "mask-composite": [{
                mask: ["add", "subtract", "intersect", "exclude"]
            }],
            "mask-image-linear-pos": [{
                "mask-linear": [Nt]
            }],
            "mask-image-linear-from-pos": [{
                "mask-linear-from": gt()
            }],
            "mask-image-linear-to-pos": [{
                "mask-linear-to": gt()
            }],
            "mask-image-linear-from-color": [{
                "mask-linear-from": k()
            }],
            "mask-image-linear-to-color": [{
                "mask-linear-to": k()
            }],
            "mask-image-t-from-pos": [{
                "mask-t-from": gt()
            }],
            "mask-image-t-to-pos": [{
                "mask-t-to": gt()
            }],
            "mask-image-t-from-color": [{
                "mask-t-from": k()
            }],
            "mask-image-t-to-color": [{
                "mask-t-to": k()
            }],
            "mask-image-r-from-pos": [{
                "mask-r-from": gt()
            }],
            "mask-image-r-to-pos": [{
                "mask-r-to": gt()
            }],
            "mask-image-r-from-color": [{
                "mask-r-from": k()
            }],
            "mask-image-r-to-color": [{
                "mask-r-to": k()
            }],
            "mask-image-b-from-pos": [{
                "mask-b-from": gt()
            }],
            "mask-image-b-to-pos": [{
                "mask-b-to": gt()
            }],
            "mask-image-b-from-color": [{
                "mask-b-from": k()
            }],
            "mask-image-b-to-color": [{
                "mask-b-to": k()
            }],
            "mask-image-l-from-pos": [{
                "mask-l-from": gt()
            }],
            "mask-image-l-to-pos": [{
                "mask-l-to": gt()
            }],
            "mask-image-l-from-color": [{
                "mask-l-from": k()
            }],
            "mask-image-l-to-color": [{
                "mask-l-to": k()
            }],
            "mask-image-x-from-pos": [{
                "mask-x-from": gt()
            }],
            "mask-image-x-to-pos": [{
                "mask-x-to": gt()
            }],
            "mask-image-x-from-color": [{
                "mask-x-from": k()
            }],
            "mask-image-x-to-color": [{
                "mask-x-to": k()
            }],
            "mask-image-y-from-pos": [{
                "mask-y-from": gt()
            }],
            "mask-image-y-to-pos": [{
                "mask-y-to": gt()
            }],
            "mask-image-y-from-color": [{
                "mask-y-from": k()
            }],
            "mask-image-y-to-color": [{
                "mask-y-to": k()
            }],
            "mask-image-radial": [{
                "mask-radial": [dt, ft]
            }],
            "mask-image-radial-from-pos": [{
                "mask-radial-from": gt()
            }],
            "mask-image-radial-to-pos": [{
                "mask-radial-to": gt()
            }],
            "mask-image-radial-from-color": [{
                "mask-radial-from": k()
            }],
            "mask-image-radial-to-color": [{
                "mask-radial-to": k()
            }],
            "mask-image-radial-shape": [{
                "mask-radial": ["circle", "ellipse"]
            }],
            "mask-image-radial-size": [{
                "mask-radial": [{
                    closest: ["side", "corner"],
                    farthest: ["side", "corner"]
                }]
            }],
            "mask-image-radial-pos": [{
                "mask-radial-at": G()
            }],
            "mask-image-conic-pos": [{
                "mask-conic": [Nt]
            }],
            "mask-image-conic-from-pos": [{
                "mask-conic-from": gt()
            }],
            "mask-image-conic-to-pos": [{
                "mask-conic-to": gt()
            }],
            "mask-image-conic-from-color": [{
                "mask-conic-from": k()
            }],
            "mask-image-conic-to-color": [{
                "mask-conic-to": k()
            }],
            "mask-mode": [{
                mask: ["alpha", "luminance", "match"]
            }],
            "mask-origin": [{
                "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
            }],
            "mask-position": [{
                mask: rt()
            }],
            "mask-repeat": [{
                mask: xt()
            }],
            "mask-size": [{
                mask: D()
            }],
            "mask-type": [{
                "mask-type": ["alpha", "luminance"]
            }],
            "mask-image": [{
                mask: ["none", dt, ft]
            }],
            filter: [{
                filter: ["", "none", dt, ft]
            }],
            blur: [{
                blur: Qt()
            }],
            brightness: [{
                brightness: [Nt, dt, ft]
            }],
            contrast: [{
                contrast: [Nt, dt, ft]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", w, Oo, jo]
            }],
            "drop-shadow-color": [{
                "drop-shadow": k()
            }],
            grayscale: [{
                grayscale: ["", Nt, dt, ft]
            }],
            "hue-rotate": [{
                "hue-rotate": [Nt, dt, ft]
            }],
            invert: [{
                invert: ["", Nt, dt, ft]
            }],
            saturate: [{
                saturate: [Nt, dt, ft]
            }],
            sepia: [{
                sepia: ["", Nt, dt, ft]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none", dt, ft]
            }],
            "backdrop-blur": [{
                "backdrop-blur": Qt()
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [Nt, dt, ft]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [Nt, dt, ft]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": ["", Nt, dt, ft]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [Nt, dt, ft]
            }],
            "backdrop-invert": [{
                "backdrop-invert": ["", Nt, dt, ft]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [Nt, dt, ft]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [Nt, dt, ft]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": ["", Nt, dt, ft]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": Y()
            }],
            "border-spacing-x": [{
                "border-spacing-x": Y()
            }],
            "border-spacing-y": [{
                "border-spacing-y": Y()
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", dt, ft]
            }],
            "transition-behavior": [{
                transition: ["normal", "discrete"]
            }],
            duration: [{
                duration: [Nt, "initial", dt, ft]
            }],
            ease: [{
                ease: ["linear", "initial", j, dt, ft]
            }],
            delay: [{
                delay: [Nt, dt, ft]
            }],
            animate: [{
                animate: ["none", O, dt, ft]
            }],
            backface: [{
                backface: ["hidden", "visible"]
            }],
            perspective: [{
                perspective: [A, dt, ft]
            }],
            "perspective-origin": [{
                "perspective-origin": H()
            }],
            rotate: [{
                rotate: Ut()
            }],
            "rotate-x": [{
                "rotate-x": Ut()
            }],
            "rotate-y": [{
                "rotate-y": Ut()
            }],
            "rotate-z": [{
                "rotate-z": Ut()
            }],
            scale: [{
                scale: je()
            }],
            "scale-x": [{
                "scale-x": je()
            }],
            "scale-y": [{
                "scale-y": je()
            }],
            "scale-z": [{
                "scale-z": je()
            }],
            "scale-3d": ["scale-3d"],
            skew: [{
                skew: Pe()
            }],
            "skew-x": [{
                "skew-x": Pe()
            }],
            "skew-y": [{
                "skew-y": Pe()
            }],
            transform: [{
                transform: [dt, ft, "", "none", "gpu", "cpu"]
            }],
            "transform-origin": [{
                origin: H()
            }],
            "transform-style": [{
                transform: ["3d", "flat"]
            }],
            translate: [{
                translate: ln()
            }],
            "translate-x": [{
                "translate-x": ln()
            }],
            "translate-y": [{
                "translate-y": ln()
            }],
            "translate-z": [{
                "translate-z": ln()
            }],
            "translate-none": ["translate-none"],
            accent: [{
                accent: k()
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            "caret-color": [{
                caret: k()
            }],
            "color-scheme": [{
                scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", dt, ft]
            }],
            "field-sizing": [{
                "field-sizing": ["fixed", "content"]
            }],
            "pointer-events": [{
                "pointer-events": ["auto", "none"]
            }],
            resize: [{
                resize: ["none", "", "y", "x"]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": Y()
            }],
            "scroll-mx": [{
                "scroll-mx": Y()
            }],
            "scroll-my": [{
                "scroll-my": Y()
            }],
            "scroll-ms": [{
                "scroll-ms": Y()
            }],
            "scroll-me": [{
                "scroll-me": Y()
            }],
            "scroll-mt": [{
                "scroll-mt": Y()
            }],
            "scroll-mr": [{
                "scroll-mr": Y()
            }],
            "scroll-mb": [{
                "scroll-mb": Y()
            }],
            "scroll-ml": [{
                "scroll-ml": Y()
            }],
            "scroll-p": [{
                "scroll-p": Y()
            }],
            "scroll-px": [{
                "scroll-px": Y()
            }],
            "scroll-py": [{
                "scroll-py": Y()
            }],
            "scroll-ps": [{
                "scroll-ps": Y()
            }],
            "scroll-pe": [{
                "scroll-pe": Y()
            }],
            "scroll-pt": [{
                "scroll-pt": Y()
            }],
            "scroll-pr": [{
                "scroll-pr": Y()
            }],
            "scroll-pb": [{
                "scroll-pb": Y()
            }],
            "scroll-pl": [{
                "scroll-pl": Y()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", dt, ft]
            }],
            fill: [{
                fill: ["none", ...k()]
            }],
            "stroke-w": [{
                stroke: [Nt, Dr, bs, $f]
            }],
            stroke: [{
                stroke: ["none", ...k()]
            }],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        },
        orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
}
  , xM = JC(vM);
function It(...e) {
    return xM(fb(e))
}
const bM = OE
  , jb = T.forwardRef( ({className: e, ...i}, a) => v.jsx(sb, {
    ref: a,
    className: It("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...i
}));
jb.displayName = sb.displayName;
const SM = db("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , Ob = T.forwardRef( ({className: e, variant: i, ...a}, r) => v.jsx(ab, {
    ref: r,
    className: It(SM({
        variant: i
    }), e),
    ...a
}));
Ob.displayName = ab.displayName;
const wM = T.forwardRef( ({className: e, ...i}, a) => v.jsx(ob, {
    ref: a,
    className: It("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...i
}));
wM.displayName = ob.displayName;
const _b = T.forwardRef( ({className: e, ...i}, a) => v.jsx(cb, {
    ref: a,
    className: It("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...i,
    children: v.jsx(vb, {
        className: "h-4 w-4"
    })
}));
_b.displayName = cb.displayName;
const Vb = T.forwardRef( ({className: e, ...i}, a) => v.jsx(rb, {
    ref: a,
    className: It("text-sm font-semibold", e),
    ...i
}));
Vb.displayName = rb.displayName;
const zb = T.forwardRef( ({className: e, ...i}, a) => v.jsx(lb, {
    ref: a,
    className: It("text-sm opacity-90", e),
    ...i
}));
zb.displayName = lb.displayName;
function TM() {
    const {toasts: e} = Px();
    return v.jsxs(bM, {
        children: [e.map(function({id: i, title: a, description: r, action: o, ...u}) {
            return v.jsxs(Ob, {
                ...u,
                children: [v.jsxs("div", {
                    className: "grid gap-1",
                    children: [a && v.jsx(Vb, {
                        children: a
                    }), r && v.jsx(zb, {
                        children: r
                    })]
                }), o, v.jsx(_b, {})]
            }, i)
        }), v.jsx(jb, {})]
    })
}
const AM = ["top", "right", "bottom", "left"]
  , Zi = Math.min
  , sn = Math.max
  , Qo = Math.round
  , _o = Math.floor
  , qn = e => ({
    x: e,
    y: e
})
  , EM = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , CM = {
    start: "end",
    end: "start"
};
function Nd(e, i, a) {
    return sn(e, Zi(i, a))
}
function yi(e, i) {
    return typeof e == "function" ? e(i) : e
}
function gi(e) {
    return e.split("-")[0]
}
function ja(e) {
    return e.split("-")[1]
}
function mh(e) {
    return e === "x" ? "y" : "x"
}
function ph(e) {
    return e === "y" ? "height" : "width"
}
const MM = new Set(["top", "bottom"]);
function Hn(e) {
    return MM.has(gi(e)) ? "y" : "x"
}
function yh(e) {
    return mh(Hn(e))
}
function NM(e, i, a) {
    a === void 0 && (a = !1);
    const r = ja(e)
      , o = yh(e)
      , u = ph(o);
    let f = o === "x" ? r === (a ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return i.reference[u] > i.floating[u] && (f = Ko(f)),
    [f, Ko(f)]
}
function DM(e) {
    const i = Ko(e);
    return [Dd(e), i, Dd(i)]
}
function Dd(e) {
    return e.replace(/start|end/g, i => CM[i])
}
const Pv = ["left", "right"]
  , Hv = ["right", "left"]
  , RM = ["top", "bottom"]
  , jM = ["bottom", "top"];
function OM(e, i, a) {
    switch (e) {
    case "top":
    case "bottom":
        return a ? i ? Hv : Pv : i ? Pv : Hv;
    case "left":
    case "right":
        return i ? RM : jM;
    default:
        return []
    }
}
function _M(e, i, a, r) {
    const o = ja(e);
    let u = OM(gi(e), a === "start", r);
    return o && (u = u.map(f => f + "-" + o),
    i && (u = u.concat(u.map(Dd)))),
    u
}
function Ko(e) {
    return e.replace(/left|right|bottom|top/g, i => EM[i])
}
function VM(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function Lb(e) {
    return typeof e != "number" ? VM(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Zo(e) {
    const {x: i, y: a, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: a,
        left: i,
        right: i + r,
        bottom: a + o,
        x: i,
        y: a
    }
}
function qv(e, i, a) {
    let {reference: r, floating: o} = e;
    const u = Hn(i)
      , f = yh(i)
      , h = ph(f)
      , m = gi(i)
      , p = u === "y"
      , g = r.x + r.width / 2 - o.width / 2
      , x = r.y + r.height / 2 - o.height / 2
      , S = r[h] / 2 - o[h] / 2;
    let w;
    switch (m) {
    case "top":
        w = {
            x: g,
            y: r.y - o.height
        };
        break;
    case "bottom":
        w = {
            x: g,
            y: r.y + r.height
        };
        break;
    case "right":
        w = {
            x: r.x + r.width,
            y: x
        };
        break;
    case "left":
        w = {
            x: r.x - o.width,
            y: x
        };
        break;
    default:
        w = {
            x: r.x,
            y: r.y
        }
    }
    switch (ja(i)) {
    case "start":
        w[f] -= S * (a && p ? -1 : 1);
        break;
    case "end":
        w[f] += S * (a && p ? -1 : 1);
        break
    }
    return w
}
const zM = async (e, i, a) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: u=[], platform: f} = a
      , h = u.filter(Boolean)
      , m = await (f.isRTL == null ? void 0 : f.isRTL(i));
    let p = await f.getElementRects({
        reference: e,
        floating: i,
        strategy: o
    })
      , {x: g, y: x} = qv(p, r, m)
      , S = r
      , w = {}
      , E = 0;
    for (let A = 0; A < h.length; A++) {
        const {name: M, fn: j} = h[A]
          , {x: O, y: V, data: G, reset: H} = await j({
            x: g,
            y: x,
            initialPlacement: r,
            placement: S,
            strategy: o,
            middlewareData: w,
            rects: p,
            platform: f,
            elements: {
                reference: e,
                floating: i
            }
        });
        g = O ?? g,
        x = V ?? x,
        w = {
            ...w,
            [M]: {
                ...w[M],
                ...G
            }
        },
        H && E <= 50 && (E++,
        typeof H == "object" && (H.placement && (S = H.placement),
        H.rects && (p = H.rects === !0 ? await f.getElementRects({
            reference: e,
            floating: i,
            strategy: o
        }) : H.rects),
        {x: g, y: x} = qv(p, S, m)),
        A = -1)
    }
    return {
        x: g,
        y: x,
        placement: S,
        strategy: o,
        middlewareData: w
    }
}
;
async function Yr(e, i) {
    var a;
    i === void 0 && (i = {});
    const {x: r, y: o, platform: u, rects: f, elements: h, strategy: m} = e
      , {boundary: p="clippingAncestors", rootBoundary: g="viewport", elementContext: x="floating", altBoundary: S=!1, padding: w=0} = yi(i, e)
      , E = Lb(w)
      , M = h[S ? x === "floating" ? "reference" : "floating" : x]
      , j = Zo(await u.getClippingRect({
        element: (a = await (u.isElement == null ? void 0 : u.isElement(M))) == null || a ? M : M.contextElement || await (u.getDocumentElement == null ? void 0 : u.getDocumentElement(h.floating)),
        boundary: p,
        rootBoundary: g,
        strategy: m
    }))
      , O = x === "floating" ? {
        x: r,
        y: o,
        width: f.floating.width,
        height: f.floating.height
    } : f.reference
      , V = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(h.floating))
      , G = await (u.isElement == null ? void 0 : u.isElement(V)) ? await (u.getScale == null ? void 0 : u.getScale(V)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , H = Zo(u.convertOffsetParentRelativeRectToViewportRelativeRect ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: h,
        rect: O,
        offsetParent: V,
        strategy: m
    }) : O);
    return {
        top: (j.top - H.top + E.top) / G.y,
        bottom: (H.bottom - j.bottom + E.bottom) / G.y,
        left: (j.left - H.left + E.left) / G.x,
        right: (H.right - j.right + E.right) / G.x
    }
}
const LM = e => ({
    name: "arrow",
    options: e,
    async fn(i) {
        const {x: a, y: r, placement: o, rects: u, platform: f, elements: h, middlewareData: m} = i
          , {element: p, padding: g=0} = yi(e, i) || {};
        if (p == null)
            return {};
        const x = Lb(g)
          , S = {
            x: a,
            y: r
        }
          , w = yh(o)
          , E = ph(w)
          , A = await f.getDimensions(p)
          , M = w === "y"
          , j = M ? "top" : "left"
          , O = M ? "bottom" : "right"
          , V = M ? "clientHeight" : "clientWidth"
          , G = u.reference[E] + u.reference[w] - S[w] - u.floating[E]
          , H = S[w] - u.reference[w]
          , J = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(p));
        let Z = J ? J[V] : 0;
        (!Z || !await (f.isElement == null ? void 0 : f.isElement(J))) && (Z = h.floating[V] || u.floating[E]);
        const Y = G / 2 - H / 2
          , ot = Z / 2 - A[E] / 2 - 1
          , ht = Zi(x[j], ot)
          , Tt = Zi(x[O], ot)
          , at = ht
          , ct = Z - A[E] - Tt
          , tt = Z / 2 - A[E] / 2 + Y
          , mt = Nd(at, tt, ct)
          , z = !m.arrow && ja(o) != null && tt !== mt && u.reference[E] / 2 - (tt < at ? ht : Tt) - A[E] / 2 < 0
          , q = z ? tt < at ? tt - at : tt - ct : 0;
        return {
            [w]: S[w] + q,
            data: {
                [w]: mt,
                centerOffset: tt - mt - q,
                ...z && {
                    alignmentOffset: q
                }
            },
            reset: z
        }
    }
})
  , UM = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(i) {
            var a, r;
            const {placement: o, middlewareData: u, rects: f, initialPlacement: h, platform: m, elements: p} = i
              , {mainAxis: g=!0, crossAxis: x=!0, fallbackPlacements: S, fallbackStrategy: w="bestFit", fallbackAxisSideDirection: E="none", flipAlignment: A=!0, ...M} = yi(e, i);
            if ((a = u.arrow) != null && a.alignmentOffset)
                return {};
            const j = gi(o)
              , O = Hn(h)
              , V = gi(h) === h
              , G = await (m.isRTL == null ? void 0 : m.isRTL(p.floating))
              , H = S || (V || !A ? [Ko(h)] : DM(h))
              , J = E !== "none";
            !S && J && H.push(..._M(h, A, E, G));
            const Z = [h, ...H]
              , Y = await Yr(i, M)
              , ot = [];
            let ht = ((r = u.flip) == null ? void 0 : r.overflows) || [];
            if (g && ot.push(Y[j]),
            x) {
                const tt = NM(o, f, G);
                ot.push(Y[tt[0]], Y[tt[1]])
            }
            if (ht = [...ht, {
                placement: o,
                overflows: ot
            }],
            !ot.every(tt => tt <= 0)) {
                var Tt, at;
                const tt = (((Tt = u.flip) == null ? void 0 : Tt.index) || 0) + 1
                  , mt = Z[tt];
                if (mt && (!(x === "alignment" ? O !== Hn(mt) : !1) || ht.every(k => Hn(k.placement) === O ? k.overflows[0] > 0 : !0)))
                    return {
                        data: {
                            index: tt,
                            overflows: ht
                        },
                        reset: {
                            placement: mt
                        }
                    };
                let z = (at = ht.filter(q => q.overflows[0] <= 0).sort( (q, k) => q.overflows[1] - k.overflows[1])[0]) == null ? void 0 : at.placement;
                if (!z)
                    switch (w) {
                    case "bestFit":
                        {
                            var ct;
                            const q = (ct = ht.filter(k => {
                                if (J) {
                                    const rt = Hn(k.placement);
                                    return rt === O || rt === "y"
                                }
                                return !0
                            }
                            ).map(k => [k.placement, k.overflows.filter(rt => rt > 0).reduce( (rt, xt) => rt + xt, 0)]).sort( (k, rt) => k[1] - rt[1])[0]) == null ? void 0 : ct[0];
                            q && (z = q);
                            break
                        }
                    case "initialPlacement":
                        z = h;
                        break
                    }
                if (o !== z)
                    return {
                        reset: {
                            placement: z
                        }
                    }
            }
            return {}
        }
    }
};
function Fv(e, i) {
    return {
        top: e.top - i.height,
        right: e.right - i.width,
        bottom: e.bottom - i.height,
        left: e.left - i.width
    }
}
function Gv(e) {
    return AM.some(i => e[i] >= 0)
}
const kM = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(i) {
            const {rects: a} = i
              , {strategy: r="referenceHidden", ...o} = yi(e, i);
            switch (r) {
            case "referenceHidden":
                {
                    const u = await Yr(i, {
                        ...o,
                        elementContext: "reference"
                    })
                      , f = Fv(u, a.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: f,
                            referenceHidden: Gv(f)
                        }
                    }
                }
            case "escaped":
                {
                    const u = await Yr(i, {
                        ...o,
                        altBoundary: !0
                    })
                      , f = Fv(u, a.floating);
                    return {
                        data: {
                            escapedOffsets: f,
                            escaped: Gv(f)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , Ub = new Set(["left", "top"]);
async function BM(e, i) {
    const {placement: a, platform: r, elements: o} = e
      , u = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , f = gi(a)
      , h = ja(a)
      , m = Hn(a) === "y"
      , p = Ub.has(f) ? -1 : 1
      , g = u && m ? -1 : 1
      , x = yi(i, e);
    let {mainAxis: S, crossAxis: w, alignmentAxis: E} = typeof x == "number" ? {
        mainAxis: x,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: x.mainAxis || 0,
        crossAxis: x.crossAxis || 0,
        alignmentAxis: x.alignmentAxis
    };
    return h && typeof E == "number" && (w = h === "end" ? E * -1 : E),
    m ? {
        x: w * g,
        y: S * p
    } : {
        x: S * p,
        y: w * g
    }
}
const PM = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(i) {
            var a, r;
            const {x: o, y: u, placement: f, middlewareData: h} = i
              , m = await BM(i, e);
            return f === ((a = h.offset) == null ? void 0 : a.placement) && (r = h.arrow) != null && r.alignmentOffset ? {} : {
                x: o + m.x,
                y: u + m.y,
                data: {
                    ...m,
                    placement: f
                }
            }
        }
    }
}
  , HM = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(i) {
            const {x: a, y: r, placement: o} = i
              , {mainAxis: u=!0, crossAxis: f=!1, limiter: h={
                fn: M => {
                    let {x: j, y: O} = M;
                    return {
                        x: j,
                        y: O
                    }
                }
            }, ...m} = yi(e, i)
              , p = {
                x: a,
                y: r
            }
              , g = await Yr(i, m)
              , x = Hn(gi(o))
              , S = mh(x);
            let w = p[S]
              , E = p[x];
            if (u) {
                const M = S === "y" ? "top" : "left"
                  , j = S === "y" ? "bottom" : "right"
                  , O = w + g[M]
                  , V = w - g[j];
                w = Nd(O, w, V)
            }
            if (f) {
                const M = x === "y" ? "top" : "left"
                  , j = x === "y" ? "bottom" : "right"
                  , O = E + g[M]
                  , V = E - g[j];
                E = Nd(O, E, V)
            }
            const A = h.fn({
                ...i,
                [S]: w,
                [x]: E
            });
            return {
                ...A,
                data: {
                    x: A.x - a,
                    y: A.y - r,
                    enabled: {
                        [S]: u,
                        [x]: f
                    }
                }
            }
        }
    }
}
  , qM = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(i) {
            const {x: a, y: r, placement: o, rects: u, middlewareData: f} = i
              , {offset: h=0, mainAxis: m=!0, crossAxis: p=!0} = yi(e, i)
              , g = {
                x: a,
                y: r
            }
              , x = Hn(o)
              , S = mh(x);
            let w = g[S]
              , E = g[x];
            const A = yi(h, i)
              , M = typeof A == "number" ? {
                mainAxis: A,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...A
            };
            if (m) {
                const V = S === "y" ? "height" : "width"
                  , G = u.reference[S] - u.floating[V] + M.mainAxis
                  , H = u.reference[S] + u.reference[V] - M.mainAxis;
                w < G ? w = G : w > H && (w = H)
            }
            if (p) {
                var j, O;
                const V = S === "y" ? "width" : "height"
                  , G = Ub.has(gi(o))
                  , H = u.reference[x] - u.floating[V] + (G && ((j = f.offset) == null ? void 0 : j[x]) || 0) + (G ? 0 : M.crossAxis)
                  , J = u.reference[x] + u.reference[V] + (G ? 0 : ((O = f.offset) == null ? void 0 : O[x]) || 0) - (G ? M.crossAxis : 0);
                E < H ? E = H : E > J && (E = J)
            }
            return {
                [S]: w,
                [x]: E
            }
        }
    }
}
  , FM = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(i) {
            var a, r;
            const {placement: o, rects: u, platform: f, elements: h} = i
              , {apply: m= () => {}
            , ...p} = yi(e, i)
              , g = await Yr(i, p)
              , x = gi(o)
              , S = ja(o)
              , w = Hn(o) === "y"
              , {width: E, height: A} = u.floating;
            let M, j;
            x === "top" || x === "bottom" ? (M = x,
            j = S === (await (f.isRTL == null ? void 0 : f.isRTL(h.floating)) ? "start" : "end") ? "left" : "right") : (j = x,
            M = S === "end" ? "top" : "bottom");
            const O = A - g.top - g.bottom
              , V = E - g.left - g.right
              , G = Zi(A - g[M], O)
              , H = Zi(E - g[j], V)
              , J = !i.middlewareData.shift;
            let Z = G
              , Y = H;
            if ((a = i.middlewareData.shift) != null && a.enabled.x && (Y = V),
            (r = i.middlewareData.shift) != null && r.enabled.y && (Z = O),
            J && !S) {
                const ht = sn(g.left, 0)
                  , Tt = sn(g.right, 0)
                  , at = sn(g.top, 0)
                  , ct = sn(g.bottom, 0);
                w ? Y = E - 2 * (ht !== 0 || Tt !== 0 ? ht + Tt : sn(g.left, g.right)) : Z = A - 2 * (at !== 0 || ct !== 0 ? at + ct : sn(g.top, g.bottom))
            }
            await m({
                ...i,
                availableWidth: Y,
                availableHeight: Z
            });
            const ot = await f.getDimensions(h.floating);
            return E !== ot.width || A !== ot.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function gc() {
    return typeof window < "u"
}
function Oa(e) {
    return kb(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function rn(e) {
    var i;
    return (e == null || (i = e.ownerDocument) == null ? void 0 : i.defaultView) || window
}
function Xn(e) {
    var i;
    return (i = (kb(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : i.documentElement
}
function kb(e) {
    return gc() ? e instanceof Node || e instanceof rn(e).Node : !1
}
function On(e) {
    return gc() ? e instanceof Element || e instanceof rn(e).Element : !1
}
function Gn(e) {
    return gc() ? e instanceof HTMLElement || e instanceof rn(e).HTMLElement : !1
}
function Yv(e) {
    return !gc() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof rn(e).ShadowRoot
}
const GM = new Set(["inline", "contents"]);
function tl(e) {
    const {overflow: i, overflowX: a, overflowY: r, display: o} = _n(e);
    return /auto|scroll|overlay|hidden|clip/.test(i + r + a) && !GM.has(o)
}
const YM = new Set(["table", "td", "th"]);
function XM(e) {
    return YM.has(Oa(e))
}
const QM = [":popover-open", ":modal"];
function vc(e) {
    return QM.some(i => {
        try {
            return e.matches(i)
        } catch {
            return !1
        }
    }
    )
}
const KM = ["transform", "translate", "scale", "rotate", "perspective"]
  , ZM = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , IM = ["paint", "layout", "strict", "content"];
function gh(e) {
    const i = vh()
      , a = On(e) ? _n(e) : e;
    return KM.some(r => a[r] ? a[r] !== "none" : !1) || (a.containerType ? a.containerType !== "normal" : !1) || !i && (a.backdropFilter ? a.backdropFilter !== "none" : !1) || !i && (a.filter ? a.filter !== "none" : !1) || ZM.some(r => (a.willChange || "").includes(r)) || IM.some(r => (a.contain || "").includes(r))
}
function WM(e) {
    let i = Ii(e);
    for (; Gn(i) && !Ca(i); ) {
        if (gh(i))
            return i;
        if (vc(i))
            return null;
        i = Ii(i)
    }
    return null
}
function vh() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const JM = new Set(["html", "body", "#document"]);
function Ca(e) {
    return JM.has(Oa(e))
}
function _n(e) {
    return rn(e).getComputedStyle(e)
}
function xc(e) {
    return On(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Ii(e) {
    if (Oa(e) === "html")
        return e;
    const i = e.assignedSlot || e.parentNode || Yv(e) && e.host || Xn(e);
    return Yv(i) ? i.host : i
}
function Bb(e) {
    const i = Ii(e);
    return Ca(i) ? e.ownerDocument ? e.ownerDocument.body : e.body : Gn(i) && tl(i) ? i : Bb(i)
}
function Xr(e, i, a) {
    var r;
    i === void 0 && (i = []),
    a === void 0 && (a = !0);
    const o = Bb(e)
      , u = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , f = rn(o);
    if (u) {
        const h = Rd(f);
        return i.concat(f, f.visualViewport || [], tl(o) ? o : [], h && a ? Xr(h) : [])
    }
    return i.concat(o, Xr(o, [], a))
}
function Rd(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Pb(e) {
    const i = _n(e);
    let a = parseFloat(i.width) || 0
      , r = parseFloat(i.height) || 0;
    const o = Gn(e)
      , u = o ? e.offsetWidth : a
      , f = o ? e.offsetHeight : r
      , h = Qo(a) !== u || Qo(r) !== f;
    return h && (a = u,
    r = f),
    {
        width: a,
        height: r,
        $: h
    }
}
function xh(e) {
    return On(e) ? e : e.contextElement
}
function Aa(e) {
    const i = xh(e);
    if (!Gn(i))
        return qn(1);
    const a = i.getBoundingClientRect()
      , {width: r, height: o, $: u} = Pb(i);
    let f = (u ? Qo(a.width) : a.width) / r
      , h = (u ? Qo(a.height) : a.height) / o;
    return (!f || !Number.isFinite(f)) && (f = 1),
    (!h || !Number.isFinite(h)) && (h = 1),
    {
        x: f,
        y: h
    }
}
const $M = qn(0);
function Hb(e) {
    const i = rn(e);
    return !vh() || !i.visualViewport ? $M : {
        x: i.visualViewport.offsetLeft,
        y: i.visualViewport.offsetTop
    }
}
function tN(e, i, a) {
    return i === void 0 && (i = !1),
    !a || i && a !== rn(e) ? !1 : i
}
function Ns(e, i, a, r) {
    i === void 0 && (i = !1),
    a === void 0 && (a = !1);
    const o = e.getBoundingClientRect()
      , u = xh(e);
    let f = qn(1);
    i && (r ? On(r) && (f = Aa(r)) : f = Aa(e));
    const h = tN(u, a, r) ? Hb(u) : qn(0);
    let m = (o.left + h.x) / f.x
      , p = (o.top + h.y) / f.y
      , g = o.width / f.x
      , x = o.height / f.y;
    if (u) {
        const S = rn(u)
          , w = r && On(r) ? rn(r) : r;
        let E = S
          , A = Rd(E);
        for (; A && r && w !== E; ) {
            const M = Aa(A)
              , j = A.getBoundingClientRect()
              , O = _n(A)
              , V = j.left + (A.clientLeft + parseFloat(O.paddingLeft)) * M.x
              , G = j.top + (A.clientTop + parseFloat(O.paddingTop)) * M.y;
            m *= M.x,
            p *= M.y,
            g *= M.x,
            x *= M.y,
            m += V,
            p += G,
            E = rn(A),
            A = Rd(E)
        }
    }
    return Zo({
        width: g,
        height: x,
        x: m,
        y: p
    })
}
function bc(e, i) {
    const a = xc(e).scrollLeft;
    return i ? i.left + a : Ns(Xn(e)).left + a
}
function qb(e, i) {
    const a = e.getBoundingClientRect()
      , r = a.left + i.scrollLeft - bc(e, a)
      , o = a.top + i.scrollTop;
    return {
        x: r,
        y: o
    }
}
function eN(e) {
    let {elements: i, rect: a, offsetParent: r, strategy: o} = e;
    const u = o === "fixed"
      , f = Xn(r)
      , h = i ? vc(i.floating) : !1;
    if (r === f || h && u)
        return a;
    let m = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , p = qn(1);
    const g = qn(0)
      , x = Gn(r);
    if ((x || !x && !u) && ((Oa(r) !== "body" || tl(f)) && (m = xc(r)),
    Gn(r))) {
        const w = Ns(r);
        p = Aa(r),
        g.x = w.x + r.clientLeft,
        g.y = w.y + r.clientTop
    }
    const S = f && !x && !u ? qb(f, m) : qn(0);
    return {
        width: a.width * p.x,
        height: a.height * p.y,
        x: a.x * p.x - m.scrollLeft * p.x + g.x + S.x,
        y: a.y * p.y - m.scrollTop * p.y + g.y + S.y
    }
}
function nN(e) {
    return Array.from(e.getClientRects())
}
function iN(e) {
    const i = Xn(e)
      , a = xc(e)
      , r = e.ownerDocument.body
      , o = sn(i.scrollWidth, i.clientWidth, r.scrollWidth, r.clientWidth)
      , u = sn(i.scrollHeight, i.clientHeight, r.scrollHeight, r.clientHeight);
    let f = -a.scrollLeft + bc(e);
    const h = -a.scrollTop;
    return _n(r).direction === "rtl" && (f += sn(i.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: u,
        x: f,
        y: h
    }
}
const Xv = 25;
function sN(e, i) {
    const a = rn(e)
      , r = Xn(e)
      , o = a.visualViewport;
    let u = r.clientWidth
      , f = r.clientHeight
      , h = 0
      , m = 0;
    if (o) {
        u = o.width,
        f = o.height;
        const g = vh();
        (!g || g && i === "fixed") && (h = o.offsetLeft,
        m = o.offsetTop)
    }
    const p = bc(r);
    if (p <= 0) {
        const g = r.ownerDocument
          , x = g.body
          , S = getComputedStyle(x)
          , w = g.compatMode === "CSS1Compat" && parseFloat(S.marginLeft) + parseFloat(S.marginRight) || 0
          , E = Math.abs(r.clientWidth - x.clientWidth - w);
        E <= Xv && (u -= E)
    } else
        p <= Xv && (u += p);
    return {
        width: u,
        height: f,
        x: h,
        y: m
    }
}
const aN = new Set(["absolute", "fixed"]);
function rN(e, i) {
    const a = Ns(e, !0, i === "fixed")
      , r = a.top + e.clientTop
      , o = a.left + e.clientLeft
      , u = Gn(e) ? Aa(e) : qn(1)
      , f = e.clientWidth * u.x
      , h = e.clientHeight * u.y
      , m = o * u.x
      , p = r * u.y;
    return {
        width: f,
        height: h,
        x: m,
        y: p
    }
}
function Qv(e, i, a) {
    let r;
    if (i === "viewport")
        r = sN(e, a);
    else if (i === "document")
        r = iN(Xn(e));
    else if (On(i))
        r = rN(i, a);
    else {
        const o = Hb(e);
        r = {
            x: i.x - o.x,
            y: i.y - o.y,
            width: i.width,
            height: i.height
        }
    }
    return Zo(r)
}
function Fb(e, i) {
    const a = Ii(e);
    return a === i || !On(a) || Ca(a) ? !1 : _n(a).position === "fixed" || Fb(a, i)
}
function lN(e, i) {
    const a = i.get(e);
    if (a)
        return a;
    let r = Xr(e, [], !1).filter(h => On(h) && Oa(h) !== "body")
      , o = null;
    const u = _n(e).position === "fixed";
    let f = u ? Ii(e) : e;
    for (; On(f) && !Ca(f); ) {
        const h = _n(f)
          , m = gh(f);
        !m && h.position === "fixed" && (o = null),
        (u ? !m && !o : !m && h.position === "static" && !!o && aN.has(o.position) || tl(f) && !m && Fb(e, f)) ? r = r.filter(g => g !== f) : o = h,
        f = Ii(f)
    }
    return i.set(e, r),
    r
}
function oN(e) {
    let {element: i, boundary: a, rootBoundary: r, strategy: o} = e;
    const f = [...a === "clippingAncestors" ? vc(i) ? [] : lN(i, this._c) : [].concat(a), r]
      , h = f[0]
      , m = f.reduce( (p, g) => {
        const x = Qv(i, g, o);
        return p.top = sn(x.top, p.top),
        p.right = Zi(x.right, p.right),
        p.bottom = Zi(x.bottom, p.bottom),
        p.left = sn(x.left, p.left),
        p
    }
    , Qv(i, h, o));
    return {
        width: m.right - m.left,
        height: m.bottom - m.top,
        x: m.left,
        y: m.top
    }
}
function cN(e) {
    const {width: i, height: a} = Pb(e);
    return {
        width: i,
        height: a
    }
}
function uN(e, i, a) {
    const r = Gn(i)
      , o = Xn(i)
      , u = a === "fixed"
      , f = Ns(e, !0, u, i);
    let h = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const m = qn(0);
    function p() {
        m.x = bc(o)
    }
    if (r || !r && !u)
        if ((Oa(i) !== "body" || tl(o)) && (h = xc(i)),
        r) {
            const w = Ns(i, !0, u, i);
            m.x = w.x + i.clientLeft,
            m.y = w.y + i.clientTop
        } else
            o && p();
    u && !r && o && p();
    const g = o && !r && !u ? qb(o, h) : qn(0)
      , x = f.left + h.scrollLeft - m.x - g.x
      , S = f.top + h.scrollTop - m.y - g.y;
    return {
        x,
        y: S,
        width: f.width,
        height: f.height
    }
}
function td(e) {
    return _n(e).position === "static"
}
function Kv(e, i) {
    if (!Gn(e) || _n(e).position === "fixed")
        return null;
    if (i)
        return i(e);
    let a = e.offsetParent;
    return Xn(e) === a && (a = a.ownerDocument.body),
    a
}
function Gb(e, i) {
    const a = rn(e);
    if (vc(e))
        return a;
    if (!Gn(e)) {
        let o = Ii(e);
        for (; o && !Ca(o); ) {
            if (On(o) && !td(o))
                return o;
            o = Ii(o)
        }
        return a
    }
    let r = Kv(e, i);
    for (; r && XM(r) && td(r); )
        r = Kv(r, i);
    return r && Ca(r) && td(r) && !gh(r) ? a : r || WM(e) || a
}
const fN = async function(e) {
    const i = this.getOffsetParent || Gb
      , a = this.getDimensions
      , r = await a(e.floating);
    return {
        reference: uN(e.reference, await i(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function dN(e) {
    return _n(e).direction === "rtl"
}
const hN = {
    convertOffsetParentRelativeRectToViewportRelativeRect: eN,
    getDocumentElement: Xn,
    getClippingRect: oN,
    getOffsetParent: Gb,
    getElementRects: fN,
    getClientRects: nN,
    getDimensions: cN,
    getScale: Aa,
    isElement: On,
    isRTL: dN
};
function Yb(e, i) {
    return e.x === i.x && e.y === i.y && e.width === i.width && e.height === i.height
}
function mN(e, i) {
    let a = null, r;
    const o = Xn(e);
    function u() {
        var h;
        clearTimeout(r),
        (h = a) == null || h.disconnect(),
        a = null
    }
    function f(h, m) {
        h === void 0 && (h = !1),
        m === void 0 && (m = 1),
        u();
        const p = e.getBoundingClientRect()
          , {left: g, top: x, width: S, height: w} = p;
        if (h || i(),
        !S || !w)
            return;
        const E = _o(x)
          , A = _o(o.clientWidth - (g + S))
          , M = _o(o.clientHeight - (x + w))
          , j = _o(g)
          , V = {
            rootMargin: -E + "px " + -A + "px " + -M + "px " + -j + "px",
            threshold: sn(0, Zi(1, m)) || 1
        };
        let G = !0;
        function H(J) {
            const Z = J[0].intersectionRatio;
            if (Z !== m) {
                if (!G)
                    return f();
                Z ? f(!1, Z) : r = setTimeout( () => {
                    f(!1, 1e-7)
                }
                , 1e3)
            }
            Z === 1 && !Yb(p, e.getBoundingClientRect()) && f(),
            G = !1
        }
        try {
            a = new IntersectionObserver(H,{
                ...V,
                root: o.ownerDocument
            })
        } catch {
            a = new IntersectionObserver(H,V)
        }
        a.observe(e)
    }
    return f(!0),
    u
}
function pN(e, i, a, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: u=!0, elementResize: f=typeof ResizeObserver == "function", layoutShift: h=typeof IntersectionObserver == "function", animationFrame: m=!1} = r
      , p = xh(e)
      , g = o || u ? [...p ? Xr(p) : [], ...Xr(i)] : [];
    g.forEach(j => {
        o && j.addEventListener("scroll", a, {
            passive: !0
        }),
        u && j.addEventListener("resize", a)
    }
    );
    const x = p && h ? mN(p, a) : null;
    let S = -1
      , w = null;
    f && (w = new ResizeObserver(j => {
        let[O] = j;
        O && O.target === p && w && (w.unobserve(i),
        cancelAnimationFrame(S),
        S = requestAnimationFrame( () => {
            var V;
            (V = w) == null || V.observe(i)
        }
        )),
        a()
    }
    ),
    p && !m && w.observe(p),
    w.observe(i));
    let E, A = m ? Ns(e) : null;
    m && M();
    function M() {
        const j = Ns(e);
        A && !Yb(A, j) && a(),
        A = j,
        E = requestAnimationFrame(M)
    }
    return a(),
    () => {
        var j;
        g.forEach(O => {
            o && O.removeEventListener("scroll", a),
            u && O.removeEventListener("resize", a)
        }
        ),
        x?.(),
        (j = w) == null || j.disconnect(),
        w = null,
        m && cancelAnimationFrame(E)
    }
}
const yN = PM
  , gN = HM
  , vN = UM
  , xN = FM
  , bN = kM
  , Zv = LM
  , SN = qM
  , wN = (e, i, a) => {
    const r = new Map
      , o = {
        platform: hN,
        ...a
    }
      , u = {
        ...o.platform,
        _c: r
    };
    return zM(e, i, {
        ...o,
        platform: u
    })
}
;
var TN = typeof document < "u"
  , AN = function() {}
  , Po = TN ? T.useLayoutEffect : AN;
function Io(e, i) {
    if (e === i)
        return !0;
    if (typeof e != typeof i)
        return !1;
    if (typeof e == "function" && e.toString() === i.toString())
        return !0;
    let a, r, o;
    if (e && i && typeof e == "object") {
        if (Array.isArray(e)) {
            if (a = e.length,
            a !== i.length)
                return !1;
            for (r = a; r-- !== 0; )
                if (!Io(e[r], i[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        a = o.length,
        a !== Object.keys(i).length)
            return !1;
        for (r = a; r-- !== 0; )
            if (!{}.hasOwnProperty.call(i, o[r]))
                return !1;
        for (r = a; r-- !== 0; ) {
            const u = o[r];
            if (!(u === "_owner" && e.$$typeof) && !Io(e[u], i[u]))
                return !1
        }
        return !0
    }
    return e !== e && i !== i
}
function Xb(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Iv(e, i) {
    const a = Xb(e);
    return Math.round(i * a) / a
}
function ed(e) {
    const i = T.useRef(e);
    return Po( () => {
        i.current = e
    }
    ),
    i
}
function EN(e) {
    e === void 0 && (e = {});
    const {placement: i="bottom", strategy: a="absolute", middleware: r=[], platform: o, elements: {reference: u, floating: f}={}, transform: h=!0, whileElementsMounted: m, open: p} = e
      , [g,x] = T.useState({
        x: 0,
        y: 0,
        strategy: a,
        placement: i,
        middlewareData: {},
        isPositioned: !1
    })
      , [S,w] = T.useState(r);
    Io(S, r) || w(r);
    const [E,A] = T.useState(null)
      , [M,j] = T.useState(null)
      , O = T.useCallback(k => {
        k !== J.current && (J.current = k,
        A(k))
    }
    , [])
      , V = T.useCallback(k => {
        k !== Z.current && (Z.current = k,
        j(k))
    }
    , [])
      , G = u || E
      , H = f || M
      , J = T.useRef(null)
      , Z = T.useRef(null)
      , Y = T.useRef(g)
      , ot = m != null
      , ht = ed(m)
      , Tt = ed(o)
      , at = ed(p)
      , ct = T.useCallback( () => {
        if (!J.current || !Z.current)
            return;
        const k = {
            placement: i,
            strategy: a,
            middleware: S
        };
        Tt.current && (k.platform = Tt.current),
        wN(J.current, Z.current, k).then(rt => {
            const xt = {
                ...rt,
                isPositioned: at.current !== !1
            };
            tt.current && !Io(Y.current, xt) && (Y.current = xt,
            fc.flushSync( () => {
                x(xt)
            }
            ))
        }
        )
    }
    , [S, i, a, Tt, at]);
    Po( () => {
        p === !1 && Y.current.isPositioned && (Y.current.isPositioned = !1,
        x(k => ({
            ...k,
            isPositioned: !1
        })))
    }
    , [p]);
    const tt = T.useRef(!1);
    Po( () => (tt.current = !0,
    () => {
        tt.current = !1
    }
    ), []),
    Po( () => {
        if (G && (J.current = G),
        H && (Z.current = H),
        G && H) {
            if (ht.current)
                return ht.current(G, H, ct);
            ct()
        }
    }
    , [G, H, ct, ht, ot]);
    const mt = T.useMemo( () => ({
        reference: J,
        floating: Z,
        setReference: O,
        setFloating: V
    }), [O, V])
      , z = T.useMemo( () => ({
        reference: G,
        floating: H
    }), [G, H])
      , q = T.useMemo( () => {
        const k = {
            position: a,
            left: 0,
            top: 0
        };
        if (!z.floating)
            return k;
        const rt = Iv(z.floating, g.x)
          , xt = Iv(z.floating, g.y);
        return h ? {
            ...k,
            transform: "translate(" + rt + "px, " + xt + "px)",
            ...Xb(z.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: a,
            left: rt,
            top: xt
        }
    }
    , [a, h, z.floating, g.x, g.y]);
    return T.useMemo( () => ({
        ...g,
        update: ct,
        refs: mt,
        elements: z,
        floatingStyles: q
    }), [g, ct, mt, z, q])
}
const CN = e => {
    function i(a) {
        return {}.hasOwnProperty.call(a, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(a) {
            const {element: r, padding: o} = typeof e == "function" ? e(a) : e;
            return r && i(r) ? r.current != null ? Zv({
                element: r.current,
                padding: o
            }).fn(a) : {} : r ? Zv({
                element: r,
                padding: o
            }).fn(a) : {}
        }
    }
}
  , MN = (e, i) => ({
    ...yN(e),
    options: [e, i]
})
  , NN = (e, i) => ({
    ...gN(e),
    options: [e, i]
})
  , DN = (e, i) => ({
    ...SN(e),
    options: [e, i]
})
  , RN = (e, i) => ({
    ...vN(e),
    options: [e, i]
})
  , jN = (e, i) => ({
    ...xN(e),
    options: [e, i]
})
  , ON = (e, i) => ({
    ...bN(e),
    options: [e, i]
})
  , _N = (e, i) => ({
    ...CN(e),
    options: [e, i]
});
var VN = "Arrow"
  , Qb = T.forwardRef( (e, i) => {
    const {children: a, width: r=10, height: o=5, ...u} = e;
    return v.jsx(Ze.svg, {
        ...u,
        ref: i,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? a : v.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
Qb.displayName = VN;
var zN = Qb;
function LN(e) {
    const [i,a] = T.useState(void 0);
    return Ki( () => {
        if (e) {
            a({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const u = o[0];
                let f, h;
                if ("borderBoxSize"in u) {
                    const m = u.borderBoxSize
                      , p = Array.isArray(m) ? m[0] : m;
                    f = p.inlineSize,
                    h = p.blockSize
                } else
                    f = e.offsetWidth,
                    h = e.offsetHeight;
                a({
                    width: f,
                    height: h
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            a(void 0)
    }
    , [e]),
    i
}
var Kb = "Popper"
  , [Zb,Ib] = hc(Kb)
  , [Y_,Wb] = Zb(Kb)
  , Jb = "PopperAnchor"
  , $b = T.forwardRef( (e, i) => {
    const {__scopePopper: a, virtualRef: r, ...o} = e
      , u = Wb(Jb, a)
      , f = T.useRef(null)
      , h = jn(i, f)
      , m = T.useRef(null);
    return T.useEffect( () => {
        const p = m.current;
        m.current = r?.current || f.current,
        p !== m.current && u.onAnchorChange(m.current)
    }
    ),
    r ? null : v.jsx(Ze.div, {
        ...o,
        ref: h
    })
}
);
$b.displayName = Jb;
var bh = "PopperContent"
  , [UN,kN] = Zb(bh)
  , t1 = T.forwardRef( (e, i) => {
    const {__scopePopper: a, side: r="bottom", sideOffset: o=0, align: u="center", alignOffset: f=0, arrowPadding: h=0, avoidCollisions: m=!0, collisionBoundary: p=[], collisionPadding: g=0, sticky: x="partial", hideWhenDetached: S=!1, updatePositionStrategy: w="optimized", onPlaced: E, ...A} = e
      , M = Wb(bh, a)
      , [j,O] = T.useState(null)
      , V = jn(i, gt => O(gt))
      , [G,H] = T.useState(null)
      , J = LN(G)
      , Z = J?.width ?? 0
      , Y = J?.height ?? 0
      , ot = r + (u !== "center" ? "-" + u : "")
      , ht = typeof g == "number" ? g : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...g
    }
      , Tt = Array.isArray(p) ? p : [p]
      , at = Tt.length > 0
      , ct = {
        padding: ht,
        boundary: Tt.filter(PN),
        altBoundary: at
    }
      , {refs: tt, floatingStyles: mt, placement: z, isPositioned: q, middlewareData: k} = EN({
        strategy: "fixed",
        placement: ot,
        whileElementsMounted: (...gt) => pN(...gt, {
            animationFrame: w === "always"
        }),
        elements: {
            reference: M.anchor
        },
        middleware: [MN({
            mainAxis: o + Y,
            alignmentAxis: f
        }), m && NN({
            mainAxis: !0,
            crossAxis: !1,
            limiter: x === "partial" ? DN() : void 0,
            ...ct
        }), m && RN({
            ...ct
        }), jN({
            ...ct,
            apply: ({elements: gt, rects: Qt, availableWidth: Ut, availableHeight: je}) => {
                const {width: Pe, height: ln} = Qt.reference
                  , Vn = gt.floating.style;
                Vn.setProperty("--radix-popper-available-width", `${Ut}px`),
                Vn.setProperty("--radix-popper-available-height", `${je}px`),
                Vn.setProperty("--radix-popper-anchor-width", `${Pe}px`),
                Vn.setProperty("--radix-popper-anchor-height", `${ln}px`)
            }
        }), G && _N({
            element: G,
            padding: h
        }), HN({
            arrowWidth: Z,
            arrowHeight: Y
        }), S && ON({
            strategy: "referenceHidden",
            ...ct
        })]
    })
      , [rt,xt] = i1(z)
      , D = Qi(E);
    Ki( () => {
        q && D?.()
    }
    , [q, D]);
    const K = k.arrow?.x
      , $ = k.arrow?.y
      , nt = k.arrow?.centerOffset !== 0
      , [St,At] = T.useState();
    return Ki( () => {
        j && At(window.getComputedStyle(j).zIndex)
    }
    , [j]),
    v.jsx("div", {
        ref: tt.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...mt,
            transform: q ? mt.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: St,
            "--radix-popper-transform-origin": [k.transformOrigin?.x, k.transformOrigin?.y].join(" "),
            ...k.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: v.jsx(UN, {
            scope: a,
            placedSide: rt,
            onArrowChange: H,
            arrowX: K,
            arrowY: $,
            shouldHideArrow: nt,
            children: v.jsx(Ze.div, {
                "data-side": rt,
                "data-align": xt,
                ...A,
                ref: V,
                style: {
                    ...A.style,
                    animation: q ? void 0 : "none"
                }
            })
        })
    })
}
);
t1.displayName = bh;
var e1 = "PopperArrow"
  , BN = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , n1 = T.forwardRef(function(i, a) {
    const {__scopePopper: r, ...o} = i
      , u = kN(e1, r)
      , f = BN[u.placedSide];
    return v.jsx("span", {
        ref: u.onArrowChange,
        style: {
            position: "absolute",
            left: u.arrowX,
            top: u.arrowY,
            [f]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[u.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[u.placedSide],
            visibility: u.shouldHideArrow ? "hidden" : void 0
        },
        children: v.jsx(zN, {
            ...o,
            ref: a,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
n1.displayName = e1;
function PN(e) {
    return e !== null
}
var HN = e => ({
    name: "transformOrigin",
    options: e,
    fn(i) {
        const {placement: a, rects: r, middlewareData: o} = i
          , f = o.arrow?.centerOffset !== 0
          , h = f ? 0 : e.arrowWidth
          , m = f ? 0 : e.arrowHeight
          , [p,g] = i1(a)
          , x = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[g]
          , S = (o.arrow?.x ?? 0) + h / 2
          , w = (o.arrow?.y ?? 0) + m / 2;
        let E = ""
          , A = "";
        return p === "bottom" ? (E = f ? x : `${S}px`,
        A = `${-m}px`) : p === "top" ? (E = f ? x : `${S}px`,
        A = `${r.floating.height + m}px`) : p === "right" ? (E = `${-m}px`,
        A = f ? x : `${w}px`) : p === "left" && (E = `${r.floating.width + m}px`,
        A = f ? x : `${w}px`),
        {
            data: {
                x: E,
                y: A
            }
        }
    }
});
function i1(e) {
    const [i,a="center"] = e.split("-");
    return [i, a]
}
var qN = $b
  , FN = t1
  , GN = n1
  , YN = Symbol("radix.slottable");
function XN(e) {
    const i = ({children: a}) => v.jsx(v.Fragment, {
        children: a
    });
    return i.displayName = `${e}.Slottable`,
    i.__radixId = YN,
    i
}
var [Sc] = hc("Tooltip", [Ib])
  , Sh = Ib()
  , s1 = "TooltipProvider"
  , QN = 700
  , Wv = "tooltip.open"
  , [KN,a1] = Sc(s1)
  , r1 = e => {
    const {__scopeTooltip: i, delayDuration: a=QN, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: u} = e
      , f = T.useRef(!0)
      , h = T.useRef(!1)
      , m = T.useRef(0);
    return T.useEffect( () => {
        const p = m.current;
        return () => window.clearTimeout(p)
    }
    , []),
    v.jsx(KN, {
        scope: i,
        isOpenDelayedRef: f,
        delayDuration: a,
        onOpen: T.useCallback( () => {
            window.clearTimeout(m.current),
            f.current = !1
        }
        , []),
        onClose: T.useCallback( () => {
            window.clearTimeout(m.current),
            m.current = window.setTimeout( () => f.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: h,
        onPointerInTransitChange: T.useCallback(p => {
            h.current = p
        }
        , []),
        disableHoverableContent: o,
        children: u
    })
}
;
r1.displayName = s1;
var l1 = "Tooltip"
  , [X_,el] = Sc(l1)
  , jd = "TooltipTrigger"
  , ZN = T.forwardRef( (e, i) => {
    const {__scopeTooltip: a, ...r} = e
      , o = el(jd, a)
      , u = a1(jd, a)
      , f = Sh(a)
      , h = T.useRef(null)
      , m = jn(i, h, o.onTriggerChange)
      , p = T.useRef(!1)
      , g = T.useRef(!1)
      , x = T.useCallback( () => p.current = !1, []);
    return T.useEffect( () => () => document.removeEventListener("pointerup", x), [x]),
    v.jsx(qN, {
        asChild: !0,
        ...f,
        children: v.jsx(Ze.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: m,
            onPointerMove: xe(e.onPointerMove, S => {
                S.pointerType !== "touch" && !g.current && !u.isPointerInTransitRef.current && (o.onTriggerEnter(),
                g.current = !0)
            }
            ),
            onPointerLeave: xe(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                g.current = !1
            }
            ),
            onPointerDown: xe(e.onPointerDown, () => {
                o.open && o.onClose(),
                p.current = !0,
                document.addEventListener("pointerup", x, {
                    once: !0
                })
            }
            ),
            onFocus: xe(e.onFocus, () => {
                p.current || o.onOpen()
            }
            ),
            onBlur: xe(e.onBlur, o.onClose),
            onClick: xe(e.onClick, o.onClose)
        })
    })
}
);
ZN.displayName = jd;
var wh = "TooltipPortal"
  , [IN,WN] = Sc(wh, {
    forceMount: void 0
})
  , o1 = e => {
    const {__scopeTooltip: i, forceMount: a, children: r, container: o} = e
      , u = el(wh, i);
    return v.jsx(IN, {
        scope: i,
        forceMount: a,
        children: v.jsx(mc, {
            present: a || u.open,
            children: v.jsx(ch, {
                asChild: !0,
                container: o,
                children: r
            })
        })
    })
}
;
o1.displayName = wh;
var Ma = "TooltipContent"
  , c1 = T.forwardRef( (e, i) => {
    const a = WN(Ma, e.__scopeTooltip)
      , {forceMount: r=a.forceMount, side: o="top", ...u} = e
      , f = el(Ma, e.__scopeTooltip);
    return v.jsx(mc, {
        present: r || f.open,
        children: f.disableHoverableContent ? v.jsx(u1, {
            side: o,
            ...u,
            ref: i
        }) : v.jsx(JN, {
            side: o,
            ...u,
            ref: i
        })
    })
}
)
  , JN = T.forwardRef( (e, i) => {
    const a = el(Ma, e.__scopeTooltip)
      , r = a1(Ma, e.__scopeTooltip)
      , o = T.useRef(null)
      , u = jn(i, o)
      , [f,h] = T.useState(null)
      , {trigger: m, onClose: p} = a
      , g = o.current
      , {onPointerInTransitChange: x} = r
      , S = T.useCallback( () => {
        h(null),
        x(!1)
    }
    , [x])
      , w = T.useCallback( (E, A) => {
        const M = E.currentTarget
          , j = {
            x: E.clientX,
            y: E.clientY
        }
          , O = iD(j, M.getBoundingClientRect())
          , V = sD(j, O)
          , G = aD(A.getBoundingClientRect())
          , H = lD([...V, ...G]);
        h(H),
        x(!0)
    }
    , [x]);
    return T.useEffect( () => () => S(), [S]),
    T.useEffect( () => {
        if (m && g) {
            const E = M => w(M, g)
              , A = M => w(M, m);
            return m.addEventListener("pointerleave", E),
            g.addEventListener("pointerleave", A),
            () => {
                m.removeEventListener("pointerleave", E),
                g.removeEventListener("pointerleave", A)
            }
        }
    }
    , [m, g, w, S]),
    T.useEffect( () => {
        if (f) {
            const E = A => {
                const M = A.target
                  , j = {
                    x: A.clientX,
                    y: A.clientY
                }
                  , O = m?.contains(M) || g?.contains(M)
                  , V = !rD(j, f);
                O ? S() : V && (S(),
                p())
            }
            ;
            return document.addEventListener("pointermove", E),
            () => document.removeEventListener("pointermove", E)
        }
    }
    , [m, g, f, p, S]),
    v.jsx(u1, {
        ...e,
        ref: u
    })
}
)
  , [$N,tD] = Sc(l1, {
    isInside: !1
})
  , eD = XN("TooltipContent")
  , u1 = T.forwardRef( (e, i) => {
    const {__scopeTooltip: a, children: r, "aria-label": o, onEscapeKeyDown: u, onPointerDownOutside: f, ...h} = e
      , m = el(Ma, a)
      , p = Sh(a)
      , {onClose: g} = m;
    return T.useEffect( () => (document.addEventListener(Wv, g),
    () => document.removeEventListener(Wv, g)), [g]),
    T.useEffect( () => {
        if (m.trigger) {
            const x = S => {
                S.target?.contains(m.trigger) && g()
            }
            ;
            return window.addEventListener("scroll", x, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", x, {
                capture: !0
            })
        }
    }
    , [m.trigger, g]),
    v.jsx(oh, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: u,
        onPointerDownOutside: f,
        onFocusOutside: x => x.preventDefault(),
        onDismiss: g,
        children: v.jsxs(FN, {
            "data-state": m.stateAttribute,
            ...p,
            ...h,
            ref: i,
            style: {
                ...h.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [v.jsx(eD, {
                children: r
            }), v.jsx($N, {
                scope: a,
                isInside: !0,
                children: v.jsx(mE, {
                    id: m.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
c1.displayName = Ma;
var f1 = "TooltipArrow"
  , nD = T.forwardRef( (e, i) => {
    const {__scopeTooltip: a, ...r} = e
      , o = Sh(a);
    return tD(f1, a).isInside ? null : v.jsx(GN, {
        ...o,
        ...r,
        ref: i
    })
}
);
nD.displayName = f1;
function iD(e, i) {
    const a = Math.abs(i.top - e.y)
      , r = Math.abs(i.bottom - e.y)
      , o = Math.abs(i.right - e.x)
      , u = Math.abs(i.left - e.x);
    switch (Math.min(a, r, o, u)) {
    case u:
        return "left";
    case o:
        return "right";
    case a:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function sD(e, i, a=5) {
    const r = [];
    switch (i) {
    case "top":
        r.push({
            x: e.x - a,
            y: e.y + a
        }, {
            x: e.x + a,
            y: e.y + a
        });
        break;
    case "bottom":
        r.push({
            x: e.x - a,
            y: e.y - a
        }, {
            x: e.x + a,
            y: e.y - a
        });
        break;
    case "left":
        r.push({
            x: e.x + a,
            y: e.y - a
        }, {
            x: e.x + a,
            y: e.y + a
        });
        break;
    case "right":
        r.push({
            x: e.x - a,
            y: e.y - a
        }, {
            x: e.x - a,
            y: e.y + a
        });
        break
    }
    return r
}
function aD(e) {
    const {top: i, right: a, bottom: r, left: o} = e;
    return [{
        x: o,
        y: i
    }, {
        x: a,
        y: i
    }, {
        x: a,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function rD(e, i) {
    const {x: a, y: r} = e;
    let o = !1;
    for (let u = 0, f = i.length - 1; u < i.length; f = u++) {
        const h = i[u]
          , m = i[f]
          , p = h.x
          , g = h.y
          , x = m.x
          , S = m.y;
        g > r != S > r && a < (x - p) * (r - g) / (S - g) + p && (o = !o)
    }
    return o
}
function lD(e) {
    const i = e.slice();
    return i.sort( (a, r) => a.x < r.x ? -1 : a.x > r.x ? 1 : a.y < r.y ? -1 : a.y > r.y ? 1 : 0),
    oD(i)
}
function oD(e) {
    if (e.length <= 1)
        return e.slice();
    const i = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; i.length >= 2; ) {
            const u = i[i.length - 1]
              , f = i[i.length - 2];
            if ((u.x - f.x) * (o.y - f.y) >= (u.y - f.y) * (o.x - f.x))
                i.pop();
            else
                break
        }
        i.push(o)
    }
    i.pop();
    const a = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; a.length >= 2; ) {
            const u = a[a.length - 1]
              , f = a[a.length - 2];
            if ((u.x - f.x) * (o.y - f.y) >= (u.y - f.y) * (o.x - f.x))
                a.pop();
            else
                break
        }
        a.push(o)
    }
    return a.pop(),
    i.length === 1 && a.length === 1 && i[0].x === a[0].x && i[0].y === a[0].y ? i : i.concat(a)
}
var cD = r1
  , uD = o1
  , d1 = c1;
const fD = cD
  , dD = T.forwardRef( ({className: e, sideOffset: i=4, ...a}, r) => v.jsx(uD, {
    children: v.jsx(d1, {
        ref: r,
        sideOffset: i,
        className: It("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]", e),
        ...a
    })
}));
dD.displayName = d1.displayName;
const Lr = T.forwardRef( ({className: e, ...i}, a) => v.jsx("div", {
    ref: a,
    className: It("rounded-xl border bg-card text-card-foreground shadow", e),
    ...i
}));
Lr.displayName = "Card";
const hD = T.forwardRef( ({className: e, ...i}, a) => v.jsx("div", {
    ref: a,
    className: It("flex flex-col space-y-1.5 p-6", e),
    ...i
}));
hD.displayName = "CardHeader";
const mD = T.forwardRef( ({className: e, ...i}, a) => v.jsx("div", {
    ref: a,
    className: It("font-semibold leading-none tracking-tight", e),
    ...i
}));
mD.displayName = "CardTitle";
const pD = T.forwardRef( ({className: e, ...i}, a) => v.jsx("div", {
    ref: a,
    className: It("text-sm text-muted-foreground", e),
    ...i
}));
pD.displayName = "CardDescription";
const h1 = T.forwardRef( ({className: e, ...i}, a) => v.jsx("div", {
    ref: a,
    className: It("p-6 pt-0", e),
    ...i
}));
h1.displayName = "CardContent";
const yD = T.forwardRef( ({className: e, ...i}, a) => v.jsx("div", {
    ref: a,
    className: It("flex items-center p-6 pt-0", e),
    ...i
}));
yD.displayName = "CardFooter";
var gD = Symbol.for("react.lazy")
  , Wo = ih[" use ".trim().toString()];
function vD(e) {
    return typeof e == "object" && e !== null && "then"in e
}
function m1(e) {
    return e != null && typeof e == "object" && "$$typeof"in e && e.$$typeof === gD && "_payload"in e && vD(e._payload)
}
function xD(e) {
    const i = SD(e)
      , a = T.forwardRef( (r, o) => {
        let {children: u, ...f} = r;
        m1(u) && typeof Wo == "function" && (u = Wo(u._payload));
        const h = T.Children.toArray(u)
          , m = h.find(TD);
        if (m) {
            const p = m.props.children
              , g = h.map(x => x === m ? T.Children.count(p) > 1 ? T.Children.only(null) : T.isValidElement(p) ? p.props.children : null : x);
            return v.jsx(i, {
                ...f,
                ref: o,
                children: T.isValidElement(p) ? T.cloneElement(p, void 0, g) : null
            })
        }
        return v.jsx(i, {
            ...f,
            ref: o,
            children: u
        })
    }
    );
    return a.displayName = `${e}.Slot`,
    a
}
var bD = xD("Slot");
function SD(e) {
    const i = T.forwardRef( (a, r) => {
        let {children: o, ...u} = a;
        if (m1(o) && typeof Wo == "function" && (o = Wo(o._payload)),
        T.isValidElement(o)) {
            const f = ED(o)
              , h = AD(u, o.props);
            return o.type !== T.Fragment && (h.ref = r ? dc(r, f) : f),
            T.cloneElement(o, h)
        }
        return T.Children.count(o) > 1 ? T.Children.only(null) : null
    }
    );
    return i.displayName = `${e}.SlotClone`,
    i
}
var wD = Symbol("radix.slottable");
function TD(e) {
    return T.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === wD
}
function AD(e, i) {
    const a = {
        ...i
    };
    for (const r in i) {
        const o = e[r]
          , u = i[r];
        /^on[A-Z]/.test(r) ? o && u ? a[r] = (...h) => {
            const m = u(...h);
            return o(...h),
            m
        }
        : o && (a[r] = o) : r === "style" ? a[r] = {
            ...o,
            ...u
        } : r === "className" && (a[r] = [o, u].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...a
    }
}
function ED(e) {
    let i = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
      , a = i && "isReactWarning"in i && i.isReactWarning;
    return a ? e.ref : (i = Object.getOwnPropertyDescriptor(e, "ref")?.get,
    a = i && "isReactWarning"in i && i.isReactWarning,
    a ? e.props.ref : e.props.ref || e.ref)
}
const CD = db("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground border border-primary-border",
            destructive: "bg-destructive text-destructive-foreground shadow-sm border-destructive-border",
            outline: " border [border-color:var(--button-outline)] shadow-xs active:shadow-none ",
            secondary: "border bg-secondary text-secondary-foreground border border-secondary-border ",
            ghost: "border border-transparent",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "min-h-9 px-4 py-2",
            sm: "min-h-8 rounded-md px-3 text-xs",
            lg: "min-h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , bn = T.forwardRef( ({className: e, variant: i, size: a, asChild: r=!1, ...o}, u) => {
    const f = r ? bD : "button";
    return v.jsx(f, {
        className: It(CD({
            variant: i,
            size: a,
            className: e
        })),
        ref: u,
        ...o
    })
}
);
bn.displayName = "Button";
const Od = [{
    name: "Home",
    href: "/"
}, {
    name: "About",
    href: "/about"
}, {
    name: "Products",
    href: "/products"
}, {
    name: "Infrastructure",
    href: "/infrastructure"
}, {
    name: "Quality",
    href: "/quality"
}, {
    name: "Contact",
    href: "/contact"
}];
function MD() {
    const [e,i] = T.useState(!1)
      , [a] = QA()
      , [r,o] = T.useState(!1);
    return T.useEffect( () => {
        const u = () => {
            o(window.scrollY > 20)
        }
        ;
        return window.addEventListener("scroll", u),
        () => window.removeEventListener("scroll", u)
    }
    , []),
    v.jsxs("nav", {
        className: It("fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent", r ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-2" : "bg-transparent py-4 text-white"),
        children: [v.jsxs("div", {
            className: "container mx-auto px-4 md:px-6 flex items-center justify-between",
            children: [v.jsx(be, {
                href: "/",
                children: v.jsxs("div", {
                    className: It("text-2xl font-bold tracking-tight flex items-center gap-2 cursor-pointer", r ? "text-primary" : "text-white"),
                    children: [v.jsx("img", {
                        src: "/images/logo-symbol.png",
                        alt: "Mulpuri Logo",
                        className: "h-10 w-10 object-contain"
                    }), v.jsxs("div", {
                        className: "flex flex-col",
                        children: [v.jsx("span", {
                            className: "font-heading font-extrabold tracking-tighter leading-none",
                            children: "MULPURI"
                        }), v.jsx("span", {
                            className: It("text-[10px] font-semibold tracking-[0.2em] mt-0.5 uppercase", r ? "text-primary/60" : "text-white/70"),
                            children: "Aqua Processors"
                        })]
                    })]
                })
            }), v.jsxs("div", {
                className: "hidden md:flex items-center gap-8",
                children: [Od.map(u => v.jsx(be, {
                    href: u.href,
                    children: v.jsxs("div", {
                        className: It("text-sm font-medium transition-colors hover:text-accent relative group cursor-pointer", a === u.href ? "text-accent font-semibold" : r ? "text-slate-600" : "text-slate-100"),
                        children: [u.name, v.jsx("span", {
                            className: It("absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full", a === u.href ? "w-full" : "")
                        })]
                    })
                }, u.href)), v.jsx(be, {
                    href: "/contact",
                    children: v.jsx(bn, {
                        size: "sm",
                        className: It("font-semibold transition-transform hover:scale-105", r ? "bg-primary hover:bg-primary/90" : "bg-white text-primary hover:bg-white/90"),
                        children: "Get Quote"
                    })
                })]
            }), v.jsx("button", {
                className: "md:hidden p-2",
                onClick: () => i(!e),
                "aria-label": "Toggle menu",
                children: e ? v.jsx(vb, {
                    className: It("h-6 w-6", r ? "text-slate-900" : "text-white")
                }) : v.jsx(mC, {
                    className: It("h-6 w-6", r ? "text-slate-900" : "text-white")
                })
            })]
        }), e && v.jsx("div", {
            className: "md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl animate-in slide-in-from-top-5",
            children: v.jsxs("div", {
                className: "flex flex-col p-4 gap-4",
                children: [Od.map(u => v.jsx(be, {
                    href: u.href,
                    children: v.jsx("div", {
                        className: It("text-lg font-medium p-2 rounded-md transition-colors cursor-pointer", a === u.href ? "bg-primary/5 text-primary" : "text-slate-600 hover:bg-slate-50"),
                        onClick: () => i(!1),
                        children: u.name
                    })
                }, u.href)), v.jsx(be, {
                    href: "/contact",
                    children: v.jsx(bn, {
                        className: "w-full mt-2",
                        onClick: () => i(!1),
                        children: "Contact Us"
                    })
                })]
            })
        })]
    })
}
function ND() {
    return v.jsx("footer", {
        className: "bg-primary text-slate-200 pt-16 pb-8",
        children: v.jsxs("div", {
            className: "container mx-auto px-4 md:px-6",
            children: [v.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12",
                children: [v.jsxs("div", {
                    className: "space-y-4",
                    children: [v.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [v.jsx("img", {
                            src: "/images/logo-symbol.png",
                            alt: "Mulpuri Logo",
                            className: "h-8 w-8 brightness-0 invert"
                        }), v.jsx("h3", {
                            className: "text-2xl font-bold text-white font-heading tracking-tight",
                            children: "MULPURI"
                        })]
                    }), v.jsx("p", {
                        className: "text-slate-400 text-sm leading-relaxed max-w-xs",
                        children: "Premium, sustainably sourced seafood delivered to discerning markets across the US, Europe, and the Middle East."
                    }), v.jsxs("div", {
                        className: "flex gap-4 pt-2",
                        children: [v.jsx("a", {
                            href: "#",
                            className: "p-2 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-colors",
                            children: v.jsx(uC, {
                                className: "h-4 w-4"
                            })
                        }), v.jsx("a", {
                            href: "#",
                            className: "p-2 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-colors",
                            children: v.jsx(nC, {
                                className: "h-4 w-4"
                            })
                        }), v.jsx("a", {
                            href: "#",
                            className: "p-2 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-colors",
                            children: v.jsx(oC, {
                                className: "h-4 w-4"
                            })
                        })]
                    })]
                }), v.jsxs("div", {
                    children: [v.jsx("h4", {
                        className: "text-white font-bold mb-6 font-heading",
                        children: "Quick Links"
                    }), v.jsx("ul", {
                        className: "space-y-3",
                        children: Od.map(e => v.jsx("li", {
                            children: v.jsx(be, {
                                href: e.href,
                                children: v.jsxs("div", {
                                    className: "text-sm hover:text-accent transition-colors flex items-center gap-2 group cursor-pointer",
                                    children: [v.jsx(XE, {
                                        className: "h-3 w-3 text-accent opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                                    }), e.name]
                                })
                            })
                        }, e.href))
                    })]
                }), v.jsxs("div", {
                    children: [v.jsx("h4", {
                        className: "text-white font-bold mb-6 font-heading",
                        children: "Our Products"
                    }), v.jsxs("ul", {
                        className: "space-y-3",
                        children: [v.jsx("li", {
                            children: v.jsx(be, {
                                href: "/products#whole-round",
                                children: v.jsx("div", {
                                    className: "text-sm hover:text-accent transition-colors cursor-pointer",
                                    children: "Frozen Whole Round"
                                })
                            })
                        }), v.jsx("li", {
                            children: v.jsx(be, {
                                href: "/products#wgs",
                                children: v.jsx("div", {
                                    className: "text-sm hover:text-accent transition-colors cursor-pointer",
                                    children: "Frozen Whole G&S"
                                })
                            })
                        }), v.jsx("li", {
                            children: v.jsx(be, {
                                href: "/products#fillets",
                                children: v.jsx("div", {
                                    className: "text-sm hover:text-accent transition-colors cursor-pointer",
                                    children: "Tilapia Fillets"
                                })
                            })
                        }), v.jsx("li", {
                            children: v.jsx(be, {
                                href: "/products#pangasius",
                                children: v.jsx("div", {
                                    className: "text-sm hover:text-accent transition-colors cursor-pointer",
                                    children: "Pangasius Fillets"
                                })
                            })
                        })]
                    })]
                }), v.jsxs("div", {
                    children: [v.jsx("h4", {
                        className: "text-white font-bold mb-6 font-heading",
                        children: "Contact Us"
                    }), v.jsxs("ul", {
                        className: "space-y-4",
                        children: [v.jsxs("li", {
                            className: "flex items-start gap-3",
                            children: [v.jsx(yb, {
                                className: "h-5 w-5 text-accent shrink-0 mt-0.5"
                            }), v.jsxs("span", {
                                className: "text-sm",
                                children: ["Arugolanu, Krishna District,", v.jsx("br", {}), "Andhra Pradesh, India"]
                            })]
                        }), v.jsxs("li", {
                            className: "flex items-center gap-3",
                            children: [v.jsx(pb, {
                                className: "h-5 w-5 text-accent shrink-0"
                            }), v.jsx("a", {
                                href: "mailto:map@mulpuri.org",
                                className: "text-sm hover:text-accent transition-colors",
                                children: "map@mulpuri.org"
                            })]
                        }), v.jsxs("li", {
                            className: "flex items-center gap-3",
                            children: [v.jsx(gb, {
                                className: "h-5 w-5 text-accent shrink-0"
                            }), v.jsx("a", {
                                href: "tel:+910000000000",
                                className: "text-sm hover:text-accent transition-colors",
                                children: "+91 (000) 000-0000"
                            })]
                        })]
                    })]
                })]
            }), v.jsxs("div", {
                className: "border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500",
                children: [v.jsxs("p", {
                    children: ["© ", new Date().getFullYear(), " Mulpuri Aqua Processors. All rights reserved."]
                }), v.jsxs("div", {
                    className: "flex gap-6",
                    children: [v.jsx("a", {
                        href: "#",
                        className: "hover:text-white transition-colors",
                        children: "Privacy Policy"
                    }), v.jsx("a", {
                        href: "#",
                        className: "hover:text-white transition-colors",
                        children: "Terms of Service"
                    }), v.jsx("a", {
                        href: "#",
                        className: "hover:text-white transition-colors",
                        children: "Sitemap"
                    })]
                })]
            })]
        })
    })
}
function Ds({children: e}) {
    return v.jsxs("div", {
        className: "flex flex-col min-h-screen font-sans bg-slate-50/50",
        children: [v.jsx(MD, {}), v.jsx("main", {
            className: "flex-grow pt-0",
            children: e
        }), v.jsx(ND, {})]
    })
}
function DD() {
    return v.jsx(Ds, {
        children: v.jsx("div", {
            className: "min-h-[80vh] w-full flex items-center justify-center bg-gray-50",
            children: v.jsx(Lr, {
                className: "w-full max-w-md mx-4 shadow-xl border-slate-200",
                children: v.jsxs(h1, {
                    className: "pt-6",
                    children: [v.jsxs("div", {
                        className: "flex mb-4 gap-2",
                        children: [v.jsx(KE, {
                            className: "h-8 w-8 text-red-500"
                        }), v.jsx("h1", {
                            className: "text-2xl font-bold text-gray-900 font-heading",
                            children: "404 Page Not Found"
                        })]
                    }), v.jsx("p", {
                        className: "mt-4 text-sm text-gray-600 mb-6",
                        children: "The page you are looking for does not exist. It might have been moved or deleted."
                    }), v.jsx(be, {
                        href: "/",
                        children: v.jsx(bn, {
                            className: "w-full bg-primary text-white hover:bg-secondary",
                            children: "Return to Home"
                        })
                    })]
                })
            })
        })
    })
}
const p1 = T.createContext({});
function RD(e) {
    const i = T.useRef(null);
    return i.current === null && (i.current = e()),
    i.current
}
const y1 = typeof window < "u"
  , jD = y1 ? T.useLayoutEffect : T.useEffect
  , Th = T.createContext(null);
function Ah(e, i) {
    e.indexOf(i) === -1 && e.push(i)
}
function Eh(e, i) {
    const a = e.indexOf(i);
    a > -1 && e.splice(a, 1)
}
const Yn = (e, i, a) => a > i ? i : a < e ? e : a;
let Ch = () => {}
;
const vi = {}
  , g1 = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function v1(e) {
    return typeof e == "object" && e !== null
}
const x1 = e => /^0[^.\s]+$/u.test(e);
function Mh(e) {
    let i;
    return () => (i === void 0 && (i = e()),
    i)
}
const wn = e => e
  , OD = (e, i) => a => i(e(a))
  , nl = (...e) => e.reduce(OD)
  , Qr = (e, i, a) => {
    const r = i - e;
    return r === 0 ? 1 : (a - e) / r
}
;
class Nh {
    constructor() {
        this.subscriptions = []
    }
    add(i) {
        return Ah(this.subscriptions, i),
        () => Eh(this.subscriptions, i)
    }
    notify(i, a, r) {
        const o = this.subscriptions.length;
        if (o)
            if (o === 1)
                this.subscriptions[0](i, a, r);
            else
                for (let u = 0; u < o; u++) {
                    const f = this.subscriptions[u];
                    f && f(i, a, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const pi = e => e * 1e3
  , Sn = e => e / 1e3;
function b1(e, i) {
    return i ? e * (1e3 / i) : 0
}
const S1 = (e, i, a) => (((1 - 3 * a + 3 * i) * e + (3 * a - 6 * i)) * e + 3 * i) * e
  , _D = 1e-7
  , VD = 12;
function zD(e, i, a, r, o) {
    let u, f, h = 0;
    do
        f = i + (a - i) / 2,
        u = S1(f, r, o) - e,
        u > 0 ? a = f : i = f;
    while (Math.abs(u) > _D && ++h < VD);
    return f
}
function il(e, i, a, r) {
    if (e === i && a === r)
        return wn;
    const o = u => zD(u, 0, 1, e, a);
    return u => u === 0 || u === 1 ? u : S1(o(u), i, r)
}
const w1 = e => i => i <= .5 ? e(2 * i) / 2 : (2 - e(2 * (1 - i))) / 2
  , T1 = e => i => 1 - e(1 - i)
  , A1 = il(.33, 1.53, .69, .99)
  , Dh = T1(A1)
  , E1 = w1(Dh)
  , C1 = e => (e *= 2) < 1 ? .5 * Dh(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , Rh = e => 1 - Math.sin(Math.acos(e))
  , M1 = T1(Rh)
  , N1 = w1(Rh)
  , LD = il(.42, 0, 1, 1)
  , UD = il(0, 0, .58, 1)
  , D1 = il(.42, 0, .58, 1)
  , kD = e => Array.isArray(e) && typeof e[0] != "number"
  , R1 = e => Array.isArray(e) && typeof e[0] == "number"
  , BD = {
    linear: wn,
    easeIn: LD,
    easeInOut: D1,
    easeOut: UD,
    circIn: Rh,
    circInOut: N1,
    circOut: M1,
    backIn: Dh,
    backInOut: E1,
    backOut: A1,
    anticipate: C1
}
  , PD = e => typeof e == "string"
  , Jv = e => {
    if (R1(e)) {
        Ch(e.length === 4);
        const [i,a,r,o] = e;
        return il(i, a, r, o)
    } else if (PD(e))
        return BD[e];
    return e
}
  , Vo = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function HD(e, i) {
    let a = new Set
      , r = new Set
      , o = !1
      , u = !1;
    const f = new WeakSet;
    let h = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function m(g) {
        f.has(g) && (p.schedule(g),
        e()),
        g(h)
    }
    const p = {
        schedule: (g, x=!1, S=!1) => {
            const E = S && o ? a : r;
            return x && f.add(g),
            E.has(g) || E.add(g),
            g
        }
        ,
        cancel: g => {
            r.delete(g),
            f.delete(g)
        }
        ,
        process: g => {
            if (h = g,
            o) {
                u = !0;
                return
            }
            o = !0,
            [a,r] = [r, a],
            a.forEach(m),
            a.clear(),
            o = !1,
            u && (u = !1,
            p.process(g))
        }
    };
    return p
}
const qD = 40;
function j1(e, i) {
    let a = !1
      , r = !0;
    const o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , u = () => a = !0
      , f = Vo.reduce( (V, G) => (V[G] = HD(u),
    V), {})
      , {setup: h, read: m, resolveKeyframes: p, preUpdate: g, update: x, preRender: S, render: w, postRender: E} = f
      , A = () => {
        const V = vi.useManualTiming ? o.timestamp : performance.now();
        a = !1,
        vi.useManualTiming || (o.delta = r ? 1e3 / 60 : Math.max(Math.min(V - o.timestamp, qD), 1)),
        o.timestamp = V,
        o.isProcessing = !0,
        h.process(o),
        m.process(o),
        p.process(o),
        g.process(o),
        x.process(o),
        S.process(o),
        w.process(o),
        E.process(o),
        o.isProcessing = !1,
        a && i && (r = !1,
        e(A))
    }
      , M = () => {
        a = !0,
        r = !0,
        o.isProcessing || e(A)
    }
    ;
    return {
        schedule: Vo.reduce( (V, G) => {
            const H = f[G];
            return V[G] = (J, Z=!1, Y=!1) => (a || M(),
            H.schedule(J, Z, Y)),
            V
        }
        , {}),
        cancel: V => {
            for (let G = 0; G < Vo.length; G++)
                f[Vo[G]].cancel(V)
        }
        ,
        state: o,
        steps: f
    }
}
const {schedule: Wt, cancel: Wi, state: Re, steps: nd} = j1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : wn, !0);
let Ho;
function FD() {
    Ho = void 0
}
const ke = {
    now: () => (Ho === void 0 && ke.set(Re.isProcessing || vi.useManualTiming ? Re.timestamp : performance.now()),
    Ho),
    set: e => {
        Ho = e,
        queueMicrotask(FD)
    }
}
  , O1 = e => i => typeof i == "string" && i.startsWith(e)
  , _1 = O1("--")
  , GD = O1("var(--")
  , jh = e => GD(e) ? YD.test(e.split("/*")[0].trim()) : !1
  , YD = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function $v(e) {
    return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--")
}
const _a = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , Kr = {
    ..._a,
    transform: e => Yn(0, 1, e)
}
  , zo = {
    ..._a,
    default: 1
}
  , Ur = e => Math.round(e * 1e5) / 1e5
  , Oh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function XD(e) {
    return e == null
}
const QD = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , _h = (e, i) => a => !!(typeof a == "string" && QD.test(a) && a.startsWith(e) || i && !XD(a) && Object.prototype.hasOwnProperty.call(a, i))
  , V1 = (e, i, a) => r => {
    if (typeof r != "string")
        return r;
    const [o,u,f,h] = r.match(Oh);
    return {
        [e]: parseFloat(o),
        [i]: parseFloat(u),
        [a]: parseFloat(f),
        alpha: h !== void 0 ? parseFloat(h) : 1
    }
}
  , KD = e => Yn(0, 255, e)
  , id = {
    ..._a,
    transform: e => Math.round(KD(e))
}
  , As = {
    test: _h("rgb", "red"),
    parse: V1("red", "green", "blue"),
    transform: ({red: e, green: i, blue: a, alpha: r=1}) => "rgba(" + id.transform(e) + ", " + id.transform(i) + ", " + id.transform(a) + ", " + Ur(Kr.transform(r)) + ")"
};
function ZD(e) {
    let i = ""
      , a = ""
      , r = ""
      , o = "";
    return e.length > 5 ? (i = e.substring(1, 3),
    a = e.substring(3, 5),
    r = e.substring(5, 7),
    o = e.substring(7, 9)) : (i = e.substring(1, 2),
    a = e.substring(2, 3),
    r = e.substring(3, 4),
    o = e.substring(4, 5),
    i += i,
    a += a,
    r += r,
    o += o),
    {
        red: parseInt(i, 16),
        green: parseInt(a, 16),
        blue: parseInt(r, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1
    }
}
const _d = {
    test: _h("#"),
    parse: ZD,
    transform: As.transform
}
  , sl = e => ({
    test: i => typeof i == "string" && i.endsWith(e) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: i => `${i}${e}`
})
  , Gi = sl("deg")
  , Fn = sl("%")
  , lt = sl("px")
  , ID = sl("vh")
  , WD = sl("vw")
  , t0 = {
    ...Fn,
    parse: e => Fn.parse(e) / 100,
    transform: e => Fn.transform(e * 100)
}
  , ba = {
    test: _h("hsl", "hue"),
    parse: V1("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: i, lightness: a, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + Fn.transform(Ur(i)) + ", " + Fn.transform(Ur(a)) + ", " + Ur(Kr.transform(r)) + ")"
}
  , he = {
    test: e => As.test(e) || _d.test(e) || ba.test(e),
    parse: e => As.test(e) ? As.parse(e) : ba.test(e) ? ba.parse(e) : _d.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? As.transform(e) : ba.transform(e),
    getAnimatableNone: e => {
        const i = he.parse(e);
        return i.alpha = 0,
        he.transform(i)
    }
}
  , JD = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function $D(e) {
    return isNaN(e) && typeof e == "string" && (e.match(Oh)?.length || 0) + (e.match(JD)?.length || 0) > 0
}
const z1 = "number"
  , L1 = "color"
  , tR = "var"
  , eR = "var("
  , e0 = "${}"
  , nR = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Zr(e) {
    const i = e.toString()
      , a = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , o = [];
    let u = 0;
    const h = i.replace(nR, m => (he.test(m) ? (r.color.push(u),
    o.push(L1),
    a.push(he.parse(m))) : m.startsWith(eR) ? (r.var.push(u),
    o.push(tR),
    a.push(m)) : (r.number.push(u),
    o.push(z1),
    a.push(parseFloat(m))),
    ++u,
    e0)).split(e0);
    return {
        values: a,
        split: h,
        indexes: r,
        types: o
    }
}
function U1(e) {
    return Zr(e).values
}
function k1(e) {
    const {split: i, types: a} = Zr(e)
      , r = i.length;
    return o => {
        let u = "";
        for (let f = 0; f < r; f++)
            if (u += i[f],
            o[f] !== void 0) {
                const h = a[f];
                h === z1 ? u += Ur(o[f]) : h === L1 ? u += he.transform(o[f]) : u += o[f]
            }
        return u
    }
}
const iR = e => typeof e == "number" ? 0 : he.test(e) ? he.getAnimatableNone(e) : e;
function sR(e) {
    const i = U1(e);
    return k1(e)(i.map(iR))
}
const Ji = {
    test: $D,
    parse: U1,
    createTransformer: k1,
    getAnimatableNone: sR
};
function sd(e, i, a) {
    return a < 0 && (a += 1),
    a > 1 && (a -= 1),
    a < 1 / 6 ? e + (i - e) * 6 * a : a < 1 / 2 ? i : a < 2 / 3 ? e + (i - e) * (2 / 3 - a) * 6 : e
}
function aR({hue: e, saturation: i, lightness: a, alpha: r}) {
    e /= 360,
    i /= 100,
    a /= 100;
    let o = 0
      , u = 0
      , f = 0;
    if (!i)
        o = u = f = a;
    else {
        const h = a < .5 ? a * (1 + i) : a + i - a * i
          , m = 2 * a - h;
        o = sd(m, h, e + 1 / 3),
        u = sd(m, h, e),
        f = sd(m, h, e - 1 / 3)
    }
    return {
        red: Math.round(o * 255),
        green: Math.round(u * 255),
        blue: Math.round(f * 255),
        alpha: r
    }
}
function Jo(e, i) {
    return a => a > 0 ? i : e
}
const ne = (e, i, a) => e + (i - e) * a
  , ad = (e, i, a) => {
    const r = e * e
      , o = a * (i * i - r) + r;
    return o < 0 ? 0 : Math.sqrt(o)
}
  , rR = [_d, As, ba]
  , lR = e => rR.find(i => i.test(e));
function n0(e) {
    const i = lR(e);
    if (!i)
        return !1;
    let a = i.parse(e);
    return i === ba && (a = aR(a)),
    a
}
const i0 = (e, i) => {
    const a = n0(e)
      , r = n0(i);
    if (!a || !r)
        return Jo(e, i);
    const o = {
        ...a
    };
    return u => (o.red = ad(a.red, r.red, u),
    o.green = ad(a.green, r.green, u),
    o.blue = ad(a.blue, r.blue, u),
    o.alpha = ne(a.alpha, r.alpha, u),
    As.transform(o))
}
  , Vd = new Set(["none", "hidden"]);
function oR(e, i) {
    return Vd.has(e) ? a => a <= 0 ? e : i : a => a >= 1 ? i : e
}
function cR(e, i) {
    return a => ne(e, i, a)
}
function Vh(e) {
    return typeof e == "number" ? cR : typeof e == "string" ? jh(e) ? Jo : he.test(e) ? i0 : dR : Array.isArray(e) ? B1 : typeof e == "object" ? he.test(e) ? i0 : uR : Jo
}
function B1(e, i) {
    const a = [...e]
      , r = a.length
      , o = e.map( (u, f) => Vh(u)(u, i[f]));
    return u => {
        for (let f = 0; f < r; f++)
            a[f] = o[f](u);
        return a
    }
}
function uR(e, i) {
    const a = {
        ...e,
        ...i
    }
      , r = {};
    for (const o in a)
        e[o] !== void 0 && i[o] !== void 0 && (r[o] = Vh(e[o])(e[o], i[o]));
    return o => {
        for (const u in r)
            a[u] = r[u](o);
        return a
    }
}
function fR(e, i) {
    const a = []
      , r = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let o = 0; o < i.values.length; o++) {
        const u = i.types[o]
          , f = e.indexes[u][r[u]]
          , h = e.values[f] ?? 0;
        a[o] = h,
        r[u]++
    }
    return a
}
const dR = (e, i) => {
    const a = Ji.createTransformer(i)
      , r = Zr(e)
      , o = Zr(i);
    return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? Vd.has(e) && !o.values.length || Vd.has(i) && !r.values.length ? oR(e, i) : nl(B1(fR(r, o), o.values), a) : Jo(e, i)
}
;
function P1(e, i, a) {
    return typeof e == "number" && typeof i == "number" && typeof a == "number" ? ne(e, i, a) : Vh(e)(e, i)
}
const hR = e => {
    const i = ({timestamp: a}) => e(a);
    return {
        start: (a=!0) => Wt.update(i, a),
        stop: () => Wi(i),
        now: () => Re.isProcessing ? Re.timestamp : ke.now()
    }
}
  , H1 = (e, i, a=10) => {
    let r = "";
    const o = Math.max(Math.round(i / a), 2);
    for (let u = 0; u < o; u++)
        r += Math.round(e(u / (o - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
}
  , $o = 2e4;
function zh(e) {
    let i = 0;
    const a = 50;
    let r = e.next(i);
    for (; !r.done && i < $o; )
        i += a,
        r = e.next(i);
    return i >= $o ? 1 / 0 : i
}
function mR(e, i=100, a) {
    const r = a({
        ...e,
        keyframes: [0, i]
    })
      , o = Math.min(zh(r), $o);
    return {
        type: "keyframes",
        ease: u => r.next(o * u).value / i,
        duration: Sn(o)
    }
}
const pR = 5;
function q1(e, i, a) {
    const r = Math.max(i - pR, 0);
    return b1(a - e(r), i - r)
}
const ae = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , rd = .001;
function yR({duration: e=ae.duration, bounce: i=ae.bounce, velocity: a=ae.velocity, mass: r=ae.mass}) {
    let o, u, f = 1 - i;
    f = Yn(ae.minDamping, ae.maxDamping, f),
    e = Yn(ae.minDuration, ae.maxDuration, Sn(e)),
    f < 1 ? (o = p => {
        const g = p * f
          , x = g * e
          , S = g - a
          , w = zd(p, f)
          , E = Math.exp(-x);
        return rd - S / w * E
    }
    ,
    u = p => {
        const x = p * f * e
          , S = x * a + a
          , w = Math.pow(f, 2) * Math.pow(p, 2) * e
          , E = Math.exp(-x)
          , A = zd(Math.pow(p, 2), f);
        return (-o(p) + rd > 0 ? -1 : 1) * ((S - w) * E) / A
    }
    ) : (o = p => {
        const g = Math.exp(-p * e)
          , x = (p - a) * e + 1;
        return -rd + g * x
    }
    ,
    u = p => {
        const g = Math.exp(-p * e)
          , x = (a - p) * (e * e);
        return g * x
    }
    );
    const h = 5 / e
      , m = vR(o, u, h);
    if (e = pi(e),
    isNaN(m))
        return {
            stiffness: ae.stiffness,
            damping: ae.damping,
            duration: e
        };
    {
        const p = Math.pow(m, 2) * r;
        return {
            stiffness: p,
            damping: f * 2 * Math.sqrt(r * p),
            duration: e
        }
    }
}
const gR = 12;
function vR(e, i, a) {
    let r = a;
    for (let o = 1; o < gR; o++)
        r = r - e(r) / i(r);
    return r
}
function zd(e, i) {
    return e * Math.sqrt(1 - i * i)
}
const xR = ["duration", "bounce"]
  , bR = ["stiffness", "damping", "mass"];
function s0(e, i) {
    return i.some(a => e[a] !== void 0)
}
function SR(e) {
    let i = {
        velocity: ae.velocity,
        stiffness: ae.stiffness,
        damping: ae.damping,
        mass: ae.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!s0(e, bR) && s0(e, xR))
        if (e.visualDuration) {
            const a = e.visualDuration
              , r = 2 * Math.PI / (a * 1.2)
              , o = r * r
              , u = 2 * Yn(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
            i = {
                ...i,
                mass: ae.mass,
                stiffness: o,
                damping: u
            }
        } else {
            const a = yR(e);
            i = {
                ...i,
                ...a,
                mass: ae.mass
            },
            i.isResolvedFromDuration = !0
        }
    return i
}
function tc(e=ae.visualDuration, i=ae.bounce) {
    const a = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: i
    } : e;
    let {restSpeed: r, restDelta: o} = a;
    const u = a.keyframes[0]
      , f = a.keyframes[a.keyframes.length - 1]
      , h = {
        done: !1,
        value: u
    }
      , {stiffness: m, damping: p, mass: g, duration: x, velocity: S, isResolvedFromDuration: w} = SR({
        ...a,
        velocity: -Sn(a.velocity || 0)
    })
      , E = S || 0
      , A = p / (2 * Math.sqrt(m * g))
      , M = f - u
      , j = Sn(Math.sqrt(m / g))
      , O = Math.abs(M) < 5;
    r || (r = O ? ae.restSpeed.granular : ae.restSpeed.default),
    o || (o = O ? ae.restDelta.granular : ae.restDelta.default);
    let V;
    if (A < 1) {
        const H = zd(j, A);
        V = J => {
            const Z = Math.exp(-A * j * J);
            return f - Z * ((E + A * j * M) / H * Math.sin(H * J) + M * Math.cos(H * J))
        }
    } else if (A === 1)
        V = H => f - Math.exp(-j * H) * (M + (E + j * M) * H);
    else {
        const H = j * Math.sqrt(A * A - 1);
        V = J => {
            const Z = Math.exp(-A * j * J)
              , Y = Math.min(H * J, 300);
            return f - Z * ((E + A * j * M) * Math.sinh(Y) + H * M * Math.cosh(Y)) / H
        }
    }
    const G = {
        calculatedDuration: w && x || null,
        next: H => {
            const J = V(H);
            if (w)
                h.done = H >= x;
            else {
                let Z = H === 0 ? E : 0;
                A < 1 && (Z = H === 0 ? pi(E) : q1(V, H, J));
                const Y = Math.abs(Z) <= r
                  , ot = Math.abs(f - J) <= o;
                h.done = Y && ot
            }
            return h.value = h.done ? f : J,
            h
        }
        ,
        toString: () => {
            const H = Math.min(zh(G), $o)
              , J = H1(Z => G.next(H * Z).value, H, 30);
            return H + "ms " + J
        }
        ,
        toTransition: () => {}
    };
    return G
}
tc.applyToOptions = e => {
    const i = mR(e, 100, tc);
    return e.ease = i.ease,
    e.duration = pi(i.duration),
    e.type = "keyframes",
    e
}
;
function Ld({keyframes: e, velocity: i=0, power: a=.8, timeConstant: r=325, bounceDamping: o=10, bounceStiffness: u=500, modifyTarget: f, min: h, max: m, restDelta: p=.5, restSpeed: g}) {
    const x = e[0]
      , S = {
        done: !1,
        value: x
    }
      , w = Y => h !== void 0 && Y < h || m !== void 0 && Y > m
      , E = Y => h === void 0 ? m : m === void 0 || Math.abs(h - Y) < Math.abs(m - Y) ? h : m;
    let A = a * i;
    const M = x + A
      , j = f === void 0 ? M : f(M);
    j !== M && (A = j - x);
    const O = Y => -A * Math.exp(-Y / r)
      , V = Y => j + O(Y)
      , G = Y => {
        const ot = O(Y)
          , ht = V(Y);
        S.done = Math.abs(ot) <= p,
        S.value = S.done ? j : ht
    }
    ;
    let H, J;
    const Z = Y => {
        w(S.value) && (H = Y,
        J = tc({
            keyframes: [S.value, E(S.value)],
            velocity: q1(V, Y, S.value),
            damping: o,
            stiffness: u,
            restDelta: p,
            restSpeed: g
        }))
    }
    ;
    return Z(0),
    {
        calculatedDuration: null,
        next: Y => {
            let ot = !1;
            return !J && H === void 0 && (ot = !0,
            G(Y),
            Z(Y)),
            H !== void 0 && Y >= H ? J.next(Y - H) : (!ot && G(Y),
            S)
        }
    }
}
function wR(e, i, a) {
    const r = []
      , o = a || vi.mix || P1
      , u = e.length - 1;
    for (let f = 0; f < u; f++) {
        let h = o(e[f], e[f + 1]);
        if (i) {
            const m = Array.isArray(i) ? i[f] || wn : i;
            h = nl(m, h)
        }
        r.push(h)
    }
    return r
}
function TR(e, i, {clamp: a=!0, ease: r, mixer: o}={}) {
    const u = e.length;
    if (Ch(u === i.length),
    u === 1)
        return () => i[0];
    if (u === 2 && i[0] === i[1])
        return () => i[1];
    const f = e[0] === e[1];
    e[0] > e[u - 1] && (e = [...e].reverse(),
    i = [...i].reverse());
    const h = wR(i, r, o)
      , m = h.length
      , p = g => {
        if (f && g < e[0])
            return i[0];
        let x = 0;
        if (m > 1)
            for (; x < e.length - 2 && !(g < e[x + 1]); x++)
                ;
        const S = Qr(e[x], e[x + 1], g);
        return h[x](S)
    }
    ;
    return a ? g => p(Yn(e[0], e[u - 1], g)) : p
}
function AR(e, i) {
    const a = e[e.length - 1];
    for (let r = 1; r <= i; r++) {
        const o = Qr(0, i, r);
        e.push(ne(a, 1, o))
    }
}
function ER(e) {
    const i = [0];
    return AR(i, e.length - 1),
    i
}
function CR(e, i) {
    return e.map(a => a * i)
}
function MR(e, i) {
    return e.map( () => i || D1).splice(0, e.length - 1)
}
function kr({duration: e=300, keyframes: i, times: a, ease: r="easeInOut"}) {
    const o = kD(r) ? r.map(Jv) : Jv(r)
      , u = {
        done: !1,
        value: i[0]
    }
      , f = CR(a && a.length === i.length ? a : ER(i), e)
      , h = TR(f, i, {
        ease: Array.isArray(o) ? o : MR(i, o)
    });
    return {
        calculatedDuration: e,
        next: m => (u.value = h(m),
        u.done = m >= e,
        u)
    }
}
const NR = e => e !== null;
function Lh(e, {repeat: i, repeatType: a="loop"}, r, o=1) {
    const u = e.filter(NR)
      , h = o < 0 || i && a !== "loop" && i % 2 === 1 ? 0 : u.length - 1;
    return !h || r === void 0 ? u[h] : r
}
const DR = {
    decay: Ld,
    inertia: Ld,
    tween: kr,
    keyframes: kr,
    spring: tc
};
function F1(e) {
    typeof e.type == "string" && (e.type = DR[e.type])
}
class Uh {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(i => {
            this.resolve = i
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(i, a) {
        return this.finished.then(i, a)
    }
}
const RR = e => e / 100;
class kh extends Uh {
    constructor(i) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.stop = () => {
            const {motionValue: a} = this.options;
            a && a.updatedAt !== ke.now() && this.tick(ke.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            this.options.onStop?.())
        }
        ,
        this.options = i,
        this.initAnimation(),
        this.play(),
        i.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: i} = this;
        F1(i);
        const {type: a=kr, repeat: r=0, repeatDelay: o=0, repeatType: u, velocity: f=0} = i;
        let {keyframes: h} = i;
        const m = a || kr;
        m !== kr && typeof h[0] != "number" && (this.mixKeyframes = nl(RR, P1(h[0], h[1])),
        h = [0, 100]);
        const p = m({
            ...i,
            keyframes: h
        });
        u === "mirror" && (this.mirroredGenerator = m({
            ...i,
            keyframes: [...h].reverse(),
            velocity: -f
        })),
        p.calculatedDuration === null && (p.calculatedDuration = zh(p));
        const {calculatedDuration: g} = p;
        this.calculatedDuration = g,
        this.resolvedDuration = g + o,
        this.totalDuration = this.resolvedDuration * (r + 1) - o,
        this.generator = p
    }
    updateTime(i) {
        const a = Math.round(i - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = a
    }
    tick(i, a=!1) {
        const {generator: r, totalDuration: o, mixKeyframes: u, mirroredGenerator: f, resolvedDuration: h, calculatedDuration: m} = this;
        if (this.startTime === null)
            return r.next(0);
        const {delay: p=0, keyframes: g, repeat: x, repeatType: S, repeatDelay: w, type: E, onUpdate: A, finalKeyframe: M} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, i) : this.speed < 0 && (this.startTime = Math.min(i - o / this.speed, this.startTime)),
        a ? this.currentTime = i : this.updateTime(i);
        const j = this.currentTime - p * (this.playbackSpeed >= 0 ? 1 : -1)
          , O = this.playbackSpeed >= 0 ? j < 0 : j > o;
        this.currentTime = Math.max(j, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = o);
        let V = this.currentTime
          , G = r;
        if (x) {
            const Y = Math.min(this.currentTime, o) / h;
            let ot = Math.floor(Y)
              , ht = Y % 1;
            !ht && Y >= 1 && (ht = 1),
            ht === 1 && ot--,
            ot = Math.min(ot, x + 1),
            ot % 2 && (S === "reverse" ? (ht = 1 - ht,
            w && (ht -= w / h)) : S === "mirror" && (G = f)),
            V = Yn(0, 1, ht) * h
        }
        const H = O ? {
            done: !1,
            value: g[0]
        } : G.next(V);
        u && (H.value = u(H.value));
        let {done: J} = H;
        !O && m !== null && (J = this.playbackSpeed >= 0 ? this.currentTime >= o : this.currentTime <= 0);
        const Z = this.holdTime === null && (this.state === "finished" || this.state === "running" && J);
        return Z && E !== Ld && (H.value = Lh(g, this.options, M, this.speed)),
        A && A(H.value),
        Z && this.finish(),
        H
    }
    then(i, a) {
        return this.finished.then(i, a)
    }
    get duration() {
        return Sn(this.calculatedDuration)
    }
    get iterationDuration() {
        const {delay: i=0} = this.options || {};
        return this.duration + Sn(i)
    }
    get time() {
        return Sn(this.currentTime)
    }
    set time(i) {
        i = pi(i),
        this.currentTime = i,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = i : this.driver && (this.startTime = this.driver.now() - i / this.playbackSpeed),
        this.driver?.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(i) {
        this.updateTime(ke.now());
        const a = this.playbackSpeed !== i;
        this.playbackSpeed = i,
        a && (this.time = Sn(this.currentTime))
    }
    play() {
        if (this.isStopped)
            return;
        const {driver: i=hR, startTime: a} = this.options;
        this.driver || (this.driver = i(o => this.tick(o))),
        this.options.onPlay?.();
        const r = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = a ?? r),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(ke.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        this.options.onComplete?.()
    }
    cancel() {
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        this.options.onCancel?.()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(i) {
        return this.startTime = 0,
        this.tick(i, !0)
    }
    attachTimeline(i) {
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        this.driver?.stop(),
        i.observe(this)
    }
}
function jR(e) {
    for (let i = 1; i < e.length; i++)
        e[i] ?? (e[i] = e[i - 1])
}
const Es = e => e * 180 / Math.PI
  , Ud = e => {
    const i = Es(Math.atan2(e[1], e[0]));
    return kd(i)
}
  , OR = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Ud,
    rotateZ: Ud,
    skewX: e => Es(Math.atan(e[1])),
    skewY: e => Es(Math.atan(e[2])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}
  , kd = e => (e = e % 360,
e < 0 && (e += 360),
e)
  , a0 = Ud
  , r0 = e => Math.sqrt(e[0] * e[0] + e[1] * e[1])
  , l0 = e => Math.sqrt(e[4] * e[4] + e[5] * e[5])
  , _R = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: r0,
    scaleY: l0,
    scale: e => (r0(e) + l0(e)) / 2,
    rotateX: e => kd(Es(Math.atan2(e[6], e[5]))),
    rotateY: e => kd(Es(Math.atan2(-e[2], e[0]))),
    rotateZ: a0,
    rotate: a0,
    skewX: e => Es(Math.atan(e[4])),
    skewY: e => Es(Math.atan(e[1])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function Bd(e) {
    return e.includes("scale") ? 1 : 0
}
function Pd(e, i) {
    if (!e || e === "none")
        return Bd(i);
    const a = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, o;
    if (a)
        r = _R,
        o = a;
    else {
        const h = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = OR,
        o = h
    }
    if (!o)
        return Bd(i);
    const u = r[i]
      , f = o[1].split(",").map(zR);
    return typeof u == "function" ? u(f) : f[u]
}
const VR = (e, i) => {
    const {transform: a="none"} = getComputedStyle(e);
    return Pd(a, i)
}
;
function zR(e) {
    return parseFloat(e.trim())
}
const Va = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , za = new Set(Va)
  , o0 = e => e === _a || e === lt
  , LR = new Set(["x", "y", "z"])
  , UR = Va.filter(e => !LR.has(e));
function kR(e) {
    const i = [];
    return UR.forEach(a => {
        const r = e.getValue(a);
        r !== void 0 && (i.push([a, r.get()]),
        r.set(a.startsWith("scale") ? 1 : 0))
    }
    ),
    i
}
const Xi = {
    width: ({x: e}, {paddingLeft: i="0", paddingRight: a="0"}) => e.max - e.min - parseFloat(i) - parseFloat(a),
    height: ({y: e}, {paddingTop: i="0", paddingBottom: a="0"}) => e.max - e.min - parseFloat(i) - parseFloat(a),
    top: (e, {top: i}) => parseFloat(i),
    left: (e, {left: i}) => parseFloat(i),
    bottom: ({y: e}, {top: i}) => parseFloat(i) + (e.max - e.min),
    right: ({x: e}, {left: i}) => parseFloat(i) + (e.max - e.min),
    x: (e, {transform: i}) => Pd(i, "x"),
    y: (e, {transform: i}) => Pd(i, "y")
};
Xi.translateX = Xi.x;
Xi.translateY = Xi.y;
const Ms = new Set;
let Hd = !1
  , qd = !1
  , Fd = !1;
function G1() {
    if (qd) {
        const e = Array.from(Ms).filter(r => r.needsMeasurement)
          , i = new Set(e.map(r => r.element))
          , a = new Map;
        i.forEach(r => {
            const o = kR(r);
            o.length && (a.set(r, o),
            r.render())
        }
        ),
        e.forEach(r => r.measureInitialState()),
        i.forEach(r => {
            r.render();
            const o = a.get(r);
            o && o.forEach( ([u,f]) => {
                r.getValue(u)?.set(f)
            }
            )
        }
        ),
        e.forEach(r => r.measureEndState()),
        e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    qd = !1,
    Hd = !1,
    Ms.forEach(e => e.complete(Fd)),
    Ms.clear()
}
function Y1() {
    Ms.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (qd = !0)
    }
    )
}
function BR() {
    Fd = !0,
    Y1(),
    G1(),
    Fd = !1
}
class Bh {
    constructor(i, a, r, o, u, f=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...i],
        this.onComplete = a,
        this.name = r,
        this.motionValue = o,
        this.element = u,
        this.isAsync = f
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (Ms.add(this),
        Hd || (Hd = !0,
        Wt.read(Y1),
        Wt.resolveKeyframes(G1))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: i, name: a, element: r, motionValue: o} = this;
        if (i[0] === null) {
            const u = o?.get()
              , f = i[i.length - 1];
            if (u !== void 0)
                i[0] = u;
            else if (r && a) {
                const h = r.readValue(a, f);
                h != null && (i[0] = h)
            }
            i[0] === void 0 && (i[0] = f),
            o && u === void 0 && o.set(i[0])
        }
        jR(i)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(i=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i),
        Ms.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (Ms.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const PR = e => e.startsWith("--");
function HR(e, i, a) {
    PR(i) ? e.style.setProperty(i, a) : e.style[i] = a
}
const qR = Mh( () => window.ScrollTimeline !== void 0)
  , FR = {};
function GR(e, i) {
    const a = Mh(e);
    return () => FR[i] ?? a()
}
const X1 = GR( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , Or = ([e,i,a,r]) => `cubic-bezier(${e}, ${i}, ${a}, ${r})`
  , c0 = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Or([0, .65, .55, 1]),
    circOut: Or([.55, 0, 1, .45]),
    backIn: Or([.31, .01, .66, -.59]),
    backOut: Or([.33, 1.53, .69, .99])
};
function Q1(e, i) {
    if (e)
        return typeof e == "function" ? X1() ? H1(e, i) : "ease-out" : R1(e) ? Or(e) : Array.isArray(e) ? e.map(a => Q1(a, i) || c0.easeOut) : c0[e]
}
function YR(e, i, a, {delay: r=0, duration: o=300, repeat: u=0, repeatType: f="loop", ease: h="easeOut", times: m}={}, p=void 0) {
    const g = {
        [i]: a
    };
    m && (g.offset = m);
    const x = Q1(h, o);
    Array.isArray(x) && (g.easing = x);
    const S = {
        delay: r,
        duration: o,
        easing: Array.isArray(x) ? "linear" : x,
        fill: "both",
        iterations: u + 1,
        direction: f === "reverse" ? "alternate" : "normal"
    };
    return p && (S.pseudoElement = p),
    e.animate(g, S)
}
function K1(e) {
    return typeof e == "function" && "applyToOptions"in e
}
function XR({type: e, ...i}) {
    return K1(e) && X1() ? e.applyToOptions(i) : (i.duration ?? (i.duration = 300),
    i.ease ?? (i.ease = "easeOut"),
    i)
}
class QR extends Uh {
    constructor(i) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        this.manualStartTime = null,
        !i)
            return;
        const {element: a, name: r, keyframes: o, pseudoElement: u, allowFlatten: f=!1, finalKeyframe: h, onComplete: m} = i;
        this.isPseudoElement = !!u,
        this.allowFlatten = f,
        this.options = i,
        Ch(typeof i.type != "string");
        const p = XR(i);
        this.animation = YR(a, r, o, p, u),
        p.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !u) {
                const g = Lh(o, this.options, h, this.speed);
                this.updateMotionValue ? this.updateMotionValue(g) : HR(a, r, g),
                this.animation.cancel()
            }
            m?.(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.manualStartTime = null,
        this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.finish?.()
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: i} = this;
        i === "idle" || i === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        this.isPseudoElement || this.animation.commitStyles?.()
    }
    get duration() {
        const i = this.animation.effect?.getComputedTiming?.().duration || 0;
        return Sn(Number(i))
    }
    get iterationDuration() {
        const {delay: i=0} = this.options || {};
        return this.duration + Sn(i)
    }
    get time() {
        return Sn(Number(this.animation.currentTime) || 0)
    }
    set time(i) {
        this.manualStartTime = null,
        this.finishedTime = null,
        this.animation.currentTime = pi(i)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(i) {
        i < 0 && (this.finishedTime = null),
        this.animation.playbackRate = i
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime)
    }
    set startTime(i) {
        this.manualStartTime = this.animation.startTime = i
    }
    attachTimeline({timeline: i, observe: a}) {
        return this.allowFlatten && this.animation.effect?.updateTiming({
            easing: "linear"
        }),
        this.animation.onfinish = null,
        i && qR() ? (this.animation.timeline = i,
        wn) : a(this)
    }
}
const Z1 = {
    anticipate: C1,
    backInOut: E1,
    circInOut: N1
};
function KR(e) {
    return e in Z1
}
function ZR(e) {
    typeof e.ease == "string" && KR(e.ease) && (e.ease = Z1[e.ease])
}
const ld = 10;
class IR extends QR {
    constructor(i) {
        ZR(i),
        F1(i),
        super(i),
        i.startTime !== void 0 && (this.startTime = i.startTime),
        this.options = i
    }
    updateMotionValue(i) {
        const {motionValue: a, onUpdate: r, onComplete: o, element: u, ...f} = this.options;
        if (!a)
            return;
        if (i !== void 0) {
            a.set(i);
            return
        }
        const h = new kh({
            ...f,
            autoplay: !1
        })
          , m = Math.max(ld, ke.now() - this.startTime)
          , p = Yn(0, ld, m - ld);
        a.setWithVelocity(h.sample(Math.max(0, m - p)).value, h.sample(m).value, p),
        h.stop()
    }
}
const u0 = (e, i) => i === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Ji.test(e) || e === "0") && !e.startsWith("url("));
function WR(e) {
    const i = e[0];
    if (e.length === 1)
        return !0;
    for (let a = 0; a < e.length; a++)
        if (e[a] !== i)
            return !0
}
function JR(e, i, a, r) {
    const o = e[0];
    if (o === null)
        return !1;
    if (i === "display" || i === "visibility")
        return !0;
    const u = e[e.length - 1]
      , f = u0(o, i)
      , h = u0(u, i);
    return !f || !h ? !1 : WR(e) || (a === "spring" || K1(a)) && r
}
function Gd(e) {
    e.duration = 0,
    e.type = "keyframes"
}
const $R = new Set(["opacity", "clipPath", "filter", "transform"])
  , tj = Mh( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function ej(e) {
    const {motionValue: i, name: a, repeatDelay: r, repeatType: o, damping: u, type: f} = e;
    if (!(i?.owner?.current instanceof HTMLElement))
        return !1;
    const {onUpdate: m, transformTemplate: p} = i.owner.getProps();
    return tj() && a && $R.has(a) && (a !== "transform" || !p) && !m && !r && o !== "mirror" && u !== 0 && f !== "inertia"
}
const nj = 40;
class ij extends Uh {
    constructor({autoplay: i=!0, delay: a=0, type: r="keyframes", repeat: o=0, repeatDelay: u=0, repeatType: f="loop", keyframes: h, name: m, motionValue: p, element: g, ...x}) {
        super(),
        this.stop = () => {
            this._animation && (this._animation.stop(),
            this.stopTimeline?.()),
            this.keyframeResolver?.cancel()
        }
        ,
        this.createdAt = ke.now();
        const S = {
            autoplay: i,
            delay: a,
            type: r,
            repeat: o,
            repeatDelay: u,
            repeatType: f,
            name: m,
            motionValue: p,
            element: g,
            ...x
        }
          , w = g?.KeyframeResolver || Bh;
        this.keyframeResolver = new w(h, (E, A, M) => this.onKeyframesResolved(E, A, S, !M),m,p,g),
        this.keyframeResolver?.scheduleResolve()
    }
    onKeyframesResolved(i, a, r, o) {
        this.keyframeResolver = void 0;
        const {name: u, type: f, velocity: h, delay: m, isHandoff: p, onUpdate: g} = r;
        this.resolvedAt = ke.now(),
        JR(i, u, f, h) || ((vi.instantAnimations || !m) && g?.(Lh(i, r, a)),
        i[0] = i[i.length - 1],
        Gd(r),
        r.repeat = 0);
        const S = {
            startTime: o ? this.resolvedAt ? this.resolvedAt - this.createdAt > nj ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: a,
            ...r,
            keyframes: i
        }
          , w = !p && ej(S) ? new IR({
            ...S,
            element: S.motionValue.owner.current
        }) : new kh(S);
        w.finished.then( () => this.notifyFinished()).catch(wn),
        this.pendingTimeline && (this.stopTimeline = w.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = w
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(i, a) {
        return this.finished.finally(i).then( () => {}
        )
    }
    get animation() {
        return this._animation || (this.keyframeResolver?.resume(),
        BR()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(i) {
        this.animation.time = i
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(i) {
        this.animation.speed = i
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(i) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(i) : this.pendingTimeline = i,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        this._animation && this.animation.cancel(),
        this.keyframeResolver?.cancel()
    }
}
const sj = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function aj(e) {
    const i = sj.exec(e);
    if (!i)
        return [, ];
    const [,a,r,o] = i;
    return [`--${a ?? r}`, o]
}
function I1(e, i, a=1) {
    const [r,o] = aj(e);
    if (!r)
        return;
    const u = window.getComputedStyle(i).getPropertyValue(r);
    if (u) {
        const f = u.trim();
        return g1(f) ? parseFloat(f) : f
    }
    return jh(o) ? I1(o, i, a + 1) : o
}
function Ph(e, i) {
    return e?.[i] ?? e?.default ?? e
}
const rj = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , lj = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , oj = {
    type: "keyframes",
    duration: .8
}
  , cj = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , uj = (e, {keyframes: i}) => i.length > 2 ? oj : za.has(e) ? e.startsWith("scale") ? lj(i[1]) : rj : cj;
function fj({when: e, delay: i, delayChildren: a, staggerChildren: r, staggerDirection: o, repeat: u, repeatType: f, repeatDelay: h, from: m, elapsed: p, ...g}) {
    return !!Object.keys(g).length
}
const dj = e => e !== null;
function hj(e, {repeat: i, repeatType: a="loop"}, r) {
    const o = e.filter(dj)
      , u = i && a !== "loop" && i % 2 === 1 ? 0 : o.length - 1;
    return o[u]
}
function W1(e, i, a, r=0, o=1) {
    const u = Array.from(e).sort( (p, g) => p.sortNodePosition(g)).indexOf(i)
      , f = e.size
      , h = (f - 1) * r;
    return typeof a == "function" ? a(u, f) : o === 1 ? u * r : h - u * r
}
const Hh = (e, i, a, r={}, o, u) => f => {
    const h = Ph(r, e) || {}
      , m = h.delay || r.delay || 0;
    let {elapsed: p=0} = r;
    p = p - pi(m);
    const g = {
        keyframes: Array.isArray(a) ? a : [null, a],
        ease: "easeOut",
        velocity: i.getVelocity(),
        ...h,
        delay: -p,
        onUpdate: S => {
            i.set(S),
            h.onUpdate && h.onUpdate(S)
        }
        ,
        onComplete: () => {
            f(),
            h.onComplete && h.onComplete()
        }
        ,
        name: e,
        motionValue: i,
        element: u ? void 0 : o
    };
    fj(h) || Object.assign(g, uj(e, g)),
    g.duration && (g.duration = pi(g.duration)),
    g.repeatDelay && (g.repeatDelay = pi(g.repeatDelay)),
    g.from !== void 0 && (g.keyframes[0] = g.from);
    let x = !1;
    if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (Gd(g),
    g.delay === 0 && (x = !0)),
    (vi.instantAnimations || vi.skipAnimations) && (x = !0,
    Gd(g),
    g.delay = 0),
    g.allowFlatten = !h.type && !h.ease,
    x && !u && i.get() !== void 0) {
        const S = hj(g.keyframes, h);
        if (S !== void 0) {
            Wt.update( () => {
                g.onUpdate(S),
                g.onComplete()
            }
            );
            return
        }
    }
    return h.isSync ? new kh(g) : new ij(g)
}
  , J1 = new Set(["width", "height", "top", "left", "right", "bottom", ...Va])
  , f0 = 30
  , mj = e => !isNaN(parseFloat(e));
class pj {
    constructor(i, a={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = r => {
            const o = ke.now();
            if (this.updatedAt !== o && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && (this.events.change?.notify(this.current),
            this.dependents))
                for (const u of this.dependents)
                    u.dirty()
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(i),
        this.owner = a.owner
    }
    setCurrent(i) {
        this.current = i,
        this.updatedAt = ke.now(),
        this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = mj(this.current))
    }
    setPrevFrameValue(i=this.current) {
        this.prevFrameValue = i,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(i) {
        return this.on("change", i)
    }
    on(i, a) {
        this.events[i] || (this.events[i] = new Nh);
        const r = this.events[i].add(a);
        return i === "change" ? () => {
            r(),
            Wt.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const i in this.events)
            this.events[i].clear()
    }
    attach(i, a) {
        this.passiveEffect = i,
        this.stopPassiveEffect = a
    }
    set(i) {
        this.passiveEffect ? this.passiveEffect(i, this.updateAndNotify) : this.updateAndNotify(i)
    }
    setWithVelocity(i, a, r) {
        this.set(a),
        this.prev = void 0,
        this.prevFrameValue = i,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(i, a=!0) {
        this.updateAndNotify(i),
        this.prev = i,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        a && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        this.events.change?.notify(this.current)
    }
    addDependent(i) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(i)
    }
    removeDependent(i) {
        this.dependents && this.dependents.delete(i)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const i = ke.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > f0)
            return 0;
        const a = Math.min(this.updatedAt - this.prevUpdatedAt, f0);
        return b1(parseFloat(this.current) - parseFloat(this.prevFrameValue), a)
    }
    start(i) {
        return this.stop(),
        new Promise(a => {
            this.hasAnimated = !0,
            this.animation = i(a),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.dependents?.clear(),
        this.events.destroy?.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Na(e, i) {
    return new pj(e,i)
}
function d0(e) {
    const i = [{}, {}];
    return e?.values.forEach( (a, r) => {
        i[0][r] = a.get(),
        i[1][r] = a.getVelocity()
    }
    ),
    i
}
function qh(e, i, a, r) {
    if (typeof i == "function") {
        const [o,u] = d0(r);
        i = i(a !== void 0 ? a : e.custom, o, u)
    }
    if (typeof i == "string" && (i = e.variants && e.variants[i]),
    typeof i == "function") {
        const [o,u] = d0(r);
        i = i(a !== void 0 ? a : e.custom, o, u)
    }
    return i
}
function Ea(e, i, a) {
    const r = e.getProps();
    return qh(r, i, a !== void 0 ? a : r.custom, e)
}
const Yd = e => Array.isArray(e);
function yj(e, i, a) {
    e.hasValue(i) ? e.getValue(i).set(a) : e.addValue(i, Na(a))
}
function gj(e) {
    return Yd(e) ? e[e.length - 1] || 0 : e
}
function vj(e, i) {
    const a = Ea(e, i);
    let {transitionEnd: r={}, transition: o={}, ...u} = a || {};
    u = {
        ...u,
        ...r
    };
    for (const f in u) {
        const h = gj(u[f]);
        yj(e, f, h)
    }
}
const _e = e => !!(e && e.getVelocity);
function xj(e) {
    return !!(_e(e) && e.add)
}
function Xd(e, i) {
    const a = e.getValue("willChange");
    if (xj(a))
        return a.add(i);
    if (!a && vi.WillChange) {
        const r = new vi.WillChange("auto");
        e.addValue("willChange", r),
        r.add(i)
    }
}
function Fh(e) {
    return e.replace(/([A-Z])/g, i => `-${i.toLowerCase()}`)
}
const bj = "framerAppearId"
  , $1 = "data-" + Fh(bj);
function tS(e) {
    return e.props[$1]
}
function Sj({protectedKeys: e, needsAnimating: i}, a) {
    const r = e.hasOwnProperty(a) && i[a] !== !0;
    return i[a] = !1,
    r
}
function eS(e, i, {delay: a=0, transitionOverride: r, type: o}={}) {
    let {transition: u=e.getDefaultTransition(), transitionEnd: f, ...h} = i;
    r && (u = r);
    const m = []
      , p = o && e.animationState && e.animationState.getState()[o];
    for (const g in h) {
        const x = e.getValue(g, e.latestValues[g] ?? null)
          , S = h[g];
        if (S === void 0 || p && Sj(p, g))
            continue;
        const w = {
            delay: a,
            ...Ph(u || {}, g)
        }
          , E = x.get();
        if (E !== void 0 && !x.isAnimating && !Array.isArray(S) && S === E && !w.velocity)
            continue;
        let A = !1;
        if (window.MotionHandoffAnimation) {
            const j = tS(e);
            if (j) {
                const O = window.MotionHandoffAnimation(j, g, Wt);
                O !== null && (w.startTime = O,
                A = !0)
            }
        }
        Xd(e, g),
        x.start(Hh(g, x, S, e.shouldReduceMotion && J1.has(g) ? {
            type: !1
        } : w, e, A));
        const M = x.animation;
        M && m.push(M)
    }
    return f && Promise.all(m).then( () => {
        Wt.update( () => {
            f && vj(e, f)
        }
        )
    }
    ),
    m
}
function Qd(e, i, a={}) {
    const r = Ea(e, i, a.type === "exit" ? e.presenceContext?.custom : void 0);
    let {transition: o=e.getDefaultTransition() || {}} = r || {};
    a.transitionOverride && (o = a.transitionOverride);
    const u = r ? () => Promise.all(eS(e, r, a)) : () => Promise.resolve()
      , f = e.variantChildren && e.variantChildren.size ? (m=0) => {
        const {delayChildren: p=0, staggerChildren: g, staggerDirection: x} = o;
        return wj(e, i, m, p, g, x, a)
    }
    : () => Promise.resolve()
      , {when: h} = o;
    if (h) {
        const [m,p] = h === "beforeChildren" ? [u, f] : [f, u];
        return m().then( () => p())
    } else
        return Promise.all([u(), f(a.delay)])
}
function wj(e, i, a=0, r=0, o=0, u=1, f) {
    const h = [];
    for (const m of e.variantChildren)
        m.notify("AnimationStart", i),
        h.push(Qd(m, i, {
            ...f,
            delay: a + (typeof r == "function" ? 0 : r) + W1(e.variantChildren, m, r, o, u)
        }).then( () => m.notify("AnimationComplete", i)));
    return Promise.all(h)
}
function Tj(e, i, a={}) {
    e.notify("AnimationStart", i);
    let r;
    if (Array.isArray(i)) {
        const o = i.map(u => Qd(e, u, a));
        r = Promise.all(o)
    } else if (typeof i == "string")
        r = Qd(e, i, a);
    else {
        const o = typeof i == "function" ? Ea(e, i, a.custom) : i;
        r = Promise.all(eS(e, o, a))
    }
    return r.then( () => {
        e.notify("AnimationComplete", i)
    }
    )
}
const Aj = {
    test: e => e === "auto",
    parse: e => e
}
  , nS = e => i => i.test(e)
  , iS = [_a, lt, Fn, Gi, WD, ID, Aj]
  , h0 = e => iS.find(nS(e));
function Ej(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || x1(e) : !0
}
const Cj = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Mj(e) {
    const [i,a] = e.slice(0, -1).split("(");
    if (i === "drop-shadow")
        return e;
    const [r] = a.match(Oh) || [];
    if (!r)
        return e;
    const o = a.replace(r, "");
    let u = Cj.has(i) ? 1 : 0;
    return r !== a && (u *= 100),
    i + "(" + u + o + ")"
}
const Nj = /\b([a-z-]*)\(.*?\)/gu
  , Kd = {
    ...Ji,
    getAnimatableNone: e => {
        const i = e.match(Nj);
        return i ? i.map(Mj).join(" ") : e
    }
}
  , m0 = {
    ..._a,
    transform: Math.round
}
  , Dj = {
    rotate: Gi,
    rotateX: Gi,
    rotateY: Gi,
    rotateZ: Gi,
    scale: zo,
    scaleX: zo,
    scaleY: zo,
    scaleZ: zo,
    skew: Gi,
    skewX: Gi,
    skewY: Gi,
    distance: lt,
    translateX: lt,
    translateY: lt,
    translateZ: lt,
    x: lt,
    y: lt,
    z: lt,
    perspective: lt,
    transformPerspective: lt,
    opacity: Kr,
    originX: t0,
    originY: t0,
    originZ: lt
}
  , Gh = {
    borderWidth: lt,
    borderTopWidth: lt,
    borderRightWidth: lt,
    borderBottomWidth: lt,
    borderLeftWidth: lt,
    borderRadius: lt,
    radius: lt,
    borderTopLeftRadius: lt,
    borderTopRightRadius: lt,
    borderBottomRightRadius: lt,
    borderBottomLeftRadius: lt,
    width: lt,
    maxWidth: lt,
    height: lt,
    maxHeight: lt,
    top: lt,
    right: lt,
    bottom: lt,
    left: lt,
    inset: lt,
    insetBlock: lt,
    insetBlockStart: lt,
    insetBlockEnd: lt,
    insetInline: lt,
    insetInlineStart: lt,
    insetInlineEnd: lt,
    padding: lt,
    paddingTop: lt,
    paddingRight: lt,
    paddingBottom: lt,
    paddingLeft: lt,
    paddingBlock: lt,
    paddingBlockStart: lt,
    paddingBlockEnd: lt,
    paddingInline: lt,
    paddingInlineStart: lt,
    paddingInlineEnd: lt,
    margin: lt,
    marginTop: lt,
    marginRight: lt,
    marginBottom: lt,
    marginLeft: lt,
    marginBlock: lt,
    marginBlockStart: lt,
    marginBlockEnd: lt,
    marginInline: lt,
    marginInlineStart: lt,
    marginInlineEnd: lt,
    backgroundPositionX: lt,
    backgroundPositionY: lt,
    ...Dj,
    zIndex: m0,
    fillOpacity: Kr,
    strokeOpacity: Kr,
    numOctaves: m0
}
  , Rj = {
    ...Gh,
    color: he,
    backgroundColor: he,
    outlineColor: he,
    fill: he,
    stroke: he,
    borderColor: he,
    borderTopColor: he,
    borderRightColor: he,
    borderBottomColor: he,
    borderLeftColor: he,
    filter: Kd,
    WebkitFilter: Kd
}
  , sS = e => Rj[e];
function aS(e, i) {
    let a = sS(e);
    return a !== Kd && (a = Ji),
    a.getAnimatableNone ? a.getAnimatableNone(i) : void 0
}
const jj = new Set(["auto", "none", "0"]);
function Oj(e, i, a) {
    let r = 0, o;
    for (; r < e.length && !o; ) {
        const u = e[r];
        typeof u == "string" && !jj.has(u) && Zr(u).values.length && (o = e[r]),
        r++
    }
    if (o && a)
        for (const u of i)
            e[u] = aS(a, o)
}
class _j extends Bh {
    constructor(i, a, r, o, u) {
        super(i, a, r, o, u, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: i, element: a, name: r} = this;
        if (!a || !a.current)
            return;
        super.readKeyframes();
        for (let g = 0; g < i.length; g++) {
            let x = i[g];
            if (typeof x == "string" && (x = x.trim(),
            jh(x))) {
                const S = I1(x, a.current);
                S !== void 0 && (i[g] = S),
                g === i.length - 1 && (this.finalKeyframe = x)
            }
        }
        if (this.resolveNoneKeyframes(),
        !J1.has(r) || i.length !== 2)
            return;
        const [o,u] = i
          , f = h0(o)
          , h = h0(u)
          , m = $v(o)
          , p = $v(u);
        if (m !== p && Xi[r]) {
            this.needsMeasurement = !0;
            return
        }
        if (f !== h)
            if (o0(f) && o0(h))
                for (let g = 0; g < i.length; g++) {
                    const x = i[g];
                    typeof x == "string" && (i[g] = parseFloat(x))
                }
            else
                Xi[r] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: i, name: a} = this
          , r = [];
        for (let o = 0; o < i.length; o++)
            (i[o] === null || Ej(i[o])) && r.push(o);
        r.length && Oj(i, r, a)
    }
    measureInitialState() {
        const {element: i, unresolvedKeyframes: a, name: r} = this;
        if (!i || !i.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = Xi[r](i.measureViewportBox(), window.getComputedStyle(i.current)),
        a[0] = this.measuredOrigin;
        const o = a[a.length - 1];
        o !== void 0 && i.getValue(r, o).jump(o, !1)
    }
    measureEndState() {
        const {element: i, name: a, unresolvedKeyframes: r} = this;
        if (!i || !i.current)
            return;
        const o = i.getValue(a);
        o && o.jump(this.measuredOrigin, !1);
        const u = r.length - 1
          , f = r[u];
        r[u] = Xi[a](i.measureViewportBox(), window.getComputedStyle(i.current)),
        f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
        this.removedTransforms?.length && this.removedTransforms.forEach( ([h,m]) => {
            i.getValue(h).set(m)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function Vj(e, i, a) {
    if (e instanceof EventTarget)
        return [e];
    if (typeof e == "string") {
        let r = document;
        const o = a?.[e] ?? r.querySelectorAll(e);
        return o ? Array.from(o) : []
    }
    return Array.from(e)
}
const rS = (e, i) => i && typeof e == "number" ? i.transform(e) : e;
function zj(e) {
    return v1(e) && "offsetHeight"in e
}
const {schedule: Yh} = j1(queueMicrotask, !1)
  , Mn = {
    x: !1,
    y: !1
};
function lS() {
    return Mn.x || Mn.y
}
function Lj(e) {
    return e === "x" || e === "y" ? Mn[e] ? null : (Mn[e] = !0,
    () => {
        Mn[e] = !1
    }
    ) : Mn.x || Mn.y ? null : (Mn.x = Mn.y = !0,
    () => {
        Mn.x = Mn.y = !1
    }
    )
}
function oS(e, i) {
    const a = Vj(e)
      , r = new AbortController
      , o = {
        passive: !0,
        ...i,
        signal: r.signal
    };
    return [a, o, () => r.abort()]
}
function p0(e) {
    return !(e.pointerType === "touch" || lS())
}
function Uj(e, i, a={}) {
    const [r,o,u] = oS(e, a)
      , f = h => {
        if (!p0(h))
            return;
        const {target: m} = h
          , p = i(m, h);
        if (typeof p != "function" || !m)
            return;
        const g = x => {
            p0(x) && (p(x),
            m.removeEventListener("pointerleave", g))
        }
        ;
        m.addEventListener("pointerleave", g, o)
    }
    ;
    return r.forEach(h => {
        h.addEventListener("pointerenter", f, o)
    }
    ),
    u
}
const cS = (e, i) => i ? e === i ? !0 : cS(e, i.parentElement) : !1
  , Xh = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , kj = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function uS(e) {
    return kj.has(e.tagName) || e.isContentEditable === !0
}
const qo = new WeakSet;
function y0(e) {
    return i => {
        i.key === "Enter" && e(i)
    }
}
function od(e, i) {
    e.dispatchEvent(new PointerEvent("pointer" + i,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const Bj = (e, i) => {
    const a = e.currentTarget;
    if (!a)
        return;
    const r = y0( () => {
        if (qo.has(a))
            return;
        od(a, "down");
        const o = y0( () => {
            od(a, "up")
        }
        )
          , u = () => od(a, "cancel");
        a.addEventListener("keyup", o, i),
        a.addEventListener("blur", u, i)
    }
    );
    a.addEventListener("keydown", r, i),
    a.addEventListener("blur", () => a.removeEventListener("keydown", r), i)
}
;
function g0(e) {
    return Xh(e) && !lS()
}
function Pj(e, i, a={}) {
    const [r,o,u] = oS(e, a)
      , f = h => {
        const m = h.currentTarget;
        if (!g0(h))
            return;
        qo.add(m);
        const p = i(m, h)
          , g = (w, E) => {
            window.removeEventListener("pointerup", x),
            window.removeEventListener("pointercancel", S),
            qo.has(m) && qo.delete(m),
            g0(w) && typeof p == "function" && p(w, {
                success: E
            })
        }
          , x = w => {
            g(w, m === window || m === document || a.useGlobalTarget || cS(m, w.target))
        }
          , S = w => {
            g(w, !1)
        }
        ;
        window.addEventListener("pointerup", x, o),
        window.addEventListener("pointercancel", S, o)
    }
    ;
    return r.forEach(h => {
        (a.useGlobalTarget ? window : h).addEventListener("pointerdown", f, o),
        zj(h) && (h.addEventListener("focus", p => Bj(p, o)),
        !uS(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0))
    }
    ),
    u
}
function fS(e) {
    return v1(e) && "ownerSVGElement"in e
}
function Hj(e) {
    return fS(e) && e.tagName === "svg"
}
const qj = [...iS, he, Ji]
  , Fj = e => qj.find(nS(e))
  , v0 = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Sa = () => ({
    x: v0(),
    y: v0()
})
  , x0 = () => ({
    min: 0,
    max: 0
})
  , ve = () => ({
    x: x0(),
    y: x0()
})
  , Zd = {
    current: null
}
  , dS = {
    current: !1
}
  , Gj = typeof window < "u";
function Yj() {
    if (dS.current = !0,
    !!Gj)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , i = () => Zd.current = e.matches;
            e.addEventListener("change", i),
            i()
        } else
            Zd.current = !1
}
const Xj = new WeakMap;
function wc(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
function Ir(e) {
    return typeof e == "string" || Array.isArray(e)
}
const Qh = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Kh = ["initial", ...Qh];
function Tc(e) {
    return wc(e.animate) || Kh.some(i => Ir(e[i]))
}
function hS(e) {
    return !!(Tc(e) || e.variants)
}
function Qj(e, i, a) {
    for (const r in i) {
        const o = i[r]
          , u = a[r];
        if (_e(o))
            e.addValue(r, o);
        else if (_e(u))
            e.addValue(r, Na(o, {
                owner: e
            }));
        else if (u !== o)
            if (e.hasValue(r)) {
                const f = e.getValue(r);
                f.liveStyle === !0 ? f.jump(o) : f.hasAnimated || f.set(o)
            } else {
                const f = e.getStaticValue(r);
                e.addValue(r, Na(f !== void 0 ? f : o, {
                    owner: e
                }))
            }
    }
    for (const r in a)
        i[r] === void 0 && e.removeValue(r);
    return i
}
const b0 = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let ec = {};
function mS(e) {
    ec = e
}
function Kj() {
    return ec
}
class Zj {
    scrapeMotionValuesFromProps(i, a, r) {
        return {}
    }
    constructor({parent: i, props: a, presenceContext: r, reducedMotionConfig: o, blockInitialAnimation: u, visualState: f}, h={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = Bh,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const S = ke.now();
            this.renderScheduledAt < S && (this.renderScheduledAt = S,
            Wt.render(this.render, !1, !0))
        }
        ;
        const {latestValues: m, renderState: p} = f;
        this.latestValues = m,
        this.baseTarget = {
            ...m
        },
        this.initialValues = a.initial ? {
            ...m
        } : {},
        this.renderState = p,
        this.parent = i,
        this.props = a,
        this.presenceContext = r,
        this.depth = i ? i.depth + 1 : 0,
        this.reducedMotionConfig = o,
        this.options = h,
        this.blockInitialAnimation = !!u,
        this.isControllingVariants = Tc(a),
        this.isVariantNode = hS(a),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(i && i.current);
        const {willChange: g, ...x} = this.scrapeMotionValuesFromProps(a, {}, this);
        for (const S in x) {
            const w = x[S];
            m[S] !== void 0 && _e(w) && w.set(m[S])
        }
    }
    mount(i) {
        this.current = i,
        Xj.set(i, this),
        this.projection && !this.projection.instance && this.projection.mount(i),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (a, r) => this.bindToMotionValue(r, a)),
        this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (dS.current || Yj(),
        this.shouldReduceMotion = Zd.current),
        this.parent?.addChild(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        this.projection && this.projection.unmount(),
        Wi(this.notifyUpdate),
        Wi(this.render),
        this.valueSubscriptions.forEach(i => i()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent?.removeChild(this);
        for (const i in this.events)
            this.events[i].clear();
        for (const i in this.features) {
            const a = this.features[i];
            a && (a.unmount(),
            a.isMounted = !1)
        }
        this.current = null
    }
    addChild(i) {
        this.children.add(i),
        this.enteringChildren ?? (this.enteringChildren = new Set),
        this.enteringChildren.add(i)
    }
    removeChild(i) {
        this.children.delete(i),
        this.enteringChildren && this.enteringChildren.delete(i)
    }
    bindToMotionValue(i, a) {
        this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)();
        const r = za.has(i);
        r && this.onBindTransform && this.onBindTransform();
        const o = a.on("change", f => {
            this.latestValues[i] = f,
            this.props.onUpdate && Wt.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender()
        }
        );
        let u;
        typeof window < "u" && window.MotionCheckAppearSync && (u = window.MotionCheckAppearSync(this, i, a)),
        this.valueSubscriptions.set(i, () => {
            o(),
            u && u(),
            a.owner && a.stop()
        }
        )
    }
    sortNodePosition(i) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== i.type ? 0 : this.sortInstanceNodePosition(this.current, i.current)
    }
    updateFeatures() {
        let i = "animation";
        for (i in ec) {
            const a = ec[i];
            if (!a)
                continue;
            const {isEnabled: r, Feature: o} = a;
            if (!this.features[i] && o && r(this.props) && (this.features[i] = new o(this)),
            this.features[i]) {
                const u = this.features[i];
                u.isMounted ? u.update() : (u.mount(),
                u.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ve()
    }
    getStaticValue(i) {
        return this.latestValues[i]
    }
    setStaticValue(i, a) {
        this.latestValues[i] = a
    }
    update(i, a) {
        (i.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = i,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = a;
        for (let r = 0; r < b0.length; r++) {
            const o = b0[r];
            this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](),
            delete this.propEventSubscriptions[o]);
            const u = "on" + o
              , f = i[u];
            f && (this.propEventSubscriptions[o] = this.on(o, f))
        }
        this.prevMotionValues = Qj(this, this.scrapeMotionValuesFromProps(i, this.prevProps || {}, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(i) {
        return this.props.variants ? this.props.variants[i] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(i) {
        const a = this.getClosestVariantNode();
        if (a)
            return a.variantChildren && a.variantChildren.add(i),
            () => a.variantChildren.delete(i)
    }
    addValue(i, a) {
        const r = this.values.get(i);
        a !== r && (r && this.removeValue(i),
        this.bindToMotionValue(i, a),
        this.values.set(i, a),
        this.latestValues[i] = a.get())
    }
    removeValue(i) {
        this.values.delete(i);
        const a = this.valueSubscriptions.get(i);
        a && (a(),
        this.valueSubscriptions.delete(i)),
        delete this.latestValues[i],
        this.removeValueFromRenderState(i, this.renderState)
    }
    hasValue(i) {
        return this.values.has(i)
    }
    getValue(i, a) {
        if (this.props.values && this.props.values[i])
            return this.props.values[i];
        let r = this.values.get(i);
        return r === void 0 && a !== void 0 && (r = Na(a === null ? void 0 : a, {
            owner: this
        }),
        this.addValue(i, r)),
        r
    }
    readValue(i, a) {
        let r = this.latestValues[i] !== void 0 || !this.current ? this.latestValues[i] : this.getBaseTargetFromProps(this.props, i) ?? this.readValueFromInstance(this.current, i, this.options);
        return r != null && (typeof r == "string" && (g1(r) || x1(r)) ? r = parseFloat(r) : !Fj(r) && Ji.test(a) && (r = aS(i, a)),
        this.setBaseTarget(i, _e(r) ? r.get() : r)),
        _e(r) ? r.get() : r
    }
    setBaseTarget(i, a) {
        this.baseTarget[i] = a
    }
    getBaseTarget(i) {
        const {initial: a} = this.props;
        let r;
        if (typeof a == "string" || typeof a == "object") {
            const u = qh(this.props, a, this.presenceContext?.custom);
            u && (r = u[i])
        }
        if (a && r !== void 0)
            return r;
        const o = this.getBaseTargetFromProps(this.props, i);
        return o !== void 0 && !_e(o) ? o : this.initialValues[i] !== void 0 && r === void 0 ? void 0 : this.baseTarget[i]
    }
    on(i, a) {
        return this.events[i] || (this.events[i] = new Nh),
        this.events[i].add(a)
    }
    notify(i, ...a) {
        this.events[i] && this.events[i].notify(...a)
    }
    scheduleRenderMicrotask() {
        Yh.render(this.render)
    }
}
class $i {
    constructor(i) {
        this.isMounted = !1,
        this.node = i
    }
    update() {}
}
class pS extends Zj {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = _j
    }
    sortInstanceNodePosition(i, a) {
        return i.compareDocumentPosition(a) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(i, a) {
        const r = i.style;
        return r ? r[a] : void 0
    }
    removeValueFromRenderState(i, {vars: a, style: r}) {
        delete a[i],
        delete r[i]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: i} = this.props;
        _e(i) && (this.childSubscription = i.on("change", a => {
            this.current && (this.current.textContent = `${a}`)
        }
        ))
    }
}
function yS({top: e, left: i, right: a, bottom: r}) {
    return {
        x: {
            min: i,
            max: a
        },
        y: {
            min: e,
            max: r
        }
    }
}
function Ij({x: e, y: i}) {
    return {
        top: i.min,
        right: e.max,
        bottom: i.max,
        left: e.min
    }
}
function Wj(e, i) {
    if (!i)
        return e;
    const a = i({
        x: e.left,
        y: e.top
    })
      , r = i({
        x: e.right,
        y: e.bottom
    });
    return {
        top: a.y,
        left: a.x,
        bottom: r.y,
        right: r.x
    }
}
function cd(e) {
    return e === void 0 || e === 1
}
function Id({scale: e, scaleX: i, scaleY: a}) {
    return !cd(e) || !cd(i) || !cd(a)
}
function Ts(e) {
    return Id(e) || gS(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function gS(e) {
    return S0(e.x) || S0(e.y)
}
function S0(e) {
    return e && e !== "0%"
}
function nc(e, i, a) {
    const r = e - a
      , o = i * r;
    return a + o
}
function w0(e, i, a, r, o) {
    return o !== void 0 && (e = nc(e, o, r)),
    nc(e, a, r) + i
}
function Wd(e, i=0, a=1, r, o) {
    e.min = w0(e.min, i, a, r, o),
    e.max = w0(e.max, i, a, r, o)
}
function vS(e, {x: i, y: a}) {
    Wd(e.x, i.translate, i.scale, i.originPoint),
    Wd(e.y, a.translate, a.scale, a.originPoint)
}
const T0 = .999999999999
  , A0 = 1.0000000000001;
function Jj(e, i, a, r=!1) {
    const o = a.length;
    if (!o)
        return;
    i.x = i.y = 1;
    let u, f;
    for (let h = 0; h < o; h++) {
        u = a[h],
        f = u.projectionDelta;
        const {visualElement: m} = u.options;
        m && m.props.style && m.props.style.display === "contents" || (r && u.options.layoutScroll && u.scroll && u !== u.root && Ta(e, {
            x: -u.scroll.offset.x,
            y: -u.scroll.offset.y
        }),
        f && (i.x *= f.x.scale,
        i.y *= f.y.scale,
        vS(e, f)),
        r && Ts(u.latestValues) && Ta(e, u.latestValues))
    }
    i.x < A0 && i.x > T0 && (i.x = 1),
    i.y < A0 && i.y > T0 && (i.y = 1)
}
function wa(e, i) {
    e.min = e.min + i,
    e.max = e.max + i
}
function E0(e, i, a, r, o=.5) {
    const u = ne(e.min, e.max, o);
    Wd(e, i, a, u, r)
}
function Ta(e, i) {
    E0(e.x, i.x, i.scaleX, i.scale, i.originX),
    E0(e.y, i.y, i.scaleY, i.scale, i.originY)
}
function xS(e, i) {
    return yS(Wj(e.getBoundingClientRect(), i))
}
function $j(e, i, a) {
    const r = xS(e, a)
      , {scroll: o} = i;
    return o && (wa(r.x, o.offset.x),
    wa(r.y, o.offset.y)),
    r
}
const tO = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , eO = Va.length;
function nO(e, i, a) {
    let r = ""
      , o = !0;
    for (let u = 0; u < eO; u++) {
        const f = Va[u]
          , h = e[f];
        if (h === void 0)
            continue;
        let m = !0;
        if (typeof h == "number" ? m = h === (f.startsWith("scale") ? 1 : 0) : m = parseFloat(h) === 0,
        !m || a) {
            const p = rS(h, Gh[f]);
            if (!m) {
                o = !1;
                const g = tO[f] || f;
                r += `${g}(${p}) `
            }
            a && (i[f] = p)
        }
    }
    return r = r.trim(),
    a ? r = a(i, o ? "" : r) : o && (r = "none"),
    r
}
function Zh(e, i, a) {
    const {style: r, vars: o, transformOrigin: u} = e;
    let f = !1
      , h = !1;
    for (const m in i) {
        const p = i[m];
        if (za.has(m)) {
            f = !0;
            continue
        } else if (_1(m)) {
            o[m] = p;
            continue
        } else {
            const g = rS(p, Gh[m]);
            m.startsWith("origin") ? (h = !0,
            u[m] = g) : r[m] = g
        }
    }
    if (i.transform || (f || a ? r.transform = nO(i, e.transform, a) : r.transform && (r.transform = "none")),
    h) {
        const {originX: m="50%", originY: p="50%", originZ: g=0} = u;
        r.transformOrigin = `${m} ${p} ${g}`
    }
}
function bS(e, {style: i, vars: a}, r, o) {
    const u = e.style;
    let f;
    for (f in i)
        u[f] = i[f];
    o?.applyProjectionStyles(u, r);
    for (f in a)
        u.setProperty(f, a[f])
}
function C0(e, i) {
    return i.max === i.min ? 0 : e / (i.max - i.min) * 100
}
const Rr = {
    correct: (e, i) => {
        if (!i.target)
            return e;
        if (typeof e == "string")
            if (lt.test(e))
                e = parseFloat(e);
            else
                return e;
        const a = C0(e, i.target.x)
          , r = C0(e, i.target.y);
        return `${a}% ${r}%`
    }
}
  , iO = {
    correct: (e, {treeScale: i, projectionDelta: a}) => {
        const r = e
          , o = Ji.parse(e);
        if (o.length > 5)
            return r;
        const u = Ji.createTransformer(e)
          , f = typeof o[0] != "number" ? 1 : 0
          , h = a.x.scale * i.x
          , m = a.y.scale * i.y;
        o[0 + f] /= h,
        o[1 + f] /= m;
        const p = ne(h, m, .5);
        return typeof o[2 + f] == "number" && (o[2 + f] /= p),
        typeof o[3 + f] == "number" && (o[3 + f] /= p),
        u(o)
    }
}
  , Jd = {
    borderRadius: {
        ...Rr,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Rr,
    borderTopRightRadius: Rr,
    borderBottomLeftRadius: Rr,
    borderBottomRightRadius: Rr,
    boxShadow: iO
};
function SS(e, {layout: i, layoutId: a}) {
    return za.has(e) || e.startsWith("origin") || (i || a !== void 0) && (!!Jd[e] || e === "opacity")
}
function Ih(e, i, a) {
    const r = e.style
      , o = i?.style
      , u = {};
    if (!r)
        return u;
    for (const f in r)
        (_e(r[f]) || o && _e(o[f]) || SS(f, e) || a?.getValue(f)?.liveStyle !== void 0) && (u[f] = r[f]);
    return u
}
function sO(e) {
    return window.getComputedStyle(e)
}
class aO extends pS {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = bS
    }
    readValueFromInstance(i, a) {
        if (za.has(a))
            return this.projection?.isProjecting ? Bd(a) : VR(i, a);
        {
            const r = sO(i)
              , o = (_1(a) ? r.getPropertyValue(a) : r[a]) || 0;
            return typeof o == "string" ? o.trim() : o
        }
    }
    measureInstanceViewportBox(i, {transformPagePoint: a}) {
        return xS(i, a)
    }
    build(i, a, r) {
        Zh(i, a, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(i, a, r) {
        return Ih(i, a, r)
    }
}
const rO = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , lO = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function oO(e, i, a=1, r=0, o=!0) {
    e.pathLength = 1;
    const u = o ? rO : lO;
    e[u.offset] = lt.transform(-r);
    const f = lt.transform(i)
      , h = lt.transform(a);
    e[u.array] = `${f} ${h}`
}
const cO = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function wS(e, {attrX: i, attrY: a, attrScale: r, pathLength: o, pathSpacing: u=1, pathOffset: f=0, ...h}, m, p, g) {
    if (Zh(e, h, p),
    m) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: x, style: S} = e;
    x.transform && (S.transform = x.transform,
    delete x.transform),
    (S.transform || x.transformOrigin) && (S.transformOrigin = x.transformOrigin ?? "50% 50%",
    delete x.transformOrigin),
    S.transform && (S.transformBox = g?.transformBox ?? "fill-box",
    delete x.transformBox);
    for (const w of cO)
        x[w] !== void 0 && (S[w] = x[w],
        delete x[w]);
    i !== void 0 && (x.x = i),
    a !== void 0 && (x.y = a),
    r !== void 0 && (x.scale = r),
    o !== void 0 && oO(x, o, u, f, !1)
}
const TS = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
  , AS = e => typeof e == "string" && e.toLowerCase() === "svg";
function uO(e, i, a, r) {
    bS(e, i, void 0, r);
    for (const o in i.attrs)
        e.setAttribute(TS.has(o) ? o : Fh(o), i.attrs[o])
}
function ES(e, i, a) {
    const r = Ih(e, i, a);
    for (const o in e)
        if (_e(e[o]) || _e(i[o])) {
            const u = Va.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
            r[u] = e[o]
        }
    return r
}
class fO extends pS {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = ve
    }
    getBaseTargetFromProps(i, a) {
        return i[a]
    }
    readValueFromInstance(i, a) {
        if (za.has(a)) {
            const r = sS(a);
            return r && r.default || 0
        }
        return a = TS.has(a) ? a : Fh(a),
        i.getAttribute(a)
    }
    scrapeMotionValuesFromProps(i, a, r) {
        return ES(i, a, r)
    }
    build(i, a, r) {
        wS(i, a, this.isSVGTag, r.transformTemplate, r.style)
    }
    renderInstance(i, a, r, o) {
        uO(i, a, r, o)
    }
    mount(i) {
        this.isSVGTag = AS(i.tagName),
        super.mount(i)
    }
}
const dO = Kh.length;
function CS(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const a = e.parent ? CS(e.parent) || {} : {};
        return e.props.initial !== void 0 && (a.initial = e.props.initial),
        a
    }
    const i = {};
    for (let a = 0; a < dO; a++) {
        const r = Kh[a]
          , o = e.props[r];
        (Ir(o) || o === !1) && (i[r] = o)
    }
    return i
}
function MS(e, i) {
    if (!Array.isArray(i))
        return !1;
    const a = i.length;
    if (a !== e.length)
        return !1;
    for (let r = 0; r < a; r++)
        if (i[r] !== e[r])
            return !1;
    return !0
}
const hO = [...Qh].reverse()
  , mO = Qh.length;
function pO(e) {
    return i => Promise.all(i.map( ({animation: a, options: r}) => Tj(e, a, r)))
}
function yO(e) {
    let i = pO(e)
      , a = M0()
      , r = !0;
    const o = m => (p, g) => {
        const x = Ea(e, g, m === "exit" ? e.presenceContext?.custom : void 0);
        if (x) {
            const {transition: S, transitionEnd: w, ...E} = x;
            p = {
                ...p,
                ...E,
                ...w
            }
        }
        return p
    }
    ;
    function u(m) {
        i = m(e)
    }
    function f(m) {
        const {props: p} = e
          , g = CS(e.parent) || {}
          , x = []
          , S = new Set;
        let w = {}
          , E = 1 / 0;
        for (let M = 0; M < mO; M++) {
            const j = hO[M]
              , O = a[j]
              , V = p[j] !== void 0 ? p[j] : g[j]
              , G = Ir(V)
              , H = j === m ? O.isActive : null;
            H === !1 && (E = M);
            let J = V === g[j] && V !== p[j] && G;
            if (J && r && e.manuallyAnimateOnMount && (J = !1),
            O.protectedKeys = {
                ...w
            },
            !O.isActive && H === null || !V && !O.prevProp || wc(V) || typeof V == "boolean")
                continue;
            const Z = gO(O.prevProp, V);
            let Y = Z || j === m && O.isActive && !J && G || M > E && G
              , ot = !1;
            const ht = Array.isArray(V) ? V : [V];
            let Tt = ht.reduce(o(j), {});
            H === !1 && (Tt = {});
            const {prevResolvedValues: at={}} = O
              , ct = {
                ...at,
                ...Tt
            }
              , tt = q => {
                Y = !0,
                S.has(q) && (ot = !0,
                S.delete(q)),
                O.needsAnimating[q] = !0;
                const k = e.getValue(q);
                k && (k.liveStyle = !1)
            }
            ;
            for (const q in ct) {
                const k = Tt[q]
                  , rt = at[q];
                if (w.hasOwnProperty(q))
                    continue;
                let xt = !1;
                Yd(k) && Yd(rt) ? xt = !MS(k, rt) : xt = k !== rt,
                xt ? k != null ? tt(q) : S.add(q) : k !== void 0 && S.has(q) ? tt(q) : O.protectedKeys[q] = !0
            }
            O.prevProp = V,
            O.prevResolvedValues = Tt,
            O.isActive && (w = {
                ...w,
                ...Tt
            }),
            r && e.blockInitialAnimation && (Y = !1);
            const mt = J && Z;
            Y && (!mt || ot) && x.push(...ht.map(q => {
                const k = {
                    type: j
                };
                if (typeof q == "string" && r && !mt && e.manuallyAnimateOnMount && e.parent) {
                    const {parent: rt} = e
                      , xt = Ea(rt, q);
                    if (rt.enteringChildren && xt) {
                        const {delayChildren: D} = xt.transition || {};
                        k.delay = W1(rt.enteringChildren, e, D)
                    }
                }
                return {
                    animation: q,
                    options: k
                }
            }
            ))
        }
        if (S.size) {
            const M = {};
            if (typeof p.initial != "boolean") {
                const j = Ea(e, Array.isArray(p.initial) ? p.initial[0] : p.initial);
                j && j.transition && (M.transition = j.transition)
            }
            S.forEach(j => {
                const O = e.getBaseTarget(j)
                  , V = e.getValue(j);
                V && (V.liveStyle = !0),
                M[j] = O ?? null
            }
            ),
            x.push({
                animation: M
            })
        }
        let A = !!x.length;
        return r && (p.initial === !1 || p.initial === p.animate) && !e.manuallyAnimateOnMount && (A = !1),
        r = !1,
        A ? i(x) : Promise.resolve()
    }
    function h(m, p) {
        if (a[m].isActive === p)
            return Promise.resolve();
        e.variantChildren?.forEach(x => x.animationState?.setActive(m, p)),
        a[m].isActive = p;
        const g = f(m);
        for (const x in a)
            a[x].protectedKeys = {};
        return g
    }
    return {
        animateChanges: f,
        setActive: h,
        setAnimateFunction: u,
        getState: () => a,
        reset: () => {
            a = M0()
        }
    }
}
function gO(e, i) {
    return typeof i == "string" ? i !== e : Array.isArray(i) ? !MS(i, e) : !1
}
function Ss(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function M0() {
    return {
        animate: Ss(!0),
        whileInView: Ss(),
        whileHover: Ss(),
        whileTap: Ss(),
        whileDrag: Ss(),
        whileFocus: Ss(),
        exit: Ss()
    }
}
const NS = 1e-4
  , vO = 1 - NS
  , xO = 1 + NS
  , DS = .01
  , bO = 0 - DS
  , SO = 0 + DS;
function Be(e) {
    return e.max - e.min
}
function wO(e, i, a) {
    return Math.abs(e - i) <= a
}
function N0(e, i, a, r=.5) {
    e.origin = r,
    e.originPoint = ne(i.min, i.max, e.origin),
    e.scale = Be(a) / Be(i),
    e.translate = ne(a.min, a.max, e.origin) - e.originPoint,
    (e.scale >= vO && e.scale <= xO || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= bO && e.translate <= SO || isNaN(e.translate)) && (e.translate = 0)
}
function Br(e, i, a, r) {
    N0(e.x, i.x, a.x, r ? r.originX : void 0),
    N0(e.y, i.y, a.y, r ? r.originY : void 0)
}
function D0(e, i, a) {
    e.min = a.min + i.min,
    e.max = e.min + Be(i)
}
function TO(e, i, a) {
    D0(e.x, i.x, a.x),
    D0(e.y, i.y, a.y)
}
function R0(e, i, a) {
    e.min = i.min - a.min,
    e.max = e.min + Be(i)
}
function ic(e, i, a) {
    R0(e.x, i.x, a.x),
    R0(e.y, i.y, a.y)
}
function j0(e, i, a, r, o) {
    return e -= i,
    e = nc(e, 1 / a, r),
    o !== void 0 && (e = nc(e, 1 / o, r)),
    e
}
function AO(e, i=0, a=1, r=.5, o, u=e, f=e) {
    if (Fn.test(i) && (i = parseFloat(i),
    i = ne(f.min, f.max, i / 100) - f.min),
    typeof i != "number")
        return;
    let h = ne(u.min, u.max, r);
    e === u && (h -= i),
    e.min = j0(e.min, i, a, h, o),
    e.max = j0(e.max, i, a, h, o)
}
function O0(e, i, [a,r,o], u, f) {
    AO(e, i[a], i[r], i[o], i.scale, u, f)
}
const EO = ["x", "scaleX", "originX"]
  , CO = ["y", "scaleY", "originY"];
function _0(e, i, a, r) {
    O0(e.x, i, EO, a ? a.x : void 0, r ? r.x : void 0),
    O0(e.y, i, CO, a ? a.y : void 0, r ? r.y : void 0)
}
function V0(e, i) {
    e.min = i.min,
    e.max = i.max
}
function Cn(e, i) {
    V0(e.x, i.x),
    V0(e.y, i.y)
}
function z0(e, i) {
    e.translate = i.translate,
    e.scale = i.scale,
    e.originPoint = i.originPoint,
    e.origin = i.origin
}
function L0(e) {
    return e.translate === 0 && e.scale === 1
}
function RS(e) {
    return L0(e.x) && L0(e.y)
}
function U0(e, i) {
    return e.min === i.min && e.max === i.max
}
function MO(e, i) {
    return U0(e.x, i.x) && U0(e.y, i.y)
}
function k0(e, i) {
    return Math.round(e.min) === Math.round(i.min) && Math.round(e.max) === Math.round(i.max)
}
function jS(e, i) {
    return k0(e.x, i.x) && k0(e.y, i.y)
}
function B0(e) {
    return Be(e.x) / Be(e.y)
}
function P0(e, i) {
    return e.translate === i.translate && e.scale === i.scale && e.originPoint === i.originPoint
}
function xn(e) {
    return [e("x"), e("y")]
}
function NO(e, i, a) {
    let r = "";
    const o = e.x.translate / i.x
      , u = e.y.translate / i.y
      , f = a?.z || 0;
    if ((o || u || f) && (r = `translate3d(${o}px, ${u}px, ${f}px) `),
    (i.x !== 1 || i.y !== 1) && (r += `scale(${1 / i.x}, ${1 / i.y}) `),
    a) {
        const {transformPerspective: p, rotate: g, rotateX: x, rotateY: S, skewX: w, skewY: E} = a;
        p && (r = `perspective(${p}px) ${r}`),
        g && (r += `rotate(${g}deg) `),
        x && (r += `rotateX(${x}deg) `),
        S && (r += `rotateY(${S}deg) `),
        w && (r += `skewX(${w}deg) `),
        E && (r += `skewY(${E}deg) `)
    }
    const h = e.x.scale * i.x
      , m = e.y.scale * i.y;
    return (h !== 1 || m !== 1) && (r += `scale(${h}, ${m})`),
    r || "none"
}
const OS = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , DO = OS.length
  , H0 = e => typeof e == "string" ? parseFloat(e) : e
  , q0 = e => typeof e == "number" || lt.test(e);
function RO(e, i, a, r, o, u) {
    o ? (e.opacity = ne(0, a.opacity ?? 1, jO(r)),
    e.opacityExit = ne(i.opacity ?? 1, 0, OO(r))) : u && (e.opacity = ne(i.opacity ?? 1, a.opacity ?? 1, r));
    for (let f = 0; f < DO; f++) {
        const h = `border${OS[f]}Radius`;
        let m = F0(i, h)
          , p = F0(a, h);
        if (m === void 0 && p === void 0)
            continue;
        m || (m = 0),
        p || (p = 0),
        m === 0 || p === 0 || q0(m) === q0(p) ? (e[h] = Math.max(ne(H0(m), H0(p), r), 0),
        (Fn.test(p) || Fn.test(m)) && (e[h] += "%")) : e[h] = p
    }
    (i.rotate || a.rotate) && (e.rotate = ne(i.rotate || 0, a.rotate || 0, r))
}
function F0(e, i) {
    return e[i] !== void 0 ? e[i] : e.borderRadius
}
const jO = _S(0, .5, M1)
  , OO = _S(.5, .95, wn);
function _S(e, i, a) {
    return r => r < e ? 0 : r > i ? 1 : a(Qr(e, i, r))
}
function _O(e, i) {
    const a = ke.now()
      , r = ({timestamp: o}) => {
        const u = o - a;
        u >= i && (Wi(r),
        e(u - i))
    }
    ;
    return Wt.setup(r, !0),
    () => Wi(r)
}
function Wr(e, i, a, r={
    passive: !0
}) {
    return e.addEventListener(i, a, r),
    () => e.removeEventListener(i, a)
}
function Fo(e) {
    return _e(e) ? e.get() : e
}
function VO(e, i, a) {
    const r = _e(e) ? e : Na(e);
    return r.start(Hh("", r, i, a)),
    r.animation
}
const zO = (e, i) => e.depth - i.depth;
class LO {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(i) {
        Ah(this.children, i),
        this.isDirty = !0
    }
    remove(i) {
        Eh(this.children, i),
        this.isDirty = !0
    }
    forEach(i) {
        this.isDirty && this.children.sort(zO),
        this.isDirty = !1,
        this.children.forEach(i)
    }
}
class UO {
    constructor() {
        this.members = []
    }
    add(i) {
        Ah(this.members, i),
        i.scheduleRender()
    }
    remove(i) {
        if (Eh(this.members, i),
        i === this.prevLead && (this.prevLead = void 0),
        i === this.lead) {
            const a = this.members[this.members.length - 1];
            a && this.promote(a)
        }
    }
    relegate(i) {
        const a = this.members.findIndex(o => i === o);
        if (a === 0)
            return !1;
        let r;
        for (let o = a; o >= 0; o--) {
            const u = this.members[o];
            if (u.isPresent !== !1) {
                r = u;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(i, a) {
        const r = this.lead;
        if (i !== r && (this.prevLead = r,
        this.lead = i,
        i.show(),
        r)) {
            r.instance && r.scheduleRender(),
            i.scheduleRender(),
            i.resumeFrom = r,
            a && (i.resumeFrom.preserveOpacity = !0),
            r.snapshot && (i.snapshot = r.snapshot,
            i.snapshot.latestValues = r.animationValues || r.latestValues),
            i.root && i.root.isUpdating && (i.isLayoutDirty = !0);
            const {crossfade: o} = i.options;
            o === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(i => {
            const {options: a, resumingFrom: r} = i;
            a.onExitComplete && a.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(i => {
            i.instance && i.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
const Go = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
}
  , ud = ["", "X", "Y", "Z"]
  , kO = 1e3;
let BO = 0;
function fd(e, i, a, r) {
    const {latestValues: o} = i;
    o[e] && (a[e] = o[e],
    i.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function VS(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: i} = e.options;
    if (!i)
        return;
    const a = tS(i);
    if (window.MotionHasOptimisedAnimation(a, "transform")) {
        const {layout: o, layoutId: u} = e.options;
        window.MotionCancelOptimisedAnimation(a, "transform", Wt, !(o || u))
    }
    const {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && VS(r)
}
function zS({attachResizeListener: e, defaultParent: i, measureScroll: a, checkIsScrollRoot: r, resetTransform: o}) {
    return class {
        constructor(f={}, h=i?.()) {
            this.id = BO++,
            this.animationId = 0,
            this.animationCommitId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.layoutVersion = 0,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(qO),
                this.nodes.forEach(XO),
                this.nodes.forEach(QO),
                this.nodes.forEach(FO)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.linkedParentVersion = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = f,
            this.root = h ? h.root || h : this,
            this.path = h ? [...h.path, h] : [],
            this.parent = h,
            this.depth = h ? h.depth + 1 : 0;
            for (let m = 0; m < this.path.length; m++)
                this.path[m].shouldResetTransform = !0;
            this.root === this && (this.nodes = new LO)
        }
        addEventListener(f, h) {
            return this.eventHandlers.has(f) || this.eventHandlers.set(f, new Nh),
            this.eventHandlers.get(f).add(h)
        }
        notifyListeners(f, ...h) {
            const m = this.eventHandlers.get(f);
            m && m.notify(...h)
        }
        hasListeners(f) {
            return this.eventHandlers.has(f)
        }
        mount(f) {
            if (this.instance)
                return;
            this.isSVG = fS(f) && !Hj(f),
            this.instance = f;
            const {layoutId: h, layout: m, visualElement: p} = this.options;
            if (p && !p.current && p.mount(f),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (m || h) && (this.isLayoutDirty = !0),
            e) {
                let g, x = 0;
                const S = () => this.root.updateBlockedByResize = !1;
                Wt.read( () => {
                    x = window.innerWidth
                }
                ),
                e(f, () => {
                    const w = window.innerWidth;
                    w !== x && (x = w,
                    this.root.updateBlockedByResize = !0,
                    g && g(),
                    g = _O(S, 250),
                    Go.hasAnimatedSinceResize && (Go.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(X0)))
                }
                )
            }
            h && this.root.registerSharedNode(h, this),
            this.options.animate !== !1 && p && (h || m) && this.addEventListener("didUpdate", ({delta: g, hasLayoutChanged: x, hasRelativeLayoutChanged: S, layout: w}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const E = this.options.transition || p.getDefaultTransition() || JO
                  , {onLayoutAnimationStart: A, onLayoutAnimationComplete: M} = p.getProps()
                  , j = !this.targetLayout || !jS(this.targetLayout, w)
                  , O = !x && S;
                if (this.options.layoutRoot || this.resumeFrom || O || x && (j || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const V = {
                        ...Ph(E, "layout"),
                        onPlay: A,
                        onComplete: M
                    };
                    (p.shouldReduceMotion || this.options.layoutRoot) && (V.delay = 0,
                    V.type = !1),
                    this.startAnimation(V),
                    this.setAnimationOrigin(g, O)
                } else
                    x || X0(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = w
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const f = this.getStack();
            f && f.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            Wi(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(KO),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: f} = this.options;
            return f && f.getProps().transformTemplate
        }
        willUpdate(f=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && VS(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let g = 0; g < this.path.length; g++) {
                const x = this.path[g];
                x.shouldResetTransform = !0,
                x.updateScroll("snapshot"),
                x.options.layoutRoot && x.willUpdate(!1)
            }
            const {layoutId: h, layout: m} = this.options;
            if (h === void 0 && !m)
                return;
            const p = this.getTransformTemplate();
            this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            f && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(G0);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(Y0);
                return
            }
            this.animationCommitId = this.animationId,
            this.isUpdating ? (this.isUpdating = !1,
            this.nodes.forEach(YO),
            this.nodes.forEach(PO),
            this.nodes.forEach(HO)) : this.nodes.forEach(Y0),
            this.clearAllSnapshots();
            const h = ke.now();
            Re.delta = Yn(0, 1e3 / 60, h - Re.timestamp),
            Re.timestamp = h,
            Re.isProcessing = !0,
            nd.update.process(Re),
            nd.preRender.process(Re),
            nd.render.process(Re),
            Re.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Yh.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(GO),
            this.sharedNodes.forEach(ZO)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            Wt.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Wt.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !Be(this.snapshot.measuredBox.x) && !Be(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let m = 0; m < this.path.length; m++)
                    this.path[m].updateScroll();
            const f = this.layout;
            this.layout = this.measure(!1),
            this.layoutVersion++,
            this.layoutCorrected = ve(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: h} = this.options;
            h && h.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0)
        }
        updateScroll(f="measure") {
            let h = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f && (h = !1),
            h && this.instance) {
                const m = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: f,
                    isRoot: m,
                    offset: a(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : m
                }
            }
        }
        resetTransform() {
            if (!o)
                return;
            const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , h = this.projectionDelta && !RS(this.projectionDelta)
              , m = this.getTransformTemplate()
              , p = m ? m(this.latestValues, "") : void 0
              , g = p !== this.prevTransformTemplateValue;
            f && this.instance && (h || Ts(this.latestValues) || g) && (o(this.instance, p),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(f=!0) {
            const h = this.measurePageBox();
            let m = this.removeElementScroll(h);
            return f && (m = this.removeTransform(m)),
            $O(m),
            {
                animationId: this.root.animationId,
                measuredBox: h,
                layoutBox: m,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {visualElement: f} = this.options;
            if (!f)
                return ve();
            const h = f.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(t3))) {
                const {scroll: p} = this.root;
                p && (wa(h.x, p.offset.x),
                wa(h.y, p.offset.y))
            }
            return h
        }
        removeElementScroll(f) {
            const h = ve();
            if (Cn(h, f),
            this.scroll?.wasRoot)
                return h;
            for (let m = 0; m < this.path.length; m++) {
                const p = this.path[m]
                  , {scroll: g, options: x} = p;
                p !== this.root && g && x.layoutScroll && (g.wasRoot && Cn(h, f),
                wa(h.x, g.offset.x),
                wa(h.y, g.offset.y))
            }
            return h
        }
        applyTransform(f, h=!1) {
            const m = ve();
            Cn(m, f);
            for (let p = 0; p < this.path.length; p++) {
                const g = this.path[p];
                !h && g.options.layoutScroll && g.scroll && g !== g.root && Ta(m, {
                    x: -g.scroll.offset.x,
                    y: -g.scroll.offset.y
                }),
                Ts(g.latestValues) && Ta(m, g.latestValues)
            }
            return Ts(this.latestValues) && Ta(m, this.latestValues),
            m
        }
        removeTransform(f) {
            const h = ve();
            Cn(h, f);
            for (let m = 0; m < this.path.length; m++) {
                const p = this.path[m];
                if (!p.instance || !Ts(p.latestValues))
                    continue;
                Id(p.latestValues) && p.updateSnapshot();
                const g = ve()
                  , x = p.measurePageBox();
                Cn(g, x),
                _0(h, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, g)
            }
            return Ts(this.latestValues) && _0(h, this.latestValues),
            h
        }
        setTargetDelta(f) {
            this.targetDelta = f,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(f) {
            this.options = {
                ...this.options,
                ...f,
                crossfade: f.crossfade !== void 0 ? f.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Re.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(f=!1) {
            const h = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
            const m = !!this.resumingFrom || this !== h;
            if (!(f || m && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: g, layoutId: x} = this.options;
            if (!this.layout || !(g || x))
                return;
            this.resolvedRelativeTargetAt = Re.timestamp;
            const S = this.getClosestProjectingParent();
            S && this.linkedParentVersion !== S.layoutVersion && !S.options.layoutRoot && this.removeRelativeTarget(),
            !this.targetDelta && !this.relativeTarget && (S && S.layout ? this.createRelativeTarget(S, this.layout.layoutBox, S.layout.layoutBox) : this.removeRelativeTarget()),
            !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ve(),
            this.targetWithTransforms = ve()),
            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
            TO(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Cn(this.target, this.layout.layoutBox),
            vS(this.target, this.targetDelta)) : Cn(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
            S && !!S.resumingFrom == !!this.resumingFrom && !S.options.layoutScroll && S.target && this.animationProgress !== 1 ? this.createRelativeTarget(S, this.target, S.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Id(this.parent.latestValues) || gS(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(f, h, m) {
            this.relativeParent = f,
            this.linkedParentVersion = f.layoutVersion,
            this.forceRelativeParentToResolveTarget(),
            this.relativeTarget = ve(),
            this.relativeTargetOrigin = ve(),
            ic(this.relativeTargetOrigin, h, m),
            Cn(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            const f = this.getLead()
              , h = !!this.resumingFrom || this !== f;
            let m = !0;
            if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (m = !1),
            h && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1),
            this.resolvedRelativeTargetAt === Re.timestamp && (m = !1),
            m)
                return;
            const {layout: p, layoutId: g} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(p || g))
                return;
            Cn(this.layoutCorrected, this.layout.layoutBox);
            const x = this.treeScale.x
              , S = this.treeScale.y;
            Jj(this.layoutCorrected, this.treeScale, this.path, h),
            f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox,
            f.targetWithTransforms = ve());
            const {target: w} = f;
            if (!w) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (z0(this.prevProjectionDelta.x, this.projectionDelta.x),
            z0(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Br(this.projectionDelta, this.layoutCorrected, w, this.latestValues),
            (this.treeScale.x !== x || this.treeScale.y !== S || !P0(this.projectionDelta.x, this.prevProjectionDelta.x) || !P0(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", w))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(f=!0) {
            if (this.options.visualElement?.scheduleRender(),
            f) {
                const h = this.getStack();
                h && h.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Sa(),
            this.projectionDelta = Sa(),
            this.projectionDeltaWithTransform = Sa()
        }
        setAnimationOrigin(f, h=!1) {
            const m = this.snapshot
              , p = m ? m.latestValues : {}
              , g = {
                ...this.latestValues
            }
              , x = Sa();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !h;
            const S = ve()
              , w = m ? m.source : void 0
              , E = this.layout ? this.layout.source : void 0
              , A = w !== E
              , M = this.getStack()
              , j = !M || M.members.length <= 1
              , O = !!(A && !j && this.options.crossfade === !0 && !this.path.some(WO));
            this.animationProgress = 0;
            let V;
            this.mixTargetDelta = G => {
                const H = G / 1e3;
                Q0(x.x, f.x, H),
                Q0(x.y, f.y, H),
                this.setTargetDelta(x),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ic(S, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                IO(this.relativeTarget, this.relativeTargetOrigin, S, H),
                V && MO(this.relativeTarget, V) && (this.isProjectionDirty = !1),
                V || (V = ve()),
                Cn(V, this.relativeTarget)),
                A && (this.animationValues = g,
                RO(g, p, this.latestValues, H, O, j)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = H
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(f) {
            this.notifyListeners("animationStart"),
            this.currentAnimation?.stop(),
            this.resumingFrom?.currentAnimation?.stop(),
            this.pendingAnimation && (Wi(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Wt.update( () => {
                Go.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = Na(0)),
                this.currentAnimation = VO(this.motionValue, [0, 1e3], {
                    ...f,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: h => {
                        this.mixTargetDelta(h),
                        f.onUpdate && f.onUpdate(h)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        f.onComplete && f.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const f = this.getStack();
            f && f.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(kO),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const f = this.getLead();
            let {targetWithTransforms: h, target: m, layout: p, latestValues: g} = f;
            if (!(!h || !m || !p)) {
                if (this !== f && this.layout && p && LS(this.options.animationType, this.layout.layoutBox, p.layoutBox)) {
                    m = this.target || ve();
                    const x = Be(this.layout.layoutBox.x);
                    m.x.min = f.target.x.min,
                    m.x.max = m.x.min + x;
                    const S = Be(this.layout.layoutBox.y);
                    m.y.min = f.target.y.min,
                    m.y.max = m.y.min + S
                }
                Cn(h, m),
                Ta(h, g),
                Br(this.projectionDeltaWithTransform, this.layoutCorrected, h, g)
            }
        }
        registerSharedNode(f, h) {
            this.sharedNodes.has(f) || this.sharedNodes.set(f, new UO),
            this.sharedNodes.get(f).add(h);
            const p = h.options.initialPromotionConfig;
            h.promote({
                transition: p ? p.transition : void 0,
                preserveFollowOpacity: p && p.shouldPreserveFollowOpacity ? p.shouldPreserveFollowOpacity(h) : void 0
            })
        }
        isLead() {
            const f = this.getStack();
            return f ? f.lead === this : !0
        }
        getLead() {
            const {layoutId: f} = this.options;
            return f ? this.getStack()?.lead || this : this
        }
        getPrevLead() {
            const {layoutId: f} = this.options;
            return f ? this.getStack()?.prevLead : void 0
        }
        getStack() {
            const {layoutId: f} = this.options;
            if (f)
                return this.root.sharedNodes.get(f)
        }
        promote({needsReset: f, transition: h, preserveFollowOpacity: m}={}) {
            const p = this.getStack();
            p && p.promote(this, m),
            f && (this.projectionDelta = void 0,
            this.needsReset = !0),
            h && this.setOptions({
                transition: h
            })
        }
        relegate() {
            const f = this.getStack();
            return f ? f.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: f} = this.options;
            if (!f)
                return;
            let h = !1;
            const {latestValues: m} = f;
            if ((m.z || m.rotate || m.rotateX || m.rotateY || m.rotateZ || m.skewX || m.skewY) && (h = !0),
            !h)
                return;
            const p = {};
            m.z && fd("z", f, p, this.animationValues);
            for (let g = 0; g < ud.length; g++)
                fd(`rotate${ud[g]}`, f, p, this.animationValues),
                fd(`skew${ud[g]}`, f, p, this.animationValues);
            f.render();
            for (const g in p)
                f.setStaticValue(g, p[g]),
                this.animationValues && (this.animationValues[g] = p[g]);
            f.scheduleRender()
        }
        applyProjectionStyles(f, h) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                f.visibility = "hidden";
                return
            }
            const m = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                f.visibility = "",
                f.opacity = "",
                f.pointerEvents = Fo(h?.pointerEvents) || "",
                f.transform = m ? m(this.latestValues, "") : "none";
                return
            }
            const p = this.getLead();
            if (!this.projectionDelta || !this.layout || !p.target) {
                this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                f.pointerEvents = Fo(h?.pointerEvents) || ""),
                this.hasProjected && !Ts(this.latestValues) && (f.transform = m ? m({}, "") : "none",
                this.hasProjected = !1);
                return
            }
            f.visibility = "";
            const g = p.animationValues || p.latestValues;
            this.applyTransformsToTarget();
            let x = NO(this.projectionDeltaWithTransform, this.treeScale, g);
            m && (x = m(g, x)),
            f.transform = x;
            const {x: S, y: w} = this.projectionDelta;
            f.transformOrigin = `${S.origin * 100}% ${w.origin * 100}% 0`,
            p.animationValues ? f.opacity = p === this ? g.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : g.opacityExit : f.opacity = p === this ? g.opacity !== void 0 ? g.opacity : "" : g.opacityExit !== void 0 ? g.opacityExit : 0;
            for (const E in Jd) {
                if (g[E] === void 0)
                    continue;
                const {correct: A, applyTo: M, isCSSVariable: j} = Jd[E]
                  , O = x === "none" ? g[E] : A(g[E], p);
                if (M) {
                    const V = M.length;
                    for (let G = 0; G < V; G++)
                        f[M[G]] = O
                } else
                    j ? this.options.visualElement.renderState.vars[E] = O : f[E] = O
            }
            this.options.layoutId && (f.pointerEvents = p === this ? Fo(h?.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(f => f.currentAnimation?.stop()),
            this.root.nodes.forEach(G0),
            this.root.sharedNodes.clear()
        }
    }
}
function PO(e) {
    e.updateLayout()
}
function HO(e) {
    const i = e.resumeFrom?.snapshot || e.snapshot;
    if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
        const {layoutBox: a, measuredBox: r} = e.layout
          , {animationType: o} = e.options
          , u = i.source !== e.layout.source;
        o === "size" ? xn(g => {
            const x = u ? i.measuredBox[g] : i.layoutBox[g]
              , S = Be(x);
            x.min = a[g].min,
            x.max = x.min + S
        }
        ) : LS(o, i.layoutBox, a) && xn(g => {
            const x = u ? i.measuredBox[g] : i.layoutBox[g]
              , S = Be(a[g]);
            x.max = x.min + S,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[g].max = e.relativeTarget[g].min + S)
        }
        );
        const f = Sa();
        Br(f, a, i.layoutBox);
        const h = Sa();
        u ? Br(h, e.applyTransform(r, !0), i.measuredBox) : Br(h, a, i.layoutBox);
        const m = !RS(f);
        let p = !1;
        if (!e.resumeFrom) {
            const g = e.getClosestProjectingParent();
            if (g && !g.resumeFrom) {
                const {snapshot: x, layout: S} = g;
                if (x && S) {
                    const w = ve();
                    ic(w, i.layoutBox, x.layoutBox);
                    const E = ve();
                    ic(E, a, S.layoutBox),
                    jS(w, E) || (p = !0),
                    g.options.layoutRoot && (e.relativeTarget = E,
                    e.relativeTargetOrigin = w,
                    e.relativeParent = g)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: a,
            snapshot: i,
            delta: h,
            layoutDelta: f,
            hasLayoutChanged: m,
            hasRelativeLayoutChanged: p
        })
    } else if (e.isLead()) {
        const {onExitComplete: a} = e.options;
        a && a()
    }
    e.options.transition = void 0
}
function qO(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function FO(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function GO(e) {
    e.clearSnapshot()
}
function G0(e) {
    e.clearMeasurements()
}
function Y0(e) {
    e.isLayoutDirty = !1
}
function YO(e) {
    const {visualElement: i} = e.options;
    i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function X0(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function XO(e) {
    e.resolveTargetDelta()
}
function QO(e) {
    e.calcProjection()
}
function KO(e) {
    e.resetSkewAndRotation()
}
function ZO(e) {
    e.removeLeadSnapshot()
}
function Q0(e, i, a) {
    e.translate = ne(i.translate, 0, a),
    e.scale = ne(i.scale, 1, a),
    e.origin = i.origin,
    e.originPoint = i.originPoint
}
function K0(e, i, a, r) {
    e.min = ne(i.min, a.min, r),
    e.max = ne(i.max, a.max, r)
}
function IO(e, i, a, r) {
    K0(e.x, i.x, a.x, r),
    K0(e.y, i.y, a.y, r)
}
function WO(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const JO = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Z0 = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , I0 = Z0("applewebkit/") && !Z0("chrome/") ? Math.round : wn;
function W0(e) {
    e.min = I0(e.min),
    e.max = I0(e.max)
}
function $O(e) {
    W0(e.x),
    W0(e.y)
}
function LS(e, i, a) {
    return e === "position" || e === "preserve-aspect" && !wO(B0(i), B0(a), .2)
}
function t3(e) {
    return e !== e.root && e.scroll?.wasRoot
}
const e3 = zS({
    attachResizeListener: (e, i) => Wr(e, "resize", i),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , dd = {
    current: void 0
}
  , US = zS({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!dd.current) {
            const e = new e3({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            dd.current = e
        }
        return dd.current
    }
    ,
    resetTransform: (e, i) => {
        e.style.transform = i !== void 0 ? i : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , kS = T.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
function n3(e=!0) {
    const i = T.useContext(Th);
    if (i === null)
        return [!0, null];
    const {isPresent: a, onExitComplete: r, register: o} = i
      , u = T.useId();
    T.useEffect( () => {
        if (e)
            return o(u)
    }
    , [e]);
    const f = T.useCallback( () => e && r && r(u), [u, r, e]);
    return !a && r ? [!1, f] : [!0]
}
const BS = T.createContext({
    strict: !1
})
  , J0 = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
};
let $0 = !1;
function i3() {
    if ($0)
        return;
    const e = {};
    for (const i in J0)
        e[i] = {
            isEnabled: a => J0[i].some(r => !!a[r])
        };
    mS(e),
    $0 = !0
}
function PS() {
    return i3(),
    Kj()
}
function s3(e) {
    const i = PS();
    for (const a in e)
        i[a] = {
            ...i[a],
            ...e[a]
        };
    mS(i)
}
const a3 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function sc(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || a3.has(e)
}
let HS = e => !sc(e);
function r3(e) {
    typeof e == "function" && (HS = i => i.startsWith("on") ? !sc(i) : e(i))
}
try {
    r3(require("@emotion/is-prop-valid").default)
} catch {}
function l3(e, i, a) {
    const r = {};
    for (const o in e)
        o === "values" && typeof e.values == "object" || (HS(o) || a === !0 && sc(o) || !i && !sc(o) || e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
    return r
}
const Ac = T.createContext({});
function o3(e, i) {
    if (Tc(e)) {
        const {initial: a, animate: r} = e;
        return {
            initial: a === !1 || Ir(a) ? a : void 0,
            animate: Ir(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? i : {}
}
function c3(e) {
    const {initial: i, animate: a} = o3(e, T.useContext(Ac));
    return T.useMemo( () => ({
        initial: i,
        animate: a
    }), [tx(i), tx(a)])
}
function tx(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Wh = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function qS(e, i, a) {
    for (const r in i)
        !_e(i[r]) && !SS(r, a) && (e[r] = i[r])
}
function u3({transformTemplate: e}, i) {
    return T.useMemo( () => {
        const a = Wh();
        return Zh(a, i, e),
        Object.assign({}, a.vars, a.style)
    }
    , [i])
}
function f3(e, i) {
    const a = e.style || {}
      , r = {};
    return qS(r, a, e),
    Object.assign(r, u3(e, i)),
    r
}
function d3(e, i) {
    const a = {}
      , r = f3(e, i);
    return e.drag && e.dragListener !== !1 && (a.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (a.tabIndex = 0),
    a.style = r,
    a
}
const FS = () => ({
    ...Wh(),
    attrs: {}
});
function h3(e, i, a, r) {
    const o = T.useMemo( () => {
        const u = FS();
        return wS(u, i, AS(r), e.transformTemplate, e.style),
        {
            ...u.attrs,
            style: {
                ...u.style
            }
        }
    }
    , [i]);
    if (e.style) {
        const u = {};
        qS(u, e.style, e),
        o.style = {
            ...u,
            ...o.style
        }
    }
    return o
}
const m3 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Jh(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(m3.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function p3(e, i, a, {latestValues: r}, o, u=!1, f) {
    const m = (f ?? Jh(e) ? h3 : d3)(i, r, o, e)
      , p = l3(i, typeof e == "string", u)
      , g = e !== T.Fragment ? {
        ...p,
        ...m,
        ref: a
    } : {}
      , {children: x} = i
      , S = T.useMemo( () => _e(x) ? x.get() : x, [x]);
    return T.createElement(e, {
        ...g,
        children: S
    })
}
function y3({scrapeMotionValuesFromProps: e, createRenderState: i}, a, r, o) {
    return {
        latestValues: g3(a, r, o, e),
        renderState: i()
    }
}
function g3(e, i, a, r) {
    const o = {}
      , u = r(e, {});
    for (const S in u)
        o[S] = Fo(u[S]);
    let {initial: f, animate: h} = e;
    const m = Tc(e)
      , p = hS(e);
    i && p && !m && e.inherit !== !1 && (f === void 0 && (f = i.initial),
    h === void 0 && (h = i.animate));
    let g = a ? a.initial === !1 : !1;
    g = g || f === !1;
    const x = g ? h : f;
    if (x && typeof x != "boolean" && !wc(x)) {
        const S = Array.isArray(x) ? x : [x];
        for (let w = 0; w < S.length; w++) {
            const E = qh(e, S[w]);
            if (E) {
                const {transitionEnd: A, transition: M, ...j} = E;
                for (const O in j) {
                    let V = j[O];
                    if (Array.isArray(V)) {
                        const G = g ? V.length - 1 : 0;
                        V = V[G]
                    }
                    V !== null && (o[O] = V)
                }
                for (const O in A)
                    o[O] = A[O]
            }
        }
    }
    return o
}
const GS = e => (i, a) => {
    const r = T.useContext(Ac)
      , o = T.useContext(Th)
      , u = () => y3(e, i, r, o);
    return a ? u() : RD(u)
}
  , v3 = GS({
    scrapeMotionValuesFromProps: Ih,
    createRenderState: Wh
})
  , x3 = GS({
    scrapeMotionValuesFromProps: ES,
    createRenderState: FS
})
  , b3 = Symbol.for("motionComponentSymbol");
function S3(e, i, a) {
    const r = T.useRef(a);
    T.useInsertionEffect( () => {
        r.current = a
    }
    );
    const o = T.useRef(null);
    return T.useCallback(u => {
        u && e.onMount?.(u),
        i && (u ? i.mount(u) : i.unmount());
        const f = r.current;
        if (typeof f == "function")
            if (u) {
                const h = f(u);
                typeof h == "function" && (o.current = h)
            } else
                o.current ? (o.current(),
                o.current = null) : f(u);
        else
            f && (f.current = u)
    }
    , [i])
}
const YS = T.createContext({});
function _r(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function w3(e, i, a, r, o, u) {
    const {visualElement: f} = T.useContext(Ac)
      , h = T.useContext(BS)
      , m = T.useContext(Th)
      , p = T.useContext(kS).reducedMotion
      , g = T.useRef(null);
    r = r || h.renderer,
    !g.current && r && (g.current = r(e, {
        visualState: i,
        parent: f,
        props: a,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: p,
        isSVG: u
    }));
    const x = g.current
      , S = T.useContext(YS);
    x && !x.projection && o && (x.type === "html" || x.type === "svg") && T3(g.current, a, o, S);
    const w = T.useRef(!1);
    T.useInsertionEffect( () => {
        x && w.current && x.update(a, m)
    }
    );
    const E = a[$1]
      , A = T.useRef(!!E && !window.MotionHandoffIsComplete?.(E) && window.MotionHasOptimisedAnimation?.(E));
    return jD( () => {
        x && (w.current = !0,
        window.MotionIsMounted = !0,
        x.updateFeatures(),
        x.scheduleRenderMicrotask(),
        A.current && x.animationState && x.animationState.animateChanges())
    }
    ),
    T.useEffect( () => {
        x && (!A.current && x.animationState && x.animationState.animateChanges(),
        A.current && (queueMicrotask( () => {
            window.MotionHandoffMarkAsComplete?.(E)
        }
        ),
        A.current = !1),
        x.enteringChildren = void 0)
    }
    ),
    x
}
function T3(e, i, a, r) {
    const {layoutId: o, layout: u, drag: f, dragConstraints: h, layoutScroll: m, layoutRoot: p, layoutCrossfade: g} = i;
    e.projection = new a(e.latestValues,i["data-framer-portal-id"] ? void 0 : XS(e.parent)),
    e.projection.setOptions({
        layoutId: o,
        layout: u,
        alwaysMeasureLayout: !!f || h && _r(h),
        visualElement: e,
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: r,
        crossfade: g,
        layoutScroll: m,
        layoutRoot: p
    })
}
function XS(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : XS(e.parent)
}
function hd(e, {forwardMotionProps: i=!1, type: a}={}, r, o) {
    r && s3(r);
    const u = a ? a === "svg" : Jh(e)
      , f = u ? x3 : v3;
    function h(p, g) {
        let x;
        const S = {
            ...T.useContext(kS),
            ...p,
            layoutId: A3(p)
        }
          , {isStatic: w} = S
          , E = c3(p)
          , A = f(p, w);
        if (!w && y1) {
            E3();
            const M = C3(S);
            x = M.MeasureLayout,
            E.visualElement = w3(e, A, S, o, M.ProjectionNode, u)
        }
        return v.jsxs(Ac.Provider, {
            value: E,
            children: [x && E.visualElement ? v.jsx(x, {
                visualElement: E.visualElement,
                ...S
            }) : null, p3(e, p, S3(A, E.visualElement, g), A, w, i, u)]
        })
    }
    h.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
    const m = T.forwardRef(h);
    return m[b3] = e,
    m
}
function A3({layoutId: e}) {
    const i = T.useContext(p1).id;
    return i && e !== void 0 ? i + "-" + e : e
}
function E3(e, i) {
    T.useContext(BS).strict
}
function C3(e) {
    const i = PS()
      , {drag: a, layout: r} = i;
    if (!a && !r)
        return {};
    const o = {
        ...a,
        ...r
    };
    return {
        MeasureLayout: a?.isEnabled(e) || r?.isEnabled(e) ? o.MeasureLayout : void 0,
        ProjectionNode: o.ProjectionNode
    }
}
function M3(e, i) {
    if (typeof Proxy > "u")
        return hd;
    const a = new Map
      , r = (u, f) => hd(u, f, e, i)
      , o = (u, f) => r(u, f);
    return new Proxy(o,{
        get: (u, f) => f === "create" ? r : (a.has(f) || a.set(f, hd(f, void 0, e, i)),
        a.get(f))
    })
}
const N3 = (e, i) => i.isSVG ?? Jh(e) ? new fO(i) : new aO(i,{
    allowProjection: e !== T.Fragment
});
class D3 extends $i {
    constructor(i) {
        super(i),
        i.animationState || (i.animationState = yO(i))
    }
    updateAnimationControlsSubscription() {
        const {animate: i} = this.node.getProps();
        wc(i) && (this.unmountControls = i.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: i} = this.node.getProps()
          , {animate: a} = this.node.prevProps || {};
        i !== a && this.updateAnimationControlsSubscription()
    }
    unmount() {
        this.node.animationState.reset(),
        this.unmountControls?.()
    }
}
let R3 = 0;
class j3 extends $i {
    constructor() {
        super(...arguments),
        this.id = R3++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: i, onExitComplete: a} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || i === r)
            return;
        const o = this.node.animationState.setActive("exit", !i);
        a && !i && o.then( () => {
            a(this.id)
        }
        )
    }
    mount() {
        const {register: i, onExitComplete: a} = this.node.presenceContext || {};
        a && a(this.id),
        i && (this.unmount = i(this.id))
    }
    unmount() {}
}
const O3 = {
    animation: {
        Feature: D3
    },
    exit: {
        Feature: j3
    }
};
function al(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const _3 = e => i => Xh(i) && e(i, al(i));
function Pr(e, i, a, r) {
    return Wr(e, i, _3(a), r)
}
const QS = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , ex = (e, i) => Math.abs(e - i);
function V3(e, i) {
    const a = ex(e.x, i.x)
      , r = ex(e.y, i.y);
    return Math.sqrt(a ** 2 + r ** 2)
}
const nx = new Set(["auto", "scroll"]);
class KS {
    constructor(i, a, {transformPagePoint: r, contextWindow: o=window, dragSnapToOrigin: u=!1, distanceThreshold: f=3, element: h}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.scrollPositions = new Map,
        this.removeScrollListeners = null,
        this.onElementScroll = w => {
            this.handleScroll(w.target)
        }
        ,
        this.onWindowScroll = () => {
            this.handleScroll(window)
        }
        ,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const w = pd(this.lastMoveEventInfo, this.history)
              , E = this.startEvent !== null
              , A = V3(w.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!E && !A)
                return;
            const {point: M} = w
              , {timestamp: j} = Re;
            this.history.push({
                ...M,
                timestamp: j
            });
            const {onStart: O, onMove: V} = this.handlers;
            E || (O && O(this.lastMoveEvent, w),
            this.startEvent = this.lastMoveEvent),
            V && V(this.lastMoveEvent, w)
        }
        ,
        this.handlePointerMove = (w, E) => {
            this.lastMoveEvent = w,
            this.lastMoveEventInfo = md(E, this.transformPagePoint),
            Wt.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (w, E) => {
            this.end();
            const {onEnd: A, onSessionEnd: M, resumeAnimation: j} = this.handlers;
            if ((this.dragSnapToOrigin || !this.startEvent) && j && j(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const O = pd(w.type === "pointercancel" ? this.lastMoveEventInfo : md(E, this.transformPagePoint), this.history);
            this.startEvent && A && A(w, O),
            M && M(w, O)
        }
        ,
        !Xh(i))
            return;
        this.dragSnapToOrigin = u,
        this.handlers = a,
        this.transformPagePoint = r,
        this.distanceThreshold = f,
        this.contextWindow = o || window;
        const m = al(i)
          , p = md(m, this.transformPagePoint)
          , {point: g} = p
          , {timestamp: x} = Re;
        this.history = [{
            ...g,
            timestamp: x
        }];
        const {onSessionStart: S} = a;
        S && S(i, pd(p, this.history)),
        this.removeListeners = nl(Pr(this.contextWindow, "pointermove", this.handlePointerMove), Pr(this.contextWindow, "pointerup", this.handlePointerUp), Pr(this.contextWindow, "pointercancel", this.handlePointerUp)),
        h && this.startScrollTracking(h)
    }
    startScrollTracking(i) {
        let a = i.parentElement;
        for (; a; ) {
            const r = getComputedStyle(a);
            (nx.has(r.overflowX) || nx.has(r.overflowY)) && this.scrollPositions.set(a, {
                x: a.scrollLeft,
                y: a.scrollTop
            }),
            a = a.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }),
        window.addEventListener("scroll", this.onElementScroll, {
            capture: !0,
            passive: !0
        }),
        window.addEventListener("scroll", this.onWindowScroll, {
            passive: !0
        }),
        this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0
            }),
            window.removeEventListener("scroll", this.onWindowScroll)
        }
    }
    handleScroll(i) {
        const a = this.scrollPositions.get(i);
        if (!a)
            return;
        const r = i === window
          , o = r ? {
            x: window.scrollX,
            y: window.scrollY
        } : {
            x: i.scrollLeft,
            y: i.scrollTop
        }
          , u = {
            x: o.x - a.x,
            y: o.y - a.y
        };
        u.x === 0 && u.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += u.x,
        this.lastMoveEventInfo.point.y += u.y) : this.history.length > 0 && (this.history[0].x -= u.x,
        this.history[0].y -= u.y),
        this.scrollPositions.set(i, o),
        Wt.update(this.updatePoint, !0))
    }
    updateHandlers(i) {
        this.handlers = i
    }
    end() {
        this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        Wi(this.updatePoint)
    }
}
function md(e, i) {
    return i ? {
        point: i(e.point)
    } : e
}
function ix(e, i) {
    return {
        x: e.x - i.x,
        y: e.y - i.y
    }
}
function pd({point: e}, i) {
    return {
        point: e,
        delta: ix(e, ZS(i)),
        offset: ix(e, z3(i)),
        velocity: L3(i, .1)
    }
}
function z3(e) {
    return e[0]
}
function ZS(e) {
    return e[e.length - 1]
}
function L3(e, i) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let a = e.length - 1
      , r = null;
    const o = ZS(e);
    for (; a >= 0 && (r = e[a],
    !(o.timestamp - r.timestamp > pi(i))); )
        a--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const u = Sn(o.timestamp - r.timestamp);
    if (u === 0)
        return {
            x: 0,
            y: 0
        };
    const f = {
        x: (o.x - r.x) / u,
        y: (o.y - r.y) / u
    };
    return f.x === 1 / 0 && (f.x = 0),
    f.y === 1 / 0 && (f.y = 0),
    f
}
function U3(e, {min: i, max: a}, r) {
    return i !== void 0 && e < i ? e = r ? ne(i, e, r.min) : Math.max(e, i) : a !== void 0 && e > a && (e = r ? ne(a, e, r.max) : Math.min(e, a)),
    e
}
function sx(e, i, a) {
    return {
        min: i !== void 0 ? e.min + i : void 0,
        max: a !== void 0 ? e.max + a - (e.max - e.min) : void 0
    }
}
function k3(e, {top: i, left: a, bottom: r, right: o}) {
    return {
        x: sx(e.x, a, o),
        y: sx(e.y, i, r)
    }
}
function ax(e, i) {
    let a = i.min - e.min
      , r = i.max - e.max;
    return i.max - i.min < e.max - e.min && ([a,r] = [r, a]),
    {
        min: a,
        max: r
    }
}
function B3(e, i) {
    return {
        x: ax(e.x, i.x),
        y: ax(e.y, i.y)
    }
}
function P3(e, i) {
    let a = .5;
    const r = Be(e)
      , o = Be(i);
    return o > r ? a = Qr(i.min, i.max - r, e.min) : r > o && (a = Qr(e.min, e.max - o, i.min)),
    Yn(0, 1, a)
}
function H3(e, i) {
    const a = {};
    return i.min !== void 0 && (a.min = i.min - e.min),
    i.max !== void 0 && (a.max = i.max - e.min),
    a
}
const $d = .35;
function q3(e=$d) {
    return e === !1 ? e = 0 : e === !0 && (e = $d),
    {
        x: rx(e, "left", "right"),
        y: rx(e, "top", "bottom")
    }
}
function rx(e, i, a) {
    return {
        min: lx(e, i),
        max: lx(e, a)
    }
}
function lx(e, i) {
    return typeof e == "number" ? e : e[i] || 0
}
const F3 = new WeakMap;
class G3 {
    constructor(i) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = ve(),
        this.latestPointerEvent = null,
        this.latestPanInfo = null,
        this.visualElement = i
    }
    start(i, {snapToCursor: a=!1, distanceThreshold: r}={}) {
        const {presenceContext: o} = this.visualElement;
        if (o && o.isPresent === !1)
            return;
        const u = x => {
            a ? (this.stopAnimation(),
            this.snapToCursor(al(x).point)) : this.pauseAnimation()
        }
          , f = (x, S) => {
            this.stopAnimation();
            const {drag: w, dragPropagation: E, onDragStart: A} = this.getProps();
            if (w && !E && (this.openDragLock && this.openDragLock(),
            this.openDragLock = Lj(w),
            !this.openDragLock))
                return;
            this.latestPointerEvent = x,
            this.latestPanInfo = S,
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            xn(j => {
                let O = this.getAxisMotionValue(j).get() || 0;
                if (Fn.test(O)) {
                    const {projection: V} = this.visualElement;
                    if (V && V.layout) {
                        const G = V.layout.layoutBox[j];
                        G && (O = Be(G) * (parseFloat(O) / 100))
                    }
                }
                this.originPoint[j] = O
            }
            ),
            A && Wt.postRender( () => A(x, S)),
            Xd(this.visualElement, "transform");
            const {animationState: M} = this.visualElement;
            M && M.setActive("whileDrag", !0)
        }
          , h = (x, S) => {
            this.latestPointerEvent = x,
            this.latestPanInfo = S;
            const {dragPropagation: w, dragDirectionLock: E, onDirectionLock: A, onDrag: M} = this.getProps();
            if (!w && !this.openDragLock)
                return;
            const {offset: j} = S;
            if (E && this.currentDirection === null) {
                this.currentDirection = Y3(j),
                this.currentDirection !== null && A && A(this.currentDirection);
                return
            }
            this.updateAxis("x", S.point, j),
            this.updateAxis("y", S.point, j),
            this.visualElement.render(),
            M && M(x, S)
        }
          , m = (x, S) => {
            this.latestPointerEvent = x,
            this.latestPanInfo = S,
            this.stop(x, S),
            this.latestPointerEvent = null,
            this.latestPanInfo = null
        }
          , p = () => xn(x => this.getAnimationState(x) === "paused" && this.getAxisMotionValue(x).animation?.play())
          , {dragSnapToOrigin: g} = this.getProps();
        this.panSession = new KS(i,{
            onSessionStart: u,
            onStart: f,
            onMove: h,
            onSessionEnd: m,
            resumeAnimation: p
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: g,
            distanceThreshold: r,
            contextWindow: QS(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(i, a) {
        const r = i || this.latestPointerEvent
          , o = a || this.latestPanInfo
          , u = this.isDragging;
        if (this.cancel(),
        !u || !o || !r)
            return;
        const {velocity: f} = o;
        this.startAnimation(f);
        const {onDragEnd: h} = this.getProps();
        h && Wt.postRender( () => h(r, o))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: i, animationState: a} = this.visualElement;
        i && (i.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        a && a.setActive("whileDrag", !1)
    }
    updateAxis(i, a, r) {
        const {drag: o} = this.getProps();
        if (!r || !Lo(i, o, this.currentDirection))
            return;
        const u = this.getAxisMotionValue(i);
        let f = this.originPoint[i] + r[i];
        this.constraints && this.constraints[i] && (f = U3(f, this.constraints[i], this.elastic[i])),
        u.set(f)
    }
    resolveConstraints() {
        const {dragConstraints: i, dragElastic: a} = this.getProps()
          , r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout
          , o = this.constraints;
        i && _r(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && r ? this.constraints = k3(r.layoutBox, i) : this.constraints = !1,
        this.elastic = q3(a),
        o !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && xn(u => {
            this.constraints !== !1 && this.getAxisMotionValue(u) && (this.constraints[u] = H3(r.layoutBox[u], this.constraints[u]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: i, onMeasureDragConstraints: a} = this.getProps();
        if (!i || !_r(i))
            return !1;
        const r = i.current
          , {projection: o} = this.visualElement;
        if (!o || !o.layout)
            return !1;
        const u = $j(r, o.root, this.visualElement.getTransformPagePoint());
        let f = B3(o.layout.layoutBox, u);
        if (a) {
            const h = a(Ij(f));
            this.hasMutatedConstraints = !!h,
            h && (f = yS(h))
        }
        return f
    }
    startAnimation(i) {
        const {drag: a, dragMomentum: r, dragElastic: o, dragTransition: u, dragSnapToOrigin: f, onDragTransitionEnd: h} = this.getProps()
          , m = this.constraints || {}
          , p = xn(g => {
            if (!Lo(g, a, this.currentDirection))
                return;
            let x = m && m[g] || {};
            f && (x = {
                min: 0,
                max: 0
            });
            const S = o ? 200 : 1e6
              , w = o ? 40 : 1e7
              , E = {
                type: "inertia",
                velocity: r ? i[g] : 0,
                bounceStiffness: S,
                bounceDamping: w,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...u,
                ...x
            };
            return this.startAxisValueAnimation(g, E)
        }
        );
        return Promise.all(p).then(h)
    }
    startAxisValueAnimation(i, a) {
        const r = this.getAxisMotionValue(i);
        return Xd(this.visualElement, i),
        r.start(Hh(i, r, 0, a, this.visualElement, !1))
    }
    stopAnimation() {
        xn(i => this.getAxisMotionValue(i).stop())
    }
    pauseAnimation() {
        xn(i => this.getAxisMotionValue(i).animation?.pause())
    }
    getAnimationState(i) {
        return this.getAxisMotionValue(i).animation?.state
    }
    getAxisMotionValue(i) {
        const a = `_drag${i.toUpperCase()}`
          , r = this.visualElement.getProps()
          , o = r[a];
        return o || this.visualElement.getValue(i, (r.initial ? r.initial[i] : void 0) || 0)
    }
    snapToCursor(i) {
        xn(a => {
            const {drag: r} = this.getProps();
            if (!Lo(a, r, this.currentDirection))
                return;
            const {projection: o} = this.visualElement
              , u = this.getAxisMotionValue(a);
            if (o && o.layout) {
                const {min: f, max: h} = o.layout.layoutBox[a]
                  , m = u.get() || 0;
                u.set(i[a] - ne(f, h, .5) + m)
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: i, dragConstraints: a} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!_r(a) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const o = {
            x: 0,
            y: 0
        };
        xn(f => {
            const h = this.getAxisMotionValue(f);
            if (h && this.constraints !== !1) {
                const m = h.get();
                o[f] = P3({
                    min: m,
                    max: m
                }, this.constraints[f])
            }
        }
        );
        const {transformTemplate: u} = this.visualElement.getProps();
        this.visualElement.current.style.transform = u ? u({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        xn(f => {
            if (!Lo(f, i, null))
                return;
            const h = this.getAxisMotionValue(f)
              , {min: m, max: p} = this.constraints[f];
            h.set(ne(m, p, o[f]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        F3.set(this.visualElement, this);
        const i = this.visualElement.current
          , a = Pr(i, "pointerdown", m => {
            const {drag: p, dragListener: g=!0} = this.getProps();
            p && g && !uS(m.target) && this.start(m)
        }
        )
          , r = () => {
            const {dragConstraints: m} = this.getProps();
            _r(m) && m.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: o} = this.visualElement
          , u = o.addEventListener("measure", r);
        o && !o.layout && (o.root && o.root.updateScroll(),
        o.updateLayout()),
        Wt.read(r);
        const f = Wr(window, "resize", () => this.scalePositionWithinConstraints())
          , h = o.addEventListener("didUpdate", ( ({delta: m, hasLayoutChanged: p}) => {
            this.isDragging && p && (xn(g => {
                const x = this.getAxisMotionValue(g);
                x && (this.originPoint[g] += m[g].translate,
                x.set(x.get() + m[g].translate))
            }
            ),
            this.visualElement.render())
        }
        ));
        return () => {
            f(),
            a(),
            u(),
            h && h()
        }
    }
    getProps() {
        const i = this.visualElement.getProps()
          , {drag: a=!1, dragDirectionLock: r=!1, dragPropagation: o=!1, dragConstraints: u=!1, dragElastic: f=$d, dragMomentum: h=!0} = i;
        return {
            ...i,
            drag: a,
            dragDirectionLock: r,
            dragPropagation: o,
            dragConstraints: u,
            dragElastic: f,
            dragMomentum: h
        }
    }
}
function Lo(e, i, a) {
    return (i === !0 || i === e) && (a === null || a === e)
}
function Y3(e, i=10) {
    let a = null;
    return Math.abs(e.y) > i ? a = "y" : Math.abs(e.x) > i && (a = "x"),
    a
}
class X3 extends $i {
    constructor(i) {
        super(i),
        this.removeGroupControls = wn,
        this.removeListeners = wn,
        this.controls = new G3(i)
    }
    mount() {
        const {dragControls: i} = this.node.getProps();
        i && (this.removeGroupControls = i.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || wn
    }
    update() {
        const {dragControls: i} = this.node.getProps()
          , {dragControls: a} = this.node.prevProps || {};
        i !== a && (this.removeGroupControls(),
        i && (this.removeGroupControls = i.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const ox = e => (i, a) => {
    e && Wt.postRender( () => e(i, a))
}
;
class Q3 extends $i {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = wn
    }
    onPointerDown(i) {
        this.session = new KS(i,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: QS(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: i, onPanStart: a, onPan: r, onPanEnd: o} = this.node.getProps();
        return {
            onSessionStart: ox(i),
            onStart: ox(a),
            onMove: r,
            onEnd: (u, f) => {
                delete this.session,
                o && Wt.postRender( () => o(u, f))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Pr(this.node.current, "pointerdown", i => this.onPointerDown(i))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
let yd = !1;
class K3 extends T.Component {
    componentDidMount() {
        const {visualElement: i, layoutGroup: a, switchLayoutGroup: r, layoutId: o} = this.props
          , {projection: u} = i;
        u && (a.group && a.group.add(u),
        r && r.register && o && r.register(u),
        yd && u.root.didUpdate(),
        u.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        u.setOptions({
            ...u.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Go.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(i) {
        const {layoutDependency: a, visualElement: r, drag: o, isPresent: u} = this.props
          , {projection: f} = r;
        return f && (f.isPresent = u,
        yd = !0,
        o || i.layoutDependency !== a || a === void 0 || i.isPresent !== u ? f.willUpdate() : this.safeToRemove(),
        i.isPresent !== u && (u ? f.promote() : f.relegate() || Wt.postRender( () => {
            const h = f.getStack();
            (!h || !h.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: i} = this.props.visualElement;
        i && (i.root.didUpdate(),
        Yh.postRender( () => {
            !i.currentAnimation && i.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: i, layoutGroup: a, switchLayoutGroup: r} = this.props
          , {projection: o} = i;
        yd = !0,
        o && (o.scheduleCheckAfterUnmount(),
        a && a.group && a.group.remove(o),
        r && r.deregister && r.deregister(o))
    }
    safeToRemove() {
        const {safeToRemove: i} = this.props;
        i && i()
    }
    render() {
        return null
    }
}
function IS(e) {
    const [i,a] = n3()
      , r = T.useContext(p1);
    return v.jsx(K3, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: T.useContext(YS),
        isPresent: i,
        safeToRemove: a
    })
}
const Z3 = {
    pan: {
        Feature: Q3
    },
    drag: {
        Feature: X3,
        ProjectionNode: US,
        MeasureLayout: IS
    }
};
function cx(e, i, a) {
    const {props: r} = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", a === "Start");
    const o = "onHover" + a
      , u = r[o];
    u && Wt.postRender( () => u(i, al(i)))
}
class I3 extends $i {
    mount() {
        const {current: i} = this.node;
        i && (this.unmount = Uj(i, (a, r) => (cx(this.node, r, "Start"),
        o => cx(this.node, o, "End"))))
    }
    unmount() {}
}
class W3 extends $i {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let i = !1;
        try {
            i = this.node.current.matches(":focus-visible")
        } catch {
            i = !0
        }
        !i || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = nl(Wr(this.node.current, "focus", () => this.onFocus()), Wr(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function ux(e, i, a) {
    const {props: r} = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled)
        return;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", a === "Start");
    const o = "onTap" + (a === "End" ? "" : a)
      , u = r[o];
    u && Wt.postRender( () => u(i, al(i)))
}
class J3 extends $i {
    mount() {
        const {current: i} = this.node;
        i && (this.unmount = Pj(i, (a, r) => (ux(this.node, r, "Start"),
        (o, {success: u}) => ux(this.node, o, u ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const th = new WeakMap
  , gd = new WeakMap
  , $3 = e => {
    const i = th.get(e.target);
    i && i(e)
}
  , t_ = e => {
    e.forEach($3)
}
;
function e_({root: e, ...i}) {
    const a = e || document;
    gd.has(a) || gd.set(a, {});
    const r = gd.get(a)
      , o = JSON.stringify(i);
    return r[o] || (r[o] = new IntersectionObserver(t_,{
        root: e,
        ...i
    })),
    r[o]
}
function n_(e, i, a) {
    const r = e_(i);
    return th.set(e, a),
    r.observe(e),
    () => {
        th.delete(e),
        r.unobserve(e)
    }
}
const i_ = {
    some: 0,
    all: 1
};
class s_ extends $i {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: i={}} = this.node.getProps()
          , {root: a, margin: r, amount: o="some", once: u} = i
          , f = {
            root: a ? a.current : void 0,
            rootMargin: r,
            threshold: typeof o == "number" ? o : i_[o]
        }
          , h = m => {
            const {isIntersecting: p} = m;
            if (this.isInView === p || (this.isInView = p,
            u && !p && this.hasEnteredView))
                return;
            p && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", p);
            const {onViewportEnter: g, onViewportLeave: x} = this.node.getProps()
              , S = p ? g : x;
            S && S(m)
        }
        ;
        return n_(this.node.current, f, h)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: i, prevProps: a} = this.node;
        ["amount", "margin", "root"].some(a_(i, a)) && this.startObserver()
    }
    unmount() {}
}
function a_({viewport: e={}}, {viewport: i={}}={}) {
    return a => e[a] !== i[a]
}
const r_ = {
    inView: {
        Feature: s_
    },
    tap: {
        Feature: J3
    },
    focus: {
        Feature: W3
    },
    hover: {
        Feature: I3
    }
}
  , l_ = {
    layout: {
        ProjectionNode: US,
        MeasureLayout: IS
    }
}
  , o_ = {
    ...O3,
    ...r_,
    ...Z3,
    ...l_
}
  , ws = M3(o_, N3)
  , c_ = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0
    },
    transition: {
        duration: .6
    }
}
  , u_ = {
    animate: {
        transition: {
            staggerChildren: .1
        }
    }
};
function f_() {
    return v.jsxs(Ds, {
        children: [v.jsxs("section", {
            className: "relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden",
            children: [v.jsxs("div", {
                className: "absolute inset-0 z-0",
                children: [v.jsx("img", {
                    src: "/images/aquaculture-farm.png",
                    alt: "Mulpuri Aqua Processors Farm",
                    className: "w-full h-full object-cover"
                }), v.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40"
                })]
            }), v.jsx("div", {
                className: "container relative z-10 px-4 md:px-6",
                children: v.jsxs("div", {
                    className: "max-w-4xl",
                    children: [v.jsx(ws.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .8
                        },
                        children: v.jsxs("h1", {
                            className: "text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-heading",
                            children: ["Reliable Supply.", v.jsx("br", {}), "Consistent Quality.", v.jsx("br", {}), v.jsx("span", {
                                className: "text-accent",
                                children: "Global Standards."
                            })]
                        })
                    }), v.jsx(ws.p, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .8,
                            delay: .2
                        },
                        className: "text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed",
                        children: "Delivering premium, sustainably sourced seafood to discerning markets across the United States, Europe, and the Middle East."
                    }), v.jsxs(ws.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .8,
                            delay: .4
                        },
                        className: "flex flex-col sm:flex-row gap-4",
                        children: [v.jsx(be, {
                            href: "/products",
                            children: v.jsx(bn, {
                                size: "lg",
                                className: "bg-accent hover:bg-accent/90 text-white font-semibold px-8 h-12 text-lg",
                                children: "View Products"
                            })
                        }), v.jsx(be, {
                            href: "/contact",
                            children: v.jsx(bn, {
                                variant: "outline",
                                size: "lg",
                                className: "border-white text-white hover:bg-white hover:text-primary font-semibold px-8 h-12 text-lg",
                                children: "Contact Us"
                            })
                        })]
                    })]
                })
            })]
        }), v.jsx("section", {
            className: "bg-white py-12 border-b border-slate-100 shadow-sm relative z-20 -mt-2 rounded-t-3xl md:rounded-none",
            children: v.jsx("div", {
                className: "container mx-auto px-4 md:px-6",
                children: v.jsx("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-8",
                    children: [{
                        label: "Expertise",
                        value: "10+ Years",
                        icon: Bo
                    }, {
                        label: "Global Presence",
                        value: "US, EU, ME",
                        icon: rC
                    }, {
                        label: "Facility",
                        value: "State-of-the-Art",
                        icon: IE
                    }, {
                        label: "Traceability",
                        value: "Pond to Plate",
                        icon: AC
                    }].map( (e, i) => v.jsxs("div", {
                        className: "flex flex-col items-center text-center space-y-2",
                        children: [v.jsx("div", {
                            className: "p-3 bg-slate-50 rounded-full text-accent mb-2",
                            children: v.jsx(e.icon, {
                                className: "h-6 w-6"
                            })
                        }), v.jsx("span", {
                            className: "text-2xl font-bold text-primary font-heading",
                            children: e.value
                        }), v.jsx("span", {
                            className: "text-sm text-slate-500 font-medium uppercase tracking-wider",
                            children: e.label
                        })]
                    }, i))
                })
            })
        }), v.jsx("section", {
            className: "py-20 md:py-28 bg-slate-50",
            children: v.jsx("div", {
                className: "container mx-auto px-4 md:px-6",
                children: v.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-12 items-center",
                    children: [v.jsxs(ws.div, {
                        initial: {
                            opacity: 0,
                            x: -50
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: .8
                        },
                        className: "relative rounded-2xl overflow-hidden shadow-2xl",
                        children: [v.jsx("img", {
                            src: "/images/processing-line.png",
                            alt: "Modern Processing Facility",
                            className: "w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                        }), v.jsx("div", {
                            className: "absolute inset-0 bg-primary/10 mix-blend-multiply"
                        })]
                    }), v.jsxs(ws.div, {
                        initial: {
                            opacity: 0,
                            x: 50
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: .8
                        },
                        className: "space-y-6",
                        children: [v.jsx("div", {
                            className: "inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold tracking-wide",
                            children: "WHO WE ARE"
                        }), v.jsx("h2", {
                            className: "text-3xl md:text-4xl font-bold text-primary font-heading leading-tight",
                            children: "Specialized Seafood Processor from Andhra Pradesh"
                        }), v.jsx("p", {
                            className: "text-slate-600 text-lg leading-relaxed",
                            children: "Operating from our state-of-the-art facility in Andhra Pradesh, India, we specialize in the processing of Tilapia and Pangasius fillets for global retail, foodservice, and wholesale partners."
                        }), v.jsx("p", {
                            className: "text-slate-600 leading-relaxed",
                            children: "Our advanced systems preserve the natural freshness, uniformity, and shelf life of every product, ensuring a fully integrated and traceable supply chain from pond to plate."
                        }), v.jsx("div", {
                            className: "pt-4",
                            children: v.jsx(be, {
                                href: "/about",
                                children: v.jsxs(bn, {
                                    className: "group bg-primary text-white hover:bg-secondary",
                                    children: ["Learn More About Us", v.jsx(mb, {
                                        className: "ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                                    })]
                                })
                            })
                        })]
                    })]
                })
            })
        }), v.jsx("section", {
            className: "py-20 md:py-28 bg-white",
            children: v.jsxs("div", {
                className: "container mx-auto px-4 md:px-6",
                children: [v.jsxs("div", {
                    className: "text-center max-w-3xl mx-auto mb-16",
                    children: [v.jsx("h2", {
                        className: "text-3xl md:text-4xl font-bold text-primary mb-4 font-heading",
                        children: "Our Tilapia Range"
                    }), v.jsx("p", {
                        className: "text-slate-600 text-lg",
                        children: "We supply a wide variety of high-quality Tilapia cuts to match diverse culinary and market needs."
                    })]
                }), v.jsx(ws.div, {
                    variants: u_,
                    initial: "initial",
                    whileInView: "animate",
                    viewport: {
                        once: !0
                    },
                    className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: [{
                        title: "Frozen Whole Round",
                        desc: "100g to 800g up sizes available in Bulk or IWP.",
                        image: "/images/whole-tilapia.png"
                    }, {
                        title: "Frozen Whole G&S",
                        desc: "Scaled and Gutted, sizes from 350g to 750g.",
                        image: "/images/facility-exterior.png"
                    }, {
                        title: "Tilapia Fillets",
                        desc: "Shallow skinned, deep skinned, or skin-on options.",
                        image: "/images/tilapia-fillets.png"
                    }, {
                        title: "Pangasius Fillets",
                        desc: "Premium white meat fillets processed with care.",
                        image: "/images/cold-storage.png"
                    }].map( (e, i) => v.jsxs(ws.div, {
                        variants: c_,
                        className: "group bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300",
                        children: [v.jsxs("div", {
                            className: "aspect-[4/3] overflow-hidden bg-slate-200 relative",
                            children: [v.jsx("img", {
                                src: e.image,
                                alt: e.title,
                                className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            }), v.jsx("div", {
                                className: "absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"
                            })]
                        }), v.jsxs("div", {
                            className: "p-6",
                            children: [v.jsx("h3", {
                                className: "text-xl font-bold text-primary mb-2 font-heading group-hover:text-accent transition-colors",
                                children: e.title
                            }), v.jsx("p", {
                                className: "text-slate-600 text-sm mb-4 line-clamp-2",
                                children: e.desc
                            }), v.jsx(be, {
                                href: "/products",
                                children: v.jsx("span", {
                                    className: "text-accent text-sm font-semibold flex items-center cursor-pointer",
                                    children: "View Details"
                                })
                            })]
                        })]
                    }, i))
                })]
            })
        }), v.jsx("section", {
            className: "bg-primary py-20",
            children: v.jsxs("div", {
                className: "container mx-auto px-4 md:px-6 text-center",
                children: [v.jsxs("h2", {
                    className: "text-3xl md:text-5xl font-bold text-white mb-6 font-heading",
                    children: ["Partner with a Trusted", v.jsx("br", {}), "Global Seafood Supplier"]
                }), v.jsx("p", {
                    className: "text-slate-300 text-lg mb-10 max-w-2xl mx-auto",
                    children: "Our dedication to customization and reliability has made us a trusted partner to global importers and major retailers."
                }), v.jsx(be, {
                    href: "/contact",
                    children: v.jsx(bn, {
                        size: "lg",
                        className: "bg-accent hover:bg-accent/90 text-white font-bold px-10 h-14 text-xl shadow-lg shadow-accent/20",
                        children: "Contact Us Today"
                    })
                })]
            })
        })]
    })
}
function d_() {
    return v.jsxs(Ds, {
        children: [v.jsxs("div", {
            className: "bg-primary py-20 md:py-32 relative overflow-hidden",
            children: [v.jsx("div", {
                className: "absolute inset-0 bg-[url('/images/aquaculture-farm.png')] bg-cover bg-center opacity-20 mix-blend-overlay"
            }), v.jsxs("div", {
                className: "container mx-auto px-4 md:px-6 relative z-10 text-center",
                children: [v.jsx("h1", {
                    className: "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading",
                    children: "About Us"
                }), v.jsx("p", {
                    className: "text-xl text-slate-300 max-w-2xl mx-auto",
                    children: "Growing responsibly—delivering quality, safety, and sustainability in every shipment."
                })]
            })]
        }), v.jsx("section", {
            className: "py-20 bg-white",
            children: v.jsx("div", {
                className: "container mx-auto px-4 md:px-6",
                children: v.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-16 items-center",
                    children: [v.jsxs("div", {
                        children: [v.jsx("h2", {
                            className: "text-3xl font-bold text-primary mb-6 font-heading",
                            children: "Decade of Expertise"
                        }), v.jsx("p", {
                            className: "text-slate-600 mb-6 leading-relaxed",
                            children: "With over a decade of expertise, we specialize in the processing of Tilapia and Pangasius fillets, operating from our state-of-the-art facility in Andhra Pradesh, India."
                        }), v.jsx("p", {
                            className: "text-slate-600 mb-6 leading-relaxed",
                            children: "We work closely with local aquaculture farmers, feed suppliers, and logistics partners to ensure a fully integrated and traceable supply chain. This dedication ensures complete transparency from pond to plate."
                        }), v.jsxs("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8",
                            children: [v.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [v.jsx("div", {
                                    className: "p-2 bg-accent/10 rounded-lg text-accent",
                                    children: v.jsx(NC, {
                                        className: "h-5 w-5"
                                    })
                                }), v.jsx("span", {
                                    className: "text-sm font-semibold text-primary",
                                    children: "Global Seafood Importers"
                                })]
                            }), v.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [v.jsx("div", {
                                    className: "p-2 bg-accent/10 rounded-lg text-accent",
                                    children: v.jsx(GE, {
                                        className: "h-5 w-5"
                                    })
                                }), v.jsx("span", {
                                    className: "text-sm font-semibold text-primary",
                                    children: "Food Service Chains"
                                })]
                            }), v.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [v.jsx("div", {
                                    className: "p-2 bg-accent/10 rounded-lg text-accent",
                                    children: v.jsx(CC, {
                                        className: "h-5 w-5"
                                    })
                                }), v.jsx("span", {
                                    className: "text-sm font-semibold text-primary",
                                    children: "Major Retailers"
                                })]
                            })]
                        })]
                    }), v.jsx("div", {
                        className: "relative",
                        children: v.jsx("div", {
                            className: "aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl",
                            children: v.jsx("img", {
                                src: "/images/facility-exterior.png",
                                alt: "Mulpuri Facility",
                                className: "w-full h-full object-cover"
                            })
                        })
                    })]
                })
            })
        }), v.jsx("section", {
            className: "py-20 bg-slate-50",
            children: v.jsx("div", {
                className: "container mx-auto px-4 md:px-6",
                children: v.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-8",
                    children: [v.jsxs("div", {
                        className: "bg-white p-10 rounded-2xl shadow-sm border-t-4 border-primary",
                        children: [v.jsx("h3", {
                            className: "text-2xl font-bold text-primary mb-4 font-heading",
                            children: "Our Commitment"
                        }), v.jsx("p", {
                            className: "text-slate-600 leading-relaxed",
                            children: "As global demand for clean, traceable seafood continues to rise, we are proud to grow responsibly—delivering quality, safety, and sustainability."
                        })]
                    }), v.jsxs("div", {
                        className: "bg-white p-10 rounded-2xl shadow-sm border-t-4 border-accent",
                        children: [v.jsx("h3", {
                            className: "text-2xl font-bold text-primary mb-4 font-heading",
                            children: "End-to-End Traceability"
                        }), v.jsx("p", {
                            className: "text-slate-600 leading-relaxed",
                            children: "Our advanced systems preserve the natural freshness, uniformity, and shelf life of every product from pond to plate."
                        })]
                    })]
                })
            })
        }), v.jsx("section", {
            className: "bg-secondary py-16",
            children: v.jsxs("div", {
                className: "container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8",
                children: [v.jsxs("div", {
                    children: [v.jsx("h2", {
                        className: "text-2xl md:text-3xl font-bold text-white mb-2 font-heading",
                        children: "Serving Global Markets"
                    }), v.jsx("p", {
                        className: "text-slate-300",
                        children: "United States • Europe • Middle East"
                    })]
                }), v.jsx(be, {
                    href: "/contact",
                    children: v.jsxs(bn, {
                        className: "bg-accent hover:bg-accent/90 text-white font-bold px-8 py-6 text-lg",
                        children: ["Partner With Us ", v.jsx(mb, {
                            className: "ml-2 h-5 w-5"
                        })]
                    })
                })]
            })
        })]
    })
}
const h_ = [{
    id: "whole-round",
    title: "Frozen Tilapia Whole Round / Whole G&S",
    description: "Harvested and processed using Individual Quick Freezing (IQF) to lock in natural freshness.",
    specs: ["Process: IQF", "Sizes: 100-200g, 200-300g, 300-500g, 500-800g, 800g up", "WGS Sizes: 350-550g, 550-750g", "Pack: Bulk, IWP, Retailing Bag"],
    image: "/images/whole-tilapia.png",
    reversed: !1
}, {
    id: "fillets-shallow",
    title: "Frozen Tilapia Fillets (Shallow Skinned)",
    description: "Expertly skinned and trimmed fillets, available treated or non-treated to meet market standards.",
    specs: ["Process: Skinned, Trimmed, IQF", "Sizes: 3-5oz, 5-7oz, 7-9oz, 9oz up", "Treatment: Treated or Non-Treated", "Pack: Bulk, IWP, IVP, Retailing Bag"],
    image: "/images/product-shallow-skinned.png",
    reversed: !0
}, {
    id: "fillets-deep",
    title: "Frozen Tilapia Fillets (Deep Skinned)",
    description: "Premium deep-skinned fillets for a refined presentation and flavor profile.",
    specs: ["Process: Deep Skinned, Trimmed, IQF", "Sizes: 3-5oz, 5-7oz, 7-9oz, 9oz up", "Pack: Bulk, IWP, IVP, Retailing Bag"],
    image: "/images/product-deep-skinned.png",
    reversed: !1
}, {
    id: "fillets-skin-on",
    title: "Frozen Tilapia Fillets (Skin-On)",
    description: "Fresh-frozen skin-on fillets, maintaining the natural texture and nutritional value.",
    specs: ["Process: Skinned, Trimmed, IQF", "Sizes: 3-5oz, 5-7oz, 7-9oz, 9oz up", "Pack: Bulk, IWP, IVP, Retailing Bag"],
    image: "/images/product-skin-on.png",
    reversed: !0
}];
function m_() {
    return v.jsxs(Ds, {
        children: [v.jsxs("div", {
            className: "bg-secondary py-20 md:py-32 relative overflow-hidden",
            children: [v.jsx("div", {
                className: "absolute inset-0 bg-[url('/images/tilapia-fillets.png')] bg-cover bg-center opacity-30 mix-blend-overlay"
            }), v.jsxs("div", {
                className: "container mx-auto px-4 md:px-6 relative z-10 text-center",
                children: [v.jsx("h1", {
                    className: "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading",
                    children: "Our Tilapia Product Range"
                }), v.jsx("p", {
                    className: "text-xl text-slate-300 max-w-2xl mx-auto",
                    children: "High-quality Tilapia cuts tailored to suit regional and culinary preferences."
                })]
            })]
        }), v.jsx("div", {
            className: "py-20 bg-slate-50",
            children: v.jsx("div", {
                className: "container mx-auto px-4 md:px-6 space-y-24",
                children: h_.map(e => v.jsxs("div", {
                    id: e.id,
                    className: `flex flex-col md:flex-row gap-12 items-center ${e.reversed ? "md:flex-row-reverse" : ""}`,
                    children: [v.jsx("div", {
                        className: "flex-1 w-full",
                        children: v.jsx("div", {
                            className: "relative rounded-2xl overflow-hidden shadow-xl bg-white aspect-[4/3] group",
                            children: v.jsx("img", {
                                src: e.image,
                                alt: e.title,
                                className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            })
                        })
                    }), v.jsxs("div", {
                        className: "flex-1 space-y-6",
                        children: [v.jsx("h2", {
                            className: "text-3xl font-bold text-primary font-heading leading-tight",
                            children: e.title
                        }), v.jsx("div", {
                            className: "w-20 h-1.5 bg-accent rounded-full"
                        }), v.jsx("p", {
                            className: "text-slate-600 text-lg leading-relaxed",
                            children: e.description
                        }), v.jsxs("div", {
                            className: "bg-white p-6 rounded-xl border border-slate-200 shadow-sm",
                            children: [v.jsxs("h4", {
                                className: "text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2",
                                children: [v.jsx(qE, {
                                    className: "h-4 w-4"
                                }), " Technical Specifications"]
                            }), v.jsx("ul", {
                                className: "grid sm:grid-cols-2 gap-3",
                                children: e.specs.map( (i, a) => v.jsxs("li", {
                                    className: "flex items-center gap-2 text-slate-700 text-sm",
                                    children: [v.jsx("div", {
                                        className: "h-1.5 w-1.5 rounded-full bg-secondary shrink-0"
                                    }), i]
                                }, a))
                            })]
                        }), v.jsx("div", {
                            className: "pt-2",
                            children: v.jsx(be, {
                                href: "/contact",
                                children: v.jsx(bn, {
                                    variant: "outline",
                                    className: "border-primary text-primary hover:bg-primary hover:text-white",
                                    children: "Request Quote"
                                })
                            })
                        })]
                    })]
                }, e.id))
            })
        }), v.jsx("section", {
            className: "bg-primary py-20",
            children: v.jsxs("div", {
                className: "container mx-auto px-4 md:px-6 text-center",
                children: [v.jsx("h2", {
                    className: "text-3xl font-bold text-white mb-6 font-heading",
                    children: "Need customized cuts?"
                }), v.jsx("p", {
                    className: "text-slate-300 mb-8 max-w-xl mx-auto",
                    children: "We offer products tailored to your regional and culinary preferences. Contact our sales team for bespoke solutions."
                }), v.jsx(be, {
                    href: "/contact",
                    children: v.jsx(bn, {
                        size: "lg",
                        className: "bg-white text-primary hover:bg-slate-100 font-bold",
                        children: "Inquire Now"
                    })
                })]
            })
        })]
    })
}
function p_() {
    return v.jsxs(Ds, {
        children: [v.jsxs("div", {
            className: "bg-secondary py-20 md:py-32 relative overflow-hidden",
            children: [v.jsx("div", {
                className: "absolute inset-0 bg-[url('/images/cold-storage.png')] bg-cover bg-center opacity-30 mix-blend-overlay"
            }), v.jsxs("div", {
                className: "container mx-auto px-4 md:px-6 relative z-10 text-center",
                children: [v.jsx("h1", {
                    className: "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading",
                    children: "Infrastructure"
                }), v.jsx("p", {
                    className: "text-xl text-slate-300 max-w-2xl mx-auto",
                    children: "State-of-the-art facilities designed for safety, efficiency, and scale."
                })]
            })]
        }), v.jsx("div", {
            className: "py-20 bg-white",
            children: v.jsxs("div", {
                className: "container mx-auto px-4 md:px-6 space-y-32",
                children: [v.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-12 items-center",
                    children: [v.jsxs("div", {
                        className: "order-2 md:order-1",
                        children: [v.jsxs("div", {
                            className: "flex items-center gap-3 mb-4 text-accent font-bold tracking-wider text-sm uppercase",
                            children: [v.jsx(tC, {
                                className: "h-5 w-5"
                            }), v.jsx("span", {
                                children: "Processing Excellence"
                            })]
                        }), v.jsx("h2", {
                            className: "text-3xl md:text-4xl font-bold text-primary mb-6 font-heading",
                            children: "Modern Processing Plant"
                        }), v.jsx("p", {
                            className: "text-slate-600 mb-6 text-lg leading-relaxed",
                            children: "Our facility spans over 50,000 sq. ft. and is equipped with the latest machinery from global leaders in food processing technology. The plant layout strictly adheres to HACCP principles to prevent cross-contamination."
                        }), v.jsxs("ul", {
                            className: "space-y-3",
                            children: [v.jsxs("li", {
                                className: "flex items-center gap-3 text-slate-700",
                                children: [v.jsx("div", {
                                    className: "h-2 w-2 bg-secondary rounded-full"
                                }), "Daily processing capacity of 50 Metric Tonnes"]
                            }), v.jsxs("li", {
                                className: "flex items-center gap-3 text-slate-700",
                                children: [v.jsx("div", {
                                    className: "h-2 w-2 bg-secondary rounded-full"
                                }), "Automated grading and scaling systems"]
                            }), v.jsxs("li", {
                                className: "flex items-center gap-3 text-slate-700",
                                children: [v.jsx("div", {
                                    className: "h-2 w-2 bg-secondary rounded-full"
                                }), "Advanced metal detection and X-ray inspection"]
                            })]
                        })]
                    }), v.jsx("div", {
                        className: "order-1 md:order-2",
                        children: v.jsx("img", {
                            src: "/images/facility-exterior.png",
                            alt: "Facility Exterior",
                            className: "rounded-2xl shadow-xl w-full"
                        })
                    })]
                }), v.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-12 items-center",
                    children: [v.jsx("div", {
                        children: v.jsx("img", {
                            src: "/images/cold-storage.png",
                            alt: "Cold Storage",
                            className: "rounded-2xl shadow-xl w-full"
                        })
                    }), v.jsxs("div", {
                        children: [v.jsxs("div", {
                            className: "flex items-center gap-3 mb-4 text-accent font-bold tracking-wider text-sm uppercase",
                            children: [v.jsx(wC, {
                                className: "h-5 w-5"
                            }), v.jsx("span", {
                                children: "Cold Chain Integrity"
                            })]
                        }), v.jsx("h2", {
                            className: "text-3xl md:text-4xl font-bold text-primary mb-6 font-heading",
                            children: "Freezing & Storage"
                        }), v.jsx("p", {
                            className: "text-slate-600 mb-6 text-lg leading-relaxed",
                            children: "We utilize advanced rapid-freezing technology to preserve the cellular structure of the fish, ensuring texture and taste remain locked in."
                        }), v.jsxs("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [v.jsxs("div", {
                                className: "bg-slate-50 p-4 rounded-lg border border-slate-100",
                                children: [v.jsx("h4", {
                                    className: "font-bold text-primary mb-1",
                                    children: "Blast Freezers"
                                }), v.jsx("p", {
                                    className: "text-sm text-slate-500",
                                    children: "-40°C Rapid Freezing"
                                })]
                            }), v.jsxs("div", {
                                className: "bg-slate-50 p-4 rounded-lg border border-slate-100",
                                children: [v.jsx("h4", {
                                    className: "font-bold text-primary mb-1",
                                    children: "Plate Freezers"
                                }), v.jsx("p", {
                                    className: "text-sm text-slate-500",
                                    children: "Perfect Block Formation"
                                })]
                            }), v.jsxs("div", {
                                className: "bg-slate-50 p-4 rounded-lg border border-slate-100 col-span-2",
                                children: [v.jsx("h4", {
                                    className: "font-bold text-primary mb-1",
                                    children: "Cold Storage"
                                }), v.jsx("p", {
                                    className: "text-sm text-slate-500",
                                    children: "1000 MT Capacity at -20°C"
                                })]
                            })]
                        })]
                    })]
                }), v.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-12 items-center",
                    children: [v.jsxs("div", {
                        className: "order-2 md:order-1",
                        children: [v.jsxs("div", {
                            className: "flex items-center gap-3 mb-4 text-accent font-bold tracking-wider text-sm uppercase",
                            children: [v.jsx(RC, {
                                className: "h-5 w-5"
                            }), v.jsx("span", {
                                children: "Integrated Supply"
                            })]
                        }), v.jsx("h2", {
                            className: "text-3xl md:text-4xl font-bold text-primary mb-6 font-heading",
                            children: "Farm to Fork Integration"
                        }), v.jsx("p", {
                            className: "text-slate-600 mb-6 text-lg leading-relaxed",
                            children: "Unlike aggregators, we own and manage a significant portion of our aquaculture farms. This vertical integration gives us complete control over:"
                        }), v.jsxs("ul", {
                            className: "space-y-3",
                            children: [v.jsxs("li", {
                                className: "flex items-center gap-3 text-slate-700",
                                children: [v.jsx(Bo, {
                                    className: "h-5 w-5 text-accent"
                                }), v.jsx("span", {
                                    children: "Feed Quality & Antibiotic Usage (Zero-Tolerance)"
                                })]
                            }), v.jsxs("li", {
                                className: "flex items-center gap-3 text-slate-700",
                                children: [v.jsx(Bo, {
                                    className: "h-5 w-5 text-accent"
                                }), v.jsx("span", {
                                    children: "Water Quality Management"
                                })]
                            }), v.jsxs("li", {
                                className: "flex items-center gap-3 text-slate-700",
                                children: [v.jsx(Bo, {
                                    className: "h-5 w-5 text-accent"
                                }), v.jsx("span", {
                                    children: "Harvest Timing for Peak Freshness"
                                })]
                            })]
                        })]
                    }), v.jsx("div", {
                        className: "order-1 md:order-2",
                        children: v.jsx("img", {
                            src: "/images/aquaculture-farm.png",
                            alt: "Farm Integration",
                            className: "rounded-2xl shadow-xl w-full"
                        })
                    })]
                })]
            })
        })]
    })
}
function y_() {
    return v.jsxs(Ds, {
        children: [v.jsxs("div", {
            className: "bg-primary py-20 md:py-32 relative overflow-hidden",
            children: [v.jsx("div", {
                className: "absolute inset-0 bg-[url('/images/processing-line.png')] bg-cover bg-center opacity-20 mix-blend-overlay"
            }), v.jsxs("div", {
                className: "container mx-auto px-4 md:px-6 relative z-10 text-center",
                children: [v.jsx("h1", {
                    className: "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading",
                    children: "Quality & Compliance"
                }), v.jsx("p", {
                    className: "text-xl text-slate-300 max-w-2xl mx-auto",
                    children: "Strictly following GMP and SSOP to ensure quality, safety, and sustainability in every shipment."
                })]
            })]
        }), v.jsx("section", {
            className: "py-20 bg-white",
            children: v.jsxs("div", {
                className: "container mx-auto px-4 md:px-6",
                children: [v.jsxs("div", {
                    className: "grid md:grid-cols-3 gap-8 mb-24",
                    children: [v.jsxs("div", {
                        className: "bg-slate-50 p-8 rounded-xl border border-slate-100 text-center hover:shadow-lg transition-shadow",
                        children: [v.jsx("div", {
                            className: "h-14 w-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-accent",
                            children: v.jsx(bC, {
                                className: "h-7 w-7"
                            })
                        }), v.jsx("h3", {
                            className: "text-xl font-bold text-primary mb-3 font-heading",
                            children: "Safety Standards"
                        }), v.jsx("p", {
                            className: "text-slate-600",
                            children: "Strictly following GMP (Good Manufacturing Practices) and SSOP (Standard Sanitation Operating Procedures)."
                        })]
                    }), v.jsxs("div", {
                        className: "bg-slate-50 p-8 rounded-xl border border-slate-100 text-center hover:shadow-lg transition-shadow",
                        children: [v.jsx("div", {
                            className: "h-14 w-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-accent",
                            children: v.jsx(gC, {
                                className: "h-7 w-7"
                            })
                        }), v.jsx("h3", {
                            className: "text-xl font-bold text-primary mb-3 font-heading",
                            children: "Pond to Plate"
                        }), v.jsx("p", {
                            className: "text-slate-600",
                            children: "Ensuring a fully integrated and traceable supply chain with complete transparency."
                        })]
                    }), v.jsxs("div", {
                        className: "bg-slate-50 p-8 rounded-xl border border-slate-100 text-center hover:shadow-lg transition-shadow",
                        children: [v.jsx("div", {
                            className: "h-14 w-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-accent",
                            children: v.jsx(sC, {
                                className: "h-7 w-7"
                            })
                        }), v.jsx("h3", {
                            className: "text-xl font-bold text-primary mb-3 font-heading",
                            children: "Global Certifications"
                        }), v.jsx("p", {
                            className: "text-slate-600",
                            children: "Certified and compliant with international standards including BAP, BRC, and HACCP."
                        })]
                    })]
                }), v.jsxs("div", {
                    className: "max-w-4xl mx-auto",
                    children: [v.jsxs("div", {
                        className: "mb-16",
                        children: [v.jsx("h2", {
                            className: "text-3xl font-bold text-primary mb-6 font-heading border-b pb-4",
                            children: "Our Compliance Framework"
                        }), v.jsxs("div", {
                            className: "prose prose-lg text-slate-600 max-w-none",
                            children: [v.jsx("p", {
                                children: "Mulpuri Aqua Processors is proud to grow responsibly—delivering quality, safety, and sustainability in every shipment. Our facility is designed to preserve the natural freshness, uniformity, and shelf life of every product."
                            }), v.jsx("div", {
                                className: "grid sm:grid-cols-2 gap-4 mt-8",
                                children: ["Good Manufacturing Practices (GMP)", "Standard Sanitation Operating Procedures (SSOP)", "US FDA Regulations", "EU Market Regulations"].map( (e, i) => v.jsxs("div", {
                                    className: "flex items-center gap-3 p-4 bg-slate-50 rounded-lg",
                                    children: [v.jsx(JE, {
                                        className: "h-5 w-5 text-accent shrink-0"
                                    }), v.jsx("span", {
                                        className: "font-semibold text-primary",
                                        children: e
                                    })]
                                }, i))
                            })]
                        })]
                    }), v.jsxs("div", {
                        className: "mb-16",
                        children: [v.jsx("h2", {
                            className: "text-3xl font-bold text-primary mb-6 font-heading border-b pb-4",
                            children: "International Certifications"
                        }), v.jsx("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-6 text-center",
                            children: ["BAP", "BRC", "HACCP", "ISO"].map(e => v.jsxs("div", {
                                className: "p-8 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors",
                                children: [v.jsx(PE, {
                                    className: "h-10 w-10 text-accent mx-auto mb-4"
                                }), v.jsx("span", {
                                    className: "font-bold text-primary",
                                    children: e
                                })]
                            }, e))
                        })]
                    })]
                })]
            })
        })]
    })
}
const Vr = T.forwardRef( ({className: e, type: i, ...a}, r) => v.jsx("input", {
    type: i,
    className: It("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: r,
    ...a
}));
Vr.displayName = "Input";
const WS = T.forwardRef( ({className: e, ...i}, a) => v.jsx("textarea", {
    className: It("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: a,
    ...i
}));
WS.displayName = "Textarea";
var rl = e => e.type === "checkbox"
  , Cs = e => e instanceof Date
  , Ke = e => e == null;
const JS = e => typeof e == "object";
var me = e => !Ke(e) && !Array.isArray(e) && JS(e) && !Cs(e)
  , g_ = e => me(e) && e.target ? rl(e.target) ? e.target.checked : e.target.value : e
  , v_ = e => e.substring(0, e.search(/\.\d+(\.|$)/)) || e
  , x_ = (e, i) => e.has(v_(i))
  , b_ = e => {
    const i = e.constructor && e.constructor.prototype;
    return me(i) && i.hasOwnProperty("isPrototypeOf")
}
  , $h = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function ge(e) {
    if (e instanceof Date)
        return new Date(e);
    const i = typeof FileList < "u" && e instanceof FileList;
    if ($h && (e instanceof Blob || i))
        return e;
    const a = Array.isArray(e);
    if (!a && !(me(e) && b_(e)))
        return e;
    const r = a ? [] : Object.create(Object.getPrototypeOf(e));
    for (const o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (r[o] = ge(e[o]));
    return r
}
var Ec = e => /^\w*$/.test(e)
  , ee = e => e === void 0
  , tm = e => Array.isArray(e) ? e.filter(Boolean) : []
  , em = e => tm(e.replace(/["|']|\]/g, "").split(/\.|\[/))
  , yt = (e, i, a) => {
    if (!i || !me(e))
        return a;
    const r = (Ec(i) ? [i] : em(i)).reduce( (o, u) => Ke(o) ? o : o[u], e);
    return ee(r) || r === e ? ee(e[i]) ? a : e[i] : r
}
  , Pn = e => typeof e == "boolean"
  , Dn = e => typeof e == "function"
  , $t = (e, i, a) => {
    let r = -1;
    const o = Ec(i) ? [i] : em(i)
      , u = o.length
      , f = u - 1;
    for (; ++r < u; ) {
        const h = o[r];
        let m = a;
        if (r !== f) {
            const p = e[h];
            m = me(p) || Array.isArray(p) ? p : isNaN(+o[r + 1]) ? {} : []
        }
        if (h === "__proto__" || h === "constructor" || h === "prototype")
            return;
        e[h] = m,
        e = e[h]
    }
}
;
const fx = {
    BLUR: "blur",
    FOCUS_OUT: "focusout"
}
  , Rn = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all"
}
  , mi = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate"
}
  , S_ = te.createContext(null);
S_.displayName = "HookFormControlContext";
var w_ = (e, i, a, r=!0) => {
    const o = {
        defaultValues: i._defaultValues
    };
    for (const u in e)
        Object.defineProperty(o, u, {
            get: () => {
                const f = u;
                return i._proxyFormState[f] !== Rn.all && (i._proxyFormState[f] = !r || Rn.all),
                e[f]
            }
        });
    return o
}
;
const T_ = typeof window < "u" ? te.useLayoutEffect : te.useEffect;
var an = e => typeof e == "string"
  , A_ = (e, i, a, r, o) => an(e) ? (r && i.watch.add(e),
yt(a, e, o)) : Array.isArray(e) ? e.map(u => (r && i.watch.add(u),
yt(a, u))) : (r && (i.watchAll = !0),
a)
  , eh = e => Ke(e) || !JS(e);
function Yi(e, i, a=new WeakSet) {
    if (eh(e) || eh(i))
        return Object.is(e, i);
    if (Cs(e) && Cs(i))
        return Object.is(e.getTime(), i.getTime());
    const r = Object.keys(e)
      , o = Object.keys(i);
    if (r.length !== o.length)
        return !1;
    if (a.has(e) || a.has(i))
        return !0;
    a.add(e),
    a.add(i);
    for (const u of r) {
        const f = e[u];
        if (!o.includes(u))
            return !1;
        if (u !== "ref") {
            const h = i[u];
            if (Cs(f) && Cs(h) || me(f) && me(h) || Array.isArray(f) && Array.isArray(h) ? !Yi(f, h, a) : !Object.is(f, h))
                return !1
        }
    }
    return !0
}
const E_ = te.createContext(null);
E_.displayName = "HookFormContext";
var C_ = (e, i, a, r, o) => i ? {
    ...a[e],
    types: {
        ...a[e] && a[e].types ? a[e].types : {},
        [r]: o || !0
    }
} : {}
  , Hr = e => Array.isArray(e) ? e : [e]
  , dx = () => {
    let e = [];
    return {
        get observers() {
            return e
        },
        next: o => {
            for (const u of e)
                u.next && u.next(o)
        }
        ,
        subscribe: o => (e.push(o),
        {
            unsubscribe: () => {
                e = e.filter(u => u !== o)
            }
        }),
        unsubscribe: () => {
            e = []
        }
    }
}
;
function $S(e, i) {
    const a = {};
    for (const r in e)
        if (e.hasOwnProperty(r)) {
            const o = e[r]
              , u = i[r];
            if (o && me(o) && u) {
                const f = $S(o, u);
                me(f) && (a[r] = f)
            } else
                e[r] && (a[r] = u)
        }
    return a
}
var Le = e => me(e) && !Object.keys(e).length
  , nm = e => e.type === "file"
  , ac = e => {
    if (!$h)
        return !1;
    const i = e ? e.ownerDocument : 0;
    return e instanceof (i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement)
}
  , tw = e => e.type === "select-multiple"
  , im = e => e.type === "radio"
  , M_ = e => im(e) || rl(e)
  , vd = e => ac(e) && e.isConnected;
function N_(e, i) {
    const a = i.slice(0, -1).length;
    let r = 0;
    for (; r < a; )
        e = ee(e) ? r++ : e[i[r++]];
    return e
}
function D_(e) {
    for (const i in e)
        if (e.hasOwnProperty(i) && !ee(e[i]))
            return !1;
    return !0
}
function de(e, i) {
    const a = Array.isArray(i) ? i : Ec(i) ? [i] : em(i)
      , r = a.length === 1 ? e : N_(e, a)
      , o = a.length - 1
      , u = a[o];
    return r && delete r[u],
    o !== 0 && (me(r) && Le(r) || Array.isArray(r) && D_(r)) && de(e, a.slice(0, -1)),
    e
}
var R_ = e => {
    for (const i in e)
        if (Dn(e[i]))
            return !0;
    return !1
}
;
function ew(e) {
    return Array.isArray(e) || me(e) && !R_(e)
}
function nh(e, i={}) {
    for (const a in e) {
        const r = e[a];
        ew(r) ? (i[a] = Array.isArray(r) ? [] : {},
        nh(r, i[a])) : ee(r) || (i[a] = !0)
    }
    return i
}
function xa(e, i, a) {
    a || (a = nh(i));
    for (const r in e) {
        const o = e[r];
        if (ew(o))
            ee(i) || eh(a[r]) ? a[r] = nh(o, Array.isArray(o) ? [] : {}) : xa(o, Ke(i) ? {} : i[r], a[r]);
        else {
            const u = i[r];
            a[r] = !Yi(o, u)
        }
    }
    return a
}
const hx = {
    value: !1,
    isValid: !1
}
  , mx = {
    value: !0,
    isValid: !0
};
var nw = e => {
    if (Array.isArray(e)) {
        if (e.length > 1) {
            const i = e.filter(a => a && a.checked && !a.disabled).map(a => a.value);
            return {
                value: i,
                isValid: !!i.length
            }
        }
        return e[0].checked && !e[0].disabled ? e[0].attributes && !ee(e[0].attributes.value) ? ee(e[0].value) || e[0].value === "" ? mx : {
            value: e[0].value,
            isValid: !0
        } : mx : hx
    }
    return hx
}
  , iw = (e, {valueAsNumber: i, valueAsDate: a, setValueAs: r}) => ee(e) ? e : i ? e === "" ? NaN : e && +e : a && an(e) ? new Date(e) : r ? r(e) : e;
const px = {
    isValid: !1,
    value: null
};
var sw = e => Array.isArray(e) ? e.reduce( (i, a) => a && a.checked && !a.disabled ? {
    isValid: !0,
    value: a.value
} : i, px) : px;
function yx(e) {
    const i = e.ref;
    return nm(i) ? i.files : im(i) ? sw(e.refs).value : tw(i) ? [...i.selectedOptions].map( ({value: a}) => a) : rl(i) ? nw(e.refs).value : iw(ee(i.value) ? e.ref.value : i.value, e)
}
var j_ = (e, i, a, r) => {
    const o = {};
    for (const u of e) {
        const f = yt(i, u);
        f && $t(o, u, f._f)
    }
    return {
        criteriaMode: a,
        names: [...e],
        fields: o,
        shouldUseNativeValidation: r
    }
}
  , rc = e => e instanceof RegExp
  , jr = e => ee(e) ? e : rc(e) ? e.source : me(e) ? rc(e.value) ? e.value.source : e.value : e
  , gx = e => ({
    isOnSubmit: !e || e === Rn.onSubmit,
    isOnBlur: e === Rn.onBlur,
    isOnChange: e === Rn.onChange,
    isOnAll: e === Rn.all,
    isOnTouch: e === Rn.onTouched
});
const vx = "AsyncFunction";
var O_ = e => !!e && !!e.validate && !!(Dn(e.validate) && e.validate.constructor.name === vx || me(e.validate) && Object.values(e.validate).find(i => i.constructor.name === vx))
  , __ = e => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate)
  , xx = (e, i, a) => !a && (i.watchAll || i.watch.has(e) || [...i.watch].some(r => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const qr = (e, i, a, r) => {
    for (const o of a || Object.keys(e)) {
        const u = yt(e, o);
        if (u) {
            const {_f: f, ...h} = u;
            if (f) {
                if (f.refs && f.refs[0] && i(f.refs[0], o) && !r)
                    return !0;
                if (f.ref && i(f.ref, f.name) && !r)
                    return !0;
                if (qr(h, i))
                    break
            } else if (me(h) && qr(h, i))
                break
        }
    }
}
;
function bx(e, i, a) {
    const r = yt(e, a);
    if (r || Ec(a))
        return {
            error: r,
            name: a
        };
    const o = a.split(".");
    for (; o.length; ) {
        const u = o.join(".")
          , f = yt(i, u)
          , h = yt(e, u);
        if (f && !Array.isArray(f) && a !== u)
            return {
                name: a
            };
        if (h && h.type)
            return {
                name: u,
                error: h
            };
        if (h && h.root && h.root.type)
            return {
                name: `${u}.root`,
                error: h.root
            };
        o.pop()
    }
    return {
        name: a
    }
}
var V_ = (e, i, a, r) => {
    a(e);
    const {name: o, ...u} = e;
    return Le(u) || Object.keys(u).length >= Object.keys(i).length || Object.keys(u).find(f => i[f] === (!r || Rn.all))
}
  , z_ = (e, i, a) => !e || !i || e === i || Hr(e).some(r => r && (a ? r === i : r.startsWith(i) || i.startsWith(r)))
  , L_ = (e, i, a, r, o) => o.isOnAll ? !1 : !a && o.isOnTouch ? !(i || e) : (a ? r.isOnBlur : o.isOnBlur) ? !e : (a ? r.isOnChange : o.isOnChange) ? e : !0
  , U_ = (e, i) => !tm(yt(e, i)).length && de(e, i)
  , k_ = (e, i, a) => {
    const r = Hr(yt(e, a));
    return $t(r, "root", i[a]),
    $t(e, a, r),
    e
}
;
function Sx(e, i, a="validate") {
    if (an(e) || Array.isArray(e) && e.every(an) || Pn(e) && !e)
        return {
            type: a,
            message: an(e) ? e : "",
            ref: i
        }
}
var va = e => me(e) && !rc(e) ? e : {
    value: e,
    message: ""
}
  , wx = async (e, i, a, r, o, u) => {
    const {ref: f, refs: h, required: m, maxLength: p, minLength: g, min: x, max: S, pattern: w, validate: E, name: A, valueAsNumber: M, mount: j} = e._f
      , O = yt(a, A);
    if (!j || i.has(A))
        return {};
    const V = h ? h[0] : f
      , G = at => {
        o && V.reportValidity && (V.setCustomValidity(Pn(at) ? "" : at || ""),
        V.reportValidity())
    }
      , H = {}
      , J = im(f)
      , Z = rl(f)
      , Y = J || Z
      , ot = (M || nm(f)) && ee(f.value) && ee(O) || ac(f) && f.value === "" || O === "" || Array.isArray(O) && !O.length
      , ht = C_.bind(null, A, r, H)
      , Tt = (at, ct, tt, mt=mi.maxLength, z=mi.minLength) => {
        const q = at ? ct : tt;
        H[A] = {
            type: at ? mt : z,
            message: q,
            ref: f,
            ...ht(at ? mt : z, q)
        }
    }
    ;
    if (u ? !Array.isArray(O) || !O.length : m && (!Y && (ot || Ke(O)) || Pn(O) && !O || Z && !nw(h).isValid || J && !sw(h).isValid)) {
        const {value: at, message: ct} = an(m) ? {
            value: !!m,
            message: m
        } : va(m);
        if (at && (H[A] = {
            type: mi.required,
            message: ct,
            ref: V,
            ...ht(mi.required, ct)
        },
        !r))
            return G(ct),
            H
    }
    if (!ot && (!Ke(x) || !Ke(S))) {
        let at, ct;
        const tt = va(S)
          , mt = va(x);
        if (!Ke(O) && !isNaN(O)) {
            const z = f.valueAsNumber || O && +O;
            Ke(tt.value) || (at = z > tt.value),
            Ke(mt.value) || (ct = z < mt.value)
        } else {
            const z = f.valueAsDate || new Date(O)
              , q = xt => new Date(new Date().toDateString() + " " + xt)
              , k = f.type == "time"
              , rt = f.type == "week";
            an(tt.value) && O && (at = k ? q(O) > q(tt.value) : rt ? O > tt.value : z > new Date(tt.value)),
            an(mt.value) && O && (ct = k ? q(O) < q(mt.value) : rt ? O < mt.value : z < new Date(mt.value))
        }
        if ((at || ct) && (Tt(!!at, tt.message, mt.message, mi.max, mi.min),
        !r))
            return G(H[A].message),
            H
    }
    if ((p || g) && !ot && (an(O) || u && Array.isArray(O))) {
        const at = va(p)
          , ct = va(g)
          , tt = !Ke(at.value) && O.length > +at.value
          , mt = !Ke(ct.value) && O.length < +ct.value;
        if ((tt || mt) && (Tt(tt, at.message, ct.message),
        !r))
            return G(H[A].message),
            H
    }
    if (w && !ot && an(O)) {
        const {value: at, message: ct} = va(w);
        if (rc(at) && !O.match(at) && (H[A] = {
            type: mi.pattern,
            message: ct,
            ref: f,
            ...ht(mi.pattern, ct)
        },
        !r))
            return G(ct),
            H
    }
    if (E) {
        if (Dn(E)) {
            const at = await E(O, a)
              , ct = Sx(at, V);
            if (ct && (H[A] = {
                ...ct,
                ...ht(mi.validate, ct.message)
            },
            !r))
                return G(ct.message),
                H
        } else if (me(E)) {
            let at = {};
            for (const ct in E) {
                if (!Le(at) && !r)
                    break;
                const tt = Sx(await E[ct](O, a), V, ct);
                tt && (at = {
                    ...tt,
                    ...ht(ct, tt.message)
                },
                G(tt.message),
                r && (H[A] = at))
            }
            if (!Le(at) && (H[A] = {
                ref: V,
                ...at
            },
            !r))
                return H
        }
    }
    return G(!0),
    H
}
;
const B_ = {
    mode: Rn.onSubmit,
    reValidateMode: Rn.onChange,
    shouldFocusError: !0
};
function P_(e={}) {
    let i = {
        ...B_,
        ...e
    }, a = {
        submitCount: 0,
        isDirty: !1,
        isReady: !1,
        isLoading: Dn(i.defaultValues),
        isValidating: !1,
        isSubmitted: !1,
        isSubmitting: !1,
        isSubmitSuccessful: !1,
        isValid: !1,
        touchedFields: {},
        dirtyFields: {},
        validatingFields: {},
        errors: i.errors || {},
        disabled: i.disabled || !1
    }, r = {}, o = me(i.defaultValues) || me(i.values) ? ge(i.defaultValues || i.values) || {} : {}, u = i.shouldUnregister ? {} : ge(o), f = {
        action: !1,
        mount: !1,
        watch: !1,
        keepIsValid: !1
    }, h = {
        mount: new Set,
        disabled: new Set,
        unMount: new Set,
        array: new Set,
        watch: new Set
    }, m, p = 0;
    const g = {
        isDirty: !1,
        dirtyFields: !1,
        validatingFields: !1,
        touchedFields: !1,
        isValidating: !1,
        isValid: !1,
        errors: !1
    }
      , x = {
        ...g
    };
    let S = {
        ...x
    };
    const w = {
        array: dx(),
        state: dx()
    }
      , E = i.criteriaMode === Rn.all
      , A = N => B => {
        clearTimeout(p),
        p = setTimeout(N, B)
    }
      , M = async N => {
        if (!f.keepIsValid && !i.disabled && (x.isValid || S.isValid || N)) {
            let B;
            i.resolver ? (B = Le((await Y()).errors),
            j()) : B = await ht(r, !0),
            B !== a.isValid && w.state.next({
                isValid: B
            })
        }
    }
      , j = (N, B) => {
        !i.disabled && (x.isValidating || x.validatingFields || S.isValidating || S.validatingFields) && ((N || Array.from(h.mount)).forEach(X => {
            X && (B ? $t(a.validatingFields, X, B) : de(a.validatingFields, X))
        }
        ),
        w.state.next({
            validatingFields: a.validatingFields,
            isValidating: !Le(a.validatingFields)
        }))
    }
      , O = (N, B=[], X, it, st=!0, et=!0) => {
        if (it && X && !i.disabled) {
            if (f.action = !0,
            et && Array.isArray(yt(r, N))) {
                const vt = X(yt(r, N), it.argA, it.argB);
                st && $t(r, N, vt)
            }
            if (et && Array.isArray(yt(a.errors, N))) {
                const vt = X(yt(a.errors, N), it.argA, it.argB);
                st && $t(a.errors, N, vt),
                U_(a.errors, N)
            }
            if ((x.touchedFields || S.touchedFields) && et && Array.isArray(yt(a.touchedFields, N))) {
                const vt = X(yt(a.touchedFields, N), it.argA, it.argB);
                st && $t(a.touchedFields, N, vt)
            }
            (x.dirtyFields || S.dirtyFields) && (a.dirtyFields = xa(o, u)),
            w.state.next({
                name: N,
                isDirty: at(N, B),
                dirtyFields: a.dirtyFields,
                errors: a.errors,
                isValid: a.isValid
            })
        } else
            $t(u, N, B)
    }
      , V = (N, B) => {
        $t(a.errors, N, B),
        w.state.next({
            errors: a.errors
        })
    }
      , G = N => {
        a.errors = N,
        w.state.next({
            errors: a.errors,
            isValid: !1
        })
    }
      , H = (N, B, X, it) => {
        const st = yt(r, N);
        if (st) {
            const et = yt(u, N, ee(X) ? yt(o, N) : X);
            ee(et) || it && it.defaultChecked || B ? $t(u, N, B ? et : yx(st._f)) : mt(N, et),
            f.mount && !f.action && M()
        }
    }
      , J = (N, B, X, it, st) => {
        let et = !1
          , vt = !1;
        const Vt = {
            name: N
        };
        if (!i.disabled) {
            if (!X || it) {
                (x.isDirty || S.isDirty) && (vt = a.isDirty,
                a.isDirty = Vt.isDirty = at(),
                et = vt !== Vt.isDirty);
                const kt = Yi(yt(o, N), B);
                vt = !!yt(a.dirtyFields, N),
                kt ? de(a.dirtyFields, N) : $t(a.dirtyFields, N, !0),
                Vt.dirtyFields = a.dirtyFields,
                et = et || (x.dirtyFields || S.dirtyFields) && vt !== !kt
            }
            if (X) {
                const kt = yt(a.touchedFields, N);
                kt || ($t(a.touchedFields, N, X),
                Vt.touchedFields = a.touchedFields,
                et = et || (x.touchedFields || S.touchedFields) && kt !== X)
            }
            et && st && w.state.next(Vt)
        }
        return et ? Vt : {}
    }
      , Z = (N, B, X, it) => {
        const st = yt(a.errors, N)
          , et = (x.isValid || S.isValid) && Pn(B) && a.isValid !== B;
        if (i.delayError && X ? (m = A( () => V(N, X)),
        m(i.delayError)) : (clearTimeout(p),
        m = null,
        X ? $t(a.errors, N, X) : de(a.errors, N)),
        (X ? !Yi(st, X) : st) || !Le(it) || et) {
            const vt = {
                ...it,
                ...et && Pn(B) ? {
                    isValid: B
                } : {},
                errors: a.errors,
                name: N
            };
            a = {
                ...a,
                ...vt
            },
            w.state.next(vt)
        }
    }
      , Y = async N => (j(N, !0),
    await i.resolver(u, i.context, j_(N || h.mount, r, i.criteriaMode, i.shouldUseNativeValidation)))
      , ot = async N => {
        const {errors: B} = await Y(N);
        if (j(N),
        N)
            for (const X of N) {
                const it = yt(B, X);
                it ? $t(a.errors, X, it) : de(a.errors, X)
            }
        else
            a.errors = B;
        return B
    }
      , ht = async (N, B, X={
        valid: !0
    }) => {
        for (const it in N) {
            const st = N[it];
            if (st) {
                const {_f: et, ...vt} = st;
                if (et) {
                    const Vt = h.array.has(et.name)
                      , kt = st._f && O_(st._f);
                    kt && x.validatingFields && j([et.name], !0);
                    const Se = await wx(st, h.disabled, u, E, i.shouldUseNativeValidation && !B, Vt);
                    if (kt && x.validatingFields && j([et.name]),
                    Se[et.name] && (X.valid = !1,
                    B || e.shouldUseNativeValidation))
                        break;
                    !B && (yt(Se, et.name) ? Vt ? k_(a.errors, Se, et.name) : $t(a.errors, et.name, Se[et.name]) : de(a.errors, et.name))
                }
                !Le(vt) && await ht(vt, B, X)
            }
        }
        return X.valid
    }
      , Tt = () => {
        for (const N of h.unMount) {
            const B = yt(r, N);
            B && (B._f.refs ? B._f.refs.every(X => !vd(X)) : !vd(B._f.ref)) && Qt(N)
        }
        h.unMount = new Set
    }
      , at = (N, B) => !i.disabled && (N && B && $t(u, N, B),
    !Yi(D(), o))
      , ct = (N, B, X) => A_(N, h, {
        ...f.mount ? u : ee(B) ? o : an(N) ? {
            [N]: B
        } : B
    }, X, B)
      , tt = N => tm(yt(f.mount ? u : o, N, i.shouldUnregister ? yt(o, N, []) : []))
      , mt = (N, B, X={}) => {
        const it = yt(r, N);
        let st = B;
        if (it) {
            const et = it._f;
            et && (!et.disabled && $t(u, N, iw(B, et)),
            st = ac(et.ref) && Ke(B) ? "" : B,
            tw(et.ref) ? [...et.ref.options].forEach(vt => vt.selected = st.includes(vt.value)) : et.refs ? rl(et.ref) ? et.refs.forEach(vt => {
                (!vt.defaultChecked || !vt.disabled) && (Array.isArray(st) ? vt.checked = !!st.find(Vt => Vt === vt.value) : vt.checked = st === vt.value || !!st)
            }
            ) : et.refs.forEach(vt => vt.checked = vt.value === st) : nm(et.ref) ? et.ref.value = "" : (et.ref.value = st,
            et.ref.type || w.state.next({
                name: N,
                values: ge(u)
            })))
        }
        (X.shouldDirty || X.shouldTouch) && J(N, st, X.shouldTouch, X.shouldDirty, !0),
        X.shouldValidate && xt(N)
    }
      , z = (N, B, X) => {
        for (const it in B) {
            if (!B.hasOwnProperty(it))
                return;
            const st = B[it]
              , et = N + "." + it
              , vt = yt(r, et);
            (h.array.has(N) || me(st) || vt && !vt._f) && !Cs(st) ? z(et, st, X) : mt(et, st, X)
        }
    }
      , q = (N, B, X={}) => {
        const it = yt(r, N)
          , st = h.array.has(N)
          , et = ge(B);
        $t(u, N, et),
        st ? (w.array.next({
            name: N,
            values: ge(u)
        }),
        (x.isDirty || x.dirtyFields || S.isDirty || S.dirtyFields) && X.shouldDirty && w.state.next({
            name: N,
            dirtyFields: xa(o, u),
            isDirty: at(N, et)
        })) : it && !it._f && !Ke(et) ? z(N, et, X) : mt(N, et, X),
        xx(N, h) ? w.state.next({
            ...a,
            name: N,
            values: ge(u)
        }) : w.state.next({
            name: f.mount ? N : void 0,
            values: ge(u)
        })
    }
      , k = async N => {
        f.mount = !0;
        const B = N.target;
        let X = B.name
          , it = !0;
        const st = yt(r, X)
          , et = kt => {
            it = Number.isNaN(kt) || Cs(kt) && isNaN(kt.getTime()) || Yi(kt, yt(u, X, kt))
        }
          , vt = gx(i.mode)
          , Vt = gx(i.reValidateMode);
        if (st) {
            let kt, Se;
            const Kn = B.type ? yx(st._f) : g_(N)
              , zn = N.type === fx.BLUR || N.type === fx.FOCUS_OUT
              , ts = !__(st._f) && !i.resolver && !yt(a.errors, X) && !st._f.deps || L_(zn, yt(a.touchedFields, X), a.isSubmitted, Vt, vt)
              , Ae = xx(X, h, zn);
            $t(u, X, Kn),
            zn ? (!B || !B.readOnly) && (st._f.onBlur && st._f.onBlur(N),
            m && m(0)) : st._f.onChange && st._f.onChange(N);
            const on = J(X, Kn, zn)
              , Ve = !Le(on) || Ae;
            if (!zn && w.state.next({
                name: X,
                type: N.type,
                values: ge(u)
            }),
            ts)
                return (x.isValid || S.isValid) && (i.mode === "onBlur" ? zn && M() : zn || M()),
                Ve && w.state.next({
                    name: X,
                    ...Ae ? {} : on
                });
            if (!zn && Ae && w.state.next({
                ...a
            }),
            i.resolver) {
                const {errors: cl} = await Y([X]);
                if (j([X]),
                et(Kn),
                it) {
                    const Mc = bx(a.errors, r, X)
                      , ul = bx(cl, r, Mc.name || X);
                    kt = ul.error,
                    X = ul.name,
                    Se = Le(cl)
                }
            } else
                j([X], !0),
                kt = (await wx(st, h.disabled, u, E, i.shouldUseNativeValidation))[X],
                j([X]),
                et(Kn),
                it && (kt ? Se = !1 : (x.isValid || S.isValid) && (Se = await ht(r, !0)));
            it && (st._f.deps && (!Array.isArray(st._f.deps) || st._f.deps.length > 0) && xt(st._f.deps),
            Z(X, Se, kt, on))
        }
    }
      , rt = (N, B) => {
        if (yt(a.errors, B) && N.focus)
            return N.focus(),
            1
    }
      , xt = async (N, B={}) => {
        let X, it;
        const st = Hr(N);
        if (i.resolver) {
            const et = await ot(ee(N) ? N : st);
            X = Le(et),
            it = N ? !st.some(vt => yt(et, vt)) : X
        } else
            N ? (it = (await Promise.all(st.map(async et => {
                const vt = yt(r, et);
                return await ht(vt && vt._f ? {
                    [et]: vt
                } : vt)
            }
            ))).every(Boolean),
            !(!it && !a.isValid) && M()) : it = X = await ht(r);
        return w.state.next({
            ...!an(N) || (x.isValid || S.isValid) && X !== a.isValid ? {} : {
                name: N
            },
            ...i.resolver || !N ? {
                isValid: X
            } : {},
            errors: a.errors
        }),
        B.shouldFocus && !it && qr(r, rt, N ? st : h.mount),
        it
    }
      , D = (N, B) => {
        let X = {
            ...f.mount ? u : o
        };
        return B && (X = $S(B.dirtyFields ? a.dirtyFields : a.touchedFields, X)),
        ee(N) ? X : an(N) ? yt(X, N) : N.map(it => yt(X, it))
    }
      , K = (N, B) => ({
        invalid: !!yt((B || a).errors, N),
        isDirty: !!yt((B || a).dirtyFields, N),
        error: yt((B || a).errors, N),
        isValidating: !!yt(a.validatingFields, N),
        isTouched: !!yt((B || a).touchedFields, N)
    })
      , $ = N => {
        N && Hr(N).forEach(B => de(a.errors, B)),
        w.state.next({
            errors: N ? a.errors : {}
        })
    }
      , nt = (N, B, X) => {
        const it = (yt(r, N, {
            _f: {}
        })._f || {}).ref
          , st = yt(a.errors, N) || {}
          , {ref: et, message: vt, type: Vt, ...kt} = st;
        $t(a.errors, N, {
            ...kt,
            ...B,
            ref: it
        }),
        w.state.next({
            name: N,
            errors: a.errors,
            isValid: !1
        }),
        X && X.shouldFocus && it && it.focus && it.focus()
    }
      , St = (N, B) => Dn(N) ? w.state.subscribe({
        next: X => "values"in X && N(ct(void 0, B), X)
    }) : ct(N, B, !0)
      , At = N => w.state.subscribe({
        next: B => {
            z_(N.name, B.name, N.exact) && V_(B, N.formState || x, ll, N.reRenderRoot) && N.callback({
                values: {
                    ...u
                },
                ...a,
                ...B,
                defaultValues: o
            })
        }
    }).unsubscribe
      , gt = N => (f.mount = !0,
    S = {
        ...S,
        ...N.formState
    },
    At({
        ...N,
        formState: {
            ...g,
            ...N.formState
        }
    }))
      , Qt = (N, B={}) => {
        for (const X of N ? Hr(N) : h.mount)
            h.mount.delete(X),
            h.array.delete(X),
            B.keepValue || (de(r, X),
            de(u, X)),
            !B.keepError && de(a.errors, X),
            !B.keepDirty && de(a.dirtyFields, X),
            !B.keepTouched && de(a.touchedFields, X),
            !B.keepIsValidating && de(a.validatingFields, X),
            !i.shouldUnregister && !B.keepDefaultValue && de(o, X);
        w.state.next({
            values: ge(u)
        }),
        w.state.next({
            ...a,
            ...B.keepDirty ? {
                isDirty: at()
            } : {}
        }),
        !B.keepIsValid && M()
    }
      , Ut = ({disabled: N, name: B}) => {
        if (Pn(N) && f.mount || N || h.disabled.has(B)) {
            const st = h.disabled.has(B) !== !!N;
            N ? h.disabled.add(B) : h.disabled.delete(B),
            st && f.mount && !f.action && M()
        }
    }
      , je = (N, B={}) => {
        let X = yt(r, N);
        const it = Pn(B.disabled) || Pn(i.disabled);
        return $t(r, N, {
            ...X || {},
            _f: {
                ...X && X._f ? X._f : {
                    ref: {
                        name: N
                    }
                },
                name: N,
                mount: !0,
                ...B
            }
        }),
        h.mount.add(N),
        X ? Ut({
            disabled: Pn(B.disabled) ? B.disabled : i.disabled,
            name: N
        }) : H(N, !0, B.value),
        {
            ...it ? {
                disabled: B.disabled || i.disabled
            } : {},
            ...i.progressive ? {
                required: !!B.required,
                min: jr(B.min),
                max: jr(B.max),
                minLength: jr(B.minLength),
                maxLength: jr(B.maxLength),
                pattern: jr(B.pattern)
            } : {},
            name: N,
            onChange: k,
            onBlur: k,
            ref: st => {
                if (st) {
                    je(N, B),
                    X = yt(r, N);
                    const et = ee(st.value) && st.querySelectorAll && st.querySelectorAll("input,select,textarea")[0] || st
                      , vt = M_(et)
                      , Vt = X._f.refs || [];
                    if (vt ? Vt.find(kt => kt === et) : et === X._f.ref)
                        return;
                    $t(r, N, {
                        _f: {
                            ...X._f,
                            ...vt ? {
                                refs: [...Vt.filter(vd), et, ...Array.isArray(yt(o, N)) ? [{}] : []],
                                ref: {
                                    type: et.type,
                                    name: N
                                }
                            } : {
                                ref: et
                            }
                        }
                    }),
                    H(N, !1, void 0, et)
                } else
                    X = yt(r, N, {}),
                    X._f && (X._f.mount = !1),
                    (i.shouldUnregister || B.shouldUnregister) && !(x_(h.array, N) && f.action) && h.unMount.add(N)
            }
        }
    }
      , Pe = () => i.shouldFocusError && qr(r, rt, h.mount)
      , ln = N => {
        Pn(N) && (w.state.next({
            disabled: N
        }),
        qr(r, (B, X) => {
            const it = yt(r, X);
            it && (B.disabled = it._f.disabled || N,
            Array.isArray(it._f.refs) && it._f.refs.forEach(st => {
                st.disabled = it._f.disabled || N
            }
            ))
        }
        , 0, !1))
    }
      , Vn = (N, B) => async X => {
        let it;
        X && (X.preventDefault && X.preventDefault(),
        X.persist && X.persist());
        let st = ge(u);
        if (w.state.next({
            isSubmitting: !0
        }),
        i.resolver) {
            const {errors: et, values: vt} = await Y();
            j(),
            a.errors = et,
            st = ge(vt)
        } else
            await ht(r);
        if (h.disabled.size)
            for (const et of h.disabled)
                de(st, et);
        if (de(a.errors, "root"),
        Le(a.errors)) {
            w.state.next({
                errors: {}
            });
            try {
                await N(st, X)
            } catch (et) {
                it = et
            }
        } else
            B && await B({
                ...a.errors
            }, X),
            Pe(),
            setTimeout(Pe);
        if (w.state.next({
            isSubmitted: !0,
            isSubmitting: !1,
            isSubmitSuccessful: Le(a.errors) && !it,
            submitCount: a.submitCount + 1,
            errors: a.errors
        }),
        it)
            throw it
    }
      , Qn = (N, B={}) => {
        yt(r, N) && (ee(B.defaultValue) ? q(N, ge(yt(o, N))) : (q(N, B.defaultValue),
        $t(o, N, ge(B.defaultValue))),
        B.keepTouched || de(a.touchedFields, N),
        B.keepDirty || (de(a.dirtyFields, N),
        a.isDirty = B.defaultValue ? at(N, ge(yt(o, N))) : at()),
        B.keepError || (de(a.errors, N),
        x.isValid && M()),
        w.state.next({
            ...a
        }))
    }
      , Rs = (N, B={}) => {
        const X = N ? ge(N) : o
          , it = ge(X)
          , st = Le(N)
          , et = st ? o : it;
        if (B.keepDefaultValues || (o = X),
        !B.keepValues) {
            if (B.keepDirtyValues) {
                const vt = new Set([...h.mount, ...Object.keys(xa(o, u))]);
                for (const Vt of Array.from(vt)) {
                    const kt = yt(a.dirtyFields, Vt)
                      , Se = yt(u, Vt)
                      , Kn = yt(et, Vt);
                    kt && !ee(Se) ? $t(et, Vt, Se) : !kt && !ee(Kn) && q(Vt, Kn)
                }
            } else {
                if ($h && ee(N))
                    for (const vt of h.mount) {
                        const Vt = yt(r, vt);
                        if (Vt && Vt._f) {
                            const kt = Array.isArray(Vt._f.refs) ? Vt._f.refs[0] : Vt._f.ref;
                            if (ac(kt)) {
                                const Se = kt.closest("form");
                                if (Se) {
                                    Se.reset();
                                    break
                                }
                            }
                        }
                    }
                if (B.keepFieldsRef)
                    for (const vt of h.mount)
                        q(vt, yt(et, vt));
                else
                    r = {}
            }
            u = i.shouldUnregister ? B.keepDefaultValues ? ge(o) : {} : ge(et),
            w.array.next({
                values: {
                    ...et
                }
            }),
            w.state.next({
                values: {
                    ...et
                }
            })
        }
        h = {
            mount: B.keepDirtyValues ? h.mount : new Set,
            unMount: new Set,
            array: new Set,
            disabled: new Set,
            watch: new Set,
            watchAll: !1,
            focus: ""
        },
        f.mount = !x.isValid || !!B.keepIsValid || !!B.keepDirtyValues || !i.shouldUnregister && !Le(et),
        f.watch = !!i.shouldUnregister,
        f.keepIsValid = !!B.keepIsValid,
        f.action = !1,
        B.keepErrors || (a.errors = {}),
        w.state.next({
            submitCount: B.keepSubmitCount ? a.submitCount : 0,
            isDirty: st ? !1 : B.keepDirty ? a.isDirty : !!(B.keepDefaultValues && !Yi(N, o)),
            isSubmitted: B.keepIsSubmitted ? a.isSubmitted : !1,
            dirtyFields: st ? {} : B.keepDirtyValues ? B.keepDefaultValues && u ? xa(o, u) : a.dirtyFields : B.keepDefaultValues && N ? xa(o, N) : B.keepDirty ? a.dirtyFields : {},
            touchedFields: B.keepTouched ? a.touchedFields : {},
            errors: B.keepErrors ? a.errors : {},
            isSubmitSuccessful: B.keepIsSubmitSuccessful ? a.isSubmitSuccessful : !1,
            isSubmitting: !1,
            defaultValues: o
        })
    }
      , js = (N, B) => Rs(Dn(N) ? N(u) : N, {
        ...i.resetOptions,
        ...B
    })
      , Cc = (N, B={}) => {
        const X = yt(r, N)
          , it = X && X._f;
        if (it) {
            const st = it.refs ? it.refs[0] : it.ref;
            st.focus && setTimeout( () => {
                st.focus(),
                B.shouldSelect && Dn(st.select) && st.select()
            }
            )
        }
    }
      , ll = N => {
        a = {
            ...a,
            ...N
        }
    }
      , Os = {
        control: {
            register: je,
            unregister: Qt,
            getFieldState: K,
            handleSubmit: Vn,
            setError: nt,
            _subscribe: At,
            _runSchema: Y,
            _updateIsValidating: j,
            _focusError: Pe,
            _getWatch: ct,
            _getDirty: at,
            _setValid: M,
            _setFieldArray: O,
            _setDisabledField: Ut,
            _setErrors: G,
            _getFieldArray: tt,
            _reset: Rs,
            _resetDefaultValues: () => Dn(i.defaultValues) && i.defaultValues().then(N => {
                js(N, i.resetOptions),
                w.state.next({
                    isLoading: !1
                })
            }
            ),
            _removeUnmounted: Tt,
            _disableForm: ln,
            _subjects: w,
            _proxyFormState: x,
            get _fields() {
                return r
            },
            get _formValues() {
                return u
            },
            get _state() {
                return f
            },
            set _state(N) {
                f = N
            },
            get _defaultValues() {
                return o
            },
            get _names() {
                return h
            },
            set _names(N) {
                h = N
            },
            get _formState() {
                return a
            },
            get _options() {
                return i
            },
            set _options(N) {
                i = {
                    ...i,
                    ...N
                }
            }
        },
        subscribe: gt,
        trigger: xt,
        register: je,
        handleSubmit: Vn,
        watch: St,
        setValue: q,
        getValues: D,
        reset: js,
        resetField: Qn,
        clearErrors: $,
        unregister: Qt,
        setError: nt,
        setFocus: Cc,
        getFieldState: K
    };
    return {
        ...Os,
        formControl: Os
    }
}
function H_(e={}) {
    const i = te.useRef(void 0)
      , a = te.useRef(void 0)
      , [r,o] = te.useState({
        isDirty: !1,
        isValidating: !1,
        isLoading: Dn(e.defaultValues),
        isSubmitted: !1,
        isSubmitting: !1,
        isSubmitSuccessful: !1,
        isValid: !1,
        submitCount: 0,
        dirtyFields: {},
        touchedFields: {},
        validatingFields: {},
        errors: e.errors || {},
        disabled: e.disabled || !1,
        isReady: !1,
        defaultValues: Dn(e.defaultValues) ? void 0 : e.defaultValues
    });
    if (!i.current)
        if (e.formControl)
            i.current = {
                ...e.formControl,
                formState: r
            },
            e.defaultValues && !Dn(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
        else {
            const {formControl: f, ...h} = P_(e);
            i.current = {
                ...h,
                formState: r
            }
        }
    const u = i.current.control;
    return u._options = e,
    T_( () => {
        const f = u._subscribe({
            formState: u._proxyFormState,
            callback: () => o({
                ...u._formState
            }),
            reRenderRoot: !0
        });
        return o(h => ({
            ...h,
            isReady: !0
        })),
        u._formState.isReady = !0,
        f
    }
    , [u]),
    te.useEffect( () => u._disableForm(e.disabled), [u, e.disabled]),
    te.useEffect( () => {
        e.mode && (u._options.mode = e.mode),
        e.reValidateMode && (u._options.reValidateMode = e.reValidateMode)
    }
    , [u, e.mode, e.reValidateMode]),
    te.useEffect( () => {
        e.errors && (u._setErrors(e.errors),
        u._focusError())
    }
    , [u, e.errors]),
    te.useEffect( () => {
        e.shouldUnregister && u._subjects.state.next({
            values: u._getWatch()
        })
    }
    , [u, e.shouldUnregister]),
    te.useEffect( () => {
        if (u._proxyFormState.isDirty) {
            const f = u._getDirty();
            f !== r.isDirty && u._subjects.state.next({
                isDirty: f
            })
        }
    }
    , [u, r.isDirty]),
    te.useEffect( () => {
        var f;
        e.values && !Yi(e.values, a.current) ? (u._reset(e.values, {
            keepFieldsRef: !0,
            ...u._options.resetOptions
        }),
        !((f = u._options.resetOptions) === null || f === void 0) && f.keepIsValid || u._setValid(),
        a.current = e.values,
        o(h => ({
            ...h
        }))) : u._resetDefaultValues()
    }
    , [u, e.values]),
    te.useEffect( () => {
        u._state.mount || (u._setValid(),
        u._state.mount = !0),
        u._state.watch && (u._state.watch = !1,
        u._subjects.state.next({
            ...u._formState
        })),
        u._removeUnmounted()
    }
    ),
    i.current.formState = te.useMemo( () => w_(r, u), [u, r]),
    i.current
}
function q_() {
    const {register: e, handleSubmit: i, reset: a} = H_()
      , {toast: r} = Px()
      , o = u => {
        console.log(u),
        r({
            title: "Message Sent",
            description: "Thank you for your inquiry. We will get back to you shortly."
        }),
        a()
    }
    ;
    return v.jsxs(Ds, {
        children: [v.jsxs("div", {
            className: "bg-primary py-20 text-center",
            children: [v.jsx("h1", {
                className: "text-4xl md:text-5xl font-bold text-white mb-4 font-heading",
                children: "Contact Us"
            }), v.jsx("p", {
                className: "text-xl text-slate-300",
                children: "Get in touch with our export team"
            })]
        }), v.jsx("div", {
            className: "py-20 bg-slate-50",
            children: v.jsx("div", {
                className: "container mx-auto px-4 md:px-6",
                children: v.jsxs("div", {
                    className: "grid lg:grid-cols-2 gap-12",
                    children: [v.jsxs("div", {
                        className: "space-y-8",
                        children: [v.jsx("h2", {
                            className: "text-3xl font-bold text-primary font-heading",
                            children: "Get in Touch"
                        }), v.jsx("p", {
                            className: "text-slate-600 text-lg",
                            children: "Whether you are looking for a quote, product specifications, or partnership opportunities, we are here to assist you."
                        }), v.jsxs("div", {
                            className: "space-y-6 mt-8",
                            children: [v.jsxs(Lr, {
                                className: "p-6 flex items-start gap-4 border-slate-200",
                                children: [v.jsx("div", {
                                    className: "bg-accent/10 p-3 rounded-full text-accent",
                                    children: v.jsx(yb, {
                                        className: "h-6 w-6"
                                    })
                                }), v.jsxs("div", {
                                    children: [v.jsx("h4", {
                                        className: "font-bold text-primary text-lg mb-1",
                                        children: "Headquarters & Factory"
                                    }), v.jsxs("p", {
                                        className: "text-slate-600 leading-relaxed",
                                        children: ["Mulpuri Aqua Processors", v.jsx("br", {}), "Arugolanu Village, Bapulapadu Mandal,", v.jsx("br", {}), "Krishna District, Andhra Pradesh - 521106, India"]
                                    })]
                                })]
                            }), v.jsxs(Lr, {
                                className: "p-6 flex items-start gap-4 border-slate-200",
                                children: [v.jsx("div", {
                                    className: "bg-accent/10 p-3 rounded-full text-accent",
                                    children: v.jsx(pb, {
                                        className: "h-6 w-6"
                                    })
                                }), v.jsxs("div", {
                                    children: [v.jsx("h4", {
                                        className: "font-bold text-primary text-lg mb-1",
                                        children: "Email Us"
                                    }), v.jsx("a", {
                                        href: "mailto:map@mulpuri.org",
                                        className: "text-accent hover:underline block mb-1",
                                        children: "map@mulpuri.org"
                                    }), v.jsx("p", {
                                        className: "text-sm text-slate-500",
                                        children: "Response time: Within 24 hours"
                                    })]
                                })]
                            }), v.jsxs(Lr, {
                                className: "p-6 flex items-start gap-4 border-slate-200",
                                children: [v.jsx("div", {
                                    className: "bg-accent/10 p-3 rounded-full text-accent",
                                    children: v.jsx(gb, {
                                        className: "h-6 w-6"
                                    })
                                }), v.jsxs("div", {
                                    children: [v.jsx("h4", {
                                        className: "font-bold text-primary text-lg mb-1",
                                        children: "Call Us"
                                    }), v.jsx("a", {
                                        href: "tel:+910000000000",
                                        className: "text-slate-600 hover:text-primary transition-colors block mb-1",
                                        children: "+91 (000) 000-0000"
                                    }), v.jsx("p", {
                                        className: "text-sm text-slate-500",
                                        children: "Mon-Sat, 9:00 AM - 6:00 PM IST"
                                    })]
                                })]
                            })]
                        })]
                    }), v.jsxs("div", {
                        className: "bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100",
                        children: [v.jsx("h3", {
                            className: "text-2xl font-bold text-primary mb-6 font-heading",
                            children: "Send an Inquiry"
                        }), v.jsxs("form", {
                            onSubmit: i(o),
                            className: "space-y-6",
                            children: [v.jsxs("div", {
                                className: "grid md:grid-cols-2 gap-6",
                                children: [v.jsxs("div", {
                                    className: "space-y-2",
                                    children: [v.jsx("label", {
                                        className: "text-sm font-medium text-slate-700",
                                        children: "First Name"
                                    }), v.jsx(Vr, {
                                        ...e("firstName"),
                                        placeholder: "John",
                                        className: "bg-slate-50",
                                        required: !0
                                    })]
                                }), v.jsxs("div", {
                                    className: "space-y-2",
                                    children: [v.jsx("label", {
                                        className: "text-sm font-medium text-slate-700",
                                        children: "Last Name"
                                    }), v.jsx(Vr, {
                                        ...e("lastName"),
                                        placeholder: "Doe",
                                        className: "bg-slate-50",
                                        required: !0
                                    })]
                                })]
                            }), v.jsxs("div", {
                                className: "space-y-2",
                                children: [v.jsx("label", {
                                    className: "text-sm font-medium text-slate-700",
                                    children: "Email Address"
                                }), v.jsx(Vr, {
                                    ...e("email"),
                                    type: "email",
                                    placeholder: "john@company.com",
                                    className: "bg-slate-50",
                                    required: !0
                                })]
                            }), v.jsxs("div", {
                                className: "space-y-2",
                                children: [v.jsx("label", {
                                    className: "text-sm font-medium text-slate-700",
                                    children: "Company Name"
                                }), v.jsx(Vr, {
                                    ...e("company"),
                                    placeholder: "Your Company Ltd.",
                                    className: "bg-slate-50"
                                })]
                            }), v.jsxs("div", {
                                className: "space-y-2",
                                children: [v.jsx("label", {
                                    className: "text-sm font-medium text-slate-700",
                                    children: "Message / Requirement"
                                }), v.jsx(WS, {
                                    ...e("message"),
                                    placeholder: "Please specify product interest, volume, and destination...",
                                    className: "min-h-[150px] bg-slate-50",
                                    required: !0
                                })]
                            }), v.jsx(bn, {
                                type: "submit",
                                size: "lg",
                                className: "w-full bg-primary hover:bg-secondary font-bold text-lg h-12",
                                children: "Send Message"
                            })]
                        })]
                    })]
                })
            })
        })]
    })
}
function F_() {
    return v.jsxs(IA, {
        children: [v.jsx(xs, {
            path: "/",
            component: f_
        }), v.jsx(xs, {
            path: "/about",
            component: d_
        }), v.jsx(xs, {
            path: "/products",
            component: m_
        }), v.jsx(xs, {
            path: "/infrastructure",
            component: p_
        }), v.jsx(xs, {
            path: "/quality",
            component: y_
        }), v.jsx(xs, {
            path: "/contact",
            component: q_
        }), v.jsx(xs, {
            component: DD
        })]
    })
}
function G_() {
    return v.jsx(E2, {
        client: N2,
        children: v.jsxs(fD, {
            children: [v.jsx(TM, {}), v.jsx(F_, {})]
        })
    })
}
MA.createRoot(document.getElementById("root")).render(v.jsx(G_, {}));
