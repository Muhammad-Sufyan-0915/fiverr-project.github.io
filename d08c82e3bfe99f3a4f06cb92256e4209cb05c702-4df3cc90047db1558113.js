(window.webpackJsonp = window.webpackJsonp || []).push([
    [3, 27], {
        "/30l": function(e, t, n) {
            e.exports = {
                loader: "Loader-module--loader--3Z0Sy",
                animateStroke: "Loader-module--animate-stroke--3RpMd"
            }
        },
        "/5VH": function(e, t, n) {
            e.exports = {
                backgroundTextStroke: "BackgroundTextStroke-module--backgroundTextStroke--AVvYI",
                hideOnMobile: "BackgroundTextStroke-module--hideOnMobile--m2d2n",
                text: "BackgroundTextStroke-module--text--GB4RS"
            }
        },
        "/8gm": function(e, t, n) {
            "use strict";
            t.a = function() {
                return "undefined" == typeof window || window.location.pathname.match(/^\/\w{2}-\w{2}\//g)
            }
        },
        "0C8q": function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                i = n("N1uy"),
                a = n("/5VH"),
                c = n.n(a);
            t.a = function(e) {
                var t = e.className,
                    n = void 0 === t ? "" : t,
                    r = e.texts,
                    a = void 0 === r ? ["We are", "VALORANT"] : r,
                    u = e.speed,
                    s = void 0 === u ? -3 : u,
                    l = e.hasParallax,
                    d = void 0 !== l && l,
                    f = e.hideOnMobile,
                    m = void 0 === f || f;
                return o.a.createElement("div", {
                    className: "\n      " + c.a.backgroundTextStroke + " \n      " + (m ? c.a.hideOnMobile : "") + "\n      "
                }, d ? o.a.createElement(i.a, {
                    className: "text-stroke " + n + " " + c.a.text,
                    type: "h2",
                    speed: s,
                    isDesktopOnly: !0
                }, a.map((function(e) {
                    return o.a.createElement("span", {
                        key: e
                    }, e)
                }))) : o.a.createElement("h2", {
                    className: "text-stroke " + n + " " + c.a.text
                }, a.map((function(e) {
                    return o.a.createElement("span", {
                        key: e
                    }, e)
                }))))
            }
        },
        "34qe": function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                i = n("ahjx"),
                a = n("/30l"),
                c = n.n(a);
            t.a = function(e) {
                var t = e.className,
                    n = void 0 === t ? "" : t;
                return o.a.createElement(i.a, {
                    className: n + " " + c.a.loader,
                    name: "LogoV"
                })
            }
        },
        "3ESw": function(e, t, n) {
            "use strict";
            var r = n("pc+1");
            t.a = function(e) {
                if ("scrollBehavior" in document.documentElement.style) window.scroll({
                    top: e,
                    behavior: "smooth"
                });
                else {
                    var t = {
                        top: window.pageYOffset
                    };
                    r.f.to(t, .4, {
                        top: e,
                        ease: r.e.easeOut,
                        onUpdate: function() {
                            window.scrollTo(0, t.top)
                        }
                    })
                }
            }
        },
        "7fbo": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var r = n("q1tI"),
                o = function() {
                    var e = Object(r.useState)(!1),
                        t = e[0],
                        n = e[1];
                    return Object(r.useEffect)((function() {
                        if ("undefined" != typeof window) {
                            var e = function(e) {
                                    n(e.matches)
                                },
                                t = window.matchMedia("(max-width: 1023px)");
                            return e(t), t.addListener(e),
                                function() {
                                    return t.removeListener(e)
                                }
                        }
                    }), []), t
                }
        },
        LiQX: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "chooseLocale", (function() {
                return g
            }));
            var r = n("TJpk"),
                o = n("Wbzz"),
                i = n("+ZDr"),
                a = n("q1tI"),
                c = n.n(a),
                u = n("7VJI"),
                s = n.n(u),
                l = n("yrl2"),
                d = n("5DTp"),
                f = n("wZVN"),
                m = n("LqT2"),
                v = n("ny/S"),
                p = new s.a.Locales(Object.keys(l.a));
            var g = function(e) {
                if (void 0 === e && (e = l.a["en-us"]), "undefined" == typeof window) return e;
                var t, n = Object(v.a)(),
                    r = (t = window.localStorage.getItem(d.a.LOCALSTORAGE_DEFINED_LANGUAGE)) && Object.keys(l.a).includes(t) ? t : null,
                    o = !!r;
                return r || (r = function() {
                    var e, t = f.a.read(d.a.COOKIE_ACCEPT_LANGUAGE_OVERRIDE) || f.a.read(d.a.COOKIE_ACCEPT_LANGUAGE);
                    t && ((e = new s.a.Locales(t).best(p)) && (e = e.toString()));
                    return e
                }(), o = !1), r || (r = e, o = !1), !o && n.lang && (r = Object(m.a)(n.lang)), window.localStorage.setItem(d.a.LOCALSTORAGE_DEFINED_LANGUAGE, r), r
            };
            t.default = function(e) {
                var t = e.path,
                    n = void 0 === t ? "/" : t,
                    a = e.queryString,
                    u = void 0 === a ? "" : a,
                    s = Object(o.d)("738554184"),
                    l = g(Object(m.a)(s.site.siteMetadata.config.DEFAULT_LOCALE)),
                    d = "https://" + s.site.siteMetadata.config.SITE_DOMAIN + "/" + l + n;
                return "undefined" != typeof window && (d = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "") + "/" + l + n + u, window.location.replace(d)), Object(i.navigate)(d), c.a.createElement(r.Helmet, null, c.a.createElement("meta", {
                    httpEquiv: "refresh",
                    content: "0; url=" + d
                }))
            }
        },
        YU3G: function(e, t, n) {
            "use strict";
            var r = n("Wbzz"),
                o = n("q1tI"),
                i = n.n(o),
                a = n("ahjx"),
                c = n("c++0"),
                u = n.n(c);
            t.a = function(e) {
                var t = e.href,
                    n = e.to,
                    o = e.downloadContent,
                    c = e.onClick,
                    s = e.className,
                    l = e.icon,
                    d = e.label,
                    f = e.inverted,
                    m = void 0 !== f && f,
                    v = e.testId,
                    p = s + " " + u.a.textButton + " button " + (m ? u.a.inverted : ""),
                    g = i.a.createElement(i.a.Fragment, null, d && i.a.createElement("p", {
                        className: "heading-06 " + u.a.label
                    }, d), l && i.a.createElement(a.a, {
                        className: u.a.icon,
                        name: l
                    }));
                return n ? i.a.createElement(r.a, {
                    to: n,
                    onClick: c,
                    className: p,
                    "data-icon": l,
                    "data-testid": v
                }, g) : t ? i.a.createElement("a", {
                    href: t,
                    onClick: c,
                    className: p,
                    "data-icon": l,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "data-testid": v
                }, g) : o ? i.a.createElement("button", {
                    "data-download-content": o,
                    className: p,
                    "data-icon": l,
                    onClick: c,
                    "data-testid": v
                }, g) : i.a.createElement("button", {
                    className: p,
                    "data-icon": l,
                    onClick: c,
                    "data-testid": v
                }, g)
            }
        },
        "c++0": function(e, t, n) {
            e.exports = {
                icon: "TextButton-module--icon--113jU",
                textButton: "TextButton-module--textButton--2wm3K",
                inverted: "TextButton-module--inverted--2pAHM",
                label: "TextButton-module--label--tblRt"
            }
        },
        stwm: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var r = n("q1tI"),
                o = n("zND5"),
                i = n("X9ND"),
                a = n("hIM4"),
                c = function(e) {
                    var t = Object(r.useState)(!1),
                        n = t[0],
                        c = t[1],
                        u = Object(r.useState)(!1),
                        s = u[0],
                        l = u[1],
                        d = Object(r.useState)(0),
                        f = d[0],
                        m = d[1],
                        v = Object(r.useState)([]),
                        p = v[0],
                        g = v[1],
                        x = Object(r.useContext)(i.a),
                        h = Object(a.a)(x),
                        w = Object(o.useEmblaCarousel)(Object.assign({}, e, {
                            isRtl: h
                        })),
                        b = w[0],
                        S = w[1],
                        y = Object(r.useCallback)((function() {
                            return null == S ? void 0 : S.scrollPrev()
                        }), [S]),
                        E = Object(r.useCallback)((function() {
                            return null == S ? void 0 : S.scrollNext()
                        }), [S]),
                        T = Object(r.useCallback)((function(e) {
                            return null == S ? void 0 : S.scrollTo(e)
                        }), [S]),
                        O = Object(r.useCallback)((function() {
                            S && (m(S.selectedScrollSnap()), c(S.canScrollPrev()), l(S.canScrollNext()))
                        }), [S]);
                    return Object(r.useEffect)((function() {
                        if (S) return O(), g(S.scrollSnapList()), S.on("select", O),
                            function() {
                                S.off("select", O)
                            }
                    }), [S, O]), {
                        sliderRef: b,
                        data: {
                            isPrevButtonEnabled: n,
                            isNextButtonEnabled: s,
                            activeSlideIndex: f,
                            scrollSnaps: p
                        },
                        actions: {
                            goToPrevious: y,
                            goToNext: E,
                            goTo: T
                        }
                    }
                }
        },
        zND5: function(e, t, n) {
            "use strict";
            n("ToJy"), n("E9XD"), Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n("q1tI");

            function o() {
                return (o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function i(e) {
                var t = e.viewSize,
                    n = e.align,
                    r = {
                        start: function() {
                            return 0
                        },
                        center: function(e) {
                            return o(e) / 2
                        },
                        end: o
                    };

                function o(e) {
                    return t - e
                }
                return {
                    measure: function(e) {
                        return "number" == typeof n ? t * Number(n) : r[n](e)
                    }
                }
            }

            function a(e) {
                var t = e.start,
                    n = e.limit,
                    r = e.loop,
                    o = n.min,
                    i = n.max,
                    c = n[r ? "loop" : "constrain"],
                    u = c(t);

                function s() {
                    return u
                }

                function l(e) {
                    return u = c(e), d
                }
                var d = {
                    add: function e(t) {
                        if (0 !== t) {
                            var n = t / Math.abs(t);
                            return l(s() + n), e(t + -1 * n)
                        }
                        return d
                    },
                    clone: function() {
                        return a({
                            start: s(),
                            limit: n,
                            loop: r
                        })
                    },
                    get: s,
                    max: i,
                    min: o,
                    set: l
                };
                return d
            }

            function c(e) {
                var t = e;

                function n(e) {
                    return t /= e, o
                }

                function r(e) {
                    return "number" == typeof e ? e : e.get()
                }
                var o = {
                    add: function(e) {
                        return t += r(e), o
                    },
                    divide: n,
                    get: function() {
                        return t
                    },
                    multiply: function(e) {
                        return t *= e, o
                    },
                    normalize: function() {
                        return 0 !== t && n(t), o
                    },
                    set: function(e) {
                        return t = r(e), o
                    },
                    subtract: function(e) {
                        return t -= r(e), o
                    }
                };
                return o
            }

            function u(e) {
                var t = c(n(e));

                function n(e) {
                    return 0 === e ? 0 : e / Math.abs(e)
                }
                var r = {
                    get: t.get,
                    set: function(e) {
                        var o = n(e.get());
                        return 0 !== o && t.set(o), r
                    }
                };
                return r
            }

            function s() {
                var e = [];
                var t = {
                    add: function(n, r, o, i) {
                        return void 0 === i && (i = !1), n.addEventListener(r, o, i), e.push((function() {
                            return n.removeEventListener(r, o, i)
                        })), t
                    },
                    removeAll: function() {
                        return e = e.filter((function(e) {
                            return e()
                        })), t
                    }
                };
                return t
            }

            function l(e) {
                var t = e.min,
                    n = e.max,
                    r = Math.abs(t - n);

                function o(e) {
                    return e < t
                }

                function i(e) {
                    return e > n
                }

                function a(e) {
                    return o(e) || i(e)
                }
                return {
                    constrain: function(e) {
                        return a(e) ? o(e) ? t : n : e
                    },
                    length: r,
                    loop: function(e) {
                        return a(e) ? o(e) ? n : t : e
                    },
                    max: n,
                    min: t,
                    reachedAny: a,
                    reachedMax: i,
                    reachedMin: o,
                    removeOffset: function(e) {
                        if (t === n) return e;
                        for (; o(e);) e += r;
                        for (; i(e);) e -= r;
                        return e
                    }
                }
            }

            function d(e) {
                var t = e.target,
                    n = e.scrollBody,
                    r = e.dragFree,
                    o = e.animation,
                    i = e.axis,
                    a = e.element,
                    d = e.dragTracker,
                    f = e.location,
                    m = e.events,
                    v = e.limit,
                    p = i.scroll,
                    g = i.cross,
                    x = ["INPUT", "SELECT", "TEXTAREA"],
                    h = c(0),
                    w = c(0),
                    b = c(0),
                    S = s(),
                    y = s(),
                    E = {
                        mouse: 2.5,
                        touch: 3.5
                    },
                    T = {
                        mouse: 5,
                        touch: 7
                    },
                    O = r ? 5 : 12,
                    M = l({
                        min: v.min - 70,
                        max: v.max + 70
                    }),
                    k = !1,
                    A = !1,
                    D = !1,
                    I = !1;

                function L(e) {
                    if (!(I = "mousedown" === e.type) || 0 === e.button) {
                        var r, o, i = z(t.get(), f.get()) >= 2,
                            c = I || !i,
                            u = (r = e.target, o = r.nodeName || "", !(x.indexOf(o) > -1)),
                            s = i || I && u;
                        k = !0, d.pointerDown(e), b.set(t), t.set(f), n.useDefaultMass().useSpeed(80),
                            function() {
                                var e = I ? document : a;
                                y.add(e, "touchmove", N).add(e, "touchend", C).add(e, "mousemove", N).add(e, "mouseup", C)
                            }(), h.set(d.readPoint(e, p)), w.set(d.readPoint(e, g)), m.emit("pointerDown"), c && (D = !1), s && e.preventDefault()
                    }
                }

                function N(n) {
                    if (!A && !I) {
                        if (!n.cancelable) return C();
                        var r = d.readPoint(n, p).get(),
                            i = d.readPoint(n, g).get(),
                            a = z(r, h.get()),
                            c = z(i, w.get());
                        if (!(A = a > c) && !D) return C()
                    }
                    var u = d.pointerMove(n),
                        s = v.reachedAny(f.get()),
                        l = !e.loop && s ? 2 : 1;
                    !D && u && (D = !0), o.start(), t.add(u / l), n.preventDefault()
                }

                function C() {
                    var o, i, a, c = e.scrollTo,
                        s = d.pointerUp() * (r ? T : E)[I ? "mouse" : "touch"],
                        l = function(n) {
                            var o = e.scrollTarget,
                                i = e.index,
                                a = !(o.byDistance(0, !1).index !== i.get()) && Math.abs(n) > 4,
                                c = n + f.get();
                            if (a && !r && !v.reachedAny(c)) {
                                var s = i.clone().add(-1 * u(n).get());
                                return o.byIndex(s.get(), 0).distance
                            }
                            if (!e.loop && M.reachedAny(c)) {
                                var l = M.reachedMax(c) ? "max" : "min";
                                return M[l] - t.get()
                            }
                            return o.byDistance(n, !r).distance
                        }(s),
                        p = (o = s, i = l, a = z(Math.abs(o), Math.abs(i)), Math.abs(o) <= Math.abs(i) || 0 === o || 0 === i ? 0 : Math.abs(a / o));
                    z(t.get(), b.get()) >= .5 && !I && (D = !0), A = !1, k = !1, y.removeAll(), n.useSpeed(O + O * p), c.distance(l, !r), I = !1, m.emit("pointerUp")
                }

                function z(e, t) {
                    return Math.abs(e - t)
                }

                function P(e) {
                    D && e.preventDefault()
                }
                return {
                    addActivationEvents: function() {
                        var e = a;
                        S.add(e, "touchmove", (function() {})).add(e, "touchend", (function() {})).add(e, "touchstart", L).add(e, "mousedown", L).add(e, "touchcancel", C).add(e, "contextmenu", C).add(e, "click", P)
                    },
                    clickAllowed: function() {
                        return !D
                    },
                    pointerDown: function() {
                        return k
                    },
                    removeAllEvents: function() {
                        S.removeAll(), y.removeAll()
                    }
                }
            }

            function f(e) {
                var t = e.axis,
                    n = e.pxToPercent,
                    r = t.scroll,
                    o = {
                        x: "clientX",
                        y: "clientY"
                    },
                    i = c(0),
                    a = c(0),
                    u = c(0),
                    s = c(0),
                    l = [],
                    d = (new Date).getTime(),
                    f = !1;

                function m(e, t) {
                    f = !e.touches;
                    var n = o[t],
                        r = f ? e[n] : e.touches[0][n];
                    return s.set(r)
                }
                return {
                    pointerDown: function(e) {
                        var t = m(e, r);
                        return i.set(t), u.set(t), n.measure(i.get())
                    },
                    pointerMove: function(e) {
                        var t = m(e, r),
                            o = (new Date).getTime(),
                            i = o - d;
                        return i >= 10 && (i >= 100 && (l = []), l.push(t.get()), d = o), a.set(t).subtract(u), u.set(t), n.measure(a.get())
                    },
                    pointerUp: function() {
                        var e = (new Date).getTime() - d,
                            t = u.get(),
                            r = l.slice(-5).map((function(e) {
                                return t - e
                            })).sort((function(e, t) {
                                return Math.abs(e) < Math.abs(t) ? 1 : -1
                            }))[0];
                        return u.set(e > 100 || !r ? 0 : r), l = [], n.measure(u.get())
                    },
                    readPoint: m
                }
            }

            function m(e) {
                var t = Math.pow(10, e);
                return function(e) {
                    return Math.round(e * t) / t
                }
            }

            function v(e) {
                return Object.keys(e).map(Number)
            }

            function p(e, t) {
                var n = e.classList;
                t && n.contains(t) && n.remove(t)
            }

            function g(e, t) {
                var n = e.classList;
                t && !n.contains(t) && n.add(t)
            }

            function x(e) {
                var t = e.location,
                    n = e.speed,
                    r = e.mass,
                    o = m(2),
                    i = c(0),
                    a = c(0),
                    s = c(0),
                    l = u(0),
                    d = {
                        speed: n,
                        mass: r
                    };

                function f(e) {
                    return d.speed = e, p
                }

                function v(e) {
                    return d.mass = e, p
                }
                var p = {
                    direction: l,
                    location: t,
                    seek: function(e) {
                        s.set(e).subtract(t);
                        var n, r, o, c, u, f = s.get(),
                            m = (n = f, r = 0, o = 100, c = 0, u = d.speed, c + (n - r) / (o - r) * (u - c));
                        return l.set(s), s.normalize().multiply(m).subtract(i),
                            function(e) {
                                e.divide(d.mass), a.add(e)
                            }(s), p
                    },
                    settle: function(e) {
                        var n = e.get() - t.get(),
                            r = !o(n);
                        return r && t.set(e), r
                    },
                    update: function() {
                        i.add(a), t.add(i), a.multiply(0)
                    },
                    useDefaultMass: function() {
                        return v(r), p
                    },
                    useDefaultSpeed: function() {
                        return f(n), p
                    },
                    useMass: v,
                    useSpeed: f
                };
                return p
            }

            function h(e) {
                var t = e.limit,
                    n = e.location,
                    r = e.scrollBody,
                    o = e.animation,
                    i = t.min,
                    a = t.max,
                    c = t.reachedMin,
                    u = t.reachedMax,
                    s = !1,
                    l = 0;
                return {
                    constrain: function(e) {
                        (function(e) {
                            return !s && !l && (c(n.get()) ? e.get() !== i : !!u(n.get()) && e.get() !== a)
                        })(e) && (l = window.setTimeout((function() {
                            var n = t.constrain(e.get());
                            e.set(n), r.useSpeed(10).useMass(3), o.start(), l = 0
                        }), 50))
                    },
                    toggleActive: function(e) {
                        s = !e
                    }
                }
            }

            function w(e) {
                var t = e.alignment,
                    n = e.contentSize,
                    r = e.viewSize,
                    o = l({
                        min: -n + r,
                        max: 0
                    }),
                    i = [t.measure(n)],
                    a = n > r;
                return {
                    measure: function(e, t) {
                        var n = e.map(o.constrain),
                            r = function(e) {
                                var t = e[0],
                                    n = e[e.length - 1];
                                return l({
                                    min: e.lastIndexOf(t) + 1,
                                    max: e.indexOf(n)
                                })
                            }(n),
                            c = r.min,
                            u = r.max;
                        return a ? t ? n.slice(c - 1, u + 1) : n : i
                    }
                }
            }

            function b(e) {
                var t = e.contentSize,
                    n = e.location,
                    r = e.limit,
                    o = e.pxToPercent,
                    i = l({
                        min: r.min + o.measure(.1),
                        max: r.max + o.measure(.1)
                    }),
                    a = i.reachedMin,
                    c = i.reachedMax;
                return {
                    loop: function(e, r) {
                        if (function(e) {
                                return 1 === e ? c(n.get()) : -1 === e && a(n.get())
                            }(r)) {
                            var o = t * (-1 * r);
                            e.forEach((function(e) {
                                return e.add(o)
                            }))
                        }
                    }
                }
            }

            function S(e) {
                var t = e.loop,
                    n = e.limit,
                    r = e.scrollSnaps,
                    o = e.contentSize,
                    i = n.reachedMax,
                    a = n.reachedAny,
                    c = n.removeOffset;

                function u(e, t) {
                    return Math.abs(e) < Math.abs(t) ? e : t
                }

                function s(e, n) {
                    var r = e,
                        i = e + o,
                        a = e - o;
                    if (!t) return r;
                    if (!n) return u(u(r, i), a);
                    var c = u(r, 1 === n ? i : a);
                    return Math.abs(c) * n
                }
                return {
                    byDistance: function(n, o) {
                        var u = e.target.get() + n,
                            l = function(e) {
                                var t = c(e);
                                return {
                                    index: r.map((function(e) {
                                        return e - t
                                    })).map((function(e) {
                                        return s(e, 0)
                                    })).map((function(e, t) {
                                        return {
                                            diff: e,
                                            index: t
                                        }
                                    })).sort((function(e, t) {
                                        return Math.abs(e.diff) - Math.abs(t.diff)
                                    }))[0].index,
                                    distance: t
                                }
                            }(u),
                            d = function(n, r) {
                                if (!(!t && a(n))) return r;
                                var o = e.index,
                                    c = o.min,
                                    u = o.max;
                                return i(n) ? c : u
                            }(u, l.index),
                            f = !t && a(u);
                        return !o || f ? {
                            index: d,
                            distance: n
                        } : {
                            index: d,
                            distance: n + s(r[d] - l.distance, 0)
                        }
                    },
                    byIndex: function(t, n) {
                        return {
                            index: t,
                            distance: s(r[t] - e.target.get(), n)
                        }
                    },
                    shortcut: s
                }
            }

            function y(e) {
                var t, n = e.axis,
                    r = e.location,
                    o = e.slidesInView,
                    i = e.isRtl,
                    a = e.contentSize,
                    c = e.viewSize,
                    u = e.slideSizes,
                    s = e.scrollSnaps,
                    l = v(u),
                    d = v(u).reverse(),
                    f = (t = s[0] - 1, x(g(d, t), "end")).concat(function() {
                        var e = c - s[0] - 1;
                        return x(g(l, e), "start")
                    }()),
                    m = "x" === n.scroll ? i ? "right" : "left" : "top";

                function p(e, t) {
                    return e.reduce((function(e, t) {
                        return e - u[t]
                    }), t)
                }

                function g(e, t) {
                    return e.reduce((function(e, n) {
                        return p(e, t) > 0 ? e.concat([n]) : e
                    }), [])
                }

                function x(e, t) {
                    var n = "start" === t,
                        i = n ? -a : a,
                        c = o.findSlideBounds(i);
                    return e.map((function(e) {
                        var t = n ? 0 : -a,
                            o = n ? a : 0,
                            i = c.filter((function(t) {
                                return t.index === e
                            }))[0][n ? "end" : "start"];
                        return {
                            point: i,
                            getTarget: function() {
                                return r.get() > i ? t : o
                            },
                            index: e,
                            location: -1
                        }
                    }))
                }
                return {
                    canLoop: function() {
                        return f.every((function(e) {
                            var t = e.index;
                            return p(l.filter((function(e) {
                                return e !== t
                            })), c) <= 0
                        }))
                    },
                    clear: function(e) {
                        f.forEach((function(t) {
                            var n = t.index;
                            e[n].style[m] = ""
                        }))
                    },
                    loop: function(e) {
                        f.forEach((function(t) {
                            var n = t.getTarget,
                                r = t.location,
                                o = t.index,
                                i = n();
                            i !== r && (e[o].style[m] = i + "%", t.location = i)
                        }))
                    },
                    loopPoints: f
                }
            }

            function E(e) {
                var t = e.scrollTo,
                    n = e.slidesToScroll,
                    r = e.root,
                    o = s(),
                    i = o.removeAll,
                    a = 0;

                function c(e) {
                    9 === e.keyCode && (a = (new Date).getTime())
                }

                function u(e, i) {
                    o.add(e, "focus", (function() {
                        if (!((new Date).getTime() - a > 10)) {
                            r.scrollLeft = 0;
                            var e = Math.floor(i / n);
                            t.index(e, 0)
                        }
                    }), !0)
                }
                return {
                    addActivationEvents: function(e) {
                        o.add(document, "keydown", c, !1), e.forEach(u)
                    },
                    removeAllEvents: i
                }
            }

            function T(e) {
                var t = e.axis,
                    n = e.container,
                    r = e.isRtl,
                    o = {
                        x: function(e) {
                            return "translate3d(" + (r ? -e : e) + "%,0px,0px)"
                        },
                        y: function(e) {
                            return "translate3d(0px," + e + "%,0px)"
                        }
                    }[t.scroll],
                    i = m(2),
                    a = n.style,
                    c = !1,
                    u = 0;
                return {
                    clear: function() {
                        a.transform = "", u = 0
                    },
                    to: function(e) {
                        if (!c) {
                            var t = i(e.get());
                            u !== t && (getComputedStyle(n).transform, a.transform = o(t), u = t)
                        }
                    },
                    toggleActive: function(e) {
                        c = !e
                    }
                }
            }

            function O(e, t, n, r, o) {
                var u, s, m, p, g, O = r.align,
                    M = r.axis,
                    k = r.startIndex,
                    A = r.inViewThreshold,
                    D = r.loop,
                    I = r.speed,
                    L = r.dragFree,
                    N = r.slidesToScroll,
                    C = r.containScroll,
                    z = r.isRtl,
                    P = function(e) {
                        var t = "y" === e ? "y" : "x";
                        return {
                            cross: "y" === e ? "x" : "y",
                            measure: function(e) {
                                var n = e.getBoundingClientRect(),
                                    r = n.width,
                                    o = n.height;
                                return "x" === t ? r : o
                            },
                            scroll: t
                        }
                    }(M),
                    j = (u = P.measure(t), {
                        measure: function(e) {
                            return e / u * 100
                        },
                        totalPercent: 100
                    }),
                    B = j.totalPercent,
                    R = n.map(P.measure).map(j.measure),
                    V = v(R),
                    U = function(e, t) {
                        for (var n = [], r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
                        return n
                    }(R, N).map((function(e) {
                        return e.reduce((function(e, t) {
                            return e + t
                        }))
                    })),
                    q = R.reduce((function(e, t) {
                        return e + t
                    }), 0),
                    _ = i({
                        align: O,
                        viewSize: B
                    }),
                    F = function(e) {
                        var t, n = e.snapSizes,
                            r = e.alignment,
                            o = e.loop,
                            i = n.map(r.measure),
                            c = (t = a({
                                limit: l({
                                    min: 0,
                                    max: n.length - 1
                                }),
                                start: 0,
                                loop: o
                            }), n.map((function(e, n) {
                                var r = t.set(n + 1).get();
                                return e + i[n] - i[r]
                            })));
                        return {
                            measure: function(e) {
                                return c.slice(0, e).reduce((function(e, t) {
                                    return e - t
                                }), i[0])
                            }
                        }
                    }({
                        snapSizes: U,
                        alignment: _,
                        loop: D
                    }),
                    G = v(U).map(F.measure),
                    H = w({
                        alignment: _,
                        contentSize: q,
                        viewSize: B
                    }),
                    J = !D && "" !== C,
                    X = "trimSnaps" === C,
                    Y = H.measure(G, X),
                    K = J ? Y : G,
                    W = a({
                        limit: l({
                            min: 0,
                            max: Math.max(0, K.length - 1)
                        }),
                        start: k,
                        loop: D
                    }),
                    Z = W.clone(),
                    Q = function(e) {
                        var t = e.contentSize,
                            n = e.loop;
                        return {
                            measure: function(e) {
                                var r = e[0],
                                    o = e[e.length - 1];
                                return l({
                                    min: n ? r - t : o,
                                    max: r
                                })
                            }
                        }
                    }({
                        loop: D,
                        contentSize: q
                    }).measure(K),
                    $ = function(e) {
                        var t = 0;

                        function n(e, n) {
                            return function() {
                                e === !!t && n()
                            }
                        }

                        function r() {
                            t = window.requestAnimationFrame(e)
                        }
                        return {
                            proceed: n(!0, r),
                            start: n(!1, r),
                            stop: n(!0, (function() {
                                window.cancelAnimationFrame(t), t = 0
                            }))
                        }
                    }((function() {
                        se.scrollBody.seek(ne).update();
                        var e = se.scrollBody.settle(ne);
                        if (ue.pointerDown() || (D || se.scrollBounds.constrain(ne), e && (se.animation.stop(), o.emit("settle"))), D) {
                            var t = se.scrollBody.direction.get();
                            se.scrollLooper.loop(re, t), se.slideLooper.loop(n)
                        }
                        e || o.emit("scroll"), se.translate.to(se.scrollBody.location), se.animation.proceed()
                    })),
                    ee = K[W.get()],
                    te = c(ee),
                    ne = c(ee),
                    re = [te, ne],
                    oe = x({
                        location: te,
                        speed: I,
                        mass: 1
                    }),
                    ie = S({
                        contentSize: q,
                        index: W,
                        limit: Q,
                        loop: D,
                        scrollSnaps: K,
                        target: ne
                    }),
                    ae = function(e) {
                        var t = e.index,
                            n = e.scrollTarget,
                            r = e.animation,
                            o = e.indexPrevious,
                            i = e.events,
                            a = e.target;

                        function c(e) {
                            var n = e.distance,
                                c = e.index !== t.get();
                            n && (r.start(), a.add(n)), c && (o.set(t.get()), t.set(e.index), i.emit("select"))
                        }
                        return {
                            distance: function(e, t) {
                                c(n.byDistance(e, t))
                            },
                            index: function(e, r) {
                                var o = t.clone().set(e);
                                c(n.byIndex(o.get(), r))
                            }
                        }
                    }({
                        animation: $,
                        events: o,
                        index: W,
                        indexPrevious: Z,
                        scrollTarget: ie,
                        target: ne
                    }),
                    ce = function(e) {
                        var t = e.contentSize,
                            n = e.slideSizes,
                            r = e.viewSize,
                            o = e.inViewThreshold,
                            i = e.loop,
                            a = Math.min(Math.max(o, .01), .99),
                            c = v(n).map((function(e) {
                                return n.slice(0, e).reduce((function(e, t) {
                                    return e - t
                                }), 0)
                            })),
                            u = (i ? [0, t, -t] : [0]).reduce((function(e, t) {
                                return e.concat(s(t, a))
                            }), []);

                        function s(e, t) {
                            var o = n.map((function(e) {
                                return e * (t || 0)
                            }));
                            return c.map((function(t, i) {
                                return {
                                    start: t - n[i] + o[i] + e,
                                    end: t + r - o[i] + e,
                                    index: i
                                }
                            }))
                        }
                        return {
                            check: function(e) {
                                return u.reduce((function(t, n) {
                                    var r = n.index,
                                        o = n.start,
                                        i = n.end;
                                    return !(-1 !== t.indexOf(r)) && (o < e && i > e) ? t.concat([r]) : t
                                }), [])
                            },
                            findSlideBounds: s
                        }
                    }({
                        contentSize: q,
                        inViewThreshold: A,
                        loop: D,
                        slideSizes: R,
                        viewSize: B
                    }),
                    ue = d({
                        animation: $,
                        axis: P,
                        dragFree: L,
                        dragTracker: f({
                            axis: P,
                            pxToPercent: j
                        }),
                        element: e,
                        events: o,
                        index: W,
                        limit: Q,
                        location: te,
                        loop: D,
                        scrollBody: oe,
                        scrollTo: ae,
                        scrollTarget: ie,
                        target: ne
                    }),
                    se = {
                        animation: $,
                        axis: P,
                        dragHandler: ue,
                        pxToPercent: j,
                        index: W,
                        indexPrevious: Z,
                        limit: Q,
                        location: te,
                        options: r,
                        scrollBody: oe,
                        scrollBounds: h({
                            animation: $,
                            limit: Q,
                            location: te,
                            scrollBody: oe
                        }),
                        scrollLooper: b({
                            contentSize: q,
                            limit: Q,
                            location: te,
                            pxToPercent: j
                        }),
                        scrollProgress: (s = {
                            limit: Q
                        }, m = s.limit, p = m.max, g = m.length, {
                            get: function(e) {
                                return (e - p) / -g
                            }
                        }),
                        scrollSnaps: K,
                        scrollTarget: ie,
                        scrollTo: ae,
                        slideFocus: E({
                            root: e,
                            scrollTo: ae,
                            slidesToScroll: N
                        }),
                        slideLooper: y({
                            axis: P,
                            contentSize: q,
                            location: te,
                            scrollSnaps: K,
                            slideSizes: R,
                            slidesInView: ce,
                            viewSize: B,
                            isRtl: z
                        }),
                        slidesInView: ce,
                        slideIndexes: V,
                        target: ne,
                        translate: T({
                            axis: P,
                            container: t,
                            isRtl: z
                        })
                    };
                return se
            }
            var M = {
                align: "center",
                axis: "x",
                containScroll: "",
                containerSelector: "*",
                dragFree: !1,
                draggable: !0,
                draggableClass: "is-draggable",
                draggingClass: "is-dragging",
                inViewThreshold: 0,
                loop: !1,
                selectedClass: "is-selected",
                slidesToScroll: 1,
                speed: 10,
                startIndex: 0,
                isRtl: !1
            };

            function k(e, t) {
                var n, r, i, a, c, u, l = function() {
                        var e = {
                                destroy: [],
                                pointerDown: [],
                                pointerUp: [],
                                init: [],
                                reInit: [],
                                resize: [],
                                scroll: [],
                                select: [],
                                settle: []
                            },
                            t = {
                                emit: function(n) {
                                    return e[n].forEach((function(e) {
                                        return e(n)
                                    })), t
                                },
                                off: function(n, r) {
                                    return e[n] = e[n].filter((function(e) {
                                        return e !== r
                                    })), t
                                },
                                on: function(n, r) {
                                    return e[n] = e[n].concat([r]), t
                                }
                            };
                        return t
                    }(),
                    d = s(),
                    f = (n = function() {
                        if (h) {
                            var t = a.axis.measure(e);
                            b !== t && A(), l.emit("resize")
                        }
                    }, r = 500, i = {
                        id: 0
                    }, function() {
                        window.clearTimeout(i.id), i.id = window.setTimeout(n, r) || 0
                    }),
                    m = A,
                    v = l.on,
                    x = l.off,
                    h = !1,
                    w = o({}, M),
                    b = 0;

                function S() {
                    if (!e) throw new Error("Missing root node 😢");
                    var t, n = w.containerSelector,
                        r = e.querySelector(n);
                    if (!r) throw new Error("Missing container node 😢");
                    t = (c = r).children, u = Array.prototype.slice.call(t)
                }

                function y(t) {
                    if (S(), w = o(w, t), a = O(e, c, u, w, l), b = a.axis.measure(e), d.add(window, "resize", f), a.translate.to(a.scrollBody.location), w.loop) {
                        if (!a.slideLooper.canLoop()) return k(), y({
                            loop: !1
                        });
                        a.slideLooper.loop(u)
                    }
                    w.draggable && u.length && (a.dragHandler.addActivationEvents(), w.draggableClass && g(e, w.draggableClass), w.draggingClass && l.on("pointerDown", E).on("pointerUp", E)), u.length && a.slideFocus.addActivationEvents(u), w.selectedClass && (T(), l.on("select", T).on("pointerUp", T)), h || (setTimeout((function() {
                        return l.emit("init")
                    }), 0), h = !0)
                }

                function E(t) {
                    var n = w.draggingClass;
                    "pointerDown" === t ? g(e, n) : p(e, n)
                }

                function T() {
                    var e = w.selectedClass,
                        t = D(!0);
                    I(!0).forEach((function(t) {
                        return p(u[t], e)
                    })), t.forEach((function(t) {
                        return g(u[t], e)
                    }))
                }

                function k() {
                    a.dragHandler.removeAllEvents(), a.slideFocus.removeAllEvents(), a.animation.stop(), d.removeAll(), a.translate.clear(), a.slideLooper.clear(u), p(e, w.draggableClass), u.forEach((function(e) {
                        return p(e, w.selectedClass)
                    })), l.off("select", T), l.off("pointerUp", T), l.off("pointerDown", E), l.off("pointerUp", E)
                }

                function A(e) {
                    if (h) {
                        var t = o({
                            startIndex: N()
                        }, e);
                        k(), y(t), l.emit("reInit")
                    }
                }

                function D(e) {
                    var t = a[e ? "target" : "location"].get(),
                        n = w.loop ? "removeOffset" : "constrain";
                    return a.slidesInView.check(a.limit[n](t))
                }

                function I(e) {
                    var t = D(e);
                    return a.slideIndexes.filter((function(e) {
                        return -1 === t.indexOf(e)
                    }))
                }

                function L(e, t) {
                    a.scrollBody.useDefaultMass().useDefaultSpeed(), h && a.scrollTo.index(e, t || 0)
                }

                function N() {
                    return a.index.get()
                }
                return y(t), {
                    canScrollNext: function() {
                        return a.index.clone().add(1).get() !== N()
                    },
                    canScrollPrev: function() {
                        return a.index.clone().add(-1).get() !== N()
                    },
                    clickAllowed: function() {
                        return a.dragHandler.clickAllowed()
                    },
                    containerNode: function() {
                        return c
                    },
                    dangerouslyGetEngine: function() {
                        return a
                    },
                    destroy: function() {
                        h && (k(), h = !1, l.emit("destroy"))
                    },
                    off: x,
                    on: v,
                    previousScrollSnap: function() {
                        return a.indexPrevious.get()
                    },
                    reInit: m,
                    scrollNext: function() {
                        L(a.index.clone().add(1).get(), -1)
                    },
                    scrollPrev: function() {
                        L(a.index.clone().add(-1).get(), 1)
                    },
                    scrollProgress: function() {
                        return a.scrollProgress.get(a.location.get())
                    },
                    scrollSnapList: function() {
                        return a.scrollSnaps.map(a.scrollProgress.get)
                    },
                    scrollTo: L,
                    selectedScrollSnap: N,
                    slideNodes: function() {
                        return u
                    },
                    slidesInView: D,
                    slidesNotInView: I
                }
            }
            t.useEmblaCarousel = function(e) {
                void 0 === e && (e = {});
                var t = r.useState(),
                    n = t[0],
                    o = t[1],
                    i = r.useState(),
                    a = i[0],
                    c = i[1],
                    u = r.useRef(e),
                    s = r.useMemo((function() {
                        var t, n;
                        return t = u.current, n = e, Object.keys(t).length === Object.keys(n).length && Object.keys(t).every((function(e) {
                            return !!n.hasOwnProperty(e) && t[e] === n[e]
                        })) || (u.current = e), u.current
                    }), [u, e]);
                return r.useEffect((function() {
                    if ("undefined" != typeof window && window.document && window.document.createElement && a) {
                        var e = k(a, s);
                        return o(e),
                            function() {
                                return e.destroy()
                            }
                    }
                    o(void 0)
                }), [a, s, o]), [c, n]
            }
        }
    }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nZW5lcmFsL0xvYWRlci9Mb2FkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ2VuZXJhbC9CYWNrZ3JvdW5kVGV4dFN0cm9rZS9CYWNrZ3JvdW5kVGV4dFN0cm9rZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdmFsaWRhdGUtcm91dGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWwvQmFja2dyb3VuZFRleHRTdHJva2UvQmFja2dyb3VuZFRleHRTdHJva2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dlbmVyYWwvTG9hZGVyL0xvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3Ntb290aC1zY3JvbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hvb2tzL3VzZS1pcy1tb2JpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9nYXRzYnkvcmVkaXJlY3Rvci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ2VuZXJhbC9idXR0b24vVGV4dEJ1dHRvbi9UZXh0QnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nZW5lcmFsL2J1dHRvbi9UZXh0QnV0dG9uL1RleHRCdXR0b24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hvb2tzL3VzZS1zbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0ByaW90Z2FtZXMvZW1ibGEtY2Fyb3VzZWwvcmVhY3QuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIndpbmRvdyIsImNsYXNzTmFtZSIsInRleHRzIiwic3BlZWQiLCJoYXNQYXJhbGxheCIsImhpZGVPbk1vYmlsZSIsInN0eWxlcyIsInR5cGUiLCJpc0Rlc2t0b3BPbmx5IiwidGV4dCIsImtleSIsIm5hbWUiLCJkb2N1bWVudCIsInRvcCIsImJlaGF2aW9yIiwic2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJUd2VlbkxpdGUiLCJlYXNlIiwiU2luZSIsIm9uVXBkYXRlIiwidXNlSXNNb2JpbGUiLCJ1c2VTdGF0ZSIsImlzTW9iaWxlIiwic2V0SXNNb2JpbGUiLCJ1c2VFZmZlY3QiLCJzZXRNZWRpYU1hdGNoSGFuZGxlciIsImV2ZW50IiwibWVkaWFRdWVyeUxpc3QiLCJzdXBwb3J0ZWRMb2NhbGVzIiwibG9jYWxlIiwiT2JqZWN0IiwiY2hvb3NlTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsIkJDUExvY2FsZSIsInN0b3JlZFZhbHVlIiwicmVnaW9uUHJvcHMiLCJnZXRSZWdpb25Qcm9wZXJ0aWVzIiwiZm91bmQiLCJDbGllbnRTdG9yYWdlIiwiZnJvbUhpc3RvcnkiLCJjb29raWVWYWx1ZSIsImNvb2tpZSIsImxvY2FsZXMiLCJkZXRlY3RGcm9tQWNjZXB0TGFuZ3VhZ2UiLCJyaW90TG9jYWxlVG9CY3A0NyIsInBhdGgiLCJxdWVyeVN0cmluZyIsImRhdGEiLCJ1c2VTdGF0aWNRdWVyeSIsInVybCIsIm5hdmlnYXRlIiwiaHR0cEVxdWl2IiwiY29udGVudCIsImhyZWYiLCJ0byIsImRvd25sb2FkQ29udGVudCIsIm9uQ2xpY2siLCJpY29uIiwibGFiZWwiLCJpbnZlcnRlZCIsInRlc3RJZCIsImNsYXNzZXMiLCJjaGlsZCIsImRhdGEtaWNvbiIsImRhdGEtdGVzdGlkIiwidGFyZ2V0IiwicmVsIiwiZGF0YS1kb3dubG9hZC1jb250ZW50IiwidXNlU2xpZGVyIiwib3B0aW9ucyIsImlzUHJldkJ1dHRvbkVuYWJsZWQiLCJzZXRJc1ByZXZCdXR0b25FbmFibGVkIiwiaXNOZXh0QnV0dG9uRW5hYmxlZCIsInNldElzTmV4dEJ1dHRvbkVuYWJsZWQiLCJhY3RpdmVTbGlkZUluZGV4Iiwic2V0QWN0aXZlU2xpZGVJbmRleCIsInNjcm9sbFNuYXBzIiwic2V0U2Nyb2xsU25hcHMiLCJ1c2VDb250ZXh0IiwiaXNSdGwiLCJpc1JUTCIsInVzZUVtYmxhQ2Fyb3VzZWwiLCJzbGlkZXJSZWYiLCJlbWJsYUFQSSIsImdvVG9QcmV2aW91cyIsInVzZUNhbGxiYWNrIiwiZ29Ub05leHQiLCJnb1RvIiwiaW5kZXgiLCJvblNlbGVjdCIsImFjdGlvbnMiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwicmVhY3QiLCJfZXh0ZW5kcyIsImFzc2lnbiIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsInRoaXMiLCJBbGlnbm1lbnQiLCJwYXJhbXMiLCJ2aWV3U2l6ZSIsImFsaWduIiwicHJlZGVmaW5lZCIsInN0YXJ0IiwiY2VudGVyIiwibiIsImVuZCIsIm1lYXN1cmUiLCJOdW1iZXIiLCJDb3VudGVyIiwibGltaXQiLCJsb29wIiwibWluIiwibWF4Iiwid2l0aGluTGltaXQiLCJjb3VudGVyIiwiZ2V0Iiwic2V0Iiwic2VsZiIsImFkZCIsInNpZ24iLCJNYXRoIiwiYWJzIiwiY2xvbmUiLCJWZWN0b3IxRCIsInZlY3RvciIsImRpdmlkZSIsInJlYWROdW1iZXIiLCJtdWx0aXBseSIsIm5vcm1hbGl6ZSIsInN1YnRyYWN0IiwiRGlyZWN0aW9uIiwiZGlyZWN0aW9uIiwidiIsImQiLCJFdmVudFN0b3JlIiwibGlzdGVuZXJzIiwibm9kZSIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicHVzaCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVBbGwiLCJmaWx0ZXIiLCJyZW1vdmUiLCJMaW1pdCIsInJlYWNoZWRNaW4iLCJyZWFjaGVkTWF4IiwicmVhY2hlZEFueSIsImNvbnN0cmFpbiIsInJlbW92ZU9mZnNldCIsIkRyYWdIYW5kbGVyIiwic2Nyb2xsQm9keSIsImRyYWdGcmVlIiwiYW5pbWF0aW9uIiwiYXhpcyIsImVsZW1lbnQiLCJkcmFnVHJhY2tlciIsImxvY2F0aW9uIiwiZXZlbnRzIiwic2Nyb2xsQXhpcyIsImNyb3NzQXhpcyIsImNyb3NzIiwiZm9jdXNOb2RlcyIsInN0YXJ0U2Nyb2xsIiwic3RhcnRDcm9zcyIsImRyYWdTdGFydFBvaW50IiwiYWN0aXZhdGlvbkV2ZW50cyIsImludGVyYWN0aW9uRXZlbnRzIiwic25hcEZvcmNlQm9vc3QiLCJtb3VzZSIsInRvdWNoIiwiZnJlZUZvcmNlQm9vc3QiLCJiYXNlU3BlZWQiLCJlZGdlTGltaXQiLCJwb2ludGVySXNEb3duIiwicHJldmVudFNjcm9sbCIsInByZXZlbnRDbGljayIsImlzTW91c2UiLCJkb3duIiwiZXZ0IiwiYnV0dG9uIiwiaXNNb3ZpbmciLCJkZWx0YSIsImNsZWFyUHJldmVudENsaWNrIiwiaXNOb3RGb2N1c05vZGUiLCJub2RlTmFtZSIsImluZGV4T2YiLCJwcmV2ZW50RGVmYXVsdCIsInBvaW50ZXJEb3duIiwidXNlRGVmYXVsdE1hc3MiLCJ1c2VTcGVlZCIsIm1vdmUiLCJ1cCIsImFkZEludGVyYWN0aW9uRXZlbnRzIiwicmVhZFBvaW50IiwiZW1pdCIsImNhbmNlbGFibGUiLCJtb3ZlU2Nyb2xsIiwibW92ZUNyb3NzIiwiZGlmZlNjcm9sbCIsImRpZmZDcm9zcyIsImRpZmYiLCJwb2ludGVyTW92ZSIsInJlYWNoZWRMaW1pdCIsInJlc2lzdCIsImZvcmNlQiIsImZvcmNlQSIsInNjcm9sbFRvIiwicmF3Rm9yY2UiLCJwb2ludGVyVXAiLCJmb3JjZSIsInNjcm9sbFRhcmdldCIsInNlZWtOZXh0IiwiYnlEaXN0YW5jZSIsImRlc3RpbmF0aW9uIiwibmV4dCIsImJ5SW5kZXgiLCJkaXN0YW5jZSIsImVkZ2UiLCJhbGxvd2VkRm9yY2UiLCJmYWN0b3IiLCJwb2ludEIiLCJwb2ludEEiLCJjbGljayIsImFkZEFjdGl2YXRpb25FdmVudHMiLCJjbGlja0FsbG93ZWQiLCJyZW1vdmVBbGxFdmVudHMiLCJEcmFnVHJhY2tlciIsInB4VG9QZXJjZW50IiwiY29vcmRzIiwieCIsInkiLCJzdGFydERyYWciLCJkaWZmRHJhZyIsImxhc3REcmFnIiwicG9pbnRWYWx1ZSIsInRyYWNrUG9pbnRzIiwibGFzdE1vdmVUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0b3VjaGVzIiwiYyIsInBvaW50Iiwibm93VGltZSIsImRpZmZUaW1lIiwiY3VycmVudFBvaW50Iiwic2xpY2UiLCJtYXAiLCJ0cmFja1BvaW50Iiwic29ydCIsInAxIiwicDIiLCJyb3VuZFRvRGVjaW1hbHMiLCJkZWNpbWFsUG9pbnRzIiwicG93Iiwicm91bmQiLCJhcnJheUtleXMiLCJhcnJheSIsImtleXMiLCJyZW1vdmVDbGFzcyIsImNsIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGRDbGFzcyIsIlNjcm9sbEJvZHkiLCJtYXNzIiwicm91bmRUb1R3b0RlY2ltYWxzIiwidmVsb2NpdHkiLCJhY2NlbGVyYXRpb24iLCJhdHRyYWN0aW9uIiwic3RhdGUiLCJ1c2VNYXNzIiwic2VlayIsImlTdGFydCIsImlTdG9wIiwib1N0YXJ0Iiwib1N0b3AiLCJtYWduaXR1ZGUiLCJtIiwiYXBwbHlGb3JjZSIsInNldHRsZSIsImhhc1NldHRsZWQiLCJ1cGRhdGUiLCJ1c2VEZWZhdWx0U3BlZWQiLCJTY3JvbGxCb3VuZHMiLCJkaXNhYmxlZCIsInRpbWVvdXQiLCJzaG91bGRDb25zdHJhaW4iLCJzZXRUaW1lb3V0IiwiY29uc3RyYWludCIsInRvZ2dsZUFjdGl2ZSIsImFjdGl2ZSIsIlNjcm9sbENvbnRhaW4iLCJhbGlnbm1lbnQiLCJjb250ZW50U2l6ZSIsInNjcm9sbEJvdW5kcyIsImFsaWduZWRXaXRoaW5WaWV3IiwiY29udGVudEV4Y2VlZHNWaWV3IiwidHJpbSIsImNvbnRhaW5lZFNuYXBzIiwiX2EiLCJzdGFydFNuYXAiLCJlbmRTbmFwIiwibGFzdEluZGV4T2YiLCJmaW5kRHVwbGljYXRlcyIsIlNjcm9sbExvb3BlciIsInZlY3RvcnMiLCJzaG91bGRMb29wIiwibG9vcERpc3RhbmNlIiwiZm9yRWFjaCIsIlNjcm9sbFRhcmdldCIsIm1pbkRpc3RhbmNlIiwiZDEiLCJkMiIsInNob3J0Y3V0IiwidDEiLCJ0MiIsInQzIiwic2hvcnRlc3QiLCJzbmFwIiwidGFyZ2V0U25hcCIsInNjcm9sbFNuYXAiLCJkaWZmVG9TbmFwIiwiZmluZFRhcmdldFNuYXAiLCJmaW5kVGFyZ2V0SW5kZXgiLCJyZWFjaGVkQm91bmQiLCJTbGlkZUxvb3BlciIsImdhcCIsInNjcm9sbExvY2F0aW9uIiwic2xpZGVzSW5WaWV3Iiwic2xpZGVTaXplcyIsImFzY0l0ZW1zIiwiZGVzY0l0ZW1zIiwicmV2ZXJzZSIsImxvb3BQb2ludHMiLCJmaW5kTG9vcFBvaW50cyIsInNsaWRlc0luR2FwIiwiY29uY2F0IiwiZW5kUG9pbnRzIiwibG9vcFN0eWxlIiwicmVtb3ZlU2xpZGVTaXplcyIsImluZGV4ZXMiLCJmcm9tIiwicmVkdWNlIiwiYSIsImlzU3RhcnRFZGdlIiwib2Zmc2V0Iiwic2xpZGVCb3VuZHMiLCJmaW5kU2xpZGVCb3VuZHMiLCJpbml0aWFsIiwiYWx0ZXJlZCIsImIiLCJnZXRUYXJnZXQiLCJjYW5Mb29wIiwiZXZlcnkiLCJjbGVhciIsInNsaWRlcyIsInN0eWxlIiwibG9vcFBvaW50IiwiU2xpZGVGb2N1cyIsInNsaWRlc1RvU2Nyb2xsIiwicm9vdCIsImV2ZW50U3RvcmUiLCJsYXN0VGFiUHJlc3NUaW1lIiwicmVnaXN0ZXJUYWJQcmVzcyIsImtleUNvZGUiLCJhZGRGb2N1c0V2ZW50Iiwic2xpZGUiLCJzY3JvbGxMZWZ0Iiwic2VsZWN0ZWRJbmRleCIsImZsb29yIiwiVHJhbnNsYXRlIiwiY29udGFpbmVyIiwidHJhbnNsYXRlQXhpcyIsImNvbnRhaW5lclN0eWxlIiwidHJhbnNmb3JtIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIkVuZ2luZSIsInZpZXdJblB4Iiwic2Nyb2xsTGVuZ3RoIiwic3RhcnRJbmRleCIsImluVmlld1RocmVzaG9sZCIsImNvbnRhaW5TY3JvbGwiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIkF4aXMiLCJ0b3RhbFBlcmNlbnQiLCJzbGlkZUluZGV4ZXMiLCJzbmFwU2l6ZXMiLCJzaXplIiwiZ3JvdXBzIiwiZ3JvdXBBcnJheSIsImciLCJzIiwiYWxpZ25tZW50cyIsImRpc3RhbmNlc0JldHdlZW4iLCJTY3JvbGxTbmFwIiwiZGVmYXVsdFNuYXBzIiwiY29udGFpbiIsInNob3VsZENvbnRhaW4iLCJ0cmltU25hcHMiLCJpbmRleFByZXZpb3VzIiwiU2Nyb2xsTGltaXQiLCJjYWxsYmFjayIsImFuaW1hdGlvbkZyYW1lIiwiaWZBbmltYXRpbmciLCJjYiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInByb2NlZWQiLCJzdG9wIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJBbmltYXRpb24iLCJlbmdpbmUiLCJzZXR0bGVkIiwiZHJhZ0hhbmRsZXIiLCJzY3JvbGxMb29wZXIiLCJsb29wVmVjdG9ycyIsInNsaWRlTG9vcGVyIiwidHJhbnNsYXRlIiwic3RhcnRMb2NhdGlvbiIsImluZGV4Q3VycmVudCIsInRhcmdldERpc3RhbmNlIiwiZGlzdGFuY2VEaWZmIiwiaW5kZXhEaWZmIiwidGFyZ2V0SW5kZXgiLCJTY3JvbGxUbyIsInRocmVzaG9sZCIsImxvb3BPZmZzZXQiLCJ0aHJlc2hvbGRzIiwiY2hlY2siLCJsaXN0Iiwic2xpZGVCb3VuZCIsIlNsaWRlc0luVmlldyIsInNjcm9sbFByb2dyZXNzIiwic2xpZGVGb2N1cyIsImRlZmF1bHRPcHRpb25zIiwiY29udGFpbmVyU2VsZWN0b3IiLCJkcmFnZ2FibGUiLCJkcmFnZ2FibGVDbGFzcyIsImRyYWdnaW5nQ2xhc3MiLCJzZWxlY3RlZENsYXNzIiwiRW1ibGFDYXJvdXNlbCIsInNsaWRlclJvb3QiLCJ1c2VyT3B0aW9ucyIsInRpbWUiLCJkZXN0cm95IiwiaW5pdCIsInJlSW5pdCIsInJlc2l6ZSIsInNlbGVjdCIsImUiLCJvZmYiLCJvbiIsIkV2ZW50RW1pdHRlciIsImRlYm91bmNlZFJlc2l6ZSIsImFjdGl2YXRlZCIsIm5ld1Jvb3RFbGVtZW50U2l6ZSIsInJvb3RFbGVtZW50U2l6ZSIsInJlQWN0aXZhdGUiLCJpZCIsImNsZWFyVGltZW91dCIsInN0b3JlRWxlbWVudHMiLCJFcnJvciIsIm5vZGVMaXN0Iiwic2VsZWN0b3IiLCJzbGlkZXJDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiY2hpbGRyZW4iLCJBcnJheSIsImFjdGl2YXRlIiwicGFydGlhbE9wdGlvbnMiLCJkZUFjdGl2YXRlIiwidG9nZ2xlRHJhZ2dpbmdDbGFzcyIsInRvZ2dsZVNlbGVjdGVkQ2xhc3MiLCJpblZpZXciLCJzbGlkZXNOb3RJblZpZXciLCJuZXdPcHRpb25zIiwic2VsZWN0ZWRTY3JvbGxTbmFwIiwiY2FuU2Nyb2xsTmV4dCIsImNhblNjcm9sbFByZXYiLCJjb250YWluZXJOb2RlIiwiZGFuZ2Vyb3VzbHlHZXRFbmdpbmUiLCJwcmV2aW91c1Njcm9sbFNuYXAiLCJzY3JvbGxOZXh0Iiwic2Nyb2xsUHJldiIsInNjcm9sbFNuYXBMaXN0Iiwic2xpZGVOb2RlcyIsImVtYmxhIiwic2V0RW1ibGEiLCJfYiIsInZpZXdwb3J0Iiwic2V0Vmlld3BvcnQiLCJzdG9yZWRPcHRpb25zIiwidXNlUmVmIiwiYWN0aXZlT3B0aW9ucyIsInVzZU1lbW8iLCJvYmplY3RBIiwib2JqZWN0QiIsImN1cnJlbnQiLCJvYmplY3RLZXkiLCJjcmVhdGVFbGVtZW50IiwibmV3RW1ibGFfMSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Im1GQUNBQSxFQUFPQyxRQUFVLENBQUMsT0FBUywrQkFBK0IsY0FBZ0IseUMsdUJDQTFFRCxFQUFPQyxRQUFVLENBQUMscUJBQXVCLDJEQUEyRCxhQUFlLG1EQUFtRCxLQUFPLDZDLG9DQ0Q5SixlQUNiLDBCQUFXQyxRQUNGQSwrQkFBUCx1QixvQ0NGSiwwREE4Q0EsSUFsQ2tFLFNBQUMsR0FBRCxrQkFDaEVDLE9BRGdFLHFCQUVoRUMsT0FGZ0UsTUFFeEQsQ0FBQyxTQUZ1RCx3QkFHaEVDLE9BSGdFLDJCQUloRUMsT0FKZ0UsMEJBS2hFQyxPQUxnRSxnQkFPaEUseUJBQ0VKLFVBQVMsV0FDTEssSUFESyxrQ0FFTEQsRUFB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TyxLQUFLK08sR0FBU3ZaLFNBQVdwRSxPQUFPNE8sS0FBS2dQLEdBQVN4WixRQUFVcEUsT0FBTzRPLEtBQUsrTyxHQUFTL0ksT0FBTSxTQUFVa0osR0FDekcsUUFBS0YsRUFBUXJaLGVBQWV1WixJQUNyQkgsRUFBUUcsS0FBZUYsRUFBUUUsUUFvQnBDUCxFQUFjTSxRQUFVdGIsR0FHbkJnYixFQUFjTSxVQUNwQixDQUFDTixFQUFlaGIsSUFZbkIsT0FYQXdCLEVBQU1yRSxXQUFVLFdBQ2QsR0FoQzBCLG9CQUFYekIsUUFBMEJBLE9BQU9ZLFVBQVlaLE9BQU9ZLFNBQVNrZixlQWdDekRWLEVBQVUsQ0FDM0IsSUFBSVcsRUFBYTVELEVBQWNpRCxFQUFVSSxHQUV6QyxPQURBTixFQUFTYSxHQUNGLFdBQ0wsT0FBT0EsRUFBV3hELFdBR3BCMkMsT0FBU2MsS0FFVixDQUFDWixFQUFVSSxFQUFlTixJQUN0QixDQUFDRyxFQUFhSiIsImZpbGUiOiJkMDhjODJlM2JmZTk5ZjNhNGYwNmNiOTIyNTZlNDIwOWNiMDVjNzAyLTRkZjNjYzkwMDQ3ZGIxNTU4MTEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImxvYWRlclwiOlwiTG9hZGVyLW1vZHVsZS0tbG9hZGVyLS0zWjBTeVwiLFwiYW5pbWF0ZVN0cm9rZVwiOlwiTG9hZGVyLW1vZHVsZS0tYW5pbWF0ZS1zdHJva2UtLTNScE1kXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJiYWNrZ3JvdW5kVGV4dFN0cm9rZVwiOlwiQmFja2dyb3VuZFRleHRTdHJva2UtbW9kdWxlLS1iYWNrZ3JvdW5kVGV4dFN0cm9rZS0tQVZ2WUlcIixcImhpZGVPbk1vYmlsZVwiOlwiQmFja2dyb3VuZFRleHRTdHJva2UtbW9kdWxlLS1oaWRlT25Nb2JpbGUtLW0yZDJuXCIsXCJ0ZXh0XCI6XCJCYWNrZ3JvdW5kVGV4dFN0cm9rZS1tb2R1bGUtLXRleHQtLUdCNFJTXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKVxuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUubWF0Y2goL15cXC9cXHd7Mn0tXFx3ezJ9XFwvL2cpO1xuXG4gIHJldHVybiB0cnVlOyAvLyBEb24ndCBjaGVjayBpZiBpdCdzIFNTUmluZy5cbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhcmFsbGF4IGZyb20gJy4uLy4uL2NvbnRlbnQvUGFyYWxsYXgvUGFyYWxsYXgnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0JhY2tncm91bmRUZXh0U3Ryb2tlLm1vZHVsZS5zY3NzJztcblxuaW50ZXJmYWNlIEJhY2tncm91bmRUZXh0U3Ryb2tlUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHRleHRzPzogc3RyaW5nW107XG4gIHNwZWVkPzogbnVtYmVyO1xuICBoYXNQYXJhbGxheD86IGJvb2xlYW47XG4gIGhpZGVPbk1vYmlsZT86IGJvb2xlYW47XG59XG5cbmNvbnN0IEJhY2tncm91bmRUZXh0U3Ryb2tlOiBSZWFjdC5GQzxCYWNrZ3JvdW5kVGV4dFN0cm9rZVByb3BzPiA9ICh7XG4gIGNsYXNzTmFtZSA9ICcnLFxuICB0ZXh0cyA9IFsnV2UgYXJlJywgJ1ZBTE9SQU5UJ10sXG4gIHNwZWVkID0gLTMsXG4gIGhhc1BhcmFsbGF4ID0gZmFsc2UsXG4gIGhpZGVPbk1vYmlsZSA9IHRydWUsXG59KSA9PiAoXG4gIDxkaXZcbiAgICBjbGFzc05hbWU9e2BcbiAgICAgICR7c3R5bGVzLmJhY2tncm91bmRUZXh0U3Ryb2tlfSBcbiAgICAgICR7aGlkZU9uTW9iaWxlID8gc3R5bGVzLmhpZGVPbk1vYmlsZSA6ICcnfVxuICAgICAgYH1cbiAgPlxuICAgIHtoYXNQYXJhbGxheCA/IChcbiAgICAgIDxQYXJhbGxheFxuICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXN0cm9rZSAke2NsYXNzTmFtZX0gJHtzdHlsZXMudGV4dH1gfVxuICAgICAgICB0eXBlPXsnaDInfVxuICAgICAgICBzcGVlZD17c3BlZWR9XG4gICAgICAgIGlzRGVza3RvcE9ubHk9e3RydWV9XG4gICAgICA+XG4gICAgICAgIHt0ZXh0cy5tYXAodGV4dCA9PiAoXG4gICAgICAgICAgPHNwYW4ga2V5PXt0ZXh0fT57dGV4dH08L3NwYW4+XG4gICAgICAgICkpfVxuICAgICAgPC9QYXJhbGxheD5cbiAgICApIDogKFxuICAgICAgPGgyIGNsYXNzTmFtZT17YHRleHQtc3Ryb2tlICR7Y2xhc3NOYW1lfSAke3N0eWxlcy50ZXh0fWB9PlxuICAgICAgICB7dGV4dHMubWFwKHRleHQgPT4gKFxuICAgICAgICAgIDxzcGFuIGtleT17dGV4dH0+e3RleHR9PC9zcGFuPlxuICAgICAgICApKX1cbiAgICAgIDwvaDI+XG4gICAgKX1cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kVGV4dFN0cm9rZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uL0ljb24nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvYWRlci5tb2R1bGUuc2Nzcyc7XG5cbmludGVyZmFjZSBMb2FkZXJQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuY29uc3QgTG9hZGVyOiBSZWFjdC5GQzxMb2FkZXJQcm9wcz4gPSAoeyBjbGFzc05hbWUgPSAnJyB9KSA9PiAoXG4gIDxJY29uIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSAke3N0eWxlcy5sb2FkZXJ9YH0gbmFtZT1cIkxvZ29WXCIgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcbiIsImltcG9ydCB7IFR3ZWVuTGl0ZSwgU2luZSB9IGZyb20gJ2dzYXAnO1xuXG5leHBvcnQgZGVmYXVsdCAodG9wOiBudW1iZXIpID0+IHtcbiAgY29uc3QgbmF0aXZlU21vb3RoU2Nyb2xsID0gJ3Njcm9sbEJlaGF2aW9yJyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbiAgaWYgKG5hdGl2ZVNtb290aFNjcm9sbCkge1xuICAgIHdpbmRvdy5zY3JvbGwoe1xuICAgICAgdG9wLFxuICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHNjcm9sbCA9IHsgdG9wOiB3aW5kb3cucGFnZVlPZmZzZXQgfTtcblxuICAgIFR3ZWVuTGl0ZS50byhzY3JvbGwsIDAuNCwge1xuICAgICAgdG9wLFxuICAgICAgZWFzZTogU2luZS5lYXNlT3V0LFxuICAgICAgb25VcGRhdGU6ICgpID0+IHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbC50b3ApO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCB1c2VJc01vYmlsZSA9ICgpID0+IHtcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblxuICAgIGNvbnN0IHNldE1lZGlhTWF0Y2hIYW5kbGVyID0gKFxuICAgICAgZXZlbnQ6IE1lZGlhUXVlcnlMaXN0RXZlbnQgfCBNZWRpYVF1ZXJ5TGlzdCxcbiAgICApOiB2b2lkID0+IHtcbiAgICAgIHNldElzTW9iaWxlKGV2ZW50Lm1hdGNoZXMpO1xuICAgIH07XG5cbiAgICBjb25zdCBtZWRpYVF1ZXJ5TGlzdCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAxMDIzcHgpJyk7XG5cbiAgICBzZXRNZWRpYU1hdGNoSGFuZGxlcihtZWRpYVF1ZXJ5TGlzdCk7XG5cbiAgICBtZWRpYVF1ZXJ5TGlzdC5hZGRMaXN0ZW5lcihzZXRNZWRpYU1hdGNoSGFuZGxlcik7XG5cbiAgICByZXR1cm4gKCkgPT4gbWVkaWFRdWVyeUxpc3QucmVtb3ZlTGlzdGVuZXIoc2V0TWVkaWFNYXRjaEhhbmRsZXIpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGlzTW9iaWxlO1xufTtcbiIsImltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5pbXBvcnQgeyB1c2VTdGF0aWNRdWVyeSwgZ3JhcGhxbCB9IGZyb20gJ2dhdHNieSc7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gJ2dhdHNieS1saW5rJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbG9jYWxlIGZyb20gJ2xvY2FsZSc7XG5pbXBvcnQgQkNQTG9jYWxlIGZyb20gJy4uLy4uL2RhdGEvZW51bXMvYmNwLWxvY2FsZSc7XG5pbXBvcnQgQ2xpZW50U3RvcmFnZSBmcm9tICcuLi8uLi9kYXRhL2VudW1zL2NsaWVudC1zdG9yYWdlJztcbmltcG9ydCBjb29raWUgZnJvbSAnLi4vLi4vdXRpbHMvY29va2llJztcbmltcG9ydCByaW90TG9jYWxlVG9CY3A0NyBmcm9tICcuLi8uLi91dGlscy9yaW90LWxvY2FsZS10by1iY3A0Nyc7XG5pbXBvcnQgeyBnZXRSZWdpb25Qcm9wZXJ0aWVzIH0gZnJvbSAnLi4vLi4vY29uZmlnL3JlZ2lvbkNvbmZpZyc7XG5cbmNvbnN0IHN1cHBvcnRlZExvY2FsZXMgPSBuZXcgbG9jYWxlLkxvY2FsZXMoT2JqZWN0LmtleXMoQkNQTG9jYWxlKSk7XG5cbmNvbnN0IGRldGVjdEZyb21BY2NlcHRMYW5ndWFnZSA9ICgpOiBzdHJpbmcgfCBudWxsID0+IHtcbiAgbGV0IGZvdW5kO1xuXG4gIGNvbnN0IGNvb2tpZVZhbHVlID1cbiAgICBjb29raWUucmVhZChDbGllbnRTdG9yYWdlLkNPT0tJRV9BQ0NFUFRfTEFOR1VBR0VfT1ZFUlJJREUpIHx8XG4gICAgY29va2llLnJlYWQoQ2xpZW50U3RvcmFnZS5DT09LSUVfQUNDRVBUX0xBTkdVQUdFKTtcblxuICBpZiAoY29va2llVmFsdWUpIHtcbiAgICBjb25zdCBsb2NhbGVzID0gbmV3IGxvY2FsZS5Mb2NhbGVzKGNvb2tpZVZhbHVlKTtcbiAgICBmb3VuZCA9IGxvY2FsZXMuYmVzdChzdXBwb3J0ZWRMb2NhbGVzKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgZm91bmQgPSBmb3VuZC50b1N0cmluZygpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn07XG5cbmZ1bmN0aW9uIGxvY2FsZUZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gIGNvbnN0IHN0b3JlZFZhbHVlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFxuICAgIENsaWVudFN0b3JhZ2UuTE9DQUxTVE9SQUdFX0RFRklORURfTEFOR1VBR0UsXG4gICk7XG4gIHJldHVybiBzdG9yZWRWYWx1ZSAmJiBPYmplY3Qua2V5cyhCQ1BMb2NhbGUpLmluY2x1ZGVzKHN0b3JlZFZhbHVlKVxuICAgID8gc3RvcmVkVmFsdWVcbiAgICA6IG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCBjaG9vc2VMb2NhbGUgPSAoZGVmYXVsdExvY2FsZSA9IEJDUExvY2FsZVsnZW4tdXMnXSk6IHN0cmluZyA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBkZWZhdWx0TG9jYWxlO1xuICB9XG4gIGNvbnN0IHJlZ2lvblByb3BzID0gZ2V0UmVnaW9uUHJvcGVydGllcygpO1xuXG4gIGxldCBmb3VuZCA9IGxvY2FsZUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgbGV0IGZyb21IaXN0b3J5ID0gISFmb3VuZDtcblxuICAvLyBjaGVjayBBY2NlcHQtTGFuZ3VhZ2UgaGVhZGVyIGFuZCBicm93c2VyIGxhbmd1YWdlIHNldHRpbmcgZm9yIGxvY2FsZVxuICBpZiAoIWZvdW5kKSB7XG4gICAgZm91bmQgPSBkZXRlY3RGcm9tQWNjZXB0TGFuZ3VhZ2UoKTtcbiAgICBmcm9tSGlzdG9yeSA9IGZhbHNlO1xuICB9XG5cbiAgLy8gaWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBkZWZhdWx0TG9jYWxlXG4gIGlmICghZm91bmQpIHtcbiAgICBmb3VuZCA9IGRlZmF1bHRMb2NhbGU7XG4gICAgZnJvbUhpc3RvcnkgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIGNoZWNrIGlmIGxvY2FsZSBpcyBnb3Zlcm5lZCBieSBHRFBSXG4gIGlmICghZnJvbUhpc3RvcnkgJiYgcmVnaW9uUHJvcHMubGFuZykge1xuICAgIGZvdW5kID0gcmlvdExvY2FsZVRvQmNwNDcocmVnaW9uUHJvcHMubGFuZyk7XG4gIH1cblxuICAvLyBzZXQgbG9jYWxlIGFzIGxvY2FsU3RvcmFnZSBsYW5ndWFnZVxuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgQ2xpZW50U3RvcmFnZS5MT0NBTFNUT1JBR0VfREVGSU5FRF9MQU5HVUFHRSxcbiAgICBmb3VuZCBhcyBzdHJpbmcsXG4gICk7XG5cbiAgLy8gcmV0dXJuIGxvY2FsZVxuICByZXR1cm4gZm91bmQgYXMgc3RyaW5nO1xufTtcblxuaW50ZXJmYWNlIFJlZGlyZWN0b3JQcm9wcyB7XG4gIHBhdGg/OiBzdHJpbmc7IC8vIE11c3QgaW5jbHVkZSBsZWFkaW5nIHNsYXNoXG4gIHF1ZXJ5U3RyaW5nPzogc3RyaW5nO1xufVxuXG5jb25zdCBSZWRpcmVjdG9yOiBSZWFjdC5GQzxSZWRpcmVjdG9yUHJvcHM+ID0gKHtcbiAgcGF0aCA9ICcvJyxcbiAgcXVlcnlTdHJpbmcgPSAnJyxcbn0pID0+IHtcbiAgY29uc3QgZGF0YSA9IHVzZVN0YXRpY1F1ZXJ5KGdyYXBocWxgXG4gICAgcXVlcnkgUmVkaXJlY3RvclF1ZXJ5IHtcbiAgICAgIHNpdGUge1xuICAgICAgICBzaXRlTWV0YWRhdGEge1xuICAgICAgICAgIGNvbmZpZyB7XG4gICAgICAgICAgICBTSVRFX0RPTUFJTlxuICAgICAgICAgICAgREVGQVVMVF9MT0NBTEVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGApO1xuICBjb25zdCBsb2NhbGUgPSBjaG9vc2VMb2NhbGUoXG4gICAgcmlvdExvY2FsZVRvQmNwNDcoZGF0YS5zaXRlLnNpdGVNZXRhZGF0YS5jb25maWcuREVGQVVMVF9MT0NBTEUpLFxuICApO1xuXG4gIC8vIHRvZG8gYnJpbmcgaW4gcGFyYW1zIGFzIGEgZGljdGlvbmFyeVxuICBsZXQgdXJsID0gYGh0dHBzOi8vJHtkYXRhLnNpdGUuc2l0ZU1ldGFkYXRhLmNvbmZpZy5TSVRFX0RPTUFJTn0vJHtsb2NhbGV9JHtwYXRofWA7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBgdW5kZWZpbmVkYCkge1xuICAgIHVybCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lfSR7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucG9ydCA/IGA6JHt3aW5kb3cubG9jYXRpb24ucG9ydH1gIDogJydcbiAgICB9LyR7bG9jYWxlfSR7cGF0aH0ke3F1ZXJ5U3RyaW5nfWA7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UodXJsKTtcbiAgfVxuXG4gIC8vIFByZWZlciBHYXRzYnkgbmF2aWdhdGlvbiByYXRoZXJuIHRoYW4gbWV0YSB0YWcsIGZhbGxiYWNrIHRvIG1ldGEgcmVmcmVzaC5cbiAgbmF2aWdhdGUodXJsKTtcblxuICByZXR1cm4gKFxuICAgIDxIZWxtZXQ+XG4gICAgICA8bWV0YSBodHRwRXF1aXY9XCJyZWZyZXNoXCIgY29udGVudD17YDA7IHVybD0ke3VybH1gfSAvPlxuICAgIDwvSGVsbWV0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVkaXJlY3RvcjtcbiIsImltcG9ydCB7IExpbmsgfSBmcm9tICdnYXRzYnknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGljb25zIH0gZnJvbSAnLi4vLi4vSWNvbi9pY29ucyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9JY29uL0ljb24nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RleHRCdXR0b24ubW9kdWxlLnNjc3MnO1xuXG5pbnRlcmZhY2UgVGV4dEJ1dHRvblByb3BzIHtcbiAgaHJlZj86IHN0cmluZztcbiAgdG8/OiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiAoZXZlbnQ/OiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB2b2lkO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGljb24/OiBrZXlvZiB0eXBlb2YgaWNvbnM7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBkb3dubG9hZENvbnRlbnQ/OiBzdHJpbmc7XG4gIGludmVydGVkPzogYm9vbGVhbjtcbiAgdGVzdElkPzogc3RyaW5nO1xufVxuXG5jb25zdCBUZXh0QnV0dG9uOiBSZWFjdC5GQzxUZXh0QnV0dG9uUHJvcHM+ID0gKHtcbiAgaHJlZixcbiAgdG8sXG4gIGRvd25sb2FkQ29udGVudCxcbiAgb25DbGljayxcbiAgY2xhc3NOYW1lLFxuICBpY29uLFxuICBsYWJlbCxcbiAgaW52ZXJ0ZWQgPSBmYWxzZSxcbiAgdGVzdElkLFxufSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gYCR7Y2xhc3NOYW1lfSAke3N0eWxlcy50ZXh0QnV0dG9ufSBidXR0b24gJHtcbiAgICBpbnZlcnRlZCA/IHN0eWxlcy5pbnZlcnRlZCA6ICcnXG4gIH1gO1xuICBjb25zdCBjaGlsZCA9IChcbiAgICA8PlxuICAgICAge2xhYmVsICYmIDxwIGNsYXNzTmFtZT17YGhlYWRpbmctMDYgJHtzdHlsZXMubGFiZWx9YH0+e2xhYmVsfTwvcD59XG4gICAgICB7aWNvbiAmJiA8SWNvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBuYW1lPXtpY29ufSAvPn1cbiAgICA8Lz5cbiAgKTtcblxuICBpZiAodG8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmtcbiAgICAgICAgdG89e3RvfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICAgIGRhdGEtaWNvbj17aWNvbn1cbiAgICAgICAgZGF0YS10ZXN0aWQ9e3Rlc3RJZH1cbiAgICAgID5cbiAgICAgICAge2NoaWxkfVxuICAgICAgPC9MaW5rPlxuICAgICk7XG4gIH0gZWxzZSBpZiAoaHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8YVxuICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICAgIGRhdGEtaWNvbj17aWNvbn1cbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgIGRhdGEtdGVzdGlkPXt0ZXN0SWR9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZH1cbiAgICAgIDwvYT5cbiAgICApO1xuICB9IGVsc2UgaWYgKGRvd25sb2FkQ29udGVudCkge1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGRhdGEtZG93bmxvYWQtY29udGVudD17ZG93bmxvYWRDb250ZW50fVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICAgIGRhdGEtaWNvbj17aWNvbn1cbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgZGF0YS10ZXN0aWQ9e3Rlc3RJZH1cbiAgICAgID5cbiAgICAgICAge2NoaWxkfVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgZGF0YS1pY29uPXtpY29ufVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIGRhdGEtdGVzdGlkPXt0ZXN0SWR9XG4gICAgPlxuICAgICAge2NoaWxkfVxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dEJ1dHRvbjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJpY29uXCI6XCJUZXh0QnV0dG9uLW1vZHVsZS0taWNvbi0tMTEzalVcIixcInRleHRCdXR0b25cIjpcIlRleHRCdXR0b24tbW9kdWxlLS10ZXh0QnV0dG9uLS0yd20zS1wiLFwiaW52ZXJ0ZWRcIjpcIlRleHRCdXR0b24tbW9kdWxlLS1pbnZlcnRlZC0tMnBBSE1cIixcImxhYmVsXCI6XCJUZXh0QnV0dG9uLW1vZHVsZS0tbGFiZWwtLXRibFJ0XCJ9OyIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRW1ibGFDYXJvdXNlbCB9IGZyb20gJ0ByaW90Z2FtZXMvZW1ibGEtY2Fyb3VzZWwvcmVhY3QnO1xuaW1wb3J0IHsgRW1ibGFPcHRpb25zVHlwZSB9IGZyb20gJ0ByaW90Z2FtZXMvZW1ibGEtY2Fyb3VzZWwnO1xuaW1wb3J0IExvY2FsZSBmcm9tICcuLi8uLi9kYXRhL2NvbnRleHRzL3Jpb3QtbG9jYWxlJztcbmltcG9ydCBpc1JUTCBmcm9tICcuLi8uLi91dGlscy9pcy1ydGwnO1xuXG5leHBvcnQgY29uc3QgdXNlU2xpZGVyID0gKG9wdGlvbnM/OiBFbWJsYU9wdGlvbnNUeXBlKSA9PiB7XG4gIGNvbnN0IFtpc1ByZXZCdXR0b25FbmFibGVkLCBzZXRJc1ByZXZCdXR0b25FbmFibGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KFxuICAgIGZhbHNlLFxuICApO1xuICBjb25zdCBbaXNOZXh0QnV0dG9uRW5hYmxlZCwgc2V0SXNOZXh0QnV0dG9uRW5hYmxlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihcbiAgICBmYWxzZSxcbiAgKTtcbiAgY29uc3QgW2FjdGl2ZVNsaWRlSW5kZXgsIHNldEFjdGl2ZVNsaWRlSW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW3Njcm9sbFNuYXBzLCBzZXRTY3JvbGxTbmFwc10gPSB1c2VTdGF0ZTxBcnJheTxudW1iZXI+PihbXSk7XG5cbiAgY29uc3QgbG9jYWxlID0gdXNlQ29udGV4dChMb2NhbGUpO1xuXG4gIGNvbnN0IGlzUnRsID0gaXNSVEwobG9jYWxlKTtcblxuICBjb25zdCBbc2xpZGVyUmVmLCBlbWJsYUFQSV0gPSB1c2VFbWJsYUNhcm91c2VsKHtcbiAgICAuLi5vcHRpb25zLFxuICAgIGlzUnRsLFxuICB9KTtcblxuICBjb25zdCBnb1RvUHJldmlvdXMgPSB1c2VDYWxsYmFjaygoKSA9PiBlbWJsYUFQST8uc2Nyb2xsUHJldigpLCBbZW1ibGFBUEldKTtcbiAgY29uc3QgZ29Ub05leHQgPSB1c2VDYWxsYmFjaygoKSA9PiBlbWJsYUFQST8uc2Nyb2xsTmV4dCgpLCBbZW1ibGFBUEldKTtcbiAgY29uc3QgZ29UbyA9IHVzZUNhbGxiYWNrKGluZGV4ID0+IGVtYmxhQVBJPy5zY3JvbGxUbyhpbmRleCksIFtlbWJsYUFQSV0pO1xuXG4gIGNvbnN0IG9uU2VsZWN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghZW1ibGFBUEkpIHJldHVybjtcblxuICAgIHNldEFjdGl2ZVNsaWRlSW5kZXgoZW1ibGFBUEkuc2VsZWN0ZWRTY3JvbGxTbmFwKCkpO1xuICAgIHNldElzUHJldkJ1dHRvbkVuYWJsZWQoZW1ibGFBUEkuY2FuU2Nyb2xsUHJldigpKTtcbiAgICBzZXRJc05leHRCdXR0b25FbmFibGVkKGVtYmxhQVBJLmNhblNjcm9sbE5leHQoKSk7XG4gIH0sIFtlbWJsYUFQSV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFlbWJsYUFQSSkgcmV0dXJuO1xuXG4gICAgb25TZWxlY3QoKTtcbiAgICBzZXRTY3JvbGxTbmFwcyhlbWJsYUFQSS5zY3JvbGxTbmFwTGlzdCgpKTtcbiAgICBlbWJsYUFQSS5vbignc2VsZWN0Jywgb25TZWxlY3QpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGVtYmxhQVBJLm9mZignc2VsZWN0Jywgb25TZWxlY3QpO1xuICAgIH07XG4gIH0sIFtlbWJsYUFQSSwgb25TZWxlY3RdKTtcblxuICByZXR1cm4ge1xuICAgIHNsaWRlclJlZixcbiAgICBkYXRhOiB7XG4gICAgICBpc1ByZXZCdXR0b25FbmFibGVkLFxuICAgICAgaXNOZXh0QnV0dG9uRW5hYmxlZCxcbiAgICAgIGFjdGl2ZVNsaWRlSW5kZXgsXG4gICAgICBzY3JvbGxTbmFwcyxcbiAgICB9LFxuICAgIGFjdGlvbnM6IHtcbiAgICAgIGdvVG9QcmV2aW91cyxcbiAgICAgIGdvVG9OZXh0LFxuICAgICAgZ29UbyxcbiAgICB9LFxuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zb3J0LmpzXCIpO1xuXG5yZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnJlZHVjZS5qc1wiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIEFsaWdubWVudChwYXJhbXMpIHtcbiAgdmFyIHZpZXdTaXplID0gcGFyYW1zLnZpZXdTaXplLFxuICAgICAgYWxpZ24gPSBwYXJhbXMuYWxpZ247XG4gIHZhciBwcmVkZWZpbmVkID0ge1xuICAgIHN0YXJ0OiBzdGFydCxcbiAgICBjZW50ZXI6IGNlbnRlcixcbiAgICBlbmQ6IGVuZFxuICB9O1xuXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZnVuY3Rpb24gY2VudGVyKG4pIHtcbiAgICByZXR1cm4gZW5kKG4pIC8gMjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuZChuKSB7XG4gICAgcmV0dXJuIHZpZXdTaXplIC0gbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBlcmNlbnQoKSB7XG4gICAgcmV0dXJuIHZpZXdTaXplICogTnVtYmVyKGFsaWduKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lYXN1cmUobikge1xuICAgIGlmICh0eXBlb2YgYWxpZ24gPT09ICdudW1iZXInKSByZXR1cm4gcGVyY2VudCgpO1xuICAgIHJldHVybiBwcmVkZWZpbmVkW2FsaWduXShuKTtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIG1lYXN1cmU6IG1lYXN1cmVcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIEFuaW1hdGlvbihjYWxsYmFjaykge1xuICB2YXIgYW5pbWF0aW9uRnJhbWUgPSAwO1xuXG4gIGZ1bmN0aW9uIGlmQW5pbWF0aW5nKGFjdGl2ZSwgY2IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGFjdGl2ZSA9PT0gISFhbmltYXRpb25GcmFtZSkgY2IoKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgYW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgICBhbmltYXRpb25GcmFtZSA9IDA7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBwcm9jZWVkOiBpZkFuaW1hdGluZyh0cnVlLCBzdGFydCksXG4gICAgc3RhcnQ6IGlmQW5pbWF0aW5nKGZhbHNlLCBzdGFydCksXG4gICAgc3RvcDogaWZBbmltYXRpbmcodHJ1ZSwgc3RvcClcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIEF4aXMoYXhpcykge1xuICB2YXIgc2Nyb2xsID0gYXhpcyA9PT0gJ3knID8gJ3knIDogJ3gnO1xuICB2YXIgY3Jvc3MgPSBheGlzID09PSAneScgPyAneCcgOiAneSc7XG5cbiAgZnVuY3Rpb24gbWVhc3VyZShub2RlKSB7XG4gICAgdmFyIF9hID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgd2lkdGggPSBfYS53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xuXG4gICAgcmV0dXJuIHNjcm9sbCA9PT0gJ3gnID8gd2lkdGggOiBoZWlnaHQ7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBjcm9zczogY3Jvc3MsXG4gICAgbWVhc3VyZTogbWVhc3VyZSxcbiAgICBzY3JvbGw6IHNjcm9sbFxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gQ291bnRlcihwYXJhbXMpIHtcbiAgdmFyIHN0YXJ0ID0gcGFyYW1zLnN0YXJ0LFxuICAgICAgbGltaXQgPSBwYXJhbXMubGltaXQsXG4gICAgICBsb29wID0gcGFyYW1zLmxvb3A7XG4gIHZhciBtaW4gPSBsaW1pdC5taW4sXG4gICAgICBtYXggPSBsaW1pdC5tYXg7XG4gIHZhciB0eXBlID0gbG9vcCA/ICdsb29wJyA6ICdjb25zdHJhaW4nO1xuICB2YXIgd2l0aGluTGltaXQgPSBsaW1pdFt0eXBlXTtcbiAgdmFyIGNvdW50ZXIgPSB3aXRoaW5MaW1pdChzdGFydCk7XG5cbiAgZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0KG4pIHtcbiAgICBjb3VudGVyID0gd2l0aGluTGltaXQobik7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBhZGQobikge1xuICAgIGlmIChuICE9PSAwKSB7XG4gICAgICB2YXIgc2lnbiA9IG4gLyBNYXRoLmFicyhuKTtcbiAgICAgIHNldChnZXQoKSArIHNpZ24pO1xuICAgICAgcmV0dXJuIGFkZChuICsgc2lnbiAqIC0xKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb25lKCkge1xuICAgIHJldHVybiBDb3VudGVyKHtcbiAgICAgIHN0YXJ0OiBnZXQoKSxcbiAgICAgIGxpbWl0OiBsaW1pdCxcbiAgICAgIGxvb3A6IGxvb3BcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGFkZDogYWRkLFxuICAgIGNsb25lOiBjbG9uZSxcbiAgICBnZXQ6IGdldCxcbiAgICBtYXg6IG1heCxcbiAgICBtaW46IG1pbixcbiAgICBzZXQ6IHNldFxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gVmVjdG9yMUQodmFsdWUpIHtcbiAgdmFyIHZlY3RvciA9IHZhbHVlO1xuXG4gIGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gdmVjdG9yO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0KG4pIHtcbiAgICB2ZWN0b3IgPSByZWFkTnVtYmVyKG4pO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkKG4pIHtcbiAgICB2ZWN0b3IgKz0gcmVhZE51bWJlcihuKTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN1YnRyYWN0KG4pIHtcbiAgICB2ZWN0b3IgLT0gcmVhZE51bWJlcihuKTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIG11bHRpcGx5KG4pIHtcbiAgICB2ZWN0b3IgKj0gbjtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpdmlkZShuKSB7XG4gICAgdmVjdG9yIC89IG47XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemUoKSB7XG4gICAgaWYgKHZlY3RvciAhPT0gMCkgZGl2aWRlKHZlY3Rvcik7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiByZWFkTnVtYmVyKG4pIHtcbiAgICByZXR1cm4gdHlwZW9mIG4gPT09ICdudW1iZXInID8gbiA6IG4uZ2V0KCk7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBhZGQ6IGFkZCxcbiAgICBkaXZpZGU6IGRpdmlkZSxcbiAgICBnZXQ6IGdldCxcbiAgICBtdWx0aXBseTogbXVsdGlwbHksXG4gICAgbm9ybWFsaXplOiBub3JtYWxpemUsXG4gICAgc2V0OiBzZXQsXG4gICAgc3VidHJhY3Q6IHN1YnRyYWN0XG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBEaXJlY3Rpb24odmFsdWUpIHtcbiAgdmFyIGRpcmVjdGlvbiA9IFZlY3RvcjFEKG5vcm1hbGl6ZSh2YWx1ZSkpO1xuICB2YXIgZ2V0ID0gZGlyZWN0aW9uLmdldDtcblxuICBmdW5jdGlvbiBub3JtYWxpemUobikge1xuICAgIHJldHVybiBuID09PSAwID8gMCA6IG4gLyBNYXRoLmFicyhuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgdmFyIGQgPSBub3JtYWxpemUodi5nZXQoKSk7XG4gICAgaWYgKGQgIT09IDApIGRpcmVjdGlvbi5zZXQoZCk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBnZXQ6IGdldCxcbiAgICBzZXQ6IHNldFxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gRXZlbnRTdG9yZSgpIHtcbiAgdmFyIGxpc3RlbmVycyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGFkZChub2RlLCB0eXBlLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IGZhbHNlO1xuICAgIH1cblxuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICBsaXN0ZW5lcnMucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQWxsKCkge1xuICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKHJlbW92ZSkge1xuICAgICAgcmV0dXJuIHJlbW92ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgYWRkOiBhZGQsXG4gICAgcmVtb3ZlQWxsOiByZW1vdmVBbGxcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIExpbWl0KHBhcmFtcykge1xuICB2YXIgbWluID0gcGFyYW1zLm1pbixcbiAgICAgIG1heCA9IHBhcmFtcy5tYXg7XG4gIHZhciBsZW5ndGggPSBNYXRoLmFicyhtaW4gLSBtYXgpO1xuXG4gIGZ1bmN0aW9uIHJlYWNoZWRNaW4obikge1xuICAgIHJldHVybiBuIDwgbWluO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVhY2hlZE1heChuKSB7XG4gICAgcmV0dXJuIG4gPiBtYXg7XG4gIH1cblxuICBmdW5jdGlvbiByZWFjaGVkQW55KG4pIHtcbiAgICByZXR1cm4gcmVhY2hlZE1pbihuKSB8fCByZWFjaGVkTWF4KG4pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlT2Zmc2V0KG4pIHtcbiAgICBpZiAobWluID09PSBtYXgpIHJldHVybiBuO1xuXG4gICAgd2hpbGUgKHJlYWNoZWRNaW4obikpIHtcbiAgICAgIG4gKz0gbGVuZ3RoO1xuICAgIH1cblxuICAgIHdoaWxlIChyZWFjaGVkTWF4KG4pKSB7XG4gICAgICBuIC09IGxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvb3Aobikge1xuICAgIGlmICghcmVhY2hlZEFueShuKSkgcmV0dXJuIG47XG4gICAgcmV0dXJuIHJlYWNoZWRNaW4obikgPyBtYXggOiBtaW47XG4gIH1cblxuICBmdW5jdGlvbiBjb25zdHJhaW4obikge1xuICAgIGlmICghcmVhY2hlZEFueShuKSkgcmV0dXJuIG47XG4gICAgcmV0dXJuIHJlYWNoZWRNaW4obikgPyBtaW4gOiBtYXg7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBjb25zdHJhaW46IGNvbnN0cmFpbixcbiAgICBsZW5ndGg6IGxlbmd0aCxcbiAgICBsb29wOiBsb29wLFxuICAgIG1heDogbWF4LFxuICAgIG1pbjogbWluLFxuICAgIHJlYWNoZWRBbnk6IHJlYWNoZWRBbnksXG4gICAgcmVhY2hlZE1heDogcmVhY2hlZE1heCxcbiAgICByZWFjaGVkTWluOiByZWFjaGVkTWluLFxuICAgIHJlbW92ZU9mZnNldDogcmVtb3ZlT2Zmc2V0XG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBEcmFnSGFuZGxlcihwYXJhbXMpIHtcbiAgdmFyIHRhcmdldCA9IHBhcmFtcy50YXJnZXQsXG4gICAgICBzY3JvbGxCb2R5ID0gcGFyYW1zLnNjcm9sbEJvZHksXG4gICAgICBkcmFnRnJlZSA9IHBhcmFtcy5kcmFnRnJlZSxcbiAgICAgIGFuaW1hdGlvbiA9IHBhcmFtcy5hbmltYXRpb24sXG4gICAgICBheGlzID0gcGFyYW1zLmF4aXM7XG4gIHZhciBlbGVtZW50ID0gcGFyYW1zLmVsZW1lbnQsXG4gICAgICBkcmFnVHJhY2tlciA9IHBhcmFtcy5kcmFnVHJhY2tlcixcbiAgICAgIGxvY2F0aW9uID0gcGFyYW1zLmxvY2F0aW9uLFxuICAgICAgZXZlbnRzID0gcGFyYW1zLmV2ZW50cyxcbiAgICAgIGxpbWl0ID0gcGFyYW1zLmxpbWl0O1xuICB2YXIgc2Nyb2xsQXhpcyA9IGF4aXMuc2Nyb2xsLFxuICAgICAgY3Jvc3NBeGlzID0gYXhpcy5jcm9zcztcbiAgdmFyIGZvY3VzTm9kZXMgPSBbJ0lOUFVUJywgJ1NFTEVDVCcsICdURVhUQVJFQSddO1xuICB2YXIgc3RhcnRTY3JvbGwgPSBWZWN0b3IxRCgwKTtcbiAgdmFyIHN0YXJ0Q3Jvc3MgPSBWZWN0b3IxRCgwKTtcbiAgdmFyIGRyYWdTdGFydFBvaW50ID0gVmVjdG9yMUQoMCk7XG4gIHZhciBhY3RpdmF0aW9uRXZlbnRzID0gRXZlbnRTdG9yZSgpO1xuICB2YXIgaW50ZXJhY3Rpb25FdmVudHMgPSBFdmVudFN0b3JlKCk7XG4gIHZhciBzbmFwRm9yY2VCb29zdCA9IHtcbiAgICBtb3VzZTogMi41LFxuICAgIHRvdWNoOiAzLjVcbiAgfTtcbiAgdmFyIGZyZWVGb3JjZUJvb3N0ID0ge1xuICAgIG1vdXNlOiA1LFxuICAgIHRvdWNoOiA3XG4gIH07XG4gIHZhciBiYXNlU3BlZWQgPSBkcmFnRnJlZSA/IDUgOiAxMjtcbiAgdmFyIGRyYWdUaHJlc2hvbGQgPSA0O1xuICB2YXIgZWRnZUxpbWl0ID0gTGltaXQoe1xuICAgIG1pbjogbGltaXQubWluIC0gNzAsXG4gICAgbWF4OiBsaW1pdC5tYXggKyA3MFxuICB9KTtcbiAgdmFyIHBvaW50ZXJJc0Rvd24gPSBmYWxzZTtcbiAgdmFyIHByZXZlbnRTY3JvbGwgPSBmYWxzZTtcbiAgdmFyIHByZXZlbnRDbGljayA9IGZhbHNlO1xuICB2YXIgaXNNb3VzZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGFkZEFjdGl2YXRpb25FdmVudHMoKSB7XG4gICAgdmFyIG5vZGUgPSBlbGVtZW50O1xuICAgIGFjdGl2YXRpb25FdmVudHMuYWRkKG5vZGUsICd0b3VjaG1vdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0pLmFkZChub2RlLCAndG91Y2hlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0pLmFkZChub2RlLCAndG91Y2hzdGFydCcsIGRvd24pLmFkZChub2RlLCAnbW91c2Vkb3duJywgZG93bikuYWRkKG5vZGUsICd0b3VjaGNhbmNlbCcsIHVwKS5hZGQobm9kZSwgJ2NvbnRleHRtZW51JywgdXApLmFkZChub2RlLCAnY2xpY2snLCBjbGljayk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRJbnRlcmFjdGlvbkV2ZW50cygpIHtcbiAgICB2YXIgbm9kZSA9ICFpc01vdXNlID8gZWxlbWVudCA6IGRvY3VtZW50O1xuICAgIGludGVyYWN0aW9uRXZlbnRzLmFkZChub2RlLCAndG91Y2htb3ZlJywgbW92ZSkuYWRkKG5vZGUsICd0b3VjaGVuZCcsIHVwKS5hZGQobm9kZSwgJ21vdXNlbW92ZScsIG1vdmUpLmFkZChub2RlLCAnbW91c2V1cCcsIHVwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUFsbEV2ZW50cygpIHtcbiAgICBhY3RpdmF0aW9uRXZlbnRzLnJlbW92ZUFsbCgpO1xuICAgIGludGVyYWN0aW9uRXZlbnRzLnJlbW92ZUFsbCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNGb2N1c05vZGUobm9kZSkge1xuICAgIHZhciBuYW1lID0gbm9kZS5ub2RlTmFtZSB8fCAnJztcbiAgICByZXR1cm4gZm9jdXNOb2Rlcy5pbmRleE9mKG5hbWUpID4gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JjZUJvb3N0KCkge1xuICAgIHZhciBib29zdCA9IGRyYWdGcmVlID8gZnJlZUZvcmNlQm9vc3QgOiBzbmFwRm9yY2VCb29zdDtcbiAgICB2YXIgdHlwZSA9IGlzTW91c2UgPyAnbW91c2UnIDogJ3RvdWNoJztcbiAgICByZXR1cm4gYm9vc3RbdHlwZV07XG4gIH1cblxuICBmdW5jdGlvbiBzcGVlZEZhY3Rvcihmb3JjZUIsIGZvcmNlQSkge1xuICAgIHZhciBkaWZmID0gZGVsdGEoTWF0aC5hYnMoZm9yY2VCKSwgTWF0aC5hYnMoZm9yY2VBKSk7XG4gICAgaWYgKE1hdGguYWJzKGZvcmNlQikgPD0gTWF0aC5hYnMoZm9yY2VBKSkgcmV0dXJuIDA7XG4gICAgaWYgKGZvcmNlQiA9PT0gMCB8fCBmb3JjZUEgPT09IDApIHJldHVybiAwO1xuICAgIHJldHVybiBNYXRoLmFicyhkaWZmIC8gZm9yY2VCKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFsbG93ZWRGb3JjZShmb3JjZSkge1xuICAgIHZhciBzY3JvbGxUYXJnZXQgPSBwYXJhbXMuc2Nyb2xsVGFyZ2V0LFxuICAgICAgICBpbmRleCA9IHBhcmFtcy5pbmRleDtcbiAgICB2YXIgY3VycmVudExvY2F0aW9uID0gc2Nyb2xsVGFyZ2V0LmJ5RGlzdGFuY2UoMCwgZmFsc2UpO1xuICAgIHZhciB0YXJnZXRDaGFuZ2VkID0gY3VycmVudExvY2F0aW9uLmluZGV4ICE9PSBpbmRleC5nZXQoKTtcbiAgICB2YXIgc2Vla05leHQgPSAhdGFyZ2V0Q2hhbmdlZCAmJiBNYXRoLmFicyhmb3JjZSkgPiBkcmFnVGhyZXNob2xkO1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IGZvcmNlICsgbG9jYXRpb24uZ2V0KCk7XG5cbiAgICBpZiAoc2Vla05leHQgJiYgIWRyYWdGcmVlICYmICFsaW1pdC5yZWFjaGVkQW55KGRlc3RpbmF0aW9uKSkge1xuICAgICAgdmFyIG5leHQgPSBpbmRleC5jbG9uZSgpLmFkZChEaXJlY3Rpb24oZm9yY2UpLmdldCgpICogLTEpO1xuICAgICAgcmV0dXJuIHNjcm9sbFRhcmdldC5ieUluZGV4KG5leHQuZ2V0KCksIDApLmRpc3RhbmNlO1xuICAgIH1cblxuICAgIGlmICghcGFyYW1zLmxvb3AgJiYgZWRnZUxpbWl0LnJlYWNoZWRBbnkoZGVzdGluYXRpb24pKSB7XG4gICAgICB2YXIgZWRnZSA9IGVkZ2VMaW1pdC5yZWFjaGVkTWF4KGRlc3RpbmF0aW9uKSA/ICdtYXgnIDogJ21pbic7XG4gICAgICByZXR1cm4gZWRnZUxpbWl0W2VkZ2VdIC0gdGFyZ2V0LmdldCgpO1xuICAgIH1cblxuICAgIHJldHVybiBzY3JvbGxUYXJnZXQuYnlEaXN0YW5jZShmb3JjZSwgIWRyYWdGcmVlKS5kaXN0YW5jZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvd24oZXZ0KSB7XG4gICAgaXNNb3VzZSA9IGV2dC50eXBlID09PSAnbW91c2Vkb3duJztcbiAgICBpZiAoaXNNb3VzZSAmJiBldnQuYnV0dG9uICE9PSAwKSByZXR1cm47XG4gICAgdmFyIGlzTW92aW5nID0gZGVsdGEodGFyZ2V0LmdldCgpLCBsb2NhdGlvbi5nZXQoKSkgPj0gMjtcbiAgICB2YXIgY2xlYXJQcmV2ZW50Q2xpY2sgPSBpc01vdXNlIHx8ICFpc01vdmluZztcbiAgICB2YXIgaXNOb3RGb2N1c05vZGUgPSAhaXNGb2N1c05vZGUoZXZ0LnRhcmdldCk7XG4gICAgdmFyIHByZXZlbnREZWZhdWx0ID0gaXNNb3ZpbmcgfHwgaXNNb3VzZSAmJiBpc05vdEZvY3VzTm9kZTtcbiAgICBwb2ludGVySXNEb3duID0gdHJ1ZTtcbiAgICBkcmFnVHJhY2tlci5wb2ludGVyRG93bihldnQpO1xuICAgIGRyYWdTdGFydFBvaW50LnNldCh0YXJnZXQpO1xuICAgIHRhcmdldC5zZXQobG9jYXRpb24pO1xuICAgIHNjcm9sbEJvZHkudXNlRGVmYXVsdE1hc3MoKS51c2VTcGVlZCg4MCk7XG4gICAgYWRkSW50ZXJhY3Rpb25FdmVudHMoKTtcbiAgICBzdGFydFNjcm9sbC5zZXQoZHJhZ1RyYWNrZXIucmVhZFBvaW50KGV2dCwgc2Nyb2xsQXhpcykpO1xuICAgIHN0YXJ0Q3Jvc3Muc2V0KGRyYWdUcmFja2VyLnJlYWRQb2ludChldnQsIGNyb3NzQXhpcykpO1xuICAgIGV2ZW50cy5lbWl0KCdwb2ludGVyRG93bicpO1xuICAgIGlmIChjbGVhclByZXZlbnRDbGljaykgcHJldmVudENsaWNrID0gZmFsc2U7XG4gICAgaWYgKHByZXZlbnREZWZhdWx0KSBldnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdmUoZXZ0KSB7XG4gICAgaWYgKCFwcmV2ZW50U2Nyb2xsICYmICFpc01vdXNlKSB7XG4gICAgICBpZiAoIWV2dC5jYW5jZWxhYmxlKSByZXR1cm4gdXAoKTtcbiAgICAgIHZhciBtb3ZlU2Nyb2xsID0gZHJhZ1RyYWNrZXIucmVhZFBvaW50KGV2dCwgc2Nyb2xsQXhpcykuZ2V0KCk7XG4gICAgICB2YXIgbW92ZUNyb3NzID0gZHJhZ1RyYWNrZXIucmVhZFBvaW50KGV2dCwgY3Jvc3NBeGlzKS5nZXQoKTtcbiAgICAgIHZhciBkaWZmU2Nyb2xsID0gZGVsdGEobW92ZVNjcm9sbCwgc3RhcnRTY3JvbGwuZ2V0KCkpO1xuICAgICAgdmFyIGRpZmZDcm9zcyA9IGRlbHRhKG1vdmVDcm9zcywgc3RhcnRDcm9zcy5nZXQoKSk7XG4gICAgICBwcmV2ZW50U2Nyb2xsID0gZGlmZlNjcm9sbCA+IGRpZmZDcm9zcztcbiAgICAgIGlmICghcHJldmVudFNjcm9sbCAmJiAhcHJldmVudENsaWNrKSByZXR1cm4gdXAoKTtcbiAgICB9XG5cbiAgICB2YXIgZGlmZiA9IGRyYWdUcmFja2VyLnBvaW50ZXJNb3ZlKGV2dCk7XG4gICAgdmFyIHJlYWNoZWRMaW1pdCA9IGxpbWl0LnJlYWNoZWRBbnkobG9jYXRpb24uZ2V0KCkpO1xuICAgIHZhciByZXNpc3QgPSAhcGFyYW1zLmxvb3AgJiYgcmVhY2hlZExpbWl0ID8gMiA6IDE7XG4gICAgaWYgKCFwcmV2ZW50Q2xpY2sgJiYgZGlmZikgcHJldmVudENsaWNrID0gdHJ1ZTtcbiAgICBhbmltYXRpb24uc3RhcnQoKTtcbiAgICB0YXJnZXQuYWRkKGRpZmYgLyByZXNpc3QpO1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXAoKSB7XG4gICAgdmFyIHNjcm9sbFRvID0gcGFyYW1zLnNjcm9sbFRvO1xuICAgIHZhciByYXdGb3JjZSA9IGRyYWdUcmFja2VyLnBvaW50ZXJVcCgpICogZm9yY2VCb29zdCgpO1xuICAgIHZhciBmb3JjZSA9IGFsbG93ZWRGb3JjZShyYXdGb3JjZSk7XG4gICAgdmFyIGZhY3RvciA9IHNwZWVkRmFjdG9yKHJhd0ZvcmNlLCBmb3JjZSk7XG4gICAgdmFyIGlzTW92aW5nID0gZGVsdGEodGFyZ2V0LmdldCgpLCBkcmFnU3RhcnRQb2ludC5nZXQoKSkgPj0gMC41O1xuICAgIGlmIChpc01vdmluZyAmJiAhaXNNb3VzZSkgcHJldmVudENsaWNrID0gdHJ1ZTtcbiAgICBwcmV2ZW50U2Nyb2xsID0gZmFsc2U7XG4gICAgcG9pbnRlcklzRG93biA9IGZhbHNlO1xuICAgIGludGVyYWN0aW9uRXZlbnRzLnJlbW92ZUFsbCgpO1xuICAgIHNjcm9sbEJvZHkudXNlU3BlZWQoYmFzZVNwZWVkICsgYmFzZVNwZWVkICogZmFjdG9yKTtcbiAgICBzY3JvbGxUby5kaXN0YW5jZShmb3JjZSwgIWRyYWdGcmVlKTtcbiAgICBpc01vdXNlID0gZmFsc2U7XG4gICAgZXZlbnRzLmVtaXQoJ3BvaW50ZXJVcCcpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsdGEocG9pbnRCLCBwb2ludEEpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMocG9pbnRCIC0gcG9pbnRBKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsaWNrKGV2dCkge1xuICAgIGlmIChwcmV2ZW50Q2xpY2spIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xpY2tBbGxvd2VkKCkge1xuICAgIHJldHVybiAhcHJldmVudENsaWNrO1xuICB9XG5cbiAgZnVuY3Rpb24gcG9pbnRlckRvd24oKSB7XG4gICAgcmV0dXJuIHBvaW50ZXJJc0Rvd247XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBhZGRBY3RpdmF0aW9uRXZlbnRzOiBhZGRBY3RpdmF0aW9uRXZlbnRzLFxuICAgIGNsaWNrQWxsb3dlZDogY2xpY2tBbGxvd2VkLFxuICAgIHBvaW50ZXJEb3duOiBwb2ludGVyRG93bixcbiAgICByZW1vdmVBbGxFdmVudHM6IHJlbW92ZUFsbEV2ZW50c1xuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gRHJhZ1RyYWNrZXIocGFyYW1zKSB7XG4gIHZhciBheGlzID0gcGFyYW1zLmF4aXMsXG4gICAgICBweFRvUGVyY2VudCA9IHBhcmFtcy5weFRvUGVyY2VudDtcbiAgdmFyIHNjcm9sbEF4aXMgPSBheGlzLnNjcm9sbDtcbiAgdmFyIGNvb3JkcyA9IHtcbiAgICB4OiAnY2xpZW50WCcsXG4gICAgeTogJ2NsaWVudFknXG4gIH07XG4gIHZhciBzdGFydERyYWcgPSBWZWN0b3IxRCgwKTtcbiAgdmFyIGRpZmZEcmFnID0gVmVjdG9yMUQoMCk7XG4gIHZhciBsYXN0RHJhZyA9IFZlY3RvcjFEKDApO1xuICB2YXIgcG9pbnRWYWx1ZSA9IFZlY3RvcjFEKDApO1xuICB2YXIgdHJhY2tJbnRlcnZhbCA9IDEwO1xuICB2YXIgdHJhY2tMZW5ndGggPSA1O1xuICB2YXIgdHJhY2tUaW1lID0gMTAwO1xuICB2YXIgdHJhY2tQb2ludHMgPSBbXTtcbiAgdmFyIGxhc3RNb3ZlVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB2YXIgaXNNb3VzZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHJlYWRQb2ludChldnQsIHR5cGUpIHtcbiAgICBpc01vdXNlID0gIWV2dC50b3VjaGVzO1xuICAgIHZhciBjID0gY29vcmRzW3R5cGVdO1xuICAgIHZhciB2YWx1ZSA9IGlzTW91c2UgPyBldnRbY10gOiBldnQudG91Y2hlc1swXVtjXTtcbiAgICByZXR1cm4gcG9pbnRWYWx1ZS5zZXQodmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcG9pbnRlckRvd24oZXZ0KSB7XG4gICAgdmFyIHBvaW50ID0gcmVhZFBvaW50KGV2dCwgc2Nyb2xsQXhpcyk7XG4gICAgc3RhcnREcmFnLnNldChwb2ludCk7XG4gICAgbGFzdERyYWcuc2V0KHBvaW50KTtcbiAgICByZXR1cm4gcHhUb1BlcmNlbnQubWVhc3VyZShzdGFydERyYWcuZ2V0KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcG9pbnRlck1vdmUoZXZ0KSB7XG4gICAgdmFyIHBvaW50ID0gcmVhZFBvaW50KGV2dCwgc2Nyb2xsQXhpcyk7XG4gICAgdmFyIG5vd1RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB2YXIgZGlmZlRpbWUgPSBub3dUaW1lIC0gbGFzdE1vdmVUaW1lO1xuXG4gICAgaWYgKGRpZmZUaW1lID49IHRyYWNrSW50ZXJ2YWwpIHtcbiAgICAgIGlmIChkaWZmVGltZSA+PSB0cmFja1RpbWUpIHRyYWNrUG9pbnRzID0gW107XG4gICAgICB0cmFja1BvaW50cy5wdXNoKHBvaW50LmdldCgpKTtcbiAgICAgIGxhc3RNb3ZlVGltZSA9IG5vd1RpbWU7XG4gICAgfVxuXG4gICAgZGlmZkRyYWcuc2V0KHBvaW50KS5zdWJ0cmFjdChsYXN0RHJhZyk7XG4gICAgbGFzdERyYWcuc2V0KHBvaW50KTtcbiAgICByZXR1cm4gcHhUb1BlcmNlbnQubWVhc3VyZShkaWZmRHJhZy5nZXQoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBwb2ludGVyVXAoKSB7XG4gICAgdmFyIG5vd1RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB2YXIgZGlmZlRpbWUgPSBub3dUaW1lIC0gbGFzdE1vdmVUaW1lO1xuICAgIHZhciBjdXJyZW50UG9pbnQgPSBsYXN0RHJhZy5nZXQoKTtcbiAgICB2YXIgZm9yY2UgPSB0cmFja1BvaW50cy5zbGljZSgtdHJhY2tMZW5ndGgpLm1hcChmdW5jdGlvbiAodHJhY2tQb2ludCkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRQb2ludCAtIHRyYWNrUG9pbnQ7XG4gICAgfSkuc29ydChmdW5jdGlvbiAocDEsIHAyKSB7XG4gICAgICByZXR1cm4gTWF0aC5hYnMocDEpIDwgTWF0aC5hYnMocDIpID8gMSA6IC0xO1xuICAgIH0pWzBdO1xuICAgIGxhc3REcmFnLnNldChkaWZmVGltZSA+IHRyYWNrVGltZSB8fCAhZm9yY2UgPyAwIDogZm9yY2UpO1xuICAgIHRyYWNrUG9pbnRzID0gW107XG4gICAgcmV0dXJuIHB4VG9QZXJjZW50Lm1lYXN1cmUobGFzdERyYWcuZ2V0KCkpO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgcG9pbnRlckRvd246IHBvaW50ZXJEb3duLFxuICAgIHBvaW50ZXJNb3ZlOiBwb2ludGVyTW92ZSxcbiAgICBwb2ludGVyVXA6IHBvaW50ZXJVcCxcbiAgICByZWFkUG9pbnQ6IHJlYWRQb2ludFxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gUHhUb1BlcmNlbnQodmlld0luUHgpIHtcbiAgdmFyIHRvdGFsUGVyY2VudCA9IDEwMDtcblxuICBmdW5jdGlvbiBtZWFzdXJlKG4pIHtcbiAgICByZXR1cm4gbiAvIHZpZXdJblB4ICogdG90YWxQZXJjZW50O1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgbWVhc3VyZTogbWVhc3VyZSxcbiAgICB0b3RhbFBlcmNlbnQ6IHRvdGFsUGVyY2VudFxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gbWFwKHZhbHVlLCBpU3RhcnQsIGlTdG9wLCBvU3RhcnQsIG9TdG9wKSB7XG4gIHJldHVybiBvU3RhcnQgKyAob1N0b3AgLSBvU3RhcnQpICogKCh2YWx1ZSAtIGlTdGFydCkgLyAoaVN0b3AgLSBpU3RhcnQpKTtcbn1cblxuZnVuY3Rpb24gYXJyYXlGcm9tQ29sbGVjdGlvbihub2RlTGlzdCkge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZUxpc3QpO1xufVxuXG5mdW5jdGlvbiBkZWJvdW5jZShjYWxsYmFjaywgdGltZSkge1xuICB2YXIgdGltZW91dCA9IHtcbiAgICBpZDogMFxuICB9O1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dC5pZCk7XG4gICAgdGltZW91dC5pZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCB0aW1lKSB8fCAwO1xuICB9O1xufVxuXG5mdW5jdGlvbiByb3VuZFRvRGVjaW1hbHMoZGVjaW1hbFBvaW50cykge1xuICB2YXIgcG93ID0gTWF0aC5wb3coMTAsIGRlY2ltYWxQb2ludHMpO1xuICByZXR1cm4gZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChuICogcG93KSAvIHBvdztcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ3JvdXBBcnJheShhcnJheSwgc2l6ZSkge1xuICB2YXIgZ3JvdXBzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gc2l6ZSkge1xuICAgIGdyb3Vwcy5wdXNoKGFycmF5LnNsaWNlKGksIGkgKyBzaXplKSk7XG4gIH1cblxuICByZXR1cm4gZ3JvdXBzO1xufVxuXG5mdW5jdGlvbiBhcnJheUtleXMoYXJyYXkpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGFycmF5KS5tYXAoTnVtYmVyKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKSB7XG4gIHZhciBjbCA9IG5vZGUuY2xhc3NMaXN0O1xuICBpZiAoY2xhc3NOYW1lICYmIGNsLmNvbnRhaW5zKGNsYXNzTmFtZSkpIGNsLnJlbW92ZShjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhub2RlLCBjbGFzc05hbWUpIHtcbiAgdmFyIGNsID0gbm9kZS5jbGFzc0xpc3Q7XG4gIGlmIChjbGFzc05hbWUgJiYgIWNsLmNvbnRhaW5zKGNsYXNzTmFtZSkpIGNsLmFkZChjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBTY3JvbGxCb2R5KHBhcmFtcykge1xuICB2YXIgbG9jYXRpb24gPSBwYXJhbXMubG9jYXRpb24sXG4gICAgICBzcGVlZCA9IHBhcmFtcy5zcGVlZCxcbiAgICAgIG1hc3MgPSBwYXJhbXMubWFzcztcbiAgdmFyIHJvdW5kVG9Ud29EZWNpbWFscyA9IHJvdW5kVG9EZWNpbWFscygyKTtcbiAgdmFyIHZlbG9jaXR5ID0gVmVjdG9yMUQoMCk7XG4gIHZhciBhY2NlbGVyYXRpb24gPSBWZWN0b3IxRCgwKTtcbiAgdmFyIGF0dHJhY3Rpb24gPSBWZWN0b3IxRCgwKTtcbiAgdmFyIGRpcmVjdGlvbiA9IERpcmVjdGlvbigwKTtcbiAgdmFyIHN0YXRlID0ge1xuICAgIHNwZWVkOiBzcGVlZCxcbiAgICBtYXNzOiBtYXNzXG4gIH07XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZlbG9jaXR5LmFkZChhY2NlbGVyYXRpb24pO1xuICAgIGxvY2F0aW9uLmFkZCh2ZWxvY2l0eSk7XG4gICAgYWNjZWxlcmF0aW9uLm11bHRpcGx5KDApO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlGb3JjZSh2KSB7XG4gICAgdi5kaXZpZGUoc3RhdGUubWFzcyk7XG4gICAgYWNjZWxlcmF0aW9uLmFkZCh2KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlZWsodikge1xuICAgIGF0dHJhY3Rpb24uc2V0KHYpLnN1YnRyYWN0KGxvY2F0aW9uKTtcbiAgICB2YXIgbWFnbml0dWRlID0gYXR0cmFjdGlvbi5nZXQoKTtcbiAgICB2YXIgbSA9IG1hcChtYWduaXR1ZGUsIDAsIDEwMCwgMCwgc3RhdGUuc3BlZWQpO1xuICAgIGRpcmVjdGlvbi5zZXQoYXR0cmFjdGlvbik7XG4gICAgYXR0cmFjdGlvbi5ub3JtYWxpemUoKS5tdWx0aXBseShtKS5zdWJ0cmFjdCh2ZWxvY2l0eSk7XG4gICAgYXBwbHlGb3JjZShhdHRyYWN0aW9uKTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHRsZSh2KSB7XG4gICAgdmFyIGRpZmYgPSB2LmdldCgpIC0gbG9jYXRpb24uZ2V0KCk7XG4gICAgdmFyIGRpZmZSb3VuZGVkID0gcm91bmRUb1R3b0RlY2ltYWxzKGRpZmYpO1xuICAgIHZhciBoYXNTZXR0bGVkID0gIWRpZmZSb3VuZGVkO1xuICAgIGlmIChoYXNTZXR0bGVkKSBsb2NhdGlvbi5zZXQodik7XG4gICAgcmV0dXJuIGhhc1NldHRsZWQ7XG4gIH1cblxuICBmdW5jdGlvbiB1c2VTcGVlZChuKSB7XG4gICAgc3RhdGUuc3BlZWQgPSBuO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gdXNlRGVmYXVsdFNwZWVkKCkge1xuICAgIHVzZVNwZWVkKHNwZWVkKTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZU1hc3Mobikge1xuICAgIHN0YXRlLm1hc3MgPSBuO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gdXNlRGVmYXVsdE1hc3MoKSB7XG4gICAgdXNlTWFzcyhtYXNzKTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICBzZWVrOiBzZWVrLFxuICAgIHNldHRsZTogc2V0dGxlLFxuICAgIHVwZGF0ZTogdXBkYXRlLFxuICAgIHVzZURlZmF1bHRNYXNzOiB1c2VEZWZhdWx0TWFzcyxcbiAgICB1c2VEZWZhdWx0U3BlZWQ6IHVzZURlZmF1bHRTcGVlZCxcbiAgICB1c2VNYXNzOiB1c2VNYXNzLFxuICAgIHVzZVNwZWVkOiB1c2VTcGVlZFxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gU2Nyb2xsQm91bmRzKHBhcmFtcykge1xuICB2YXIgbGltaXQgPSBwYXJhbXMubGltaXQsXG4gICAgICBsb2NhdGlvbiA9IHBhcmFtcy5sb2NhdGlvbixcbiAgICAgIHNjcm9sbEJvZHkgPSBwYXJhbXMuc2Nyb2xsQm9keSxcbiAgICAgIGFuaW1hdGlvbiA9IHBhcmFtcy5hbmltYXRpb247XG4gIHZhciBtaW4gPSBsaW1pdC5taW4sXG4gICAgICBtYXggPSBsaW1pdC5tYXgsXG4gICAgICByZWFjaGVkTWluID0gbGltaXQucmVhY2hlZE1pbixcbiAgICAgIHJlYWNoZWRNYXggPSBsaW1pdC5yZWFjaGVkTWF4O1xuICB2YXIgdG9sZXJhbmNlID0gNTA7XG4gIHZhciBkaXNhYmxlZCA9IGZhbHNlO1xuICB2YXIgdGltZW91dCA9IDA7XG5cbiAgZnVuY3Rpb24gc2hvdWxkQ29uc3RyYWluKHYpIHtcbiAgICBpZiAoZGlzYWJsZWQgfHwgdGltZW91dCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChyZWFjaGVkTWluKGxvY2F0aW9uLmdldCgpKSkgcmV0dXJuIHYuZ2V0KCkgIT09IG1pbjtcbiAgICBpZiAocmVhY2hlZE1heChsb2NhdGlvbi5nZXQoKSkpIHJldHVybiB2LmdldCgpICE9PSBtYXg7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gY29uc3RyYWluKHYpIHtcbiAgICBpZiAoIXNob3VsZENvbnN0cmFpbih2KSkgcmV0dXJuO1xuICAgIHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY29uc3RyYWludCA9IGxpbWl0LmNvbnN0cmFpbih2LmdldCgpKTtcbiAgICAgIHYuc2V0KGNvbnN0cmFpbnQpO1xuICAgICAgc2Nyb2xsQm9keS51c2VTcGVlZCgxMCkudXNlTWFzcygzKTtcbiAgICAgIGFuaW1hdGlvbi5zdGFydCgpO1xuICAgICAgdGltZW91dCA9IDA7XG4gICAgfSwgdG9sZXJhbmNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUFjdGl2ZShhY3RpdmUpIHtcbiAgICBkaXNhYmxlZCA9ICFhY3RpdmU7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBjb25zdHJhaW46IGNvbnN0cmFpbixcbiAgICB0b2dnbGVBY3RpdmU6IHRvZ2dsZUFjdGl2ZVxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gU2Nyb2xsQ29udGFpbihwYXJhbXMpIHtcbiAgdmFyIGFsaWdubWVudCA9IHBhcmFtcy5hbGlnbm1lbnQsXG4gICAgICBjb250ZW50U2l6ZSA9IHBhcmFtcy5jb250ZW50U2l6ZSxcbiAgICAgIHZpZXdTaXplID0gcGFyYW1zLnZpZXdTaXplO1xuICB2YXIgc2Nyb2xsQm91bmRzID0gTGltaXQoe1xuICAgIG1pbjogLWNvbnRlbnRTaXplICsgdmlld1NpemUsXG4gICAgbWF4OiAwXG4gIH0pO1xuICB2YXIgYWxpZ25lZFdpdGhpblZpZXcgPSBbYWxpZ25tZW50Lm1lYXN1cmUoY29udGVudFNpemUpXTtcbiAgdmFyIGNvbnRlbnRFeGNlZWRzVmlldyA9IGNvbnRlbnRTaXplID4gdmlld1NpemU7XG5cbiAgZnVuY3Rpb24gZmluZER1cGxpY2F0ZXMoc2Nyb2xsU25hcHMpIHtcbiAgICB2YXIgc3RhcnRTbmFwID0gc2Nyb2xsU25hcHNbMF07XG4gICAgdmFyIGVuZFNuYXAgPSBzY3JvbGxTbmFwc1tzY3JvbGxTbmFwcy5sZW5ndGggLSAxXTtcbiAgICB2YXIgbWluID0gc2Nyb2xsU25hcHMubGFzdEluZGV4T2Yoc3RhcnRTbmFwKSArIDE7XG4gICAgdmFyIG1heCA9IHNjcm9sbFNuYXBzLmluZGV4T2YoZW5kU25hcCk7XG4gICAgcmV0dXJuIExpbWl0KHtcbiAgICAgIG1pbjogbWluLFxuICAgICAgbWF4OiBtYXhcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lYXN1cmUoc2Nyb2xsU25hcHMsIHRyaW0pIHtcbiAgICB2YXIgY29udGFpbmVkU25hcHMgPSBzY3JvbGxTbmFwcy5tYXAoc2Nyb2xsQm91bmRzLmNvbnN0cmFpbik7XG5cbiAgICB2YXIgX2EgPSBmaW5kRHVwbGljYXRlcyhjb250YWluZWRTbmFwcyksXG4gICAgICAgIG1pbiA9IF9hLm1pbixcbiAgICAgICAgbWF4ID0gX2EubWF4O1xuXG4gICAgaWYgKCFjb250ZW50RXhjZWVkc1ZpZXcpIHJldHVybiBhbGlnbmVkV2l0aGluVmlldztcbiAgICBpZiAoIXRyaW0pIHJldHVybiBjb250YWluZWRTbmFwcztcbiAgICByZXR1cm4gY29udGFpbmVkU25hcHMuc2xpY2UobWluIC0gMSwgbWF4ICsgMSk7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBtZWFzdXJlOiBtZWFzdXJlXG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBTY3JvbGxMaW1pdChwYXJhbXMpIHtcbiAgdmFyIGNvbnRlbnRTaXplID0gcGFyYW1zLmNvbnRlbnRTaXplLFxuICAgICAgbG9vcCA9IHBhcmFtcy5sb29wO1xuXG4gIGZ1bmN0aW9uIG1lYXN1cmUoc2Nyb2xsU25hcHMpIHtcbiAgICB2YXIgc3RhcnRTbmFwID0gc2Nyb2xsU25hcHNbMF07XG4gICAgdmFyIGVuZFNuYXAgPSBzY3JvbGxTbmFwc1tzY3JvbGxTbmFwcy5sZW5ndGggLSAxXTtcbiAgICB2YXIgbWluID0gbG9vcCA/IHN0YXJ0U25hcCAtIGNvbnRlbnRTaXplIDogZW5kU25hcDtcbiAgICB2YXIgbWF4ID0gc3RhcnRTbmFwO1xuICAgIHJldHVybiBMaW1pdCh7XG4gICAgICBtaW46IG1pbixcbiAgICAgIG1heDogbWF4XG4gICAgfSk7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBtZWFzdXJlOiBtZWFzdXJlXG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBTY3JvbGxMb29wZXIocGFyYW1zKSB7XG4gIHZhciBjb250ZW50U2l6ZSA9IHBhcmFtcy5jb250ZW50U2l6ZSxcbiAgICAgIGxvY2F0aW9uID0gcGFyYW1zLmxvY2F0aW9uLFxuICAgICAgbGltaXQgPSBwYXJhbXMubGltaXQsXG4gICAgICBweFRvUGVyY2VudCA9IHBhcmFtcy5weFRvUGVyY2VudDtcbiAgdmFyIG1pbiA9IGxpbWl0Lm1pbiArIHB4VG9QZXJjZW50Lm1lYXN1cmUoMC4xKTtcbiAgdmFyIG1heCA9IGxpbWl0Lm1heCArIHB4VG9QZXJjZW50Lm1lYXN1cmUoMC4xKTtcblxuICB2YXIgX2EgPSBMaW1pdCh7XG4gICAgbWluOiBtaW4sXG4gICAgbWF4OiBtYXhcbiAgfSksXG4gICAgICByZWFjaGVkTWluID0gX2EucmVhY2hlZE1pbixcbiAgICAgIHJlYWNoZWRNYXggPSBfYS5yZWFjaGVkTWF4O1xuXG4gIGZ1bmN0aW9uIHNob3VsZExvb3AoZGlyZWN0aW9uKSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gMSkgcmV0dXJuIHJlYWNoZWRNYXgobG9jYXRpb24uZ2V0KCkpO1xuICAgIGlmIChkaXJlY3Rpb24gPT09IC0xKSByZXR1cm4gcmVhY2hlZE1pbihsb2NhdGlvbi5nZXQoKSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9vcCh2ZWN0b3JzLCBkaXJlY3Rpb24pIHtcbiAgICBpZiAoIXNob3VsZExvb3AoZGlyZWN0aW9uKSkgcmV0dXJuO1xuICAgIHZhciBsb29wRGlzdGFuY2UgPSBjb250ZW50U2l6ZSAqIChkaXJlY3Rpb24gKiAtMSk7XG4gICAgdmVjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gdi5hZGQobG9vcERpc3RhbmNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGxvb3A6IGxvb3BcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIFNjcm9sbFByb2dyZXNzKHBhcmFtcykge1xuICB2YXIgX2EgPSBwYXJhbXMubGltaXQsXG4gICAgICBtYXggPSBfYS5tYXgsXG4gICAgICBzY3JvbGxMZW5ndGggPSBfYS5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gZ2V0KG4pIHtcbiAgICB2YXIgY3VycmVudExvY2F0aW9uID0gbiAtIG1heDtcbiAgICByZXR1cm4gY3VycmVudExvY2F0aW9uIC8gLXNjcm9sbExlbmd0aDtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGdldDogZ2V0XG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBTY3JvbGxTbmFwKHBhcmFtcykge1xuICB2YXIgc25hcFNpemVzID0gcGFyYW1zLnNuYXBTaXplcyxcbiAgICAgIGFsaWdubWVudCA9IHBhcmFtcy5hbGlnbm1lbnQsXG4gICAgICBsb29wID0gcGFyYW1zLmxvb3A7XG4gIHZhciBhbGlnbm1lbnRzID0gc25hcFNpemVzLm1hcChhbGlnbm1lbnQubWVhc3VyZSk7XG4gIHZhciBkaXN0YW5jZXNCZXR3ZWVuID0gZGlzdGFuY2VzQmV0d2VlblNjcm9sbFNuYXBzKCk7XG5cbiAgZnVuY3Rpb24gZGlzdGFuY2VzQmV0d2VlblNjcm9sbFNuYXBzKCkge1xuICAgIHZhciBsaW1pdCA9IExpbWl0KHtcbiAgICAgIG1pbjogMCxcbiAgICAgIG1heDogc25hcFNpemVzLmxlbmd0aCAtIDFcbiAgICB9KTtcbiAgICB2YXIgY291bnRlciA9IENvdW50ZXIoe1xuICAgICAgbGltaXQ6IGxpbWl0LFxuICAgICAgc3RhcnQ6IDAsXG4gICAgICBsb29wOiBsb29wXG4gICAgfSk7XG4gICAgcmV0dXJuIHNuYXBTaXplcy5tYXAoZnVuY3Rpb24gKHNpemUsIGluZGV4KSB7XG4gICAgICB2YXIgbmV4dCA9IGNvdW50ZXIuc2V0KGluZGV4ICsgMSkuZ2V0KCk7XG4gICAgICByZXR1cm4gc2l6ZSArIGFsaWdubWVudHNbaW5kZXhdIC0gYWxpZ25tZW50c1tuZXh0XTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lYXN1cmUoaW5kZXgpIHtcbiAgICB2YXIgc2l6ZXMgPSBkaXN0YW5jZXNCZXR3ZWVuLnNsaWNlKDAsIGluZGV4KTtcbiAgICByZXR1cm4gc2l6ZXMucmVkdWNlKGZ1bmN0aW9uIChhLCBzKSB7XG4gICAgICByZXR1cm4gYSAtIHM7XG4gICAgfSwgYWxpZ25tZW50c1swXSk7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBtZWFzdXJlOiBtZWFzdXJlXG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBTY3JvbGxUYXJnZXQocGFyYW1zKSB7XG4gIHZhciBsb29wID0gcGFyYW1zLmxvb3AsXG4gICAgICBsaW1pdCA9IHBhcmFtcy5saW1pdCxcbiAgICAgIHNjcm9sbFNuYXBzID0gcGFyYW1zLnNjcm9sbFNuYXBzLFxuICAgICAgY29udGVudFNpemUgPSBwYXJhbXMuY29udGVudFNpemU7XG4gIHZhciByZWFjaGVkTWF4ID0gbGltaXQucmVhY2hlZE1heCxcbiAgICAgIHJlYWNoZWRBbnkgPSBsaW1pdC5yZWFjaGVkQW55LFxuICAgICAgcmVtb3ZlT2Zmc2V0ID0gbGltaXQucmVtb3ZlT2Zmc2V0O1xuXG4gIGZ1bmN0aW9uIG1pbkRpc3RhbmNlKGQxLCBkMikge1xuICAgIHJldHVybiBNYXRoLmFicyhkMSkgPCBNYXRoLmFicyhkMikgPyBkMSA6IGQyO1xuICB9XG5cbiAgZnVuY3Rpb24gZmluZFRhcmdldFNuYXAodGFyZ2V0KSB7XG4gICAgdmFyIGRpc3RhbmNlID0gcmVtb3ZlT2Zmc2V0KHRhcmdldCk7XG4gICAgdmFyIGFzY0RpZmZzVG9TbmFwcyA9IHNjcm9sbFNuYXBzLm1hcChmdW5jdGlvbiAoc2Nyb2xsU25hcCkge1xuICAgICAgcmV0dXJuIHNjcm9sbFNuYXAgLSBkaXN0YW5jZTtcbiAgICB9KS5tYXAoZnVuY3Rpb24gKGRpZmZUb1NuYXApIHtcbiAgICAgIHJldHVybiBzaG9ydGN1dChkaWZmVG9TbmFwLCAwKTtcbiAgICB9KS5tYXAoZnVuY3Rpb24gKGRpZmYsIGkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpZmY6IGRpZmYsXG4gICAgICAgIGluZGV4OiBpXG4gICAgICB9O1xuICAgIH0pLnNvcnQoZnVuY3Rpb24gKGQxLCBkMikge1xuICAgICAgcmV0dXJuIE1hdGguYWJzKGQxLmRpZmYpIC0gTWF0aC5hYnMoZDIuZGlmZik7XG4gICAgfSk7XG4gICAgdmFyIGluZGV4ID0gYXNjRGlmZnNUb1NuYXBzWzBdLmluZGV4O1xuICAgIHJldHVybiB7XG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgICBkaXN0YW5jZTogZGlzdGFuY2VcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvcnRjdXQodGFyZ2V0LCBkaXJlY3Rpb24pIHtcbiAgICB2YXIgdDEgPSB0YXJnZXQ7XG4gICAgdmFyIHQyID0gdGFyZ2V0ICsgY29udGVudFNpemU7XG4gICAgdmFyIHQzID0gdGFyZ2V0IC0gY29udGVudFNpemU7XG4gICAgaWYgKCFsb29wKSByZXR1cm4gdDE7XG4gICAgaWYgKCFkaXJlY3Rpb24pIHJldHVybiBtaW5EaXN0YW5jZShtaW5EaXN0YW5jZSh0MSwgdDIpLCB0Myk7XG4gICAgdmFyIHNob3J0ZXN0ID0gbWluRGlzdGFuY2UodDEsIGRpcmVjdGlvbiA9PT0gMSA/IHQyIDogdDMpO1xuICAgIHJldHVybiBNYXRoLmFicyhzaG9ydGVzdCkgKiBkaXJlY3Rpb247XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kVGFyZ2V0SW5kZXgodGFyZ2V0LCBpbmRleCkge1xuICAgIHZhciByZWFjaGVkQm91bmQgPSAhbG9vcCAmJiByZWFjaGVkQW55KHRhcmdldCk7XG4gICAgaWYgKCFyZWFjaGVkQm91bmQpIHJldHVybiBpbmRleDtcbiAgICB2YXIgX2EgPSBwYXJhbXMuaW5kZXgsXG4gICAgICAgIG1pbiA9IF9hLm1pbixcbiAgICAgICAgbWF4ID0gX2EubWF4O1xuICAgIHJldHVybiByZWFjaGVkTWF4KHRhcmdldCkgPyBtaW4gOiBtYXg7XG4gIH1cblxuICBmdW5jdGlvbiBieUluZGV4KGluZGV4LCBkaXJlY3Rpb24pIHtcbiAgICB2YXIgZGlmZlRvU25hcCA9IHNjcm9sbFNuYXBzW2luZGV4XSAtIHBhcmFtcy50YXJnZXQuZ2V0KCk7XG4gICAgdmFyIGRpc3RhbmNlID0gc2hvcnRjdXQoZGlmZlRvU25hcCwgZGlyZWN0aW9uKTtcbiAgICByZXR1cm4ge1xuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgZGlzdGFuY2U6IGRpc3RhbmNlXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ5RGlzdGFuY2UoZGlzdGFuY2UsIHNuYXApIHtcbiAgICB2YXIgdGFyZ2V0ID0gcGFyYW1zLnRhcmdldC5nZXQoKSArIGRpc3RhbmNlO1xuICAgIHZhciB0YXJnZXRTbmFwID0gZmluZFRhcmdldFNuYXAodGFyZ2V0KTtcbiAgICB2YXIgaW5kZXggPSBmaW5kVGFyZ2V0SW5kZXgodGFyZ2V0LCB0YXJnZXRTbmFwLmluZGV4KTtcbiAgICB2YXIgcmVhY2hlZEJvdW5kID0gIWxvb3AgJiYgcmVhY2hlZEFueSh0YXJnZXQpO1xuICAgIGlmICghc25hcCB8fCByZWFjaGVkQm91bmQpIHJldHVybiB7XG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgICBkaXN0YW5jZTogZGlzdGFuY2VcbiAgICB9O1xuICAgIHZhciBkaWZmVG9TbmFwID0gc2Nyb2xsU25hcHNbaW5kZXhdIC0gdGFyZ2V0U25hcC5kaXN0YW5jZTtcbiAgICB2YXIgc25hcERpc3RhbmNlID0gZGlzdGFuY2UgKyBzaG9ydGN1dChkaWZmVG9TbmFwLCAwKTtcbiAgICByZXR1cm4ge1xuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgZGlzdGFuY2U6IHNuYXBEaXN0YW5jZVxuICAgIH07XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBieURpc3RhbmNlOiBieURpc3RhbmNlLFxuICAgIGJ5SW5kZXg6IGJ5SW5kZXgsXG4gICAgc2hvcnRjdXQ6IHNob3J0Y3V0XG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBTY3JvbGxUbyhwYXJhbXMpIHtcbiAgdmFyIGluZGV4Q3VycmVudCA9IHBhcmFtcy5pbmRleCxcbiAgICAgIHNjcm9sbFRhcmdldCA9IHBhcmFtcy5zY3JvbGxUYXJnZXQsXG4gICAgICBhbmltYXRpb24gPSBwYXJhbXMuYW5pbWF0aW9uO1xuICB2YXIgaW5kZXhQcmV2aW91cyA9IHBhcmFtcy5pbmRleFByZXZpb3VzLFxuICAgICAgZXZlbnRzID0gcGFyYW1zLmV2ZW50cyxcbiAgICAgIHRhcmdldERpc3RhbmNlID0gcGFyYW1zLnRhcmdldDtcblxuICBmdW5jdGlvbiBzY3JvbGxUbyh0YXJnZXQpIHtcbiAgICB2YXIgZGlzdGFuY2VEaWZmID0gdGFyZ2V0LmRpc3RhbmNlO1xuICAgIHZhciBpbmRleERpZmYgPSB0YXJnZXQuaW5kZXggIT09IGluZGV4Q3VycmVudC5nZXQoKTtcblxuICAgIGlmIChkaXN0YW5jZURpZmYpIHtcbiAgICAgIGFuaW1hdGlvbi5zdGFydCgpO1xuICAgICAgdGFyZ2V0RGlzdGFuY2UuYWRkKGRpc3RhbmNlRGlmZik7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4RGlmZikge1xuICAgICAgaW5kZXhQcmV2aW91cy5zZXQoaW5kZXhDdXJyZW50LmdldCgpKTtcbiAgICAgIGluZGV4Q3VycmVudC5zZXQodGFyZ2V0LmluZGV4KTtcbiAgICAgIGV2ZW50cy5lbWl0KCdzZWxlY3QnKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkaXN0YW5jZShuLCBzbmFwKSB7XG4gICAgdmFyIHRhcmdldCA9IHNjcm9sbFRhcmdldC5ieURpc3RhbmNlKG4sIHNuYXApO1xuICAgIHNjcm9sbFRvKHRhcmdldCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbmRleChuLCBkaXJlY3Rpb24pIHtcbiAgICB2YXIgdGFyZ2V0SW5kZXggPSBpbmRleEN1cnJlbnQuY2xvbmUoKS5zZXQobik7XG4gICAgdmFyIHRhcmdldCA9IHNjcm9sbFRhcmdldC5ieUluZGV4KHRhcmdldEluZGV4LmdldCgpLCBkaXJlY3Rpb24pO1xuICAgIHNjcm9sbFRvKHRhcmdldCk7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBkaXN0YW5jZTogZGlzdGFuY2UsXG4gICAgaW5kZXg6IGluZGV4XG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBTbGlkZUxvb3BlcihwYXJhbXMpIHtcbiAgdmFyIGF4aXMgPSBwYXJhbXMuYXhpcyxcbiAgICAgIHNjcm9sbExvY2F0aW9uID0gcGFyYW1zLmxvY2F0aW9uLFxuICAgICAgc2xpZGVzSW5WaWV3ID0gcGFyYW1zLnNsaWRlc0luVmlldyxcbiAgICAgIGlzUnRsID0gcGFyYW1zLmlzUnRsO1xuICB2YXIgY29udGVudFNpemUgPSBwYXJhbXMuY29udGVudFNpemUsXG4gICAgICB2aWV3U2l6ZSA9IHBhcmFtcy52aWV3U2l6ZSxcbiAgICAgIHNsaWRlU2l6ZXMgPSBwYXJhbXMuc2xpZGVTaXplcyxcbiAgICAgIHNjcm9sbFNuYXBzID0gcGFyYW1zLnNjcm9sbFNuYXBzO1xuICB2YXIgYXNjSXRlbXMgPSBhcnJheUtleXMoc2xpZGVTaXplcyk7XG4gIHZhciBkZXNjSXRlbXMgPSBhcnJheUtleXMoc2xpZGVTaXplcykucmV2ZXJzZSgpO1xuICB2YXIgbG9vcFBvaW50cyA9IHN0YXJ0UG9pbnRzKCkuY29uY2F0KGVuZFBvaW50cygpKTtcbiAgdmFyIGxvb3BTdHlsZSA9IGF4aXMuc2Nyb2xsID09PSAneCcgPyBpc1J0bCA/ICdyaWdodCcgOiAnbGVmdCcgOiAndG9wJztcblxuICBmdW5jdGlvbiByZW1vdmVTbGlkZVNpemVzKGluZGV4ZXMsIGZyb20pIHtcbiAgICByZXR1cm4gaW5kZXhlcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGkpIHtcbiAgICAgIHJldHVybiBhIC0gc2xpZGVTaXplc1tpXTtcbiAgICB9LCBmcm9tKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNsaWRlc0luR2FwKGluZGV4ZXMsIGdhcCkge1xuICAgIHJldHVybiBpbmRleGVzLnJlZHVjZShmdW5jdGlvbiAoYSwgaSkge1xuICAgICAgdmFyIHJlbWFpbmluZ0dhcCA9IHJlbW92ZVNsaWRlU2l6ZXMoYSwgZ2FwKTtcbiAgICAgIHJldHVybiByZW1haW5pbmdHYXAgPiAwID8gYS5jb25jYXQoW2ldKSA6IGE7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgZnVuY3Rpb24gZmluZExvb3BQb2ludHMoaW5kZXhlcywgZWRnZSkge1xuICAgIHZhciBpc1N0YXJ0RWRnZSA9IGVkZ2UgPT09ICdzdGFydCc7XG4gICAgdmFyIG9mZnNldCA9IGlzU3RhcnRFZGdlID8gLWNvbnRlbnRTaXplIDogY29udGVudFNpemU7XG4gICAgdmFyIHNsaWRlQm91bmRzID0gc2xpZGVzSW5WaWV3LmZpbmRTbGlkZUJvdW5kcyhvZmZzZXQpO1xuICAgIHJldHVybiBpbmRleGVzLm1hcChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHZhciBpbml0aWFsID0gaXNTdGFydEVkZ2UgPyAwIDogLWNvbnRlbnRTaXplO1xuICAgICAgdmFyIGFsdGVyZWQgPSBpc1N0YXJ0RWRnZSA/IGNvbnRlbnRTaXplIDogMDtcbiAgICAgIHZhciBib3VuZHMgPSBzbGlkZUJvdW5kcy5maWx0ZXIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgcmV0dXJuIGIuaW5kZXggPT09IGluZGV4O1xuICAgICAgfSlbMF07XG4gICAgICB2YXIgcG9pbnQgPSBib3VuZHNbaXNTdGFydEVkZ2UgPyAnZW5kJyA6ICdzdGFydCddO1xuXG4gICAgICB2YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICAgICAgICByZXR1cm4gc2Nyb2xsTG9jYXRpb24uZ2V0KCkgPiBwb2ludCA/IGluaXRpYWwgOiBhbHRlcmVkO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcG9pbnQ6IHBvaW50LFxuICAgICAgICBnZXRUYXJnZXQ6IGdldFRhcmdldCxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBsb2NhdGlvbjogLTFcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydFBvaW50cygpIHtcbiAgICB2YXIgZ2FwID0gc2Nyb2xsU25hcHNbMF0gLSAxO1xuICAgIHZhciBpbmRleGVzID0gc2xpZGVzSW5HYXAoZGVzY0l0ZW1zLCBnYXApO1xuICAgIHJldHVybiBmaW5kTG9vcFBvaW50cyhpbmRleGVzLCAnZW5kJyk7XG4gIH1cblxuICBmdW5jdGlvbiBlbmRQb2ludHMoKSB7XG4gICAgdmFyIGdhcCA9IHZpZXdTaXplIC0gc2Nyb2xsU25hcHNbMF0gLSAxO1xuICAgIHZhciBpbmRleGVzID0gc2xpZGVzSW5HYXAoYXNjSXRlbXMsIGdhcCk7XG4gICAgcmV0dXJuIGZpbmRMb29wUG9pbnRzKGluZGV4ZXMsICdzdGFydCcpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuTG9vcCgpIHtcbiAgICByZXR1cm4gbG9vcFBvaW50cy5ldmVyeShmdW5jdGlvbiAoX2EpIHtcbiAgICAgIHZhciBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgdmFyIG90aGVySW5kZXhlcyA9IGFzY0l0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gaSAhPT0gaW5kZXg7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZW1vdmVTbGlkZVNpemVzKG90aGVySW5kZXhlcywgdmlld1NpemUpIDw9IDA7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBsb29wKHNsaWRlcykge1xuICAgIGxvb3BQb2ludHMuZm9yRWFjaChmdW5jdGlvbiAobG9vcFBvaW50KSB7XG4gICAgICB2YXIgZ2V0VGFyZ2V0ID0gbG9vcFBvaW50LmdldFRhcmdldCxcbiAgICAgICAgICBsb2NhdGlvbiA9IGxvb3BQb2ludC5sb2NhdGlvbixcbiAgICAgICAgICBpbmRleCA9IGxvb3BQb2ludC5pbmRleDtcbiAgICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoKTtcblxuICAgICAgaWYgKHRhcmdldCAhPT0gbG9jYXRpb24pIHtcbiAgICAgICAgc2xpZGVzW2luZGV4XS5zdHlsZVtsb29wU3R5bGVdID0gdGFyZ2V0ICsgXCIlXCI7XG4gICAgICAgIGxvb3BQb2ludC5sb2NhdGlvbiA9IHRhcmdldDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyKHNsaWRlcykge1xuICAgIGxvb3BQb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgIHZhciBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgc2xpZGVzW2luZGV4XS5zdHlsZVtsb29wU3R5bGVdID0gJyc7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBjYW5Mb29wOiBjYW5Mb29wLFxuICAgIGNsZWFyOiBjbGVhcixcbiAgICBsb29wOiBsb29wLFxuICAgIGxvb3BQb2ludHM6IGxvb3BQb2ludHNcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIFNsaWRlRm9jdXMocGFyYW1zKSB7XG4gIHZhciBzY3JvbGxUbyA9IHBhcmFtcy5zY3JvbGxUbyxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsID0gcGFyYW1zLnNsaWRlc1RvU2Nyb2xsLFxuICAgICAgcm9vdCA9IHBhcmFtcy5yb290O1xuICB2YXIgZXZlbnRTdG9yZSA9IEV2ZW50U3RvcmUoKTtcbiAgdmFyIHJlbW92ZUFsbEV2ZW50cyA9IGV2ZW50U3RvcmUucmVtb3ZlQWxsO1xuICB2YXIgbGFzdFRhYlByZXNzVGltZSA9IDA7XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJUYWJQcmVzcyhldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlICE9PSA5KSByZXR1cm47XG4gICAgbGFzdFRhYlByZXNzVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkRm9jdXNFdmVudChzbGlkZSwgaW5kZXgpIHtcbiAgICB2YXIgZm9jdXMgPSBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgIHZhciBub3dUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB2YXIgZGlmZlRpbWUgPSBub3dUaW1lIC0gbGFzdFRhYlByZXNzVGltZTtcbiAgICAgIGlmIChkaWZmVGltZSA+IDEwKSByZXR1cm47XG4gICAgICByb290LnNjcm9sbExlZnQgPSAwO1xuICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSBNYXRoLmZsb29yKGluZGV4IC8gc2xpZGVzVG9TY3JvbGwpO1xuICAgICAgc2Nyb2xsVG8uaW5kZXgoc2VsZWN0ZWRJbmRleCwgMCk7XG4gICAgfTtcblxuICAgIGV2ZW50U3RvcmUuYWRkKHNsaWRlLCAnZm9jdXMnLCBmb2N1cywgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRBY3RpdmF0aW9uRXZlbnRzKHNsaWRlcykge1xuICAgIGV2ZW50U3RvcmUuYWRkKGRvY3VtZW50LCAna2V5ZG93bicsIHJlZ2lzdGVyVGFiUHJlc3MsIGZhbHNlKTtcbiAgICBzbGlkZXMuZm9yRWFjaChhZGRGb2N1c0V2ZW50KTtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGFkZEFjdGl2YXRpb25FdmVudHM6IGFkZEFjdGl2YXRpb25FdmVudHMsXG4gICAgcmVtb3ZlQWxsRXZlbnRzOiByZW1vdmVBbGxFdmVudHNcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIFNsaWRlc0luVmlldyhwYXJhbXMpIHtcbiAgdmFyIGNvbnRlbnRTaXplID0gcGFyYW1zLmNvbnRlbnRTaXplLFxuICAgICAgc2xpZGVTaXplcyA9IHBhcmFtcy5zbGlkZVNpemVzLFxuICAgICAgdmlld1NpemUgPSBwYXJhbXMudmlld1NpemU7XG4gIHZhciBpblZpZXdUaHJlc2hvbGQgPSBwYXJhbXMuaW5WaWV3VGhyZXNob2xkLFxuICAgICAgbG9vcCA9IHBhcmFtcy5sb29wO1xuICB2YXIgdGhyZXNob2xkID0gTWF0aC5taW4oTWF0aC5tYXgoaW5WaWV3VGhyZXNob2xkLCAwLjAxKSwgMC45OSk7XG4gIHZhciBzY3JvbGxTbmFwcyA9IGFycmF5S2V5cyhzbGlkZVNpemVzKS5tYXAoc2Nyb2xsU25hcCk7XG4gIHZhciBvZmZzZXRzID0gbG9vcCA/IFswLCBjb250ZW50U2l6ZSwgLWNvbnRlbnRTaXplXSA6IFswXTtcbiAgdmFyIHNsaWRlQm91bmRzID0gb2Zmc2V0cy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGxvb3BPZmZzZXQpIHtcbiAgICByZXR1cm4gYS5jb25jYXQoZmluZFNsaWRlQm91bmRzKGxvb3BPZmZzZXQsIHRocmVzaG9sZCkpO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gc2Nyb2xsU25hcChpbmRleCkge1xuICAgIHZhciBzcGFuID0gc2xpZGVTaXplcy5zbGljZSgwLCBpbmRleCk7XG4gICAgcmV0dXJuIHNwYW4ucmVkdWNlKGZ1bmN0aW9uIChhLCBzKSB7XG4gICAgICByZXR1cm4gYSAtIHM7XG4gICAgfSwgMCk7XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kU2xpZGVCb3VuZHMob2Zmc2V0LCB0aHJlc2hvbGQpIHtcbiAgICB2YXIgdGhyZXNob2xkcyA9IHNsaWRlU2l6ZXMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICByZXR1cm4gcyAqICh0aHJlc2hvbGQgfHwgMCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNjcm9sbFNuYXBzLm1hcChmdW5jdGlvbiAoc25hcCwgaW5kZXgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0OiBzbmFwIC0gc2xpZGVTaXplc1tpbmRleF0gKyB0aHJlc2hvbGRzW2luZGV4XSArIG9mZnNldCxcbiAgICAgICAgZW5kOiBzbmFwICsgdmlld1NpemUgLSB0aHJlc2hvbGRzW2luZGV4XSArIG9mZnNldCxcbiAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2sobG9jYXRpb24pIHtcbiAgICByZXR1cm4gc2xpZGVCb3VuZHMucmVkdWNlKGZ1bmN0aW9uIChsaXN0LCBzbGlkZUJvdW5kKSB7XG4gICAgICB2YXIgaW5kZXggPSBzbGlkZUJvdW5kLmluZGV4LFxuICAgICAgICAgIHN0YXJ0ID0gc2xpZGVCb3VuZC5zdGFydCxcbiAgICAgICAgICBlbmQgPSBzbGlkZUJvdW5kLmVuZDtcbiAgICAgIHZhciBpbkxpc3QgPSBsaXN0LmluZGV4T2YoaW5kZXgpICE9PSAtMTtcbiAgICAgIHZhciBpblZpZXcgPSBzdGFydCA8IGxvY2F0aW9uICYmIGVuZCA+IGxvY2F0aW9uO1xuICAgICAgcmV0dXJuICFpbkxpc3QgJiYgaW5WaWV3ID8gbGlzdC5jb25jYXQoW2luZGV4XSkgOiBsaXN0O1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGNoZWNrOiBjaGVjayxcbiAgICBmaW5kU2xpZGVCb3VuZHM6IGZpbmRTbGlkZUJvdW5kc1xuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gVHJhbnNsYXRlKHBhcmFtcykge1xuICB2YXIgYXhpcyA9IHBhcmFtcy5heGlzLFxuICAgICAgY29udGFpbmVyID0gcGFyYW1zLmNvbnRhaW5lcixcbiAgICAgIGlzUnRsID0gcGFyYW1zLmlzUnRsO1xuICB2YXIgdHJhbnNsYXRlcyA9IHtcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcbiAgdmFyIHRyYW5zbGF0ZUF4aXMgPSB0cmFuc2xhdGVzW2F4aXMuc2Nyb2xsXTtcbiAgdmFyIHJvdW5kVG9Ud29EZWNpbWFscyA9IHJvdW5kVG9EZWNpbWFscygyKTtcbiAgdmFyIGNvbnRhaW5lclN0eWxlID0gY29udGFpbmVyLnN0eWxlO1xuICB2YXIgZGlzYWJsZWQgPSBmYWxzZTtcbiAgdmFyIGxvY2F0aW9uID0gMDtcblxuICBmdW5jdGlvbiB4KG4pIHtcbiAgICByZXR1cm4gXCJ0cmFuc2xhdGUzZChcIiArIChpc1J0bCA/IC1uIDogbikgKyBcIiUsMHB4LDBweClcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHkobikge1xuICAgIHJldHVybiBcInRyYW5zbGF0ZTNkKDBweCxcIiArIG4gKyBcIiUsMHB4KVwiO1xuICB9XG5cbiAgZnVuY3Rpb24gdG8odikge1xuICAgIGlmIChkaXNhYmxlZCkgcmV0dXJuO1xuICAgIHZhciB0YXJnZXQgPSByb3VuZFRvVHdvRGVjaW1hbHModi5nZXQoKSk7XG5cbiAgICBpZiAobG9jYXRpb24gIT09IHRhcmdldCkge1xuICAgICAgZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpLnRyYW5zZm9ybTtcbiAgICAgIGNvbnRhaW5lclN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zbGF0ZUF4aXModGFyZ2V0KTtcbiAgICAgIGxvY2F0aW9uID0gdGFyZ2V0O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUFjdGl2ZShhY3RpdmUpIHtcbiAgICBkaXNhYmxlZCA9ICFhY3RpdmU7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICBjb250YWluZXJTdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICBsb2NhdGlvbiA9IDA7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBjbGVhcjogY2xlYXIsXG4gICAgdG86IHRvLFxuICAgIHRvZ2dsZUFjdGl2ZTogdG9nZ2xlQWN0aXZlXG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBFbmdpbmUocm9vdCwgY29udGFpbmVyLCBzbGlkZXMsIG9wdGlvbnMsIGV2ZW50cykge1xuICAvLyBPcHRpb25zXG4gIHZhciBhbGlnbiA9IG9wdGlvbnMuYWxpZ24sXG4gICAgICBzY3JvbGxBeGlzID0gb3B0aW9ucy5heGlzLFxuICAgICAgc3RhcnRJbmRleCA9IG9wdGlvbnMuc3RhcnRJbmRleCxcbiAgICAgIGluVmlld1RocmVzaG9sZCA9IG9wdGlvbnMuaW5WaWV3VGhyZXNob2xkLFxuICAgICAgbG9vcCA9IG9wdGlvbnMubG9vcCxcbiAgICAgIHNwZWVkID0gb3B0aW9ucy5zcGVlZCxcbiAgICAgIGRyYWdGcmVlID0gb3B0aW9ucy5kcmFnRnJlZSxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsID0gb3B0aW9ucy5zbGlkZXNUb1Njcm9sbCxcbiAgICAgIGNvbnRhaW5TY3JvbGwgPSBvcHRpb25zLmNvbnRhaW5TY3JvbGwsXG4gICAgICBpc1J0bCA9IG9wdGlvbnMuaXNSdGw7IC8vIE1lYXN1cmVtZW50c1xuXG4gIHZhciBheGlzID0gQXhpcyhzY3JvbGxBeGlzKTtcbiAgdmFyIHB4VG9QZXJjZW50ID0gUHhUb1BlcmNlbnQoYXhpcy5tZWFzdXJlKGNvbnRhaW5lcikpO1xuICB2YXIgdmlld1NpemUgPSBweFRvUGVyY2VudC50b3RhbFBlcmNlbnQ7XG4gIHZhciBzbGlkZVNpemVzID0gc2xpZGVzLm1hcChheGlzLm1lYXN1cmUpLm1hcChweFRvUGVyY2VudC5tZWFzdXJlKTtcbiAgdmFyIHNsaWRlSW5kZXhlcyA9IGFycmF5S2V5cyhzbGlkZVNpemVzKTtcbiAgdmFyIGdyb3VwZWRTaXplcyA9IGdyb3VwQXJyYXkoc2xpZGVTaXplcywgc2xpZGVzVG9TY3JvbGwpO1xuICB2YXIgc25hcFNpemVzID0gZ3JvdXBlZFNpemVzLm1hcChmdW5jdGlvbiAoZykge1xuICAgIHJldHVybiBnLnJlZHVjZShmdW5jdGlvbiAoYSwgcykge1xuICAgICAgcmV0dXJuIGEgKyBzO1xuICAgIH0pO1xuICB9KTtcbiAgdmFyIGNvbnRlbnRTaXplID0gc2xpZGVTaXplcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIHMpIHtcbiAgICByZXR1cm4gYSArIHM7XG4gIH0sIDApO1xuICB2YXIgYWxpZ25tZW50ID0gQWxpZ25tZW50KHtcbiAgICBhbGlnbjogYWxpZ24sXG4gICAgdmlld1NpemU6IHZpZXdTaXplXG4gIH0pO1xuICB2YXIgc2Nyb2xsU25hcCA9IFNjcm9sbFNuYXAoe1xuICAgIHNuYXBTaXplczogc25hcFNpemVzLFxuICAgIGFsaWdubWVudDogYWxpZ25tZW50LFxuICAgIGxvb3A6IGxvb3BcbiAgfSk7XG4gIHZhciBkZWZhdWx0U25hcHMgPSBhcnJheUtleXMoc25hcFNpemVzKS5tYXAoc2Nyb2xsU25hcC5tZWFzdXJlKTtcbiAgdmFyIGNvbnRhaW4gPSBTY3JvbGxDb250YWluKHtcbiAgICBhbGlnbm1lbnQ6IGFsaWdubWVudCxcbiAgICBjb250ZW50U2l6ZTogY29udGVudFNpemUsXG4gICAgdmlld1NpemU6IHZpZXdTaXplXG4gIH0pO1xuICB2YXIgc2hvdWxkQ29udGFpbiA9ICFsb29wICYmIGNvbnRhaW5TY3JvbGwgIT09ICcnO1xuICB2YXIgdHJpbVNuYXBzID0gY29udGFpblNjcm9sbCA9PT0gJ3RyaW1TbmFwcyc7XG4gIHZhciBjb250YWluZWRTbmFwcyA9IGNvbnRhaW4ubWVhc3VyZShkZWZhdWx0U25hcHMsIHRyaW1TbmFwcyk7XG4gIHZhciBzY3JvbGxTbmFwcyA9IHNob3VsZENvbnRhaW4gPyBjb250YWluZWRTbmFwcyA6IGRlZmF1bHRTbmFwczsgLy8gSW5kZXhcblxuICB2YXIgaW5kZXhNYXggPSBNYXRoLm1heCgwLCBzY3JvbGxTbmFwcy5sZW5ndGggLSAxKTtcbiAgdmFyIGluZGV4U3BhbiA9IExpbWl0KHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiBpbmRleE1heFxuICB9KTtcbiAgdmFyIGluZGV4ID0gQ291bnRlcih7XG4gICAgbGltaXQ6IGluZGV4U3BhbixcbiAgICBzdGFydDogc3RhcnRJbmRleCxcbiAgICBsb29wOiBsb29wXG4gIH0pO1xuICB2YXIgaW5kZXhQcmV2aW91cyA9IGluZGV4LmNsb25lKCk7IC8vIFNjcm9sbExpbWl0XG5cbiAgdmFyIHNjcm9sbExpbWl0ID0gU2Nyb2xsTGltaXQoe1xuICAgIGxvb3A6IGxvb3AsXG4gICAgY29udGVudFNpemU6IGNvbnRlbnRTaXplXG4gIH0pO1xuICB2YXIgbGltaXQgPSBzY3JvbGxMaW1pdC5tZWFzdXJlKHNjcm9sbFNuYXBzKTsgLy8gRHJhd1xuXG4gIHZhciB1cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgZW5naW5lLnNjcm9sbEJvZHkuc2Vlayh0YXJnZXQpLnVwZGF0ZSgpO1xuICAgIHZhciBzZXR0bGVkID0gZW5naW5lLnNjcm9sbEJvZHkuc2V0dGxlKHRhcmdldCk7XG5cbiAgICBpZiAoIWRyYWdIYW5kbGVyLnBvaW50ZXJEb3duKCkpIHtcbiAgICAgIGlmICghbG9vcCkgZW5naW5lLnNjcm9sbEJvdW5kcy5jb25zdHJhaW4odGFyZ2V0KTtcblxuICAgICAgaWYgKHNldHRsZWQpIHtcbiAgICAgICAgZW5naW5lLmFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgIGV2ZW50cy5lbWl0KCdzZXR0bGUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobG9vcCkge1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IGVuZ2luZS5zY3JvbGxCb2R5LmRpcmVjdGlvbi5nZXQoKTtcbiAgICAgIGVuZ2luZS5zY3JvbGxMb29wZXIubG9vcChsb29wVmVjdG9ycywgZGlyZWN0aW9uKTtcbiAgICAgIGVuZ2luZS5zbGlkZUxvb3Blci5sb29wKHNsaWRlcyk7XG4gICAgfVxuXG4gICAgaWYgKCFzZXR0bGVkKSBldmVudHMuZW1pdCgnc2Nyb2xsJyk7XG4gICAgZW5naW5lLnRyYW5zbGF0ZS50byhlbmdpbmUuc2Nyb2xsQm9keS5sb2NhdGlvbik7XG4gICAgZW5naW5lLmFuaW1hdGlvbi5wcm9jZWVkKCk7XG4gIH07IC8vIFNoYXJlZFxuXG5cbiAgdmFyIGFuaW1hdGlvbiA9IEFuaW1hdGlvbih1cGRhdGUpO1xuICB2YXIgc3RhcnRMb2NhdGlvbiA9IHNjcm9sbFNuYXBzW2luZGV4LmdldCgpXTtcbiAgdmFyIGxvY2F0aW9uID0gVmVjdG9yMUQoc3RhcnRMb2NhdGlvbik7XG4gIHZhciB0YXJnZXQgPSBWZWN0b3IxRChzdGFydExvY2F0aW9uKTtcbiAgdmFyIGxvb3BWZWN0b3JzID0gW2xvY2F0aW9uLCB0YXJnZXRdO1xuICB2YXIgc2Nyb2xsQm9keSA9IFNjcm9sbEJvZHkoe1xuICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICBzcGVlZDogc3BlZWQsXG4gICAgbWFzczogMVxuICB9KTtcbiAgdmFyIHNjcm9sbFRhcmdldCA9IFNjcm9sbFRhcmdldCh7XG4gICAgY29udGVudFNpemU6IGNvbnRlbnRTaXplLFxuICAgIGluZGV4OiBpbmRleCxcbiAgICBsaW1pdDogbGltaXQsXG4gICAgbG9vcDogbG9vcCxcbiAgICBzY3JvbGxTbmFwczogc2Nyb2xsU25hcHMsXG4gICAgdGFyZ2V0OiB0YXJnZXRcbiAgfSk7XG4gIHZhciBzY3JvbGxUbyA9IFNjcm9sbFRvKHtcbiAgICBhbmltYXRpb246IGFuaW1hdGlvbixcbiAgICBldmVudHM6IGV2ZW50cyxcbiAgICBpbmRleDogaW5kZXgsXG4gICAgaW5kZXhQcmV2aW91czogaW5kZXhQcmV2aW91cyxcbiAgICBzY3JvbGxUYXJnZXQ6IHNjcm9sbFRhcmdldCxcbiAgICB0YXJnZXQ6IHRhcmdldFxuICB9KTtcbiAgdmFyIHNsaWRlc0luVmlldyA9IFNsaWRlc0luVmlldyh7XG4gICAgY29udGVudFNpemU6IGNvbnRlbnRTaXplLFxuICAgIGluVmlld1RocmVzaG9sZDogaW5WaWV3VGhyZXNob2xkLFxuICAgIGxvb3A6IGxvb3AsXG4gICAgc2xpZGVTaXplczogc2xpZGVTaXplcyxcbiAgICB2aWV3U2l6ZTogdmlld1NpemVcbiAgfSk7IC8vIERyYWdIYW5kbGVyXG5cbiAgdmFyIGRyYWdIYW5kbGVyID0gRHJhZ0hhbmRsZXIoe1xuICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uLFxuICAgIGF4aXM6IGF4aXMsXG4gICAgZHJhZ0ZyZWU6IGRyYWdGcmVlLFxuICAgIGRyYWdUcmFja2VyOiBEcmFnVHJhY2tlcih7XG4gICAgICBheGlzOiBheGlzLFxuICAgICAgcHhUb1BlcmNlbnQ6IHB4VG9QZXJjZW50XG4gICAgfSksXG4gICAgZWxlbWVudDogcm9vdCxcbiAgICBldmVudHM6IGV2ZW50cyxcbiAgICBpbmRleDogaW5kZXgsXG4gICAgbGltaXQ6IGxpbWl0LFxuICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICBsb29wOiBsb29wLFxuICAgIHNjcm9sbEJvZHk6IHNjcm9sbEJvZHksXG4gICAgc2Nyb2xsVG86IHNjcm9sbFRvLFxuICAgIHNjcm9sbFRhcmdldDogc2Nyb2xsVGFyZ2V0LFxuICAgIHRhcmdldDogdGFyZ2V0XG4gIH0pOyAvLyBTbGlkZXJcblxuICB2YXIgZW5naW5lID0ge1xuICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uLFxuICAgIGF4aXM6IGF4aXMsXG4gICAgZHJhZ0hhbmRsZXI6IGRyYWdIYW5kbGVyLFxuICAgIHB4VG9QZXJjZW50OiBweFRvUGVyY2VudCxcbiAgICBpbmRleDogaW5kZXgsXG4gICAgaW5kZXhQcmV2aW91czogaW5kZXhQcmV2aW91cyxcbiAgICBsaW1pdDogbGltaXQsXG4gICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgc2Nyb2xsQm9keTogc2Nyb2xsQm9keSxcbiAgICBzY3JvbGxCb3VuZHM6IFNjcm9sbEJvdW5kcyh7XG4gICAgICBhbmltYXRpb246IGFuaW1hdGlvbixcbiAgICAgIGxpbWl0OiBsaW1pdCxcbiAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgIHNjcm9sbEJvZHk6IHNjcm9sbEJvZHlcbiAgICB9KSxcbiAgICBzY3JvbGxMb29wZXI6IFNjcm9sbExvb3Blcih7XG4gICAgICBjb250ZW50U2l6ZTogY29udGVudFNpemUsXG4gICAgICBsaW1pdDogbGltaXQsXG4gICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICBweFRvUGVyY2VudDogcHhUb1BlcmNlbnRcbiAgICB9KSxcbiAgICBzY3JvbGxQcm9ncmVzczogU2Nyb2xsUHJvZ3Jlc3Moe1xuICAgICAgbGltaXQ6IGxpbWl0XG4gICAgfSksXG4gICAgc2Nyb2xsU25hcHM6IHNjcm9sbFNuYXBzLFxuICAgIHNjcm9sbFRhcmdldDogc2Nyb2xsVGFyZ2V0LFxuICAgIHNjcm9sbFRvOiBzY3JvbGxUbyxcbiAgICBzbGlkZUZvY3VzOiBTbGlkZUZvY3VzKHtcbiAgICAgIHJvb3Q6IHJvb3QsXG4gICAgICBzY3JvbGxUbzogc2Nyb2xsVG8sXG4gICAgICBzbGlkZXNUb1Njcm9sbDogc2xpZGVzVG9TY3JvbGxcbiAgICB9KSxcbiAgICBzbGlkZUxvb3BlcjogU2xpZGVMb29wZXIoe1xuICAgICAgYXhpczogYXhpcyxcbiAgICAgIGNvbnRlbnRTaXplOiBjb250ZW50U2l6ZSxcbiAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgIHNjcm9sbFNuYXBzOiBzY3JvbGxTbmFwcyxcbiAgICAgIHNsaWRlU2l6ZXM6IHNsaWRlU2l6ZXMsXG4gICAgICBzbGlkZXNJblZpZXc6IHNsaWRlc0luVmlldyxcbiAgICAgIHZpZXdTaXplOiB2aWV3U2l6ZSxcbiAgICAgIGlzUnRsOiBpc1J0bFxuICAgIH0pLFxuICAgIHNsaWRlc0luVmlldzogc2xpZGVzSW5WaWV3LFxuICAgIHNsaWRlSW5kZXhlczogc2xpZGVJbmRleGVzLFxuICAgIHRhcmdldDogdGFyZ2V0LFxuICAgIHRyYW5zbGF0ZTogVHJhbnNsYXRlKHtcbiAgICAgIGF4aXM6IGF4aXMsXG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgIGlzUnRsOiBpc1J0bFxuICAgIH0pXG4gIH07XG4gIHJldHVybiBlbmdpbmU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdmFyIGxpc3RlbmVycyA9IHtcbiAgICBkZXN0cm95OiBbXSxcbiAgICBwb2ludGVyRG93bjogW10sXG4gICAgcG9pbnRlclVwOiBbXSxcbiAgICBpbml0OiBbXSxcbiAgICByZUluaXQ6IFtdLFxuICAgIHJlc2l6ZTogW10sXG4gICAgc2Nyb2xsOiBbXSxcbiAgICBzZWxlY3Q6IFtdLFxuICAgIHNldHRsZTogW11cbiAgfTtcblxuICBmdW5jdGlvbiBlbWl0KGV2dCkge1xuICAgIGxpc3RlbmVyc1tldnRdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlKGV2dCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBvbihldnQsIGNiKSB7XG4gICAgbGlzdGVuZXJzW2V2dF0gPSBsaXN0ZW5lcnNbZXZ0XS5jb25jYXQoW2NiXSk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBvZmYoZXZ0LCBjYikge1xuICAgIGxpc3RlbmVyc1tldnRdID0gbGlzdGVuZXJzW2V2dF0uZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZSAhPT0gY2I7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBlbWl0OiBlbWl0LFxuICAgIG9mZjogb2ZmLFxuICAgIG9uOiBvblxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICBhbGlnbjogJ2NlbnRlcicsXG4gIGF4aXM6ICd4JyxcbiAgY29udGFpblNjcm9sbDogJycsXG4gIGNvbnRhaW5lclNlbGVjdG9yOiAnKicsXG4gIGRyYWdGcmVlOiBmYWxzZSxcbiAgZHJhZ2dhYmxlOiB0cnVlLFxuICBkcmFnZ2FibGVDbGFzczogJ2lzLWRyYWdnYWJsZScsXG4gIGRyYWdnaW5nQ2xhc3M6ICdpcy1kcmFnZ2luZycsXG4gIGluVmlld1RocmVzaG9sZDogMCxcbiAgbG9vcDogZmFsc2UsXG4gIHNlbGVjdGVkQ2xhc3M6ICdpcy1zZWxlY3RlZCcsXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICBzcGVlZDogMTAsXG4gIHN0YXJ0SW5kZXg6IDAsXG4gIGlzUnRsOiBmYWxzZVxufTtcblxuZnVuY3Rpb24gRW1ibGFDYXJvdXNlbChzbGlkZXJSb290LCB1c2VyT3B0aW9ucykge1xuICB2YXIgZXZlbnRzID0gRXZlbnRFbWl0dGVyKCk7XG4gIHZhciBldmVudFN0b3JlID0gRXZlbnRTdG9yZSgpO1xuICB2YXIgZGVib3VuY2VkUmVzaXplID0gZGVib3VuY2UocmVzaXplLCA1MDApO1xuICB2YXIgcmVJbml0ID0gcmVBY3RpdmF0ZTtcbiAgdmFyIG9uID0gZXZlbnRzLm9uLFxuICAgICAgb2ZmID0gZXZlbnRzLm9mZjtcbiAgdmFyIGVuZ2luZTtcbiAgdmFyIGFjdGl2YXRlZCA9IGZhbHNlO1xuXG4gIHZhciBvcHRpb25zID0gX2V4dGVuZHMoe30sIGRlZmF1bHRPcHRpb25zKTtcblxuICB2YXIgcm9vdEVsZW1lbnRTaXplID0gMDtcbiAgdmFyIGNvbnRhaW5lcjtcbiAgdmFyIHNsaWRlcztcbiAgYWN0aXZhdGUodXNlck9wdGlvbnMpO1xuXG4gIGZ1bmN0aW9uIHN0b3JlRWxlbWVudHMoKSB7XG4gICAgaWYgKCFzbGlkZXJSb290KSB0aHJvdyBuZXcgRXJyb3IoJ01pc3Npbmcgcm9vdCBub2RlIPCfmKInKTtcbiAgICB2YXIgc2VsZWN0b3IgPSBvcHRpb25zLmNvbnRhaW5lclNlbGVjdG9yO1xuICAgIHZhciBzbGlkZXJDb250YWluZXIgPSBzbGlkZXJSb290LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGlmICghc2xpZGVyQ29udGFpbmVyKSB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgY29udGFpbmVyIG5vZGUg8J+YoicpO1xuICAgIGNvbnRhaW5lciA9IHNsaWRlckNvbnRhaW5lcjtcbiAgICBzbGlkZXMgPSBhcnJheUZyb21Db2xsZWN0aW9uKGNvbnRhaW5lci5jaGlsZHJlbik7XG4gIH1cblxuICBmdW5jdGlvbiBhY3RpdmF0ZShwYXJ0aWFsT3B0aW9ucykge1xuICAgIHN0b3JlRWxlbWVudHMoKTtcbiAgICBvcHRpb25zID0gX2V4dGVuZHMob3B0aW9ucywgcGFydGlhbE9wdGlvbnMpO1xuICAgIGVuZ2luZSA9IEVuZ2luZShzbGlkZXJSb290LCBjb250YWluZXIsIHNsaWRlcywgb3B0aW9ucywgZXZlbnRzKTtcbiAgICByb290RWxlbWVudFNpemUgPSBlbmdpbmUuYXhpcy5tZWFzdXJlKHNsaWRlclJvb3QpO1xuICAgIGV2ZW50U3RvcmUuYWRkKHdpbmRvdywgJ3Jlc2l6ZScsIGRlYm91bmNlZFJlc2l6ZSk7XG4gICAgZW5naW5lLnRyYW5zbGF0ZS50byhlbmdpbmUuc2Nyb2xsQm9keS5sb2NhdGlvbik7XG5cbiAgICBpZiAob3B0aW9ucy5sb29wKSB7XG4gICAgICBpZiAoIWVuZ2luZS5zbGlkZUxvb3Blci5jYW5Mb29wKCkpIHtcbiAgICAgICAgZGVBY3RpdmF0ZSgpO1xuICAgICAgICByZXR1cm4gYWN0aXZhdGUoe1xuICAgICAgICAgIGxvb3A6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBlbmdpbmUuc2xpZGVMb29wZXIubG9vcChzbGlkZXMpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmRyYWdnYWJsZSAmJiBzbGlkZXMubGVuZ3RoKSB7XG4gICAgICBlbmdpbmUuZHJhZ0hhbmRsZXIuYWRkQWN0aXZhdGlvbkV2ZW50cygpO1xuXG4gICAgICBpZiAob3B0aW9ucy5kcmFnZ2FibGVDbGFzcykge1xuICAgICAgICBhZGRDbGFzcyhzbGlkZXJSb290LCBvcHRpb25zLmRyYWdnYWJsZUNsYXNzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuZHJhZ2dpbmdDbGFzcykge1xuICAgICAgICBldmVudHMub24oJ3BvaW50ZXJEb3duJywgdG9nZ2xlRHJhZ2dpbmdDbGFzcykub24oJ3BvaW50ZXJVcCcsIHRvZ2dsZURyYWdnaW5nQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzbGlkZXMubGVuZ3RoKSB7XG4gICAgICBlbmdpbmUuc2xpZGVGb2N1cy5hZGRBY3RpdmF0aW9uRXZlbnRzKHNsaWRlcyk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuc2VsZWN0ZWRDbGFzcykge1xuICAgICAgdG9nZ2xlU2VsZWN0ZWRDbGFzcygpO1xuICAgICAgZXZlbnRzLm9uKCdzZWxlY3QnLCB0b2dnbGVTZWxlY3RlZENsYXNzKS5vbigncG9pbnRlclVwJywgdG9nZ2xlU2VsZWN0ZWRDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKCFhY3RpdmF0ZWQpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZXZlbnRzLmVtaXQoJ2luaXQnKTtcbiAgICAgIH0sIDApO1xuICAgICAgYWN0aXZhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVEcmFnZ2luZ0NsYXNzKGV2dCkge1xuICAgIHZhciBkcmFnZ2luZ0NsYXNzID0gb3B0aW9ucy5kcmFnZ2luZ0NsYXNzO1xuICAgIGlmIChldnQgPT09ICdwb2ludGVyRG93bicpIGFkZENsYXNzKHNsaWRlclJvb3QsIGRyYWdnaW5nQ2xhc3MpO2Vsc2UgcmVtb3ZlQ2xhc3Moc2xpZGVyUm9vdCwgZHJhZ2dpbmdDbGFzcyk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVTZWxlY3RlZENsYXNzKCkge1xuICAgIHZhciBzZWxlY3RlZENsYXNzID0gb3B0aW9ucy5zZWxlY3RlZENsYXNzO1xuICAgIHZhciBpblZpZXcgPSBzbGlkZXNJblZpZXcodHJ1ZSk7XG4gICAgdmFyIG5vdEluVmlldyA9IHNsaWRlc05vdEluVmlldyh0cnVlKTtcbiAgICBub3RJblZpZXcuZm9yRWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIHJlbW92ZUNsYXNzKHNsaWRlc1tpXSwgc2VsZWN0ZWRDbGFzcyk7XG4gICAgfSk7XG4gICAgaW5WaWV3LmZvckVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBhZGRDbGFzcyhzbGlkZXNbaV0sIHNlbGVjdGVkQ2xhc3MpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVBY3RpdmF0ZSgpIHtcbiAgICBlbmdpbmUuZHJhZ0hhbmRsZXIucmVtb3ZlQWxsRXZlbnRzKCk7XG4gICAgZW5naW5lLnNsaWRlRm9jdXMucmVtb3ZlQWxsRXZlbnRzKCk7XG4gICAgZW5naW5lLmFuaW1hdGlvbi5zdG9wKCk7XG4gICAgZXZlbnRTdG9yZS5yZW1vdmVBbGwoKTtcbiAgICBlbmdpbmUudHJhbnNsYXRlLmNsZWFyKCk7XG4gICAgZW5naW5lLnNsaWRlTG9vcGVyLmNsZWFyKHNsaWRlcyk7XG4gICAgcmVtb3ZlQ2xhc3Moc2xpZGVyUm9vdCwgb3B0aW9ucy5kcmFnZ2FibGVDbGFzcyk7XG4gICAgc2xpZGVzLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiByZW1vdmVDbGFzcyhzLCBvcHRpb25zLnNlbGVjdGVkQ2xhc3MpO1xuICAgIH0pO1xuICAgIGV2ZW50cy5vZmYoJ3NlbGVjdCcsIHRvZ2dsZVNlbGVjdGVkQ2xhc3MpO1xuICAgIGV2ZW50cy5vZmYoJ3BvaW50ZXJVcCcsIHRvZ2dsZVNlbGVjdGVkQ2xhc3MpO1xuICAgIGV2ZW50cy5vZmYoJ3BvaW50ZXJEb3duJywgdG9nZ2xlRHJhZ2dpbmdDbGFzcyk7XG4gICAgZXZlbnRzLm9mZigncG9pbnRlclVwJywgdG9nZ2xlRHJhZ2dpbmdDbGFzcyk7XG4gIH1cblxuICBmdW5jdGlvbiByZUFjdGl2YXRlKHBhcnRpYWxPcHRpb25zKSB7XG4gICAgaWYgKCFhY3RpdmF0ZWQpIHJldHVybjtcbiAgICB2YXIgc3RhcnRJbmRleCA9IHNlbGVjdGVkU2Nyb2xsU25hcCgpO1xuXG4gICAgdmFyIG5ld09wdGlvbnMgPSBfZXh0ZW5kcyh7XG4gICAgICBzdGFydEluZGV4OiBzdGFydEluZGV4XG4gICAgfSwgcGFydGlhbE9wdGlvbnMpO1xuXG4gICAgZGVBY3RpdmF0ZSgpO1xuICAgIGFjdGl2YXRlKG5ld09wdGlvbnMpO1xuICAgIGV2ZW50cy5lbWl0KCdyZUluaXQnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaWYgKCFhY3RpdmF0ZWQpIHJldHVybjtcbiAgICBkZUFjdGl2YXRlKCk7XG4gICAgYWN0aXZhdGVkID0gZmFsc2U7XG4gICAgZXZlbnRzLmVtaXQoJ2Rlc3Ryb3knKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICBpZiAoIWFjdGl2YXRlZCkgcmV0dXJuO1xuICAgIHZhciBuZXdSb290RWxlbWVudFNpemUgPSBlbmdpbmUuYXhpcy5tZWFzdXJlKHNsaWRlclJvb3QpO1xuICAgIGlmIChyb290RWxlbWVudFNpemUgIT09IG5ld1Jvb3RFbGVtZW50U2l6ZSkgcmVBY3RpdmF0ZSgpO1xuICAgIGV2ZW50cy5lbWl0KCdyZXNpemUnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNsaWRlc0luVmlldyh0YXJnZXQpIHtcbiAgICB2YXIgbG9jYXRpb24gPSBlbmdpbmVbdGFyZ2V0ID8gJ3RhcmdldCcgOiAnbG9jYXRpb24nXS5nZXQoKTtcbiAgICB2YXIgdHlwZSA9IG9wdGlvbnMubG9vcCA/ICdyZW1vdmVPZmZzZXQnIDogJ2NvbnN0cmFpbic7XG4gICAgcmV0dXJuIGVuZ2luZS5zbGlkZXNJblZpZXcuY2hlY2soZW5naW5lLmxpbWl0W3R5cGVdKGxvY2F0aW9uKSk7XG4gIH1cblxuICBmdW5jdGlvbiBzbGlkZXNOb3RJblZpZXcodGFyZ2V0KSB7XG4gICAgdmFyIGluVmlldyA9IHNsaWRlc0luVmlldyh0YXJnZXQpO1xuICAgIHJldHVybiBlbmdpbmUuc2xpZGVJbmRleGVzLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIGluVmlldy5pbmRleE9mKGkpID09PSAtMTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjcm9sbFRvKGluZGV4LCBkaXJlY3Rpb24pIHtcbiAgICBlbmdpbmUuc2Nyb2xsQm9keS51c2VEZWZhdWx0TWFzcygpLnVzZURlZmF1bHRTcGVlZCgpO1xuICAgIGlmIChhY3RpdmF0ZWQpIGVuZ2luZS5zY3JvbGxUby5pbmRleChpbmRleCwgZGlyZWN0aW9uIHx8IDApO1xuICB9XG5cbiAgZnVuY3Rpb24gc2Nyb2xsTmV4dCgpIHtcbiAgICB2YXIgbmV4dCA9IGVuZ2luZS5pbmRleC5jbG9uZSgpLmFkZCgxKTtcbiAgICBzY3JvbGxUbyhuZXh0LmdldCgpLCAtMSk7XG4gIH1cblxuICBmdW5jdGlvbiBzY3JvbGxQcmV2KCkge1xuICAgIHZhciBwcmV2ID0gZW5naW5lLmluZGV4LmNsb25lKCkuYWRkKC0xKTtcbiAgICBzY3JvbGxUbyhwcmV2LmdldCgpLCAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhblNjcm9sbE5leHQoKSB7XG4gICAgdmFyIG5leHQgPSBlbmdpbmUuaW5kZXguY2xvbmUoKS5hZGQoMSk7XG4gICAgcmV0dXJuIG5leHQuZ2V0KCkgIT09IHNlbGVjdGVkU2Nyb2xsU25hcCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuU2Nyb2xsUHJldigpIHtcbiAgICB2YXIgcHJldiA9IGVuZ2luZS5pbmRleC5jbG9uZSgpLmFkZCgtMSk7XG4gICAgcmV0dXJuIHByZXYuZ2V0KCkgIT09IHNlbGVjdGVkU2Nyb2xsU25hcCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2Nyb2xsU25hcExpc3QoKSB7XG4gICAgcmV0dXJuIGVuZ2luZS5zY3JvbGxTbmFwcy5tYXAoZW5naW5lLnNjcm9sbFByb2dyZXNzLmdldCk7XG4gIH1cblxuICBmdW5jdGlvbiBzY3JvbGxQcm9ncmVzcygpIHtcbiAgICByZXR1cm4gZW5naW5lLnNjcm9sbFByb2dyZXNzLmdldChlbmdpbmUubG9jYXRpb24uZ2V0KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VsZWN0ZWRTY3JvbGxTbmFwKCkge1xuICAgIHJldHVybiBlbmdpbmUuaW5kZXguZ2V0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcmV2aW91c1Njcm9sbFNuYXAoKSB7XG4gICAgcmV0dXJuIGVuZ2luZS5pbmRleFByZXZpb3VzLmdldCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xpY2tBbGxvd2VkKCkge1xuICAgIHJldHVybiBlbmdpbmUuZHJhZ0hhbmRsZXIuY2xpY2tBbGxvd2VkKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkYW5nZXJvdXNseUdldEVuZ2luZSgpIHtcbiAgICByZXR1cm4gZW5naW5lO1xuICB9XG5cbiAgZnVuY3Rpb24gY29udGFpbmVyTm9kZSgpIHtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgZnVuY3Rpb24gc2xpZGVOb2RlcygpIHtcbiAgICByZXR1cm4gc2xpZGVzO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgY2FuU2Nyb2xsTmV4dDogY2FuU2Nyb2xsTmV4dCxcbiAgICBjYW5TY3JvbGxQcmV2OiBjYW5TY3JvbGxQcmV2LFxuICAgIGNsaWNrQWxsb3dlZDogY2xpY2tBbGxvd2VkLFxuICAgIGNvbnRhaW5lck5vZGU6IGNvbnRhaW5lck5vZGUsXG4gICAgZGFuZ2Vyb3VzbHlHZXRFbmdpbmU6IGRhbmdlcm91c2x5R2V0RW5naW5lLFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgb2ZmOiBvZmYsXG4gICAgb246IG9uLFxuICAgIHByZXZpb3VzU2Nyb2xsU25hcDogcHJldmlvdXNTY3JvbGxTbmFwLFxuICAgIHJlSW5pdDogcmVJbml0LFxuICAgIHNjcm9sbE5leHQ6IHNjcm9sbE5leHQsXG4gICAgc2Nyb2xsUHJldjogc2Nyb2xsUHJldixcbiAgICBzY3JvbGxQcm9ncmVzczogc2Nyb2xsUHJvZ3Jlc3MsXG4gICAgc2Nyb2xsU25hcExpc3Q6IHNjcm9sbFNuYXBMaXN0LFxuICAgIHNjcm9sbFRvOiBzY3JvbGxUbyxcbiAgICBzZWxlY3RlZFNjcm9sbFNuYXA6IHNlbGVjdGVkU2Nyb2xsU25hcCxcbiAgICBzbGlkZU5vZGVzOiBzbGlkZU5vZGVzLFxuICAgIHNsaWRlc0luVmlldzogc2xpZGVzSW5WaWV3LFxuICAgIHNsaWRlc05vdEluVmlldzogc2xpZGVzTm90SW5WaWV3XG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBjYW5Vc2VET00oKSB7XG4gIHJldHVybiAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBhcmVFcXVhbFNoYWxsb3cob2JqZWN0QSwgb2JqZWN0Qikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0QSkubGVuZ3RoID09PSBPYmplY3Qua2V5cyhvYmplY3RCKS5sZW5ndGggJiYgT2JqZWN0LmtleXMob2JqZWN0QSkuZXZlcnkoZnVuY3Rpb24gKG9iamVjdEtleSkge1xuICAgIGlmICghb2JqZWN0Qi5oYXNPd25Qcm9wZXJ0eShvYmplY3RLZXkpKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIG9iamVjdEFbb2JqZWN0S2V5XSA9PT0gb2JqZWN0QltvYmplY3RLZXldO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXNlRW1ibGFDYXJvdXNlbChvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX2EgPSByZWFjdC51c2VTdGF0ZSgpLFxuICAgICAgZW1ibGEgPSBfYVswXSxcbiAgICAgIHNldEVtYmxhID0gX2FbMV07XG5cbiAgdmFyIF9iID0gcmVhY3QudXNlU3RhdGUoKSxcbiAgICAgIHZpZXdwb3J0ID0gX2JbMF0sXG4gICAgICBzZXRWaWV3cG9ydCA9IF9iWzFdO1xuXG4gIHZhciBzdG9yZWRPcHRpb25zID0gcmVhY3QudXNlUmVmKG9wdGlvbnMpO1xuICB2YXIgYWN0aXZlT3B0aW9ucyA9IHJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIGlmICghYXJlRXF1YWxTaGFsbG93KHN0b3JlZE9wdGlvbnMuY3VycmVudCwgb3B0aW9ucykpIHtcbiAgICAgIHN0b3JlZE9wdGlvbnMuY3VycmVudCA9IG9wdGlvbnM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0b3JlZE9wdGlvbnMuY3VycmVudDtcbiAgfSwgW3N0b3JlZE9wdGlvbnMsIG9wdGlvbnNdKTtcbiAgcmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY2FuVXNlRE9NKCkgJiYgdmlld3BvcnQpIHtcbiAgICAgIHZhciBuZXdFbWJsYV8xID0gRW1ibGFDYXJvdXNlbCh2aWV3cG9ydCwgYWN0aXZlT3B0aW9ucyk7XG4gICAgICBzZXRFbWJsYShuZXdFbWJsYV8xKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXdFbWJsYV8xLmRlc3Ryb3koKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEVtYmxhKHVuZGVmaW5lZCk7XG4gICAgfVxuICB9LCBbdmlld3BvcnQsIGFjdGl2ZU9wdGlvbnMsIHNldEVtYmxhXSk7XG4gIHJldHVybiBbc2V0Vmlld3BvcnQsIGVtYmxhXTtcbn1cblxuZXhwb3J0cy51c2VFbWJsYUNhcm91c2VsID0gdXNlRW1ibGFDYXJvdXNlbDsiXSwic291cmNlUm9vdCI6IiJ9