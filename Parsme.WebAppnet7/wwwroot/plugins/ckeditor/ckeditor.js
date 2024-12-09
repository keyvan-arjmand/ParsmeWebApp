/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
(function (e) {
    e.en = Object.assign(e.en || {}, {
        a: 'Cannot upload file:',
        b: 'Block quote',
        c: 'Italic',
        d: 'Bold',
        e: 'image widget',
        f: 'Full size image',
        g: 'Side image',
        h: 'Left aligned image',
        i: 'Centered image',
        j: 'Right aligned image',
        k: 'Enter image caption',
        l: 'Insert image',
        m: 'Link',
        n: 'Upload failed',
        o: 'Choose heading',
        p: 'Heading',
        q: 'Numbered List',
        r: 'Bulleted List',
        s: 'Change image text alternative',
        t: 'Paragraph',
        u: 'Heading 1',
        v: 'Heading 2',
        w: 'Heading 3',
        x: 'Unlink',
        y: 'Edit link',
        z: 'Open link in new tab',
        aa: 'This link has no URL',
        ab: 'Rich Text Editor, %0',
        ac: 'Rich Text Editor',
        ad: 'Undo',
        ae: 'Redo',
        af: 'Save',
        ag: 'Cancel',
        ah: 'Text alternative',
        ai: 'Link URL'
    })
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {})), function (e, t) {
    'object' == typeof exports && 'object' == typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define([], t) : 'object' == typeof exports ? exports.ClassicEditor = t() : e.ClassicEditor = t()
}('undefined' == typeof self ? this : self, function () {
    return function (e) {
        function t(n) {
            if (o[n]) return o[n].exports;
            var i = o[n] = {i: n, l: !1, exports: {}};
            return e[n].call(i.exports, i, i.exports, t), i.l = !0, i.exports
        }

        var o = {};
        return t.m = e, t.c = o, t.d = function (e, o, n) {
            t.o(e, o) || Object.defineProperty(e, o, {configurable: !1, enumerable: !0, get: n})
        }, t.n = function (e) {
            var o = e && e.__esModule ? function () {
                return e['default']
            } : function () {
                return e
            };
            return t.d(o, 'a', o), o
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = '', t(t.s = 6)
    }([function (e, t, o) {
        function n(e, t) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o], i = g[n.id];
                if (i) {
                    i.refs++;
                    for (var r = 0; r < i.parts.length; r++) i.parts[r](n.parts[r]);
                    for (; r < n.parts.length; r++) i.parts.push(c(n.parts[r], t))
                } else {
                    for (var a = [], r = 0; r < n.parts.length; r++) a.push(c(n.parts[r], t));
                    g[n.id] = {id: n.id, refs: 1, parts: a}
                }
            }
        }

        function i(e, t) {
            for (var o = [], n = {}, r = 0; r < e.length; r++) {
                var i = e[r], a = t.base ? i[0] + t.base : i[0], s = i[1], l = i[2], d = i[3],
                    c = {css: s, media: l, sourceMap: d};
                n[a] ? n[a].parts.push(c) : o.push(n[a] = {id: a, parts: [c]})
            }
            return o
        }

        function r(e, t) {
            var o = b(e.insertInto);
            if (!o) throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insertInto\' parameter is invalid.');
            var n = w[w.length - 1];
            if ('top' === e.insertAt) n ? n.nextSibling ? o.insertBefore(t, n.nextSibling) : o.appendChild(t) : o.insertBefore(t, o.firstChild), w.push(t); else if ('bottom' === e.insertAt) o.appendChild(t); else if ('object' == typeof e.insertAt && e.insertAt.before) {
                var i = b(e.insertInto + ' ' + e.insertAt.before);
                o.insertBefore(t, i)
            } else throw new Error('[Style Loader]\n\n Invalid value for parameter \'insertAt\' (\'options.insertAt\') found.\n Must be \'top\', \'bottom\', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n')
        }

        function a(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
            var t = w.indexOf(e);
            0 <= t && w.splice(t, 1)
        }

        function s(e) {
            var t = document.createElement('style');
            return e.attrs.type = 'text/css', d(t, e.attrs), r(e, t), t
        }

        function l(e) {
            var t = document.createElement('link');
            return e.attrs.type = 'text/css', e.attrs.rel = 'stylesheet', d(t, e.attrs), r(e, t), t
        }

        function d(e, t) {
            Object.keys(t).forEach(function (o) {
                e.setAttribute(o, t[o])
            })
        }

        function c(e, t) {
            var o, n, i, r;
            if (t.transform && e.css) if (r = t.transform(e.css), r) e.css = r; else return function () {
            };
            if (t.singleton) {
                var d = _++;
                o = k || (k = s(t)), n = u.bind(null, o, d, !1), i = u.bind(null, o, d, !0)
            } else e.sourceMap && 'function' == typeof URL && 'function' == typeof URL.createObjectURL && 'function' == typeof URL.revokeObjectURL && 'function' == typeof Blob && 'function' == typeof btoa ? (o = l(t), n = p.bind(null, o, t), i = function () {
                a(o), o.href && URL.revokeObjectURL(o.href)
            }) : (o = s(t), n = m.bind(null, o), i = function () {
                a(o)
            });
            return n(e), function (t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    n(e = t)
                } else i()
            }
        }

        function u(e, t, o, n) {
            var i = o ? '' : n.css;
            if (e.styleSheet) e.styleSheet.cssText = y(t, i); else {
                var r = document.createTextNode(i), a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(r, a[t]) : e.appendChild(r)
            }
        }

        function m(e, t) {
            var o = t.css, n = t.media;
            if (n && e.setAttribute('media', n), e.styleSheet) e.styleSheet.cssText = o; else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(o))
            }
        }

        function p(e, t, o) {
            var n = o.css, i = o.sourceMap, r = t.convertToAbsoluteUrls === void 0 && i;
            (t.convertToAbsoluteUrls || r) && (n = v(n)), i && (n += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + ' */');
            var a = new Blob([n], {type: 'text/css'}), s = e.href;
            e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
        }

        var g = {}, f = function (e) {
            var t;
            return function () {
                return 'undefined' == typeof t && (t = e.apply(this, arguments)), t
            }
        }(function () {
            return window && document && document.all && !window.atob
        }), h = function (e) {
            return document.querySelector(e)
        }, b = function () {
            var e = {};
            return function (t) {
                if ('function' == typeof t) return t();
                if ('undefined' == typeof e[t]) {
                    var o = h.call(this, t);
                    if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement) try {
                        o = o.contentDocument.head
                    } catch (t) {
                        o = null
                    }
                    e[t] = o
                }
                return e[t]
            }
        }(), k = null, _ = 0, w = [], v = o(13);
        e.exports = function (e, t) {
            if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document) throw new Error('The style-loader cannot be used in a non-browser environment');
            t = t || {}, t.attrs = 'object' == typeof t.attrs ? t.attrs : {}, t.singleton || 'boolean' == typeof t.singleton || (t.singleton = f()), t.insertInto || (t.insertInto = 'head'), t.insertAt || (t.insertAt = 'bottom');
            var o = i(e, t);
            return n(o, t), function (e) {
                for (var r = [], a = 0; a < o.length; a++) {
                    var s = o[a], l = g[s.id];
                    l.refs--, r.push(l)
                }
                if (e) {
                    var d = i(e, t);
                    n(d, t)
                }
                for (var a = 0, l; a < r.length; a++) if (l = r[a], 0 === l.refs) {
                    for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                    delete g[l.id]
                }
            }
        };
        var y = function () {
            var e = [];
            return function (t, o) {
                return e[t] = o, e.filter(Boolean).join('\n')
            }
        }()
    }, function (e, t, o) {
        'use strict';
        (function (e, n) {
            var i = o(8), r = {function: !0, object: !0},
                a = r[typeof exports] && exports && !exports.nodeType ? exports : void 0,
                s = r[typeof e] && e && !e.nodeType ? e : void 0, l = Object(i.a)(a && s && 'object' == typeof n && n),
                d = Object(i.a)(r[typeof self] && self), c = Object(i.a)(r[typeof window] && window),
                u = Object(i.a)(r[typeof this] && this),
                m = l || c !== (u && u.window) && c || d || u || Function('return this')();
            t.a = m
        }).call(t, o(2)(e), o(7))
    }, function (e) {
        e.exports = function (e) {
            if (!e.webpackPolyfill) {
                var t = Object.create(e);
                t.children || (t.children = []), Object.defineProperty(t, 'loaded', {
                    enumerable: !0, get: function () {
                        return t.l
                    }
                }), Object.defineProperty(t, 'id', {
                    enumerable: !0, get: function () {
                        return t.i
                    }
                }), Object.defineProperty(t, 'exports', {enumerable: !0}), t.webpackPolyfill = 1
            }
            return t
        }
    }, function (e) {
        e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z" fill="#000" fill-rule="evenodd"/></svg>'
    }, function (e) {
        e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.591 10.177l4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z" fill="#000" fill-rule="evenodd"/></svg>'
    }, function (e, t, o) {
        var n = o(61);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e, t, o) {
        'use strict';

        function n(e) {
            const t = e.match(/^([^:]+):/);
            return t ? e + ` Read more: ${Qa}#error-${t[1]}\n` : e
        }

        function i() {
            let e = 'e';
            for (let t = 0; 8 > t; t++) e += Ba(65536 * (1 + Math.random())).toString(16).substring(1);
            return e
        }

        function r(e, t) {
            return e[os] && e[os][t] ? e[os][t].emitter : null
        }

        function a(e, t) {
            e[ns] || (e[ns] = t || i())
        }

        function s(e) {
            return e[ns]
        }

        function l(e) {
            return e._events || Object.defineProperty(e, '_events', {value: {}}), e._events
        }

        function d() {
            return {callbacks: [], childEvents: []}
        }

        function c(e, t) {
            const o = l(e);
            if (o[t]) return;
            let n = t, i = null;
            const r = [];
            for (; '' !== n && !o[n];) o[n] = d(), r.push(o[n]), i && o[n].childEvents.push(i), i = n, n = n.substr(0, n.lastIndexOf(':'));
            if ('' !== n) {
                for (const e of r) e.callbacks = o[n].callbacks.slice();
                o[n].childEvents.push(i)
            }
        }

        function u(e, t) {
            const o = l(e)[t];
            if (!o) return [];
            let n = [o.callbacks];
            for (let r = 0; r < o.childEvents.length; r++) {
                const t = u(e, o.childEvents[r]);
                n = n.concat(t)
            }
            return n
        }

        function m(e, t) {
            let o;
            return e._events && (o = e._events[t]) && o.callbacks.length ? o.callbacks : -1 < t.indexOf(':') ? m(e, t.substr(0, t.lastIndexOf(':'))) : null
        }

        function p(e, t, o) {
            for (let [n, i] of e) {
                i ? 'function' == typeof i && (i = i(t.name)) : i = t.name;
                const e = new Za(t.source, i);
                e.path = [...t.path], n.fire(e, ...o)
            }
        }

        function g(e, t, o) {
            const n = u(e, t);
            for (const r of n) for (let e = 0; e < r.length; e++) r[e].callback == o && (r.splice(e, 1), e--)
        }

        function f(e, ...t) {
            t.forEach((t) => {
                Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t)).forEach((o) => {
                    if (!(o in e.prototype)) {
                        const n = Object.getOwnPropertyDescriptor(t, o);
                        n.enumerable = !1, Object.defineProperty(e.prototype, o, n)
                    }
                })
            })
        }

        function h(e) {
            var t = -1, o = e ? e.length : 0;
            for (this.clear(); ++t < o;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }

        function b(e) {
            var t = -1, o = e ? e.length : 0;
            for (this.clear(); ++t < o;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }

        function k(e) {
            var t = -1, o = e ? e.length : 0;
            for (this.clear(); ++t < o;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }

        function _(e) {
            this.__data__ = new cs(e)
        }

        function w(e, t, o) {
            var n = e[t];
            js.call(e, t) && as(n, o) && (o !== void 0 || t in e) || (e[t] = o)
        }

        function v(e, t) {
            return Hs.call(e, t) || 'object' == typeof e && t in e && null === za(e)
        }

        function y(e) {
            return wl(Object(e))
        }

        function x(e) {
            return zl.call(e)
        }

        function C(e, t, o, n, i, r, a) {
            var s;
            if (n && (s = r ? n(e, i, r, a) : n(e)), void 0 !== s) return s;
            if (!us(e)) return e;
            var l = sl(e);
            if (!l) {
                var d = Kl(e), c = d == vd || d == yd;
                if (Object(_d.a)(e)) return kl(e, t);
                if (d == xd || d == wd || c && !r) {
                    if (ja(e)) return r ? e : {};
                    if (s = kd(c ? {} : e), !t) return yl(e, bl(s, e))
                } else {
                    if (!Cd[d]) return r ? e : {};
                    s = fd(e, d, C, t)
                }
            } else if (s = Jl(e), !t) return _l(e, s);
            a || (a = new Bs);
            var u = a.get(e);
            if (u) return u;
            if (a.set(e, s), !l) var m = o ? Al(e) : hl(e);
            return Ls(m || e, function (i, r) {
                m && (r = i, i = e[r]), qs(s, r, C(i, t, o, n, r, e, a))
            }), s
        }

        function A(e, t) {
            const o = Da(e.length, t.length);
            for (let n = 0; n < o; n++) if (e[n] != t[n]) return n;
            return e.length == t.length ? 'same' : e.length < t.length ? 'prefix' : 'extension'
        }

        function T(e) {
            const t = new Map;
            for (const o in e) t.set(o, e[o]);
            return t
        }

        function P(e) {
            return !!(e && e[Symbol.iterator])
        }

        function E(e, t) {
            if ('function' == typeof t) return t(e);
            const o = {};
            return t.name && (o.name = S(t.name, e.name), !o.name) ? null : t.attributes && (o.attributes = O(t.attributes, e), !o.attributes) ? null : !(t.classes && (o.classes = R(t.classes, e), !o.classes)) && !(t.styles && (o.styles = I(t.styles, e), !o.styles)) && o
        }

        function S(e, t) {
            return e instanceof RegExp ? e.test(t) : e === t
        }

        function O(e, t) {
            const o = [];
            for (const n in e) {
                const i = e[n];
                if (t.hasAttribute(n)) {
                    const e = t.getAttribute(n);
                    if (!0 === i) o.push(n); else if (i instanceof RegExp) {
                        if (i.test(e)) o.push(n); else return null;
                    } else if (e === i) o.push(n); else return null
                } else return null
            }
            return o
        }

        function R(e, t) {
            const o = [];
            for (const n of e) if (n instanceof RegExp) {
                const e = t.getClassNames();
                for (const t of e) n.test(t) && o.push(t);
                if (0 === o.length) return null
            } else if (t.hasClass(n)) o.push(n); else return null;
            return o
        }

        function I(e, t) {
            const o = [];
            for (const n in e) {
                const i = e[n];
                if (t.hasStyle(n)) {
                    const e = t.getStyle(n);
                    if (i instanceof RegExp) {
                        if (i.test(e)) o.push(n); else return null;
                    } else if (e === i) o.push(n); else return null
                } else return null
            }
            return o
        }

        function V(e) {
            e = $a(e) ? T(e) : new Map(e);
            for (const [t, o] of e) null === o ? e.delete(t) : 'string' != typeof o && e.set(t, o + '');
            return e
        }

        function F(e, t) {
            let o = null, n = 0, r = 0, a = null;
            if (e.clear(), '' !== t) {
                ';' != t.charAt(t.length - 1) && (t += ';');
                for (let s = 0; s < t.length; s++) {
                    const i = t.charAt(s);
                    if (null === o) switch (i) {
                        case':':
                            a || (a = t.substr(n, s - n), r = s + 1);
                            break;
                        case'"':
                        case'\'':
                            o = i;
                            break;
                        case';':
                            const l = t.substr(r, s - r);
                            a && e.set(a.trim(), l.trim()), a = null, n = s + 1;
                    } else i === o && (o = null)
                }
            }
        }

        function N(e, t) {
            const o = t.split(/\s+/);
            e.clear(), o.forEach((t) => e.add(t))
        }

        function M(e) {
            return 'string' == typeof e ? [new Ed(e)] : (P(e) || (e = [e]), Array.from(e).map((e) => 'string' == typeof e ? new Ed(e) : e instanceof Sd ? new Ed(e.data) : e))
        }

        function D() {
            for (const e of this.getChildren()) if (!e.is('uiElement')) return null;
            return this.childCount
        }

        function B(e, t, o) {
            if (!us(o)) return !1;
            var n = typeof t;
            return !('number' == n ? !(Zs(o) && pl(t, o.length)) : !('string' == n && t in o)) && as(o[t], e)
        }

        function L(e) {
            e = null == e ? e : Object(e);
            var t = [];
            for (var o in e) t.push(o);
            return t
        }

        function z(e) {
            uc in e || (Object.defineProperty(e, uc, {value: new Map}), Object.defineProperty(e, mc, {value: new Map}), Object.defineProperty(e, pc, {value: new Map}))
        }

        function j(...e) {
            const t = H(...e), o = Array.from(this._bindings.keys()), n = o.length;
            if (!t.callback && 1 < t.to.length) throw new Ya('observable-bind-to-no-callback: Binding multiple observables only possible with callback.');
            if (1 < n && t.callback) throw new Ya('observable-bind-to-extra-callback: Cannot bind multiple properties and use a callback in one binding.');
            t.to.forEach((e) => {
                if (e.properties.length && e.properties.length !== n) throw new Ya('observable-bind-to-properties-length: The number of properties must match.');
                e.properties.length || (e.properties = this._bindProperties)
            }), this._to = t.to, t.callback && (this._bindings.get(o[0]).callback = t.callback), J(this._observable, this._to), G(this), this._bindProperties.forEach((e) => {
                $(this._observable, e)
            })
        }

        function q(e, t, o) {
            if (1 < this._bindings.size) throw new Ya('observable-bind-to-many-not-one-binding: Cannot bind multiple properties with toMany().');
            this.to(...W(e, t), o)
        }

        function W(e, t) {
            const o = e.map((e) => [e, t]);
            return Array.prototype.concat.apply([], o)
        }

        function U(e) {
            return e.every((e) => 'string' == typeof e)
        }

        function H(...e) {
            if (!e.length) throw new Ya('observable-bind-to-parse-error: Invalid argument syntax in `to()`.');
            const t = {to: []};
            let o;
            return 'function' == typeof e[e.length - 1] && (t.callback = e.pop()), e.forEach((e) => {
                if ('string' == typeof e) o.properties.push(e); else if ('object' == typeof e) o = {
                    observable: e,
                    properties: []
                }, t.to.push(o); else throw new Ya('observable-bind-to-parse-error: Invalid argument syntax in `to()`.')
            }), t
        }

        function K(e, t, o, n) {
            const i = e[mc], r = i.get(o), a = r || {};
            a[n] || (a[n] = new Set), a[n].add(t), r || i.set(o, a)
        }

        function G(e) {
            let t;
            e._bindings.forEach((o, n) => {
                e._to.forEach((i) => {
                    t = i.properties[o.callback ? 0 : e._bindProperties.indexOf(n)], o.to.push([i.observable, t]), K(e._observable, o, i.observable, t)
                })
            })
        }

        function $(e, t) {
            const o = e[pc], n = o.get(t);
            let i;
            n.callback ? i = n.callback.apply(e, n.to.map((e) => e[0][e[1]])) : (i = n.to[0], i = i[0][i[1]]), e.hasOwnProperty(t) ? e[t] = i : e.set(t, i)
        }

        function J(e, t) {
            t.forEach((t) => {
                const o = e[mc];
                let n;
                o.get(t.observable) || e.listenTo(t.observable, 'change', (i, r) => {
                    n = o.get(t.observable)[r], n && n.forEach((t) => {
                        $(e, t.property)
                    })
                })
            })
        }

        function Q(e) {
            return !!(e.item.is('attributeElement') || e.item.is('uiElement'))
        }

        function Y(e) {
            let t = 0;
            for (const o of e) t++;
            return t
        }

        function X() {
            if (Z(this)) return null;
            let e = this.parent;
            for (; e && e.is('attributeElement');) {
                if (1 < Z(e)) return null;
                e = e.parent
            }
            return !e || 1 < Z(e) ? null : this.childCount
        }

        function Z(e) {
            return Array.from(e.getChildren()).filter((e) => !e.is('uiElement')).length
        }

        function ee() {
            return null
        }

        function te(e) {
            let t;
            if ('string' != typeof e) t = e.keyCode + (e.altKey ? Nc.alt : 0) + (e.ctrlKey ? Nc.ctrl : 0) + (e.shiftKey ? Nc.shift : 0); else if (t = Nc[e.toLowerCase()], !t) throw new Ya('keyboard-unknown-key: Unknown key name.', {key: e});
            return t
        }

        function oe(e) {
            return 'string' == typeof e && (e = ie(e)), e.map((e) => 'string' == typeof e ? te(e) : e).reduce((e, t) => t + e, 0)
        }

        function ne(e) {
            return Ic.isMac ? ie(e).map((e) => Fc[e.toLowerCase()] || e).reduce((e, t) => e.slice(-1) in Vc ? e + t : e + '+' + t) : e
        }

        function ie(e) {
            return e.split(/\s*\+\s*/)
        }

        function re(e) {
            e.document.on('keydown', (t, o) => se(t, o, e.domConverter))
        }

        function ae() {
            return null
        }

        function se(e, t, o) {
            if (t.keyCode == Nc.arrowright) {
                const e = t.domTarget.ownerDocument.defaultView.getSelection(),
                    n = 1 == e.rangeCount && e.getRangeAt(0).collapsed;
                if (n || t.shiftKey) {
                    const t = e.focusNode, i = e.focusOffset, r = o.domPositionToView(t, i);
                    if (null === r) return;
                    let a = !1;
                    const s = r.getLastMatchingPosition((e) => (e.item.is('uiElement') && (a = !0), !!(e.item.is('uiElement') || e.item.is('attributeElement'))));
                    if (a) {
                        const t = o.viewPositionToDom(s);
                        n ? e.collapse(t.parent, t.offset) : e.extend(t.parent, t.offset)
                    }
                }
            }
        }

        function le(e) {
            return 'string' == typeof e ? [new Ed(e)] : (P(e) || (e = [e]), Array.from(e).map((e) => 'string' == typeof e ? new Ed(e) : e instanceof Sd ? new Ed(e.data) : e))
        }

        function de(e) {
            return Array.from(e.getChildren()).some((e) => !e.is('uiElement'))
        }

        function ce(e) {
            let t = e.parent;
            for (; !be(t);) {
                if (!t) return;
                t = t.parent
            }
            return t
        }

        function ue(e, t) {
            if (e.priority < t.priority) return !0;
            return !(e.priority > t.priority) && e.getIdentity() < t.getIdentity()
        }

        function me(e) {
            const t = e.nodeBefore;
            if (t && t.is('text')) return new vc(t, t.data.length);
            const o = e.nodeAfter;
            return o && o.is('text') ? new vc(o, 0) : e
        }

        function pe(e) {
            if (e.offset == e.parent.data.length) return new vc(e.parent.parent, e.parent.index + 1);
            if (0 === e.offset) return new vc(e.parent.parent, e.parent.index);
            const t = e.parent.data.slice(e.offset);
            return e.parent._data = e.parent.data.slice(0, e.offset), e.parent.parent._insertChild(e.parent.index + 1, new Ed(t)), new vc(e.parent.parent, e.parent.index + 1)
        }

        function ge(e, t) {
            const o = e.data.length;
            return e._data += t.data, t._remove(), new vc(e, o)
        }

        function fe(e) {
            return e.start.parent == e.end.parent && e.start.parent.is('attributeElement') && 0 === e.start.offset && e.end.offset === e.start.parent.childCount
        }

        function he(e) {
            for (const t of e) {
                if (!Lc.some((e) => t instanceof e)) throw new Ya('view-writer-insert-invalid-node');
                t.is('text') || he(t.getChildren())
            }
        }

        function be(e) {
            return e && (e.is('containerElement') || e.is('documentFragment'))
        }

        function ke(e) {
            const t = ce(e.start), o = ce(e.end);
            if (!t || !o || t !== o) throw new Ya('view-writer-invalid-range-container')
        }

        function _e(e, t) {
            return null === e.id && null === t.id
        }

        function we(e) {
            return e instanceof Text && e.data.substr(0, qc) === Wc
        }

        function ve(e) {
            return e.data.length == qc && we(e)
        }

        function ye(e) {
            return we(e) ? e.data.slice(qc) : e.data
        }

        function xe(e, t) {
            let o = Uc.get(t);
            return o || (o = t(window.document), Uc.set(t, o)), e.isEqualNode(o)
        }

        function Ce(e) {
            e.document.on('keydown', Ae)
        }

        function Ae(e, t) {
            if (t.keyCode == Nc.arrowleft) {
                const e = t.domTarget.ownerDocument.defaultView.getSelection();
                if (1 == e.rangeCount && e.getRangeAt(0).collapsed) {
                    const t = e.getRangeAt(0).startContainer, o = e.getRangeAt(0).startOffset;
                    we(t) && o <= qc && e.collapse(t, 0)
                }
            }
        }

        function Te(e, t, o) {
            function i(n) {
                const i = (c[n - 1] === void 0 ? -1 : c[n - 1]) + 1, u = c[n + 1] === void 0 ? -1 : c[n + 1],
                    m = i > u ? -1 : 1;
                d[n + m] && (d[n] = d[n + m].slice(0)), d[n] || (d[n] = []), d[n].push(i > u ? r : a);
                let p = Ma(i, u), g = p - n;
                for (; g < s && p < l && o(e[g], t[p]);) g++, p++, d[n].push('equal');
                return p
            }

            o = o || function (e, t) {
                return e === t
            };
            let r, a;
            if (t.length < e.length) {
                const o = e;
                e = t, t = o, r = 'delete', a = 'insert'
            } else r = 'insert', a = 'delete';
            const s = e.length, l = t.length, n = l - s, d = {}, c = {};
            let u = 0, m;
            do {
                for (m = -u; m < n; m++) c[m] = i(m);
                for (m = n + u; m > n; m--) c[m] = i(m);
                c[n] = i(n), u++
            } while (c[n] !== l);
            return d[n].slice(1)
        }

        function Pe(e, t, o) {
            e.insertBefore(o, e.childNodes[t] || null)
        }

        function Ee(e) {
            const t = e.parentNode;
            t && t.removeChild(e)
        }

        function Se(e) {
            return '[object Text]' == Object.prototype.toString.call(e)
        }

        function Oe(e) {
            if ('false' == e.getAttribute('contenteditable')) return !1;
            const t = e.findAncestor((e) => e.hasAttribute('contenteditable'));
            return !t || 'true' == t.getAttribute('contenteditable')
        }

        function Re(e) {
            let t = 0;
            for (; e.previousSibling;) e = e.previousSibling, t++;
            return t
        }

        function Ie(e) {
            const t = [];
            for (; e && e.nodeType != Node.DOCUMENT_NODE;) t.unshift(e), e = e.parentNode;
            return t
        }

        function Ve(e, t) {
            const o = Ie(e), n = Ie(t);
            let r = 0;
            for (; o[r] == n[r] && o[r];) r++;
            return 0 == r ? null : o[r - 1]
        }

        function Fe(e, t, o) {
            let n = Ie(e);
            return o && (n = n.slice(n.indexOf(o) + 1)), n.some((e) => e.tagName && t.includes(e.tagName.toLowerCase()))
        }

        function Ne(e, t) {
            for (; e && e != Kc.document;) t(e), e = e.parentNode
        }

        function Me(e) {
            if (e) {
                if (e.defaultView) return e instanceof e.defaultView.Document;
                if (e.ownerDocument && e.ownerDocument.defaultView) return e instanceof e.ownerDocument.defaultView.Node
            }
            return !1
        }

        function De(e) {
            return '[object Window]' == Object.prototype.toString.apply(e)
        }

        function Be(e) {
            return e['data-ck-expando'] || (e['data-ck-expando'] = i())
        }

        function Le(e) {
            var t = -1, o = e ? e.length : 0;
            for (this.__data__ = new Ds; ++t < o;) this.add(e[t])
        }

        function ze(e, t, o, n, i, r) {
            var a = i & iu, s = hl(e), l = s.length, d = hl(t), c = d.length;
            if (l != c && !a) return !1;
            for (var u = l, m; u--;) if (m = s[u], a ? !(m in t) : !Ks(t, m)) return !1;
            var p = r.get(e);
            if (p) return p == t;
            var g = !0;
            r.set(e, t);
            for (var f = a; ++u < l;) {
                m = s[u];
                var h = e[m], b = t[m];
                if (n) var k = a ? n(b, h, m, t, e, r) : n(h, b, m, e, t, r);
                if (void 0 === k ? !(h === b || o(h, b, n, i, r)) : !k) {
                    g = !1;
                    break
                }
                f || (f = 'constructor' == m)
            }
            if (g && !f) {
                var _ = e.constructor, w = t.constructor;
                _ != w && 'constructor' in e && 'constructor' in t && !('function' == typeof _ && _ instanceof _ && 'function' == typeof w && w instanceof w) && (g = !1)
            }
            return r['delete'](e), g
        }

        function je(e, t, o, n, i) {
            return !(e !== t) || (null != e && null != t && (us(e) || qa(t)) ? gu(e, t, je, o, n, i) : e !== e && t !== t)
        }

        function qe(e, t, o) {
            function n(t) {
                var o = b, n = k;
                return b = k = void 0, p = t, w = e.apply(n, o), w
            }

            function i(e) {
                return p = e, v = setTimeout(s, t), g ? n(e) : w
            }

            function r(e) {
                var o = e - m, n = e - p, i = t - o;
                return f ? Au(i, _ - n) : i
            }

            function a(e) {
                var o = e - m, n = e - p;
                return !m || o >= t || 0 > o || f && n >= _
            }

            function s() {
                var e = yu();
                return a(e) ? l(e) : void (v = setTimeout(s, r(e)))
            }

            function l(e) {
                return (clearTimeout(v), v = void 0, h && b) ? n(e) : (b = k = void 0, w)
            }

            function d() {
                void 0 !== v && clearTimeout(v), m = p = 0, b = k = v = void 0
            }

            function c() {
                return void 0 === v ? w : l(yu())
            }

            function u() {
                var e = yu(), o = a(e);
                if (b = arguments, k = this, m = e, o) {
                    if (void 0 === v) return i(m);
                    if (f) return clearTimeout(v), v = setTimeout(s, t), n(m)
                }
                return void 0 === v && (v = setTimeout(s, t)), w
            }

            var m = 0, p = 0, g = !1, f = !1, h = !0, b, k, _, w, v;
            if ('function' != typeof e) throw new TypeError(xu);
            return t = Ud(t) || 0, us(o) && (g = !!o.leading, f = 'maxWait' in o, _ = f ? Cu(Ud(o.maxWait) || 0, t) : _, h = 'trailing' in o ? !!o.trailing : h), u.cancel = d, u.flush = c, u
        }

        function We(e) {
            return e == Nc.arrowright || e == Nc.arrowleft || e == Nc.arrowup || e == Nc.arrowdown
        }

        function Ue(e) {
            return '[object Range]' == Object.prototype.toString.apply(e)
        }

        function He(e) {
            const t = e.ownerDocument.defaultView.getComputedStyle(e);
            return {
                top: parseInt(t.borderTopWidth, 10),
                right: parseInt(t.borderRightWidth, 10),
                bottom: parseInt(t.borderBottomWidth, 10),
                left: parseInt(t.borderLeftWidth, 10)
            }
        }

        function Ke(e, t) {
            for (const o of Nu) e[o] = t[o]
        }

        function Ge(e) {
            return !!Vu(e) && e === e.ownerDocument.body
        }

        function $e({target: e, viewportOffset: t = 0}) {
            const o = tt(e);
            for (let n = o, i = null; n;) {
                let r;
                r = n == o ? nt(e) : nt(i), Qe(r, () => it(e, n));
                const a = it(e, n);
                Je(n, a, t), n.parent == n ? n = null : (i = n.frameElement, n = n.parent)
            }
        }

        function Je(e, t, o) {
            const n = t.clone().moveBy(0, o), i = t.clone().moveBy(0, -o), r = new Fu(e).excludeScrollbarsAndBorders();
            if (![i, n].every((e) => r.contains(e))) {
                let {scrollX: a, scrollY: s} = e;
                Xe(i, r) ? s -= r.top - t.top + o : Ye(n, r) && (s += t.bottom - r.bottom + o), Ze(t, r) ? a -= r.left - t.left + o : et(t, r) && (a += t.right - r.right + o), e.scrollTo(a, s)
            }
        }

        function Qe(e, t) {
            const o = tt(e);
            for (let n, i; e != o.document.body;) i = t(), n = new Fu(e).excludeScrollbarsAndBorders(), n.contains(i) || (Xe(i, n) ? e.scrollTop -= n.top - i.top : Ye(i, n) && (e.scrollTop += i.bottom - n.bottom), Ze(i, n) ? e.scrollLeft -= n.left - i.left : et(i, n) && (e.scrollLeft += i.right - n.right)), e = e.parentNode
        }

        function Ye(e, t) {
            return e.bottom > t.bottom
        }

        function Xe(e, t) {
            return e.top < t.top
        }

        function Ze(e, t) {
            return e.left < t.left
        }

        function et(e, t) {
            return e.right > t.right
        }

        function tt(e) {
            return Ue(e) ? e.startContainer.ownerDocument.defaultView : e.ownerDocument.defaultView
        }

        function nt(e) {
            if (Ue(e)) {
                let t = e.commonAncestorContainer;
                return Se(t) && (t = t.parentNode), t
            }
            return e.parentNode
        }

        function it(e, t) {
            const o = tt(e), n = new Fu(e);
            if (o === t) return n;
            for (let i = o; i != t;) {
                const e = i.frameElement, t = new Fu(e).excludeScrollbarsAndBorders();
                n.moveBy(t.left, t.top), i = i.parent
            }
            return n
        }

        function rt(e) {
            return $a(e) ? T(e) : new Map(e)
        }

        function at(e) {
            return 'string' == typeof e ? [new Bu(e)] : (P(e) || (e = [e]), Array.from(e).map((e) => 'string' == typeof e ? new Bu(e) : e instanceof Lu ? new Bu(e.data, e.getAttributes()) : e))
        }

        function st(e, t, o, n, i) {
            return {done: !1, value: {type: e, item: t, previousPosition: o, nextPosition: n, length: i}}
        }

        function lt(e) {
            const t = e.split(':');
            return 1 < t.length ? t[0] + ':' + t[1] : t[0]
        }

        function dt(e, t, o) {
            const n = t.getRange(), i = Array.from(e.getAncestors());
            i.shift(), i.reverse();
            const r = i.some((e) => {
                if (n.containsItem(e)) {
                    const t = o.toViewElement(e);
                    return !!t.getCustomProperty('addHighlight')
                }
            });
            return !r
        }

        function ct(e, t) {
            return !t.has(e) && (t.add(e), e.document.model.schema.isBlock(e) && e.parent)
        }

        function ut(e, t) {
            const o = e.parent.getAncestors({parentFirst: !0, includeSelf: !0}), n = o.find((e) => ct(e, t));
            return o.forEach((e) => t.add(e)), n
        }

        function mt() {
            const e = new Set(['insert', 'move', 'remove', 'reinsert']);
            this.listenTo(this.root.document.model, 'applyOperation', (t, o) => {
                const n = o[0];
                !n.isDocumentOperation || e.has(n.type) && pt.call(this, n)
            }, {priority: 'low'})
        }

        function pt(e) {
            const t = e.type, o = e.delta.batch;
            let n, i;
            'insert' == t ? n = Hu.createFromPositionAndShift(e.position, e.nodes.maxOffset) : (n = Hu.createFromPositionAndShift(e.getMovedRangeStart(), e.howMany), i = e.sourcePosition);
            const r = n.end.offset - n.start.offset;
            let a = n.start;
            ('move' == t || 'remove' == t || 'reinsert' == t) && (a = a._getTransformedByInsertion(i, r));
            const s = this._getTransformedByDocumentChange(t, e.delta.type, a, r, i);
            ('move' == t || 'remove' == t || 'reinsert' == t) && 3 == s.length && (s[2] = n);
            const l = Hu.createFromRanges(s), d = !l.isEqual(this), c = this.containsPosition(a),
                u = i && (this.containsPosition(i) || this.start.isEqual(i));
            if (d) {
                const e = Hu.createFromRange(this);
                this.start = l.start, this.end = l.end, this.fire('change:range', e, {
                    type: t,
                    batch: o,
                    range: n,
                    sourcePosition: i
                })
            } else (c || u) && this.fire('change:content', Hu.createFromRange(this), {
                type: t,
                batch: o,
                range: n,
                sourcePosition: i
            })
        }

        function gt(e) {
            return e instanceof Lu || e instanceof Bu ? e.getAttributes() : null
        }

        function ft(e, t) {
            const o = e.document.differ;
            for (const n of o.getChanges()) {
                if ('insert' != n.type) continue;
                const o = n.position.parent, i = n.length === o.maxOffset;
                i && e.enqueueChange(t, (e) => {
                    const t = Array.from(o.getAttributeKeys()).filter((e) => e.startsWith(Yu));
                    for (const n of t) e.removeAttribute(n, o)
                })
            }
        }

        function ht(e) {
            return e = em(e), e.view = _t(e.view, 'container'), (t) => {
                t.on('insert:' + e.model, xt(e.view), {priority: e.priority || 'normal'})
            }
        }

        function bt(e) {
            e = em(e);
            const t = e.model.key ? e.model.key : e.model;
            let o = 'attribute:' + t;
            if (e.model.name && (o += ':' + e.model.name), e.model.values) for (const t of e.model.values) e.view[t] = _t(e.view[t], 'attribute'); else e.view = _t(e.view, 'attribute');
            const n = vt(e);
            return (t) => {
                t.on(o, Pt(n), {priority: e.priority || 'normal'})
            }
        }

        function kt(e) {
            e = em(e);
            const t = e.model.key ? e.model.key : e.model;
            let o = 'attribute:' + t;
            if (e.model.name && (o += ':' + e.model.name), e.model.values) for (const t of e.model.values) e.view[t] = yt(e.view[t]); else e.view = yt(e.view);
            const n = vt(e);
            return (t) => {
                t.on(o, Tt(n), {priority: e.priority || 'normal'})
            }
        }

        function _t(e, t) {
            return 'function' == typeof e ? e : (o, n) => wt(e, n, t)
        }

        function wt(e, t, o) {
            'string' == typeof e && (e = {name: e});
            let n;
            if (n = 'container' == o ? t.createContainerElement(e.name, Object.assign({}, e.attributes)) : 'attribute' == o ? t.createAttributeElement(e.name, Object.assign({}, e.attributes)) : t.createUIElement(e.name, Object.assign({}, e.attributes)), e.styles) {
                const o = Object.keys(e.styles);
                for (const i of o) t.setStyle(i, e.styles[i], n)
            }
            if (e.classes) {
                const o = e.classes;
                if ('string' == typeof o) t.addClass(o, n); else for (const e of o) t.addClass(e, n)
            }
            return n
        }

        function vt(e) {
            return e.model.values ? (t, o) => {
                const n = e.view[t];
                return n ? n(t, o) : null
            } : e.view
        }

        function yt(e) {
            return 'string' == typeof e ? (t) => ({
                key: e,
                value: t
            }) : 'object' == typeof e ? e.value ? () => e : (t) => ({key: e.key, value: t}) : e
        }

        function xt(e) {
            return (t, o, n) => {
                const i = e(o.item, n.writer);
                if (i && n.consumable.consume(o.item, 'insert')) {
                    const e = n.mapper.toViewPosition(o.range.start);
                    n.mapper.bindElements(o.item, i), n.writer.insert(e, i)
                }
            }
        }

        function Ct() {
            return (e, t, o) => {
                if (o.consumable.consume(t.item, 'insert')) {
                    const e = o.writer, n = o.mapper.toViewPosition(t.range.start), i = e.createText(t.item.data);
                    e.insert(n, i)
                }
            }
        }

        function At() {
            return (e, t, o) => {
                const n = o.mapper.toViewPosition(t.position), i = t.position.getShiftedBy(t.length),
                    r = o.mapper.toViewPosition(i, {isPhantom: !0}), a = new yc(n, r),
                    s = o.writer.remove(a.getTrimmed());
                for (const n of yc.createIn(s).getItems()) o.mapper.unbindViewElement(n)
            }
        }

        function Tt(e) {
            return e = e || ((e, t) => ({value: e, key: t.attributeKey})), (t, o, n) => {
                const i = e(o.attributeOldValue, o), r = e(o.attributeNewValue, o);
                if ((i || r) && n.consumable.consume(o.item, t.name)) {
                    const e = n.mapper.toViewElement(o.item), t = n.writer;
                    if (null !== o.attributeOldValue && i) if ('class' == i.key) {
                        const o = Array.isArray(i.value) ? i.value : [i.value];
                        for (const n of o) t.removeClass(n, e)
                    } else if ('style' == i.key) {
                        const o = Object.keys(i.value);
                        for (const n of o) t.removeStyle(n, e)
                    } else t.removeAttribute(i.key, e);
                    if (null !== o.attributeNewValue && r) if ('class' == r.key) {
                        const o = Array.isArray(r.value) ? r.value : [r.value];
                        for (const n of o) t.addClass(n, e)
                    } else if ('style' == r.key) {
                        const o = Object.keys(r.value);
                        for (const n of o) t.setStyle(n, r.value[n], e)
                    } else t.setAttribute(r.key, r.value, e)
                }
            }
        }

        function Pt(e) {
            return (t, o, n) => {
                const i = e(o.attributeOldValue, n.writer), r = e(o.attributeNewValue, n.writer);
                if ((i || r) && n.consumable.consume(o.item, t.name)) {
                    const e = n.writer, t = e.document.selection;
                    if (o.item instanceof Ju || o.item instanceof Xu) e.wrap(t.getFirstRange(), r); else {
                        let t = n.mapper.toViewRange(o.range);
                        null !== o.attributeOldValue && i && (t = e.unwrap(t, i)), null !== o.attributeNewValue && r && e.wrap(t, r)
                    }
                }
            }
        }

        function Et(e, t) {
            return (o, n) => {
                const i = n.newSelection, r = new Ju, a = [];
                for (const e of i.getRanges()) a.push(t.toModelRange(e));
                r.setTo(a, {backward: i.isBackward}), r.isEqual(e.document.selection) || e.change((e) => {
                    e.setSelection(r)
                })
            }
        }

        function St() {
            return (e, t, o) => {
                const n = t.selection;
                if (!n.isCollapsed && o.consumable.consume(n, 'selection')) {
                    const e = [];
                    for (const t of n.getRanges()) {
                        const n = o.mapper.toViewRange(t);
                        e.push(n)
                    }
                    o.writer.setSelection(e, {backward: n.isBackward})
                }
            }
        }

        function Ot() {
            return (e, t, o) => {
                const n = t.selection;
                if (n.isCollapsed && o.consumable.consume(n, 'selection')) {
                    const e = o.writer, t = n.getFirstPosition(), i = o.mapper.toViewPosition(t),
                        r = e.breakAttributes(i);
                    e.setSelection(r)
                }
            }
        }

        function Rt() {
            return (e, t, o) => {
                const n = o.writer, i = n.document.selection;
                for (const n of i.getRanges()) n.isCollapsed && n.end.parent.document && o.writer.mergeAttributes(n.start);
                n.setSelection(null)
            }
        }

        function It(e, t) {
            const o = Ft();
            if (1 === o && (e = Object.keys(window.CKEDITOR_TRANSLATIONS)[0]), 0 === o || !Vt(e, t)) return t.replace(/ \[context: [^\]]+\]$/, '');
            const n = window.CKEDITOR_TRANSLATIONS[e];
            return n[t].replace(/ \[context: [^\]]+\]$/, '')
        }

        function Vt(e, t) {
            return e in window.CKEDITOR_TRANSLATIONS && t in window.CKEDITOR_TRANSLATIONS[e]
        }

        function Ft() {
            return Object.keys(window.CKEDITOR_TRANSLATIONS).length
        }

        function Nt(e, t) {
            const o = {
                name: t,
                allowIn: [],
                allowContentOf: [],
                allowWhere: [],
                allowAttributes: [],
                allowAttributesOf: [],
                inheritTypesFrom: []
            };
            return qt(e, o), Wt(e, o, 'allowIn'), Wt(e, o, 'allowContentOf'), Wt(e, o, 'allowWhere'), Wt(e, o, 'allowAttributes'), Wt(e, o, 'allowAttributesOf'), Wt(e, o, 'inheritTypesFrom'), Ut(e, o), o
        }

        function Mt(e, t) {
            for (const o of e[t].allowContentOf) if (e[o]) {
                const n = Ht(e, o);
                n.forEach((e) => {
                    e.allowIn.push(t)
                })
            }
            delete e[t].allowContentOf
        }

        function Dt(e, t) {
            for (const o of e[t].allowWhere) {
                const n = e[o];
                if (n) {
                    const o = n.allowIn;
                    e[t].allowIn.push(...o)
                }
            }
            delete e[t].allowWhere
        }

        function Bt(e, t) {
            for (const o of e[t].allowAttributesOf) {
                const n = e[o];
                if (n) {
                    const o = n.allowAttributes;
                    e[t].allowAttributes.push(...o)
                }
            }
            delete e[t].allowAttributesOf
        }

        function Lt(e, t) {
            const o = e[t];
            for (const n of o.inheritTypesFrom) {
                const t = e[n];
                if (t) {
                    const e = Object.keys(t).filter((e) => e.startsWith('is'));
                    for (const n of e) n in o || (o[n] = t[n])
                }
            }
            delete o.inheritTypesFrom
        }

        function zt(e, t) {
            const o = e[t], n = o.allowIn.filter((t) => e[t]);
            o.allowIn = Array.from(new Set(n))
        }

        function jt(e, t) {
            const o = e[t];
            o.allowAttributes = Array.from(new Set(o.allowAttributes))
        }

        function qt(e, t) {
            for (const o of e) {
                const e = Object.keys(o).filter((e) => e.startsWith('is'));
                for (const n of e) t[n] = o[n]
            }
        }

        function Wt(e, t, o) {
            for (const n of e) 'string' == typeof n[o] ? t[o].push(n[o]) : Array.isArray(n[o]) && t[o].push(...n[o])
        }

        function Ut(e, t) {
            for (const o of e) {
                const e = o.inheritAllFrom;
                e && (t.allowContentOf.push(e), t.allowWhere.push(e), t.allowAttributesOf.push(e), t.inheritTypesFrom.push(e))
            }
        }

        function Ht(e, t) {
            const o = e[t];
            return Kt(e).filter((e) => e.allowIn.includes(o.name))
        }

        function Kt(e) {
            return Object.keys(e).map((t) => e[t])
        }

        function Gt(e) {
            return 'string' == typeof e ? {
                name: e, * getAttributeKeys() {
                }, getAttribute() {
                }
            } : {
                name: e.is('element') ? e.name : '$text', * getAttributeKeys() {
                    yield* e.getAttributeKeys()
                }, getAttribute(t) {
                    return e.getAttribute(t)
                }
            }
        }

        function* $t(e, t) {
            for (let o = !1; !o;) {
                if (o = !0, e) {
                    const t = e.next();
                    t.done || (o = !1, yield{walker: e, value: t.value})
                }
                if (t) {
                    const e = t.next();
                    e.done || (o = !1, yield{walker: t, value: e.value})
                }
            }
        }

        function Jt(e, t) {
            const o = new Set, n = new Map, i = Hu.createIn(e).getItems();
            for (const n of i) '$marker' == n.name && o.add(n);
            for (const i of o) {
                const e = i.getAttribute('data-name'), o = Uu.createBefore(i);
                n.has(e) ? n.get(e).end = Uu.createFromPosition(o) : n.set(e, new Hu(Uu.createFromPosition(o))), t.remove(i)
            }
            return n
        }

        function Qt(e, t) {
            let o;
            for (const n of new lm(e)) {
                const e = {};
                for (const t of n.getAttributeKeys()) e[t] = n.getAttribute(t);
                const i = t.createElement(n.name, e);
                o && t.append(i, o), o = Uu.createAt(i)
            }
            return o
        }

        function Yt(e) {
            e = em(e);
            const t = to(e), o = eo(e), n = o ? 'element:' + o : 'element';
            return (o) => {
                o.on(n, t, {priority: e.priority || 'normal'})
            }
        }

        function Xt(e) {
            e = em(e), io(e);
            const t = ro(e), o = eo(e), n = o ? 'element:' + o : 'element';
            return (o) => {
                o.on(n, t, {priority: e.priority || 'normal'})
            }
        }

        function Zt(e) {
            e = em(e);
            let t = null;
            ('string' == typeof e.view || e.view.key) && (t = no(e)), io(e, t);
            const o = ro(e);
            return (t) => {
                t.on('element', o, {priority: e.priority || 'low'})
            }
        }

        function eo(e) {
            return 'string' == typeof e.view ? e.view : 'object' == typeof e.view && 'string' == typeof e.view.name ? e.view.name : null
        }

        function to(e) {
            const t = new Od(e.view);
            return (o, n, i) => {
                const r = t.match(n.viewItem);
                if (r) {
                    r.match.name = !0;
                    const t = oo(e.model, n.viewItem, i.writer);
                    if (t && i.consumable.test(n.viewItem, r.match)) {
                        const e = i.splitToAllowedParent(t, n.modelCursor);
                        if (e) {
                            i.writer.insert(t, e.position);
                            const o = i.convertChildren(n.viewItem, Uu.createAt(t));
                            i.consumable.consume(n.viewItem, r.match), n.modelRange = new Hu(Uu.createBefore(t), Uu.createAfter(o.modelCursor.parent)), n.modelCursor = e.cursorParent ? Uu.createAt(e.cursorParent) : n.modelRange.end
                        }
                    }
                }
            }
        }

        function oo(e, t, o) {
            return e instanceof Function ? e(t, o) : o.createElement(e)
        }

        function no(e) {
            'string' == typeof e.view && (e.view = {key: e.view});
            const t = e.view.key;
            let o;
            if ('class' == t || 'style' == t) {
                const n = 'class' == t ? 'classes' : 'styles';
                o = {[n]: e.view.value}
            } else {
                const n = 'undefined' == typeof e.view.value ? /[\s\S]*/ : e.view.value;
                o = {attributes: {[t]: n}}
            }
            return e.view.name && (o.name = e.view.name), e.view = o, t
        }

        function io(e, t = null) {
            const o = 'object' == typeof e.model ? e.model.key : e.model,
                n = 'object' != typeof e.model || 'undefined' == typeof e.model.value ? !(null !== t) || ((e) => e.getAttribute(t)) : e.model.value;
            e.model = {key: o, value: n}
        }

        function ro(e) {
            const t = new Od(e.view);
            return (o, n, i) => {
                const r = t.match(n.viewItem);
                if (r) {
                    const t = e.model.key,
                        o = 'function' == typeof e.model.value ? e.model.value(n.viewItem) : e.model.value;
                    if (null !== o && (ao(e) ? r.match.name = !0 : delete r.match.name, !!i.consumable.test(n.viewItem, r.match))) {
                        n.modelRange || (n = Object.assign(n, i.convertChildren(n.viewItem, n.modelCursor)));
                        const e = so(n.modelRange, {key: t, value: o}, i);
                        e && i.consumable.consume(n.viewItem, r.match)
                    }
                }
            }
        }

        function ao(e) {
            return !!('object' != typeof e.view || eo(e)) && !e.view.classes && !e.view.attributes && !e.view.styles
        }

        function so(e, t, o) {
            let n = !1;
            for (const i of Array.from(e.getItems())) o.schema.checkAttribute(i, t.key) && (o.writer.setAttribute(t.key, t.value, i), n = !0);
            return n
        }

        function lo() {
            return (e, t, o) => {
                if (!t.modelRange && o.consumable.consume(t.viewItem, {name: !0})) {
                    const {modelRange: e, modelCursor: n} = o.convertChildren(t.viewItem, t.modelCursor);
                    t.modelRange = e, t.modelCursor = n
                }
            }
        }

        function co() {
            return (e, t, o) => {
                if (o.schema.checkChild(t.modelCursor, '$text') && o.consumable.consume(t.viewItem)) {
                    const e = o.writer.createText(t.viewItem.data);
                    o.writer.insert(e, t.modelCursor), t.modelRange = Hu.createFromPositionAndShift(t.modelCursor, e.offsetSize), t.modelCursor = t.modelRange.end
                }
            }
        }

        function uo(e) {
            const t = [], o = e.root.document;
            if (!o) return [];
            const n = Hu.createIn(e);
            for (const i of o.model.markers) {
                const e = n.getIntersection(i.getRange());
                e && t.push([i.name, e])
            }
            return t
        }

        function mo(e, t) {
            for (const o of e) t(o)
        }

        function* po(e) {
            if (e.model.values) for (const t of e.model.values) {
                const o = {key: e.model.key, value: t}, n = e.view[t], i = e.upcastAlso ? e.upcastAlso[t] : void 0;
                yield* go(o, n, i)
            } else yield* go(e.model, e.view, e.upcastAlso)
        }

        function* go(e, t, o) {
            if (yield{model: e, view: t}, o) {
                o = Array.isArray(o) ? o : [o];
                for (const t of o) yield{model: e, view: t}
            }
        }

        function fo(e) {
            return 'string' == typeof e ? [new Bu(e)] : (P(e) || (e = [e]), Array.from(e).map((e) => 'string' == typeof e ? new Bu(e) : e instanceof Lu ? new Bu(e.data, e.getAttributes()) : e))
        }

        function ho(e, t) {
            t = wo(t);
            const o = t.reduce((e, t) => e + t.offsetSize, 0), n = e.parent;
            yo(e);
            const i = e.index;
            return n._insertChild(i, t), vo(n, i + t.length), vo(n, i), new Hu(e, e.getShiftedBy(o))
        }

        function bo(e) {
            if (!e.isFlat) throw new Ya('operation-utils-remove-range-not-flat: Trying to remove a range which starts and ends in different element.');
            const t = e.start.parent;
            yo(e.start), yo(e.end);
            const o = t._removeChildren(e.start.index, e.end.index - e.start.index);
            return vo(t, e.start.index), o
        }

        function ko(e, t) {
            if (!e.isFlat) throw new Ya('operation-utils-move-range-not-flat: Trying to move a range which starts and ends in different element.');
            const o = bo(e);
            return t = t._getTransformedByDeletion(e.start, e.end.offset - e.start.offset), ho(t, o)
        }

        function _o(e, t, o) {
            yo(e.start), yo(e.end);
            for (const n of e.getItems()) {
                const e = n.is('textProxy') ? n.textNode : n;
                null === o ? e._removeAttribute(t) : e._setAttribute(t, o), vo(e.parent, e.index)
            }
            vo(e.end.parent, e.end.index)
        }

        function wo(e) {
            const t = [];
            e instanceof Array || (e = [e]);
            for (let o = 0; o < e.length; o++) if ('string' == typeof e[o]) t.push(new Bu(e[o])); else if (e[o] instanceof Lu) t.push(new Bu(e[o].data, e[o].getAttributes())); else if (e[o] instanceof pm || e[o] instanceof zu) for (const n of e[o]) t.push(n); else e[o] instanceof Du && t.push(e[o]);
            for (let o = 1; o < t.length; o++) {
                const e = t[o], n = t[o - 1];
                e instanceof Bu && n instanceof Bu && xo(e, n) && (t.splice(o - 1, 2, new Bu(n.data + e.data, n.getAttributes())), o--)
            }
            return t
        }

        function vo(e, t) {
            const o = e.getChild(t - 1), n = e.getChild(t);
            if (o && n && o.is('text') && n.is('text') && xo(o, n)) {
                const i = new Bu(o.data + n.data, o.getAttributes());
                e._removeChildren(t - 1, 2), e._insertChild(t - 1, i)
            }
        }

        function yo(e) {
            const t = e.textNode, o = e.parent;
            if (t) {
                const n = e.offset - t.startOffset, i = t.index;
                o._removeChildren(i, 1);
                const r = new Bu(t.data.substr(0, n), t.getAttributes()),
                    a = new Bu(t.data.substr(n), t.getAttributes());
                o._insertChild(i, [r, a])
            }
        }

        function xo(e, t) {
            const o = e.getAttributes(), n = t.getAttributes();
            for (const i of o) {
                if (i[1] !== t.getAttribute(i[0])) return !1;
                n.next()
            }
            return n.next().done
        }

        function Co(e) {
            return [e.clone()]
        }

        function Ao(e, t) {
            for (let o = 0; o < t.length; o++) t[o].baseVersion = e + o + 1;
            return t
        }

        function To(e, t) {
            return null === e.targetPosition._getTransformedByDeletion(t.sourcePosition, t.howMany)
        }

        function Po(e) {
            return 0 === e.length ? null : 1 == e.length ? e[0] : (e[0].end = e[e.length - 1].end, e[0])
        }

        function Eo(e, t, o) {
            const n = [];
            for (let r = 0; r < e.length; r++) {
                const i = So(e[r], t, o.isSticky);
                n.push(i);
                for (let t = r + 1; t < e.length; t++) e[t] = e[t]._getTransformedByMove(i.sourcePosition, i.targetPosition, i.howMany)[0];
                t = t._getTransformedByMove(i.sourcePosition, i.targetPosition, i.howMany, !0, !1)
            }
            return n
        }

        function So(e, t, o) {
            let n = '$graveyard' == t.root.rootName ? km : '$graveyard' == e.start.root.rootName ? bm : hm;
            const i = new n(e.start, e.end.offset - e.start.offset, t, 0);
            return i.isSticky = o, i
        }

        function Oo(e, t, o, n, i) {
            var r = -1, a = e.length;
            for (o || (o = qm), i || (i = []); ++r < a;) {
                var s = e[r];
                0 < t && o(s) ? 1 < t ? Oo(s, t - 1, o, n, i) : xl(i, s) : !n && (i[i.length] = s)
            }
            return i
        }

        function Ro(e, t, o, n) {
            var i = o.length, r = i, a = !n;
            if (null == e) return !r;
            for (e = Object(e); i--;) {
                var s = o[i];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
            }
            for (; ++i < r;) {
                s = o[i];
                var l = s[0], d = e[l], c = s[1];
                if (!(a && s[2])) {
                    var u = new Bs;
                    if (n) var m = n(d, c, l, e, t, u);
                    if (void 0 === m ? !fu(c, d, n, Zm | ep, u) : !m) return !1
                } else if (void 0 === d && !(l in e)) return !1
            }
            return !0
        }

        function Io(e, t) {
            if ('function' != typeof e || t && 'function' != typeof t) throw new TypeError(lp);
            var o = function () {
                var n = arguments, i = t ? t.apply(this, n) : n[0], r = o.cache;
                if (r.has(i)) return r.get(i);
                var a = e.apply(this, n);
                return o.cache = r.set(i, a), a
            };
            return o.cache = new (Io.Cache || Ds), o
        }

        function Vo(e, t) {
            if (sl(e)) return !1;
            var o = typeof e;
            return !!('number' == o || 'symbol' == o || 'boolean' == o || null == e || Dd(e)) || kp.test(e) || !bp.test(e) || null != t && e in Object(t)
        }

        function Fo(e, t) {
            return t in Object(e)
        }

        function No(e, t) {
            for (const o of t) for (const t of o.operations) t.baseVersion = ++e;
            return t
        }

        function Mo(e) {
            return e.reduce((e, t) => e + t.operations.length, 0)
        }

        function Do(e, t) {
            const o = e[e.length - 1];
            let n = o.operations.length + o.baseVersion;
            const r = new Em;
            for (let o = 0; o < t; o++) r.addOperation(new vm(n++));
            e.push(r)
        }

        function Bo(e, t, o) {
            qo(e, t, o), Lo(e, t, o), jo(t, o), zo(t, o)
        }

        function Lo(e, t, o) {
            const n = o.originalDelta.get(t);
            if (o.document.history.isUndoingDelta(n)) {
                const t = o.document.history.getUndoneDelta(n), i = o.wasAffected.get(e), r = i.get(t);
                r !== void 0 && (o.insertBefore = r)
            }
        }

        function zo(e, t) {
            const o = t.originalDelta.get(e), n = t.document.history;
            t.forceNotSticky = n.isUndoneDelta(o) || n.isUndoingDelta(o)
        }

        function jo(e, t) {
            const o = t.document.history, n = t.originalDelta.get(e);
            t.forceWeakRemove = o.isUndoneDelta(n)
        }

        function qo(e, t, o) {
            o.wasAffected.get(e) || o.wasAffected.set(e, new Map);
            const n = o.originalDelta.get(t);
            let i = !!o.wasAffected.get(e).get(n);
            for (const n of e.operations) {
                for (const e of t.operations) if (n instanceof hm && e instanceof hm && Wo(n, e)) {
                    i = !0;
                    break
                }
                if (i) break
            }
            o.wasAffected.get(e).set(n, i)
        }

        function Wo(e, t) {
            const o = e.targetPosition, n = t.sourcePosition, i = A(n.getParentPath(), o.getParentPath());
            return !(o.root != n.root) && 'same' == i && n.offset < o.offset
        }

        function Uo(e, t, o) {
            delete o.insertBefore, delete o.forceNotSticky, delete o.forceWeakRemove;
            const n = o.wasAffected.get(e);
            o.wasAffected.delete(e);
            for (const i of t) o.wasAffected.set(i, new Map(n))
        }

        function Ho(e, t) {
            let n = [], i = null, o;
            switch (e) {
                case Im:
                case Vm:
                    for (const e of t) i = e instanceof vm ? new Em : e instanceof km ? new Vm : new Im, i.addOperation(e), n.push(i);
                    return n;
                case Om:
                case Nm:
                    return i = new e, i.addOperation(t[0]), i.addOperation(t[1]), n = Ho(Im, t.slice(2)), [i].concat(n);
                case Rm:
                case Mm:
                    return n = Ho(Im, t.slice(0, -2)), i = new e, i.addOperation(t[t.length - 2]), i.addOperation(t[t.length - 1]), n.concat(i);
                case Fm:
                    return i = t[0] instanceof vm ? new Em : new Fm, i.addOperation(t[0]), [i];
                case Sm:
                    for (o = 0; o < t.length && !!(t[o] instanceof vm); o++) ;
                    o == t.length ? i = new Em : (i = new Sm, 0 != o && t.unshift(t.splice(o, 1)[0]));
                    for (const e of t) i.addOperation(e);
                    return [i];
                default:
                    i = new e;
                    for (const e of t) i.addOperation(e);
                    return [i];
            }
        }

        function Ko(e, t) {
            const o = e.clone(), n = o.operations[0];
            return n.oldRange && (n.oldRange = n.oldRange.getTransformedByDelta(t)[0]), n.newRange && (n.newRange = n.newRange.getTransformedByDelta(t)[0]), [o]
        }

        function Go(e, t) {
            function o() {
                const o = new Hu(e.position.getShiftedBy(s), e.position.getShiftedBy(l)),
                    i = new fm(o, t.key, a, t.value, 0);
                n.addOperation(i)
            }

            const n = new Sm, r = e.nodes;
            let a = r.getNode(0).getAttribute(t.key), s = 0, l = r.getNode(0).offsetSize;
            for (let n = 1; n < r.length; n++) {
                const e = r.getNode(n), i = e.getAttribute(t.key);
                i != a && (a != t.value && o(), a = i, s = l), l += e.offsetSize
            }
            return o(), n
        }

        function $o() {
            const e = new Em;
            return e.addOperation(new vm(0)), e
        }

        function Jo(e, t, o, n) {
            function i() {
                0 === r.operations.length && e.batch.addDelta(r);
                const n = new Hu(l, d), i = n.root.document ? s.version : null, u = new fm(n, t, c, o, i);
                r.addOperation(u), a.applyOperation(u)
            }

            const r = new Sm, a = e.model, s = a.document;
            let l = n.start, d, c, u;
            for (const r of n) u = r.item.getAttribute(t), d && c != u && (c != o && i(), l = d), d = r.nextPosition, c = u;
            d instanceof Uu && d != l && c != o && i()
        }

        function Qo(e, t, o, n) {
            const i = e.model, r = i.document, a = n.getAttribute(t);
            let s, l;
            if (a != o) {
                const d = n.root === n, c = d ? new Dg : new Sm;
                if (e.batch.addDelta(c), d) {
                    const e = n.document ? r.version : null;
                    l = new xm(n, t, a, o, e)
                } else {
                    s = n.is('element') ? new Hu(Uu.createBefore(n), Uu.createFromParentAndOffset(n, 0)) : new Hu(Uu.createBefore(n), Uu.createAfter(n));
                    const e = s.root.document ? r.version : null;
                    l = new fm(s, t, a, o, e)
                }
                c.addOperation(l), i.applyOperation(l)
            }
        }

        function Yo(e, t, o, n) {
            const i = e.model, r = i.document, a = new Vg, s = new wm(t, o, n, i.markers, r.version);
            e.batch.addDelta(a), a.addOperation(s), i.applyOperation(s)
        }

        function Xo(e, t, o, n) {
            let i;
            if (e.root.document) {
                const o = n.document, r = new Uu(o.graveyard, [0]);
                i = new km(e, t, r, o.version)
            } else i = new Bg(e, t);
            o.addOperation(i), n.applyOperation(i)
        }

        function Zo(e, t) {
            return !(e !== t) || !!(e instanceof Lg && t instanceof Lg)
        }

        function en(e) {
            const t = [];
            for (const o of e) if (o.is('text')) for (let e = 0; e < o.data.length; e++) t.push({
                name: '$text',
                attributes: new Map(o.getAttributes())
            }); else t.push({name: o.name, attributes: new Map(o.getAttributes())});
            return t
        }

        function tn(e, t) {
            const o = [];
            let n = 0, i = 0;
            for (const r of t) r.offset > n && (o.push(...'e'.repeat(r.offset - n).split('')), i += r.offset - n), 'insert' == r.type ? (o.push(...'i'.repeat(r.howMany).split('')), n = r.offset + r.howMany) : 'remove' == r.type ? (o.push(...'r'.repeat(r.howMany).split('')), n = r.offset, i += r.howMany) : (o.push(...'a'.repeat(r.howMany).split('')), n = r.offset + r.howMany, i += r.howMany);
            return i < e && o.push(...'e'.repeat(e - i).split('')), o
        }

        function on(e) {
            const t = e.position && '$graveyard' == e.position.root.rootName,
                o = e.range && '$graveyard' == e.range.root.rootName;
            return !t && !o
        }

        function nn(e) {
            return !!e && 1 == e.length && /[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(e)
        }

        function rn(e) {
            return !!e && 1 == e.length && /[\ud800-\udbff]/.test(e)
        }

        function an(e) {
            return !!e && 1 == e.length && /[\udc00-\udfff]/.test(e)
        }

        function sn(e, t) {
            return rn(e.charAt(t - 1)) && an(e.charAt(t))
        }

        function ln(e, t) {
            return nn(e.charAt(t))
        }

        function dn(e) {
            const t = e.textNode;
            if (t) {
                const o = t.data, n = e.offset - t.startOffset;
                return !sn(o, n) && !ln(o, n)
            }
            return !0
        }

        function cn() {
            const e = new Set(['insert', 'move', 'remove', 'reinsert']);
            this.listenTo(this.root.document.model, 'applyOperation', (t, o) => {
                const n = o[0];
                !n.isDocumentOperation || e.has(n.type) && un.call(this, n)
            }, {priority: 'low'})
        }

        function un(e) {
            let t, o;
            'insert' == e.type ? t = Hu.createFromPositionAndShift(e.position, e.nodes.maxOffset) : (t = Hu.createFromPositionAndShift(e.getMovedRangeStart(), e.howMany), o = e.sourcePosition);
            const n = t.end.offset - t.start.offset;
            let i;
            switch (e.type) {
                case'insert':
                    const r = 'sticksToNext' == this.stickiness;
                    i = this._getTransformedByInsertion(t.start, n, r);
                    break;
                case'move':
                case'remove':
                case'reinsert':
                    const a = Hu.createFromPositionAndShift(o, n),
                        s = a.containsPosition(this) || a.start.isEqual(this) && 'sticksToNext' == this.stickiness || a.end.isEqual(this) && 'sticksToPrevious' == this.stickiness;
                    if (s) i = this._getCombined(o, t.start); else {
                        const e = 'sticksToNext' == this.stickiness, r = t.start._getTransformedByInsertion(o, n);
                        i = this._getTransformedByMove(o, r, n, e)
                    }
            }
            if (!this.isEqual(i)) {
                const e = Uu.createFromPosition(this);
                this.path = i.path, this.root = i.root, this.fire('change', e)
            }
        }

        function mn(e, t, o) {
            e.change((n) => {
                o.isCollapsed || e.deleteContent(o);
                const i = new $g(e, n, o.anchor);
                let r;
                r = t.is('documentFragment') ? t.getChildren() : [t], i.handleNodes(r, {isFirst: !0, isLast: !0});
                const a = i.getSelectionRange();
                a ? o instanceof Xu ? n.setSelection(a) : o.setTo(a) : Su.warn('insertcontent-no-range: Cannot determine a proper selection range after insertion.')
            })
        }

        function pn(e, t, o = {}) {
            if (t.isCollapsed) return;
            const n = e.schema;
            e.change((e) => {
                if (!o.doNotResetEntireContent && _n(n, t)) return void kn(e, t, n);
                const i = t.getFirstRange(), r = i.start, a = Gg.createFromPosition(i.end);
                i.start.isTouching(i.end) || e.remove(i), o.leaveUnmerged || (gn(e, r, a), n.removeDisallowedAttributes(r.parent.getChildren(), e)), t instanceof Xu ? e.setSelection(r) : t.setTo(r), fn(n, r) && bn(e, r, t), a.detach()
            })
        }

        function gn(e, t, o) {
            const n = t.parent, i = o.parent;
            if (n != i && n.parent && i.parent && hn(t, o, e.model.schema)) {
                for (t = Uu.createAfter(n), o = Uu.createBefore(i), o.isEqual(t) || e.insert(i, t), e.merge(t); o.parent.isEmpty;) {
                    const t = o.parent;
                    o = Uu.createBefore(t), e.remove(t)
                }
                gn(e, t, o)
            }
        }

        function fn(e, t) {
            const o = e.checkChild(t, '$text'), n = e.checkChild(t, 'paragraph');
            return !o && n
        }

        function hn(e, t, o) {
            const n = new Hu(e, t);
            for (const i of n.getWalker()) if (o.isObject(i.item) || o.isLimit(i.item)) return !1;
            return !0
        }

        function bn(e, t, o) {
            const n = e.createElement('paragraph');
            e.insert(n, t), o instanceof Xu ? e.setSelection(n, 0) : o.setTo(n, 0)
        }

        function kn(e, t) {
            const o = e.model.schema.getLimitElement(t);
            e.remove(Hu.createIn(o)), bn(e, Uu.createAt(o), t)
        }

        function _n(e, t) {
            const o = e.getLimitElement(t);
            if (!t.containsEntireContent(o)) return !1;
            const n = t.getFirstRange();
            return n.start.parent != n.end.parent && e.checkChild(o, 'paragraph')
        }

        function wn(e, t, o = {}) {
            const n = e.schema, i = 'backward' != o.direction, r = o.unit ? o.unit : 'character', a = t.focus,
                s = new qu({boundaries: Cn(a, i), singleCharacters: !0, direction: i ? 'forward' : 'backward'}),
                l = {walker: s, schema: n, isForward: i, unit: r};
            for (let n; n = s.next();) {
                if (n.done) return;
                const o = vn(l, n.value);
                if (o) return void (t instanceof Xu ? e.change((e) => {
                    e.setSelectionFocus(o)
                }) : t.setFocus(o))
            }
        }

        function vn(e, t) {
            if ('text' == t.type) return 'word' === e.unit ? xn(e.walker, e.isForward) : yn(e.walker, e.unit, e.isForward);
            if (t.type == (e.isForward ? 'elementStart' : 'elementEnd')) {
                if (e.schema.isObject(t.item)) return Uu.createAt(t.item, e.isForward ? 'after' : 'before');
                if (e.schema.checkChild(t.nextPosition, '$text')) return t.nextPosition
            } else {
                if (e.schema.isLimit(t.item)) return void e.walker.skip(() => !0);
                if (e.schema.checkChild(t.nextPosition, '$text')) return t.nextPosition
            }
        }

        function yn(e, t) {
            const o = e.position.textNode;
            if (o) {
                const n = o.data;
                for (let i = e.position.offset - o.startOffset; sn(n, i) || 'character' == t && ln(n, i);) e.next(), i = e.position.offset - o.startOffset
            }
            return e.position
        }

        function xn(e, t) {
            let o = e.position.textNode;
            if (o) for (let n = e.position.offset - o.startOffset; !An(o.data, n, t) && !Tn(o, n, t);) {
                e.next();
                const i = t ? e.position.nodeAfter : e.position.nodeBefore;
                if (i) {
                    const n = i.data.charAt(t ? 0 : i.data.length - 1);
                    Jg.includes(n) || (e.next(), o = e.position.textNode)
                }
                n = e.position.offset - o.startOffset
            }
            return e.position
        }

        function Cn(e, t) {
            const o = e.root, n = Uu.createAt(o, t ? 'end' : 0);
            return t ? new Hu(e, n) : new Hu(n, e)
        }

        function An(e, t, o) {
            const n = t + (o ? 0 : -1);
            return Jg.includes(e.charAt(n))
        }

        function Tn(e, t, o) {
            return t === (o ? e.endOffset : 0)
        }

        function Pn(e, t) {
            return e.change((e) => {
                const o = e.createDocumentFragment(), n = t.getFirstRange();
                if (!n || n.isCollapsed) return o;
                const i = n.start.root, r = n.start.getCommonPath(n.end), a = i.getNodeByPath(r);
                let s = n.start.parent == n.end.parent ? n : Hu.createFromParentsAndOffsets(a, n.start.path[r.length], a, n.end.path[r.length] + 1);
                const l = s.end.offset - s.start.offset;
                for (const t of s.getItems({shallow: !0})) t.is('textProxy') ? e.appendText(t.data, t.getAttributes(), o) : e.append(t._clone(!0), o);
                if (s != n) {
                    const t = n._getTransformedByMove(s.start, Uu.createAt(o, 0), l)[0],
                        i = new Hu(Uu.createAt(o), t.start), r = new Hu(t.end, Uu.createAt(o, 'end'));
                    En(r, e), En(i, e)
                }
                return o
            })
        }

        function En(e, t) {
            const o = [];
            Array.from(e.getItems({direction: 'backward'})).map((e) => Hu.createOn(e)).filter((t) => {
                const o = (t.start.isAfter(e.start) || t.start.isEqual(e.start)) && (t.end.isBefore(e.end) || t.end.isEqual(e.end));
                return o
            }).forEach((e) => {
                o.push(e.start.parent), t.remove(e)
            }), o.forEach((e) => {
                for (let o = e; o.parent && o.isEmpty;) {
                    const e = Hu.createOn(o);
                    o = o.parent, t.remove(e)
                }
            })
        }

        function Sn(e, t) {
            e instanceof HTMLTextAreaElement && (e.value = t), e.innerHTML = t
        }

        function On(e) {
            if (!gs(e.updateElement)) throw new Ya('attachtoform-missing-elementapi-interface: ElementApi interface is required.');
            const t = e.element;
            if (t && 'textarea' === t.tagName.toLowerCase() && t.form) {
                let o;
                const n = t.form, i = () => e.updateElement();
                gs(n.submit) && (o = n.submit, n.submit = () => {
                    i(), o.apply(n)
                }), n.addEventListener('submit', i), e.on('destroy', () => {
                    n.removeEventListener('submit', i), o && (n.submit = o)
                })
            }
        }

        function Rn(e) {
            return (e + '').toLowerCase()
        }

        function In({
                        origin: e,
                        originKeystrokeHandler: t,
                        originFocusTracker: o,
                        toolbar: n,
                        beforeFocus: i,
                        afterBlur: r
                    }) {
            o.add(n.element), t.set('Alt+F10', (e, t) => {
                o.isFocused && !n.focusTracker.isFocused && (i && i(), n.focus(), t())
            }), n.keystrokes.set('Esc', (t, o) => {
                n.focusTracker.isFocused && (e.focus(), r && r(), o())
            })
        }

        function Vn(e) {
            return Array.isArray(e) ? {items: e} : e ? Object.assign({items: []}, e) : {items: []}
        }

        function Fn(e) {
            return e.every((e) => 'string' == typeof e)
        }

        function Nn(e) {
            return !!e && ((e.value && (e = e.value), Array.isArray(e)) ? e.some(Nn) : !!(e instanceof uf))
        }

        function Mn(e, t) {
            return e.map((e) => e instanceof uf ? e.getValue(t) : e)
        }

        function Dn(e, t, {node: o}) {
            let n = Mn(e, o);
            n = 1 == e.length && e[0] instanceof pf ? n[0] : n.reduce($n, ''), Yn(n) ? t.remove() : t.set(n)
        }

        function Bn(e) {
            return {
                set(t) {
                    e.textContent = t
                }, remove() {
                    e.textContent = ''
                }
            }
        }

        function Ln(e, t, o) {
            return {
                set(n) {
                    e.setAttributeNS(o, t, n)
                }, remove() {
                    e.removeAttributeNS(o, t)
                }
            }
        }

        function zn(e, t) {
            return {
                set(o) {
                    e.style[t] = o
                }, remove() {
                    e.style[t] = null
                }
            }
        }

        function jn(e) {
            const t = df(e, (e) => {
                if (e && (e instanceof uf || Zn(e) || Xn(e) || ei(e))) return e
            });
            return t
        }

        function qn(e) {
            if ('string' == typeof e ? e = Hn(e) : e.text && Kn(e), e.on && (e.eventListeners = Un(e.on), delete e.on), !e.text) {
                e.attributes && Wn(e.attributes);
                const t = [];
                if (e.children) if (ei(e.children)) t.push(e.children); else for (const o of e.children) Zn(o) || Xn(o) || Me(o) ? t.push(o) : t.push(new cf(o));
                e.children = t
            }
            return e
        }

        function Wn(e) {
            for (const t in e) e[t].value && (e[t].value = [].concat(e[t].value)), Gn(e, t)
        }

        function Un(e) {
            for (const t in e) Gn(e, t);
            return e
        }

        function Hn(e) {
            return {text: [e]}
        }

        function Kn(e) {
            Array.isArray(e.text) || (e.text = [e.text])
        }

        function Gn(e, t) {
            Array.isArray(e[t]) || (e[t] = [e[t]])
        }

        function $n(e, t) {
            return Yn(t) ? e : Yn(e) ? t : `${e} ${t}`
        }

        function Jn(e, t) {
            for (const o in t) e[o] ? e[o].push(...t[o]) : e[o] = t[o]
        }

        function Qn(e, t) {
            if (t.attributes && (!e.attributes && (e.attributes = {}), Jn(e.attributes, t.attributes)), t.eventListeners && (!e.eventListeners && (e.eventListeners = {}), Jn(e.eventListeners, t.eventListeners)), t.text && e.text.push(...t.text), t.children && t.children.length) {
                if (e.children.length != t.children.length) throw new Ya('ui-template-extend-children-mismatch: The number of children in extended definition does not match.');
                let o = 0;
                for (const n of t.children) Qn(e.children[o++], n)
            }
        }

        function Yn(e) {
            return !e && 0 !== e
        }

        function Xn(e) {
            return e instanceof hf
        }

        function Zn(e) {
            return e instanceof cf
        }

        function ei(e) {
            return e instanceof lf
        }

        function ti() {
            return {children: [], bindings: [], attributes: {}}
        }

        function oi(e) {
            return 'class' == e || 'style' == e
        }

        function ni(e) {
            return (t) => t + e
        }

        function ii(e) {
            return !!(e.focus && 'none' != Kc.window.getComputedStyle(e.element).display)
        }

        function ri(e) {
            return e.bindTemplate.to((t) => {
                t.target === e.element && t.preventDefault()
            })
        }

        function ai(e) {
            return e instanceof HTMLTextAreaElement ? e.value : e.innerHTML
        }

        function si(e) {
            const t = e.files ? Array.from(e.files) : [], o = e.items ? Array.from(e.items) : [];
            return t.length ? t : o.filter((e) => 'file' === e.kind).map((e) => e.getAsFile())
        }

        function li(e, t) {
            const o = t.target.ownerDocument, n = t.clientX, i = t.clientY;
            let r;
            return o.caretRangeFromPoint && o.caretRangeFromPoint(n, i) ? r = o.caretRangeFromPoint(n, i) : t.rangeParent && (r = o.createRange(), r.setStart(t.rangeParent, t.rangeOffset), r.collapse(!0)), r ? e.domConverter.domRangeToView(r) : e.document.selection.getFirstRange()
        }

        function di(e) {
            return e = e.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n\n/g, '</p><p>').replace(/\n/g, ' ').replace(/^\s/, '&nbsp;').replace(/\s$/, '&nbsp;').replace(/\s\s/g, ' &nbsp;'), -1 < e.indexOf('</p><p>') && (e = `<p>${e}</p>`), e
        }

        function ci(e) {
            return e.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g, (e, t) => 1 == t.length ? ' ' : t)
        }

        function ui(e) {
            let t = '';
            if (e.is('text') || e.is('textProxy')) t = e.data; else if (e.is('img') && e.hasAttribute('alt')) t = e.getAttribute('alt'); else {
                let o = null;
                for (const n of e.getChildren()) {
                    const e = ui(n);
                    o && (o.is('containerElement') || n.is('containerElement')) && (Wf.includes(o.name) || Wf.includes(n.name) ? t += '\n' : t += '\n\n'), t += e, o = n
                }
            }
            return t
        }

        function mi(e, t, o, n) {
            const i = o.isCollapsed, r = o.getFirstRange(), a = r.start.parent, s = r.end.parent;
            if (n.isLimit(a) || n.isLimit(s)) return void (i || a != s || e.deleteContent(o));
            if (i) pi(t, o, r.start); else {
                const n = !(r.start.isAtStart && r.end.isAtEnd);
                e.deleteContent(o, {leaveUnmerged: n}), n && (a == s ? pi(t, o, o.focus) : t.setSelection(s, 0))
            }
        }

        function pi(e, t, o) {
            const n = o.parent, i = new n.constructor(n.name, n.getAttributes());
            o.isAtEnd ? e.insert(i, o.parent, 'after') : o.isAtStart ? e.insert(i, o.parent, 'before') : e.split(o), e.setSelection(o.parent.nextSibling, 0)
        }

        function gi(e, t) {
            function o() {
                a && (i.push(a), a = null)
            }

            function n(e) {
                return a && a.type == e
            }

            const i = [];
            let r = 0, a;
            return e.forEach((e) => {
                'equal' == e ? (o(), r++) : 'insert' == e ? (n('insert') ? a.values.push(t[r]) : (o(), a = {
                    type: 'insert',
                    index: r,
                    values: [t[r]]
                }), r++) : n('delete') ? a.howMany++ : (o(), a = {type: 'delete', index: r, howMany: 1})
            }), o(), i
        }

        function fi(e) {
            return !!e.ctrlKey || Zf.includes(e.keyCode)
        }

        function hi(e, t) {
            return e instanceof Ed && t instanceof Ed ? e.data === t.data : e === t
        }

        function bi(e) {
            if (1 == e.newChildren.length - e.oldChildren.length) {
                const t = Te(e.oldChildren, e.newChildren, hi), o = gi(t, e.newChildren);
                if (!(1 < o.length)) {
                    const e = o[0];
                    return e.values[0] instanceof Ed ? e : void 0
                }
            }
        }

        function ki(e) {
            const t = e.map((e) => e.node).reduce((e, t) => e.getCommonAncestor(t, {includeSelf: !0}));
            return t ? t.getAncestors({
                includeSelf: !0,
                parentFirst: !0
            }).find((e) => e.is('containerElement') || e.is('rootElement')) : void 0
        }

        function _i(e) {
            if (0 == e.length) return !1;
            for (const t of e) if ('children' === t.type && !bi(t)) return !0;
            return !1
        }

        function wi(e) {
            return e.every((e) => e.is('text'))
        }

        function vi(e) {
            let t = null, o = null;
            for (let n = 0; n < e.length; n++) {
                const i = e[n];
                'equal' != i && (t = null === t ? n : t, o = n)
            }
            let n = 0, r = 0;
            for (let a = t; a <= o; a++) 'insert' != e[a] && n++, 'delete' != e[a] && r++;
            return {insertions: r, deletions: n, firstChangeAt: t}
        }

        function yi(e, t) {
            const o = xi([e], t);
            o.sort((e, t) => e.start.isBefore(t.start) ? -1 : 1);
            for (let n = 1; n < o.length; n++) {
                const e = o[n - 1], t = o[n];
                e.end.isTouching(t.start) && (e.end = t.end, o.splice(n, 1), n--)
            }
            return o
        }

        function xi(e, t) {
            for (const o of t) for (const t of o.operations) for (let o = 0; o < e.length; o++) {
                let n;
                switch (t.type) {
                    case'insert':
                        n = e[o]._getTransformedByInsertion(t.position, t.nodes.maxOffset, !0);
                        break;
                    case'move':
                    case'remove':
                    case'reinsert':
                        n = e[o]._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany, !0);
                }
                n && (e.splice(o, 1, ...n), o = o + n.length - 1)
            }
            return e
        }

        function Ci() {
            let e = Ai(Ph);
            return e && e.length == Eh || (e = Pi(Eh), Ti(Ph, e)), e
        }

        function Ai(e) {
            e = e.toLowerCase();
            const t = document.cookie.split(';');
            for (const o of t) {
                const t = o.split('='), n = decodeURIComponent(t[0].trim().toLowerCase());
                if (n === e) return decodeURIComponent(t[1])
            }
            return null
        }

        function Ti(e, t) {
            document.cookie = encodeURIComponent(e) + '=' + encodeURIComponent(t) + ';path=/'
        }

        function Pi(e) {
            let t = '';
            const o = new Uint8Array(e);
            window.crypto.getRandomValues(o);
            for (let n = 0; n < o.length; n++) {
                const e = Sh.charAt(o[n] % Sh.length);
                t += .5 < Math.random() ? e.toUpperCase() : e
            }
            return t
        }

        function Ei(e) {
            return Array.from(e.getChildren()).reduce((e, t) => e + t.data, '')
        }

        function Si(e, t) {
            return t.filter((e) => e[0] !== void 0 && e[1] !== void 0).map((t) => Hu.createFromParentsAndOffsets(e, t[0], e, t[1]))
        }

        function Oi(e) {
            const t = e.next();
            return t.done ? null : t.value
        }

        function Ri(e) {
            return 'blockQuote' == e.parent.name ? e.parent : null
        }

        function Ii(e) {
            let t = 0, o;
            const n = [];
            for (; t < e.length;) {
                const i = e[t], r = e[t + 1];
                o || (o = Uu.createBefore(i)), r && i.nextSibling == r || (n.push(new Hu(o, Uu.createAfter(i))), o = null), t++
            }
            return n
        }

        function Vi(e, t) {
            const o = e.checkChild(t.parent, 'blockQuote'), n = e.checkChild(['$root', 'blockQuote'], t);
            return o && n
        }

        function Fi(e, t = 512) {
            try {
                const o = e.match(ib)[1], n = atob(e.replace(ib, '')), i = [];
                for (let e = 0; e < n.length; e += t) {
                    const o = n.slice(e, e + t), r = Array(o.length);
                    for (let e = 0; e < o.length; e++) r[e] = o.charCodeAt(e);
                    i.push(new Uint8Array(r))
                }
                return new Blob(i, {type: o})
            } catch (e) {
                throw new Error('Problem with decoding Base64 image data.')
            }
        }

        function Ni(e) {
            if ('string' != typeof e) return !1;
            const t = e.match(ib);
            return !!(t && t.length)
        }

        function Mi() {
            function e(e, t, o) {
                if (o.consumable.test(t.viewItem, {name: !0, classes: 'image'})) {
                    const e = Array.from(t.viewItem.getChildren()).find((e) => e.is('img'));
                    if (e && e.hasAttribute('src') && o.consumable.test(e, {name: !0})) {
                        const n = o.convertItem(e, t.modelCursor), i = Oi(n.modelRange.getItems());
                        i && (o.convertChildren(t.viewItem, Uu.createAt(i)), t.modelRange = n.modelRange, t.modelCursor = n.modelCursor)
                    }
                }
            }

            return (t) => {
                t.on('element:figure', e)
            }
        }

        function Di() {
            function e(e, t, o) {
                if (o.consumable.consume(t.item, e.name)) {
                    const e = o.writer, n = o.mapper.toViewElement(t.item), i = n.getChild(0);
                    if (null === t.attributeNewValue) {
                        const o = t.attributeOldValue;
                        o.data && (e.removeAttribute('srcset', i), e.removeAttribute('sizes', i), o.width && e.removeAttribute('width', i))
                    } else {
                        const o = t.attributeNewValue;
                        o.data && (e.setAttribute('srcset', o.data, i), e.setAttribute('sizes', '100vw', i), o.width && e.setAttribute('width', o.width, i))
                    }
                }
            }

            return (t) => {
                t.on('attribute:srcset:image', e)
            }
        }

        function Bi(e) {
            function t(e, t, o) {
                if (o.consumable.consume(t.item, e.name)) {
                    const e = o.writer, n = o.mapper.toViewElement(t.item), i = n.getChild(0);
                    null === t.attributeNewValue ? e.removeAttribute(t.attributeKey, i) : e.setAttribute(t.attributeKey, t.attributeNewValue, i)
                }
            }

            return (o) => {
                o.on(`attribute:${e}:image`, t)
            }
        }

        function Li(e, t) {
            return e && t && e.priority == t.priority && ji(e.classes) == ji(t.classes)
        }

        function zi(e, t) {
            if (e.priority > t.priority) return !0;
            return !(e.priority < t.priority) && ji(e.classes) > ji(t.classes)
        }

        function ji(e) {
            return Array.isArray(e) ? e.sort().join(',') : e
        }

        function qi(e) {
            return !!e.getCustomProperty(mb)
        }

        function Wi(e, t, o = {}) {
            function n(e) {
                return Array.isArray(e) ? e : [e]
            }

            return t.setAttribute('contenteditable', 'false', e), t.addClass(gb, e), t.setCustomProperty(mb, !0, e), e.getFillerOffset = $i, o.label && Hi(e, o.label, t), Ui(e, t, (e, t, o) => o.addClass(n(t.classes), e), (e, t, o) => o.removeClass(n(t.classes), e)), e
        }

        function Ui(e, t, o, n) {
            const i = new ub;
            i.on('change:top', (t, i) => {
                i.oldDescriptor && n(e, i.oldDescriptor, i.writer), i.newDescriptor && o(e, i.newDescriptor, i.writer)
            }), t.setCustomProperty('addHighlight', (e, t, o) => i.add(t, o), e), t.setCustomProperty('removeHighlight', (e, t, o) => i.remove(t, o), e)
        }

        function Hi(e, t, o) {
            o.setCustomProperty(pb, t, e)
        }

        function Ki(e) {
            const t = e.getCustomProperty(pb);
            return t ? 'function' == typeof t ? t() : t : ''
        }

        function Gi(e, t) {
            return t.addClass(['ck-editor__editable', 'ck-editor__nested-editable'], e), t.setAttribute('contenteditable', e.isReadOnly ? 'false' : 'true', e), e.on('change:isReadOnly', (o, n, i) => {
                t.setAttribute('contenteditable', i ? 'false' : 'true', e)
            }), e.on('change:isFocused', (o, n, i) => {
                i ? t.addClass('ck-editor__nested-editable_focused', e) : t.removeClass('ck-editor__nested-editable_focused', e)
            }), e
        }

        function $i() {
            return null
        }

        function Ji(e, t, o) {
            return t.setCustomProperty(hb, !0, e), Wi(e, t, {
                label: function () {
                    const t = e.getChild(0), n = t.getAttribute('alt');
                    return n ? `${n} ${o}` : o
                }
            })
        }

        function Qi(e) {
            return !!e.getCustomProperty(hb) && qi(e)
        }

        function Yi(e) {
            const t = e.getSelectedElement();
            return !!(t && Qi(t))
        }

        function Xi(e) {
            return e instanceof ju && 'image' == e.name
        }

        function Zi(e) {
            const t = e.createEmptyElement('img'), o = e.createContainerElement('figure', {class: 'image'});
            return e.insert(vc.createAt(o), t), o
        }

        function er(e) {
            return e == Nc.arrowright || e == Nc.arrowleft || e == Nc.arrowup || e == Nc.arrowdown
        }

        function tr(e) {
            return te(e) == vb
        }

        function or(e) {
            for (; e;) {
                if (e instanceof bc && !(e instanceof _c)) return !0;
                e = e.parent
            }
            return !1
        }

        function nr({emitter: e, activator: t, callback: o, contextElements: n}) {
            e.listenTo(document, 'mousedown', (e, {target: i}) => {
                if (t()) {
                    for (const e of n) if (e.contains(i)) return;
                    o()
                }
            })
        }

        function ir({view: e}) {
            e.listenTo(e.element, 'submit', (t, o) => {
                o.preventDefault(), e.fire('submit')
            }, {useCapture: !0})
        }

        function rr(e) {
            for (; e && 'html' != e.tagName.toLowerCase();) {
                if ('static' != Kc.window.getComputedStyle(e).position) return e;
                e = e.parentElement
            }
            return null
        }

        function ar({element: e, target: t, positions: o, limiter: n, fitInViewport: i}) {
            gs(t) && (t = t()), gs(n) && (n = n());
            const r = rr(e.parentElement), a = new Fu(e), s = new Fu(t);
            let l, d;
            if (!n && !i) [d, l] = sr(o[0], s, a); else {
                const e = n && new Fu(n).getVisible(), t = i && new Fu(Kc.window);
                [d, l] = lr(o, s, a, e, t) || sr(o[0], s, a)
            }
            let {left: c, top: u} = dr(l);
            if (r) {
                const e = dr(new Fu(r)), t = He(r);
                c -= e.left, u -= e.top, c += r.scrollLeft, u += r.scrollTop, c -= t.left, u -= t.top
            }
            return {left: c, top: u, name: d}
        }

        function sr(e, t, o) {
            const {left: n, top: i, name: r} = e(t, o);
            return [r, o.clone().moveTo(n, i)]
        }

        function lr(e, t, o, n, i) {
            let r = 0, a = 0, s, l;
            const d = o.getArea();
            return e.some((e) => {
                function c() {
                    a = g, r = p, s = m, l = u
                }

                const [u, m] = sr(e, t, o);
                let p, g;
                if (n) if (i) {
                    const e = n.getIntersection(i);
                    p = e ? e.getIntersectionArea(m) : 0
                } else p = n.getIntersectionArea(m);
                return i && (g = i.getIntersectionArea(m)), i && !n ? g > a && c() : !i && n ? p > r && c() : g > a && p >= r ? c() : g >= a && p > r && c(), p === d
            }), s ? [l, s] : null
        }

        function dr({left: e, top: t}) {
            const {scrollX: o, scrollY: n} = Kc.window;
            return {left: e + o, top: t + n}
        }

        function cr(e) {
            return Vu(e) ? e : Ue(e) ? e.commonAncestorContainer : 'function' == typeof e ? cr(e()) : null
        }

        function ur(e, t) {
            return e.top - t.height - zb.arrowVerticalOffset
        }

        function mr(e) {
            return e.bottom + zb.arrowVerticalOffset
        }

        function pr(e) {
            const t = e.plugins.get('ContextualBalloon');
            if (Yi(e.editing.view.document.selection)) {
                const o = gr(e);
                t.updatePosition(o)
            }
        }

        function gr(e) {
            const t = e.editing.view, o = zb.defaultPositions;
            return {
                target: t.domConverter.viewToDom(t.document.selection.getSelectedElement()),
                positions: [o.northArrowSouth, o.northArrowSouthWest, o.northArrowSouthEast, o.southArrowNorth, o.southArrowNorthWest, o.southArrowNorthEast]
            }
        }

        function fr(e) {
            const t = /^image\/(jpeg|png|gif|bmp)$/;
            return t.test(e.type)
        }

        function hr(e) {
            const t = e.getSelectedElement();
            if (t) return Uu.createAfter(t);
            const o = e.getSelectedBlocks().next().value;
            if (o) {
                if (o.isEmpty) return Uu.createAt(o);
                const t = Uu.createAfter(o);
                return e.focus.isTouching(t) ? t : Uu.createBefore(o)
            }
            return e.focus
        }

        function br(e, t) {
            e.hasClass('ck-appear') || t.addClass('ck-appear', e)
        }

        function kr(e, t) {
            t.removeClass('ck-appear', e)
        }

        function _r(e, t, o) {
            t.hasClass('ck-image-upload-placeholder') || o.addClass('ck-image-upload-placeholder', t), t.hasClass('ck-infinite-progress') || o.addClass('ck-infinite-progress', t);
            const n = t.getChild(0);
            n.getAttribute('src') !== e && o.setAttribute('src', e, n)
        }

        function wr(e, t) {
            e.hasClass('ck-image-upload-placeholder') && t.removeClass('ck-image-upload-placeholder', e), e.hasClass('ck-infinite-progress') && t.removeClass('ck-infinite-progress', e)
        }

        function vr(e, t, o, n) {
            const i = xr(t);
            t.insert(vc.createAt(e, 'end'), i), o.on('change:uploadedPercent', (e, t, o) => {
                n.change((e) => {
                    e.setStyle('width', o + '%', i)
                })
            })
        }

        function yr(e, t) {
            const o = Cr(e);
            o && t.remove(yc.createOn(o))
        }

        function xr(e) {
            const t = e.createUIElement('div', {class: 'ck-progress-bar'});
            return e.setCustomProperty(rk, !0, t), t
        }

        function Cr(e) {
            for (const t of e.getChildren()) if (t.getCustomProperty(rk)) return t
        }

        function Ar(e) {
            return Array.from(e.types).includes('text/html') && '' !== e.getData('text/html')
        }

        function Tr(e, t) {
            return t.checkChild(e.parent, 'paragraph') && !t.isObject(e)
        }

        function Pr(e, t, o) {
            const n = o.writer.createElement('paragraph');
            return o.writer.insert(n, t), o.convertItem(e, Uu.createAt(n))
        }

        function Er(e, t, o) {
            const n = new lm(t);
            return !!o.checkChild(n, 'paragraph') && !!o.checkChild(n.push('paragraph'), e)
        }

        function Sr(e, t, o) {
            return o.checkChild(e.parent, t) && !o.isObject(e)
        }

        function Or(e, t = xk) {
            const o = new t(e), n = new bk(e), i = new wk(e, o, n);
            return o.bind('isEnabled').to(i), o instanceof xk ? o.bind('isOn').to(i, 'isOpen') : o.arrowView.bind('isOn').to(i, 'isOpen'), Ir(i), i
        }

        function Rr(e, t) {
            const o = e.locale, n = e.listView = new Tk(o);
            n.items.bindTo(t).using((e) => {
                const t = new Pk(o);
                return t.bind(...Object.keys(e)).to(e), t
            }), e.panelView.children.add(n), n.items.delegate('execute').to(e)
        }

        function Ir(e) {
            Vr(e), Fr(e), Nr(e)
        }

        function Vr(e) {
            e.on('render', () => {
                nr({
                    emitter: e, activator: () => e.isOpen, callback: () => {
                        e.isOpen = !1
                    }, contextElements: [e.element]
                })
            })
        }

        function Fr(e) {
            e.on('execute', () => {
                e.isOpen = !1
            })
        }

        function Nr(e) {
            e.keystrokes.set('arrowdown', (t, o) => {
                e.isOpen && (e.panelView.focus(), o())
            }), e.keystrokes.set('arrowup', (t, o) => {
                e.isOpen && (e.panelView.focusLast(), o())
            })
        }

        function Mr(e) {
            const o = e.t, t = {Paragraph: o('t'), "Heading 1": o('u'), "Heading 2": o('v'), "Heading 3": o('w')};
            return e.config.get('heading.options').map((e) => {
                const o = t[e.title];
                return o && o != e.title && (e = Object.assign({}, e, {title: o})), e
            })
        }

        function Dr(e, t, o, n) {
            const i = e.document;
            Bk.has(i) || (Bk.set(i, new Map), i.registerPostFixer((e) => Br(i, e))), Bk.get(i).set(t, {
                placeholderText: o,
                checkFunction: n
            }), e.render()
        }

        function Br(e, t) {
            const o = Bk.get(e);
            let n = !1;
            for (const [i, r] of o) Lr(t, i, r) && (n = !0);
            return n
        }

        function Lr(e, t, o) {
            const n = t.document, i = o.placeholderText;
            let r = !1;
            if (!n) return !1;
            t.getAttribute('data-placeholder') !== i && (e.setAttribute('data-placeholder', i, t), r = !0);
            const a = n.selection, s = a.anchor, l = o.checkFunction;
            if (l && !l()) return t.hasClass('ck-placeholder') && (e.removeClass('ck-placeholder', t), r = !0), r;
            const d = !Array.from(t.getChildren()).some((e) => !e.is('uiElement'));
            return !n.isFocused && d ? (t.hasClass('ck-placeholder') || (e.addClass('ck-placeholder', t), r = !0), r) : (d && s && s.parent !== t ? !t.hasClass('ck-placeholder') && (e.addClass('ck-placeholder', t), r = !0) : t.hasClass('ck-placeholder') && (e.removeClass('ck-placeholder', t), r = !0), r)
        }

        function zr(e, t) {
            return (o) => {
                const n = o.createEditableElement('figcaption');
                return o.setCustomProperty(Lk, !0, n), Dr(e, n, t), Gi(n, o)
            }
        }

        function jr(e) {
            for (const t of e.getChildren()) if (t instanceof ju && 'caption' == t.name) return t;
            return null
        }

        function qr(e) {
            const t = e.parent;
            return 'figcaption' == e.name && t && 'figure' == t.name && t.hasClass('image') ? {name: !0} : null
        }

        function Wr(e, t = !0) {
            return (o, n, i) => {
                const r = n.item;
                if ((r.childCount || t) && Xi(r.parent)) {
                    if (!i.consumable.consume(n.item, 'insert')) return;
                    const t = i.mapper.toViewElement(n.range.start.parent), o = e(i.writer), a = i.writer;
                    r.childCount || a.addClass('ck-hidden', o), Ur(o, n.item, t, i)
                }
            }
        }

        function Ur(e, t, o, n) {
            const i = vc.createAt(o, 'end');
            n.writer.insert(i, e), n.mapper.bindElements(t, e)
        }

        function Hr(e) {
            const t = e.getAncestors({includeSelf: !0}), o = t.find((e) => 'caption' == e.name);
            return o && o.parent && 'image' == o.parent.name ? o : null
        }

        function Kr(e, t) {
            return !(e.childCount || e.hasClass('ck-hidden')) && (t.addClass('ck-hidden', e), !0)
        }

        function Gr(e, t) {
            return !!e.hasClass('ck-hidden') && (t.removeClass('ck-hidden', e), !0)
        }

        function $r(e) {
            return (t, o, n) => {
                if (n.consumable.consume(o.item, t.name)) {
                    const t = Qr(o.attributeNewValue, e), i = Qr(o.attributeOldValue, e),
                        r = n.mapper.toViewElement(o.item), a = n.writer;
                    i && a.removeClass(i.className, r), t && a.addClass(t.className, r)
                }
            }
        }

        function Jr(e) {
            const t = e.filter((e) => !e.isDefault);
            return (e, o, n) => {
                if (o.modelRange) {
                    const e = o.viewItem, i = Oi(o.modelRange.getItems());
                    if (n.schema.checkAttribute(i, 'imageStyle')) for (const o of t) n.consumable.consume(e, {classes: o.className}) && n.writer.setAttribute('imageStyle', o.name, i)
                }
            }
        }

        function Qr(e, t) {
            for (const o of t) if (o.name === e) return o
        }

        function Yr(e = []) {
            return e.map(Xr).map((e) => Object.assign({}, e))
        }

        function Xr(e) {
            if ('string' == typeof e) {
                const t = e;
                Zk[t] ? e = Object.assign({}, Zk[t]) : (Su.warn('image-style-not-found: There is no such image style of given name.', {name: t}), e = {name: t})
            } else if (Zk[e.name]) {
                const t = Zk[e.name], o = Object.assign({}, e);
                for (const n in t) e.hasOwnProperty(n) || (o[n] = t[n]);
                e = o
            }
            return 'string' == typeof e.icon && e_[e.icon] && (e.icon = e_[e.icon]), e
        }

        function Zr(e, t) {
            for (const o of e) t[o.title] && (o.title = t[o.title]);
            return e
        }

        function ea(e, t) {
            return new Hu(ta(e, t, !0), ta(e, t, !1))
        }

        function ta(e, t, o) {
            let n = e.textNode || (o ? e.nodeBefore : e.nodeAfter), i = null;
            for (; n && n.getAttribute('linkHref') == t;) i = n, n = o ? n.previousSibling : n.nextSibling;
            return i ? Uu.createAt(i, o ? 'before' : 'after') : e
        }

        function oa(e) {
            return e.is('attributeElement') && !!e.getCustomProperty(d_)
        }

        function na(e, t) {
            const o = t.createAttributeElement('a', {href: e}, {priority: 5});
            return t.setCustomProperty(d_, !0, o), o
        }

        function ia(e, t, o, n) {
            const i = new c_(t, o, n), r = t.document.selection;
            o.listenTo(e.document, 'keydown', (e, t) => {
                if (!r.isCollapsed) return;
                if (t.shiftKey || t.altKey || t.ctrlKey) return;
                const o = t.keyCode == Nc.arrowright, n = t.keyCode == Nc.arrowleft;
                if (!o && !n) return;
                const a = r.getFirstPosition();
                let s;
                s = o ? i.handleForwardMovement(a, t) : i.handleBackwardMovement(a, t), s && e.stop()
            }, {priority: ts.get('high') + 1})
        }

        function ra(e, t) {
            return aa(e, t) || sa(e, t)
        }

        function aa(e, t) {
            const {nodeBefore: o, nodeAfter: n} = e, i = !!o && o.hasAttribute(t), r = !!n && n.hasAttribute(t);
            return r && (!i || o.getAttribute(t) !== n.getAttribute(t))
        }

        function sa(e, t) {
            const {nodeBefore: o, nodeAfter: n} = e, i = !!o && o.hasAttribute(t), r = !!n && n.hasAttribute(t);
            return i && (!r || o.getAttribute(t) !== n.getAttribute(t))
        }

        function la(e, t) {
            const {nodeBefore: o, nodeAfter: n} = e, i = !!o && o.hasAttribute(t), r = !!n && n.hasAttribute(t);
            return r && i ? n.getAttribute(t) !== o.getAttribute(t) : void 0
        }

        function da(e, t) {
            return ra(e.getShiftedBy(-1), t)
        }

        function ca(e) {
            return e.getAncestors().find((e) => oa(e))
        }

        function ua(e, t, o) {
            const n = t ? e[0] : e[e.length - 1];
            if (n.is('listItem')) for (let i = n[t ? 'previousSibling' : 'nextSibling'], r = n.getAttribute('indent'); i && i.is('listItem') && i.getAttribute('indent') >= o;) r > i.getAttribute('indent') && (r = i.getAttribute('indent')), i.getAttribute('indent') == r && e[t ? 'unshift' : 'push'](i), i = i[t ? 'previousSibling' : 'nextSibling']
        }

        function ma(e, t) {
            return t.checkChild(e.parent, 'listItem') && !t.isObject(e)
        }

        function pa(e) {
            const t = e.createContainerElement('li');
            return t.getFillerOffset = ga, t
        }

        function ga() {
            const e = !this.isEmpty && ('ul' == this.getChild(0).name || 'ol' == this.getChild(0).name);
            return this.isEmpty || e ? 0 : null
        }

        function fa(e, t, o) {
            const n = o.consumable;
            if (n.test(t.item, 'insert') && n.test(t.item, 'attribute:type') && n.test(t.item, 'attribute:indent')) {
                n.consume(t.item, 'insert'), n.consume(t.item, 'attribute:type'), n.consume(t.item, 'attribute:indent');
                const e = t.item, i = Ea(e, o);
                Ra(e, i, o)
            }
        }

        function ha(e, t, o) {
            const n = o.mapper.toViewPosition(t.position).getLastMatchingPosition((e) => !e.item.is('li')),
                i = n.nodeAfter, r = o.writer;
            r.breakContainer(vc.createBefore(i)), r.breakContainer(vc.createAfter(i));
            const a = i.parent, s = a.previousSibling, l = yc.createOn(a), d = r.remove(l);
            s && s.nextSibling && Oa(r, s, s.nextSibling);
            const c = o.mapper.toModelElement(i);
            Ia(c.getAttribute('indent') + 1, t.position, l.start, i, o);
            for (const n of yc.createIn(d).getItems()) o.mapper.unbindViewElement(n);
            e.stop()
        }

        function ba(e, t, o) {
            if (!o.consumable.consume(t.item, 'attribute:type')) return;
            const n = o.mapper.toViewElement(t.item), i = o.writer;
            i.breakContainer(vc.createBefore(n)), i.breakContainer(vc.createAfter(n));
            let r = n.parent;
            const a = 'numbered' == t.attributeNewValue ? 'ol' : 'ul';
            r = i.rename(r, a), Oa(i, r, r.nextSibling), Oa(i, r.previousSibling, r);
            for (const n of t.item.getChildren()) o.consumable.consume(n, 'insert')
        }

        function ka(e, t, o) {
            if (o.consumable.consume(t.item, 'attribute:indent')) {
                const e = o.mapper.toViewElement(t.item), n = o.writer;
                n.breakContainer(vc.createBefore(e)), n.breakContainer(vc.createAfter(e));
                const i = e.parent, r = i.previousSibling, a = yc.createOn(i);
                n.remove(a), r && r.nextSibling && Oa(n, r, r.nextSibling), Ia(t.attributeOldValue + 1, t.range.start, a.start, e, o), Ra(t.item, e, o);
                for (const e of t.item.getChildren()) o.consumable.consume(e, 'insert')
            }
        }

        function _a(e, t, o) {
            if ('listItem' != t.item.name) {
                let e = o.mapper.toViewPosition(t.range.start);
                const n = o.writer, r = [];
                for (; ('ul' == e.parent.name || 'ol' == e.parent.name) && (e = n.breakContainer(e), 'li' == e.parent.name);) {
                    const t = e, o = vc.createAt(e.parent, 'end');
                    if (!t.isEqual(o)) {
                        const e = n.remove(new yc(t, o));
                        r.push(e)
                    }
                    e = vc.createAfter(e.parent)
                }
                if (0 < r.length) {
                    for (let t = 0; t < r.length; t++) {
                        const o = e.nodeBefore, i = n.insert(e, r[t]);
                        if (e = i.end, 0 < t) {
                            const t = Oa(n, o, o.nextSibling);
                            t && t.parent == o && e.offset--
                        }
                    }
                    Oa(n, e.nodeBefore, e.nodeAfter)
                }
            }
        }

        function wa(e, t, o) {
            const n = o.mapper.toViewPosition(t.position), i = n.nodeBefore, r = n.nodeAfter;
            Oa(o.writer, i, r)
        }

        function va(e, t, o) {
            if (o.consumable.consume(t.viewItem, {name: !0})) {
                const e = o.writer, n = this.conversionApi.store, i = e.createElement('listItem');
                n.indent = n.indent || 0, e.setAttribute('indent', n.indent, i);
                const r = t.viewItem.parent && 'ol' == t.viewItem.parent.name ? 'numbered' : 'bulleted';
                e.setAttribute('type', r, i), n.indent++;
                const a = o.splitToAllowedParent(i, t.modelCursor);
                if (!a) return;
                e.insert(i, a.position);
                let s = Uu.createAfter(i);
                for (const e of t.viewItem.getChildren()) 'ul' == e.name || 'ol' == e.name ? s = o.convertItem(e, s).modelCursor : o.convertItem(e, Uu.createAt(i, 'end'));
                n.indent--, t.modelRange = new Hu(t.modelCursor, s), t.modelCursor = a.cursorParent ? Uu.createAt(a.cursorParent) : t.modelRange.end
            }
        }

        function ya(e, t, o) {
            if (o.consumable.test(t.viewItem, {name: !0})) {
                const e = Array.from(t.viewItem.getChildren());
                for (const t of e) t.is('li') || t._remove()
            }
        }

        function xa(e, t, o) {
            if (o.consumable.test(t.viewItem, {name: !0})) {
                if (0 === t.viewItem.childCount) return;
                const e = [...t.viewItem.getChildren()];
                let o = !1, n = !0;
                for (const t of e) !o || t.is('ul') || t.is('ol') || t._remove(), t.is('text') ? (n && (t._data = t.data.replace(/^\s+/, '')), (!t.nextSibling || t.nextSibling.is('ul') || t.nextSibling.is('ol')) && (t._data = t.data.replace(/\s+$/, ''))) : (t.is('ul') || t.is('ol')) && (o = !0), n = !1
            }
        }

        function Ca(e, t) {
            if (!t.isPhantom) {
                const e = t.modelPosition.nodeBefore;
                if (e && e.is('listItem')) {
                    const o = t.mapper.toViewElement(e), n = o.getAncestors().find((e) => e.is('ul') || e.is('ol')),
                        i = new wc({startPosition: vc.createAt(o, 0)});
                    for (const e of i) if ('elementStart' == e.type && e.item.is('li')) {
                        t.viewPosition = e.previousPosition;
                        break
                    } else if ('elementEnd' == e.type && e.item == n) {
                        t.viewPosition = e.nextPosition;
                        break
                    }
                }
            }
        }

        function Aa(e, t) {
            const o = t.viewPosition, n = o.parent, i = t.mapper;
            if ('ul' == n.name || 'ol' == n.name) {
                if (!o.isAtEnd) {
                    const e = i.toModelElement(o.nodeAfter);
                    t.modelPosition = Uu.createBefore(e)
                } else {
                    const e = i.toModelElement(o.nodeBefore), n = i.getModelLength(o.nodeBefore);
                    t.modelPosition = Uu.createBefore(e).getShiftedBy(n)
                }
                e.stop()
            } else if ('li' == n.name && o.nodeBefore && ('ul' == o.nodeBefore.name || 'ol' == o.nodeBefore.name)) {
                const r = i.toModelElement(n);
                let a = 1, s = o.nodeBefore;
                for (; s && (s.is('ul') || s.is('ol'));) a += i.getModelLength(s), s = s.previousSibling;
                t.modelPosition = Uu.createBefore(r).getShiftedBy(a), e.stop()
            }
        }

        function Ta(e, t) {
            function o(e) {
                const t = e.nodeBefore;
                if (!t || !t.is('listItem')) {
                    const t = e.nodeAfter;
                    t && t.is('listItem') && a.set(t, t)
                } else {
                    let o = t;
                    if (a.has(o)) return;
                    for (; o.previousSibling && o.previousSibling.is('listItem');) if (o = o.previousSibling, a.has(o)) return;
                    a.set(e.nodeBefore, o)
                }
            }

            function n(e) {
                for (let o = 0, n = null; e && e.is('listItem');) {
                    const i = e.getAttribute('indent');
                    if (i > o) {
                        let r;
                        null === n ? (n = i - o, r = o) : (n > i && (n = i), r = i - n), t.setAttribute('indent', r, e), s = !0
                    } else n = null, o = e.getAttribute('indent') + 1;
                    e = e.nextSibling
                }
            }

            function i(e) {
                for (let o = [], n = null; e && e.is('listItem');) {
                    const i = e.getAttribute('indent');
                    if (n && n.getAttribute('indent') > i && (o = o.slice(0, i + 1)), 0 != i) if (o[i]) {
                        const n = o[i];
                        e.getAttribute('type') != n && (t.setAttribute('type', n, e), s = !0)
                    } else o[i] = e.getAttribute('type');
                    n = e, e = e.nextSibling
                }
            }

            const r = e.document.differ.getChanges(), a = new Map;
            let s = !1;
            for (const n of r) if ('insert' == n.type && 'listItem' == n.name) o(n.position); else if ('insert' == n.type && 'listItem' != n.name) {
                if ('$text' != n.name) {
                    const e = n.position.nodeAfter;
                    e.hasAttribute('indent') && (t.removeAttribute('indent', e), s = !0), e.hasAttribute('type') && (t.removeAttribute('type', e), s = !0)
                }
                const e = n.position.getShiftedBy(n.length);
                o(e)
            } else 'remove' == n.type && 'listItem' == n.name ? o(n.position) : 'attribute' == n.type && 'indent' == n.attributeKey ? o(n.range.start) : 'attribute' == n.type && 'type' == n.attributeKey && o(n.range.start);
            for (const o of a.values()) n(o), i(o);
            return s
        }

        function Pa(e, [t, o]) {
            let n = t.is('documentFragment') ? t.getChild(0) : t;
            if (n && n.is('listItem')) {
                const e = o.getFirstPosition();
                let t = null;
                if (e.parent.is('listItem') ? t = e.parent : e.nodeBefore && e.nodeBefore.is('listItem') && (t = e.nodeBefore), t) {
                    const e = t.getAttribute('indent');
                    if (0 < e) for (; n && n.is('listItem');) n._setAttribute('indent', n.getAttribute('indent') + e), n = n.nextSibling
                }
            }
        }

        function Ea(e, t) {
            const o = t.mapper, n = t.writer, i = 'numbered' == e.getAttribute('type') ? 'ol' : 'ul', r = pa(n),
                a = n.createContainerElement(i, null);
            return n.insert(vc.createAt(a), r), o.bindElements(e, r), r
        }

        function Sa(e, t) {
            const o = !!t.sameIndent, n = !!t.smallerIndent, i = e instanceof ju ? e.getAttribute('indent') : t.indent;
            for (let r = e instanceof ju ? e.previousSibling : e.nodeBefore; r && 'listItem' == r.name;) {
                const e = r.getAttribute('indent');
                if (o && i == e || n && i > e) return r;
                r = r.previousSibling
            }
            return null
        }

        function Oa(e, t, o) {
            return t && o && ('ul' == t.name || 'ol' == t.name) && t.name == o.name ? e.mergeContainers(vc.createAfter(t)) : null
        }

        function Ra(e, t, o) {
            const n = t.parent, i = o.mapper, r = o.writer;
            let a = i.toViewPosition(Uu.createBefore(e));
            const s = Sa(e, {sameIndent: !0, smallerIndent: !0}), l = e.previousSibling;
            if (s && s.getAttribute('indent') == e.getAttribute('indent')) {
                const e = i.toViewElement(s);
                a = r.breakContainer(vc.createAfter(e))
            } else a = l && 'listItem' == l.name ? i.toViewPosition(Uu.createAt(l, 'end')) : i.toViewPosition(Uu.createBefore(e));
            if (a = Va(a), r.insert(a, n), l && 'listItem' == l.name) {
                const e = i.toViewElement(l),
                    o = new wc({boundaries: new yc(vc.createAt(e, 0), a), ignoreElementEnd: !0});
                for (const e of o) if (e.item.is('li')) {
                    const n = r.breakContainer(vc.createBefore(e.item)), i = e.item.parent, a = vc.createAt(t, 'end');
                    Oa(r, a.nodeBefore, a.nodeAfter), r.move(yc.createOn(i), a), o.position = n
                }
            } else {
                const o = n.nextSibling;
                if (o && (o.is('ul') || o.is('ol'))) {
                    let n = null;
                    for (const t of o.getChildren()) {
                        const o = i.toModelElement(t);
                        if (o && o.getAttribute('indent') > e.getAttribute('indent')) n = t; else break
                    }
                    n && (r.breakContainer(vc.createAfter(n)), r.move(yc.createOn(n.parent), vc.createAt(t, 'end')))
                }
            }
            Oa(r, n, n.nextSibling), Oa(r, n.previousSibling, n)
        }

        function Ia(e, t, o, n, i) {
            const r = Sa(t, {sameIndent: !0, smallerIndent: !0, indent: e}), a = i.mapper, s = i.writer,
                l = r ? r.getAttribute('indent') : null;
            let d;
            if (!r) d = o; else if (l == e) {
                const e = a.toViewElement(r).parent;
                d = vc.createAfter(e)
            } else {
                const e = Uu.createAt(r, 'end');
                d = a.toViewPosition(e)
            }
            d = Va(d);
            for (const r of [...n.getChildren()]) (r.is('ul') || r.is('ol')) && (d = s.move(yc.createOn(r), d).end, Oa(s, r, r.nextSibling), Oa(s, r.previousSibling, r))
        }

        function Va(e) {
            return e.getLastMatchingPosition((e) => e.item.is('uiElement'))
        }

        function Fa(e) {
            let t = 1;
            for (const o of e.getChildren()) if ('ul' == o.name || 'ol' == o.name) for (const e of o.getChildren()) t += Fa(e);
            return t
        }

        var Na = Number.POSITIVE_INFINITY, Ma = Math.max, Da = Math.min, Ba = Math.floor;
        Object.defineProperty(t, '__esModule', {value: !0});
        var La = Object.getPrototypeOf, za = function (e) {
                return La(Object(e))
            }, ja = function (e) {
                var t = !1;
                if (null != e && 'function' != typeof e.toString) try {
                    t = !!(e + '')
                } catch (t) {
                }
                return t
            }, qa = function (e) {
                return !!e && 'object' == typeof e
            }, Wa = Object.prototype, Ua = Function.prototype.toString, Ha = Wa.hasOwnProperty, Ka = Ua.call(Object),
            Ga = Wa.toString, $a = function (e) {
                if (!qa(e) || Ga.call(e) != '[object Object]' || ja(e)) return !1;
                var t = za(e);
                if (null === t) return !0;
                var o = Ha.call(t, 'constructor') && t.constructor;
                return 'function' == typeof o && o instanceof o && Ua.call(o) == Ka
            };

        class Ja {
            constructor(e, t) {
                this._config = {}, t && this.define(t), e && this._setObjectToTarget(this._config, e)
            }

            set(e, t) {
                this._setToTarget(this._config, e, t)
            }

            define(e, t) {
                this._setToTarget(this._config, e, t, !0)
            }

            get(e) {
                return this._getFromSource(this._config, e)
            }

            _setToTarget(e, t, o, n = !1) {
                if ($a(t)) return void this._setObjectToTarget(e, t, n);
                const i = t.split('.');
                t = i.pop();
                for (const r of i) $a(e[r]) || (e[r] = {}), e = e[r];
                return $a(o) ? ($a(e[t]) || (e[t] = {}), e = e[t], void this._setObjectToTarget(e, o, n)) : void (n && 'undefined' != typeof e[t] || (e[t] = o))
            }

            _getFromSource(e, t) {
                const o = t.split('.');
                t = o.pop();
                for (const n of o) {
                    if (!$a(e[n])) {
                        e = null;
                        break
                    }
                    e = e[n]
                }
                return e ? e[t] : void 0
            }

            _setObjectToTarget(e, t, o) {
                Object.keys(t).forEach((n) => {
                    this._setToTarget(e, n, t[n], o)
                })
            }
        }

        const Qa = 'https://docs.ckeditor.com/ckeditor5/latest/framework/guides/support/error-codes.html';

        class Ya extends Error {
            constructor(e, t) {
                e = n(e), t && (e += ' ' + JSON.stringify(t)), super(e), this.name = 'CKEditorError', this.data = t
            }

            static isCKEditorError(e) {
                return e instanceof Ya
            }
        }

        var Xa = function () {
            return function e() {
                e.called = !0
            }
        };

        class Za {
            constructor(e, t) {
                this.source = e, this.name = t, this.path = [], this.stop = Xa(), this.off = Xa()
            }
        }

        const es = {
            get(e) {
                return 'number' == typeof e ? e : this[e] || this.normal
            }, highest: 1e5, high: 1e3, normal: 0, low: -1e3, lowest: -1e5
        };
        var ts = es;
        const os = Symbol('listeningTo'), ns = Symbol('emitterId'), is = {
            on(e, t, o = {}) {
                this.listenTo(this, e, t, o)
            }, once(e, t, o) {
                this.listenTo(this, e, function (e, ...o) {
                    e.off(), t.call(this, e, ...o)
                }, o)
            }, off(e, t) {
                this.stopListening(this, e, t)
            }, listenTo(e, t, o, n = {}) {
                let i, r;
                this[os] || (this[os] = {});
                const l = this[os];
                s(e) || a(e);
                const d = s(e);
                (i = l[d]) || (i = l[d] = {
                    emitter: e,
                    callbacks: {}
                }), (r = i.callbacks[t]) || (r = i.callbacks[t] = []), r.push(o), c(e, t);
                const m = u(e, t), p = ts.get(n.priority), g = {callback: o, priority: p};
                for (const r of m) {
                    let e = !1;
                    for (let t = 0; t < r.length; t++) if (r[t].priority < p) {
                        r.splice(t, 0, g), e = !0;
                        break
                    }
                    e || r.push(g)
                }
            }, stopListening(e, t, o) {
                const n = this[os];
                let i = e && s(e);
                const r = n && i && n[i], a = r && t && r.callbacks[t];
                if (n && (!e || r) && (!t || a)) if (o) g(e, t, o); else if (a) {
                    for (; o = a.pop();) g(e, t, o);
                    delete r.callbacks[t]
                } else if (r) {
                    for (t in r.callbacks) this.stopListening(e, t);
                    delete n[i]
                } else {
                    for (i in n) this.stopListening(n[i].emitter);
                    delete this[os]
                }
            }, fire(e, ...t) {
                const o = e instanceof Za ? e : new Za(this, e), n = o.name;
                let r = m(this, n);
                if (o.path.push(this), r) {
                    const e = [o, ...t];
                    r = Array.from(r);
                    for (let t = 0; t < r.length && (r[t].callback.apply(this, e), o.off.called && (delete o.off.called, g(this, n, r[t].callback)), !o.stop.called); t++) ;
                }
                if (this._delegations) {
                    const e = this._delegations.get(n), i = this._delegations.get('*');
                    e && p(e, o, t), i && p(i, o, t)
                }
                return o.return
            }, delegate(...e) {
                return {
                    to: (t, o) => {
                        this._delegations || (this._delegations = new Map);
                        for (const n of e) {
                            const e = this._delegations.get(n);
                            e ? e.set(t, o) : this._delegations.set(n, new Map([[t, o]]))
                        }
                    }
                }
            }, stopDelegating(e, t) {
                if (this._delegations) if (!e) this._delegations.clear(); else if (!t) this._delegations.delete(e); else {
                    const o = this._delegations.get(e);
                    o && o.delete(t)
                }
            }
        };
        var rs = is, as = function (e, t) {
            return e === t || e !== e && t !== t
        }, ss = function (e, t) {
            for (var o = e.length; o--;) if (as(e[o][0], t)) return o;
            return -1
        }, ls = Array.prototype, ds = ls.splice;
        h.prototype.clear = function () {
            this.__data__ = []
        }, h.prototype['delete'] = function (e) {
            var t = this.__data__, o = ss(t, e);
            if (0 > o) return !1;
            var n = t.length - 1;
            return o == n ? t.pop() : ds.call(t, o, 1), !0
        }, h.prototype.get = function (e) {
            var t = this.__data__, o = ss(t, e);
            return 0 > o ? void 0 : t[o][1]
        }, h.prototype.has = function (e) {
            return -1 < ss(this.__data__, e)
        }, h.prototype.set = function (e, t) {
            var o = this.__data__, n = ss(o, e);
            return 0 > n ? o.push([e, t]) : o[n][1] = t, this
        };
        var cs = h, us = function (e) {
                var t = typeof e;
                return !!e && ('object' == t || 'function' == t)
            }, ms = Object.prototype, ps = ms.toString, gs = function (e) {
                var t = us(e) ? ps.call(e) : '';
                return t == '[object Function]' || t == '[object GeneratorFunction]'
            }, fs = Function.prototype.toString, hs = function (e) {
                if (null != e) {
                    try {
                        return fs.call(e)
                    } catch (t) {
                    }
                    try {
                        return e + ''
                    } catch (t) {
                    }
                }
                return ''
            }, bs = /[\\^$.*+?()[\]{}|]/g, ks = /^\[object .+?Constructor\]$/, _s = Object.prototype,
            ws = Function.prototype.toString, vs = _s.hasOwnProperty,
            ys = RegExp('^' + ws.call(vs).replace(bs, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'),
            xs = function (e) {
                if (!us(e)) return !1;
                var t = gs(e) || ja(e) ? ys : ks;
                return t.test(hs(e))
            }, Cs = function (e, t) {
                var o = e[t];
                return xs(o) ? o : void 0
            }, As = Cs(Object, 'create'), Ts = As, Ps = Object.prototype, Es = Ps.hasOwnProperty, Ss = Object.prototype,
            Os = Ss.hasOwnProperty;
        b.prototype.clear = function () {
            this.__data__ = Ts ? Ts(null) : {}
        }, b.prototype['delete'] = function (e) {
            return this.has(e) && delete this.__data__[e]
        }, b.prototype.get = function (e) {
            var t = this.__data__;
            if (Ts) {
                var o = t[e];
                return o === '__lodash_hash_undefined__' ? void 0 : o
            }
            return Es.call(t, e) ? t[e] : void 0
        }, b.prototype.has = function (e) {
            var t = this.__data__;
            return Ts ? t[e] !== void 0 : Os.call(t, e)
        }, b.prototype.set = function (e, t) {
            var o = this.__data__;
            return o[e] = Ts && void 0 === t ? '__lodash_hash_undefined__' : t, this
        };
        var Rs = b, Is = o(1), Vs = Cs(Is.a, 'Map'), Fs = Vs, Ns = function (e) {
            var t = typeof e;
            return 'string' == t || 'number' == t || 'symbol' == t || 'boolean' == t ? '__proto__' !== e : null === e
        }, Ms = function (e, t) {
            var o = e.__data__;
            return Ns(t) ? o['string' == typeof t ? 'string' : 'hash'] : o.map
        };
        k.prototype.clear = function () {
            this.__data__ = {hash: new Rs, map: new (Fs || cs), string: new Rs}
        }, k.prototype['delete'] = function (e) {
            return Ms(this, e)['delete'](e)
        }, k.prototype.get = function (e) {
            return Ms(this, e).get(e)
        }, k.prototype.has = function (e) {
            return Ms(this, e).has(e)
        }, k.prototype.set = function (e, t) {
            return Ms(this, e).set(e, t), this
        };
        var Ds = k;
        _.prototype.clear = function () {
            this.__data__ = new cs
        }, _.prototype['delete'] = function (e) {
            return this.__data__['delete'](e)
        }, _.prototype.get = function (e) {
            return this.__data__.get(e)
        }, _.prototype.has = function (e) {
            return this.__data__.has(e)
        }, _.prototype.set = function (e, t) {
            var o = this.__data__;
            return o instanceof cs && o.__data__.length == 200 && (o = this.__data__ = new Ds(o.__data__)), o.set(e, t), this
        };
        var Bs = _, Ls = function (e, t) {
                for (var o = -1, n = e.length; ++o < n && !(!1 === t(e[o], o, e));) ;
                return e
            }, zs = Object.prototype, js = zs.hasOwnProperty, qs = w, Ws = function (e, t, o, n) {
                o || (o = {});
                for (var i = -1, r = t.length; ++i < r;) {
                    var a = t[i], s = n ? n(o[a], e[a], a, o, e) : e[a];
                    qs(o, a, s)
                }
                return o
            }, Us = Object.prototype, Hs = Us.hasOwnProperty, Ks = v, Gs = Object.keys, $s = function (e) {
                return Gs(Object(e))
            }, Js = function (e, t) {
                for (var o = -1, n = Array(e); ++o < e;) n[o] = t(o);
                return n
            }, Qs = function (e) {
                return function (t) {
                    return null == t ? void 0 : t[e]
                }
            }, Ys = Qs('length'), Xs = function (e) {
                return 'number' == typeof e && -1 < e && 0 == e % 1 && e <= 9007199254740991
            }, Zs = function (e) {
                return null != e && Xs(Ys(e)) && !gs(e)
            }, el = function (e) {
                return qa(e) && Zs(e)
            }, tl = Object.prototype, ol = tl.hasOwnProperty, nl = tl.toString, il = tl.propertyIsEnumerable,
            rl = function (e) {
                return el(e) && ol.call(e, 'callee') && (!il.call(e, 'callee') || nl.call(e) == '[object Arguments]')
            }, al = Array.isArray, sl = al, ll = Object.prototype, dl = ll.toString, cl = function (e) {
                return 'string' == typeof e || !sl(e) && qa(e) && dl.call(e) == '[object String]'
            }, ul = function (e) {
                var t = e ? e.length : void 0;
                return Xs(t) && (sl(e) || cl(e) || rl(e)) ? Js(t, String) : null
            }, ml = /^(?:0|[1-9]\d*)$/, pl = function (e, t) {
                return t = null == t ? 9007199254740991 : t, !!t && ('number' == typeof e || ml.test(e)) && -1 < e && 0 == e % 1 && e < t
            }, gl = Object.prototype, fl = function (e) {
                var t = e && e.constructor, o = 'function' == typeof t && t.prototype || gl;
                return e === o
            }, hl = function (e) {
                var t = fl(e);
                if (!(t || Zs(e))) return $s(e);
                var o = ul(e), n = o || [], i = n.length;
                for (var r in e) !Ks(e, r) || !!o && ('length' == r || pl(r, i)) || t && 'constructor' == r || n.push(r);
                return n
            }, bl = function (e, t) {
                return e && Ws(t, hl(t), e)
            }, kl = function (e, t) {
                if (t) return e.slice();
                var o = new e.constructor(e.length);
                return e.copy(o), o
            }, _l = function (e, t) {
                var o = -1, n = e.length;
                for (t || (t = Array(n)); ++o < n;) t[o] = e[o];
                return t
            }, wl = Object.getOwnPropertySymbols;
        wl || (y = function () {
            return []
        });
        var vl = y, yl = function (e, t) {
                return Ws(e, vl(e), t)
            }, xl = function (e, t) {
                for (var o = -1, n = t.length, i = e.length; ++o < n;) e[i + o] = t[o];
                return e
            }, Cl = function (e, t, o) {
                var n = t(e);
                return sl(e) ? n : xl(n, o(e))
            }, Al = function (e) {
                return Cl(e, hl, vl)
            }, Tl = Cs(Is.a, 'DataView'), Pl = Tl, El = Cs(Is.a, 'Promise'), Sl = El, Ol = Cs(Is.a, 'Set'), Rl = Ol,
            Il = Cs(Is.a, 'WeakMap'), Vl = Il, Fl = '[object Map]', Nl = '[object Promise]', Ml = '[object Set]',
            Dl = '[object WeakMap]', Bl = '[object DataView]', Ll = Object.prototype, zl = Ll.toString, jl = hs(Pl),
            ql = hs(Fs), Wl = hs(Sl), Ul = hs(Rl), Hl = hs(Vl);
        (Pl && x(new Pl(new ArrayBuffer(1))) != Bl || Fs && x(new Fs) != Fl || Sl && x(Sl.resolve()) != Nl || Rl && x(new Rl) != Ml || Vl && x(new Vl) != Dl) && (x = function (e) {
            var t = zl.call(e), o = t == '[object Object]' ? e.constructor : void 0, n = o ? hs(o) : void 0;
            if (n) switch (n) {
                case jl:
                    return Bl;
                case ql:
                    return Fl;
                case Wl:
                    return Nl;
                case Ul:
                    return Ml;
                case Hl:
                    return Dl;
            }
            return t
        });
        var Kl = x, Gl = Object.prototype, $l = Gl.hasOwnProperty, Jl = function (e) {
                var t = e.length, o = e.constructor(t);
                return t && 'string' == typeof e[0] && $l.call(e, 'index') && (o.index = e.index, o.input = e.input), o
            }, Ql = Is.a.Uint8Array, Yl = Ql, Xl = function (e) {
                var t = new e.constructor(e.byteLength);
                return new Yl(t).set(new Yl(e)), t
            }, Zl = function (e, t) {
                var o = t ? Xl(e.buffer) : e.buffer;
                return new e.constructor(o, e.byteOffset, e.byteLength)
            }, ed = function (e, t) {
                return e.set(t[0], t[1]), e
            }, td = function (e, t, o, n) {
                var i = -1, r = e.length;
                for (n && r && (o = e[++i]); ++i < r;) o = t(o, e[i], i, e);
                return o
            }, od = function (e) {
                var t = -1, o = Array(e.size);
                return e.forEach(function (e, n) {
                    o[++t] = [n, e]
                }), o
            }, nd = function (e, t, o) {
                var n = t ? o(od(e), !0) : od(e);
                return td(n, ed, new e.constructor)
            }, id = /\w*$/, rd = function (e) {
                var t = new e.constructor(e.source, id.exec(e));
                return t.lastIndex = e.lastIndex, t
            }, ad = function (e, t) {
                return e.add(t), e
            }, sd = function (e) {
                var t = -1, o = Array(e.size);
                return e.forEach(function (e) {
                    o[++t] = e
                }), o
            }, ld = function (e, t, o) {
                var n = t ? o(sd(e), !0) : sd(e);
                return td(n, ad, new e.constructor)
            }, dd = Is.a.Symbol, cd = dd, ud = cd ? cd.prototype : void 0, md = ud ? ud.valueOf : void 0,
            pd = function (e) {
                return md ? Object(md.call(e)) : {}
            }, gd = function (e, t) {
                var o = t ? Xl(e.buffer) : e.buffer;
                return new e.constructor(o, e.byteOffset, e.length)
            }, fd = function (e, t, o, n) {
                var i = e.constructor;
                return t === '[object ArrayBuffer]' ? Xl(e) : t === '[object Boolean]' || t === '[object Date]' ? new i(+e) : t === '[object DataView]' ? Zl(e, n) : t === '[object Float32Array]' || t === '[object Float64Array]' || t === '[object Int8Array]' || t === '[object Int16Array]' || t === '[object Int32Array]' || t === '[object Uint8Array]' || t === '[object Uint8ClampedArray]' || t === '[object Uint16Array]' || t === '[object Uint32Array]' ? gd(e, n) : t === '[object Map]' ? nd(e, n, o) : t === '[object Number]' || t === '[object String]' ? new i(e) : t === '[object RegExp]' ? rd(e) : t === '[object Set]' ? ld(e, n, o) : t === '[object Symbol]' ? pd(e) : void 0
            }, hd = Object.create, bd = function (e) {
                return us(e) ? hd(e) : {}
            }, kd = function (e) {
                return 'function' != typeof e.constructor || fl(e) ? {} : bd(za(e))
            }, _d = o(9), wd = '[object Arguments]', vd = '[object Function]', yd = '[object GeneratorFunction]',
            xd = '[object Object]', Cd = {};
        Cd[wd] = Cd['[object Array]'] = Cd['[object ArrayBuffer]'] = Cd['[object DataView]'] = Cd['[object Boolean]'] = Cd['[object Date]'] = Cd['[object Float32Array]'] = Cd['[object Float64Array]'] = Cd['[object Int8Array]'] = Cd['[object Int16Array]'] = Cd['[object Int32Array]'] = Cd['[object Map]'] = Cd['[object Number]'] = Cd[xd] = Cd['[object RegExp]'] = Cd['[object Set]'] = Cd['[object String]'] = Cd['[object Symbol]'] = Cd['[object Uint8Array]'] = Cd['[object Uint8ClampedArray]'] = Cd['[object Uint16Array]'] = Cd['[object Uint32Array]'] = !0, Cd['[object Error]'] = Cd[vd] = Cd['[object WeakMap]'] = !1;
        var Ad = C, Td = function (e) {
            return Ad(e, !1, !0)
        };

        class Pd {
            constructor() {
                this.parent = null
            }

            get index() {
                let e;
                if (!this.parent) return null;
                if (-1 == (e = this.parent.getChildIndex(this))) throw new Ya('view-node-not-found-in-parent: The node\'s parent does not contain this node.');
                return e
            }

            get nextSibling() {
                const e = this.index;
                return null !== e && this.parent.getChild(e + 1) || null
            }

            get previousSibling() {
                const e = this.index;
                return null !== e && this.parent.getChild(e - 1) || null
            }

            get root() {
                let e = this;
                for (; e.parent;) e = e.parent;
                return e
            }

            get document() {
                return this.parent instanceof Pd ? this.parent.document : null
            }

            getPath() {
                const e = [];
                for (let t = this; t.parent;) e.unshift(t.index), t = t.parent;
                return e
            }

            getAncestors(e = {includeSelf: !1, parentFirst: !1}) {
                const t = [];
                for (let o = e.includeSelf ? this : this.parent; o;) t[e.parentFirst ? 'push' : 'unshift'](o), o = o.parent;
                return t
            }

            getCommonAncestor(e, t = {}) {
                const o = this.getAncestors(t), n = e.getAncestors(t);
                let r = 0;
                for (; o[r] == n[r] && o[r];) r++;
                return 0 == r ? null : o[r - 1]
            }

            isBefore(e) {
                if (this == e) return !1;
                if (this.root !== e.root) return !1;
                const t = this.getPath(), o = e.getPath(), n = A(t, o);
                return !('prefix' !== n) || 'extension' !== n && t[n] < o[n]
            }

            isAfter(e) {
                return this != e && !(this.root !== e.root) && !this.isBefore(e)
            }

            _remove() {
                this.parent._removeChildren(this.index)
            }

            _fireChange(e, t) {
                this.fire('change:' + e, t), this.parent && this.parent._fireChange(e, t)
            }

            toJSON() {
                const e = Td(this);
                return delete e.parent, e
            }

            is(e) {
                return 'node' == e
            }
        }

        f(Pd, rs);

        class Ed extends Pd {
            constructor(e) {
                super(), this._textData = e
            }

            is(e) {
                return 'text' == e || super.is(e)
            }

            get data() {
                return this._textData
            }

            get _data() {
                return this.data
            }

            set _data(e) {
                this._fireChange('text', this), this._textData = e
            }

            isSimilar(e) {
                return !!(e instanceof Ed) && (this === e || this.data === e.data)
            }

            _clone() {
                return new Ed(this.data)
            }
        }

        class Sd {
            constructor(e, t, o) {
                if (this.textNode = e, 0 > t || t > e.data.length) throw new Ya('view-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.');
                if (0 > o || t + o > e.data.length) throw new Ya('view-textproxy-wrong-length: Given length value is incorrect.');
                this.data = e.data.substring(t, t + o), this.offsetInText = t
            }

            get offsetSize() {
                return this.data.length
            }

            get isPartial() {
                return this.data.length !== this.textNode.data.length
            }

            get parent() {
                return this.textNode.parent
            }

            get root() {
                return this.textNode.root
            }

            get document() {
                return this.textNode.document
            }

            is(e) {
                return 'textProxy' == e
            }

            getAncestors(e = {includeSelf: !1, parentFirst: !1}) {
                const t = [];
                for (let o = e.includeSelf ? this.textNode : this.parent; null !== o;) t[e.parentFirst ? 'push' : 'unshift'](o), o = o.parent;
                return t
            }
        }

        class Od {
            constructor(...e) {
                this._patterns = [], this.add(...e)
            }

            add(...e) {
                for (let t of e) ('string' == typeof t || t instanceof RegExp) && (t = {name: t}), t.classes && ('string' == typeof t.classes || t.classes instanceof RegExp) && (t.classes = [t.classes]), this._patterns.push(t)
            }

            match(...e) {
                for (const t of e) for (const e of this._patterns) {
                    const o = E(t, e);
                    if (o) return {element: t, pattern: e, match: o}
                }
                return null
            }

            matchAll(...e) {
                const t = [];
                for (const o of e) for (const e of this._patterns) {
                    const n = E(o, e);
                    n && t.push({element: o, pattern: e, match: n})
                }
                return 0 < t.length ? t : null
            }

            getElementName() {
                if (1 !== this._patterns.length) return null;
                const e = this._patterns[0], t = e.name;
                return 'function' != typeof e && t && !(t instanceof RegExp) ? t : null
            }
        }

        class Rd extends Pd {
            constructor(e, t, o) {
                if (super(), this.name = e, this._attrs = V(t), this._children = [], o && this._insertChild(0, o), this._classes = new Set, this._attrs.has('class')) {
                    const e = this._attrs.get('class');
                    N(this._classes, e), this._attrs.delete('class')
                }
                this._styles = new Map, this._attrs.has('style') && (F(this._styles, this._attrs.get('style')), this._attrs.delete('style')), this._customProperties = new Map
            }

            get childCount() {
                return this._children.length
            }

            get isEmpty() {
                return 0 === this._children.length
            }

            is(e, t = null) {
                return t ? 'element' == e && t == this.name : 'element' == e || e == this.name || super.is(e)
            }

            getChild(e) {
                return this._children[e]
            }

            getChildIndex(e) {
                return this._children.indexOf(e)
            }

            getChildren() {
                return this._children[Symbol.iterator]()
            }

            * getAttributeKeys() {
                0 < this._classes.size && (yield'class'), 0 < this._styles.size && (yield'style');
                for (const e of this._attrs.keys()) yield e
            }

            * getAttributes() {
                yield* this._attrs.entries(), 0 < this._classes.size && (yield['class', this.getAttribute('class')]), 0 < this._styles.size && (yield['style', this.getAttribute('style')])
            }

            getAttribute(e) {
                if ('class' == e) return 0 < this._classes.size ? [...this._classes].join(' ') : void 0;
                if ('style' == e) {
                    if (0 < this._styles.size) {
                        let e = '';
                        for (const [t, o] of this._styles) e += `${t}:${o};`;
                        return e
                    }
                    return
                }
                return this._attrs.get(e)
            }

            hasAttribute(e) {
                return 'class' == e ? 0 < this._classes.size : 'style' == e ? 0 < this._styles.size : this._attrs.has(e)
            }

            isSimilar(e) {
                if (!(e instanceof Rd)) return !1;
                if (this === e) return !0;
                if (this.name != e.name) return !1;
                if (this._attrs.size !== e._attrs.size || this._classes.size !== e._classes.size || this._styles.size !== e._styles.size) return !1;
                for (const [t, o] of this._attrs) if (!e._attrs.has(t) || e._attrs.get(t) !== o) return !1;
                for (const t of this._classes) if (!e._classes.has(t)) return !1;
                for (const [t, o] of this._styles) if (!e._styles.has(t) || e._styles.get(t) !== o) return !1;
                return !0
            }

            hasClass(...e) {
                for (const t of e) if (!this._classes.has(t)) return !1;
                return !0
            }

            getClassNames() {
                return this._classes.keys()
            }

            getStyle(e) {
                return this._styles.get(e)
            }

            getStyleNames() {
                return this._styles.keys()
            }

            hasStyle(...e) {
                for (const t of e) if (!this._styles.has(t)) return !1;
                return !0
            }

            findAncestor(...e) {
                const t = new Od(...e);
                for (let o = this.parent; o;) {
                    if (t.match(o)) return o;
                    o = o.parent
                }
                return null
            }

            getCustomProperty(e) {
                return this._customProperties.get(e)
            }

            * getCustomProperties() {
                yield* this._customProperties.entries()
            }

            getIdentity() {
                const e = Array.from(this._classes).sort().join(','),
                    t = Array.from(this._styles).map((e) => `${e[0]}:${e[1]}`).sort().join(';'),
                    o = Array.from(this._attrs).map((e) => `${e[0]}="${e[1]}"`).sort().join(' ');
                return this.name + ('' == e ? '' : ` class="${e}"`) + ('' == t ? '' : ` style="${t}"`) + ('' == o ? '' : ` ${o}`)
            }

            _clone(e = !1) {
                const t = [];
                if (e) for (const o of this.getChildren()) t.push(o._clone(e));
                const o = new this.constructor(this.name, this._attrs, t);
                return o._classes = new Set(this._classes), o._styles = new Map(this._styles), o._customProperties = new Map(this._customProperties), o.getFillerOffset = this.getFillerOffset, o
            }

            _appendChild(e) {
                return this._insertChild(this.childCount, e)
            }

            _insertChild(e, t) {
                this._fireChange('children', this);
                let o = 0;
                const n = M(t);
                for (const i of n) null !== i.parent && i._remove(), i.parent = this, this._children.splice(e, 0, i), e++, o++;
                return o
            }

            _removeChildren(e, t = 1) {
                this._fireChange('children', this);
                for (let o = e; o < e + t; o++) this._children[o].parent = null;
                return this._children.splice(e, t)
            }

            _setAttribute(e, t) {
                t = t + '', this._fireChange('attributes', this), 'class' == e ? N(this._classes, t) : 'style' == e ? F(this._styles, t) : this._attrs.set(e, t)
            }

            _removeAttribute(e) {
                return this._fireChange('attributes', this), 'class' == e ? !!(0 < this._classes.size) && (this._classes.clear(), !0) : 'style' == e ? !!(0 < this._styles.size) && (this._styles.clear(), !0) : this._attrs.delete(e)
            }

            _addClass(e) {
                this._fireChange('attributes', this), e = Array.isArray(e) ? e : [e], e.forEach((e) => this._classes.add(e))
            }

            _removeClass(e) {
                this._fireChange('attributes', this), e = Array.isArray(e) ? e : [e], e.forEach((e) => this._classes.delete(e))
            }

            _setStyle(e, t) {
                if (this._fireChange('attributes', this), $a(e)) {
                    const t = Object.keys(e);
                    for (const o of t) this._styles.set(o, e[o])
                } else this._styles.set(e, t)
            }

            _removeStyle(e) {
                this._fireChange('attributes', this), e = Array.isArray(e) ? e : [e], e.forEach((e) => this._styles.delete(e))
            }

            _setCustomProperty(e, t) {
                this._customProperties.set(e, t)
            }

            _removeCustomProperty(e) {
                return this._customProperties.delete(e)
            }
        }

        class Id extends Rd {
            constructor(e, t, o) {
                super(e, t, o), this.getFillerOffset = D
            }

            is(e, t = null) {
                return t ? 'containerElement' == e && t == this.name || super.is(e, t) : 'containerElement' == e || super.is(e)
            }
        }

        var Vd = B, Fd = function (e, t, o) {
                var n = o.length;
                return 0 === n ? e.call(t) : 1 === n ? e.call(t, o[0]) : 2 === n ? e.call(t, o[0], o[1]) : 3 === n ? e.call(t, o[0], o[1], o[2]) : e.apply(t, o)
            }, Nd = Object.prototype, Md = Nd.toString, Dd = function (e) {
                return 'symbol' == typeof e || qa(e) && Md.call(e) == '[object Symbol]'
            }, Bd = 0 / 0, Ld = /^\s+|\s+$/g, zd = /^[-+]0x[0-9a-f]+$/i, jd = /^0b[01]+$/i, qd = /^0o[0-7]+$/i,
            Wd = parseInt, Ud = function (e) {
                if ('number' == typeof e) return e;
                if (Dd(e)) return Bd;
                if (us(e)) {
                    var t = gs(e.valueOf) ? e.valueOf() : e;
                    e = us(t) ? t + '' : t
                }
                if ('string' != typeof e) return 0 === e ? e : +e;
                e = e.replace(Ld, '');
                var o = jd.test(e);
                return o || qd.test(e) ? Wd(e.slice(2), o ? 2 : 8) : zd.test(e) ? Bd : +e
            }, Hd = 1 / 0, Kd = function (e) {
                if (!e) return 0 === e ? e : 0;
                if (e = Ud(e), e === Hd || e === -Hd) {
                    var t = 0 > e ? -1 : 1;
                    return t * 17976931348623157e292
                }
                return e === e ? e : 0
            }, Gd = function (e) {
                var t = Kd(e), o = t % 1;
                return t === t ? o ? t - o : t : 0
            }, $d = Ma, Jd = function (e, t) {
                if ('function' != typeof e) throw new TypeError('Expected a function');
                return t = $d(void 0 === t ? e.length - 1 : Gd(t), 0), function () {
                    for (var o = arguments, n = -1, i = $d(o.length - t, 0), r = Array(i); ++n < i;) r[n] = o[t + n];
                    switch (t) {
                        case 0:
                            return e.call(this, r);
                        case 1:
                            return e.call(this, o[0], r);
                        case 2:
                            return e.call(this, o[0], o[1], r);
                    }
                    var a = Array(t + 1);
                    for (n = -1; ++n < t;) a[n] = o[n];
                    return a[t] = r, Fd(e, this, a)
                }
            }, Qd = Is.a.Reflect, Yd = Qd, Xd = function (e) {
                for (var t = [], o; !(o = e.next()).done;) t.push(o.value);
                return t
            }, Zd = Object.prototype, ec = Yd ? Yd.enumerate : void 0, tc = Zd.propertyIsEnumerable;
        ec && !tc.call({valueOf: 1}, 'valueOf') && (L = function (e) {
            return Xd(ec(e))
        });
        var oc = L, nc = Object.prototype, ic = nc.hasOwnProperty, rc = function (e) {
                for (var t = -1, o = fl(e), n = oc(e), i = n.length, r = ul(e), a = r || [], s = a.length; ++t < i;) {
                    var l = n[t];
                    !!r && ('length' == l || pl(l, s)) || 'constructor' == l && (o || !ic.call(e, l)) || a.push(l)
                }
                return a
            }, ac = Object.prototype, sc = ac.propertyIsEnumerable, lc = !sc.call({valueOf: 1}, 'valueOf'),
            dc = function (e) {
                return Jd(function (t, o) {
                    var n = -1, i = o.length, r = 1 < i ? o[i - 1] : void 0, a = 2 < i ? o[2] : void 0;
                    for (r = 3 < e.length && 'function' == typeof r ? (i--, r) : void 0, a && Vd(o[0], o[1], a) && (r = 3 > i ? void 0 : r, i = 1), t = Object(t); ++n < i;) {
                        var s = o[n];
                        s && e(t, s, n, r)
                    }
                    return t
                })
            }(function (e, t) {
                if (lc || fl(t) || Zs(t)) return void Ws(t, rc(t), e);
                for (var o in t) qs(e, o, t[o])
            }), cc = dc;
        const uc = Symbol('observableProperties'), mc = Symbol('boundObservables'), pc = Symbol('boundProperties'),
            gc = {
                set(e, t) {
                    if (us(e)) return void Object.keys(e).forEach((t) => {
                        this.set(t, e[t])
                    }, this);
                    z(this);
                    const o = this[uc];
                    if (e in this && !o.has(e)) throw new Ya('observable-set-cannot-override: Cannot override an existing property.');
                    Object.defineProperty(this, e, {
                        enumerable: !0, configurable: !0, get() {
                            return o.get(e)
                        }, set(t) {
                            const n = o.get(e);
                            n === t && o.has(e) || (o.set(e, t), this.fire('change:' + e, e, t, n))
                        }
                    }), this[e] = t
                }, bind(...e) {
                    if (!e.length || !U(e)) throw new Ya('observable-bind-wrong-properties: All properties must be strings.');
                    if (new Set(e).size !== e.length) throw new Ya('observable-bind-duplicate-properties: Properties must be unique.');
                    z(this);
                    const t = this[pc];
                    e.forEach((e) => {
                        if (t.has(e)) throw new Ya('observable-bind-rebind: Cannot bind the same property more that once.')
                    });
                    const o = new Map;
                    return e.forEach((e) => {
                        const n = {property: e, to: []};
                        t.set(e, n), o.set(e, n)
                    }), {to: j, toMany: q, _observable: this, _bindProperties: e, _to: [], _bindings: o}
                }, unbind(...e) {
                    if (!(uc in this)) return;
                    const t = this[pc], o = this[mc];
                    if (e.length) {
                        if (!U(e)) throw new Ya('observable-unbind-wrong-properties: Properties must be strings.');
                        e.forEach((e) => {
                            const n = t.get(e);
                            if (!n) return;
                            let i, r, a, s;
                            n.to.forEach((e) => {
                                i = e[0], r = e[1], a = o.get(i), s = a[r], s.delete(n), s.size || delete a[r], Object.keys(a).length || (o.delete(i), this.stopListening(i, 'change'))
                            }), t.delete(e)
                        })
                    } else o.forEach((e, t) => {
                        this.stopListening(t, 'change')
                    }), o.clear(), t.clear()
                }, decorate(e) {
                    const t = this[e];
                    if (!t) throw new Ya('observablemixin-cannot-decorate-undefined: Cannot decorate an undefined method.', {
                        object: this,
                        methodName: e
                    });
                    this.on(e, (e, o) => {
                        e.return = t.apply(this, o)
                    }), this[e] = function (...t) {
                        return this.fire(e, t)
                    }
                }
            };
        cc(gc, rs);
        var fc = gc;
        const hc = Symbol('document');

        class bc extends Id {
            constructor(e, t, o) {
                super(e, t, o), this.set('isReadOnly', !1), this.set('isFocused', !1)
            }

            get document() {
                return this.getCustomProperty(hc)
            }

            set _document(e) {
                if (this.getCustomProperty(hc)) throw new Ya('view-editableelement-document-already-set: View document is already set.');
                this._setCustomProperty(hc, e), this.bind('isReadOnly').to(e), this.bind('isFocused').to(e, 'isFocused', (t) => t && e.selection.editableElement == this), this.listenTo(e.selection, 'change', () => {
                    this.isFocused = e.isFocused && e.selection.editableElement == this
                })
            }
        }

        f(bc, fc);
        const kc = Symbol('rootName');

        class _c extends bc {
            constructor(e) {
                super(e), this.rootName = 'main'
            }

            is(e, t = null) {
                return t ? 'rootElement' == e && t == this.name || super.is(e, t) : 'rootElement' == e || super.is(e)
            }

            get rootName() {
                return this.getCustomProperty(kc)
            }

            set rootName(e) {
                this._setCustomProperty(kc, e)
            }

            set _name(e) {
                this.name = e
            }
        }

        class wc {
            constructor(e = {}) {
                if (!e.boundaries && !e.startPosition) throw new Ya('view-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.');
                if (e.direction && 'forward' != e.direction && 'backward' != e.direction) throw new Ya('view-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.', {direction: e.direction});
                this.boundaries = e.boundaries || null, this.position = e.startPosition ? vc.createFromPosition(e.startPosition) : vc.createFromPosition(e.boundaries['backward' == e.direction ? 'end' : 'start']), this.direction = e.direction || 'forward', this.singleCharacters = !!e.singleCharacters, this.shallow = !!e.shallow, this.ignoreElementEnd = !!e.ignoreElementEnd, this._boundaryStartParent = this.boundaries ? this.boundaries.start.parent : null, this._boundaryEndParent = this.boundaries ? this.boundaries.end.parent : null
            }

            [Symbol.iterator]() {
                return this
            }

            skip(e) {
                let t, o, n;
                do n = this.position, ({done: t, value: o} = this.next()); while (!t && e(o));
                t || (this.position = n)
            }

            next() {
                return 'forward' == this.direction ? this._next() : this._previous()
            }

            _next() {
                let e = vc.createFromPosition(this.position);
                const t = this.position, o = e.parent;
                if (null === o.parent && e.offset === o.childCount) return {done: !0};
                if (o === this._boundaryEndParent && e.offset == this.boundaries.end.offset) return {done: !0};
                let n;
                if (o instanceof Ed) {
                    if (e.isAtEnd) return this.position = vc.createAfter(o), this._next();
                    n = o.data[e.offset]
                } else n = o.getChild(e.offset);
                if (n instanceof Rd) return this.shallow ? e.offset++ : e = new vc(n, 0), this.position = e, this._formatReturnValue('elementStart', n, t, e, 1);
                if (!(n instanceof Ed)) {
                    if ('string' == typeof n) {
                        let n;
                        if (this.singleCharacters) n = 1; else {
                            const t = o === this._boundaryEndParent ? this.boundaries.end.offset : o.data.length;
                            n = t - e.offset
                        }
                        const i = new Sd(o, e.offset, n);
                        return e.offset += n, this.position = e, this._formatReturnValue('text', i, t, e, n)
                    }
                    return e = vc.createAfter(o), this.position = e, this.ignoreElementEnd ? this._next() : this._formatReturnValue('elementEnd', o, t, e)
                }
                if (this.singleCharacters) return e = new vc(n, 0), this.position = e, this._next(); else {
                    let o = n.data.length, i;
                    return n == this._boundaryEndParent ? (o = this.boundaries.end.offset, i = new Sd(n, 0, o), e = vc.createAfter(i)) : (i = new Sd(n, 0, n.data.length), e.offset++), this.position = e, this._formatReturnValue('text', i, t, e, o)
                }
            }

            _previous() {
                let e = vc.createFromPosition(this.position);
                const t = this.position, o = e.parent;
                if (null === o.parent && 0 === e.offset) return {done: !0};
                if (o == this._boundaryStartParent && e.offset == this.boundaries.start.offset) return {done: !0};
                let n;
                if (o instanceof Ed) {
                    if (e.isAtStart) return this.position = vc.createBefore(o), this._previous();
                    n = o.data[e.offset - 1]
                } else n = o.getChild(e.offset - 1);
                if (n instanceof Rd) return this.shallow ? (e.offset--, this.position = e, this._formatReturnValue('elementStart', n, t, e, 1)) : (e = new vc(n, n.childCount), this.position = e, this.ignoreElementEnd ? this._previous() : this._formatReturnValue('elementEnd', n, t, e));
                if (!(n instanceof Ed)) {
                    if ('string' == typeof n) {
                        let n;
                        if (!this.singleCharacters) {
                            const t = o === this._boundaryStartParent ? this.boundaries.start.offset : 0;
                            n = e.offset - t
                        } else n = 1;
                        e.offset -= n;
                        const i = new Sd(o, e.offset, n);
                        return this.position = e, this._formatReturnValue('text', i, t, e, n)
                    }
                    return e = vc.createBefore(o), this.position = e, this._formatReturnValue('elementStart', o, t, e, 1)
                }
                if (this.singleCharacters) return e = new vc(n, n.data.length), this.position = e, this._previous(); else {
                    let o = n.data.length, i;
                    if (n == this._boundaryStartParent) {
                        const t = this.boundaries.start.offset;
                        i = new Sd(n, t, n.data.length - t), o = i.data.length, e = vc.createBefore(i)
                    } else i = new Sd(n, 0, n.data.length), e.offset--;
                    return this.position = e, this._formatReturnValue('text', i, t, e, o)
                }
            }

            _formatReturnValue(e, t, o, n, i) {
                return t instanceof Sd && (t.offsetInText + t.data.length == t.textNode.data.length && ('forward' != this.direction || this.boundaries && this.boundaries.end.isEqual(this.position) ? o = vc.createAfter(t.textNode) : (n = vc.createAfter(t.textNode), this.position = n)), 0 === t.offsetInText && ('backward' != this.direction || this.boundaries && this.boundaries.start.isEqual(this.position) ? o = vc.createBefore(t.textNode) : (n = vc.createBefore(t.textNode), this.position = n))), {
                    done: !1,
                    value: {type: e, item: t, previousPosition: o, nextPosition: n, length: i}
                }
            }
        }

        class vc {
            constructor(e, t) {
                this.parent = e, this.offset = t
            }

            get nodeAfter() {
                return this.parent.is('text') ? null : this.parent.getChild(this.offset) || null
            }

            get nodeBefore() {
                return this.parent.is('text') ? null : this.parent.getChild(this.offset - 1) || null
            }

            get isAtStart() {
                return 0 === this.offset
            }

            get isAtEnd() {
                const e = this.parent.is('text') ? this.parent.data.length : this.parent.childCount;
                return this.offset === e
            }

            get root() {
                return this.parent.root
            }

            get editableElement() {
                let e = this.parent;
                for (; !(e instanceof bc);) if (e.parent) e = e.parent; else return null;
                return e
            }

            getShiftedBy(e) {
                const t = vc.createFromPosition(this), o = t.offset + e;
                return t.offset = 0 > o ? 0 : o, t
            }

            getLastMatchingPosition(e, t = {}) {
                t.startPosition = this;
                const o = new wc(t);
                return o.skip(e), o.position
            }

            getAncestors() {
                return this.parent.is('documentFragment') ? [this.parent] : this.parent.getAncestors({includeSelf: !0})
            }

            getCommonAncestor(e) {
                const t = this.getAncestors(), o = e.getAncestors();
                let n = 0;
                for (; t[n] == o[n] && t[n];) n++;
                return 0 == n ? null : t[n - 1]
            }

            isEqual(e) {
                return this.parent == e.parent && this.offset == e.offset
            }

            isBefore(e) {
                return 'before' == this.compareWith(e)
            }

            isAfter(e) {
                return 'after' == this.compareWith(e)
            }

            compareWith(e) {
                if (this.root !== e.root) return 'different';
                if (this.isEqual(e)) return 'same';
                const t = this.parent.is('node') ? this.parent.getPath() : [],
                    o = e.parent.is('node') ? e.parent.getPath() : [];
                t.push(this.offset), o.push(e.offset);
                const n = A(t, o);
                return 'prefix' === n ? 'before' : 'extension' === n ? 'after' : t[n] < o[n] ? 'before' : 'after'
            }

            static createAt(e, t) {
                if (e instanceof vc) return this.createFromPosition(e); else {
                    const o = e;
                    if ('end' == t) t = o.is('text') ? o.data.length : o.childCount; else {
                        if ('before' == t) return this.createBefore(o);
                        if ('after' == t) return this.createAfter(o);
                        t || (t = 0)
                    }
                    return new vc(o, t)
                }
            }

            static createAfter(e) {
                if (e.is('textProxy')) return new vc(e.textNode, e.offsetInText + e.data.length);
                if (!e.parent) throw new Ya('view-position-after-root: You can not make position after root.', {root: e});
                return new vc(e.parent, e.index + 1)
            }

            static createBefore(e) {
                if (e.is('textProxy')) return new vc(e.textNode, e.offsetInText);
                if (!e.parent) throw new Ya('view-position-before-root: You can not make position before root.', {root: e});
                return new vc(e.parent, e.index)
            }

            static createFromPosition(e) {
                return new this(e.parent, e.offset)
            }
        }

        class yc {
            constructor(e, t = null) {
                this.start = vc.createFromPosition(e), this.end = t ? vc.createFromPosition(t) : vc.createFromPosition(e)
            }

            * [Symbol.iterator]() {
                yield* new wc({boundaries: this, ignoreElementEnd: !0})
            }

            get isCollapsed() {
                return this.start.isEqual(this.end)
            }

            get isFlat() {
                return this.start.parent === this.end.parent
            }

            get root() {
                return this.start.root
            }

            getEnlarged() {
                let e = this.start.getLastMatchingPosition(Q, {direction: 'backward'}),
                    t = this.end.getLastMatchingPosition(Q);
                return e.parent.is('text') && e.isAtStart && (e = vc.createBefore(e.parent)), t.parent.is('text') && t.isAtEnd && (t = vc.createAfter(t.parent)), new yc(e, t)
            }

            getTrimmed() {
                let e = this.start.getLastMatchingPosition(Q);
                if (e.isAfter(this.end) || e.isEqual(this.end)) return new yc(e, e);
                let t = this.end.getLastMatchingPosition(Q, {direction: 'backward'});
                const o = e.nodeAfter, n = t.nodeBefore;
                return o && o.is('text') && (e = new vc(o, 0)), n && n.is('text') && (t = new vc(n, n.data.length)), new yc(e, t)
            }

            isEqual(e) {
                return this == e || this.start.isEqual(e.start) && this.end.isEqual(e.end)
            }

            containsPosition(e) {
                return e.isAfter(this.start) && e.isBefore(this.end)
            }

            containsRange(e, t = !1) {
                e.isCollapsed && (t = !1);
                const o = this.containsPosition(e.start) || t && this.start.isEqual(e.start),
                    n = this.containsPosition(e.end) || t && this.end.isEqual(e.end);
                return o && n
            }

            getDifference(e) {
                const t = [];
                return this.isIntersecting(e) ? (this.containsPosition(e.start) && t.push(new yc(this.start, e.start)), this.containsPosition(e.end) && t.push(new yc(e.end, this.end))) : t.push(yc.createFromRange(this)), t
            }

            getIntersection(e) {
                if (this.isIntersecting(e)) {
                    let t = this.start, o = this.end;
                    return this.containsPosition(e.start) && (t = e.start), this.containsPosition(e.end) && (o = e.end), new yc(t, o)
                }
                return null
            }

            getWalker(e = {}) {
                return e.boundaries = this, new wc(e)
            }

            getCommonAncestor() {
                return this.start.getCommonAncestor(this.end)
            }

            * getItems(e = {}) {
                e.boundaries = this, e.ignoreElementEnd = !0;
                const t = new wc(e);
                for (const o of t) yield o.item
            }

            * getPositions(e = {}) {
                e.boundaries = this;
                const t = new wc(e);
                yield t.position;
                for (const o of t) yield o.nextPosition
            }

            isIntersecting(e) {
                return this.start.isBefore(e.end) && this.end.isAfter(e.start)
            }

            static createFromParentsAndOffsets(e, t, o, n) {
                return new this(new vc(e, t), new vc(o, n))
            }

            static createFromRange(e) {
                return new this(e.start, e.end)
            }

            static createFromPositionAndShift(e, t) {
                const o = e, n = e.getShiftedBy(t);
                return 0 < t ? new this(o, n) : new this(n, o)
            }

            static createIn(e) {
                return this.createFromParentsAndOffsets(e, 0, e, e.childCount)
            }

            static createOn(e) {
                const t = e.is('textProxy') ? e.offsetSize : 1;
                return this.createFromPositionAndShift(vc.createBefore(e), t)
            }

            static createCollapsedAt(e, t) {
                const o = vc.createAt(e, t), n = vc.createFromPosition(o);
                return new yc(o, n)
            }
        }

        class xc {
            constructor(e = null, t, o) {
                this._ranges = [], this._lastRangeBackward = !1, this._isFake = !1, this._fakeSelectionLabel = '', this.setTo(e, t, o)
            }

            get isFake() {
                return this._isFake
            }

            get fakeSelectionLabel() {
                return this._fakeSelectionLabel
            }

            get anchor() {
                if (!this._ranges.length) return null;
                const e = this._ranges[this._ranges.length - 1], t = this._lastRangeBackward ? e.end : e.start;
                return vc.createFromPosition(t)
            }

            get focus() {
                if (!this._ranges.length) return null;
                const e = this._ranges[this._ranges.length - 1], t = this._lastRangeBackward ? e.start : e.end;
                return vc.createFromPosition(t)
            }

            get isCollapsed() {
                return 1 === this.rangeCount && this._ranges[0].isCollapsed
            }

            get rangeCount() {
                return this._ranges.length
            }

            get isBackward() {
                return !this.isCollapsed && this._lastRangeBackward
            }

            get editableElement() {
                return this.anchor ? this.anchor.editableElement : null
            }

            * getRanges() {
                for (const e of this._ranges) yield yc.createFromRange(e)
            }

            getFirstRange() {
                let e = null;
                for (const t of this._ranges) (!e || t.start.isBefore(e.start)) && (e = t);
                return e ? yc.createFromRange(e) : null
            }

            getLastRange() {
                let e = null;
                for (const t of this._ranges) (!e || t.end.isAfter(e.end)) && (e = t);
                return e ? yc.createFromRange(e) : null
            }

            getFirstPosition() {
                const e = this.getFirstRange();
                return e ? vc.createFromPosition(e.start) : null
            }

            getLastPosition() {
                const e = this.getLastRange();
                return e ? vc.createFromPosition(e.end) : null
            }

            isEqual(e) {
                if (this.isFake != e.isFake) return !1;
                if (this.isFake && this.fakeSelectionLabel != e.fakeSelectionLabel) return !1;
                if (this.rangeCount != e.rangeCount) return !1;
                if (0 === this.rangeCount) return !0;
                if (!this.anchor.isEqual(e.anchor) || !this.focus.isEqual(e.focus)) return !1;
                for (const t of this._ranges) {
                    let o = !1;
                    for (const n of e._ranges) if (t.isEqual(n)) {
                        o = !0;
                        break
                    }
                    if (!o) return !1
                }
                return !0
            }

            isSimilar(e) {
                if (this.isBackward != e.isBackward) return !1;
                const t = Y(this.getRanges()), o = Y(e.getRanges());
                if (t != o) return !1;
                if (0 == t) return !0;
                for (let t of this.getRanges()) {
                    t = t.getTrimmed();
                    let o = !1;
                    for (let n of e.getRanges()) if (n = n.getTrimmed(), t.start.isEqual(n.start) && t.end.isEqual(n.end)) {
                        o = !0;
                        break
                    }
                    if (!o) return !1
                }
                return !0
            }

            getSelectedElement() {
                if (1 !== this.rangeCount) return null;
                const e = this.getFirstRange(), t = e.start.nodeAfter, o = e.end.nodeBefore;
                return t instanceof Rd && t == o ? t : null
            }

            setTo(e, t, o) {
                if (null === e) this._setRanges([]), this._setFakeOptions(t); else if (e instanceof xc || e instanceof Cc) this._setRanges(e.getRanges(), e.isBackward), this._setFakeOptions({
                    fake: e.isFake,
                    label: e.fakeSelectionLabel
                }); else if (e instanceof yc) this._setRanges([e], t && t.backward), this._setFakeOptions(t); else if (e instanceof vc) this._setRanges([new yc(e)]), this._setFakeOptions(t); else if (e instanceof Pd) {
                    const n = !!o && !!o.backward;
                    let i;
                    if (t === void 0) throw new Ya('view-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.'); else i = 'in' == t ? yc.createIn(e) : 'on' == t ? yc.createOn(e) : yc.createCollapsedAt(e, t);
                    this._setRanges([i], n), this._setFakeOptions(o)
                } else if (P(e)) this._setRanges(e, t && t.backward), this._setFakeOptions(t); else throw new Ya('view-selection-setTo-not-selectable: Cannot set selection to given place.');
                this.fire('change')
            }

            setFocus(e, t) {
                if (null === this.anchor) throw new Ya('view-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.');
                const o = vc.createAt(e, t);
                if ('same' != o.compareWith(this.focus)) {
                    const e = this.anchor;
                    this._ranges.pop(), 'before' == o.compareWith(e) ? this._addRange(new yc(o, e), !0) : this._addRange(new yc(e, o)), this.fire('change')
                }
            }

            _setRanges(e, t = !1) {
                e = Array.from(e), this._ranges = [];
                for (const o of e) this._addRange(o);
                this._lastRangeBackward = !!t
            }

            _setFakeOptions(e = {}) {
                this._isFake = !!e.fake, this._fakeSelectionLabel = e.fake ? e.label || '' : ''
            }

            _addRange(e, t = !1) {
                if (!(e instanceof yc)) throw new Ya('view-selection-invalid-range: Invalid Range.');
                this._pushRange(e), this._lastRangeBackward = !!t
            }

            _pushRange(e) {
                for (const t of this._ranges) if (e.isIntersecting(t)) throw new Ya('view-selection-range-intersects: Trying to add a range that intersects with another range from selection.', {
                    addedRange: e,
                    intersectingRange: t
                });
                this._ranges.push(yc.createFromRange(e))
            }
        }

        f(xc, rs);

        class Cc {
            constructor(e = null, t, o) {
                this._selection = new xc, this._selection.delegate('change').to(this), this._selection.setTo(e, t, o)
            }

            get isFake() {
                return this._selection.isFake
            }

            get fakeSelectionLabel() {
                return this._selection.fakeSelectionLabel
            }

            get anchor() {
                return this._selection.anchor
            }

            get focus() {
                return this._selection.focus
            }

            get isCollapsed() {
                return this._selection.isCollapsed
            }

            get rangeCount() {
                return this._selection.rangeCount
            }

            get isBackward() {
                return this._selection.isBackward
            }

            get editableElement() {
                return this._selection.editableElement
            }

            get _ranges() {
                return this._selection._ranges
            }

            * getRanges() {
                yield* this._selection.getRanges()
            }

            getFirstRange() {
                return this._selection.getFirstRange()
            }

            getLastRange() {
                return this._selection.getLastRange()
            }

            getFirstPosition() {
                return this._selection.getFirstPosition()
            }

            getLastPosition() {
                return this._selection.getLastPosition()
            }

            getSelectedElement() {
                return this._selection.getSelectedElement()
            }

            isEqual(e) {
                return this._selection.isEqual(e)
            }

            isSimilar(e) {
                return this._selection.isSimilar(e)
            }

            _setTo(e, t, o) {
                this._selection.setTo(e, t, o)
            }

            _setFocus(e, t) {
                this._selection.setFocus(e, t)
            }
        }

        f(Cc, rs);

        class Ac {
            constructor(e = {}) {
                this._items = [], this._itemMap = new Map, this._idProperty = e.idProperty || 'id', this._bindToExternalToInternalMap = new WeakMap, this._bindToInternalToExternalMap = new WeakMap, this._skippedIndexesFromExternal = []
            }

            get length() {
                return this._items.length
            }

            get first() {
                return this._items[0] || null
            }

            get last() {
                return this._items[this.length - 1] || null
            }

            add(e, t) {
                let o;
                const n = this._idProperty;
                if (n in e) {
                    if (o = e[n], 'string' != typeof o) throw new Ya('collection-add-invalid-id');
                    if (this.get(o)) throw new Ya('collection-add-item-already-exists')
                } else e[n] = o = i();
                if (void 0 === t) t = this._items.length; else if (t > this._items.length || 0 > t) throw new Ya('collection-add-item-invalid-index');
                return this._items.splice(t, 0, e), this._itemMap.set(o, e), this.fire('add', e, t), this
            }

            get(e) {
                let t;
                if ('string' == typeof e) t = this._itemMap.get(e); else if ('number' == typeof e) t = this._items[e]; else throw new Ya('collection-get-invalid-arg: Index or id must be given.');
                return t || null
            }

            getIndex(e) {
                let t;
                return t = 'string' == typeof e ? this._itemMap.get(e) : e, this._items.indexOf(t)
            }

            remove(e) {
                let t = !1, o, n, i;
                const r = this._idProperty;
                if ('string' == typeof e ? (n = e, i = this._itemMap.get(n), t = !i, i && (o = this._items.indexOf(i))) : 'number' == typeof e ? (o = e, i = this._items[o], t = !i, i && (n = i[r])) : (i = e, n = i[r], o = this._items.indexOf(i), t = -1 == o || !this._itemMap.get(n)), t) throw new Ya('collection-remove-404: Item not found.');
                this._items.splice(o, 1), this._itemMap.delete(n);
                const a = this._bindToInternalToExternalMap.get(i);
                return this._bindToInternalToExternalMap.delete(i), this._bindToExternalToInternalMap.delete(a), this.fire('remove', i, o), i
            }

            map(e, t) {
                return this._items.map(e, t)
            }

            find(e, t) {
                return this._items.find(e, t)
            }

            filter(e, t) {
                return this._items.filter(e, t)
            }

            clear() {
                for (this._bindToCollection && (this.stopListening(this._bindToCollection), this._bindToCollection = null); this.length;) this.remove(0)
            }

            bindTo(e) {
                if (this._bindToCollection) throw new Ya('collection-bind-to-rebind: The collection cannot be bound more than once.');
                return this._bindToCollection = e, {
                    as: (e) => {
                        this._setUpBindToBinding((t) => new e(t))
                    }, using: (e) => {
                        'function' == typeof e ? this._setUpBindToBinding((t) => e(t)) : this._setUpBindToBinding((t) => t[e])
                    }
                }
            }

            _setUpBindToBinding(e) {
                const t = this._bindToCollection, o = (o, n, i) => {
                    const r = t._bindToCollection == this, a = t._bindToInternalToExternalMap.get(n);
                    if (r && a) this._bindToExternalToInternalMap.set(n, a), this._bindToInternalToExternalMap.set(a, n); else {
                        const o = e(n);
                        if (!o) return void this._skippedIndexesFromExternal.push(i);
                        let r = i;
                        for (const e of this._skippedIndexesFromExternal) i > e && r--;
                        for (const e of t._skippedIndexesFromExternal) r >= e && r++;
                        this._bindToExternalToInternalMap.set(n, o), this._bindToInternalToExternalMap.set(o, n), this.add(o, r);
                        for (let e = 0; e < t._skippedIndexesFromExternal.length; e++) r <= t._skippedIndexesFromExternal[e] && t._skippedIndexesFromExternal[e]++
                    }
                };
                for (const n of t) o(null, n, t.getIndex(n));
                this.listenTo(t, 'add', o), this.listenTo(t, 'remove', (e, t, o) => {
                    const n = this._bindToExternalToInternalMap.get(t);
                    n && this.remove(n), this._skippedIndexesFromExternal = this._skippedIndexesFromExternal.reduce((e, t) => (o < t && e.push(t - 1), o > t && e.push(t), e), [])
                })
            }

            [Symbol.iterator]() {
                return this._items[Symbol.iterator]()
            }
        }

        f(Ac, rs);

        class Tc {
            constructor() {
                this.selection = new Cc, this.roots = new Ac({idProperty: 'rootName'}), this.set('isReadOnly', !1), this.set('isFocused', !1), this.set('isComposing', !1), this._postFixers = new Set
            }

            getRoot(e = 'main') {
                return this.roots.get(e)
            }

            registerPostFixer(e) {
                this._postFixers.add(e)
            }

            _callPostFixers(e) {
                let t = !1;
                do for (const o of this._postFixers) if (t = o(e), t) break; while (t)
            }
        }

        f(Tc, fc);
        const Pc = 10;

        class Ec extends Rd {
            constructor(e, t, o) {
                super(e, t, o), this.getFillerOffset = X, this._priority = Pc, this._id = null, this._clonesGroup = null
            }

            get priority() {
                return this._priority
            }

            get id() {
                return this._id
            }

            getElementsWithSameId() {
                if (null === this.id) throw new Ya('attribute-element-get-elements-with-same-id-no-id: Cannot get elements with the same id for an attribute element without id.');
                return new Set(this._clonesGroup)
            }

            is(e, t = null) {
                return t ? 'attributeElement' == e && t == this.name || super.is(e, t) : 'attributeElement' == e || super.is(e)
            }

            isSimilar(e) {
                return null !== this.id || null !== e.id ? this.id === e.id : super.isSimilar(e) && this.priority == e.priority
            }

            _clone(e) {
                const t = super._clone(e);
                return t._priority = this._priority, t._id = this._id, t
            }
        }

        Ec.DEFAULT_PRIORITY = Pc;

        class Sc extends Rd {
            constructor(e, t, o) {
                super(e, t, o), this.getFillerOffset = ee
            }

            is(e, t = null) {
                return t ? 'emptyElement' == e && t == this.name || super.is(e, t) : 'emptyElement' == e || super.is(e)
            }

            _insertChild(e, t) {
                if (t && (t instanceof Pd || 0 < Array.from(t).length)) throw new Ya('view-emptyelement-cannot-add: Cannot add child nodes to EmptyElement instance.')
            }
        }

        const Oc = navigator.userAgent.toLowerCase(), Rc = {
            isMac: function (e) {
                return -1 < e.indexOf('macintosh')
            }(Oc)
        };
        var Ic = Rc;
        const Vc = {"⌘": 'ctrl', "⇧": 'shift', "⌥": 'alt'}, Fc = {ctrl: '\u2318', shift: '\u21E7', alt: '\u2325'},
            Nc = function () {
                const e = {
                    arrowleft: 37,
                    arrowup: 38,
                    arrowright: 39,
                    arrowdown: 40,
                    backspace: 8,
                    delete: 46,
                    enter: 13,
                    space: 32,
                    esc: 27,
                    tab: 9,
                    ctrl: 1114112,
                    cmd: 1114112,
                    shift: 2228224,
                    alt: 4456448
                };
                for (let t = 65; 90 >= t; t++) {
                    const o = String.fromCharCode(t);
                    e[o.toLowerCase()] = t
                }
                for (let t = 48; 57 >= t; t++) e[t - 48] = t;
                for (let t = 112; 123 >= t; t++) e['f' + (t - 111)] = t;
                return e
            }();

        class Mc extends Rd {
            constructor(e, t, o) {
                super(e, t, o), this.getFillerOffset = ae
            }

            is(e, t = null) {
                return t ? 'uiElement' == e && t == this.name || super.is(e, t) : 'uiElement' == e || super.is(e)
            }

            _insertChild(e, t) {
                if (t && (t instanceof Pd || 0 < Array.from(t).length)) throw new Ya('view-uielement-cannot-add: Cannot add child nodes to UIElement instance.')
            }

            render(e) {
                return this.toDomElement(e)
            }

            toDomElement(e) {
                const t = e.createElement(this.name);
                for (const o of this.getAttributeKeys()) t.setAttribute(o, this.getAttribute(o));
                return t
            }
        }

        class Dc {
            constructor(e) {
                this._children = [], e && this._insertChild(0, e)
            }

            [Symbol.iterator]() {
                return this._children[Symbol.iterator]()
            }

            get childCount() {
                return this._children.length
            }

            get isEmpty() {
                return 0 === this.childCount
            }

            get root() {
                return this
            }

            get parent() {
                return null
            }

            is(e) {
                return 'documentFragment' == e
            }

            _appendChild(e) {
                return this._insertChild(this.childCount, e)
            }

            getChild(e) {
                return this._children[e]
            }

            getChildIndex(e) {
                return this._children.indexOf(e)
            }

            getChildren() {
                return this._children[Symbol.iterator]()
            }

            _insertChild(e, t) {
                this._fireChange('children', this);
                let o = 0;
                const n = le(t);
                for (const i of n) null !== i.parent && i._remove(), i.parent = this, this._children.splice(e, 0, i), e++, o++;
                return o
            }

            _removeChildren(e, t = 1) {
                this._fireChange('children', this);
                for (let o = e; o < e + t; o++) this._children[o].parent = null;
                return this._children.splice(e, t)
            }

            _fireChange(e, t) {
                this.fire('change:' + e, t)
            }
        }

        f(Dc, rs);

        class Bc {
            constructor(e) {
                this.document = e, this._cloneGroups = new Map
            }

            setSelection(e, t, o) {
                this.document.selection._setTo(e, t, o)
            }

            setSelectionFocus(e, t) {
                this.document.selection._setFocus(e, t)
            }

            createText(e) {
                return new Ed(e)
            }

            createAttributeElement(e, t, o = {}) {
                const n = new Ec(e, t);
                return o.priority && (n._priority = o.priority), o.id && (n._id = o.id), n
            }

            createContainerElement(e, t) {
                return new Id(e, t)
            }

            createEditableElement(e, t) {
                const o = new bc(e, t);
                return o._document = this.document, o
            }

            createEmptyElement(e, t) {
                return new Sc(e, t)
            }

            createUIElement(e, t, o) {
                const n = new Mc(e, t);
                return o && (n.render = o), n
            }

            setAttribute(e, t, o) {
                o._setAttribute(e, t)
            }

            removeAttribute(e, t) {
                t._removeAttribute(e)
            }

            addClass(e, t) {
                t._addClass(e)
            }

            removeClass(e, t) {
                t._removeClass(e)
            }

            setStyle(e, t, o) {
                $a(e) && o === void 0 && (o = t), o._setStyle(e, t)
            }

            removeStyle(e, t) {
                t._removeStyle(e)
            }

            setCustomProperty(e, t, o) {
                o._setCustomProperty(e, t)
            }

            removeCustomProperty(e, t) {
                return t._removeCustomProperty(e)
            }

            breakAttributes(e) {
                return e instanceof vc ? this._breakAttributes(e) : this._breakAttributesRange(e)
            }

            breakContainer(e) {
                const t = e.parent;
                if (!t.is('containerElement')) throw new Ya('view-writer-break-non-container-element: Trying to break an element which is not a container element.');
                if (!t.parent) throw new Ya('view-writer-break-root: Trying to break root element.');
                if (e.isAtStart) return vc.createBefore(t);
                if (!e.isAtEnd) {
                    const o = t._clone(!1);
                    this.insert(vc.createAfter(t), o);
                    const n = new yc(e, vc.createAt(t, 'end')), i = new vc(o, 0);
                    this.move(n, i)
                }
                return vc.createAfter(t)
            }

            mergeAttributes(e) {
                const t = e.offset, o = e.parent;
                if (o.is('text')) return e;
                if (o.is('attributeElement') && 0 === o.childCount) {
                    const e = o.parent, t = o.index;
                    return o._remove(), this._removeFromClonedElementsGroup(o), this.mergeAttributes(new vc(e, t))
                }
                const n = o.getChild(t - 1), i = o.getChild(t);
                if (!n || !i) return e;
                if (n.is('text') && i.is('text')) return ge(n, i);
                if (n.is('attributeElement') && i.is('attributeElement') && n.isSimilar(i)) {
                    const e = n.childCount;
                    return n._appendChild(i.getChildren()), i._remove(), this._removeFromClonedElementsGroup(i), this.mergeAttributes(new vc(n, e))
                }
                return e
            }

            mergeContainers(e) {
                const t = e.nodeBefore, o = e.nodeAfter;
                if (!t || !o || !t.is('containerElement') || !o.is('containerElement')) throw new Ya('view-writer-merge-containers-invalid-position: Element before and after given position cannot be merged.');
                const n = t.getChild(t.childCount - 1),
                    i = n instanceof Ed ? vc.createAt(n, 'end') : vc.createAt(t, 'end');
                return this.move(yc.createIn(o), vc.createAt(t, 'end')), this.remove(yc.createOn(o)), i
            }

            insert(e, t) {
                t = P(t) ? [...t] : [t], he(t);
                const o = ce(e);
                if (!o) throw new Ya('view-writer-invalid-position-container');
                const n = this._breakAttributes(e, !0), i = o._insertChild(n.offset, t);
                for (const o of t) this._addToClonedElementsGroup(o);
                const r = n.getShiftedBy(i), a = this.mergeAttributes(n);
                if (0 === i) return new yc(a, a); else {
                    a.isEqual(n) || r.offset--;
                    const e = this.mergeAttributes(r);
                    return new yc(a, e)
                }
            }

            remove(e) {
                if (ke(e), e.isCollapsed) return new Dc;
                const {start: t, end: o} = this._breakAttributesRange(e, !0), n = t.parent, i = o.offset - t.offset,
                    r = n._removeChildren(t.offset, i);
                for (const t of r) this._removeFromClonedElementsGroup(t);
                const a = this.mergeAttributes(t);
                return e.start = a, e.end = vc.createFromPosition(a), new Dc(r)
            }

            clear(e, t) {
                ke(e);
                const o = e.getWalker({direction: 'backward', ignoreElementEnd: !0});
                for (const n of o) {
                    const o = n.item;
                    let i;
                    if (o.is('element') && t.isSimilar(o)) i = yc.createOn(o); else if (!n.nextPosition.isAfter(e.start) && o.is('textProxy')) {
                        const e = o.getAncestors().find((e) => e.is('element') && t.isSimilar(e));
                        e && (i = yc.createIn(e))
                    }
                    i && (i.end.isAfter(e.end) && (i.end = e.end), i.start.isBefore(e.start) && (i.start = e.start), this.remove(i))
                }
            }

            move(e, t) {
                let o;
                if (t.isAfter(e.end)) {
                    t = this._breakAttributes(t, !0);
                    const n = t.parent, i = n.childCount;
                    e = this._breakAttributesRange(e, !0), o = this.remove(e), t.offset += n.childCount - i
                } else o = this.remove(e);
                return this.insert(t, o)
            }

            wrap(e, t) {
                if (!(t instanceof Ec)) throw new Ya('view-writer-wrap-invalid-attribute');
                if (ke(e), !e.isCollapsed) return this._wrapRange(e, t); else {
                    let o = e.start;
                    o.parent.is('element') && !de(o.parent) && (o = o.getLastMatchingPosition((e) => e.item.is('uiElement'))), o = this._wrapPosition(o, t);
                    const n = this.document.selection;
                    return n.isCollapsed && n.getFirstPosition().isEqual(e.start) && this.setSelection(o), new yc(o)
                }
            }

            unwrap(e, t) {
                if (!(t instanceof Ec)) throw new Ya('view-writer-unwrap-invalid-attribute');
                if (ke(e), e.isCollapsed) return e;
                const {start: o, end: n} = this._breakAttributesRange(e, !0);
                if (n.isEqual(o.getShiftedBy(1))) {
                    const e = o.nodeAfter;
                    if (!t.isSimilar(e) && e instanceof Ec && this._unwrapAttributeElement(t, e)) {
                        const e = this.mergeAttributes(o);
                        e.isEqual(o) || n.offset--;
                        const t = this.mergeAttributes(n);
                        return new yc(e, t)
                    }
                }
                const i = o.parent, r = this._unwrapChildren(i, o.offset, n.offset, t),
                    a = this.mergeAttributes(r.start);
                a.isEqual(r.start) || r.end.offset--;
                const s = this.mergeAttributes(r.end);
                return new yc(a, s)
            }

            rename(e, t) {
                const o = new Id(t, e.getAttributes());
                return this.insert(vc.createAfter(e), o), this.move(yc.createIn(e), vc.createAt(o)), this.remove(yc.createOn(e)), o
            }

            _wrapChildren(e, t, o, n) {
                let r = t;
                const i = [];
                for (; r < o;) {
                    const t = e.getChild(r), o = t.is('text'), a = t.is('attributeElement'), s = t.is('emptyElement'),
                        l = t.is('uiElement');
                    if (o || s || l || a && ue(n, t)) {
                        const o = n._clone();
                        t._remove(), o._appendChild(t), e._insertChild(r, o), this._addToClonedElementsGroup(o), i.push(new vc(e, r))
                    } else a && this._wrapChildren(t, 0, t.childCount, n);
                    r++
                }
                let a = 0;
                for (const r of i) {
                    if (r.offset -= a, r.offset == t) continue;
                    const e = this.mergeAttributes(r);
                    e.isEqual(r) || (a++, o--)
                }
                return yc.createFromParentsAndOffsets(e, t, e, o)
            }

            _unwrapChildren(e, t, o, n) {
                let r = t;
                const i = [];
                for (; r < o;) {
                    const t = e.getChild(r);
                    if (t.isSimilar(n)) {
                        const n = t.getChildren(), a = t.childCount;
                        t._remove(), e._insertChild(r, n), this._removeFromClonedElementsGroup(t), i.push(new vc(e, r), new vc(e, r + a)), r += a, o += a - 1
                    } else t.is('attributeElement') && this._unwrapChildren(t, 0, t.childCount, n), r++
                }
                let a = 0;
                for (const r of i) {
                    if (r.offset -= a, r.offset == t || r.offset == o) continue;
                    const e = this.mergeAttributes(r);
                    e.isEqual(r) || (a++, o--)
                }
                return yc.createFromParentsAndOffsets(e, t, e, o)
            }

            _wrapRange(e, t) {
                if (fe(e) && this._wrapAttributeElement(t, e.start.parent)) {
                    const t = e.start.parent, o = this.mergeAttributes(vc.createAfter(t)),
                        n = this.mergeAttributes(vc.createBefore(t));
                    return new yc(n, o)
                }
                const {start: o, end: n} = this._breakAttributesRange(e, !0);
                if (n.isEqual(o.getShiftedBy(1))) {
                    const e = o.nodeAfter;
                    if (e instanceof Ec && this._wrapAttributeElement(t, e)) {
                        const e = this.mergeAttributes(o);
                        e.isEqual(o) || n.offset--;
                        const t = this.mergeAttributes(n);
                        return new yc(e, t)
                    }
                }
                const i = o.parent, r = this._unwrapChildren(i, o.offset, n.offset, t),
                    a = this._wrapChildren(i, r.start.offset, r.end.offset, t), s = this.mergeAttributes(a.start);
                s.isEqual(a.start) || a.end.offset--;
                const l = this.mergeAttributes(a.end);
                return new yc(s, l)
            }

            _wrapPosition(e, t) {
                if (t.isSimilar(e.parent)) return me(vc.createFromPosition(e));
                e.parent.is('text') && (e = pe(e));
                const o = this.createAttributeElement();
                o._priority = Na, o.isSimilar = () => !1, e.parent._insertChild(e.offset, o);
                const n = new yc(e, e.getShiftedBy(1));
                this.wrap(n, t);
                const i = new vc(o.parent, o.index);
                o._remove();
                const r = i.nodeBefore, a = i.nodeAfter;
                return r instanceof Ed && a instanceof Ed ? ge(r, a) : me(i)
            }

            _wrapAttributeElement(e, t) {
                if (!_e(e, t)) return !1;
                if (e.name !== t.name || e.priority !== t.priority) return !1;
                for (const o of e.getAttributeKeys()) if ('class' !== o && 'style' !== o && t.hasAttribute(o) && t.getAttribute(o) !== e.getAttribute(o)) return !1;
                for (const o of e.getStyleNames()) if (t.hasStyle(o) && t.getStyle(o) !== e.getStyle(o)) return !1;
                for (const o of e.getAttributeKeys()) 'class' !== o && 'style' !== o && (t.hasAttribute(o) || this.setAttribute(o, e.getAttribute(o), t));
                for (const o of e.getStyleNames()) t.hasStyle(o) || this.setStyle(o, e.getStyle(o), t);
                for (const o of e.getClassNames()) t.hasClass(o) || this.addClass(o, t);
                return !0
            }

            _unwrapAttributeElement(e, t) {
                if (!_e(e, t)) return !1;
                if (e.name !== t.name || e.priority !== t.priority) return !1;
                for (const o of e.getAttributeKeys()) if ('class' !== o && 'style' !== o && (!t.hasAttribute(o) || t.getAttribute(o) !== e.getAttribute(o))) return !1;
                if (!t.hasClass(...e.getClassNames())) return !1;
                for (const o of e.getStyleNames()) if (!t.hasStyle(o) || t.getStyle(o) !== e.getStyle(o)) return !1;
                for (const o of e.getAttributeKeys()) 'class' !== o && 'style' !== o && this.removeAttribute(o, t);
                return this.removeClass(Array.from(e.getClassNames()), t), this.removeStyle(Array.from(e.getStyleNames()), t), !0
            }

            _breakAttributesRange(e, t = !1) {
                const o = e.start, n = e.end;
                if (ke(e), e.isCollapsed) {
                    const o = this._breakAttributes(e.start, t);
                    return new yc(o, o)
                }
                const i = this._breakAttributes(n, t), r = i.parent.childCount, a = this._breakAttributes(o, t);
                return i.offset += i.parent.childCount - r, new yc(a, i)
            }

            _breakAttributes(e, t = !1) {
                const o = e.offset, n = e.parent;
                if (e.parent.is('emptyElement')) throw new Ya('view-writer-cannot-break-empty-element');
                if (e.parent.is('uiElement')) throw new Ya('view-writer-cannot-break-ui-element');
                if (!t && n.is('text') && be(n.parent)) return vc.createFromPosition(e);
                if (be(n)) return vc.createFromPosition(e);
                if (n.is('text')) return this._breakAttributes(pe(e), t);
                const i = n.childCount;
                if (o == i) {
                    const e = new vc(n.parent, n.index + 1);
                    return this._breakAttributes(e, t)
                }
                if (0 === o) {
                    const e = new vc(n.parent, n.index);
                    return this._breakAttributes(e, t)
                } else {
                    const e = n.index + 1, i = n._clone();
                    n.parent._insertChild(e, i), this._addToClonedElementsGroup(i);
                    const r = n.childCount - o, a = n._removeChildren(o, r);
                    i._appendChild(a);
                    const s = new vc(n.parent, e);
                    return this._breakAttributes(s, t)
                }
            }

            _addToClonedElementsGroup(e) {
                if (!e.root.is('rootElement')) return;
                if (e.is('element')) for (const t of e.getChildren()) this._addToClonedElementsGroup(t);
                const t = e.id;
                if (!t) return;
                let o = this._cloneGroups.get(t);
                o || (o = new Set, this._cloneGroups.set(t, o)), o.add(e), e._clonesGroup = o
            }

            _removeFromClonedElementsGroup(e) {
                if (e.is('element')) for (const t of e.getChildren()) this._removeFromClonedElementsGroup(t);
                const t = e.id;
                if (t) {
                    const o = this._cloneGroups.get(t);
                    o && (o.delete(e), 0 === o.size && this._cloneGroups.delete(t))
                }
            }
        }

        const Lc = [Ed, Ec, Id, Sc, Mc], zc = (e) => {
            const t = e.createElement('br');
            return t.dataset.ckeFiller = !0, t
        }, jc = (e) => e.createTextNode('\xA0'), qc = 7;
        let Wc = '';
        for (let n = 0; n < qc; n++) Wc += '\u200B';
        const Uc = new WeakMap;

        class Hc {
            constructor(e, t) {
                this.domDocuments = new Set, this.domConverter = e, this.markedAttributes = new Set, this.markedChildren = new Set, this.markedTexts = new Set, this.selection = t, this._inlineFiller = null, this.isFocused = !1, this._fakeSelectionContainer = null
            }

            markToSync(e, t) {
                if ('text' === e) this.domConverter.mapViewToDom(t.parent) && this.markedTexts.add(t); else {
                    if (!this.domConverter.mapViewToDom(t)) return;
                    if ('attributes' === e) this.markedAttributes.add(t); else if ('children' === e) this.markedChildren.add(t); else throw new Ya('view-renderer-unknown-type: Unknown type passed to Renderer.markToSync.')
                }
            }

            render() {
                let e;
                this._inlineFiller && !this._isSelectionInInlineFiller() && this._removeInlineFiller(), this._inlineFiller ? e = this._getInlineFillerPosition() : this._needsInlineFillerAtSelection() && (e = this.selection.getFirstPosition(), this.markedChildren.add(e.parent));
                for (const e of this.markedAttributes) this._updateAttrs(e);
                for (const t of this.markedChildren) this._updateChildren(t, {inlineFillerPosition: e});
                for (const t of this.markedTexts) !this.markedChildren.has(t.parent) && this.domConverter.mapViewToDom(t.parent) && this._updateText(t, {inlineFillerPosition: e});
                if (e) {
                    const t = this.domConverter.viewPositionToDom(e), o = t.parent.ownerDocument;
                    this._inlineFiller = we(t.parent) ? t.parent : this._addInlineFiller(o, t.parent, t.offset)
                } else this._inlineFiller = null;
                this._updateSelection(), this._updateFocus(), this.markedTexts.clear(), this.markedAttributes.clear(), this.markedChildren.clear()
            }

            _addInlineFiller(e, t, o) {
                const n = t instanceof Array ? t : t.childNodes, i = n[o];
                if (Se(i)) return i.data = Wc + i.data, i; else {
                    const i = e.createTextNode(Wc);
                    return Array.isArray(t) ? n.splice(o, 0, i) : Pe(t, o, i), i
                }
            }

            _getInlineFillerPosition() {
                const e = this.selection.getFirstPosition();
                return e.parent.is('text') ? vc.createBefore(this.selection.getFirstPosition().parent) : e
            }

            _isSelectionInInlineFiller() {
                if (1 != this.selection.rangeCount || !this.selection.isCollapsed) return !1;
                const e = this.selection.getFirstPosition(), t = this.domConverter.viewPositionToDom(e);
                return !!(t && Se(t.parent) && we(t.parent))
            }

            _removeInlineFiller() {
                const e = this._inlineFiller;
                if (!we(e)) throw new Ya('view-renderer-filler-was-lost: The inline filler node was lost.');
                ve(e) ? e.parentNode.removeChild(e) : e.data = e.data.substr(qc), this._inlineFiller = null
            }

            _needsInlineFillerAtSelection() {
                if (1 != this.selection.rangeCount || !this.selection.isCollapsed) return !1;
                const e = this.selection.getFirstPosition(), t = e.parent, o = e.offset;
                if (!this.domConverter.mapViewToDom(t.root)) return !1;
                if (!t.is('element')) return !1;
                if (!Oe(t)) return !1;
                if (o === t.getFillerOffset()) return !1;
                const n = e.nodeBefore, i = e.nodeAfter;
                return !(n instanceof Ed || i instanceof Ed)
            }

            _updateText(e, t) {
                const o = this.domConverter.findCorrespondingDomText(e),
                    n = this.domConverter.viewToDom(e, o.ownerDocument), i = o.data;
                let r = n.data;
                const a = t.inlineFillerPosition;
                a && a.parent == e.parent && a.offset == e.index && (r = Wc + r), i != r && (o.data = r)
            }

            _updateAttrs(e) {
                const t = this.domConverter.mapViewToDom(e), o = Array.from(t.attributes).map((e) => e.name),
                    n = e.getAttributeKeys();
                for (const o of n) t.setAttribute(o, e.getAttribute(o));
                for (const n of o) e.hasAttribute(n) || t.removeAttribute(n)
            }

            _updateChildren(e, t) {
                function o(e, t) {
                    if (e === t) return !0;
                    return Se(e) && Se(t) ? e.data === t.data : !!(xe(e, n.blockFiller) && xe(t, n.blockFiller))
                }

                const n = this.domConverter, r = n.mapViewToDom(e);
                if (r) {
                    const a = r.ownerDocument, s = t.inlineFillerPosition, l = r.childNodes,
                        d = Array.from(n.viewChildrenToDom(e, a, {bind: !0}));
                    s && s.parent == e && this._addInlineFiller(a, d, s.offset);
                    const c = Te(l, d, o);
                    let u = 0;
                    const i = new Set;
                    for (const e of c) 'insert' === e ? (Pe(r, u, d[u]), u++) : 'delete' === e ? (i.add(l[u]), Ee(l[u])) : (this._markDescendantTextToSync(n.domToView(d[u])), u++);
                    for (const e of i) e.parentNode || this.domConverter.unbindDomElement(e)
                }
            }

            _markDescendantTextToSync(e) {
                if (e) if (e.is('text')) this.markedTexts.add(e); else if (e.is('element')) for (const t of e.getChildren()) this._markDescendantTextToSync(t)
            }

            _updateSelection() {
                if (0 === this.selection.rangeCount) return this._removeDomSelection(), void this._removeFakeSelection();
                const e = this.domConverter.mapViewToDom(this.selection.editableElement);
                this.isFocused && e && (this.selection.isFake ? this._updateFakeSelection(e) : (this._removeFakeSelection(), this._updateDomSelection(e)))
            }

            _updateFakeSelection(e) {
                const t = e.ownerDocument;
                let o = this._fakeSelectionContainer;
                o || (this._fakeSelectionContainer = o = t.createElement('div'), Object.assign(o.style, {
                    position: 'fixed',
                    top: 0,
                    left: '-9999px',
                    width: '42px'
                }), o.appendChild(t.createTextNode('\xA0'))), o.parentElement || e.appendChild(o), o.firstChild.data = this.selection.fakeSelectionLabel || '\xA0';
                const n = t.getSelection(), i = t.createRange();
                n.removeAllRanges(), i.selectNodeContents(o), n.addRange(i), this.domConverter.bindFakeSelection(o, this.selection)
            }

            _updateDomSelection(e) {
                const t = e.ownerDocument.defaultView.getSelection();
                if (this._domSelectionNeedsUpdate(t)) {
                    const o = this.domConverter.viewPositionToDom(this.selection.anchor),
                        n = this.domConverter.viewPositionToDom(this.selection.focus);
                    e.focus(), t.collapse(o.parent, o.offset), t.extend(n.parent, n.offset)
                }
            }

            _domSelectionNeedsUpdate(e) {
                if (!this.domConverter.isDomSelectionCorrect(e)) return !0;
                const t = e && this.domConverter.domSelectionToView(e);
                return !(t && this.selection.isEqual(t)) && (this.selection.isCollapsed || !this.selection.isSimilar(t))
            }

            _removeDomSelection() {
                for (const e of this.domDocuments) {
                    const t = e.getSelection();
                    if (t.rangeCount) {
                        const t = e.activeElement, o = this.domConverter.mapDomToView(t);
                        t && o && e.getSelection().removeAllRanges()
                    }
                }
            }

            _removeFakeSelection() {
                const e = this._fakeSelectionContainer;
                e && e.remove()
            }

            _updateFocus() {
                if (this.isFocused) {
                    const e = this.selection.editableElement;
                    e && this.domConverter.focus(e)
                }
            }
        }

        f(Hc, fc);
        var Kc = {window, document};

        class Gc {
            constructor(e = {}) {
                this.blockFiller = e.blockFiller || zc, this.preElements = ['pre'], this.blockElements = ['p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'], this._domToViewMapping = new WeakMap, this._viewToDomMapping = new WeakMap, this._fakeSelectionMapping = new WeakMap
            }

            bindFakeSelection(e, t) {
                this._fakeSelectionMapping.set(e, new xc(t))
            }

            fakeSelectionToView(e) {
                return this._fakeSelectionMapping.get(e)
            }

            bindElements(e, t) {
                this._domToViewMapping.set(e, t), this._viewToDomMapping.set(t, e)
            }

            unbindDomElement(e) {
                const t = this._domToViewMapping.get(e);
                if (t) {
                    this._domToViewMapping.delete(e), this._viewToDomMapping.delete(t);
                    for (const t of Array.from(e.childNodes)) this.unbindDomElement(t)
                }
            }

            bindDocumentFragments(e, t) {
                this._domToViewMapping.set(e, t), this._viewToDomMapping.set(t, e)
            }

            viewToDom(e, t, o = {}) {
                if (e.is('text')) {
                    const o = this._processDataFromViewText(e);
                    return t.createTextNode(o)
                } else {
                    if (this.mapViewToDom(e)) return this.mapViewToDom(e);
                    let n;
                    if (e.is('documentFragment')) n = t.createDocumentFragment(), o.bind && this.bindDocumentFragments(n, e); else {
                        if (e.is('uiElement')) return n = e.render(t), o.bind && this.bindElements(n, e), n;
                        n = t.createElement(e.name), o.bind && this.bindElements(n, e);
                        for (const t of e.getAttributeKeys()) n.setAttribute(t, e.getAttribute(t))
                    }
                    if (o.withChildren || void 0 === o.withChildren) for (const i of this.viewChildrenToDom(e, t, o)) n.appendChild(i);
                    return n
                }
            }

            * viewChildrenToDom(e, t, o = {}) {
                const n = e.getFillerOffset && e.getFillerOffset();
                let i = 0;
                for (const r of e.getChildren()) n === i && (yield this.blockFiller(t)), yield this.viewToDom(r, t, o), i++;
                n === i && (yield this.blockFiller(t))
            }

            viewRangeToDom(e) {
                const t = this.viewPositionToDom(e.start), o = this.viewPositionToDom(e.end),
                    n = document.createRange();
                return n.setStart(t.parent, t.offset), n.setEnd(o.parent, o.offset), n
            }

            viewPositionToDom(e) {
                const t = e.parent;
                if (t.is('text')) {
                    const o = this.findCorrespondingDomText(t);
                    if (!o) return null;
                    let n = e.offset;
                    return we(o) && (n += qc), {parent: o, offset: n}
                } else {
                    let o, n, i;
                    if (0 === e.offset) {
                        if (o = this.mapViewToDom(t), !o) return null;
                        i = o.childNodes[0]
                    } else {
                        const t = e.nodeBefore;
                        if (n = t.is('text') ? this.findCorrespondingDomText(t) : this.mapViewToDom(e.nodeBefore), !n) return null;
                        o = n.parentNode, i = n.nextSibling
                    }
                    if (Se(i) && we(i)) return {parent: i, offset: qc};
                    const r = n ? Re(n) + 1 : 0;
                    return {parent: o, offset: r}
                }
            }

            domToView(e, t = {}) {
                if (xe(e, this.blockFiller)) return null;
                const o = this.getParentUIElement(e, this._domToViewMapping);
                if (o) return o;
                if (Se(e)) {
                    if (ve(e)) return null; else {
                        const t = this._processDataFromDomText(e);
                        return '' === t ? null : new Ed(t)
                    }
                } else if (this.isComment(e)) return null; else {
                    if (this.mapDomToView(e)) return this.mapDomToView(e);
                    let o;
                    if (this.isDocumentFragment(e)) o = new Dc, t.bind && this.bindDocumentFragments(e, o); else {
                        const n = t.keepOriginalCase ? e.tagName : e.tagName.toLowerCase();
                        o = new Rd(n), t.bind && this.bindElements(e, o);
                        const r = e.attributes;
                        for (let e = r.length - 1; 0 <= e; e--) o._setAttribute(r[e].name, r[e].value)
                    }
                    if (t.withChildren || void 0 === t.withChildren) for (const n of this.domChildrenToView(e, t)) o._appendChild(n);
                    return o
                }
            }

            * domChildrenToView(e, t = {}) {
                for (let o = 0; o < e.childNodes.length; o++) {
                    const n = e.childNodes[o], i = this.domToView(n, t);
                    null !== i && (yield i)
                }
            }

            domSelectionToView(e) {
                if (1 === e.rangeCount) {
                    let t = e.getRangeAt(0).startContainer;
                    Se(t) && (t = t.parentNode);
                    const o = this.fakeSelectionToView(t);
                    if (o) return o
                }
                const t = this.isDomSelectionBackward(e), o = [];
                for (let t = 0; t < e.rangeCount; t++) {
                    const n = e.getRangeAt(t), i = this.domRangeToView(n);
                    i && o.push(i)
                }
                return new xc(o, {backward: t})
            }

            domRangeToView(e) {
                const t = this.domPositionToView(e.startContainer, e.startOffset),
                    o = this.domPositionToView(e.endContainer, e.endOffset);
                return t && o ? new yc(t, o) : null
            }

            domPositionToView(e, t) {
                if (xe(e, this.blockFiller)) return this.domPositionToView(e.parentNode, Re(e));
                const o = this.mapDomToView(e);
                if (o && o.is('uiElement')) return vc.createBefore(o);
                if (Se(e)) {
                    if (ve(e)) return this.domPositionToView(e.parentNode, Re(e));
                    const o = this.findCorrespondingViewText(e);
                    let n = t;
                    return o ? (we(e) && (n -= qc, n = 0 > n ? 0 : n), new vc(o, n)) : null
                }
                if (0 === t) {
                    const t = this.mapDomToView(e);
                    if (t) return new vc(t, 0)
                } else {
                    const o = e.childNodes[t - 1], n = Se(o) ? this.findCorrespondingViewText(o) : this.mapDomToView(o);
                    if (n && n.parent) return new vc(n.parent, n.index + 1)
                }
                return null
            }

            mapDomToView(e) {
                return this.getParentUIElement(e) || this._domToViewMapping.get(e)
            }

            findCorrespondingViewText(e) {
                if (ve(e)) return null;
                const t = this.getParentUIElement(e);
                if (t) return t;
                const o = e.previousSibling;
                if (o) {
                    if (!this.isElement(o)) return null;
                    const e = this.mapDomToView(o);
                    if (e) {
                        const t = e.nextSibling;
                        return t instanceof Ed ? e.nextSibling : null
                    }
                } else {
                    const t = this.mapDomToView(e.parentNode);
                    if (t) {
                        const e = t.getChild(0);
                        return e instanceof Ed ? e : null
                    }
                }
                return null
            }

            mapViewToDom(e) {
                return this._viewToDomMapping.get(e)
            }

            findCorrespondingDomText(e) {
                const t = e.previousSibling;
                return t && this.mapViewToDom(t) ? this.mapViewToDom(t).nextSibling : !t && e.parent && this.mapViewToDom(e.parent) ? this.mapViewToDom(e.parent).childNodes[0] : null
            }

            focus(e) {
                const t = this.mapViewToDom(e);
                if (t && t.ownerDocument.activeElement !== t) {
                    const {scrollX: e, scrollY: o} = Kc.window, n = [];
                    Ne(t, (e) => {
                        const {scrollLeft: t, scrollTop: o} = e;
                        n.push([t, o])
                    }), t.focus(), Ne(t, (e) => {
                        const [t, o] = n.shift();
                        e.scrollLeft = t, e.scrollTop = o
                    }), Kc.window.scrollTo(e, o)
                }
            }

            isElement(e) {
                return e && e.nodeType == Node.ELEMENT_NODE
            }

            isDocumentFragment(e) {
                return e && e.nodeType == Node.DOCUMENT_FRAGMENT_NODE
            }

            isComment(e) {
                return e && e.nodeType == Node.COMMENT_NODE
            }

            isDomSelectionBackward(e) {
                if (e.isCollapsed) return !1;
                const t = document.createRange();
                t.setStart(e.anchorNode, e.anchorOffset), t.setEnd(e.focusNode, e.focusOffset);
                const o = t.collapsed;
                return t.detach(), o
            }

            getParentUIElement(e) {
                const t = Ie(e);
                for (t.pop(); t.length;) {
                    const e = t.pop(), o = this._domToViewMapping.get(e);
                    if (o && o.is('uiElement')) return o
                }
                return null
            }

            isDomSelectionCorrect(e) {
                return this._isDomSelectionPositionCorrect(e.anchorNode, e.anchorOffset) && this._isDomSelectionPositionCorrect(e.focusNode, e.focusOffset)
            }

            _isDomSelectionPositionCorrect(e, t) {
                if (Se(e) && we(e) && t < qc) return !1;
                if (this.isElement(e) && we(e.childNodes[t])) return !1;
                const o = this.mapDomToView(e);
                return !(o && o.is('uiElement'))
            }

            _processDataFromViewText(e) {
                let t = e.data;
                if (e.getAncestors().some((e) => this.preElements.includes(e.name))) return t;
                if (' ' == t.charAt(0)) {
                    const o = this._getTouchingViewTextNode(e, !1), n = o && this._nodeEndsWithSpace(o);
                    (n || !o) && (t = '\xA0' + t.substr(1))
                }
                if (' ' == t.charAt(t.length - 1)) {
                    const o = this._getTouchingViewTextNode(e, !0);
                    o || (t = t.substr(0, t.length - 1) + '\xA0')
                }
                return t.replace(/ {2}/g, ' \xA0')
            }

            _nodeEndsWithSpace(e) {
                if (e.getAncestors().some((e) => this.preElements.includes(e.name))) return !1;
                const t = this._processDataFromViewText(e);
                return ' ' == t.charAt(t.length - 1)
            }

            _processDataFromDomText(e) {
                let t = e.data;
                if (Fe(e, this.preElements)) return ye(e);
                t = t.replace(/[ \n\t\r]{1,}/g, ' ');
                const o = this._getTouchingDomTextNode(e, !1), n = this._getTouchingDomTextNode(e, !0);
                return (!o || /[^\S\u00A0]/.test(o.data.charAt(o.data.length - 1))) && (t = t.replace(/^ /, '')), n || we(e) || (t = t.replace(/ $/, '')), t = ye(new Text(t)), t = t.replace(/ \u00A0/g, '  '), (!o || /[^\S\u00A0]/.test(o.data.charAt(o.data.length - 1))) && (t = t.replace(/^\u00A0/, ' ')), n && '\xA0' != n.data.charAt(0) || (t = t.replace(/\u00A0( *)$/, ' $1')), t
            }

            _getTouchingViewTextNode(e, t) {
                const o = new wc({
                    startPosition: t ? vc.createAfter(e) : vc.createBefore(e),
                    direction: t ? 'forward' : 'backward'
                });
                for (const n of o) {
                    if (n.item.is('containerElement')) return null;
                    if (n.item.is('textProxy')) return n.item
                }
                return null
            }

            _getTouchingDomTextNode(e, t) {
                if (!e.parentNode) return null;
                const o = t ? 'nextNode' : 'previousNode', n = e.ownerDocument, i = Ie(e)[0],
                    r = n.createTreeWalker(i, NodeFilter.SHOW_TEXT);
                r.currentNode = e;
                const a = r[o]();
                if (null !== a) {
                    const t = Ve(e, a);
                    if (t && !Fe(e, this.blockElements, t) && !Fe(a, this.blockElements, t)) return a
                }
                return null
            }
        }

        const $c = cc({}, rs, {
            listenTo(e, ...t) {
                if (Me(e) || De(e)) {
                    const o = this._getProxyEmitter(e) || new Qc(e);
                    o.attach(...t), e = o
                }
                rs.listenTo.call(this, e, ...t)
            }, stopListening(e, t, o) {
                if (Me(e) || De(e)) {
                    const t = this._getProxyEmitter(e);
                    if (!t) return;
                    e = t
                }
                rs.stopListening.call(this, e, t, o), e instanceof Qc && e.detach(t)
            }, _getProxyEmitter(e) {
                return r(this, Be(e))
            }
        });
        var Jc = $c;

        class Qc {
            constructor(e) {
                a(this, Be(e)), this._domNode = e
            }
        }

        cc(Qc.prototype, rs, {
            attach(e, t, o = {}) {
                if (!(this._domListeners && this._domListeners[e])) {
                    const t = this._createDomListener(e, !!o.useCapture);
                    this._domNode.addEventListener(e, t, !!o.useCapture), this._domListeners || (this._domListeners = {}), this._domListeners[e] = t
                }
            }, detach(e) {
                let t;
                !this._domListeners[e] || (t = this._events[e]) && t.callbacks.length || this._domListeners[e].removeListener()
            }, _createDomListener(e, t) {
                const o = (t) => {
                    this.fire(e, t)
                };
                return o.removeListener = () => {
                    this._domNode.removeEventListener(e, o, t), delete this._domListeners[e]
                }, o
            }
        });

        class Yc {
            constructor(e) {
                this.view = e, this.document = e.document, this.isEnabled = !1
            }

            enable() {
                this.isEnabled = !0
            }

            disable() {
                this.isEnabled = !1
            }

            destroy() {
                this.disable(), this.stopListening()
            }
        }

        f(Yc, Jc);
        Le.prototype.add = Le.prototype.push = function (e) {
            return this.__data__.set(e, '__lodash_hash_undefined__'), this
        }, Le.prototype.has = function (e) {
            return this.__data__.has(e)
        };
        var Xc = Le, Zc = function (e, t) {
            for (var o = -1, n = e.length; ++o < n;) if (t(e[o], o, e)) return !0;
            return !1
        }, eu = function (e, t, o, n, i, r) {
            var a = i & 2, s = e.length, l = t.length;
            if (s != l && !(a && l > s)) return !1;
            var d = r.get(e);
            if (d) return d == t;
            var c = -1, u = !0, m = i & 1 ? new Xc : void 0;
            for (r.set(e, t); ++c < s;) {
                var p = e[c], g = t[c];
                if (n) var f = a ? n(g, p, c, t, e, r) : n(p, g, c, e, t, r);
                if (void 0 !== f) {
                    if (f) continue;
                    u = !1;
                    break
                }
                if (m) {
                    if (!Zc(t, function (e, t) {
                        if (!m.has(t) && (p === e || o(p, e, n, i, r))) return m.add(t)
                    })) {
                        u = !1;
                        break
                    }
                } else if (!(p === g || o(p, g, n, i, r))) {
                    u = !1;
                    break
                }
            }
            return r['delete'](e), u
        }, tu = cd ? cd.prototype : void 0, ou = tu ? tu.valueOf : void 0, nu = function (e, t, o, n, i, r, a) {
            switch (o) {
                case'[object DataView]':
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case'[object ArrayBuffer]':
                    return !!(e.byteLength == t.byteLength && n(new Yl(e), new Yl(t)));
                case'[object Boolean]':
                case'[object Date]':
                    return +e == +t;
                case'[object Error]':
                    return e.name == t.name && e.message == t.message;
                case'[object Number]':
                    return e == +e ? e == +t : t != +t;
                case'[object RegExp]':
                case'[object String]':
                    return e == t + '';
                case'[object Map]':
                    var s = od;
                case'[object Set]':
                    var l = r & 2;
                    if (s || (s = sd), e.size != t.size && !l) return !1;
                    var d = a.get(e);
                    return d ? d == t : (r |= 1, a.set(e, t), eu(s(e), s(t), n, i, r, a));
                case'[object Symbol]':
                    if (ou) return ou.call(e) == ou.call(t);
            }
            return !1
        }, iu = 2, ru = {};
        ru['[object Float32Array]'] = ru['[object Float64Array]'] = ru['[object Int8Array]'] = ru['[object Int16Array]'] = ru['[object Int32Array]'] = ru['[object Uint8Array]'] = ru['[object Uint8ClampedArray]'] = ru['[object Uint16Array]'] = ru['[object Uint32Array]'] = !0, ru['[object Arguments]'] = ru['[object Array]'] = ru['[object ArrayBuffer]'] = ru['[object Boolean]'] = ru['[object DataView]'] = ru['[object Date]'] = ru['[object Error]'] = ru['[object Function]'] = ru['[object Map]'] = ru['[object Number]'] = ru['[object Object]'] = ru['[object RegExp]'] = ru['[object Set]'] = ru['[object String]'] = ru['[object WeakMap]'] = !1;
        var au = Object.prototype, su = au.toString, lu = function (e) {
                return qa(e) && Xs(e.length) && !!ru[su.call(e)]
            }, du = '[object Arguments]', cu = '[object Array]', uu = '[object Object]', mu = Object.prototype,
            pu = mu.hasOwnProperty, gu = function (e, t, o, n, i, r) {
                var a = sl(e), s = sl(t), l = cu, d = cu;
                a || (l = Kl(e), l = l == du ? uu : l), s || (d = Kl(t), d = d == du ? uu : d);
                var c = l == uu && !ja(e), u = d == uu && !ja(t), m = l == d;
                if (m && !c) return r || (r = new Bs), a || lu(e) ? eu(e, t, o, n, i, r) : nu(e, t, l, o, n, i, r);
                if (!(i & 2)) {
                    var p = c && pu.call(e, '__wrapped__'), g = u && pu.call(t, '__wrapped__');
                    if (p || g) {
                        var f = p ? e.value() : e, h = g ? t.value() : t;
                        return r || (r = new Bs), o(f, h, n, i, r)
                    }
                }
                return !!m && (r || (r = new Bs), ze(e, t, o, n, i, r))
            }, fu = je, hu = function (e, t, o) {
                o = 'function' == typeof o ? o : void 0;
                var n = o ? o(e, t) : void 0;
                return n === void 0 ? fu(e, t, o) : !!n
            };

        class bu extends Yc {
            constructor(e) {
                super(e), this._config = {
                    childList: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    subtree: !0
                }, this.domConverter = e.domConverter, this.renderer = e._renderer, this._domElements = [], this._mutationObserver = new window.MutationObserver(this._onMutations.bind(this))
            }

            flush() {
                this._onMutations(this._mutationObserver.takeRecords())
            }

            observe(e) {
                this._domElements.push(e), this.isEnabled && this._mutationObserver.observe(e, this._config)
            }

            enable() {
                super.enable();
                for (const e of this._domElements) this._mutationObserver.observe(e, this._config)
            }

            disable() {
                super.disable(), this._mutationObserver.disconnect()
            }

            destroy() {
                super.destroy(), this._mutationObserver.disconnect()
            }

            _onMutations(e) {
                function t(e, t) {
                    if (!Array.isArray(e)) return e === t || !!(e.is('text') && t.is('text')) && e.data === t.data
                }

                if (0 === e.length) return;
                const o = this.domConverter, n = new Map, i = new Set;
                for (const t of e) if ('childList' === t.type) {
                    const e = o.mapDomToView(t.target);
                    if (e && e.is('uiElement')) continue;
                    e && !this._isBogusBrMutation(t) && i.add(e)
                }
                for (const t of e) {
                    const e = o.mapDomToView(t.target);
                    if (!(e && e.is('uiElement')) && 'characterData' === t.type) {
                        const e = o.findCorrespondingViewText(t.target);
                        e && !i.has(e.parent) ? n.set(e, {
                            type: 'text',
                            oldText: e.data,
                            newText: ye(t.target),
                            node: e
                        }) : !e && we(t.target) && i.add(o.mapDomToView(t.target.parentNode))
                    }
                }
                const r = [];
                for (const t of n.values()) this.renderer.markToSync('text', t.node), r.push(t);
                for (const n of i) {
                    const e = o.mapViewToDom(n), i = Array.from(n.getChildren()),
                        a = Array.from(o.domChildrenToView(e, {withChildren: !1}));
                    hu(i, a, t) || (this.renderer.markToSync('children', n), r.push({
                        type: 'children',
                        oldChildren: i,
                        newChildren: a,
                        node: n
                    }))
                }
                const a = e[0].target.ownerDocument.getSelection();
                let s = null;
                if (a && a.anchorNode) {
                    const e = o.domPositionToView(a.anchorNode, a.anchorOffset),
                        t = o.domPositionToView(a.focusNode, a.focusOffset);
                    e && t && (s = new xc(e), s.setFocus(t))
                }
                this.document.fire('mutations', r, s), this.view.render()
            }

            _isBogusBrMutation(e) {
                let t = null;
                return null === e.nextSibling && 0 === e.removedNodes.length && 1 == e.addedNodes.length && (t = this.domConverter.domToView(e.addedNodes[0], {withChildren: !1})), t && t.is('element', 'br')
            }
        }

        class ku {
            constructor(e, t, o) {
                this.view = e, this.document = e.document, this.domEvent = t, this.domTarget = t.target, cc(this, o)
            }

            get target() {
                return this.view.domConverter.mapDomToView(this.domTarget)
            }

            preventDefault() {
                this.domEvent.preventDefault()
            }

            stopPropagation() {
                this.domEvent.stopPropagation()
            }
        }

        class _u extends Yc {
            constructor(e) {
                super(e), this.useCapture = !1
            }

            observe(e) {
                const t = 'string' == typeof this.domEventType ? [this.domEventType] : this.domEventType;
                t.forEach((t) => {
                    this.listenTo(e, t, (e, t) => {
                        this.isEnabled && this.onDomEvent(t)
                    }, {useCapture: this.useCapture})
                })
            }

            fire(e, t, o) {
                this.isEnabled && this.document.fire(e, new ku(this.view, t, o))
            }
        }

        class wu extends _u {
            constructor(e) {
                super(e), this.domEventType = ['keydown', 'keyup']
            }

            onDomEvent(e) {
                this.fire(e.type, e, {
                    keyCode: e.keyCode,
                    altKey: e.altKey,
                    ctrlKey: e.ctrlKey || e.metaKey,
                    shiftKey: e.shiftKey,
                    get keystroke() {
                        return te(this)
                    }
                })
            }
        }

        var vu = Date.now, yu = vu, xu = 'Expected a function', Cu = Ma, Au = Da, Tu = qe;

        class Pu extends Yc {
            constructor(e) {
                super(e), this._fireSelectionChangeDoneDebounced = Tu((e) => this.document.fire('selectionChangeDone', e), 200)
            }

            observe() {
                const e = this.document;
                e.on('keydown', (t, o) => {
                    const n = e.selection;
                    n.isFake && We(o.keyCode) && this.isEnabled && (o.preventDefault(), this._handleSelectionMove(o.keyCode))
                }, {priority: 'lowest'})
            }

            destroy() {
                super.destroy(), this._fireSelectionChangeDoneDebounced.cancel()
            }

            _handleSelectionMove(e) {
                const t = this.document.selection, o = new xc(t.getRanges(), {backward: t.isBackward, fake: !1});
                (e == Nc.arrowleft || e == Nc.arrowup) && o.setTo(o.getFirstPosition()), (e == Nc.arrowright || e == Nc.arrowdown) && o.setTo(o.getLastPosition());
                const n = {oldSelection: t, newSelection: o, domSelection: null};
                this.document.fire('selectionChange', n), this._fireSelectionChangeDoneDebounced(n)
            }
        }

        const Eu = {
            error(e, t) {
                console.error(n(e), t)
            }, warn(e, t) {
                console.warn(n(e), t)
            }
        };
        var Su = Eu;

        class Ou extends Yc {
            constructor(e) {
                super(e), this.mutationObserver = e.getObserver(bu), this.selection = this.document.selection, this.domConverter = e.domConverter, this._documents = new WeakSet, this._fireSelectionChangeDoneDebounced = Tu((e) => this.document.fire('selectionChangeDone', e), 200), this._clearInfiniteLoopInterval = setInterval(() => this._clearInfiniteLoop(), 1e3), this._loopbackCounter = 0
            }

            observe(e) {
                const t = e.ownerDocument;
                this._documents.has(t) || (this.listenTo(t, 'selectionchange', () => {
                    this._handleSelectionChange(t)
                }), this._documents.add(t))
            }

            destroy() {
                super.destroy(), clearInterval(this._clearInfiniteLoopInterval), this._fireSelectionChangeDoneDebounced.cancel()
            }

            _handleSelectionChange(e) {
                if (this.isEnabled && (this.document.isFocused || this.document.isReadOnly)) {
                    this.mutationObserver.flush();
                    const t = e.defaultView.getSelection(), o = this.domConverter.domSelectionToView(t);
                    if (!(this.selection.isEqual(o) && this.domConverter.isDomSelectionCorrect(t))) {
                        if (60 < ++this._loopbackCounter) return void Su.warn('selectionchange-infinite-loop: Selection change observer detected an infinite rendering loop.');
                        if (this.selection.isSimilar(o)) this.view.render(); else {
                            const e = {oldSelection: this.selection, newSelection: o, domSelection: t};
                            this.document.fire('selectionChange', e), this._fireSelectionChangeDoneDebounced(e)
                        }
                    }
                }
            }

            _clearInfiniteLoop() {
                this._loopbackCounter = 0
            }
        }

        class Ru extends _u {
            constructor(e) {
                super(e), this.domEventType = ['focus', 'blur'], this.useCapture = !0;
                const t = this.document;
                t.on('focus', () => {
                    t.isFocused = !0, this._renderTimeoutId = setTimeout(() => e.render(), 50)
                }), t.on('blur', (o, n) => {
                    const i = t.selection.editableElement;
                    (null === i || i === n.target) && (t.isFocused = !1, e.render())
                })
            }

            onDomEvent(e) {
                this.fire(e.type, e)
            }

            destroy() {
                this._renderTimeoutId && clearTimeout(this._renderTimeoutId), super.destroy()
            }
        }

        class Iu extends _u {
            constructor(e) {
                super(e), this.domEventType = ['compositionstart', 'compositionupdate', 'compositionend'];
                const t = this.document;
                t.on('compositionstart', () => {
                    t.isComposing = !0
                }), t.on('compositionend', () => {
                    t.isComposing = !1
                })
            }

            onDomEvent(e) {
                this.fire(e.type, e)
            }
        }

        var Vu = function (e) {
            return !!e && 1 === e.nodeType && qa(e) && !$a(e)
        };

        class Fu {
            constructor(e) {
                const t = Ue(e);
                if (Object.defineProperty(this, '_source', {
                    value: e._source || e,
                    writable: !0,
                    enumerable: !1
                }), Vu(e) || t) {
                    const o = t ? e.startContainer : e;
                    o.ownerDocument && o.ownerDocument.body.contains(o) || Su.warn('rect-source-not-in-dom: The source of this rect does not belong to any rendered DOM tree.', {source: e}), t ? Ke(this, Fu.getDomRangeRects(e)[0]) : Ke(this, e.getBoundingClientRect())
                } else if (De(e)) {
                    const {innerWidth: t, innerHeight: o} = e;
                    Ke(this, {top: 0, right: t, bottom: o, left: 0, width: t, height: o})
                } else Ke(this, e)
            }

            clone() {
                return new Fu(this)
            }

            moveTo(e, t) {
                return this.top = t, this.right = e + this.width, this.bottom = t + this.height, this.left = e, this
            }

            moveBy(e, t) {
                return this.top += t, this.right += e, this.left += e, this.bottom += t, this
            }

            getIntersection(e) {
                const t = {
                    top: Ma(this.top, e.top),
                    right: Da(this.right, e.right),
                    bottom: Da(this.bottom, e.bottom),
                    left: Ma(this.left, e.left)
                };
                return t.width = t.right - t.left, t.height = t.bottom - t.top, 0 > t.width || 0 > t.height ? null : new Fu(t)
            }

            getIntersectionArea(e) {
                const t = this.getIntersection(e);
                return t ? t.getArea() : 0
            }

            getArea() {
                return this.width * this.height
            }

            getVisible() {
                const e = this._source;
                let t = this.clone();
                if (!Ge(e)) for (let o = e.parentNode || e.commonAncestorContainer; o && !Ge(o);) {
                    const e = new Fu(o), n = t.getIntersection(e);
                    if (n) n.getArea() < t.getArea() && (t = n); else return null;
                    o = o.parentNode
                }
                return t
            }

            isEqual(e) {
                for (const t of Nu) if (this[t] !== e[t]) return !1;
                return !0
            }

            contains(e) {
                const t = this.getIntersection(e);
                return !!(t && t.isEqual(e))
            }

            excludeScrollbarsAndBorders() {
                const e = this._source;
                let t, o;
                if (De(e)) t = e.innerWidth - e.document.documentElement.clientWidth, o = e.innerHeight - e.document.documentElement.clientHeight; else {
                    const n = He(this._source);
                    t = e.offsetWidth - e.clientWidth, o = e.offsetHeight - e.clientHeight, this.moveBy(n.left, n.top)
                }
                return this.width -= t, this.right -= t, this.height -= o, this.bottom -= o, this
            }

            static getDomRangeRects(e) {
                const t = [], o = Array.from(e.getClientRects());
                if (o.length) for (const e of o) t.push(new Fu(e)); else {
                    let o = e.startContainer;
                    Se(o) && (o = o.parentNode);
                    const n = new Fu(o.getBoundingClientRect());
                    n.right = n.left, n.width = 0, t.push(n)
                }
                return t
            }
        }

        const Nu = ['top', 'right', 'bottom', 'left', 'width', 'height'];
        Object.assign({}, {
            scrollViewportToShowTarget: $e, scrollAncestorsToShowTarget: function (e) {
                const t = nt(e);
                Qe(t, () => new Fu(e))
            }
        });

        class Mu {
            constructor() {
                this.document = new Tc, this.domConverter = new Gc, this._renderer = new Hc(this.domConverter, this.document.selection), this._renderer.bind('isFocused').to(this.document), this.domRoots = new Map, this._observers = new Map, this._ongoingChange = !1, this._renderingInProgress = !1, this._postFixersInProgress = !1, this._writer = new Bc(this.document), this.addObserver(bu), this.addObserver(Ou), this.addObserver(Ru), this.addObserver(wu), this.addObserver(Pu), this.addObserver(Iu), Ce(this), re(this), this.on('render', () => {
                    this._render()
                })
            }

            attachDomRoot(e, t = 'main') {
                const o = this.document.getRoot(t);
                o._name = e.tagName.toLowerCase(), this.domRoots.set(t, e), this.domConverter.bindElements(e, o), this._renderer.markToSync('children', o), this._renderer.domDocuments.add(e.ownerDocument), o.on('change:children', (e, t) => this._renderer.markToSync('children', t)), o.on('change:attributes', (e, t) => this._renderer.markToSync('attributes', t)), o.on('change:text', (e, t) => this._renderer.markToSync('text', t));
                for (const o of this._observers.values()) o.observe(e, t)
            }

            getDomRoot(e = 'main') {
                return this.domRoots.get(e)
            }

            addObserver(e) {
                let t = this._observers.get(e);
                if (t) return t;
                t = new e(this), this._observers.set(e, t);
                for (const [o, n] of this.domRoots) t.observe(n, o);
                return t.enable(), t
            }

            getObserver(e) {
                return this._observers.get(e)
            }

            disableObservers() {
                for (const e of this._observers.values()) e.disable()
            }

            enableObservers() {
                for (const e of this._observers.values()) e.enable()
            }

            scrollToTheSelection() {
                const e = this.document.selection.getFirstRange();
                e && $e({target: this.domConverter.viewRangeToDom(e), viewportOffset: 20})
            }

            focus() {
                if (!this.document.isFocused) {
                    const e = this.document.selection.editableElement;
                    e ? (this.domConverter.focus(e), this.render()) : Su.warn('view-focus-no-selection: There is no selection in any editable to focus.')
                }
            }

            change(e) {
                if (this._renderingInProgress || this._postFixersInProgress) throw new Ya('cannot-change-view-tree: Attempting to make changes to the view when it is in incorrect state: rendering or post fixers are in progress. This may cause some unexpected behaviour and inconsistency between the DOM and the view.');
                return this._ongoingChange ? void e(this._writer) : void (this._ongoingChange = !0, e(this._writer), this._ongoingChange = !1, this._postFixersInProgress = !0, this.document._callPostFixers(this._writer), this._postFixersInProgress = !1, this.fire('render'))
            }

            render() {
                this.change(() => {
                })
            }

            destroy() {
                for (const e of this._observers.values()) e.destroy();
                this.stopListening()
            }

            _render() {
                this._renderingInProgress = !0, this.disableObservers(), this._renderer.render(), this.enableObservers(), this._renderingInProgress = !1
            }
        }

        f(Mu, fc);

        class Du {
            constructor(e) {
                this.parent = null, this._attrs = rt(e)
            }

            get index() {
                let e;
                if (!this.parent) return null;
                if (null === (e = this.parent.getChildIndex(this))) throw new Ya('model-node-not-found-in-parent: The node\'s parent does not contain this node.');
                return e
            }

            get startOffset() {
                let e;
                if (!this.parent) return null;
                if (null === (e = this.parent.getChildStartOffset(this))) throw new Ya('model-node-not-found-in-parent: The node\'s parent does not contain this node.');
                return e
            }

            get offsetSize() {
                return 1
            }

            get endOffset() {
                return this.parent ? this.startOffset + this.offsetSize : null
            }

            get nextSibling() {
                const e = this.index;
                return null !== e && this.parent.getChild(e + 1) || null
            }

            get previousSibling() {
                const e = this.index;
                return null !== e && this.parent.getChild(e - 1) || null
            }

            get root() {
                let e = this;
                for (; e.parent;) e = e.parent;
                return e
            }

            get document() {
                return this.root == this ? null : this.root.document || null
            }

            getPath() {
                const e = [];
                for (let t = this; t.parent;) e.unshift(t.startOffset), t = t.parent;
                return e
            }

            getAncestors(e = {includeSelf: !1, parentFirst: !1}) {
                const t = [];
                for (let o = e.includeSelf ? this : this.parent; o;) t[e.parentFirst ? 'push' : 'unshift'](o), o = o.parent;
                return t
            }

            getCommonAncestor(e, t = {}) {
                const o = this.getAncestors(t), n = e.getAncestors(t);
                let r = 0;
                for (; o[r] == n[r] && o[r];) r++;
                return 0 == r ? null : o[r - 1]
            }

            isBefore(e) {
                if (this == e) return !1;
                if (this.root !== e.root) return !1;
                const t = this.getPath(), o = e.getPath(), n = A(t, o);
                return !('prefix' !== n) || 'extension' !== n && t[n] < o[n]
            }

            isAfter(e) {
                return this != e && !(this.root !== e.root) && !this.isBefore(e)
            }

            hasAttribute(e) {
                return this._attrs.has(e)
            }

            getAttribute(e) {
                return this._attrs.get(e)
            }

            getAttributes() {
                return this._attrs.entries()
            }

            getAttributeKeys() {
                return this._attrs.keys()
            }

            toJSON() {
                const e = {};
                return this._attrs.size && (e.attributes = [...this._attrs]), e
            }

            _clone() {
                return new Du(this._attrs)
            }

            _remove() {
                this.parent._removeChildren(this.index)
            }

            _setAttribute(e, t) {
                this._attrs.set(e, t)
            }

            _setAttributesTo(e) {
                this._attrs = rt(e)
            }

            _removeAttribute(e) {
                return this._attrs.delete(e)
            }

            _clearAttributes() {
                this._attrs.clear()
            }

            is(e) {
                return 'node' == e
            }
        }

        class Bu extends Du {
            constructor(e, t) {
                super(t), this._data = e || ''
            }

            get offsetSize() {
                return this.data.length
            }

            get data() {
                return this._data
            }

            is(e) {
                return 'text' == e || super.is(e)
            }

            toJSON() {
                const e = super.toJSON();
                return e.data = this.data, e
            }

            _clone() {
                return new Bu(this.data, this.getAttributes())
            }

            static fromJSON(e) {
                return new Bu(e.data, e.attributes)
            }
        }

        class Lu {
            constructor(e, t, o) {
                if (this.textNode = e, 0 > t || t > e.offsetSize) throw new Ya('model-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.');
                if (0 > o || t + o > e.offsetSize) throw new Ya('model-textproxy-wrong-length: Given length value is incorrect.');
                this.data = e.data.substring(t, t + o), this.offsetInText = t
            }

            get startOffset() {
                return null === this.textNode.startOffset ? null : this.textNode.startOffset + this.offsetInText
            }

            get offsetSize() {
                return this.data.length
            }

            get endOffset() {
                return null === this.startOffset ? null : this.startOffset + this.offsetSize
            }

            get isPartial() {
                return this.offsetSize !== this.textNode.offsetSize
            }

            get parent() {
                return this.textNode.parent
            }

            get root() {
                return this.textNode.root
            }

            get document() {
                return this.textNode.document
            }

            is(e) {
                return 'textProxy' == e
            }

            getPath() {
                const e = this.textNode.getPath();
                return 0 < e.length && (e[e.length - 1] += this.offsetInText), e
            }

            getAncestors(e = {includeSelf: !1, parentFirst: !1}) {
                const t = [];
                for (let o = e.includeSelf ? this : this.parent; o;) t[e.parentFirst ? 'push' : 'unshift'](o), o = o.parent;
                return t
            }

            hasAttribute(e) {
                return this.textNode.hasAttribute(e)
            }

            getAttribute(e) {
                return this.textNode.getAttribute(e)
            }

            getAttributes() {
                return this.textNode.getAttributes()
            }

            getAttributeKeys() {
                return this.textNode.getAttributeKeys()
            }
        }

        class zu {
            constructor(e) {
                this._nodes = [], e && this._insertNodes(0, e)
            }

            [Symbol.iterator]() {
                return this._nodes[Symbol.iterator]()
            }

            get length() {
                return this._nodes.length
            }

            get maxOffset() {
                return this._nodes.reduce((e, t) => e + t.offsetSize, 0)
            }

            getNode(e) {
                return this._nodes[e] || null
            }

            getNodeIndex(e) {
                const t = this._nodes.indexOf(e);
                return -1 == t ? null : t
            }

            getNodeStartOffset(e) {
                const t = this.getNodeIndex(e);
                return null === t ? null : this._nodes.slice(0, t).reduce((e, t) => e + t.offsetSize, 0)
            }

            indexToOffset(e) {
                if (e == this._nodes.length) return this.maxOffset;
                const t = this._nodes[e];
                if (!t) throw new Ya('model-nodelist-index-out-of-bounds: Given index cannot be found in the node list.');
                return this.getNodeStartOffset(t)
            }

            offsetToIndex(e) {
                let t = 0;
                for (const o of this._nodes) {
                    if (e >= t && e < t + o.offsetSize) return this.getNodeIndex(o);
                    t += o.offsetSize
                }
                if (t != e) throw new Ya('model-nodelist-offset-out-of-bounds: Given offset cannot be found in the node list.');
                return this.length
            }

            _insertNodes(e, t) {
                for (const o of t) if (!(o instanceof Du)) throw new Ya('model-nodelist-insertNodes-not-node: Trying to insert an object which is not a Node instance.');
                this._nodes.splice(e, 0, ...t)
            }

            _removeNodes(e, t = 1) {
                return this._nodes.splice(e, t)
            }

            toJSON() {
                return this._nodes.map((e) => e.toJSON())
            }
        }

        class ju extends Du {
            constructor(e, t, o) {
                super(t), this.name = e, this._children = new zu, o && this._insertChild(0, o)
            }

            get childCount() {
                return this._children.length
            }

            get maxOffset() {
                return this._children.maxOffset
            }

            get isEmpty() {
                return 0 === this.childCount
            }

            is(e, t = null) {
                return t ? 'element' == e && t == this.name : 'element' == e || e == this.name || super.is(e)
            }

            getChild(e) {
                return this._children.getNode(e)
            }

            getChildren() {
                return this._children[Symbol.iterator]()
            }

            getChildIndex(e) {
                return this._children.getNodeIndex(e)
            }

            getChildStartOffset(e) {
                return this._children.getNodeStartOffset(e)
            }

            offsetToIndex(e) {
                return this._children.offsetToIndex(e)
            }

            getNodeByPath(e) {
                let t = this;
                for (const o of e) t = t.getChild(t.offsetToIndex(o));
                return t
            }

            toJSON() {
                const e = super.toJSON();
                if (e.name = this.name, 0 < this._children.length) {
                    e.children = [];
                    for (const t of this._children) e.children.push(t.toJSON())
                }
                return e
            }

            _clone(e = !1) {
                const t = e ? Array.from(this._children).map((e) => e._clone(!0)) : null;
                return new ju(this.name, this.getAttributes(), t)
            }

            _appendChild(e) {
                this._insertChild(this.childCount, e)
            }

            _insertChild(e, t) {
                const o = at(t);
                for (const n of o) null !== n.parent && n._remove(), n.parent = this;
                this._children._insertNodes(e, o)
            }

            _removeChildren(e, t = 1) {
                const o = this._children._removeNodes(e, t);
                for (const n of o) n.parent = null;
                return o
            }

            static fromJSON(e) {
                let t = null;
                if (e.children) {
                    t = [];
                    for (const o of e.children) o.name ? t.push(ju.fromJSON(o)) : t.push(Bu.fromJSON(o))
                }
                return new ju(e.name, e.attributes, t)
            }
        }

        class qu {
            constructor(e = {}) {
                if (!e.boundaries && !e.startPosition) throw new Ya('model-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.');
                const t = e.direction || 'forward';
                if ('forward' != t && 'backward' != t) throw new Ya('model-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.', {direction: t});
                this.direction = t, this.boundaries = e.boundaries || null, this.position = e.startPosition ? Uu.createFromPosition(e.startPosition) : Uu.createFromPosition(this.boundaries['backward' == this.direction ? 'end' : 'start']), this.singleCharacters = !!e.singleCharacters, this.shallow = !!e.shallow, this.ignoreElementEnd = !!e.ignoreElementEnd, this._boundaryStartParent = this.boundaries ? this.boundaries.start.parent : null, this._boundaryEndParent = this.boundaries ? this.boundaries.end.parent : null, this._visitedParent = this.position.parent
            }

            [Symbol.iterator]() {
                return this
            }

            skip(e) {
                let t, o, n, i;
                do n = this.position, i = this._visitedParent, ({done: t, value: o} = this.next()); while (!t && e(o));
                t || (this.position = n, this._visitedParent = i)
            }

            next() {
                return 'forward' == this.direction ? this._next() : this._previous()
            }

            _next() {
                const e = this.position, t = Uu.createFromPosition(this.position), o = this._visitedParent;
                if (null === o.parent && t.offset === o.maxOffset) return {done: !0};
                if (o === this._boundaryEndParent && t.offset == this.boundaries.end.offset) return {done: !0};
                const n = t.textNode ? t.textNode : t.nodeAfter;
                if (n instanceof ju) return this.shallow ? t.offset++ : (t.path.push(0), this._visitedParent = n), this.position = t, st('elementStart', n, e, t, 1);
                if (n instanceof Bu) {
                    let i;
                    if (this.singleCharacters) i = 1; else {
                        let e = n.endOffset;
                        this._boundaryEndParent == o && this.boundaries.end.offset < e && (e = this.boundaries.end.offset), i = e - t.offset
                    }
                    const r = t.offset - n.startOffset, a = new Lu(n, r, i);
                    return t.offset += i, this.position = t, st('text', a, e, t, i)
                }
                return t.path.pop(), t.offset++, this.position = t, this._visitedParent = o.parent, this.ignoreElementEnd ? this._next() : st('elementEnd', o, e, t)
            }

            _previous() {
                const e = this.position, t = Uu.createFromPosition(this.position), o = this._visitedParent;
                if (null === o.parent && 0 === t.offset) return {done: !0};
                if (o == this._boundaryStartParent && t.offset == this.boundaries.start.offset) return {done: !0};
                const n = t.textNode ? t.textNode : t.nodeBefore;
                if (n instanceof ju) return t.offset--, this.shallow ? (this.position = t, st('elementStart', n, e, t, 1)) : (t.path.push(n.maxOffset), this.position = t, this._visitedParent = n, this.ignoreElementEnd ? this._previous() : st('elementEnd', n, e, t));
                if (n instanceof Bu) {
                    let i;
                    if (this.singleCharacters) i = 1; else {
                        let e = n.startOffset;
                        this._boundaryStartParent == o && this.boundaries.start.offset > e && (e = this.boundaries.start.offset), i = t.offset - e
                    }
                    const r = t.offset - n.startOffset, a = new Lu(n, r - i, i);
                    return t.offset -= i, this.position = t, st('text', a, e, t, i)
                }
                return t.path.pop(), this.position = t, this._visitedParent = o.parent, st('elementStart', o, e, t, 1)
            }
        }

        var Wu = function (e) {
            var t = e ? e.length : 0;
            return t ? e[t - 1] : void 0
        };

        class Uu {
            constructor(e, t) {
                if (!e.is('element') && !e.is('documentFragment')) throw new Ya('model-position-root-invalid: Position root invalid.');
                if (!(t instanceof Array) || 0 === t.length) throw new Ya('model-position-path-incorrect: Position path must be an array with at least one item.', {path: t});
                t = e.getPath().concat(t), e = e.root, this.root = e, this.path = t
            }

            get offset() {
                return Wu(this.path)
            }

            set offset(e) {
                this.path[this.path.length - 1] = e
            }

            get parent() {
                let e = this.root;
                for (let t = 0; t < this.path.length - 1; t++) e = e.getChild(e.offsetToIndex(this.path[t]));
                return e
            }

            get index() {
                return this.parent.offsetToIndex(this.offset)
            }

            get textNode() {
                const e = this.parent.getChild(this.index);
                return e instanceof Bu && e.startOffset < this.offset ? e : null
            }

            get nodeAfter() {
                return null === this.textNode ? this.parent.getChild(this.index) : null
            }

            get nodeBefore() {
                return null === this.textNode ? this.parent.getChild(this.index - 1) : null
            }

            get isAtStart() {
                return 0 === this.offset
            }

            get isAtEnd() {
                return this.offset == this.parent.maxOffset
            }

            compareWith(e) {
                if (this.root != e.root) return 'different';
                const t = A(this.path, e.path);
                return 'same' === t ? 'same' : 'prefix' === t ? 'before' : 'extension' === t ? 'after' : this.path[t] < e.path[t] ? 'before' : 'after'
            }

            getLastMatchingPosition(e, t = {}) {
                t.startPosition = this;
                const o = new qu(t);
                return o.skip(e), o.position
            }

            getParentPath() {
                return this.path.slice(0, -1)
            }

            getAncestors() {
                return this.parent.is('documentFragment') ? [this.parent] : this.parent.getAncestors({includeSelf: !0})
            }

            getCommonPath(e) {
                if (this.root != e.root) return [];
                const t = A(this.path, e.path), o = 'string' == typeof t ? Da(this.path.length, e.path.length) : t;
                return this.path.slice(0, o)
            }

            getCommonAncestor(e) {
                const t = this.getAncestors(), o = e.getAncestors();
                let n = 0;
                for (; t[n] == o[n] && t[n];) n++;
                return 0 == n ? null : t[n - 1]
            }

            getShiftedBy(e) {
                const t = Uu.createFromPosition(this), o = t.offset + e;
                return t.offset = 0 > o ? 0 : o, t
            }

            isAfter(e) {
                return 'after' == this.compareWith(e)
            }

            isBefore(e) {
                return 'before' == this.compareWith(e)
            }

            isEqual(e) {
                return 'same' == this.compareWith(e)
            }

            isTouching(e) {
                let t = null, o = null;
                const n = this.compareWith(e);
                switch (n) {
                    case'same':
                        return !0;
                    case'before':
                        t = Uu.createFromPosition(this), o = Uu.createFromPosition(e);
                        break;
                    case'after':
                        t = Uu.createFromPosition(e), o = Uu.createFromPosition(this);
                        break;
                    default:
                        return !1;
                }
                for (let n = t.parent; t.path.length + o.path.length;) {
                    if (t.isEqual(o)) return !0;
                    if (t.path.length > o.path.length) {
                        if (t.offset !== n.maxOffset) return !1;
                        t.path = t.path.slice(0, -1), n = n.parent, t.offset++
                    } else {
                        if (0 !== o.offset) return !1;
                        o.path = o.path.slice(0, -1)
                    }
                }
            }

            _getTransformedByDeletion(e, t) {
                const o = Uu.createFromPosition(this);
                if (this.root != e.root) return o;
                if ('same' == A(e.getParentPath(), this.getParentPath())) {
                    if (e.offset < this.offset) {
                        if (e.offset + t > this.offset) return null;
                        o.offset -= t
                    }
                } else if ('prefix' == A(e.getParentPath(), this.getParentPath())) {
                    const n = e.path.length - 1;
                    if (e.offset <= this.path[n]) {
                        if (e.offset + t > this.path[n]) return null;
                        o.path[n] -= t
                    }
                }
                return o
            }

            _getTransformedByInsertion(e, t, o) {
                const n = Uu.createFromPosition(this);
                if (this.root != e.root) return n;
                if ('same' == A(e.getParentPath(), this.getParentPath())) (e.offset < this.offset || e.offset == this.offset && o) && (n.offset += t); else if ('prefix' == A(e.getParentPath(), this.getParentPath())) {
                    const o = e.path.length - 1;
                    e.offset <= this.path[o] && (n.path[o] += t)
                }
                return n
            }

            _getTransformedByMove(e, t, o, n, i) {
                let r = this._getTransformedByDeletion(e, o);
                return t = t._getTransformedByDeletion(e, o), r = null === r || i && r.isEqual(e) ? this._getCombined(e, t) : r._getTransformedByInsertion(t, o, n), r
            }

            _getCombined(e, t) {
                const o = e.path.length - 1, n = Uu.createFromPosition(t);
                return n.offset = n.offset + this.path[o] - e.offset, n.path = n.path.concat(this.path.slice(o + 1)), n
            }

            static createAt(e, t) {
                if (e instanceof Uu) return this.createFromPosition(e); else {
                    const o = e;
                    if ('end' == t) t = o.maxOffset; else {
                        if ('before' == t) return this.createBefore(o);
                        if ('after' == t) return this.createAfter(o);
                        t || (t = 0)
                    }
                    return this.createFromParentAndOffset(o, t)
                }
            }

            static createAfter(e) {
                if (!e.parent) throw new Ya('model-position-after-root: You cannot make a position after root.', {root: e});
                return this.createFromParentAndOffset(e.parent, e.endOffset)
            }

            static createBefore(e) {
                if (!e.parent) throw new Ya('model-position-before-root: You cannot make a position before root.', {root: e});
                return this.createFromParentAndOffset(e.parent, e.startOffset)
            }

            static createFromParentAndOffset(e, t) {
                if (!e.is('element') && !e.is('documentFragment')) throw new Ya('model-position-parent-incorrect: Position parent have to be a element or document fragment.');
                const o = e.getPath();
                return o.push(t), new this(e.root, o)
            }

            static createFromPosition(e) {
                return new this(e.root, e.path.slice())
            }

            static fromJSON(e, t) {
                if ('$graveyard' === e.root) return new Uu(t.graveyard, e.path);
                if (!t.getRoot(e.root)) throw new Ya('model-position-fromjson-no-root: Cannot create position for document. Root with specified name does not exist.', {rootName: e.root});
                return new Uu(t.getRoot(e.root), e.path)
            }
        }

        class Hu {
            constructor(e, t = null) {
                this.start = Uu.createFromPosition(e), this.end = t ? Uu.createFromPosition(t) : Uu.createFromPosition(e)
            }

            * [Symbol.iterator]() {
                yield* new qu({boundaries: this, ignoreElementEnd: !0})
            }

            get isCollapsed() {
                return this.start.isEqual(this.end)
            }

            get isFlat() {
                return this.start.parent === this.end.parent
            }

            get root() {
                return this.start.root
            }

            containsPosition(e) {
                return e.isAfter(this.start) && e.isBefore(this.end)
            }

            containsRange(e, t = !1) {
                e.isCollapsed && (t = !1);
                const o = this.containsPosition(e.start) || t && this.start.isEqual(e.start),
                    n = this.containsPosition(e.end) || t && this.end.isEqual(e.end);
                return o && n
            }

            containsItem(e) {
                const t = Uu.createBefore(e);
                return this.containsPosition(t) || this.start.isEqual(t)
            }

            isEqual(e) {
                return this.start.isEqual(e.start) && this.end.isEqual(e.end)
            }

            isIntersecting(e) {
                return this.start.isBefore(e.end) && this.end.isAfter(e.start)
            }

            getDifference(e) {
                const t = [];
                return this.isIntersecting(e) ? (this.containsPosition(e.start) && t.push(new Hu(this.start, e.start)), this.containsPosition(e.end) && t.push(new Hu(e.end, this.end))) : t.push(Hu.createFromRange(this)), t
            }

            getIntersection(e) {
                if (this.isIntersecting(e)) {
                    let t = this.start, o = this.end;
                    return this.containsPosition(e.start) && (t = e.start), this.containsPosition(e.end) && (o = e.end), new Hu(t, o)
                }
                return null
            }

            getMinimalFlatRanges() {
                const e = [], t = this.start.getCommonPath(this.end).length, o = Uu.createFromPosition(this.start);
                for (let n = o.parent; o.path.length > t + 1;) {
                    const t = n.maxOffset - o.offset;
                    0 != t && e.push(new Hu(o, o.getShiftedBy(t))), o.path = o.path.slice(0, -1), o.offset++, n = n.parent
                }
                for (; o.path.length <= this.end.path.length;) {
                    const t = this.end.path[o.path.length - 1], n = t - o.offset;
                    0 != n && e.push(new Hu(o, o.getShiftedBy(n))), o.offset = t, o.path.push(0)
                }
                return e
            }

            getWalker(e = {}) {
                return e.boundaries = this, new qu(e)
            }

            * getItems(e = {}) {
                e.boundaries = this, e.ignoreElementEnd = !0;
                const t = new qu(e);
                for (const o of t) yield o.item
            }

            * getPositions(e = {}) {
                e.boundaries = this;
                const t = new qu(e);
                yield t.position;
                for (const o of t) yield o.nextPosition
            }

            getTransformedByDelta(e) {
                const t = [Hu.createFromRange(this)], o = new Set(['insert', 'move', 'remove', 'reinsert']);
                for (const n of e.operations) if (o.has(n.type)) for (let o = 0; o < t.length; o++) {
                    let i;
                    i = 'insert' == n.type ? t[o]._getTransformedByDocumentChange(n.type, e.type, n.position, n.nodes.maxOffset) : t[o]._getTransformedByDocumentChange(n.type, e.type, n.targetPosition, n.howMany, n.sourcePosition), t.splice(o, 1, ...i), o += i.length - 1
                }
                return t
            }

            getTransformedByDeltas(e) {
                const t = [Hu.createFromRange(this)];
                for (const o of e) for (let e = 0; e < t.length; e++) {
                    const n = t[e].getTransformedByDelta(o);
                    t.splice(e, 1, ...n), e += n.length - 1
                }
                for (let o = 0; o < t.length; o++) {
                    const e = t[o];
                    for (let n = o + 1; n < t.length; n++) {
                        const o = t[n];
                        (e.containsRange(o) || o.containsRange(e) || e.isEqual(o)) && t.splice(n, 1)
                    }
                }
                return t
            }

            getCommonAncestor() {
                return this.start.getCommonAncestor(this.end)
            }

            _getTransformedByDocumentChange(e, t, o, n, i) {
                if ('insert' == e) return this._getTransformedByInsertion(o, n, !1, !1); else {
                    const e = Hu.createFromPositionAndShift(i, n);
                    if ('merge' == t && this.isCollapsed && (this.start.isEqual(e.start) || this.start.isEqual(e.end))) {
                        const t = this.start.offset - e.start.offset;
                        return [new Hu(o.getShiftedBy(t))]
                    }
                    if ('split' == t && this.isCollapsed && this.end.isEqual(e.end)) return [new Hu(o.getShiftedBy(n))];
                    if ((e.containsPosition(this.start) || e.start.isEqual(this.start)) && this.containsPosition(e.end) && this.end.isAfter(o)) {
                        const e = this.start._getCombined(i, o._getTransformedByDeletion(i, n)),
                            t = this.end._getTransformedByMove(i, o, n, !1, !1);
                        return [new Hu(e, t)]
                    }
                    if ((e.containsPosition(this.end) || e.end.isEqual(this.end)) && this.containsPosition(e.start) && this.start.isBefore(o)) {
                        const e = this.start._getTransformedByMove(i, o, n, !0, !1),
                            t = this.end._getCombined(i, o._getTransformedByDeletion(i, n));
                        return [new Hu(e, t)]
                    }
                    return this._getTransformedByMove(i, o, n)
                }
            }

            _getTransformedByInsertion(e, t, o = !1, n = !1) {
                if (o && this.containsPosition(e)) return [new Hu(this.start, e), new Hu(e._getTransformedByInsertion(e, t, !0), this.end._getTransformedByInsertion(e, t, this.isCollapsed))]; else {
                    const o = Hu.createFromRange(this), i = !!o.isCollapsed || n;
                    return o.start = o.start._getTransformedByInsertion(e, t, !n), o.end = o.end._getTransformedByInsertion(e, t, i), [o]
                }
            }

            _getTransformedByMove(e, t, o) {
                if (this.isCollapsed) {
                    const n = this.start._getTransformedByMove(e, t, o, !0, !1);
                    return [new Hu(n)]
                }
                let n;
                const i = new Hu(e, e.getShiftedBy(o)), r = this.getDifference(i);
                let a = null;
                const s = this.getIntersection(i);
                1 == r.length ? a = new Hu(r[0].start._getTransformedByDeletion(e, o), r[0].end._getTransformedByDeletion(e, o)) : 2 == r.length && (a = new Hu(this.start, this.end._getTransformedByDeletion(e, o)));
                const l = t._getTransformedByDeletion(e, o);
                return n = a ? a._getTransformedByInsertion(l, o, null !== s) : [], s && n.push(new Hu(s.start._getCombined(i.start, l), s.end._getCombined(i.start, l))), n
            }

            static createFromPositionAndShift(e, t) {
                const o = e, n = e.getShiftedBy(t);
                return 0 < t ? new this(o, n) : new this(n, o)
            }

            static createFromParentsAndOffsets(e, t, o, n) {
                return new this(Uu.createFromParentAndOffset(e, t), Uu.createFromParentAndOffset(o, n))
            }

            static createFromRange(e) {
                return new this(e.start, e.end)
            }

            static createIn(e) {
                return this.createFromParentsAndOffsets(e, 0, e, e.maxOffset)
            }

            static createOn(e) {
                return this.createFromPositionAndShift(Uu.createBefore(e), e.offsetSize)
            }

            static createCollapsedAt(e, t) {
                const o = Uu.createAt(e, t), n = Uu.createFromPosition(o);
                return new Hu(o, n)
            }

            static createFromRanges(e) {
                if (0 === e.length) throw new Ya('range-create-from-ranges-empty-array: At least one range has to be passed.'); else if (1 == e.length) return this.createFromRange(e[0]);
                const t = e[0];
                e.sort((e, t) => e.start.isAfter(t.start) ? 1 : -1);
                const o = e.indexOf(t), n = new this(t.start, t.end);
                for (let t = o - 1; 0 <= t && e[t].end.isEqual(n.start); t++) n.start = Uu.createFromPosition(e[t].start);
                for (let t = o + 1; t < e.length && e[t].start.isEqual(n.end); t++) n.end = Uu.createFromPosition(e[t].end);
                return n
            }

            static fromJSON(e, t) {
                return new this(Uu.fromJSON(e.start, t), Uu.fromJSON(e.end, t))
            }
        }

        class Ku {
            constructor() {
                this._modelToViewMapping = new WeakMap, this._viewToModelMapping = new WeakMap, this._viewToModelLengthCallbacks = new Map, this._markerNameToElements = new Map, this.on('modelToViewPosition', (e, t) => {
                    if (!t.viewPosition) {
                        const e = this._modelToViewMapping.get(t.modelPosition.parent);
                        t.viewPosition = this._findPositionIn(e, t.modelPosition.offset)
                    }
                }, {priority: 'low'}), this.on('viewToModelPosition', (e, t) => {
                    if (t.modelPosition) return;
                    let o = t.viewPosition.parent, n = this._viewToModelMapping.get(o);
                    for (; !n;) o = o.parent, n = this._viewToModelMapping.get(o);
                    const i = this._toModelOffset(t.viewPosition.parent, t.viewPosition.offset, o);
                    t.modelPosition = Uu.createFromParentAndOffset(n, i)
                }, {priority: 'low'})
            }

            bindElements(e, t) {
                this._modelToViewMapping.set(e, t), this._viewToModelMapping.set(t, e)
            }

            unbindViewElement(e) {
                const t = this.toModelElement(e);
                this._viewToModelMapping.delete(e), this._modelToViewMapping.get(t) == e && this._modelToViewMapping.delete(t)
            }

            unbindModelElement(e) {
                const t = this.toViewElement(e);
                this._modelToViewMapping.delete(e), this._viewToModelMapping.get(t) == e && this._viewToModelMapping.delete(t)
            }

            bindElementToMarker(e, t) {
                const o = this._markerNameToElements.get(t) || new Set;
                o.add(e), this._markerNameToElements.set(t, o)
            }

            unbindElementsFromMarkerName(e) {
                this._markerNameToElements.delete(e)
            }

            clearBindings() {
                this._modelToViewMapping = new WeakMap, this._viewToModelMapping = new WeakMap, this._markerNameToElements = new Map
            }

            toModelElement(e) {
                return this._viewToModelMapping.get(e)
            }

            toViewElement(e) {
                return this._modelToViewMapping.get(e)
            }

            toModelRange(e) {
                return new Hu(this.toModelPosition(e.start), this.toModelPosition(e.end))
            }

            toViewRange(e) {
                return new yc(this.toViewPosition(e.start), this.toViewPosition(e.end))
            }

            toModelPosition(e) {
                const t = {viewPosition: e, mapper: this};
                return this.fire('viewToModelPosition', t), t.modelPosition
            }

            toViewPosition(e, t = {isPhantom: !1}) {
                const o = {modelPosition: e, mapper: this, isPhantom: t.isPhantom};
                return this.fire('modelToViewPosition', o), o.viewPosition
            }

            markerNameToElements(e) {
                const t = this._markerNameToElements.get(e);
                if (!t) return null;
                const o = new Set;
                for (const n of t) if (n.is('attributeElement')) for (const e of n.getElementsWithSameId()) o.add(e); else o.add(n);
                return o
            }

            registerViewToModelLength(e, t) {
                this._viewToModelLengthCallbacks.set(e, t)
            }

            _toModelOffset(e, t, o) {
                if (o != e) {
                    const n = this._toModelOffset(e.parent, e.index, o), i = this._toModelOffset(e, t, e);
                    return n + i
                }
                if (e.is('text')) return t;
                let n = 0;
                for (let r = 0; r < t; r++) n += this.getModelLength(e.getChild(r));
                return n
            }

            getModelLength(e) {
                if (this._viewToModelLengthCallbacks.get(e.name)) {
                    const t = this._viewToModelLengthCallbacks.get(e.name);
                    return t(e)
                }
                if (this._viewToModelMapping.has(e)) return 1;
                if (e.is('text')) return e.data.length;
                if (e.is('uiElement')) return 0; else {
                    let t = 0;
                    for (const o of e.getChildren()) t += this.getModelLength(o);
                    return t
                }
            }

            _findPositionIn(e, t) {
                let o = 0, n = 0, i = 0, r;
                if (e.is('text')) return new vc(e, t);
                for (; n < t;) r = e.getChild(i), o = this.getModelLength(r), n += o, i++;
                return n == t ? this._moveViewPositionToTextNode(new vc(e, i)) : this._findPositionIn(r, t - (n - o))
            }

            _moveViewPositionToTextNode(e) {
                const t = e.nodeBefore, o = e.nodeAfter;
                if (t instanceof Ed) return new vc(t, t.data.length);
                return o instanceof Ed ? new vc(o, 0) : e
            }
        }

        f(Ku, rs);

        class Gu {
            constructor() {
                this._consumable = new Map, this._textProxyRegistry = new Map
            }

            add(e, t) {
                t = lt(t), e instanceof Lu && (e = this._getSymbolForTextProxy(e)), this._consumable.has(e) || this._consumable.set(e, new Map), this._consumable.get(e).set(t, !0)
            }

            consume(e, t) {
                return t = lt(t), e instanceof Lu && (e = this._getSymbolForTextProxy(e)), !!this.test(e, t) && (this._consumable.get(e).set(t, !1), !0)
            }

            test(e, t) {
                t = lt(t), e instanceof Lu && (e = this._getSymbolForTextProxy(e));
                const o = this._consumable.get(e);
                if (o === void 0) return null;
                const n = o.get(t);
                return void 0 === n ? null : n
            }

            revert(e, t) {
                t = lt(t), e instanceof Lu && (e = this._getSymbolForTextProxy(e));
                const o = this.test(e, t);
                return !1 === o ? (this._consumable.get(e).set(t, !0), !0) : !0 !== o && null
            }

            _getSymbolForTextProxy(e) {
                let t = null;
                const o = this._textProxyRegistry.get(e.startOffset);
                if (o) {
                    const n = o.get(e.endOffset);
                    n && (t = n.get(e.parent))
                }
                return t || (t = this._addSymbolForTextProxy(e.startOffset, e.endOffset, e.parent)), t
            }

            _addSymbolForTextProxy(e, t, o) {
                const n = Symbol('textProxySymbol');
                let i, r;
                return i = this._textProxyRegistry.get(e), i || (i = new Map, this._textProxyRegistry.set(e, i)), r = i.get(t), r || (r = new Map, i.set(t, r)), r.set(o, n), n
            }
        }

        class $u {
            constructor(e = {}) {
                this.conversionApi = cc({dispatcher: this}, e)
            }

            convertChanges(e, t) {
                for (const o of e.getMarkersToRemove()) this.convertMarkerRemove(o.name, o.range, t);
                for (const o of e.getChanges()) 'insert' == o.type ? this.convertInsert(Hu.createFromPositionAndShift(o.position, o.length), t) : 'remove' == o.type ? this.convertRemove(o.position, o.length, o.name, t) : this.convertAttribute(o.range, o.attributeKey, o.attributeOldValue, o.attributeNewValue, t);
                for (const o of e.getMarkersToAdd()) this.convertMarkerAdd(o.name, o.range, t)
            }

            convertInsert(e, t) {
                this.conversionApi.writer = t, this.conversionApi.consumable = this._createInsertConsumable(e);
                for (const o of e) {
                    const e = o.item, t = Hu.createFromPositionAndShift(o.previousPosition, o.length),
                        n = {item: e, range: t};
                    this._testAndFire('insert', n);
                    for (const t of e.getAttributeKeys()) n.attributeKey = t, n.attributeOldValue = null, n.attributeNewValue = e.getAttribute(t), this._testAndFire(`attribute:${t}`, n)
                }
                this._clearConversionApi()
            }

            convertRemove(e, t, o, n) {
                this.conversionApi.writer = n, this.fire('remove:' + o, {
                    position: e,
                    length: t
                }, this.conversionApi), this._clearConversionApi()
            }

            convertAttribute(e, t, o, n, i) {
                this.conversionApi.writer = i, this.conversionApi.consumable = this._createConsumableForRange(e, `attribute:${t}`);
                for (const r of e) {
                    const e = r.item, i = Hu.createFromPositionAndShift(r.previousPosition, r.length);
                    this._testAndFire(`attribute:${t}`, {
                        item: e,
                        range: i,
                        attributeKey: t,
                        attributeOldValue: o,
                        attributeNewValue: n
                    })
                }
                this._clearConversionApi()
            }

            convertSelection(e, t, o) {
                const n = Array.from(t.getMarkersAtPosition(e.getFirstPosition()));
                if (this.conversionApi.writer = o, this.conversionApi.consumable = this._createSelectionConsumable(e, n), this.fire('selection', {selection: e}, this.conversionApi), !!e.isCollapsed) {
                    for (const t of n) {
                        const o = t.getRange();
                        if (!dt(e.getFirstPosition(), t, this.conversionApi.mapper)) continue;
                        const n = {item: e, markerName: t.name, markerRange: o};
                        this.conversionApi.consumable.test(e, 'addMarker:' + t.name) && this.fire('addMarker:' + t.name, n, this.conversionApi)
                    }
                    for (const t of e.getAttributeKeys()) {
                        const o = {
                            item: e,
                            range: e.getFirstRange(),
                            attributeKey: t,
                            attributeOldValue: null,
                            attributeNewValue: e.getAttribute(t)
                        };
                        this.conversionApi.consumable.test(e, 'attribute:' + o.attributeKey) && this.fire('attribute:' + o.attributeKey, o, this.conversionApi)
                    }
                    this._clearConversionApi()
                }
            }

            convertMarkerAdd(e, t, o) {
                if (t.root.document && '$graveyard' != t.root.rootName) {
                    this.conversionApi.writer = o;
                    const n = 'addMarker:' + e;
                    if (t.isCollapsed) {
                        const o = new Gu;
                        return o.add(t, n), this.conversionApi.consumable = o, void this.fire(n, {
                            markerName: e,
                            markerRange: t
                        }, this.conversionApi)
                    }
                    this.conversionApi.consumable = this._createConsumableForRange(t, n);
                    for (const o of t.getItems()) {
                        if (!this.conversionApi.consumable.test(o, n)) continue;
                        const i = {item: o, range: Hu.createOn(o), markerName: e, markerRange: t};
                        this.fire(n, i, this.conversionApi)
                    }
                    this._clearConversionApi()
                }
            }

            convertMarkerRemove(e, t, o) {
                t.root.document && '$graveyard' != t.root.rootName && (this.conversionApi.writer = o, this.fire('removeMarker:' + e, {
                    markerName: e,
                    markerRange: t
                }, this.conversionApi), this._clearConversionApi())
            }

            _createInsertConsumable(e) {
                const t = new Gu;
                for (const o of e) {
                    const e = o.item;
                    t.add(e, 'insert');
                    for (const o of e.getAttributeKeys()) t.add(e, 'attribute:' + o)
                }
                return t
            }

            _createConsumableForRange(e, t) {
                const o = new Gu;
                for (const n of e.getItems()) o.add(n, t);
                return o
            }

            _createSelectionConsumable(e, t) {
                const o = new Gu;
                o.add(e, 'selection');
                for (const n of t) o.add(e, 'addMarker:' + n.name);
                for (const n of e.getAttributeKeys()) o.add(e, 'attribute:' + n);
                return o
            }

            _testAndFire(e, t) {
                if (this.conversionApi.consumable.test(t.item, e)) {
                    const o = t.item.name || '$text';
                    this.fire(e + ':' + o, t, this.conversionApi)
                }
            }

            _clearConversionApi() {
                delete this.conversionApi.writer, delete this.conversionApi.consumable
            }
        }

        f($u, rs);

        class Ju {
            constructor(e, t, o) {
                this._lastRangeBackward = !1, this._ranges = [], this._attrs = new Map, e && this.setTo(e, t, o)
            }

            get anchor() {
                if (0 < this._ranges.length) {
                    const e = this._ranges[this._ranges.length - 1];
                    return this._lastRangeBackward ? e.end : e.start
                }
                return null
            }

            get focus() {
                if (0 < this._ranges.length) {
                    const e = this._ranges[this._ranges.length - 1];
                    return this._lastRangeBackward ? e.start : e.end
                }
                return null
            }

            get isCollapsed() {
                const e = this._ranges.length;
                return !(1 !== e) && this._ranges[0].isCollapsed
            }

            get rangeCount() {
                return this._ranges.length
            }

            get isBackward() {
                return !this.isCollapsed && this._lastRangeBackward
            }

            isEqual(e) {
                if (this.rangeCount != e.rangeCount) return !1;
                if (0 === this.rangeCount) return !0;
                if (!this.anchor.isEqual(e.anchor) || !this.focus.isEqual(e.focus)) return !1;
                for (const t of this._ranges) {
                    let o = !1;
                    for (const n of e._ranges) if (t.isEqual(n)) {
                        o = !0;
                        break
                    }
                    if (!o) return !1
                }
                return !0
            }

            * getRanges() {
                for (const e of this._ranges) yield Hu.createFromRange(e)
            }

            getFirstRange() {
                let e = null;
                for (const t of this._ranges) (!e || t.start.isBefore(e.start)) && (e = t);
                return e ? Hu.createFromRange(e) : null
            }

            getLastRange() {
                let e = null;
                for (const t of this._ranges) (!e || t.end.isAfter(e.end)) && (e = t);
                return e ? Hu.createFromRange(e) : null
            }

            getFirstPosition() {
                const e = this.getFirstRange();
                return e ? Uu.createFromPosition(e.start) : null
            }

            getLastPosition() {
                const e = this.getLastRange();
                return e ? Uu.createFromPosition(e.end) : null
            }

            setTo(e, t, o) {
                if (null === e) this._setRanges([]); else if (e instanceof Ju) this._setRanges(e.getRanges(), e.isBackward); else if (e && 'function' == typeof e.getRanges) this._setRanges(e.getRanges(), e.isBackward); else if (e instanceof Hu) this._setRanges([e], !!t && !!t.backward); else if (e instanceof Uu) this._setRanges([new Hu(e)]); else if (e instanceof Du) {
                    const n = !!o && !!o.backward;
                    let i;
                    if ('in' == t) i = Hu.createIn(e); else if ('on' == t) i = Hu.createOn(e); else if (t !== void 0) i = Hu.createCollapsedAt(e, t); else throw new Ya('model-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.');
                    this._setRanges([i], n)
                } else if (P(e)) this._setRanges(e, t && !!t.backward); else throw new Ya('model-selection-setTo-not-selectable: Cannot set selection to given place.')
            }

            _setRanges(e, t = !1) {
                e = Array.from(e);
                const o = e.some((e) => {
                    if (!(e instanceof Hu)) throw new Ya('model-selection-added-not-range: Trying to add an object that is not an instance of Range.');
                    return this._ranges.every((t) => !t.isEqual(e))
                });
                if (e.length !== this._ranges.length || o) {
                    this._removeAllRanges();
                    for (const t of e) this._pushRange(t);
                    this._lastRangeBackward = !!t, this.fire('change:range', {directChange: !0})
                }
            }

            setFocus(e, t) {
                if (null === this.anchor) throw new Ya('model-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.');
                const o = Uu.createAt(e, t);
                if ('same' != o.compareWith(this.focus)) {
                    const e = this.anchor;
                    this._ranges.length && this._popRange(), 'before' == o.compareWith(e) ? (this._pushRange(new Hu(o, e)), this._lastRangeBackward = !0) : (this._pushRange(new Hu(e, o)), this._lastRangeBackward = !1), this.fire('change:range', {directChange: !0})
                }
            }

            getAttribute(e) {
                return this._attrs.get(e)
            }

            getAttributes() {
                return this._attrs.entries()
            }

            getAttributeKeys() {
                return this._attrs.keys()
            }

            hasAttribute(e) {
                return this._attrs.has(e)
            }

            removeAttribute(e) {
                this.hasAttribute(e) && (this._attrs.delete(e), this.fire('change:attribute', {
                    attributeKeys: [e],
                    directChange: !0
                }))
            }

            setAttribute(e, t) {
                this.getAttribute(e) !== t && (this._attrs.set(e, t), this.fire('change:attribute', {
                    attributeKeys: [e],
                    directChange: !0
                }))
            }

            getSelectedElement() {
                if (1 !== this.rangeCount) return null;
                const e = this.getFirstRange(), t = e.start.nodeAfter, o = e.end.nodeBefore;
                return t instanceof ju && t == o ? t : null
            }

            * getSelectedBlocks() {
                const e = new WeakSet;
                for (const t of this.getRanges()) {
                    const o = ut(t.start, e);
                    o && (yield o);
                    for (const o of t.getWalker()) 'elementEnd' == o.type && ct(o.item, e) && (yield o.item);
                    const n = ut(t.end, e);
                    n && !t.end.isTouching(Uu.createAt(n)) && (yield n)
                }
            }

            containsEntireContent(e = this.anchor.root) {
                const t = Uu.createAt(e), o = Uu.createAt(e, 'end');
                return t.isTouching(this.getFirstPosition()) && o.isTouching(this.getLastPosition())
            }

            _pushRange(e) {
                this._checkRange(e), this._ranges.push(Hu.createFromRange(e))
            }

            _checkRange(e) {
                for (let t = 0; t < this._ranges.length; t++) if (e.isIntersecting(this._ranges[t])) throw new Ya('model-selection-range-intersects: Trying to add a range that intersects with another range from selection.', {
                    addedRange: e,
                    intersectingRange: this._ranges[t]
                })
            }

            _removeAllRanges() {
                for (; 0 < this._ranges.length;) this._popRange()
            }

            _popRange() {
                this._ranges.pop()
            }
        }

        f(Ju, rs);

        class Qu extends Hu {
            constructor(e, t) {
                super(e, t), mt.call(this)
            }

            detach() {
                this.stopListening()
            }
        }

        f(Qu, rs);
        const Yu = 'selection:';

        class Xu {
            constructor(e) {
                this._selection = new Zu(e), this._selection.delegate('change:range').to(this), this._selection.delegate('change:attribute').to(this)
            }

            get isCollapsed() {
                return this._selection.isCollapsed
            }

            get anchor() {
                return this._selection.anchor
            }

            get focus() {
                return this._selection.focus
            }

            get rangeCount() {
                return this._selection.rangeCount
            }

            get hasOwnRange() {
                return this._selection.hasOwnRange
            }

            get isBackward() {
                return this._selection.isBackward
            }

            get isGravityOverridden() {
                return this._selection.isGravityOverridden
            }

            get _ranges() {
                return this._selection._ranges
            }

            getRanges() {
                return this._selection.getRanges()
            }

            getFirstPosition() {
                return this._selection.getFirstPosition()
            }

            getLastPosition() {
                return this._selection.getLastPosition()
            }

            getFirstRange() {
                return this._selection.getFirstRange()
            }

            getLastRange() {
                return this._selection.getLastRange()
            }

            getSelectedBlocks() {
                return this._selection.getSelectedBlocks()
            }

            getSelectedElement() {
                return this._selection.getSelectedElement()
            }

            containsEntireContent(e) {
                return this._selection.containsEntireContent(e)
            }

            destroy() {
                this._selection.destroy()
            }

            getAttributeKeys() {
                return this._selection.getAttributeKeys()
            }

            getAttributes() {
                return this._selection.getAttributes()
            }

            getAttribute(e) {
                return this._selection.getAttribute(e)
            }

            hasAttribute(e) {
                return this._selection.hasAttribute(e)
            }

            _setFocus(e, t) {
                this._selection.setFocus(e, t)
            }

            _setTo(e, t, o) {
                this._selection.setTo(e, t, o)
            }

            _setAttribute(e, t) {
                this._selection.setAttribute(e, t)
            }

            _removeAttribute(e) {
                this._selection.removeAttribute(e)
            }

            _getStoredAttributes() {
                return this._selection._getStoredAttributes()
            }

            _overrideGravity() {
                return this._selection.overrideGravity()
            }

            _restoreGravity(e) {
                this._selection.restoreGravity(e)
            }

            static _getStoreAttributeKey(e) {
                return Yu + e
            }

            static _isStoreAttributeKey(e) {
                return e.startsWith(Yu)
            }
        }

        f(Xu, rs);

        class Zu extends Ju {
            constructor(e) {
                super(), this._model = e.model, this._document = e, this._attributePriority = new Map, this._fixGraveyardRangesData = [], this._hasChangedRange = !1, this._overriddenGravityRegister = new Set, this.on('change:range', () => {
                    for (const e of this.getRanges()) if (!this._document._validateSelectionRange(e)) throw new Ya('document-selection-wrong-position: Range from document selection starts or ends at incorrect position.', {range: e})
                }), this.listenTo(this._document, 'change', (e, t) => {
                    this._updateAttributes(!1), ft(this._model, t)
                }), this.listenTo(this._model, 'applyOperation', () => {
                    for (; this._fixGraveyardRangesData.length;) {
                        const {liveRange: e, sourcePosition: t} = this._fixGraveyardRangesData.shift();
                        this._fixGraveyardSelection(e, t)
                    }
                    this._hasChangedRange && (this._hasChangedRange = !1, this.fire('change:range', {directChange: !1}))
                }, {priority: 'lowest'})
            }

            get isCollapsed() {
                const e = this._ranges.length;
                return 0 === e ? this._document._getDefaultRange().isCollapsed : super.isCollapsed
            }

            get anchor() {
                return super.anchor || this._document._getDefaultRange().start
            }

            get focus() {
                return super.focus || this._document._getDefaultRange().end
            }

            get rangeCount() {
                return this._ranges.length ? this._ranges.length : 1
            }

            get hasOwnRange() {
                return 0 < this._ranges.length
            }

            get isGravityOverridden() {
                return !!this._overriddenGravityRegister.size
            }

            destroy() {
                for (let e = 0; e < this._ranges.length; e++) this._ranges[e].detach();
                this.stopListening()
            }

            * getRanges() {
                this._ranges.length ? yield* super.getRanges() : yield this._document._getDefaultRange()
            }

            getFirstRange() {
                return super.getFirstRange() || this._document._getDefaultRange()
            }

            getLastRange() {
                return super.getLastRange() || this._document._getDefaultRange()
            }

            setTo(e, t, o) {
                super.setTo(e, t, o), this._refreshAttributes()
            }

            setFocus(e, t) {
                super.setFocus(e, t), this._refreshAttributes()
            }

            setAttribute(e, t) {
                if (this._setAttribute(e, t)) {
                    this.fire('change:attribute', {attributeKeys: [e], directChange: !0})
                }
            }

            removeAttribute(e) {
                if (this._removeAttribute(e)) {
                    this.fire('change:attribute', {attributeKeys: [e], directChange: !0})
                }
            }

            overrideGravity() {
                const e = i();
                return this._overriddenGravityRegister.add(e), 1 === this._overriddenGravityRegister.size && this._refreshAttributes(), e
            }

            restoreGravity(e) {
                if (!this._overriddenGravityRegister.has(e)) throw new Ya('document-selection-gravity-wrong-restore: Attempting to restore the selection gravity for an unknown UID.', {uid: e});
                this._overriddenGravityRegister.delete(e), this.isGravityOverridden || this._refreshAttributes()
            }

            _refreshAttributes() {
                this._updateAttributes(!0)
            }

            _popRange() {
                this._ranges.pop().detach()
            }

            _pushRange(e) {
                const t = this._prepareRange(e);
                t && this._ranges.push(t)
            }

            _prepareRange(e) {
                if (this._checkRange(e), e.root == this._document.graveyard) return void Su.warn('model-selection-range-in-graveyard: Trying to add a Range that is in the graveyard root. Range rejected.');
                const t = Qu.createFromRange(e);
                return t.on('change:range', (e, o, n) => {
                    this._hasChangedRange = !0, t.root == this._document.graveyard && this._fixGraveyardRangesData.push({
                        liveRange: t,
                        sourcePosition: n.sourcePosition
                    })
                }), t
            }

            _updateAttributes(e) {
                const t = rt(this._getSurroundingAttributes()), o = rt(this.getAttributes());
                if (e) this._attributePriority = new Map, this._attrs = new Map; else for (const [e, t] of this._attributePriority) 'low' == t && (this._attrs.delete(e), this._attributePriority.delete(e));
                this._setAttributesTo(t);
                const n = [];
                for (const [t, i] of this.getAttributes()) o.has(t) && o.get(t) === i || n.push(t);
                for (const [t] of o) this.hasAttribute(t) || n.push(t);
                0 < n.length && this.fire('change:attribute', {attributeKeys: n, directChange: !1})
            }

            _setAttribute(e, t, o = !0) {
                const n = o ? 'normal' : 'low';
                if ('low' == n && 'normal' == this._attributePriority.get(e)) return !1;
                const i = super.getAttribute(e);
                return i !== t && (this._attrs.set(e, t), this._attributePriority.set(e, n), !0)
            }

            _removeAttribute(e, t = !0) {
                const o = t ? 'normal' : 'low';
                return ('low' != o || 'normal' != this._attributePriority.get(e)) && (this._attributePriority.set(e, o), !!super.hasAttribute(e)) && (this._attrs.delete(e), !0)
            }

            _setAttributesTo(e) {
                const t = new Set;
                for (const [t, o] of this.getAttributes()) e.get(t) !== o && this._removeAttribute(t, !1);
                for (const [o, n] of e) {
                    const e = this._setAttribute(o, n, !1);
                    e && t.add(o)
                }
                return t
            }

            * _getStoredAttributes() {
                const e = this.getFirstPosition().parent;
                if (this.isCollapsed && e.isEmpty) for (const t of e.getAttributeKeys()) if (t.startsWith(Yu)) {
                    const o = t.substr(Yu.length);
                    yield[o, e.getAttribute(t)]
                }
            }

            _getSurroundingAttributes() {
                const e = this.getFirstPosition(), t = this._model.schema;
                let o = null;
                if (!this.isCollapsed) {
                    const e = this.getFirstRange();
                    for (const n of e) {
                        if (n.item.is('element') && t.isObject(n.item)) break;
                        'text' == n.type && null === o && (o = n.item.getAttributes())
                    }
                } else {
                    const t = e.textNode ? e.textNode : e.nodeBefore, n = e.textNode ? e.textNode : e.nodeAfter;
                    if (this.isGravityOverridden || (o = gt(t)), o || (o = gt(n)), !this.isGravityOverridden && !o) for (let e = t; e && !o;) e = e.previousSibling, o = gt(e);
                    if (!o) for (let e = n; e && !o;) e = e.nextSibling, o = gt(e);
                    o || (o = this._getStoredAttributes())
                }
                return o
            }

            _fixGraveyardSelection(e, t) {
                const o = Uu.createFromPosition(t), n = this._model.schema.getNearestSelectionRange(o),
                    i = this._ranges.indexOf(e);
                if (this._ranges.splice(i, 1), e.detach(), n) {
                    const e = this._prepareRange(n);
                    this._ranges.splice(i, 0, e)
                }
            }
        }

        var em = function (e) {
            return Ad(e, !0, !0)
        };

        class tm {
            constructor(e) {
                this.model = e, this.view = new Mu, this.mapper = new Ku, this.downcastDispatcher = new $u({mapper: this.mapper});
                const t = this.model.document, o = t.selection, n = this.model.markers;
                this.listenTo(t, 'change', () => {
                    this.view.change((e) => {
                        this.downcastDispatcher.convertChanges(t.differ, e), this.downcastDispatcher.convertSelection(o, n, e)
                    })
                }, {priority: 'low'}), this.listenTo(this.view.document, 'selectionChange', Et(this.model, this.mapper)), this.downcastDispatcher.on('insert:$text', Ct(), {priority: 'lowest'}), this.downcastDispatcher.on('remove', At(), {priority: 'low'}), this.downcastDispatcher.on('selection', Rt(), {priority: 'low'}), this.downcastDispatcher.on('selection', St(), {priority: 'low'}), this.downcastDispatcher.on('selection', Ot(), {priority: 'low'}), this.view.document.roots.bindTo(this.model.document.roots).using((e) => {
                    if ('$graveyard' == e.rootName) return null;
                    const t = new _c(e.name);
                    return t.rootName = e.rootName, t._document = this.view.document, this.mapper.bindElements(e, t), t
                })
            }

            destroy() {
                this.view.destroy(), this.stopListening()
            }
        }

        f(tm, fc);

        class om {
            constructor(e, t = []) {
                this._editor = e, this._availablePlugins = new Map, this._plugins = new Map;
                for (const o of t) this._availablePlugins.set(o, o), o.pluginName && this._availablePlugins.set(o.pluginName, o)
            }

            * [Symbol.iterator]() {
                for (const e of this._plugins) 'function' == typeof e[0] && (yield e)
            }

            get(e) {
                return this._plugins.get(e)
            }

            load(e, t = []) {
                function o(e) {
                    return u.includes(e) || a.get(e) || l.has(e) ? void 0 : n(e).catch((t) => {
                        throw Su.error('plugincollection-load: It was not possible to load the plugin.', {plugin: e}), t
                    })
                }

                function n(e) {
                    return new Promise((n) => {
                        l.add(e), e.requires && e.requires.forEach((n) => {
                            const r = i(n);
                            if (t.includes(r)) throw new Ya('plugincollection-required: Cannot load a plugin because one of its dependencies is listed inthe `removePlugins` option.', {
                                plugin: r,
                                requiredBy: e
                            });
                            o(r)
                        });
                        const r = new e(s);
                        a._add(e, r), d.push(r), n()
                    })
                }

                function i(e) {
                    return 'function' == typeof e ? e : a._availablePlugins.get(e)
                }

                function r(e) {
                    return e.map((e) => i(e)).filter((e) => !!e)
                }

                const a = this, s = this._editor, l = new Set, d = [], c = r(e), u = r(t), m = function (e) {
                    const t = [];
                    for (const o of e) i(o) || t.push(o);
                    return t.length ? t : null
                }(e);
                if (m) {
                    const e = 'plugincollection-plugin-not-found: Some plugins are not available and could not be loaded.';
                    return Su.error(e, {plugins: m}), Promise.reject(new Ya(e, {plugins: m}))
                }
                return Promise.all(c.map(o)).then(() => d)
            }

            destroy() {
                const e = Array.from(this).map(([, e]) => e).filter((e) => 'function' == typeof e.destroy).map((e) => e.destroy());
                return Promise.all(e)
            }

            _add(e, t) {
                this._plugins.set(e, t);
                const o = e.pluginName;
                o && (this._plugins.has(o) ? Su.warn('plugincollection-plugin-name-conflict: Two plugins with the same name were loaded.', {
                    pluginName: o,
                    plugin1: this._plugins.get(o).constructor,
                    plugin2: e
                }) : this._plugins.set(o, t))
            }
        }

        class nm {
            constructor() {
                this._commands = new Map
            }

            add(e, t) {
                this._commands.set(e, t)
            }

            get(e) {
                return this._commands.get(e)
            }

            execute(e, ...t) {
                const o = this.get(e);
                if (!o) throw new Ya('commandcollection-command-not-found: Command does not exist.', {commandName: e});
                o.execute(...t)
            }

            * names() {
                yield* this._commands.keys()
            }

            * commands() {
                yield* this._commands.values()
            }

            [Symbol.iterator]() {
                return this._commands[Symbol.iterator]()
            }

            destroy() {
                for (const e of this.commands()) e.destroy()
            }
        }

        window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {});

        class im {
            constructor(e) {
                this.language = e || 'en', this.t = (...e) => this._t(...e)
            }

            _t(e, t) {
                let o = It(this.language, e);
                return t && (o = o.replace(/%(\d+)/g, (e, o) => o < t.length ? t[o] : e)), o
            }
        }

        class rm {
            constructor() {
                this._consumables = new Map
            }

            add(e, t) {
                let o;
                return e.is('text') || e.is('documentFragment') ? void this._consumables.set(e, !0) : void (this._consumables.has(e) ? o = this._consumables.get(e) : (o = new am, this._consumables.set(e, o)), o.add(t))
            }

            test(e, t) {
                const o = this._consumables.get(e);
                return void 0 === o ? null : e.is('text') || e.is('documentFragment') ? o : o.test(t)
            }

            consume(e, t) {
                return !!this.test(e, t) && (e.is('text') || e.is('documentFragment') ? this._consumables.set(e, !1) : this._consumables.get(e).consume(t), !0)
            }

            revert(e, t) {
                const o = this._consumables.get(e);
                o !== void 0 && (e.is('text') || e.is('documentFragment') ? this._consumables.set(e, !0) : o.revert(t))
            }

            static consumablesFromElement(e) {
                const t = {name: !0, attributes: [], classes: [], styles: []}, o = e.getAttributeKeys();
                for (const n of o) 'style' != n && 'class' != n && t.attributes.push(n);
                const n = e.getClassNames();
                for (const o of n) t.classes.push(o);
                const i = e.getStyleNames();
                for (const o of i) t.styles.push(o);
                return t
            }

            static createFrom(e, t) {
                if (t || (t = new rm), e.is('text')) return t.add(e), t;
                e.is('element') && t.add(e, rm.consumablesFromElement(e)), e.is('documentFragment') && t.add(e);
                for (const o of e.getChildren()) t = rm.createFrom(o, t);
                return t
            }
        }

        class am {
            constructor() {
                this._canConsumeName = null, this._consumables = {
                    attributes: new Map,
                    styles: new Map,
                    classes: new Map
                }
            }

            add(e) {
                for (const t in e.name && (this._canConsumeName = !0), this._consumables) t in e && this._add(t, e[t])
            }

            test(e) {
                if (e.name && !this._canConsumeName) return this._canConsumeName;
                for (const t in this._consumables) if (t in e) {
                    const o = this._test(t, e[t]);
                    if (!0 !== o) return o
                }
                return !0
            }

            consume(e) {
                for (const t in e.name && (this._canConsumeName = !1), this._consumables) t in e && this._consume(t, e[t])
            }

            revert(e) {
                for (const t in e.name && (this._canConsumeName = !0), this._consumables) t in e && this._revert(t, e[t])
            }

            _add(e, t) {
                const o = sl(t) ? t : [t], n = this._consumables[e];
                for (const i of o) {
                    if ('attributes' === e && ('class' === i || 'style' === i)) throw new Ya('viewconsumable-invalid-attribute: Classes and styles should be handled separately.');
                    n.set(i, !0)
                }
            }

            _test(e, t) {
                const o = sl(t) ? t : [t], n = this._consumables[e];
                for (const i of o) if ('attributes' === e && ('class' === i || 'style' === i)) {
                    const e = 'class' == i ? 'classes' : 'styles', t = this._test(e, [...this._consumables[e].keys()]);
                    if (!0 !== t) return t
                } else {
                    const e = n.get(i);
                    if (e === void 0) return null;
                    if (!e) return !1
                }
                return !0
            }

            _consume(e, t) {
                const o = sl(t) ? t : [t], n = this._consumables[e];
                for (const i of o) if ('attributes' === e && ('class' === i || 'style' === i)) {
                    const e = 'class' == i ? 'classes' : 'styles';
                    this._consume(e, [...this._consumables[e].keys()])
                } else n.set(i, !1)
            }

            _revert(e, t) {
                const o = sl(t) ? t : [t], n = this._consumables[e];
                for (const i of o) if ('attributes' === e && ('class' === i || 'style' === i)) {
                    const e = 'class' == i ? 'classes' : 'styles';
                    this._revert(e, [...this._consumables[e].keys()])
                } else {
                    const e = n.get(i);
                    !1 === e && n.set(i, !0)
                }
            }
        }

        class sm {
            constructor() {
                this._sourceDefinitions = {}, this.decorate('checkChild'), this.decorate('checkAttribute'), this.on('checkAttribute', (e, t) => {
                    t[0] = new lm(t[0])
                }, {priority: 'highest'}), this.on('checkChild', (e, t) => {
                    t[0] = new lm(t[0]), t[1] = this.getDefinition(t[1])
                }, {priority: 'highest'})
            }

            register(e, t) {
                if (this._sourceDefinitions[e]) throw new Ya('schema-cannot-register-item-twice: A single item cannot be registered twice in the schema.', {itemName: e});
                this._sourceDefinitions[e] = [Object.assign({}, t)], this._clearCache()
            }

            extend(e, t) {
                if (!this._sourceDefinitions[e]) throw new Ya('schema-cannot-extend-missing-item: Cannot extend an item which was not registered yet.', {itemName: e});
                this._sourceDefinitions[e].push(Object.assign({}, t)), this._clearCache()
            }

            getDefinitions() {
                return this._compiledDefinitions || this._compile(), this._compiledDefinitions
            }

            getDefinition(e) {
                let t;
                return t = 'string' == typeof e ? e : e.is && (e.is('text') || e.is('textProxy')) ? '$text' : e.name, this.getDefinitions()[t]
            }

            isRegistered(e) {
                return !!this.getDefinition(e)
            }

            isBlock(e) {
                const t = this.getDefinition(e);
                return !!(t && t.isBlock)
            }

            isLimit(e) {
                const t = this.getDefinition(e);
                return !!(t && t.isLimit)
            }

            isObject(e) {
                const t = this.getDefinition(e);
                return !!(t && t.isObject)
            }

            checkChild(e, t) {
                return !!t && this._checkContextMatch(t, e)
            }

            checkAttribute(e, t) {
                const o = this.getDefinition(e.last);
                return !!o && o.allowAttributes.includes(t)
            }

            checkMerge(e, t = null) {
                if (e instanceof Uu) {
                    const t = e.nodeBefore, o = e.nodeAfter;
                    if (!(t instanceof ju)) throw new Ya('schema-check-merge-no-element-before: The node before the merge position must be an element.');
                    if (!(o instanceof ju)) throw new Ya('schema-check-merge-no-element-after: The node after the merge position must be an element.');
                    return this.checkMerge(t, o)
                }
                for (const o of t.getChildren()) if (!this.checkChild(e, o)) return !1;
                return !0
            }

            addChildCheck(e) {
                this.on('checkChild', (t, [o, n]) => {
                    if (n) {
                        const i = e(o, n);
                        'boolean' == typeof i && (t.stop(), t.return = i)
                    }
                }, {priority: 'high'})
            }

            addAttributeCheck(e) {
                this.on('checkAttribute', (t, [o, n]) => {
                    const i = e(o, n);
                    'boolean' == typeof i && (t.stop(), t.return = i)
                }, {priority: 'high'})
            }

            getLimitElement(e) {
                let t = Array.from(e.getRanges()).reduce((e, t) => {
                    const o = t.getCommonAncestor();
                    return e ? e.getCommonAncestor(o, {includeSelf: !0}) : o
                }, null);
                for (; !this.isLimit(t) && t.parent;) t = t.parent;
                return t
            }

            checkAttributeInSelection(e, t) {
                if (e.isCollapsed) return this.checkAttribute([...e.getFirstPosition().getAncestors(), '$text'], t); else {
                    const o = e.getRanges();
                    for (const e of o) for (const o of e) if (this.checkAttribute(o.item, t)) return !0
                }
                return !1
            }

            getValidRanges(e, t) {
                const o = [];
                for (const n of e) {
                    let e = n.start, i = n.start;
                    const r = n.end;
                    for (const r of n.getWalker()) this.checkAttribute(r.item, t) || (!i.isEqual(e) && o.push(new Hu(i, e)), i = r.nextPosition), e = r.nextPosition;
                    i && !i.isEqual(r) && o.push(new Hu(i, r))
                }
                return o
            }

            getNearestSelectionRange(e, t = 'both') {
                if (this.checkChild(e, '$text')) return new Hu(e);
                let o, n;
                ('both' == t || 'backward' == t) && (o = new qu({
                    startPosition: e,
                    direction: 'backward'
                })), ('both' == t || 'forward' == t) && (n = new qu({startPosition: e}));
                for (const i of $t(o, n)) {
                    const e = i.walker == o ? 'elementEnd' : 'elementStart', t = i.value;
                    if (t.type == e && this.isObject(t.item)) return Hu.createOn(t.item);
                    if (this.checkChild(t.nextPosition, '$text')) return new Hu(t.nextPosition)
                }
                return null
            }

            findAllowedParent(e, t) {
                for (let o = t.parent; o;) {
                    if (this.checkChild(o, e)) return o;
                    if (this.isLimit(o) || this.isObject(o)) return null;
                    o = o.parent
                }
                return null
            }

            removeDisallowedAttributes(e, t) {
                for (const o of e) {
                    for (const e of o.getAttributeKeys()) this.checkAttribute(o, e) || t.removeAttribute(e, o);
                    o.is('element') && this.removeDisallowedAttributes(o.getChildren(), t)
                }
            }

            _clearCache() {
                this._compiledDefinitions = null
            }

            _compile() {
                const e = {}, t = this._sourceDefinitions, o = Object.keys(t);
                for (const n of o) e[n] = Nt(t[n], n);
                for (const t of o) Mt(e, t);
                for (const t of o) Dt(e, t);
                for (const t of o) Bt(e, t), Lt(e, t);
                for (const t of o) zt(e, t), jt(e, t);
                this._compiledDefinitions = e
            }

            _checkContextMatch(e, t, o = t.length - 1) {
                const n = t.getItem(o);
                if (!e.allowIn.includes(n.name)) return !1; else if (0 == o) return !0; else {
                    const e = this.getDefinition(n);
                    return this._checkContextMatch(e, t, o - 1)
                }
            }
        }

        f(sm, fc);

        class lm {
            constructor(e) {
                return e instanceof lm ? e : void ('string' == typeof e ? e = [e] : !Array.isArray(e) && (e = e.getAncestors({includeSelf: !0})), e[0] && 'string' != typeof e[0] && e[0].is('documentFragment') && e.shift(), this._items = e.map(Gt))
            }

            get length() {
                return this._items.length
            }

            get last() {
                return this._items[this._items.length - 1]
            }

            [Symbol.iterator]() {
                return this._items[Symbol.iterator]()
            }

            push(e) {
                const t = new lm([e]);
                return t._items = [...this._items, ...t._items], t
            }

            getItem(e) {
                return this._items[e]
            }

            * getNames() {
                yield* this._items.map((e) => e.name)
            }

            endsWith(e) {
                return Array.from(this.getNames()).join(' ').endsWith(e)
            }
        }

        class dm {
            constructor(e = {}) {
                this._removeIfEmpty = new Set, this._modelCursor = null, this.conversionApi = Object.assign({}, e), this.conversionApi.convertItem = this._convertItem.bind(this), this.conversionApi.convertChildren = this._convertChildren.bind(this), this.conversionApi.splitToAllowedParent = this._splitToAllowedParent.bind(this)
            }

            convert(e, t, o = ['$root']) {
                this.fire('viewCleanup', e), this._modelCursor = Qt(o, t), this.conversionApi.writer = t, this.conversionApi.consumable = rm.createFrom(e), this.conversionApi.store = {};
                const {modelRange: n} = this._convertItem(e, this._modelCursor), i = t.createDocumentFragment();
                if (n) {
                    this._removeEmptyElements();
                    for (const e of Array.from(this._modelCursor.parent.getChildren())) t.append(e, i);
                    i.markers = Jt(i, t)
                }
                return this._modelCursor = null, this._removeIfEmpty.clear(), this.conversionApi.writer = null, this.conversionApi.store = null, i
            }

            _convertItem(e, t) {
                const o = Object.assign({viewItem: e, modelCursor: t, modelRange: null});
                if (e.is('element') ? this.fire('element:' + e.name, o, this.conversionApi) : e.is('text') ? this.fire('text', o, this.conversionApi) : this.fire('documentFragment', o, this.conversionApi), o.modelRange && !(o.modelRange instanceof Hu)) throw new Ya('view-conversion-dispatcher-incorrect-result: Incorrect conversion result was dropped.');
                return {modelRange: o.modelRange, modelCursor: o.modelCursor}
            }

            _convertChildren(e, t) {
                const o = new Hu(t);
                let n = t;
                for (const i of Array.from(e.getChildren())) {
                    const e = this._convertItem(i, n);
                    e.modelRange instanceof Hu && (o.end = e.modelRange.end, n = e.modelCursor)
                }
                return {modelRange: o, modelCursor: n}
            }

            _splitToAllowedParent(e, t) {
                const o = this.conversionApi.schema.findAllowedParent(e, t);
                if (!o) return null;
                if (o === t.parent) return {position: t};
                if (this._modelCursor.parent.getAncestors().includes(o)) return null;
                const n = this.conversionApi.writer.split(t, o);
                for (const o of n.range.getPositions()) o.isEqual(n.position) || this._removeIfEmpty.add(o.parent);
                return {position: n.position, cursorParent: n.range.end.parent}
            }

            _removeEmptyElements() {
                let e = !1;
                for (const t of this._removeIfEmpty) t.isEmpty && (this.conversionApi.writer.remove(t), this._removeIfEmpty.delete(t), e = !0);
                e && this._removeEmptyElements()
            }
        }

        f(dm, rs);

        class cm {
            constructor(e, t) {
                this.model = e, this.processor = t, this.mapper = new Ku, this.downcastDispatcher = new $u({mapper: this.mapper}), this.downcastDispatcher.on('insert:$text', Ct(), {priority: 'lowest'}), this.upcastDispatcher = new dm({schema: e.schema}), this.upcastDispatcher.on('text', co(), {priority: 'lowest'}), this.upcastDispatcher.on('element', lo(), {priority: 'lowest'}), this.upcastDispatcher.on('documentFragment', lo(), {priority: 'lowest'}), this.decorate('init')
            }

            get(e = 'main') {
                return this.stringify(this.model.document.getRoot(e))
            }

            stringify(e) {
                const t = this.toView(e);
                return this.processor.toData(t)
            }

            toView(e) {
                const t = Hu.createIn(e), o = new Dc, n = new Bc(new Tc());
                if (this.mapper.bindElements(e, o), this.downcastDispatcher.convertInsert(t, n), !e.is('documentFragment')) {
                    const t = uo(e);
                    for (const [e, o] of t) this.downcastDispatcher.convertMarkerAdd(e, o, n)
                }
                return this.mapper.clearBindings(), o
            }

            init(e, t = 'main') {
                if (this.model.document.version) throw new Ya('datacontroller-init-document-not-empty: Trying to set initial data to not empty document.');
                const o = this.model.document.getRoot(t);
                return this.model.enqueueChange('transparent', (t) => {
                    t.insert(this.parse(e, o), o)
                }), Promise.resolve()
            }

            set(e, t = 'main') {
                const o = this.model.document.getRoot(t);
                this.model.enqueueChange('transparent', (t) => {
                    t.setSelection(null), t.removeSelectionAttribute(this.model.document.selection.getAttributeKeys()), t.remove(Hu.createIn(o)), t.insert(this.parse(e, o), o)
                })
            }

            parse(e, t = '$root') {
                const o = this.processor.toView(e);
                return this.toModel(o, t)
            }

            toModel(e, t = '$root') {
                return this.model.change((o) => this.upcastDispatcher.convert(e, o, t))
            }

            destroy() {
            }
        }

        f(cm, fc);

        class um {
            constructor() {
                this._dispatchersGroups = new Map
            }

            register(e, t) {
                if (this._dispatchersGroups.has(e)) throw new Ya('conversion-register-group-exists: Trying to register a group name that was already registered.');
                this._dispatchersGroups.set(e, t)
            }

            for(e) {
                const t = this._getDispatchers(e);
                return {
                    add(e) {
                        return mo(t, e), this
                    }
                }
            }

            elementToElement(e) {
                this.for('downcast').add(ht(e));
                for (const {model: t, view: o} of po(e)) this.for('upcast').add(Yt({
                    model: t,
                    view: o,
                    priority: e.priority
                }))
            }

            attributeToElement(e) {
                this.for('downcast').add(bt(e));
                for (const {model: t, view: o} of po(e)) this.for('upcast').add(Xt({
                    view: o,
                    model: t,
                    priority: e.priority
                }))
            }

            attributeToAttribute(e) {
                this.for('downcast').add(kt(e));
                for (const {model: t, view: o} of po(e)) this.for('upcast').add(Zt({view: o, model: t}))
            }

            _getDispatchers(e) {
                const t = this._dispatchersGroups.get(e);
                if (!t) throw new Ya('conversion-for-unknown-group: Trying to add a converter to an unknown dispatchers group.');
                return t
            }
        }

        class mm {
            constructor(e) {
                this.baseVersion = e, this.isDocumentOperation = null !== this.baseVersion
            }

            _validate() {
            }

            toJSON() {
                const e = Td(this, !0);
                return e.__className = this.constructor.className, delete e.delta, delete e.isDocumentOperation, e
            }

            static get className() {
                return 'engine.model.operation.Operation'
            }

            static fromJSON(e) {
                return new this(e.baseVersion)
            }
        }

        class pm {
            constructor(e) {
                this.markers = new Map, this._children = new zu, e && this._insertChild(0, e)
            }

            [Symbol.iterator]() {
                return this.getChildren()
            }

            get childCount() {
                return this._children.length
            }

            get maxOffset() {
                return this._children.maxOffset
            }

            get isEmpty() {
                return 0 === this.childCount
            }

            get root() {
                return this
            }

            get parent() {
                return null
            }

            is(e) {
                return 'documentFragment' == e
            }

            getChild(e) {
                return this._children.getNode(e)
            }

            getChildren() {
                return this._children[Symbol.iterator]()
            }

            getChildIndex(e) {
                return this._children.getNodeIndex(e)
            }

            getChildStartOffset(e) {
                return this._children.getNodeStartOffset(e)
            }

            getPath() {
                return []
            }

            getNodeByPath(e) {
                let t = this;
                for (const o of e) t = t.getChild(t.offsetToIndex(o));
                return t
            }

            offsetToIndex(e) {
                return this._children.offsetToIndex(e)
            }

            toJSON() {
                const e = [];
                for (const t of this._children) e.push(t.toJSON());
                return e
            }

            static fromJSON(e) {
                const t = [];
                for (const o of e) o.name ? t.push(ju.fromJSON(o)) : t.push(Bu.fromJSON(o));
                return new pm(t)
            }

            _appendChild(e) {
                this._insertChild(this.childCount, e)
            }

            _insertChild(e, t) {
                const o = fo(t);
                for (const n of o) null !== n.parent && n._remove(), n.parent = this;
                this._children._insertNodes(e, o)
            }

            _removeChildren(e, t = 1) {
                const o = this._children._removeNodes(e, t);
                for (const n of o) n.parent = null;
                return o
            }
        }

        var gm = function (e, t) {
            return fu(e, t)
        };

        class fm extends mm {
            constructor(e, t, o, n, i) {
                super(i), this.range = Hu.createFromRange(e), this.key = t, this.oldValue = o === void 0 ? null : o, this.newValue = n === void 0 ? null : n
            }

            get type() {
                return null === this.oldValue ? 'addAttribute' : null === this.newValue ? 'removeAttribute' : 'changeAttribute'
            }

            clone() {
                return new fm(this.range, this.key, this.oldValue, this.newValue, this.baseVersion)
            }

            getReversed() {
                return new fm(this.range, this.key, this.newValue, this.oldValue, this.baseVersion + 1)
            }

            _validate() {
                for (const e of this.range.getItems()) {
                    if (null !== this.oldValue && !gm(e.getAttribute(this.key), this.oldValue)) throw new Ya('attribute-operation-wrong-old-value: Changed node has different attribute value than operation\'s old attribute value.', {
                        item: e,
                        key: this.key,
                        value: this.oldValue
                    });
                    if (null === this.oldValue && null !== this.newValue && e.hasAttribute(this.key)) throw new Ya('attribute-operation-attribute-exists: The attribute with given key already exists.', {
                        node: e,
                        key: this.key
                    })
                }
            }

            _execute() {
                gm(this.oldValue, this.newValue) || _o(this.range, this.key, this.newValue)
            }

            static get className() {
                return 'engine.model.operation.AttributeOperation'
            }

            static fromJSON(e, t) {
                return new fm(Hu.fromJSON(e.range, t), e.key, e.oldValue, e.newValue, e.baseVersion)
            }
        }

        class hm extends mm {
            constructor(e, t, o, n) {
                super(n), this.sourcePosition = Uu.createFromPosition(e), this.howMany = t, this.targetPosition = Uu.createFromPosition(o), this.isSticky = !1
            }

            get type() {
                return 'move'
            }

            clone() {
                const e = new this.constructor(this.sourcePosition, this.howMany, this.targetPosition, this.baseVersion);
                return e.isSticky = this.isSticky, e
            }

            getMovedRangeStart() {
                return this.targetPosition._getTransformedByDeletion(this.sourcePosition, this.howMany)
            }

            getReversed() {
                const e = this.sourcePosition._getTransformedByInsertion(this.targetPosition, this.howMany),
                    t = new this.constructor(this.getMovedRangeStart(), this.howMany, e, this.baseVersion + 1);
                return t.isSticky = this.isSticky, t
            }

            _validate() {
                const e = this.sourcePosition.parent, t = this.targetPosition.parent, o = this.sourcePosition.offset,
                    n = this.targetPosition.offset;
                if (!e || !t) throw new Ya('move-operation-position-invalid: Source position or target position is invalid.'); else if (o + this.howMany > e.maxOffset) throw new Ya('move-operation-nodes-do-not-exist: The nodes which should be moved do not exist.'); else if (e === t && o < n && n < o + this.howMany) throw new Ya('move-operation-range-into-itself: Trying to move a range of nodes to the inside of that range.'); else if (this.sourcePosition.root == this.targetPosition.root && 'prefix' == A(this.sourcePosition.getParentPath(), this.targetPosition.getParentPath())) {
                    const e = this.sourcePosition.path.length - 1;
                    if (this.targetPosition.path[e] >= o && this.targetPosition.path[e] < o + this.howMany) throw new Ya('move-operation-node-into-itself: Trying to move a range of nodes into one of nodes from that range.')
                }
            }

            _execute() {
                ko(Hu.createFromPositionAndShift(this.sourcePosition, this.howMany), this.targetPosition)
            }

            static get className() {
                return 'engine.model.operation.MoveOperation'
            }

            static fromJSON(e, t) {
                const o = Uu.fromJSON(e.sourcePosition, t), n = Uu.fromJSON(e.targetPosition, t),
                    i = new this(o, e.howMany, n, e.baseVersion);
                return e.isSticky && (i.isSticky = !0), i
            }
        }

        class bm extends hm {
            get position() {
                return this.targetPosition
            }

            set position(e) {
                this.targetPosition = e
            }

            get type() {
                return 'reinsert'
            }

            getReversed() {
                const e = this.sourcePosition._getTransformedByInsertion(this.targetPosition, this.howMany);
                return new km(this.getMovedRangeStart(), this.howMany, e, this.baseVersion + 1)
            }

            _validate() {
                if (super._validate(), !this.sourcePosition.root.document) throw new Ya('reinsert-operation-on-detached-item: Cannot reinsert detached item.');
                if (!this.targetPosition.root.document) throw new Ya('reinsert-operation-to-detached-parent: Cannot reinsert item to detached parent.')
            }

            static get className() {
                return 'engine.model.operation.ReinsertOperation'
            }
        }

        class km extends hm {
            get type() {
                return 'remove'
            }

            getReversed() {
                const e = this.sourcePosition._getTransformedByInsertion(this.targetPosition, this.howMany);
                return new bm(this.getMovedRangeStart(), this.howMany, e, this.baseVersion + 1)
            }

            _validate() {
                if (super._validate(), !this.sourcePosition.root.document) throw new Ya('remove-operation-on-detached-item: Cannot remove detached item.')
            }

            static get className() {
                return 'engine.model.operation.RemoveOperation'
            }
        }

        class _m extends mm {
            constructor(e, t, o) {
                super(o), this.position = Uu.createFromPosition(e), this.nodes = new zu(wo(t))
            }

            get type() {
                return 'insert'
            }

            clone() {
                const e = new zu([...this.nodes].map((e) => e._clone(!0)));
                return new _m(this.position, e, this.baseVersion)
            }

            getReversed() {
                const e = this.position.root.document.graveyard, t = new Uu(e, [0]);
                return new km(this.position, this.nodes.maxOffset, t, this.baseVersion + 1)
            }

            _validate() {
                const e = this.position.parent;
                if (!e || e.maxOffset < this.position.offset) throw new Ya('insert-operation-position-invalid: Insertion position is invalid.')
            }

            _execute() {
                const e = this.nodes;
                this.nodes = new zu([...e].map((e) => e._clone(!0))), ho(this.position, e)
            }

            static get className() {
                return 'engine.model.operation.InsertOperation'
            }

            static fromJSON(e, t) {
                const o = [];
                for (const n of e.nodes) n.name ? o.push(ju.fromJSON(n)) : o.push(Bu.fromJSON(n));
                return new _m(Uu.fromJSON(e.position, t), o, e.baseVersion)
            }
        }

        class wm extends mm {
            constructor(e, t, o, n, i) {
                super(i), this.name = e, this.oldRange = t ? Hu.createFromRange(t) : null, this.newRange = o ? Hu.createFromRange(o) : null, this._markers = n
            }

            get type() {
                return 'marker'
            }

            clone() {
                return new wm(this.name, this.oldRange, this.newRange, this._markers, this.baseVersion)
            }

            getReversed() {
                return new wm(this.name, this.newRange, this.oldRange, this._markers, this.baseVersion + 1)
            }

            _execute() {
                const e = this.newRange ? '_set' : '_remove';
                this._markers[e](this.name, this.newRange, !0)
            }

            toJSON() {
                const e = super.toJSON();
                return delete e._markers, e
            }

            static get className() {
                return 'engine.model.operation.MarkerOperation'
            }

            static fromJSON(e, t) {
                return new wm(e.name, e.oldRange ? Hu.fromJSON(e.oldRange, t) : null, e.newRange ? Hu.fromJSON(e.newRange, t) : null, t.model.markers, e.baseVersion)
            }
        }

        class vm extends mm {
            get type() {
                return 'noop'
            }

            clone() {
                return new vm(this.baseVersion)
            }

            getReversed() {
                return new vm(this.baseVersion + 1)
            }

            _execute() {
            }

            static get className() {
                return 'engine.model.operation.NoOperation'
            }
        }

        class ym extends mm {
            constructor(e, t, o, n) {
                super(n), this.position = e, this.oldName = t, this.newName = o
            }

            get type() {
                return 'rename'
            }

            clone() {
                return new ym(Uu.createFromPosition(this.position), this.oldName, this.newName, this.baseVersion)
            }

            getReversed() {
                return new ym(Uu.createFromPosition(this.position), this.newName, this.oldName, this.baseVersion + 1)
            }

            _validate() {
                const e = this.position.nodeAfter;
                if (!(e instanceof ju)) throw new Ya('rename-operation-wrong-position: Given position is invalid or node after it is not an instance of Element.'); else if (e.name !== this.oldName) throw new Ya('rename-operation-wrong-name: Element to change has different name than operation\'s old name.')
            }

            _execute() {
                const e = this.position.nodeAfter;
                e.name = this.newName
            }

            static get className() {
                return 'engine.model.operation.RenameOperation'
            }

            static fromJSON(e, t) {
                return new ym(Uu.fromJSON(e.position, t), e.oldName, e.newName, e.baseVersion)
            }
        }

        class xm extends mm {
            constructor(e, t, o, n, i) {
                super(i), this.root = e, this.key = t, this.oldValue = o, this.newValue = n
            }

            get type() {
                return null === this.oldValue ? 'addRootAttribute' : null === this.newValue ? 'removeRootAttribute' : 'changeRootAttribute'
            }

            clone() {
                return new xm(this.root, this.key, this.oldValue, this.newValue, this.baseVersion)
            }

            getReversed() {
                return new xm(this.root, this.key, this.newValue, this.oldValue, this.baseVersion + 1)
            }

            _validate() {
                if (this.root != this.root.root || this.root.is('documentFragment')) throw new Ya('rootattribute-operation-not-a-root: The element to change is not a root element.', {
                    root: this.root,
                    key: this.key
                });
                if (null !== this.oldValue && this.root.getAttribute(this.key) !== this.oldValue) throw new Ya('rootattribute-operation-wrong-old-value: Changed node has different attribute value than operation\'s old attribute value.', {
                    root: this.root,
                    key: this.key
                });
                if (null === this.oldValue && null !== this.newValue && this.root.hasAttribute(this.key)) throw new Ya('rootattribute-operation-attribute-exists: The attribute with given key already exists.', {
                    root: this.root,
                    key: this.key
                })
            }

            _execute() {
                null === this.newValue ? this.root._removeAttribute(this.key) : this.root._setAttribute(this.key, this.newValue)
            }

            static get className() {
                return 'engine.model.operation.RootAttributeOperation'
            }

            static fromJSON(e, t) {
                if (!t.getRoot(e.root)) throw new Ya('rootattribute-operation-fromjson-no-root: Cannot create RootAttributeOperation. Root with specified name does not exist.', {rootName: e});
                return new xm(t.getRoot(e.root), e.key, e.oldValue, e.newValue, e.baseVersion)
            }
        }

        const Cm = {};
        Cm[fm.className] = fm, Cm[_m.className] = _m, Cm[wm.className] = wm, Cm[hm.className] = hm, Cm[vm.className] = vm, Cm[mm.className] = mm, Cm[bm.className] = bm, Cm[km.className] = km, Cm[ym.className] = ym, Cm[xm.className] = xm;

        class Am {
            static fromJSON(e, t) {
                return Cm[e.__className].fromJSON(e, t)
            }
        }

        const Tm = new Map;

        class Pm {
            static fromJSON(e, t) {
                if (!Tm.has(e.__className)) throw new Ya('delta-fromjson-no-deserializer: This delta has no defined deserializer', {name: e.__className});
                const o = Tm.get(e.__className), n = new o;
                for (const o of e.operations) n.addOperation(Am.fromJSON(o, t));
                for (const o in e) '__className' != o && void 0 === n[o] && (n[o] = e[o]);
                return n
            }

            static register(e) {
                Tm.set(e.className, e)
            }
        }

        class Em {
            constructor() {
                this.batch = null, this.operations = []
            }

            get baseVersion() {
                return 0 < this.operations.length ? this.operations[0].baseVersion : null
            }

            set baseVersion(e) {
                for (const t of this.operations) t.baseVersion = e++
            }

            get _reverseDeltaClass() {
                return Em
            }

            addOperation(e) {
                return e.delta = this, this.operations.push(e), e
            }

            clone() {
                const e = new this.constructor;
                for (const t of this.operations) e.addOperation(t.clone());
                return e
            }

            getReversed() {
                const e = new this._reverseDeltaClass;
                for (const t of this.operations) e.addOperation(t.getReversed());
                e.operations.reverse();
                for (let t = 0; t < e.operations.length; t++) e.operations[t].baseVersion = this.operations[this.operations.length - 1].baseVersion + t + 1;
                return e
            }

            toJSON() {
                const e = Td(this);
                return e.__className = this.constructor.className, delete e.batch, e
            }

            static get className() {
                return 'engine.model.delta.Delta'
            }
        }

        Pm.register(Em);

        class Sm extends Em {
            get type() {
                return 'attribute'
            }

            get key() {
                return this.operations[0] ? this.operations[0].key : null
            }

            get value() {
                return this.operations[0] ? this.operations[0].newValue : null
            }

            get range() {
                if (this._range) return this._range;
                let e = null, t = null;
                for (const o of this.operations) o instanceof vm || ((null === e || e.isAfter(o.range.start)) && (e = o.range.start), (null === t || t.isBefore(o.range.end)) && (t = o.range.end));
                return e && t ? (this._range = new Hu(e, t), this._range) : null
            }

            get _reverseDeltaClass() {
                return Sm
            }

            toJSON() {
                const e = super.toJSON();
                return delete e._range, e
            }

            static get className() {
                return 'engine.model.delta.AttributeDelta'
            }
        }

        Pm.register(Sm);

        class Om extends Em {
            get type() {
                return 'split'
            }

            get position() {
                return this._moveOperation ? this._moveOperation.sourcePosition : null
            }

            get _cloneOperation() {
                return this.operations[0] || null
            }

            get _moveOperation() {
                return this.operations[1] && this.operations[1] instanceof hm ? this.operations[1] : null
            }

            get _reverseDeltaClass() {
                return Rm
            }

            static get className() {
                return 'engine.model.delta.SplitDelta'
            }
        }

        Pm.register(Om);

        class Rm extends Em {
            get type() {
                return 'merge'
            }

            get position() {
                return this._removeOperation ? this._removeOperation.sourcePosition : null
            }

            get _removeOperation() {
                return this.operations[1] || null
            }

            get _reverseDeltaClass() {
                return Om
            }

            static get className() {
                return 'engine.model.delta.MergeDelta'
            }
        }

        Pm.register(Rm);

        class Im extends Em {
            get type() {
                return 'move'
            }

            get howMany() {
                return this._moveOperation ? this._moveOperation.howMany : null
            }

            get sourcePosition() {
                return this._moveOperation ? this._moveOperation.sourcePosition : null
            }

            get targetPosition() {
                return this._moveOperation ? this._moveOperation.targetPosition : null
            }

            get _moveOperation() {
                return this.operations[0] || null
            }

            get _reverseDeltaClass() {
                return Im
            }

            static get className() {
                return 'engine.model.delta.MoveDelta'
            }
        }

        Pm.register(Im);

        class Vm extends Im {
            static get className() {
                return 'engine.model.delta.RemoveDelta'
            }
        }

        Pm.register(Vm);

        class Fm extends Em {
            get type() {
                return 'rename'
            }

            get _reverseDeltaClass() {
                return Fm
            }

            static get className() {
                return 'engine.model.delta.RenameDelta'
            }
        }

        Pm.register(Fm);

        class Nm extends Em {
            get type() {
                return 'wrap'
            }

            get range() {
                const e = this._moveOperation;
                return e ? Hu.createFromPositionAndShift(e.sourcePosition, e.howMany) : null
            }

            get howMany() {
                const e = this.range;
                return e ? e.end.offset - e.start.offset : 0
            }

            get _insertOperation() {
                return this.operations[0] || null
            }

            get _moveOperation() {
                return this.operations[1] || null
            }

            get _reverseDeltaClass() {
                return Mm
            }

            static get className() {
                return 'engine.model.delta.WrapDelta'
            }
        }

        Pm.register(Nm);

        class Mm extends Em {
            get type() {
                return 'unwrap'
            }

            get position() {
                return this._moveOperation ? this._moveOperation.targetPosition : null
            }

            get _moveOperation() {
                return this.operations[0] || null
            }

            get _reverseDeltaClass() {
                return Nm
            }

            static get className() {
                return 'engine.model.delta.UnwrapDelta'
            }
        }

        Pm.register(Mm);

        class Dm extends Em {
            get type() {
                return 'insert'
            }

            get position() {
                return this._insertOperation ? this._insertOperation.position : null
            }

            get nodes() {
                return this._insertOperation ? this._insertOperation.nodes : null
            }

            get _insertOperation() {
                return this.operations[0] || null
            }

            get _reverseDeltaClass() {
                return Vm
            }

            static get className() {
                return 'engine.model.delta.InsertDelta'
            }
        }

        Pm.register(Dm);

        class Bm extends Dm {
            static get className() {
                return 'engine.model.delta.WeakInsertDelta'
            }
        }

        Pm.register(Bm);
        var Lm = function (e, t, o = {isStrong: !1}) {
            let n, i;
            e instanceof _m ? n = zm.InsertOperation : e instanceof fm ? n = zm.AttributeOperation : e instanceof xm ? n = zm.RootAttributeOperation : e instanceof ym ? n = zm.RenameOperation : e instanceof wm ? n = zm.MarkerOperation : e instanceof hm ? n = zm.MoveOperation : i = Co, n && (t instanceof _m ? i = n.InsertOperation : t instanceof fm ? i = n.AttributeOperation : t instanceof xm ? i = n.RootAttributeOperation : t instanceof ym ? i = n.RenameOperation : t instanceof wm ? i = n.MarkerOperation : t instanceof hm ? i = n.MoveOperation : i = Co);
            const r = i(e, t, o);
            return Ao(e.baseVersion, r)
        };
        const zm = {
            InsertOperation: {
                InsertOperation(e, t, o) {
                    const n = e.clone(), i = void 0 === o.insertBefore ? !o.isStrong : o.insertBefore;
                    return n.position = n.position._getTransformedByInsertion(t.position, t.nodes.maxOffset, i), [n]
                },
                AttributeOperation: Co,
                RootAttributeOperation: Co,
                RenameOperation: Co,
                MarkerOperation: Co,
                MoveOperation(e, t, o) {
                    const n = e.clone(), i = void 0 === o.insertBefore ? !o.isStrong : o.insertBefore;
                    return n.position = e.position._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany, i, t.isSticky && !o.forceNotSticky), [n]
                }
            }, AttributeOperation: {
                InsertOperation(e, t) {
                    const o = e.range._getTransformedByInsertion(t.position, t.nodes.maxOffset, !0, !1);
                    return o.reverse().map((t) => new fm(t, e.key, e.oldValue, e.newValue, e.baseVersion))
                }, AttributeOperation(e, t, o) {
                    if (e.key === t.key) {
                        const n = e.range.getDifference(t.range).map((t) => new fm(t, e.key, e.oldValue, e.newValue, e.baseVersion)),
                            i = e.range.getIntersection(t.range);
                        return i && (o.isStrong ? n.push(new fm(i, t.key, t.newValue, e.newValue, e.baseVersion)) : 0 === n.length && n.push(new vm(0))), n
                    }
                    return [e.clone()]
                }, RootAttributeOperation: Co, RenameOperation: Co, MarkerOperation: Co, MoveOperation(e, t) {
                    const o = Hu.createFromPositionAndShift(t.sourcePosition, t.howMany);
                    let n = [];
                    const i = Po(e.range.getDifference(o)), r = e.range.getIntersection(o);
                    return null !== i && (i.start = i.start._getTransformedByDeletion(t.sourcePosition, t.howMany), i.end = i.end._getTransformedByDeletion(t.sourcePosition, t.howMany), n = i._getTransformedByInsertion(t.getMovedRangeStart(), t.howMany, !0, !1).reverse()), null !== r && (r.start = r.start._getCombined(t.sourcePosition, t.getMovedRangeStart()), r.end = r.end._getCombined(t.sourcePosition, t.getMovedRangeStart()), n.push(r)), n.map((t) => new fm(t, e.key, e.oldValue, e.newValue, e.baseVersion))
                }
            }, RootAttributeOperation: {
                InsertOperation: Co, AttributeOperation: Co, RootAttributeOperation(e, t, o) {
                    return e.root !== t.root || e.key !== t.key || (e.newValue === t.newValue || o.isStrong) && e.newValue !== t.newValue ? [e.clone()] : [new vm(e.baseVersion)]
                }, RenameOperation: Co, MarkerOperation: Co, MoveOperation: Co
            }, RenameOperation: {
                InsertOperation(e, t) {
                    const o = e.clone();
                    return o.position = o.position._getTransformedByInsertion(t.position, t.nodes.maxOffset, !0), [o]
                }, AttributeOperation: Co, RootAttributeOperation: Co, RenameOperation(e, t, o) {
                    const n = e.clone();
                    if (e.position.isEqual(t.position)) if (o.isStrong) n.oldName = t.newName; else return [new vm(e.baseVersion)];
                    return [n]
                }, MarkerOperation: Co, MoveOperation(e, t) {
                    const o = e.clone(), n = o.position.isEqual(t.sourcePosition);
                    return o.position = o.position._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany, !0, n), [o]
                }
            }, MarkerOperation: {
                InsertOperation(e, t) {
                    const o = e.clone();
                    return o.oldRange && (o.oldRange = o.oldRange._getTransformedByInsertion(t.position, t.nodes.maxOffset, !1, !1)[0]), o.newRange && (o.newRange = o.newRange._getTransformedByInsertion(t.position, t.nodes.maxOffset, !1, !1)[0]), [o]
                }, AttributeOperation: Co, RootAttributeOperation: Co, RenameOperation: Co, MarkerOperation(e, t, o) {
                    const n = e.clone();
                    if (e.name == t.name) if (o.isStrong) n.oldRange = t.newRange; else return [new vm(e.baseVersion)];
                    return [n]
                }, MoveOperation(e, t) {
                    const o = e.clone();
                    if (o.oldRange) {
                        const e = o.oldRange._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany);
                        o.oldRange = Hu.createFromRanges(e)
                    }
                    if (o.newRange) {
                        const e = o.newRange._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany);
                        o.newRange = Hu.createFromRanges(e)
                    }
                    return [o]
                }
            }, MoveOperation: {
                InsertOperation(e, t, o) {
                    let n = Hu.createFromPositionAndShift(e.sourcePosition, e.howMany);
                    const i = e.isSticky && !o.forceNotSticky;
                    n = n._getTransformedByInsertion(t.position, t.nodes.maxOffset, !1, i)[0];
                    const r = void 0 === o.insertBefore ? !o.isStrong : o.insertBefore,
                        a = new e.constructor(n.start, n.end.offset - n.start.offset, e.targetPosition._getTransformedByInsertion(t.position, t.nodes.maxOffset, r), e.baseVersion);
                    return a.isSticky = e.isSticky, [a]
                },
                AttributeOperation: Co,
                RootAttributeOperation: Co,
                RenameOperation: Co,
                MarkerOperation: Co,
                MoveOperation(e, t, o) {
                    const n = Hu.createFromPositionAndShift(e.sourcePosition, e.howMany),
                        i = Hu.createFromPositionAndShift(t.sourcePosition, t.howMany);
                    let r = o.isStrong;
                    const a = e.isSticky && !o.forceNotSticky, s = void 0 === o.insertBefore ? !r : o.insertBefore,
                        l = e.targetPosition._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany, s, t.isSticky && !o.forceNotSticky);
                    if (To(e, t) && To(t, e)) return [t.getReversed()];
                    const d = n.containsPosition(t.targetPosition) || n.start.isEqual(t.targetPosition) && a || n.end.isEqual(t.targetPosition) && a;
                    if (d && n.containsRange(i, !0)) return n.start = n.start._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany, !a), n.end = n.end._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany, a), Eo([n], l, e);
                    const c = i.containsPosition(e.targetPosition) || i.start.isEqual(e.targetPosition) && t.isSticky && !o.forceNotSticky || i.end.isEqual(e.targetPosition) && t.isSticky && !o.forceNotSticky;
                    if (c && i.containsRange(n, !0)) return n.start = n.start._getCombined(t.sourcePosition, t.getMovedRangeStart()), n.end = n.end._getCombined(t.sourcePosition, t.getMovedRangeStart()), Eo([n], l, e);
                    const u = A(e.sourcePosition.getParentPath(), t.sourcePosition.getParentPath());
                    if ('prefix' == u || 'extension' == u) return n.start = n.start._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany, !a), n.end = n.end._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany, a), Eo([n], l, e);
                    o.forceWeakRemove || (e instanceof km && !(t instanceof km) ? r = !0 : !(e instanceof km) && t instanceof km && (r = !1));
                    const m = [], p = n.getDifference(i);
                    for (const n of p) {
                        n.start = n.start._getTransformedByDeletion(t.sourcePosition, t.howMany), n.end = n.end._getTransformedByDeletion(t.sourcePosition, t.howMany);
                        const e = 'same' == A(n.start.getParentPath(), t.getMovedRangeStart().getParentPath()),
                            o = n._getTransformedByInsertion(t.getMovedRangeStart(), t.howMany, e, a);
                        m.push(...o)
                    }
                    const g = n.getIntersection(i);
                    return null !== g && r && !d && (g.start = g.start._getCombined(t.sourcePosition, t.getMovedRangeStart()), g.end = g.end._getCombined(t.sourcePosition, t.getMovedRangeStart()), 0 === m.length ? m.push(g) : 1 == m.length ? i.start.isBefore(n.start) || i.start.isEqual(n.start) ? m.unshift(g) : m.push(g) : m.splice(1, 0, g)), 0 === m.length ? [new vm(e.baseVersion)] : Eo(m, l, e)
                }
            }
        };
        var ot = function (e, t, o) {
            var n = -1, i = e.length;
            0 > t && (t = -t > i ? 0 : i + t), o = o > i ? i : o, 0 > o && (o += i), i = t > o ? 0 : o - t >>> 0, t >>>= 0;
            for (var r = Array(i); ++n < i;) r[n] = e[n + t];
            return r
        }, jm = Math.ceil, qm = function (e) {
            return sl(e) || rl(e)
        }, Wm = Oo, Um = function (e, t, o) {
            for (var n = e.length, i = t + (o ? 0 : -1); o ? i-- : ++i < n;) {
                var r = e[i];
                if (r !== r) return i
            }
            return -1
        }, Hm = function (e, t, o) {
            if (t !== t) return Um(e, o);
            for (var n = o - 1, i = e.length; ++n < i;) if (e[n] === t) return n;
            return -1
        }, Km = function (e, t) {
            return !!e.length && -1 < Hm(e, t, 0)
        }, Gm = function (e, t, o) {
            for (var n = -1, i = e.length; ++n < i;) if (o(t, e[n])) return !0;
            return !1
        }, $m = function (e, t) {
            for (var o = -1, n = e.length, i = Array(n); ++o < n;) i[o] = t(e[o], o, e);
            return i
        }, Jm = function (e) {
            return function (t) {
                return e(t)
            }
        }, Qm = function (e, t) {
            return e.has(t)
        }, Ym = function (e, t, o, n) {
            var i = -1, r = Km, a = !0, s = e.length, l = [], d = t.length;
            if (!s) return l;
            o && (t = $m(t, Jm(o))), n ? (r = Gm, a = !1) : t.length >= 200 && (r = Qm, a = !1, t = new Xc(t));
            outer:for (; ++i < s;) {
                var c = e[i], u = o ? o(c) : c;
                if (c = n || 0 !== c ? c : 0, a && u === u) {
                    for (var m = d; m--;) if (t[m] === u) continue outer;
                    l.push(c)
                } else r(t, u, n) || l.push(c)
            }
            return l
        }, Xm = Jd(function (e, t) {
            return el(e) ? Ym(e, Wm(t, 1, el, !0)) : []
        }), Zm = 1, ep = 2, tp = function (e) {
            return e === e && !us(e)
        }, op = function (e, t) {
            return $m(t, function (t) {
                return [t, e[t]]
            })
        }, np = function (e) {
            var t = -1, o = Array(e.size);
            return e.forEach(function (e) {
                o[++t] = [e, e]
            }), o
        }, ip = function (e) {
            return function (t) {
                var o = Kl(t);
                return o == '[object Map]' ? od(t) : o == '[object Set]' ? np(t) : op(t, e(t))
            }
        }(hl), rp = function (e) {
            for (var t = ip(e), o = t.length; o--;) t[o][2] = tp(t[o][1]);
            return t
        }, ap = function (e, t) {
            return function (o) {
                return null != o && o[e] === t && (t !== void 0 || e in Object(o))
            }
        }, sp = function (e) {
            var t = rp(e);
            return 1 == t.length && t[0][2] ? ap(t[0][0], t[0][1]) : function (o) {
                return o === e || Ro(o, e, t)
            }
        }, lp = 'Expected a function';
        Io.Cache = Ds;
        var dp = cd ? cd.prototype : void 0, cp = dp ? dp.toString : void 0, up = function (e) {
                if ('string' == typeof e) return e;
                if (Dd(e)) return cp ? cp.call(e) : '';
                var t = e + '';
                return '0' == t && 1 / e == -(1 / 0) ? '-0' : t
            }, mp = function (e) {
                return null == e ? '' : up(e)
            }, pp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g, gp = /\\(\\)?/g,
            fp = Io(function (e) {
                var t = [];
                return mp(e).replace(pp, function (e, o, n, i) {
                    t.push(n ? i.replace(gp, '$1') : o || e)
                }), t
            }), hp = function (e) {
                return sl(e) ? e : fp(e)
            }, bp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, kp = /^\w*$/, _p = Vo, wp = function (e) {
                if ('string' == typeof e || Dd(e)) return e;
                var t = e + '';
                return '0' == t && 1 / e == -(1 / 0) ? '-0' : t
            }, vp = function (e, t) {
                t = _p(t, e) ? [t] : hp(t);
                for (var o = 0, n = t.length; null != e && o < n;) e = e[wp(t[o++])];
                return o && o == n ? e : void 0
            }, yp = function (e, t, o) {
                var n = null == e ? void 0 : vp(e, t);
                return n === void 0 ? o : n
            }, xp = function (e, t, o) {
                t = _p(t, e) ? [t] : hp(t);
                for (var n = -1, i = t.length, r; ++n < i;) {
                    var a = wp(t[n]);
                    if (!(r = null != e && o(e, a))) break;
                    e = e[a]
                }
                if (r) return r;
                var i = e ? e.length : 0;
                return !!i && Xs(i) && pl(a, i) && (sl(e) || cl(e) || rl(e))
            }, Cp = function (e, t) {
                return null != e && xp(e, t, Fo)
            }, Ap = function (e, t) {
                return _p(e) && tp(t) ? ap(wp(e), t) : function (o) {
                    var n = yp(o, e);
                    return n === void 0 && n === t ? Cp(o, e) : fu(t, n, void 0, 1 | 2)
                }
            }, Tp = function (e) {
                return e
            }, Pp = function (e) {
                return function (t) {
                    return vp(t, e)
                }
            }, Ep = function (e) {
                return _p(e) ? Qs(wp(e)) : Pp(e)
            }, Sp = function (e) {
                return 'function' == typeof e ? e : null == e ? Tp : 'object' == typeof e ? sl(e) ? Ap(e[0], e[1]) : sp(e) : Ep(e)
            }, Op = Jd(function (e, t) {
                var o = Wu(t);
                return el(o) && (o = void 0), el(e) ? Ym(e, Wm(t, 1, el, !0), Sp(o)) : []
            }), Rp = Jd(function (e, t) {
                var o = Wu(t);
                return el(o) && (o = void 0), el(e) ? Ym(e, Wm(t, 1, el, !0), void 0, o) : []
            }), Ip = function (e, t, o) {
                var n = e ? e.length : 0;
                return n ? (t = o || void 0 === t ? 1 : Gd(t), ot(e, 0 > t ? 0 : t, n)) : []
            }, Vp = function (e, t, o) {
                var n = e ? e.length : 0;
                return n ? (t = o || void 0 === t ? 1 : Gd(t), t = n - t, ot(e, 0, 0 > t ? 0 : t)) : []
            }, Fp = function (e, t, o, n) {
                for (var i = e.length, r = n ? i : -1; (n ? r-- : ++r < i) && t(e[r], r, e);) ;
                return o ? ot(e, n ? 0 : r, n ? r + 1 : i) : ot(e, n ? r + 1 : 0, n ? i : r)
            }, Np = function (e, t, o) {
                return e === e && (void 0 !== o && (e = e <= o ? e : o), void 0 !== t && (e = e >= t ? e : t)), e
            }, Mp = function (e) {
                return e ? Np(Gd(e), 0, 4294967295) : 0
            }, Dp = function (e, t, o, n) {
                var i = e.length;
                for (o = Gd(o), 0 > o && (o = -o > i ? 0 : i + o), n = void 0 === n || n > i ? i : Gd(n), 0 > n && (n += i), n = o > n ? 0 : Mp(n); o < n;) e[o++] = t;
                return e
            }, Bp = function (e, t, o) {
                for (var n = e.length, i = o ? n : -1; o ? i-- : ++i < n;) if (t(e[i], i, e)) return i;
                return -1
            }, Lp = function (e) {
                return e && e.length ? e[0] : void 0
            }, zp = function (e, t, o) {
                for (var n = o ? Gm : Km, i = e[0].length, r = e.length, a = r, s = Array(r), l = Infinity, d = []; a--;) {
                    var c = e[a];
                    a && t && (c = $m(c, Jm(t))), l = Da(c.length, l), s[a] = !o && (t || 120 <= i && 120 <= c.length) ? new Xc(a && c) : void 0
                }
                c = e[0];
                var u = -1, m = s[0];
                outer:for (; ++u < i && d.length < l;) {
                    var p = c[u], g = t ? t(p) : p;
                    if (p = o || 0 !== p ? p : 0, m ? !Qm(m, g) : !n(d, g, o)) {
                        for (a = r; --a;) {
                            var f = s[a];
                            if (f ? !Qm(f, g) : !n(e[a], g, o)) continue outer
                        }
                        m && m.push(g), d.push(p)
                    }
                }
                return d
            }, jp = function (e) {
                return el(e) ? e : []
            }, qp = Jd(function (e) {
                var t = $m(e, jp);
                return t.length && t[0] === e[0] ? zp(t) : []
            }), Wp = Jd(function (e) {
                var t = Wu(e), o = $m(e, jp);
                return t === Wu(o) ? t = void 0 : o.pop(), o.length && o[0] === e[0] ? zp(o, Sp(t)) : []
            }), Up = Jd(function (e) {
                var t = Wu(e), o = $m(e, jp);
                return t === Wu(o) ? t = void 0 : o.pop(), o.length && o[0] === e[0] ? zp(o, void 0, t) : []
            }), Hp = Array.prototype, Kp = Hp.join, Gp = function (e, t) {
                var o = e.length;
                if (o) return t += 0 > t ? o : 0, pl(t, o) ? e[t] : void 0
            }, $p = function (e, t, o, n) {
                for (var i = o - 1, r = e.length; ++i < r;) if (n(e[i], t)) return i;
                return -1
            }, Jp = Array.prototype, Qp = Jp.splice, Yp = function (e, t, o, n) {
                var i = n ? $p : Hm, r = -1, a = t.length, s = e;
                for (o && (s = $m(e, Jm(o))); ++r < a;) for (var l = 0, d = t[r], c = o ? o(d) : d; -1 < (l = i(s, c, l, n));) s !== e && Qp.call(s, l, 1), Qp.call(e, l, 1);
                return e
            }, Xp = function (e, t) {
                return e && e.length && t && t.length ? Yp(e, t) : e
            }, Zp = Jd(Xp), eg = function (e, t) {
                for (var o = -1, n = t.length, i = Array(n); ++o < n;) i[o] = null == e ? void 0 : yp(e, t[o]);
                return i
            }, tg = function (e, t) {
                return 1 == t.length ? e : vp(e, ot(t, 0, -1))
            }, og = Array.prototype, ng = og.splice, ig = function (e, t) {
                for (var o = e ? t.length : 0, n = o - 1; o--;) {
                    var i = t[o];
                    if (o == n || i !== r) {
                        var r = i;
                        if (pl(i)) ng.call(e, i, 1); else if (!_p(i, e)) {
                            var a = hp(i), s = tg(e, a);
                            null != s && delete s[wp(Wu(a))]
                        } else delete e[wp(i)]
                    }
                }
                return e
            }, rg = function (e, t) {
                if (e !== t) {
                    var o = e !== void 0, n = null === e, i = e === e, r = Dd(e), a = t !== void 0, s = null === t,
                        l = t === t, d = Dd(t);
                    if (!s && !d && !r && e > t || r && a && l && !s && !d || n && a && l || !o && l || !i) return 1;
                    if (!n && !r && !d && e < t || d && o && i && !n && !r || s && o && i || !a && i || !l) return -1
                }
                return 0
            }, ag = Jd(function (e, t) {
                t = Wm(t, 1);
                var o = e ? e.length : 0, n = eg(e, t);
                return ig(e, $m(t, function (e) {
                    return pl(e, o) ? +e : e
                }).sort(rg)), n
            }), sg = Array.prototype, lg = sg.reverse, dg = function (e, t, o, n) {
                t = o(t);
                for (var i = 0, r = e ? e.length : 0, a = t !== t, s = null === t, l = Dd(t), d = void 0 === t; i < r;) {
                    var c = Ba((i + r) / 2), u = o(e[c]), m = u !== void 0, p = null === u, g = u === u, f = Dd(u);
                    if (a) var h = n || g; else h = d ? g && (n || m) : s ? g && m && (n || !p) : l ? g && m && !p && (n || !f) : !(p || f) && (n ? u <= t : u < t);
                    h ? i = c + 1 : r = c
                }
                return Da(r, 4294967295 - 1)
            }, cg = function (e, t, o) {
                var n = 0, i = e ? e.length : n;
                if ('number' == typeof t && t === t && i <= 4294967295 >>> 1) {
                    for (; n < i;) {
                        var r = n + i >>> 1, a = e[r];
                        null !== a && !Dd(a) && (o ? a <= t : a < t) ? n = r + 1 : i = r
                    }
                    return i
                }
                return dg(e, t, Tp, o)
            }, ug = function (e, t) {
                for (var o = -1, n = e.length, i = 0, r = []; ++o < n;) {
                    var a = e[o], s = t ? t(a) : a;
                    if (!o || !as(s, l)) {
                        var l = s;
                        r[i++] = 0 === a ? 0 : a
                    }
                }
                return r
            }, mg = Rl && 1 / sd(new Rl([, -0]))[1] == 1 / 0 ? function (e) {
                return new Rl(e)
            } : function () {
            }, pg = function (e, t, o) {
                var n = -1, i = Km, r = e.length, a = !0, s = [], l = s;
                if (o) a = !1, i = Gm; else if (r >= 200) {
                    var d = t ? null : mg(e);
                    if (d) return sd(d);
                    a = !1, i = Qm, l = new Xc
                } else l = t ? [] : s;
                outer:for (; ++n < r;) {
                    var c = e[n], u = t ? t(c) : c;
                    if (c = o || 0 !== c ? c : 0, a && u === u) {
                        for (var m = l.length; m--;) if (l[m] === u) continue outer;
                        t && l.push(u), s.push(c)
                    } else i(l, u, o) || (l !== s && l.push(u), s.push(c))
                }
                return s
            }, gg = Jd(function (e) {
                return pg(Wm(e, 1, el, !0))
            }), fg = Jd(function (e) {
                var t = Wu(e);
                return el(t) && (t = void 0), pg(Wm(e, 1, el, !0), Sp(t))
            }), hg = Jd(function (e) {
                var t = Wu(e);
                return el(t) && (t = void 0), pg(Wm(e, 1, el, !0), void 0, t)
            }), bg = function (e, t) {
                for (var o = -1, n = e.length, i = 0, r = []; ++o < n;) {
                    var a = e[o];
                    t(a, o, e) && (r[i++] = a)
                }
                return r
            }, kg = function (e) {
                if (!(e && e.length)) return [];
                var t = 0;
                return e = bg(e, function (e) {
                    if (el(e)) return t = Ma(e.length, t), !0
                }), Js(t, function (t) {
                    return $m(e, Qs(t))
                })
            }, _g = function (e, t) {
                if (!(e && e.length)) return [];
                var o = kg(e);
                return null == t ? o : $m(o, function (e) {
                    return Fd(t, void 0, e)
                })
            }, wg = Jd(function (e, t) {
                return el(e) ? Ym(e, t) : []
            }), vg = function (e, t, o) {
                for (var n = -1, i = e.length; ++n < i;) var r = r ? xl(Ym(r, e[n], t, o), Ym(e[n], r, t, o)) : e[n];
                return r && r.length ? pg(r, t, o) : []
            }, yg = Jd(function (e) {
                return vg(bg(e, el))
            }), xg = Jd(function (e) {
                var t = Wu(e);
                return el(t) && (t = void 0), vg(bg(e, el), Sp(t))
            }), Cg = Jd(function (e) {
                var t = Wu(e);
                return el(t) && (t = void 0), vg(bg(e, el), void 0, t)
            }), Ag = Jd(kg), Tg = function (e, t, o) {
                for (var n = -1, i = e.length, r = t.length, a = {}; ++n < i;) {
                    var s = n < r ? t[n] : void 0;
                    o(a, e[n], s)
                }
                return a
            }, Pg = function (e, t, o, n) {
                t = _p(t, e) ? [t] : hp(t);
                for (var i = -1, r = t.length, a = e; null != a && ++i < r;) {
                    var s = wp(t[i]);
                    if (us(a)) {
                        var l = o;
                        if (i != r - 1) {
                            var d = a[s];
                            l = n ? n(d, s, a) : void 0, l === void 0 && (l = null == d ? pl(t[i + 1]) ? [] : {} : d)
                        }
                        qs(a, s, l)
                    }
                    a = a[s]
                }
                return e
            }, Eg = Jd(function (e) {
                var t = e.length, o = 1 < t ? e[t - 1] : void 0;
                return o = 'function' == typeof o ? (e.pop(), o) : void 0, _g(e, o)
            }), Sg = {
                chunk: function (e, t, o) {
                    t = (o ? Vd(e, t, o) : void 0 === t) ? 1 : Ma(Gd(t), 0);
                    var n = e ? e.length : 0;
                    if (!n || 1 > t) return [];
                    for (var i = 0, r = 0, a = Array(jm(n / t)); i < n;) a[r++] = ot(e, i, i += t);
                    return a
                },
                compact: function (e) {
                    for (var t = -1, o = e ? e.length : 0, n = 0, i = []; ++t < o;) {
                        var r = e[t];
                        r && (i[n++] = r)
                    }
                    return i
                },
                concat: function () {
                    for (var e = arguments.length, t = Array(e ? e - 1 : 0), o = arguments[0], n = e; n--;) t[n - 1] = arguments[n];
                    return e ? xl(sl(o) ? _l(o) : [o], Wm(t, 1)) : []
                },
                difference: Xm,
                differenceBy: Op,
                differenceWith: Rp,
                drop: Ip,
                dropRight: Vp,
                dropRightWhile: function (e, t) {
                    return e && e.length ? Fp(e, Sp(t, 3), !0, !0) : []
                },
                dropWhile: function (e, t) {
                    return e && e.length ? Fp(e, Sp(t, 3), !0) : []
                },
                fill: function (e, t, o, n) {
                    var i = e ? e.length : 0;
                    return i ? (o && 'number' != typeof o && Vd(e, t, o) && (o = 0, n = i), Dp(e, t, o, n)) : []
                },
                findIndex: function (e, t) {
                    return e && e.length ? Bp(e, Sp(t, 3)) : -1
                },
                findLastIndex: function (e, t) {
                    return e && e.length ? Bp(e, Sp(t, 3), !0) : -1
                },
                first: Lp,
                flatten: function (e) {
                    var t = e ? e.length : 0;
                    return t ? Wm(e, 1) : []
                },
                flattenDeep: function (e) {
                    var t = e ? e.length : 0;
                    return t ? Wm(e, 1 / 0) : []
                },
                flattenDepth: function (e, t) {
                    var o = e ? e.length : 0;
                    return o ? (t = void 0 === t ? 1 : Gd(t), Wm(e, t)) : []
                },
                fromPairs: function (e) {
                    for (var t = -1, o = e ? e.length : 0, n = {}; ++t < o;) {
                        var i = e[t];
                        n[i[0]] = i[1]
                    }
                    return n
                },
                head: Lp,
                indexOf: function (e, t, o) {
                    var n = e ? e.length : 0;
                    return n ? (o = Gd(o), 0 > o && (o = Ma(n + o, 0)), Hm(e, t, o)) : -1
                },
                initial: function (e) {
                    return Vp(e, 1)
                },
                intersection: qp,
                intersectionBy: Wp,
                intersectionWith: Up,
                join: function (e, t) {
                    return e ? Kp.call(e, t) : ''
                },
                last: Wu,
                lastIndexOf: function (e, t, o) {
                    var n = e ? e.length : 0;
                    if (!n) return -1;
                    var i = n;
                    if (void 0 !== o && (i = Gd(o), i = (0 > i ? Ma(n + i, 0) : Da(i, n - 1)) + 1), t !== t) return Um(e, i, !0);
                    for (; i--;) if (e[i] === t) return i;
                    return -1
                },
                nth: function (e, t) {
                    return e && e.length ? Gp(e, Gd(t)) : void 0
                },
                pull: Zp,
                pullAll: Xp,
                pullAllBy: function (e, t, o) {
                    return e && e.length && t && t.length ? Yp(e, t, Sp(o)) : e
                },
                pullAllWith: function (e, t, o) {
                    return e && e.length && t && t.length ? Yp(e, t, void 0, o) : e
                },
                pullAt: ag,
                remove: function (e, t) {
                    var o = [];
                    if (!(e && e.length)) return o;
                    var n = -1, i = [], r = e.length;
                    for (t = Sp(t, 3); ++n < r;) {
                        var a = e[n];
                        t(a, n, e) && (o.push(a), i.push(n))
                    }
                    return ig(e, i), o
                },
                reverse: function (e) {
                    return e ? lg.call(e) : e
                },
                slice: function (e, t, o) {
                    var n = e ? e.length : 0;
                    return n ? (o && 'number' != typeof o && Vd(e, t, o) ? (t = 0, o = n) : (t = null == t ? 0 : Gd(t), o = void 0 === o ? n : Gd(o)), ot(e, t, o)) : []
                },
                sortedIndex: function (e, t) {
                    return cg(e, t)
                },
                sortedIndexBy: function (e, t, o) {
                    return dg(e, t, Sp(o))
                },
                sortedIndexOf: function (e, t) {
                    var o = e ? e.length : 0;
                    if (o) {
                        var n = cg(e, t);
                        if (n < o && as(e[n], t)) return n
                    }
                    return -1
                },
                sortedLastIndex: function (e, t) {
                    return cg(e, t, !0)
                },
                sortedLastIndexBy: function (e, t, o) {
                    return dg(e, t, Sp(o), !0)
                },
                sortedLastIndexOf: function (e, t) {
                    var o = e ? e.length : 0;
                    if (o) {
                        var n = cg(e, t, !0) - 1;
                        if (as(e[n], t)) return n
                    }
                    return -1
                },
                sortedUniq: function (e) {
                    return e && e.length ? ug(e) : []
                },
                sortedUniqBy: function (e, t) {
                    return e && e.length ? ug(e, Sp(t)) : []
                },
                tail: function (e) {
                    return Ip(e, 1)
                },
                take: function (e, t, o) {
                    return e && e.length ? (t = o || void 0 === t ? 1 : Gd(t), ot(e, 0, 0 > t ? 0 : t)) : []
                },
                takeRight: function (e, t, o) {
                    var n = e ? e.length : 0;
                    return n ? (t = o || void 0 === t ? 1 : Gd(t), t = n - t, ot(e, 0 > t ? 0 : t, n)) : []
                },
                takeRightWhile: function (e, t) {
                    return e && e.length ? Fp(e, Sp(t, 3), !1, !0) : []
                },
                takeWhile: function (e, t) {
                    return e && e.length ? Fp(e, Sp(t, 3)) : []
                },
                union: gg,
                unionBy: fg,
                unionWith: hg,
                uniq: function (e) {
                    return e && e.length ? pg(e) : []
                },
                uniqBy: function (e, t) {
                    return e && e.length ? pg(e, Sp(t)) : []
                },
                uniqWith: function (e, t) {
                    return e && e.length ? pg(e, void 0, t) : []
                },
                unzip: kg,
                unzipWith: _g,
                without: wg,
                xor: yg,
                xorBy: xg,
                xorWith: Cg,
                zip: Ag,
                zipObject: function (e, t) {
                    return Tg(e || [], t || [], qs)
                },
                zipObjectDeep: function (e, t) {
                    return Tg(e || [], t || [], Pg)
                },
                zipWith: Eg
            };
        const Og = new Map, Rg = {
            transform(e, t, o) {
                const n = Rg.getTransformationCase(e, t) || Rg.defaultTransform, i = n(e, t, Object.assign({}, o)),
                    r = Sg.last(t.operations).baseVersion;
                return No(r, i)
            }, defaultTransform(e, t, o) {
                const n = [];
                let i = t.operations, r = [];
                for (const a of e.operations) {
                    const e = [a];
                    for (const t of i) for (let n = 0; n < e.length; n++) {
                        const i = e[n], a = Lm(i, t, o);
                        Array.prototype.splice.apply(e, [n, 1].concat(a)), n += a.length - 1;
                        const s = Object.assign({}, o);
                        s.isStrong = !o.isStrong, s.insertBefore = o.insertBefore === void 0 ? void 0 : !o.insertBefore;
                        const l = Lm(t, i, s);
                        Array.prototype.push.apply(r, l)
                    }
                    i = r, r = [];
                    for (const t of e) n.push(t)
                }
                return Ho(e.constructor, n)
            }, addTransformationCase(e, t, o) {
                let n = Og.get(e);
                n || (n = new Map, Og.set(e, n)), n.set(t, o)
            }, getTransformationCase(e, t) {
                let o = Og.get(e.constructor);
                if (!o || !o.get(t.constructor)) {
                    const n = Og.keys();
                    for (const i of n) if (e instanceof i && Og.get(i).get(t.constructor)) {
                        o = Og.get(i);
                        break
                    }
                }
                return o ? o.get(t.constructor) : void 0
            }, transformDeltaSets(e, t, o = null) {
                const n = Array.from(e), i = Array.from(t), r = null !== o, a = {isStrong: !0};
                if (r) {
                    a.wasAffected = new Map, a.originalDelta = new Map, a.document = o, a.undoMode = !0;
                    for (const e of i) a.originalDelta.set(e, e)
                }
                for (let s = 0; s < n.length; s++) {
                    const e = [n[s]];
                    for (let t = 0; t < i.length; t++) {
                        const o = [i[t]];
                        for (let t = 0; t < e.length; t++) for (let n = 0; n < o.length; n++) {
                            r && Bo(e[t], o[n], a);
                            const i = Rg.transform(e[t], o[n], {
                                insertBefore: a.insertBefore,
                                forceNotSticky: a.forceNotSticky,
                                isStrong: a.isStrong,
                                forceWeakRemove: a.forceWeakRemove,
                                undoMode: a.undoMode
                            }), s = Rg.transform(o[n], e[t], {
                                insertBefore: !a.insertBefore,
                                forceNotSticky: a.forceNotSticky,
                                isStrong: !a.isStrong,
                                forceWeakRemove: a.forceWeakRemove,
                                undoMode: a.undoMode
                            });
                            if (r) {
                                Uo(e[t], i, a);
                                const r = a.originalDelta.get(o[n]);
                                for (const e of s) a.originalDelta.set(e, r)
                            }
                            e.splice(t, 1, ...i), t += i.length - 1, o.splice(n, 1, ...s), n += s.length - 1
                        }
                        i.splice(t, 1, ...o), t += o.length - 1
                    }
                    n.splice(s, 1, ...e), s += e.length - 1
                }
                const s = Mo(n) - Mo(e), l = Mo(i) - Mo(t);
                return l < s ? Do(i, s - l) : s < l && Do(n, l - s), {deltasA: n, deltasB: i}
            }
        };
        var Ig = Rg;

        class Vg extends Em {
            get type() {
                return 'marker'
            }

            get _reverseDeltaClass() {
                return Vg
            }

            static get className() {
                return 'engine.model.delta.MarkerDelta'
            }
        }

        Pm.register(Vg);
        const Fg = Ig.addTransformationCase, Ng = Ig.defaultTransform;
        Fg(Sm, Bm, (e, t, o) => {
            const n = Ng(e, t, o);
            return e.range.containsPosition(t.position) && n.push(Go(t, e)), n
        }), Fg(Sm, Om, (e, t, o) => {
            if (!t.position) return Ng(e, t, o);
            const n = o.undoMode, i = new Uu(t.position.root, t.position.path.slice(0, -1)), r = Ng(e, t, o);
            if (n || !(t._cloneOperation instanceof _m)) return r;
            for (const n of e.operations) if (n.range.containsPosition(i) || n.range.start.isEqual(i)) {
                const e = new Sm, o = i.getShiftedBy(1), a = Uu.createFromPosition(o);
                a.path.push(0);
                const s = t._cloneOperation.nodes.getNode(0).getAttribute(n.key);
                e.addOperation(new fm(new Hu(o, a), n.key, s === void 0 ? null : s, n.newValue, 0)), r.push(e);
                break
            }
            return r
        }), Fg(Dm, Rm, (e, t, o) => {
            if (!t.position) return Ng(e, t, o);
            const n = o.undoMode;
            return !n && e.position.isEqual(t.position) ? [t.getReversed(), e.clone()] : Ng(e, t, o)
        }), Fg(Vg, Om, Ko), Fg(Vg, Rm, Ko), Fg(Vg, Nm, Ko), Fg(Vg, Mm, Ko), Fg(Vg, Im, Ko), Fg(Vg, Fm, Ko), Fg(Im, Rm, (e, t, o) => {
            const n = o.undoMode;
            if (n || !t.position) return Ng(e, t, o);
            const i = e.sourcePosition.root == t.position.root && 'same' === A(e.sourcePosition.getParentPath(), t.position.getParentPath()),
                r = e.sourcePosition.offset <= t.position.offset && e.sourcePosition.offset + e.howMany > t.position.offset;
            return i && r ? [t.getReversed(), e.clone()] : Ng(e, t, o)
        }), Fg(Rm, Dm, (e, t, o) => {
            if (!e.position) return Ng(e, t, o);
            const n = o.undoMode;
            return !n && e.position.isEqual(t.position) ? [$o()] : Ng(e, t, o)
        }), Fg(Rm, Im, (e, t, o) => {
            const n = o.undoMode;
            if (n || !e.position) return Ng(e, t, o);
            const i = e.position.root == t.sourcePosition.root && 'same' === A(e.position.getParentPath(), t.sourcePosition.getParentPath()),
                r = t.sourcePosition.offset <= e.position.offset && t.sourcePosition.offset + t.howMany > e.position.offset;
            return i && r ? [$o()] : Ng(e, t, o)
        }), Fg(Om, Om, (e, t, o) => {
            const n = o.undoMode;
            if (n) return Ng(e, t, o);
            if (!e.position || !t.position) return Ng(e, t, o);
            const i = e.position.getParentPath(), r = t.position.getParentPath();
            if (e.position.root == t.position.root && 'same' == A(i, r)) if (e = e.clone(), e.position.offset < t.position.offset || e.position.offset == t.position.offset && o.isStrong) {
                e._cloneOperation instanceof bm && t._cloneOperation instanceof bm && e._cloneOperation.sourcePosition.offset > t._cloneOperation.sourcePosition.offset && e._cloneOperation.sourcePosition.offset--;
                const o = Hu.createFromPositionAndShift(e.position, e._moveOperation.howMany),
                    n = Hu.createFromPositionAndShift(t.position, t._moveOperation.howMany), i = o.getDifference(n);
                let r = 0;
                for (const e of i) r += e.end.offset - e.start.offset;
                return 0 == r ? (e.operations.pop(), e.addOperation(new vm(e.operations[0].baseVersion + 1))) : e.operations[1].howMany = r, [e]
            } else {
                const n = Object.assign({}, o);
                return n.isStrong = !0, n.insertBefore = !0, Ng(e, t, n)
            }
            return Ng(e, t, o)
        }), Fg(Om, Mm, (e, t, o) => e.position ? e.position.root == t.position.root && 'same' === A(t.position.path, e.position.getParentPath()) ? [$o()] : Ng(e, t, o) : Ng(e, t, o)), Fg(Om, Nm, (e, t, o) => {
            if (!e.position) return Ng(e, t, o);
            const n = e.position.root == t.range.start.root,
                i = n && 'same' === A(e.position.getParentPath(), t.range.start.getParentPath()),
                r = t.range.start.offset < e.position.offset && t.range.end.offset >= e.position.offset;
            if (i && r) return [$o()];
            if (n && 'same' === A(e.position.getParentPath(), t.range.end.getShiftedBy(-1).path)) {
                const o = e.clone(), n = Uu.createFromPosition(t.range.start);
                n.path.push(t.howMany - 1);
                const i = n.getShiftedBy(1);
                o._cloneOperation.position = i;
                const r = Uu.createFromPosition(n);
                r.path.push(e.position.offset), o._moveOperation.sourcePosition = r;
                const a = Uu.createFromPosition(i);
                return a.path.push(0), o._moveOperation.targetPosition = a, [o]
            }
            return Ng(e, t, o)
        }), Fg(Om, Sm, (e, t, o) => {
            if (!e.position) return Ng(e, t, o);
            e = e.clone();
            const n = o.undoMode, i = new Uu(e.position.root, e.position.path.slice(0, -1));
            if (n || !(e._cloneOperation instanceof _m)) return [e];
            for (const n of t.operations) if (n.range.containsPosition(i) || n.range.start.isEqual(i)) {
                null === n.newValue ? e._cloneOperation.nodes.getNode(0)._removeAttribute(n.key) : e._cloneOperation.nodes.getNode(0)._setAttribute(n.key, n.newValue);
                break
            }
            return [e]
        }), Fg(Mm, Om, (e, t, o) => t.position ? e.position.root == t.position.root && 'same' === A(e.position.path, t.position.getParentPath()) ? [t.getReversed(), e.clone()] : Ng(e, t, o) : Ng(e, t, o)), Fg(Bm, Sm, (e, t) => {
            const o = [e.clone()];
            return t.range.containsPosition(e.position) && o.push(Go(e, t)), o
        }), Fg(Nm, Om, (e, t, o) => {
            if (!t.position) return Ng(e, t, o);
            const n = e.range.start.root == t.position.root,
                i = n && 'same' === A(e.range.start.getParentPath(), t.position.getParentPath()),
                r = e.range.start.offset < t.position.offset && e.range.end.offset >= t.position.offset;
            if (i && r) return [t.getReversed(), e.clone()];
            if (n && 'same' === A(t.position.getParentPath(), e.range.end.getShiftedBy(-1).path)) {
                const t = e.clone();
                return t._insertOperation.position.offset++, t._moveOperation.howMany++, t._moveOperation.targetPosition.path[t._moveOperation.targetPosition.path.length - 2]++, [t]
            }
            return Ng(e, t, o)
        }), Fg(Fm, Om, (e, t, o) => {
            const n = o.undoMode, i = Ng(e, t, o);
            if (n || !(t._cloneOperation instanceof _m)) return i;
            const r = t._cloneOperation.position.getShiftedBy(-1);
            if (r && e.operations[0].position.isEqual(r)) {
                const t = e.clone();
                t.operations[0].position = r.getShiftedBy(1), i.push(t)
            }
            return i
        }), Fg(Om, Fm, (e, t, o) => {
            e = e.clone();
            const n = o.undoMode;
            if (n || !(e._cloneOperation instanceof _m)) return [e];
            const i = e._cloneOperation.position.getShiftedBy(-1);
            if (i && !n && t.operations[0].position.isEqual(i)) {
                const o = t.clone();
                return o.operations[0].position = i.getShiftedBy(1), o.operations[0].oldName = e._cloneOperation.nodes.getNode(0).name, [e, o]
            }
            return [e]
        }), Fg(Vm, Om, (e, t, o) => {
            const n = Ng(e, t, o), i = t._cloneOperation.position || t._cloneOperation.targetPosition;
            if (!i) return Ng(e, t, o);
            const r = o.undoMode;
            if (r) return n;
            for (const r of n) if (r instanceof Vm) {
                const e = r._moveOperation, t = e.sourcePosition.getShiftedBy(e.howMany);
                t.isEqual(i) && (e.howMany += 1)
            }
            return n
        }), Fg(Om, Vm, (e, t, o) => {
            const n = o.undoMode;
            if (n) return Ng(e, t, o);
            const i = e._cloneOperation.position || e._cloneOperation.targetPosition;
            if (!i) return Ng(e, t, o);
            t = t.clone();
            const r = t._moveOperation, a = r.sourcePosition.getShiftedBy(r.howMany);
            return a.isEqual(i) && (r.howMany += 1), Ng(e, t, o)
        });

        class Mg {
            constructor(e = 'default') {
                this.deltas = [], this.type = e
            }

            get baseVersion() {
                for (const e of this.deltas) if (null !== e.baseVersion) return e.baseVersion;
                return null
            }

            addDelta(e) {
                return e.batch = this, this.deltas.push(e), e
            }

            * getOperations() {
                for (const e of this.deltas) yield* e.operations
            }
        }

        class Dg extends Em {
            static get className() {
                return 'engine.model.delta.RootAttributeDelta'
            }
        }

        Pm.register(Dg);

        class Bg extends mm {
            constructor(e, t) {
                super(null), this.sourcePosition = Uu.createFromPosition(e), this.howMany = t
            }

            get type() {
                return 'detach'
            }

            _validate() {
                if (this.sourcePosition.root.document) throw new Ya('detach-operation-on-document-node: Cannot detach document node.')
            }

            _execute() {
                bo(Hu.createFromPositionAndShift(this.sourcePosition, this.howMany))
            }

            static get className() {
                return 'engine.model.operation.DetachOperation'
            }
        }

        class Lg extends ju {
            constructor(e, t, o = 'main') {
                super(t), this._doc = e, this.rootName = o
            }

            get document() {
                return this._doc
            }

            is(e, t) {
                return t ? 'rootElement' == e && t == this.name || super.is(e, t) : 'rootElement' == e || super.is(e)
            }

            toJSON() {
                return this.rootName
            }
        }

        class zg {
            constructor(e, t) {
                this.model = e, this.batch = t
            }

            createText(e, t) {
                return new Bu(e, t)
            }

            createElement(e, t) {
                return new ju(e, t)
            }

            createDocumentFragment() {
                return new pm
            }

            insert(e, t, o) {
                this._assertWriterUsedCorrectly();
                const n = Uu.createAt(t, o), i = e instanceof Bu && !e.parent ? new Bm : new Dm;
                if (e.parent) {
                    if (Zo(e.root, n.root)) return void this.move(Hu.createOn(e), n);
                    if (e.root.document) throw new Error('model-writer-insert-forbidden-move: Cannot move a node from a document to a different tree.'); else this.remove(e)
                }
                const r = n.root.document ? n.root.document.version : null, a = new _m(n, e, r);
                if (this.batch.addDelta(i), i.addOperation(a), this.model.applyOperation(a), e instanceof pm) for (const [t, o] of e.markers) {
                    const e = Uu.createAt(o.root), i = new Hu(o.start._getCombined(e, n), o.end._getCombined(e, n));
                    this.addMarker(t, {range: i, usingOperation: !0})
                }
            }

            insertText(e, t, o, n) {
                t instanceof pm || t instanceof ju || t instanceof Uu ? this.insert(this.createText(e), t, o) : this.insert(this.createText(e, t), o, n)
            }

            insertElement(e, t, o, n) {
                t instanceof pm || t instanceof ju || t instanceof Uu ? this.insert(this.createElement(e), t, o) : this.insert(this.createElement(e, t), o, n)
            }

            append(e, t) {
                this.insert(e, t, 'end')
            }

            appendText(e, t, o) {
                t instanceof pm || t instanceof ju ? this.insert(this.createText(e), t, 'end') : this.insert(this.createText(e, t), o, 'end')
            }

            appendElement(e, t, o) {
                t instanceof pm || t instanceof ju ? this.insert(this.createElement(e), t, 'end') : this.insert(this.createElement(e, t), o, 'end')
            }

            setAttribute(e, t, o) {
                this._assertWriterUsedCorrectly(), o instanceof Hu ? Jo(this, e, t, o) : Qo(this, e, t, o)
            }

            setAttributes(e, t) {
                for (const [o, n] of rt(e)) this.setAttribute(o, n, t)
            }

            removeAttribute(e, t) {
                this._assertWriterUsedCorrectly(), t instanceof Hu ? Jo(this, e, null, t) : Qo(this, e, null, t)
            }

            clearAttributes(e) {
                this._assertWriterUsedCorrectly();
                const t = (e) => {
                    for (const t of e.getAttributeKeys()) this.removeAttribute(t, e)
                };
                if (!(e instanceof Hu)) t(e); else for (const o of e.getItems()) t(o)
            }

            move(e, t, o) {
                if (this._assertWriterUsedCorrectly(), !(e instanceof Hu)) throw new Ya('writer-move-invalid-range: Invalid range to move.');
                if (!e.isFlat) throw new Ya('writer-move-range-not-flat: Range to move is not flat.');
                const n = Uu.createAt(t, o);
                if (!Zo(e.root, n.root)) throw new Ya('writer-move-different-document: Range is going to be moved between different documents.');
                const i = new Im;
                this.batch.addDelta(i);
                const r = e.root.document ? e.root.document.version : null,
                    a = new hm(e.start, e.end.offset - e.start.offset, n, r);
                i.addOperation(a), this.model.applyOperation(a)
            }

            remove(e) {
                this._assertWriterUsedCorrectly();
                const t = (e, t) => {
                    const o = new Vm;
                    this.batch.addDelta(o), Xo(e, t, o, this.model)
                };
                if (e instanceof Hu) {
                    const o = e.getMinimalFlatRanges().reverse();
                    for (const e of o) t(e.start, e.end.offset - e.start.offset)
                } else {
                    const o = e.is('text') ? e.offsetSize : 1;
                    t(Uu.createBefore(e), o)
                }
            }

            merge(e) {
                this._assertWriterUsedCorrectly();
                const t = new Rm;
                this.batch.addDelta(t);
                const o = e.nodeBefore, n = e.nodeAfter;
                if (!(o instanceof ju)) throw new Ya('writer-merge-no-element-before: Node before merge position must be an element.');
                if (!(n instanceof ju)) throw new Ya('writer-merge-no-element-after: Node after merge position must be an element.');
                const i = Uu.createFromParentAndOffset(n, 0), r = Uu.createFromParentAndOffset(o, o.maxOffset),
                    a = e.root.document ? e.root.document.version : null, s = new hm(i, n.maxOffset, r, a);
                s.isSticky = !0, t.addOperation(s), this.model.applyOperation(s), Xo(e, 1, t, this.model)
            }

            rename(e, t) {
                if (this._assertWriterUsedCorrectly(), !(e instanceof ju)) throw new Ya('writer-rename-not-element-instance: Trying to rename an object which is not an instance of Element.');
                const o = new Fm;
                this.batch.addDelta(o);
                const n = e.root.document ? e.root.document.version : null,
                    i = new ym(Uu.createBefore(e), e.name, t, n);
                o.addOperation(i), this.model.applyOperation(i)
            }

            split(e, t) {
                this._assertWriterUsedCorrectly();
                let o = e.parent;
                if (!o.parent) throw new Ya('writer-split-element-no-parent: Element with no parent can not be split.');
                if (t || (t = o.parent), !e.parent.getAncestors({includeSelf: !0}).includes(t)) throw new Ya('writer-split-invalid-limit-element: Limit element is not a position ancestor.');
                let n, i;
                do {
                    const t = new Om;
                    this.batch.addDelta(t);
                    const r = new ju(o.name, o.getAttributes()), a = o.root.document ? o.root.document.version : null,
                        s = new _m(Uu.createAfter(o), r, a);
                    t.addOperation(s), this.model.applyOperation(s);
                    const l = null === a ? null : a + 1,
                        d = new hm(e, o.maxOffset - e.offset, Uu.createFromParentAndOffset(r, 0), l);
                    d.isSticky = !0, t.addOperation(d), this.model.applyOperation(d), n || i || (n = o, i = r), e = Uu.createBefore(r), o = e.parent
                } while (o !== t);
                return {position: e, range: new Hu(Uu.createAt(n, 'end'), Uu.createAt(i))}
            }

            wrap(e, t) {
                if (this._assertWriterUsedCorrectly(), !e.isFlat) throw new Ya('writer-wrap-range-not-flat: Range to wrap is not flat.');
                const o = t instanceof ju ? t : new ju(t);
                if (0 < o.childCount) throw new Ya('writer-wrap-element-not-empty: Element to wrap with is not empty.');
                if (null !== o.parent) throw new Ya('writer-wrap-element-attached: Element to wrap with is already attached to tree model.');
                const n = new Nm;
                this.batch.addDelta(n);
                const i = e.root.document ? e.root.document.version : null, r = new _m(e.end, o, i);
                n.addOperation(r), this.model.applyOperation(r);
                const a = null === i ? null : i + 1, s = Uu.createFromParentAndOffset(o, 0),
                    l = new hm(e.start, e.end.offset - e.start.offset, s, a);
                n.addOperation(l), this.model.applyOperation(l)
            }

            unwrap(e) {
                if (this._assertWriterUsedCorrectly(), null === e.parent) throw new Ya('writer-unwrap-element-no-parent: Trying to unwrap an element which has no parent.');
                const t = new Mm;
                this.batch.addDelta(t);
                const o = Uu.createFromParentAndOffset(e, 0), n = o.root.document ? o.root.document.version : null,
                    i = new hm(o, e.maxOffset, Uu.createBefore(e), n);
                i.isSticky = !0, t.addOperation(i), this.model.applyOperation(i), Xo(Uu.createBefore(e), 1, t, this.model)
            }

            addMarker(e, t) {
                if (this._assertWriterUsedCorrectly(), !t || 'boolean' != typeof t.usingOperation) throw new Ya('writer-addMarker-no-usingOperations: The options.usingOperations parameter is required when adding a new marker.');
                const o = t.usingOperation, n = t.range;
                if (this.model.markers.has(e)) throw new Ya('writer-addMarker-marker-exists: Marker with provided name already exists.');
                if (!n) throw new Ya('writer-addMarker-no-range: Range parameter is required when adding a new marker.');
                return o ? (Yo(this, e, null, n), this.model.markers.get(e)) : this.model.markers._set(e, n, o)
            }

            updateMarker(e, t) {
                this._assertWriterUsedCorrectly();
                const o = 'string' == typeof e ? e : e.name, n = this.model.markers.get(o);
                if (!n) throw new Ya('writer-updateMarker-marker-not-exists: Marker with provided name does not exists.');
                const i = t && t.range, r = !!t && 'boolean' == typeof t.usingOperation;
                if (!r && !i) throw new Ya('writer-updateMarker-wrong-options: One of options is required - provide range or usingOperations.');
                if (r && t.usingOperation !== n.managedUsingOperations) {
                    if (t.usingOperation) Yo(this, o, null, i ? i : n.getRange()); else {
                        const e = n.getRange();
                        Yo(this, o, e, null), this.model.markers._set(o, i ? i : e)
                    }
                    return
                }
                n.managedUsingOperations ? Yo(this, o, n.getRange(), i) : this.model.markers._set(o, i)
            }

            removeMarker(e) {
                this._assertWriterUsedCorrectly();
                const t = 'string' == typeof e ? e : e.name;
                if (!this.model.markers.has(t)) throw new Ya('writer-removeMarker-no-marker: Trying to remove marker which does not exist.');
                const o = this.model.markers.get(t);
                if (!o.managedUsingOperations) return void this.model.markers._remove(t);
                const n = o.getRange();
                Yo(this, t, n, null)
            }

            setSelection(e, t, o) {
                this._assertWriterUsedCorrectly(), this.model.document.selection._setTo(e, t, o)
            }

            setSelectionFocus(e, t) {
                this._assertWriterUsedCorrectly(), this.model.document.selection._setFocus(e, t)
            }

            setSelectionAttribute(e, t) {
                if (this._assertWriterUsedCorrectly(), 'string' == typeof e) this._setSelectionAttribute(e, t); else for (const [t, o] of rt(e)) this._setSelectionAttribute(t, o)
            }

            removeSelectionAttribute(e) {
                if (this._assertWriterUsedCorrectly(), 'string' == typeof e) this._removeSelectionAttribute(e); else for (const t of e) this._removeSelectionAttribute(t)
            }

            overrideSelectionGravity() {
                return this.model.document.selection._overrideGravity()
            }

            restoreSelectionGravity(e) {
                this.model.document.selection._restoreGravity(e)
            }

            _setSelectionAttribute(e, t) {
                const o = this.model.document.selection;
                if (o.isCollapsed && o.anchor.parent.isEmpty) {
                    const n = Xu._getStoreAttributeKey(e);
                    this.setAttribute(n, t, o.anchor.parent)
                }
                o._setAttribute(e, t)
            }

            _removeSelectionAttribute(e) {
                const t = this.model.document.selection;
                if (t.isCollapsed && t.anchor.parent.isEmpty) {
                    const o = Xu._getStoreAttributeKey(e);
                    this.removeAttribute(o, t.anchor.parent)
                }
                t._removeAttribute(e)
            }

            _assertWriterUsedCorrectly() {
                if (this.model._currentWriter !== this) throw new Ya('writer-incorrect-use: Trying to use a writer outside the change() block.')
            }
        }

        class jg {
            constructor(e) {
                this._markerCollection = e, this._changesInElement = new Map, this._elementSnapshots = new Map, this._changedMarkers = new Map, this._changeCount = 0, this._cachedChanges = null, this._cachedChangesWithGraveyard = null
            }

            get isEmpty() {
                return 0 == this._changesInElement.size && 0 == this._changedMarkers.size
            }

            bufferOperation(e) {
                switch (e.type) {
                    case'insert': {
                        if (this._isInInsertedElement(e.position.parent)) return;
                        this._markInsert(e.position.parent, e.position.offset, e.nodes.maxOffset);
                        break
                    }
                    case'addAttribute':
                    case'removeAttribute':
                    case'changeAttribute': {
                        for (const t of e.range.getItems()) this._isInInsertedElement(t.parent) || this._markAttribute(t);
                        break
                    }
                    case'remove':
                    case'move':
                    case'reinsert': {
                        const t = this._isInInsertedElement(e.sourcePosition.parent),
                            o = this._isInInsertedElement(e.targetPosition.parent);
                        t || this._markRemove(e.sourcePosition.parent, e.sourcePosition.offset, e.howMany), o || this._markInsert(e.targetPosition.parent, e.getMovedRangeStart().offset, e.howMany);
                        break
                    }
                    case'rename': {
                        if (this._isInInsertedElement(e.position.parent)) return;
                        this._markRemove(e.position.parent, e.position.offset, 1), this._markInsert(e.position.parent, e.position.offset, 1);
                        const t = Hu.createFromPositionAndShift(e.position, 1);
                        for (const e of this._markerCollection.getMarkersIntersectingRange(t)) {
                            const t = e.getRange();
                            this.bufferMarkerChange(e.name, t, t)
                        }
                        break
                    }
                }
                this._cachedChanges = null
            }

            bufferMarkerChange(e, t, o) {
                const n = this._changedMarkers.get(e);
                n ? (n.newRange = o, null == n.oldRange && null == n.newRange && this._changedMarkers.delete(e)) : this._changedMarkers.set(e, {
                    oldRange: t,
                    newRange: o
                })
            }

            getMarkersToRemove() {
                const e = [];
                for (const [t, o] of this._changedMarkers) null != o.oldRange && e.push({name: t, range: o.oldRange});
                return e
            }

            getMarkersToAdd() {
                const e = [];
                for (const [t, o] of this._changedMarkers) null != o.newRange && e.push({name: t, range: o.newRange});
                return e
            }

            getChanges(e = {includeChangesInGraveyard: !1}) {
                if (this._cachedChanges) return e.includeChangesInGraveyard ? this._cachedChangesWithGraveyard.slice() : this._cachedChanges.slice();
                const t = [];
                for (const o of this._changesInElement.keys()) {
                    const e = this._changesInElement.get(o).sort((e, t) => e.offset === t.offset ? e.type == t.type ? 0 : 'remove' == e.type ? -1 : 1 : e.offset < t.offset ? -1 : 1),
                        n = this._elementSnapshots.get(o), r = en(o.getChildren()), a = tn(n.length, e);
                    let s = 0, i = 0;
                    for (const e of a) if ('i' === e) t.push(this._getInsertDiff(o, s, r[s].name)), s++; else if ('r' === e) t.push(this._getRemoveDiff(o, s, n[i].name)), i++; else if ('a' === e) {
                        const e = r[s].attributes, a = n[i].attributes;
                        let l;
                        if ('$text' == r[s].name) l = Hu.createFromParentsAndOffsets(o, s, o, s + 1); else {
                            const e = o.offsetToIndex(s);
                            l = Hu.createFromParentsAndOffsets(o, s, o.getChild(e), 0)
                        }
                        t.push(...this._getAttributesDiff(l, a, e)), s++, i++
                    } else s++, i++
                }
                t.sort((e, t) => e.position.root == t.position.root ? e.position.isEqual(t.position) ? e.changeCount < t.changeCount ? -1 : 1 : e.position.isBefore(t.position) ? -1 : 1 : e.position.root.rootName < t.position.root.rootName ? -1 : 1);
                for (let o = 1; o < t.length; o++) {
                    const e = t[o - 1], n = t[o],
                        i = 'remove' == e.type && 'remove' == n.type && '$text' == e.name && '$text' == n.name && e.position.isEqual(n.position),
                        r = 'insert' == e.type && 'insert' == n.type && '$text' == e.name && '$text' == n.name && e.position.parent == n.position.parent && e.position.offset + e.length == n.position.offset,
                        a = 'attribute' == e.type && 'attribute' == n.type && e.position.parent == n.position.parent && e.range.isFlat && n.range.isFlat && e.position.offset + e.length == n.position.offset && e.attributeKey == n.attributeKey && e.attributeOldValue == n.attributeOldValue && e.attributeNewValue == n.attributeNewValue;
                    (i || r || a) && (t[o - 1].length++, a && (t[o - 1].range.end = t[o - 1].range.end.getShiftedBy(1)), t.splice(o, 1), o--)
                }
                for (const o of t) delete o.changeCount, 'attribute' == o.type && (delete o.position, delete o.length);
                return this._changeCount = 0, this._cachedChangesWithGraveyard = t.slice(), this._cachedChanges = t.slice().filter(on), e.includeChangesInGraveyard ? this._cachedChangesWithGraveyard : this._cachedChanges
            }

            reset() {
                this._changesInElement.clear(), this._elementSnapshots.clear(), this._changedMarkers.clear(), this._cachedChanges = null
            }

            _markInsert(e, t, o) {
                const n = {type: 'insert', offset: t, howMany: o, count: this._changeCount++};
                this._markChange(e, n)
            }

            _markRemove(e, t, o) {
                const n = {type: 'remove', offset: t, howMany: o, count: this._changeCount++};
                this._markChange(e, n), this._removeAllNestedChanges(e, t, o)
            }

            _markAttribute(e) {
                const t = {type: 'attribute', offset: e.startOffset, howMany: e.offsetSize, count: this._changeCount++};
                this._markChange(e.parent, t)
            }

            _markChange(e, t) {
                this._makeSnapshot(e);
                const o = this._getChangesForElement(e);
                this._handleChange(t, o), o.push(t);
                for (let n = 0; n < o.length; n++) 1 > o[n].howMany && (o.splice(n, 1), n--)
            }

            _getChangesForElement(e) {
                let t;
                return this._changesInElement.has(e) ? t = this._changesInElement.get(e) : (t = [], this._changesInElement.set(e, t)), t
            }

            _makeSnapshot(e) {
                this._elementSnapshots.has(e) || this._elementSnapshots.set(e, en(e.getChildren()))
            }

            _handleChange(e, t) {
                e.nodesToHandle = e.howMany;
                for (const o of t) {
                    const n = e.offset + e.howMany, i = o.offset + o.howMany;
                    if ('insert' == e.type && ('insert' == o.type && (e.offset <= o.offset ? o.offset += e.howMany : e.offset < i && (o.howMany += e.nodesToHandle, e.nodesToHandle = 0)), 'remove' == o.type && e.offset < o.offset && (o.offset += e.howMany), 'attribute' == o.type)) if (e.offset <= o.offset) o.offset += e.howMany; else if (e.offset < i) {
                        const i = o.howMany;
                        o.howMany = e.offset - o.offset, t.unshift({
                            type: 'attribute',
                            offset: n,
                            howMany: i - o.howMany,
                            count: this._changeCount++
                        })
                    }
                    if ('remove' == e.type) {
                        if ('insert' == o.type) if (n <= o.offset) o.offset -= e.howMany; else if (n <= i) {
                            if (e.offset < o.offset) {
                                const t = n - o.offset;
                                o.offset = e.offset, o.howMany -= t, e.nodesToHandle -= t
                            } else o.howMany -= e.nodesToHandle, e.nodesToHandle = 0;
                        } else if (e.offset <= o.offset) e.nodesToHandle -= o.howMany, o.howMany = 0; else if (e.offset < i) {
                            const t = i - e.offset;
                            o.howMany -= t, e.nodesToHandle -= t
                        }
                        if ('remove' == o.type && (n <= o.offset ? o.offset -= e.howMany : e.offset < o.offset && (e.nodesToHandle += o.howMany, o.howMany = 0)), 'attribute' == o.type) if (n <= o.offset) o.offset -= e.howMany; else if (e.offset < o.offset) {
                            const t = n - o.offset;
                            o.offset = e.offset, o.howMany -= t
                        } else if (e.offset < i) if (n <= i) {
                            const n = o.howMany;
                            o.howMany = e.offset - o.offset;
                            const i = n - o.howMany - e.nodesToHandle;
                            t.unshift({type: 'attribute', offset: e.offset, howMany: i, count: this._changeCount++})
                        } else o.howMany -= i - e.offset
                    }
                    if ('attribute' == e.type) {
                        if ('insert' == o.type) if (e.offset < o.offset && n > o.offset) {
                            if (n > i) {
                                const e = {type: 'attribute', offset: i, howMany: n - i, count: this._changeCount++};
                                this._handleChange(e, t), t.push(e)
                            }
                            e.nodesToHandle = o.offset - e.offset, e.howMany = e.nodesToHandle
                        } else e.offset >= o.offset && e.offset < i && (n > i ? (e.nodesToHandle = n - i, e.offset = i) : e.nodesToHandle = 0);
                        'attribute' == o.type && (e.offset >= o.offset && n <= i ? (e.nodesToHandle = 0, e.howMany = 0, e.offset = 0) : e.offset <= o.offset && n >= i && (o.howMany = 0))
                    }
                }
                e.howMany = e.nodesToHandle, delete e.nodesToHandle
            }

            _getInsertDiff(e, t, o) {
                return {
                    type: 'insert',
                    position: Uu.createFromParentAndOffset(e, t),
                    name: o,
                    length: 1,
                    changeCount: this._changeCount++
                }
            }

            _getRemoveDiff(e, t, o) {
                return {
                    type: 'remove',
                    position: Uu.createFromParentAndOffset(e, t),
                    name: o,
                    length: 1,
                    changeCount: this._changeCount++
                }
            }

            _getAttributesDiff(e, t, o) {
                const n = [];
                o = new Map(o);
                for (const [i, r] of t) {
                    const t = o.has(i) ? o.get(i) : null;
                    t !== r && n.push({
                        type: 'attribute',
                        position: e.start,
                        range: Hu.createFromRange(e),
                        length: 1,
                        attributeKey: i,
                        attributeOldValue: r,
                        attributeNewValue: t,
                        changeCount: this._changeCount++
                    }), o.delete(i)
                }
                for (const [i, r] of o) n.push({
                    type: 'attribute',
                    position: e.start,
                    range: Hu.createFromRange(e),
                    length: 1,
                    attributeKey: i,
                    attributeOldValue: null,
                    attributeNewValue: r,
                    changeCount: this._changeCount++
                });
                return n
            }

            _isInInsertedElement(e) {
                const t = e.parent;
                if (!t) return !1;
                const o = this._changesInElement.get(t), n = e.startOffset;
                if (o) for (const e of o) if ('insert' == e.type && n >= e.offset && n < e.offset + e.howMany) return !0;
                return this._isInInsertedElement(t)
            }

            _removeAllNestedChanges(e, t, o) {
                const n = Hu.createFromParentsAndOffsets(e, t, e, t + o);
                for (const i of n.getItems({shallow: !0})) i.is('element') && (this._elementSnapshots.delete(i), this._changesInElement.delete(i), this._removeAllNestedChanges(i, 0, i.maxOffset))
            }
        }

        class qg {
            constructor() {
                this._deltas = [], this._historyPoints = new Map, this._undoPairs = new Map, this._undoneDeltas = new Set
            }

            addDelta(e) {
                if (0 < e.operations.length && !this._historyPoints.has(e.baseVersion)) {
                    const t = this._deltas.length;
                    this._deltas[t] = e, this._historyPoints.set(e.baseVersion, t)
                }
            }

            * getDeltas(e = 0, t = Na) {
                if (0 !== this._deltas.length) {
                    let o = this._getIndex(e);
                    if (-1 != o) for (; o < this._deltas.length;) {
                        const e = this._deltas[o++];
                        if (e.baseVersion >= t) break;
                        yield e
                    }
                }
            }

            getDelta(e) {
                const t = this._historyPoints.get(e);
                return t === void 0 ? null : this._deltas[t]
            }

            setDeltaAsUndone(e, t) {
                this._undoPairs.set(t, e), this._undoneDeltas.add(e)
            }

            isUndoingDelta(e) {
                return this._undoPairs.has(e)
            }

            isUndoneDelta(e) {
                return this._undoneDeltas.has(e)
            }

            getUndoneDelta(e) {
                return this._undoPairs.get(e)
            }

            _getIndex(e) {
                const t = this._historyPoints.get(e);
                if (t === void 0) {
                    const t = this._deltas[this._deltas.length - 1], o = t.baseVersion + t.operations.length;
                    if (0 > e || e >= o) return -1;
                    throw new Ya('model-history-wrong-version: Given base version points to the middle of a delta.')
                }
                return t
            }
        }

        const Wg = '$graveyard';

        class Ug {
            constructor(e) {
                this.model = e, this.version = 0, this.history = new qg(this), this.selection = new Xu(this), this.roots = new Ac({idProperty: 'rootName'}), this.differ = new jg(e.markers), this._postFixers = new Set, this.createRoot('$root', Wg), this.listenTo(e, 'applyOperation', (e, t) => {
                    const o = t[0];
                    if (o.isDocumentOperation && o.baseVersion !== this.version) throw new Ya('model-document-applyOperation-wrong-version: Only operations with matching versions can be applied.', {operation: o})
                }, {priority: 'highest'}), this.listenTo(e, 'applyOperation', (e, t) => {
                    const o = t[0];
                    o.isDocumentOperation && this.differ.bufferOperation(o)
                }, {priority: 'high'}), this.listenTo(e, 'applyOperation', (e, t) => {
                    const o = t[0];
                    o.isDocumentOperation && (this.version++, this.history.addDelta(o.delta))
                }, {priority: 'low'});
                let t = !1;
                this.listenTo(this.selection, 'change', () => {
                    t = !0
                }), this.listenTo(e, '_change', (e, o) => {
                    (!this.differ.isEmpty || t) && (this._callPostFixers(o), this.fire('change', o.batch), this.differ.reset(), t = !1)
                }), this.listenTo(e.markers, 'update', (e, t, o, n) => {
                    this.differ.bufferMarkerChange(t.name, o, n), null === o && t.on('change', (e, o) => {
                        this.differ.bufferMarkerChange(t.name, o, t.getRange())
                    })
                })
            }

            get graveyard() {
                return this.getRoot(Wg)
            }

            createRoot(e = '$root', t = 'main') {
                if (this.roots.get(t)) throw new Ya('model-document-createRoot-name-exists: Root with specified name already exists.', {name: t});
                const o = new Lg(this, e, t);
                return this.roots.add(o), o
            }

            destroy() {
                this.selection.destroy(), this.stopListening()
            }

            getRoot(e = 'main') {
                return this.roots.get(e)
            }

            getRootNames() {
                return Array.from(this.roots, (e) => e.rootName).filter((e) => e != Wg)
            }

            registerPostFixer(e) {
                this._postFixers.add(e)
            }

            toJSON() {
                const e = Td(this);
                return e.selection = '[engine.model.DocumentSelection]', e.model = '[engine.model.Model]', e
            }

            _getDefaultRoot() {
                for (const e of this.roots) if (e !== this.graveyard) return e;
                return this.graveyard
            }

            _getDefaultRange() {
                const e = this._getDefaultRoot(), t = this.model.schema, o = new Uu(e, [0]),
                    n = t.getNearestSelectionRange(o);
                return n || new Hu(o)
            }

            _validateSelectionRange(e) {
                return dn(e.start) && dn(e.end)
            }

            _callPostFixers(e) {
                let t = !1;
                do for (const o of this._postFixers) if (t = o(e), t) break; while (t)
            }
        }

        f(Ug, rs);

        class Hg {
            constructor() {
                this._markers = new Map
            }

            [Symbol.iterator]() {
                return this._markers.values()
            }

            has(e) {
                return this._markers.has(e)
            }

            get(e) {
                return this._markers.get(e) || null
            }

            _set(e, t, o = !1) {
                const n = e instanceof Kg ? e.name : e, i = this._markers.get(n);
                if (i) {
                    const e = i.getRange();
                    let r = !1;
                    return e.isEqual(t) || (i._attachLiveRange(Qu.createFromRange(t)), r = !0), o != i.managedUsingOperations && (i._managedUsingOperations = o, r = !0), r && this.fire('update:' + n, i, e, t), i
                }
                const r = Qu.createFromRange(t), a = new Kg(n, r, o);
                return this._markers.set(n, a), this.fire('update:' + n, a, null, t), a
            }

            _remove(e) {
                const t = e instanceof Kg ? e.name : e, o = this._markers.get(t);
                return !!o && (this._markers.delete(t), this.fire('update:' + t, o, o.getRange(), null), this._destroyMarker(o), !0)
            }

            * getMarkersAtPosition(e) {
                for (const t of this) t.getRange().containsPosition(e) && (yield t)
            }

            * getMarkersIntersectingRange(e) {
                for (const t of this) null !== t.getRange().getIntersection(e) && (yield t)
            }

            destroy() {
                for (const e of this._markers.values()) this._destroyMarker(e);
                this._markers = null, this.stopListening()
            }

            * getMarkersGroup(e) {
                for (const t of this._markers.values()) t.name.startsWith(e + ':') && (yield t)
            }

            _destroyMarker(e) {
                e.stopListening(), e._detachLiveRange()
            }
        }

        f(Hg, rs);

        class Kg {
            constructor(e, t, o) {
                this.name = e, this._managedUsingOperations = o, this._liveRange = this._attachLiveRange(t)
            }

            get managedUsingOperations() {
                if (!this._liveRange) throw new Ya('marker-destroyed: Cannot use a destroyed marker instance.');
                return this._managedUsingOperations
            }

            getStart() {
                if (!this._liveRange) throw new Ya('marker-destroyed: Cannot use a destroyed marker instance.');
                return Uu.createFromPosition(this._liveRange.start)
            }

            getEnd() {
                if (!this._liveRange) throw new Ya('marker-destroyed: Cannot use a destroyed marker instance.');
                return Uu.createFromPosition(this._liveRange.end)
            }

            getRange() {
                if (!this._liveRange) throw new Ya('marker-destroyed: Cannot use a destroyed marker instance.');
                return Hu.createFromRange(this._liveRange)
            }

            _attachLiveRange(e) {
                return this._liveRange && this._detachLiveRange(), e.delegate('change:range').to(this), e.delegate('change:content').to(this), this._liveRange = e, e
            }

            _detachLiveRange() {
                this._liveRange.stopDelegating('change:range', this), this._liveRange.stopDelegating('change:content', this), this._liveRange.detach(), this._liveRange = null
            }
        }

        f(Kg, rs);

        class Gg extends Uu {
            constructor(e, t, o) {
                if (super(e, t), !this.root.is('rootElement')) throw new Ya('model-liveposition-root-not-rootelement: LivePosition\'s root has to be an instance of RootElement.');
                this.stickiness = o || 'sticksToNext', cn.call(this)
            }

            detach() {
                this.stopListening()
            }
        }

        f(Gg, rs);

        class $g {
            constructor(e, t, o) {
                this.model = e, this.writer = t, this.position = o, this.canMergeWith = new Set([this.position.parent]), this.schema = e.schema, this._filterAttributesOf = []
            }

            handleNodes(e, t) {
                e = Array.from(e);
                for (let o = 0; o < e.length; o++) {
                    const n = e[o];
                    this._handleNode(n, {isFirst: 0 === o && t.isFirst, isLast: o === e.length - 1 && t.isLast})
                }
                this.schema.removeDisallowedAttributes(this._filterAttributesOf, this.writer), this._filterAttributesOf = []
            }

            getSelectionRange() {
                return this.nodeToSelect ? Hu.createOn(this.nodeToSelect) : this.model.schema.getNearestSelectionRange(this.position)
            }

            _handleNode(e, t) {
                if (this.schema.isObject(e)) return void this._handleObject(e, t);
                const o = this._checkAndSplitToAllowedPosition(e, t);
                return o ? void (this._insert(e), this._mergeSiblingsOf(e, t)) : void this._handleDisallowedNode(e, t)
            }

            _handleObject(e, t) {
                this._checkAndSplitToAllowedPosition(e) ? this._insert(e) : this._tryAutoparagraphing(e, t)
            }

            _handleDisallowedNode(e, t) {
                e.is('element') ? this.handleNodes(e.getChildren(), t) : this._tryAutoparagraphing(e, t)
            }

            _insert(e) {
                if (!this.schema.checkChild(this.position, e)) return void Su.error('insertcontent-wrong-position: The node cannot be inserted on the given position.', {
                    node: e,
                    position: this.position
                });
                const t = Gg.createFromPosition(this.position);
                this.writer.insert(e, this.position), this.position = Uu.createFromPosition(t), t.detach(), this.nodeToSelect = this.schema.isObject(e) && !this.schema.checkChild(this.position, '$text') ? e : null, this._filterAttributesOf.push(e)
            }

            _mergeSiblingsOf(e, t) {
                if (e instanceof ju) {
                    const o = this._canMergeLeft(e, t), n = this._canMergeRight(e, t), i = Gg.createBefore(e),
                        r = Gg.createAfter(e);
                    if (o) {
                        const e = Gg.createFromPosition(this.position);
                        this.writer.merge(i), this.position = Uu.createFromPosition(e), e.detach()
                    }
                    if (n) {
                        this.position.isEqual(r) || Su.error('insertcontent-wrong-position-on-merge: The insertion position should equal the merge position'), this.position = Uu.createAt(r.nodeBefore, 'end');
                        const e = new Gg(this.position.root, this.position.path, 'sticksToPrevious');
                        this.writer.merge(r), this.position = Uu.createFromPosition(e), e.detach()
                    }
                    (o || n) && this._filterAttributesOf.push(this.position.parent), i.detach(), r.detach()
                }
            }

            _canMergeLeft(e, t) {
                const o = e.previousSibling;
                return t.isFirst && o instanceof ju && this.canMergeWith.has(o) && this.model.schema.checkMerge(o, e)
            }

            _canMergeRight(e, t) {
                const o = e.nextSibling;
                return t.isLast && o instanceof ju && this.canMergeWith.has(o) && this.model.schema.checkMerge(e, o)
            }

            _tryAutoparagraphing(e, t) {
                const o = this.writer.createElement('paragraph');
                this._getAllowedIn(o, this.position.parent) && this.schema.checkChild(o, e) && (o._appendChild(e), this._handleNode(o, t))
            }

            _checkAndSplitToAllowedPosition(e) {
                const t = this._getAllowedIn(e, this.position.parent);
                if (!t) return !1;
                for (; t != this.position.parent;) {
                    if (this.schema.isLimit(this.position.parent)) return !1;
                    if (this.position.isAtStart) {
                        const e = this.position.parent;
                        this.position = Uu.createBefore(e), e.isEmpty && this.writer.remove(e)
                    } else if (this.position.isAtEnd) this.position = Uu.createAfter(this.position.parent); else {
                        const e = Uu.createAfter(this.position.parent);
                        this.writer.split(this.position), this.position = e, this.canMergeWith.add(this.position.nodeAfter)
                    }
                }
                return !0
            }

            _getAllowedIn(e, t) {
                return this.schema.checkChild(t, e) ? t : t.parent ? this._getAllowedIn(e, t.parent) : null
            }
        }

        const Jg = ' ,.?!:;"-()';

        class Qg {
            constructor() {
                this.markers = new Hg, this.document = new Ug(this), this.schema = new sm, this._pendingChanges = [], this._currentWriter = null, ['insertContent', 'deleteContent', 'modifySelection', 'getSelectedContent', 'applyOperation'].forEach((e) => this.decorate(e)), this.on('applyOperation', (e, t) => {
                    const o = t[0];
                    o._validate()
                }, {priority: 'highest'}), this.schema.register('$root', {isLimit: !0}), this.schema.register('$block', {
                    allowIn: '$root',
                    isBlock: !0
                }), this.schema.register('$text', {allowIn: '$block'}), this.schema.register('$clipboardHolder', {
                    allowContentOf: '$root',
                    isLimit: !0
                }), this.schema.extend('$text', {allowIn: '$clipboardHolder'}), this.schema.register('$marker', {allowIn: ['$root', '$block']})
            }

            change(e) {
                return 0 === this._pendingChanges.length ? (this._pendingChanges.push({
                    batch: new Mg,
                    callback: e
                }), this._runPendingChanges()[0]) : e(this._currentWriter)
            }

            enqueueChange(e, t) {
                'string' == typeof e ? e = new Mg(e) : 'function' == typeof e && (t = e, e = new Mg), this._pendingChanges.push({
                    batch: e,
                    callback: t
                }), 1 == this._pendingChanges.length && this._runPendingChanges()
            }

            applyOperation(e) {
                e._execute()
            }

            transformDeltas(e, t, o = !1) {
                return Ig.transformDeltaSets(e, t, o ? this.document : null)
            }

            insertContent(e, t) {
                mn(this, e, t)
            }

            deleteContent(e, t) {
                pn(this, e, t)
            }

            modifySelection(e, t) {
                wn(this, e, t)
            }

            getSelectedContent(e) {
                return Pn(this, e)
            }

            hasContent(e) {
                if (e instanceof ju && (e = Hu.createIn(e)), e.isCollapsed) return !1;
                for (const t of e.getItems()) if (t.is('textProxy') || this.schema.isObject(t)) return !0;
                return !1
            }

            destroy() {
                this.document.destroy(), this.stopListening()
            }

            _runPendingChanges() {
                const e = [];
                for (; this._pendingChanges.length;) {
                    const t = this._pendingChanges[0].batch;
                    this._currentWriter = new zg(this, t);
                    const o = this._pendingChanges[0].callback(this._currentWriter);
                    e.push(o), this.fire('_change', this._currentWriter), this._pendingChanges.shift(), this._currentWriter = null
                }
                return e
            }
        }

        f(Qg, fc);

        class Yg {
            constructor() {
                this._listener = Object.create(Jc)
            }

            listenTo(e) {
                this._listener.listenTo(e, 'keydown', (e, t) => {
                    this._listener.fire('_keydown:' + te(t), t)
                })
            }

            set(e, t, o = {}) {
                const n = oe(e), i = o.priority;
                this._listener.listenTo(this._listener, '_keydown:' + n, (e, o) => {
                    t(o, () => {
                        o.preventDefault(), o.stopPropagation(), e.stop()
                    }), e.return = !0
                }, {priority: i})
            }

            press(e) {
                return !!this._listener.fire('_keydown:' + te(e), e)
            }

            destroy() {
                this._listener.stopListening()
            }
        }

        class Xg extends Yg {
            constructor(e) {
                super(), this.editor = e
            }

            set(e, t, o = {}) {
                if ('string' == typeof t) {
                    const e = t;
                    t = (t, o) => {
                        this.editor.execute(e), o()
                    }
                }
                super.set(e, t, o)
            }
        }

        class Zg {
            constructor(e) {
                const t = this.constructor.build && this.constructor.build.plugins;
                this.config = new Ja(e, this.constructor.build && this.constructor.build.config), this.config.define('plugins', t), this.plugins = new om(this, t), this.commands = new nm, this.locale = new im(this.config.get('language')), this.t = this.locale.t, this.set('isReadOnly', !1), this.model = new Qg, this.data = new cm(this.model), this.editing = new tm(this.model), this.editing.view.document.bind('isReadOnly').to(this), this.conversion = new um, this.conversion.register('downcast', [this.editing.downcastDispatcher, this.data.downcastDispatcher]), this.conversion.register('editingDowncast', [this.editing.downcastDispatcher]), this.conversion.register('dataDowncast', [this.data.downcastDispatcher]), this.conversion.register('upcast', [this.data.upcastDispatcher]), this.keystrokes = new Xg(this), this.keystrokes.listenTo(this.editing.view.document)
            }

            initPlugins() {
                function e(e, t) {
                    return e.reduce((e, o) => o[t] ? e.then(o[t].bind(o)) : e, Promise.resolve())
                }

                const t = this, o = this.config;
                return function () {
                    const e = o.get('plugins') || [], n = o.get('removePlugins') || [];
                    return t.plugins.load(e, n)
                }().then((t) => e(t, 'init').then(() => e(t, 'afterInit'))).then(() => this.fire('pluginsReady'))
            }

            destroy() {
                return this.fire('destroy'), this.stopListening(), this.commands.destroy(), this.plugins.destroy().then(() => {
                    this.model.destroy(), this.data.destroy(), this.editing.destroy(), this.keystrokes.destroy()
                })
            }

            execute(...e) {
                this.commands.execute(...e)
            }

            static create(e) {
                return new Promise((t) => {
                    const o = new this(e);
                    t(o.initPlugins().then(() => {
                        o.fire('dataReady'), o.fire('ready')
                    }).then(() => o))
                })
            }
        }

        f(Zg, fc);
        const ef = {
            setData(e) {
                this.data.set(e)
            }, getData() {
                return this.data.get()
            }
        };
        const tf = {
            updateElement() {
                Sn(this.element, this.data.get())
            }
        };

        class of {
            getHtml(e) {
                const t = document.implementation.createHTMLDocument(''), o = t.createElement('div');
                return o.appendChild(e), o.innerHTML
            }
        }

        class nf {
            constructor() {
                this._domParser = new DOMParser, this._domConverter = new Gc({blockFiller: jc}), this._htmlWriter = new of
            }

            toData(e) {
                const t = this._domConverter.viewToDom(e, document);
                return this._htmlWriter.getHtml(t)
            }

            toView(e) {
                const t = this._toDom(e);
                return this._domConverter.domToView(t)
            }

            _toDom(e) {
                const t = this._domParser.parseFromString(e, 'text/html'), o = t.createDocumentFragment(),
                    n = t.body.childNodes;
                for (; 0 < n.length;) o.appendChild(n[0]);
                return o
            }
        }

        class rf {
            constructor(e) {
                this.editor = e, this._components = new Map
            }

            * names() {
                for (const e of this._components.values()) yield e.originalName
            }

            add(e, t) {
                if (this.has(e)) throw new Ya('componentfactory-item-exists: The item already exists in the component factory.', {name: e});
                this._components.set(Rn(e), {callback: t, originalName: e})
            }

            create(e) {
                if (!this.has(e)) throw new Ya('componentfactory-item-missing: The required component is not registered in the factory.', {name: e});
                return this._components.get(Rn(e)).callback(this.editor.locale)
            }

            has(e) {
                return this._components.has(Rn(e))
            }
        }

        class af {
            constructor() {
                this.set('isFocused', !1), this.focusedElement = null, this._elements = new Set, this._nextEventLoopTimeout = null
            }

            add(e) {
                if (this._elements.has(e)) throw new Ya('focusTracker-add-element-already-exist');
                this.listenTo(e, 'focus', () => this._focus(e), {useCapture: !0}), this.listenTo(e, 'blur', () => this._blur(), {useCapture: !0}), this._elements.add(e)
            }

            remove(e) {
                e === this.focusedElement && this._blur(e), this._elements.has(e) && (this.stopListening(e), this._elements.delete(e))
            }

            _focus(e) {
                clearTimeout(this._nextEventLoopTimeout), this.focusedElement = e, this.isFocused = !0
            }

            _blur() {
                clearTimeout(this._nextEventLoopTimeout), this._nextEventLoopTimeout = setTimeout(() => {
                    this.focusedElement = null, this.isFocused = !1
                }, 0)
            }
        }

        f(af, Jc), f(af, fc);

        class sf {
            constructor(e, t) {
                this.editor = e, this.view = t, this.componentFactory = new rf(e), this.focusTracker = new af, this._toolbarConfig = Vn(e.config.get('toolbar'))
            }

            init() {
                const e = this.editor, t = this.view;
                t.render(), t.stickyPanel.bind('isActive').to(this.focusTracker, 'isFocused'), t.stickyPanel.limiterElement = t.element, this._toolbarConfig.viewportTopOffset && (t.stickyPanel.viewportTopOffset = this._toolbarConfig.viewportTopOffset);
                const o = e.editing.view.document.getRoot();
                t.editable.bind('isReadOnly').to(o), t.editable.bind('isFocused').to(e.editing.view.document), t.editable.name = o.rootName, this.focusTracker.add(this.view.editableElement), this.view.toolbar.fillFromConfig(this._toolbarConfig.items, this.componentFactory), In({
                    origin: e.editing.view,
                    originFocusTracker: this.focusTracker,
                    originKeystrokeHandler: e.keystrokes,
                    toolbar: this.view.toolbar
                })
            }

            destroy() {
                this.view.destroy()
            }
        }

        class lf extends Ac {
            constructor(e) {
                super({idProperty: 'viewUid'}), this.on('add', (e, t, o) => {
                    t.isRendered || t.render(), t.element && this._parentElement && this._parentElement.insertBefore(t.element, this._parentElement.children[o])
                }), this.on('remove', (e, t) => {
                    t.element && this._parentElement && t.element.remove()
                }), this.locale = e, this._parentElement = null
            }

            destroy() {
                this.map((e) => e.destroy())
            }

            setParent(e) {
                this._parentElement = e
            }

            delegate(...e) {
                if (!e.length || !Fn(e)) throw new Ya('ui-viewcollection-delegate-wrong-events: All event names must be strings.');
                return {
                    to: (t) => {
                        for (const o of this) for (const n of e) o.delegate(n).to(t);
                        this.on('add', (o, n) => {
                            for (const i of e) n.delegate(i).to(t)
                        }), this.on('remove', (o, n) => {
                            for (const i of e) n.stopDelegating(i, t)
                        })
                    }
                }
            }
        }

        f(Ac, fc);
        var df = function (e, t) {
            return Ad(e, !0, !0, t)
        };

        class cf {
            constructor(e) {
                Object.assign(this, qn(jn(e))), this._isRendered = !1, this._revertData = null
            }

            render() {
                const e = this._renderNode({intoFragment: !0});
                return this._isRendered = !0, e
            }

            apply(e) {
                return this._revertData = ti(), this._renderNode({
                    node: e,
                    isApplying: !0,
                    revertData: this._revertData
                }), e
            }

            revert(e) {
                if (!this._revertData) throw new Ya('ui-template-revert-not-applied: Attempting to revert a template which has not been applied yet.');
                this._revertTemplateFromNode(e, this._revertData)
            }

            * getViews() {
                function* e(t) {
                    if (t.children) for (const o of t.children) Xn(o) ? yield o : Zn(o) && (yield* e(o))
                }

                yield* e(this)
            }

            static bind(e, t) {
                return {
                    to(o, n) {
                        return new mf({eventNameOrFunction: o, attribute: o, observable: e, emitter: t, callback: n})
                    }, if(o, n, i) {
                        return new pf({observable: e, emitter: t, attribute: o, valueIfTrue: n, callback: i})
                    }
                }
            }

            static extend(e, t) {
                e._isRendered && Su.warn('template-extend-render: Attempting to extend a template which has already been rendered.'), Qn(e, qn(jn(t)))
            }

            _renderNode(e) {
                let t;
                if (t = e.node ? this.tag && this.text : this.tag ? this.text : !this.text, t) throw new Ya('ui-template-wrong-syntax: Node definition must have either "tag" or "text" when rendering a new Node.');
                return this.text ? this._renderText(e) : this._renderElement(e)
            }

            _renderElement(e) {
                let t = e.node;
                return t || (t = e.node = document.createElementNS(this.ns || 'http://www.w3.org/1999/xhtml', this.tag)), this._renderAttributes(e), this._renderElementChildren(e), this._setUpListeners(e), t
            }

            _renderText(e) {
                let t = e.node;
                return t ? e.revertData.text = t.textContent : t = e.node = document.createTextNode(''), Nn(this.text) ? this._bindToObservable({
                    schema: this.text,
                    updater: Bn(t),
                    data: e
                }) : t.textContent = this.text.join(''), t
            }

            _renderAttributes(e) {
                let t, o, n, i;
                if (this.attributes) {
                    const r = e.node, a = e.revertData;
                    for (t in this.attributes) if (n = r.getAttribute(t), o = this.attributes[t], a && (a.attributes[t] = n), i = us(o[0]) && o[0].ns ? o[0].ns : null, Nn(o)) {
                        const s = i ? o[0].value : o;
                        a && oi(t) && s.unshift(n), this._bindToObservable({schema: s, updater: Ln(r, t, i), data: e})
                    } else 'style' == t && 'string' != typeof o[0] ? this._renderStyleAttribute(o[0], e) : (a && n && oi(t) && o.unshift(n), o = o.map((e) => e ? e.value || e : e).reduce((e, t) => e.concat(t), []).reduce($n, ''), Yn(o) || r.setAttributeNS(i, t, o))
                }
            }

            _renderStyleAttribute(e, t) {
                const o = t.node;
                for (const n in e) {
                    const i = e[n];
                    Nn(i) ? this._bindToObservable({schema: [i], updater: zn(o, n), data: t}) : o.style[n] = i
                }
            }

            _renderElementChildren(e) {
                const t = e.node, o = e.intoFragment ? document.createDocumentFragment() : t, n = e.isApplying;
                let i = 0;
                for (const r of this.children) if (ei(r)) {
                    if (!n) {
                        r.setParent(t);
                        for (const e of r) o.appendChild(e.element)
                    }
                } else if (Xn(r)) n || (!r.isRendered && r.render(), o.appendChild(r.element)); else if (Me(r)) o.appendChild(r); else if (n) {
                    const t = e.revertData, n = ti();
                    t.children.push(n), r._renderNode({node: o.childNodes[i++], isApplying: !0, revertData: n})
                } else o.appendChild(r.render());
                e.intoFragment && t.appendChild(o)
            }

            _setUpListeners(e) {
                if (this.eventListeners) for (const t in this.eventListeners) {
                    const o = this.eventListeners[t].map((o) => {
                        const [n, i] = t.split('@');
                        return o.activateDomEventListener(n, i, e)
                    });
                    e.revertData && e.revertData.bindings.push(o)
                }
            }

            _bindToObservable({schema: e, updater: t, data: o}) {
                const n = o.revertData;
                Dn(e, t, o);
                const i = e.filter((e) => !Yn(e)).filter((e) => e.observable).map((n) => n.activateAttributeListener(e, t, o));
                n && n.bindings.push(i)
            }

            _revertTemplateFromNode(e, t) {
                for (const o of t.bindings) for (const e of o) e();
                if (t.text) return void (e.textContent = t.text);
                for (const o in t.attributes) {
                    const n = t.attributes[o];
                    null === n ? e.removeAttribute(o) : e.setAttribute(o, n)
                }
                for (let o = 0; o < t.children.length; ++o) this._revertTemplateFromNode(e.childNodes[o], t.children[o])
            }
        }

        f(cf, rs);

        class uf {
            constructor(e) {
                Object.assign(this, e)
            }

            getValue(e) {
                const t = this.observable[this.attribute];
                return this.callback ? this.callback(t, e) : t
            }

            activateAttributeListener(e, t, o) {
                const n = () => Dn(e, t, o);
                return this.emitter.listenTo(this.observable, 'change:' + this.attribute, n), () => {
                    this.emitter.stopListening(this.observable, 'change:' + this.attribute, n)
                }
            }
        }

        class mf extends uf {
            activateDomEventListener(e, t, o) {
                const n = (e, o) => {
                    (!t || o.target.matches(t)) && ('function' == typeof this.eventNameOrFunction ? this.eventNameOrFunction(o) : this.observable.fire(this.eventNameOrFunction, o))
                };
                return this.emitter.listenTo(o.node, e, n), () => {
                    this.emitter.stopListening(o.node, e, n)
                }
            }
        }

        class pf extends uf {
            getValue(e) {
                const t = super.getValue(e);
                return !Yn(t) && (this.valueIfTrue || !0)
            }
        }

        var gf = o(11), ff = o.n(gf);

        class hf {
            constructor(e) {
                this.element = null, this.isRendered = !1, this.locale = e, this.t = e && e.t, this._viewCollections = new Ac, this._unboundChildren = this.createCollection(), this._viewCollections.on('add', (t, o) => {
                    o.locale = e
                }), this.decorate('render')
            }

            get bindTemplate() {
                return this._bindTemplate ? this._bindTemplate : this._bindTemplate = cf.bind(this, this)
            }

            createCollection() {
                const e = new lf;
                return this._viewCollections.add(e), e
            }

            registerChild(e) {
                P(e) || (e = [e]);
                for (const t of e) this._unboundChildren.add(t)
            }

            deregisterChild(e) {
                P(e) || (e = [e]);
                for (const t of e) this._unboundChildren.remove(t)
            }

            setTemplate(e) {
                this.template = new cf(e)
            }

            extendTemplate(e) {
                cf.extend(this.template, e)
            }

            render() {
                if (this.isRendered) throw new Ya('ui-view-render-already-rendered: This View has already been rendered.');
                this.template && (this.element = this.template.render(), this.registerChild(this.template.getViews())), this.isRendered = !0
            }

            destroy() {
                this.stopListening(), this._viewCollections.map((e) => e.destroy())
            }
        }

        f(hf, Jc), f(hf, fc);
        var bf = o(14), kf = o.n(bf);

        class _f extends hf {
            constructor(e) {
                super(e), this.body = this.createCollection()
            }

            render() {
                super.render(), this._renderBodyCollection()
            }

            destroy() {
                return this._bodyCollectionContainer.remove(), super.destroy()
            }

            _renderBodyCollection() {
                const e = this._bodyCollectionContainer = new cf({
                    tag: 'div',
                    attributes: {class: ['ck', 'ck-reset_all', 'ck-body', 'ck-rounded-corners']},
                    children: this.body
                }).render();
                document.body.appendChild(e)
            }
        }

        var wf = o(16), vf = o.n(wf);

        class yf extends hf {
            constructor(e) {
                super(e), this.set('text'), this.set('for');
                const t = this.bindTemplate;
                this.setTemplate({
                    tag: 'label',
                    attributes: {class: ['ck', 'ck-label'], for: t.to('for')},
                    children: [{text: t.to('text')}]
                })
            }
        }

        class xf extends _f {
            constructor(e) {
                super(e);
                const t = i();
                this.top = this.createCollection(), this.main = this.createCollection(), this._voiceLabelView = this._createVoiceLabel(t), this.setTemplate({
                    tag: 'div',
                    attributes: {
                        class: ['ck', 'ck-reset', 'ck-editor', 'ck-rounded-corners'],
                        role: 'application',
                        dir: 'ltr',
                        lang: e.language,
                        "aria-labelledby": `ck-editor__aria-label_${t}`
                    },
                    children: [this._voiceLabelView, {
                        tag: 'div',
                        attributes: {class: ['ck', 'ck-editor__top', 'ck-reset_all'], role: 'presentation'},
                        children: this.top
                    }, {
                        tag: 'div',
                        attributes: {class: ['ck', 'ck-editor__main'], role: 'presentation'},
                        children: this.main
                    }]
                })
            }

            _createVoiceLabel(e) {
                const o = this.t, t = new yf;
                return t.text = o('ac'), t.extendTemplate({
                    attributes: {
                        id: `ck-editor__aria-label_${e}`,
                        class: 'ck-voice-label'
                    }
                }), t
            }
        }

        class Cf extends hf {
            constructor(e, t) {
                super(e);
                const o = this.bindTemplate;
                t && (this.element = this.editableElement = t), this.setTemplate({
                    tag: 'div',
                    attributes: {
                        class: ['ck', 'ck-content', 'ck-editor__editable', 'ck-rounded-corners', o.to('isFocused', (e) => e ? 'ck-focused' : 'ck-blurred')],
                        contenteditable: o.to('isReadOnly', (e) => !e)
                    }
                }), this.set('isReadOnly', !1), this.set('isFocused', !1), this.externalElement = t
            }

            render() {
                super.render(), this.externalElement ? this.template.apply(this.element = this.externalElement) : this.editableElement = this.element
            }

            destroy() {
                this.externalElement && this.template.revert(this.externalElement), super.destroy()
            }
        }

        class Af extends Cf {
            constructor(e, o) {
                super(e, o);
                const n = this.bindTemplate, i = this.t;
                this.set('name', null);
                this.extendTemplate({
                    attributes: {
                        role: 'textbox',
                        "aria-label": n.to('name', (e) => i('ab', [e])),
                        class: 'ck-editor__editable_inline'
                    }
                })
            }
        }

        var Tf = o(18), Pf = o.n(Tf);
        const Ef = ni('px');

        class Sf extends hf {
            constructor(e) {
                super(e);
                const t = this.bindTemplate;
                this.set('isActive', !1), this.set('isSticky', !1), this.set('limiterElement', null), this.set('limiterBottomOffset', 50), this.set('viewportTopOffset', 0), this.set('_marginLeft', null), this.set('_isStickyToTheLimiter', !1), this.set('_hasViewportTopOffset', !1), this.content = this.createCollection(), this._contentPanelPlaceholder = new cf({
                    tag: 'div',
                    attributes: {
                        class: ['ck', 'ck-sticky-panel__placeholder'],
                        style: {
                            display: t.to('isSticky', (e) => e ? 'block' : 'none'),
                            height: t.to('isSticky', (e) => e ? Ef(this._panelRect.height) : null)
                        }
                    }
                }).render(), this._contentPanel = new cf({
                    tag: 'div',
                    attributes: {
                        class: ['ck', 'ck-sticky-panel__content', t.if('isSticky', 'ck-sticky-panel__content_sticky'), t.if('_isStickyToTheLimiter', 'ck-sticky-panel__content_sticky_bottom-limit')],
                        style: {
                            width: t.to('isSticky', (e) => e ? Ef(this._contentPanelPlaceholder.getBoundingClientRect().width) : null),
                            top: t.to('_hasViewportTopOffset', (e) => e ? Ef(this.viewportTopOffset) : null),
                            bottom: t.to('_isStickyToTheLimiter', (e) => e ? Ef(this.limiterBottomOffset) : null),
                            marginLeft: t.to('_marginLeft')
                        }
                    },
                    children: this.content
                }).render(), this.setTemplate({
                    tag: 'div',
                    attributes: {class: ['ck', 'ck-sticky-panel']},
                    children: [this._contentPanelPlaceholder, this._contentPanel]
                })
            }

            render() {
                super.render(), this._checkIfShouldBeSticky(), this.listenTo(Kc.window, 'scroll', () => {
                    this._checkIfShouldBeSticky()
                }), this.listenTo(this, 'change:isActive', () => {
                    this._checkIfShouldBeSticky()
                })
            }

            _checkIfShouldBeSticky() {
                const e = this._panelRect = this._contentPanel.getBoundingClientRect();
                let t;
                this.limiterElement ? (t = this._limiterRect = this.limiterElement.getBoundingClientRect(), this.isSticky = this.isActive && t.top < this.viewportTopOffset && this._panelRect.height + this.limiterBottomOffset < t.height) : this.isSticky = !1, this.isSticky ? (this._isStickyToTheLimiter = t.bottom < e.height + this.limiterBottomOffset + this.viewportTopOffset, this._hasViewportTopOffset = !this._isStickyToTheLimiter && !!this.viewportTopOffset, this._marginLeft = this._isStickyToTheLimiter ? null : Ef(-Kc.window.scrollX)) : (this._isStickyToTheLimiter = !1, this._hasViewportTopOffset = !1, this._marginLeft = null)
            }
        }

        class Of {
            constructor(e) {
                if (Object.assign(this, e), e.actions && e.keystrokeHandler) for (const t in e.actions) {
                    let o = e.actions[t];
                    'string' == typeof o && (o = [o]);
                    for (const n of o) e.keystrokeHandler.set(n, (e, o) => {
                        this[t](), o()
                    })
                }
            }

            get first() {
                return this.focusables.find(ii) || null
            }

            get last() {
                return this.focusables.filter(ii).slice(-1)[0] || null
            }

            get next() {
                return this._getFocusableItem(1)
            }

            get previous() {
                return this._getFocusableItem(-1)
            }

            get current() {
                let e = null;
                return null === this.focusTracker.focusedElement ? null : (this.focusables.find((t, o) => {
                    const n = t.element === this.focusTracker.focusedElement;
                    return n && (e = o), n
                }), e)
            }

            focusFirst() {
                this._focus(this.first)
            }

            focusLast() {
                this._focus(this.last)
            }

            focusNext() {
                this._focus(this.next)
            }

            focusPrevious() {
                this._focus(this.previous)
            }

            _focus(e) {
                e && e.focus()
            }

            _getFocusableItem(e) {
                const t = this.current, o = this.focusables.length;
                if (!o) return null;
                if (null === t) return this[1 === e ? 'first' : 'last'];
                let n = (t + o + e) % o;
                do {
                    const t = this.focusables.get(n);
                    if (ii(t)) return t;
                    n = (n + o + e) % o
                } while (n !== t);
                return null
            }
        }

        class Rf extends hf {
            constructor(e) {
                super(e), this.setTemplate({tag: 'span', attributes: {class: ['ck', 'ck-toolbar__separator']}})
            }
        }

        var If = o(20), Vf = o.n(If);

        class Ff extends hf {
            constructor(e) {
                super(e);
                const t = this.bindTemplate;
                this.items = this.createCollection(), this.focusTracker = new af, this.keystrokes = new Yg, this.set('isVertical', !1), this.set('className'), this._focusCycler = new Of({
                    focusables: this.items,
                    focusTracker: this.focusTracker,
                    keystrokeHandler: this.keystrokes,
                    actions: {focusPrevious: ['arrowleft', 'arrowup'], focusNext: ['arrowright', 'arrowdown']}
                }), this.setTemplate({
                    tag: 'div',
                    attributes: {class: ['ck', 'ck-toolbar', t.if('isVertical', 'ck-toolbar_vertical'), t.to('className')]},
                    children: this.items,
                    on: {mousedown: ri(this)}
                })
            }

            render() {
                super.render();
                for (const e of this.items) this.focusTracker.add(e.element);
                this.items.on('add', (e, t) => {
                    this.focusTracker.add(t.element)
                }), this.items.on('remove', (e, t) => {
                    this.focusTracker.remove(t.element)
                }), this.keystrokes.listenTo(this.element)
            }

            focus() {
                this._focusCycler.focusFirst()
            }

            focusLast() {
                this._focusCycler.focusLast()
            }

            fillFromConfig(e, t) {
                e.map((e) => {
                    '|' == e ? this.items.add(new Rf) : t.has(e) ? this.items.add(t.create(e)) : Su.warn('toolbarview-item-unavailable: The requested toolbar item is unavailable.', {name: e})
                })
            }
        }

        var Nf = o(22), Mf = o.n(Nf);

        class Df extends xf {
            constructor(e) {
                super(e), this.stickyPanel = new Sf(e), this.toolbar = new Ff(e), this.editable = new Af(e)
            }

            render() {
                super.render(), this.stickyPanel.content.add(this.toolbar), this.top.add(this.stickyPanel), this.main.add(this.editable)
            }

            get editableElement() {
                return this.editable.element
            }
        }

        class Bf {
            constructor() {
                this._replacedElements = []
            }

            replace(e, t) {
                this._replacedElements.push({
                    element: e,
                    newElement: t
                }), e.style.display = 'none', t && e.parentNode.insertBefore(t, e.nextSibling)
            }

            restore() {
                this._replacedElements.forEach(({element: e, newElement: t}) => {
                    e.style.display = '', t && t.remove()
                }), this._replacedElements = []
            }
        }

        class Lf extends Zg {
            constructor(e, t) {
                super(t), this._elementReplacer = new Bf, this.element = e, this.data.processor = new nf, this.model.document.createRoot(), this.ui = new sf(this, new Df(this.locale)), On(this)
            }

            destroy() {
                return this.updateElement(), this._elementReplacer.restore(), this.ui.destroy(), super.destroy()
            }

            static create(e, t) {
                return new Promise((o) => {
                    const n = new this(e, t);
                    o(n.initPlugins().then(() => n.ui.init()).then(() => {
                        n._elementReplacer.replace(e, n.ui.view.element), n.fire('uiReady')
                    }).then(() => n.editing.view.attachDomRoot(n.ui.view.editableElement)).then(() => n.data.init(ai(e))).then(() => {
                        n.fire('dataReady'), n.fire('ready')
                    }).then(() => n))
                })
            }
        }

        f(Lf, ef), f(Lf, tf);

        class zf {
            constructor(e) {
                this.editor = e
            }

            destroy() {
                this.stopListening()
            }
        }

        f(zf, fc);

        class jf {
            constructor(e) {
                this.files = si(e), this._native = e
            }

            get types() {
                return this._native.types
            }

            getData(e) {
                return this._native.getData(e)
            }

            setData(e, t) {
                this._native.setData(e, t)
            }
        }

        class qf extends _u {
            constructor(e) {
                function t(e, t) {
                    t.preventDefault();
                    const n = t.dropRange ? [t.dropRange] : Array.from(o.selection.getRanges());
                    o.fire('clipboardInput', {dataTransfer: t.dataTransfer, targetRanges: n})
                }

                super(e);
                const o = this.document;
                this.domEventType = ['paste', 'copy', 'cut', 'drop', 'dragover'], this.listenTo(o, 'paste', t, {priority: 'low'}), this.listenTo(o, 'drop', t, {priority: 'low'})
            }

            onDomEvent(e) {
                const t = {dataTransfer: new jf(e.clipboardData ? e.clipboardData : e.dataTransfer)};
                'drop' == e.type && (t.dropRange = li(this.view, e)), this.fire(e.type, e, t)
            }
        }

        const Wf = ['figcaption', 'li'];

        class Uf extends zf {
            static get pluginName() {
                return 'Clipboard'
            }

            init() {
                function e(e, n) {
                    const r = n.dataTransfer;
                    n.preventDefault();
                    const a = t.data.toView(t.model.getSelectedContent(o.selection));
                    i.fire('clipboardOutput', {dataTransfer: r, content: a, method: e.name})
                }

                const t = this.editor, o = t.model.document, n = t.editing.view, i = n.document;
                this._htmlDataProcessor = new nf, n.addObserver(qf), this.listenTo(i, 'clipboardInput', (e, o) => {
                    if (t.isReadOnly) return;
                    const i = o.dataTransfer;
                    let r = '';
                    i.getData('text/html') ? r = ci(i.getData('text/html')) : i.getData('text/plain') && (r = di(i.getData('text/plain'))), r = this._htmlDataProcessor.toView(r), this.fire('inputTransformation', {content: r}), n.scrollToTheSelection()
                }, {priority: 'low'}), this.listenTo(this, 'inputTransformation', (e, t) => {
                    if (!t.content.isEmpty) {
                        const e = this.editor.data, n = this.editor.model, i = e.toModel(t.content, '$clipboardHolder');
                        if (0 == i.childCount) return;
                        n.insertContent(i, o.selection)
                    }
                }, {priority: 'low'}), this.listenTo(i, 'copy', e, {priority: 'low'}), this.listenTo(i, 'cut', (o, n) => {
                    t.isReadOnly ? n.preventDefault() : e(o, n)
                }, {priority: 'low'}), this.listenTo(i, 'clipboardOutput', (e, n) => {
                    n.content.isEmpty || (n.dataTransfer.setData('text/html', this._htmlDataProcessor.toData(n.content)), n.dataTransfer.setData('text/plain', ui(n.content))), 'cut' == n.method && t.model.deleteContent(o.selection)
                }, {priority: 'low'})
            }
        }

        class Hf {
            constructor(e) {
                function t() {
                    this.isEnabled = !1
                }

                this.editor = e, this.set('value', void 0), this.set('isEnabled', !1), this.decorate('execute'), this.listenTo(this.editor.model.document, 'change', () => {
                    this.refresh()
                }), this.on('execute', (e) => {
                    this.isEnabled || e.stop()
                }, {priority: 'high'}), this.listenTo(e, 'change:isReadOnly', (e, o, n) => {
                    n ? (this.on('change:isEnabled', t, {priority: 'lowest'}), this.isEnabled = !1) : (this.off('change:isEnabled', t), this.refresh())
                })
            }

            refresh() {
                this.isEnabled = !0
            }

            execute() {
            }

            destroy() {
                this.stopListening()
            }
        }

        f(Hf, fc);

        class Kf extends Hf {
            execute() {
                const e = this.editor.model, t = e.document;
                e.change((o) => {
                    mi(this.editor.model, o, t.selection, e.schema), this.fire('afterExecute', {writer: o})
                })
            }
        }

        class Gf extends Yc {
            constructor(e) {
                super(e);
                const t = this.document;
                t.on('keydown', (e, o) => {
                    if (this.isEnabled && o.keyCode == Nc.enter) {
                        let n;
                        t.once('enter', (e) => n = e, {priority: 'highest'}), t.fire('enter', new ku(t, o.domEvent)), n && n.stop.called && e.stop()
                    }
                })
            }

            observe() {
            }
        }

        class $f extends zf {
            static get pluginName() {
                return 'Enter'
            }

            init() {
                const e = this.editor, t = e.editing.view, o = t.document;
                t.addObserver(Gf), e.commands.add('enter', new Kf(e)), this.listenTo(o, 'enter', (o, n) => {
                    e.execute('enter'), n.preventDefault(), t.scrollToTheSelection()
                }, {priority: 'low'})
            }
        }

        class Jf {
            constructor(e, t = 20) {
                this.model = e, this.size = 0, this.limit = t, this.isLocked = !1, this._changeCallback = (e, t) => {
                    'transparent' != t.type && t !== this._batch && this._reset(!0)
                }, this._selectionChangeCallback = () => {
                    this._reset()
                }, this.model.document.on('change', this._changeCallback), this.model.document.selection.on('change:range', this._selectionChangeCallback), this.model.document.selection.on('change:attribute', this._selectionChangeCallback)
            }

            get batch() {
                return this._batch || (this._batch = new Mg), this._batch
            }

            input(e) {
                this.size += e, this.size >= this.limit && this._reset(!0)
            }

            lock() {
                this.isLocked = !0
            }

            unlock() {
                this.isLocked = !1
            }

            destroy() {
                this.model.document.off('change', this._changeCallback), this.model.document.selection.off('change:range', this._selectionChangeCallback), this.model.document.selection.off('change:attribute', this._selectionChangeCallback)
            }

            _reset(e) {
                (!this.isLocked || e) && (this._batch = null, this.size = 0)
            }
        }

        class Qf extends Hf {
            constructor(e, t) {
                super(e), this._buffer = new Jf(e.model, t)
            }

            get buffer() {
                return this._buffer
            }

            destroy() {
                super.destroy(), this._buffer.destroy()
            }

            execute(e = {}) {
                const t = this.editor.model, o = t.document, n = e.text || '', i = n.length,
                    r = e.range || o.selection.getFirstRange(), a = e.resultRange;
                t.enqueueChange(this._buffer.batch, (e) => {
                    const t = r.isCollapsed;
                    this._buffer.lock(), t || e.remove(r), n && e.insertText(n, o.selection.getAttributes(), r.start), a ? e.setSelection(a) : t && e.setSelection(r.start.getShiftedBy(i)), this._buffer.unlock(), this._buffer.input(i)
                })
            }
        }

        class Yf extends zf {
            static get pluginName() {
                return 'Input'
            }

            init() {
                const e = this.editor, t = e.editing.view, o = new Qf(e, e.config.get('typing.undoStep') || 20);
                e.commands.add('input', o), this.listenTo(t.document, 'keydown', (e, t) => {
                    this._handleKeydown(t, o)
                }, {priority: 'lowest'}), this.listenTo(t.document, 'mutations', (e, t, o) => {
                    this._handleMutations(t, o)
                })
            }

            _handleKeydown(e, t) {
                const o = this.editor.model, n = o.document, i = t.buffer;
                !t.isEnabled || fi(e) || n.selection.isCollapsed || (i.lock(), o.enqueueChange(i.batch, () => {
                    this.editor.model.deleteContent(n.selection)
                }), i.unlock())
            }

            _handleMutations(e, t) {
                new Xf(this.editor).handle(e, t)
            }
        }

        class Xf {
            constructor(e) {
                this.editor = e, this.editing = this.editor.editing
            }

            handle(e, t) {
                if (_i(e)) this._handleContainerChildrenMutations(e, t); else for (const o of e) this._handleTextMutation(o, t), this._handleTextNodeInsertion(o)
            }

            _handleContainerChildrenMutations(e, t) {
                const o = ki(e);
                if (!o) return;
                const n = this.editor.editing.view.domConverter, i = n.mapViewToDom(o), r = new Gc,
                    a = this.editor.data.toModel(r.domToView(i)).getChild(0),
                    s = this.editor.editing.mapper.toModelElement(o);
                if (!s) return;
                const l = Array.from(a.getChildren()), d = Array.from(s.getChildren());
                if (!wi(l) || !wi(d)) return;
                const c = l.map((e) => e.data).join('').replace(/\u00A0/g, ' '), u = d.map((e) => e.data).join('');
                if (u === c) return;
                const m = Te(u, c), {firstChangeAt: p, insertions: g, deletions: f} = vi(m);
                let h = null;
                t && (h = this.editing.mapper.toModelRange(t.getFirstRange()));
                const b = c.substr(p, g), k = Hu.createFromParentsAndOffsets(s, p, s, p + f);
                this.editor.execute('input', {text: b, range: k, resultRange: h})
            }

            _handleTextMutation(e, t) {
                if ('text' != e.type) return;
                const o = e.newText.replace(/\u00A0/g, ' '), n = e.oldText.replace(/\u00A0/g, ' '),
                    i = Te(n, o), {firstChangeAt: r, insertions: a, deletions: s} = vi(i);
                let l = null;
                t && (l = this.editing.mapper.toModelRange(t.getFirstRange()));
                const d = new vc(e.node, r), c = this.editing.mapper.toModelPosition(d),
                    u = Hu.createFromPositionAndShift(c, s), m = o.substr(r, a);
                this.editor.execute('input', {text: m, range: u, resultRange: l})
            }

            _handleTextNodeInsertion(e) {
                if ('children' == e.type) {
                    const t = bi(e), o = new vc(e.node, t.index), n = this.editing.mapper.toModelPosition(o),
                        i = t.values[0].data;
                    this.editor.execute('input', {text: i.replace(/\u00A0/g, ' '), range: new Hu(n)})
                }
            }
        }

        const Zf = [te('arrowUp'), te('arrowRight'), te('arrowDown'), te('arrowLeft'), 9, 16, 17, 18, 20, 27, 33, 34, 35, 36, 229];
        for (let n = 112; 135 >= n; n++) Zf.push(n);

        class eh extends Hf {
            constructor(e, t) {
                super(e), this.direction = t, this._buffer = new Jf(e.model, e.config.get('typing.undoStep'))
            }

            execute(e = {}) {
                const t = this.editor.model, o = t.document;
                t.enqueueChange(this._buffer.batch, (n) => {
                    this._buffer.lock();
                    const i = new Ju(o.selection), r = i.isCollapsed;
                    if (i.isCollapsed && t.modifySelection(i, {
                        direction: this.direction,
                        unit: e.unit
                    }), this._shouldEntireContentBeReplacedWithParagraph(e.sequence || 1)) return void this._replaceEntireContentWithParagraph(n);
                    if (i.isCollapsed) return;
                    let a = 0;
                    i.getFirstRange().getMinimalFlatRanges().forEach((e) => {
                        a += Y(e.getWalker({singleCharacters: !0, ignoreElementEnd: !0, shallow: !0}))
                    }), t.deleteContent(i, {doNotResetEntireContent: r}), this._buffer.input(a), n.setSelection(i), this._buffer.unlock()
                })
            }

            _shouldEntireContentBeReplacedWithParagraph(e) {
                if (1 < e) return !1;
                const t = this.editor.model, o = t.document, n = o.selection, i = t.schema.getLimitElement(n),
                    r = n.isCollapsed && n.containsEntireContent(i);
                if (!r) return !1;
                if (!t.schema.checkChild(i, 'paragraph')) return !1;
                const a = i.getChild(0);
                return !(a && 'paragraph' === a.name)
            }

            _replaceEntireContentWithParagraph(e) {
                const t = this.editor.model, o = t.document, n = o.selection, i = t.schema.getLimitElement(n),
                    r = new ju('paragraph');
                e.remove(Hu.createIn(i)), e.insert(r, i), e.setSelection(r, 0)
            }
        }

        class th extends Yc {
            constructor(e) {
                super(e);
                const t = e.document;
                let o = 0;
                t.on('keyup', (e, t) => {
                    (t.keyCode == Nc.delete || t.keyCode == Nc.backspace) && (o = 0)
                }), t.on('keydown', (e, n) => {
                    const i = {};
                    if (n.keyCode == Nc.delete) i.direction = 'forward', i.unit = 'character'; else if (n.keyCode == Nc.backspace) i.direction = 'backward', i.unit = 'codePoint'; else return;
                    const r = Ic.isMac ? n.altKey : n.ctrlKey;
                    i.unit = r ? 'word' : i.unit, i.sequence = ++o;
                    let a;
                    t.once('delete', (e) => a = e, {priority: 'highest'}), t.fire('delete', new ku(t, n.domEvent, i)), a && a.stop.called && e.stop()
                })
            }

            observe() {
            }
        }

        class oh extends zf {
            static get pluginName() {
                return 'Delete'
            }

            init() {
                const e = this.editor, t = e.editing.view, o = t.document;
                t.addObserver(th), e.commands.add('forwardDelete', new eh(e, 'forward')), e.commands.add('delete', new eh(e, 'backward')), this.listenTo(o, 'delete', (o, n) => {
                    e.execute('forward' == n.direction ? 'forwardDelete' : 'delete', {
                        unit: n.unit,
                        sequence: n.sequence
                    }), n.preventDefault(), t.scrollToTheSelection()
                })
            }
        }

        class nh extends zf {
            static get requires() {
                return [Yf, oh]
            }

            static get pluginName() {
                return 'Typing'
            }
        }

        class ih extends Hf {
            constructor(e) {
                super(e), this._stack = [], this._createdBatches = new WeakSet, this.refresh()
            }

            refresh() {
                this.isEnabled = 0 < this._stack.length
            }

            addBatch(e) {
                const t = this.editor.model.document.selection,
                    o = {ranges: t.hasOwnRange ? Array.from(t.getRanges()) : [], isBackward: t.isBackward};
                this._stack.push({batch: e, selection: o}), this.refresh()
            }

            clearStack() {
                this._stack = [], this.refresh()
            }

            _restoreSelection(e, t, o) {
                const n = this.editor.model, i = n.document, r = [];
                for (const n of e) {
                    const e = yi(n, o), t = e.find((e) => e.start.root != i.graveyard);
                    t && r.push(t)
                }
                r.length && n.change((e) => {
                    e.setSelection(r, {backward: t})
                })
            }

            _undo(e, t) {
                const o = this.editor.model, n = o.document;
                this._createdBatches.add(t);
                const i = e.deltas.slice();
                i.reverse();
                for (const r of i) if (r.operations.some((e) => e.isDocumentOperation)) {
                    const e = r.baseVersion + r.operations.length, i = Array.from(n.history.getDeltas(e)),
                        a = o.transformDeltas([r.getReversed()], i, !0), s = a.deltasA;
                    for (const e of s) {
                        e.baseVersion = n.version, t.addDelta(e);
                        for (const t of e.operations) o.applyOperation(t);
                        n.history.setDeltaAsUndone(r, e)
                    }
                }
            }
        }

        class rh extends ih {
            execute(e = null) {
                const t = e ? this._stack.findIndex((t) => t.batch == e) : this._stack.length - 1,
                    o = this._stack.splice(t, 1)[0], n = new Mg;
                this.editor.model.enqueueChange(n, () => {
                    this._undo(o.batch, n);
                    const e = this.editor.model.document.history.getDeltas(o.batch.baseVersion);
                    this._restoreSelection(o.selection.ranges, o.selection.isBackward, e), this.fire('revert', o.batch, n)
                }), this.refresh()
            }
        }

        class ah extends ih {
            execute() {
                const e = this._stack.pop(), t = new Mg;
                this.editor.model.enqueueChange(t, () => {
                    const o = e.batch.deltas[e.batch.deltas.length - 1], n = o.baseVersion + o.operations.length,
                        i = this.editor.model.document.history.getDeltas(n);
                    this._restoreSelection(e.selection.ranges, e.selection.isBackward, i), this._undo(e.batch, t)
                }), this.refresh()
            }
        }

        class sh extends zf {
            constructor(e) {
                super(e), this._batchRegistry = new WeakSet
            }

            init() {
                const e = this.editor;
                this._undoCommand = new rh(e), this._redoCommand = new ah(e), e.commands.add('undo', this._undoCommand), e.commands.add('redo', this._redoCommand), this.listenTo(e.model, 'applyOperation', (e, t) => {
                    const o = t[0];
                    if (o.isDocumentOperation) {
                        const e = o.delta.batch;
                        this._batchRegistry.has(e) || 'transparent' == e.type || (this._redoCommand._createdBatches.has(e) ? this._undoCommand.addBatch(e) : !this._undoCommand._createdBatches.has(e) && (this._undoCommand.addBatch(e), this._redoCommand.clearStack()), this._batchRegistry.add(e))
                    }
                }, {priority: 'highest'}), this.listenTo(this._undoCommand, 'revert', (e, t, o) => {
                    this._redoCommand.addBatch(o)
                }), e.keystrokes.set('CTRL+Z', 'undo'), e.keystrokes.set('CTRL+Y', 'redo'), e.keystrokes.set('CTRL+SHIFT+Z', 'redo')
            }
        }

        var lh = o(24), dh = o.n(lh);

        class ch extends hf {
            constructor() {
                super();
                const e = this.bindTemplate;
                this.set('content', ''), this.set('viewBox', '0 0 20 20'), this.set('fillColor', ''), this.setTemplate({
                    tag: 'svg',
                    ns: 'http://www.w3.org/2000/svg',
                    attributes: {class: ['ck', 'ck-icon'], viewBox: e.to('viewBox')}
                })
            }

            render() {
                super.render(), this._updateXMLContent(), this._colorFillPaths(), this.on('change:content', () => {
                    this._updateXMLContent(), this._colorFillPaths()
                }), this.on('change:fillColor', () => {
                    this._colorFillPaths()
                })
            }

            _updateXMLContent() {
                if (this.content) {
                    const e = new DOMParser().parseFromString(this.content.trim(), 'image/svg+xml'),
                        t = e.querySelector('svg'), o = t.getAttribute('viewBox');
                    for (o && (this.viewBox = o), this.element.innerHTML = ''; 0 < t.childNodes.length;) this.element.appendChild(t.childNodes[0])
                }
            }

            _colorFillPaths() {
                this.fillColor && this.element.querySelectorAll('.ck-icon__fill').forEach((e) => {
                    e.style.fill = this.fillColor
                })
            }
        }

        var uh = o(26), mh = o.n(uh);

        class ph extends hf {
            constructor(e) {
                super(e), this.set('text', ''), this.set('position', 's');
                const t = this.bindTemplate;
                this.setTemplate({
                    tag: 'span',
                    attributes: {class: ['ck', 'ck-tooltip', t.to('position', (e) => 'ck-tooltip_' + e), t.if('text', 'ck-hidden', (e) => !e.trim())]},
                    children: [{
                        tag: 'span',
                        attributes: {class: ['ck', 'ck-tooltip__text']},
                        children: [{text: t.to('text')}]
                    }]
                })
            }
        }

        var gh = o(28), fh = o.n(gh);

        class hh extends hf {
            constructor(e) {
                super(e);
                const t = this.bindTemplate;
                this.set('icon'), this.set('isEnabled', !0), this.set('isOn', !1), this.set('isVisible', !0), this.set('keystroke'), this.set('label'), this.set('tabindex', -1), this.set('tooltip'), this.set('tooltipPosition', 's'), this.set('type', 'button'), this.set('withText', !1), this.children = this.createCollection(), this.tooltipView = this._createTooltipView(), this.labelView = this._createLabelView(), this.iconView = new ch, this.iconView.extendTemplate({attributes: {class: 'ck-button__icon'}}), this.bind('_tooltipString').to(this, 'tooltip', this, 'label', this, 'keystroke', this._getTooltipString.bind(this)), this.setTemplate({
                    tag: 'button',
                    attributes: {
                        class: ['ck', 'ck-button', t.to('isEnabled', (e) => e ? 'ck-enabled' : 'ck-disabled'), t.if('isVisible', 'ck-hidden', (e) => !e), t.to('isOn', (e) => e ? 'ck-on' : 'ck-off'), t.if('withText', 'ck-button_with-text')],
                        type: t.to('type', (e) => e ? e : 'button'),
                        tabindex: t.to('tabindex')
                    },
                    children: this.children,
                    on: {
                        mousedown: t.to((e) => {
                            e.preventDefault()
                        }), click: t.to((e) => {
                            this.isEnabled ? this.fire('execute') : e.preventDefault()
                        })
                    }
                })
            }

            render() {
                super.render(), this.icon && (this.iconView.bind('content').to(this, 'icon'), this.children.add(this.iconView)), this.children.add(this.tooltipView), this.children.add(this.labelView)
            }

            focus() {
                this.element.focus()
            }

            _createTooltipView() {
                const e = new ph;
                return e.bind('text').to(this, '_tooltipString'), e.bind('position').to(this, 'tooltipPosition'), e
            }

            _createLabelView() {
                const e = new hf;
                return e.setTemplate({
                    tag: 'span',
                    attributes: {class: ['ck', 'ck-button__label']},
                    children: [{text: this.bindTemplate.to('label')}]
                }), e
            }

            _getTooltipString(e, t, o) {
                return e ? 'string' == typeof e ? e : (o && (o = ne(o)), e instanceof Function ? e(t, o) : `${t}${o ? ` (${o})` : ''}`) : ''
            }
        }

        var bh = o(30), kh = o.n(bh), _h = o(31), wh = o.n(_h);

        class vh extends zf {
            init() {
                const e = this.editor, o = e.t;
                this._addButton('undo', o('ad'), 'CTRL+Z', kh.a), this._addButton('redo', o('ae'), 'CTRL+Y', wh.a)
            }

            _addButton(e, t, o, n) {
                const i = this.editor;
                i.ui.componentFactory.add(e, (r) => {
                    const a = i.commands.get(e), s = new hh(r);
                    return s.set({
                        label: t,
                        icon: n,
                        keystroke: o,
                        tooltip: !0
                    }), s.bind('isEnabled').to(a, 'isEnabled'), this.listenTo(s, 'execute', () => i.execute(e)), s
                })
            }
        }

        class yh extends zf {
            static get requires() {
                return [sh, vh]
            }

            static get pluginName() {
                return 'Undo'
            }
        }

        class xh extends zf {
            static get requires() {
                return [Uf, $f, nh, yh]
            }

            static get pluginName() {
                return 'Essentials'
            }
        }

        class Ch {
            constructor() {
                const e = new window.FileReader;
                this._reader = e, this.set('loaded', 0), e.onprogress = (e) => {
                    this.loaded = e.loaded
                }
            }

            get error() {
                return this._reader.error
            }

            read(e) {
                const t = this._reader;
                return this.total = e.size, new Promise((o, n) => {
                    t.onload = () => {
                        o(t.result)
                    }, t.onerror = () => {
                        n('error')
                    }, t.onabort = () => {
                        n('aborted')
                    }, this._reader.readAsDataURL(e)
                })
            }

            abort() {
                this._reader.abort()
            }
        }

        f(Ch, fc);

        class Ah extends zf {
            static get pluginName() {
                return 'FileRepository'
            }

            init() {
                this.loaders = new Ac, this.set('uploaded', 0), this.set('uploadTotal', null), this.bind('uploadedPercent').to(this, 'uploaded', this, 'uploadTotal', (e, t) => t ? 100 * (e / t) : 0)
            }

            getLoader(e) {
                for (const t of this.loaders) if (t.file == e) return t;
                return null
            }

            createLoader(e) {
                if (!this.createUploadAdapter) return Su.error('filerepository-no-upload-adapter: Upload adapter is not defined.'), null;
                const t = new Th(e);
                return t._adapter = this.createUploadAdapter(t), this.loaders.add(t), t.on('change:uploaded', () => {
                    let e = 0;
                    for (const t of this.loaders) e += t.uploaded;
                    this.uploaded = e
                }), t.on('change:uploadTotal', () => {
                    let e = 0;
                    for (const t of this.loaders) t.uploadTotal && (e += t.uploadTotal);
                    this.uploadTotal = e
                }), t
            }

            destroyLoader(e) {
                const t = e instanceof Th ? e : this.getLoader(e);
                t._destroy(), this.loaders.remove(t)
            }
        }

        f(Ah, fc);

        class Th {
            constructor(e, t) {
                this.id = i(), this.file = e, this._adapter = t, this._reader = new Ch, this.set('status', 'idle'), this.set('uploaded', 0), this.set('uploadTotal', null), this.bind('uploadedPercent').to(this, 'uploaded', this, 'uploadTotal', (e, t) => t ? 100 * (e / t) : 0), this.set('uploadResponse', null)
            }

            read() {
                if ('idle' != this.status) throw new Ya('filerepository-read-wrong-status: You cannot call read if the status is different than idle.');
                return this.status = 'reading', this._reader.read(this.file).then((e) => (this.status = 'idle', e)).catch((e) => {
                    if ('aborted' === e) throw this.status = 'aborted', 'aborted';
                    throw this.status = 'error', this._reader.error
                })
            }

            upload() {
                if ('idle' != this.status) throw new Ya('filerepository-upload-wrong-status: You cannot call upload if the status is different than idle.');
                return this.status = 'uploading', this._adapter.upload().then((e) => (this.uploadResponse = e, this.status = 'idle', e)).catch((e) => {
                    if ('aborted' === this.status) throw 'aborted';
                    throw this.status = 'error', e
                })
            }

            abort() {
                const e = this.status;
                this.status = 'aborted', 'reading' == e && this._reader.abort(), 'uploading' == e && this._adapter.abort && this._adapter.abort(), this._destroy()
            }

            _destroy() {
                this._reader = void 0, this._adapter = void 0, this.data = void 0, this.uploadResponse = void 0, this.file = void 0
            }
        }

        f(Th, fc);
        const Ph = 'ckCsrfToken', Eh = 40, Sh = 'abcdefghijklmnopqrstuvwxyz0123456789';

        class Oh extends zf {
            static get requires() {
                return [Ah]
            }

            static get pluginName() {
                return 'CKFinderUploadAdapter'
            }

            init() {
                const e = this.editor.config.get('ckfinder.uploadUrl');
                e && (this.editor.plugins.get(Ah).createUploadAdapter = (t) => new Rh(t, e, this.editor.t))
            }
        }

        class Rh {
            constructor(e, o, n) {
                this.loader = e, this.url = o, this.t = n
            }

            upload() {
                return new Promise((e, t) => {
                    this._initRequest(), this._initListeners(e, t), this._sendRequest()
                })
            }

            abort() {
                this.xhr && this.xhr.abort()
            }

            _initRequest() {
                const e = this.xhr = new XMLHttpRequest;
                e.open('POST', this.url, !0), e.responseType = 'json'
            }

            _initListeners(e, o) {
                const n = this.xhr, i = this.loader, r = this.t, t = r('a') + ` ${i.file.name}.`;
                n.addEventListener('error', () => o(t)), n.addEventListener('abort', () => o()), n.addEventListener('load', () => {
                    const i = n.response;
                    return i && i.uploaded ? void e({default: i.url}) : o(i && i.error && i.error.message ? i.error.message : t)
                }), n.upload && n.upload.addEventListener('progress', (e) => {
                    e.lengthComputable && (i.uploadTotal = e.total, i.uploaded = e.loaded)
                })
            }

            _sendRequest() {
                const e = new FormData;
                e.append('upload', this.loader.file), e.append('ckCsrfToken', Ci()), this.xhr.send(e)
            }
        }

        class Ih {
            constructor(e, t, o) {
                let n;
                if ('function' == typeof o) n = o; else {
                    n = () => {
                        e.execute(o)
                    }
                }
                e.model.document.on('change', (o, i) => {
                    if ('transparent' == i.type) return;
                    const r = Array.from(e.model.document.differ.getChanges()), a = r[0];
                    if (1 != r.length || 'insert' !== a.type || '$text' != a.name || 1 != a.length) return;
                    const s = a.position.textNode || a.position.nodeAfter;
                    if (!s.parent.is('paragraph')) return;
                    const l = t.exec(s.data);
                    l && e.model.enqueueChange((e) => {
                        const t = Hu.createFromParentsAndOffsets(s.parent, 0, s.parent, l[0].length);
                        e.remove(t), n({match: l})
                    })
                })
            }
        }

        class Vh {
            constructor(e, t, o) {
                let n, i, r, a;
                t instanceof RegExp ? n = t : r = t, 'string' == typeof o ? i = o : a = o, r = r || ((e) => {
                    let t;
                    const o = [], i = [];
                    for (; null !== (t = n.exec(e)) && !(t && 4 > t.length);) {
                        let {index: e, 1: n, 2: r, 3: a} = t;
                        e += t[0].length - (n + r + a).length;
                        const s = [e, e + n.length], l = [e + n.length + r.length, e + n.length + r.length + a.length];
                        o.push(s), o.push(l), i.push([e + n.length, e + n.length + r.length])
                    }
                    return {remove: o, format: i}
                }), a = a || ((e, t) => {
                    for (const o of t) e.setAttribute(i, !0, o);
                    e.removeSelectionAttribute(i)
                }), e.model.document.on('change', (t, o) => {
                    if ('transparent' == o.type) return;
                    const n = e.model.document.selection;
                    if (!n.isCollapsed) return;
                    const s = Array.from(e.model.document.differ.getChanges()), l = s[0];
                    if (1 != s.length || 'insert' !== l.type || '$text' != l.name || 1 != l.length) return;
                    const d = n.focus.parent, c = Ei(d).slice(0, n.focus.offset), u = r(c), m = Si(d, u.format),
                        p = Si(d, u.remove);
                    m.length && p.length && e.model.enqueueChange((t) => {
                        const o = e.model.schema.getValidRanges(m, i);
                        a(t, o);
                        for (const e of p.reverse()) t.remove(e)
                    })
                })
            }
        }

        class Fh extends zf {
            static get pluginName() {
                return 'Autoformat'
            }

            afterInit() {
                this._addListAutoformats(), this._addBasicStylesAutoformats(), this._addHeadingAutoformats(), this._addBlockQuoteAutoformats()
            }

            _addListAutoformats() {
                const e = this.editor.commands;
                e.get('bulletedList') && new Ih(this.editor, /^[*-]\s$/, 'bulletedList'), e.get('numberedList') && new Ih(this.editor, /^\d+[.|)]\s$/, 'numberedList')
            }

            _addBasicStylesAutoformats() {
                const e = this.editor.commands;
                e.get('bold') && (new Vh(this.editor, /(\*\*)([^*]+)(\*\*)$/g, 'bold'), new Vh(this.editor, /(__)([^_]+)(__)$/g, 'bold')), e.get('italic') && (new Vh(this.editor, /(?:^|[^*])(\*)([^*_]+)(\*)$/g, 'italic'), new Vh(this.editor, /(?:^|[^_])(_)([^_]+)(_)$/g, 'italic')), e.get('code') && new Vh(this.editor, /(`)([^`]+)(`)$/g, 'code')
            }

            _addHeadingAutoformats() {
                const e = this.editor.commands.get('heading');
                e && e.modelElements.filter((e) => e.match(/^heading[1-6]$/)).forEach((e) => {
                    const t = e[7], o = new RegExp(`^(#{${t}})\\s$`);
                    new Ih(this.editor, o, () => {
                        this.editor.execute('heading', {value: e})
                    })
                })
            }

            _addBlockQuoteAutoformats() {
                this.editor.commands.get('blockQuote') && new Ih(this.editor, /^>\s$/, 'blockQuote')
            }
        }

        class Nh extends Hf {
            constructor(e, t) {
                super(e), this.attributeKey = t
            }

            refresh() {
                const e = this.editor.model, t = e.document;
                this.value = t.selection.hasAttribute(this.attributeKey), this.isEnabled = e.schema.checkAttributeInSelection(t.selection, this.attributeKey)
            }

            execute(e = {}) {
                const t = this.editor.model, o = t.document, n = o.selection,
                    i = e.forceValue === void 0 ? !this.value : e.forceValue;
                t.change((e) => {
                    if (n.isCollapsed) i ? e.setSelectionAttribute(this.attributeKey, !0) : e.removeSelectionAttribute(this.attributeKey); else {
                        const o = t.schema.getValidRanges(n.getRanges(), this.attributeKey);
                        for (const t of o) i ? e.setAttribute(this.attributeKey, i, t) : e.removeAttribute(this.attributeKey, t)
                    }
                })
            }
        }

        const Mh = 'bold';

        class Dh extends zf {
            init() {
                const e = this.editor;
                e.model.schema.extend('$text', {allowAttributes: Mh}), e.conversion.attributeToElement({
                    model: Mh,
                    view: 'strong',
                    upcastAlso: ['b', {styles: {"font-weight": 'bold'}}]
                }), e.commands.add(Mh, new Nh(e, Mh)), e.keystrokes.set('CTRL+B', Mh)
            }
        }

        var Bh = o(32), Lh = o.n(Bh);
        const zh = 'bold';

        class jh extends zf {
            init() {
                const e = this.editor, o = e.t;
                e.ui.componentFactory.add(zh, (t) => {
                    const n = e.commands.get(zh), i = new hh(t);
                    return i.set({
                        label: o('d'),
                        icon: Lh.a,
                        keystroke: 'CTRL+B',
                        tooltip: !0
                    }), i.bind('isOn', 'isEnabled').to(n, 'value', 'isEnabled'), this.listenTo(i, 'execute', () => e.execute(zh)), i
                })
            }
        }

        class qh extends zf {
            static get requires() {
                return [Dh, jh]
            }

            static get pluginName() {
                return 'Bold'
            }
        }

        const Wh = 'italic';

        class Uh extends zf {
            init() {
                const e = this.editor;
                e.model.schema.extend('$text', {allowAttributes: Wh}), e.conversion.attributeToElement({
                    model: Wh,
                    view: 'i',
                    upcastAlso: ['em', {styles: {"font-style": 'italic'}}]
                }), e.commands.add(Wh, new Nh(e, Wh)), e.keystrokes.set('CTRL+I', Wh)
            }
        }

        var Hh = o(33), Kh = o.n(Hh);
        const Gh = 'italic';

        class $h extends zf {
            init() {
                const e = this.editor, o = e.t;
                e.ui.componentFactory.add(Gh, (t) => {
                    const n = e.commands.get(Gh), i = new hh(t);
                    return i.set({
                        label: o('c'),
                        icon: Kh.a,
                        keystroke: 'CTRL+I',
                        tooltip: !0
                    }), i.bind('isOn', 'isEnabled').to(n, 'value', 'isEnabled'), this.listenTo(i, 'execute', () => e.execute(Gh)), i
                })
            }
        }

        class Jh extends zf {
            static get requires() {
                return [Uh, $h]
            }

            static get pluginName() {
                return 'Italic'
            }
        }

        class Qh extends Hf {
            refresh() {
                this.value = this._getValue(), this.isEnabled = this._checkEnabled()
            }

            execute() {
                const e = this.editor.model, t = e.document, o = e.schema,
                    n = Array.from(t.selection.getSelectedBlocks());
                e.change((e) => {
                    if (this.value) this._removeQuote(e, n.filter(Ri)); else {
                        const t = n.filter((e) => Ri(e) || Vi(o, e));
                        this._applyQuote(e, t)
                    }
                })
            }

            _getValue() {
                const e = Oi(this.editor.model.document.selection.getSelectedBlocks());
                return !!(e && Ri(e))
            }

            _checkEnabled() {
                if (this.value) return !0;
                const e = this.editor.model.document.selection, t = this.editor.model.schema,
                    o = Oi(e.getSelectedBlocks());
                return !!o && Vi(t, o)
            }

            _removeQuote(e, t) {
                Ii(t).reverse().forEach((t) => {
                    if (t.start.isAtStart && t.end.isAtEnd) return void e.unwrap(t.start.parent);
                    if (t.start.isAtStart) {
                        const o = Uu.createBefore(t.start.parent);
                        return void e.move(t, o)
                    }
                    t.end.isAtEnd || e.split(t.end);
                    const o = Uu.createAfter(t.end.parent);
                    e.move(t, o)
                })
            }

            _applyQuote(e, t) {
                const o = [];
                Ii(t).reverse().forEach((t) => {
                    let n = Ri(t.start);
                    n || (n = new ju('blockQuote'), e.wrap(t, n)), o.push(n)
                }), o.reverse().reduce((t, o) => t.nextSibling == o ? (e.merge(Uu.createAfter(t)), t) : o)
            }
        }

        class Yh extends zf {
            init() {
                const e = this.editor, t = e.model.schema;
                e.commands.add('blockQuote', new Qh(e)), t.register('blockQuote', {
                    allowWhere: '$block',
                    allowContentOf: '$root'
                }), t.addChildCheck((e, t) => {
                    if (e.endsWith('blockQuote') && 'blockQuote' == t.name) return !1
                }), e.conversion.elementToElement({model: 'blockQuote', view: 'blockquote'})
            }

            afterInit() {
                const e = this.editor, t = e.commands.get('blockQuote');
                this.listenTo(this.editor.editing.view.document, 'enter', (e, o) => {
                    const n = this.editor.model.document, i = n.selection.getLastPosition().parent;
                    n.selection.isCollapsed && i.isEmpty && t.value && (this.editor.execute('blockQuote'), this.editor.editing.view.scrollToTheSelection(), o.preventDefault(), e.stop())
                })
            }
        }

        var Xh = o(34), Zh = o.n(Xh), eb = o(35), tb = o.n(eb);

        class ob extends zf {
            init() {
                const e = this.editor, o = e.t;
                e.ui.componentFactory.add('blockQuote', (t) => {
                    const n = e.commands.get('blockQuote'), i = new hh(t);
                    return i.set({
                        label: o('b'),
                        icon: Zh.a,
                        tooltip: !0
                    }), i.bind('isOn', 'isEnabled').to(n, 'value', 'isEnabled'), this.listenTo(i, 'execute', () => e.execute('blockQuote')), i
                })
            }
        }

        class nb extends zf {
            static get requires() {
                return [Yh, ob]
            }

            static get pluginName() {
                return 'BlockQuote'
            }
        }

        const ib = /^data:(\S*?);base64,/;

        class rb {
            constructor(e, t, o) {
                if (!e) throw new Error('File must be provided');
                if (!t) throw new Error('Token must be provided');
                if (!o) throw new Error('Api address must be provided');
                this.file = Ni(e) ? Fi(e) : e, this._token = t, this._apiAddress = o
            }

            onProgress(e) {
                return this.on('progress', (t, o) => e(o)), this
            }

            onError(e) {
                return this.once('error', (t, o) => e(o)), this
            }

            abort() {
                this.xhr.abort()
            }

            send() {
                return this._prepareRequest(), this._attachXHRListeners(), this._sendRequest()
            }

            _prepareRequest() {
                const e = new XMLHttpRequest;
                e.open('POST', this._apiAddress), e.setRequestHeader('Authorization', this._token.value), e.responseType = 'json', this.xhr = e
            }

            _attachXHRListeners() {
                function e(e) {
                    return () => t.fire('error', e)
                }

                const t = this, o = this.xhr;
                o.addEventListener('error', e('Network Error')), o.addEventListener('abort', e('Abort')), o.upload && o.upload.addEventListener('progress', (e) => {
                    e.lengthComputable && this.fire('progress', {total: e.total, uploaded: e.loaded})
                }), o.addEventListener('load', () => {
                    const e = o.status, t = o.response;
                    if (200 > e || 299 < e) return this.fire('error', t.message || t.error)
                })
            }

            _sendRequest() {
                const e = new FormData, t = this.xhr;
                return e.append('file', this.file), new Promise((o, n) => {
                    t.addEventListener('load', () => {
                        const e = t.status, i = t.response;
                        return 200 > e || 299 < e ? n(i.message || i.error) : o(i)
                    }), t.addEventListener('error', () => n('Network Error')), t.addEventListener('abort', () => n('Abort')), t.send(e)
                })
            }
        }

        f(rb, rs);
        const ab = {refreshInterval: 36e5, autoRefresh: !0};

        class sb {
            constructor(e, t = ab) {
                if (!e) throw new Error('`tokenUrl` must be provided');
                this.set('value', t.initValue), this._tokenUrl = e, this._options = Object.assign({}, ab, t)
            }

            init() {
                return new Promise((e, t) => (this._options.autoRefresh && this._startRefreshing(), this.value ? void e(this) : void this._refreshToken().then(e).catch(t)))
            }

            _refreshToken() {
                return new Promise((e, t) => {
                    const o = new XMLHttpRequest;
                    o.open('GET', this._tokenUrl), o.addEventListener('load', () => {
                        const n = o.status, i = o.response;
                        return 200 > n || 299 < n ? t('Cannot download new token!') : (this.set('value', i), e(this))
                    }), o.addEventListener('error', () => t('Network Error')), o.addEventListener('abort', () => t('Abort')), o.send()
                })
            }

            _startRefreshing() {
                this._refreshInterval = setInterval(this._refreshToken.bind(this), this._options.refreshInterval)
            }

            _stopRefreshing() {
                clearInterval(this._refreshInterval)
            }

            static create(e, t = ab) {
                const o = new sb(e, t);
                return o.init()
            }
        }

        f(sb, fc);

        class lb extends zf {
            init() {
                const e = this.editor, t = e.config, o = t.get('cloudServices') || {};
                for (const e in o) this[e] = o[e];
                return this.tokenUrl ? (this.token = new lb.Token(this.tokenUrl), this.token.init()) : void (this.token = null)
            }
        }

        lb.Token = sb;

        class db extends zf {
            static get requires() {
                return [Ah, lb]
            }

            init() {
                const e = this.editor, t = e.plugins.get(lb), o = t.token, n = t.uploadUrl;
                o && (this._uploadGateway = new db._UploadGateway(o, n), e.plugins.get(Ah).createUploadAdapter = (e) => new cb(this._uploadGateway, e))
            }
        }

        class cb {
            constructor(e, t) {
                this.uploadGateway = e, this.loader = t
            }

            upload() {
                return this.fileUploader = this.uploadGateway.upload(this.loader.file), this.fileUploader.on('progress', (e, t) => {
                    this.loader.uploadTotal = t.total, this.loader.uploaded = t.uploaded
                }), this.fileUploader.send()
            }

            abort() {
                this.fileUploader.abort()
            }
        }

        db._UploadGateway = class {
            constructor(e, t) {
                if (!e) throw new Error('Token must be provided');
                if (!t) throw new Error('Api address must be provided');
                this._token = e, this._apiAddress = t
            }

            upload(e) {
                return new rb(e, this._token, this._apiAddress)
            }
        };

        class ub {
            constructor() {
                this._stack = []
            }

            add(e, t) {
                const o = this._stack, n = o[0];
                this._insertDescriptor(e);
                const i = o[0];
                n === i || Li(n, i) || this.fire('change:top', {oldDescriptor: n, newDescriptor: i, writer: t})
            }

            remove(e, t) {
                const o = this._stack, n = o[0];
                this._removeDescriptor(e);
                const i = o[0];
                n === i || Li(n, i) || this.fire('change:top', {oldDescriptor: n, newDescriptor: i, writer: t})
            }

            _insertDescriptor(e) {
                const t = this._stack, o = t.findIndex((t) => t.id === e.id);
                if (!Li(e, t[o])) {
                    -1 < o && t.splice(o, 1);
                    let n = 0;
                    for (; t[n] && zi(t[n], e);) n++;
                    t.splice(n, 0, e)
                }
            }

            _removeDescriptor(e) {
                const t = this._stack, o = t.findIndex((t) => t.id === e);
                -1 < o && t.splice(o, 1)
            }
        }

        f(ub, rs);
        const mb = Symbol('isWidget'), pb = Symbol('label'), gb = 'ck-widget', fb = 'ck-widget_selected',
            hb = Symbol('isImage');

        class bb extends zf {
            init() {
                const e = this.editor, o = e.model.schema, n = e.t, t = e.conversion;
                o.register('image', {
                    isObject: !0,
                    isBlock: !0,
                    allowWhere: '$block',
                    allowAttributes: ['alt', 'src', 'srcset']
                }), t.for('dataDowncast').add(ht({
                    model: 'image',
                    view: (e, t) => Zi(t)
                })), t.for('editingDowncast').add(ht({
                    model: 'image',
                    view: (e, t) => Ji(Zi(t), t, n('e'))
                })), t.for('downcast').add(Bi('src')).add(Bi('alt')).add(Di()), t.for('upcast').add(Yt({
                    view: {
                        name: 'img',
                        attributes: {src: !0}
                    }, model: (e, t) => t.createElement('image', {src: e.getAttribute('src')})
                })).add(Zt({view: {name: 'img', key: 'alt'}, model: 'alt'})).add(Zt({
                    view: {name: 'img', key: 'srcset'},
                    model: {
                        key: 'srcset', value: (e) => {
                            const t = {data: e.getAttribute('srcset')};
                            return e.hasAttribute('width') && (t.width = e.getAttribute('width')), t
                        }
                    }
                })).add(Mi())
            }
        }

        class kb extends _u {
            constructor(e) {
                super(e), this.domEventType = 'mousedown'
            }

            onDomEvent(e) {
                this.fire(e.type, e)
            }
        }

        var _b = o(37), wb = o.n(_b);
        const vb = oe('Ctrl+A');

        class yb extends zf {
            static get pluginName() {
                return 'Widget'
            }

            init() {
                const e = this.editor.editing.view, t = e.document;
                this._previouslySelected = new Set, this.editor.editing.downcastDispatcher.on('selection', (e, t, o) => {
                    this._clearPreviouslySelectedWidgets(o.writer);
                    const n = o.writer, i = n.document.selection, r = i.getSelectedElement();
                    for (const a of i.getRanges()) for (const e of a) {
                        const t = e.item;
                        t.is('element') && qi(t) && (n.addClass(fb, t), this._previouslySelected.add(t), t == r && n.setSelection(i.getRanges(), {
                            fake: !0,
                            label: Ki(r)
                        }))
                    }
                }, {priority: 'low'}), e.addObserver(kb), this.listenTo(t, 'mousedown', (...e) => this._onMousedown(...e)), this.listenTo(t, 'keydown', (...e) => this._onKeydown(...e), {priority: 'high'}), this.listenTo(t, 'delete', (e, t) => {
                    this._handleDelete('forward' == t.direction) && (t.preventDefault(), e.stop())
                }, {priority: 'high'})
            }

            _onMousedown(e, t) {
                const o = this.editor, n = o.editing.view, i = n.document;
                let r = t.target;
                if (!or(r) && (qi(r) || (r = r.findAncestor(qi), !!r))) {
                    t.preventDefault(), i.isFocused || n.focus();
                    const e = o.editing.mapper.toModelElement(r);
                    this._setSelectionOverElement(e)
                }
            }

            _onKeydown(e, t) {
                const o = t.keyCode, n = o == Nc.delete || o == Nc.arrowdown || o == Nc.arrowright;
                let i = !1;
                er(o) ? i = this._handleArrowKeys(n) : tr(t) && (i = this._selectAllNestedEditableContent() || this._selectAllContent()), i && (t.preventDefault(), e.stop())
            }

            _handleDelete(e) {
                if (this.editor.isReadOnly) return;
                const t = this.editor.model.document, o = t.selection;
                if (!o.isCollapsed) return;
                const n = this._getObjectElementNextToSelection(e);
                if (n) return this.editor.model.change((e) => {
                    for (let t = o.anchor.parent; t.isEmpty;) {
                        const o = t;
                        t = o.parent, e.remove(o)
                    }
                    this._setSelectionOverElement(n)
                }), !0
            }

            _handleArrowKeys(e) {
                const t = this.editor.model, o = t.schema, n = t.document, i = n.selection, r = i.getSelectedElement();
                if (r && o.isObject(r)) {
                    const n = e ? i.getLastPosition() : i.getFirstPosition(),
                        r = o.getNearestSelectionRange(n, e ? 'forward' : 'backward');
                    return r && t.change((e) => {
                        e.setSelection(r)
                    }), !0
                }
                if (i.isCollapsed) {
                    const t = this._getObjectElementNextToSelection(e);
                    if (t instanceof ju && o.isObject(t)) return this._setSelectionOverElement(t), !0
                }
            }

            _selectAllNestedEditableContent() {
                const e = this.editor.model, t = e.document.selection, o = e.schema.getLimitElement(t);
                return t.getFirstRange().root != o && (e.change((e) => {
                    e.setSelection(Hu.createIn(o))
                }), !0)
            }

            _selectAllContent() {
                const e = this.editor.model, t = this.editor.editing, o = t.view, n = o.document, i = n.selection,
                    r = i.getSelectedElement();
                if (r && qi(r)) {
                    const o = t.mapper.toModelElement(r.parent);
                    return e.change((e) => {
                        e.setSelection(Hu.createIn(o))
                    }), !0
                }
                return !1
            }

            _setSelectionOverElement(e) {
                this.editor.model.change((t) => {
                    t.setSelection(Hu.createOn(e))
                })
            }

            _getObjectElementNextToSelection(e) {
                const t = this.editor.model, o = t.schema, n = t.document.selection, i = new Ju(n);
                t.modifySelection(i, {direction: e ? 'forward' : 'backward'});
                const r = e ? i.focus.nodeBefore : i.focus.nodeAfter;
                return r instanceof ju && o.isObject(r) ? r : null
            }

            _clearPreviouslySelectedWidgets(e) {
                for (const t of this._previouslySelected) e.removeClass(fb, t);
                this._previouslySelected.clear()
            }
        }

        class xb extends Hf {
            refresh() {
                const e = this.editor.model.document.selection.getSelectedElement();
                this.isEnabled = Xi(e), this.value = !!(Xi(e) && e.hasAttribute('alt')) && e.getAttribute('alt')
            }

            execute(e) {
                const t = this.editor.model, o = t.document.selection.getSelectedElement();
                t.change((t) => {
                    t.setAttribute('alt', e.newValue, o)
                })
            }
        }

        class Cb extends zf {
            init() {
                this.editor.commands.add('imageTextAlternative', new xb(this.editor))
            }
        }

        class Ab extends hf {
            constructor(e, t) {
                super(e);
                const o = `ck-input-${i()}`;
                this.set('label'), this.set('value'), this.set('isReadOnly', !1), this.labelView = this._createLabelView(o), this.inputView = this._createInputView(t, o);
                const n = this.bindTemplate;
                this.setTemplate({
                    tag: 'div',
                    attributes: {class: ['ck', 'ck-labeled-input', n.if('isReadOnly', 'ck-disabled')]},
                    children: [this.labelView, this.inputView]
                })
            }

            _createLabelView(e) {
                const t = new yf(this.locale);
                return t.for = e, t.bind('text').to(this, 'label'), t
            }

            _createInputView(e, t) {
                const o = new e(this.locale);
                return o.id = t, o.bind('value').to(this), o.bind('isReadOnly').to(this), o
            }

            select() {
                this.inputView.select()
            }

            focus() {
                this.inputView.focus()
            }
        }

        var Tb = o(39), Pb = o.n(Tb);

        class Eb extends hf {
            constructor(e) {
                super(e), this.set('value'), this.set('id'), this.set('placeholder'), this.set('isReadOnly', !1);
                const t = this.bindTemplate;
                this.setTemplate({
                    tag: 'input',
                    attributes: {
                        type: 'text',
                        class: ['ck', 'ck-input', 'ck-input-text'],
                        id: t.to('id'),
                        placeholder: t.to('placeholder'),
                        readonly: t.to('isReadOnly')
                    }
                })
            }

            render() {
                super.render();
                const e = (e) => {
                    this.element.value = e || 0 === e ? e : ''
                };
                e(this.value), this.on('change:value', (t, o, n) => {
                    e(n)
                })
            }

            select() {
                this.element.select()
            }

            focus() {
                this.element.focus()
            }
        }

        var Sb = o(3), Ob = o.n(Sb), Rb = o(4), Ib = o.n(Rb), Vb = o(41), Fb = o.n(Vb);

        class Nb extends hf {
            constructor(e) {
                super(e);
                const o = this.locale.t;
                this.focusTracker = new af, this.keystrokes = new Yg, this.labeledInput = this._createLabeledInputView(), this.saveButtonView = this._createButton(o('af'), Ob.a, 'ck-button-save'), this.saveButtonView.type = 'submit', this.cancelButtonView = this._createButton(o('ag'), Ib.a, 'ck-button-cancel', 'cancel'), this._focusables = new lf, this._focusCycler = new Of({
                    focusables: this._focusables,
                    focusTracker: this.focusTracker,
                    keystrokeHandler: this.keystrokes,
                    actions: {focusPrevious: 'shift + tab', focusNext: 'tab'}
                }), this.setTemplate({
                    tag: 'form',
                    attributes: {class: ['ck', 'ck-text-alternative-form'], tabindex: '-1'},
                    children: [this.labeledInput, this.saveButtonView, this.cancelButtonView]
                })
            }

            render() {
                super.render(), this.keystrokes.listenTo(this.element), ir({view: this}), [this.labeledInput, this.saveButtonView, this.cancelButtonView].forEach((e) => {
                    this._focusables.add(e), this.focusTracker.add(e.element)
                })
            }

            _createButton(e, t, o, n) {
                const i = new hh(this.locale);
                return i.set({
                    label: e,
                    icon: t,
                    tooltip: !0
                }), i.extendTemplate({attributes: {class: o}}), n && i.delegate('execute').to(this, n), i
            }

            _createLabeledInputView() {
                const e = this.locale.t, t = new Ab(this.locale, Eb);
                return t.label = e('ah'), t.inputView.placeholder = e('ah'), t
            }
        }

        var Mb = o(43), Db = o.n(Mb);
        const Bb = ni('px'), Lb = Kc.document.body;

        class zb extends hf {
            constructor(e) {
                super(e);
                const t = this.bindTemplate;
                this.set('top', 0), this.set('left', 0), this.set('position', 'arrow_nw'), this.set('isVisible', !1), this.set('withArrow', !0), this.set('className'), this.content = this.createCollection(), this.setTemplate({
                    tag: 'div',
                    attributes: {
                        class: ['ck', 'ck-balloon-panel', t.to('position', (e) => `ck-balloon-panel_${e}`), t.if('isVisible', 'ck-balloon-panel_visible'), t.if('withArrow', 'ck-balloon-panel_with-arrow'), t.to('className')],
                        style: {top: t.to('top', Bb), left: t.to('left', Bb)}
                    },
                    children: this.content
                })
            }

            show() {
                this.isVisible = !0
            }

            hide() {
                this.isVisible = !1
            }

            attachTo(e) {
                this.show();
                const t = zb.defaultPositions, o = Object.assign({}, {
                    element: this.element,
                    positions: [t.southArrowNorth, t.southArrowNorthWest, t.southArrowNorthEast, t.northArrowSouth, t.northArrowSouthWest, t.northArrowSouthEast],
                    limiter: Lb,
                    fitInViewport: !0
                }, e), {top: n, left: i, name: r} = ar(o);
                Object.assign(this, {top: n, left: i, position: r})
            }

            pin(e) {
                this.unpin(), this._pinWhenIsVisibleCallback = () => {
                    this.isVisible ? this._startPinning(e) : this._stopPinning()
                }, this._startPinning(e), this.listenTo(this, 'change:isVisible', this._pinWhenIsVisibleCallback)
            }

            unpin() {
                this._pinWhenIsVisibleCallback && (this._stopPinning(), this.stopListening(this, 'change:isVisible', this._pinWhenIsVisibleCallback), this._pinWhenIsVisibleCallback = null, this.hide())
            }

            _startPinning(e) {
                this.attachTo(e);
                const t = cr(e.target), o = e.limiter ? cr(e.limiter) : Lb;
                this.listenTo(Kc.document, 'scroll', (n, i) => {
                    const r = i.target, a = t && r.contains(t), s = o && r.contains(o);
                    (a || s || !t || !o) && this.attachTo(e)
                }, {useCapture: !0}), this.listenTo(Kc.window, 'resize', () => {
                    this.attachTo(e)
                })
            }

            _stopPinning() {
                this.stopListening(Kc.document, 'scroll'), this.stopListening(Kc.window, 'resize')
            }
        }

        zb.arrowHorizontalOffset = 25, zb.arrowVerticalOffset = 10, zb.defaultPositions = {
            northArrowSouth: (e, t) => ({top: ur(e, t), left: e.left + e.width / 2 - t.width / 2, name: 'arrow_s'}),
            northArrowSouthEast: (e, t) => ({
                top: ur(e, t),
                left: e.left + e.width / 2 - t.width + zb.arrowHorizontalOffset,
                name: 'arrow_se'
            }),
            northArrowSouthWest: (e, t) => ({
                top: ur(e, t),
                left: e.left + e.width / 2 - zb.arrowHorizontalOffset,
                name: 'arrow_sw'
            }),
            northWestArrowSouth: (e, t) => ({top: ur(e, t), left: e.left - t.width / 2, name: 'arrow_s'}),
            northWestArrowSouthWest: (e, t) => ({
                top: ur(e, t),
                left: e.left - zb.arrowHorizontalOffset,
                name: 'arrow_sw'
            }),
            northWestArrowSouthEast: (e, t) => ({
                top: ur(e, t),
                left: e.left - t.width + zb.arrowHorizontalOffset,
                name: 'arrow_se'
            }),
            northEastArrowSouth: (e, t) => ({top: ur(e, t), left: e.right - t.width / 2, name: 'arrow_s'}),
            northEastArrowSouthEast: (e, t) => ({
                top: ur(e, t),
                left: e.right - t.width + zb.arrowHorizontalOffset,
                name: 'arrow_se'
            }),
            northEastArrowSouthWest: (e, t) => ({
                top: ur(e, t),
                left: e.right - zb.arrowHorizontalOffset,
                name: 'arrow_sw'
            }),
            southArrowNorth: (e, t) => ({top: mr(e, t), left: e.left + e.width / 2 - t.width / 2, name: 'arrow_n'}),
            southArrowNorthEast: (e, t) => ({
                top: mr(e, t),
                left: e.left + e.width / 2 - t.width + zb.arrowHorizontalOffset,
                name: 'arrow_ne'
            }),
            southArrowNorthWest: (e, t) => ({
                top: mr(e, t),
                left: e.left + e.width / 2 - zb.arrowHorizontalOffset,
                name: 'arrow_nw'
            }),
            southWestArrowNorth: (e, t) => ({top: mr(e, t), left: e.left - t.width / 2, name: 'arrow_n'}),
            southWestArrowNorthWest: (e, t) => ({
                top: mr(e, t),
                left: e.left - zb.arrowHorizontalOffset,
                name: 'arrow_nw'
            }),
            southWestArrowNorthEast: (e, t) => ({
                top: mr(e, t),
                left: e.left - t.width + zb.arrowHorizontalOffset,
                name: 'arrow_ne'
            }),
            southEastArrowNorth: (e, t) => ({top: mr(e, t), left: e.right - t.width / 2, name: 'arrow_n'}),
            southEastArrowNorthEast: (e, t) => ({
                top: mr(e, t),
                left: e.right - t.width + zb.arrowHorizontalOffset,
                name: 'arrow_ne'
            }),
            southEastArrowNorthWest: (e, t) => ({
                top: mr(e, t),
                left: e.right - zb.arrowHorizontalOffset,
                name: 'arrow_nw'
            })
        };

        class jb extends zf {
            static get pluginName() {
                return 'ContextualBalloon'
            }

            init() {
                this.view = new zb, this.positionLimiter = () => {
                    const e = this.editor.editing.view, t = e.document, o = t.selection.editableElement;
                    return o ? e.domConverter.mapViewToDom(o.root) : null
                }, this._stack = new Map, this.editor.ui.view.body.add(this.view), this.editor.ui.focusTracker.add(this.view.element)
            }

            get visibleView() {
                const e = this._stack.get(this.view.content.get(0));
                return e ? e.view : null
            }

            hasView(e) {
                return this._stack.has(e)
            }

            add(e) {
                if (this.hasView(e.view)) throw new Ya('contextualballoon-add-view-exist: Cannot add configuration of the same view twice.');
                this.visibleView && this.view.content.remove(this.visibleView), this._stack.set(e.view, e), this._show(e)
            }

            remove(e) {
                if (!this.hasView(e)) throw new Ya('contextualballoon-remove-view-not-exist: Cannot remove configuration of not existing view.');
                if (this.visibleView === e) {
                    this.view.content.remove(e), this._stack.delete(e);
                    const t = Array.from(this._stack.values()).pop();
                    t ? this._show(t) : this.view.hide()
                } else this._stack.delete(e)
            }

            updatePosition(e) {
                e && (this._stack.get(this.visibleView).position = e), this.view.pin(this._getBalloonPosition())
            }

            _show({view: e, balloonClassName: t = ''}) {
                this.view.className = t, this.view.content.add(e), this.view.pin(this._getBalloonPosition())
            }

            _getBalloonPosition() {
                let e = Oi(this._stack.values()).position;
                return e && !e.limiter && (e = Object.assign({}, e, {limiter: this.positionLimiter})), e
            }
        }

        var qb = o(45), Wb = o.n(qb);

        class Ub extends zf {
            static get requires() {
                return [jb]
            }

            init() {
                this._createButton(), this._createForm()
            }

            _createButton() {
                const e = this.editor, o = e.t;
                e.ui.componentFactory.add('imageTextAlternative', (t) => {
                    const n = e.commands.get('imageTextAlternative'), i = new hh(t);
                    return i.set({
                        label: o('s'),
                        icon: Wb.a,
                        tooltip: !0
                    }), i.bind('isEnabled').to(n, 'isEnabled'), this.listenTo(i, 'execute', () => this._showForm()), i
                })
            }

            _createForm() {
                const e = this.editor, t = e.editing.view, o = t.document;
                this._balloon = this.editor.plugins.get('ContextualBalloon'), this._form = new Nb(e.locale), this._form.render(), this.listenTo(this._form, 'submit', () => {
                    e.execute('imageTextAlternative', {newValue: this._form.labeledInput.inputView.element.value}), this._hideForm(!0)
                }), this.listenTo(this._form, 'cancel', () => {
                    this._hideForm(!0)
                }), this._form.keystrokes.set('Esc', (e, t) => {
                    this._hideForm(!0), t()
                }), this.listenTo(t, 'render', () => {
                    Yi(o.selection) ? this._isVisible && pr(e) : this._hideForm(!0)
                }), nr({
                    emitter: this._form,
                    activator: () => this._isVisible,
                    contextElements: [this._form.element],
                    callback: () => this._hideForm()
                })
            }

            _showForm() {
                if (!this._isVisible) {
                    const e = this.editor, t = e.commands.get('imageTextAlternative'), o = this._form.labeledInput;
                    this._balloon.hasView(this._form) || this._balloon.add({
                        view: this._form,
                        position: gr(e)
                    }), o.value = o.inputView.element.value = t.value || '', this._form.labeledInput.select()
                }
            }

            _hideForm(e) {
                this._isVisible && (this._balloon.remove(this._form), e && this.editor.editing.view.focus())
            }

            get _isVisible() {
                return this._balloon.visibleView == this._form
            }
        }

        class Hb extends zf {
            static get requires() {
                return [Cb, Ub]
            }

            static get pluginName() {
                return 'ImageTextAlternative'
            }
        }

        var Kb = o(46), Gb = o.n(Kb);

        class $b extends zf {
            static get requires() {
                return [bb, yb, Hb]
            }

            static get pluginName() {
                return 'Image'
            }
        }

        class Jb extends hf {
            constructor(e) {
                super(e), this.buttonView = new hh(e), this._fileInputView = new Qb(e), this._fileInputView.bind('acceptedType').to(this), this._fileInputView.bind('allowMultipleFiles').to(this), this._fileInputView.delegate('done').to(this), this.setTemplate({
                    tag: 'span',
                    attributes: {class: 'ck-file-dialog-button'},
                    children: [this.buttonView, this._fileInputView]
                }), this.buttonView.on('execute', () => {
                    this._fileInputView.open()
                })
            }

            focus() {
                this.buttonView.focus()
            }
        }

        class Qb extends hf {
            constructor(e) {
                super(e), this.set('acceptedType'), this.set('allowMultipleFiles', !1);
                const t = this.bindTemplate;
                this.setTemplate({
                    tag: 'input',
                    attributes: {
                        class: ['ck-hidden'],
                        type: 'file',
                        tabindex: '-1',
                        accept: t.to('acceptedType'),
                        multiple: t.to('allowMultipleFiles')
                    },
                    on: {
                        change: t.to(() => {
                            this.element && this.element.files && this.element.files.length && this.fire('done', this.element.files), this.element.value = ''
                        })
                    }
                })
            }

            open() {
                this.element.click()
            }
        }

        var Yb = o(48), Xb = o.n(Yb);

        class Zb extends zf {
            init() {
                const e = this.editor, o = e.t;
                e.ui.componentFactory.add('imageUpload', (t) => {
                    const n = new Jb(t), i = e.commands.get('imageUpload');
                    return n.set({acceptedType: 'image/*', allowMultipleFiles: !0}), n.buttonView.set({
                        label: o('l'),
                        icon: Xb.a,
                        tooltip: !0
                    }), n.buttonView.bind('isEnabled').to(i), n.on('done', (t, o) => {
                        for (const n of Array.from(o)) {
                            const t = hr(e.model.document.selection);
                            fr(n) && e.execute('imageUpload', {file: n, insertAt: t})
                        }
                    }), n
                })
            }
        }

        var ek = o(49), tk = o.n(ek), ok = o(50), nk = o.n(ok);

        class ik extends zf {
            constructor(e) {
                super(e), this.placeholder = 'data:image/svg+xml;utf8,' + encodeURIComponent(tk.a)
            }

            init() {
                const e = this.editor;
                e.editing.downcastDispatcher.on('attribute:uploadStatus:image', (...e) => this.uploadStatusChange(...e))
            }

            uploadStatusChange(e, t, o) {
                const n = this.editor, i = t.item, r = i.getAttribute('uploadId');
                if (o.consumable.consume(t.item, e.name)) {
                    const e = n.plugins.get(Ah), a = r ? t.attributeNewValue : null, s = this.placeholder,
                        l = n.editing.mapper.toViewElement(i), d = o.writer;
                    if ('reading' == a) return br(l, d), void _r(s, l, d);
                    if ('uploading' == a) {
                        const t = e.loaders.get(r);
                        return br(l, d), void (t ? (wr(l, d), vr(l, d, t, n.editing.view)) : _r(s, l, d))
                    }
                    yr(l, d), wr(l, d), kr(l, d)
                }
            }
        }

        const rk = Symbol('progress-bar');

        class ak extends Hf {
            execute(e) {
                const t = this.editor, o = t.model.document, n = e.file, i = t.plugins.get(Ah);
                t.model.change((r) => {
                    const a = i.createLoader(n);
                    if (!a) return;
                    const s = new ju('image', {uploadId: a.id});
                    let l;
                    l = e.insertAt ? new Ju([new Hu(e.insertAt)]) : o.selection, t.model.insertContent(s, l), s.parent && r.setSelection(Hu.createOn(s))
                })
            }
        }

        class sk extends zf {
            static get pluginName() {
                return 'Notification'
            }

            init() {
                this.on('show:warning', (e, t) => {
                    window.alert(t.message)
                }, {priority: 'lowest'})
            }

            showSuccess(e, t = {}) {
                this._showNotification({message: e, type: 'success', namespace: t.namespace, title: t.title})
            }

            showInfo(e, t = {}) {
                this._showNotification({message: e, type: 'info', namespace: t.namespace, title: t.title})
            }

            showWarning(e, t = {}) {
                this._showNotification({message: e, type: 'warning', namespace: t.namespace, title: t.title})
            }

            _showNotification(e) {
                const t = `show:${e.type}` + (e.namespace ? `:${e.namespace}` : '');
                this.fire(t, {message: e.message, type: e.type, title: e.title || ''})
            }
        }

        class lk extends zf {
            static get requires() {
                return [Ah, sk]
            }

            init() {
                const e = this.editor, t = e.model.document, o = e.model.schema, n = e.plugins.get(Ah);
                o.extend('image', {allowAttributes: ['uploadId', 'uploadStatus']}), e.commands.add('imageUpload', new ak(e)), e.editing.view.document.on('clipboardInput', (o, n) => {
                    if (Ar(n.dataTransfer)) return;
                    let i = new Ju(n.targetRanges.map((t) => e.editing.mapper.toModelRange(t)));
                    for (const r of n.dataTransfer.files) {
                        const n = hr(i);
                        fr(r) && (e.execute('imageUpload', {file: r, insertAt: n}), o.stop()), i = t.selection
                    }
                }), e.editing.view.document.on('dragover', (e, t) => {
                    t.preventDefault()
                }), t.on('change', () => {
                    const e = t.differ.getChanges({includeChangesInGraveyard: !0});
                    for (const t of e) if ('insert' == t.type && 'image' == t.name) {
                        const e = t.position.nodeAfter, o = '$graveyard' == t.position.root.rootName,
                            i = e.getAttribute('uploadId');
                        if (!i) continue;
                        const r = n.loaders.get(i);
                        if (!r) continue;
                        o ? r.abort() : 'idle' == r.status && this._load(r, e)
                    }
                })
            }

            _load(e, o) {
                function n() {
                    r.enqueueChange('transparent', (e) => {
                        e.removeAttribute('uploadId', o), e.removeAttribute('uploadStatus', o)
                    }), t.destroyLoader(e)
                }

                const i = this.editor, r = i.model, a = i.locale.t, t = i.plugins.get(Ah), s = i.plugins.get(sk);
                return r.enqueueChange('transparent', (e) => {
                    e.setAttribute('uploadStatus', 'reading', o)
                }), e.read().then((t) => {
                    const n = i.editing.mapper.toViewElement(o), a = n.getChild(0), s = e.upload();
                    return i.editing.view.change((e) => {
                        e.setAttribute('src', t, a)
                    }), r.enqueueChange('transparent', (e) => {
                        e.setAttribute('uploadStatus', 'uploading', o)
                    }), s
                }).then((e) => {
                    r.enqueueChange('transparent', (t) => {
                        t.setAttributes({uploadStatus: 'complete', src: e.default}, o);
                        let n = 0;
                        const i = Object.keys(e).filter((e) => {
                            const t = parseInt(e, 10);
                            if (!isNaN(t)) return n = Ma(n, t), !0
                        }).map((t) => `${e[t]} ${t}w`).join(', ');
                        '' != i && t.setAttribute('srcset', {data: i, width: n}, o)
                    }), n()
                }).catch((t) => {
                    if ('error' !== e.status && 'aborted' !== e.status) throw t;
                    'error' == e.status && s.showWarning(t, {
                        title: a('n'),
                        namespace: 'upload'
                    }), n(), r.enqueueChange('transparent', (e) => {
                        e.remove(o)
                    })
                })
            }
        }

        class dk extends zf {
            static get pluginName() {
                return 'ImageUpload'
            }

            static get requires() {
                return [lk, Zb, ik]
            }
        }

        class ck extends zf {
            static get requires() {
                return [db, $b, dk]
            }

            static get pluginName() {
                return 'EasyImage'
            }
        }

        class uk extends Hf {
            refresh() {
                const e = this.editor.model, t = e.document, o = Oi(t.selection.getSelectedBlocks());
                this.value = !!o && o.is('paragraph'), this.isEnabled = !!o && Tr(o, e.schema)
            }

            execute(e = {}) {
                const t = this.editor.model, o = t.document;
                t.change((n) => {
                    const i = (e.selection || o.selection).getSelectedBlocks();
                    for (const e of i) !e.is('paragraph') && Tr(e, t.schema) && n.rename(e, 'paragraph')
                })
            }
        }

        class mk extends zf {
            static get pluginName() {
                return 'Paragraph'
            }

            init() {
                const e = this.editor, t = e.model, o = e.data;
                e.commands.add('paragraph', new uk(e)), t.schema.register('paragraph', {inheritAllFrom: '$block'}), e.conversion.elementToElement({
                    model: 'paragraph',
                    view: 'p'
                }), o.upcastDispatcher.on('element', (e, t, o) => {
                    if (o.consumable.test(t.viewItem, {name: t.viewItem.name})) if (mk.paragraphLikeElements.has(t.viewItem.name)) {
                        if (t.viewItem.isEmpty) return;
                        const e = o.writer.createElement('paragraph'), n = o.splitToAllowedParent(e, t.modelCursor);
                        if (!n) return;
                        o.writer.insert(e, n.position);
                        const {modelRange: i} = o.convertChildren(t.viewItem, Uu.createAt(e));
                        t.modelRange = new Hu(Uu.createBefore(e), i.end), t.modelCursor = t.modelRange.end
                    } else Er(t.viewItem, t.modelCursor, o.schema) && (t = Object.assign(t, Pr(t.viewItem, t.modelCursor, o)))
                }, {priority: 'low'}), o.upcastDispatcher.on('text', (e, t, o) => {
                    t.modelRange || Er(t.viewItem, t.modelCursor, o.schema) && (t = Object.assign(t, Pr(t.viewItem, t.modelCursor, o)))
                }, {priority: 'lowest'}), t.document.registerPostFixer((e) => this._autoparagraphEmptyRoots(e)), e.on('dataReady', () => {
                    t.enqueueChange('transparent', (e) => this._autoparagraphEmptyRoots(e))
                }, {priority: 'lowest'})
            }

            _autoparagraphEmptyRoots(e) {
                const t = this.editor.model;
                for (const o of t.document.getRootNames()) {
                    const n = t.document.getRoot(o);
                    if (n.isEmpty && '$graveyard' != n.rootName && t.schema.checkChild(n, 'paragraph')) return e.insertElement('paragraph', n), !0
                }
            }
        }

        mk.paragraphLikeElements = new Set(['blockquote', 'dd', 'div', 'dt', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'p', 'td']);

        class pk extends Hf {
            constructor(e, t) {
                super(e), this.modelElements = t
            }

            refresh() {
                const e = Oi(this.editor.model.document.selection.getSelectedBlocks());
                this.value = !!e && this.modelElements.includes(e.name) && e.name, this.isEnabled = !!e && this.modelElements.some((t) => Sr(e, t, this.editor.model.schema))
            }

            execute(e) {
                const t = this.editor.model, o = t.document, n = e.value;
                t.change((e) => {
                    const i = Array.from(o.selection.getSelectedBlocks()).filter((e) => Sr(e, n, t.schema));
                    for (const t of i) t.is(n) || e.rename(t, n)
                })
            }
        }

        const gk = 'paragraph';

        class fk extends zf {
            constructor(e) {
                super(e), e.config.define('heading', {
                    options: [{
                        model: 'paragraph',
                        title: 'Paragraph',
                        class: 'ck-heading_paragraph'
                    }, {
                        model: 'heading1',
                        view: 'h2',
                        title: 'Heading 1',
                        class: 'ck-heading_heading1'
                    }, {
                        model: 'heading2',
                        view: 'h3',
                        title: 'Heading 2',
                        class: 'ck-heading_heading2'
                    }, {model: 'heading3', view: 'h4', title: 'Heading 3', class: 'ck-heading_heading3'}]
                })
            }

            static get requires() {
                return [mk]
            }

            init() {
                const e = this.editor, t = e.config.get('heading.options'), o = [];
                for (const n of t) n.model !== gk && (e.model.schema.register(n.model, {inheritAllFrom: '$block'}), e.conversion.elementToElement(n), o.push(n.model));
                e.commands.add('heading', new pk(e, o))
            }

            afterInit() {
                const e = this.editor, t = e.commands.get('enter'), o = e.config.get('heading.options');
                t && this.listenTo(t, 'afterExecute', (t, n) => {
                    const i = e.model.document.selection.getFirstPosition().parent, r = o.some((e) => i.is(e.model));
                    r && !i.is(gk) && 0 === i.childCount && n.writer.rename(i, gk)
                })
            }
        }

        class hk {
            constructor(e, t) {
                t && cc(this, t), e && this.set(e)
            }
        }

        f(hk, fc);

        class bk extends hf {
            constructor(e) {
                super(e);
                const t = this.bindTemplate;
                this.set('isVisible', !1), this.children = this.createCollection(), this.setTemplate({
                    tag: 'div',
                    attributes: {class: ['ck', 'ck-reset', 'ck-dropdown__panel', t.if('isVisible', 'ck-dropdown__panel-visible')]},
                    children: this.children,
                    on: {selectstart: t.to((e) => e.preventDefault())}
                })
            }

            focus() {
                this.children.length && this.children.first.focus()
            }

            focusLast() {
                if (this.children.length) {
                    const e = this.children.last;
                    'function' == typeof e.focusLast ? e.focusLast() : e.focus()
                }
            }
        }

        var kk = o(52), _k = o.n(kk);

        class wk extends hf {
            constructor(e, t, o) {
                super(e);
                const n = this.bindTemplate;
                this.buttonView = t, this.panelView = o, this.set('isOpen', !1), this.set('isEnabled', !0), this.focusTracker = new af, this.keystrokes = new Yg, this.setTemplate({
                    tag: 'div',
                    attributes: {class: ['ck', 'ck-dropdown', n.to('isEnabled', (e) => e ? '' : 'ck-disabled')]},
                    children: [t, o]
                }), t.extendTemplate({attributes: {class: ['ck-dropdown__button']}})
            }

            render() {
                super.render(), this.listenTo(this.buttonView, 'open', () => {
                    this.isOpen = !this.isOpen
                }), this.panelView.bind('isVisible').to(this, 'isOpen'), this.keystrokes.listenTo(this.element), this.focusTracker.add(this.element);
                const e = (e, t) => {
                    this.isOpen && (this.buttonView.focus(), this.isOpen = !1, t())
                };
                this.keystrokes.set('arrowdown', (e, t) => {
                    this.buttonView.isEnabled && !this.isOpen && (this.isOpen = !0, t())
                }), this.keystrokes.set('arrowright', (e, t) => {
                    this.isOpen && t()
                }), this.keystrokes.set('arrowleft', e), this.keystrokes.set('esc', e)
            }

            focus() {
                this.buttonView.focus()
            }
        }

        var vk = o(54), yk = o.n(vk);

        class xk extends hh {
            constructor(e) {
                super(e), this.arrowView = this._createArrowView(), this.delegate('execute').to(this, 'open')
            }

            render() {
                super.render(), this.children.add(this.arrowView)
            }

            _createArrowView() {
                const e = new ch;
                return e.content = yk.a, e.extendTemplate({attributes: {class: 'ck-dropdown__arrow'}}), e
            }
        }

        var Ck = o(55), Ak = o.n(Ck);

        class Tk extends hf {
            constructor() {
                super(), this.items = this.createCollection(), this.focusTracker = new af, this.keystrokes = new Yg, this._focusCycler = new Of({
                    focusables: this.items,
                    focusTracker: this.focusTracker,
                    keystrokeHandler: this.keystrokes,
                    actions: {focusPrevious: 'arrowup', focusNext: 'arrowdown'}
                }), this.setTemplate({
                    tag: 'ul',
                    attributes: {class: ['ck', 'ck-reset', 'ck-list']},
                    children: this.items
                })
            }

            render() {
                super.render();
                for (const e of this.items) this.focusTracker.add(e.element);
                this.items.on('add', (e, t) => {
                    this.focusTracker.add(t.element)
                }), this.items.on('remove', (e, t) => {
                    this.focusTracker.remove(t.element)
                }), this.keystrokes.listenTo(this.element)
            }

            focus() {
                this._focusCycler.focusFirst()
            }

            focusLast() {
                this._focusCycler.focusLast()
            }
        }

        class Pk extends hf {
            constructor() {
                super(), this.set('tabindex', -1), this.keystrokes = new Yg;
                const e = this.bindTemplate;
                this.setTemplate({
                    tag: 'li',
                    attributes: {
                        class: ['ck', 'ck-list__item', e.to('class'), e.if('isActive', 'ck-list__item_active')],
                        style: e.to('style'),
                        tabindex: e.to('tabindex')
                    },
                    children: [{text: e.to('label')}],
                    on: {click: e.to('execute')}
                })
            }

            render() {
                super.render();
                const e = (e, t) => {
                    this.fire('execute'), t()
                };
                this.keystrokes.listenTo(this.element), this.keystrokes.set('Enter', e), this.keystrokes.set('Space', e)
            }

            focus() {
                this.element.focus()
            }
        }

        var Ek = o(57), Sk = o.n(Ek), Ok = o(59), Rk = o.n(Ok), Ik = o(5), Vk = o.n(Ik);

        class Fk extends zf {
            init() {
                const e = this.editor, o = e.t, t = Mr(e), n = o('o'), i = o('p');
                e.ui.componentFactory.add('heading', (o) => {
                    const r = {}, a = new Ac, s = e.commands.get('heading'), l = e.commands.get('paragraph'), d = [s];
                    for (const e of t) {
                        const t = new hk({label: e.title, class: e.class});
                        'paragraph' === e.model ? (t.bind('isActive').to(l, 'value'), t.set('commandName', 'paragraph'), d.push(l)) : (t.bind('isActive').to(s, 'value', (t) => t === e.model), t.set({
                            commandName: 'heading',
                            commandValue: e.model
                        })), a.add(t), r[e.model] = e.title
                    }
                    const c = Or(o);
                    return Rr(c, a), c.buttonView.set({
                        isOn: !1,
                        withText: !0,
                        tooltip: i
                    }), c.extendTemplate({attributes: {class: ['ck-heading-dropdown']}}), c.bind('isEnabled').toMany(d, 'isEnabled', (...e) => e.some((e) => e)), c.buttonView.bind('label').to(s, 'value', l, 'value', (e, t) => {
                        const o = e || t && 'paragraph';
                        return r[o] ? r[o] : n
                    }), this.listenTo(c, 'execute', (t) => {
                        e.execute(t.source.commandName, t.source.commandValue ? {value: t.source.commandValue} : void 0), e.editing.view.focus()
                    }), c
                })
            }
        }

        class Nk extends zf {
            static get requires() {
                return [fk, Fk]
            }

            static get pluginName() {
                return 'Heading'
            }
        }

        var Mk = o(62), Dk = o.n(Mk);
        const Bk = new WeakMap, Lk = Symbol('imageCaption');

        class zk extends zf {
            init() {
                const e = this.editor, o = e.editing.view, n = e.model.schema, i = e.data, r = e.editing, a = e.t;
                n.register('caption', {
                    allowIn: 'image',
                    allowContentOf: '$block',
                    isLimit: !0
                }), e.model.document.registerPostFixer((e) => this._insertMissingModelCaptionElement(e)), e.conversion.for('upcast').add(Yt({
                    view: qr,
                    model: 'caption'
                }));
                i.downcastDispatcher.on('insert:caption', Wr((e) => e.createContainerElement('figcaption'), !1));
                const t = zr(o, a('k'));
                r.downcastDispatcher.on('insert:caption', Wr(t)), r.downcastDispatcher.on('insert', this._fixCaptionVisibility((e) => e.item), {priority: 'high'}), r.downcastDispatcher.on('remove', this._fixCaptionVisibility((e) => e.position.parent), {priority: 'high'}), o.document.registerPostFixer((e) => this._updateCaptionVisibility(e))
            }

            _updateCaptionVisibility(e) {
                const t = this.editor.editing.mapper, o = this._lastSelectedCaption;
                let n;
                const i = this.editor.model.document.selection, r = i.getSelectedElement();
                if (r && r.is('image')) {
                    const e = jr(r);
                    n = t.toViewElement(e)
                }
                const a = i.getFirstPosition(), s = Hr(a.parent);
                if (s && (n = t.toViewElement(s)), n) return o ? o === n ? Gr(n, e) : (Kr(o, e), this._lastSelectedCaption = n, Gr(n, e)) : (this._lastSelectedCaption = n, Gr(n, e));
                if (o) {
                    const t = Kr(o, e);
                    return this._lastSelectedCaption = null, t
                }
                return !1
            }

            _fixCaptionVisibility(e) {
                return (t, o, n) => {
                    const i = e(o), r = Hr(i), a = this.editor.editing.mapper, s = n.writer;
                    if (r) {
                        const e = a.toViewElement(r);
                        e && (r.childCount ? s.removeClass('ck-hidden', e) : s.addClass('ck-hidden', e))
                    }
                }
            }

            _insertMissingModelCaptionElement(e) {
                const t = this.editor.model, o = t.document.differ.getChanges();
                for (const t of o) if ('insert' == t.type && 'image' == t.name) {
                    const o = t.position.nodeAfter;
                    if (!jr(o)) return e.appendElement('caption', o), !0
                }
            }
        }

        var jk = o(64), qk = o.n(jk);

        class Wk extends zf {
            static get requires() {
                return [zk]
            }

            static get pluginName() {
                return 'ImageCaption'
            }
        }

        class Uk extends Hf {
            constructor(e, t) {
                super(e), this._defaultStyle = !1, this.styles = t.reduce((e, t) => (e[t.name] = t, t.isDefault && (this._defaultStyle = t.name), e), {})
            }

            refresh() {
                const e = this.editor.model.document.selection.getSelectedElement();
                if (this.isEnabled = Xi(e), !e) this.value = !1; else if (e.hasAttribute('imageStyle')) {
                    const t = e.getAttribute('imageStyle');
                    this.value = !!this.styles[t] && t
                } else this.value = this._defaultStyle
            }

            execute(e) {
                const t = e.value, o = this.editor.model, n = o.document.selection.getSelectedElement();
                o.change((e) => {
                    this.styles[t].isDefault ? e.removeAttribute('imageStyle', n) : e.setAttribute('imageStyle', t, n)
                })
            }
        }

        var Hk = o(66), Kk = o.n(Hk), Gk = o(67), $k = o.n(Gk), Jk = o(68), Qk = o.n(Jk), Yk = o(69), Xk = o.n(Yk);
        const Zk = {
            full: {name: 'full', title: 'Full size image', icon: Kk.a, isDefault: !0},
            side: {name: 'side', title: 'Side image', icon: Xk.a, className: 'image-style-side'},
            alignLeft: {
                name: 'alignLeft',
                title: 'Left aligned image',
                icon: $k.a,
                className: 'image-style-align-left'
            },
            alignCenter: {
                name: 'alignCenter',
                title: 'Centered image',
                icon: Qk.a,
                className: 'image-style-align-center'
            },
            alignRight: {
                name: 'alignRight',
                title: 'Right aligned image',
                icon: Xk.a,
                className: 'image-style-align-right'
            }
        }, e_ = {full: Kk.a, left: $k.a, right: Xk.a, center: Qk.a};

        class t_ extends zf {
            static get requires() {
                return [bb]
            }

            static get pluginName() {
                return 'ImageStyleEditing'
            }

            init() {
                const e = this.editor, t = e.model.schema, o = e.data, n = e.editing;
                e.config.define('image.styles', ['full', 'side']);
                const i = Yr(e.config.get('image.styles'));
                t.extend('image', {allowAttributes: 'imageStyle'});
                const r = $r(i);
                n.downcastDispatcher.on('attribute:imageStyle:image', r), o.downcastDispatcher.on('attribute:imageStyle:image', r), o.upcastDispatcher.on('element:figure', Jr(i), {priority: 'low'}), e.commands.add('imageStyle', new Uk(e, i))
            }
        }

        var o_ = o(70), n_ = o.n(o_);

        class i_ extends zf {
            get localizedDefaultStylesTitles() {
                const e = this.editor.t;
                return {
                    "Full size image": e('f'),
                    "Side image": e('g'),
                    "Left aligned image": e('h'),
                    "Centered image": e('i'),
                    "Right aligned image": e('j')
                }
            }

            init() {
                const e = this.editor, t = e.config.get('image.styles'),
                    o = Zr(Yr(t), this.localizedDefaultStylesTitles);
                for (const e of o) this._createButton(e)
            }

            _createButton(e) {
                const t = this.editor, o = `imageStyle:${e.name}`;
                t.ui.componentFactory.add(o, (o) => {
                    const n = t.commands.get('imageStyle'), i = new hh(o);
                    return i.set({
                        label: e.title,
                        icon: e.icon,
                        tooltip: !0
                    }), i.bind('isEnabled').to(n, 'isEnabled'), i.bind('isOn').to(n, 'value', (t) => t === e.name), this.listenTo(i, 'execute', () => t.execute('imageStyle', {value: e.name})), i
                })
            }
        }

        class r_ extends zf {
            static get requires() {
                return [t_, i_]
            }

            static get pluginName() {
                return 'ImageStyle'
            }
        }

        class a_ extends zf {
            static get requires() {
                return [jb]
            }

            static get pluginName() {
                return 'ImageToolbar'
            }

            init() {
                const e = this.editor, t = e.plugins.get('BalloonToolbar');
                t && this.listenTo(t, 'show', (t) => {
                    Yi(e.editing.view.document.selection) && t.stop()
                }, {priority: 'high'})
            }

            afterInit() {
                const e = this.editor, t = e.config.get('image.toolbar');
                t && t.length && (this._balloon = this.editor.plugins.get('ContextualBalloon'), this._toolbar = new Ff, this._toolbar.fillFromConfig(t, e.ui.componentFactory), this.listenTo(e.editing.view, 'render', () => {
                    this._checkIsVisible()
                }), this.listenTo(e.ui.focusTracker, 'change:isFocused', () => {
                    this._checkIsVisible()
                }, {priority: 'low'}))
            }

            _checkIsVisible() {
                const e = this.editor;
                e.ui.focusTracker.isFocused ? Yi(e.editing.view.document.selection) ? this._showToolbar() : this._hideToolbar() : this._hideToolbar()
            }

            _showToolbar() {
                const e = this.editor;
                this._isVisible ? pr(e) : !this._balloon.hasView(this._toolbar) && this._balloon.add({
                    view: this._toolbar,
                    position: gr(e),
                    balloonClassName: 'ck-toolbar-container'
                })
            }

            _hideToolbar() {
                this._isVisible && this._balloon.remove(this._toolbar)
            }

            get _isVisible() {
                return this._balloon.visibleView == this._toolbar
            }
        }

        class s_ extends Hf {
            refresh() {
                const e = this.editor.model, t = e.document;
                this.value = t.selection.getAttribute('linkHref'), this.isEnabled = e.schema.checkAttributeInSelection(t.selection, 'linkHref')
            }

            execute(e) {
                const t = this.editor.model, o = t.document.selection;
                t.change((n) => {
                    if (o.isCollapsed) {
                        const t = o.getFirstPosition();
                        if (o.hasAttribute('linkHref')) {
                            const t = ea(o.getFirstPosition(), o.getAttribute('linkHref'));
                            n.setAttribute('linkHref', e, t), n.setSelection(t)
                        } else if ('' !== e) {
                            const i = rt(o.getAttributes());
                            i.set('linkHref', e);
                            const r = n.createText(e, i);
                            n.insert(r, t), n.setSelection(Hu.createOn(r))
                        }
                    } else {
                        const i = t.schema.getValidRanges(o.getRanges(), 'linkHref');
                        for (const t of i) n.setAttribute('linkHref', e, t)
                    }
                })
            }
        }

        class l_ extends Hf {
            refresh() {
                this.isEnabled = this.editor.model.document.selection.hasAttribute('linkHref')
            }

            execute() {
                const e = this.editor.model, t = e.document.selection;
                e.change((e) => {
                    const o = t.isCollapsed ? [ea(t.getFirstPosition(), t.getAttribute('linkHref'))] : t.getRanges();
                    for (const t of o) e.removeAttribute('linkHref', t)
                })
            }
        }

        const d_ = Symbol('linkElement');

        class c_ {
            constructor(e, t, o) {
                this.model = e, this.attribute = o, this._modelSelection = e.document.selection, this._overrideUid = null, this._isNextGravityRestorationSkipped = !1, t.listenTo(this._modelSelection, 'change:range', (e, t) => this._isNextGravityRestorationSkipped ? void (this._isNextGravityRestorationSkipped = !1) : void (!this._isGravityOverridden || !t.directChange && ra(this._modelSelection.getFirstPosition(), o) || this._restoreGravity()))
            }

            handleForwardMovement(e, t) {
                const o = this.attribute;
                return this._isGravityOverridden || e.isAtStart && this._hasSelectionAttribute ? void 0 : la(e, o) && this._hasSelectionAttribute ? (this._preventCaretMovement(t), this._removeSelectionAttribute(), !0) : aa(e, o) ? (this._preventCaretMovement(t), this._overrideGravity(), !0) : sa(e, o) && this._hasSelectionAttribute ? (this._preventCaretMovement(t), this._overrideGravity(), !0) : void 0
            }

            handleBackwardMovement(e, t) {
                const o = this.attribute;
                if (this._isGravityOverridden) return la(e, o) && this._hasSelectionAttribute ? (this._preventCaretMovement(t), this._restoreGravity(), this._removeSelectionAttribute(), !0) : (this._preventCaretMovement(t), this._restoreGravity(), e.isAtStart && this._removeSelectionAttribute(), !0);
                return la(e, o) && !this._hasSelectionAttribute ? (this._preventCaretMovement(t), this._setSelectionAttributeFromTheNodeBefore(e), !0) : e.isAtEnd && sa(e, o) ? this._hasSelectionAttribute ? void (da(e, o) && (this._skipNextAutomaticGravityRestoration(), this._overrideGravity())) : (this._preventCaretMovement(t), this._setSelectionAttributeFromTheNodeBefore(e), !0) : e.isAtStart ? this._hasSelectionAttribute ? (this._removeSelectionAttribute(), this._preventCaretMovement(t), !0) : void 0 : void (da(e, o) && (this._skipNextAutomaticGravityRestoration(), this._overrideGravity()))
            }

            get _isGravityOverridden() {
                return !!this._overrideUid
            }

            get _hasSelectionAttribute() {
                return this._modelSelection.hasAttribute(this.attribute)
            }

            _overrideGravity() {
                this._overrideUid = this.model.change((e) => e.overrideSelectionGravity())
            }

            _restoreGravity() {
                this.model.change((e) => {
                    e.restoreSelectionGravity(this._overrideUid), this._overrideUid = null
                })
            }

            _preventCaretMovement(e) {
                e.preventDefault()
            }

            _removeSelectionAttribute() {
                this.model.change((e) => {
                    e.removeSelectionAttribute(this.attribute)
                })
            }

            _setSelectionAttributeFromTheNodeBefore(e) {
                const t = this.attribute;
                this.model.change((o) => {
                    o.setSelectionAttribute(this.attribute, e.nodeBefore.getAttribute(t))
                })
            }

            _skipNextAutomaticGravityRestoration() {
                this._isNextGravityRestorationSkipped = !0
            }
        }

        var u_ = o(72), m_ = o.n(u_);
        const p_ = 'ck-link_selected';

        class g_ extends zf {
            init() {
                const e = this.editor;
                e.model.schema.extend('$text', {allowAttributes: 'linkHref'}), e.conversion.for('downcast').add(bt({
                    model: 'linkHref',
                    view: na
                })), e.conversion.for('upcast').add(Xt({
                    view: {name: 'a', attributes: {href: !0}},
                    model: {key: 'linkHref', value: (e) => e.getAttribute('href')}
                })), e.commands.add('link', new s_(e)), e.commands.add('unlink', new l_(e)), ia(e.editing.view, e.model, this, 'linkHref'), this._setupLinkHighlight()
            }

            _setupLinkHighlight() {
                const e = this.editor, t = e.editing.view, o = new Set;
                t.document.registerPostFixer((t) => {
                    const n = e.model.document.selection;
                    if (n.hasAttribute('linkHref')) {
                        const i = ea(n.getFirstPosition(), n.getAttribute('linkHref')),
                            r = e.editing.mapper.toViewRange(i);
                        for (const e of r.getItems()) e.is('a') && (t.addClass(p_, e), o.add(e))
                    }
                }), e.conversion.for('editingDowncast').add((e) => {
                    function n() {
                        t.change((e) => {
                            for (const t of o.values()) e.removeClass(p_, t), o.delete(t)
                        })
                    }

                    e.on('insert', n, {priority: 'highest'}), e.on('remove', n, {priority: 'highest'}), e.on('attribute', n, {priority: 'highest'}), e.on('selection', n, {priority: 'highest'})
                })
            }
        }

        class f_ extends _u {
            constructor(e) {
                super(e), this.domEventType = 'click'
            }

            onDomEvent(e) {
                this.fire(e.type, e)
            }
        }

        var h_ = o(74), b_ = o.n(h_);

        class k_ extends hf {
            constructor(e) {
                super(e);
                const o = e.t;
                this.focusTracker = new af, this.keystrokes = new Yg, this.urlInputView = this._createUrlInput(), this.saveButtonView = this._createButton(o('af'), Ob.a, 'ck-button-save'), this.saveButtonView.type = 'submit', this.cancelButtonView = this._createButton(o('ag'), Ib.a, 'ck-button-cancel', 'cancel'), this._focusables = new lf, this._focusCycler = new Of({
                    focusables: this._focusables,
                    focusTracker: this.focusTracker,
                    keystrokeHandler: this.keystrokes,
                    actions: {focusPrevious: 'shift + tab', focusNext: 'tab'}
                }), this.setTemplate({
                    tag: 'form',
                    attributes: {class: ['ck', 'ck-link-form'], tabindex: '-1'},
                    children: [this.urlInputView, this.saveButtonView, this.cancelButtonView]
                })
            }

            render() {
                super.render(), ir({view: this});
                const e = [this.urlInputView, this.saveButtonView, this.cancelButtonView];
                e.forEach((e) => {
                    this._focusables.add(e), this.focusTracker.add(e.element)
                }), this.keystrokes.listenTo(this.element)
            }

            focus() {
                this._focusCycler.focusFirst()
            }

            _createUrlInput() {
                const e = this.locale.t, t = new Ab(this.locale, Eb);
                return t.label = e('ai'), t.inputView.placeholder = 'https://example.com', t
            }

            _createButton(e, t, o, n) {
                const i = new hh(this.locale);
                return i.set({
                    label: e,
                    icon: t,
                    tooltip: !0
                }), i.extendTemplate({attributes: {class: o}}), n && i.delegate('execute').to(this, n), i
            }
        }

        var __ = o(76), w_ = o.n(__), v_ = o(77), y_ = o.n(v_), x_ = o(78), C_ = o.n(x_);

        class A_ extends hf {
            constructor(e) {
                super(e);
                const o = e.t;
                this.focusTracker = new af, this.keystrokes = new Yg, this.previewButtonView = this._createPreviewButton(), this.unlinkButtonView = this._createButton(o('x'), w_.a, 'unlink'), this.editButtonView = this._createButton(o('y'), y_.a, 'edit'), this.set('href'), this._focusables = new lf, this._focusCycler = new Of({
                    focusables: this._focusables,
                    focusTracker: this.focusTracker,
                    keystrokeHandler: this.keystrokes,
                    actions: {focusPrevious: 'shift + tab', focusNext: 'tab'}
                }), this.setTemplate({
                    tag: 'div',
                    attributes: {class: ['ck', 'ck-link-actions'], tabindex: '-1'},
                    children: [this.previewButtonView, this.editButtonView, this.unlinkButtonView]
                })
            }

            render() {
                super.render();
                const e = [this.previewButtonView, this.editButtonView, this.unlinkButtonView];
                e.forEach((e) => {
                    this._focusables.add(e), this.focusTracker.add(e.element)
                }), this.keystrokes.listenTo(this.element)
            }

            focus() {
                this._focusCycler.focusFirst()
            }

            _createButton(e, t, o) {
                const n = new hh(this.locale);
                return n.set({label: e, icon: t, tooltip: !0}), n.delegate('execute').to(this, o), n
            }

            _createPreviewButton() {
                const e = new hh(this.locale), o = this.bindTemplate, n = this.t;
                return e.set({
                    withText: !0,
                    tooltip: n('z')
                }), e.extendTemplate({
                    attributes: {
                        class: ['ck', 'ck-link-actions__preview'],
                        href: o.to('href'),
                        target: '_blank'
                    }
                }), e.bind('label').to(this, 'href', (e) => e || n('aa')), e.bind('isEnabled').to(this, 'href', (e) => !!e), e.template.tag = 'a', e.template.eventListeners = {}, e
            }
        }

        var T_ = o(80), P_ = o.n(T_);
        const E_ = 'Ctrl+K';

        class S_ extends zf {
            static get requires() {
                return [jb]
            }

            init() {
                const e = this.editor;
                e.editing.view.addObserver(f_), this.actionsView = this._createActionsView(), this.formView = this._createFormView(), this._balloon = e.plugins.get(jb), this._createToolbarLinkButton(), this._enableUserBalloonInteractions()
            }

            _createActionsView() {
                const e = this.editor, t = new A_(e.locale), o = e.commands.get('link'), n = e.commands.get('unlink');
                return t.bind('href').to(o, 'value'), t.editButtonView.bind('isEnabled').to(o), t.unlinkButtonView.bind('isEnabled').to(n), this.listenTo(t, 'edit', () => {
                    this._addFormView()
                }), this.listenTo(t, 'unlink', () => {
                    e.execute('unlink'), this._hideUI()
                }), t.keystrokes.set('Esc', (e, t) => {
                    this._hideUI(), t()
                }), t.keystrokes.set(E_, (e, t) => {
                    this._addFormView(), t()
                }), t
            }

            _createFormView() {
                const e = this.editor, t = new k_(e.locale), o = e.commands.get('link');
                return t.urlInputView.bind('value').to(o, 'value'), t.urlInputView.bind('isReadOnly').to(o, 'isEnabled', (e) => !e), t.saveButtonView.bind('isEnabled').to(o), this.listenTo(t, 'submit', () => {
                    e.execute('link', t.urlInputView.inputView.element.value), this._removeFormView()
                }), this.listenTo(t, 'cancel', () => {
                    this._removeFormView()
                }), t.keystrokes.set('Esc', (e, t) => {
                    this._removeFormView(), t()
                }), t
            }

            _createToolbarLinkButton() {
                const e = this.editor, o = e.commands.get('link'), n = e.t;
                e.keystrokes.set(E_, (e, t) => {
                    t(), o.isEnabled && this._showUI()
                }), e.ui.componentFactory.add('link', (e) => {
                    const t = new hh(e);
                    return t.isEnabled = !0, t.label = n('m'), t.icon = P_.a, t.keystroke = E_, t.tooltip = !0, t.bind('isEnabled').to(o, 'isEnabled'), this.listenTo(t, 'execute', () => this._showUI()), t
                })
            }

            _enableUserBalloonInteractions() {
                const e = this.editor.editing.view.document;
                this.listenTo(e, 'click', () => {
                    const e = this._getSelectedLinkElement();
                    e && this._showUI()
                }), this.editor.keystrokes.set('Tab', (e, t) => {
                    this._areActionsVisible && !this.actionsView.focusTracker.isFocused && (this.actionsView.focus(), t())
                }, {priority: 'high'}), this.editor.keystrokes.set('Esc', (e, t) => {
                    this._isUIVisible && (this._hideUI(), t())
                }), nr({
                    emitter: this.formView,
                    activator: () => this._isUIVisible,
                    contextElements: [this._balloon.view.element],
                    callback: () => this._hideUI()
                })
            }

            _addActionsView() {
                this._areActionsInPanel || this._balloon.add({
                    view: this.actionsView,
                    position: this._getBalloonPositionData()
                })
            }

            _addFormView() {
                if (!this._isFormInPanel) {
                    const e = this.editor, t = e.commands.get('link');
                    this._balloon.add({
                        view: this.formView,
                        position: this._getBalloonPositionData()
                    }), this.formView.urlInputView.select(), this.formView.urlInputView.inputView.element.value = t.value || ''
                }
            }

            _removeFormView() {
                this._isFormInPanel && (this._balloon.remove(this.formView), this.editor.editing.view.focus())
            }

            _showUI() {
                const e = this.editor, t = e.commands.get('link');
                t.isEnabled && (this._getSelectedLinkElement() ? this._areActionsVisible ? this._addFormView() : this._addActionsView() : (this._addActionsView(), this._addFormView()), this._startUpdatingUIOnViewRender())
            }

            _hideUI() {
                if (this._isUIInPanel) {
                    const e = this.editor.editing.view;
                    this.stopListening(e, 'render'), this._removeFormView(), this._balloon.remove(this.actionsView), e.focus()
                }
            }

            _startUpdatingUIOnViewRender() {
                function e() {
                    return n.document.selection.focus.getAncestors().reverse().find((e) => e.is('element'))
                }

                const t = this.editor, o = t.editing, n = o.view;
                let i = this._getSelectedLinkElement(), r = e();
                this.listenTo(n, 'render', () => {
                    const t = this._getSelectedLinkElement(), o = e();
                    (!i || t) && (i || o === r) ? this._balloon.updatePosition(this._getBalloonPositionData()) : this._hideUI(), i = t, r = o
                })
            }

            get _isFormInPanel() {
                return this._balloon.hasView(this.formView)
            }

            get _areActionsInPanel() {
                return this._balloon.hasView(this.actionsView)
            }

            get _areActionsVisible() {
                return this._balloon.visibleView === this.actionsView
            }

            get _isUIInPanel() {
                return this._isFormInPanel || this._areActionsInPanel
            }

            get _isUIVisible() {
                const e = this._balloon.visibleView;
                return e == this.formView || this._areActionsVisible
            }

            _getBalloonPositionData() {
                const e = this.editor.editing.view, t = e.document, o = this._getSelectedLinkElement(),
                    n = o ? e.domConverter.mapViewToDom(o) : e.domConverter.viewRangeToDom(t.selection.getFirstRange());
                return {target: n}
            }

            _getSelectedLinkElement() {
                const e = this.editor.editing.view.document.selection;
                if (e.isCollapsed) return ca(e.getFirstPosition()); else {
                    const t = e.getFirstRange().getTrimmed(), o = ca(t.start), n = ca(t.end);
                    return o && o == n ? yc.createIn(o).getTrimmed().isEqual(t) ? o : null : null
                }
            }
        }

        class O_ extends zf {
            static get requires() {
                return [g_, S_]
            }

            static get pluginName() {
                return 'Link'
            }
        }

        class R_ extends Hf {
            constructor(e, t) {
                super(e), this.type = 'bulleted' == t ? 'bulleted' : 'numbered'
            }

            refresh() {
                this.value = this._getValue(), this.isEnabled = this._checkEnabled()
            }

            execute() {
                const e = this.editor.model, t = e.document,
                    o = Array.from(t.selection.getSelectedBlocks()).filter((t) => ma(t, e.schema)),
                    n = !0 === this.value;
                e.change((e) => {
                    if (n) {
                        let t = o[o.length - 1].nextSibling, n = Na, i = [];
                        for (; t && 'listItem' == t.name && 0 !== t.getAttribute('indent');) {
                            const e = t.getAttribute('indent');
                            e < n && (n = e);
                            const o = e - n;
                            i.push({element: t, indent: o}), t = t.nextSibling
                        }
                        i = i.reverse();
                        for (const t of i) e.setAttribute('indent', t.indent, t.element)
                    }
                    if (!n) {
                        let e = Na;
                        for (const t of o) t.is('listItem') && t.getAttribute('indent') < e && (e = t.getAttribute('indent'));
                        e = 0 === e ? 1 : e, ua(o, !0, e), ua(o, !1, e)
                    }
                    for (const t of o.reverse()) n && 'listItem' == t.name ? e.rename(t, 'paragraph') : n || 'listItem' == t.name ? n || 'listItem' != t.name || t.getAttribute('type') == this.type || e.setAttribute('type', this.type, t) : (e.setAttributes({
                        type: this.type,
                        indent: 0
                    }, t), e.rename(t, 'listItem'))
                })
            }

            _getValue() {
                const e = Oi(this.editor.model.document.selection.getSelectedBlocks());
                return !!e && e.is('listItem') && e.getAttribute('type') == this.type
            }

            _checkEnabled() {
                if (this.value) return !0;
                const e = this.editor.model.document.selection, t = this.editor.model.schema,
                    o = Oi(e.getSelectedBlocks());
                return !!o && ma(o, t)
            }
        }

        class I_ extends Hf {
            constructor(e, t) {
                super(e), this._indentBy = 'forward' == t ? 1 : -1
            }

            refresh() {
                this.isEnabled = this._checkEnabled()
            }

            execute() {
                const e = this.editor.model, t = e.document;
                let o = Array.from(t.selection.getSelectedBlocks());
                e.change((e) => {
                    const t = o[o.length - 1];
                    for (let n = t.nextSibling; n && 'listItem' == n.name && n.getAttribute('indent') > t.getAttribute('indent');) o.push(n), n = n.nextSibling;
                    0 > this._indentBy && (o = o.reverse());
                    for (const t of o) {
                        const o = t.getAttribute('indent') + this._indentBy;
                        0 > o ? e.rename(t, 'paragraph') : e.setAttribute('indent', o, t)
                    }
                })
            }

            _checkEnabled() {
                const e = Oi(this.editor.model.document.selection.getSelectedBlocks());
                if (!e || !e.is('listItem')) return !1;
                if (0 < this._indentBy) {
                    const t = e.getAttribute('indent'), o = e.getAttribute('type');
                    for (let n = e.previousSibling; n && n.is('listItem') && n.getAttribute('indent') >= t;) {
                        if (n.getAttribute('indent') == t) return n.getAttribute('type') == o;
                        n = n.previousSibling
                    }
                    return !1
                }
                return !0
            }
        }

        class V_ extends zf {
            static get requires() {
                return [mk]
            }

            init() {
                const e = this.editor;
                e.model.schema.register('listItem', {inheritAllFrom: '$block', allowAttributes: ['type', 'indent']});
                const t = e.data, o = e.editing;
                e.model.document.registerPostFixer((t) => Ta(e.model, t)), o.mapper.registerViewToModelLength('li', Fa), t.mapper.registerViewToModelLength('li', Fa), o.mapper.on('modelToViewPosition', Ca), o.mapper.on('viewToModelPosition', Aa), t.mapper.on('modelToViewPosition', Ca), o.downcastDispatcher.on('insert', _a, {priority: 'high'}), o.downcastDispatcher.on('insert:listItem', fa), t.downcastDispatcher.on('insert', _a, {priority: 'high'}), t.downcastDispatcher.on('insert:listItem', fa), o.downcastDispatcher.on('attribute:type:listItem', ba), t.downcastDispatcher.on('attribute:type:listItem', ba), o.downcastDispatcher.on('attribute:indent:listItem', ka), t.downcastDispatcher.on('attribute:indent:listItem', ka), o.downcastDispatcher.on('remove:listItem', ha), o.downcastDispatcher.on('remove', wa, {priority: 'low'}), t.downcastDispatcher.on('remove:listItem', ha), t.downcastDispatcher.on('remove', wa, {priority: 'low'}), t.upcastDispatcher.on('element:ul', ya, {priority: 'high'}), t.upcastDispatcher.on('element:ol', ya, {priority: 'high'}), t.upcastDispatcher.on('element:li', xa, {priority: 'high'}), t.upcastDispatcher.on('element:li', va), e.model.on('insertContent', Pa, {priority: 'high'}), e.commands.add('numberedList', new R_(e, 'numbered')), e.commands.add('bulletedList', new R_(e, 'bulleted')), e.commands.add('indentList', new I_(e, 'forward')), e.commands.add('outdentList', new I_(e, 'backward'));
                const n = this.editor.editing.view.document;
                this.listenTo(n, 'enter', (e, t) => {
                    const o = this.editor.model.document, n = o.selection.getLastPosition().parent;
                    o.selection.isCollapsed && 'listItem' == n.name && n.isEmpty && (this.editor.execute('outdentList'), t.preventDefault(), e.stop())
                }), this.listenTo(n, 'delete', (e, t) => {
                    if ('backward' === t.direction) {
                        const o = this.editor.model.document.selection;
                        if (o.isCollapsed) {
                            const n = o.getFirstPosition();
                            if (n.isAtStart) {
                                const o = n.parent;
                                if ('listItem' === o.name) {
                                    const n = o.previousSibling && 'listItem' === o.previousSibling.name;
                                    n || (this.editor.execute('outdentList'), t.preventDefault(), e.stop())
                                }
                            }
                        }
                    }
                }, {priority: 'high'});
                const i = (e) => (t, o) => {
                    const n = this.editor.commands.get(e);
                    n.isEnabled && (this.editor.execute(e), o())
                };
                this.editor.keystrokes.set('Tab', i('indentList')), this.editor.keystrokes.set('Shift+Tab', i('outdentList'))
            }
        }

        var F_ = o(81), N_ = o.n(F_), M_ = o(82), D_ = o.n(M_);

        class B_ extends zf {
            init() {
                const e = this.editor.t;
                this._addButton('numberedList', e('q'), N_.a), this._addButton('bulletedList', e('r'), D_.a)
            }

            _addButton(e, t, o) {
                const n = this.editor;
                n.ui.componentFactory.add(e, (i) => {
                    const r = n.commands.get(e), a = new hh(i);
                    return a.set({
                        label: t,
                        icon: o,
                        tooltip: !0
                    }), a.bind('isOn', 'isEnabled').to(r, 'value', 'isEnabled'), this.listenTo(a, 'execute', () => n.execute(e)), a
                })
            }
        }

        class L_ extends zf {
            static get requires() {
                return [V_, B_]
            }

            static get pluginName() {
                return 'List'
            }
        }

        class z_ extends Lf {
        }

        t['default'] = z_, z_.build = {
            plugins: [xh, Oh, Fh, qh, Jh, nb, ck, Nk, $b, Wk, r_, a_, dk, O_, L_, mk],
            config: {
                toolbar: {items: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'imageUpload', 'blockQuote', 'undo', 'redo']},
                image: {toolbar: ['imageStyle:full', 'imageStyle:side', '|', 'imageTextAlternative']},
                language: 'en'
            }
        }
    }, function (e) {
        var t = function () {
            return this
        }();
        try {
            t = t || Function('return this')() || (1, eval)('this')
        } catch (o) {
            'object' == typeof window && (t = window)
        }
        e.exports = t
    }, function (e, t) {
        'use strict';
        t.a = function (e) {
            return e && e.Object === Object ? e : null
        }
    }, function (e, t, o) {
        'use strict';
        (function (e) {
            var n = o(10), i = o(1), r = {function: !0, object: !0},
                a = r[typeof exports] && exports && !exports.nodeType ? exports : void 0,
                s = r[typeof e] && e && !e.nodeType ? e : void 0, l = s && s.exports === a ? a : void 0,
                d = l ? i.a.Buffer : void 0, c = d ? function (e) {
                    return e instanceof d
                } : Object(n.a)(!1);
            t.a = c
        }).call(t, o(2)(e))
    }, function (e, t) {
        'use strict';
        t.a = function (e) {
            return function () {
                return e
            }
        }
    }, function (e, t, o) {
        var n = o(12);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = '.ck-hidden{display:none!important}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{box-sizing:border-box;width:auto;height:auto;position:static}:root{--ck-z-default:1;--ck-z-modal:999;--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-focus-border:#47a4f5;--ck-color-focus-shadow:#77baf8;--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-focus-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-focus-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-focus-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#5c5c5c;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-item-background-hover:var(--ck-color-base-foreground);--ck-color-list-item-background-active:var(--ck-color-base-active);--ck-color-list-item-background-active-focus:var(--ck-color-base-active-focus);--ck-color-list-item-text-active:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#c2c2c2;--ck-color-upload-bar-background:#6cb5f9;--ck-color-upload-infinite-background:rgba(0,0,0,.1);--ck-color-link-default:#0000f0;--ck-color-link-selected-background:#ebf8ff;--ck-disabled-opacity:.5;--ck-focus-outer-shadow:0 0 3px var(--ck-color-focus-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{margin:0;padding:0;border:0;background:transparent;text-decoration:none;vertical-align:middle;transition:none;word-wrap:break-word}.ck.ck-reset_all,.ck.ck-reset_all *{border-collapse:collapse;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);color:var(--ck-color-text);text-align:left;white-space:nowrap;cursor:auto;float:none}.ck.ck-reset_all .ck-rtl *{text-align:right}.ck.ck-reset_all iframe{vertical-align:inherit}.ck.ck-reset_all textarea{white-space:pre-wrap}.ck.ck-reset_all input[type=password],.ck.ck-reset_all input[type=text],.ck.ck-reset_all textarea{cursor:text}.ck.ck-reset_all input[type=password][disabled],.ck.ck-reset_all input[type=text][disabled],.ck.ck-reset_all textarea[disabled]{cursor:default}.ck.ck-reset_all fieldset{padding:10px;border:2px groove #dfdee3}.ck.ck-reset_all button::-moz-focus-inner{padding:0;border:0}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit) * 1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit) * 0.8);--ck-spacing-small:calc(var(--ck-spacing-unit) * 0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit) * 0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit) * 0.16)}'
    }, function (e) {
        e.exports = function (e) {
            var t = 'undefined' != typeof window && window.location;
            if (!t) throw new Error('fixUrls requires window.location');
            if (!e || 'string' != typeof e) return e;
            var o = t.protocol + '//' + t.host, n = o + t.pathname.replace(/\/[^\/]*$/, '/'),
                i = e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
                    var i = t.trim().replace(/^"(.*)"$/, function (e, t) {
                        return t
                    }).replace(/^'(.*)'$/, function (e, t) {
                        return t
                    });
                    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)) return e;
                    var r;
                    return r = 0 === i.indexOf('//') ? i : 0 === i.indexOf('/') ? o + i : n + i.replace(/^\.\//, ''), 'url(' + JSON.stringify(r) + ')'
                });
            return i
        }
    }, function (e, t, o) {
        var n = o(15);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = '.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-focused{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0}.ck.ck-editor__editable_inline{overflow:auto;padding:0 var(--ck-spacing-standard);border:1px solid transparent}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}'
    }, function (e, t, o) {
        var n = o(17);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = '.ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}'
    }, function (e, t, o) {
        var n = o(19);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = '.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{z-index:var(--ck-z-modal);position:fixed;top:0}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{top:auto;position:absolute}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{box-shadow:var(--ck-drop-shadow),0 0;border-width:0 1px 1px;border-top-left-radius:0;border-top-right-radius:0}'
    }, function (e, t, o) {
        var n = o(21);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = '.ck.ck-toolbar{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-flow:row wrap;align-items:center}.ck.ck-toolbar.ck-toolbar_vertical{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating{flex-wrap:nowrap}.ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar__newline{display:block;width:100%}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);padding:0 var(--ck-spacing-small);border:1px solid var(--ck-color-toolbar-border)}.ck.ck-toolbar>*{margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>*{width:100%;margin:0;border-radius:0;border:0}.ck.ck-toolbar>:last-child{margin-right:0}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar__separator{align-self:stretch;width:1px;margin-top:0;margin-bottom:0;background:var(--ck-color-toolbar-border)}.ck.ck-toolbar__newline{margin:0}'
    }, function (e, t, o) {
        var n = o(23);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = '.ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}'
    }, function (e, t, o) {
        var n = o(25);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = '.ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base) * var(--ck-font-size-normal))}.ck.ck-icon{width:var(--ck-icon-size);height:var(--ck-icon-size);font-size:.8333350694em;will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon *{fill:currentColor}'
    }, function (e, t, o) {
        var n = o(27);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = '.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{position:absolute;pointer-events:none;-webkit-backface-visibility:hidden}.ck-tooltip{visibility:hidden;opacity:0;display:none;z-index:var(--ck-z-modal)}.ck-tooltip .ck-tooltip__text{display:inline-block}.ck-tooltip .ck-tooltip__text:after{content:"";width:0;height:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%}.ck.ck-tooltip.ck-tooltip_s{bottom:calc(-1 * var(--ck-tooltip-arrow-size));transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after{top:calc(-1 * var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-color:transparent transparent var(--ck-color-tooltip-background);border-width:0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size)}.ck.ck-tooltip.ck-tooltip_n{top:calc(-1 * var(--ck-tooltip-arrow-size));transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{bottom:calc(-1 * var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-color:var(--ck-color-tooltip-background) transparent transparent;border-width:var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{font-size:.9em;line-height:1.5;color:var(--ck-color-tooltip-text);padding:var(--ck-spacing-small) var(--ck-spacing-medium);background:var(--ck-color-tooltip-background);position:relative;left:-50%}.ck.ck-tooltip .ck-tooltip__text:after{border-style:solid;left:50%}.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{transition:opacity .2s ease-in-out .2s}'
    }, function (e, t, o) {
        var n = o(29);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = '.ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}.ck.ck-button,a.ck.ck-button{position:relative}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{visibility:visible;opacity:1}.ck.ck-button .ck-button__label,.ck.ck-button:focus:not(:hover) .ck-tooltip,a.ck.ck-button .ck-button__label,a.ck.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):focus,.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):focus,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-focus-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{white-space:nowrap;cursor:default;vertical-align:middle;padding:var(--ck-spacing-tiny);text-align:center;min-width:var(--ck-ui-component-min-height);min-height:var(--ck-ui-component-min-height);line-height:1;font-size:inherit;border:1px solid transparent}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;border-color:transparent}.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__icon{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}.ck.ck-button.ck-button_with-text .ck-button__icon,a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(-1 * var(--ck-spacing-small));margin-right:var(--ck-spacing-small)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):focus,.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):focus,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-focus-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{font-size:inherit;font-weight:inherit;color:inherit;cursor:inherit;vertical-align:middle}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):focus,.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):focus,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-focus-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}'
    }, function (e) {
        e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.042 9.367l2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z" fill="#000" fill-rule="nonzero"/></svg>'
    }, function (e) {
        e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.958 9.367l-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z" fill="#000" fill-rule="nonzero"/></svg>'
    }, function (e) {
        e.exports = '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z" fill="#000" fill-rule="evenodd"/></svg>\n'
    }, function (e) {
        e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.586 14.633l.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z" fill="#333" fill-rule="evenodd"/></svg>'
    }, function (e) {
        e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="evenodd"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.011-.563zM11 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.011-.563z"/></g></svg>\n'
    }, function (e, t, o) {
        var n = o(36);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = '.ck-content blockquote{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;font-style:italic;border-left:5px solid #ccc}'
    }, function (e, t, o) {
        var n = o(38);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = ':root{--ck-widget-outline-thickness:3px;--ck-color-widget-border-blurred:#dedede;--ck-color-widget-border-hover:#ffd15c;--ck-color-widget-editable-focused-background:var(--ck-color-base-background),}.ck .ck-widget{margin:var(--ck-spacing-standard) 0;padding:0}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck-editor__editable.ck-blurred .ck .ck-widget.ck-widget_selected{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-widget-border-blurred)}.ck .ck-widget:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-widget-border-hover)}.ck .ck-widget .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-widget .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-widget .ck-editor__nested-editable:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;background-color:var(--ck-color-widget-editable-focused-background)}'
    }, function (e, t, o) {
        var n = o(40);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = ':root{--ck-input-text-width:18em}.ck.ck-input-text{border-radius:0}.ck-rounded-corners .ck.ck-input-text,.ck.ck-input-text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-text{box-shadow:var(--ck-inner-shadow),0 0;background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);min-width:var(--ck-input-text-width);min-height:var(--ck-ui-component-min-height);transition-property:box-shadow,border;transition:.2s ease-in-out}.ck.ck-input-text:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),var(--ck-inner-shadow)}.ck.ck-input-text[readonly]{border:1px solid var(--ck-color-input-disabled-border);background:var(--ck-color-input-disabled-background);color:var(--ck-color-input-disabled-text)}'
    }, function (e, t, o) {
        var n = o(42);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = '.ck.ck-text-alternative-form .ck-labeled-input{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}.ck.ck-text-alternative-form{padding:var(--ck-spacing-standard)}.ck.ck-text-alternative-form:focus{outline:none}.ck.ck-text-alternative-form>:not(:first-child){margin-left:var(--ck-spacing-standard)}'
    }, function (e, t, o) {
        var n = o(44);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = '.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-z-default)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-z-default)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-z-default)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{width:0;height:0;border-style:solid}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background);margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent;margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(-1 * var(--ck-balloon-arrow-half-width));top:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(2 * var(--ck-balloon-arrow-half-width));top:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(2 * var(--ck-balloon-arrow-half-width));top:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{left:50%;margin-left:calc(-1 * var(--ck-balloon-arrow-half-width));bottom:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{left:calc(2 * var(--ck-balloon-arrow-half-width));bottom:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{right:calc(2 * var(--ck-balloon-arrow-half-width));bottom:calc(-1 * var(--ck-balloon-arrow-height))}'
    }, function (e) {
        e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22L2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21l-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012.9.093 1.676.675 2.017 1.513.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z" fill="#000" fill-rule="evenodd"/></svg>'
    }, function (e, t, o) {
        var n = o(47);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = '.ck-content .image{clear:both;text-align:center}.ck-content .image>img{display:block;margin:0 auto;max-width:100%}'
    }, function (e) {
        e.exports = '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z" fill="#000" fill-rule="nonzero"/></svg>\n'
    }, function (e) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 250"><g fill="none" fill-rule="evenodd"><rect width="700" height="250" fill="#F7F7F7" rx="4"/><text fill="#5F6F77" font-family="Arial,sans-serif" font-size="24"><tspan x="247.9" y="135">Uploading image\u2026</tspan></text></g></svg>\n'
    }, function (e, t, o) {
        var n = o(51);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = '.ck-content .image{position:relative;overflow:hidden}.ck-content .image.ck-infinite-progress:before{content:"";position:absolute;top:0;right:0}.ck-content .image .ck-progress-bar{position:absolute;top:0;left:0}:root{--ck-image-upload-progress-line-width:30px}.ck-content .image.ck-appear{animation:a .7s}.ck-content .image.ck-infinite-progress:before{width:var(--ck-image-upload-progress-line-width);height:2px;background:var(--ck-color-upload-infinite-background);animation-name:b;animation-duration:1.5s;animation-iteration-count:infinite;transition-timing-function:linear}.ck-content .image.ck-image-upload-placeholder>img{width:100%}.ck-content .image .ck-progress-bar{height:2px;width:0;background:var(--ck-color-upload-bar-background);transition:width .1s}@keyframes a{0%{opacity:0}to{opacity:1}}@keyframes b{0%{width:var(--ck-image-upload-progress-line-width);right:0}50%{width:calc(var(--ck-image-upload-progress-line-width) * 1.5)}to{right:100%}}'
    }, function (e, t, o) {
        var n = o(53);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = '.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default);position:absolute;top:50%;transform:translate3d(0,-50%,0)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;z-index:var(--ck-z-modal);position:absolute;left:0;transform:translate3d(0,100%,0)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block;will-change:transform}:root{--ck-dropdown-arrow-size:calc(0.5 * var(--ck-icon-size))}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{right:var(--ck-spacing-standard);width:var(--ck-dropdown-arrow-size)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button{padding-right:calc(2.5 * var(--ck-spacing-standard))}.ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{width:7em;overflow:hidden;text-overflow:ellipsis}.ck.ck-dropdown__panel{border-radius:0;box-shadow:var(--ck-drop-shadow),0 0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;min-width:100%}'
    }, function (e) {
        e.exports = '<svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z" fill="#000" fill-rule="evenodd"/></svg>'
    }, function (e, t, o) {
        var n = o(56);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = '.ck.ck-list{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden}.ck.ck-list .ck-list__item{display:block}.ck.ck-list .ck-list__item:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{list-style-type:none;background:var(--ck-color-list-background)}.ck.ck-list__item{padding:var(--ck-spacing-medium);cursor:default;min-width:12em}.ck.ck-list__item:focus,.ck.ck-list__item:hover{background:var(--ck-color-list-item-background-hover)}.ck.ck-list__item:focus{box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-list__item_active{background:var(--ck-color-list-item-background-active);color:var(--ck-color-list-item-text-active)}.ck.ck-list__item_active:focus,.ck.ck-list__item_active:hover{background:var(--ck-color-list-item-background-active-focus)}'
    }, function (e, t, o) {
        var n = o(58);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = '.ck.ck-toolbar-dropdown .ck-toolbar{flex-wrap:nowrap}.ck.ck-toolbar-dropdown .ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}'
    }, function (e, t, o) {
        var n = o(60);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = '.ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list>.ck-list__item{line-height:calc(.8*var(--ck-line-height-base)*var(--ck-font-size-base));padding:calc(.4*var(--ck-line-height-base)*var(--ck-font-size-base))}'
    }, function (e) {
        e.exports = '.ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}'
    }, function (e, t, o) {
        var n = o(63);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = '.ck.ck-placeholder:before,.ck .ck-placeholder:before{content:attr(data-placeholder);pointer-events:none;cursor:text;color:var(--ck-color-engine-placeholder-text)}'
    }, function (e, t, o) {
        var n = o(65);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = '.ck-content .image>figcaption{color:#333;background-color:#f7f7f7;padding:.6em;font-size:.75em;outline-offset:-1px}'
    }, function (e) {
        e.exports = '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="nonzero"><path d="M2 4.5V3h16v1.5zM4.5 7.5V12h11V7.5h-11zM4.061 6H15.94c.586 0 1.061.407 1.061.91v5.68c0 .503-.475.91-1.061.91H4.06C3.475 13.5 3 13.093 3 12.59V6.91C3 6.406 3.475 6 4.061 6zM2 16.5V15h16v1.5z"/></g></svg>\n'
    }, function (e) {
        e.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M18 4.5V3H2v1.5h16zm0 3V6h-5.674v1.5H18zm0 3V9h-5.674v1.5H18zm0 3V12h-5.674v1.5H18zm-8.5-6V12h-6V7.5h6zm.818-1.5H2.682C2.305 6 2 6.407 2 6.91v5.68c0 .503.305.91.682.91h7.636c.377 0 .682-.407.682-.91V6.91c0-.503-.305-.91-.682-.91zM18 16.5V15H2v1.5h16z" fill-rule="nonzero"/></svg>'
    }, function (e) {
        e.exports = '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="nonzero"><path d="M2 4.5V3h16v1.5zM6.5 7.5V12h7V7.5h-7zM5.758 6h8.484c.419 0 .758.407.758.91v5.681c0 .502-.34.909-.758.909H5.758c-.419 0-.758-.407-.758-.91V6.91c0-.503.34-.91.758-.91zM2 16.5V15h16v1.5z"/></g></svg>\n'
    }, function (e) {
        e.exports = '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="nonzero"><path d="M2 4.5V3h16v1.5zM2 7.5V6h5.674v1.5zM2 10.5V9h5.674v1.5zM2 13.5V12h5.674v1.5zM10.5 7.5V12h6V7.5h-6zM9.682 6h7.636c.377 0 .682.407.682.91v5.68c0 .503-.305.91-.682.91H9.682c-.377 0-.682-.407-.682-.91V6.91c0-.503.305-.91.682-.91zM2 16.5V15h16v1.5z"/></g></svg>\n'
    }, function (e, t, o) {
        var n = o(71);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = ':root{--ck-image-style-spacing:1.5em}.ck-content .image-style-align-center,.ck-content .image-style-align-left,.ck-content .image-style-align-right,.ck-content .image-style-side{max-width:50%}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}'
    }, function (e, t, o) {
        var n = o(73);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = '.ck .ck-link_selected{background:var(--ck-color-link-selected-background)}'
    }, function (e, t, o) {
        var n = o(75);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = '.ck.ck-link-form .ck-labeled-input{display:inline-block}.ck.ck-link-form .ck-label{display:none}.ck.ck-link-form{padding:var(--ck-spacing-standard)}.ck.ck-link-form:focus{outline:none}.ck.ck-link-form>:not(:first-child){margin-left:var(--ck-spacing-standard)}'
    }, function (e) {
        e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="evenodd"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955c.02-.095.06-.189.12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184zM16.927 17.695l-1.414 1.414a.75.75 0 1 1-1.06-1.06l1.414-1.415-1.415-1.414a.75.75 0 0 1 1.061-1.06l1.414 1.414 1.414-1.415a.75.75 0 0 1 1.061 1.061l-1.414 1.414 1.414 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414z"/></g></svg>'
    }, function (e) {
        e.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.3 17.37l-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506L13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5L9.375 17H19v1.5H8z" fill="#000" fill-rule="nonzero"/></svg>\n'
    }, function (e, t, o) {
        var n = o(79);
        'string' == typeof n && (n = [[e.i, n, '']]);
        var i = {singleton: !0, hmr: !0}, r;
        i.transform = r, i.insertInto = void 0;
        o(0)(n, i);
        n.locals && (e.exports = n.locals), !1
    }, function (e) {
        e.exports = '.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}.ck.ck-link-actions{padding:var(--ck-spacing-standard)}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{padding:0 var(--ck-spacing-standard);color:var(--ck-color-link-default);text-overflow:ellipsis;cursor:pointer;max-width:var(--ck-input-text-width);min-width:3em;text-align:center}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions:focus{outline:none}.ck.ck-link-actions>:not(:first-child){margin-left:var(--ck-spacing-standard)}'
    }, function (e) {
        e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955c.02-.095.06-.189.12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z" fill="#000" fill-rule="evenodd"/></svg>'
    }, function (e) {
        e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z" fill="#454545" fill-rule="evenodd"/></svg>'
    }, function (e) {
        e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z" fill="#454545" fill-rule="evenodd"/></svg>'
    }])['default']
});
//# sourceMappingURL=ckeditor.js.map