(window.webpackJsonp = window.webpackJsonp || []).push([
    [4], {
        "+M1K": function(t, r, n) {
            var o = n("2oRo"),
                e = n("WSbT"),
                i = o.RangeError;
            t.exports = function(t) {
                var r = e(t);
                if (r < 0) throw i("The argument can't be less than 0");
                return r
            }
        },
        "/GqU": function(t, r, n) {
            var o = n("RK3t"),
                e = n("HYAF");
            t.exports = function(t) {
                return o(e(t))
            }
        },
        "/b8u": function(t, r, n) {
            var o = n("STAE");
            t.exports = o && !Symbol.sham && "symbol" == typeof Symbol.iterator
        },
        "/qmn": function(t, r, n) {
            var o = n("2oRo");
            t.exports = o.Promise
        },
        "0BK2": function(t, r) {
            t.exports = {}
        },
        "0Dky": function(t, r) {
            t.exports = function(t) {
                try {
                    return !!t()
                } catch (r) {
                    return !0
                }
            }
        },
        "0GbY": function(t, r, n) {
            var o = n("2oRo"),
                e = n("Fib7"),
                i = function(t) {
                    return e(t) ? t : void 0
                };
            t.exports = function(t, r) {
                return arguments.length < 2 ? i(o[t]) : o[t] && o[t][r]
            }
        },
        "0eef": function(t, r, n) {
            "use strict";
            var o = {}.propertyIsEnumerable,
                e = Object.getOwnPropertyDescriptor,
                i = e && !o.call({
                    1: 2
                }, 1);
            r.f = i ? function(t) {
                var r = e(this, t);
                return !!r && r.enumerable
            } : o
        },
        "0rvr": function(t, r, n) {
            var o = n("4zBA"),
                e = n("glrk"),
                i = n("O741");
            t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var t, r = !1,
                    n = {};
                try {
                    (t = o(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(n, []), r = n instanceof Array
                } catch (u) {}
                return function(n, o) {
                    return e(n), i(o), r ? t(n, o) : n.__proto__ = o, n
                }
            }() : void 0)
        },
        "2Zix": function(t, r, n) {
            var o = n("NC/Y");
            t.exports = /MSIE|Trident/.test(o)
        },
        "2bX/": function(t, r, n) {
            var o = n("2oRo"),
                e = n("0GbY"),
                i = n("Fib7"),
                u = n("OpvP"),
                c = n("/b8u"),
                f = o.Object;
            t.exports = c ? function(t) {
                return "symbol" == typeof t
            } : function(t) {
                var r = e("Symbol");
                return i(r) && u(r.prototype, f(t))
            }
        },
        "2oRo": function(t, r, n) {
            (function(r) {
                var n = function(t) {
                    return t && t.Math == Math && t
                };
                t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof r && r) || function() {
                    return this
                }() || Function("return this")()
            }).call(this, n("yLpj"))
        },
        "3Eq5": function(t, r, n) {
            var o = n("We1y");
            t.exports = function(t, r) {
                var n = t[r];
                return null == n ? void 0 : o(n)
            }
        },
        "4WOD": function(t, r, n) {
            var o = n("2oRo"),
                e = n("Gi26"),
                i = n("Fib7"),
                u = n("ewvW"),
                c = n("93I0"),
                f = n("4Xet"),
                a = c("IE_PROTO"),
                s = o.Object,
                p = s.prototype;
            t.exports = f ? s.getPrototypeOf : function(t) {
                var r = u(t);
                if (e(r, a)) return r[a];
                var n = r.constructor;
                return i(n) && r instanceof n ? n.prototype : r instanceof s ? p : null
            }
        },
        "4Xet": function(t, r, n) {
            var o = n("0Dky");
            t.exports = !o((function() {
                function t() {}
                return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
            }))
        },
        "4zBA": function(t, r, n) {
            var o = n("QNWe"),
                e = Function.prototype,
                i = e.bind,
                u = e.call,
                c = o && i.bind(u, u);
            t.exports = o ? function(t) {
                return t && c(t)
            } : function(t) {
                return t && function() {
                    return u.apply(t, arguments)
                }
            }
        },
        "67WC": function(t, r, n) {
            "use strict";
            var o, e, i, u = n("qYE9"),
                c = n("g6v/"),
                f = n("2oRo"),
                a = n("Fib7"),
                s = n("hh1v"),
                p = n("Gi26"),
                v = n("9d/t"),
                y = n("DVFp"),
                l = n("kRJp"),
                h = n("busE"),
                b = n("m/L8").f,
                g = n("OpvP"),
                d = n("4WOD"),
                x = n("0rvr"),
                m = n("tiKp"),
                w = n("kOOl"),
                A = f.Int8Array,
                O = A && A.prototype,
                S = f.Uint8ClampedArray,
                R = S && S.prototype,
                T = A && d(A),
                E = O && d(O),
                F = Object.prototype,
                k = f.TypeError,
                B = m("toStringTag"),
                j = w("TYPED_ARRAY_TAG"),
                D = w("TYPED_ARRAY_CONSTRUCTOR"),
                P = u && !!x && "Opera" !== v(f.opera),
                I = !1,
                G = {
                    Int8Array: 1,
                    Uint8Array: 1,
                    Uint8ClampedArray: 1,
                    Int16Array: 2,
                    Uint16Array: 2,
                    Int32Array: 4,
                    Uint32Array: 4,
                    Float32Array: 4,
                    Float64Array: 8
                },
                C = {
                    BigInt64Array: 8,
                    BigUint64Array: 8
                },
                _ = function(t) {
                    if (!s(t)) return !1;
                    var r = v(t);
                    return p(G, r) || p(C, r)
                };
            for (o in G)(i = (e = f[o]) && e.prototype) ? l(i, D, e) : P = !1;
            for (o in C)(i = (e = f[o]) && e.prototype) && l(i, D, e);
            if ((!P || !a(T) || T === Function.prototype) && (T = function() {
                    throw k("Incorrect invocation")
                }, P))
                for (o in G) f[o] && x(f[o], T);
            if ((!P || !E || E === F) && (E = T.prototype, P))
                for (o in G) f[o] && x(f[o].prototype, E);
            if (P && d(R) !== E && x(R, E), c && !p(E, B))
                for (o in I = !0, b(E, B, {
                        get: function() {
                            return s(this) ? this[j] : void 0
                        }
                    }), G) f[o] && l(f[o], j, o);
            t.exports = {
                NATIVE_ARRAY_BUFFER_VIEWS: P,
                TYPED_ARRAY_CONSTRUCTOR: D,
                TYPED_ARRAY_TAG: I && j,
                aTypedArray: function(t) {
                    if (_(t)) return t;
                    throw k("Target is not a typed array")
                },
                aTypedArrayConstructor: function(t) {
                    if (a(t) && (!x || g(T, t))) return t;
                    throw k(y(t) + " is not a typed array constructor")
                },
                exportTypedArrayMethod: function(t, r, n, o) {
                    if (c) {
                        if (n)
                            for (var e in G) {
                                var i = f[e];
                                if (i && p(i.prototype, t)) try {
                                    delete i.prototype[t]
                                } catch (u) {
                                    try {
                                        i.prototype[t] = r
                                    } catch (a) {}
                                }
                            }
                        E[t] && !n || h(E, t, n ? r : P && O[t] || r, o)
                    }
                },
                exportTypedArrayStaticMethod: function(t, r, n) {
                    var o, e;
                    if (c) {
                        if (x) {
                            if (n)
                                for (o in G)
                                    if ((e = f[o]) && p(e, t)) try {
                                        delete e[t]
                                    } catch (i) {}
                            if (T[t] && !n) return;
                            try {
                                return h(T, t, n ? r : P && T[t] || r)
                            } catch (i) {}
                        }
                        for (o in G) !(e = f[o]) || e[t] && !n || h(e, t, r)
                    }
                },
                isView: function(t) {
                    if (!s(t)) return !1;
                    var r = v(t);
                    return "DataView" === r || p(G, r) || p(C, r)
                },
                isTypedArray: _,
                TypedArray: T,
                TypedArrayPrototype: E
            }
        },
        "6JNq": function(t, r, n) {
            var o = n("Gi26"),
                e = n("Vu81"),
                i = n("Bs8V"),
                u = n("m/L8");
            t.exports = function(t, r, n) {
                for (var c = e(r), f = u.f, a = i.f, s = 0; s < c.length; s++) {
                    var p = c[s];
                    o(t, p) || n && o(n, p) || f(t, p, a(r, p))
                }
            }
        },
        "7ueG": function(t, r, n) {
            "use strict";
            var o = n("I+eb"),
                e = n("WKiH").start,
                i = n("yNLB")("trimStart"),
                u = i ? function() {
                    return e(this)
                } : "".trimStart;
            o({
                target: "String",
                proto: !0,
                name: "trimStart",
                forced: i
            }, {
                trimStart: u,
                trimLeft: u
            })
        },
        "8GlL": function(t, r, n) {
            "use strict";
            var o = n("We1y"),
                e = function(t) {
                    var r, n;
                    this.promise = new t((function(t, o) {
                        if (void 0 !== r || void 0 !== n) throw TypeError("Bad Promise constructor");
                        r = t, n = o
                    })), this.resolve = o(r), this.reject = o(n)
                };
            t.exports.f = function(t) {
                return new e(t)
            }
        },
        "93I0": function(t, r, n) {
            var o = n("VpIT"),
                e = n("kOOl"),
                i = o("keys");
            t.exports = function(t) {
                return i[t] || (i[t] = e(t))
            }
        },
        "9d/t": function(t, r, n) {
            var o = n("2oRo"),
                e = n("AO7/"),
                i = n("Fib7"),
                u = n("xrYK"),
                c = n("tiKp")("toStringTag"),
                f = o.Object,
                a = "Arguments" == u(function() {
                    return arguments
                }());
            t.exports = e ? u : function(t) {
                var r, n, o;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, r) {
                    try {
                        return t[r]
                    } catch (n) {}
                }(r = f(t), c)) ? n : a ? u(r) : "Object" == (o = u(r)) && i(r.callee) ? "Arguments" : o
            }
        },
        "AO7/": function(t, r, n) {
            var o = {};
            o[n("tiKp")("toStringTag")] = "z", t.exports = "[object z]" === String(o)
        },
        "B/qT": function(t, r, n) {
            var o = n("UMSQ");
            t.exports = function(t) {
                return o(t.length)
            }
        },
        BNF5: function(t, r, n) {
            var o = n("NC/Y").match(/firefox\/(\d+)/i);
            t.exports = !!o && +o[1]
        },
        Bs8V: function(t, r, n) {
            var o = n("g6v/"),
                e = n("xluM"),
                i = n("0eef"),
                u = n("XGwC"),
                c = n("/GqU"),
                f = n("oEtG"),
                a = n("Gi26"),
                s = n("DPsx"),
                p = Object.getOwnPropertyDescriptor;
            r.f = o ? p : function(t, r) {
                if (t = c(t), r = f(r), s) try {
                    return p(t, r)
                } catch (n) {}
                if (a(t, r)) return u(!e(i.f, t, r), t[r])
            }
        },
        DPsx: function(t, r, n) {
            var o = n("g6v/"),
                e = n("0Dky"),
                i = n("zBJ4");
            t.exports = !o && !e((function() {
                return 7 != Object.defineProperty(i("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }))
        },
        DVFp: function(t, r, n) {
            var o = n("2oRo").String;
            t.exports = function(t) {
                try {
                    return o(t)
                } catch (r) {
                    return "Object"
                }
            }
        },
        Fib7: function(t, r) {
            t.exports = function(t) {
                return "function" == typeof t
            }
        },
        GC2F: function(t, r, n) {
            var o = n("2oRo"),
                e = n("+M1K"),
                i = o.RangeError;
            t.exports = function(t, r) {
                var n = e(t);
                if (n % r) throw i("Wrong offset");
                return n
            }
        },
        Gi26: function(t, r, n) {
            var o = n("4zBA"),
                e = n("ewvW"),
                i = o({}.hasOwnProperty);
            t.exports = Object.hasOwn || function(t, r) {
                return i(e(t), r)
            }
        },
        HYAF: function(t, r, n) {
            var o = n("2oRo").TypeError;
            t.exports = function(t) {
                if (null == t) throw o("Can't call method on " + t);
                return t
            }
        },
        HiXI: function(t, r, n) {
            "use strict";
            var o = n("I+eb"),
                e = n("WKiH").end,
                i = n("yNLB")("trimEnd"),
                u = i ? function() {
                    return e(this)
                } : "".trimEnd;
            o({
                target: "String",
                proto: !0,
                name: "trimEnd",
                forced: i
            }, {
                trimEnd: u,
                trimRight: u
            })
        },
        "I+eb": function(t, r, n) {
            var o = n("2oRo"),
                e = n("Bs8V").f,
                i = n("kRJp"),
                u = n("busE"),
                c = n("zk60"),
                f = n("6JNq"),
                a = n("lMq5");
            t.exports = function(t, r) {
                var n, s, p, v, y, l = t.target,
                    h = t.global,
                    b = t.stat;
                if (n = h ? o : b ? o[l] || c(l, {}) : (o[l] || {}).prototype)
                    for (s in r) {
                        if (v = r[s], p = t.noTargetGet ? (y = e(n, s)) && y.value : n[s], !a(h ? s : l + (b ? "." : "#") + s, t.forced) && void 0 !== p) {
                            if (typeof v == typeof p) continue;
                            f(v, p)
                        }(t.sham || p && p.sham) && i(v, "sham", !0), u(n, s, v, t)
                    }
            }
        },
        I8vh: function(t, r, n) {
            var o = n("WSbT"),
                e = Math.max,
                i = Math.min;
            t.exports = function(t, r) {
                var n = o(t);
                return n < 0 ? e(n + r, 0) : i(n, r)
            }
        },
        IZzc: function(t, r, n) {
            "use strict";
            var o = n("2oRo"),
                e = n("4zBA"),
                i = n("0Dky"),
                u = n("We1y"),
                c = n("rdv8"),
                f = n("67WC"),
                a = n("BNF5"),
                s = n("2Zix"),
                p = n("LQDL"),
                v = n("USzg"),
                y = o.Array,
                l = f.aTypedArray,
                h = f.exportTypedArrayMethod,
                b = o.Uint16Array,
                g = b && e(b.prototype.sort),
                d = !(!g || i((function() {
                    g(new b(2), null)
                })) && i((function() {
                    g(new b(2), {})
                }))),
                x = !!g && !i((function() {
                    if (p) return p < 74;
                    if (a) return a < 67;
                    if (s) return !0;
                    if (v) return v < 602;
                    var t, r, n = new b(516),
                        o = y(516);
                    for (t = 0; t < 516; t++) r = t % 4, n[t] = 515 - t, o[t] = t - 2 * r + 3;
                    for (g(n, (function(t, r) {
                            return (t / 4 | 0) - (r / 4 | 0)
                        })), t = 0; t < 516; t++)
                        if (n[t] !== o[t]) return !0
                }));
            h("sort", (function(t) {
                return void 0 !== t && u(t), x ? g(this, t) : c(l(this), function(t) {
                    return function(r, n) {
                        return void 0 !== t ? +t(r, n) || 0 : n != n ? -1 : r != r ? 1 : 0 === r && 0 === n ? 1 / r > 0 && 1 / n < 0 ? 1 : -1 : r > n
                    }
                }(t))
            }), !x || d)
        },
        JBy8: function(t, r, n) {
            var o = n("yoRg"),
                e = n("eDl+").concat("length", "prototype");
            r.f = Object.getOwnPropertyNames || function(t) {
                return o(t, e)
            }
        },
        LQDL: function(t, r, n) {
            var o, e, i = n("2oRo"),
                u = n("NC/Y"),
                c = i.process,
                f = i.Deno,
                a = c && c.versions || f && f.version,
                s = a && a.v8;
            s && (e = (o = s.split("."))[0] > 0 && o[0] < 4 ? 1 : +(o[0] + o[1])), !e && u && (!(o = u.match(/Edge\/(\d+)/)) || o[1] >= 74) && (o = u.match(/Chrome\/(\d+)/)) && (e = +o[1]), t.exports = e
        },
        "NC/Y": function(t, r, n) {
            var o = n("0GbY");
            t.exports = o("navigator", "userAgent") || ""
        },
        O741: function(t, r, n) {
            var o = n("2oRo"),
                e = n("Fib7"),
                i = o.String,
                u = o.TypeError;
            t.exports = function(t) {
                if ("object" == typeof t || e(t)) return t;
                throw u("Can't set " + i(t) + " as a prototype")
            }
        },
        OpvP: function(t, r, n) {
            var o = n("4zBA");
            t.exports = o({}.isPrototypeOf)
        },
        PF2M: function(t, r, n) {
            "use strict";
            var o = n("2oRo"),
                e = n("xluM"),
                i = n("67WC"),
                u = n("B/qT"),
                c = n("GC2F"),
                f = n("ewvW"),
                a = n("0Dky"),
                s = o.RangeError,
                p = o.Int8Array,
                v = p && p.prototype,
                y = v && v.set,
                l = i.aTypedArray,
                h = i.exportTypedArrayMethod,
                b = !a((function() {
                    var t = new Uint8ClampedArray(2);
                    return e(y, t, {
                        length: 1,
                        0: 3
                    }, 1), 3 !== t[1]
                })),
                g = b && i.NATIVE_ARRAY_BUFFER_VIEWS && a((function() {
                    var t = new p(2);
                    return t.set(1), t.set("2", 1), 0 !== t[0] || 2 !== t[1]
                }));
            h("set", (function(t) {
                l(this);
                var r = c(arguments.length > 1 ? arguments[1] : void 0, 1),
                    n = f(t);
                if (b) return e(y, this, n, r);
                var o = this.length,
                    i = u(n),
                    a = 0;
                if (i + r > o) throw s("Wrong length");
                for (; a < i;) this[r + a] = n[a++]
            }), !b || g)
        },
        QNWe: function(t, r, n) {
            var o = n("0Dky");
            t.exports = !o((function() {
                var t = function() {}.bind();
                return "function" != typeof t || t.hasOwnProperty("prototype")
            }))
        },
        RK3t: function(t, r, n) {
            var o = n("2oRo"),
                e = n("4zBA"),
                i = n("0Dky"),
                u = n("xrYK"),
                c = o.Object,
                f = e("".split);
            t.exports = i((function() {
                return !c("z").propertyIsEnumerable(0)
            })) ? function(t) {
                return "String" == u(t) ? f(t, "") : c(t)
            } : c
        },
        SEBh: function(t, r, n) {
            var o = n("glrk"),
                e = n("UIe5"),
                i = n("tiKp")("species");
            t.exports = function(t, r) {
                var n, u = o(t).constructor;
                return void 0 === u || null == (n = o(u)[i]) ? r : e(n)
            }
        },
        SFrS: function(t, r, n) {
            var o = n("2oRo"),
                e = n("xluM"),
                i = n("Fib7"),
                u = n("hh1v"),
                c = o.TypeError;
            t.exports = function(t, r) {
                var n, o;
                if ("string" === r && i(n = t.toString) && !u(o = e(n, t))) return o;
                if (i(n = t.valueOf) && !u(o = e(n, t))) return o;
                if ("string" !== r && i(n = t.toString) && !u(o = e(n, t))) return o;
                throw c("Can't convert object to primitive value")
            }
        },
        STAE: function(t, r, n) {
            var o = n("LQDL"),
                e = n("0Dky");
            t.exports = !!Object.getOwnPropertySymbols && !e((function() {
                var t = Symbol();
                return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && o && o < 41
            }))
        },
        TWQb: function(t, r, n) {
            var o = n("/GqU"),
                e = n("I8vh"),
                i = n("B/qT"),
                u = function(t) {
                    return function(r, n, u) {
                        var c, f = o(r),
                            a = i(f),
                            s = e(u, a);
                        if (t && n != n) {
                            for (; a > s;)
                                if ((c = f[s++]) != c) return !0
                        } else
                            for (; a > s; s++)
                                if ((t || s in f) && f[s] === n) return t || s || 0;
                        return !t && -1
                    }
                };
            t.exports = {
                includes: u(!0),
                indexOf: u(!1)
            }
        },
        Ta7t: function(t, r, n) {
            var o = n("2oRo"),
                e = n("I8vh"),
                i = n("B/qT"),
                u = n("hBjN"),
                c = o.Array,
                f = Math.max;
            t.exports = function(t, r, n) {
                for (var o = i(t), a = e(r, o), s = e(void 0 === n ? o : n, o), p = c(f(s - a, 0)), v = 0; a < s; a++, v++) u(p, v, t[a]);
                return p.length = v, p
            }
        },
        ToJy: function(t, r, n) {
            "use strict";
            var o = n("I+eb"),
                e = n("4zBA"),
                i = n("We1y"),
                u = n("ewvW"),
                c = n("B/qT"),
                f = n("V37c"),
                a = n("0Dky"),
                s = n("rdv8"),
                p = n("pkCn"),
                v = n("BNF5"),
                y = n("2Zix"),
                l = n("LQDL"),
                h = n("USzg"),
                b = [],
                g = e(b.sort),
                d = e(b.push),
                x = a((function() {
                    b.sort(void 0)
                })),
                m = a((function() {
                    b.sort(null)
                })),
                w = p("sort"),
                A = !a((function() {
                    if (l) return l < 70;
                    if (!(v && v > 3)) {
                        if (y) return !0;
                        if (h) return h < 603;
                        var t, r, n, o, e = "";
                        for (t = 65; t < 76; t++) {
                            switch (r = String.fromCharCode(t), t) {
                                case 66:
                                case 69:
                                case 70:
                                case 72:
                                    n = 3;
                                    break;
                                case 68:
                                case 71:
                                    n = 4;
                                    break;
                                default:
                                    n = 2
                            }
                            for (o = 0; o < 47; o++) b.push({
                                k: r + o,
                                v: n
                            })
                        }
                        for (b.sort((function(t, r) {
                                return r.v - t.v
                            })), o = 0; o < b.length; o++) r = b[o].k.charAt(0), e.charAt(e.length - 1) !== r && (e += r);
                        return "DGBEFHACIJK" !== e
                    }
                }));
            o({
                target: "Array",
                proto: !0,
                forced: x || !m || !w || !A
            }, {
                sort: function(t) {
                    void 0 !== t && i(t);
                    var r = u(this);
                    if (A) return void 0 === t ? g(r) : g(r, t);
                    var n, o, e = [],
                        a = c(r);
                    for (o = 0; o < a; o++) o in r && d(e, r[o]);
                    for (s(e, function(t) {
                            return function(r, n) {
                                return void 0 === n ? -1 : void 0 === r ? 1 : void 0 !== t ? +t(r, n) || 0 : f(r) > f(n) ? 1 : -1
                            }
                        }(t)), n = e.length, o = 0; o < n;) r[o] = e[o++];
                    for (; o < a;) delete r[o++];
                    return r
                }
            })
        },
        UIe5: function(t, r, n) {
            var o = n("2oRo"),
                e = n("aO6C"),
                i = n("DVFp"),
                u = o.TypeError;
            t.exports = function(t) {
                if (e(t)) return t;
                throw u(i(t) + " is not a constructor")
            }
        },
        UMSQ: function(t, r, n) {
            var o = n("WSbT"),
                e = Math.min;
            t.exports = function(t) {
                return t > 0 ? e(o(t), 9007199254740991) : 0
            }
        },
        USzg: function(t, r, n) {
            var o = n("NC/Y").match(/AppleWebKit\/(\d+)\./);
            t.exports = !!o && +o[1]
        },
        V37c: function(t, r, n) {
            var o = n("2oRo"),
                e = n("9d/t"),
                i = o.String;
            t.exports = function(t) {
                if ("Symbol" === e(t)) throw TypeError("Cannot convert a Symbol value to a string");
                return i(t)
            }
        },
        VpIT: function(t, r, n) {
            var o = n("xDBR"),
                e = n("xs3f");
            (t.exports = function(t, r) {
                return e[t] || (e[t] = void 0 !== r ? r : {})
            })("versions", []).push({
                version: "3.20.3",
                mode: o ? "pure" : "global",
                copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        },
        Vu81: function(t, r, n) {
            var o = n("0GbY"),
                e = n("4zBA"),
                i = n("JBy8"),
                u = n("dBg+"),
                c = n("glrk"),
                f = e([].concat);
            t.exports = o("Reflect", "ownKeys") || function(t) {
                var r = i.f(c(t)),
                    n = u.f;
                return n ? f(r, n(t)) : r
            }
        },
        WJkJ: function(t, r) {
            t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
        },
        WKiH: function(t, r, n) {
            var o = n("4zBA"),
                e = n("HYAF"),
                i = n("V37c"),
                u = n("WJkJ"),
                c = o("".replace),
                f = "[" + u + "]",
                a = RegExp("^" + f + f + "*"),
                s = RegExp(f + f + "*$"),
                p = function(t) {
                    return function(r) {
                        var n = i(e(r));
                        return 1 & t && (n = c(n, a, "")), 2 & t && (n = c(n, s, "")), n
                    }
                };
            t.exports = {
                start: p(1),
                end: p(2),
                trim: p(3)
            }
        },
        WSbT: function(t, r) {
            var n = Math.ceil,
                o = Math.floor;
            t.exports = function(t) {
                var r = +t;
                return r != r || 0 === r ? 0 : (r > 0 ? o : n)(r)
            }
        },
        We1y: function(t, r, n) {
            var o = n("2oRo"),
                e = n("Fib7"),
                i = n("DVFp"),
                u = o.TypeError;
            t.exports = function(t) {
                if (e(t)) return t;
                throw u(i(t) + " is not a function")
            }
        },
        XGwC: function(t, r) {
            t.exports = function(t, r) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: r
                }
            }
        },
        Xnc8: function(t, r, n) {
            var o = n("g6v/"),
                e = n("Gi26"),
                i = Function.prototype,
                u = o && Object.getOwnPropertyDescriptor,
                c = e(i, "name"),
                f = c && "something" === function() {}.name,
                a = c && (!o || o && u(i, "name").configurable);
            t.exports = {
                EXISTS: c,
                PROPER: f,
                CONFIGURABLE: a
            }
        },
        aO6C: function(t, r, n) {
            var o = n("4zBA"),
                e = n("0Dky"),
                i = n("Fib7"),
                u = n("9d/t"),
                c = n("0GbY"),
                f = n("iSVu"),
                a = function() {},
                s = [],
                p = c("Reflect", "construct"),
                v = /^\s*(?:class|function)\b/,
                y = o(v.exec),
                l = !v.exec(a),
                h = function(t) {
                    if (!i(t)) return !1;
                    try {
                        return p(a, s, t), !0
                    } catch (r) {
                        return !1
                    }
                },
                b = function(t) {
                    if (!i(t)) return !1;
                    switch (u(t)) {
                        case "AsyncFunction":
                        case "GeneratorFunction":
                        case "AsyncGeneratorFunction":
                            return !1
                    }
                    try {
                        return l || !!y(v, f(t))
                    } catch (r) {
                        return !0
                    }
                };
            b.sham = !0, t.exports = !p || e((function() {
                var t;
                return h(h.call) || !h(Object) || !h((function() {
                    t = !0
                })) || t
            })) ? b : h
        },
        afO8: function(t, r, n) {
            var o, e, i, u = n("f5p1"),
                c = n("2oRo"),
                f = n("4zBA"),
                a = n("hh1v"),
                s = n("kRJp"),
                p = n("Gi26"),
                v = n("xs3f"),
                y = n("93I0"),
                l = n("0BK2"),
                h = c.TypeError,
                b = c.WeakMap;
            if (u || v.state) {
                var g = v.state || (v.state = new b),
                    d = f(g.get),
                    x = f(g.has),
                    m = f(g.set);
                o = function(t, r) {
                    if (x(g, t)) throw new h("Object already initialized");
                    return r.facade = t, m(g, t, r), r
                }, e = function(t) {
                    return d(g, t) || {}
                }, i = function(t) {
                    return x(g, t)
                }
            } else {
                var w = y("state");
                l[w] = !0, o = function(t, r) {
                    if (p(t, w)) throw new h("Object already initialized");
                    return r.facade = t, s(t, w, r), r
                }, e = function(t) {
                    return p(t, w) ? t[w] : {}
                }, i = function(t) {
                    return p(t, w)
                }
            }
            t.exports = {
                set: o,
                get: e,
                has: i,
                enforce: function(t) {
                    return i(t) ? e(t) : o(t, {})
                },
                getterFor: function(t) {
                    return function(r) {
                        var n;
                        if (!a(r) || (n = e(r)).type !== t) throw h("Incompatible receiver, " + t + " required");
                        return n
                    }
                }
            }
        },
        bFeb: function(t, r, n) {
            n("I+eb")({
                global: !0
            }, {
                globalThis: n("2oRo")
            })
        },
        busE: function(t, r, n) {
            var o = n("2oRo"),
                e = n("Fib7"),
                i = n("Gi26"),
                u = n("kRJp"),
                c = n("zk60"),
                f = n("iSVu"),
                a = n("afO8"),
                s = n("Xnc8").CONFIGURABLE,
                p = a.get,
                v = a.enforce,
                y = String(String).split("String");
            (t.exports = function(t, r, n, f) {
                var a, p = !!f && !!f.unsafe,
                    l = !!f && !!f.enumerable,
                    h = !!f && !!f.noTargetGet,
                    b = f && void 0 !== f.name ? f.name : r;
                e(n) && ("Symbol(" === String(b).slice(0, 7) && (b = "[" + String(b).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!i(n, "name") || s && n.name !== b) && u(n, "name", b), (a = v(n)).source || (a.source = y.join("string" == typeof b ? b : ""))), t !== o ? (p ? !h && t[r] && (l = !0) : delete t[r], l ? t[r] = n : u(t, r, n)) : l ? t[r] = n : c(r, n)
            })(Function.prototype, "toString", (function() {
                return e(this) && p(this).source || f(this)
            }))
        },
        "dBg+": function(t, r) {
            r.f = Object.getOwnPropertySymbols
        },
        "eDl+": function(t, r) {
            t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        },
        ewvW: function(t, r, n) {
            var o = n("2oRo"),
                e = n("HYAF"),
                i = o.Object;
            t.exports = function(t) {
                return i(e(t))
            }
        },
        f5p1: function(t, r, n) {
            var o = n("2oRo"),
                e = n("Fib7"),
                i = n("iSVu"),
                u = o.WeakMap;
            t.exports = e(u) && /native code/.test(i(u))
        },
        "g6v/": function(t, r, n) {
            var o = n("0Dky");
            t.exports = !o((function() {
                return 7 != Object.defineProperty({}, 1, {
                    get: function() {
                        return 7
                    }
                })[1]
            }))
        },
        glrk: function(t, r, n) {
            var o = n("2oRo"),
                e = n("hh1v"),
                i = o.String,
                u = o.TypeError;
            t.exports = function(t) {
                if (e(t)) return t;
                throw u(i(t) + " is not an object")
            }
        },
        hBjN: function(t, r, n) {
            "use strict";
            var o = n("oEtG"),
                e = n("m/L8"),
                i = n("XGwC");
            t.exports = function(t, r, n) {
                var u = o(r);
                u in t ? e.f(t, u, i(0, n)) : t[u] = n
            }
        },
        hh1v: function(t, r, n) {
            var o = n("Fib7");
            t.exports = function(t) {
                return "object" == typeof t ? null !== t : o(t)
            }
        },
        iSVu: function(t, r, n) {
            var o = n("4zBA"),
                e = n("Fib7"),
                i = n("xs3f"),
                u = o(Function.toString);
            e(i.inspectSource) || (i.inspectSource = function(t) {
                return u(t)
            }), t.exports = i.inspectSource
        },
        kOOl: function(t, r, n) {
            var o = n("4zBA"),
                e = 0,
                i = Math.random(),
                u = o(1..toString);
            t.exports = function(t) {
                return "Symbol(" + (void 0 === t ? "" : t) + ")_" + u(++e + i, 36)
            }
        },
        kRJp: function(t, r, n) {
            var o = n("g6v/"),
                e = n("m/L8"),
                i = n("XGwC");
            t.exports = o ? function(t, r, n) {
                return e.f(t, r, i(1, n))
            } : function(t, r, n) {
                return t[r] = n, t
            }
        },
        lMq5: function(t, r, n) {
            var o = n("0Dky"),
                e = n("Fib7"),
                i = /#|\.prototype\./,
                u = function(t, r) {
                    var n = f[c(t)];
                    return n == s || n != a && (e(r) ? o(r) : !!r)
                },
                c = u.normalize = function(t) {
                    return String(t).replace(i, ".").toLowerCase()
                },
                f = u.data = {},
                a = u.NATIVE = "N",
                s = u.POLYFILL = "P";
            t.exports = u
        },
        "m/L8": function(t, r, n) {
            var o = n("2oRo"),
                e = n("g6v/"),
                i = n("DPsx"),
                u = n("rtlb"),
                c = n("glrk"),
                f = n("oEtG"),
                a = o.TypeError,
                s = Object.defineProperty,
                p = Object.getOwnPropertyDescriptor;
            r.f = e ? u ? function(t, r, n) {
                if (c(t), r = f(r), c(n), "function" == typeof t && "prototype" === r && "value" in n && "writable" in n && !n.writable) {
                    var o = p(t, r);
                    o && o.writable && (t[r] = n.value, n = {
                        configurable: "configurable" in n ? n.configurable : o.configurable,
                        enumerable: "enumerable" in n ? n.enumerable : o.enumerable,
                        writable: !1
                    })
                }
                return s(t, r, n)
            } : s : function(t, r, n) {
                if (c(t), r = f(r), c(n), i) try {
                    return s(t, r, n)
                } catch (o) {}
                if ("get" in n || "set" in n) throw a("Accessors not supported");
                return "value" in n && (t[r] = n.value), t
            }
        },
        oEtG: function(t, r, n) {
            var o = n("wE6v"),
                e = n("2bX/");
            t.exports = function(t) {
                var r = o(t, "string");
                return e(r) ? r : r + ""
            }
        },
        p532: function(t, r, n) {
            "use strict";
            var o = n("I+eb"),
                e = n("xDBR"),
                i = n("/qmn"),
                u = n("0Dky"),
                c = n("0GbY"),
                f = n("Fib7"),
                a = n("SEBh"),
                s = n("zfnd"),
                p = n("busE");
            if (o({
                    target: "Promise",
                    proto: !0,
                    real: !0,
                    forced: !!i && u((function() {
                        i.prototype.finally.call({
                            then: function() {}
                        }, (function() {}))
                    }))
                }, {
                    finally: function(t) {
                        var r = a(this, c("Promise")),
                            n = f(t);
                        return this.then(n ? function(n) {
                            return s(r, t()).then((function() {
                                return n
                            }))
                        } : t, n ? function(n) {
                            return s(r, t()).then((function() {
                                throw n
                            }))
                        } : t)
                    }
                }), !e && f(i)) {
                var v = c("Promise").prototype.finally;
                i.prototype.finally !== v && p(i.prototype, "finally", v, {
                    unsafe: !0
                })
            }
        },
        pkCn: function(t, r, n) {
            "use strict";
            var o = n("0Dky");
            t.exports = function(t, r) {
                var n = [][t];
                return !!n && o((function() {
                    n.call(null, r || function() {
                        throw 1
                    }, 1)
                }))
            }
        },
        qYE9: function(t, r) {
            t.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
        },
        rdv8: function(t, r, n) {
            var o = n("Ta7t"),
                e = Math.floor,
                i = function(t, r) {
                    var n = t.length,
                        f = e(n / 2);
                    return n < 8 ? u(t, r) : c(t, i(o(t, 0, f), r), i(o(t, f), r), r)
                },
                u = function(t, r) {
                    for (var n, o, e = t.length, i = 1; i < e;) {
                        for (o = i, n = t[i]; o && r(t[o - 1], n) > 0;) t[o] = t[--o];
                        o !== i++ && (t[o] = n)
                    }
                    return t
                },
                c = function(t, r, n, o) {
                    for (var e = r.length, i = n.length, u = 0, c = 0; u < e || c < i;) t[u + c] = u < e && c < i ? o(r[u], n[c]) <= 0 ? r[u++] : n[c++] : u < e ? r[u++] : n[c++];
                    return t
                };
            t.exports = i
        },
        rtlb: function(t, r, n) {
            var o = n("g6v/"),
                e = n("0Dky");
            t.exports = o && e((function() {
                return 42 != Object.defineProperty((function() {}), "prototype", {
                    value: 42,
                    writable: !1
                }).prototype
            }))
        },
        tiKp: function(t, r, n) {
            var o = n("2oRo"),
                e = n("VpIT"),
                i = n("Gi26"),
                u = n("kOOl"),
                c = n("STAE"),
                f = n("/b8u"),
                a = e("wks"),
                s = o.Symbol,
                p = s && s.for,
                v = f ? s : s && s.withoutSetter || u;
            t.exports = function(t) {
                if (!i(a, t) || !c && "string" != typeof a[t]) {
                    var r = "Symbol." + t;
                    c && i(s, t) ? a[t] = s[t] : a[t] = f && p ? p(r) : v(r)
                }
                return a[t]
            }
        },
        wE6v: function(t, r, n) {
            var o = n("2oRo"),
                e = n("xluM"),
                i = n("hh1v"),
                u = n("2bX/"),
                c = n("3Eq5"),
                f = n("SFrS"),
                a = n("tiKp"),
                s = o.TypeError,
                p = a("toPrimitive");
            t.exports = function(t, r) {
                if (!i(t) || u(t)) return t;
                var n, o = c(t, p);
                if (o) {
                    if (void 0 === r && (r = "default"), n = e(o, t, r), !i(n) || u(n)) return n;
                    throw s("Can't convert object to primitive value")
                }
                return void 0 === r && (r = "number"), f(t, r)
            }
        },
        xDBR: function(t, r) {
            t.exports = !1
        },
        xluM: function(t, r, n) {
            var o = n("QNWe"),
                e = Function.prototype.call;
            t.exports = o ? e.bind(e) : function() {
                return e.apply(e, arguments)
            }
        },
        xrYK: function(t, r, n) {
            var o = n("4zBA"),
                e = o({}.toString),
                i = o("".slice);
            t.exports = function(t) {
                return i(e(t), 8, -1)
            }
        },
        xs3f: function(t, r, n) {
            var o = n("2oRo"),
                e = n("zk60"),
                i = o["__core-js_shared__"] || e("__core-js_shared__", {});
            t.exports = i
        },
        yLpj: function(t, r) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (o) {
                "object" == typeof window && (n = window)
            }
            t.exports = n
        },
        yNLB: function(t, r, n) {
            var o = n("Xnc8").PROPER,
                e = n("0Dky"),
                i = n("WJkJ");
            t.exports = function(t) {
                return e((function() {
                    return !!i[t]() || "​᠎" !== "​᠎" [t]() || o && i[t].name !== t
                }))
            }
        },
        yoRg: function(t, r, n) {
            var o = n("4zBA"),
                e = n("Gi26"),
                i = n("/GqU"),
                u = n("TWQb").indexOf,
                c = n("0BK2"),
                f = o([].push);
            t.exports = function(t, r) {
                var n, o = i(t),
                    a = 0,
                    s = [];
                for (n in o) !e(c, n) && e(o, n) && f(s, n);
                for (; r.length > a;) e(o, n = r[a++]) && (~u(s, n) || f(s, n));
                return s
            }
        },
        zBJ4: function(t, r, n) {
            var o = n("2oRo"),
                e = n("hh1v"),
                i = o.document,
                u = e(i) && e(i.createElement);
            t.exports = function(t) {
                return u ? i.createElement(t) : {}
            }
        },
        zfnd: function(t, r, n) {
            var o = n("glrk"),
                e = n("hh1v"),
                i = n("8GlL");
            t.exports = function(t, r) {
                if (o(t), e(r) && r.constructor === t) return r;
                var n = i.f(t);
                return (0, n.resolve)(r), n.promise
            }
        },
        zk60: function(t, r, n) {
            var o = n("2oRo"),
                e = Object.defineProperty;
            t.exports = function(t, r) {
                try {
                    e(o, t, {
                        value: r,
                        configurable: !0,
                        writable: !0
                    })
                } catch (n) {
                    o[t] = r
                }
                return r
            }
        }
    }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcG9zaXRpdmUtaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtcHJvbWlzZS1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLWlzLWllLW9yLWVkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtbWV0aG9kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci12aWV3LWNvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy50cmltLXN0YXJ0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtZmYtdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWNhbGxhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1vZmZzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy50cmltLWVuZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnR5cGVkLWFycmF5LnNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMudHlwZWQtYXJyYXkuc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LXNsaWNlLXNpbXBsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXdlYmtpdC12ZXJzaW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb3duLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3doaXRlc3BhY2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYS1jYWxsYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmdsb2JhbC10aGlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWZvcmNlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucHJvbWlzZS5maW5hbGx5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1idWZmZXItbmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtcHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC1zdG9yZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS1mb3JjZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtZ2xvYmFsLmpzIl0sIm5hbWVzIjpbImdsb2JhbCIsInRvSW50ZWdlck9ySW5maW5pdHkiLCJSYW5nZUVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyIsIml0IiwicmVzdWx0IiwiSW5kZXhlZE9iamVjdCIsInJlcXVpcmVPYmplY3RDb2VyY2libGUiLCJOQVRJVkVfU1lNQk9MIiwiU3ltYm9sIiwic2hhbSIsIml0ZXJhdG9yIiwiUHJvbWlzZSIsImV4ZWMiLCJlcnJvciIsImlzQ2FsbGFibGUiLCJhRnVuY3Rpb24iLCJhcmd1bWVudCIsInVuZGVmaW5lZCIsIm5hbWVzcGFjZSIsIm1ldGhvZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsIiRwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiT2JqZWN0IiwiTkFTSE9STl9CVUciLCJjYWxsIiwiMSIsImYiLCJWIiwiZGVzY3JpcHRvciIsInRoaXMiLCJlbnVtZXJhYmxlIiwidW5jdXJyeVRoaXMiLCJhbk9iamVjdCIsImFQb3NzaWJsZVByb3RvdHlwZSIsInNldFByb3RvdHlwZU9mIiwic2V0dGVyIiwiQ09SUkVDVF9TRVRURVIiLCJ0ZXN0IiwicHJvdG90eXBlIiwic2V0IiwiQXJyYXkiLCJPIiwicHJvdG8iLCJfX3Byb3RvX18iLCJVQSIsImdldEJ1aWx0SW4iLCJpc1Byb3RvdHlwZU9mIiwiVVNFX1NZTUJPTF9BU19VSUQiLCIkU3ltYm9sIiwiTWF0aCIsImNoZWNrIiwiZ2xvYmFsVGhpcyIsIndpbmRvdyIsInNlbGYiLCJGdW5jdGlvbiIsImFDYWxsYWJsZSIsIlAiLCJmdW5jIiwiaGFzT3duIiwidG9PYmplY3QiLCJzaGFyZWRLZXkiLCJDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIiLCJJRV9QUk9UTyIsIk9iamVjdFByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwib2JqZWN0IiwiY29uc3RydWN0b3IiLCJmYWlscyIsIkYiLCJOQVRJVkVfQklORCIsIkZ1bmN0aW9uUHJvdG90eXBlIiwiYmluZCIsImZuIiwiYXBwbHkiLCJOQU1FIiwiQ29uc3RydWN0b3IiLCJQcm90b3R5cGUiLCJOQVRJVkVfQVJSQVlfQlVGRkVSIiwiREVTQ1JJUFRPUlMiLCJpc09iamVjdCIsImNsYXNzb2YiLCJ0cnlUb1N0cmluZyIsImNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSIsInJlZGVmaW5lIiwiZGVmaW5lUHJvcGVydHkiLCJ3ZWxsS25vd25TeW1ib2wiLCJ1aWQiLCJJbnQ4QXJyYXkiLCJJbnQ4QXJyYXlQcm90b3R5cGUiLCJVaW50OENsYW1wZWRBcnJheSIsIlVpbnQ4Q2xhbXBlZEFycmF5UHJvdG90eXBlIiwiVHlwZWRBcnJheSIsIlR5cGVkQXJyYXlQcm90b3R5cGUiLCJUeXBlRXJyb3IiLCJUT19TVFJJTkdfVEFHIiwiVFlQRURfQVJSQVlfVEFHIiwiVFlQRURfQVJSQVlfQ09OU1RSVUNUT1IiLCJOQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTIiwib3BlcmEiLCJUWVBFRF9BUlJBWV9UQUdfUkVRVUlSRUQiLCJUeXBlZEFycmF5Q29uc3RydWN0b3JzTGlzdCIsIlVpbnQ4QXJyYXkiLCJJbnQxNkFycmF5IiwiVWludDE2QXJyYXkiLCJJbnQzMkFycmF5IiwiVWludDMyQXJyYXkiLCJGbG9hdDMyQXJyYXkiLCJGbG9hdDY0QXJyYXkiLCJCaWdJbnRBcnJheUNvbnN0cnVjdG9yc0xpc3QiLCJCaWdJbnQ2NEFycmF5IiwiQmlnVWludDY0QXJyYXkiLCJpc1R5cGVkQXJyYXkiLCJrbGFzcyIsImdldCIsImFUeXBlZEFycmF5IiwiYVR5cGVkQXJyYXlDb25zdHJ1Y3RvciIsIkMiLCJleHBvcnRUeXBlZEFycmF5TWV0aG9kIiwiS0VZIiwicHJvcGVydHkiLCJmb3JjZWQiLCJvcHRpb25zIiwiQVJSQVkiLCJUeXBlZEFycmF5Q29uc3RydWN0b3IiLCJlcnJvcjIiLCJleHBvcnRUeXBlZEFycmF5U3RhdGljTWV0aG9kIiwiaXNWaWV3Iiwib3duS2V5cyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSIsImRlZmluZVByb3BlcnR5TW9kdWxlIiwidGFyZ2V0Iiwic291cmNlIiwiZXhjZXB0aW9ucyIsImtleXMiLCJpIiwia2V5IiwiJCIsIiR0cmltU3RhcnQiLCJzdGFydCIsIkZPUkNFRCIsImZvcmNlZFN0cmluZ1RyaW1NZXRob2QiLCJ0cmltU3RhcnQiLCJuYW1lIiwidHJpbUxlZnQiLCJQcm9taXNlQ2FwYWJpbGl0eSIsInJlc29sdmUiLCJyZWplY3QiLCJwcm9taXNlIiwiJCRyZXNvbHZlIiwiJCRyZWplY3QiLCJzaGFyZWQiLCJUT19TVFJJTkdfVEFHX1NVUFBPUlQiLCJjbGFzc29mUmF3IiwiQ09SUkVDVF9BUkdVTUVOVFMiLCJ0YWciLCJ0cnlHZXQiLCJjYWxsZWUiLCJTdHJpbmciLCJ0b0xlbmd0aCIsIm9iaiIsImZpcmVmb3giLCJtYXRjaCIsInByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlIiwiY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yIiwidG9JbmRleGVkT2JqZWN0IiwidG9Qcm9wZXJ0eUtleSIsIklFOF9ET01fREVGSU5FIiwiJGdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImNyZWF0ZUVsZW1lbnQiLCJhIiwidG9Qb3NpdGl2ZUludGVnZXIiLCJCWVRFUyIsIm9mZnNldCIsImhhc093blByb3BlcnR5IiwiJHRyaW1FbmQiLCJlbmQiLCJ0cmltRW5kIiwidHJpbVJpZ2h0Iiwic2V0R2xvYmFsIiwiY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyIsImlzRm9yY2VkIiwidGFyZ2V0UHJvcGVydHkiLCJzb3VyY2VQcm9wZXJ0eSIsIlRBUkdFVCIsIkdMT0JBTCIsIlNUQVRJQyIsInN0YXQiLCJub1RhcmdldEdldCIsInZhbHVlIiwibWF4IiwibWluIiwiaW5kZXgiLCJpbnRlZ2VyIiwiaW50ZXJuYWxTb3J0IiwiQXJyYXlCdWZmZXJWaWV3Q29yZSIsIkZGIiwiSUVfT1JfRURHRSIsIlY4IiwiV0VCS0lUIiwidW4kU29ydCIsInNvcnQiLCJBQ0NFUFRfSU5DT1JSRUNUX0FSR1VNRU5UUyIsIlNUQUJMRV9TT1JUIiwibW9kIiwiYXJyYXkiLCJleHBlY3RlZCIsImIiLCJjb21wYXJlZm4iLCJ4IiwieSIsImdldFNvcnRDb21wYXJlIiwiaW50ZXJuYWxPYmplY3RLZXlzIiwiaGlkZGVuS2V5cyIsImNvbmNhdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJ2ZXJzaW9uIiwidXNlckFnZW50IiwicHJvY2VzcyIsIkRlbm8iLCJ2ZXJzaW9ucyIsInY4Iiwic3BsaXQiLCJsZW5ndGhPZkFycmF5TGlrZSIsInRvT2Zmc2V0IiwiJHNldCIsIldPUktTX1dJVEhfT0JKRUNUU19BTkRfR0VFUklDX09OX1RZUEVEX0FSUkFZUyIsIjAiLCJUT19PQkpFQ1RfQlVHIiwiYXJyYXlMaWtlIiwic3JjIiwibGVuIiwiYUNvbnN0cnVjdG9yIiwiU1BFQ0lFUyIsImRlZmF1bHRDb25zdHJ1Y3RvciIsIlMiLCJpbnB1dCIsInByZWYiLCJ2YWwiLCJ0b1N0cmluZyIsInZhbHVlT2YiLCJWOF9WRVJTSU9OIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9sIiwidG9BYnNvbHV0ZUluZGV4IiwiY3JlYXRlTWV0aG9kIiwiSVNfSU5DTFVERVMiLCIkdGhpcyIsImVsIiwiZnJvbUluZGV4IiwiaW5jbHVkZXMiLCJpbmRleE9mIiwiY3JlYXRlUHJvcGVydHkiLCJrIiwiZmluIiwibiIsImFycmF5TWV0aG9kSXNTdHJpY3QiLCJwdXNoIiwiRkFJTFNfT05fVU5ERUZJTkVEIiwiRkFJTFNfT05fTlVMTCIsIlNUUklDVF9NRVRIT0QiLCJjb2RlIiwiY2hyIiwiZnJvbUNoYXJDb2RlIiwidiIsImNoYXJBdCIsIml0ZW1zTGVuZ3RoIiwiaXRlbXMiLCJhcnJheUxlbmd0aCIsImlzQ29uc3RydWN0b3IiLCJ3ZWJraXQiLCJJU19QVVJFIiwic3RvcmUiLCJtb2RlIiwiY29weXJpZ2h0IiwibGljZW5zZSIsImdldE93blByb3BlcnR5TmFtZXNNb2R1bGUiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUiLCJ3aGl0ZXNwYWNlcyIsInJlcGxhY2UiLCJ3aGl0ZXNwYWNlIiwibHRyaW0iLCJSZWdFeHAiLCJydHJpbSIsIlRZUEUiLCJzdHJpbmciLCJ0cmltIiwiY2VpbCIsImZsb29yIiwibnVtYmVyIiwiYml0bWFwIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJnZXREZXNjcmlwdG9yIiwiRVhJU1RTIiwiUFJPUEVSIiwiQ09ORklHVVJBQkxFIiwiaW5zcGVjdFNvdXJjZSIsIm5vb3AiLCJlbXB0eSIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yUmVnRXhwIiwiSU5DT1JSRUNUX1RPX1NUUklORyIsImlzQ29uc3RydWN0b3JNb2Rlcm4iLCJpc0NvbnN0cnVjdG9yTGVnYWN5IiwiY2FsbGVkIiwiaGFzIiwiTkFUSVZFX1dFQUtfTUFQIiwiV2Vha01hcCIsInN0YXRlIiwid21nZXQiLCJ3bWhhcyIsIndtc2V0IiwibWV0YWRhdGEiLCJmYWNhZGUiLCJTVEFURSIsImVuZm9yY2UiLCJnZXR0ZXJGb3IiLCJ0eXBlIiwiSW50ZXJuYWxTdGF0ZU1vZHVsZSIsIkNPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FIiwiZ2V0SW50ZXJuYWxTdGF0ZSIsImVuZm9yY2VJbnRlcm5hbFN0YXRlIiwiVEVNUExBVEUiLCJ1bnNhZmUiLCJzaW1wbGUiLCJzbGljZSIsImpvaW4iLCJwcm9wZXJ0eUtleSIsImZ1bmN0aW9uVG9TdHJpbmciLCJpZCIsInBvc3RmaXgiLCJyYW5kb20iLCJyZXBsYWNlbWVudCIsImZlYXR1cmUiLCJkZXRlY3Rpb24iLCJkYXRhIiwibm9ybWFsaXplIiwiUE9MWUZJTEwiLCJOQVRJVkUiLCJ0b0xvd2VyQ2FzZSIsIlY4X1BST1RPVFlQRV9ERUZJTkVfQlVHIiwiJGRlZmluZVByb3BlcnR5IiwiQXR0cmlidXRlcyIsImN1cnJlbnQiLCJ0b1ByaW1pdGl2ZSIsImlzU3ltYm9sIiwiTmF0aXZlUHJvbWlzZSIsInNwZWNpZXNDb25zdHJ1Y3RvciIsInByb21pc2VSZXNvbHZlIiwicmVhbCIsInRoZW4iLCJvbkZpbmFsbHkiLCJpc0Z1bmN0aW9uIiwiZSIsIk1FVEhPRF9OQU1FIiwiQXJyYXlCdWZmZXIiLCJEYXRhVmlldyIsImFycmF5U2xpY2UiLCJtZXJnZVNvcnQiLCJtaWRkbGUiLCJpbnNlcnRpb25Tb3J0IiwibWVyZ2UiLCJlbGVtZW50IiwiaiIsImxlZnQiLCJyaWdodCIsImxsZW5ndGgiLCJybGVuZ3RoIiwibGluZGV4IiwicmluZGV4IiwiV2VsbEtub3duU3ltYm9sc1N0b3JlIiwic3ltYm9sRm9yIiwiY3JlYXRlV2VsbEtub3duU3ltYm9sIiwid2l0aG91dFNldHRlciIsImRlc2NyaXB0aW9uIiwiZ2V0TWV0aG9kIiwib3JkaW5hcnlUb1ByaW1pdGl2ZSIsIlRPX1BSSU1JVElWRSIsImV4b3RpY1RvUHJpbSIsInN0cmluZ1NsaWNlIiwiZyIsIlBST1BFUl9GVU5DVElPTl9OQU1FIiwibmFtZXMiLCJkb2N1bWVudCIsIm5ld1Byb21pc2VDYXBhYmlsaXR5IiwicHJvbWlzZUNhcGFiaWxpdHkiXSwibWFwcGluZ3MiOiJnRkFBQSxJQUFJQSxFQUFTLEVBQVEsUUFDakJDLEVBQXNCLEVBQVEsUUFFOUJDLEVBQWFGLEVBQU9FLFdBRXhCQyxFQUFPQyxRQUFVLFNBQVVDLEdBQ3pCLElBQUlDLEVBQVNMLEVBQW9CSSxHQUNqQyxHQUFJQyxFQUFTLEVBQUcsTUFBTUosRUFBVyxxQ0FDakMsT0FBT0ksSSx1QkNQVCxJQUFJQyxFQUFnQixFQUFRLFFBQ3hCQyxFQUF5QixFQUFRLFFBRXJDTCxFQUFPQyxRQUFVLFNBQVVDLEdBQ3pCLE9BQU9FLEVBQWNDLEVBQXVCSCxNLHVCQ0o5QyxJQUFJSSxFQUFnQixFQUFRLFFBRTVCTixFQUFPQyxRQUFVSyxJQUNYQyxPQUFPQyxNQUNrQixpQkFBbkJELE9BQU9FLFUsdUJDTG5CLElBQUlaLEVBQVMsRUFBUSxRQUVyQkcsRUFBT0Ms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RzhGLEVBQU11UCxFQUFNeFAsU0FDaERvSCxFQUFRelAsRUFBUXNJLElBQVF5SCxFQUFLL1AsRUFBUXNJLElBRXhDLE9BQU90SSxJLHFCQ2xCVCxJQUFJTixFQUFTLEVBQVEsUUFDakJvRixFQUFXLEVBQVEsUUFFbkJnVCxFQUFXcFksRUFBT29ZLFNBRWxCMUYsRUFBU3ROLEVBQVNnVCxJQUFhaFQsRUFBU2dULEVBQVN2TixlQUVyRDFLLEVBQU9DLFFBQVUsU0FBVUMsR0FDekIsT0FBT3FTLEVBQVMwRixFQUFTdk4sY0FBY3hLLEdBQU0sSyxxQkNSL0MsSUFBSWdDLEVBQVcsRUFBUSxRQUNuQitDLEVBQVcsRUFBUSxRQUNuQmlULEVBQXVCLEVBQVEsUUFFbkNsWSxFQUFPQyxRQUFVLFNBQVVxSCxFQUFHNEYsR0FFNUIsR0FEQWhMLEVBQVNvRixHQUNMckMsRUFBU2lJLElBQU1BLEVBQUU5SSxjQUFnQmtELEVBQUcsT0FBTzRGLEVBQy9DLElBQUlpTCxFQUFvQkQsRUFBcUJ0VyxFQUFFMEYsR0FHL0MsT0FEQTZCLEVBRGNnUCxFQUFrQmhQLFNBQ3hCK0QsR0FDRGlMLEVBQWtCOU8sVSxxQkNWM0IsSUFBSXhKLEVBQVMsRUFBUSxRQUdqQnlGLEVBQWlCOUQsT0FBTzhELGVBRTVCdEYsRUFBT0MsUUFBVSxTQUFVd0ksRUFBS3FELEdBQzlCLElBQ0V4RyxFQUFlekYsRUFBUTRJLEVBQUssQ0FBRXFELE1BQU9BLEVBQU9zRyxjQUFjLEVBQU1DLFVBQVUsSUFDMUUsTUFBT3pSLEdBQ1BmLEVBQU80SSxHQUFPcUQsRUFDZCxPQUFPQSIsImZpbGUiOiJkYzZhODcyMDA0MGRmOTg3NzhmZTk3MGJmNmMwMDBhNDE3NTBkM2FlLTg1OWQyMjgyZDVjNDAwMGRiMWYwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIFJhbmdlRXJyb3IgPSBnbG9iYWwuUmFuZ2VFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IHRvSW50ZWdlck9ySW5maW5pdHkoaXQpO1xuICBpZiAocmVzdWx0IDwgMCkgdGhyb3cgUmFuZ2VFcnJvcihcIlRoZSBhcmd1bWVudCBjYW4ndCBiZSBsZXNzIHRoYW4gMFwiKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtc3ltYm9sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsLlByb21pc2U7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKSA6IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICEkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAtLSBzYWZlICovXG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgYVBvc3NpYmxlUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3Quc2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Quc2V0cHJvdG90eXBlb2Zcbi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1zZXRwcm90b3R5cGVvZiAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyBmdW5jdGlvbiAoKSB7XG4gIHZhciBDT1JSRUNUX1NFVFRFUiA9IGZhbHNlO1xuICB2YXIgdGVzdCA9IHt9O1xuICB2YXIgc2V0dGVyO1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbiAgICBzZXR0ZXIgPSB1bmN1cnJ5VGhpcyhPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQpO1xuICAgIHNldHRlcih0ZXN0LCBbXSk7XG4gICAgQ09SUkVDVF9TRVRURVIgPSB0ZXN0IGluc3RhbmNlb2YgQXJyYXk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgYW5PYmplY3QoTyk7XG4gICAgYVBvc3NpYmxlUHJvdG90eXBlKHByb3RvKTtcbiAgICBpZiAoQ09SUkVDVF9TRVRURVIpIHNldHRlcihPLCBwcm90byk7XG4gICAgZWxzZSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgIHJldHVybiBPO1xuICB9O1xufSgpIDogdW5kZWZpbmVkKTtcbiIsInZhciBVQSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IC9NU0lFfFRyaWRlbnQvLnRlc3QoVUEpO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgT2JqZWN0ID0gZ2xvYmFsLk9iamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgJFN5bWJvbCA9IGdldEJ1aWx0SW4oJ1N5bWJvbCcpO1xuICByZXR1cm4gaXNDYWxsYWJsZSgkU3ltYm9sKSAmJiBpc1Byb3RvdHlwZU9mKCRTeW1ib2wucHJvdG90eXBlLCBPYmplY3QoaXQpKTtcbn07XG4iLCJ2YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBmYWxsYmFja1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwidmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gZnVuYyA9PSBudWxsID8gdW5kZWZpbmVkIDogYUNhbGxhYmxlKGZ1bmMpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyJyk7XG5cbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3QgPSBnbG9iYWwuT2JqZWN0O1xudmFyIE9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8vIGBPYmplY3QuZ2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0cHJvdG90eXBlb2Zcbm1vZHVsZS5leHBvcnRzID0gQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gKE8pIHtcbiAgdmFyIG9iamVjdCA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzT3duKG9iamVjdCwgSUVfUFJPVE8pKSByZXR1cm4gb2JqZWN0W0lFX1BST1RPXTtcbiAgdmFyIGNvbnN0cnVjdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBpZiAoaXNDYWxsYWJsZShjb25zdHJ1Y3RvcikgJiYgb2JqZWN0IGluc3RhbmNlb2YgY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBvYmplY3QgaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90b3R5cGUgOiBudWxsO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgRi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBudWxsO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldHByb3RvdHlwZW9mIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YobmV3IEYoKSkgIT09IEYucHJvdG90eXBlO1xufSk7XG4iLCJ2YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGJpbmQgPSBGdW5jdGlvblByb3RvdHlwZS5iaW5kO1xudmFyIGNhbGwgPSBGdW5jdGlvblByb3RvdHlwZS5jYWxsO1xudmFyIHVuY3VycnlUaGlzID0gTkFUSVZFX0JJTkQgJiYgYmluZC5iaW5kKGNhbGwsIGNhbGwpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmbiAmJiB1bmN1cnJ5VGhpcyhmbik7XG59IDogZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmbiAmJiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhbGwuYXBwbHkoZm4sIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9BUlJBWV9CVUZGRVIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLW5hdGl2ZScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIgSW50OEFycmF5ID0gZ2xvYmFsLkludDhBcnJheTtcbnZhciBJbnQ4QXJyYXlQcm90b3R5cGUgPSBJbnQ4QXJyYXkgJiYgSW50OEFycmF5LnByb3RvdHlwZTtcbnZhciBVaW50OENsYW1wZWRBcnJheSA9IGdsb2JhbC5VaW50OENsYW1wZWRBcnJheTtcbnZhciBVaW50OENsYW1wZWRBcnJheVByb3RvdHlwZSA9IFVpbnQ4Q2xhbXBlZEFycmF5ICYmIFVpbnQ4Q2xhbXBlZEFycmF5LnByb3RvdHlwZTtcbnZhciBUeXBlZEFycmF5ID0gSW50OEFycmF5ICYmIGdldFByb3RvdHlwZU9mKEludDhBcnJheSk7XG52YXIgVHlwZWRBcnJheVByb3RvdHlwZSA9IEludDhBcnJheVByb3RvdHlwZSAmJiBnZXRQcm90b3R5cGVPZihJbnQ4QXJyYXlQcm90b3R5cGUpO1xudmFyIE9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgVFlQRURfQVJSQVlfVEFHID0gdWlkKCdUWVBFRF9BUlJBWV9UQUcnKTtcbnZhciBUWVBFRF9BUlJBWV9DT05TVFJVQ1RPUiA9IHVpZCgnVFlQRURfQVJSQVlfQ09OU1RSVUNUT1InKTtcbi8vIEZpeGluZyBuYXRpdmUgdHlwZWQgYXJyYXlzIGluIE9wZXJhIFByZXN0byBjcmFzaGVzIHRoZSBicm93c2VyLCBzZWUgIzU5NVxudmFyIE5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1MgPSBOQVRJVkVfQVJSQVlfQlVGRkVSICYmICEhc2V0UHJvdG90eXBlT2YgJiYgY2xhc3NvZihnbG9iYWwub3BlcmEpICE9PSAnT3BlcmEnO1xudmFyIFRZUEVEX0FSUkFZX1RBR19SRVFVSVJFRCA9IGZhbHNlO1xudmFyIE5BTUUsIENvbnN0cnVjdG9yLCBQcm90b3R5cGU7XG5cbnZhciBUeXBlZEFycmF5Q29uc3RydWN0b3JzTGlzdCA9IHtcbiAgSW50OEFycmF5OiAxLFxuICBVaW50OEFycmF5OiAxLFxuICBVaW50OENsYW1wZWRBcnJheTogMSxcbiAgSW50MTZBcnJheTogMixcbiAgVWludDE2QXJyYXk6IDIsXG4gIEludDMyQXJyYXk6IDQsXG4gIFVpbnQzMkFycmF5OiA0LFxuICBGbG9hdDMyQXJyYXk6IDQsXG4gIEZsb2F0NjRBcnJheTogOFxufTtcblxudmFyIEJpZ0ludEFycmF5Q29uc3RydWN0b3JzTGlzdCA9IHtcbiAgQmlnSW50NjRBcnJheTogOCxcbiAgQmlnVWludDY0QXJyYXk6IDhcbn07XG5cbnZhciBpc1ZpZXcgPSBmdW5jdGlvbiBpc1ZpZXcoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBmYWxzZTtcbiAgdmFyIGtsYXNzID0gY2xhc3NvZihpdCk7XG4gIHJldHVybiBrbGFzcyA9PT0gJ0RhdGFWaWV3J1xuICAgIHx8IGhhc093bihUeXBlZEFycmF5Q29uc3RydWN0b3JzTGlzdCwga2xhc3MpXG4gICAgfHwgaGFzT3duKEJpZ0ludEFycmF5Q29uc3RydWN0b3JzTGlzdCwga2xhc3MpO1xufTtcblxudmFyIGlzVHlwZWRBcnJheSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGZhbHNlO1xuICB2YXIga2xhc3MgPSBjbGFzc29mKGl0KTtcbiAgcmV0dXJuIGhhc093bihUeXBlZEFycmF5Q29uc3RydWN0b3JzTGlzdCwga2xhc3MpXG4gICAgfHwgaGFzT3duKEJpZ0ludEFycmF5Q29uc3RydWN0b3JzTGlzdCwga2xhc3MpO1xufTtcblxudmFyIGFUeXBlZEFycmF5ID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpc1R5cGVkQXJyYXkoaXQpKSByZXR1cm4gaXQ7XG4gIHRocm93IFR5cGVFcnJvcignVGFyZ2V0IGlzIG5vdCBhIHR5cGVkIGFycmF5Jyk7XG59O1xuXG52YXIgYVR5cGVkQXJyYXlDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIChDKSB7XG4gIGlmIChpc0NhbGxhYmxlKEMpICYmICghc2V0UHJvdG90eXBlT2YgfHwgaXNQcm90b3R5cGVPZihUeXBlZEFycmF5LCBDKSkpIHJldHVybiBDO1xuICB0aHJvdyBUeXBlRXJyb3IodHJ5VG9TdHJpbmcoQykgKyAnIGlzIG5vdCBhIHR5cGVkIGFycmF5IGNvbnN0cnVjdG9yJyk7XG59O1xuXG52YXIgZXhwb3J0VHlwZWRBcnJheU1ldGhvZCA9IGZ1bmN0aW9uIChLRVksIHByb3BlcnR5LCBmb3JjZWQsIG9wdGlvbnMpIHtcbiAgaWYgKCFERVNDUklQVE9SUykgcmV0dXJuO1xuICBpZiAoZm9yY2VkKSBmb3IgKHZhciBBUlJBWSBpbiBUeXBlZEFycmF5Q29uc3RydWN0b3JzTGlzdCkge1xuICAgIHZhciBUeXBlZEFycmF5Q29uc3RydWN0b3IgPSBnbG9iYWxbQVJSQVldO1xuICAgIGlmIChUeXBlZEFycmF5Q29uc3RydWN0b3IgJiYgaGFzT3duKFR5cGVkQXJyYXlDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIEtFWSkpIHRyeSB7XG4gICAgICBkZWxldGUgVHlwZWRBcnJheUNvbnN0cnVjdG9yLnByb3RvdHlwZVtLRVldO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBvbGQgV2ViS2l0IGJ1ZyAtIHNvbWUgbWV0aG9kcyBhcmUgbm9uLWNvbmZpZ3VyYWJsZVxuICAgICAgdHJ5IHtcbiAgICAgICAgVHlwZWRBcnJheUNvbnN0cnVjdG9yLnByb3RvdHlwZVtLRVldID0gcHJvcGVydHk7XG4gICAgICB9IGNhdGNoIChlcnJvcjIpIHsgLyogZW1wdHkgKi8gfVxuICAgIH1cbiAgfVxuICBpZiAoIVR5cGVkQXJyYXlQcm90b3R5cGVbS0VZXSB8fCBmb3JjZWQpIHtcbiAgICByZWRlZmluZShUeXBlZEFycmF5UHJvdG90eXBlLCBLRVksIGZvcmNlZCA/IHByb3BlcnR5XG4gICAgICA6IE5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1MgJiYgSW50OEFycmF5UHJvdG90eXBlW0tFWV0gfHwgcHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuXG52YXIgZXhwb3J0VHlwZWRBcnJheVN0YXRpY01ldGhvZCA9IGZ1bmN0aW9uIChLRVksIHByb3BlcnR5LCBmb3JjZWQpIHtcbiAgdmFyIEFSUkFZLCBUeXBlZEFycmF5Q29uc3RydWN0b3I7XG4gIGlmICghREVTQ1JJUFRPUlMpIHJldHVybjtcbiAgaWYgKHNldFByb3RvdHlwZU9mKSB7XG4gICAgaWYgKGZvcmNlZCkgZm9yIChBUlJBWSBpbiBUeXBlZEFycmF5Q29uc3RydWN0b3JzTGlzdCkge1xuICAgICAgVHlwZWRBcnJheUNvbnN0cnVjdG9yID0gZ2xvYmFsW0FSUkFZXTtcbiAgICAgIGlmIChUeXBlZEFycmF5Q29uc3RydWN0b3IgJiYgaGFzT3duKFR5cGVkQXJyYXlDb25zdHJ1Y3RvciwgS0VZKSkgdHJ5IHtcbiAgICAgICAgZGVsZXRlIFR5cGVkQXJyYXlDb25zdHJ1Y3RvcltLRVldO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIH1cbiAgICBpZiAoIVR5cGVkQXJyYXlbS0VZXSB8fCBmb3JjZWQpIHtcbiAgICAgIC8vIFY4IH4gQ2hyb21lIDQ5LTUwIGAlVHlwZWRBcnJheSVgIG1ldGhvZHMgYXJlIG5vbi13cml0YWJsZSBub24tY29uZmlndXJhYmxlXG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gcmVkZWZpbmUoVHlwZWRBcnJheSwgS0VZLCBmb3JjZWQgPyBwcm9wZXJ0eSA6IE5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1MgJiYgVHlwZWRBcnJheVtLRVldIHx8IHByb3BlcnR5KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgICB9IGVsc2UgcmV0dXJuO1xuICB9XG4gIGZvciAoQVJSQVkgaW4gVHlwZWRBcnJheUNvbnN0cnVjdG9yc0xpc3QpIHtcbiAgICBUeXBlZEFycmF5Q29uc3RydWN0b3IgPSBnbG9iYWxbQVJSQVldO1xuICAgIGlmIChUeXBlZEFycmF5Q29uc3RydWN0b3IgJiYgKCFUeXBlZEFycmF5Q29uc3RydWN0b3JbS0VZXSB8fCBmb3JjZWQpKSB7XG4gICAgICByZWRlZmluZShUeXBlZEFycmF5Q29uc3RydWN0b3IsIEtFWSwgcHJvcGVydHkpO1xuICAgIH1cbiAgfVxufTtcblxuZm9yIChOQU1FIGluIFR5cGVkQXJyYXlDb25zdHJ1Y3RvcnNMaXN0KSB7XG4gIENvbnN0cnVjdG9yID0gZ2xvYmFsW05BTUVdO1xuICBQcm90b3R5cGUgPSBDb25zdHJ1Y3RvciAmJiBDb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIGlmIChQcm90b3R5cGUpIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShQcm90b3R5cGUsIFRZUEVEX0FSUkFZX0NPTlNUUlVDVE9SLCBDb25zdHJ1Y3Rvcik7XG4gIGVsc2UgTkFUSVZFX0FSUkFZX0JVRkZFUl9WSUVXUyA9IGZhbHNlO1xufVxuXG5mb3IgKE5BTUUgaW4gQmlnSW50QXJyYXlDb25zdHJ1Y3RvcnNMaXN0KSB7XG4gIENvbnN0cnVjdG9yID0gZ2xvYmFsW05BTUVdO1xuICBQcm90b3R5cGUgPSBDb25zdHJ1Y3RvciAmJiBDb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIGlmIChQcm90b3R5cGUpIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShQcm90b3R5cGUsIFRZUEVEX0FSUkFZX0NPTlNUUlVDVE9SLCBDb25zdHJ1Y3Rvcik7XG59XG5cbi8vIFdlYktpdCBidWcgLSB0eXBlZCBhcnJheXMgY29uc3RydWN0b3JzIHByb3RvdHlwZSBpcyBPYmplY3QucHJvdG90eXBlXG5pZiAoIU5BVElWRV9BUlJBWV9CVUZGRVJfVklFV1MgfHwgIWlzQ2FsbGFibGUoVHlwZWRBcnJheSkgfHwgVHlwZWRBcnJheSA9PT0gRnVuY3Rpb24ucHJvdG90eXBlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3cgLS0gc2FmZVxuICBUeXBlZEFycmF5ID0gZnVuY3Rpb24gVHlwZWRBcnJheSgpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29ycmVjdCBpbnZvY2F0aW9uJyk7XG4gIH07XG4gIGlmIChOQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTKSBmb3IgKE5BTUUgaW4gVHlwZWRBcnJheUNvbnN0cnVjdG9yc0xpc3QpIHtcbiAgICBpZiAoZ2xvYmFsW05BTUVdKSBzZXRQcm90b3R5cGVPZihnbG9iYWxbTkFNRV0sIFR5cGVkQXJyYXkpO1xuICB9XG59XG5cbmlmICghTkFUSVZFX0FSUkFZX0JVRkZFUl9WSUVXUyB8fCAhVHlwZWRBcnJheVByb3RvdHlwZSB8fCBUeXBlZEFycmF5UHJvdG90eXBlID09PSBPYmplY3RQcm90b3R5cGUpIHtcbiAgVHlwZWRBcnJheVByb3RvdHlwZSA9IFR5cGVkQXJyYXkucHJvdG90eXBlO1xuICBpZiAoTkFUSVZFX0FSUkFZX0JVRkZFUl9WSUVXUykgZm9yIChOQU1FIGluIFR5cGVkQXJyYXlDb25zdHJ1Y3RvcnNMaXN0KSB7XG4gICAgaWYgKGdsb2JhbFtOQU1FXSkgc2V0UHJvdG90eXBlT2YoZ2xvYmFsW05BTUVdLnByb3RvdHlwZSwgVHlwZWRBcnJheVByb3RvdHlwZSk7XG4gIH1cbn1cblxuLy8gV2ViS2l0IGJ1ZyAtIG9uZSBtb3JlIG9iamVjdCBpbiBVaW50OENsYW1wZWRBcnJheSBwcm90b3R5cGUgY2hhaW5cbmlmIChOQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTICYmIGdldFByb3RvdHlwZU9mKFVpbnQ4Q2xhbXBlZEFycmF5UHJvdG90eXBlKSAhPT0gVHlwZWRBcnJheVByb3RvdHlwZSkge1xuICBzZXRQcm90b3R5cGVPZihVaW50OENsYW1wZWRBcnJheVByb3RvdHlwZSwgVHlwZWRBcnJheVByb3RvdHlwZSk7XG59XG5cbmlmIChERVNDUklQVE9SUyAmJiAhaGFzT3duKFR5cGVkQXJyYXlQcm90b3R5cGUsIFRPX1NUUklOR19UQUcpKSB7XG4gIFRZUEVEX0FSUkFZX1RBR19SRVFVSVJFRCA9IHRydWU7XG4gIGRlZmluZVByb3BlcnR5KFR5cGVkQXJyYXlQcm90b3R5cGUsIFRPX1NUUklOR19UQUcsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMpID8gdGhpc1tUWVBFRF9BUlJBWV9UQUddIDogdW5kZWZpbmVkO1xuICB9IH0pO1xuICBmb3IgKE5BTUUgaW4gVHlwZWRBcnJheUNvbnN0cnVjdG9yc0xpc3QpIGlmIChnbG9iYWxbTkFNRV0pIHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoZ2xvYmFsW05BTUVdLCBUWVBFRF9BUlJBWV9UQUcsIE5BTUUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBOQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTOiBOQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTLFxuICBUWVBFRF9BUlJBWV9DT05TVFJVQ1RPUjogVFlQRURfQVJSQVlfQ09OU1RSVUNUT1IsXG4gIFRZUEVEX0FSUkFZX1RBRzogVFlQRURfQVJSQVlfVEFHX1JFUVVJUkVEICYmIFRZUEVEX0FSUkFZX1RBRyxcbiAgYVR5cGVkQXJyYXk6IGFUeXBlZEFycmF5LFxuICBhVHlwZWRBcnJheUNvbnN0cnVjdG9yOiBhVHlwZWRBcnJheUNvbnN0cnVjdG9yLFxuICBleHBvcnRUeXBlZEFycmF5TWV0aG9kOiBleHBvcnRUeXBlZEFycmF5TWV0aG9kLFxuICBleHBvcnRUeXBlZEFycmF5U3RhdGljTWV0aG9kOiBleHBvcnRUeXBlZEFycmF5U3RhdGljTWV0aG9kLFxuICBpc1ZpZXc6IGlzVmlldyxcbiAgaXNUeXBlZEFycmF5OiBpc1R5cGVkQXJyYXksXG4gIFR5cGVkQXJyYXk6IFR5cGVkQXJyYXksXG4gIFR5cGVkQXJyYXlQcm90b3R5cGU6IFR5cGVkQXJyYXlQcm90b3R5cGVcbn07XG4iLCJ2YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBleGNlcHRpb25zKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSAmJiAhKGV4Y2VwdGlvbnMgJiYgaGFzT3duKGV4Y2VwdGlvbnMsIGtleSkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfVxuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJHRyaW1TdGFydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnN0YXJ0O1xudmFyIGZvcmNlZFN0cmluZ1RyaW1NZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkJyk7XG5cbnZhciBGT1JDRUQgPSBmb3JjZWRTdHJpbmdUcmltTWV0aG9kKCd0cmltU3RhcnQnKTtcblxudmFyIHRyaW1TdGFydCA9IEZPUkNFRCA/IGZ1bmN0aW9uIHRyaW1TdGFydCgpIHtcbiAgcmV0dXJuICR0cmltU3RhcnQodGhpcyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tc3RyaW5nLXByb3RvdHlwZS10cmltc3RhcnQtdHJpbWVuZCAtLSBzYWZlXG59IDogJycudHJpbVN0YXJ0O1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1TdGFydCwgdHJpbUxlZnQgfWAgbWV0aG9kc1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1zdGFydFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI1N0cmluZy5wcm90b3R5cGUudHJpbWxlZnRcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgbmFtZTogJ3RyaW1TdGFydCcsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgdHJpbVN0YXJ0OiB0cmltU3RhcnQsXG4gIHRyaW1MZWZ0OiB0cmltU3RhcnRcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG5cbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhQ2FsbGFibGUocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUNhbGxhYmxlKHJlamVjdCk7XG59O1xuXG4vLyBgTmV3UHJvbWlzZUNhcGFiaWxpdHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1uZXdwcm9taXNlY2FwYWJpbGl0eVxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGNsYXNzb2ZSYXcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgT2JqZWN0ID0gZ2xvYmFsLk9iamVjdDtcblxuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBDT1JSRUNUX0FSR1VNRU5UUyA9IGNsYXNzb2ZSYXcoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbi8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2Bcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8gY2xhc3NvZlJhdyA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRPX1NUUklOR19UQUcpKSA9PSAnc3RyaW5nJyA/IHRhZ1xuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQ09SUkVDVF9BUkdVTUVOVFMgPyBjbGFzc29mUmF3KE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKHJlc3VsdCA9IGNsYXNzb2ZSYXcoTykpID09ICdPYmplY3QnICYmIGlzQ2FsbGFibGUoTy5jYWxsZWUpID8gJ0FyZ3VtZW50cycgOiByZXN1bHQ7XG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG5cbnRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nKHRlc3QpID09PSAnW29iamVjdCB6XSc7XG4iLCJ2YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsInZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxudmFyIGZpcmVmb3ggPSB1c2VyQWdlbnQubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvaSk7XG5cbm1vZHVsZS5leHBvcnRzID0gISFmaXJlZm94ICYmICtmaXJlZm94WzFdO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rcyB0byBJRTggZm9yIGl0cyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG52YXIgU3RyaW5nID0gZ2xvYmFsLlN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gU3RyaW5nKGFyZ3VtZW50KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gJ09iamVjdCc7XG4gIH1cbn07XG4iLCIvLyBgSXNDYWxsYWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzY2FsbGFibGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRvUG9zaXRpdmVJbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXBvc2l0aXZlLWludGVnZXInKTtcblxudmFyIFJhbmdlRXJyb3IgPSBnbG9iYWwuUmFuZ2VFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIEJZVEVTKSB7XG4gIHZhciBvZmZzZXQgPSB0b1Bvc2l0aXZlSW50ZWdlcihpdCk7XG4gIGlmIChvZmZzZXQgJSBCWVRFUykgdGhyb3cgUmFuZ2VFcnJvcignV3Jvbmcgb2Zmc2V0Jyk7XG4gIHJldHVybiBvZmZzZXQ7XG59O1xuIiwidmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICR0cmltRW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykuZW5kO1xudmFyIGZvcmNlZFN0cmluZ1RyaW1NZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkJyk7XG5cbnZhciBGT1JDRUQgPSBmb3JjZWRTdHJpbmdUcmltTWV0aG9kKCd0cmltRW5kJyk7XG5cbnZhciB0cmltRW5kID0gRk9SQ0VEID8gZnVuY3Rpb24gdHJpbUVuZCgpIHtcbiAgcmV0dXJuICR0cmltRW5kKHRoaXMpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLXN0cmluZy1wcm90b3R5cGUtdHJpbXN0YXJ0LXRyaW1lbmQgLS0gc2FmZVxufSA6ICcnLnRyaW1FbmQ7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbUVuZCwgdHJpbVJpZ2h0IH1gIG1ldGhvZHNcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jU3RyaW5nLnByb3RvdHlwZS50cmltcmlnaHRcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgbmFtZTogJ3RyaW1FbmQnLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIHRyaW1FbmQ6IHRyaW1FbmQsXG4gIHRyaW1SaWdodDogdHJpbUVuZFxufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMubm9UYXJnZXRHZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4gIG9wdGlvbnMubmFtZSAgICAgICAgLSB0aGUgLm5hbWUgb2YgdGhlIGZ1bmN0aW9uIGlmIGl0IGRvZXMgbm90IG1hdGNoIHRoZSBrZXlcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gIGlmIChHTE9CQUwpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWw7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gfHwgc2V0R2xvYmFsKFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IChnbG9iYWxbVEFSR0VUXSB8fCB7fSkucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMubm9UYXJnZXRHZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCJ2YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlck9ySW5maW5pdHkoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBpbnRlcm5hbFNvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc29ydCcpO1xudmFyIEFycmF5QnVmZmVyVmlld0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLXZpZXctY29yZScpO1xudmFyIEZGID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1mZi12ZXJzaW9uJyk7XG52YXIgSUVfT1JfRURHRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtaWUtb3ItZWRnZScpO1xudmFyIFY4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG52YXIgV0VCS0lUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS13ZWJraXQtdmVyc2lvbicpO1xuXG52YXIgQXJyYXkgPSBnbG9iYWwuQXJyYXk7XG52YXIgYVR5cGVkQXJyYXkgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmFUeXBlZEFycmF5O1xudmFyIGV4cG9ydFR5cGVkQXJyYXlNZXRob2QgPSBBcnJheUJ1ZmZlclZpZXdDb3JlLmV4cG9ydFR5cGVkQXJyYXlNZXRob2Q7XG52YXIgVWludDE2QXJyYXkgPSBnbG9iYWwuVWludDE2QXJyYXk7XG52YXIgdW4kU29ydCA9IFVpbnQxNkFycmF5ICYmIHVuY3VycnlUaGlzKFVpbnQxNkFycmF5LnByb3RvdHlwZS5zb3J0KTtcblxuLy8gV2ViS2l0XG52YXIgQUNDRVBUX0lOQ09SUkVDVF9BUkdVTUVOVFMgPSAhIXVuJFNvcnQgJiYgIShmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHVuJFNvcnQobmV3IFVpbnQxNkFycmF5KDIpLCBudWxsKTtcbn0pICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdW4kU29ydChuZXcgVWludDE2QXJyYXkoMiksIHt9KTtcbn0pKTtcblxudmFyIFNUQUJMRV9TT1JUID0gISF1biRTb3J0ICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGZlYXR1cmUgZGV0ZWN0aW9uIGNhbiBiZSB0b28gc2xvdywgc28gY2hlY2sgZW5naW5lcyB2ZXJzaW9uc1xuICBpZiAoVjgpIHJldHVybiBWOCA8IDc0O1xuICBpZiAoRkYpIHJldHVybiBGRiA8IDY3O1xuICBpZiAoSUVfT1JfRURHRSkgcmV0dXJuIHRydWU7XG4gIGlmIChXRUJLSVQpIHJldHVybiBXRUJLSVQgPCA2MDI7XG5cbiAgdmFyIGFycmF5ID0gbmV3IFVpbnQxNkFycmF5KDUxNik7XG4gIHZhciBleHBlY3RlZCA9IEFycmF5KDUxNik7XG4gIHZhciBpbmRleCwgbW9kO1xuXG4gIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IDUxNjsgaW5kZXgrKykge1xuICAgIG1vZCA9IGluZGV4ICUgNDtcbiAgICBhcnJheVtpbmRleF0gPSA1MTUgLSBpbmRleDtcbiAgICBleHBlY3RlZFtpbmRleF0gPSBpbmRleCAtIDIgKiBtb2QgKyAzO1xuICB9XG5cbiAgdW4kU29ydChhcnJheSwgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gKGEgLyA0IHwgMCkgLSAoYiAvIDQgfCAwKTtcbiAgfSk7XG5cbiAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgNTE2OyBpbmRleCsrKSB7XG4gICAgaWYgKGFycmF5W2luZGV4XSAhPT0gZXhwZWN0ZWRbaW5kZXhdKSByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG5cbnZhciBnZXRTb3J0Q29tcGFyZSA9IGZ1bmN0aW9uIChjb21wYXJlZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgaWYgKGNvbXBhcmVmbiAhPT0gdW5kZWZpbmVkKSByZXR1cm4gK2NvbXBhcmVmbih4LCB5KSB8fCAwO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKHkgIT09IHkpIHJldHVybiAtMTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmICh4ICE9PSB4KSByZXR1cm4gMTtcbiAgICBpZiAoeCA9PT0gMCAmJiB5ID09PSAwKSByZXR1cm4gMSAvIHggPiAwICYmIDEgLyB5IDwgMCA/IDEgOiAtMTtcbiAgICByZXR1cm4geCA+IHk7XG4gIH07XG59O1xuXG4vLyBgJVR5cGVkQXJyYXklLnByb3RvdHlwZS5zb3J0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJXR5cGVkYXJyYXklLnByb3RvdHlwZS5zb3J0XG5leHBvcnRUeXBlZEFycmF5TWV0aG9kKCdzb3J0JywgZnVuY3Rpb24gc29ydChjb21wYXJlZm4pIHtcbiAgaWYgKGNvbXBhcmVmbiAhPT0gdW5kZWZpbmVkKSBhQ2FsbGFibGUoY29tcGFyZWZuKTtcbiAgaWYgKFNUQUJMRV9TT1JUKSByZXR1cm4gdW4kU29ydCh0aGlzLCBjb21wYXJlZm4pO1xuXG4gIHJldHVybiBpbnRlcm5hbFNvcnQoYVR5cGVkQXJyYXkodGhpcyksIGdldFNvcnRDb21wYXJlKGNvbXBhcmVmbikpO1xufSwgIVNUQUJMRV9TT1JUIHx8IEFDQ0VQVF9JTkNPUlJFQ1RfQVJHVU1FTlRTKTtcbiIsInZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBEZW5vID0gZ2xvYmFsLkRlbm87XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnMgfHwgRGVubyAmJiBEZW5vLnZlcnNpb247XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52ODtcbnZhciBtYXRjaCwgdmVyc2lvbjtcblxuaWYgKHY4KSB7XG4gIG1hdGNoID0gdjguc3BsaXQoJy4nKTtcbiAgLy8gaW4gb2xkIENocm9tZSwgdmVyc2lvbnMgb2YgVjggaXNuJ3QgVjggPSBDaHJvbWUgLyAxMFxuICAvLyBidXQgdGhlaXIgY29ycmVjdCB2ZXJzaW9ucyBhcmUgbm90IGludGVyZXN0aW5nIGZvciB1c1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gPiAwICYmIG1hdGNoWzBdIDwgNCA/IDEgOiArKG1hdGNoWzBdICsgbWF0Y2hbMV0pO1xufVxuXG4vLyBCcm93c2VyRlMgTm9kZUpTIGBwcm9jZXNzYCBwb2x5ZmlsbCBpbmNvcnJlY3RseSBzZXQgYC52OGAgdG8gYDAuMGBcbi8vIHNvIGNoZWNrIGB1c2VyQWdlbnRgIGV2ZW4gaWYgYC52OGAgZXhpc3RzLCBidXQgMFxuaWYgKCF2ZXJzaW9uICYmIHVzZXJBZ2VudCkge1xuICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS8pO1xuICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdID49IDc0KSB7XG4gICAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgIGlmIChtYXRjaCkgdmVyc2lvbiA9ICttYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb247XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCduYXZpZ2F0b3InLCAndXNlckFnZW50JykgfHwgJyc7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFN0cmluZyA9IGdsb2JhbC5TdHJpbmc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKHR5cGVvZiBhcmd1bWVudCA9PSAnb2JqZWN0JyB8fCBpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBzZXQgXCIgKyBTdHJpbmcoYXJndW1lbnQpICsgJyBhcyBhIHByb3RvdHlwZScpO1xufTtcbiIsInZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgQXJyYXlCdWZmZXJWaWV3Q29yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1idWZmZXItdmlldy1jb3JlJyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciB0b09mZnNldCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vZmZzZXQnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIFJhbmdlRXJyb3IgPSBnbG9iYWwuUmFuZ2VFcnJvcjtcbnZhciBJbnQ4QXJyYXkgPSBnbG9iYWwuSW50OEFycmF5O1xudmFyIEludDhBcnJheVByb3RvdHlwZSA9IEludDhBcnJheSAmJiBJbnQ4QXJyYXkucHJvdG90eXBlO1xudmFyICRzZXQgPSBJbnQ4QXJyYXlQcm90b3R5cGUgJiYgSW50OEFycmF5UHJvdG90eXBlLnNldDtcbnZhciBhVHlwZWRBcnJheSA9IEFycmF5QnVmZmVyVmlld0NvcmUuYVR5cGVkQXJyYXk7XG52YXIgZXhwb3J0VHlwZWRBcnJheU1ldGhvZCA9IEFycmF5QnVmZmVyVmlld0NvcmUuZXhwb3J0VHlwZWRBcnJheU1ldGhvZDtcblxudmFyIFdPUktTX1dJVEhfT0JKRUNUU19BTkRfR0VFUklDX09OX1RZUEVEX0FSUkFZUyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby10eXBlZC1hcnJheXMgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgdmFyIGFycmF5ID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KDIpO1xuICBjYWxsKCRzZXQsIGFycmF5LCB7IGxlbmd0aDogMSwgMDogMyB9LCAxKTtcbiAgcmV0dXJuIGFycmF5WzFdICE9PSAzO1xufSk7XG5cbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTExMjk0IGFuZCBvdGhlclxudmFyIFRPX09CSkVDVF9CVUcgPSBXT1JLU19XSVRIX09CSkVDVFNfQU5EX0dFRVJJQ19PTl9UWVBFRF9BUlJBWVMgJiYgQXJyYXlCdWZmZXJWaWV3Q29yZS5OQVRJVkVfQVJSQVlfQlVGRkVSX1ZJRVdTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFycmF5ID0gbmV3IEludDhBcnJheSgyKTtcbiAgYXJyYXkuc2V0KDEpO1xuICBhcnJheS5zZXQoJzInLCAxKTtcbiAgcmV0dXJuIGFycmF5WzBdICE9PSAwIHx8IGFycmF5WzFdICE9PSAyO1xufSk7XG5cbi8vIGAlVHlwZWRBcnJheSUucHJvdG90eXBlLnNldGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSV0eXBlZGFycmF5JS5wcm90b3R5cGUuc2V0XG5leHBvcnRUeXBlZEFycmF5TWV0aG9kKCdzZXQnLCBmdW5jdGlvbiBzZXQoYXJyYXlMaWtlIC8qICwgb2Zmc2V0ICovKSB7XG4gIGFUeXBlZEFycmF5KHRoaXMpO1xuICB2YXIgb2Zmc2V0ID0gdG9PZmZzZXQoYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDEpO1xuICB2YXIgc3JjID0gdG9JbmRleGVkT2JqZWN0KGFycmF5TGlrZSk7XG4gIGlmIChXT1JLU19XSVRIX09CSkVDVFNfQU5EX0dFRVJJQ19PTl9UWVBFRF9BUlJBWVMpIHJldHVybiBjYWxsKCRzZXQsIHRoaXMsIHNyYywgb2Zmc2V0KTtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICB2YXIgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2Uoc3JjKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgaWYgKGxlbiArIG9mZnNldCA+IGxlbmd0aCkgdGhyb3cgUmFuZ2VFcnJvcignV3JvbmcgbGVuZ3RoJyk7XG4gIHdoaWxlIChpbmRleCA8IGxlbikgdGhpc1tvZmZzZXQgKyBpbmRleF0gPSBzcmNbaW5kZXgrK107XG59LCAhV09SS1NfV0lUSF9PQkpFQ1RTX0FORF9HRUVSSUNfT05fVFlQRURfQVJSQVlTIHx8IFRPX09CSkVDVF9CVUcpO1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyIE9iamVjdCA9IGdsb2JhbC5PYmplY3Q7XG52YXIgc3BsaXQgPSB1bmN1cnJ5VGhpcygnJy5zcGxpdCk7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuICFPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PSAnU3RyaW5nJyA/IHNwbGl0KGl0LCAnJykgOiBPYmplY3QoaXQpO1xufSA6IE9iamVjdDtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBhQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jb25zdHJ1Y3RvcicpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG4vLyBgU3BlY2llc0NvbnN0cnVjdG9yYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3BlY2llc2NvbnN0cnVjdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBkZWZhdWx0Q29uc3RydWN0b3IpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gZGVmYXVsdENvbnN0cnVjdG9yIDogYUNvbnN0cnVjdG9yKFMpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcblxuLy8gYE9yZGluYXJ5VG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKHByZWYgPT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChpc0NhbGxhYmxlKGZuID0gaW5wdXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gU3ltYm9sKCk7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGBnZXQtb3duLXByb3BlcnR5LXN5bWJvbHNgIHBvbHlmaWxsIHN5bWJvbHMgY29udmVydGVkIHRvIG9iamVjdCBhcmUgbm90IFN5bWJvbCBpbnN0YW5jZXNcbiAgcmV0dXJuICFTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCJ2YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcblxudmFyIEFycmF5ID0gZ2xvYmFsLkFycmF5O1xudmFyIG1heCA9IE1hdGgubWF4O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgdmFyIGsgPSB0b0Fic29sdXRlSW5kZXgoc3RhcnQsIGxlbmd0aCk7XG4gIHZhciBmaW4gPSB0b0Fic29sdXRlSW5kZXgoZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQsIGxlbmd0aCk7XG4gIHZhciByZXN1bHQgPSBBcnJheShtYXgoZmluIC0gaywgMCkpO1xuICBmb3IgKHZhciBuID0gMDsgayA8IGZpbjsgaysrLCBuKyspIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgbiwgT1trXSk7XG4gIHJlc3VsdC5sZW5ndGggPSBuO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGludGVybmFsU29ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zb3J0Jyk7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG52YXIgRkYgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWZmLXZlcnNpb24nKTtcbnZhciBJRV9PUl9FREdFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1pcy1pZS1vci1lZGdlJyk7XG52YXIgVjggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBXRUJLSVQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXdlYmtpdC12ZXJzaW9uJyk7XG5cbnZhciB0ZXN0ID0gW107XG52YXIgdW4kU29ydCA9IHVuY3VycnlUaGlzKHRlc3Quc29ydCk7XG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKHRlc3QucHVzaCk7XG5cbi8vIElFOC1cbnZhciBGQUlMU19PTl9VTkRFRklORUQgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHRlc3Quc29ydCh1bmRlZmluZWQpO1xufSk7XG4vLyBWOCBidWdcbnZhciBGQUlMU19PTl9OVUxMID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICB0ZXN0LnNvcnQobnVsbCk7XG59KTtcbi8vIE9sZCBXZWJLaXRcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnc29ydCcpO1xuXG52YXIgU1RBQkxFX1NPUlQgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBmZWF0dXJlIGRldGVjdGlvbiBjYW4gYmUgdG9vIHNsb3csIHNvIGNoZWNrIGVuZ2luZXMgdmVyc2lvbnNcbiAgaWYgKFY4KSByZXR1cm4gVjggPCA3MDtcbiAgaWYgKEZGICYmIEZGID4gMykgcmV0dXJuO1xuICBpZiAoSUVfT1JfRURHRSkgcmV0dXJuIHRydWU7XG4gIGlmIChXRUJLSVQpIHJldHVybiBXRUJLSVQgPCA2MDM7XG5cbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgY29kZSwgY2hyLCB2YWx1ZSwgaW5kZXg7XG5cbiAgLy8gZ2VuZXJhdGUgYW4gYXJyYXkgd2l0aCBtb3JlIDUxMiBlbGVtZW50cyAoQ2hha3JhIGFuZCBvbGQgVjggZmFpbHMgb25seSBpbiB0aGlzIGNhc2UpXG4gIGZvciAoY29kZSA9IDY1OyBjb2RlIDwgNzY7IGNvZGUrKykge1xuICAgIGNociA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG5cbiAgICBzd2l0Y2ggKGNvZGUpIHtcbiAgICAgIGNhc2UgNjY6IGNhc2UgNjk6IGNhc2UgNzA6IGNhc2UgNzI6IHZhbHVlID0gMzsgYnJlYWs7XG4gICAgICBjYXNlIDY4OiBjYXNlIDcxOiB2YWx1ZSA9IDQ7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogdmFsdWUgPSAyO1xuICAgIH1cblxuICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IDQ3OyBpbmRleCsrKSB7XG4gICAgICB0ZXN0LnB1c2goeyBrOiBjaHIgKyBpbmRleCwgdjogdmFsdWUgfSk7XG4gICAgfVxuICB9XG5cbiAgdGVzdC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBiLnYgLSBhLnY7IH0pO1xuXG4gIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHRlc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY2hyID0gdGVzdFtpbmRleF0uay5jaGFyQXQoMCk7XG4gICAgaWYgKHJlc3VsdC5jaGFyQXQocmVzdWx0Lmxlbmd0aCAtIDEpICE9PSBjaHIpIHJlc3VsdCArPSBjaHI7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0ICE9PSAnREdCRUZIQUNJSksnO1xufSk7XG5cbnZhciBGT1JDRUQgPSBGQUlMU19PTl9VTkRFRklORUQgfHwgIUZBSUxTX09OX05VTEwgfHwgIVNUUklDVF9NRVRIT0QgfHwgIVNUQUJMRV9TT1JUO1xuXG52YXIgZ2V0U29ydENvbXBhcmUgPSBmdW5jdGlvbiAoY29tcGFyZWZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoeCwgeSkge1xuICAgIGlmICh5ID09PSB1bmRlZmluZWQpIHJldHVybiAtMTtcbiAgICBpZiAoeCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gMTtcbiAgICBpZiAoY29tcGFyZWZuICE9PSB1bmRlZmluZWQpIHJldHVybiArY29tcGFyZWZuKHgsIHkpIHx8IDA7XG4gICAgcmV0dXJuIHRvU3RyaW5nKHgpID4gdG9TdHJpbmcoeSkgPyAxIDogLTE7XG4gIH07XG59O1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNvcnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc29ydFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgc29ydDogZnVuY3Rpb24gc29ydChjb21wYXJlZm4pIHtcbiAgICBpZiAoY29tcGFyZWZuICE9PSB1bmRlZmluZWQpIGFDYWxsYWJsZShjb21wYXJlZm4pO1xuXG4gICAgdmFyIGFycmF5ID0gdG9PYmplY3QodGhpcyk7XG5cbiAgICBpZiAoU1RBQkxFX1NPUlQpIHJldHVybiBjb21wYXJlZm4gPT09IHVuZGVmaW5lZCA/IHVuJFNvcnQoYXJyYXkpIDogdW4kU29ydChhcnJheSwgY29tcGFyZWZuKTtcblxuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHZhciBhcnJheUxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKGFycmF5KTtcbiAgICB2YXIgaXRlbXNMZW5ndGgsIGluZGV4O1xuXG4gICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmIChpbmRleCBpbiBhcnJheSkgcHVzaChpdGVtcywgYXJyYXlbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpbnRlcm5hbFNvcnQoaXRlbXMsIGdldFNvcnRDb21wYXJlKGNvbXBhcmVmbikpO1xuXG4gICAgaXRlbXNMZW5ndGggPSBpdGVtcy5sZW5ndGg7XG4gICAgaW5kZXggPSAwO1xuXG4gICAgd2hpbGUgKGluZGV4IDwgaXRlbXNMZW5ndGgpIGFycmF5W2luZGV4XSA9IGl0ZW1zW2luZGV4KytdO1xuICAgIHdoaWxlIChpbmRleCA8IGFycmF5TGVuZ3RoKSBkZWxldGUgYXJyYXlbaW5kZXgrK107XG5cbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNvbnN0cnVjdG9yJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDb25zdHJ1Y3Rvcihhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NvbnN0cnVjdG9yKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xufTtcbiIsInZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGFyZ3VtZW50ID4gMCA/IG1pbih0b0ludGVnZXJPckluZmluaXR5KGFyZ3VtZW50KSwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwidmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgd2Via2l0ID0gdXNlckFnZW50Lm1hdGNoKC9BcHBsZVdlYktpdFxcLyhcXGQrKVxcLi8pO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICEhd2Via2l0ICYmICt3ZWJraXRbMV07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xuXG52YXIgU3RyaW5nID0gZ2xvYmFsLlN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGNsYXNzb2YoYXJndW1lbnQpID09PSAnU3ltYm9sJykgdGhyb3cgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZycpO1xuICByZXR1cm4gU3RyaW5nKGFyZ3VtZW50KTtcbn07XG4iLCJ2YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiAnMy4yMC4zJyxcbiAgbW9kZTogSVNfUFVSRSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE0LTIwMjIgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknLFxuICBsaWNlbnNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvYmxvYi92My4yMC4zL0xJQ0VOU0UnLFxuICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcydcbn0pO1xuIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KGtleXMsIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCIvLyBhIHN0cmluZyBvZiBhbGwgdmFsaWQgdW5pY29kZSB3aGl0ZXNwYWNlc1xubW9kdWxlLmV4cG9ydHMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDInICtcbiAgJ1xcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcbiIsInZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgd2hpdGVzcGFjZSA9ICdbJyArIHdoaXRlc3BhY2VzICsgJ10nO1xudmFyIGx0cmltID0gUmVnRXhwKCdeJyArIHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyonKTtcbnZhciBydHJpbSA9IFJlZ0V4cCh3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW0sIHRyaW1TdGFydCwgdHJpbUVuZCwgdHJpbUxlZnQsIHRyaW1SaWdodCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcykge1xuICAgIHZhciBzdHJpbmcgPSB0b1N0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSByZXBsYWNlKHN0cmluZywgbHRyaW0sICcnKTtcbiAgICBpZiAoVFlQRSAmIDIpIHN0cmluZyA9IHJlcGxhY2Uoc3RyaW5nLCBydHJpbSwgJycpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1zdGFydFxuICBzdGFydDogY3JlYXRlTWV0aG9kKDEpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1SaWdodCwgdHJpbUVuZCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4gIGVuZDogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiAgdHJpbTogY3JlYXRlTWV0aG9kKDMpXG59O1xuIiwidmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gc2FmZVxuICByZXR1cm4gbnVtYmVyICE9PSBudW1iZXIgfHwgbnVtYmVyID09PSAwID8gMCA6IChudW1iZXIgPiAwID8gZmxvb3IgOiBjZWlsKShudW1iZXIpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcblxudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IElzQ2FsbGFibGUoYXJndW1lbnQpIGlzIHRydWVgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldERlc2NyaXB0b3IgPSBERVNDUklQVE9SUyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgRVhJU1RTID0gaGFzT3duKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpO1xuLy8gYWRkaXRpb25hbCBwcm90ZWN0aW9uIGZyb20gbWluaWZpZWQgLyBtYW5nbGVkIC8gZHJvcHBlZCBmdW5jdGlvbiBuYW1lc1xudmFyIFBST1BFUiA9IEVYSVNUUyAmJiAoZnVuY3Rpb24gc29tZXRoaW5nKCkgeyAvKiBlbXB0eSAqLyB9KS5uYW1lID09PSAnc29tZXRoaW5nJztcbnZhciBDT05GSUdVUkFCTEUgPSBFWElTVFMgJiYgKCFERVNDUklQVE9SUyB8fCAoREVTQ1JJUFRPUlMgJiYgZ2V0RGVzY3JpcHRvcihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKS5jb25maWd1cmFibGUpKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEVYSVNUUzogRVhJU1RTLFxuICBQUk9QRVI6IFBST1BFUixcbiAgQ09ORklHVVJBQkxFOiBDT05GSUdVUkFCTEVcbn07XG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG5cbnZhciBub29wID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIGVtcHR5ID0gW107XG52YXIgY29uc3RydWN0ID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdjb25zdHJ1Y3QnKTtcbnZhciBjb25zdHJ1Y3RvclJlZ0V4cCA9IC9eXFxzKig/OmNsYXNzfGZ1bmN0aW9uKVxcYi87XG52YXIgZXhlYyA9IHVuY3VycnlUaGlzKGNvbnN0cnVjdG9yUmVnRXhwLmV4ZWMpO1xudmFyIElOQ09SUkVDVF9UT19TVFJJTkcgPSAhY29uc3RydWN0b3JSZWdFeHAuZXhlYyhub29wKTtcblxudmFyIGlzQ29uc3RydWN0b3JNb2Rlcm4gPSBmdW5jdGlvbiBpc0NvbnN0cnVjdG9yKGFyZ3VtZW50KSB7XG4gIGlmICghaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBmYWxzZTtcbiAgdHJ5IHtcbiAgICBjb25zdHJ1Y3Qobm9vcCwgZW1wdHksIGFyZ3VtZW50KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbnZhciBpc0NvbnN0cnVjdG9yTGVnYWN5ID0gZnVuY3Rpb24gaXNDb25zdHJ1Y3Rvcihhcmd1bWVudCkge1xuICBpZiAoIWlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gZmFsc2U7XG4gIHN3aXRjaCAoY2xhc3NvZihhcmd1bWVudCkpIHtcbiAgICBjYXNlICdBc3luY0Z1bmN0aW9uJzpcbiAgICBjYXNlICdHZW5lcmF0b3JGdW5jdGlvbic6XG4gICAgY2FzZSAnQXN5bmNHZW5lcmF0b3JGdW5jdGlvbic6IHJldHVybiBmYWxzZTtcbiAgfVxuICB0cnkge1xuICAgIC8vIHdlIGNhbid0IGNoZWNrIC5wcm90b3R5cGUgc2luY2UgY29uc3RydWN0b3JzIHByb2R1Y2VkIGJ5IC5iaW5kIGhhdmVuJ3QgaXRcbiAgICAvLyBgRnVuY3Rpb24jdG9TdHJpbmdgIHRocm93cyBvbiBzb21lIGJ1aWx0LWl0IGZ1bmN0aW9uIGluIHNvbWUgbGVnYWN5IGVuZ2luZXNcbiAgICAvLyAoZm9yIGV4YW1wbGUsIGBET01RdWFkYCBhbmQgc2ltaWxhciBpbiBGRjQxLSlcbiAgICByZXR1cm4gSU5DT1JSRUNUX1RPX1NUUklORyB8fCAhIWV4ZWMoY29uc3RydWN0b3JSZWdFeHAsIGluc3BlY3RTb3VyY2UoYXJndW1lbnQpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuaXNDb25zdHJ1Y3RvckxlZ2FjeS5zaGFtID0gdHJ1ZTtcblxuLy8gYElzQ29uc3RydWN0b3JgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NvbnN0cnVjdG9yXG5tb2R1bGUuZXhwb3J0cyA9ICFjb25zdHJ1Y3QgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgY2FsbGVkO1xuICByZXR1cm4gaXNDb25zdHJ1Y3Rvck1vZGVybihpc0NvbnN0cnVjdG9yTW9kZXJuLmNhbGwpXG4gICAgfHwgIWlzQ29uc3RydWN0b3JNb2Rlcm4oT2JqZWN0KVxuICAgIHx8ICFpc0NvbnN0cnVjdG9yTW9kZXJuKGZ1bmN0aW9uICgpIHsgY2FsbGVkID0gdHJ1ZTsgfSlcbiAgICB8fCBjYWxsZWQ7XG59KSA/IGlzQ29uc3RydWN0b3JMZWdhY3kgOiBpc0NvbnN0cnVjdG9yTW9kZXJuO1xuIiwidmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQgPSAnT2JqZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCB8fCBzaGFyZWQuc3RhdGUpIHtcbiAgdmFyIHN0b3JlID0gc2hhcmVkLnN0YXRlIHx8IChzaGFyZWQuc3RhdGUgPSBuZXcgV2Vha01hcCgpKTtcbiAgdmFyIHdtZ2V0ID0gdW5jdXJyeVRoaXMoc3RvcmUuZ2V0KTtcbiAgdmFyIHdtaGFzID0gdW5jdXJyeVRoaXMoc3RvcmUuaGFzKTtcbiAgdmFyIHdtc2V0ID0gdW5jdXJyeVRoaXMoc3RvcmUuc2V0KTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmICh3bWhhcyhzdG9yZSwgaXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICB3bXNldChzdG9yZSwgaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWdldChzdG9yZSwgaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gd21oYXMoc3RvcmUsIGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKGhhc093bihpdCwgU1RBVEUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyxcbiAgZW5mb3JjZTogZW5mb3JjZSxcbiAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3Jcbn07XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGBnbG9iYWxUaGlzYCBvYmplY3Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2xvYmFsdGhpc1xuJCh7IGdsb2JhbDogdHJ1ZSB9LCB7XG4gIGdsb2JhbFRoaXM6IGdsb2JhbFxufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLkNPTkZJR1VSQUJMRTtcblxudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgdmFyIHVuc2FmZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMudW5zYWZlIDogZmFsc2U7XG4gIHZhciBzaW1wbGUgPSBvcHRpb25zID8gISFvcHRpb25zLmVudW1lcmFibGUgOiBmYWxzZTtcbiAgdmFyIG5vVGFyZ2V0R2V0ID0gb3B0aW9ucyA/ICEhb3B0aW9ucy5ub1RhcmdldEdldCA6IGZhbHNlO1xuICB2YXIgbmFtZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5uYW1lICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5hbWUgOiBrZXk7XG4gIHZhciBzdGF0ZTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSB7XG4gICAgaWYgKFN0cmluZyhuYW1lKS5zbGljZSgwLCA3KSA9PT0gJ1N5bWJvbCgnKSB7XG4gICAgICBuYW1lID0gJ1snICsgU3RyaW5nKG5hbWUpLnJlcGxhY2UoL15TeW1ib2xcXCgoW14pXSopXFwpLywgJyQxJykgKyAnXSc7XG4gICAgfVxuICAgIGlmICghaGFzT3duKHZhbHVlLCAnbmFtZScpIHx8IChDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSAmJiB2YWx1ZS5uYW1lICE9PSBuYW1lKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIG5hbWUpO1xuICAgIH1cbiAgICBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcbiAgICBpZiAoIXN0YXRlLnNvdXJjZSkge1xuICAgICAgc3RhdGUuc291cmNlID0gVEVNUExBVEUuam9pbih0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyA/IG5hbWUgOiAnJyk7XG4gICAgfVxuICB9XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIHNldEdsb2JhbChrZXksIHZhbHVlKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoIXVuc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gIH0gZWxzZSBpZiAoIW5vVGFyZ2V0R2V0ICYmIE9ba2V5XSkge1xuICAgIHNpbXBsZSA9IHRydWU7XG4gIH1cbiAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gIGVsc2UgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KE8sIGtleSwgdmFsdWUpO1xuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSk7XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwiLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciBPYmplY3QgPSBnbG9iYWwuT2JqZWN0O1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQ2FsbGFibGUoV2Vha01hcCkgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KGluc3BlY3RTb3VyY2UoV2Vha01hcCkpO1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIERldGVjdCBJRTgncyBpbmNvbXBsZXRlIGRlZmluZVByb3BlcnR5IGltcGxlbWVudGF0aW9uXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT0gNztcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIFN0cmluZyA9IGdsb2JhbC5TdHJpbmc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogVHlwZShhcmd1bWVudCkgaXMgT2JqZWN0YFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzT2JqZWN0KGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBwcm9wZXJ0eUtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKHByb3BlcnR5S2V5IGluIG9iamVjdCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIHByb3BlcnR5S2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbcHJvcGVydHlLZXldID0gdmFsdWU7XG59O1xuIiwidmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwidmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvbi50b1N0cmluZyk7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgY29yZS1qc0AzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICghaXNDYWxsYWJsZShzdG9yZS5pbnNwZWN0U291cmNlKSkge1xuICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjAudG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyB0b1N0cmluZygrK2lkICsgcG9zdGZpeCwgMzYpO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogaXNDYWxsYWJsZShkZXRlY3Rpb24pID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG5cbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIEVOVU1FUkFCTEUgPSAnZW51bWVyYWJsZSc7XG52YXIgQ09ORklHVVJBQkxFID0gJ2NvbmZpZ3VyYWJsZSc7XG52YXIgV1JJVEFCTEUgPSAnd3JpdGFibGUnO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAodHlwZW9mIE8gPT09ICdmdW5jdGlvbicgJiYgUCA9PT0gJ3Byb3RvdHlwZScgJiYgJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzICYmIFdSSVRBQkxFIGluIEF0dHJpYnV0ZXMgJiYgIUF0dHJpYnV0ZXNbV1JJVEFCTEVdKSB7XG4gICAgdmFyIGN1cnJlbnQgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnRbV1JJVEFCTEVdKSB7XG4gICAgICBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogQ09ORklHVVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0NPTkZJR1VSQUJMRV0gOiBjdXJyZW50W0NPTkZJR1VSQUJMRV0sXG4gICAgICAgIGVudW1lcmFibGU6IEVOVU1FUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbRU5VTUVSQUJMRV0gOiBjdXJyZW50W0VOVU1FUkFCTEVdLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICB9IHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG59IDogJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgTmF0aXZlUHJvbWlzZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtcHJvbWlzZS1jb25zdHJ1Y3RvcicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wcm9taXNlLXJlc29sdmUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xuXG4vLyBTYWZhcmkgYnVnIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDA4MjlcbnZhciBOT05fR0VORVJJQyA9ICEhTmF0aXZlUHJvbWlzZSAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLXRoZW5hYmxlIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIE5hdGl2ZVByb21pc2UucHJvdG90eXBlWydmaW5hbGx5J10uY2FsbCh7IHRoZW46IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSB9LCBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pO1xufSk7XG5cbi8vIGBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcHJvbWlzZS5wcm90b3R5cGUuZmluYWxseVxuJCh7IHRhcmdldDogJ1Byb21pc2UnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBOT05fR0VORVJJQyB9LCB7XG4gICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIGdldEJ1aWx0SW4oJ1Byb21pc2UnKSk7XG4gICAgdmFyIGlzRnVuY3Rpb24gPSBpc0NhbGxhYmxlKG9uRmluYWxseSk7XG4gICAgcmV0dXJuIHRoaXMudGhlbihcbiAgICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4geDsgfSk7XG4gICAgICB9IDogb25GaW5hbGx5LFxuICAgICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHRocm93IGU7IH0pO1xuICAgICAgfSA6IG9uRmluYWxseVxuICAgICk7XG4gIH1cbn0pO1xuXG4vLyBtYWtlcyBzdXJlIHRoYXQgbmF0aXZlIHByb21pc2UtYmFzZWQgQVBJcyBgUHJvbWlzZSNmaW5hbGx5YCBwcm9wZXJseSB3b3JrcyB3aXRoIHBhdGNoZWQgYFByb21pc2UjdGhlbmBcbmlmICghSVNfUFVSRSAmJiBpc0NhbGxhYmxlKE5hdGl2ZVByb21pc2UpKSB7XG4gIHZhciBtZXRob2QgPSBnZXRCdWlsdEluKCdQcm9taXNlJykucHJvdG90eXBlWydmaW5hbGx5J107XG4gIGlmIChOYXRpdmVQcm9taXNlLnByb3RvdHlwZVsnZmluYWxseSddICE9PSBtZXRob2QpIHtcbiAgICByZWRlZmluZShOYXRpdmVQcm9taXNlLnByb3RvdHlwZSwgJ2ZpbmFsbHknLCBtZXRob2QsIHsgdW5zYWZlOiB0cnVlIH0pO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIGFyZ3VtZW50KSB7XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbCxuby10aHJvdy1saXRlcmFsIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyB0aHJvdyAxOyB9LCAxKTtcbiAgfSk7XG59O1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLXR5cGVkLWFycmF5cyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBBcnJheUJ1ZmZlciAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgRGF0YVZpZXcgIT0gJ3VuZGVmaW5lZCc7XG4iLCJ2YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZS1zaW1wbGUnKTtcblxudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxudmFyIG1lcmdlU29ydCA9IGZ1bmN0aW9uIChhcnJheSwgY29tcGFyZWZuKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHZhciBtaWRkbGUgPSBmbG9vcihsZW5ndGggLyAyKTtcbiAgcmV0dXJuIGxlbmd0aCA8IDggPyBpbnNlcnRpb25Tb3J0KGFycmF5LCBjb21wYXJlZm4pIDogbWVyZ2UoXG4gICAgYXJyYXksXG4gICAgbWVyZ2VTb3J0KGFycmF5U2xpY2UoYXJyYXksIDAsIG1pZGRsZSksIGNvbXBhcmVmbiksXG4gICAgbWVyZ2VTb3J0KGFycmF5U2xpY2UoYXJyYXksIG1pZGRsZSksIGNvbXBhcmVmbiksXG4gICAgY29tcGFyZWZuXG4gICk7XG59O1xuXG52YXIgaW5zZXJ0aW9uU29ydCA9IGZ1bmN0aW9uIChhcnJheSwgY29tcGFyZWZuKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHZhciBpID0gMTtcbiAgdmFyIGVsZW1lbnQsIGo7XG5cbiAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICBqID0gaTtcbiAgICBlbGVtZW50ID0gYXJyYXlbaV07XG4gICAgd2hpbGUgKGogJiYgY29tcGFyZWZuKGFycmF5W2ogLSAxXSwgZWxlbWVudCkgPiAwKSB7XG4gICAgICBhcnJheVtqXSA9IGFycmF5Wy0tal07XG4gICAgfVxuICAgIGlmIChqICE9PSBpKyspIGFycmF5W2pdID0gZWxlbWVudDtcbiAgfSByZXR1cm4gYXJyYXk7XG59O1xuXG52YXIgbWVyZ2UgPSBmdW5jdGlvbiAoYXJyYXksIGxlZnQsIHJpZ2h0LCBjb21wYXJlZm4pIHtcbiAgdmFyIGxsZW5ndGggPSBsZWZ0Lmxlbmd0aDtcbiAgdmFyIHJsZW5ndGggPSByaWdodC5sZW5ndGg7XG4gIHZhciBsaW5kZXggPSAwO1xuICB2YXIgcmluZGV4ID0gMDtcblxuICB3aGlsZSAobGluZGV4IDwgbGxlbmd0aCB8fCByaW5kZXggPCBybGVuZ3RoKSB7XG4gICAgYXJyYXlbbGluZGV4ICsgcmluZGV4XSA9IChsaW5kZXggPCBsbGVuZ3RoICYmIHJpbmRleCA8IHJsZW5ndGgpXG4gICAgICA/IGNvbXBhcmVmbihsZWZ0W2xpbmRleF0sIHJpZ2h0W3JpbmRleF0pIDw9IDAgPyBsZWZ0W2xpbmRleCsrXSA6IHJpZ2h0W3JpbmRleCsrXVxuICAgICAgOiBsaW5kZXggPCBsbGVuZ3RoID8gbGVmdFtsaW5kZXgrK10gOiByaWdodFtyaW5kZXgrK107XG4gIH0gcmV0dXJuIGFycmF5O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZXJnZVNvcnQ7XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBWOCB+IENocm9tZSAzNi1cbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMzMzRcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAncHJvdG90eXBlJywge1xuICAgIHZhbHVlOiA0MixcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSkucHJvdG90eXBlICE9IDQyO1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIHN5bWJvbEZvciA9IFN5bWJvbCAmJiBTeW1ib2xbJ2ZvciddO1xudmFyIGNyZWF0ZVdlbGxLbm93blN5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpIHx8ICEoTkFUSVZFX1NZTUJPTCB8fCB0eXBlb2YgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID09ICdzdHJpbmcnKSkge1xuICAgIHZhciBkZXNjcmlwdGlvbiA9ICdTeW1ib2wuJyArIG5hbWU7XG4gICAgaWYgKE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSkpIHtcbiAgICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IFN5bWJvbFtuYW1lXTtcbiAgICB9IGVsc2UgaWYgKFVTRV9TWU1CT0xfQVNfVUlEICYmIHN5bWJvbEZvcikge1xuICAgICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gc3ltYm9sRm9yKGRlc2NyaXB0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gY3JlYXRlV2VsbEtub3duU3ltYm9sKGRlc2NyaXB0aW9uKTtcbiAgICB9XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgb3JkaW5hcnlUb1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vcmRpbmFyeS10by1wcmltaXRpdmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgVE9fUFJJTUlUSVZFID0gd2VsbEtub3duU3ltYm9sKCd0b1ByaW1pdGl2ZScpO1xuXG4vLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgaWYgKCFpc09iamVjdChpbnB1dCkgfHwgaXNTeW1ib2woaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBleG90aWNUb1ByaW0gPSBnZXRNZXRob2QoaW5wdXQsIFRPX1BSSU1JVElWRSk7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChleG90aWNUb1ByaW0pIHtcbiAgICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ2RlZmF1bHQnO1xuICAgIHJlc3VsdCA9IGNhbGwoZXhvdGljVG9QcmltLCBpbnB1dCwgcHJlZik7XG4gICAgaWYgKCFpc09iamVjdChyZXN1bHQpIHx8IGlzU3ltYm9sKHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gICAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9XG4gIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnbnVtYmVyJztcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIHByZWYpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCJ2YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbDtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IGNhbGwuYmluZChjYWxsKSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoY2FsbCwgYXJndW1lbnRzKTtcbn07XG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKHt9LnRvU3RyaW5nKTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHN0cmluZ1NsaWNlKHRvU3RyaW5nKGl0KSwgOCwgLTEpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgc2V0R2xvYmFsKFNIQVJFRCwge30pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwidmFyIFBST1BFUl9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5QUk9QRVI7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgbm9uID0gJ1xcdTIwMEJcXHUwMDg1XFx1MTgwRSc7XG5cbi8vIGNoZWNrIHRoYXQgYSBtZXRob2Qgd29ya3Mgd2l0aCB0aGUgY29ycmVjdCBsaXN0XG4vLyBvZiB3aGl0ZXNwYWNlcyBhbmQgaGFzIGEgY29ycmVjdCBuYW1lXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICByZXR1cm4gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXdoaXRlc3BhY2VzW01FVEhPRF9OQU1FXSgpXG4gICAgICB8fCBub25bTUVUSE9EX05BTUVdKCkgIT09IG5vblxuICAgICAgfHwgKFBST1BFUl9GVU5DVElPTl9OQU1FICYmIHdoaXRlc3BhY2VzW01FVEhPRF9OQU1FXS5uYW1lICE9PSBNRVRIT0RfTkFNRSk7XG4gIH0pO1xufTtcbiIsInZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhc093bihoaWRkZW5LZXlzLCBrZXkpICYmIGhhc093bihPLCBrZXkpICYmIHB1c2gocmVzdWx0LCBrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzT3duKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHB1c2gocmVzdWx0LCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBkZWZpbmVQcm9wZXJ0eShnbG9iYWwsIGtleSwgeyB2YWx1ZTogdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZ2xvYmFsW2tleV0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==