import { a as Z, t as q } from '../chunks/disclose-version.a6Ia8LJw.js';
import '../chunks/legacy.HomNGct0.js';
import {
	T as Ie,
	Y as Me,
	V,
	K as se,
	L as Ae,
	D as Ce,
	R as he,
	Z as ke,
	_ as fe,
	J as oe,
	M as P,
	$ as K,
	a0 as xe,
	U as _e,
	a1 as Le,
	A as pe,
	a2 as Ve,
	a3 as ze,
	Q as Se,
	a4 as Re,
	a5 as Be,
	F as He,
	N as Ue,
	z as Oe,
	m as Xe,
	a6 as me,
	a7 as Fe,
	a8 as We,
	a9 as Ye,
	G as Pe,
	k as U,
	q as v,
	v as d,
	p as Ze,
	j as qe,
	o as Ge,
	i as Je,
	w as $,
	aa as Ke,
	g as C
} from '../chunks/runtime.CnmVaTji.js';
import { s as A, e as Qe } from '../chunks/render.COilbI9Y.js';
import { i as je } from '../chunks/lifecycle.L67h4bVk.js';
import { s as ye, a as Q } from '../chunks/store.Dxhw7_Od.js';
import { w as ne } from '../chunks/index.df1cucyn.js';
import { o as et } from '../chunks/index-client.Cp9tczKW.js';
function ue(n, e) {
	return e;
}
function tt(n, e, t, l) {
	for (var f = [], c = e.length, i = 0; i < c; i++) ze(e[i].e, f, !0);
	var b = c > 0 && f.length === 0 && t !== null;
	if (b) {
		var u = t.parentNode;
		Se(u), u.append(t), l.clear(), k(n, e[0].prev, e[c - 1].next);
	}
	Re(f, () => {
		for (var m = 0; m < c; m++) {
			var h = e[m];
			b || (l.delete(h.k), k(n, h.prev, h.next)), Be(h.e, !b);
		}
	});
}
function ge(n, e, t, l, f, c = null) {
	var i = n,
		b = { flags: e, items: new Map(), first: null };
	{
		var u = n;
		i = V ? se(He(u)) : u.appendChild(Ie());
	}
	V && Ae();
	var m = null,
		h = !1;
	Me(() => {
		var a = t(),
			p = Ce(a) ? a : a == null ? [] : he(a),
			r = p.length;
		if (h && r === 0) return;
		h = r === 0;
		let o = !1;
		if (V) {
			var x = i.data === ke;
			x !== (r === 0) && ((i = fe()), se(i), oe(!1), (o = !0));
		}
		if (V) {
			for (var D = null, _, s = 0; s < r; s++) {
				if (P.nodeType === 8 && P.data === Ue) {
					(i = P), (o = !0), oe(!1);
					break;
				}
				var y = p[s],
					z = l(y, s);
				(_ = we(P, b, D, null, y, z, s, f, e)), b.items.set(z, _), (D = _);
			}
			r > 0 && se(fe());
		}
		if (!V) {
			var I = Oe;
			at(p, b, i, f, e, (I.f & K) !== 0, l);
		}
		c !== null &&
			(r === 0
				? m
					? xe(m)
					: (m = _e(() => c(i)))
				: m !== null &&
					Le(m, () => {
						m = null;
					})),
			o && oe(!0),
			t();
	}),
		V && (i = P);
}
function at(n, e, t, l, f, c, i, b) {
	var u = n.length,
		m = e.items,
		h = e.first,
		a = h,
		p,
		r = null,
		o = [],
		x = [],
		D,
		_,
		s,
		y;
	for (y = 0; y < u; y += 1) {
		if (((D = n[y]), (_ = i(D, y)), (s = m.get(_)), s === void 0)) {
			var z = a ? a.e.nodes_start : t;
			(r = we(z, e, r, r === null ? e.first : r.next, D, _, y, l, f)),
				m.set(_, r),
				(o = []),
				(x = []),
				(a = r.next);
			continue;
		}
		if ((rt(s, D, y), s.e.f & K && xe(s.e), s !== a)) {
			if (p !== void 0 && p.has(s)) {
				if (o.length < x.length) {
					var I = x[0],
						E;
					r = I.prev;
					var O = o[0],
						X = o[o.length - 1];
					for (E = 0; E < o.length; E += 1) be(o[E], I, t);
					for (E = 0; E < x.length; E += 1) p.delete(x[E]);
					k(e, O.prev, X.next),
						k(e, r, O),
						k(e, X, I),
						(a = I),
						(r = X),
						(y -= 1),
						(o = []),
						(x = []);
				} else
					p.delete(s),
						be(s, a, t),
						k(e, s.prev, s.next),
						k(e, s, r === null ? e.first : r.next),
						k(e, r, s),
						(r = s);
				continue;
			}
			for (o = [], x = []; a !== null && a.k !== _; )
				(c || !(a.e.f & K)) && (p ?? (p = new Set())).add(a), x.push(a), (a = a.next);
			if (a === null) continue;
			s = a;
		}
		o.push(s), (r = s), (a = s.next);
	}
	if (a !== null || p !== void 0) {
		for (var S = p === void 0 ? [] : he(p); a !== null; )
			(c || !(a.e.f & K)) && S.push(a), (a = a.next);
		var G = S.length;
		if (G > 0) {
			var j = u === 0 ? t : null;
			tt(e, S, j, m);
		}
	}
	(pe.first = e.first && e.first.e), (pe.last = r && r.e);
}
function rt(n, e, t, l) {
	Ve(n.v, e), (n.i = t);
}
function we(n, e, t, l, f, c, i, b, u, m) {
	var h = (u & We) !== 0,
		a = (u & Ye) === 0,
		p = h ? (a ? Xe(f) : me(f)) : f,
		r = u & Fe ? me(i) : i,
		o = { i: r, v: p, k: c, a: null, e: null, prev: t, next: l };
	try {
		return (
			(o.e = _e(() => b(n, p, r), V)),
			(o.e.prev = t && t.e),
			(o.e.next = l && l.e),
			t === null ? (e.first = o) : ((t.next = o), (t.e.next = o.e)),
			l !== null && ((l.prev = o), (l.e.prev = o.e)),
			o
		);
	} finally {
	}
}
function be(n, e, t) {
	for (
		var l = n.next ? n.next.e.nodes_start : t, f = e ? e.e.nodes_start : t, c = n.e.nodes_start;
		c !== l;

	) {
		var i = Pe(c);
		f.before(c), (c = i);
	}
}
function k(n, e, t) {
	e === null ? (n.first = t) : ((e.next = t), (e.e.next = t && t.e)),
		t !== null && ((t.prev = e), (t.e.prev = e && e.e));
}
var st = q(
	'<div class="border-y border-red-400 bg-red-100 text-red-700" role="alert"><div class="container py-2 [&amp;_p:last-of-type]:mb-0"><p class="text-center text-sm uppercase">Still Under Development</p></div></div>'
);
function ot(n) {
	var e = st();
	Z(n, e);
}
const Te = ne('1.26');
var nt = q(
	'<div class="mx-auto max-w-prose border border-blue-100 bg-blue-50 p-4 text-center [&amp;_p:last-of-type]:mb-0"><p> </p></div>'
);
function lt(n) {
	const e = ye(),
		t = () => Q(Te, '$dayzVersion', e);
	var l = nt(),
		f = v(l),
		c = v(f);
	d(f),
		d(l),
		U(() =>
			A(
				c,
				`This is the unmodified vanilla loot from version ${t() ?? ''} of the game. This table is intended
		to give you a general idea of where the standard loot is spawned, how much is spawned, the distribution,
		etc. It should help to give you an idea of where you should be looking for items.`
			)
		),
		Z(n, l);
}
var it = q(
		'<tr><td class="border border-gray-200 px-4 py-2 text-sm"> </td><td class="border border-gray-200 px-4 py-2 text-sm"> </td><td class="border border-gray-200 px-4 py-2 text-sm"> </td></tr>'
	),
	dt = q(
		'<div class="mb-4"><button class="accordion w-full rounded-md border border-gray-200 bg-gray-50 p-4 text-left text-sm font-medium uppercase text-black focus:outline-none"> </button> <div class="hidden bg-smoke p-4"><p class="mb-4 text-sm font-bold uppercase"> </p> <div class="overflow-x-auto bg-smoke"><table class="w-full min-w-max table-auto border-collapse"><thead><tr><th class="border border-gray-200 bg-gray-50 px-4 py-2 text-left text-sm font-semibold">Name</th><th class="border border-gray-200 bg-gray-50 px-4 py-2 text-left text-sm font-semibold">Nominal</th><th class="border border-gray-200 bg-gray-50 px-4 py-2 text-left text-sm font-semibold">Min</th></tr></thead><tbody></tbody></table></div></div></div>'
	),
	ct = q(
		'<!> <div class="container py-12"><div class="mb-12"><h1 class="text-center">Loot Table Overview</h1> <div class="mb-4 text-center"> </div> <div class="mx-auto mb-4 max-w-prose text-center [&amp;_p:last-of-type]:mb-0"><p><span class="block font-bold">Search the Loot Table</span> <span>Coming Soon</span></p></div> <!></div> <div class="mb-4 grid grid-cols-2 gap-4 rounded-md border border-purple-900 bg-purple-900 p-4 text-white"><div class="text-left"><p class="mb-0 text-sm font-bold uppercase"> </p></div> <div class="text-right"><p class="mb-0 text-sm font-bold uppercase"> </p></div></div> <div></div></div>',
		1
	);
function xt(n, e) {
	Ze(e, !1);
	const t = ye(),
		l = () => Q(i, '$grandTotal', t),
		f = () => Q(Te, '$dayzVersion', t),
		c = () => Q(b, '$accordionData', t);
	let i = ne(0),
		b = ne([]);
	const u = async () => {
			try {
				const w = await fetch('types.xml');
				if (!w.ok) throw new Error('Failed to load XML file');
				const g = await w.text();
				m(g);
			} catch (w) {
				console.error('Error:', w), alert('Error loading XML data. Check console for details.');
			}
		},
		m = (w) => {
			const R = new DOMParser().parseFromString(w, 'application/xml').getElementsByTagName('type'),
				M = {};
			let B = 0;
			Array.from(R).forEach((T) => {
				var J;
				const N = T.getElementsByTagName('category')[0],
					L = N ? N.getAttribute('name') : 'Uncategorized',
					H = parseInt(
						((J = T.getElementsByTagName('nominal')[0]) == null ? void 0 : J.textContent) || '0',
						10
					);
				M[L] || (M[L] = { items: [], totalNominal: 0 }),
					M[L].items.push(T),
					(M[L].totalNominal += H),
					(B += H);
			});
			const W = Object.entries(M)
				.map(([T, N]) => ({
					name: T,
					items: N.items,
					totalNominal: N.totalNominal,
					percentage: ((N.totalNominal / B) * 100).toFixed(1)
				}))
				.sort((T, N) =>
					T.name === 'Uncategorized'
						? 1
						: N.name === 'Uncategorized'
							? -1
							: T.name.localeCompare(N.name)
				);
			i.set(B), b.set(W);
		},
		h = (w) => {
			const g = w.target.closest('button').nextElementSibling;
			g && g.classList.toggle('hidden');
		},
		a = new Date('2024-12-23T00:00:00Z');
	let p = Ke('');
	function r() {
		const g = new Date() - a,
			F = Math.floor(g / (1e3 * 60 * 60 * 24)),
			R = Math.floor((g % (1e3 * 60 * 60 * 24)) / (1e3 * 60 * 60)),
			M = Math.floor((g % (1e3 * 60 * 60)) / (1e3 * 60));
		Je(
			p,
			`${F} Day${F !== 1 ? 's' : ''}, ${R} Hour${R !== 1 ? 's' : ''}, ${M} Minute${M !== 1 ? 's' : ''}`
		);
	}
	et(() => {
		u(), r();
		const w = setInterval(r, 6e4);
		return () => clearInterval(w);
	}),
		je();
	var o = ct(),
		x = qe(o);
	ot(x);
	var D = $(x, 2),
		_ = v(D),
		s = $(v(_), 2),
		y = v(s);
	d(s);
	var z = $(s, 4);
	lt(z), d(_);
	var I = $(_, 2),
		E = v(I),
		O = v(E),
		X = v(O);
	d(O), d(E);
	var S = $(E, 2),
		G = v(S),
		j = v(G, !0);
	d(G), d(S), d(I);
	var le = $(I, 2);
	ge(le, 5, c, ue, (w, g) => {
		let F = () => C(g).name,
			R = () => C(g).totalNominal,
			M = () => C(g).percentage,
			B = () => C(g).items;
		var W = dt(),
			T = v(W),
			N = v(T);
		d(T);
		var L = $(T, 2),
			H = v(L),
			J = v(H);
		d(H);
		var ie = $(H, 2),
			de = v(ie),
			ce = $(v(de));
		ge(ce, 5, B, ue, (Ee, ee) => {
			var te = it(),
				ae = v(te),
				Ne = v(ae, !0);
			U(() => A(Ne, C(ee).getAttribute('name'))), d(ae);
			var re = $(ae),
				$e = v(re, !0);
			U(() => {
				var Y;
				return A(
					$e,
					((Y = C(ee).getElementsByTagName('nominal')[0]) == null ? void 0 : Y.textContent) || '0'
				);
			}),
				d(re);
			var ve = $(re),
				De = v(ve, !0);
			U(() => {
				var Y;
				return A(
					De,
					((Y = C(ee).getElementsByTagName('min')[0]) == null ? void 0 : Y.textContent) || '0'
				);
			}),
				d(ve),
				d(te),
				Z(Ee, te);
		}),
			d(ce),
			d(de),
			d(ie),
			d(L),
			d(W),
			U(() => {
				A(N, `${F() ?? ''} (${B().length ?? ''} Items) ${M() ?? ''}%`),
					A(J, `Total Items: ${R() ?? ''}`);
			}),
			Qe('click', T, h),
			Z(w, W);
	}),
		d(le),
		d(D),
		U(() => {
			A(y, `Last Wipe: ${C(p) ?? ''}`), A(X, `Total Items: ${l() ?? ''}`), A(j, f());
		}),
		Z(n, o),
		Ge();
}
export { xt as component };
