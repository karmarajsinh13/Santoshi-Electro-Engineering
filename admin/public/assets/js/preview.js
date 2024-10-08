/*!
* jQuery JavaScript Library v2.1.1
* http://jquery.com/
*
* Includes Sizzle.js
* http://sizzlejs.com/
*
* Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
* Released under the MIT license
* http://jquery.org/license
*
* Date: 2014-05-01T17:11Z
*/
!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length
          , n = K.type(e);
        return "function" !== n && !K.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }
    function r(e, t, n) {
        if (K.isFunction(t))
            return K.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return K.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (se.test(t))
                return K.filter(t, e, n);
            t = K.filter(t, e)
        }
        return K.grep(e, function(e) {
            return U.call(t, e) >= 0 !== n
        })
    }
    function i(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function o(e) {
        var t = pe[e] = {};
        return K.each(e.match(he) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function a() {
        Z.removeEventListener("DOMContentLoaded", a, !1),
        e.removeEventListener("load", a, !1),
        K.ready()
    }
    function s() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }),
        this.expando = K.expando + Math.random()
    }
    function u(e, t, n) {
        var r;
        if (n === undefined && 1 === e.nodeType)
            if (r = "data-" + t.replace(be, "-$1").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ve.test(n) ? K.parseJSON(n) : n)
                } catch (i) {}
                ye.set(e, t, n)
            } else
                n = undefined;
        return n
    }
    function c() {
        return !0
    }
    function l() {
        return !1
    }
    function f() {
        try {
            return Z.activeElement
        } catch (e) {}
    }
    function d(e, t) {
        return K.nodeName(e, "table") && K.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function h(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function p(e) {
        var t = Le.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function m(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            ge.set(e[n], "globalEval", !t || ge.get(t[n], "globalEval"))
    }
    function g(e, t) {
        var n, r, i, o, a, s, u, c;
        if (1 === t.nodeType) {
            if (ge.hasData(e) && (o = ge.access(e),
            a = ge.set(t, o),
            c = o.events))
                for (i in delete a.handle,
                a.events = {},
                c)
                    for (n = 0,
                    r = c[i].length; n < r; n++)
                        K.event.add(t, i, c[i][n]);
            ye.hasData(e) && (s = ye.access(e),
            u = K.extend({}, s),
            ye.set(t, u))
        }
    }
    function y(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return t === undefined || t && K.nodeName(e, t) ? K.merge([e], n) : n
    }
    function v(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ce.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function b(t, n) {
        var r, i = K(n.createElement(t)).appendTo(n.body), o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : K.css(i[0], "display");
        return i.detach(),
        o
    }
    function _(e) {
        var t = Z
          , n = Re[e];
        return n || ("none" !== (n = b(e, t)) && n || ((t = (qe = (qe || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(),
        t.close(),
        n = b(e, t),
        qe.detach()),
        Re[e] = n),
        n
    }
    function w(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || We(e)) && (a = n.getPropertyValue(t) || n[t]),
        n && ("" !== a || K.contains(e.ownerDocument, e) || (a = K.style(e, t)),
        $e.test(a) && ze.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        a !== undefined ? a + "" : a
    }
    function x(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    function k(e, t) {
        if (t in e)
            return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Xe.length; i--; )
            if ((t = Xe[i] + n)in e)
                return t;
        return r
    }
    function T(e, t, n) {
        var r = Ue.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function C(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)
            "margin" === n && (a += K.css(e, n + ke[o], !0, i)),
            r ? ("content" === n && (a -= K.css(e, "padding" + ke[o], !0, i)),
            "margin" !== n && (a -= K.css(e, "border" + ke[o] + "Width", !0, i))) : (a += K.css(e, "padding" + ke[o], !0, i),
            "padding" !== n && (a += K.css(e, "border" + ke[o] + "Width", !0, i)));
        return a
    }
    function S(e, t, n) {
        var r = !0
          , i = "width" === t ? e.offsetWidth : e.offsetHeight
          , o = We(e)
          , a = "border-box" === K.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = w(e, t, o)) < 0 || null == i) && (i = e.style[t]),
            $e.test(i))
                return i;
            r = a && (X.boxSizingReliable() || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + C(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }
    function D(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)
            (r = e[a]).style && (o[a] = ge.get(r, "olddisplay"),
            n = r.style.display,
            t ? (o[a] || "none" !== n || (r.style.display = ""),
            "" === r.style.display && Te(r) && (o[a] = ge.access(r, "olddisplay", _(r.nodeName)))) : (i = Te(r),
            "none" === n && i || ge.set(r, "olddisplay", i ? n : K.css(r, "display"))));
        for (a = 0; a < s; a++)
            (r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    function A(e, t, n, r, i) {
        return new A.prototype.init(e,t,n,r,i)
    }
    function M() {
        return setTimeout(function() {
            Ze = undefined
        }),
        Ze = K.now()
    }
    function E(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ke[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function N(e, t, n) {
        for (var r, i = (rt[t] || []).concat(rt["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function j(e, t, n) {
        var r, i, o, a, s, u, c, l = this, f = {}, d = e.style, h = e.nodeType && Te(e), p = ge.get(e, "fxshow");
        for (r in n.queue || (null == (s = K._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
        u = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || u()
        }
        ),
        s.unqueued++,
        l.always(function() {
            l.always(function() {
                s.unqueued--,
                K.queue(e, "fx").length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
        "inline" === ("none" === (c = K.css(e, "display")) ? ge.get(e, "olddisplay") || _(e.nodeName) : c) && "none" === K.css(e, "float") && (d.display = "inline-block")),
        n.overflow && (d.overflow = "hidden",
        l.always(function() {
            d.overflow = n.overflow[0],
            d.overflowX = n.overflow[1],
            d.overflowY = n.overflow[2]
        })),
        t)
            if (i = t[r],
            Ke.exec(i)) {
                if (delete t[r],
                o = o || "toggle" === i,
                i === (h ? "hide" : "show")) {
                    if ("show" !== i || !p || p[r] === undefined)
                        continue;
                    h = !0
                }
                f[r] = p && p[r] || K.style(e, r)
            } else
                c = undefined;
        if (K.isEmptyObject(f))
            "inline" === ("none" === c ? _(e.nodeName) : c) && (d.display = c);
        else
            for (r in p ? "hidden"in p && (h = p.hidden) : p = ge.access(e, "fxshow", {}),
            o && (p.hidden = !h),
            h ? K(e).show() : l.done(function() {
                K(e).hide()
            }),
            l.done(function() {
                var t;
                for (t in ge.remove(e, "fxshow"),
                f)
                    K.style(e, t, f[t])
            }),
            f)
                a = N(h ? p[r] : 0, r, l),
                r in p || (p[r] = a.start,
                h && (a.end = a.start,
                a.start = "width" === r || "height" === r ? 1 : 0))
    }
    function O(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (i = t[r = K.camelCase(n)],
            o = e[n],
            K.isArray(o) && (i = o[1],
            o = e[n] = o[0]),
            n !== r && (e[r] = o,
            delete e[n]),
            (a = K.cssHooks[r]) && "expand"in a)
                for (n in o = a.expand(o),
                delete e[r],
                o)
                    n in e || (e[n] = o[n],
                    t[n] = i);
            else
                t[r] = i
    }
    function F(e, t, n) {
        var r, i, o = 0, a = nt.length, s = K.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return !1;
            for (var t = Ze || M(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++)
                c.tweens[o].run(r);
            return s.notifyWith(e, [c, r, n]),
            r < 1 && a ? n : (s.resolveWith(e, [c]),
            !1)
        }, c = s.promise({
            elem: e,
            props: K.extend({}, t),
            opts: K.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Ze || M(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = K.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? c.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; n < r; n++)
                    c.tweens[n].run(1);
                return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]),
                this
            }
        }), l = c.props;
        for (O(l, c.opts.specialEasing); o < a; o++)
            if (r = nt[o].call(c, e, l, c.opts))
                return r;
        return K.map(l, N, c),
        K.isFunction(c.opts.start) && c.opts.start.call(e, c),
        K.fx.timer(K.extend(u, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    function P(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(he) || [];
            if (K.isFunction(n))
                for (; r = o[i++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function I(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0,
            K.each(e[s] || [], function(e, s) {
                var c = s(t, n, r);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : void 0 : (t.dataTypes.unshift(c),
                i(c),
                !1)
            }),
            u
        }
        var o = {}
          , a = e === xt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function L(e, t) {
        var n, r, i = K.ajaxSettings.flatOptions || {};
        for (n in t)
            t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && K.extend(!0, e, r),
        e
    }
    function Y(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
            u.shift(),
            r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0]in n)
            o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o)
            return o !== u[0] && u.unshift(o),
            n[o]
    }
    function H(e, t, n, r) {
        var i, o, a, s, u, c = {}, l = e.dataTypes.slice();
        if (l[1])
            for (a in e.converters)
                c[a.toLowerCase()] = e.converters[a];
        for (o = l.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            u = o,
            o = l.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (!(a = c[u + " " + o] || c["* " + o]))
                        for (i in c)
                            if ((s = i.split(" "))[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                                !0 === a ? a = c[i] : !0 !== c[i] && (o = s[0],
                                l.unshift(s[1]));
                                break
                            }
                    if (!0 !== a)
                        if (a && e.throws)
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (f) {
                                return {
                                    state: "parsererror",
                                    error: a ? f : "No conversion from " + u + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function q(e, t, n, r) {
        var i;
        if (K.isArray(t))
            K.each(t, function(t, i) {
                n || Ct.test(e) ? r(e, i) : q(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== K.type(t))
            r(e, t);
        else
            for (i in t)
                q(e + "[" + i + "]", t[i], n, r)
    }
    function R(e) {
        return K.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var z = []
      , $ = z.slice
      , W = z.concat
      , G = z.push
      , U = z.indexOf
      , B = {}
      , Q = B.toString
      , V = B.hasOwnProperty
      , X = {}
      , Z = e.document
      , J = "2.1.1"
      , K = function(e, t) {
        return new K.fn.init(e,t)
    }
      , ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , te = /^-ms-/
      , ne = /-([\da-z])/gi
      , re = function(e, t) {
        return t.toUpperCase()
    };
    K.fn = K.prototype = {
        jquery: J,
        constructor: K,
        selector: "",
        length: 0,
        toArray: function() {
            return $.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : $.call(this)
        },
        pushStack: function(e) {
            var t = K.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return K.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(K.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack($.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: G,
        sort: z.sort,
        splice: z.splice
    },
    K.extend = K.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || K.isFunction(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = a[t],
                    a !== (r = e[t]) && (c && r && (K.isPlainObject(r) || (i = K.isArray(r))) ? (i ? (i = !1,
                    o = n && K.isArray(n) ? n : []) : o = n && K.isPlainObject(n) ? n : {},
                    a[t] = K.extend(c, o, r)) : r !== undefined && (a[t] = r));
        return a
    }
    ,
    K.extend({
        expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === K.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !K.isArray(e) && e - parseFloat(e) >= 0
        },
        isPlainObject: function(e) {
            return "object" === K.type(e) && !e.nodeType && !K.isWindow(e) && !(e.constructor && !V.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? B[Q.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = K.trim(e)) && (1 === e.indexOf("use strict") ? ((t = Z.createElement("script")).text = e,
            Z.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(te, "ms-").replace(ne, re)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i = 0
              , o = e.length
              , a = n(e);
            if (r) {
                if (a)
                    for (; i < o && !1 !== t.apply(e[i], r); i++)
                        ;
                else
                    for (i in e)
                        if (!1 === t.apply(e[i], r))
                            break
            } else if (a)
                for (; i < o && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ee, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? K.merge(r, "string" == typeof e ? [e] : e) : G.call(r, e)),
            r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : U.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, r) {
            var i, o = 0, a = e.length, s = [];
            if (n(e))
                for (; o < a; o++)
                    null != (i = t(e[o], o, r)) && s.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, r)) && s.push(i);
            return W.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t],
            t = e,
            e = n),
            K.isFunction(e) ? (r = $.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat($.call(arguments)))
            }
            ).guid = e.guid = e.guid || K.guid++,
            i) : undefined
        },
        now: Date.now,
        support: X
    }),
    K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        B["[object " + t + "]"] = t.toLowerCase()
    });
    var ie = /*!
* Sizzle CSS Selector Engine v1.10.19
* http://sizzlejs.com/
*
* Copyright 2013 jQuery Foundation, Inc. and other contributors
* Released under the MIT license
* http://jquery.org/license
*
* Date: 2014-04-18
*/
    function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, c, f, h, p, m;
            if ((t ? t.ownerDocument || t : q) !== j && N(t),
            n = n || [],
            !e || "string" != typeof e)
                return n;
            if (1 !== (s = (t = t || j).nodeType) && 9 !== s)
                return [];
            if (F && !r) {
                if (i = ve.exec(e))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (!(o = t.getElementById(a)) || !o.parentNode)
                                return n;
                            if (o.id === a)
                                return n.push(o),
                                n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && Y(t, o) && o.id === a)
                            return n.push(o),
                            n
                    } else {
                        if (i[2])
                            return K.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((a = i[3]) && w.getElementsByClassName && t.getElementsByClassName)
                            return K.apply(n, t.getElementsByClassName(a)),
                            n
                    }
                if (w.qsa && (!P || !P.test(e))) {
                    if (h = f = H,
                    p = t,
                    m = 9 === s && e,
                    1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (c = C(e),
                        (f = t.getAttribute("id")) ? h = f.replace(_e, "\\$&") : t.setAttribute("id", h),
                        h = "[id='" + h + "'] ",
                        u = c.length; u--; )
                            c[u] = h + d(c[u]);
                        p = be.test(e) && l(t.parentNode) || t,
                        m = c.join(",")
                    }
                    if (m)
                        try {
                            return K.apply(n, p.querySelectorAll(m)),
                            n
                        } catch (g) {} finally {
                            f || t.removeAttribute("id")
                        }
                }
            }
            return D(e.replace(ue, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()],
                e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[H] = !0,
            e
        }
        function i(e) {
            var t = j.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--; )
                x.attrHandle[n[r]] = t
        }
        function a(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function c(e) {
            return r(function(t) {
                return t = +t,
                r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; )
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function l(e) {
            return e && typeof e.getElementsByTagName !== B && e
        }
        function f() {}
        function d(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function h(e, t, n) {
            var r = t.dir
              , i = n && "parentNode" === r
              , o = z++;
            return t.first ? function(t, n, o) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || i)
                        return e(t, n, o)
            }
            : function(t, n, a) {
                var s, u, c = [R, o];
                if (a) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || i) && e(t, n, a))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || i) {
                            if ((s = (u = t[H] || (t[H] = {}))[r]) && s[0] === R && s[1] === o)
                                return c[2] = s[2];
                            if (u[r] = c,
                            c[2] = e(t, n, a))
                                return !0
                        }
            }
        }
        function p(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function m(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++)
                t(e, n[i], r);
            return r
        }
        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, c = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                c && t.push(s)));
            return a
        }
        function y(e, t, n, i, o, a) {
            return i && !i[H] && (i = y(i)),
            o && !o[H] && (o = y(o, a)),
            r(function(r, a, s, u) {
                var c, l, f, d = [], h = [], p = a.length, y = r || m(t || "*", s.nodeType ? [s] : s, []), v = !e || !r && t ? y : g(y, d, e, s, u), b = n ? o || (r ? e : p || i) ? [] : a : v;
                if (n && n(v, b, s, u),
                i)
                    for (c = g(b, h),
                    i(c, [], s, u),
                    l = c.length; l--; )
                        (f = c[l]) && (b[h[l]] = !(v[h[l]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (c = [],
                            l = b.length; l--; )
                                (f = b[l]) && c.push(v[l] = f);
                            o(null, b = [], c, u)
                        }
                        for (l = b.length; l--; )
                            (f = b[l]) && (c = o ? te.call(r, f) : d[l]) > -1 && (r[c] = !(a[c] = f))
                    }
                } else
                    b = g(b === a ? b.splice(p, b.length) : b),
                    o ? o(null, a, b, u) : K.apply(a, b)
            })
        }
        function v(e) {
            for (var t, n, r, i = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, u = h(function(e) {
                return e === t
            }, a, !0), c = h(function(e) {
                return te.call(t, e) > -1
            }, a, !0), l = [function(e, n, r) {
                return !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r))
            }
            ]; s < i; s++)
                if (n = x.relative[e[s].type])
                    l = [h(p(l), n)];
                else {
                    if ((n = x.filter[e[s].type].apply(null, e[s].matches))[H]) {
                        for (r = ++s; r < i && !x.relative[e[r].type]; r++)
                            ;
                        return y(s > 1 && p(l), s > 1 && d(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ue, "$1"), n, s < r && v(e.slice(s, r)), r < i && v(e = e.slice(r)), r < i && d(e))
                    }
                    l.push(n)
                }
            return p(l)
        }
        function b(e, n) {
            var i = n.length > 0
              , o = e.length > 0
              , a = function(r, a, s, u, c) {
                var l, f, d, h = 0, p = "0", m = r && [], y = [], v = A, b = r || o && x.find.TAG("*", c), _ = R += null == v ? 1 : Math.random() || .1, w = b.length;
                for (c && (A = a !== j && a); p !== w && null != (l = b[p]); p++) {
                    if (o && l) {
                        for (f = 0; d = e[f++]; )
                            if (d(l, a, s)) {
                                u.push(l);
                                break
                            }
                        c && (R = _)
                    }
                    i && ((l = !d && l) && h--,
                    r && m.push(l))
                }
                if (h += p,
                i && p !== h) {
                    for (f = 0; d = n[f++]; )
                        d(m, y, a, s);
                    if (r) {
                        if (h > 0)
                            for (; p--; )
                                m[p] || y[p] || (y[p] = Z.call(u));
                        y = g(y)
                    }
                    K.apply(u, y),
                    c && !r && y.length > 0 && h + n.length > 1 && t.uniqueSort(u)
                }
                return c && (R = _,
                A = v),
                m
            };
            return i ? r(a) : a
        }
        var _, w, x, k, T, C, S, D, A, M, E, N, j, O, F, P, I, L, Y, H = "sizzle" + -new Date, q = e.document, R = 0, z = 0, $ = n(), W = n(), G = n(), U = function(e, t) {
            return e === t && (E = !0),
            0
        }, B = typeof undefined, Q = 1 << 31, V = {}.hasOwnProperty, X = [], Z = X.pop, J = X.push, K = X.push, ee = X.slice, te = X.indexOf || function(e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (this[t] === e)
                    return t;
            return -1
        }
        , ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", re = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = ie.replace("w", "w#"), ae = "\\[" + re + "*(" + ie + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + re + "*\\]", se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)", ue = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$","g"), ce = new RegExp("^" + re + "*," + re + "*"), le = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"), fe = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]","g"), de = new RegExp(se), he = new RegExp("^" + oe + "$"), pe = {
            ID: new RegExp("^#(" + ie + ")"),
            CLASS: new RegExp("^\\.(" + ie + ")"),
            TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ae),
            PSEUDO: new RegExp("^" + se),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)","i"),
            bool: new RegExp("^(?:" + ne + ")$","i"),
            needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)","i")
        }, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ye = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = /[+~]/, _e = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)","ig"), xe = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        };
        try {
            K.apply(X = ee.call(q.childNodes), q.childNodes),
            X[q.childNodes.length].nodeType
        } catch (ke) {
            K = {
                apply: X.length ? function(e, t) {
                    J.apply(e, ee.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        for (_ in w = t.support = {},
        T = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        N = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e : q, r = n.defaultView;
            return n !== j && 9 === n.nodeType && n.documentElement ? (j = n,
            O = n.documentElement,
            F = !T(n),
            r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
                N()
            }, !1) : r.attachEvent && r.attachEvent("onunload", function() {
                N()
            })),
            w.attributes = i(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            w.getElementsByTagName = i(function(e) {
                return e.appendChild(n.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            w.getElementsByClassName = ye.test(n.getElementsByClassName) && i(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                2 === e.getElementsByClassName("i").length
            }),
            w.getById = i(function(e) {
                return O.appendChild(e).id = H,
                !n.getElementsByName || !n.getElementsByName(H).length
            }),
            w.getById ? (x.find.ID = function(e, t) {
                if (typeof t.getElementById !== B && F) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            x.filter.ID = function(e) {
                var t = e.replace(we, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete x.find.ID,
            x.filter.ID = function(e) {
                var t = e.replace(we, xe);
                return function(e) {
                    var n = typeof e.getAttributeNode !== B && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            x.find.TAG = w.getElementsByTagName ? function(e, t) {
                if (typeof t.getElementsByTagName !== B)
                    return t.getElementsByTagName(e)
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            x.find.CLASS = w.getElementsByClassName && function(e, t) {
                if (typeof t.getElementsByClassName !== B && F)
                    return t.getElementsByClassName(e)
            }
            ,
            I = [],
            P = [],
            (w.qsa = ye.test(n.querySelectorAll)) && (i(function(e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowclip^='']").length && P.push("[*^$]=" + re + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || P.push("\\[" + re + "*(?:value|" + ne + ")"),
                e.querySelectorAll(":checked").length || P.push(":checked")
            }),
            i(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && P.push("name" + re + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                P.push(",.*:")
            })),
            (w.matchesSelector = ye.test(L = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && i(function(e) {
                w.disconnectedMatch = L.call(e, "div"),
                L.call(e, "[s!='']:x"),
                I.push("!=", se)
            }),
            P = P.length && new RegExp(P.join("|")),
            I = I.length && new RegExp(I.join("|")),
            t = ye.test(O.compareDocumentPosition),
            Y = t || ye.test(O.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            U = t ? function(e, t) {
                if (e === t)
                    return E = !0,
                    0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !w.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === q && Y(q, e) ? -1 : t === n || t.ownerDocument === q && Y(q, t) ? 1 : M ? te.call(M, e) - te.call(M, t) : 0 : 4 & r ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return E = !0,
                    0;
                var r, i = 0, o = e.parentNode, s = t.parentNode, u = [e], c = [t];
                if (!o || !s)
                    return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : M ? te.call(M, e) - te.call(M, t) : 0;
                if (o === s)
                    return a(e, t);
                for (r = e; r = r.parentNode; )
                    u.unshift(r);
                for (r = t; r = r.parentNode; )
                    c.unshift(r);
                for (; u[i] === c[i]; )
                    i++;
                return i ? a(u[i], c[i]) : u[i] === q ? -1 : c[i] === q ? 1 : 0
            }
            ,
            n) : j
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== j && N(e),
            n = n.replace(fe, "='$1']"),
            w.matchesSelector && F && (!I || !I.test(n)) && (!P || !P.test(n)))
                try {
                    var r = L.call(e, n);
                    if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (ke) {}
            return t(n, j, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== j && N(e),
            Y(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== j && N(e);
            var n = x.attrHandle[t.toLowerCase()]
              , r = n && V.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !F) : undefined;
            return r !== undefined ? r : w.attributes || !F ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (E = !w.detectDuplicates,
            M = !w.sortStable && e.slice(0),
            e.sort(U),
            E) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return M = null,
            e
        }
        ,
        k = t.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += k(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += k(t);
            return n
        }
        ,
        (x = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, xe),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(we, xe),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = $[e + " "];
                    return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && $(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== B && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "",
                        "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, u) {
                        var c, l, f, d, h, p, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s;
                        if (g) {
                            if (o) {
                                for (; m; ) {
                                    for (f = t; f = f[m]; )
                                        if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType)
                                            return !1;
                                    p = m = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [a ? g.firstChild : g.lastChild],
                            a && v) {
                                for (h = (c = (l = g[H] || (g[H] = {}))[e] || [])[0] === R && c[1],
                                d = c[0] === R && c[2],
                                f = h && g.childNodes[h]; f = ++h && f && f[m] || (d = h = 0) || p.pop(); )
                                    if (1 === f.nodeType && ++d && f === t) {
                                        l[e] = [R, h, d];
                                        break
                                    }
                            } else if (v && (c = (t[H] || (t[H] = {}))[e]) && c[0] === R)
                                d = c[1];
                            else
                                for (; (f = ++h && f && f[m] || (d = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++d || (v && ((f[H] || (f[H] = {}))[e] = [R, d]),
                                f !== t)); )
                                    ;
                            return (d -= i) === r || d % r == 0 && d / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[H] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
                    x.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--; )
                            e[r = te.call(e, i[a])] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = []
                      , n = []
                      , i = S(e.replace(ue, "$1"));
                    return i[H] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--; )
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null, o, n),
                        !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return he.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(we, xe).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = F ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === O
                },
                focus: function(e) {
                    return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return me.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = x.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[_] = s(_);
        for (_ in {
            submit: !0,
            reset: !0
        })
            x.pseudos[_] = u(_);
        return f.prototype = x.filters = x.pseudos,
        x.setFilters = new f,
        C = t.tokenize = function(e, n) {
            var r, i, o, a, s, u, c, l = W[e + " "];
            if (l)
                return n ? 0 : l.slice(0);
            for (s = e,
            u = [],
            c = x.preFilter; s; ) {
                for (a in r && !(i = ce.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                u.push(o = [])),
                r = !1,
                (i = le.exec(s)) && (r = i.shift(),
                o.push({
                    value: r,
                    type: i[0].replace(ue, " ")
                }),
                s = s.slice(r.length)),
                x.filter)
                    !(i = pe[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(),
                    o.push({
                        value: r,
                        type: a,
                        matches: i
                    }),
                    s = s.slice(r.length));
                if (!r)
                    break
            }
            return n ? s.length : s ? t.error(e) : W(e, u).slice(0)
        }
        ,
        S = t.compile = function(e, t) {
            var n, r = [], i = [], o = G[e + " "];
            if (!o) {
                for (t || (t = C(e)),
                n = t.length; n--; )
                    (o = v(t[n]))[H] ? r.push(o) : i.push(o);
                (o = G(e, b(i, r))).selector = e
            }
            return o
        }
        ,
        D = t.select = function(e, t, n, r) {
            var i, o, a, s, u, c = "function" == typeof e && e, f = !r && C(e = c.selector || e);
            if (n = n || [],
            1 === f.length) {
                if ((o = f[0] = f[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && F && x.relative[o[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(we, xe), t) || [])[0]))
                        return n;
                    c && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i],
                !x.relative[s = a.type]); )
                    if ((u = x.find[s]) && (r = u(a.matches[0].replace(we, xe), be.test(o[0].type) && l(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && d(o)))
                            return K.apply(n, r),
                            n;
                        break
                    }
            }
            return (c || S(e, f))(r, t, !F, n, be.test(e) && l(t.parentNode) || t),
            n
        }
        ,
        w.sortStable = H.split("").sort(U).join("") === H,
        w.detectDuplicates = !!E,
        N(),
        w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(j.createElement("div"))
        }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        w.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(ne, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        t
    }(e);
    K.find = ie,
    K.expr = ie.selectors,
    K.expr[":"] = K.expr.pseudos,
    K.unique = ie.uniqueSort,
    K.text = ie.getText,
    K.isXMLDoc = ie.isXML,
    K.contains = ie.contains;
    var oe = K.expr.match.needsContext
      , ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , se = /^.[^:#\[\.,]*$/;
    K.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? K.find.matchesSelector(r, e) ? [r] : [] : K.find.matches(e, K.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    K.fn.extend({
        find: function(e) {
            var t, n = this.length, r = [], i = this;
            if ("string" != typeof e)
                return this.pushStack(K(e).filter(function() {
                    for (t = 0; t < n; t++)
                        if (K.contains(i[t], this))
                            return !0
                }));
            for (t = 0; t < n; t++)
                K.find(e, i[t], r);
            return (r = this.pushStack(n > 1 ? K.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e,
            r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && oe.test(e) ? K(e) : e || [], !1).length
        }
    });
    var ue, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (K.fn.init = function(e, t) {
        var n, r;
        if (!e)
            return this;
        if ("string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ce.exec(e)) || !n[1] && t)
                return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof K ? t[0] : t,
                K.merge(this, K.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)),
                ae.test(n[1]) && K.isPlainObject(t))
                    for (n in t)
                        K.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return (r = Z.getElementById(n[2])) && r.parentNode && (this.length = 1,
            this[0] = r),
            this.context = Z,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : K.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(K) : (e.selector !== undefined && (this.selector = e.selector,
        this.context = e.context),
        K.makeArray(e, this))
    }
    ).prototype = K.fn,
    ue = K(Z);
    var le = /^(?:parents|prev(?:Until|All))/
      , fe = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    K.extend({
        dir: function(e, t, n) {
            for (var r = [], i = n !== undefined; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (i && K(e).is(n))
                        break;
                    r.push(e)
                }
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }),
    K.fn.extend({
        has: function(e) {
            var t = K(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (K.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = oe.test(e) || "string" != typeof e ? K(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && K.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? K.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? U.call(K(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(K.unique(K.merge(this.get(), K(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    K.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return K.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return K.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return K.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return K.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return K.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return K.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return K.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return K.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || K.merge([], e.childNodes)
        }
    }, function(e, t) {
        K.fn[e] = function(n, r) {
            var i = K.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = K.filter(r, i)),
            this.length > 1 && (fe[e] || K.unique(i),
            le.test(e) && i.reverse()),
            this.pushStack(i)
        }
    });
    var de, he = /\S+/g, pe = {};
    K.Callbacks = function(e) {
        e = "string" == typeof e ? pe[e] || o(e) : K.extend({}, e);
        var t, n, r, i, a, s, u = [], c = !e.once && [], l = function(o) {
            for (t = e.memory && o,
            n = !0,
            s = i || 0,
            i = 0,
            a = u.length,
            r = !0; u && s < a; s++)
                if (!1 === u[s].apply(o[0], o[1]) && e.stopOnFalse) {
                    t = !1;
                    break
                }
            r = !1,
            u && (c ? c.length && l(c.shift()) : t ? u = [] : f.disable())
        }, f = {
            add: function() {
                if (u) {
                    var n = u.length;
                    !function o(t) {
                        K.each(t, function(t, n) {
                            var r = K.type(n);
                            "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                        })
                    }(arguments),
                    r ? a = u.length : t && (i = n,
                    l(t))
                }
                return this
            },
            remove: function() {
                return u && K.each(arguments, function(e, t) {
                    for (var n; (n = K.inArray(t, u, n)) > -1; )
                        u.splice(n, 1),
                        r && (n <= a && a--,
                        n <= s && s--)
                }),
                this
            },
            has: function(e) {
                return e ? K.inArray(e, u) > -1 : !(!u || !u.length)
            },
            empty: function() {
                return u = [],
                a = 0,
                this
            },
            disable: function() {
                return u = c = t = undefined,
                this
            },
            disabled: function() {
                return !u
            },
            lock: function() {
                return c = undefined,
                t || f.disable(),
                this
            },
            locked: function() {
                return !c
            },
            fireWith: function(e, t) {
                return !u || n && !c || (t = [e, (t = t || []).slice ? t.slice() : t],
                r ? c.push(t) : l(t)),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!n
            }
        };
        return f
    }
    ,
    K.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", K.Callbacks("once memory"), "resolved"], ["reject", "fail", K.Callbacks("once memory"), "rejected"], ["notify", "progress", K.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return K.Deferred(function(n) {
                        K.each(t, function(t, o) {
                            var a = K.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && K.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? K.extend(e, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            K.each(t, function(e, o) {
                var a = o[2]
                  , s = o[3];
                r[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments),
                    this
                }
                ,
                i[o[0] + "With"] = a.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t, n, r, i = 0, o = $.call(arguments), a = o.length, s = 1 !== a || e && K.isFunction(e.promise) ? a : 0, u = 1 === s ? e : K.Deferred(), c = function(e, n, r) {
                return function(i) {
                    n[e] = this,
                    r[e] = arguments.length > 1 ? $.call(arguments) : i,
                    r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                }
            };
            if (a > 1)
                for (t = new Array(a),
                n = new Array(a),
                r = new Array(a); i < a; i++)
                    o[i] && K.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(u.reject).progress(c(i, n, t)) : --s;
            return s || u.resolveWith(r, o),
            u.promise()
        }
    }),
    K.fn.ready = function(e) {
        return K.ready.promise().done(e),
        this
    }
    ,
    K.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? K.readyWait++ : K.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --K.readyWait : K.isReady) || (K.isReady = !0,
            !0 !== e && --K.readyWait > 0 || (de.resolveWith(Z, [K]),
            K.fn.triggerHandler && (K(Z).triggerHandler("ready"),
            K(Z).off("ready"))))
        }
    }),
    K.ready.promise = function(t) {
        return de || (de = K.Deferred(),
        "complete" === Z.readyState ? setTimeout(K.ready) : (Z.addEventListener("DOMContentLoaded", a, !1),
        e.addEventListener("load", a, !1))),
        de.promise(t)
    }
    ,
    K.ready.promise();
    var me = K.access = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , c = null == n;
        if ("object" === K.type(n))
            for (s in i = !0,
            n)
                K.access(e, t, s, n[s], !0, o, a);
        else if (r !== undefined && (i = !0,
        K.isFunction(r) || (a = !0),
        c && (a ? (t.call(e, r),
        t = null) : (c = t,
        t = function(e, t, n) {
            return c.call(K(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : c ? t.call(e) : u ? t(e[0], n) : o
    }
    ;
    K.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    ,
    s.uid = 1,
    s.accepts = K.acceptData,
    s.prototype = {
        key: function(e) {
            if (!s.accepts(e))
                return 0;
            var t = {}
              , n = e[this.expando];
            if (!n) {
                n = s.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    },
                    Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n,
                    K.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}),
            n
        },
        set: function(e, t, n) {
            var r, i = this.key(e), o = this.cache[i];
            if ("string" == typeof t)
                o[t] = n;
            else if (K.isEmptyObject(o))
                K.extend(this.cache[i], t);
            else
                for (r in t)
                    o[r] = t[r];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return t === undefined ? n : n[t]
        },
        access: function(e, t, n) {
            var r;
            return t === undefined || t && "string" == typeof t && n === undefined ? (r = this.get(e, t)) !== undefined ? r : this.get(e, K.camelCase(t)) : (this.set(e, t, n),
            n !== undefined ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = this.key(e), a = this.cache[o];
            if (t === undefined)
                this.cache[o] = {};
            else {
                K.isArray(t) ? r = t.concat(t.map(K.camelCase)) : (i = K.camelCase(t),
                r = t in a ? [t, i] : (r = i)in a ? [r] : r.match(he) || []),
                n = r.length;
                for (; n--; )
                    delete a[r[n]]
            }
        },
        hasData: function(e) {
            return !K.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ge = new s
      , ye = new s
      , ve = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , be = /([A-Z])/g;
    K.extend({
        hasData: function(e) {
            return ye.hasData(e) || ge.hasData(e)
        },
        data: function(e, t, n) {
            return ye.access(e, t, n)
        },
        removeData: function(e, t) {
            ye.remove(e, t)
        },
        _data: function(e, t, n) {
            return ge.access(e, t, n)
        },
        _removeData: function(e, t) {
            ge.remove(e, t)
        }
    }),
    K.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (e === undefined) {
                if (this.length && (i = ye.get(o),
                1 === o.nodeType && !ge.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = K.camelCase(r.slice(5)),
                        u(o, r, i[r]));
                    ge.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                ye.set(this, e)
            }) : me(this, function(t) {
                var n, r = K.camelCase(e);
                if (o && t === undefined)
                    return (n = ye.get(o, e)) !== undefined ? n : (n = ye.get(o, r)) !== undefined ? n : (n = u(o, r, undefined)) !== undefined ? n : void 0;
                this.each(function() {
                    var n = ye.get(this, r);
                    ye.set(this, r, t),
                    -1 !== e.indexOf("-") && n !== undefined && ye.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                ye.remove(this, e)
            })
        }
    }),
    K.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = ge.get(e, t),
                n && (!r || K.isArray(n) ? r = ge.access(e, t, K.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = K.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = K._queueHooks(e, t)
              , a = function() {
                K.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ge.get(e, n) || ge.access(e, n, {
                empty: K.Callbacks("once memory").add(function() {
                    ge.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    K.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? K.queue(this[0], e) : t === undefined ? this : this.each(function() {
                var n = K.queue(this, e, t);
                K._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && K.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                K.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = K.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = undefined),
            e = e || "fx"; a--; )
                (n = ge.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var _e, we, xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ke = ["Top", "Right", "Bottom", "Left"], Te = function(e, t) {
        return e = t || e,
        "none" === K.css(e, "display") || !K.contains(e.ownerDocument, e)
    }, Ce = /^(?:checkbox|radio)$/i;
    _e = Z.createDocumentFragment().appendChild(Z.createElement("div")),
    (we = Z.createElement("input")).setAttribute("type", "radio"),
    we.setAttribute("checked", "checked"),
    we.setAttribute("name", "t"),
    _e.appendChild(we),
    X.checkClone = _e.cloneNode(!0).cloneNode(!0).lastChild.checked,
    _e.innerHTML = "<textarea>x</textarea>",
    X.noCloneChecked = !!_e.cloneNode(!0).lastChild.defaultValue;
    var Se = typeof undefined;
    X.focusinBubbles = "onfocusin"in e;
    var De = /^key/
      , Ae = /^(?:mouse|pointer|contextmenu)|click/
      , Me = /^(?:focusinfocus|focusoutblur)$/
      , Ee = /^([^.]*)(?:\.(.+)|)$/;
    K.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, c, l, f, d, h, p, m, g = ge.get(e);
            if (g)
                for (n.handler && (n = (o = n).handler,
                i = o.selector),
                n.guid || (n.guid = K.guid++),
                (u = g.events) || (u = g.events = {}),
                (a = g.handle) || (a = g.handle = function(t) {
                    return typeof K !== Se && K.event.triggered !== t.type ? K.event.dispatch.apply(e, arguments) : undefined
                }
                ),
                c = (t = (t || "").match(he) || [""]).length; c--; )
                    h = m = (s = Ee.exec(t[c]) || [])[1],
                    p = (s[2] || "").split(".").sort(),
                    h && (f = K.event.special[h] || {},
                    h = (i ? f.delegateType : f.bindType) || h,
                    f = K.event.special[h] || {},
                    l = K.extend({
                        type: h,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && K.expr.match.needsContext.test(i),
                        namespace: p.join(".")
                    }, o),
                    (d = u[h]) || ((d = u[h] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, r, p, a) || e.addEventListener && e.addEventListener(h, a, !1)),
                    f.add && (f.add.call(e, l),
                    l.handler.guid || (l.handler.guid = n.guid)),
                    i ? d.splice(d.delegateCount++, 0, l) : d.push(l),
                    K.event.global[h] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, c, l, f, d, h, p, m, g = ge.hasData(e) && ge.get(e);
            if (g && (u = g.events)) {
                for (c = (t = (t || "").match(he) || [""]).length; c--; )
                    if (h = m = (s = Ee.exec(t[c]) || [])[1],
                    p = (s[2] || "").split(".").sort(),
                    h) {
                        for (f = K.event.special[h] || {},
                        d = u[h = (r ? f.delegateType : f.bindType) || h] || [],
                        s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = d.length; o--; )
                            l = d[o],
                            !i && m !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (d.splice(o, 1),
                            l.selector && d.delegateCount--,
                            f.remove && f.remove.call(e, l));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, g.handle) || K.removeEvent(e, h, g.handle),
                        delete u[h])
                    } else
                        for (h in u)
                            K.event.remove(e, h + t[c], n, r, !0);
                K.isEmptyObject(u) && (delete g.handle,
                ge.remove(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, a, s, u, c, l, f, d = [r || Z], h = V.call(t, "type") ? t.type : t, p = V.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || Z,
            3 !== r.nodeType && 8 !== r.nodeType && !Me.test(h + K.event.triggered) && (h.indexOf(".") >= 0 && (h = (p = h.split(".")).shift(),
            p.sort()),
            c = h.indexOf(":") < 0 && "on" + h,
            (t = t[K.expando] ? t : new K.Event(h,"object" == typeof t && t)).isTrigger = i ? 2 : 3,
            t.namespace = p.join("."),
            t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = undefined,
            t.target || (t.target = r),
            n = null == n ? [t] : K.makeArray(n, [t]),
            f = K.event.special[h] || {},
            i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!i && !f.noBubble && !K.isWindow(r)) {
                    for (u = f.delegateType || h,
                    Me.test(u + h) || (a = a.parentNode); a; a = a.parentNode)
                        d.push(a),
                        s = a;
                    s === (r.ownerDocument || Z) && d.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0; (a = d[o++]) && !t.isPropagationStopped(); )
                    t.type = o > 1 ? u : f.bindType || h,
                    (l = (ge.get(a, "events") || {})[t.type] && ge.get(a, "handle")) && l.apply(a, n),
                    (l = c && a[c]) && l.apply && K.acceptData(a) && (t.result = l.apply(a, n),
                    !1 === t.result && t.preventDefault());
                return t.type = h,
                i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), n) || !K.acceptData(r) || c && K.isFunction(r[h]) && !K.isWindow(r) && ((s = r[c]) && (r[c] = null),
                K.event.triggered = h,
                r[h](),
                K.event.triggered = undefined,
                s && (r[c] = s)),
                t.result
            }
        },
        dispatch: function(e) {
            e = K.event.fix(e);
            var t, n, r, i, o, a = [], s = $.call(arguments), u = (ge.get(this, "events") || {})[e.type] || [], c = K.event.special[e.type] || {};
            if (s[0] = e,
            e.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (a = K.event.handlers.call(this, e, u),
                t = 0; (i = a[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                        e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o,
                        e.data = o.data,
                        (r = ((K.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) !== undefined && !1 === (e.result = r) && (e.preventDefault(),
                        e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [], s = t.delegateCount, u = e.target;
            if (s && u.nodeType && (!e.button || "click" !== e.type))
                for (; u !== this; u = u.parentNode || this)
                    if (!0 !== u.disabled || "click" !== e.type) {
                        for (r = [],
                        n = 0; n < s; n++)
                            r[i = (o = t[n]).selector + " "] === undefined && (r[i] = o.needsContext ? K(i, this).index(u) >= 0 : K.find(i, this, null, [u]).length),
                            r[i] && r.push(o);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }),
            a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || Z).documentElement,
                i = n.body,
                e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
                e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                e.which || o === undefined || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[K.expando])
                return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Ae.test(i) ? this.mouseHooks : De.test(i) ? this.keyHooks : {}),
            r = a.props ? this.props.concat(a.props) : this.props,
            e = new K.Event(o),
            t = r.length; t--; )
                e[n = r[t]] = o[n];
            return e.target || (e.target = Z),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            a.filter ? a.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === f() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && K.nodeName(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return K.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = K.extend(new K.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? K.event.trigger(i, null, t) : K.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    K.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    ,
    K.Event = function(e, t) {
        if (!(this instanceof K.Event))
            return new K.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? c : l) : this.type = e,
        t && K.extend(this, t),
        this.timeStamp = e && e.timeStamp || K.now(),
        this[K.expando] = !0
    }
    ,
    K.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = c,
            e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = c,
            e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = c,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    K.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        K.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || K.contains(r, i)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    X.focusinBubbles || K.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            K.event.simulate(t, e.target, K.event.fix(e), !0)
        };
        K.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , i = ge.access(r, t);
                i || r.addEventListener(e, n, !0),
                ge.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , i = ge.access(r, t) - 1;
                i ? ge.access(r, t, i) : (r.removeEventListener(e, n, !0),
                ge.remove(r, t))
            }
        }
    }),
    K.fn.extend({
        on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                for (a in "string" != typeof t && (n = n || t,
                t = undefined),
                e)
                    this.on(a, t, n, e[a], i);
                return this
            }
            if (null == n && null == r ? (r = t,
            n = t = undefined) : null == r && ("string" == typeof t ? (r = n,
            n = undefined) : (r = n,
            n = t,
            t = undefined)),
            !1 === r)
                r = l;
            else if (!r)
                return this;
            return 1 === i && (o = r,
            (r = function(e) {
                return K().off(e),
                o.apply(this, arguments)
            }
            ).guid = o.guid || (o.guid = K.guid++)),
            this.each(function() {
                K.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                K(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = undefined),
            !1 === n && (n = l),
            this.each(function() {
                K.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                K.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return K.event.trigger(e, t, n, !0)
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , je = /<([\w:]+)/
      , Oe = /<|&#?\w+;/
      , Fe = /<(?:script|style|link)/i
      , Pe = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ie = /^$|\/(?:java|ecma)script/i
      , Le = /^true\/(.*)/
      , Ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , He = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    He.optgroup = He.option,
    He.tbody = He.tfoot = He.colgroup = He.caption = He.thead,
    He.th = He.td,
    K.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = K.contains(e.ownerDocument, e);
            if (!(X.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || K.isXMLDoc(e)))
                for (a = y(s),
                r = 0,
                i = (o = y(e)).length; r < i; r++)
                    v(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || y(e),
                    a = a || y(s),
                    r = 0,
                    i = o.length; r < i; r++)
                        g(o[r], a[r]);
                else
                    g(e, s);
            return (a = y(s, "script")).length > 0 && m(a, !u && y(e, "script")),
            s
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, c, l = t.createDocumentFragment(), f = [], d = 0, h = e.length; d < h; d++)
                if ((i = e[d]) || 0 === i)
                    if ("object" === K.type(i))
                        K.merge(f, i.nodeType ? [i] : i);
                    else if (Oe.test(i)) {
                        for (o = o || l.appendChild(t.createElement("div")),
                        a = (je.exec(i) || ["", ""])[1].toLowerCase(),
                        s = He[a] || He._default,
                        o.innerHTML = s[1] + i.replace(Ne, "<$1></$2>") + s[2],
                        c = s[0]; c--; )
                            o = o.lastChild;
                        K.merge(f, o.childNodes),
                        (o = l.firstChild).textContent = ""
                    } else
                        f.push(t.createTextNode(i));
            for (l.textContent = "",
            d = 0; i = f[d++]; )
                if ((!r || -1 === K.inArray(i, r)) && (u = K.contains(i.ownerDocument, i),
                o = y(l.appendChild(i), "script"),
                u && m(o),
                n))
                    for (c = 0; i = o[c++]; )
                        Ie.test(i.type || "") && n.push(i);
            return l
        },
        cleanData: function(e) {
            for (var t, n, r, i, o = K.event.special, a = 0; (n = e[a]) !== undefined; a++) {
                if (K.acceptData(n) && (i = n[ge.expando]) && (t = ge.cache[i])) {
                    if (t.events)
                        for (r in t.events)
                            o[r] ? K.event.remove(n, r) : K.removeEvent(n, r, t.handle);
                    ge.cache[i] && delete ge.cache[i]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }),
    K.fn.extend({
        text: function(e) {
            return me(this, function(e) {
                return e === undefined ? K.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || d(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? K.filter(e, this) : this, i = 0; null != (n = r[i]); i++)
                t || 1 !== n.nodeType || K.cleanData(y(n)),
                n.parentNode && (t && K.contains(n.ownerDocument, n) && m(y(n, "script")),
                n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (K.cleanData(y(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return K.clone(this, e, t)
            })
        },
        html: function(e) {
            return me(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (e === undefined && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Fe.test(e) && !He[(je.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ne, "<$1></$2>");
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (K.cleanData(y(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode,
                K.cleanData(y(this)),
                e && e.replaceChild(t, this)
            }),
            e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = W.apply([], e);
            var n, r, i, o, a, s, u = 0, c = this.length, l = this, f = c - 1, d = e[0], m = K.isFunction(d);
            if (m || c > 1 && "string" == typeof d && !X.checkClone && Pe.test(d))
                return this.each(function(n) {
                    var r = l.eq(n);
                    m && (e[0] = d.call(this, n, r.html())),
                    r.domManip(e, t)
                });
            if (c && (r = (n = K.buildFragment(e, this[0].ownerDocument, !1, this)).firstChild,
            1 === n.childNodes.length && (n = r),
            r)) {
                for (o = (i = K.map(y(n, "script"), h)).length; u < c; u++)
                    a = n,
                    u !== f && (a = K.clone(a, !0, !0),
                    o && K.merge(i, y(a, "script"))),
                    t.call(this[u], a, u);
                if (o)
                    for (s = i[i.length - 1].ownerDocument,
                    K.map(i, p),
                    u = 0; u < o; u++)
                        a = i[u],
                        Ie.test(a.type || "") && !ge.access(a, "globalEval") && K.contains(s, a) && (a.src ? K._evalUrl && K._evalUrl(a.src) : K.globalEval(a.textContent.replace(Ye, "")))
            }
            return this
        }
    }),
    K.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        K.fn[e] = function(e) {
            for (var n, r = [], i = K(e), o = i.length - 1, a = 0; a <= o; a++)
                n = a === o ? this : this.clone(!0),
                K(i[a])[t](n),
                G.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var qe, Re = {}, ze = /^margin/, $e = new RegExp("^(" + xe + ")(?!px)[a-z%]+$","i"), We = function(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    };
    !function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
            a.innerHTML = "",
            i.appendChild(o);
            var t = e.getComputedStyle(a, null);
            n = "1%" !== t.top,
            r = "4px" === t.width,
            i.removeChild(o)
        }
        var n, r, i = Z.documentElement, o = Z.createElement("div"), a = Z.createElement("div");
        a.style && (a.style.backgroundClip = "content-box",
        a.cloneNode(!0).style.backgroundClip = "",
        X.clearCloneStyle = "content-box" === a.style.backgroundClip,
        o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
        o.appendChild(a),
        e.getComputedStyle && K.extend(X, {
            pixelPosition: function() {
                return t(),
                n
            },
            boxSizingReliable: function() {
                return null == r && t(),
                r
            },
            reliableMarginRight: function() {
                var t, n = a.appendChild(Z.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                n.style.marginRight = n.style.width = "0",
                a.style.width = "1px",
                i.appendChild(o),
                t = !parseFloat(e.getComputedStyle(n, null).marginRight),
                i.removeChild(o),
                t
            }
        }))
    }(),
    K.swap = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        for (o in i = n.apply(e, r || []),
        t)
            e.style[o] = a[o];
        return i
    }
    ;
    var Ge = /^(none|table(?!-c[ea]).+)/
      , Ue = new RegExp("^(" + xe + ")(.*)$","i")
      , Be = new RegExp("^([+-])=(" + xe + ")","i")
      , Qe = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ve = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Xe = ["Webkit", "O", "Moz", "ms"];
    K.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = w(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = K.camelCase(t), u = e.style;
                if (t = K.cssProps[s] || (K.cssProps[s] = k(u, s)),
                a = K.cssHooks[t] || K.cssHooks[s],
                n === undefined)
                    return a && "get"in a && (i = a.get(e, !1, r)) !== undefined ? i : u[t];
                "string" === (o = typeof n) && (i = Be.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(K.css(e, t)),
                o = "number"),
                null != n && n == n && ("number" !== o || K.cssNumber[s] || (n += "px"),
                X.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                a && "set"in a && (n = a.set(e, n, r)) === undefined || (u[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = K.camelCase(t);
            return t = K.cssProps[s] || (K.cssProps[s] = k(e.style, s)),
            (a = K.cssHooks[t] || K.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            i === undefined && (i = w(e, t, r)),
            "normal" === i && t in Ve && (i = Ve[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || K.isNumeric(o) ? o || 0 : i) : i
        }
    }),
    K.each(["height", "width"], function(e, t) {
        K.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return Ge.test(K.css(e, "display")) && 0 === e.offsetWidth ? K.swap(e, Qe, function() {
                        return S(e, t, r)
                    }) : S(e, t, r)
            },
            set: function(e, n, r) {
                var i = r && We(e);
                return T(e, n, r ? C(e, t, r, "border-box" === K.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    K.cssHooks.marginRight = x(X.reliableMarginRight, function(e, t) {
        if (t)
            return K.swap(e, {
                display: "inline-block"
            }, w, [e, "marginRight"])
    }),
    K.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        K.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[e + ke[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        ze.test(e) || (K.cssHooks[e + t].set = T)
    }),
    K.fn.extend({
        css: function(e, t) {
            return me(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (K.isArray(t)) {
                    for (r = We(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = K.css(e, t[a], !1, r);
                    return o
                }
                return n !== undefined ? K.style(e, t, n) : K.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return D(this, !0)
        },
        hide: function() {
            return D(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Te(this) ? K(this).show() : K(this).hide()
            })
        }
    }),
    K.Tween = A,
    A.prototype = {
        constructor: A,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (K.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = A.propHooks[this.prop];
            return e && e.get ? e.get(this) : A.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = A.propHooks[this.prop];
            return this.options.duration ? this.pos = t = K.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : A.propHooks._default.set(this),
            this
        }
    },
    A.prototype.init.prototype = A.prototype,
    A.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = K.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function(e) {
                K.fx.step[e.prop] ? K.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[K.cssProps[e.prop]] || K.cssHooks[e.prop]) ? K.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    A.propHooks.scrollTop = A.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    K.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    K.fx = A.prototype.init,
    K.fx.step = {};
    var Ze, Je, Ke = /^(?:toggle|show|hide)$/, et = new RegExp("^(?:([+-])=|)(" + xe + ")([a-z%]*)$","i"), tt = /queueHooks$/, nt = [j], rt = {
        "*": [function(e, t) {
            var n = this.createTween(e, t)
              , r = n.cur()
              , i = et.exec(t)
              , o = i && i[3] || (K.cssNumber[e] ? "" : "px")
              , a = (K.cssNumber[e] || "px" !== o && +r) && et.exec(K.css(n.elem, e))
              , s = 1
              , u = 20;
            if (a && a[3] !== o) {
                o = o || a[3],
                i = i || [],
                a = +r || 1;
                do {
                    a /= s = s || ".5",
                    K.style(n.elem, e, a + o)
                } while (s !== (s = n.cur() / r) && 1 !== s && --u)
            }
            return i && (a = n.start = +a || +r || 0,
            n.unit = o,
            n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]),
            n
        }
        ]
    };
    K.Animation = K.extend(F, {
        tweener: function(e, t) {
            K.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                rt[n] = rt[n] || [],
                rt[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? nt.unshift(e) : nt.push(e)
        }
    }),
    K.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? K.extend({}, e) : {
            complete: n || !n && t || K.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !K.isFunction(t) && t
        };
        return r.duration = K.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in K.fx.speeds ? K.fx.speeds[r.duration] : K.fx.speeds._default,
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            K.isFunction(r.old) && r.old.call(this),
            r.queue && K.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    K.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Te).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = K.isEmptyObject(e)
              , o = K.speed(t, n, r)
              , a = function() {
                var t = F(this, K.extend({}, e), o);
                (i || ge.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = undefined),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , o = K.timers
                  , a = ge.get(this);
                if (i)
                    a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && tt.test(i) && r(a[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                    t = !1,
                    o.splice(i, 1));
                !t && n || K.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = ge.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = K.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                K.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < a; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    K.each(["toggle", "show", "hide"], function(e, t) {
        var n = K.fn[t];
        K.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(E(t, !0), e, r, i)
        }
    }),
    K.each({
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        K.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    K.timers = [],
    K.fx.tick = function() {
        var e, t = 0, n = K.timers;
        for (Ze = K.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || K.fx.stop(),
        Ze = undefined
    }
    ,
    K.fx.timer = function(e) {
        K.timers.push(e),
        e() ? K.fx.start() : K.timers.pop()
    }
    ,
    K.fx.interval = 13,
    K.fx.start = function() {
        Je || (Je = setInterval(K.fx.tick, K.fx.interval))
    }
    ,
    K.fx.stop = function() {
        clearInterval(Je),
        Je = null
    }
    ,
    K.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    K.fn.delay = function(e, t) {
        return e = K.fx && K.fx.speeds[e] || e,
        t = t || "fx",
        this.queue(t, function(t, n) {
            var r = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(r)
            }
        })
    }
    ,
    function() {
        var e = Z.createElement("input")
          , t = Z.createElement("select")
          , n = t.appendChild(Z.createElement("option"));
        e.type = "checkbox",
        X.checkOn = "" !== e.value,
        X.optSelected = n.selected,
        t.disabled = !0,
        X.optDisabled = !n.disabled,
        (e = Z.createElement("input")).value = "t",
        e.type = "radio",
        X.radioValue = "t" === e.value
    }();
    var it, ot, at = K.expr.attrHandle;
    K.fn.extend({
        attr: function(e, t) {
            return me(this, K.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                K.removeAttr(this, e)
            })
        }
    }),
    K.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o)
                return typeof e.getAttribute === Se ? K.prop(e, t, n) : (1 === o && K.isXMLDoc(e) || (t = t.toLowerCase(),
                r = K.attrHooks[t] || (K.expr.match.bool.test(t) ? ot : it)),
                n === undefined ? r && "get"in r && null !== (i = r.get(e, t)) ? i : null == (i = K.find.attr(e, t)) ? undefined : i : null !== n ? r && "set"in r && (i = r.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""),
                n) : void K.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(he);
            if (o && 1 === e.nodeType)
                for (; n = o[i++]; )
                    r = K.propFix[n] || n,
                    K.expr.match.bool.test(n) && (e[r] = !1),
                    e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!X.radioValue && "radio" === t && K.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        }
    }),
    ot = {
        set: function(e, t, n) {
            return !1 === t ? K.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    K.each(K.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = at[t.toLowerCase()] || K.find.attr;
        at[t.toLowerCase()] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = at[a],
            at[a] = i,
            i = null != n(e, t, r) ? a : null,
            at[a] = o),
            i
        }
    });
    var st = /^(?:input|select|textarea|button)$/i;
    K.fn.extend({
        prop: function(e, t) {
            return me(this, K.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[K.propFix[e] || e]
            })
        }
    }),
    K.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o)
                return (1 !== o || !K.isXMLDoc(e)) && (t = K.propFix[t] || t,
                i = K.propHooks[t]),
                n !== undefined ? i && "set"in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }),
    X.optSelected || (K.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        }
    }),
    K.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        K.propFix[this.toLowerCase()] = this
    });
    var ut = /[\t\r\n\f]/g;
    K.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s = "string" == typeof e && e, u = 0, c = this.length;
            if (K.isFunction(e))
                return this.each(function(t) {
                    K(this).addClass(e.call(this, t, this.className))
                });
            if (s)
                for (t = (e || "").match(he) || []; u < c; u++)
                    if (r = 1 === (n = this[u]).nodeType && (n.className ? (" " + n.className + " ").replace(ut, " ") : " ")) {
                        for (o = 0; i = t[o++]; )
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = K.trim(r),
                        n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s = 0 === arguments.length || "string" == typeof e && e, u = 0, c = this.length;
            if (K.isFunction(e))
                return this.each(function(t) {
                    K(this).removeClass(e.call(this, t, this.className))
                });
            if (s)
                for (t = (e || "").match(he) || []; u < c; u++)
                    if (r = 1 === (n = this[u]).nodeType && (n.className ? (" " + n.className + " ").replace(ut, " ") : "")) {
                        for (o = 0; i = t[o++]; )
                            for (; r.indexOf(" " + i + " ") >= 0; )
                                r = r.replace(" " + i + " ", " ");
                        a = e ? K.trim(r) : "",
                        n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : K.isFunction(e) ? this.each(function(n) {
                K(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var t, r = 0, i = K(this), o = e.match(he) || []; t = o[r++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    n !== Se && "boolean" !== n || (this.className && ge.set(this, "__className__", this.className),
                    this.className = this.className || !1 === e ? "" : ge.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ut, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        }
    });
    var ct = /\r/g;
    K.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = K.isFunction(e),
            this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, K(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : K.isArray(i) && (i = K.map(i, function(e) {
                    return null == e ? "" : e + ""
                })),
                (t = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()]) && "set"in t && t.set(this, i, "value") !== undefined || (this.value = i))
            })) : i ? (t = K.valHooks[i.type] || K.valHooks[i.nodeName.toLowerCase()]) && "get"in t && (n = t.get(i, "value")) !== undefined ? n : "string" == typeof (n = i.value) ? n.replace(ct, "") : null == n ? "" : n : void 0
        }
    }),
    K.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = K.find.attr(e, "value");
                    return null != t ? t : K.trim(K.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)
                        if (((n = r[u]).selected || u === i) && (X.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !K.nodeName(n.parentNode, "optgroup"))) {
                            if (t = K(n).val(),
                            o)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = K.makeArray(t), a = i.length; a--; )
                        ((r = i[a]).selected = K.inArray(r.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    K.each(["radio", "checkbox"], function() {
        K.valHooks[this] = {
            set: function(e, t) {
                if (K.isArray(t))
                    return e.checked = K.inArray(K(e).val(), t) >= 0
            }
        },
        X.checkOn || (K.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        K.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    K.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var lt = K.now()
      , ft = /\?/;
    K.parseJSON = function(e) {
        return JSON.parse(e + "")
    }
    ,
    K.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new DOMParser).parseFromString(e, "text/xml")
        } catch (n) {
            t = undefined
        }
        return t && !t.getElementsByTagName("parsererror").length || K.error("Invalid XML: " + e),
        t
    }
    ;
    var dt, ht, pt = /#.*$/, mt = /([?&])_=[^&]*/, gt = /^(.*?):[ \t]*([^\r\n]*)$/gm, yt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, vt = /^(?:GET|HEAD)$/, bt = /^\/\//, _t = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, wt = {}, xt = {}, kt = "*/".concat("*");
    try {
        ht = location.href
    } catch (Ht) {
        (ht = Z.createElement("a")).href = "",
        ht = ht.href
    }
    dt = _t.exec(ht.toLowerCase()) || [],
    K.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ht,
            type: "GET",
            isLocal: yt.test(dt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": kt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": K.parseJSON,
                "text xml": K.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? L(L(e, K.ajaxSettings), t) : L(K.ajaxSettings, e)
        },
        ajaxPrefilter: P(wt),
        ajaxTransport: P(xt),
        ajax: function(e, t) {
            function n(e, t, n, a) {
                var u, l, y, v, _, x = t;
                2 !== b && (b = 2,
                s && clearTimeout(s),
                r = undefined,
                o = a || "",
                w.readyState = e > 0 ? 4 : 0,
                u = e >= 200 && e < 300 || 304 === e,
                n && (v = Y(f, w, n)),
                v = H(f, v, w, u),
                u ? (f.ifModified && ((_ = w.getResponseHeader("Last-Modified")) && (K.lastModified[i] = _),
                (_ = w.getResponseHeader("etag")) && (K.etag[i] = _)),
                204 === e || "HEAD" === f.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = v.state,
                l = v.data,
                u = !(y = v.error))) : (y = x,
                !e && x || (x = "error",
                e < 0 && (e = 0))),
                w.status = e,
                w.statusText = (t || x) + "",
                u ? p.resolveWith(d, [l, x, w]) : p.rejectWith(d, [w, x, y]),
                w.statusCode(g),
                g = undefined,
                c && h.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? l : y]),
                m.fireWith(d, [w, x]),
                c && (h.trigger("ajaxComplete", [w, f]),
                --K.active || K.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e,
            e = undefined),
            t = t || {};
            var r, i, o, a, s, u, c, l, f = K.ajaxSetup({}, t), d = f.context || f, h = f.context && (d.nodeType || d.jquery) ? K(d) : K.event, p = K.Deferred(), m = K.Callbacks("once memory"), g = f.statusCode || {}, y = {}, v = {}, b = 0, _ = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!a)
                            for (a = {}; t = gt.exec(o); )
                                a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? o : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = v[n] = v[n] || e,
                    y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return b || (f.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (b < 2)
                            for (t in e)
                                g[t] = [g[t], e[t]];
                        else
                            w.always(e[w.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || _;
                    return r && r.abort(t),
                    n(0, t),
                    this
                }
            };
            if (p.promise(w).complete = m.add,
            w.success = w.done,
            w.error = w.fail,
            f.url = ((e || f.url || ht) + "").replace(pt, "").replace(bt, dt[1] + "//"),
            f.type = t.method || t.type || f.method || f.type,
            f.dataTypes = K.trim(f.dataType || "*").toLowerCase().match(he) || [""],
            null == f.crossDomain && (u = _t.exec(f.url.toLowerCase()),
            f.crossDomain = !(!u || u[1] === dt[1] && u[2] === dt[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (dt[3] || ("http:" === dt[1] ? "80" : "443")))),
            f.data && f.processData && "string" != typeof f.data && (f.data = K.param(f.data, f.traditional)),
            I(wt, f, t, w),
            2 === b)
                return w;
            for (l in (c = f.global) && 0 == K.active++ && K.event.trigger("ajaxStart"),
            f.type = f.type.toUpperCase(),
            f.hasContent = !vt.test(f.type),
            i = f.url,
            f.hasContent || (f.data && (i = f.url += (ft.test(i) ? "&" : "?") + f.data,
            delete f.data),
            !1 === f.cache && (f.url = mt.test(i) ? i.replace(mt, "$1_=" + lt++) : i + (ft.test(i) ? "&" : "?") + "_=" + lt++)),
            f.ifModified && (K.lastModified[i] && w.setRequestHeader("If-Modified-Since", K.lastModified[i]),
            K.etag[i] && w.setRequestHeader("If-None-Match", K.etag[i])),
            (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && w.setRequestHeader("Content-Type", f.contentType),
            w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + kt + "; q=0.01" : "") : f.accepts["*"]),
            f.headers)
                w.setRequestHeader(l, f.headers[l]);
            if (f.beforeSend && (!1 === f.beforeSend.call(d, w, f) || 2 === b))
                return w.abort();
            for (l in _ = "abort",
            {
                success: 1,
                error: 1,
                complete: 1
            })
                w[l](f[l]);
            if (r = I(xt, f, t, w)) {
                w.readyState = 1,
                c && h.trigger("ajaxSend", [w, f]),
                f.async && f.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    b = 1,
                    r.send(y, n)
                } catch (Ht) {
                    if (!(b < 2))
                        throw Ht;
                    n(-1, Ht)
                }
            } else
                n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return K.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return K.get(e, undefined, t, "script")
        }
    }),
    K.each(["get", "post"], function(e, t) {
        K[t] = function(e, n, r, i) {
            return K.isFunction(n) && (i = i || r,
            r = n,
            n = undefined),
            K.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }),
    K.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        K.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    K._evalUrl = function(e) {
        return K.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    K.fn.extend({
        wrapAll: function(e) {
            var t;
            return K.isFunction(e) ? this.each(function(t) {
                K(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = K(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this)
        },
        wrapInner: function(e) {
            return K.isFunction(e) ? this.each(function(t) {
                K(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = K(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = K.isFunction(e);
            return this.each(function(n) {
                K(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    K.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }
    ,
    K.expr.filters.visible = function(e) {
        return !K.expr.filters.hidden(e)
    }
    ;
    var Tt = /%20/g
      , Ct = /\[\]$/
      , St = /\r?\n/g
      , Dt = /^(?:submit|button|image|reset|file)$/i
      , At = /^(?:input|select|textarea|keygen)/i;
    K.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            t = K.isFunction(t) ? t() : null == t ? "" : t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (t === undefined && (t = K.ajaxSettings && K.ajaxSettings.traditional),
        K.isArray(e) || e.jquery && !K.isPlainObject(e))
            K.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                q(n, e[n], t, i);
        return r.join("&").replace(Tt, "+")
    }
    ,
    K.fn.extend({
        serialize: function() {
            return K.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = K.prop(this, "elements");
                return e ? K.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !K(this).is(":disabled") && At.test(this.nodeName) && !Dt.test(e) && (this.checked || !Ce.test(e))
            }).map(function(e, t) {
                var n = K(this).val();
                return null == n ? null : K.isArray(n) ? K.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(St, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(St, "\r\n")
                }
            }).get()
        }
    }),
    K.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (Ht) {}
    }
    ;
    var Mt = 0
      , Et = {}
      , Nt = {
        0: 200,
        1223: 204
    }
      , jt = K.ajaxSettings.xhr();
    e.ActiveXObject && K(e).on("unload", function() {
        for (var e in Et)
            Et[e]()
    }),
    X.cors = !!jt && "withCredentials"in jt,
    X.ajax = jt = !!jt,
    K.ajaxTransport(function(e) {
        var t;
        if (X.cors || jt && !e.crossDomain)
            return {
                send: function(n, r) {
                    var i, o = e.xhr(), a = ++Mt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                        for (i in e.xhrFields)
                            o[i] = e.xhrFields[i];
                    for (i in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                    e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"),
                    n)
                        o.setRequestHeader(i, n[i]);
                    t = function(e) {
                        return function() {
                            t && (delete Et[a],
                            t = o.onload = o.onerror = null,
                            "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Nt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                                text: o.responseText
                            } : undefined, o.getAllResponseHeaders()))
                        }
                    }
                    ,
                    o.onload = t(),
                    o.onerror = t("error"),
                    t = Et[a] = t("abort");
                    try {
                        o.send(e.hasContent && e.data || null)
                    } catch (Ht) {
                        if (t)
                            throw Ht
                    }
                },
                abort: function() {
                    t && t()
                }
            }
    }),
    K.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return K.globalEval(e),
                e
            }
        }
    }),
    K.ajaxPrefilter("script", function(e) {
        e.cache === undefined && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    K.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain)
            return {
                send: function(r, i) {
                    t = K("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && i("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    Z.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
    });
    var Ot = []
      , Ft = /(=)\?(?=&|$)|\?\?/;
    K.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ot.pop() || K.expando + "_" + lt++;
            return this[e] = !0,
            e
        }
    }),
    K.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Ft.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ft.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return i = t.jsonpCallback = K.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(Ft, "$1" + i) : !1 !== t.jsonp && (t.url += (ft.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
            t.converters["script json"] = function() {
                return a || K.error(i + " was not called"),
                a[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[i],
            e[i] = function() {
                a = arguments
            }
            ,
            r.always(function() {
                e[i] = o,
                t[i] && (t.jsonpCallback = n.jsonpCallback,
                Ot.push(i)),
                a && K.isFunction(o) && o(a[0]),
                a = o = undefined
            }),
            "script"
    }),
    K.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || Z;
        var r = ae.exec(e)
          , i = !n && [];
        return r ? [t.createElement(r[1])] : (r = K.buildFragment([e], t, i),
        i && i.length && K(i).remove(),
        K.merge([], r.childNodes))
    }
    ;
    var Pt = K.fn.load;
    K.fn.load = function(e, t, n) {
        if ("string" != typeof e && Pt)
            return Pt.apply(this, arguments);
        var r, i, o, a = this, s = e.indexOf(" ");
        return s >= 0 && (r = K.trim(e.slice(s)),
        e = e.slice(0, s)),
        K.isFunction(t) ? (n = t,
        t = undefined) : t && "object" == typeof t && (i = "POST"),
        a.length > 0 && K.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? K("<div>").append(K.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            a.each(n, o || [e.responseText, t, e])
        }
        ),
        this
    }
    ,
    K.expr.filters.animated = function(e) {
        return K.grep(K.timers, function(t) {
            return e === t.elem
        }).length
    }
    ;
    var It = e.document.documentElement;
    K.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, c = K.css(e, "position"), l = K(e), f = {};
            "static" === c && (e.style.position = "relative"),
            s = l.offset(),
            o = K.css(e, "top"),
            u = K.css(e, "left"),
            ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1 ? (a = (r = l.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            K.isFunction(t) && (t = t.call(e, n, s)),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : l.css(f)
        }
    },
    K.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return e === undefined ? this : this.each(function(t) {
                    K.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0], i = {
                top: 0,
                left: 0
            }, o = r && r.ownerDocument;
            return o ? (t = o.documentElement,
            K.contains(t, r) ? (typeof r.getBoundingClientRect !== Se && (i = r.getBoundingClientRect()),
            n = R(o),
            {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === K.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                K.nodeName(e[0], "html") || (r = e.offset()),
                r.top += K.css(e[0], "borderTopWidth", !0),
                r.left += K.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - r.top - K.css(n, "marginTop", !0),
                    left: t.left - r.left - K.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || It; e && !K.nodeName(e, "html") && "static" === K.css(e, "position"); )
                    e = e.offsetParent;
                return e || It
            })
        }
    }),
    K.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var r = "pageYOffset" === n;
        K.fn[t] = function(i) {
            return me(this, function(t, i, o) {
                var a = R(t);
                if (o === undefined)
                    return a ? a[n] : t[i];
                a ? a.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o
            }, t, i, arguments.length, null)
        }
    }),
    K.each(["top", "left"], function(e, t) {
        K.cssHooks[t] = x(X.pixelPosition, function(e, n) {
            if (n)
                return n = w(e, t),
                $e.test(n) ? K(e).position()[t] + "px" : n
        })
    }),
    K.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        K.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            K.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r)
                  , a = n || (!0 === r || !0 === i ? "margin" : "border");
                return me(this, function(t, n, r) {
                    var i;
                    return K.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? K.css(t, n, a) : K.style(t, n, r, a)
                }, t, o ? r : undefined, o, null)
            }
        })
    }),
    K.fn.size = function() {
        return this.length
    }
    ,
    K.fn.andSelf = K.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return K
    });
    var Lt = e.jQuery
      , Yt = e.$;
    return K.noConflict = function(t) {
        return e.$ === K && (e.$ = Yt),
        t && e.jQuery === K && (e.jQuery = Lt),
        K
    }
    ,
    typeof t === Se && (e.jQuery = e.$ = K),
    K
}),
jQuery.ajaxPrefilter(function(e) {
    e.crossDomain && (e.contents.script = !1)
}),
function(e, t) {
    e.viewloader = t({}, e.jQuery || e.Zepto || e.$)
}(this, function(e, t) {
    "use strict";
    var n = function(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    };
    return e.execute = function(e, r) {
        (r ? r.find("[data-view]") : t("[data-view]")).each(function(r, i) {
            var o = t(i)
              , a = n(o.data("view"));
            a && e[a] && new e[a](o,i)
        })
    }
    ,
    e
}),
window.Market = {
    DOMUtils: {},
    Helpers: {},
    SpecialEvents: {},
    State: {},
    Validations: {},
    GoogleAnalytics: {}
},
window.Views = {},
function() {
    Views.GoogleExperimentTracking = function() {
        function e(e) {
            this.$el = e,
            this.experimentId = this.$el.data().experimentId,
            this.variant = this.$el.data().variant,
            Market.Helpers.GoogleAnalytics.set("expId", this.experimentId),
            Market.Helpers.GoogleAnalytics.set("expVar", this.variant),
            Market.Helpers.GoogleAnalytics.sendEvent("event", "experiment", "view", {
                label: this.experimentId,
                value: this.variant,
                nonInteraction: !0
            })
        }
        return e
    }()
}
.call(this),
/*!
* jQuery Cookie Plugin v1.4.0
* https://github.com/carhartl/jquery-cookie
*
* Copyright 2013 Klaus Hartl
* Released under the MIT license
*/
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    function t(e) {
        return s.raw ? e : encodeURIComponent(e)
    }
    function n(e) {
        return s.raw ? e : decodeURIComponent(e)
    }
    function r(e) {
        return t(s.json ? JSON.stringify(e) : String(e))
    }
    function i(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            e = decodeURIComponent(e.replace(a, " "))
        } catch (t) {
            return
        }
        try {
            return s.json ? JSON.parse(e) : e
        } catch (t) {}
    }
    function o(t, n) {
        var r = s.raw ? t : i(t);
        return e.isFunction(n) ? n(r) : r
    }
    var a = /\+/g
      , s = e.cookie = function(i, a, u) {
        if (a !== undefined && !e.isFunction(a)) {
            if ("number" == typeof (u = e.extend({}, s.defaults, u)).expires) {
                var c = u.expires
                  , l = u.expires = new Date;
                l.setDate(l.getDate() + c)
            }
            return document.cookie = [t(i), "=", r(a), u.expires ? "; expires=" + u.expires.toUTCString() : "", u.path ? "; path=" + u.path : "", u.domain ? "; domain=" + u.domain : "", u.secure ? "; secure" : ""].join("")
        }
        for (var f = i ? undefined : {}, d = document.cookie ? document.cookie.split("; ") : [], h = 0, p = d.length; h < p; h++) {
            var m = d[h].split("=")
              , g = n(m.shift())
              , y = m.join("=");
            if (i && i === g) {
                f = o(y, a);
                break
            }
            i || (y = o(y)) === undefined || (f[g] = y)
        }
        return f
    }
    ;
    s.defaults = {},
    e.removeCookie = function(t, n) {
        return e.cookie(t) !== undefined && (e.cookie(t, "", e.extend({}, n, {
            expires: -1
        })),
        !0)
    }
}),
/*!
* URI.js - Mutating URLs
*
* Version: 1.10.2
*
* Author: Rodney Rehm
* Web: http://medialize.github.com/URI.js/
*
* Licensed under
* MIT License http://www.opensource.org/licenses/mit-license
* GPL v3 http://opensource.org/licenses/GPL-3.0
*
*/
function(e, t) {
    "object" == typeof exports ? module.exports = t(require("./punycode"), require("./IPv6"), require("./SecondLevelDomains")) : "function" == typeof define && define.amd ? define(["./punycode", "./IPv6", "./SecondLevelDomains"], t) : e.URI = t(e.punycode, e.IPv6, e.SecondLevelDomains)
}(this, function(e, t, n) {
    "use strict";
    function r(e, t) {
        return this instanceof r ? (e === undefined && (e = "undefined" != typeof location ? location.href + "" : ""),
        this.href(e),
        t !== undefined ? this.absoluteTo(t) : this) : new r(e,t)
    }
    function i(e) {
        return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
    }
    function o(e) {
        return String(Object.prototype.toString.call(e)).slice(8, -1)
    }
    function a(e) {
        return "Array" === o(e)
    }
    function s(e, t) {
        var n, r, i = {};
        if (a(t))
            for (n = 0,
            r = t.length; n < r; n++)
                i[t[n]] = !0;
        else
            i[t] = !0;
        for (n = 0,
        r = e.length; n < r; n++)
            i[e[n]] !== undefined && (e.splice(n, 1),
            r--,
            n--);
        return e
    }
    function u(e, t) {
        var n, r;
        if (a(t)) {
            for (n = 0,
            r = t.length; n < r; n++)
                if (!u(e, t[n]))
                    return !1;
            return !0
        }
        var i = o(t);
        for (n = 0,
        r = e.length; n < r; n++)
            if ("RegExp" === i) {
                if ("string" == typeof e[n] && e[n].match(t))
                    return !0
            } else if (e[n] === t)
                return !0;
        return !1
    }
    function c(e, t) {
        if (!a(e) || !a(t))
            return !1;
        if (e.length !== t.length)
            return !1;
        e.sort(),
        t.sort();
        for (var n = 0, r = e.length; n < r; n++)
            if (e[n] !== t[n])
                return !1;
        return !0
    }
    function l(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, escape).replace(/\*/g, "%2A")
    }
    var f = r.prototype
      , d = Object.prototype.hasOwnProperty;
    r._parts = function() {
        return {
            protocol: null,
            username: null,
            password: null,
            hostname: null,
            urn: null,
            port: null,
            path: null,
            query: null,
            fragment: null,
            duplicateQueryParameters: r.duplicateQueryParameters
        }
    }
    ,
    r.duplicateQueryParameters = !1,
    r.protocol_expression = /^[a-z][a-z0-9-+-]*$/i,
    r.idn_expression = /[^a-z0-9\.-]/i,
    r.punycode_expression = /(xn--)/i,
    r.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
    r.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
    r.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))/gi,
    r.defaultPorts = {
        http: "80",
        https: "443",
        ftp: "21",
        gopher: "70",
        ws: "80",
        wss: "443"
    },
    r.invalid_hostname_characters = /[^a-zA-Z0-9\.-]/,
    r.encode = l,
    r.decode = decodeURIComponent,
    r.iso8859 = function() {
        r.encode = escape,
        r.decode = unescape
    }
    ,
    r.unicode = function() {
        r.encode = l,
        r.decode = decodeURIComponent
    }
    ,
    r.characters = {
        pathname: {
            encode: {
                expression: /%(24|26|2B|2C|3B|3D|3A|40)/gi,
                map: {
                    "%24": "$",
                    "%26": "&",
                    "%2B": "+",
                    "%2C": ",",
                    "%3B": ";",
                    "%3D": "=",
                    "%3A": ":",
                    "%40": "@"
                }
            },
            decode: {
                expression: /[\/\?#]/g,
                map: {
                    "/": "%2F",
                    "?": "%3F",
                    "#": "%23"
                }
            }
        },
        reserved: {
            encode: {
                expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,
                map: {
                    "%3A": ":",
                    "%2F": "/",
                    "%3F": "?",
                    "%23": "#",
                    "%5B": "[",
                    "%5D": "]",
                    "%40": "@",
                    "%21": "!",
                    "%24": "$",
                    "%26": "&",
                    "%27": "'",
                    "%28": "(",
                    "%29": ")",
                    "%2A": "*",
                    "%2B": "+",
                    "%2C": ",",
                    "%3B": ";",
                    "%3D": "="
                }
            }
        }
    },
    r.encodeQuery = function(e) {
        return r.encode(e + "").replace(/%20/g, "+")
    }
    ,
    r.decodeQuery = function(e) {
        return r.decode((e + "").replace(/\+/g, "%20"))
    }
    ,
    r.recodePath = function(e) {
        for (var t = (e + "").split("/"), n = 0, i = t.length; n < i; n++)
            t[n] = r.encodePathSegment(r.decode(t[n]));
        return t.join("/")
    }
    ,
    r.decodePath = function(e) {
        for (var t = (e + "").split("/"), n = 0, i = t.length; n < i; n++)
            t[n] = r.decodePathSegment(t[n]);
        return t.join("/")
    }
    ;
    var h, p = {
        encode: "encode",
        decode: "decode"
    }, m = function(e, t) {
        return function(n) {
            return r[t](n + "").replace(r.characters[e][t].expression, function(n) {
                return r.characters[e][t].map[n]
            })
        }
    };
    for (h in p)
        r[h + "PathSegment"] = m("pathname", p[h]);
    for (h in r.encodeReserved = m("reserved", "encode"),
    r.parse = function(e, t) {
        var n;
        return t || (t = {}),
        (n = e.indexOf("#")) > -1 && (t.fragment = e.substring(n + 1) || null,
        e = e.substring(0, n)),
        (n = e.indexOf("?")) > -1 && (t.query = e.substring(n + 1) || null,
        e = e.substring(0, n)),
        "//" === e.substring(0, 2) ? (t.protocol = "",
        e = e.substring(2),
        e = r.parseAuthority(e, t)) : (n = e.indexOf(":")) > -1 && (t.protocol = e.substring(0, n),
        t.protocol && !t.protocol.match(r.protocol_expression) ? t.protocol = undefined : "file" === t.protocol ? e = e.substring(n + 3) : "//" === e.substring(n + 1, n + 3) ? (e = e.substring(n + 3),
        e = r.parseAuthority(e, t)) : (e = e.substring(n + 1),
        t.urn = !0)),
        t.path = e,
        t
    }
    ,
    r.parseHost = function(e, t) {
        var n, r, i = e.indexOf("/");
        return -1 === i && (i = e.length),
        "[" === e.charAt(0) ? (n = e.indexOf("]"),
        t.hostname = e.substring(1, n) || null,
        t.port = e.substring(n + 2, i) || null) : e.indexOf(":") !== e.lastIndexOf(":") ? (t.hostname = e.substring(0, i) || null,
        t.port = null) : (r = e.substring(0, i).split(":"),
        t.hostname = r[0] || null,
        t.port = r[1] || null),
        t.hostname && "/" !== e.substring(i).charAt(0) && (i++,
        e = "/" + e),
        e.substring(i) || "/"
    }
    ,
    r.parseAuthority = function(e, t) {
        return e = r.parseUserinfo(e, t),
        r.parseHost(e, t)
    }
    ,
    r.parseUserinfo = function(e, t) {
        var n, i = e.indexOf("@"), o = e.indexOf("/");
        return i > -1 && (-1 === o || i < o) ? (n = e.substring(0, i).split(":"),
        t.username = n[0] ? r.decode(n[0]) : null,
        n.shift(),
        t.password = n[0] ? r.decode(n.join(":")) : null,
        e = e.substring(i + 1)) : (t.username = null,
        t.password = null),
        e
    }
    ,
    r.parseQuery = function(e) {
        if (!e)
            return {};
        if (!(e = e.replace(/&+/g, "&").replace(/^\?*&*|&+$/g, "")))
            return {};
        for (var t, n, i, o = {}, a = e.split("&"), s = a.length, u = 0; u < s; u++)
            t = a[u].split("="),
            n = r.decodeQuery(t.shift()),
            i = t.length ? r.decodeQuery(t.join("=")) : null,
            o[n] ? ("string" == typeof o[n] && (o[n] = [o[n]]),
            o[n].push(i)) : o[n] = i;
        return o
    }
    ,
    r.build = function(e) {
        var t = "";
        return e.protocol && (t += e.protocol + ":"),
        e.urn || !t && !e.hostname || (t += "//"),
        t += r.buildAuthority(e) || "",
        "string" == typeof e.path && ("/" !== e.path.charAt(0) && "string" == typeof e.hostname && (t += "/"),
        t += e.path),
        "string" == typeof e.query && e.query && (t += "?" + e.query),
        "string" == typeof e.fragment && e.fragment && (t += "#" + e.fragment),
        t
    }
    ,
    r.buildHost = function(e) {
        var t = "";
        return e.hostname ? (r.ip6_expression.test(e.hostname) ? e.port ? t += "[" + e.hostname + "]:" + e.port : t += e.hostname : (t += e.hostname,
        e.port && (t += ":" + e.port)),
        t) : ""
    }
    ,
    r.buildAuthority = function(e) {
        return r.buildUserinfo(e) + r.buildHost(e)
    }
    ,
    r.buildUserinfo = function(e) {
        var t = "";
        return e.username && (t += r.encode(e.username),
        e.password && (t += ":" + r.encode(e.password)),
        t += "@"),
        t
    }
    ,
    r.buildQuery = function(e, t) {
        var n, i, o, s, u = "";
        for (i in e)
            if (d.call(e, i) && i)
                if (a(e[i]))
                    for (n = {},
                    o = 0,
                    s = e[i].length; o < s; o++)
                        e[i][o] !== undefined && n[e[i][o] + ""] === undefined && (u += "&" + r.buildQueryParameter(i, e[i][o]),
                        !0 !== t && (n[e[i][o] + ""] = !0));
                else
                    e[i] !== undefined && (u += "&" + r.buildQueryParameter(i, e[i]));
        return u.substring(1)
    }
    ,
    r.buildQueryParameter = function(e, t) {
        return r.encodeQuery(e) + (null !== t ? "=" + r.encodeQuery(t) : "")
    }
    ,
    r.addQuery = function(e, t, n) {
        if ("object" == typeof t)
            for (var i in t)
                d.call(t, i) && r.addQuery(e, i, t[i]);
        else {
            if ("string" != typeof t)
                throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
            if (e[t] === undefined)
                return void (e[t] = n);
            "string" == typeof e[t] && (e[t] = [e[t]]),
            a(n) || (n = [n]),
            e[t] = e[t].concat(n)
        }
    }
    ,
    r.removeQuery = function(e, t, n) {
        var i, o, u;
        if (a(t))
            for (i = 0,
            o = t.length; i < o; i++)
                e[t[i]] = undefined;
        else if ("object" == typeof t)
            for (u in t)
                d.call(t, u) && r.removeQuery(e, u, t[u]);
        else {
            if ("string" != typeof t)
                throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");
            n !== undefined ? e[t] === n ? e[t] = undefined : a(e[t]) && (e[t] = s(e[t], n)) : e[t] = undefined
        }
    }
    ,
    r.hasQuery = function(e, t, n, i) {
        if ("object" == typeof t) {
            for (var s in t)
                if (d.call(t, s) && !r.hasQuery(e, s, t[s]))
                    return !1;
            return !0
        }
        if ("string" != typeof t)
            throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter");
        switch (o(n)) {
        case "Undefined":
            return t in e;
        case "Boolean":
            return n === Boolean(a(e[t]) ? e[t].length : e[t]);
        case "Function":
            return !!n(e[t], t, e);
        case "Array":
            return !!a(e[t]) && (i ? u : c)(e[t], n);
        case "RegExp":
            return a(e[t]) ? !!i && u(e[t], n) : Boolean(e[t] && e[t].match(n));
        case "Number":
            n = String(n);
        case "String":
            return a(e[t]) ? !!i && u(e[t], n) : e[t] === n;
        default:
            throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter")
        }
    }
    ,
    r.commonPath = function(e, t) {
        var n, r = Math.min(e.length, t.length);
        for (n = 0; n < r; n++)
            if (e.charAt(n) !== t.charAt(n)) {
                n--;
                break
            }
        return n < 1 ? e.charAt(0) === t.charAt(0) && "/" === e.charAt(0) ? "/" : "" : ("/" === e.charAt(n) && "/" === t.charAt(n) || (n = e.substring(0, n).lastIndexOf("/")),
        e.substring(0, n + 1))
    }
    ,
    r.withinString = function(e, t) {
        return e.replace(r.find_uri_expression, t)
    }
    ,
    r.ensureValidHostname = function(t) {
        if (t.match(r.invalid_hostname_characters)) {
            if (!e)
                throw new TypeError("Hostname '" + t + "' contains characters other than [A-Z0-9.-] and Punycode.js is not available");
            if (e.toASCII(t).match(r.invalid_hostname_characters))
                throw new TypeError("Hostname '" + t + "' contains characters other than [A-Z0-9.-]")
        }
    }
    ,
    f.build = function(e) {
        return !0 === e ? this._deferred_build = !0 : (e === undefined || this._deferred_build) && (this._string = r.build(this._parts),
        this._deferred_build = !1),
        this
    }
    ,
    f.clone = function() {
        return new r(this)
    }
    ,
    f.valueOf = f.toString = function() {
        return this.build(!1)._string
    }
    ,
    m = function(e) {
        return function(t, n) {
            return t === undefined ? this._parts[e] || "" : (this._parts[e] = t,
            this.build(!n),
            this)
        }
    }
    ,
    p = {
        protocol: "protocol",
        username: "username",
        password: "password",
        hostname: "hostname",
        port: "port"
    })
        f[h] = m(p[h]);
    for (h in m = function(e, t) {
        return function(n, r) {
            return n === undefined ? this._parts[e] || "" : (null !== n && (n += "").charAt(0) === t && (n = n.substring(1)),
            this._parts[e] = n,
            this.build(!r),
            this)
        }
    }
    ,
    p = {
        query: "?",
        fragment: "#"
    })
        f[h] = m(h, p[h]);
    for (h in m = function(e, t) {
        return function(n, r) {
            var i = this[e](n, r);
            return "string" == typeof i && i.length ? t + i : i
        }
    }
    ,
    p = {
        search: ["?", "query"],
        hash: ["#", "fragment"]
    })
        f[h] = m(p[h][1], p[h][0]);
    f.pathname = function(e, t) {
        if (e === undefined || !0 === e) {
            var n = this._parts.path || (this._parts.urn ? "" : "/");
            return e ? r.decodePath(n) : n
        }
        return this._parts.path = e ? r.recodePath(e) : "/",
        this.build(!t),
        this
    }
    ,
    f.path = f.pathname,
    f.href = function(e, t) {
        var n;
        if (e === undefined)
            return this.toString();
        this._string = "",
        this._parts = r._parts();
        var i = e instanceof r
          , o = "object" == typeof e && (e.hostname || e.path);
        if (!i && o && e.pathname !== undefined && (e = e.toString()),
        "string" == typeof e)
            this._parts = r.parse(e, this._parts);
        else {
            if (!i && !o)
                throw new TypeError("invalid input");
            var a = i ? e._parts : e;
            for (n in a)
                d.call(this._parts, n) && (this._parts[n] = a[n])
        }
        return this.build(!t),
        this
    }
    ,
    f.is = function(e) {
        var t = !1
          , i = !1
          , o = !1
          , a = !1
          , s = !1
          , u = !1
          , c = !1
          , l = !this._parts.urn;
        switch (this._parts.hostname && (l = !1,
        i = r.ip4_expression.test(this._parts.hostname),
        o = r.ip6_expression.test(this._parts.hostname),
        s = (a = !(t = i || o)) && n && n.has(this._parts.hostname),
        u = a && r.idn_expression.test(this._parts.hostname),
        c = a && r.punycode_expression.test(this._parts.hostname)),
        e.toLowerCase()) {
        case "relative":
            return l;
        case "absolute":
            return !l;
        case "domain":
        case "name":
            return a;
        case "sld":
            return s;
        case "ip":
            return t;
        case "ip4":
        case "ipv4":
        case "inet4":
            return i;
        case "ip6":
        case "ipv6":
        case "inet6":
            return o;
        case "idn":
            return u;
        case "url":
            return !this._parts.urn;
        case "urn":
            return !!this._parts.urn;
        case "punycode":
            return c
        }
        return null
    }
    ;
    var g = f.protocol
      , y = f.port
      , v = f.hostname;
    f.protocol = function(e, t) {
        if (e !== undefined && e && (e = e.replace(/:(\/\/)?$/, "")).match(/[^a-zA-z0-9\.+-]/))
            throw new TypeError("Protocol '" + e + "' contains characters other than [A-Z0-9.+-]");
        return g.call(this, e, t)
    }
    ,
    f.scheme = f.protocol,
    f.port = function(e, t) {
        if (this._parts.urn)
            return e === undefined ? "" : this;
        if (e !== undefined && (0 === e && (e = null),
        e && (":" === (e += "").charAt(0) && (e = e.substring(1)),
        e.match(/[^0-9]/))))
            throw new TypeError("Port '" + e + "' contains characters other than [0-9]");
        return y.call(this, e, t)
    }
    ,
    f.hostname = function(e, t) {
        if (this._parts.urn)
            return e === undefined ? "" : this;
        if (e !== undefined) {
            var n = {};
            r.parseHost(e, n),
            e = n.hostname
        }
        return v.call(this, e, t)
    }
    ,
    f.host = function(e, t) {
        return this._parts.urn ? e === undefined ? "" : this : e === undefined ? this._parts.hostname ? r.buildHost(this._parts) : "" : (r.parseHost(e, this._parts),
        this.build(!t),
        this)
    }
    ,
    f.authority = function(e, t) {
        return this._parts.urn ? e === undefined ? "" : this : e === undefined ? this._parts.hostname ? r.buildAuthority(this._parts) : "" : (r.parseAuthority(e, this._parts),
        this.build(!t),
        this)
    }
    ,
    f.userinfo = function(e, t) {
        if (this._parts.urn)
            return e === undefined ? "" : this;
        if (e === undefined) {
            if (!this._parts.username)
                return "";
            var n = r.buildUserinfo(this._parts);
            return n.substring(0, n.length - 1)
        }
        return "@" !== e[e.length - 1] && (e += "@"),
        r.parseUserinfo(e, this._parts),
        this.build(!t),
        this
    }
    ,
    f.resource = function(e, t) {
        var n;
        return e === undefined ? this.path() + this.search() + this.hash() : (n = r.parse(e),
        this._parts.path = n.path,
        this._parts.query = n.query,
        this._parts.fragment = n.fragment,
        this.build(!t),
        this)
    }
    ,
    f.subdomain = function(e, t) {
        if (this._parts.urn)
            return e === undefined ? "" : this;
        if (e === undefined) {
            if (!this._parts.hostname || this.is("IP"))
                return "";
            var n = this._parts.hostname.length - this.domain().length - 1;
            return this._parts.hostname.substring(0, n) || ""
        }
        var o = this._parts.hostname.length - this.domain().length
          , a = this._parts.hostname.substring(0, o)
          , s = new RegExp("^" + i(a));
        return e && "." !== e.charAt(e.length - 1) && (e += "."),
        e && r.ensureValidHostname(e),
        this._parts.hostname = this._parts.hostname.replace(s, e),
        this.build(!t),
        this
    }
    ,
    f.domain = function(e, t) {
        if (this._parts.urn)
            return e === undefined ? "" : this;
        if ("boolean" == typeof e && (t = e,
        e = undefined),
        e === undefined) {
            if (!this._parts.hostname || this.is("IP"))
                return "";
            var n = this._parts.hostname.match(/\./g);
            if (n && n.length < 2)
                return this._parts.hostname;
            var o = this._parts.hostname.length - this.tld(t).length - 1;
            return o = this._parts.hostname.lastIndexOf(".", o - 1) + 1,
            this._parts.hostname.substring(o) || ""
        }
        if (!e)
            throw new TypeError("cannot set domain empty");
        if (r.ensureValidHostname(e),
        !this._parts.hostname || this.is("IP"))
            this._parts.hostname = e;
        else {
            var a = new RegExp(i(this.domain()) + "$");
            this._parts.hostname = this._parts.hostname.replace(a, e)
        }
        return this.build(!t),
        this
    }
    ,
    f.tld = function(e, t) {
        if (this._parts.urn)
            return e === undefined ? "" : this;
        if ("boolean" == typeof e && (t = e,
        e = undefined),
        e === undefined) {
            if (!this._parts.hostname || this.is("IP"))
                return "";
            var r = this._parts.hostname.lastIndexOf(".")
              , o = this._parts.hostname.substring(r + 1);
            return !0 !== t && n && n.list[o.toLowerCase()] && n.get(this._parts.hostname) || o
        }
        var a;
        if (!e)
            throw new TypeError("cannot set TLD empty");
        if (e.match(/[^a-zA-Z0-9-]/)) {
            if (!n || !n.is(e))
                throw new TypeError("TLD '" + e + "' contains characters other than [A-Z0-9]");
            a = new RegExp(i(this.tld()) + "$"),
            this._parts.hostname = this._parts.hostname.replace(a, e)
        } else {
            if (!this._parts.hostname || this.is("IP"))
                throw new ReferenceError("cannot set TLD on non-domain host");
            a = new RegExp(i(this.tld()) + "$"),
            this._parts.hostname = this._parts.hostname.replace(a, e)
        }
        return this.build(!t),
        this
    }
    ,
    f.directory = function(e, t) {
        if (this._parts.urn)
            return e === undefined ? "" : this;
        if (e === undefined || !0 === e) {
            if (!this._parts.path && !this._parts.hostname)
                return "";
            if ("/" === this._parts.path)
                return "/";
            var n = this._parts.path.length - this.filename().length - 1
              , o = this._parts.path.substring(0, n) || (this._parts.hostname ? "/" : "");
            return e ? r.decodePath(o) : o
        }
        var a = this._parts.path.length - this.filename().length
          , s = this._parts.path.substring(0, a)
          , u = new RegExp("^" + i(s));
        return this.is("relative") || (e || (e = "/"),
        "/" !== e.charAt(0) && (e = "/" + e)),
        e && "/" !== e.charAt(e.length - 1) && (e += "/"),
        e = r.recodePath(e),
        this._parts.path = this._parts.path.replace(u, e),
        this.build(!t),
        this
    }
    ,
    f.filename = function(e, t) {
        if (this._parts.urn)
            return e === undefined ? "" : this;
        if (e === undefined || !0 === e) {
            if (!this._parts.path || "/" === this._parts.path)
                return "";
            var n = this._parts.path.lastIndexOf("/")
              , o = this._parts.path.substring(n + 1);
            return e ? r.decodePathSegment(o) : o
        }
        var a = !1;
        "/" === e.charAt(0) && (e = e.substring(1)),
        e.match(/\.?\//) && (a = !0);
        var s = new RegExp(i(this.filename()) + "$");
        return e = r.recodePath(e),
        this._parts.path = this._parts.path.replace(s, e),
        a ? this.normalizePath(t) : this.build(!t),
        this
    }
    ,
    f.suffix = function(e, t) {
        if (this._parts.urn)
            return e === undefined ? "" : this;
        if (e === undefined || !0 === e) {
            if (!this._parts.path || "/" === this._parts.path)
                return "";
            var n, o, a = this.filename(), s = a.lastIndexOf(".");
            return -1 === s ? "" : (n = a.substring(s + 1),
            o = /^[a-z0-9%]+$/i.test(n) ? n : "",
            e ? r.decodePathSegment(o) : o)
        }
        "." === e.charAt(0) && (e = e.substring(1));
        var u, c = this.suffix();
        if (c)
            u = e ? new RegExp(i(c) + "$") : new RegExp(i("." + c) + "$");
        else {
            if (!e)
                return this;
            this._parts.path += "." + r.recodePath(e)
        }
        return u && (e = r.recodePath(e),
        this._parts.path = this._parts.path.replace(u, e)),
        this.build(!t),
        this
    }
    ,
    f.segment = function(e, t, n) {
        var r = this._parts.urn ? ":" : "/"
          , i = this.path()
          , o = "/" === i.substring(0, 1)
          , s = i.split(r);
        if ("number" != typeof e && (n = t,
        t = e,
        e = undefined),
        e !== undefined && "number" != typeof e)
            throw new Error("Bad segment '" + e + "', must be 0-based integer");
        return o && s.shift(),
        e < 0 && (e = Math.max(s.length + e, 0)),
        t === undefined ? e === undefined ? s : s[e] : (null === e || s[e] === undefined ? a(t) ? s = t : (t || "string" == typeof t && t.length) && ("" === s[s.length - 1] ? s[s.length - 1] = t : s.push(t)) : t || "string" == typeof t && t.length ? s[e] = t : s.splice(e, 1),
        o && s.unshift(""),
        this.path(s.join(r), n))
    }
    ;
    var b = f.query;
    return f.query = function(e, t) {
        if (!0 === e)
            return r.parseQuery(this._parts.query);
        if ("function" == typeof e) {
            var n = r.parseQuery(this._parts.query)
              , i = e.call(this, n);
            return this._parts.query = r.buildQuery(i || n, this._parts.duplicateQueryParameters),
            this.build(!t),
            this
        }
        return e !== undefined && "string" != typeof e ? (this._parts.query = r.buildQuery(e, this._parts.duplicateQueryParameters),
        this.build(!t),
        this) : b.call(this, e, t)
    }
    ,
    f.setQuery = function(e, t, n) {
        var i = r.parseQuery(this._parts.query);
        if ("object" == typeof e)
            for (var o in e)
                d.call(e, o) && (i[o] = e[o]);
        else {
            if ("string" != typeof e)
                throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
            i[e] = t !== undefined ? t : null
        }
        return this._parts.query = r.buildQuery(i, this._parts.duplicateQueryParameters),
        "string" != typeof e && (n = t),
        this.build(!n),
        this
    }
    ,
    f.addQuery = function(e, t, n) {
        var i = r.parseQuery(this._parts.query);
        return r.addQuery(i, e, t === undefined ? null : t),
        this._parts.query = r.buildQuery(i, this._parts.duplicateQueryParameters),
        "string" != typeof e && (n = t),
        this.build(!n),
        this
    }
    ,
    f.removeQuery = function(e, t, n) {
        var i = r.parseQuery(this._parts.query);
        return r.removeQuery(i, e, t),
        this._parts.query = r.buildQuery(i, this._parts.duplicateQueryParameters),
        "string" != typeof e && (n = t),
        this.build(!n),
        this
    }
    ,
    f.hasQuery = function(e, t, n) {
        var i = r.parseQuery(this._parts.query);
        return r.hasQuery(i, e, t, n)
    }
    ,
    f.setSearch = f.setQuery,
    f.addSearch = f.addQuery,
    f.removeSearch = f.removeQuery,
    f.hasSearch = f.hasQuery,
    f.normalize = function() {
        return this._parts.urn ? this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build() : this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()
    }
    ,
    f.normalizeProtocol = function(e) {
        return "string" == typeof this._parts.protocol && (this._parts.protocol = this._parts.protocol.toLowerCase(),
        this.build(!e)),
        this
    }
    ,
    f.normalizeHostname = function(n) {
        return this._parts.hostname && (this.is("IDN") && e ? this._parts.hostname = e.toASCII(this._parts.hostname) : this.is("IPv6") && t && (this._parts.hostname = t.best(this._parts.hostname)),
        this._parts.hostname = this._parts.hostname.toLowerCase(),
        this.build(!n)),
        this
    }
    ,
    f.normalizePort = function(e) {
        return "string" == typeof this._parts.protocol && this._parts.port === r.defaultPorts[this._parts.protocol] && (this._parts.port = null,
        this.build(!e)),
        this
    }
    ,
    f.normalizePath = function(e) {
        if (this._parts.urn)
            return this;
        if (!this._parts.path || "/" === this._parts.path)
            return this;
        var t, n, i, o = this._parts.path;
        for ("/" !== o.charAt(0) && ("." === o.charAt(0) && o.substring(0, o.indexOf("/")),
        t = !0,
        o = "/" + o),
        o = o.replace(/(\/(\.\/)+)|\/{2,}/g, "/"); -1 !== (n = o.indexOf("/../")); ) {
            if (0 === n) {
                o = o.substring(3);
                break
            }
            -1 === (i = o.substring(0, n).lastIndexOf("/")) && (i = n),
            o = o.substring(0, i) + o.substring(n + 3)
        }
        return t && this.is("relative") && (o = o.substring(1)),
        o = r.recodePath(o),
        this._parts.path = o,
        this.build(!e),
        this
    }
    ,
    f.normalizePathname = f.normalizePath,
    f.normalizeQuery = function(e) {
        return "string" == typeof this._parts.query && (this._parts.query.length ? this.query(r.parseQuery(this._parts.query)) : this._parts.query = null,
        this.build(!e)),
        this
    }
    ,
    f.normalizeFragment = function(e) {
        return this._parts.fragment || (this._parts.fragment = null,
        this.build(!e)),
        this
    }
    ,
    f.normalizeSearch = f.normalizeQuery,
    f.normalizeHash = f.normalizeFragment,
    f.iso8859 = function() {
        var e = r.encode
          , t = r.decode;
        return r.encode = escape,
        r.decode = decodeURIComponent,
        this.normalize(),
        r.encode = e,
        r.decode = t,
        this
    }
    ,
    f.unicode = function() {
        var e = r.encode
          , t = r.decode;
        return r.encode = l,
        r.decode = unescape,
        this.normalize(),
        r.encode = e,
        r.decode = t,
        this
    }
    ,
    f.readable = function() {
        var t = this.clone();
        t.username("").password("").normalize();
        var n = "";
        if (t._parts.protocol && (n += t._parts.protocol + "://"),
        t._parts.hostname && (t.is("punycode") && e ? (n += e.toUnicode(t._parts.hostname),
        t._parts.port && (n += ":" + t._parts.port)) : n += t.host()),
        t._parts.hostname && t._parts.path && "/" !== t._parts.path.charAt(0) && (n += "/"),
        n += t.path(!0),
        t._parts.query) {
            for (var i = "", o = 0, a = t._parts.query.split("&"), s = a.length; o < s; o++) {
                var u = (a[o] || "").split("=");
                i += "&" + r.decodeQuery(u[0]).replace(/&/g, "%26"),
                u[1] !== undefined && (i += "=" + r.decodeQuery(u[1]).replace(/&/g, "%26"))
            }
            n += "?" + i.substring(1)
        }
        return n += t.hash()
    }
    ,
    f.absoluteTo = function(e) {
        var t, n, i, o = this.clone(), a = ["protocol", "username", "password", "hostname", "port"];
        if (this._parts.urn)
            throw new Error("URNs do not have any generally defined hierachical components");
        if (e instanceof r || (e = new r(e)),
        o._parts.protocol || (o._parts.protocol = e._parts.protocol),
        this._parts.hostname)
            return o;
        for (n = 0; i = a[n]; n++)
            o._parts[i] = e._parts[i];
        for (a = ["query", "path"],
        n = 0; i = a[n]; n++)
            !o._parts[i] && e._parts[i] && (o._parts[i] = e._parts[i]);
        return "/" !== o.path().charAt(0) && (t = e.directory(),
        o._parts.path = (t ? t + "/" : "") + o._parts.path,
        o.normalizePath()),
        o.build(),
        o
    }
    ,
    f.relativeTo = function(e) {
        var t, n, o, a, s = this.clone(), u = ["protocol", "username", "password", "hostname", "port"];
        if (s._parts.urn)
            throw new Error("URNs do not have any generally defined hierachical components");
        if (e instanceof r || (e = new r(e)),
        "/" !== s.path().charAt(0) || "/" !== e.path().charAt(0))
            throw new Error("Cannot calculate common path from non-relative URLs");
        t = r.commonPath(s.path(), e.path());
        for (var c, l = 0; c = u[l]; l++)
            s._parts[c] = null;
        if ("/" === t)
            return s;
        if (!t)
            return this.clone();
        if ((n = e.directory()) === (o = s.directory()))
            return s._parts.path = s.filename(),
            s.build();
        if (n.substring(t.length),
        a = o.substring(t.length),
        n + "/" === t)
            return a && (a += "/"),
            s._parts.path = a + s.filename(),
            s.build();
        for (var f = "../", d = new RegExp("^" + i(t)), h = n.replace(d, "/").match(/\//g).length - 1; h--; )
            f += "../";
        return s._parts.path = s._parts.path.replace(d, f),
        s.build()
    }
    ,
    f.equals = function(e) {
        var t, n, i, o = this.clone(), s = new r(e), u = {}, l = {}, f = {};
        if (o.normalize(),
        s.normalize(),
        o.toString() === s.toString())
            return !0;
        if (t = o.query(),
        n = s.query(),
        o.query(""),
        s.query(""),
        o.toString() !== s.toString())
            return !1;
        if (t.length !== n.length)
            return !1;
        for (i in u = r.parseQuery(t),
        l = r.parseQuery(n),
        u)
            if (d.call(u, i)) {
                if (a(u[i])) {
                    if (!c(u[i], l[i]))
                        return !1
                } else if (u[i] !== l[i])
                    return !1;
                f[i] = !0
            }
        for (i in l)
            if (d.call(l, i) && !f[i])
                return !1;
        return !0
    }
    ,
    f.duplicateQueryParameters = function(e) {
        return this._parts.duplicateQueryParameters = !!e,
        this
    }
    ,
    r
}),
Market.Helpers.CookieConsent = {
    given: function(e) {
        if ("undefined" != typeof Cookiebot && Cookiebot.consent)
            return Cookiebot.consent[e];
        const t = $.cookie("CookieConsent");
        if (!t)
            return !1;
        if ("-1" === t)
            return !0;
        try {
            const r = JSON.parse(t.replace(/%2c/g, ",").replace(/'/g, '"').replace(/([{\[,])\s*([a-zA-Z0-9_]+?):/g, '$1"$2":'));
            return r && !!r[e]
        } catch (n) {
            return !1
        }
    },
    cookieAvailable: function() {
        return !!$.cookie("CookieConsent")
    },
    addListener: function(e, t) {
        window.addEventListener("CookiebotOnAccept", function() {
            Market.Helpers.CookieConsent.given(e) && t()
        }, !1)
    }
},
Views.AffiliatesTracker = class {
    constructor(e) {
        const t = e.data("cookiebot-enabled")
          , n = (Market.Helpers.CookieConsent.given,
        Market.Helpers.CookieConsent.cookieAvailable())
          , r = this.removeAffiliateCookies
          , i = this.registerReferral;
        this.setupReferralListener(t, i, r),
        n && t || i()
    }
    setupReferralListener(e, t, n) {
        const r = Market.Helpers.CookieConsent.given;
        e && window.addEventListener("CookiebotOnAccept", function() {
            if (r("marketing")) {
                $.cookie("click_id") || t()
            } else
                n()
        }, !1)
    }
    removeAffiliateCookies() {
        const e = "/consociate/recant";
        $.ajax({
            method: "GET",
            url: e,
            dataType: "JSON",
            timeout: 5e3,
            xhrFields: {
                withCredentials: !0
            }
        }).then(function() {
            Market.Helpers.GoogleAnalytics.sendEvent("event", "affiliate cookie removal", "success")
        }, function(t, n, r) {
            Market.Helpers.GoogleAnalytics.sendEvent("event", "affiliate cookie removal error", `${t.status} | ${n} | ${r}`, {
                label: e
            })
        })
    }
    registerReferral() {
        const e = window.location.href
          , t = URI.parse(e)
          , n = t.query && !t.query.includes("redirect_back") ? `&url=${encodeURIComponent(e)}&referrer=${encodeURIComponent(document.referrer)}` : ""
          , r = t.query ? `?${t.query}${n}` : ""
          , i = t.port ? `:${t.port}` : ""
          , o = `${t.protocol}://${t.hostname}${i}/consociate/indite${r}`;
        $.ajax({
            method: "GET",
            url: o,
            dataType: "JSON",
            timeout: 5e3,
            xhrFields: {
                withCredentials: !0
            }
        }).then(function(e) {
            e && e.redirect && (window.location.href = e.redirect_url)
        }, function(e, t, n) {
            Market.Helpers.GoogleAnalytics.sendEvent("event", "affiliate cookie", `${e.status} | ${t} | ${n}`, {
                label: o
            })
        })
    }
}
,
Market.Helpers.GaLsUtils = {
    getClientId: function() {
        return localStorage.getItem(this.clientIdLocalStorageKey())
    },
    storeClientId: function(e) {
        if (e)
            return localStorage.setItem(this.clientIdLocalStorageKey(), e)
    },
    removeClientId: function() {
        if (this.clientIdLocalStorageKey())
            return localStorage.removeItem(this.clientIdLocalStorageKey())
    },
    clientIdLocalStorageKey: function() {
        return "ga:clientId"
    },
    clientIdValid: function(e) {
        if (null === e)
            return !0;
        var t = 10
          , n = /^[0-9]+\.[0-9]+$/g;
        return e.split("").length > t && n.test(e)
    },
    localStorageAvailable: function() {
        var e = "t";
        try {
            return localStorage.setItem(e, e),
            localStorage.removeItem(e),
            !0
        } catch (t) {
            return !1
        }
    }
},
function() {
    function e(e) {
        function t(t, n, r, i, o, a) {
            for (; o >= 0 && o < a; o += e) {
                var s = i ? i[o] : o;
                r = n(r, t[s], s, t)
            }
            return r
        }
        return function(n, r, i, o) {
            r = v(r, o, 4);
            var a = !k(n) && y.keys(n)
              , s = (a || n).length
              , u = e > 0 ? 0 : s - 1;
            return arguments.length < 3 && (i = n[a ? a[u] : u],
            u += e),
            t(n, r, i, a, u, s)
        }
    }
    function t(e) {
        return function(t, n, r) {
            n = b(n, r);
            for (var i = null != t && t.length, o = e > 0 ? 0 : i - 1; o >= 0 && o < i; o += e)
                if (n(t[o], o, t))
                    return o;
            return -1
        }
    }
    function n(e, t) {
        var n = A.length
          , r = e.constructor
          , i = y.isFunction(r) && r.prototype || a
          , o = "constructor";
        for (y.has(e, o) && !y.contains(t, o) && t.push(o); n--; )
            (o = A[n])in e && e[o] !== i[o] && !y.contains(t, o) && t.push(o)
    }
    var r = this
      , i = r._
      , o = Array.prototype
      , a = Object.prototype
      , s = Function.prototype
      , u = o.push
      , c = o.slice
      , l = a.toString
      , f = a.hasOwnProperty
      , d = Array.isArray
      , h = Object.keys
      , p = s.bind
      , m = Object.create
      , g = function() {}
      , y = function(e) {
        return e instanceof y ? e : this instanceof y ? void (this._wrapped = e) : new y(e)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y),
    exports._ = y) : r._ = y,
    y.VERSION = "1.8.2";
    var v = function(e, t, n) {
        if (void 0 === t)
            return e;
        switch (null == n ? 3 : n) {
        case 1:
            return function(n) {
                return e.call(t, n)
            }
            ;
        case 2:
            return function(n, r) {
                return e.call(t, n, r)
            }
            ;
        case 3:
            return function(n, r, i) {
                return e.call(t, n, r, i)
            }
            ;
        case 4:
            return function(n, r, i, o) {
                return e.call(t, n, r, i, o)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
      , b = function(e, t, n) {
        return null == e ? y.identity : y.isFunction(e) ? v(e, t, n) : y.isObject(e) ? y.matcher(e) : y.property(e)
    };
    y.iteratee = function(e, t) {
        return b(e, t, Infinity)
    }
    ;
    var _ = function(e, t) {
        return function(n) {
            var r = arguments.length;
            if (r < 2 || null == n)
                return n;
            for (var i = 1; i < r; i++)
                for (var o = arguments[i], a = e(o), s = a.length, u = 0; u < s; u++) {
                    var c = a[u];
                    t && void 0 !== n[c] || (n[c] = o[c])
                }
            return n
        }
    }
      , w = function(e) {
        if (!y.isObject(e))
            return {};
        if (m)
            return m(e);
        g.prototype = e;
        var t = new g;
        return g.prototype = null,
        t
    }
      , x = Math.pow(2, 53) - 1
      , k = function(e) {
        var t = e && e.length;
        return "number" == typeof t && t >= 0 && t <= x
    };
    y.each = y.forEach = function(e, t, n) {
        var r, i;
        if (t = v(t, n),
        k(e))
            for (r = 0,
            i = e.length; r < i; r++)
                t(e[r], r, e);
        else {
            var o = y.keys(e);
            for (r = 0,
            i = o.length; r < i; r++)
                t(e[o[r]], o[r], e)
        }
        return e
    }
    ,
    y.map = y.collect = function(e, t, n) {
        t = b(t, n);
        for (var r = !k(e) && y.keys(e), i = (r || e).length, o = Array(i), a = 0; a < i; a++) {
            var s = r ? r[a] : a;
            o[a] = t(e[s], s, e)
        }
        return o
    }
    ,
    y.reduce = y.foldl = y.inject = e(1),
    y.reduceRight = y.foldr = e(-1),
    y.find = y.detect = function(e, t, n) {
        var r;
        if (void 0 !== (r = k(e) ? y.findIndex(e, t, n) : y.findKey(e, t, n)) && -1 !== r)
            return e[r]
    }
    ,
    y.filter = y.select = function(e, t, n) {
        var r = [];
        return t = b(t, n),
        y.each(e, function(e, n, i) {
            t(e, n, i) && r.push(e)
        }),
        r
    }
    ,
    y.reject = function(e, t, n) {
        return y.filter(e, y.negate(b(t)), n)
    }
    ,
    y.every = y.all = function(e, t, n) {
        t = b(t, n);
        for (var r = !k(e) && y.keys(e), i = (r || e).length, o = 0; o < i; o++) {
            var a = r ? r[o] : o;
            if (!t(e[a], a, e))
                return !1
        }
        return !0
    }
    ,
    y.some = y.any = function(e, t, n) {
        t = b(t, n);
        for (var r = !k(e) && y.keys(e), i = (r || e).length, o = 0; o < i; o++) {
            var a = r ? r[o] : o;
            if (t(e[a], a, e))
                return !0
        }
        return !1
    }
    ,
    y.contains = y.includes = y.include = function(e, t, n) {
        return k(e) || (e = y.values(e)),
        y.indexOf(e, t, "number" == typeof n && n) >= 0
    }
    ,
    y.invoke = function(e, t) {
        var n = c.call(arguments, 2)
          , r = y.isFunction(t);
        return y.map(e, function(e) {
            var i = r ? t : e[t];
            return null == i ? i : i.apply(e, n)
        })
    }
    ,
    y.pluck = function(e, t) {
        return y.map(e, y.property(t))
    }
    ,
    y.where = function(e, t) {
        return y.filter(e, y.matcher(t))
    }
    ,
    y.findWhere = function(e, t) {
        return y.find(e, y.matcher(t))
    }
    ,
    y.max = function(e, t, n) {
        var r, i, o = -Infinity, a = -Infinity;
        if (null == t && null != e)
            for (var s = 0, u = (e = k(e) ? e : y.values(e)).length; s < u; s++)
                (r = e[s]) > o && (o = r);
        else
            t = b(t, n),
            y.each(e, function(e, n, r) {
                ((i = t(e, n, r)) > a || i === -Infinity && o === -Infinity) && (o = e,
                a = i)
            });
        return o
    }
    ,
    y.min = function(e, t, n) {
        var r, i, o = Infinity, a = Infinity;
        if (null == t && null != e)
            for (var s = 0, u = (e = k(e) ? e : y.values(e)).length; s < u; s++)
                (r = e[s]) < o && (o = r);
        else
            t = b(t, n),
            y.each(e, function(e, n, r) {
                ((i = t(e, n, r)) < a || i === Infinity && o === Infinity) && (o = e,
                a = i)
            });
        return o
    }
    ,
    y.shuffle = function(e) {
        for (var t, n = k(e) ? e : y.values(e), r = n.length, i = Array(r), o = 0; o < r; o++)
            (t = y.random(0, o)) !== o && (i[o] = i[t]),
            i[t] = n[o];
        return i
    }
    ,
    y.sample = function(e, t, n) {
        return null == t || n ? (k(e) || (e = y.values(e)),
        e[y.random(e.length - 1)]) : y.shuffle(e).slice(0, Math.max(0, t))
    }
    ,
    y.sortBy = function(e, t, n) {
        return t = b(t, n),
        y.pluck(y.map(e, function(e, n, r) {
            return {
                value: e,
                index: n,
                criteria: t(e, n, r)
            }
        }).sort(function(e, t) {
            var n = e.criteria
              , r = t.criteria;
            if (n !== r) {
                if (n > r || void 0 === n)
                    return 1;
                if (n < r || void 0 === r)
                    return -1
            }
            return e.index - t.index
        }), "value")
    }
    ;
    var T = function(e) {
        return function(t, n, r) {
            var i = {};
            return n = b(n, r),
            y.each(t, function(r, o) {
                var a = n(r, o, t);
                e(i, r, a)
            }),
            i
        }
    };
    y.groupBy = T(function(e, t, n) {
        y.has(e, n) ? e[n].push(t) : e[n] = [t]
    }),
    y.indexBy = T(function(e, t, n) {
        e[n] = t
    }),
    y.countBy = T(function(e, t, n) {
        y.has(e, n) ? e[n]++ : e[n] = 1
    }),
    y.toArray = function(e) {
        return e ? y.isArray(e) ? c.call(e) : k(e) ? y.map(e, y.identity) : y.values(e) : []
    }
    ,
    y.size = function(e) {
        return null == e ? 0 : k(e) ? e.length : y.keys(e).length
    }
    ,
    y.partition = function(e, t, n) {
        t = b(t, n);
        var r = []
          , i = [];
        return y.each(e, function(e, n, o) {
            (t(e, n, o) ? r : i).push(e)
        }),
        [r, i]
    }
    ,
    y.first = y.head = y.take = function(e, t, n) {
        if (null != e)
            return null == t || n ? e[0] : y.initial(e, e.length - t)
    }
    ,
    y.initial = function(e, t, n) {
        return c.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
    }
    ,
    y.last = function(e, t, n) {
        if (null != e)
            return null == t || n ? e[e.length - 1] : y.rest(e, Math.max(0, e.length - t))
    }
    ,
    y.rest = y.tail = y.drop = function(e, t, n) {
        return c.call(e, null == t || n ? 1 : t)
    }
    ,
    y.compact = function(e) {
        return y.filter(e, y.identity)
    }
    ;
    var C = function(e, t, n, r) {
        for (var i = [], o = 0, a = r || 0, s = e && e.length; a < s; a++) {
            var u = e[a];
            if (k(u) && (y.isArray(u) || y.isArguments(u))) {
                t || (u = C(u, t, n));
                var c = 0
                  , l = u.length;
                for (i.length += l; c < l; )
                    i[o++] = u[c++]
            } else
                n || (i[o++] = u)
        }
        return i
    };
    y.flatten = function(e, t) {
        return C(e, t, !1)
    }
    ,
    y.without = function(e) {
        return y.difference(e, c.call(arguments, 1))
    }
    ,
    y.uniq = y.unique = function(e, t, n, r) {
        if (null == e)
            return [];
        y.isBoolean(t) || (r = n,
        n = t,
        t = !1),
        null != n && (n = b(n, r));
        for (var i = [], o = [], a = 0, s = e.length; a < s; a++) {
            var u = e[a]
              , c = n ? n(u, a, e) : u;
            t ? (a && o === c || i.push(u),
            o = c) : n ? y.contains(o, c) || (o.push(c),
            i.push(u)) : y.contains(i, u) || i.push(u)
        }
        return i
    }
    ,
    y.union = function() {
        return y.uniq(C(arguments, !0, !0))
    }
    ,
    y.intersection = function(e) {
        if (null == e)
            return [];
        for (var t = [], n = arguments.length, r = 0, i = e.length; r < i; r++) {
            var o = e[r];
            if (!y.contains(t, o)) {
                for (var a = 1; a < n && y.contains(arguments[a], o); a++)
                    ;
                a === n && t.push(o)
            }
        }
        return t
    }
    ,
    y.difference = function(e) {
        var t = C(arguments, !0, !0, 1);
        return y.filter(e, function(e) {
            return !y.contains(t, e)
        })
    }
    ,
    y.zip = function() {
        return y.unzip(arguments)
    }
    ,
    y.unzip = function(e) {
        for (var t = e && y.max(e, "length").length || 0, n = Array(t), r = 0; r < t; r++)
            n[r] = y.pluck(e, r);
        return n
    }
    ,
    y.object = function(e, t) {
        for (var n = {}, r = 0, i = e && e.length; r < i; r++)
            t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }
    ,
    y.indexOf = function(e, t, n) {
        var r = 0
          , i = e && e.length;
        if ("number" == typeof n)
            r = n < 0 ? Math.max(0, i + n) : n;
        else if (n && i)
            return e[r = y.sortedIndex(e, t)] === t ? r : -1;
        if (t != t)
            return y.findIndex(c.call(e, r), y.isNaN);
        for (; r < i; r++)
            if (e[r] === t)
                return r;
        return -1
    }
    ,
    y.lastIndexOf = function(e, t, n) {
        var r = e ? e.length : 0;
        if ("number" == typeof n && (r = n < 0 ? r + n + 1 : Math.min(r, n + 1)),
        t != t)
            return y.findLastIndex(c.call(e, 0, r), y.isNaN);
        for (; --r >= 0; )
            if (e[r] === t)
                return r;
        return -1
    }
    ,
    y.findIndex = t(1),
    y.findLastIndex = t(-1),
    y.sortedIndex = function(e, t, n, r) {
        for (var i = (n = b(n, r, 1))(t), o = 0, a = e.length; o < a; ) {
            var s = Math.floor((o + a) / 2);
            n(e[s]) < i ? o = s + 1 : a = s
        }
        return o
    }
    ,
    y.range = function(e, t, n) {
        arguments.length <= 1 && (t = e || 0,
        e = 0),
        n = n || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; o < r; o++,
        e += n)
            i[o] = e;
        return i
    }
    ;
    var S = function(e, t, n, r, i) {
        if (!(r instanceof t))
            return e.apply(n, i);
        var o = w(e.prototype)
          , a = e.apply(o, i);
        return y.isObject(a) ? a : o
    };
    y.bind = function(e, t) {
        if (p && e.bind === p)
            return p.apply(e, c.call(arguments, 1));
        if (!y.isFunction(e))
            throw new TypeError("Bind must be called on a function");
        var n = c.call(arguments, 2)
          , r = function() {
            return S(e, r, t, this, n.concat(c.call(arguments)))
        };
        return r
    }
    ,
    y.partial = function(e) {
        var t = c.call(arguments, 1)
          , n = function() {
            for (var r = 0, i = t.length, o = Array(i), a = 0; a < i; a++)
                o[a] = t[a] === y ? arguments[r++] : t[a];
            for (; r < arguments.length; )
                o.push(arguments[r++]);
            return S(e, n, this, this, o)
        };
        return n
    }
    ,
    y.bindAll = function(e) {
        var t, n, r = arguments.length;
        if (r <= 1)
            throw new Error("bindAll must be passed function names");
        for (t = 1; t < r; t++)
            e[n = arguments[t]] = y.bind(e[n], e);
        return e
    }
    ,
    y.memoize = function(e, t) {
        var n = function(r) {
            var i = n.cache
              , o = "" + (t ? t.apply(this, arguments) : r);
            return y.has(i, o) || (i[o] = e.apply(this, arguments)),
            i[o]
        };
        return n.cache = {},
        n
    }
    ,
    y.delay = function(e, t) {
        var n = c.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n)
        }, t)
    }
    ,
    y.defer = y.partial(y.delay, y, 1),
    y.throttle = function(e, t, n) {
        var r, i, o, a = null, s = 0;
        n || (n = {});
        var u = function() {
            s = !1 === n.leading ? 0 : y.now(),
            a = null,
            o = e.apply(r, i),
            a || (r = i = null)
        };
        return function() {
            var c = y.now();
            s || !1 !== n.leading || (s = c);
            var l = t - (c - s);
            return r = this,
            i = arguments,
            l <= 0 || l > t ? (a && (clearTimeout(a),
            a = null),
            s = c,
            o = e.apply(r, i),
            a || (r = i = null)) : a || !1 === n.trailing || (a = setTimeout(u, l)),
            o
        }
    }
    ,
    y.debounce = function(e, t, n) {
        var r, i, o, a, s, u = function() {
            var c = y.now() - a;
            c < t && c >= 0 ? r = setTimeout(u, t - c) : (r = null,
            n || (s = e.apply(o, i),
            r || (o = i = null)))
        };
        return function() {
            o = this,
            i = arguments,
            a = y.now();
            var c = n && !r;
            return r || (r = setTimeout(u, t)),
            c && (s = e.apply(o, i),
            o = i = null),
            s
        }
    }
    ,
    y.wrap = function(e, t) {
        return y.partial(t, e)
    }
    ,
    y.negate = function(e) {
        return function() {
            return !e.apply(this, arguments)
        }
    }
    ,
    y.compose = function() {
        var e = arguments
          , t = e.length - 1;
        return function() {
            for (var n = t, r = e[t].apply(this, arguments); n--; )
                r = e[n].call(this, r);
            return r
        }
    }
    ,
    y.after = function(e, t) {
        return function() {
            if (--e < 1)
                return t.apply(this, arguments)
        }
    }
    ,
    y.before = function(e, t) {
        var n;
        return function() {
            return --e > 0 && (n = t.apply(this, arguments)),
            e <= 1 && (t = null),
            n
        }
    }
    ,
    y.once = y.partial(y.before, 2);
    var D = !{
        toString: null
    }.propertyIsEnumerable("toString")
      , A = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    y.keys = function(e) {
        if (!y.isObject(e))
            return [];
        if (h)
            return h(e);
        var t = [];
        for (var r in e)
            y.has(e, r) && t.push(r);
        return D && n(e, t),
        t
    }
    ,
    y.allKeys = function(e) {
        if (!y.isObject(e))
            return [];
        var t = [];
        for (var r in e)
            t.push(r);
        return D && n(e, t),
        t
    }
    ,
    y.values = function(e) {
        for (var t = y.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++)
            r[i] = e[t[i]];
        return r
    }
    ,
    y.mapObject = function(e, t, n) {
        t = b(t, n);
        for (var r, i = y.keys(e), o = i.length, a = {}, s = 0; s < o; s++)
            a[r = i[s]] = t(e[r], r, e);
        return a
    }
    ,
    y.pairs = function(e) {
        for (var t = y.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++)
            r[i] = [t[i], e[t[i]]];
        return r
    }
    ,
    y.invert = function(e) {
        for (var t = {}, n = y.keys(e), r = 0, i = n.length; r < i; r++)
            t[e[n[r]]] = n[r];
        return t
    }
    ,
    y.functions = y.methods = function(e) {
        var t = [];
        for (var n in e)
            y.isFunction(e[n]) && t.push(n);
        return t.sort()
    }
    ,
    y.extend = _(y.allKeys),
    y.extendOwn = y.assign = _(y.keys),
    y.findKey = function(e, t, n) {
        t = b(t, n);
        for (var r, i = y.keys(e), o = 0, a = i.length; o < a; o++)
            if (t(e[r = i[o]], r, e))
                return r
    }
    ,
    y.pick = function(e, t, n) {
        var r, i, o = {}, a = e;
        if (null == a)
            return o;
        y.isFunction(t) ? (i = y.allKeys(a),
        r = v(t, n)) : (i = C(arguments, !1, !1, 1),
        r = function(e, t, n) {
            return t in n
        }
        ,
        a = Object(a));
        for (var s = 0, u = i.length; s < u; s++) {
            var c = i[s]
              , l = a[c];
            r(l, c, a) && (o[c] = l)
        }
        return o
    }
    ,
    y.omit = function(e, t, n) {
        if (y.isFunction(t))
            t = y.negate(t);
        else {
            var r = y.map(C(arguments, !1, !1, 1), String);
            t = function(e, t) {
                return !y.contains(r, t)
            }
        }
        return y.pick(e, t, n)
    }
    ,
    y.defaults = _(y.allKeys, !0),
    y.clone = function(e) {
        return y.isObject(e) ? y.isArray(e) ? e.slice() : y.extend({}, e) : e
    }
    ,
    y.tap = function(e, t) {
        return t(e),
        e
    }
    ,
    y.isMatch = function(e, t) {
        var n = y.keys(t)
          , r = n.length;
        if (null == e)
            return !r;
        for (var i = Object(e), o = 0; o < r; o++) {
            var a = n[o];
            if (t[a] !== i[a] || !(a in i))
                return !1
        }
        return !0
    }
    ;
    var M = function(e, t, n, r) {
        if (e === t)
            return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t)
            return e === t;
        e instanceof y && (e = e._wrapped),
        t instanceof y && (t = t._wrapped);
        var i = l.call(e);
        if (i !== l.call(t))
            return !1;
        switch (i) {
        case "[object RegExp]":
        case "[object String]":
            return "" + e == "" + t;
        case "[object Number]":
            return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
        case "[object Date]":
        case "[object Boolean]":
            return +e == +t
        }
        var o = "[object Array]" === i;
        if (!o) {
            if ("object" != typeof e || "object" != typeof t)
                return !1;
            var a = e.constructor
              , s = t.constructor;
            if (a !== s && !(y.isFunction(a) && a instanceof a && y.isFunction(s) && s instanceof s) && "constructor"in e && "constructor"in t)
                return !1
        }
        r = r || [];
        for (var u = (n = n || []).length; u--; )
            if (n[u] === e)
                return r[u] === t;
        if (n.push(e),
        r.push(t),
        o) {
            if ((u = e.length) !== t.length)
                return !1;
            for (; u--; )
                if (!M(e[u], t[u], n, r))
                    return !1
        } else {
            var c, f = y.keys(e);
            if (u = f.length,
            y.keys(t).length !== u)
                return !1;
            for (; u--; )
                if (c = f[u],
                !y.has(t, c) || !M(e[c], t[c], n, r))
                    return !1
        }
        return n.pop(),
        r.pop(),
        !0
    };
    y.isEqual = function(e, t) {
        return M(e, t)
    }
    ,
    y.isEmpty = function(e) {
        return null == e || (k(e) && (y.isArray(e) || y.isString(e) || y.isArguments(e)) ? 0 === e.length : 0 === y.keys(e).length)
    }
    ,
    y.isElement = function(e) {
        return !(!e || 1 !== e.nodeType)
    }
    ,
    y.isArray = d || function(e) {
        return "[object Array]" === l.call(e)
    }
    ,
    y.isObject = function(e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e
    }
    ,
    y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
        y["is" + e] = function(t) {
            return l.call(t) === "[object " + e + "]"
        }
    }),
    y.isArguments(arguments) || (y.isArguments = function(e) {
        return y.has(e, "callee")
    }
    ),
    "function" != typeof /./ && "object" != typeof Int8Array && (y.isFunction = function(e) {
        return "function" == typeof e || !1
    }
    ),
    y.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }
    ,
    y.isNaN = function(e) {
        return y.isNumber(e) && e !== +e
    }
    ,
    y.isBoolean = function(e) {
        return !0 === e || !1 === e || "[object Boolean]" === l.call(e)
    }
    ,
    y.isNull = function(e) {
        return null === e
    }
    ,
    y.isUndefined = function(e) {
        return void 0 === e
    }
    ,
    y.has = function(e, t) {
        return null != e && f.call(e, t)
    }
    ,
    y.noConflict = function() {
        return r._ = i,
        this
    }
    ,
    y.identity = function(e) {
        return e
    }
    ,
    y.constant = function(e) {
        return function() {
            return e
        }
    }
    ,
    y.noop = function() {}
    ,
    y.property = function(e) {
        return function(t) {
            return null == t ? void 0 : t[e]
        }
    }
    ,
    y.propertyOf = function(e) {
        return null == e ? function() {}
        : function(t) {
            return e[t]
        }
    }
    ,
    y.matcher = y.matches = function(e) {
        return e = y.extendOwn({}, e),
        function(t) {
            return y.isMatch(t, e)
        }
    }
    ,
    y.times = function(e, t, n) {
        var r = Array(Math.max(0, e));
        t = v(t, n, 1);
        for (var i = 0; i < e; i++)
            r[i] = t(i);
        return r
    }
    ,
    y.random = function(e, t) {
        return null == t && (t = e,
        e = 0),
        e + Math.floor(Math.random() * (t - e + 1))
    }
    ,
    y.now = Date.now || function() {
        return (new Date).getTime()
    }
    ;
    var E = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }
      , N = y.invert(E)
      , j = function(e) {
        var t = function(t) {
            return e[t]
        }
          , n = "(?:" + y.keys(e).join("|") + ")"
          , r = RegExp(n)
          , i = RegExp(n, "g");
        return function(e) {
            return e = null == e ? "" : "" + e,
            r.test(e) ? e.replace(i, t) : e
        }
    };
    y.escape = j(E),
    y.unescape = j(N),
    y.result = function(e, t, n) {
        var r = null == e ? void 0 : e[t];
        return void 0 === r && (r = n),
        y.isFunction(r) ? r.call(e) : r
    }
    ;
    var O = 0;
    y.uniqueId = function(e) {
        var t = ++O + "";
        return e ? e + t : t
    }
    ,
    y.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var F = /(.)^/
      , P = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , I = /\\|'|\r|\n|\u2028|\u2029/g
      , L = function(e) {
        return "\\" + P[e]
    };
    y.template = function(e, t, n) {
        !t && n && (t = n),
        t = y.defaults({}, t, y.templateSettings);
        var r = RegExp([(t.escape || F).source, (t.interpolate || F).source, (t.evaluate || F).source].join("|") + "|$", "g")
          , i = 0
          , o = "__p+='";
        e.replace(r, function(t, n, r, a, s) {
            return o += e.slice(i, s).replace(I, L),
            i = s + t.length,
            n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"),
            t
        }),
        o += "';\n",
        t.variable || (o = "with(obj||{}){\n" + o + "}\n"),
        o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            var a = new Function(t.variable || "obj","_",o)
        } catch (c) {
            throw c.source = o,
            c
        }
        var s = function(e) {
            return a.call(this, e, y)
        }
          , u = t.variable || "obj";
        return s.source = "function(" + u + "){\n" + o + "}",
        s
    }
    ,
    y.chain = function(e) {
        var t = y(e);
        return t._chain = !0,
        t
    }
    ;
    var Y = function(e, t) {
        return e._chain ? y(t).chain() : t
    };
    y.mixin = function(e) {
        y.each(y.functions(e), function(t) {
            var n = y[t] = e[t];
            y.prototype[t] = function() {
                var e = [this._wrapped];
                return u.apply(e, arguments),
                Y(this, n.apply(y, e))
            }
        })
    }
    ,
    y.mixin(y),
    y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
        var t = o[e];
        y.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments),
            "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0],
            Y(this, n)
        }
    }),
    y.each(["concat", "join", "slice"], function(e) {
        var t = o[e];
        y.prototype[e] = function() {
            return Y(this, t.apply(this._wrapped, arguments))
        }
    }),
    y.prototype.value = function() {
        return this._wrapped
    }
    ,
    y.prototype.valueOf = y.prototype.toJSON = y.prototype.value,
    y.prototype.toString = function() {
        return "" + this._wrapped
    }
    ,
    "function" == typeof define && define.amd && define("underscore", [], function() {
        return y
    })
}
.call(this),
function(e) {
    function t() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }
    function n(e, t) {
        return function(n) {
            return l(e.call(this, n), t)
        }
    }
    function r(e, t) {
        return function(n) {
            return this.lang().ordinal(e.call(this, n), t)
        }
    }
    function i() {}
    function o(e) {
        x(e),
        s(this, e)
    }
    function a(e) {
        var t = g(e)
          , n = t.year || 0
          , r = t.month || 0
          , i = t.week || 0
          , o = t.day || 0
          , a = t.hour || 0
          , s = t.minute || 0
          , u = t.second || 0
          , c = t.millisecond || 0;
        this._milliseconds = +c + 1e3 * u + 6e4 * s + 36e5 * a,
        this._days = +o + 7 * i,
        this._months = +r + 12 * n,
        this._data = {},
        this._bubble()
    }
    function s(e, t) {
        for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n]);
        return t.hasOwnProperty("toString") && (e.toString = t.toString),
        t.hasOwnProperty("valueOf") && (e.valueOf = t.valueOf),
        e
    }
    function u(e) {
        var t, n = {};
        for (t in e)
            e.hasOwnProperty(t) && ge.hasOwnProperty(t) && (n[t] = e[t]);
        return n
    }
    function c(e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e)
    }
    function l(e, t, n) {
        for (var r = "" + Math.abs(e), i = e >= 0; r.length < t; )
            r = "0" + r;
        return (i ? n ? "+" : "" : "-") + r
    }
    function f(e, t, n, r) {
        var i, o, a = t._milliseconds, s = t._days, u = t._months;
        a && e._d.setTime(+e._d + a * n),
        (s || u) && (i = e.minute(),
        o = e.hour()),
        s && e.date(e.date() + s * n),
        u && e.month(e.month() + u * n),
        a && !r && re.updateOffset(e),
        (s || u) && (e.minute(i),
        e.hour(o))
    }
    function d(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
    function h(e) {
        return "[object Date]" === Object.prototype.toString.call(e) || e instanceof Date
    }
    function p(e, t, n) {
        var r, i = Math.min(e.length, t.length), o = Math.abs(e.length - t.length), a = 0;
        for (r = 0; r < i; r++)
            (n && e[r] !== t[r] || !n && v(e[r]) !== v(t[r])) && a++;
        return a + o
    }
    function m(e) {
        if (e) {
            var t = e.toLowerCase().replace(/(.)s$/, "$1");
            e = Ge[e] || Ue[t] || t
        }
        return e
    }
    function g(e) {
        var t, n, r = {};
        for (n in e)
            e.hasOwnProperty(n) && (t = m(n)) && (r[t] = e[n]);
        return r
    }
    function y(t) {
        var n, r;
        if (0 === t.indexOf("week"))
            n = 7,
            r = "day";
        else {
            if (0 !== t.indexOf("month"))
                return;
            n = 12,
            r = "month"
        }
        re[t] = function(i, o) {
            var a, s, u = re.fn._lang[t], c = [];
            if ("number" == typeof i && (o = i,
            i = e),
            s = function(e) {
                var t = re().utc().set(r, e);
                return u.call(re.fn._lang, t, i || "")
            }
            ,
            null != o)
                return s(o);
            for (a = 0; a < n; a++)
                c.push(s(a));
            return c
        }
    }
    function v(e) {
        var t = +e
          , n = 0;
        return 0 !== t && isFinite(t) && (n = t >= 0 ? Math.floor(t) : Math.ceil(t)),
        n
    }
    function b(e, t) {
        return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
    }
    function _(e) {
        return w(e) ? 366 : 365
    }
    function w(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }
    function x(e) {
        var t;
        e._a && -2 === e._pf.overflow && (t = e._a[ce] < 0 || e._a[ce] > 11 ? ce : e._a[le] < 1 || e._a[le] > b(e._a[ue], e._a[ce]) ? le : e._a[fe] < 0 || e._a[fe] > 23 ? fe : e._a[de] < 0 || e._a[de] > 59 ? de : e._a[he] < 0 || e._a[he] > 59 ? he : e._a[pe] < 0 || e._a[pe] > 999 ? pe : -1,
        e._pf._overflowDayOfYear && (t < ue || t > le) && (t = le),
        e._pf.overflow = t)
    }
    function k(e) {
        return null == e._isValid && (e._isValid = !isNaN(e._d.getTime()) && e._pf.overflow < 0 && !e._pf.empty && !e._pf.invalidMonth && !e._pf.nullInput && !e._pf.invalidFormat && !e._pf.userInvalidated,
        e._strict && (e._isValid = e._isValid && 0 === e._pf.charsLeftOver && 0 === e._pf.unusedTokens.length)),
        e._isValid
    }
    function T(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }
    function C(e, t) {
        return t._isUTC ? re(e).zone(t._offset || 0) : re(e).local()
    }
    function S(e, t) {
        return t.abbr = e,
        me[e] || (me[e] = new i),
        me[e].set(t),
        me[e]
    }
    function D(e) {
        delete me[e]
    }
    function A(e) {
        var t, n, r, i, o = 0, a = function(e) {
            if (!me[e] && ye)
                try {
                    require("./lang/" + e)
                } catch (t) {}
            return me[e]
        };
        if (!e)
            return re.fn._lang;
        if (!d(e)) {
            if (n = a(e))
                return n;
            e = [e]
        }
        for (; o < e.length; ) {
            for (t = (i = T(e[o]).split("-")).length,
            r = (r = T(e[o + 1])) ? r.split("-") : null; t > 0; ) {
                if (n = a(i.slice(0, t).join("-")))
                    return n;
                if (r && r.length >= t && p(i, r, !0) >= t - 1)
                    break;
                t--
            }
            o++
        }
        return re.fn._lang
    }
    function M(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }
    function E(e) {
        var t, n, r = e.match(we);
        for (t = 0,
        n = r.length; t < n; t++)
            Xe[r[t]] ? r[t] = Xe[r[t]] : r[t] = M(r[t]);
        return function(i) {
            var o = "";
            for (t = 0; t < n; t++)
                o += r[t]instanceof Function ? r[t].call(i, e) : r[t];
            return o
        }
    }
    function N(e, t) {
        return e.isValid() ? (t = j(t, e.lang()),
        Be[t] || (Be[t] = E(t)),
        Be[t](e)) : e.lang().invalidDate()
    }
    function j(e, t) {
        function n(e) {
            return t.longDateFormat(e) || e
        }
        var r = 5;
        for (xe.lastIndex = 0; r >= 0 && xe.test(e); )
            e = e.replace(xe, n),
            xe.lastIndex = 0,
            r -= 1;
        return e
    }
    function O(e, t) {
        var n = t._strict;
        switch (e) {
        case "DDDD":
            return Fe;
        case "YYYY":
        case "GGGG":
        case "gggg":
            return n ? Pe : Ce;
        case "Y":
        case "G":
        case "g":
            return Le;
        case "YYYYYY":
        case "YYYYY":
        case "GGGGG":
        case "ggggg":
            return n ? Ie : Se;
        case "S":
            if (n)
                return je;
        case "SS":
            if (n)
                return Oe;
        case "SSS":
            if (n)
                return Fe;
        case "DDD":
            return Te;
        case "MMM":
        case "MMMM":
        case "dd":
        case "ddd":
        case "dddd":
            return Ae;
        case "a":
        case "A":
            return A(t._l)._meridiemParse;
        case "X":
            return Ne;
        case "Z":
        case "ZZ":
            return Me;
        case "T":
            return Ee;
        case "SSSS":
            return De;
        case "MM":
        case "DD":
        case "YY":
        case "GG":
        case "gg":
        case "HH":
        case "hh":
        case "mm":
        case "ss":
        case "ww":
        case "WW":
            return n ? Oe : ke;
        case "M":
        case "D":
        case "d":
        case "H":
        case "h":
        case "m":
        case "s":
        case "w":
        case "W":
        case "e":
        case "E":
            return ke;
        default:
            return new RegExp(R(q(e.replace("\\", "")), "i"))
        }
    }
    function F(e) {
        var t = (e = e || "").match(Me) || []
          , n = ((t[t.length - 1] || []) + "").match(ze) || ["-", 0, 0]
          , r = 60 * n[1] + v(n[2]);
        return "+" === n[0] ? -r : r
    }
    function P(e, t, n) {
        var r, i = n._a;
        switch (e) {
        case "M":
        case "MM":
            null != t && (i[ce] = v(t) - 1);
            break;
        case "MMM":
        case "MMMM":
            null != (r = A(n._l).monthsParse(t)) ? i[ce] = r : n._pf.invalidMonth = t;
            break;
        case "D":
        case "DD":
            null != t && (i[le] = v(t));
            break;
        case "DDD":
        case "DDDD":
            null != t && (n._dayOfYear = v(t));
            break;
        case "YY":
            i[ue] = v(t) + (v(t) > 68 ? 1900 : 2e3);
            break;
        case "YYYY":
        case "YYYYY":
        case "YYYYYY":
            i[ue] = v(t);
            break;
        case "a":
        case "A":
            n._isPm = A(n._l).isPM(t);
            break;
        case "H":
        case "HH":
        case "h":
        case "hh":
            i[fe] = v(t);
            break;
        case "m":
        case "mm":
            i[de] = v(t);
            break;
        case "s":
        case "ss":
            i[he] = v(t);
            break;
        case "S":
        case "SS":
        case "SSS":
        case "SSSS":
            i[pe] = v(1e3 * ("0." + t));
            break;
        case "X":
            n._d = new Date(1e3 * parseFloat(t));
            break;
        case "Z":
        case "ZZ":
            n._useUTC = !0,
            n._tzm = F(t);
            break;
        case "w":
        case "ww":
        case "W":
        case "WW":
        case "d":
        case "dd":
        case "ddd":
        case "dddd":
        case "e":
        case "E":
            e = e.substr(0, 1);
        case "gg":
        case "gggg":
        case "GG":
        case "GGGG":
        case "GGGGG":
            e = e.substr(0, 2),
            t && (n._w = n._w || {},
            n._w[e] = t)
        }
    }
    function I(e) {
        var t, n, r, i, o, a, s, u, c, l, f = [];
        if (!e._d) {
            for (r = Y(e),
            e._w && null == e._a[le] && null == e._a[ce] && (o = function(t) {
                var n = parseInt(t, 10);
                return t ? t.length < 3 ? n > 68 ? 1900 + n : 2e3 + n : n : null == e._a[ue] ? re().weekYear() : e._a[ue]
            }
            ,
            null != (a = e._w).GG || null != a.W || null != a.E ? s = Z(o(a.GG), a.W || 1, a.E, 4, 1) : (u = A(e._l),
            c = null != a.d ? B(a.d, u) : null != a.e ? parseInt(a.e, 10) + u._week.dow : 0,
            l = parseInt(a.w, 10) || 1,
            null != a.d && c < u._week.dow && l++,
            s = Z(o(a.gg), l, c, u._week.doy, u._week.dow)),
            e._a[ue] = s.year,
            e._dayOfYear = s.dayOfYear),
            e._dayOfYear && (i = null == e._a[ue] ? r[ue] : e._a[ue],
            e._dayOfYear > _(i) && (e._pf._overflowDayOfYear = !0),
            n = U(i, 0, e._dayOfYear),
            e._a[ce] = n.getUTCMonth(),
            e._a[le] = n.getUTCDate()),
            t = 0; t < 3 && null == e._a[t]; ++t)
                e._a[t] = f[t] = r[t];
            for (; t < 7; t++)
                e._a[t] = f[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            f[fe] += v((e._tzm || 0) / 60),
            f[de] += v((e._tzm || 0) % 60),
            e._d = (e._useUTC ? U : G).apply(null, f)
        }
    }
    function L(e) {
        var t;
        e._d || (t = g(e._i),
        e._a = [t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond],
        I(e))
    }
    function Y(e) {
        var t = new Date;
        return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
    }
    function H(e) {
        e._a = [],
        e._pf.empty = !0;
        var t, n, r, i, o, a = A(e._l), s = "" + e._i, u = s.length, c = 0;
        for (r = j(e._f, a).match(we) || [],
        t = 0; t < r.length; t++)
            i = r[t],
            (n = (s.match(O(i, e)) || [])[0]) && ((o = s.substr(0, s.indexOf(n))).length > 0 && e._pf.unusedInput.push(o),
            s = s.slice(s.indexOf(n) + n.length),
            c += n.length),
            Xe[i] ? (n ? e._pf.empty = !1 : e._pf.unusedTokens.push(i),
            P(i, n, e)) : e._strict && !n && e._pf.unusedTokens.push(i);
        e._pf.charsLeftOver = u - c,
        s.length > 0 && e._pf.unusedInput.push(s),
        e._isPm && e._a[fe] < 12 && (e._a[fe] += 12),
        !1 === e._isPm && 12 === e._a[fe] && (e._a[fe] = 0),
        I(e),
        x(e)
    }
    function q(e) {
        return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, i) {
            return t || n || r || i
        })
    }
    function R(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function z(e) {
        var n, r, i, o, a;
        if (0 === e._f.length)
            return e._pf.invalidFormat = !0,
            void (e._d = new Date(NaN));
        for (o = 0; o < e._f.length; o++)
            a = 0,
            (n = s({}, e))._pf = t(),
            n._f = e._f[o],
            H(n),
            k(n) && (a += n._pf.charsLeftOver,
            a += 10 * n._pf.unusedTokens.length,
            n._pf.score = a,
            (null == i || a < i) && (i = a,
            r = n));
        s(e, r || n)
    }
    function $(e) {
        var t, n, r = e._i, i = Ye.exec(r);
        if (i) {
            for (e._pf.iso = !0,
            t = 0,
            n = qe.length; t < n; t++)
                if (qe[t][1].exec(r)) {
                    e._f = qe[t][0] + (i[6] || " ");
                    break
                }
            for (t = 0,
            n = Re.length; t < n; t++)
                if (Re[t][1].exec(r)) {
                    e._f += Re[t][0];
                    break
                }
            r.match(Me) && (e._f += "Z"),
            H(e)
        } else
            e._d = new Date(r)
    }
    function W(t) {
        var n = t._i
          , r = ve.exec(n);
        n === e ? t._d = new Date : r ? t._d = new Date(+r[1]) : "string" == typeof n ? $(t) : d(n) ? (t._a = n.slice(0),
        I(t)) : h(n) ? t._d = new Date(+n) : "object" == typeof n ? L(t) : t._d = new Date(n)
    }
    function G(e, t, n, r, i, o, a) {
        var s = new Date(e,t,n,r,i,o,a);
        return e < 1970 && s.setFullYear(e),
        s
    }
    function U(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return e < 1970 && t.setUTCFullYear(e),
        t
    }
    function B(e, t) {
        if ("string" == typeof e)
            if (isNaN(e)) {
                if ("number" != typeof (e = t.weekdaysParse(e)))
                    return null
            } else
                e = parseInt(e, 10);
        return e
    }
    function Q(e, t, n, r, i) {
        return i.relativeTime(t || 1, !!n, e, r)
    }
    function V(e, t, n) {
        var r = se(Math.abs(e) / 1e3)
          , i = se(r / 60)
          , o = se(i / 60)
          , a = se(o / 24)
          , s = se(a / 365)
          , u = r < 45 && ["s", r] || 1 === i && ["m"] || i < 45 && ["mm", i] || 1 === o && ["h"] || o < 22 && ["hh", o] || 1 === a && ["d"] || a <= 25 && ["dd", a] || a <= 45 && ["M"] || a < 345 && ["MM", se(a / 30)] || 1 === s && ["y"] || ["yy", s];
        return u[2] = t,
        u[3] = e > 0,
        u[4] = n,
        Q.apply({}, u)
    }
    function X(e, t, n) {
        var r, i = n - t, o = n - e.day();
        return o > i && (o -= 7),
        o < i - 7 && (o += 7),
        r = re(e).add("d", o),
        {
            week: Math.ceil(r.dayOfYear() / 7),
            year: r.year()
        }
    }
    function Z(e, t, n, r, i) {
        var o, a = U(e, 0, 1).getUTCDay();
        return {
            year: (o = 7 * (t - 1) + ((n = null != n ? n : i) - i) + (i - a + (a > r ? 7 : 0) - (a < i ? 7 : 0)) + 1) > 0 ? e : e - 1,
            dayOfYear: o > 0 ? o : _(e - 1) + o
        }
    }
    function J(e) {
        var t = e._i
          , n = e._f;
        return null === t ? re.invalid({
            nullInput: !0
        }) : ("string" == typeof t && (e._i = t = A().preparse(t)),
        re.isMoment(t) ? (e = u(t))._d = new Date(+t._d) : n ? d(n) ? z(e) : H(e) : W(e),
        new o(e))
    }
    function K(e, t) {
        re.fn[e] = re.fn[e + "s"] = function(e) {
            var n = this._isUTC ? "UTC" : "";
            return null != e ? (this._d["set" + n + t](e),
            re.updateOffset(this),
            this) : this._d["get" + n + t]()
        }
    }
    function ee(e) {
        re.duration.fn[e] = function() {
            return this._data[e]
        }
    }
    function te(e, t) {
        re.duration.fn["as" + e] = function() {
            return +this / t
        }
    }
    function ne(e) {
        var t = !1
          , n = re;
        "undefined" == typeof ender && (e ? (ae.moment = function() {
            return !t && console && console.warn && (t = !0,
            console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")),
            n.apply(null, arguments)
        }
        ,
        s(ae.moment, n)) : ae.moment = re)
    }
    for (var re, ie, oe = "2.5.1", ae = this, se = Math.round, ue = 0, ce = 1, le = 2, fe = 3, de = 4, he = 5, pe = 6, me = {}, ge = {
        _isAMomentObject: null,
        _i: null,
        _f: null,
        _l: null,
        _strict: null,
        _isUTC: null,
        _offset: null,
        _pf: null,
        _lang: null
    }, ye = "undefined" != typeof module && module.exports && "undefined" != typeof require, ve = /^\/?Date\((\-?\d+)/i, be = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, _e = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, we = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, xe = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, ke = /\d\d?/, Te = /\d{1,3}/, Ce = /\d{1,4}/, Se = /[+\-]?\d{1,6}/, De = /\d+/, Ae = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Me = /Z|[\+\-]\d\d:?\d\d/gi, Ee = /T/i, Ne = /[\+\-]?\d+(\.\d{1,3})?/, je = /\d/, Oe = /\d\d/, Fe = /\d{3}/, Pe = /\d{4}/, Ie = /[+-]?\d{6}/, Le = /[+-]?\d+/, Ye = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, He = "YYYY-MM-DDTHH:mm:ssZ", qe = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], Re = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], ze = /([\+\-]|\d\d)/gi, $e = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), We = {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
    }, Ge = {
        ms: "millisecond",
        s: "second",
        m: "minute",
        h: "hour",
        d: "day",
        D: "date",
        w: "week",
        W: "isoWeek",
        M: "month",
        y: "year",
        DDD: "dayOfYear",
        e: "weekday",
        E: "isoWeekday",
        gg: "weekYear",
        GG: "isoWeekYear"
    }, Ue = {
        dayofyear: "dayOfYear",
        isoweekday: "isoWeekday",
        isoweek: "isoWeek",
        weekyear: "weekYear",
        isoweekyear: "isoWeekYear"
    }, Be = {}, Qe = "DDD w W M D d".split(" "), Ve = "M D H h m s w W".split(" "), Xe = {
        M: function() {
            return this.month() + 1
        },
        MMM: function(e) {
            return this.lang().monthsShort(this, e)
        },
        MMMM: function(e) {
            return this.lang().months(this, e)
        },
        D: function() {
            return this.date()
        },
        DDD: function() {
            return this.dayOfYear()
        },
        d: function() {
            return this.day()
        },
        dd: function(e) {
            return this.lang().weekdaysMin(this, e)
        },
        ddd: function(e) {
            return this.lang().weekdaysShort(this, e)
        },
        dddd: function(e) {
            return this.lang().weekdays(this, e)
        },
        w: function() {
            return this.week()
        },
        W: function() {
            return this.isoWeek()
        },
        YY: function() {
            return l(this.year() % 100, 2)
        },
        YYYY: function() {
            return l(this.year(), 4)
        },
        YYYYY: function() {
            return l(this.year(), 5)
        },
        YYYYYY: function() {
            var e = this.year();
            return (e >= 0 ? "+" : "-") + l(Math.abs(e), 6)
        },
        gg: function() {
            return l(this.weekYear() % 100, 2)
        },
        gggg: function() {
            return l(this.weekYear(), 4)
        },
        ggggg: function() {
            return l(this.weekYear(), 5)
        },
        GG: function() {
            return l(this.isoWeekYear() % 100, 2)
        },
        GGGG: function() {
            return l(this.isoWeekYear(), 4)
        },
        GGGGG: function() {
            return l(this.isoWeekYear(), 5)
        },
        e: function() {
            return this.weekday()
        },
        E: function() {
            return this.isoWeekday()
        },
        a: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !0)
        },
        A: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !1)
        },
        H: function() {
            return this.hours()
        },
        h: function() {
            return this.hours() % 12 || 12
        },
        m: function() {
            return this.minutes()
        },
        s: function() {
            return this.seconds()
        },
        S: function() {
            return v(this.milliseconds() / 100)
        },
        SS: function() {
            return l(v(this.milliseconds() / 10), 2)
        },
        SSS: function() {
            return l(this.milliseconds(), 3)
        },
        SSSS: function() {
            return l(this.milliseconds(), 3)
        },
        Z: function() {
            var e = -this.zone()
              , t = "+";
            return e < 0 && (e = -e,
            t = "-"),
            t + l(v(e / 60), 2) + ":" + l(v(e) % 60, 2)
        },
        ZZ: function() {
            var e = -this.zone()
              , t = "+";
            return e < 0 && (e = -e,
            t = "-"),
            t + l(v(e / 60), 2) + l(v(e) % 60, 2)
        },
        z: function() {
            return this.zoneAbbr()
        },
        zz: function() {
            return this.zoneName()
        },
        X: function() {
            return this.unix()
        },
        Q: function() {
            return this.quarter()
        }
    }, Ze = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; Qe.length; )
        ie = Qe.pop(),
        Xe[ie + "o"] = r(Xe[ie], ie);
    for (; Ve.length; )
        ie = Ve.pop(),
        Xe[ie + ie] = n(Xe[ie], 2);
    for (Xe.DDDD = n(Xe.DDD, 3),
    s(i.prototype, {
        set: function(e) {
            var t, n;
            for (n in e)
                "function" == typeof (t = e[n]) ? this[n] = t : this["_" + n] = t
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function(e) {
            return this._months[e.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function(e) {
            return this._monthsShort[e.month()]
        },
        monthsParse: function(e) {
            var t, n, r;
            for (this._monthsParse || (this._monthsParse = []),
            t = 0; t < 12; t++)
                if (this._monthsParse[t] || (n = re.utc([2e3, t]),
                r = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""),
                this._monthsParse[t] = new RegExp(r.replace(".", ""),"i")),
                this._monthsParse[t].test(e))
                    return t
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function(e) {
            return this._weekdays[e.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function(e) {
            return this._weekdaysShort[e.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function(e) {
            return this._weekdaysMin[e.day()]
        },
        weekdaysParse: function(e) {
            var t, n, r;
            for (this._weekdaysParse || (this._weekdaysParse = []),
            t = 0; t < 7; t++)
                if (this._weekdaysParse[t] || (n = re([2e3, 1]).day(t),
                r = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""),
                this._weekdaysParse[t] = new RegExp(r.replace(".", ""),"i")),
                this._weekdaysParse[t].test(e))
                    return t
        },
        _longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        longDateFormat: function(e) {
            var t = this._longDateFormat[e];
            return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(e) {
                return e.slice(1)
            }),
            this._longDateFormat[e] = t),
            t
        },
        isPM: function(e) {
            return "p" === (e + "").toLowerCase().charAt(0)
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function(e, t, n) {
            return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function(e, t) {
            var n = this._calendar[e];
            return "function" == typeof n ? n.apply(t) : n
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function(e, t, n, r) {
            var i = this._relativeTime[n];
            return "function" == typeof i ? i(e, t, n, r) : i.replace(/%d/i, e)
        },
        pastFuture: function(e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
        },
        ordinal: function(e) {
            return this._ordinal.replace("%d", e)
        },
        _ordinal: "%d",
        preparse: function(e) {
            return e
        },
        postformat: function(e) {
            return e
        },
        week: function(e) {
            return X(e, this._week.dow, this._week.doy).week
        },
        _week: {
            dow: 0,
            doy: 6
        },
        _invalidDate: "Invalid date",
        invalidDate: function() {
            return this._invalidDate
        }
    }),
    (re = function(n, r, i, o) {
        var a;
        return "boolean" == typeof i && (o = i,
        i = e),
        (a = {})._isAMomentObject = !0,
        a._i = n,
        a._f = r,
        a._l = i,
        a._strict = o,
        a._isUTC = !1,
        a._pf = t(),
        J(a)
    }
    ).utc = function(n, r, i, o) {
        var a;
        return "boolean" == typeof i && (o = i,
        i = e),
        (a = {})._isAMomentObject = !0,
        a._useUTC = !0,
        a._isUTC = !0,
        a._l = i,
        a._i = n,
        a._f = r,
        a._strict = o,
        a._pf = t(),
        J(a).utc()
    }
    ,
    re.unix = function(e) {
        return re(1e3 * e)
    }
    ,
    re.duration = function(e, t) {
        var n, r, i, o = e, s = null;
        return re.isDuration(e) ? o = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : "number" == typeof e ? (o = {},
        t ? o[t] = e : o.milliseconds = e) : (s = be.exec(e)) ? (n = "-" === s[1] ? -1 : 1,
        o = {
            y: 0,
            d: v(s[le]) * n,
            h: v(s[fe]) * n,
            m: v(s[de]) * n,
            s: v(s[he]) * n,
            ms: v(s[pe]) * n
        }) : (s = _e.exec(e)) && (n = "-" === s[1] ? -1 : 1,
        o = {
            y: (i = function(e) {
                var t = e && parseFloat(e.replace(",", "."));
                return (isNaN(t) ? 0 : t) * n
            }
            )(s[2]),
            M: i(s[3]),
            d: i(s[4]),
            h: i(s[5]),
            m: i(s[6]),
            s: i(s[7]),
            w: i(s[8])
        }),
        r = new a(o),
        re.isDuration(e) && e.hasOwnProperty("_lang") && (r._lang = e._lang),
        r
    }
    ,
    re.version = oe,
    re.defaultFormat = He,
    re.updateOffset = function() {}
    ,
    re.lang = function(e, t) {
        return e ? (t ? S(T(e), t) : null === t ? (D(e),
        e = "en") : me[e] || A(e),
        (re.duration.fn._lang = re.fn._lang = A(e))._abbr) : re.fn._lang._abbr
    }
    ,
    re.langData = function(e) {
        return e && e._lang && e._lang._abbr && (e = e._lang._abbr),
        A(e)
    }
    ,
    re.isMoment = function(e) {
        return e instanceof o || null != e && e.hasOwnProperty("_isAMomentObject")
    }
    ,
    re.isDuration = function(e) {
        return e instanceof a
    }
    ,
    ie = Ze.length - 1; ie >= 0; --ie)
        y(Ze[ie]);
    for (re.normalizeUnits = function(e) {
        return m(e)
    }
    ,
    re.invalid = function(e) {
        var t = re.utc(NaN);
        return null != e ? s(t._pf, e) : t._pf.userInvalidated = !0,
        t
    }
    ,
    re.parseZone = function(e) {
        return re(e).parseZone()
    }
    ,
    s(re.fn = o.prototype, {
        clone: function() {
            return re(this)
        },
        valueOf: function() {
            return +this._d + 6e4 * (this._offset || 0)
        },
        unix: function() {
            return Math.floor(+this / 1e3)
        },
        toString: function() {
            return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function() {
            return this._offset ? new Date(+this) : this._d
        },
        toISOString: function() {
            var e = re(this).utc();
            return 0 < e.year() && e.year() <= 9999 ? N(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : N(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
        toArray: function() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
        },
        isValid: function() {
            return k(this)
        },
        isDSTShifted: function() {
            return !!this._a && (this.isValid() && p(this._a, (this._isUTC ? re.utc(this._a) : re(this._a)).toArray()) > 0)
        },
        parsingFlags: function() {
            return s({}, this._pf)
        },
        invalidAt: function() {
            return this._pf.overflow
        },
        utc: function() {
            return this.zone(0)
        },
        local: function() {
            return this.zone(0),
            this._isUTC = !1,
            this
        },
        format: function(e) {
            var t = N(this, e || re.defaultFormat);
            return this.lang().postformat(t)
        },
        add: function(e, t) {
            return f(this, "string" == typeof e ? re.duration(+t, e) : re.duration(e, t), 1),
            this
        },
        subtract: function(e, t) {
            return f(this, "string" == typeof e ? re.duration(+t, e) : re.duration(e, t), -1),
            this
        },
        diff: function(e, t, n) {
            var r, i, o = C(e, this), a = 6e4 * (this.zone() - o.zone());
            return "year" === (t = m(t)) || "month" === t ? (r = 432e5 * (this.daysInMonth() + o.daysInMonth()),
            i = 12 * (this.year() - o.year()) + (this.month() - o.month()),
            i += (this - re(this).startOf("month") - (o - re(o).startOf("month"))) / r,
            i -= 6e4 * (this.zone() - re(this).startOf("month").zone() - (o.zone() - re(o).startOf("month").zone())) / r,
            "year" === t && (i /= 12)) : (r = this - o,
            i = "second" === t ? r / 1e3 : "minute" === t ? r / 6e4 : "hour" === t ? r / 36e5 : "day" === t ? (r - a) / 864e5 : "week" === t ? (r - a) / 6048e5 : r),
            n ? i : c(i)
        },
        from: function(e, t) {
            return re.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!t)
        },
        fromNow: function(e) {
            return this.from(re(), e)
        },
        calendar: function() {
            var e = C(re(), this).startOf("day")
              , t = this.diff(e, "days", !0)
              , n = t < -6 ? "sameElse" : t < -1 ? "lastWeek" : t < 0 ? "lastDay" : t < 1 ? "sameDay" : t < 2 ? "nextDay" : t < 7 ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(n, this))
        },
        isLeapYear: function() {
            return w(this.year())
        },
        isDST: function() {
            return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
        },
        day: function(e) {
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? (e = B(e, this.lang()),
            this.add({
                d: e - t
            })) : t
        },
        month: function(e) {
            var t, n = this._isUTC ? "UTC" : "";
            return null != e ? "string" == typeof e && "number" != typeof (e = this.lang().monthsParse(e)) ? this : (t = this.date(),
            this.date(1),
            this._d["set" + n + "Month"](e),
            this.date(Math.min(t, this.daysInMonth())),
            re.updateOffset(this),
            this) : this._d["get" + n + "Month"]()
        },
        startOf: function(e) {
            switch (e = m(e)) {
            case "year":
                this.month(0);
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
            }
            return "week" === e ? this.weekday(0) : "isoWeek" === e && this.isoWeekday(1),
            this
        },
        endOf: function(e) {
            return e = m(e),
            this.startOf(e).add("isoWeek" === e ? "week" : e, 1).subtract("ms", 1)
        },
        isAfter: function(e, t) {
            return t = void 0 !== t ? t : "millisecond",
            +this.clone().startOf(t) > +re(e).startOf(t)
        },
        isBefore: function(e, t) {
            return t = void 0 !== t ? t : "millisecond",
            +this.clone().startOf(t) < +re(e).startOf(t)
        },
        isSame: function(e, t) {
            return t = t || "ms",
            +this.clone().startOf(t) == +C(e, this).startOf(t)
        },
        min: function(e) {
            return (e = re.apply(null, arguments)) < this ? this : e
        },
        max: function(e) {
            return (e = re.apply(null, arguments)) > this ? this : e
        },
        zone: function(e) {
            var t = this._offset || 0;
            return null == e ? this._isUTC ? t : this._d.getTimezoneOffset() : ("string" == typeof e && (e = F(e)),
            Math.abs(e) < 16 && (e *= 60),
            this._offset = e,
            this._isUTC = !0,
            t !== e && f(this, re.duration(t - e, "m"), 1, !0),
            this)
        },
        zoneAbbr: function() {
            return this._isUTC ? "UTC" : ""
        },
        zoneName: function() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        },
        parseZone: function() {
            return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i),
            this
        },
        hasAlignedHourOffset: function(e) {
            return e = e ? re(e).zone() : 0,
            (this.zone() - e) % 60 == 0
        },
        daysInMonth: function() {
            return b(this.year(), this.month())
        },
        dayOfYear: function(e) {
            var t = se((re(this).startOf("day") - re(this).startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add("d", e - t)
        },
        quarter: function() {
            return Math.ceil((this.month() + 1) / 3)
        },
        weekYear: function(e) {
            var t = X(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return null == e ? t : this.add("y", e - t)
        },
        isoWeekYear: function(e) {
            var t = X(this, 1, 4).year;
            return null == e ? t : this.add("y", e - t)
        },
        week: function(e) {
            var t = this.lang().week(this);
            return null == e ? t : this.add("d", 7 * (e - t))
        },
        isoWeek: function(e) {
            var t = X(this, 1, 4).week;
            return null == e ? t : this.add("d", 7 * (e - t))
        },
        weekday: function(e) {
            var t = (this.day() + 7 - this.lang()._week.dow) % 7;
            return null == e ? t : this.add("d", e - t)
        },
        isoWeekday: function(e) {
            return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
        },
        get: function(e) {
            return this[e = m(e)]()
        },
        set: function(e, t) {
            return "function" == typeof this[e = m(e)] && this[e](t),
            this
        },
        lang: function(t) {
            return t === e ? this._lang : (this._lang = A(t),
            this)
        }
    }),
    ie = 0; ie < $e.length; ie++)
        K($e[ie].toLowerCase().replace(/s$/, ""), $e[ie]);
    for (ie in K("year", "FullYear"),
    re.fn.days = re.fn.day,
    re.fn.months = re.fn.month,
    re.fn.weeks = re.fn.week,
    re.fn.isoWeeks = re.fn.isoWeek,
    re.fn.toJSON = re.fn.toISOString,
    s(re.duration.fn = a.prototype, {
        _bubble: function() {
            var e, t, n, r, i = this._milliseconds, o = this._days, a = this._months, s = this._data;
            s.milliseconds = i % 1e3,
            e = c(i / 1e3),
            s.seconds = e % 60,
            t = c(e / 60),
            s.minutes = t % 60,
            n = c(t / 60),
            s.hours = n % 24,
            o += c(n / 24),
            s.days = o % 30,
            a += c(o / 30),
            s.months = a % 12,
            r = c(a / 12),
            s.years = r
        },
        weeks: function() {
            return c(this.days() / 7)
        },
        valueOf: function() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * v(this._months / 12)
        },
        humanize: function(e) {
            var t = +this
              , n = V(t, !e, this.lang());
            return e && (n = this.lang().pastFuture(t, n)),
            this.lang().postformat(n)
        },
        add: function(e, t) {
            var n = re.duration(e, t);
            return this._milliseconds += n._milliseconds,
            this._days += n._days,
            this._months += n._months,
            this._bubble(),
            this
        },
        subtract: function(e, t) {
            var n = re.duration(e, t);
            return this._milliseconds -= n._milliseconds,
            this._days -= n._days,
            this._months -= n._months,
            this._bubble(),
            this
        },
        get: function(e) {
            return this[(e = m(e)).toLowerCase() + "s"]()
        },
        as: function(e) {
            return this["as" + (e = m(e)).charAt(0).toUpperCase() + e.slice(1) + "s"]()
        },
        lang: re.fn.lang,
        toIsoString: function() {
            var e = Math.abs(this.years())
              , t = Math.abs(this.months())
              , n = Math.abs(this.days())
              , r = Math.abs(this.hours())
              , i = Math.abs(this.minutes())
              , o = Math.abs(this.seconds() + this.milliseconds() / 1e3);
            return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (n ? n + "D" : "") + (r || i || o ? "T" : "") + (r ? r + "H" : "") + (i ? i + "M" : "") + (o ? o + "S" : "") : "P0D"
        }
    }),
    We)
        We.hasOwnProperty(ie) && (te(ie, We[ie]),
        ee(ie.toLowerCase()));
    te("Weeks", 6048e5),
    re.duration.fn.asMonths = function() {
        return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
    }
    ,
    re.lang("en", {
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 === v(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        }
    }),
    ye ? (module.exports = re,
    ne(!0)) : "function" == typeof define && define.amd ? define("moment", function(t, n, r) {
        return r.config && r.config() && !0 !== r.config().noGlobal && ne(r.config().noGlobal === e),
        re
    }) : ne()
}
.call(this),
function() {
    window.ga && ga(function(e) {
        var t;
        try {
            (t = e.get("clientId")) && ga("set", "dimension18", t)
        } catch (n) {
            n
        }
    }),
    Market.Helpers.GoogleAnalytics = {
        logPageView: function(e) {
            var t, n, r, i, o, a, s, u, c;
            if (i = (o = null != e ? e : {}).page,
            c = o.title,
            window.ga) {
                for (t = _.omit({
                    hitType: "pageview",
                    page: null != i ? i : i = this.relativePath(),
                    title: null != c ? c : c = null
                }, function(e) {
                    return _.isNull(e)
                }),
                s = [],
                n = 0,
                r = (a = window._envGaTrackerNames).length; n < r; n++)
                    u = a[n],
                    s.push(ga(u + ".send", t));
                return s
            }
        },
        sendEvent: function(e, t, n, r) {
            var i, o, a, s, u, c, l, f, d, h, p, m;
            if (u = (f = null != r ? r : {}).label,
            m = f.value,
            a = f.hitCallback,
            l = f.nonInteraction,
            o = f.dimension11,
            window.ga) {
                for (i = _.omit({
                    hitType: e,
                    eventCategory: t,
                    eventAction: n,
                    eventLabel: null != u ? u : u = null,
                    eventValue: null != m ? m : m = null,
                    hitCallback: null != a ? a : a = null,
                    nonInteraction: null != l ? l : l = null,
                    dimension11: null != o ? o : o = null
                }, function(e) {
                    return _.isNull(e)
                }),
                h = [],
                s = 0,
                c = (d = window._envGaTrackerNames).length; s < c; s++)
                    p = d[s],
                    h.push(ga(p + ".send", i));
                return h
            }
        },
        addProducts: function(e) {
            var t, n, r, i, o, a;
            if (window.ga) {
                for (o = [],
                t = 0,
                n = (i = window._envGaTrackerNames).length; t < n; t++)
                    a = i[t],
                    o.push(function() {
                        var t, n, i, o;
                        for (o = [],
                        t = 0,
                        n = (i = e.productsArray).length; t < n; t++)
                            r = i[t],
                            o.push(ga(a + ".ec:addProduct", r));
                        return o
                    }());
                return o
            }
        },
        addImpressions: function(e) {
            var t, n, r, i, o, a, s;
            if (window.ga) {
                for (a = [],
                t = 0,
                n = (o = window._envGaTrackerNames).length; t < n; t++)
                    s = o[t],
                    a.push(function() {
                        var t, n, o;
                        for (o = [],
                        t = 0,
                        n = e.length; t < n; t++)
                            r = e[t],
                            o.push(function() {
                                var e, t, n, o;
                                for (o = [],
                                e = 0,
                                t = (n = r.productsArray).length; e < t; e++)
                                    i = n[e],
                                    o.push(ga(s + ".ec:addImpression", i));
                                return o
                            }());
                        return o
                    }());
                return a
            }
        },
        addPromo: function(e) {
            var t, n, r, i, o;
            if (window.ga) {
                for (i = [],
                t = 0,
                n = (r = window._envGaTrackerNames).length; t < n; t++)
                    o = r[t],
                    i.push(ga(o + ".ec:addPromo", e));
                return i
            }
        },
        set: function(e, t) {
            var n, r, i, o, a;
            if (window.ga) {
                for (o = [],
                n = 0,
                r = (i = window._envGaTrackerNames).length; n < r; n++)
                    a = i[n],
                    o.push(ga(a + ".set", e, t));
                return o
            }
        },
        setAction: function(e, t) {
            var n, r, i, o, a;
            if (window.ga) {
                for (o = [],
                n = 0,
                r = (i = window._envGaTrackerNames).length; n < r; n++)
                    a = i[n],
                    null != t ? o.push(ga(a + ".ec:setAction", e, t)) : o.push(ga(a + ".ec:setAction", e));
                return o
            }
        },
        storeGaClientId: function() {
            if (window.ga)
                return ga(function(e) {
                    $.cookie("__ga_client_id", e.get("clientId"), {
                        path: "/",
                        expires: 60
                    })
                })
        },
        relativePath: function() {
            return document.location.pathname + document.location.search
        },
        isEventStale: function(e) {
            var t;
            return e = moment.unix(e),
            t = moment(new Date).utc(),
            moment.duration(e.diff(t)).asMinutes() > 10
        }
    }
}
.call(this),
function() {
    Views.CtaHeader = function() {
        function e(e) {
            var t;
            e.on("click", ".js-track-on-click", (t = this,
            function(e) {
                return t.target = $(e.currentTarget),
                t.experimentId = t.target.data().experimentId,
                t.gaVariantId = t.target.data().gaVariantId,
                Market.Helpers.GoogleAnalytics.sendEvent("event", "experiment", "click", {
                    label: t.experimentId,
                    value: t.gaVariantId,
                    nonInteraction: !0
                })
            }
            ))
        }
        return e
    }()
}
.call(this),
function() {
    var e = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    };
    Views.FullScreenPreview = function() {
        function t(t) {
            this.addHackyFix = e(this.addHackyFix, this),
            this.hasMobileSafariIFrameBug = e(this.hasMobileSafariIFrameBug, this),
            this.fixResponsivenessForMobileSafari = e(this.fixResponsivenessForMobileSafari, this),
            this.$el = t,
            t.load(this.fixResponsivenessForMobileSafari)
        }
        return t.prototype.fixResponsivenessForMobileSafari = function() {
            if (this.hasMobileSafariIFrameBug())
                return this.addHackyFix()
        }
        ,
        t.prototype.hasMobileSafariIFrameBug = function() {
            return this.$el.width() !== $("body").width()
        }
        ,
        t.prototype.addHackyFix = function() {
            return this.$el.attr("scrolling", "no").addClass("-ios-fix")
        }
        ,
        t
    }()
}
.call(this);
