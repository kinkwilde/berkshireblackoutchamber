import { a as v, t as d } from '../chunks/disclose-version.a6Ia8LJw.js';
import {
	Y as y,
	ab as m,
	U as x,
	n as w,
	a5 as k,
	V as u,
	M as N,
	ac as A,
	ad as T,
	q as i,
	v as n,
	w as c,
	ae as C,
	p as g,
	o as h
} from '../chunks/runtime.CnmVaTji.js';
import '../chunks/legacy.HomNGct0.js';
import { b as l } from '../chunks/paths.C5xYcbQ6.js';
import { i as E } from '../chunks/lifecycle.L67h4bVk.js';
function F(a, r, ...t) {
	var o = a,
		e = w,
		s;
	y(() => {
		e !== (e = r()) && (s && (k(s), (s = null)), (s = x(() => e(o, ...t))));
	}, m),
		u && (o = N);
}
function f(a, r, t, o) {
	var e = a.__attributes ?? (a.__attributes = {});
	(u && ((e[r] = a.getAttribute(r)), a.nodeName === 'LINK')) ||
		(e[r] !== (e[r] = t) &&
			(t == null
				? a.removeAttribute(r)
				: typeof t != 'string' && $(a).includes(r)
					? (a[r] = t)
					: a.setAttribute(r, t)));
}
var _ = new Map();
function $(a) {
	var r = _.get(a.nodeName);
	if (r) return r;
	_.set(a.nodeName, (r = []));
	for (var t, o = a, e = Element.prototype; e !== o; ) {
		t = T(o);
		for (var s in t) t[s].set && r.push(s);
		o = A(o);
	}
	return r;
}
const j = !0,
	z = Object.freeze(
		Object.defineProperty({ __proto__: null, prerender: j }, Symbol.toStringTag, {
			value: 'Module'
		})
	);
var M = d(
	'<nav class="border-y border-black bg-gray-900 text-white"><div class="container py-2"><ul class="flex list-none justify-center space-x-4 [&amp;_a]:uppercase [&amp;_a]:text-white"><li><a>Home</a></li> <li><a>Loot Table</a></li> <li><a href="https://discord.gg/k9fRuhe5kw" target="_blank">Discord</a></li></ul></div></nav>'
);
function R(a) {
	var r = M(),
		t = i(r),
		o = i(t),
		e = i(o),
		s = i(e);
	f(s, 'href', `${l ?? ''}/`), n(e);
	var p = c(e, 2),
		b = i(p);
	f(b, 'href', `${l ?? ''}/loot`), n(p), C(2), n(o), n(t), n(r), v(a, r);
}
var S = d(
	'<div class="border-y border-black bg-gray-900 text-white"><div class="container py-2 [&amp;_p:last-of-type]:mb-0"><p class="text-center text-sm uppercase"></p></div></div>'
);
function Y(a, r) {
	g(r, !1);
	const t = new Date().getFullYear();
	E();
	var o = S(),
		e = i(o),
		s = i(e);
	(s.textContent = `Copyright ${t ?? ''} © Berkshire Blackout Chamber`), n(e), n(o), v(a, o), h();
}
var B = d(
	'<div class="flex min-h-screen flex-col bg-gray-100"><!> <div class="flex-grow bg-smoke"><!></div> <!></div>'
);
function H(a, r) {
	g(r, !0);
	var t = B(),
		o = i(t);
	R(o);
	var e = c(o, 2),
		s = i(e);
	F(s, () => r.children), n(e);
	var p = c(e, 2);
	Y(p, {}), n(t), v(a, t), h();
}
export { H as component, z as universal };
